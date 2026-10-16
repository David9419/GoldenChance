import { PROGRAMS } from "@/content";
import { SLOTS, WEEK } from "@/content/schedule";
import type { Level, SubjectId } from "@/content/types";
import { addDays, at, fromISO, type ISODate } from "./dates";
import type { AppData, AttendanceRecord, Holiday, Settings } from "./store";

/* -------------------------------------------------------------------------- */
/*  Séances : chaque créneau de l'emploi du temps devient une séance datée,    */
/*  rattachée à un chapitre du programme du niveau en cours.                  */
/* -------------------------------------------------------------------------- */

export type SessionKind = "cours" | "exercice" | "revision" | "controle" | "complet" | "libre";

export type Session = {
  key: string;
  date: ISODate;
  slot: number;
  start: string;
  end: string;
  subject: SubjectId;
  level: Level;
  /** null si le programme du niveau n'est pas encore disponible. */
  chapterId: string | null;
  kind: SessionKind;
  /** Sections du cours abordées pendant la séance (pour kind = "cours"). */
  sections: number[];
  /** Numéro de la séance dans la matière, pour ce niveau (1-based). */
  number: number;
  /** Nombre de séances de ce chapitre et position dans le chapitre. */
  chapterSessions: number;
  chapterSessionIndex: number;
};

export const KIND_LABEL: Record<SessionKind, string> = {
  cours: "Cours",
  exercice: "Exercice noté",
  revision: "Révisions",
  controle: "Contrôle",
  complet: "Cours + exercice",
  libre: "Séance libre",
};

export function sessionKey(date: ISODate, slot: number) {
  return `${date}#${slot}`;
}

export function levelAt(date: ISODate, s: Settings): Level | null {
  if (date < s.startDate) return null;
  if (date < s.premiereStart) return "seconde";
  if (date <= s.premiereEnd) return "premiere";
  if (date >= s.terminaleStart && date <= s.terminaleEnd) return "terminale";
  return null;
}

export function levelRange(level: Level, s: Settings): [ISODate, ISODate] {
  if (level === "seconde") return [s.startDate, addDays(s.premiereStart, -1)];
  if (level === "premiere") return [s.premiereStart, s.premiereEnd];
  return [s.terminaleStart, s.terminaleEnd];
}

export function holidayOn(date: ISODate, holidays: Holiday[]): Holiday | undefined {
  return holidays.find((h) => date >= h.start && date <= h.end);
}

export function isSchoolDay(date: ISODate, s: Settings) {
  const dow = fromISO(date).getDay();
  return dow >= 1 && dow <= 5 && !holidayOn(date, s.holidays) && levelAt(date, s) !== null;
}

/**
 * Plan d'un chapitre réparti sur `n` séances.
 * `withTest` : le contrôle n'a lieu qu'un chapitre sur deux (et au dernier),
 * pour ne pas en avoir tout le temps. Les autres chapitres finissent par un exercice noté.
 */
function chapterPlan(n: number, sectionCount: number, withTest: boolean): { kind: SessionKind; sections: number[] }[] {
  const all = Array.from({ length: sectionCount }, (_, i) => i);
  if (n <= 1) return [{ kind: "complet", sections: all }];
  const tail: SessionKind[] = withTest ? ["exercice", "controle"] : ["exercice"];
  if (n <= tail.length) return withTest ? [{ kind: "complet", sections: all }, { kind: "controle", sections: [] }] : [{ kind: "cours", sections: all }, { kind: "exercice", sections: [] }];
  const coursCount = Math.min(sectionCount, n - tail.length);
  const plan: { kind: SessionKind; sections: number[] }[] = [];
  for (let i = 0; i < coursCount; i++) {
    const from = Math.floor((i * sectionCount) / coursCount);
    const to = Math.floor(((i + 1) * sectionCount) / coursCount);
    plan.push({ kind: "cours", sections: all.slice(from, to) });
  }
  plan.push({ kind: "exercice", sections: [] });
  while (plan.length < n - (withTest ? 1 : 0)) plan.push({ kind: "revision", sections: all });
  if (withTest) plan.push({ kind: "controle", sections: [] });
  return plan;
}

/** Un contrôle tous les deux chapitres (chapitres 2, 4, 6, 8…). */
export function chapterHasTest(index: number, count: number) {
  return index % 2 === 1 || index === count - 1;
}

const cache = new Map<string, Session[]>();

/** Toutes les séances de toute la scolarité, triées chronologiquement. */
export function allSessions(s: Settings): Session[] {
  const cacheKey = JSON.stringify([s.startDate, s.premiereStart, s.premiereEnd, s.terminaleStart, s.terminaleEnd, s.holidays]);
  const hit = cache.get(cacheKey);
  if (hit) return hit;

  const out: Session[] = [];
  for (const level of ["seconde", "premiere", "terminale"] as Level[]) {
    const [from, to] = levelRange(level, s);
    const raw: Omit<Session, "chapterId" | "kind" | "sections" | "number" | "chapterSessions" | "chapterSessionIndex">[] = [];
    for (let d = from; d <= to; d = addDays(d, 1)) {
      if (!isSchoolDay(d, s)) continue;
      const day = WEEK[fromISO(d).getDay()];
      day?.forEach((subject, slot) => {
        if (!subject) return;
        raw.push({ key: sessionKey(d, slot), date: d, slot, start: SLOTS[slot].start, end: SLOTS[slot].end, subject, level });
      });
    }
    // Répartition des chapitres de chaque matière sur ses séances.
    const bySubject = new Map<SubjectId, typeof raw>();
    raw.forEach((r) => bySubject.set(r.subject, [...(bySubject.get(r.subject) ?? []), r]));
    const assigned = new Map<string, Session>();
    for (const [subject, list] of bySubject) {
      const chapters = PROGRAMS[level][subject];
      const N = list.length;
      const C = chapters.length;
      if (!C) {
        list.forEach((r, i) =>
          assigned.set(r.key, { ...r, chapterId: null, kind: "libre", sections: [], number: i + 1, chapterSessions: 1, chapterSessionIndex: 0 }),
        );
        continue;
      }
      for (let c = 0; c < C; c++) {
        const a = Math.floor((c * N) / C);
        const b = Math.floor(((c + 1) * N) / C);
        const block = list.slice(a, Math.max(b, a + 1)).filter(Boolean);
        const plan = chapterPlan(block.length, chapters[c].sections.length, chapterHasTest(c, C));
        block.forEach((r, i) =>
          assigned.set(r.key, {
            ...r,
            chapterId: chapters[c].id,
            kind: plan[i].kind,
            sections: plan[i].sections,
            number: a + i + 1,
            chapterSessions: block.length,
            chapterSessionIndex: i,
          }),
        );
      }
    }
    raw.forEach((r) => {
      const sess = assigned.get(r.key);
      if (sess) out.push(sess);
    });
  }
  cache.set(cacheKey, out);
  return out;
}

export function sessionsOn(date: ISODate, s: Settings) {
  return allSessions(s).filter((x) => x.date === date);
}

export function findSession(key: string, s: Settings) {
  return allSessions(s).find((x) => x.key === key);
}

/** Prochaine séance d'un chapitre (ou dernière passée) — pour afficher « prévu le … ». */
export function sessionsOfChapter(chapterId: string, s: Settings) {
  return allSessions(s).filter((x) => x.chapterId === chapterId);
}

/* -------------------------------------------------------------------------- */
/*  Présences                                                                  */
/* -------------------------------------------------------------------------- */

export type LiveStatus = "a-venir" | "en-cours" | "present" | "retard" | "absent" | "non-suivi";

/** Fenêtre de pointage : 15 min avant le début → fin du créneau. Retard après 10 min. */
export const CHECKIN_BEFORE_MIN = 15;
export const LATE_AFTER_MIN = 10;

export function trackingStart(data: AppData): ISODate {
  const created = data.profile?.createdAt?.slice(0, 10) ?? data.settings.startDate;
  return created > data.settings.startDate ? created : data.settings.startDate;
}

export function liveStatus(sess: Session, data: AppData, now = new Date()): { status: LiveStatus; record?: AttendanceRecord } {
  const record = data.attendance[sess.key];
  if (record) return { status: record.status, record };
  const start = at(sess.date, sess.start);
  const end = at(sess.date, sess.end);
  if (now < start) return { status: "a-venir" };
  if (now <= end) return { status: "en-cours" };
  if (sess.date < trackingStart(data)) return { status: "non-suivi" };
  return { status: "absent" };
}

export function canCheckIn(sess: Session, now = new Date()) {
  const start = at(sess.date, sess.start).getTime() - CHECKIN_BEFORE_MIN * 60_000;
  const end = at(sess.date, sess.end).getTime();
  return now.getTime() >= start && now.getTime() <= end;
}

export function checkInStatus(sess: Session, now = new Date()): "present" | "retard" {
  const late = at(sess.date, sess.start).getTime() + LATE_AFTER_MIN * 60_000;
  return now.getTime() > late ? "retard" : "present";
}

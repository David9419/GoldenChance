import { getChapter, PROGRAMS } from "@/content";
import { SLOTS, WEEK } from "@/content/schedule";
import type { Level, SubjectId } from "@/content/types";
import { addDays, at, fromISO, mondayOf, toISO, type ISODate } from "./dates";
import { jewishHolidays } from "./jewish";
import type { AppData, Assignment, AttendanceRecord, Holiday, Settings } from "./store";

/* -------------------------------------------------------------------------- */
/*  Séances : chaque créneau de l'emploi du temps devient une séance datée,    */
/*  rattachée à un chapitre du programme du niveau en cours.                  */
/*  Les contrôles remplacent un ou deux créneaux de cours.                    */
/* -------------------------------------------------------------------------- */

export type SessionKind = "cours" | "exercice" | "revision" | "complet" | "libre" | "controle";

export type TestInfo = {
  /** Chapitres évalués (1 pour un contrôle court, 2 pour un contrôle long). */
  chapterIds: string[];
  /** Contrôle sur deux créneaux consécutifs. */
  long: boolean;
  /** Contrôle donné par le professeur. */
  assignmentId?: string;
  /** Contexte de la note. */
  context: string;
};

export type Session = {
  key: string;
  date: ISODate;
  slot: number;
  /** Créneaux occupés (2 pour un contrôle long). */
  slots: number[];
  start: string;
  end: string;
  subject: SubjectId;
  level: Level;
  /** null si le programme du niveau n'est pas encore disponible. */
  chapterId: string | null;
  kind: SessionKind;
  /** Parties du cours étudiées pendant la séance. */
  sections: number[];
  /** Numéro de la séance dans la matière, pour ce niveau (1-based). */
  number: number;
  /** Nombre de séances de ce chapitre et position dans le chapitre. */
  chapterSessions: number;
  chapterSessionIndex: number;
  /** Présent si la séance est un contrôle. */
  test?: TestInfo;
};

/** Ce dont le calendrier a besoin : les réglages et les contrôles du professeur. */
export type CalendarSource = Pick<AppData, "settings" | "assignments">;

export const KIND_LABEL: Record<SessionKind, string> = {
  cours: "Leçon",
  exercice: "Exercice de synthèse",
  revision: "Révisions",
  complet: "Leçon + exercices",
  libre: "Séance libre",
  controle: "Contrôle",
};

/** Matières dont certains contrôles durent deux créneaux. */
const LONG_TEST_SUBJECTS: SubjectId[] = ["maths", "francais"];

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

/** Vacances et jours fériés réglés par la direction + fêtes et jeûnes juifs. */
export function allHolidays(s: Settings): Holiday[] {
  if (s.jewishHolidays === false) return s.holidays;
  return [...s.holidays, ...jewishHolidays(addDays(s.startDate, -7), s.terminaleEnd)];
}

export function holidayOn(date: ISODate, holidays: Holiday[]): Holiday | undefined {
  return holidays.find((h) => date >= h.start && date <= h.end);
}

export function isSchoolDay(date: ISODate, s: Settings) {
  const dow = fromISO(date).getDay();
  return dow >= 1 && dow <= 5 && !holidayOn(date, allHolidays(s)) && levelAt(date, s) !== null;
}

/** Plan d'un chapitre sur `n` séances : une leçon par partie → exercice de synthèse → révisions. */
function chapterPlan(n: number, sectionCount: number): { kind: SessionKind; sections: number[] }[] {
  const all = Array.from({ length: sectionCount }, (_, i) => i);
  if (n <= 1) return [{ kind: "complet", sections: all }];
  if (n === 2) return [{ kind: "complet", sections: all }, { kind: "exercice", sections: [] }];
  const coursCount = Math.min(sectionCount, n - 1);
  const plan: { kind: SessionKind; sections: number[] }[] = [];
  for (let i = 0; i < coursCount; i++) {
    const from = Math.floor((i * sectionCount) / coursCount);
    const to = Math.floor(((i + 1) * sectionCount) / coursCount);
    plan.push({ kind: "cours", sections: all.slice(from, to) });
  }
  plan.push({ kind: "exercice", sections: [] });
  while (plan.length < n) plan.push({ kind: "revision", sections: all });
  return plan;
}

type RawSlot = { key: string; date: ISODate; slot: number; subject: SubjectId; level: Level };

/** Répartit les chapitres de chaque matière sur ses créneaux de cours. */
function distribute(level: Level, raw: RawSlot[]): Map<string, Session> {
  const bySubject = new Map<SubjectId, RawSlot[]>();
  raw.forEach((r) => bySubject.set(r.subject, [...(bySubject.get(r.subject) ?? []), r]));
  const out = new Map<string, Session>();
  for (const [subject, list] of bySubject) {
    const chapters = PROGRAMS[level][subject];
    const N = list.length;
    const C = chapters.length;
    const base = (r: RawSlot) => ({ ...r, slots: [r.slot], start: SLOTS[r.slot].start, end: SLOTS[r.slot].end });
    if (!C) {
      list.forEach((r, i) =>
        out.set(r.key, { ...base(r), chapterId: null, kind: "libre", sections: [], number: i + 1, chapterSessions: 1, chapterSessionIndex: 0 }),
      );
      continue;
    }
    for (let c = 0; c < C; c++) {
      const a = Math.floor((c * N) / C);
      const b = Math.floor(((c + 1) * N) / C);
      const block = list.slice(a, Math.max(b, a + 1)).filter(Boolean);
      const plan = chapterPlan(block.length, chapters[c].sections.length);
      block.forEach((r, i) =>
        out.set(r.key, {
          ...base(r),
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
  return out;
}

type PlannedTest = { date: ISODate; slots: number[]; subject: SubjectId; chapterIds: string[]; assignmentId?: string };

/** Dernière date de cours de chaque chapitre. */
function chapterEnds(sessions: Iterable<Session>) {
  const end = new Map<string, ISODate>();
  const subject = new Map<string, SubjectId>();
  for (const s of sessions) {
    if (!s.chapterId || s.kind === "controle") continue;
    if (!end.has(s.chapterId) || end.get(s.chapterId)! < s.date) end.set(s.chapterId, s.date);
    subject.set(s.chapterId, s.subject);
  }
  return { end, subject };
}

/**
 * Contrôles automatiques : 3 à 4 par semaine (en alternance), matières et jours
 * différents, jamais moins de 3 jours après l'ouverture du compte (l'élève est
 * prévenu au moins 3 jours avant). Ils portent sur des chapitres déjà terminés.
 */
function planTests(level: Level, raw: RawSlot[], first: Map<string, Session>, s: Settings, profTests: PlannedTest[]): PlannedTest[] {
  // Rentrée en douceur : aucun contrôle pendant les premières semaines.
  const rampEnd = addDays(s.startDate, s.rampUpDays ?? 14);
  const fromAccount = s.testsFrom ?? addDays(s.startDate, 3);
  const testsFrom = fromAccount > rampEnd ? fromAccount : rampEnd;
  const { end, subject: subjectOf } = chapterEnds(first.values());
  const tested = new Set<string>(profTests.flatMap((t) => t.chapterIds));
  const used = new Set<string>(profTests.flatMap((t) => t.slots.map((sl) => sessionKey(t.date, sl))));
  const planned: PlannedTest[] = [...profTests];
  const rawByKey = new Map(raw.map((r) => [r.key, r]));

  const byWeek = new Map<string, RawSlot[]>();
  for (const r of raw) {
    const w = mondayOf(r.date);
    byWeek.set(w, [...(byWeek.get(w) ?? []), r]);
  }
  let weekIndex = 0;
  for (const [week, slots] of byWeek) {
    const target = s.testsPerWeek ?? 3;
    weekIndex++;
    const already = planned.filter((p) => mondayOf(p.date) === week);
    const usedSubjects = new Set<SubjectId>(already.map((p) => p.subject));
    const usedDays = new Set<string>(already.map((p) => p.date));
    let count = already.length;
    const pending = (subject: SubjectId, before: ISODate) =>
      [...end.entries()].filter(([id, d]) => d < before && !tested.has(id) && subjectOf.get(id) === subject).map(([id]) => id);

    const candidates = slots
      .filter((r) => r.date >= testsFrom && !used.has(r.key))
      .map((r) => ({ r, n: pending(r.subject, r.date).length }))
      .filter((c) => c.n > 0)
      // Les contrôles ont lieu de préférence en fin de semaine, quand la matière a le plus de chapitres à évaluer.
      .sort((a, b) => b.n - a.n || b.r.date.localeCompare(a.r.date) || a.r.slot - b.r.slot);

    const pick = (strictDays: boolean) => {
      for (const { r } of candidates) {
        if (count >= target) return;
        if (usedSubjects.has(r.subject) || used.has(r.key) || (strictDays && usedDays.has(r.date))) continue;
        const chapters = pending(r.subject, r.date);
        if (!chapters.length) continue;
        // Contrôle long (2 créneaux) en maths et en français, une fois sur deux, si le créneau voisin existe.
        const pairSlot = r.slot % 2 === 0 ? r.slot + 1 : r.slot - 1;
        const pairKey = sessionKey(r.date, pairSlot);
        const wantsLong = LONG_TEST_SUBJECTS.includes(r.subject) && (weekIndex + planned.length) % 2 === 0 && chapters.length >= 2;
        const canLong = wantsLong && rawByKey.has(pairKey) && !used.has(pairKey);
        const slotsTaken = canLong ? [Math.min(r.slot, pairSlot), Math.max(r.slot, pairSlot)] : [r.slot];
        const chapterIds = canLong ? chapters.slice(0, 2) : chapters.slice(0, 1);
        planned.push({ date: r.date, slots: slotsTaken, subject: r.subject, chapterIds });
        chapterIds.forEach((c) => tested.add(c));
        slotsTaken.forEach((sl) => used.add(sessionKey(r.date, sl)));
        usedSubjects.add(r.subject);
        usedDays.add(r.date);
        count++;
      }
    };
    pick(true);
    pick(false);
  }
  return planned;
}

const cache = new Map<string, Session[]>();

/** Contrôles placés par le professeur (date + créneau choisis). */
function profTestsOf(assignments: Assignment[], level: Level, s: Settings): PlannedTest[] {
  const [from, to] = levelRange(level, s);
  return assignments
    .filter((a) => a.kind === "controle" && a.slot !== undefined && a.dueDate >= from && a.dueDate <= to)
    .map((a) => ({
      date: a.dueDate,
      slots: a.long ? [a.slot!, a.slot! + 1] : [a.slot!],
      subject: a.subject,
      chapterIds: a.chapterId ? [a.chapterId] : [],
      assignmentId: a.id,
    }));
}

/** Toutes les séances de toute la scolarité, triées chronologiquement. */
export function allSessions(src: CalendarSource): Session[] {
  const s = src.settings;
  const profAssignments = src.assignments.filter((a) => a.kind === "controle" && a.slot !== undefined);
  const cacheKey = JSON.stringify([s.startDate, s.premiereStart, s.premiereEnd, s.terminaleStart, s.terminaleEnd, s.holidays, s.jewishHolidays, s.testsFrom, s.rampUpDays, s.testsPerWeek, profAssignments.map((a) => [a.id, a.dueDate, a.slot, a.long, a.chapterId, a.subject])]);
  const hit = cache.get(cacheKey);
  if (hit) return hit;

  const out: Session[] = [];
  for (const level of ["seconde", "premiere", "terminale"] as Level[]) {
    const [from, to] = levelRange(level, s);
    const raw: RawSlot[] = [];
    for (let d = from; d <= to; d = addDays(d, 1)) {
      if (!isSchoolDay(d, s)) continue;
      WEEK[fromISO(d).getDay()]?.forEach((subject, slot) => {
        if (subject) raw.push({ key: sessionKey(d, slot), date: d, slot, subject, level });
      });
    }
    if (!raw.length) continue;

    // 1) première répartition, 2) placement des contrôles, 3) répartition des cours sur les créneaux restants.
    const first = distribute(level, raw);
    const profTests = profTestsOf(src.assignments, level, s).filter((t) => t.slots.every((sl) => raw.some((r) => r.date === t.date && r.slot === sl)));
    const tests = PROGRAMS[level].maths.length ? planTests(level, raw, first, s, profTests) : profTests;
    const testKeys = new Set(tests.flatMap((t) => t.slots.map((sl) => sessionKey(t.date, sl))));
    const lessons = distribute(level, raw.filter((r) => !testKeys.has(r.key)));

    // 4) vérification : un contrôle ne porte que sur des chapitres terminés avant lui.
    const { end, subject: subjectOf } = chapterEnds(lessons.values());
    const testedFinal = new Set<string>();
    const testSessions: Session[] = [];
    for (const t of tests) {
      let chapterIds = t.chapterIds.filter((id) => (end.get(id) ?? "9999") < t.date);
      if (!t.assignmentId && chapterIds.length < t.chapterIds.length) {
        const replacement = [...end.entries()]
          .filter(([id, d]) => d < t.date && subjectOf.get(id) === t.subject && !testedFinal.has(id) && !chapterIds.includes(id))
          .map(([id]) => id);
        chapterIds = [...chapterIds, ...replacement].slice(0, t.chapterIds.length);
      }
      if (t.assignmentId) chapterIds = t.chapterIds;
      if (!chapterIds.length) {
        // Aucun chapitre évaluable : le créneau redevient une séance de révisions.
        const lastDone = [...end.entries()].filter(([id, d]) => d < t.date && subjectOf.get(id) === t.subject).pop()?.[0] ?? null;
        for (const sl of t.slots) {
          testSessions.push({
            key: sessionKey(t.date, sl), date: t.date, slot: sl, slots: [sl], start: SLOTS[sl].start, end: SLOTS[sl].end,
            subject: t.subject, level, chapterId: lastDone, kind: lastDone ? "revision" : "libre",
            sections: lastDone ? getChapter(lastDone)!.chapter.sections.map((_, i) => i) : [], number: 0, chapterSessions: 1, chapterSessionIndex: 0,
          });
        }
        continue;
      }
      chapterIds.forEach((c) => testedFinal.add(c));
      const first = t.slots[0];
      const last = t.slots[t.slots.length - 1];
      testSessions.push({
        key: sessionKey(t.date, first),
        date: t.date,
        slot: first,
        slots: t.slots,
        start: SLOTS[first].start,
        end: SLOTS[last].end,
        subject: t.subject,
        level,
        chapterId: chapterIds[0],
        kind: "controle",
        sections: [],
        number: 0,
        chapterSessions: 1,
        chapterSessionIndex: 0,
        test: {
          chapterIds,
          long: t.slots.length > 1,
          assignmentId: t.assignmentId,
          context: t.assignmentId ? `dv:${t.assignmentId}` : `ct:${t.date}:${first}`,
        },
      });
    }
    out.push(...lessons.values(), ...testSessions);
  }
  out.sort((a, b) => a.date.localeCompare(b.date) || a.slot - b.slot);
  cache.set(cacheKey, out);
  return out;
}

export function sessionsOn(date: ISODate, src: CalendarSource) {
  return allSessions(src).filter((x) => x.date === date);
}

/** Séance qui occupe un créneau (y compris la 2e heure d'un contrôle long). */
export function sessionAtSlot(date: ISODate, slot: number, src: CalendarSource) {
  return allSessions(src).find((x) => x.date === date && x.slots.includes(slot));
}

export function findSession(key: string, src: CalendarSource) {
  return allSessions(src).find((x) => x.key === key);
}

export function sessionsOfChapter(chapterId: string, src: CalendarSource) {
  return allSessions(src).filter((x) => x.chapterId === chapterId && x.kind !== "controle");
}

/** Toutes les séances de contrôle. */
export function scheduledTests(src: CalendarSource) {
  return allSessions(src).filter((x) => x.test);
}

/** La séance du contrôle qui évalue un chapitre (s'il y en a un). */
export function testSessionOf(chapterId: string, src: CalendarSource) {
  return allSessions(src).find((x) => x.test?.chapterIds.includes(chapterId));
}

/** Un niveau est ouvert à l'élève à partir de sa date de début. */
export function levelUnlocked(level: Level, s: Settings, today = toISO(new Date())) {
  if (level === "seconde") return true;
  return today >= levelRange(level, s)[0];
}

/** Une leçon n'est visible par l'élève qu'à partir du début de sa séance. */
export function sessionStarted(sess: Session, now = new Date()) {
  return at(sess.date, sess.start) <= now;
}

/** Parties d'un chapitre déjà vues en classe (leçons commencées). */
export function unlockedSections(chapterId: string, src: CalendarSource, now = new Date()) {
  const set = new Set<number>();
  for (const s of sessionsOfChapter(chapterId, src)) if (sessionStarted(s, now)) s.sections.forEach((i) => set.add(i));
  return set;
}

/**
 * Semaine affichée par défaut : la semaine en cours du lundi au samedi,
 * et dès le dimanche, la semaine qui arrive.
 */
export function defaultWeek(today: ISODate) {
  const dow = fromISO(today).getDay();
  return dow === 0 ? addDays(today, 1) : mondayOf(today);
}

/* -------------------------------------------------------------------------- */
/*  Devoirs automatiques : donnés à la fin de la journée (après le dernier     */
/*  cours), sur ce qui a été appris ce jour-là, pour le lendemain ou le        */
/*  surlendemain. 1 ou 2 par jour, jamais deux fois le même chapitre.          */
/* -------------------------------------------------------------------------- */

export type AutoHomework = {
  id: string;
  subject: SubjectId;
  level: Level;
  chapterId: string;
  /** Date et heure où le devoir est donné (fin de la journée de cours). */
  givenDate: ISODate;
  givenAt: string;
  dueDate: ISODate;
};

const hwCache = new Map<string, AutoHomework[]>();

export function autoHomework(src: CalendarSource): AutoHomework[] {
  const sessions = allSessions(src);
  const key = JSON.stringify([sessions.length, sessions[0]?.key, sessions[sessions.length - 1]?.key, src.settings.holidays, src.settings.jewishHolidays, src.settings.testsFrom, src.settings.rampUpDays, src.settings.startDate]);
  const hit = hwCache.get(key);
  if (hit) return hit;

  const days = [...new Set(sessions.map((s) => s.date))];
  const nextSchoolDay = (d: ISODate, n: number) => {
    let i = days.indexOf(d);
    i = Math.min(days.length - 1, i + n);
    return days[i];
  };
  const usedChapters = new Set<string>();
  const lastGiven = new Map<SubjectId, number>();
  // Pas de devoirs pendant la rentrée en douceur.
  const homeworkFrom = addDays(src.settings.startDate, src.settings.rampUpDays ?? 14);
  const out: AutoHomework[] = [];
  days.forEach((d, dayIndex) => {
    const daySessions = sessions.filter((s) => s.date === d);
    const learned = daySessions.filter((s) => (s.kind === "cours" || s.kind === "complet") && s.chapterId && getChapter(s.chapterId)?.chapter.homework?.length);
    if (!learned.length || dayIndex === days.length - 1 || d < homeworkFrom) return;
    const want = dayIndex % 3 === 1 ? 2 : 1;
    const testsSoon = new Set(sessions.filter((s) => s.test && s.date > d && s.date <= nextSchoolDay(d, 2)).map((s) => s.subject));
    const choices = learned
      .filter((s) => !usedChapters.has(s.chapterId!) && !testsSoon.has(s.subject))
      .sort((a, b) => (lastGiven.get(a.subject) ?? -9) - (lastGiven.get(b.subject) ?? -9));
    const givenAt = daySessions.reduce((m, s) => (s.end > m ? s.end : m), "00:00");
    const picked = new Set<SubjectId>();
    for (const s of choices) {
      if (picked.size >= want || picked.has(s.subject)) continue;
      picked.add(s.subject);
      usedChapters.add(s.chapterId!);
      lastGiven.set(s.subject, dayIndex);
      out.push({
        id: `hw:${d}:${s.subject}`,
        subject: s.subject,
        level: s.level,
        chapterId: s.chapterId!,
        givenDate: d,
        givenAt,
        dueDate: nextSchoolDay(d, picked.size === 1 ? 1 : 2),
      });
    }
  });
  hwCache.set(key, out);
  return out;
}

/** Le devoir est visible une fois donné (fin de la journée de cours). */
export function homeworkGiven(h: AutoHomework, now = new Date(), since?: string) {
  const given = at(h.givenDate, h.givenAt);
  // Les devoirs donnés avant l'ouverture du compte ne comptent pas.
  return given <= now && (!since || given >= new Date(since));
}

/* -------------------------------------------------------------------------- */
/*  Présences                                                                  */
/* -------------------------------------------------------------------------- */

export type LiveStatus = "a-venir" | "en-cours" | "present" | "retard" | "absent" | "non-suivi";

/** Fenêtre de pointage : 15 min avant le début → fin du créneau. Retard après 10 min. */
export const CHECKIN_BEFORE_MIN = 15;
export const LATE_AFTER_MIN = 10;

export function liveStatus(sess: Session, data: AppData, now = new Date()): { status: LiveStatus; record?: AttendanceRecord } {
  const record = data.attendance[sess.key];
  if (record) return { status: record.status, record };
  const start = at(sess.date, sess.start);
  const end = at(sess.date, sess.end);
  if (now < start) return { status: "a-venir" };
  if (now <= end) return { status: "en-cours" };
  // Les cours terminés avant la création du compte ne comptent pas.
  if (sess.date < data.settings.startDate || (data.profile && end < new Date(data.profile.createdAt))) return { status: "non-suivi" };
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

/** Durée d'une séance en minutes. */
export function sessionMinutes(sess: Session) {
  return (at(sess.date, sess.end).getTime() - at(sess.date, sess.start).getTime()) / 60_000;
}

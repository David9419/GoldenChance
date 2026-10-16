import { getChapter } from "@/content";
import type { SubjectId } from "@/content/types";
import { allSessions, autoHomework, homeworkGiven, type Session } from "./calendar";
import { addDays, at, toISO, type ISODate } from "./dates";
import { fmtNote, isReleased } from "./stats";
import type { AppData, Assignment, Attempt } from "./store";

export type AgendaItem = {
  id: string;
  date: ISODate;
  time?: string;
  endTime?: string;
  type: "controle" | "exercice" | "devoir";
  /** Ajouté par le professeur (et non automatiquement). */
  fromProf: boolean;
  subject: SubjectId;
  title: string;
  subtitle: string;
  href: string;
  status: "a-faire" | "en-retard" | "fait" | "en-correction" | "corrige" | "rendu" | "manque";
};

export function testTitle(s: Session) {
  return s.test?.chapterIds.map((id) => getChapter(id)?.chapter.title ?? "").join(" + ") ?? "";
}

export function attemptFor(data: AppData, context: string): Attempt | undefined {
  return data.attempts.find((a) => a.context === context && a.official);
}

/** Statut d'un contrôle pour l'élève. */
export function testStatus(s: Session, data: AppData, now = new Date()): AgendaItem["status"] {
  const att = attemptFor(data, s.test!.context);
  if (att) return isReleased(att, now) ? "corrige" : "en-correction";
  if (at(s.date, s.end) < now && !data.retakes[s.test!.context]) return "manque";
  return "a-faire";
}

/**
 * Contrôles, devoirs et exercices entre deux dates (incluses).
 * `reveal` = false pour l'élève : le sujet des exercices futurs reste caché.
 */
export function agendaItems(data: AppData, from: ISODate, to: ISODate, now = new Date(), reveal = true): AgendaItem[] {
  const out: AgendaItem[] = [];
  for (const s of allSessions(data)) {
    if (s.date < from || s.date > to) continue;
    const href = `/seance/${s.date}/${s.slot}`;
    if (s.test) {
      out.push({
        id: `ct-${s.key}`,
        date: s.date,
        time: s.start,
        endTime: s.end,
        type: "controle",
        fromProf: !!s.test.assignmentId,
        subject: s.subject,
        title: s.test.long ? "Contrôle long" : "Contrôle",
        subtitle: testTitle(s),
        href,
        status: testStatus(s, data, now),
      });
    } else if (s.kind === "exercice" && s.chapterId) {
      const started = at(s.date, s.start) <= now;
      const done = data.attempts.some((a) => a.context === `ex:${s.chapterId}`);
      out.push({
        id: `ex-${s.key}`,
        date: s.date,
        time: s.start,
        type: "exercice",
        fromProf: false,
        subject: s.subject,
        title: "Exercice de synthèse en classe",
        subtitle: reveal || started ? (getChapter(s.chapterId)?.chapter.title ?? "") : "Sujet dévoilé pendant le cours",
        href,
        status: done ? "fait" : at(s.date, s.end) < now ? "en-retard" : "a-faire",
      });
    }
  }
  // Devoirs automatiques (visibles une fois donnés en fin de journée).
  for (const h of autoHomework(data)) {
    if (h.dueDate < from || h.dueDate > to || !homeworkGiven(h, now, data.profile?.createdAt)) continue;
    const att = attemptFor(data, h.id);
    out.push({
      id: h.id,
      date: h.dueDate,
      type: "devoir",
      fromProf: false,
      subject: h.subject,
      title: "Devoir maison",
      subtitle: getChapter(h.chapterId)?.chapter.title ?? "",
      href: `/devoirs/auto/${encodeURIComponent(h.id)}`,
      status: att ? "fait" : h.dueDate < toISO(now) ? "en-retard" : "a-faire",
    });
  }
  // Devoirs du professeur (ses contrôles sont dans l'emploi du temps).
  for (const a of data.assignments) {
    if (a.kind === "controle" && a.slot !== undefined) continue;
    if (a.dueDate < from || a.dueDate > to) continue;
    const sub = data.submissions[a.id];
    const att = sub?.attemptId ? data.attempts.find((x) => x.id === sub.attemptId) : undefined;
    let status: AgendaItem["status"] = a.dueDate < toISO(now) ? "en-retard" : "a-faire";
    if (sub) {
      if (att) status = att.releaseAt && !isReleased(att, now) ? "en-correction" : "corrige";
      else status = sub.grade !== undefined ? "corrige" : "rendu";
    }
    out.push({
      id: `as-${a.id}`,
      date: a.dueDate,
      type: "devoir",
      fromProf: true,
      subject: a.subject,
      title: a.kind === "controle" ? "Contrôle (professeur)" : "Devoir du professeur",
      subtitle: a.title,
      href: `/devoirs/${a.id}`,
      status,
    });
  }
  return out.sort((a, b) => a.date.localeCompare(b.date) || (a.time ?? "99").localeCompare(b.time ?? "99"));
}

export function upcoming(data: AppData, today: ISODate, days = 7, reveal = true) {
  return agendaItems(data, today, addDays(today, days), new Date(), reveal);
}

export const STATUS_LABEL: Record<AgendaItem["status"], string> = {
  "a-faire": "À faire",
  "en-retard": "En retard",
  fait: "Fait",
  "en-correction": "En correction",
  corrige: "Corrigé",
  rendu: "Rendu",
  manque: "Manqué",
};

/** Statut d'un devoir du professeur (pour les badges). */
export function assignmentStatus(a: Assignment, data: AppData, now = new Date()) {
  const sub = data.submissions[a.id];
  if (!sub) return a.dueDate < toISO(now) ? { label: "Non rendu", tone: "danger" as const } : { label: "À faire", tone: "outline" as const };
  if (sub.attemptId) {
    const att = data.attempts.find((x) => x.id === sub.attemptId);
    if (att && !isReleased(att, now)) return { label: "En correction", tone: "warning" as const };
    return { label: att ? `Corrigé · ${fmtNote(att.score)}/20` : "Rendu", tone: "success" as const };
  }
  if (sub.grade === undefined) return { label: "À corriger", tone: "warning" as const };
  return { label: `Corrigé · ${fmtNote(sub.grade)}/${sub.outOf}`, tone: "success" as const };
}

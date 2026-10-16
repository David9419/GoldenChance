import { getChapter } from "@/content";
import type { SubjectId } from "@/content/types";
import { allSessions } from "./calendar";
import { addDays, toISO, type ISODate } from "./dates";
import { fmtNote, isReleased } from "./stats";
import type { AppData, Assignment } from "./store";

export type AgendaItem = {
  id: string;
  date: ISODate;
  time?: string;
  type: "controle" | "exercice" | "devoir";
  /** Ajouté par le professeur (et non par l'emploi du temps automatique). */
  fromProf: boolean;
  subject: SubjectId;
  title: string;
  subtitle: string;
  href: string;
  status: "a-faire" | "en-retard" | "fait" | "en-correction" | "corrige" | "rendu";
};

/** Contrôles, exercices notés et devoirs entre deux dates (incluses). */
export function agendaItems(data: AppData, from: ISODate, to: ISODate, now = new Date()): AgendaItem[] {
  const out: AgendaItem[] = [];
  for (const s of allSessions(data.settings)) {
    if (s.date < from || s.date > to) continue;
    const href = `/seance/${s.date}/${s.slot}`;
    if (s.test) {
      const ch = getChapter(s.test.chapterId);
      const att = data.attempts.find((a) => a.context === `ct:${s.test!.chapterId}` && a.official);
      out.push({
        id: `ct-${s.key}`,
        date: s.date,
        time: s.start,
        type: "controle",
        fromProf: false,
        subject: s.subject,
        title: "Contrôle",
        subtitle: ch?.chapter.title ?? "",
        href,
        status: !att ? "a-faire" : isReleased(att, now) ? "corrige" : "en-correction",
      });
    }
    if ((s.kind === "exercice" || s.kind === "complet") && s.chapterId) {
      const ch = getChapter(s.chapterId);
      const done = data.attempts.some((a) => a.context === `ex:${s.chapterId}`);
      out.push({
        id: `ex-${s.key}`,
        date: s.date,
        time: s.start,
        type: "exercice",
        fromProf: false,
        subject: s.subject,
        title: "Exercice noté",
        subtitle: ch?.chapter.title ?? "",
        href,
        status: done ? "fait" : "a-faire",
      });
    }
  }
  for (const a of data.assignments) {
    if (a.dueDate < from || a.dueDate > to) continue;
    const sub = data.submissions[a.id];
    const att = sub?.attemptId ? data.attempts.find((x) => x.id === sub.attemptId) : undefined;
    let status: AgendaItem["status"] = "a-faire";
    if (sub) {
      if (att) status = att.kind === "test" && !isReleased(att, now) ? "en-correction" : "corrige";
      else status = sub.grade !== undefined ? "corrige" : "rendu";
    }
    out.push({
      id: `as-${a.id}`,
      date: a.dueDate,
      type: a.kind === "controle" ? "controle" : "devoir",
      fromProf: true,
      subject: a.subject,
      title: a.kind === "controle" ? "Contrôle (professeur)" : "Devoir",
      subtitle: a.title,
      href: `/devoirs/${a.id}`,
      status,
    });
  }
  const today = toISO(now);
  for (const i of out) if (i.status === "a-faire" && i.date < today) i.status = "en-retard";
  return out.sort((a, b) => a.date.localeCompare(b.date) || (a.time ?? "99").localeCompare(b.time ?? "99"));
}

export function upcoming(data: AppData, today: ISODate, days = 7) {
  return agendaItems(data, today, addDays(today, days));
}

export const STATUS_LABEL: Record<AgendaItem["status"], string> = {
  "a-faire": "À faire",
  "en-retard": "En retard",
  fait: "Fait",
  "en-correction": "En correction",
  corrige: "Corrigé",
  rendu: "Rendu",
};

/** Statut d’un devoir du professeur (pour les badges). */
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


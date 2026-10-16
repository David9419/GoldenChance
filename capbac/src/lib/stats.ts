import { SUBJECT_IDS } from "@/content/subjects";
import type { Level, SubjectId } from "@/content/types";
import { allSessions, liveStatus, type Session } from "./calendar";
import { toISO } from "./dates";
import type { AppData, Attempt } from "./store";

export const COEF = { exercise: 1, test: 2 } as const;

export type GradeLine = {
  id: string;
  subject: SubjectId;
  level: Level;
  label: string;
  kind: "exercise" | "test" | "manual" | "devoir";
  /** Note ramenée sur 20. */
  score20: number;
  raw: string;
  coef: number;
  date: string;
  chapterId?: string;
  comment?: string;
  /** Pour les devoirs du professeur. */
  assignmentId?: string;
};

/** La correction d'un contrôle est-elle publiée ? */
export function isReleased(a: Attempt, now = new Date()) {
  return !a.releaseAt || new Date(a.releaseAt) <= now;
}

export function gradeLines(data: AppData, level?: Level, now = new Date()): GradeLine[] {
  const lines: GradeLine[] = [];
  const assignments = new Map(data.assignments.map((a) => [a.id, a]));
  for (const a of data.attempts) {
    if (!a.official || !isReleased(a, now)) continue;
    if (level && a.level !== level) continue;
    const asg = a.assignmentId ? assignments.get(a.assignmentId) : undefined;
    lines.push({
      id: a.id,
      subject: a.subject,
      level: a.level,
      label: asg ? asg.title : a.kind === "test" ? "Contrôle" : "Exercice noté",
      kind: asg ? "devoir" : a.kind,
      score20: a.score,
      raw: `${fmtNote(a.score)}/20`,
      coef: asg ? asg.coef : COEF[a.kind],
      date: a.date,
      chapterId: asg ? undefined : a.chapterId,
      assignmentId: asg?.id,
    });
  }
  for (const sub of Object.values(data.submissions)) {
    const asg = assignments.get(sub.assignmentId);
    if (!asg || sub.grade === undefined || !sub.outOf) continue;
    if (level && asg.level !== level) continue;
    lines.push({
      id: `sub-${asg.id}`,
      subject: asg.subject,
      level: asg.level,
      label: asg.title,
      kind: "devoir",
      score20: (sub.grade / sub.outOf) * 20,
      raw: `${fmtNote(sub.grade)}/${sub.outOf}`,
      coef: asg.coef,
      date: sub.gradedAt ?? sub.submittedAt,
      comment: sub.comment,
      assignmentId: asg.id,
    });
  }
  for (const g of data.manualGrades) {
    if (level && g.level !== level) continue;
    lines.push({
      id: g.id,
      subject: g.subject,
      level: g.level,
      label: g.label,
      kind: "manual",
      score20: (g.score / g.outOf) * 20,
      raw: `${fmtNote(g.score)}/${g.outOf}`,
      coef: g.coef,
      date: g.date,
      comment: g.comment,
    });
  }
  return lines.sort((a, b) => b.date.localeCompare(a.date));
}

export function weightedAverage(lines: GradeLine[]): number | null {
  const w = lines.reduce((s, l) => s + l.coef, 0);
  if (!w) return null;
  return lines.reduce((s, l) => s + l.score20 * l.coef, 0) / w;
}

export function subjectAverages(data: AppData, level?: Level) {
  const lines = gradeLines(data, level);
  const out = {} as Record<SubjectId, { avg: number | null; count: number; lines: GradeLine[] }>;
  for (const s of SUBJECT_IDS) {
    const ls = lines.filter((l) => l.subject === s);
    out[s] = { avg: weightedAverage(ls), count: ls.length, lines: ls };
  }
  return out;
}

export function generalAverage(data: AppData, level?: Level): number | null {
  const avgs = Object.values(subjectAverages(data, level))
    .map((x) => x.avg)
    .filter((x): x is number => x !== null);
  if (!avgs.length) return null;
  return avgs.reduce((a, b) => a + b, 0) / avgs.length;
}

export function fmtNote(n: number | null | undefined, digits = 1) {
  if (n === null || n === undefined || Number.isNaN(n)) return "—";
  return n.toFixed(digits).replace(".", ",").replace(/,0$/, "");
}

export function noteTone(n: number | null) {
  if (n === null) return "text-mist-500";
  if (n >= 14) return "text-emerald-300";
  if (n >= 10) return "text-brand-300";
  if (n >= 8) return "text-amber-300";
  return "text-rose-300";
}

export function appreciation(n: number | null) {
  if (n === null) return "Pas encore de note";
  if (n >= 17) return "Excellent travail, félicitations !";
  if (n >= 14) return "Très bon travail, continue ainsi.";
  if (n >= 12) return "Bon travail, des progrès visibles.";
  if (n >= 10) return "Ensemble correct, peut mieux faire.";
  if (n >= 8) return "Fragile : reprendre les cours et refaire les exercices.";
  return "Insuffisant : revoir les bases avec attention.";
}

/** Meilleure tentative et tentative officielle d'un chapitre. */
export function chapterResults(data: AppData, chapterId: string, kind: Attempt["kind"]) {
  const context = `${kind === "test" ? "ct" : "ex"}:${chapterId}`;
  const list = data.attempts.filter((a) => a.context === context);
  const official = list.find((a) => a.official) ?? null;
  const best = list.reduce<Attempt | null>((b, a) => (!b || a.score > b.score ? a : b), null);
  return { official, best, count: list.length };
}

/* -------------------------------------------------------------------------- */
/*  Assiduité                                                                  */
/* -------------------------------------------------------------------------- */

export type AttendanceStats = {
  total: number;
  present: number;
  retard: number;
  absent: number;
  justified: number;
  unjustified: number;
  /** Heures manquées. */
  missedHours: number;
  rate: number | null;
  streak: number;
  past: { session: Session; status: "present" | "retard" | "absent"; justified?: boolean; reason?: string }[];
};

export function attendanceStats(data: AppData, now = new Date()): AttendanceStats {
  const sessions = allSessions(data.settings);
  const past: AttendanceStats["past"] = [];
  for (const s of sessions) {
    const { status, record } = liveStatus(s, data, now);
    if (status === "present" || status === "retard" || status === "absent") {
      past.push({ session: s, status, justified: record?.justified, reason: record?.reason });
    }
  }
  const present = past.filter((p) => p.status === "present").length;
  const retard = past.filter((p) => p.status === "retard").length;
  const absentList = past.filter((p) => p.status === "absent");
  const justified = absentList.filter((p) => p.justified).length;
  const missedHours = absentList.reduce((h, p) => h + durationHours(p.session), 0);

  // Série : nombre de jours de cours consécutifs (en remontant) sans absence.
  const byDay = new Map<string, boolean>();
  for (const p of past) byDay.set(p.session.date, (byDay.get(p.session.date) ?? true) && p.status !== "absent");
  const days = [...byDay.keys()].sort().reverse();
  let streak = 0;
  for (const d of days) {
    if (d > toISO(now)) continue;
    if (byDay.get(d)) streak++;
    else break;
  }

  return {
    total: past.length,
    present,
    retard,
    absent: absentList.length,
    justified,
    unjustified: absentList.length - justified,
    missedHours,
    rate: past.length ? ((present + retard) / past.length) * 100 : null,
    streak,
    past: past.reverse(),
  };
}

export function durationHours(s: Session) {
  const [h1, m1] = s.start.split(":").map(Number);
  const [h2, m2] = s.end.split(":").map(Number);
  return (h2 * 60 + m2 - (h1 * 60 + m1)) / 60;
}

/** Contrôles rendus dont la correction n'est pas encore publiée. */
export function pendingCorrections(data: AppData, now = new Date()) {
  return data.attempts.filter((a) => a.kind === "test" && a.official && !isReleased(a, now));
}

/** Copies rédigées en attente de correction par le professeur. */
export function submissionsToGrade(data: AppData) {
  return Object.values(data.submissions).filter((s) => s.text !== undefined && s.grade === undefined);
}

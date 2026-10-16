import { getChapter } from "@/content";
import { SUBJECTS } from "@/content/subjects";
import { allSessions, liveStatus } from "./calendar";
import { addDays, formatHour, formatLong, toISO } from "./dates";
import { isReleased, submissionsToGrade } from "./stats";
import type { AppData, Role } from "./store";

export type Notif = {
  id: string;
  kind: "controle" | "devoir" | "note" | "absence" | "info";
  title: string;
  text: string;
  href: string;
  at: string;
  unread: boolean;
};

export function notificationsFor(role: Role, data: AppData, now = new Date()): Notif[] {
  const seen = data.seen[role] ?? "";
  const today = toISO(now);
  const soon = addDays(today, 2);
  const out: Notif[] = [];

  // Contrôles à venir (aujourd'hui, demain, après-demain)
  for (const s of allSessions(data.settings)) {
    if (!s.test || s.date < today || s.date > soon) continue;
    const ch = getChapter(s.test.chapterId);
    out.push({
      id: `ct-${s.key}`,
      kind: "controle",
      title: `Contrôle de ${SUBJECTS[s.subject].name}`,
      text: `${formatLong(s.date)} à ${formatHour(s.start)} · ${ch?.chapter.title ?? ""}`,
      href: `/seance/${s.date}/${s.slot}`,
      at: s.date,
      unread: false,
    });
  }
  for (const a of data.assignments) {
    if (a.dueDate < today) continue;
    const done = !!data.submissions[a.id];
    if (role === "eleve" && done) continue;
    out.push({
      id: `as-${a.id}`,
      kind: a.kind === "controle" ? "controle" : "devoir",
      title: `${a.kind === "controle" ? "Contrôle" : "Devoir"} · ${SUBJECTS[a.subject].short}`,
      text: `${a.title} — pour le ${formatLong(a.dueDate)}`,
      href: `/devoirs/${a.id}`,
      at: a.createdAt,
      unread: a.createdAt > seen,
    });
  }

  if (role === "eleve") {
    for (const at of data.attempts) {
      if (at.kind !== "test" || !at.official || !at.releaseAt || !isReleased(at, now)) continue;
      out.push({
        id: `rel-${at.id}`,
        kind: "note",
        title: "Contrôle corrigé",
        text: `${getChapter(at.chapterId)?.chapter.title ?? "Contrôle"} : ta note est disponible`,
        href: "/notes",
        at: at.releaseAt,
        unread: at.releaseAt > seen,
      });
    }
    for (const sub of Object.values(data.submissions)) {
      if (!sub.gradedAt) continue;
      const a = data.assignments.find((x) => x.id === sub.assignmentId);
      out.push({
        id: `gr-${sub.assignmentId}`,
        kind: "note",
        title: "Copie corrigée",
        text: `${a?.title ?? "Devoir"} : ${sub.grade}/${sub.outOf}`,
        href: `/devoirs/${sub.assignmentId}`,
        at: sub.gradedAt,
        unread: sub.gradedAt > seen,
      });
    }
  } else {
    for (const sub of submissionsToGrade(data)) {
      const a = data.assignments.find((x) => x.id === sub.assignmentId);
      out.push({
        id: `tg-${sub.assignmentId}`,
        kind: "devoir",
        title: "Copie à corriger",
        text: a?.title ?? "Devoir rendu",
        href: `/devoirs/${sub.assignmentId}`,
        at: sub.submittedAt,
        unread: sub.submittedAt > seen,
      });
    }
    for (const s of allSessions(data.settings)) {
      if (s.date !== today) continue;
      const st = liveStatus(s, data, now);
      if (st.status === "absent" && !st.record?.justified) {
        out.push({
          id: `ab-${s.key}`,
          kind: "absence",
          title: "Absence non justifiée",
          text: `${SUBJECTS[s.subject].name} · ${formatHour(s.start)} – ${formatHour(s.end)}`,
          href: "/absences",
          at: `${s.date}T${s.end}`,
          unread: true,
        });
      }
    }
  }
  return out.sort((a, b) => Number(b.unread) - Number(a.unread) || b.at.localeCompare(a.at)).slice(0, 20);
}

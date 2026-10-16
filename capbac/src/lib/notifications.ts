import { getChapter } from "@/content";
import { SUBJECTS } from "@/content/subjects";
import { testTitle } from "./agenda";
import { allSessions, autoHomework, homeworkGiven, liveStatus } from "./calendar";
import { addDays, at, formatHour, formatLong, toISO } from "./dates";
import { isReleased, submissionsToGrade } from "./stats";
import type { AppData, Role } from "./store";

export type Notif = {
  id: string;
  kind: "controle" | "devoir" | "note" | "absence" | "info" | "alerte";
  title: string;
  text: string;
  href: string;
  at: string;
  unread: boolean;
  urgent?: boolean;
};

export function notificationsFor(role: Role, data: AppData, now = new Date()): Notif[] {
  const seen = data.seen[role] ?? "";
  const today = toISO(now);
  const out: Notif[] = [];
  const sessions = allSessions(data);

  // Contrôles annoncés (2 semaines à l'avance) et alerte 1 h avant.
  for (const s of sessions) {
    if (!s.test || s.date < today || s.date > addDays(today, 14)) continue;
    const start = at(s.date, s.start);
    const minutes = (start.getTime() - now.getTime()) / 60_000;
    if (at(s.date, s.end) < now) continue;
    const announced = at(addDays(s.date, -14), "08:00").toISOString();
    const soon = minutes <= 60;
    out.push({
      id: `ct-${s.key}`,
      kind: "controle",
      title: soon ? (minutes > 0 ? `Contrôle de ${SUBJECTS[s.subject].name} dans ${Math.ceil(minutes)} min` : `Contrôle de ${SUBJECTS[s.subject].name} en cours`) : `Contrôle de ${SUBJECTS[s.subject].name}`,
      text: `${formatLong(s.date)} · ${formatHour(s.start)} – ${formatHour(s.end)} · ${testTitle(s)}`,
      href: `/seance/${s.date}/${s.slot}`,
      at: soon ? new Date(start.getTime() - 3_600_000).toISOString() : announced,
      unread: soon ? new Date(start.getTime() - 3_600_000).toISOString() > seen : announced > seen,
      urgent: soon,
    });
  }

  if (role === "eleve") {
    for (const h of autoHomework(data)) {
      if (!homeworkGiven(h, now, data.profile?.createdAt) || h.dueDate < today) continue;
      if (data.attempts.some((a) => a.context === h.id)) continue;
      const given = at(h.givenDate, h.givenAt).toISOString();
      out.push({
        id: h.id,
        kind: "devoir",
        title: `Devoir de ${SUBJECTS[h.subject].name}`,
        text: `${getChapter(h.chapterId)?.chapter.title ?? ""} — pour le ${formatLong(h.dueDate)}`,
        href: `/devoirs/auto/${encodeURIComponent(h.id)}`,
        at: given,
        unread: given > seen,
      });
    }
    for (const a of data.assignments) {
      if (a.dueDate < today || data.submissions[a.id]) continue;
      out.push({
        id: `as-${a.id}`,
        kind: a.kind === "controle" ? "controle" : "devoir",
        title: `${a.kind === "controle" ? "Contrôle" : "Devoir"} du professeur · ${SUBJECTS[a.subject].short}`,
        text: `${a.title} — ${formatLong(a.dueDate)}`,
        href: a.kind === "controle" && a.slot !== undefined ? "/agenda" : `/devoirs/${a.id}`,
        at: a.createdAt,
        unread: a.createdAt > seen,
      });
    }
    for (const att of data.attempts) {
      if (!att.official || !att.releaseAt || !isReleased(att, now)) continue;
      out.push({
        id: `rel-${att.id}`,
        kind: "note",
        title: "Contrôle corrigé",
        text: `${getChapter(att.chapterId)?.chapter.title ?? "Contrôle"} : ta note est disponible`,
        href: "/notes",
        at: att.releaseAt,
        unread: att.releaseAt > seen,
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
    for (const act of data.activity) {
      if (act.type !== "alerte" || act.at.slice(0, 10) !== today) continue;
      out.push({ id: act.id, kind: "alerte", title: "Alerte anti-triche", text: act.text, href: "/", at: act.at, unread: act.at > seen, urgent: true });
    }
    for (const s of sessions) {
      if (s.date !== today) continue;
      const st = liveStatus(s, data, now);
      if (st.status === "absent" && !st.record?.justified) {
        out.push({
          id: `ab-${s.key}`,
          kind: "absence",
          title: "Absence non justifiée",
          text: `${SUBJECTS[s.subject].name} · ${formatHour(s.start)} – ${formatHour(s.end)}`,
          href: "/absences",
          at: at(s.date, s.end).toISOString(),
          unread: at(s.date, s.end).toISOString() > seen,
        });
      }
    }
  }
  return out.sort((a, b) => Number(!!b.urgent) - Number(!!a.urgent) || Number(b.unread) - Number(a.unread) || b.at.localeCompare(a.at)).slice(0, 25);
}

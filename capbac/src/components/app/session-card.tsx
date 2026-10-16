"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, Fingerprint } from "lucide-react";
import { useRole } from "@/lib/auth";
import { toast } from "./toast";
import { Button } from "@/components/ui/button";
import { getChapter } from "@/content";
import { SUBJECTS } from "@/content/subjects";
import { testTitle } from "@/lib/agenda";
import { canCheckIn, checkInStatus, KIND_LABEL, liveStatus, sessionStarted, type Session } from "@/lib/calendar";
import { formatHour } from "@/lib/dates";
import { actions, type AppData } from "@/lib/store";
import { cn } from "@/lib/utils";
import { StatusPill } from "./common";
import { SubjectBadge } from "./subject-icon";

export function sessionHref(s: Session) {
  return `/seance/${s.date}/${s.slot}`;
}

export function checkIn(s: Session) {
  const status = checkInStatus(s);
  actions.setAttendance(s.key, { status, at: new Date().toISOString(), by: "eleve" }, `${SUBJECTS[s.subject].name} ${formatHour(s.start)}`);
  toast(status === "present" ? "Présence enregistrée ✓" : "Présence enregistrée (en retard)", status === "present" ? "success" : "warning");
}

export function CheckInButton({ session, data, now, className }: { session: Session; data: AppData; now: Date; className?: string }) {
  const role = useRole();
  const { status } = liveStatus(session, data, now);
  if (role !== "eleve") return null;
  if (status !== "en-cours" && status !== "a-venir") return null;
  if (!canCheckIn(session, now)) return null;
  return (
    <Button
      size="sm"
      variant="success"
      className={cn("animate-pulse-ring", className)}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        checkIn(session);
      }}
    >
      <Fingerprint /> Je suis présent
    </Button>
  );
}

/** Ligne de séance (tableau de bord, journée). */
export function SessionRow({ session, data, now, index = 0 }: { session: Session; data: AppData; now: Date; index?: number }) {
  const meta = SUBJECTS[session.subject];
  const ref = session.chapterId ? getChapter(session.chapterId) : undefined;
  const { status, record } = liveStatus(session, data, now);
  const live = status === "en-cours";
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <Link
        href={sessionHref(session)}
        className={cn(
          "group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-3.5 transition-all hover:-translate-y-0.5 hover:bg-fg/[0.05] sm:p-4",
          live ? "border-brand-400/40 bg-brand-500/[0.08]" : "border-border bg-fg/[0.02]",
        )}
      >
        <span className="absolute inset-y-0 left-0 w-1" style={{ background: meta.color }} />
        <div className="w-14 shrink-0 text-center">
          <p className="font-display text-sm font-bold">{formatHour(session.start)}</p>
          <p className="text-xs text-mist-500">{formatHour(session.end)}</p>
        </div>
        <SubjectBadge subject={session.subject} size="sm" />
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-2 text-sm font-semibold">
            {meta.name}
            <span className="hidden rounded-md px-1.5 py-0.5 text-[0.65rem] font-bold sm:inline" style={{ background: `${meta.color}22`, color: meta.color }}>
              {session.test ? "Contrôle" : KIND_LABEL[session.kind]}
            </span>
            {session.test?.long && (
              <span className="rounded-md bg-amber-500/20 px-1.5 py-0.5 text-[0.65rem] font-bold text-amber-300">2 h</span>
            )}
          </p>
          <p className="truncate text-xs text-mist-500">
            {session.test ? testTitle(session) : !sessionStarted(session, now) ? "Leçon dévoilée au début du cours" : ref ? ref.chapter.title : "Programme bientôt disponible"}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <StatusPill status={status} justified={record?.justified} className="hidden md:inline-flex" />
          <ChevronRight className="size-4 text-mist-500 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}

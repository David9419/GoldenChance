"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Activity as ActivityIcon, ArrowRight, CalendarClock, ClipboardPen, Hourglass, ListTodo, Plus, Radio, Trophy, UserX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getChapter } from "@/content";
import { LEVELS, SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import { upcoming } from "@/lib/agenda";
import { allSessions, KIND_LABEL, levelAt, liveStatus } from "@/lib/calendar";
import { at, formatHour, mondayOf, addDays, toISO } from "@/lib/dates";
import { attendanceStats, chapterResults, fmtNote, generalAverage, noteTone, pendingCorrections, subjectAverages, submissionsToGrade } from "@/lib/stats";
import type { AppData, Role } from "@/lib/store";
import { useNow } from "@/lib/use-now";
import { cn } from "@/lib/utils";
import { AgendaRow } from "./agenda-item";
import { CountUp, Ring, Stagger, StaggerItem, StatusPill } from "./common";
import { QuoteCard } from "./quote-card";
import { SubjectBadge } from "./subject-icon";
import { UserAvatar } from "./user-avatar";

function timeAgo(iso: string, now: Date) {
  const s = Math.max(0, Math.round((now.getTime() - new Date(iso).getTime()) / 1000));
  if (s < 60) return "à l’instant";
  if (s < 3600) return `il y a ${Math.floor(s / 60)} min`;
  if (s < 86400) return `il y a ${Math.floor(s / 3600)} h`;
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

const ACT_COLOR: Record<string, string> = {
  presence: "bg-emerald-400",
  exercice: "bg-brand-400",
  controle: "bg-amber-400",
  devoir: "bg-fuchsia-400",
  note: "bg-cyan-400",
  absence: "bg-rose-400",
  systeme: "bg-mist-500",
};

export function StaffDashboard({ data, role }: { data: AppData; role: Role }) {
  const now = useNow(15_000);
  const today = toISO(now);
  const level = levelAt(today, data.settings) ?? "seconde";
  const p = data.profile!;
  const sessions = allSessions(data);
  const todaySessions = sessions.filter((s) => s.date === today);
  const current = todaySessions.find((s) => at(s.date, s.start) <= now && now <= at(s.date, s.end));
  const avg = generalAverage(data, level, );
  const att = attendanceStats(data, now);
  const subj = subjectAverages(data, level);
  const weekStart = mondayOf(today);
  const weekTests = sessions.filter((s) => s.test && s.date >= weekStart && s.date <= addDays(weekStart, 6)).length + data.assignments.filter((a) => a.kind === "controle" && a.dueDate >= weekStart && a.dueDate <= addDays(weekStart, 6)).length;
  const toGrade = submissionsToGrade(data).length;
  const pending = pendingCorrections(data, now).length;
  const next = upcoming(data, today, 7).filter((i) => i.status === "a-faire" || i.status === "en-retard").slice(0, 6);

  // Fil d'activité : actions enregistrées + absences constatées aujourd'hui.
  const absencesToday = todaySessions
    .map((s) => ({ s, st: liveStatus(s, data, now) }))
    .filter((x) => x.st.status === "absent" && !x.st.record)
    .map((x) => ({ id: `abs-${x.s.key}`, at: at(x.s.date, x.s.end).toISOString(), type: "absence", text: `Absent (non pointé) — ${SUBJECTS[x.s.subject].name} ${formatHour(x.s.start)}` }));
  const feed = [...absencesToday, ...data.activity].sort((a, b) => b.at.localeCompare(a.at)).slice(0, 14);

  return (
    <div className="flex flex-col gap-6">
      {/* En-tête élève */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-fg/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.3),rgba(192,38,211,0.14)_50%,var(--surface))] p-6 sm:p-8"
      >
        <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
          <UserAvatar profile={p} className="size-20 text-2xl ring-4" />
          <div className="flex-1">
            <p className="text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">{role === "directeur" ? "Suivi de direction" : "Suivi pédagogique"}</p>
            <h1 className="mt-1 font-display text-3xl font-bold">
              {p.firstName} {p.lastName}
            </h1>
            <p className="mt-1 text-mist-300">
              {LEVELS[level].name} · {LEVELS[level].tagline}
            </p>
          </div>
          <div className="glass flex min-w-[260px] items-center gap-3 rounded-2xl p-4">
            <span className="relative flex size-3">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative size-3 rounded-full bg-emerald-400" />
            </span>
            {current ? (
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-mist-500 uppercase">En ce moment</p>
                <p className="truncate font-semibold">
                  {SUBJECTS[current.subject].name} · {formatHour(current.start)}–{formatHour(current.end)}
                </p>
                <StatusPill status={liveStatus(current, data, now).status} justified={liveStatus(current, data, now).record?.justified} className="mt-1" />
              </div>
            ) : (
              <div>
                <p className="text-xs font-bold text-mist-500 uppercase">En ce moment</p>
                <p className="font-semibold">Pas de cours</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <Stagger className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <StaggerItem>
          <Card className="flex h-full items-center gap-4 p-5">
            <Ring value={avg} max={20} size={76} stroke={8}>
              <span className={cn("font-display text-base font-bold", noteTone(avg))}>{fmtNote(avg)}</span>
            </Ring>
            <div>
              <p className="text-xs font-bold tracking-wider text-mist-500 uppercase">Moyenne</p>
              <p className="text-sm text-mist-300">générale /20</p>
            </div>
          </Card>
        </StaggerItem>
        <StaggerItem>
          <Card className="flex h-full items-center gap-4 p-5">
            <Ring value={att.rate} size={76} stroke={8} color="#34d399">
              <span className="font-display text-base font-bold text-emerald-300">{att.rate === null ? "—" : `${Math.round(att.rate)}%`}</span>
            </Ring>
            <div>
              <p className="text-xs font-bold tracking-wider text-mist-500 uppercase">Assiduité</p>
              <p className="text-sm text-mist-300">{att.retard} retard{att.retard > 1 ? "s" : ""}</p>
            </div>
          </Card>
        </StaggerItem>
        <StaggerItem>
          <Card className="h-full p-5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300">
              <UserX className="size-5" />
            </span>
            <p className="mt-3 font-display text-3xl font-bold">
              <CountUp value={att.unjustified} />
            </p>
            <p className="text-sm text-mist-300">absence{att.unjustified > 1 ? "s" : ""} non justifiée{att.unjustified > 1 ? "s" : ""}</p>
          </Card>
        </StaggerItem>
        <StaggerItem>
          <Card className="h-full p-5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
              <Trophy className="size-5" />
            </span>
            <p className="mt-3 font-display text-3xl font-bold">
              <CountUp value={weekTests} />
            </p>
            <p className="text-sm text-mist-300">contrôle{weekTests > 1 ? "s" : ""} cette semaine</p>
          </Card>
        </StaggerItem>
      </Stagger>

      {role === "prof" && (
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link href="/devoirs">
              <Plus /> Donner un devoir ou un contrôle
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/devoirs">
              <ClipboardPen /> Copies à corriger
              <Badge variant={toGrade ? "warning" : "outline"}>{toGrade}</Badge>
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/devoirs">
              <Hourglass /> Contrôles en correction
              <Badge variant="outline">{pending}</Badge>
            </Link>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CalendarClock className="size-5 text-brand-300" /> Journée de l’élève
            </CardTitle>
            <Button asChild variant="ghost" size="sm">
              <Link href="/emploi-du-temps">
                Emploi du temps <ArrowRight />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {todaySessions.length ? (
              todaySessions.map((s, i) => {
                const st = liveStatus(s, data, now);
                const ch = s.chapterId ? getChapter(s.chapterId) : undefined;
                return (
                  <motion.div key={s.key} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link href={`/seance/${s.date}/${s.slot}`} className="flex items-center gap-3 rounded-xl border border-border bg-fg/[0.02] p-3 hover:bg-fg/[0.05]">
                      <span className="w-12 text-center text-xs font-bold">{formatHour(s.start)}</span>
                      <SubjectBadge subject={s.subject} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold">
                          {SUBJECTS[s.subject].name} <span className="text-xs font-medium text-mist-500">· {KIND_LABEL[s.kind]}</span>
                          {s.test && <span className="ml-1.5 rounded-md bg-amber-500/20 px-1.5 text-[0.65rem] font-bold text-amber-300">Contrôle</span>}
                        </p>
                        <p className="truncate text-xs text-mist-500">{ch?.chapter.title}</p>
                      </div>
                      <StatusPill status={st.status} justified={st.record?.justified} />
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <p className="py-8 text-center text-sm text-mist-500">Pas de cours aujourd’hui.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ActivityIcon className="size-5 text-emerald-300" /> Activité en direct
              <Radio className="size-4 animate-pulse text-emerald-300" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {feed.length ? (
              <ol className="relative flex flex-col gap-3 border-l border-border pl-5">
                <AnimatePresence initial={false}>
                  {feed.map((f) => (
                    <motion.li key={f.id} layout initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="relative">
                      <span className={cn("absolute top-1.5 -left-[25px] size-2.5 rounded-full ring-4 ring-ink-900", ACT_COLOR[f.type] ?? "bg-mist-500")} />
                      <p className="text-sm">{f.text}</p>
                      <p className="text-xs text-mist-500">{timeAgo(f.at, now)}</p>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ol>
            ) : (
              <p className="py-8 text-center text-sm text-mist-500">L’activité de l’élève (présences, exercices, contrôles) s’affichera ici en temps réel.</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="size-5 text-amber-300" /> Moyennes et progression
            </CardTitle>
            <Button asChild variant="ghost" size="sm">
              <Link href="/notes">
                Bulletin <ArrowRight />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {SUBJECT_IDS.map((id) => {
              const chapters = [...new Set(sessions.filter((s) => s.level === level && s.subject === id).map((s) => s.chapterId).filter(Boolean))] as string[];
              const done = chapters.filter((c) => chapterResults(data, c, "exercise").count > 0).length;
              return (
                <div key={id} className="flex items-center gap-3">
                  <SubjectBadge subject={id} size="sm" />
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-semibold">{SUBJECTS[id].name}</span>
                      <span className={cn("font-bold", noteTone(subj[id].avg))}>{fmtNote(subj[id].avg)}</span>
                    </div>
                    <Progress value={chapters.length ? (done / chapters.length) * 100 : 0} className="mt-1.5 h-1.5" indicatorStyle={{ background: SUBJECTS[id].gradient }} />
                    <p className="mt-1 text-[0.7rem] text-mist-500">
                      {done}/{chapters.length} chapitres travaillés · {subj[id].count} note{subj[id].count > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <ListTodo className="size-5 text-brand-300" /> À venir (7 jours)
            </CardTitle>
            <Button asChild variant="ghost" size="sm">
              <Link href="/agenda">
                Agenda <ArrowRight />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {next.length ? next.map((i, k) => <AgendaRow key={i.id} item={i} index={k} />) : <p className="py-8 text-center text-sm text-mist-500">Rien de prévu.</p>}
          </CardContent>
        </Card>
      </div>

      <QuoteCard date={now} />
    </div>
  );
}

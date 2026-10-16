"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BookOpenCheck, CalendarClock, Flame, GraduationCap, ListTodo, PartyPopper, Sparkles, Target, Trophy } from "lucide-react";
import { AgendaRow } from "@/components/app/agenda-item";
import { upcoming as upcomingItems } from "@/lib/agenda";
import { CountUp, Ring, Stagger, StaggerItem, StatusPill } from "@/components/app/common";
import { QuoteCard } from "@/components/app/quote-card";
import { CheckInButton, SessionRow, sessionHref } from "@/components/app/session-card";
import { SubjectBadge } from "@/components/app/subject-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getChapter } from "@/content";
import { LEVELS, SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import { allSessions, KIND_LABEL, levelAt, liveStatus } from "@/lib/calendar";
import { at, daysBetween, formatFull, formatHour, formatLong, toISO } from "@/lib/dates";
import { attendanceStats, chapterResults, fmtNote, generalAverage, gradeLines, noteTone, subjectAverages } from "@/lib/stats";
import { useData } from "@/lib/store";
import { useNow } from "@/lib/use-now";

export function StudentDashboard() {
  const data = useData();
  const now = useNow();
  if (!data?.profile) return null;
  const s = data.settings;
  const today = toISO(now);
  const level = levelAt(today, s) ?? "seconde";
  const sessions = allSessions(s);

  const todaySessions = sessions.filter((x) => x.date === today);
  const upcoming = sessions.find((x) => at(x.date, x.end) > now);
  const nextDaySessions = todaySessions.length ? todaySessions : upcoming ? sessions.filter((x) => x.date === upcoming.date) : [];
  const current = todaySessions.find((x) => at(x.date, x.start) <= now && now <= at(x.date, x.end));
  const focus = current ?? upcoming;

  const avg = generalAverage(data, level);
  const att = attendanceStats(data, now);
  const recent = gradeLines(data).slice(0, 5);
  const subjAvg = subjectAverages(data, level);
  const todo = upcomingItems(data, today, 6)
    .filter((i) => i.status === "a-faire" || i.status === "en-retard")
    .slice(0, 6);

  const hour = now.getHours();
  const hello = hour < 5 ? "Bonne nuit" : hour < 18 ? "Bonjour" : "Bonsoir";
  const bacDays = daysBetween(today, s.bacFrancaisDate);
  const premiereDays = daysBetween(today, s.premiereStart);

  return (
    <div className="flex flex-col gap-6">
      {/* En-tête */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-mist-500">{formatLong(today)}</p>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {hello}, <span className="text-gradient">{data.profile.firstName}</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>
            <GraduationCap /> {LEVELS[level].name} · {LEVELS[level].tagline}
          </Badge>
          {att.streak > 1 && (
            <Badge variant="warning">
              <Flame /> {att.streak} jours d’assiduité
            </Badge>
          )}
        </div>
      </div>

      <QuoteCard date={now} />

      {/* Séance en cours / prochaine */}
      {focus && <FocusCard key={focus.key} session={focus} live={!!current} now={now} />}

      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StaggerItem>
          <Card className="flex h-full items-center gap-4 p-5">
            <Ring value={avg} max={20} size={84} stroke={8}>
              <span className={`font-display text-lg font-bold ${noteTone(avg)}`}>{fmtNote(avg)}</span>
            </Ring>
            <div>
              <p className="text-xs font-bold tracking-wider text-mist-500 uppercase">Moyenne générale</p>
              <p className="mt-1 text-sm text-mist-300">{avg === null ? "Fais ton 1er exercice noté" : "sur 20 · " + LEVELS[level].name}</p>
            </div>
          </Card>
        </StaggerItem>
        <StaggerItem>
          <Card className="flex h-full items-center gap-4 p-5">
            <Ring value={att.rate} size={84} stroke={8} color="#34d399">
              <span className="font-display text-lg font-bold text-emerald-300">{att.rate === null ? "—" : <CountUp value={att.rate} suffix="%" />}</span>
            </Ring>
            <div>
              <p className="text-xs font-bold tracking-wider text-mist-500 uppercase">Assiduité</p>
              <p className="mt-1 text-sm text-mist-300">
                {att.absent} absence{att.absent > 1 ? "s" : ""} · {att.retard} retard{att.retard > 1 ? "s" : ""}
              </p>
            </div>
          </Card>
        </StaggerItem>
        <StaggerItem>
          <Card className="relative h-full overflow-hidden p-5">
            <div className="absolute -top-8 -right-8 size-28 rounded-full bg-pink-500/20 blur-2xl" />
            <p className="text-xs font-bold tracking-wider text-mist-500 uppercase">Bac de français</p>
            <p className="mt-2 font-display text-4xl font-bold">
              <CountUp value={Math.max(0, bacDays)} />
              <span className="ml-1.5 text-base font-semibold text-mist-500">jours</span>
            </p>
            <p className="mt-1 text-xs text-mist-500">Épreuves anticipées · juin 2027</p>
          </Card>
        </StaggerItem>
        <StaggerItem>
          <Card className="relative h-full overflow-hidden p-5">
            <div className="absolute -top-8 -right-8 size-28 rounded-full bg-brand-500/25 blur-2xl" />
            {premiereDays > 0 ? (
              <>
                <p className="text-xs font-bold tracking-wider text-mist-500 uppercase">Passage en Première</p>
                <p className="mt-2 font-display text-4xl font-bold">
                  <CountUp value={premiereDays} />
                  <span className="ml-1.5 text-base font-semibold text-mist-500">jours</span>
                </p>
                <p className="mt-1 text-xs text-mist-500">Le {formatFull(s.premiereStart)}</p>
              </>
            ) : (
              <>
                <p className="text-xs font-bold tracking-wider text-mist-500 uppercase">Exercices réalisés</p>
                <p className="mt-2 font-display text-4xl font-bold">
                  <CountUp value={data.attempts.length} />
                </p>
                <p className="mt-1 text-xs text-mist-500">exercices et contrôles</p>
              </>
            )}
          </Card>
        </StaggerItem>
      </Stagger>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        {/* Journée */}
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CalendarClock className="size-5 text-brand-300" />
                {todaySessions.length ? "Mes cours aujourd’hui" : "Prochaine journée de cours"}
              </CardTitle>
              {!todaySessions.length && upcoming && <p className="mt-1 text-sm text-mist-500">{formatLong(upcoming.date)}</p>}
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link href="/emploi-du-temps">
                Semaine <ArrowRight />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-2.5">
            {nextDaySessions.length ? (
              <>
                {nextDaySessions.slice(0, 2).map((x, i) => (
                  <SessionRow key={x.key} session={x} data={data} now={now} index={i} />
                ))}
                {nextDaySessions.length > 2 && (
                  <div className="flex items-center gap-3 py-1 text-xs font-semibold text-mist-500">
                    <span className="h-px flex-1 bg-border" /> Pause déjeuner · 12h30 – 13h30 <span className="h-px flex-1 bg-border" />
                  </div>
                )}
                {nextDaySessions.slice(2).map((x, i) => (
                  <SessionRow key={x.key} session={x} data={data} now={now} index={i + 2} />
                ))}
              </>
            ) : (
              <p className="py-8 text-center text-sm text-mist-500">Aucun cours prévu.</p>
            )}
          </CardContent>
        </Card>

        {/* Dernières notes */}
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="size-5 text-amber-300" /> Dernières notes
            </CardTitle>
            <Button asChild variant="ghost" size="sm">
              <Link href="/notes">
                Bulletin <ArrowRight />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {recent.length ? (
              recent.map((g, i) => {
                const ch = g.chapterId ? getChapter(g.chapterId) : undefined;
                return (
                  <motion.div
                    key={g.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-fg/[0.02] p-3"
                  >
                    <SubjectBadge subject={g.subject} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{ch ? ch.chapter.title : g.label}</p>
                      <p className="text-xs text-mist-500">
                        {g.label} · coef {g.coef}
                      </p>
                    </div>
                    <span className={`font-display text-lg font-bold ${noteTone(g.score20)}`}>{fmtNote(g.score20)}</span>
                  </motion.div>
                );
              })
            ) : (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <Sparkles className="size-8 text-brand-300" />
                <p className="text-sm text-mist-500">Tes notes apparaîtront ici après ton premier exercice noté.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* À faire dans les prochains jours */}
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <ListTodo className="size-5 text-brand-300" /> À faire ces prochains jours
          </CardTitle>
          <Button asChild variant="ghost" size="sm">
            <Link href="/agenda">
              Agenda <ArrowRight />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {todo.length ? (
            todo.map((i, k) => <AgendaRow key={i.id} item={i} index={k} />)
          ) : (
            <p className="py-6 text-center text-sm text-mist-500 md:col-span-2">Rien à préparer pour l’instant. Bravo !</p>
          )}
        </CardContent>
      </Card>

      {/* Progression par matière */}
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Target className="size-5 text-emerald-300" /> Progression du programme de {LEVELS[level].name}
          </CardTitle>
          <Button asChild variant="ghost" size="sm">
            <Link href="/matieres">
              Toutes les matières <ArrowRight />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECT_IDS.map((id) => {
            const chapters = sessions.filter((x) => x.level === level && x.subject === id);
            const chapterIds = [...new Set(chapters.map((x) => x.chapterId).filter(Boolean))] as string[];
            const done = chapterIds.filter((c) => chapterResults(data, c, "exercise").count > 0).length;
            const pct = chapterIds.length ? (done / chapterIds.length) * 100 : 0;
            return (
              <Link key={id} href={`/matieres/${id}`} className="group flex items-center gap-3">
                <SubjectBadge subject={id} size="sm" />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-semibold group-hover:text-mist-100">{SUBJECTS[id].name}</span>
                    <span className={`text-xs font-bold ${noteTone(subjAvg[id].avg)}`}>{fmtNote(subjAvg[id].avg)}</span>
                  </div>
                  <Progress value={pct} className="mt-1.5 h-1.5" indicatorStyle={{ background: SUBJECTS[id].gradient }} />
                  <p className="mt-1 text-[0.7rem] text-mist-500">
                    {done}/{chapterIds.length} chapitres validés
                  </p>
                </div>
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

function FocusCard({ session, live, now }: { session: NonNullable<ReturnType<typeof allSessions>[number]>; live: boolean; now: Date }) {
  const data = useData();
  if (!data) return null;
  const meta = SUBJECTS[session.subject];
  const ref = session.chapterId ? getChapter(session.chapterId) : undefined;
  const { status, record } = liveStatus(session, data, now);
  const start = at(session.date, session.start);
  const end = at(session.date, session.end);
  const pct = live ? ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100 : 0;
  const minsLeft = Math.round((start.getTime() - now.getTime()) / 60000);

  return (
    <motion.div initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}>
      <div className="relative overflow-hidden rounded-3xl border border-fg/10 p-6 sm:p-8" style={{ background: `linear-gradient(135deg, ${meta.color}33, var(--surface) 55%)` }}>
        <motion.div
          className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full blur-3xl"
          style={{ background: meta.color, opacity: 0.25 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <SubjectBadge subject={session.subject} size="lg" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold tracking-[0.16em] uppercase" style={{ color: meta.color }}>
                  {live ? "Cours en ce moment" : session.date === toISO(now) ? `Prochain cours · ${minsLeft > 0 && minsLeft < 120 ? `dans ${minsLeft} min` : formatHour(session.start)}` : `Prochain cours · ${formatLong(session.date)}`}
                </span>
                <StatusPill status={status} justified={record?.justified} />
              </div>
              <h2 className="mt-1.5 font-display text-2xl font-bold sm:text-3xl">{meta.name}</h2>
              <p className="mt-1 text-mist-300">
                {session.test ? "Contrôle + " : ""}
                {KIND_LABEL[session.kind]} · {ref ? ref.chapter.title : "Programme bientôt disponible"}
              </p>
              <p className="mt-1 text-sm text-mist-500">
                {formatHour(session.start)} – {formatHour(session.end)}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <CheckInButton session={session} data={data} now={now} />
            <Button asChild>
              <Link href={sessionHref(session)}>
                {session.test ? <PartyPopper /> : <BookOpenCheck />}
                {live ? "Ouvrir le cours" : "Voir la séance"}
              </Link>
            </Button>
          </div>
        </div>
        {live && <Progress value={pct} className="relative mt-6 h-1.5" indicatorStyle={{ background: meta.gradient }} />}
      </div>
    </motion.div>
  );
}

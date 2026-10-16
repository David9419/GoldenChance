"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, BookOpen, BrainCircuit, CheckCircle2, ClipboardList, Clock, Lock, Repeat, RotateCcw, Trophy } from "lucide-react";
import { EmptyState, StatusPill } from "@/components/app/common";
import { CourseSections, Objectives } from "@/components/app/course-view";
import { Quiz } from "@/components/app/quiz";
import { RichText } from "@/components/app/rich-text";
import { CheckInButton } from "@/components/app/session-card";
import { SubjectBadge } from "@/components/app/subject-icon";
import { toast } from "@/components/app/toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getChapter } from "@/content";
import { LEVELS, SUBJECTS } from "@/content/subjects";
import type { Chapter } from "@/content/types";
import { testStatus, testTitle } from "@/lib/agenda";
import { isStaff, useRole } from "@/lib/auth";
import {
  canCheckIn,
  checkInStatus,
  findSession,
  KIND_LABEL,
  levelRange,
  levelUnlocked,
  liveStatus,
  sessionKey,
  sessionMinutes,
  sessionStarted,
  type Session,
} from "@/lib/calendar";
import { at, formatHour, formatLong, toISO } from "@/lib/dates";
import { COEF } from "@/lib/stats";
import { actions, useData, type AppData } from "@/lib/store";
import { useNow } from "@/lib/use-now";

export default function SessionPage() {
  const params = useParams<{ date: string; slot: string }>();
  const data = useData();
  const role = useRole();
  const now = useNow(5000);
  const key = sessionKey(params.date, Number(params.slot));
  const session = data ? findSession(key, data) : undefined;

  // Ouvrir sa séance pendant le créneau = présence enregistrée automatiquement.
  useEffect(() => {
    if (!data || !session || role !== "eleve") return;
    if (!data.attendance[session.key] && canCheckIn(session) && levelUnlocked(session.level, data.settings)) {
      actions.setAttendance(
        session.key,
        { status: checkInStatus(session), at: new Date().toISOString(), by: "eleve" },
        `${SUBJECTS[session.subject].name} ${formatHour(session.start)}`,
      );
    }
  }, [data, session, role]);

  if (!data) return null;
  if (!session)
    return (
      <EmptyState icon={BookOpen} title="Séance introuvable" text="Ce créneau ne correspond à aucun cours de l’emploi du temps.">
        <Button asChild variant="secondary">
          <Link href="/emploi-du-temps">Retour à l’emploi du temps</Link>
        </Button>
      </EmptyState>
    );

  const staff = isStaff(role);
  const meta = SUBJECTS[session.subject];
  const ref = session.chapterId ? getChapter(session.chapterId) : undefined;
  const { status, record } = liveStatus(session, data, now);
  const started = staff || sessionStarted(session, now);
  const locked = !staff && !levelUnlocked(session.level, data.settings);
  const KindIcon = { cours: BookOpen, exercice: ClipboardList, revision: Repeat, complet: BookOpen, libre: BookOpen, controle: Trophy }[session.kind];
  const isTest = !!session.test;

  return (
    <div className="flex flex-col gap-6">
      <Button asChild variant="ghost" size="sm" className="self-start">
        <Link href="/emploi-du-temps">
          <ArrowLeft /> Emploi du temps
        </Link>
      </Button>

      {/* En-tête */}
      <div
        className="relative overflow-hidden rounded-3xl border border-fg/10 p-6 sm:p-8"
        style={{
          background: isTest ? "linear-gradient(135deg, rgba(251,191,36,0.28), var(--surface) 60%)" : `linear-gradient(135deg, ${meta.color}30, var(--surface) 60%)`,
        }}
      >
        <div className="pointer-events-none absolute -top-20 -right-10 size-64 rounded-full blur-3xl" style={{ background: isTest ? "#fbbf24" : meta.color, opacity: 0.22 }} />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <SubjectBadge subject={session.subject} size="lg" />
            <div>
              <p className="text-sm font-semibold text-mist-300">
                {formatLong(session.date)} · {formatHour(session.start)} – {formatHour(session.end)}
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{isTest ? `Contrôle de ${meta.name}` : meta.official[session.level]}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge
                  variant={isTest ? "warning" : "default"}
                  style={isTest ? undefined : { background: `${meta.color}25`, color: meta.color, borderColor: `${meta.color}55` }}
                >
                  <KindIcon /> {isTest && session.test!.long ? "Contrôle long" : KIND_LABEL[session.kind]}
                </Badge>
                {isTest && (
                  <Badge variant="outline">
                    <Clock /> {Math.round(sessionMinutes(session))} min
                  </Badge>
                )}
                <Badge variant="outline">{LEVELS[session.level].name}</Badge>
                <StatusPill status={status} justified={record?.justified} />
              </div>
            </div>
          </div>
          <CheckInButton session={session} data={data} now={now} />
        </div>
        {ref && !isTest && started && (
          <div className="relative mt-6 rounded-2xl border border-fg/10 bg-ink-950/40 p-4">
            <p className="text-xs font-bold tracking-[0.14em] text-mist-500 uppercase">
              Chapitre {ref.index + 1} · séance {session.chapterSessionIndex + 1}/{session.chapterSessions}
            </p>
            <Link href={`/chapitre/${ref.chapter.id}`} className="mt-1 block font-display text-lg font-semibold hover:underline">
              {ref.chapter.title}
            </Link>
            <p className="mt-1 text-sm text-mist-300">{ref.chapter.summary}</p>
          </div>
        )}
        {isTest && (
          <div className="relative mt-6 rounded-2xl border border-fg/10 bg-ink-950/40 p-4">
            <p className="text-xs font-bold tracking-[0.14em] text-mist-500 uppercase">Chapitres évalués</p>
            <p className="mt-1 font-display text-lg font-semibold">{testTitle(session)}</p>
            <p className="mt-1 text-sm text-mist-300">
              Ce contrôle remplace {session.slots.length > 1 ? "deux heures" : "une heure"} de cours de l’emploi du temps. Coefficient 2.
            </p>
          </div>
        )}
      </div>

      {locked ? (
        <EmptyState
          icon={Lock}
          title={`Programme de ${LEVELS[session.level].name} verrouillé`}
          text={`Il s’ouvrira le ${formatLong(levelRange(session.level, data.settings)[0])}. Concentre-toi sur ton programme actuel !`}
        />
      ) : isTest ? (
        <TestBody session={session} data={data} staff={staff} now={now} />
      ) : !started ? (
        <LockedLesson session={session} />
      ) : !ref ? (
        <EmptyState icon={Lock} title="Programme bientôt disponible" text="Le contenu de ce niveau sera ajouté avant la rentrée." />
      ) : (
        <LessonBody session={session} chapter={ref.chapter} color={meta.color} done={!!data.lessonsDone[session.key]} staff={staff} />
      )}
    </div>
  );
}

function LockedLesson({ session }: { session: Session }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}>
      <Card className="flex flex-col items-center gap-4 px-6 py-14 text-center">
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#818cf8,#c026d3)] text-white shadow-xl"
        >
          <Lock className="size-7" />
        </motion.span>
        <h2 className="font-display text-2xl font-bold">La leçon sera dévoilée pendant le cours</h2>
        <p className="max-w-md text-mist-300">
          Rendez-vous le <strong>{formatLong(session.date)}</strong> à <strong>{formatHour(session.start)}</strong>. Les leçons et les exercices s’ouvrent
          uniquement le jour et à l’heure du cours.
        </p>
      </Card>
    </motion.div>
  );
}

/* ------------------------------- Contrôle ------------------------------- */

function TestBody({ session, data, staff, now }: { session: Session; data: AppData; staff: boolean; now: Date }) {
  const test = session.test!;
  const chapters = test.chapterIds.map((id) => getChapter(id)).filter((c): c is NonNullable<typeof c> => !!c);
  const questions = chapters.flatMap((c) => c.chapter.test);
  const assignment = test.assignmentId ? data.assignments.find((a) => a.id === test.assignmentId) : undefined;
  const today = toISO(now);
  const retakeToday = data.retakes[test.context] === today;
  const st = testStatus(session, data, now);
  if (!chapters.length) return <EmptyState icon={Trophy} title="Contrôle sans sujet" text="Le professeur n’a pas choisi de chapitre pour ce contrôle." />;

  return (
    <div className="flex flex-col gap-5">
      {!staff && st === "a-faire" && now < at(session.date, session.start) && (
        <Card className="border-amber-400/25 p-5">
          <p className="flex items-center gap-2 font-semibold text-amber-200">
            <BrainCircuit className="size-5" /> Pour réviser
          </p>
          <ul className="mt-3 grid gap-2">
            {chapters.map((c) => (
              <li key={c.chapter.id} className="text-sm text-mist-300">
                <Link href={`/chapitre/${c.chapter.id}`} className="font-semibold text-mist-100 hover:underline">
                  {c.chapter.title}
                </Link>{" "}
                — relis les parties « L’essentiel », les schémas et refais les exercices du chapitre.
              </li>
            ))}
          </ul>
        </Card>
      )}
      <Quiz
        questions={questions}
        context={test.context}
        chapterId={chapters[0].chapter.id}
        subject={session.subject}
        level={session.level}
        kind="test"
        mode="exam"
        label={test.long ? "Contrôle long" : "Contrôle"}
        title={testTitle(session)}
        coef={assignment?.coef ?? COEF.test}
        assignment={assignment}
        opensAt={retakeToday ? at(today, "00:00") : at(session.date, session.start)}
        closesAt={retakeToday ? at(today, "23:59") : at(session.date, session.end)}
        endsAt={retakeToday ? undefined : at(session.date, session.end)}
      />
      {staff && st === "manque" && !retakeToday && (
        <Card className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
          <p className="flex-1 text-sm text-mist-300">L’élève n’a pas rendu ce contrôle. Tu peux lui accorder un rattrapage aujourd’hui (sans limite de temps).</p>
          <Button variant="secondary" onClick={() => (actions.grantRetake(test.context, today), toast("Rattrapage autorisé aujourd’hui", "success"))}>
            <RotateCcw /> Autoriser un rattrapage
          </Button>
        </Card>
      )}
    </div>
  );
}

/* -------------------------------- Leçon -------------------------------- */

function LessonBody({ session, chapter, color, done, staff }: { session: Session; chapter: Chapter; color: string; done: boolean; staff: boolean }) {
  const kind = session.kind;
  const sections = kind === "revision" || kind === "exercice" ? chapter.sections.map((_, i) => i) : session.sections;
  const exerciseSections = (kind === "complet" || kind === "cours" ? sections.slice(0, 2) : []).filter((i) => chapter.sections[i]?.practice?.length);
  const unlocked = done || staff;

  return (
    <>
      {kind === "exercice" ? (
        <Card className="p-5 sm:p-6">
          <p className="text-xs font-bold tracking-[0.16em] uppercase" style={{ color }}>
            Rappel du chapitre avant l’exercice
          </p>
          <ul className="mt-4 grid gap-2">
            {chapter.sections
              .flatMap((s) => s.keyPoints ?? [])
              .map((k, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-mist-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: color }} />
                  <span>
                    <RichText text={k} />
                  </span>
                </li>
              ))}
          </ul>
        </Card>
      ) : (
        <>
          {kind !== "revision" && session.chapterSessionIndex === 0 && <Objectives chapter={chapter} color={color} />}
          {kind === "revision" && (
            <Card className="p-5 text-sm text-mist-300">
              Séance de révisions : relis tout le chapitre, ses schémas et ses exemples. Un contrôle peut tomber dessus : regarde ton agenda !
            </Card>
          )}
          <CourseSections chapter={chapter} sections={sections} color={color} />
        </>
      )}

      {!staff && (
        <Card className="relative flex flex-col items-center gap-3 overflow-hidden p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-semibold">
              {done ? "Leçon validée, bravo !" : kind === "exercice" ? "Tu as bien relu le rappel ?" : "Tu as bien lu, compris et appris la leçon ?"}
            </p>
            <p className="text-sm text-mist-500">
              {done
                ? exerciseSections.length || kind === "exercice"
                  ? "Les exercices sont débloqués juste en dessous."
                  : "Tu peux la relire quand tu veux."
                : exerciseSections.length || kind === "exercice"
                  ? "Valide pour débloquer les exercices sur cette leçon."
                  : "Valide pour marquer la séance comme terminée."}
            </p>
          </div>
          <Button
            variant={done ? "secondary" : "success"}
            disabled={done}
            onClick={() => {
              actions.markLessonDone(session.key);
              toast(exerciseSections.length || kind === "exercice" ? "Leçon validée : place aux exercices !" : "Séance terminée, bravo !", "success");
            }}
          >
            <CheckCircle2 /> {done ? "Leçon validée" : kind === "exercice" ? "J’ai révisé, je fais l’exercice" : "J’ai compris et appris la leçon"}
          </Button>
        </Card>
      )}

      <AnimatePresence>
        {unlocked && (kind === "exercice" || exerciseSections.length > 0) && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold">
              <ClipboardList className="size-5" style={{ color }} />
              {kind === "exercice" ? "Exercice de synthèse" : exerciseSections.length > 1 ? "Exercices sur la leçon" : "Exercice sur la leçon"}
            </h2>
            {kind === "exercice" ? (
              <Quiz
                questions={chapter.exercise}
                context={`ex:${chapter.id}`}
                chapterId={chapter.id}
                subject={session.subject}
                level={session.level}
                kind="exercise"
                mode="practice"
                label="Exercice de synthèse"
                title={chapter.title}
                coef={COEF.exercise}
              />
            ) : (
              exerciseSections.map((i, n) => (
                <Quiz
                  key={i}
                  questions={chapter.sections[i].practice!}
                  context={`pr:${chapter.id}:${i}`}
                  chapterId={chapter.id}
                  subject={session.subject}
                  level={session.level}
                  kind="exercise"
                  mode="practice"
                  label={`Exercice ${n + 1}`}
                  title={chapter.sections[i].title}
                  coef={COEF.exercise}
                />
              ))
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

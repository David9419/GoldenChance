"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, BookOpen, CheckCircle2, ClipboardList, Lock, Repeat, Trophy } from "lucide-react";
import { EmptyState, StatusPill } from "@/components/app/common";
import { CourseSections, Objectives } from "@/components/app/course-view";
import { Quiz } from "@/components/app/quiz";
import { CheckInButton } from "@/components/app/session-card";
import { SubjectBadge } from "@/components/app/subject-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChapter } from "@/content";
import { LEVELS, SUBJECTS } from "@/content/subjects";
import { canCheckIn, checkInStatus, findSession, KIND_LABEL, liveStatus, sessionKey } from "@/lib/calendar";
import { formatHour, formatLong } from "@/lib/dates";
import { actions, useData } from "@/lib/store";
import { useNow } from "@/lib/use-now";

export default function SessionPage() {
  const params = useParams<{ date: string; slot: string }>();
  const data = useData();
  const now = useNow();
  const key = sessionKey(params.date, Number(params.slot));
  const session = data ? findSession(key, data.settings) : undefined;

  // Ouvrir sa séance pendant le créneau = présence enregistrée automatiquement.
  useEffect(() => {
    if (!data || !session) return;
    if (!data.attendance[session.key] && canCheckIn(session)) {
      actions.setAttendance(session.key, { status: checkInStatus(session), at: new Date().toISOString(), by: "eleve" });
    }
  }, [data, session]);

  if (!data) return null;
  if (!session)
    return (
      <EmptyState icon={BookOpen} title="Séance introuvable" text="Ce créneau ne correspond à aucun cours de l’emploi du temps.">
        <Button asChild variant="secondary">
          <Link href="/emploi-du-temps">Retour à l’emploi du temps</Link>
        </Button>
      </EmptyState>
    );

  const meta = SUBJECTS[session.subject];
  const ref = session.chapterId ? getChapter(session.chapterId) : undefined;
  const { status, record } = liveStatus(session, data, now);
  const lessonDone = !!data.lessonsDone[session.key];

  const kindIcon = { cours: BookOpen, exercice: ClipboardList, controle: Trophy, revision: Repeat, complet: BookOpen, libre: BookOpen }[session.kind];
  const KindIcon = kindIcon;

  return (
    <div className="flex flex-col gap-6">
      <Button asChild variant="ghost" size="sm" className="self-start">
        <Link href="/emploi-du-temps">
          <ArrowLeft /> Emploi du temps
        </Link>
      </Button>

      {/* En-tête de la séance */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-8" style={{ background: `linear-gradient(135deg, ${meta.color}30, rgba(17,20,39,0.85) 60%)` }}>
        <div className="pointer-events-none absolute -top-20 -right-10 size-64 rounded-full blur-3xl" style={{ background: meta.color, opacity: 0.22 }} />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <SubjectBadge subject={session.subject} size="lg" />
            <div>
              <p className="text-sm font-semibold text-mist-300">
                {formatLong(session.date)} · {formatHour(session.start)} – {formatHour(session.end)}
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{meta.official[session.level]}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge style={{ background: `${meta.color}25`, color: meta.color, borderColor: `${meta.color}55` }}>
                  <KindIcon /> {KIND_LABEL[session.kind]}
                </Badge>
                <Badge variant="outline">{LEVELS[session.level].name}</Badge>
                <Badge variant="outline">Séance n° {session.number}</Badge>
                <StatusPill status={status} justified={record?.justified} />
              </div>
            </div>
          </div>
          <CheckInButton session={session} data={data} now={now} />
        </div>
        {ref && (
          <div className="relative mt-6 rounded-2xl border border-white/10 bg-ink-950/40 p-4">
            <p className="text-xs font-bold tracking-[0.14em] text-mist-500 uppercase">
              Chapitre {ref.index + 1} · séance {session.chapterSessionIndex + 1}/{session.chapterSessions}
            </p>
            <Link href={`/chapitre/${ref.chapter.id}`} className="mt-1 block font-display text-lg font-semibold hover:underline">
              {ref.chapter.title}
            </Link>
            <p className="mt-1 text-sm text-mist-300">{ref.chapter.summary}</p>
          </div>
        )}
      </div>

      {!ref ? (
        <EmptyState icon={Lock} title="Programme bientôt disponible" text="Le contenu de ce niveau sera ajouté avant la rentrée. En attendant, révise les chapitres précédents." />
      ) : (
        <SessionBody kind={session.kind} sessionSections={session.sections} chapterId={ref.chapter.id} color={meta.color} sessionKey={session.key} lessonDone={lessonDone} />
      )}
    </div>
  );
}

function SessionBody({
  kind,
  sessionSections,
  chapterId,
  color,
  sessionKey: key,
  lessonDone,
}: {
  kind: string;
  sessionSections: number[];
  chapterId: string;
  color: string;
  sessionKey: string;
  lessonDone: boolean;
}) {
  const ref = getChapter(chapterId)!;
  const chapter = ref.chapter;

  const doneButton = (
    <Card className="flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <p className="font-semibold">{lessonDone ? "Cours terminé, bravo !" : "Tu as bien lu et compris ce cours ?"}</p>
        <p className="text-sm text-mist-500">{lessonDone ? "Tu peux le relire quand tu veux dans Matières." : "Marque-le comme terminé pour suivre ta progression."}</p>
      </div>
      <Button variant={lessonDone ? "secondary" : "success"} disabled={lessonDone} onClick={() => actions.markLessonDone(key)}>
        <CheckCircle2 /> {lessonDone ? "Terminé" : "J’ai terminé le cours"}
      </Button>
    </Card>
  );

  if (kind === "cours") {
    return (
      <>
        <Objectives chapter={chapter} color={color} />
        <CourseSections chapter={chapter} sections={sessionSections} color={color} />
        {doneButton}
      </>
    );
  }
  if (kind === "exercice") {
    return (
      <>
        <p className="text-sm text-mist-300">Commence par relire l’essentiel du cours, puis fais l’exercice noté.</p>
        <Quiz chapterId={chapterId} kind="exercise" />
        <details className="glass rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold">Relire le cours complet</summary>
          <div className="mt-5">
            <CourseSections chapter={chapter} color={color} />
          </div>
        </details>
      </>
    );
  }
  if (kind === "controle") {
    return (
      <>
        <Card className="border-amber-400/25 p-5 text-sm text-amber-100">
          Jour de contrôle ! Le contrôle est chronométré et compte <strong>coefficient 2</strong>. Seule la première tentative est notée.
        </Card>
        <Quiz chapterId={chapterId} kind="test" />
      </>
    );
  }
  // Séance complète ou révisions : cours + exercice (+ contrôle) dans des onglets.
  return (
    <Tabs defaultValue="cours" className="flex flex-col gap-5">
      <TabsList className="self-start">
        <TabsTrigger value="cours">
          <BookOpen /> Cours
        </TabsTrigger>
        <TabsTrigger value="exercice">
          <ClipboardList /> Exercice
        </TabsTrigger>
        {kind === "complet" && (
          <TabsTrigger value="controle">
            <Trophy /> Contrôle
          </TabsTrigger>
        )}
      </TabsList>
      <TabsContent value="cours" className="flex flex-col gap-5">
        {kind === "revision" && (
          <Card className="p-5 text-sm text-mist-300">
            Séance de révisions : relis les points essentiels, refais l’exercice pour t’entraîner et prépare le contrôle.
          </Card>
        )}
        <Objectives chapter={chapter} color={color} />
        <CourseSections chapter={chapter} color={color} />
        {doneButton}
      </TabsContent>
      <TabsContent value="exercice">
        <Quiz chapterId={chapterId} kind="exercise" />
      </TabsContent>
      <TabsContent value="controle">
        <Quiz chapterId={chapterId} kind="test" />
      </TabsContent>
    </Tabs>
  );
}

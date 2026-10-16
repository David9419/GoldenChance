"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, BookOpen, ClipboardList, Lock, Trophy } from "lucide-react";
import { EmptyState } from "@/components/app/common";
import { CourseSections, Objectives } from "@/components/app/course-view";
import { Quiz } from "@/components/app/quiz";
import { SubjectBadge } from "@/components/app/subject-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChapter } from "@/content";
import { LEVELS, SUBJECTS } from "@/content/subjects";
import { testTitle } from "@/lib/agenda";
import { isStaff, useRole } from "@/lib/auth";
import { levelRange, levelUnlocked, sessionsOfChapter, sessionStarted, testSessionOf, unlockedSections } from "@/lib/calendar";
import { formatFull, formatHour, formatLong } from "@/lib/dates";
import { COEF } from "@/lib/stats";
import { useData } from "@/lib/store";
import { useNow } from "@/lib/use-now";

export default function ChapterPage() {
  const { id } = useParams<{ id: string }>();
  const data = useData();
  const role = useRole();
  const now = useNow(30_000);
  const ref = getChapter(id);
  if (!data) return null;
  if (!ref)
    return (
      <EmptyState icon={BookOpen} title="Chapitre introuvable" text="Ce chapitre n’existe pas.">
        <Button asChild variant="secondary">
          <Link href="/matieres">Retour aux matières</Link>
        </Button>
      </EmptyState>
    );
  const meta = SUBJECTS[ref.subject];
  const c = ref.chapter;
  const staff = isStaff(role);
  if (!staff && !levelUnlocked(ref.level, data.settings))
    return (
      <EmptyState icon={Lock} title={`Programme de ${LEVELS[ref.level].name} verrouillé`} text={`Ce chapitre s’ouvrira le ${formatFull(levelRange(ref.level, data.settings)[0])}.`}>
        <Button asChild variant="secondary">
          <Link href="/matieres">Retour aux matières</Link>
        </Button>
      </EmptyState>
    );

  const sessions = sessionsOfChapter(c.id, data);
  const open = staff ? new Set(c.sections.map((_, i) => i)) : unlockedSections(c.id, data, now);
  const visible = c.sections.map((_, i) => i).filter((i) => open.has(i));
  const nextLesson = (i: number) => sessions.find((s) => s.sections.includes(i));
  const synthesis = sessions.find((s) => s.kind === "exercice");
  const synthesisOpen = staff || (synthesis ? sessionStarted(synthesis, now) : visible.length === c.sections.length);
  const test = testSessionOf(c.id, data);

  return (
    <div className="flex flex-col gap-6">
      <Button asChild variant="ghost" size="sm" className="self-start">
        <Link href={`/matieres/${ref.subject}?niveau=${ref.level}`}>
          <ArrowLeft /> {meta.name}
        </Link>
      </Button>
      <div className="relative overflow-hidden rounded-3xl border border-fg/10 p-6 sm:p-8" style={{ background: `linear-gradient(135deg, ${meta.color}30, var(--surface) 60%)` }}>
        <div className="flex items-start gap-4">
          <SubjectBadge subject={ref.subject} size="lg" />
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{LEVELS[ref.level].name}</Badge>
              <Badge style={{ background: `${meta.color}25`, color: meta.color, borderColor: `${meta.color}55` }}>Chapitre {ref.index + 1}</Badge>
              {!staff && (
                <Badge variant="outline">
                  {visible.length}/{c.sections.length} parties vues
                </Badge>
              )}
            </div>
            <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{c.title}</h1>
            <p className="mt-2 max-w-2xl text-mist-300">{c.summary}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="cours" className="flex flex-col gap-5">
        <TabsList className="self-start">
          <TabsTrigger value="cours">
            <BookOpen /> Cours
          </TabsTrigger>
          <TabsTrigger value="exercices">
            <ClipboardList /> Exercices
          </TabsTrigger>
          <TabsTrigger value="controle">
            <Trophy /> Contrôle
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cours" className="flex flex-col gap-5">
          {visible.length > 0 && <Objectives chapter={c} color={meta.color} />}
          <CourseSections chapter={c} sections={visible} color={meta.color} />
          {c.sections.map((s, i) => {
            if (open.has(i)) return null;
            const next = nextLesson(i);
            return (
              <Card key={i} className="flex items-center gap-4 p-5 opacity-80">
                <span className="flex size-10 items-center justify-center rounded-xl bg-fg/[0.06] text-mist-500">
                  <Lock className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">Partie {i + 1} · dévoilée pendant le cours</p>
                  <p className="text-sm text-mist-500">{next ? `${formatLong(next.date)} à ${formatHour(next.start)}` : "Date à venir"}</p>
                </div>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="exercices" className="flex flex-col gap-4">
          {visible.filter((i) => c.sections[i].practice?.length).length === 0 && !synthesisOpen ? (
            <EmptyState icon={ClipboardList} title="Pas encore d’exercice" text="Les exercices s’ouvrent après chaque leçon, le jour du cours." />
          ) : (
            <>
              {visible
                .filter((i) => c.sections[i].practice?.length)
                .map((i) => (
                  <Quiz
                    key={i}
                    questions={c.sections[i].practice!}
                    context={`pr:${c.id}:${i}`}
                    chapterId={c.id}
                    subject={ref.subject}
                    level={ref.level}
                    kind="exercise"
                    mode="practice"
                    label={`Exercice · partie ${i + 1}`}
                    title={c.sections[i].title}
                    coef={COEF.exercise}
                  />
                ))}
              {synthesisOpen && (
                <Quiz
                  questions={c.exercise}
                  context={`ex:${c.id}`}
                  chapterId={c.id}
                  subject={ref.subject}
                  level={ref.level}
                  kind="exercise"
                  mode="practice"
                  label="Exercice de synthèse"
                  title={c.title}
                  coef={COEF.exercise}
                />
              )}
            </>
          )}
        </TabsContent>

        <TabsContent value="controle">
          {test ? (
            <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-300">
                <Trophy className="size-6" />
              </span>
              <div className="flex-1">
                <p className="font-display text-lg font-bold">{test.test?.long ? "Contrôle long" : "Contrôle"} prévu</p>
                <p className="text-sm text-mist-300">
                  {formatLong(test.date)} · {formatHour(test.start)} – {formatHour(test.end)} · {testTitle(test)}
                </p>
              </div>
              <Button asChild>
                <Link href={`/seance/${test.date}/${test.slot}`}>Voir le contrôle</Link>
              </Button>
            </Card>
          ) : (
            <EmptyState
              icon={Trophy}
              title="Pas de contrôle prévu sur ce chapitre"
              text="Il y a 3 à 4 contrôles par semaine, sur des matières différentes : tous les chapitres ne sont pas évalués. Entraîne-toi avec les exercices !"
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

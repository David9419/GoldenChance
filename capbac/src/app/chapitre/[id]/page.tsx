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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChapter } from "@/content";
import { LEVELS, SUBJECTS } from "@/content/subjects";
import { useRole } from "@/lib/auth";
import { levelRange, levelUnlocked, testSessionOf } from "@/lib/calendar";
import { at, formatFull, formatHour, formatLong } from "@/lib/dates";
import { useData } from "@/lib/store";

export default function ChapterPage() {
  const { id } = useParams<{ id: string }>();
  const data = useData();
  const role = useRole();
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
  if (role === "eleve" && !levelUnlocked(ref.level, data.settings))
    return (
      <EmptyState
        icon={Lock}
        title={`Programme de ${LEVELS[ref.level].name} verrouillé`}
        text={`Ce chapitre s’ouvrira le ${formatFull(levelRange(ref.level, data.settings)[0])}.`}
      >
        <Button asChild variant="secondary">
          <Link href="/matieres">Retour aux matières</Link>
        </Button>
      </EmptyState>
    );
  const testSession = testSessionOf(c.id, data.settings);

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
          <TabsTrigger value="exercice">
            <ClipboardList /> Exercice noté
          </TabsTrigger>
          <TabsTrigger value="controle">
            <Trophy /> Contrôle
          </TabsTrigger>
        </TabsList>
        <TabsContent value="cours" className="flex flex-col gap-5">
          <Objectives chapter={c} color={meta.color} />
          <CourseSections chapter={c} color={meta.color} />
        </TabsContent>
        <TabsContent value="exercice">
          <Quiz chapterId={c.id} kind="exercise" />
        </TabsContent>
        <TabsContent value="controle" className="flex flex-col gap-4">
          {testSession ? (
            <>
              <p className="text-sm text-mist-300">
                Contrôle programmé le <strong>{formatLong(testSession.date)}</strong> à {formatHour(testSession.start)}, en début de séance de{" "}
                {SUBJECTS[testSession.subject].name}.
              </p>
              <Quiz chapterId={c.id} kind="test" availableFrom={at(testSession.date, testSession.start)} />
            </>
          ) : (
            <EmptyState
              icon={Trophy}
              title="Pas de contrôle programmé sur ce chapitre"
              text="Il y a 3 à 4 contrôles par semaine, sur des matières différentes : tous les chapitres ne sont pas évalués. Entraîne-toi avec l’exercice noté !"
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

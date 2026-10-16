"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, BookOpen, ClipboardList, Trophy } from "lucide-react";
import { EmptyState } from "@/components/app/common";
import { CourseSections, Objectives } from "@/components/app/course-view";
import { Quiz } from "@/components/app/quiz";
import { SubjectBadge } from "@/components/app/subject-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChapter } from "@/content";
import { LEVELS, SUBJECTS } from "@/content/subjects";

export default function ChapterPage() {
  const { id } = useParams<{ id: string }>();
  const ref = getChapter(id);
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
        <TabsContent value="controle">
          <Quiz chapterId={c.id} kind="test" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

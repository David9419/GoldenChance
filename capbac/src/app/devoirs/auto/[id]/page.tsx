"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, CalendarClock, ClipboardPen, House } from "lucide-react";
import { EmptyState } from "@/components/app/common";
import { Quiz } from "@/components/app/quiz";
import { SubjectBadge } from "@/components/app/subject-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getChapter } from "@/content";
import { SUBJECTS } from "@/content/subjects";
import { isStaff, useRole } from "@/lib/auth";
import { autoHomework, homeworkGiven } from "@/lib/calendar";
import { at, formatHour, formatLong } from "@/lib/dates";
import { useData } from "@/lib/store";
import { useNow } from "@/lib/use-now";

/** Devoir maison donné automatiquement en fin de journée. */
export default function AutoHomeworkPage() {
  const { id } = useParams<{ id: string }>();
  const data = useData();
  const role = useRole();
  const now = useNow(30_000);
  if (!data) return null;
  const hwId = decodeURIComponent(id);
  const h = autoHomework(data).find((x) => x.id === hwId);
  const ref = h ? getChapter(h.chapterId) : undefined;
  if (!h || !ref || (!isStaff(role) && !homeworkGiven(h, now, data.profile?.createdAt)))
    return (
      <EmptyState icon={ClipboardPen} title="Devoir introuvable" text="Ce devoir n’a pas encore été donné.">
        <Button asChild variant="secondary">
          <Link href="/devoirs">Retour aux devoirs</Link>
        </Button>
      </EmptyState>
    );
  const meta = SUBJECTS[h.subject];

  return (
    <div className="flex flex-col gap-6">
      <Button asChild variant="ghost" size="sm" className="self-start">
        <Link href="/devoirs">
          <ArrowLeft /> Mes devoirs
        </Link>
      </Button>
      <div className="relative overflow-hidden rounded-3xl border border-fg/10 p-6 sm:p-8" style={{ background: `linear-gradient(135deg, ${meta.color}30, var(--surface) 60%)` }}>
        <div className="flex items-start gap-4">
          <SubjectBadge subject={h.subject} size="lg" />
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <House /> Devoir maison
              </Badge>
              <Badge variant="outline">
                <CalendarClock /> Pour le {formatLong(h.dueDate)}
              </Badge>
            </div>
            <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{ref.chapter.title}</h1>
            <p className="mt-1 text-mist-300">
              {meta.name} · donné le {formatLong(h.givenDate)} à {formatHour(h.givenAt)}, sur la leçon du jour. Tu peux le faire dès maintenant.
            </p>
          </div>
        </div>
      </div>
      <Quiz
        questions={ref.chapter.homework ?? []}
        context={h.id}
        chapterId={ref.chapter.id}
        subject={h.subject}
        level={h.level}
        kind="exercise"
        mode="homework"
        label="Devoir maison"
        title={ref.chapter.title}
        coef={1}
        closesAt={at(h.dueDate, "23:59")}
      />
    </div>
  );
}

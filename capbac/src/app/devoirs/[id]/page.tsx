"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ClipboardPen, PenLine, Send, Trash2, Trophy } from "lucide-react";
import { EmptyState } from "@/components/app/common";
import { Quiz } from "@/components/app/quiz";
import { SubjectBadge } from "@/components/app/subject-icon";
import { toast } from "@/components/app/toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getChapter } from "@/content";
import { SUBJECTS } from "@/content/subjects";
import { assignmentStatus } from "@/lib/agenda";
import { isStaff, useRole } from "@/lib/auth";
import { at, formatLong } from "@/lib/dates";
import { fmtNote, noteTone } from "@/lib/stats";
import { actions, useData } from "@/lib/store";

export default function AssignmentPage() {
  const { id } = useParams<{ id: string }>();
  const data = useData();
  const role = useRole();
  const router = useRouter();
  const [text, setText] = useState("");
  const [grade, setGrade] = useState("");
  const [outOf, setOutOf] = useState("20");
  const [comment, setComment] = useState("");
  if (!data) return null;
  const a = data.assignments.find((x) => x.id === id);
  if (!a)
    return (
      <EmptyState icon={ClipboardPen} title="Devoir introuvable" text="Ce devoir a peut-être été supprimé.">
        <Button asChild variant="secondary">
          <Link href="/devoirs">Retour aux devoirs</Link>
        </Button>
      </EmptyState>
    );
  const staff = isStaff(role);
  const meta = SUBJECTS[a.subject];
  const sub = data.submissions[a.id];
  const st = assignmentStatus(a, data);
  const chapter = a.chapterId ? getChapter(a.chapterId) : undefined;

  return (
    <div className="flex flex-col gap-6">
      <Button asChild variant="ghost" size="sm" className="self-start">
        <Link href="/devoirs">
          <ArrowLeft /> Devoirs & contrôles
        </Link>
      </Button>

      <div className="relative overflow-hidden rounded-3xl border border-fg/10 p-6 sm:p-8" style={{ background: `linear-gradient(135deg, ${meta.color}30, var(--surface) 60%)` }}>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <SubjectBadge subject={a.subject} size="lg" />
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant={a.kind === "controle" ? "warning" : "default"}>
                  {a.kind === "controle" ? <Trophy /> : <PenLine />} {a.kind === "controle" ? "Contrôle" : "Devoir maison"}
                </Badge>
                <Badge variant={st.tone}>{st.label}</Badge>
                <Badge variant="outline">Coef {a.coef}</Badge>
              </div>
              <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{a.title}</h1>
              <p className="mt-1 text-mist-300">
                {meta.name} · {a.kind === "controle" ? "le" : "à rendre pour le"} {formatLong(a.dueDate)}
              </p>
            </div>
          </div>
          {staff && (
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                if (!window.confirm("Supprimer ce devoir et la copie éventuelle ?")) return;
                actions.deleteAssignment(a.id);
                toast("Devoir supprimé");
                router.push("/devoirs");
              }}
            >
              <Trash2 /> Supprimer
            </Button>
          )}
        </div>
        {a.instructions && (
          <div className="mt-6 rounded-2xl border border-fg/10 bg-ink-950/40 p-4">
            <p className="text-xs font-bold tracking-[0.14em] text-mist-500 uppercase">Consignes</p>
            <p className="mt-2 whitespace-pre-line text-mist-100">{a.instructions}</p>
          </div>
        )}
      </div>

      {chapter ? (
        <Quiz
          chapterId={chapter.chapter.id}
          kind={a.kind === "controle" ? "test" : "exercise"}
          context={`dv:${a.id}`}
          assignment={a}
          title={a.title}
          availableFrom={a.kind === "controle" ? at(a.dueDate, "08:00") : undefined}
        />
      ) : sub ? (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
          <Card className="p-6">
            <p className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
              <CheckCircle2 className="size-4" /> Copie rendue le {new Date(sub.submittedAt).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
            </p>
            <p className="mt-4 rounded-2xl bg-fg/[0.03] p-4 whitespace-pre-line text-mist-100">{sub.text}</p>
          </Card>
          {sub.grade !== undefined ? (
            <Card className="flex items-center gap-5 p-6">
              <span className={`font-display text-4xl font-bold ${noteTone((sub.grade / (sub.outOf || 20)) * 20)}`}>
                {fmtNote(sub.grade)}
                <span className="text-lg text-mist-500">/{sub.outOf}</span>
              </span>
              <div>
                <p className="font-semibold">Appréciation du professeur</p>
                <p className="text-sm text-mist-300">{sub.comment || "—"}</p>
              </div>
            </Card>
          ) : staff ? (
            <Card className="grid gap-4 p-6">
              <p className="font-display text-lg font-bold">Corriger la copie</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="g">Note</Label>
                  <Input id="g" type="number" min="0" step="0.25" value={grade} onChange={(e) => setGrade(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="o">Sur</Label>
                  <Input id="o" type="number" min="1" value={outOf} onChange={(e) => setOutOf(e.target.value)} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="c">Appréciation</Label>
                <Textarea id="c" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Points forts, points à travailler…" />
              </div>
              <Button
                disabled={grade === "" || Number(grade) > Number(outOf) || Number(outOf) <= 0}
                onClick={() => {
                  actions.gradeSubmission(a.id, Number(grade), Number(outOf), comment.trim() || undefined);
                  toast("Note publiée dans le bulletin", "success");
                }}
              >
                <CheckCircle2 /> Publier la note
              </Button>
            </Card>
          ) : (
            <Card className="p-6 text-sm text-mist-300">Ton professeur va corriger ta copie. La note apparaîtra dans ton bulletin.</Card>
          )}
        </motion.div>
      ) : staff ? (
        <Card className="p-6 text-sm text-mist-300">L’élève n’a pas encore rendu ce devoir.</Card>
      ) : (
        <Card className="grid gap-4 p-6">
          <Label htmlFor="answer" className="text-base">
            Ma réponse
          </Label>
          <Textarea id="answer" value={text} onChange={(e) => setText(e.target.value)} className="min-h-64 text-base leading-relaxed" placeholder="Écris ta réponse ici…" />
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-mist-500">{text.trim().split(/\s+/).filter(Boolean).length} mots</span>
            <Button
              disabled={text.trim().length < 10}
              onClick={() => {
                if (!window.confirm("Rendre ta copie ? Tu ne pourras plus la modifier.")) return;
                actions.submitAssignment({ assignmentId: a.id, text: text.trim(), submittedAt: new Date().toISOString() }, a.title);
                toast("Copie rendue !", "success");
              }}
            >
              <Send /> Rendre ma copie
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, ClipboardList, Clock, Flag, Hourglass, Lock, RotateCcw, Send, Timer, Trophy, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getChapter } from "@/content";
import { SUBJECTS } from "@/content/subjects";
import type { Question } from "@/content/types";
import { isStaff, useRole } from "@/lib/auth";
import { actions, useData, type Assignment, type Attempt } from "@/lib/store";
import { appreciation, COEF, fmtNote, isReleased, noteTone } from "@/lib/stats";
import { useNow } from "@/lib/use-now";
import { cn } from "@/lib/utils";
import { Ring } from "./common";
import { Confetti } from "./confetti";
import { RichText } from "./rich-text";

type Phase = "intro" | "run" | "result";

type QuizProps = {
  chapterId: string;
  kind: Attempt["kind"];
  /** Contexte de la note (par défaut : exercice ou contrôle du chapitre). */
  context?: string;
  /** Devoir / contrôle du professeur. */
  assignment?: Assignment;
  /** Le contrôle n'est ouvert qu'à partir de cette date. */
  availableFrom?: Date;
  title?: string;
};

export function Quiz({ chapterId, kind, context, assignment, availableFrom, title }: QuizProps) {
  const data = useData();
  const role = useRole();
  const now = useNow(30_000);
  const ref = getChapter(chapterId);
  const questions: Question[] = useMemo(() => (ref ? (kind === "test" ? ref.chapter.test : ref.chapter.exercise) : []), [ref, kind]);
  const ctx = context ?? `${kind === "test" ? "ct" : "ex"}:${chapterId}`;
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<Attempt | null>(null);
  const [startedAt, setStartedAt] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const submitted = useRef(false);

  const minutes = data?.settings.testMinutes ?? 25;
  const timed = kind === "test";

  function start() {
    setAnswers(Array(questions.length).fill(-1));
    setIndex(0);
    setResult(null);
    submitted.current = false;
    setStartedAt(Date.now());
    setRemaining(minutes * 60);
    setPhase("run");
  }

  function submit(final: number[]) {
    if (submitted.current || !ref) return;
    submitted.current = true;
    const correct = final.filter((a, i) => a === questions[i].answer).length;
    const score = Math.round((correct / questions.length) * 200) / 10;
    const saved = actions.addAttempt(
      {
        chapterId,
        subject: ref.subject,
        level: ref.level,
        kind,
        context: ctx,
        score,
        correct,
        total: questions.length,
        answers: final,
        durationSec: Math.round((Date.now() - startedAt) / 1000),
        assignmentId: assignment?.id,
      },
      assignment?.title ?? ref.chapter.title,
    );
    if (assignment) actions.submitAssignment({ assignmentId: assignment.id, attemptId: saved.id, submittedAt: saved.date }, assignment.title);
    setResult(saved);
    setPhase("result");
  }

  // Minuteur du contrôle
  const answersRef = useRef(answers);
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);
  useEffect(() => {
    if (phase !== "run" || !timed) return;
    const id = window.setInterval(() => {
      const left = minutes * 60 - Math.floor((Date.now() - startedAt) / 1000);
      setRemaining(left);
      if (left <= 0) submit(answersRef.current);
    }, 500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, timed, startedAt, minutes]);

  if (!ref || !data) return null;
  const meta = SUBJECTS[ref.subject];
  const attempts = data.attempts.filter((a) => a.context === ctx);
  const official = attempts.find((a) => a.official) ?? null;
  const best = attempts.reduce<Attempt | null>((b, a) => (!b || a.score > b.score ? a : b), null);
  const label = title ?? (kind === "test" ? "Contrôle" : "Exercice noté");
  const coef = assignment?.coef ?? COEF[kind];
  const staff = isStaff(role);

  // Contrôle : une seule copie, corrigée plus tard.
  if (kind === "test" && official && phase !== "run") {
    if (!isReleased(official, now)) {
      return <PendingCorrection attempt={official} label={label} color={meta.color} staff={staff} />;
    }
    return <QuizResult attempt={official} questions={questions} label={label} color={meta.color} />;
  }

  if (staff && phase === "intro") {
    return (
      <Card className="flex items-center gap-4 p-6">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl text-white" style={{ background: meta.gradient }}>
          {kind === "test" ? <Trophy className="size-6" /> : <ClipboardList className="size-6" />}
        </span>
        <div className="flex-1">
          <p className="font-display text-lg font-bold">{label}</p>
          <p className="text-sm text-mist-500">
            {official ? `Rendu le ${new Date(official.date).toLocaleDateString("fr-FR")} · note ${fmtNote(official.score)}/20` : "L’élève n’a pas encore rendu ce travail."} · {questions.length} questions · coef {coef}
          </p>
        </div>
      </Card>
    );
  }

  if (phase === "intro" && availableFrom && now < availableFrom) {
    return (
      <Card className="flex flex-col items-center gap-3 p-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-fg/[0.06] text-mist-500">
          <Lock className="size-6" />
        </span>
        <p className="font-display text-lg font-bold">{label} verrouillé</p>
        <p className="max-w-sm text-sm text-mist-500">
          Il s’ouvrira le {availableFrom.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })} à{" "}
          {availableFrom.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}. Révise le chapitre d’ici là !
        </p>
      </Card>
    );
  }

  if (phase === "intro") {
    return (
      <Card className="relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full blur-3xl" style={{ background: meta.color, opacity: 0.18 }} />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl text-white" style={{ background: meta.gradient }}>
              {kind === "test" ? <Trophy className="size-7" /> : <ClipboardList className="size-7" />}
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold">{label}</h3>
              <p className="mt-1 text-sm text-mist-300">{ref.chapter.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="outline">{questions.length} questions</Badge>
                <Badge variant="outline">Coefficient {coef}</Badge>
                {timed && (
                  <Badge variant="warning">
                    <Timer /> {minutes} minutes
                  </Badge>
                )}
              </div>
              <p className="mt-3 max-w-md text-xs text-mist-500">
                {kind === "test"
                  ? "Une seule copie possible. Le contrôle est chronométré et sera corrigé par le professeur : ta note et la correction arrivent quelques jours après."
                  : official
                    ? `Note officielle : ${fmtNote(official.score)}/20 (1re tentative). Tu peux recommencer pour t’entraîner : la note du bulletin ne change pas.`
                    : "Correction immédiate. Attention : seule ta première tentative compte dans ta moyenne."}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-2 sm:items-end">
            {best && kind === "exercise" && (
              <p className="text-sm text-mist-500">
                Meilleure note : <span className={cn("font-bold", noteTone(best.score))}>{fmtNote(best.score)}/20</span>
              </p>
            )}
            <Button size="lg" onClick={start}>
              {official ? (
                <>
                  <RotateCcw /> S’entraîner à nouveau
                </>
              ) : (
                <>
                  Commencer <ArrowRight />
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  if (phase === "result" && result && kind === "test") {
    return <PendingCorrection attempt={result} label={label} color={meta.color} staff={false} justSubmitted />;
  }

  if (phase === "result" && result) {
    return <QuizResult attempt={result} questions={questions} label={label} onRetry={start} color={meta.color} />;
  }

  const q = questions[index];
  const chosen = answers[index];
  const answeredCount = answers.filter((a) => a >= 0).length;
  const last = index === questions.length - 1;

  return (
    <Card className="overflow-hidden p-5 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-mist-300">
          {label} · Question <span className="text-mist-100">{index + 1}</span>/{questions.length}
        </p>
        {timed && (
          <span
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-sm font-bold",
              remaining < 60 ? "border-rose-400/40 bg-rose-500/15 text-rose-200" : "border-border bg-fg/[0.04]",
            )}
          >
            <Clock className="size-3.5" />
            {String(Math.floor(Math.max(0, remaining) / 60)).padStart(2, "0")}:{String(Math.max(0, remaining) % 60).padStart(2, "0")}
          </span>
        )}
      </div>
      <Progress value={((index + 1) / questions.length) * 100} className="mt-3" indicatorStyle={{ background: meta.gradient }} />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
          className="mt-7"
        >
          <p className="prose-course text-lg leading-relaxed font-semibold whitespace-pre-line text-mist-100">
            <RichText text={q.prompt} />
          </p>
          <div className="mt-6 grid gap-2.5">
            {q.choices.map((c, i) => {
              const active = chosen === i;
              return (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setAnswers((prev) => prev.map((a, j) => (j === index ? i : a)))}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-left text-sm transition-all",
                    active
                      ? "border-brand-400/70 bg-brand-500/20 text-mist-100 shadow-[0_0_0_3px_rgba(99,102,241,0.18)]"
                      : "border-border bg-fg/[0.02] text-mist-300 hover:border-fg/20 hover:bg-fg/[0.05]",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold",
                      active ? "border-brand-300 bg-brand-500 text-white" : "border-border text-mist-500",
                    )}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="leading-relaxed">
                    <RichText text={c} />
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-7 flex items-center justify-between gap-3">
        <Button variant="ghost" disabled={index === 0} onClick={() => setIndex(index - 1)}>
          <ArrowLeft /> Précédente
        </Button>
        <div className="hidden gap-1.5 sm:flex">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Question ${i + 1}`}
              className={cn(
                "size-2.5 cursor-pointer rounded-full transition-all",
                i === index ? "w-6 bg-brand-400" : answers[i] >= 0 ? "bg-brand-400/50" : "bg-fg/15",
              )}
            />
          ))}
        </div>
        {last ? (
          <Button
            variant="success"
            onClick={() => {
              if (answeredCount < questions.length && !window.confirm(`Il reste ${questions.length - answeredCount} question(s) sans réponse. Rendre la copie quand même ?`)) return;
              submit(answers);
            }}
          >
            <Flag /> Rendre ma copie
          </Button>
        ) : (
          <Button onClick={() => setIndex(index + 1)}>
            Suivante <ArrowRight />
          </Button>
        )}
      </div>
    </Card>
  );
}

function QuizResult({
  attempt,
  questions,
  label,
  onRetry,
  color,
}: {
  attempt: Attempt;
  questions: Question[];
  label: string;
  onRetry?: () => void;
  color: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <Card className="relative overflow-hidden p-6 sm:p-8">
        {attempt.score >= 14 && <Confetti />}
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <Ring value={attempt.score} max={20} size={140} stroke={12} color={color}>
            <span className={cn("font-display text-4xl font-bold", noteTone(attempt.score))}>{fmtNote(attempt.score)}</span>
            <span className="text-xs text-mist-500">/ 20</span>
          </Ring>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">{label} terminé</p>
            <h3 className="mt-1 font-display text-2xl font-bold">{appreciation(attempt.score)}</h3>
            <p className="mt-2 text-sm text-mist-300">
              {attempt.correct} bonne{attempt.correct > 1 ? "s" : ""} réponse{attempt.correct > 1 ? "s" : ""} sur {attempt.total} · en{" "}
              {Math.floor(attempt.durationSec / 60)} min {attempt.durationSec % 60} s
            </p>
            <p className="mt-1 text-xs text-mist-500">
              {attempt.official ? "Cette note est enregistrée dans ton bulletin." : "Tentative d’entraînement : ta note officielle reste inchangée."}
            </p>
          </div>
          {onRetry && (
            <Button variant="secondary" onClick={onRetry}>
              <RotateCcw /> Recommencer
            </Button>
          )}
        </div>
      </Card>

      <h4 className="mt-2 font-display text-lg font-semibold">Correction détaillée</h4>
      <div className="flex flex-col gap-3">
        {questions.map((q, i) => {
          const given = attempt.answers[i];
          const ok = given === q.answer;
          return (
            <motion.div key={q.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i * 0.04, 0.4) }}>
              <Card className={cn("p-5", ok ? "border-emerald-400/20" : "border-rose-400/20")}>
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full",
                      ok ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300",
                    )}
                  >
                    {ok ? <Check className="size-4" /> : <X className="size-4" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold whitespace-pre-line">
                      {i + 1}. <RichText text={q.prompt} />
                    </p>
                    <div className="mt-3 grid gap-1.5 text-sm">
                      {!ok && (
                        <p className="text-rose-300">
                          Ta réponse : {given >= 0 ? <RichText text={q.choices[given]} /> : <em>sans réponse</em>}
                        </p>
                      )}
                      <p className="text-emerald-300">
                        Bonne réponse : <RichText text={q.choices[q.answer]} />
                      </p>
                    </div>
                    <p className="prose-course mt-3 rounded-xl bg-fg/[0.03] p-3 text-sm leading-relaxed text-mist-300">
                      <RichText text={q.explanation} />
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function PendingCorrection({
  attempt,
  label,
  color,
  staff,
  justSubmitted,
}: {
  attempt: Attempt;
  label: string;
  color: string;
  staff: boolean;
  justSubmitted?: boolean;
}) {
  const release = attempt.releaseAt ? new Date(attempt.releaseAt) : null;
  return (
    <Card className="relative overflow-hidden p-6 sm:p-8">
      <div className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full blur-3xl" style={{ background: color, opacity: 0.16 }} />
      <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <motion.span
          initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="flex size-20 shrink-0 items-center justify-center rounded-3xl text-white shadow-xl"
          style={{ background: `linear-gradient(135deg, ${color}, #6366f1)` }}
        >
          {justSubmitted ? <Send className="size-9" /> : <Hourglass className="size-9" />}
        </motion.span>
        <div className="flex-1">
          <p className="text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">{label}</p>
          <h3 className="mt-1 font-display text-2xl font-bold">{justSubmitted ? "Copie rendue, bravo !" : "Copie en cours de correction"}</h3>
          <p className="mt-2 text-sm text-mist-300">
            Rendue le {new Date(attempt.date).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}.{" "}
            {release && (
              <>
                Note et correction disponibles le{" "}
                <strong>{release.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}</strong>.
              </>
            )}
          </p>
          {staff && (
            <p className="mt-1 text-sm text-mist-500">
              Note obtenue : <strong className={noteTone(attempt.score)}>{fmtNote(attempt.score)}/20</strong> ({attempt.correct}/{attempt.total})
            </p>
          )}
        </div>
        {staff && (
          <Button onClick={() => actions.releaseAttempt(attempt.id)}>
            <Check /> Publier la correction
          </Button>
        )}
      </div>
    </Card>
  );
}

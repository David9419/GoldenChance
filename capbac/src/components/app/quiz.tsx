"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  Clock,
  Flag,
  Hourglass,
  Lock,
  PenLine,
  RotateCcw,
  Send,
  ShieldAlert,
  Trophy,
  X,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SUBJECTS } from "@/content/subjects";
import type { Level, Question, SubjectId } from "@/content/types";
import { isStaff, useRole } from "@/lib/auth";
import { actions, useData, type Assignment, type Attempt } from "@/lib/store";
import { appreciation, fmtNote, isReleased, noteTone } from "@/lib/stats";
import { useNow } from "@/lib/use-now";
import { cn } from "@/lib/utils";
import { Ring } from "./common";
import { Confetti } from "./confetti";
import { RichText } from "./rich-text";
import { toast } from "./toast";

/**
 * - practice : exercice après la leçon, correction immédiate à chaque question.
 * - exam : contrôle, sans correction pendant l'épreuve, note publiée plus tard.
 * - homework : devoir maison, correction dès que la copie est rendue.
 * En mode exam et homework, quitter la page ou l'application fait recommencer l'épreuve.
 */
export type QuizMode = "practice" | "exam" | "homework";

export type QuizProps = {
  questions: Question[];
  context: string;
  chapterId: string;
  subject: SubjectId;
  level: Level;
  kind: Attempt["kind"];
  mode: QuizMode;
  label: string;
  title: string;
  coef: number;
  opensAt?: Date;
  closesAt?: Date;
  /** Fin de l'épreuve (contrôle) : copie ramassée automatiquement. */
  endsAt?: Date;
  assignment?: Assignment;
};

type Phase = "intro" | "run" | "result";

function shuffled(n: number) {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const fmtDay = (d: Date) => d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
const fmtTime = (d: Date) => d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

export function Quiz(props: QuizProps) {
  const { questions, context, mode, label, title, coef, opensAt, closesAt, endsAt, assignment, subject } = props;
  const data = useData();
  const role = useRole();
  const now = useNow(1000);
  const meta = SUBJECTS[subject];
  const guarded = mode !== "practice";

  const [phase, setPhase] = useState<Phase>("intro");
  const [order, setOrder] = useState<number[]>(() => questions.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [result, setResult] = useState<Attempt | null>(null);
  const [exits, setExits] = useState(0);
  const [warning, setWarning] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const startedAt = useRef(0);
  const submitted = useRef(false);
  const running = useRef(false);

  const start = useCallback(() => {
    setOrder(guarded ? shuffled(questions.length) : questions.map((_, i) => i));
    setAnswers(Array(questions.length).fill(-1));
    setChecked(Array(questions.length).fill(false));
    setPos(0);
    setResult(null);
    setConfirming(false);
    submitted.current = false;
    startedAt.current = Date.now();
    running.current = true;
    setPhase("run");
  }, [guarded, questions]);

  const submit = useCallback(
    (final: number[]) => {
      if (submitted.current) return;
      submitted.current = true;
      running.current = false;
      const correct = final.filter((a, i) => a === questions[i].answer).length;
      const score = Math.round((correct / questions.length) * 200) / 10;
      const saved = actions.addAttempt(
        {
          chapterId: props.chapterId,
          subject,
          level: props.level,
          kind: props.kind,
          context,
          score,
          correct,
          total: questions.length,
          answers: final,
          durationSec: Math.round((Date.now() - startedAt.current) / 1000),
          assignmentId: assignment?.id,
          exits,
        },
        `${label} — ${title}`,
        mode === "exam",
      );
      if (assignment) actions.submitAssignment({ assignmentId: assignment.id, attemptId: saved.id, submittedAt: saved.date }, assignment.title);
      setResult(saved);
      setPhase("result");
    },
    [assignment, context, exits, label, mode, props.chapterId, props.kind, props.level, questions, subject, title],
  );

  // Anti-triche : quitter l'onglet, l'application ou la page fait recommencer l'épreuve.
  useEffect(() => {
    if (!guarded || phase !== "run") return;
    const leave = () => {
      if (!running.current || submitted.current) return;
      running.current = false;
      setExits((n) => n + 1);
      setWarning(true);
      setPhase("intro");
      actions.logExit(`${label.toLowerCase()} (${title})`);
    };
    const onVisibility = () => document.visibilityState === "hidden" && leave();
    const onBeforeUnload = (e: BeforeUnloadEvent) => e.preventDefault();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", leave);
    window.addEventListener("pagehide", leave);
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", leave);
      window.removeEventListener("pagehide", leave);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [guarded, phase, label, title]);

  // Quitter la page pendant l'épreuve (changement de page dans l'application).
  useEffect(
    () => () => {
      if (running.current && !submitted.current && guarded) actions.logExit(`${label.toLowerCase()} (${title})`);
    },
    [guarded, label, title],
  );

  // Fin du temps : copie ramassée.
  const answersRef = useRef(answers);
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);
  useEffect(() => {
    if (phase === "run" && endsAt && now >= endsAt) submit(answersRef.current);
  }, [now, endsAt, phase, submit]);

  if (!data) return null;
  const official = data.attempts.find((a) => a.context === context && a.official) ?? null;
  const staff = isStaff(role);

  /* ------------------------------ Vue prof ------------------------------ */
  if (staff) {
    return (
      <Card className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl text-white" style={{ background: meta.gradient }}>
          {mode === "exam" ? <Trophy className="size-6" /> : mode === "homework" ? <PenLine className="size-6" /> : <ClipboardList className="size-6" />}
        </span>
        <div className="flex-1">
          <p className="font-display text-lg font-bold">{label}</p>
          <p className="text-sm text-mist-500">
            {official
              ? `Rendu le ${new Date(official.date).toLocaleDateString("fr-FR")} · ${fmtNote(official.score)}/20 (${official.correct}/${official.total})${official.exits ? ` · ${official.exits} sortie(s) détectée(s)` : ""}`
              : "Pas encore fait par l’élève."}{" "}
            · {questions.length} questions · coef {coef}
          </p>
        </div>
        {official && official.releaseAt && !isReleased(official, now) && (
          <Button size="sm" onClick={() => (actions.releaseAttempt(official.id), toast("Correction publiée", "success"))}>
            <Check /> Publier la correction
          </Button>
        )}
      </Card>
    );
  }

  /* ---------------------------- Déjà rendu ---------------------------- */
  if (phase === "result" && result) {
    if (mode === "exam") return <PendingCorrection attempt={result} label={label} color={meta.color} justSubmitted />;
    return <QuizResult attempt={result} questions={questions} label={label} color={meta.color} onRetry={mode === "practice" ? start : undefined} />;
  }
  if (phase === "intro" && official && !warning) {
    if (mode === "exam" && !isReleased(official, now)) return <PendingCorrection attempt={official} label={label} color={meta.color} />;
    return <QuizResult attempt={official} questions={questions} label={label} color={meta.color} onRetry={mode === "practice" ? start : undefined} compact />;
  }

  /* ------------------------------ Fenêtres ------------------------------ */
  if (phase === "intro" && opensAt && now < opensAt) {
    const mins = Math.round((opensAt.getTime() - now.getTime()) / 60000);
    return (
      <Card className="flex flex-col items-center gap-3 p-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-fg/[0.06] text-mist-500">
          <Lock className="size-6" />
        </span>
        <p className="font-display text-lg font-bold">{label} pas encore ouvert</p>
        <p className="max-w-sm text-sm text-mist-500">
          Ouverture le {fmtDay(opensAt)} à {fmtTime(opensAt)}
          {mins < 180 ? ` (dans ${mins} min)` : ""}. Impossible de le faire à l’avance : révise d’ici là !
        </p>
      </Card>
    );
  }
  if (phase === "intro" && closesAt && now > closesAt) {
    return (
      <Card className="flex flex-col items-center gap-3 border-rose-400/25 p-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-300">
          <XCircle className="size-6" />
        </span>
        <p className="font-display text-lg font-bold">{mode === "exam" ? "Contrôle manqué" : "Date limite dépassée"}</p>
        <p className="max-w-sm text-sm text-mist-500">
          {mode === "exam"
            ? "Le contrôle n’a pas été rendu pendant le créneau prévu. Vois avec ton professeur pour un rattrapage."
            : "Ce travail n’a pas été rendu à temps."}
        </p>
      </Card>
    );
  }

  /* -------------------------------- Intro -------------------------------- */
  if (phase === "intro") {
    const remainingMin = endsAt ? Math.max(0, Math.round((endsAt.getTime() - now.getTime()) / 60000)) : null;
    return (
      <Card className="relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full blur-3xl" style={{ background: meta.color, opacity: 0.18 }} />
        <AnimatePresence>
          {warning && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative mb-5 flex items-start gap-3 rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4 text-sm text-rose-100"
            >
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-rose-300" />
              <p>
                <strong>Tu as quitté l’épreuve.</strong> Pour éviter la triche, elle recommence depuis le début (questions mélangées). Ton professeur est prévenu (
                {exits} sortie{exits > 1 ? "s" : ""}).
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl text-white" style={{ background: meta.gradient }}>
              {mode === "exam" ? <Trophy className="size-7" /> : mode === "homework" ? <PenLine className="size-7" /> : <ClipboardList className="size-7" />}
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold">{label}</h3>
              <p className="mt-1 text-sm text-mist-300">{title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="outline">{questions.length} questions</Badge>
                <Badge variant="outline">Coefficient {coef}</Badge>
                {remainingMin !== null && (
                  <Badge variant="warning">
                    <Clock /> {remainingMin} min restantes
                  </Badge>
                )}
              </div>
              <ul className="mt-4 grid gap-1.5 text-xs text-mist-500">
                {mode === "practice" && <li>• Correction immédiate après chaque question, avec l’explication.</li>}
                {mode === "practice" && <li>• Seule la première tentative compte dans ta moyenne.</li>}
                {guarded && <li className="text-rose-300">• Si tu quittes la page, l’onglet ou l’application, l’épreuve recommence à zéro.</li>}
                {mode === "exam" && <li>• Une seule copie. La note et la correction arrivent quelques jours après.</li>}
                {mode === "homework" && <li>• Correction détaillée dès que tu rends ta copie.</li>}
              </ul>
            </div>
          </div>
          <Button size="lg" onClick={start} className="shrink-0">
            {warning ? (
              <>
                <RotateCcw /> Recommencer
              </>
            ) : (
              <>
                Commencer <ArrowRight />
              </>
            )}
          </Button>
        </div>
      </Card>
    );
  }

  /* -------------------------------- Épreuve -------------------------------- */
  const qIndex = order[pos];
  const q = questions[qIndex];
  const chosen = answers[qIndex];
  const isChecked = checked[qIndex];
  const last = pos === questions.length - 1;
  const answered = answers.filter((a) => a >= 0).length;
  const remaining = endsAt ? Math.max(0, Math.floor((endsAt.getTime() - now.getTime()) / 1000)) : null;

  const body = (
    <div className={cn("mx-auto w-full", guarded && "max-w-3xl")}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-mist-300">
          {label} · Question <span className="text-mist-100">{pos + 1}</span>/{questions.length}
        </p>
        {remaining !== null && (
          <span
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-sm font-bold",
              remaining < 300 ? "border-rose-400/40 bg-rose-500/15 text-rose-200" : "border-border bg-fg/[0.04]",
            )}
          >
            <Clock className="size-3.5" />
            {Math.floor(remaining / 3600) > 0 && `${Math.floor(remaining / 3600)}:`}
            {String(Math.floor((remaining % 3600) / 60)).padStart(2, "0")}:{String(remaining % 60).padStart(2, "0")}
          </span>
        )}
      </div>
      <Progress value={((pos + 1) / questions.length) * 100} className="mt-3" indicatorStyle={{ background: meta.gradient }} />

      <AnimatePresence mode="wait">
        <motion.div key={pos} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }} className="mt-7">
          <p className="text-lg leading-relaxed font-semibold whitespace-pre-line text-mist-100">
            <RichText text={q.prompt} />
          </p>
          <div className="mt-6 grid gap-2.5">
            {q.choices.map((c, i) => {
              const active = chosen === i;
              const good = isChecked && i === q.answer;
              const bad = isChecked && active && i !== q.answer;
              return (
                <motion.button
                  key={i}
                  whileTap={isChecked ? undefined : { scale: 0.98 }}
                  disabled={isChecked}
                  onClick={() => setAnswers((prev) => prev.map((a, j) => (j === qIndex ? i : a)))}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-left text-sm transition-all disabled:cursor-default",
                    good && "border-emerald-400/70 bg-emerald-500/15 text-mist-100",
                    bad && "border-rose-400/70 bg-rose-500/15 text-mist-100",
                    !good && !bad && active && "border-brand-400/70 bg-brand-500/20 text-mist-100 shadow-[0_0_0_3px_rgba(99,102,241,0.18)]",
                    !good && !bad && !active && "border-border bg-fg/[0.02] text-mist-300 hover:border-fg/20 hover:bg-fg/[0.05]",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold",
                      good
                        ? "border-emerald-300 bg-emerald-500 text-white"
                        : bad
                          ? "border-rose-300 bg-rose-500 text-white"
                          : active
                            ? "border-brand-300 bg-brand-500 text-white"
                            : "border-border text-mist-500",
                    )}
                  >
                    {good ? <Check className="size-4" /> : bad ? <X className="size-4" /> : String.fromCharCode(65 + i)}
                  </span>
                  <span className="leading-relaxed">
                    <RichText text={c} />
                  </span>
                </motion.button>
              );
            })}
          </div>
          {mode === "practice" && isChecked && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "mt-5 rounded-2xl border p-4 text-sm leading-relaxed",
                chosen === q.answer ? "border-emerald-400/30 bg-emerald-500/[0.07]" : "border-rose-400/30 bg-rose-500/[0.07]",
              )}
            >
              <p className={cn("mb-1.5 flex items-center gap-2 font-bold", chosen === q.answer ? "text-emerald-300" : "text-rose-300")}>
                {chosen === q.answer ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />}
                {chosen === q.answer ? "Bonne réponse !" : `Pas tout à fait : la bonne réponse est la ${String.fromCharCode(65 + q.answer)}.`}
              </p>
              <p className="text-mist-300">
                <RichText text={q.explanation} />
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-7 flex items-center justify-between gap-3">
        {mode === "practice" ? (
          <span className="text-xs text-mist-500">
            {checked.filter(Boolean).length}/{questions.length} corrigées
          </span>
        ) : (
          <Button variant="ghost" disabled={pos === 0} onClick={() => setPos(pos - 1)}>
            Précédente
          </Button>
        )}
        {mode !== "practice" && (
          <div className="hidden gap-1.5 sm:flex">
            {order.map((qi, i) => (
              <button
                key={i}
                onClick={() => setPos(i)}
                aria-label={`Question ${i + 1}`}
                className={cn("size-2.5 cursor-pointer rounded-full transition-all", i === pos ? "w-6 bg-brand-400" : answers[qi] >= 0 ? "bg-brand-400/50" : "bg-fg/15")}
              />
            ))}
          </div>
        )}
        {mode === "practice" ? (
          !isChecked ? (
            <Button disabled={chosen < 0} onClick={() => setChecked((prev) => prev.map((c, j) => (j === qIndex ? true : c)))}>
              <Check /> Valider ma réponse
            </Button>
          ) : last ? (
            <Button variant="success" onClick={() => submit(answers)}>
              <Flag /> Voir mon résultat
            </Button>
          ) : (
            <Button onClick={() => setPos(pos + 1)}>
              Question suivante <ArrowRight />
            </Button>
          )
        ) : last ? (
          <Button variant="success" onClick={() => setConfirming(true)}>
            <Send /> Rendre ma copie
          </Button>
        ) : (
          <Button onClick={() => setPos(pos + 1)}>
            Suivante <ArrowRight />
          </Button>
        )}
      </div>

      <AnimatePresence>
        {confirming && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 flex flex-col gap-3 rounded-2xl border border-border bg-fg/[0.04] p-4 sm:flex-row sm:items-center"
          >
            <p className="flex-1 text-sm">
              {answered < questions.length ? `Il reste ${questions.length - answered} question(s) sans réponse. ` : "Toutes les questions ont une réponse. "}
              Rendre ta copie définitivement ?
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => setConfirming(false)}>
                Continuer
              </Button>
              <Button variant="success" size="sm" onClick={() => submit(answers)}>
                <Send /> Rendre
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (!guarded) return <Card className="overflow-hidden p-5 sm:p-8">{body}</Card>;

  // Mode examen plein écran : rien d'autre n'est accessible pendant l'épreuve.
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[80] overflow-y-auto bg-ink-950">
      <div className="app-aurora" aria-hidden />
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-border bg-ink-950/85 px-4 py-3 backdrop-blur-xl sm:px-8">
        <span className="flex items-center gap-2 text-sm font-bold">
          <ShieldAlert className="size-4 text-rose-300" /> Mode examen
          <span className="hidden font-medium text-mist-500 sm:inline">· ne quitte pas cette page, sinon l’épreuve recommence</span>
        </span>
        <span className="text-sm font-semibold" style={{ color: meta.color }}>
          {meta.name}
        </span>
      </div>
      <div className="px-4 py-8 sm:px-8 sm:py-12">{body}</div>
    </motion.div>
  );
}

function QuizResult({
  attempt,
  questions,
  label,
  onRetry,
  color,
  compact,
}: {
  attempt: Attempt;
  questions: Question[];
  label: string;
  onRetry?: () => void;
  color: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(!compact);
  return (
    <div className="flex flex-col gap-4">
      <Card className="relative overflow-hidden p-6 sm:p-8">
        {!compact && attempt.score >= 14 && <Confetti />}
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <Ring value={attempt.score} max={20} size={compact ? 96 : 130} stroke={compact ? 9 : 12} color={color}>
            <span className={cn("font-display font-bold", compact ? "text-2xl" : "text-4xl", noteTone(attempt.score))}>{fmtNote(attempt.score)}</span>
            <span className="text-xs text-mist-500">/ 20</span>
          </Ring>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">{label} · terminé</p>
            <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">{appreciation(attempt.score)}</h3>
            <p className="mt-2 text-sm text-mist-300">
              {attempt.correct} bonne{attempt.correct > 1 ? "s" : ""} réponse{attempt.correct > 1 ? "s" : ""} sur {attempt.total}
              {attempt.official ? " · note enregistrée dans ton bulletin" : " · entraînement (non noté)"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {compact && (
              <Button variant="secondary" onClick={() => setOpen(!open)}>
                {open ? "Masquer la correction" : "Voir la correction"}
              </Button>
            )}
            {onRetry && (
              <Button variant="ghost" onClick={onRetry}>
                <RotateCcw /> S’entraîner encore
              </Button>
            )}
          </div>
        </div>
      </Card>

      {open && (
        <div className="flex flex-col gap-3">
          <h4 className="mt-1 font-display text-lg font-semibold">Correction détaillée</h4>
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
                      <p className="mt-3 rounded-xl bg-fg/[0.03] p-3 text-sm leading-relaxed text-mist-300">
                        <RichText text={q.explanation} />
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PendingCorrection({ attempt, label, color, justSubmitted }: { attempt: Attempt; label: string; color: string; justSubmitted?: boolean }) {
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
            Rendue le {fmtDay(new Date(attempt.date))}.{" "}
            {release && (
              <>
                Note et correction disponibles le <strong>{fmtDay(release)}</strong>.
              </>
            )}
          </p>
        </div>
      </div>
    </Card>
  );
}

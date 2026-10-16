"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, PenLine, RotateCcw, Send, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/input";
import { actions, type Assignment } from "@/lib/store";
import { toast } from "./toast";

/**
 * Devoir rédigé en « mode examen » : si l'élève quitte la page ou l'application,
 * sa copie est effacée et le devoir recommence.
 */
export function GuardedText({ assignment }: { assignment: Assignment }) {
  const [running, setRunning] = useState(false);
  const [text, setText] = useState("");
  const [warning, setWarning] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const active = useRef(false);

  useEffect(() => {
    if (!running) return;
    const leave = () => {
      if (!active.current) return;
      active.current = false;
      setRunning(false);
      setText("");
      setConfirming(false);
      setWarning((n) => n + 1);
      actions.logExit(`le devoir « ${assignment.title} »`);
    };
    const onVis = () => document.visibilityState === "hidden" && leave();
    const onUnload = (e: BeforeUnloadEvent) => e.preventDefault();
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("blur", leave);
    window.addEventListener("pagehide", leave);
    window.addEventListener("beforeunload", onUnload);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("blur", leave);
      window.removeEventListener("pagehide", leave);
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [running, assignment.title]);

  if (!running) {
    return (
      <Card className="flex flex-col gap-5 p-6 sm:p-8">
        <AnimatePresence>
          {warning > 0 && (
            <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3 rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4 text-sm text-rose-100">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-rose-300" />
              <span>
                <strong>Tu as quitté le devoir</strong> : ta copie a été effacée et le devoir recommence. Ton professeur est prévenu.
              </span>
            </motion.p>
          )}
        </AnimatePresence>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-300">
              <PenLine className="size-6" />
            </span>
            <div>
              <p className="font-display text-lg font-bold">Réponse rédigée</p>
              <p className="text-sm text-mist-500">Prévois le temps de tout écrire d’un coup.</p>
              <p className="mt-1 text-xs text-rose-300">Si tu quittes la page, l’onglet ou l’application, ta copie est effacée.</p>
            </div>
          </div>
          <Button
            size="lg"
            onClick={() => {
              active.current = true;
              setRunning(true);
            }}
          >
            {warning ? <RotateCcw /> : null} {warning ? "Recommencer" : "Commencer le devoir"} {!warning && <ArrowRight />}
          </Button>
        </div>
      </Card>
    );
  }

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[80] overflow-y-auto bg-ink-950">
      <div className="app-aurora" aria-hidden />
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-border bg-ink-950/85 px-4 py-3 backdrop-blur-xl sm:px-8">
        <span className="flex items-center gap-2 text-sm font-bold">
          <ShieldAlert className="size-4 text-rose-300" /> Mode examen · {assignment.title}
        </span>
        <span className="text-xs text-mist-500">{words} mots</span>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8 sm:px-8">
        {assignment.instructions && <p className="rounded-2xl border border-border bg-fg/[0.03] p-4 whitespace-pre-line text-mist-100">{assignment.instructions}</p>}
        <Textarea autoFocus value={text} onChange={(e) => setText(e.target.value)} className="min-h-[55vh] text-base leading-relaxed" placeholder="Écris ta réponse ici…" />
        {confirming ? (
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-fg/[0.04] p-4 sm:flex-row sm:items-center">
            <p className="flex-1 text-sm">Rendre ta copie ? Tu ne pourras plus la modifier.</p>
            <Button variant="ghost" size="sm" onClick={() => setConfirming(false)}>
              Continuer
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                active.current = false;
                actions.submitAssignment({ assignmentId: assignment.id, text: text.trim(), submittedAt: new Date().toISOString() }, assignment.title);
                toast("Copie rendue !", "success");
              }}
            >
              <Send /> Rendre
            </Button>
          </div>
        ) : (
          <Button className="self-end" disabled={text.trim().length < 10} onClick={() => setConfirming(true)}>
            <Send /> Rendre ma copie
          </Button>
        )}
      </div>
    </motion.div>
  );
}

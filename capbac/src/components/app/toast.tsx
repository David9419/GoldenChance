"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Info, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "success" | "warning" | "info";
type Toast = { id: number; text: string; tone: Tone };

let toasts: Toast[] = [];
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

/** Petite notification en bas de l'écran. */
export function toast(text: string, tone: Tone = "info") {
  const id = Date.now() + Math.random();
  toasts = [...toasts, { id, text, tone }];
  emit();
  window.setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    emit();
  }, 3200);
}

const EMPTY: Toast[] = [];

export function Toaster() {
  const list = useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => toasts,
    () => EMPTY,
  );
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-[60] flex flex-col items-center gap-2 px-4 lg:bottom-6">
      <AnimatePresence>
        {list.map((t) => {
          const Icon = t.tone === "success" ? CheckCircle2 : t.tone === "warning" ? TriangleAlert : Info;
          return (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className={cn(
                "glass flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold shadow-2xl",
                t.tone === "success" && "text-emerald-200",
                t.tone === "warning" && "text-amber-200",
              )}
            >
              <Icon className="size-4" /> {t.text}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

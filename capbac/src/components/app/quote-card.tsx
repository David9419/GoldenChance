"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { quoteOfDay } from "@/content/quotes";

/** Phrase motivante du jour, affichée mot par mot. */
export function QuoteCard({ date }: { date: Date }) {
  const q = quoteOfDay(date);
  const words = q.text.split(" ");
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass relative overflow-hidden rounded-3xl p-6 sm:p-7"
    >
      <div className="pointer-events-none absolute -top-16 -left-10 size-48 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 -bottom-16 size-48 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative flex gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#fbbf24,#f472b6)] text-white shadow-lg">
          <Quote className="size-5" />
        </span>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">La phrase du jour</p>
          <blockquote className="mt-2 font-display text-lg leading-snug font-semibold sm:text-xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.25 + i * 0.045, duration: 0.35 }}
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </blockquote>
          {q.author && (
            <motion.figcaption
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + words.length * 0.045 }}
              className="mt-2 text-sm text-mist-500"
            >
              — {q.author}
            </motion.figcaption>
          )}
        </div>
      </div>
    </motion.figure>
  );
}

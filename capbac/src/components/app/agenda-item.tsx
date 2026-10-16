"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, ClipboardList, Hourglass, PenLine, Trophy } from "lucide-react";
import { SUBJECTS } from "@/content/subjects";
import { STATUS_LABEL, type AgendaItem } from "@/lib/agenda";
import { formatHour } from "@/lib/dates";
import { cn } from "@/lib/utils";

const TYPE_ICON = { controle: Trophy, exercice: ClipboardList, devoir: PenLine };

export function AgendaRow({ item, index = 0 }: { item: AgendaItem; index?: number }) {
  const meta = SUBJECTS[item.subject];
  const Icon = TYPE_ICON[item.type];
  const done = item.status !== "a-faire" && item.status !== "en-retard";
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * 0.04, 0.3) }}>
      <Link
        href={item.href}
        className={cn(
          "group flex items-center gap-3 rounded-2xl border p-3 transition-all hover:-translate-y-0.5 hover:bg-fg/[0.04]",
          item.type === "controle" && !done ? "border-amber-400/30 bg-amber-500/[0.06]" : "border-border bg-fg/[0.02]",
        )}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: meta.gradient }}>
          <Icon className="size-[18px]" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex flex-wrap items-center gap-x-2 text-sm font-semibold">
            <span>{item.title}</span>
            <span className="text-xs font-bold" style={{ color: meta.color }}>
              {meta.short}
            </span>
            {item.time && <span className="text-xs font-medium text-mist-500">· {formatHour(item.time)}</span>}
            {item.fromProf && <span className="rounded-md bg-emerald-500/15 px-1.5 text-[0.62rem] font-bold text-emerald-300">Prof</span>}
          </p>
          <p className="truncate text-xs text-mist-500">{item.subtitle}</p>
        </div>
        <span
          className={cn(
            "hidden items-center gap-1 rounded-full border px-2 py-0.5 text-[0.68rem] font-bold sm:inline-flex",
            item.status === "a-faire" && "border-border text-mist-300",
            item.status === "en-retard" && "border-rose-400/30 bg-rose-500/10 text-rose-300",
            (item.status === "fait" || item.status === "corrige") && "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
            item.status === "en-correction" && "border-amber-400/30 bg-amber-500/10 text-amber-300",
            item.status === "rendu" && "border-brand-400/30 bg-brand-500/10 text-brand-300",
          )}
        >
          {item.status === "en-correction" ? <Hourglass className="size-3" /> : done ? <CheckCircle2 className="size-3" /> : null}
          {STATUS_LABEL[item.status]}
        </span>
        <ChevronRight className="size-4 text-mist-500 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

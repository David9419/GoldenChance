"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { Check, Clock, X, CircleDashed, CircleDot, Minus } from "lucide-react";
import type { LiveStatus } from "@/lib/calendar";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs font-bold tracking-[0.18em] text-brand-300 uppercase"
          >
            {eyebrow}
          </motion.p>
        )}
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-mist-300">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

/** Conteneur qui fait apparaître ses enfants en cascade. */
export function Stagger({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Nombre qui défile jusqu'à sa valeur. */
export function CountUp({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, value, { duration: 1.1, ease: [0.22, 0.61, 0.36, 1], onUpdate: setDisplay });
    return () => ctrl.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {display.toFixed(decimals).replace(".", ",")}
      {suffix}
    </span>
  );
}

/** Anneau de progression animé. */
export function Ring({
  value,
  max = 100,
  size = 120,
  stroke = 10,
  color = "url(#ring-grad)",
  children,
}: {
  value: number | null;
  max?: number;
  size?: number;
  stroke?: number;
  color?: string;
  children?: React.ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = value === null ? 0 : Math.max(0, Math.min(1, value / max));
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#818cf8" />
            <stop offset="1" stopColor="#f0abfc" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - pct) }}
          transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
    </div>
  );
}

export const STATUS_META: Record<LiveStatus, { label: string; className: string; icon: typeof Check }> = {
  present: { label: "Présent", className: "border-emerald-400/30 bg-emerald-500/15 text-emerald-300", icon: Check },
  retard: { label: "En retard", className: "border-amber-400/30 bg-amber-500/15 text-amber-300", icon: Clock },
  absent: { label: "Absent", className: "border-rose-400/30 bg-rose-500/15 text-rose-300", icon: X },
  "en-cours": { label: "En cours", className: "border-brand-400/40 bg-brand-500/20 text-brand-200", icon: CircleDot },
  "a-venir": { label: "À venir", className: "border-border bg-white/[0.04] text-mist-500", icon: CircleDashed },
  "non-suivi": { label: "Non suivi", className: "border-border bg-white/[0.02] text-mist-500", icon: Minus },
};

export function StatusPill({ status, justified, className }: { status: LiveStatus; justified?: boolean; className?: string }) {
  const meta = STATUS_META[status];
  const Icon = meta.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.7rem] font-bold whitespace-nowrap",
        meta.className,
        className,
      )}
    >
      <Icon className="size-3" />
      {meta.label}
      {status === "absent" && (justified ? " · justifiée" : " · non justifiée")}
    </span>
  );
}

export function EmptyState({ icon: Icon, title, text, children }: { icon: typeof Check; title: string; text: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border px-6 py-12 text-center">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-white/[0.05] text-mist-500">
        <Icon className="size-6" />
      </span>
      <p className="mt-4 font-semibold">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-mist-500">{text}</p>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}

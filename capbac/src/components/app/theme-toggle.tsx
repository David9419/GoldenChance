"use client";

import { AnimatePresence, motion } from "motion/react";
import { Monitor, Moon, Sun } from "lucide-react";
import { resolvedLight, setTheme, useTheme, type ThemePref } from "@/lib/theme";
import { cn } from "@/lib/utils";

/** Petit bouton soleil / lune. */
export function ThemeToggle({ className }: { className?: string }) {
  const pref = useTheme();
  const light = typeof window !== "undefined" && resolvedLight(pref);
  return (
    <button
      type="button"
      onClick={() => setTheme(light ? "dark" : "light")}
      aria-label={light ? "Passer en mode sombre" : "Passer en mode clair"}
      className={cn(
        "relative flex size-9 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-border bg-fg/[0.04] text-mist-300 transition-colors hover:text-mist-100",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={light ? "sun" : "moon"}
          initial={{ y: 18, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -18, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {light ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

const OPTIONS: { value: ThemePref; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Clair", icon: Sun },
  { value: "dark", label: "Sombre", icon: Moon },
  { value: "system", label: "Automatique", icon: Monitor },
];

/** Sélecteur complet (page Paramètres). */
export function ThemePicker() {
  const pref = useTheme();
  return (
    <div className="grid grid-cols-3 gap-3">
      {OPTIONS.map((o) => {
        const active = pref === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => setTheme(o.value)}
            className={cn(
              "group relative flex cursor-pointer flex-col items-center gap-3 overflow-hidden rounded-2xl border p-4 transition-all hover:-translate-y-0.5",
              active ? "border-brand-400/60 bg-brand-500/10" : "border-border bg-fg/[0.02]",
            )}
          >
            <span
              className={cn(
                "flex h-14 w-full items-end gap-1 rounded-xl border border-border p-1.5",
                o.value === "light" ? "bg-[#f4f5fb]" : o.value === "dark" ? "bg-[#0c0e1a]" : "bg-[linear-gradient(90deg,#f4f5fb_50%,#0c0e1a_50%)]",
              )}
            >
              <span className="h-full w-1/4 rounded-md bg-[#6366f1]/70" />
              <span className="h-2/3 w-1/4 rounded-md bg-[#f472b6]/70" />
              <span className="h-1/2 w-1/4 rounded-md bg-[#34d399]/70" />
              <span className="h-3/4 w-1/4 rounded-md bg-[#fbbf24]/70" />
            </span>
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              <o.icon className="size-4" /> {o.label}
            </span>
            {active && <motion.span layoutId="theme-active" className="absolute inset-0 rounded-2xl ring-2 ring-brand-400" />}
          </button>
        );
      })}
    </div>
  );
}

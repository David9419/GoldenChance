"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LogoMark } from "./logo";

/** Affiché une seule fois par chargement de la page (pas à chaque navigation). */
let shown = false;

const DURATION = 2200;
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/** Écran de démarrage : logo + pourcentage 0 → 100 %, puis ouverture sur l'application. */
export function SplashLoader({ ready }: { ready: boolean }) {
  const [visible, setVisible] = useState(() => !shown);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      // Tant que les données ne sont pas prêtes, on plafonne à 92 %.
      const value = Math.round(ease(p) * 100);
      setPct(ready ? value : Math.min(value, 92));
      if (p < 1 || !ready) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, ready]);

  useEffect(() => {
    if (pct < 100) return;
    const id = window.setTimeout(() => {
      shown = true;
      setVisible(false);
    }, 380);
    return () => window.clearTimeout(id);
  }, [pct]);

  // Pas de défilement pendant le chargement
  useEffect(() => {
    if (!visible) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          role="status"
          aria-label={`Chargement ${pct} %`}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink-950"
          exit={{ opacity: 0, scale: 1.06, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          <div aria-hidden className="app-aurora absolute inset-0 opacity-80" />
          {/* Anneaux qui tournent autour du logo */}
          <div aria-hidden className="absolute top-1/2 left-1/2">
            {[200, 290, 400].map((sz, i) => (
              <motion.span
                key={sz}
                className="absolute rounded-full border border-fg/[0.07]"
                style={{ width: sz, height: sz, left: -sz / 2, top: -sz / 2, borderTopColor: ["#818cf8", "#f0abfc", "#22d3ee"][i] }}
                animate={{ rotate: i % 2 ? -360 : 360 }}
                transition={{ duration: 3 + i * 1.6, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            <motion.div initial={{ scale: 0.6, opacity: 0, rotate: -12 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 160, damping: 13 }}>
              <LogoMark className="size-24 drop-shadow-[0_24px_50px_rgba(99,102,241,0.6)]" />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 font-display text-3xl font-bold tracking-tight">
              Cap<span className="text-gradient">Bac</span>
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="text-xs font-semibold tracking-[0.2em] text-mist-500 uppercase">
              Ma route vers le bac
            </motion.p>

            <p className="mt-10 font-display text-6xl font-bold tabular-nums">
              <span className="text-gradient">{pct}</span>
              <span className="text-3xl text-mist-500">%</span>
            </p>
            <div className="mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-fg/[0.08]">
              <div className="h-full rounded-full bg-[linear-gradient(90deg,#818cf8,#c026d3,#22d3ee)] shadow-[0_0_18px_rgba(129,140,248,0.8)]" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-3 h-4 text-xs text-mist-500">{pct < 40 ? "Préparation de tes cours…" : pct < 80 ? "Chargement de l’emploi du temps…" : pct < 100 ? "Presque prêt…" : "C’est parti !"}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

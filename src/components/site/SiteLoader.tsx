"use client";

import * as React from "react";
import { motion } from "motion/react";

import { site } from "@/content/site";
import { Logo } from "@/components/site/Logo";
import { markSiteReady } from "@/lib/site-ready";
import { scrollToSection } from "@/lib/smooth-scroll";

/** Durée du compteur 0 → 100 % (ms). */
const COUNT_MS = 2300;
const EASE = [0.76, 0, 0.24, 1] as const;

type Phase = "counting" | "leaving" | "done";

/** Montée régulière, qui ralentit juste avant 100 (comme un vrai chargement). */
const progressCurve = (t: number) => 1 - Math.pow(1 - t, 1.7);

/**
 * Écran d'arrivée : logo + pourcentage qui défile de 0 à 100 avec une fine
 * barre dorée. À 100 %, le contenu s'efface, un filet doré traverse l'écran
 * et l'écran s'ouvre en deux (haut / bas) sur l'accueil, dont les animations
 * démarrent exactement à ce moment-là.
 */
export function SiteLoader() {
  const [progress, setProgress] = React.useState(0);
  const [phase, setPhase] = React.useState<Phase>("counting");

  // Compteur 0 → 100, synchronisé avec le chargement réel de la page.
  React.useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo(0, 0);

    let loaded = document.readyState === "complete";
    const onLoad = () => (loaded = true);
    window.addEventListener("load", onLoad);
    // Sécurité : on n'attend jamais le chargement plus de 6 s.
    const safety = window.setTimeout(() => (loaded = true), 6000);

    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / COUNT_MS, 1);
      let value = Math.round(progressCurve(t) * 100);
      if (!loaded) value = Math.min(value, 96);
      setProgress(value);
      if (value >= 100) {
        window.setTimeout(() => setPhase("leaving"), 280);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(safety);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // Ouverture : le site devient « prêt » pendant que l'écran s'ouvre.
  React.useEffect(() => {
    if (phase !== "leaving") return;
    const ready = window.setTimeout(() => {
      markSiteReady();
      const hash = window.location.hash.slice(1);
      if (hash)
        window.setTimeout(() => scrollToSection(decodeURIComponent(hash)), 700);
    }, 400);
    const done = window.setTimeout(() => setPhase("done"), 1700);
    return () => {
      window.clearTimeout(ready);
      window.clearTimeout(done);
    };
  }, [phase]);

  const leaving = phase === "leaving";

  return (
    phase !== "done" && (
      <div
        aria-hidden
        className="site-loader pointer-events-none fixed inset-0 z-[500]"
      >
        {/* Deux volets : ils s'écartent (haut / bas) pour révéler le site. */}
        <motion.div
          className="absolute inset-x-0 top-0 h-1/2 bg-navy-950"
          initial={false}
          animate={{ y: leaving ? "-100%" : "0%" }}
          transition={{ duration: 1.1, ease: EASE, delay: leaving ? 0.45 : 0 }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-navy-950"
          initial={false}
          animate={{ y: leaving ? "100%" : "0%" }}
          transition={{ duration: 1.1, ease: EASE, delay: leaving ? 0.45 : 0 }}
        />

        {/* Filet doré qui traverse l'écran juste avant l'ouverture. */}
        <motion.div
          className="absolute inset-x-0 top-1/2 h-px origin-center bg-[linear-gradient(90deg,transparent,#e0c07f_30%,#f6e2b3_50%,#e0c07f_70%,transparent)] shadow-[0_0_18px_rgba(224,192,127,0.7)]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            leaving
              ? { scaleX: [0, 1, 1], opacity: [1, 1, 0] }
              : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 1.1, times: [0, 0.45, 1], ease: "easeInOut" }}
        />

        {/* Logo + pourcentage + barre. */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
          animate={
            leaving
              ? { opacity: 0, scale: 1.06, y: -24, filter: "blur(12px)" }
              : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
          }
          transition={{
            duration: leaving ? 0.5 : 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-[radial-gradient(circle,rgba(201,162,91,0.22),transparent_65%)] blur-2xl" />
            <Logo size={148} priority decorative />
          </div>

          <div className="mt-8 flex items-start font-serif leading-none">
            <span className="loader-digits bg-[linear-gradient(170deg,#f6e2b3,#e0c07f_45%,#a8823f)] bg-clip-text text-[clamp(3.6rem,9vw,5.4rem)] font-medium text-transparent">
              {progress}
            </span>
            <span className="ml-1.5 mt-2 text-[clamp(1.2rem,2.6vw,1.6rem)] italic text-gold-300">
              %
            </span>
          </div>

          <div className="mt-6 h-px w-[min(260px,62vw)] overflow-hidden bg-[rgba(199,209,219,0.14)]">
            <div
              className="h-full origin-left bg-[linear-gradient(90deg,#a8823f,#e0c07f,#f6e2b3)] shadow-[0_0_10px_rgba(224,192,127,0.6)]"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>

          <p className="mt-6 text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-slate-500">
            {site.slogan}
          </p>
        </motion.div>
      </div>
    )
  );
}

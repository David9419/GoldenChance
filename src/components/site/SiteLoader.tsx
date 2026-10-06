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

/** Étincelles dorées : positions fixes (identiques serveur / navigateur). */
const SPARKS: React.CSSProperties[] = Array.from({ length: 34 }, (_, i) => {
  const r = (n: number) =>
    (Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1;
  const a = Math.abs(r(1));
  const b = Math.abs(r(2));
  const c = Math.abs(r(3));
  const size = 1.5 + c * 2.5;
  return {
    left: `${(a * 100).toFixed(2)}%`,
    top: `${(30 + b * 70).toFixed(2)}%`,
    width: `${size.toFixed(1)}px`,
    height: `${size.toFixed(1)}px`,
    animationDuration: `${(5 + c * 6).toFixed(2)}s`,
    animationDelay: `${(-a * 8).toFixed(2)}s`,
  };
});

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
        className="site-loader pointer-events-none fixed inset-0 z-[500] overflow-hidden"
      >
        {/* Deux volets noirs : ils s'écartent (haut / bas) pour révéler le site. */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[50.5%] bg-[#030306]"
          initial={false}
          animate={{ y: leaving ? "-100%" : "0%" }}
          transition={{ duration: 1.1, ease: EASE, delay: leaving ? 0.45 : 0 }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[50.5%] bg-[#030306]"
          initial={false}
          animate={{ y: leaving ? "100%" : "0%" }}
          transition={{ duration: 1.1, ease: EASE, delay: leaving ? 0.45 : 0 }}
        />

        {/* Décor : lumière dorée, étincelles, vignette, grain (s'efface avant l'ouverture). */}
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: leaving ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="loader-aurora absolute inset-0" />
          <div className="absolute inset-0">
            {SPARKS.map((spark, i) => (
              <span
                key={i}
                className="loader-spark absolute rounded-full"
                style={spark}
              />
            ))}
          </div>
          {/* Grain fin : lisse les dégradés sombres (pas de cercles visibles). */}
          <div className="grain absolute inset-0 !opacity-[0.06] !mix-blend-normal" />
        </motion.div>

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

        {/* Logo + anneau doré + pourcentage + barre (centrés, sans filtre plein écran). */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={
              leaving
                ? { opacity: 0, scale: 1.08, y: -28 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{
              duration: leaving ? 0.5 : 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="relative flex size-[230px] items-center justify-center">
              {/* Anneau fin + reflet doré qui tourne autour du logo. */}
              <span className="absolute inset-0 rounded-full border border-[rgba(224,192,127,0.14)]" />
              <span className="loader-ring absolute inset-0 rounded-full" />
              <Logo size={148} priority decorative />
            </div>

            <div className="mt-6 flex items-start font-serif leading-none">
              <span className="loader-digits bg-[linear-gradient(170deg,#f6e2b3,#e0c07f_45%,#a8823f)] bg-clip-text text-[clamp(3.6rem,9vw,5.4rem)] font-medium text-transparent">
                {progress}
              </span>
              <span className="ml-1.5 mt-2 text-[clamp(1.2rem,2.6vw,1.6rem)] italic text-gold-300">
                %
              </span>
            </div>

            <div className="mt-6 h-px w-[min(260px,62vw)] overflow-hidden bg-[rgba(224,192,127,0.12)]">
              <div
                className="h-full origin-left bg-[linear-gradient(90deg,#a8823f,#e0c07f,#f6e2b3)] shadow-[0_0_10px_rgba(224,192,127,0.6)]"
                style={{ transform: `scaleX(${progress / 100})` }}
              />
            </div>

            <p className="mt-6 px-6 text-center text-[0.6rem] font-semibold uppercase tracking-[0.2em] sm:text-[0.66rem] sm:tracking-[0.34em] text-[#8a7a5c]">
              {site.slogan}
            </p>
          </motion.div>
        </div>
      </div>
    )
  );
}

"use client";

import * as React from "react";

import { Logo } from "@/components/site/Logo";


/**
 * Rideau d'arrivée : logo doré + filet qui se dessine, puis fondu.
 * Animé en CSS pur pour démarrer avant même le chargement du JavaScript.
 */
export function Intro() {
  React.useEffect(() => {
    // Après l'intro, les entrées du hero n'attendent plus (navigation interne).
    const timer = window.setTimeout(
      () => document.documentElement.setAttribute("data-intro-seen", ""),
      1900,
    );
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden
      className="intro-curtain pointer-events-none fixed inset-0 z-[300] flex flex-col items-center justify-center bg-navy-950"
    >
      <div className="intro-logo">
        <Logo
          size={150}
          decorative
          priority
          className="drop-shadow-[0_0_50px_rgba(201,162,91,0.3)]"
        />
      </div>
      <span className="intro-line mt-6 block h-px w-40 bg-[linear-gradient(90deg,transparent,#e0c07f,transparent)]" />
    </div>
  );
}

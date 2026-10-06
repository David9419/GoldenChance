"use client";

import * as React from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { setLenis } from "@/lib/smooth-scroll";

/** Défilement fluide et amorti sur tout le site. */
export function SmoothScroll() {
  React.useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      // Défilement fluide même si l'appareil demande moins d'animations.
      respectReducedMotion: false,
      wheelMultiplier: 1,
      // Le menu plein écran garde son propre défilement.
      prevent: (node) => !!node.closest?.("[role='dialog']"),
    });
    setLenis(lenis);
    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);
  return null;
}

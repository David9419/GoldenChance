"use client";

import * as React from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { setLenis } from "@/lib/smooth-scroll";

/** Défilement fluide et amorti sur tout le site (désactivé si mouvements réduits). */
export function SmoothScroll() {
  React.useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
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

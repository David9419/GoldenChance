"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "motion/react";

/**
 * Effets globaux : barre de progression dorée en haut de page et reflet
 * lumineux qui suit la souris sur les cartes `.spotlight`.
 */
export function Effects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  });

  React.useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest?.<HTMLElement>(
        ".spotlight",
      );
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[250] h-[2px] origin-left bg-[linear-gradient(90deg,rgba(201,162,91,0),#c9a25b_30%,#f3dca6_70%,#e0c07f)]"
    />
  );
}

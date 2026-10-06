"use client";

import * as React from "react";
import { motion } from "motion/react";

const OFFSETS = {
  up: { x: 0, y: 28 },
  left: { x: -80, y: 0 },
  right: { x: 80, y: 0 },
  fade: { x: 0, y: 0 },
} as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Arrivée : du bas (défaut), de la gauche, de la droite ou en fondu seul. */
  from?: keyof typeof OFFSETS;
  as?: "div" | "section" | "li" | "article";
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">;

/**
 * Apparition au scroll : fondu + glissement, déclenchée à ~12 % visible.
 * Pas de `filter` ici : il casserait l'effet verre dépoli (backdrop-filter)
 * des panneaux contenus.
 */
export function Reveal({ children, className, delay = 0, from = "up", as = "div", ...rest }: RevealProps) {
  const Comp = motion[as];
  const offset = OFFSETS[from];
  return (
    <Comp
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: from === "fade" ? 1.1 : 1, ease: [0.22, 0.61, 0.36, 1], delay }}
      className={className}
      {...(rest as object)}
    >
      {children}
    </Comp>
  );
}

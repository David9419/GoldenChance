"use client";

import * as React from "react";
import { motion } from "motion/react";

const OFFSETS = {
  up: { x: 0, y: 26 },
  left: { x: -64, y: 0 },
  right: { x: 64, y: 0 },
} as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Direction d'arrivée : du bas (défaut), de la gauche ou de la droite. */
  from?: keyof typeof OFFSETS;
  as?: "div" | "section" | "li" | "article";
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">;

/** Apparition au scroll : fondu + glissement, déclenchée à ~12 % visible. */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
  ...rest
}: RevealProps) {
  const Comp = motion[as];
  const offset = OFFSETS[from];
  return (
    <Comp
      initial={{ opacity: 0, x: offset.x, y: offset.y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: from === "up" ? 0.8 : 1,
        ease: [0.22, 0.61, 0.36, 1],
        delay,
      }}
      className={className}
      {...(rest as object)}
    >
      {children}
    </Comp>
  );
}

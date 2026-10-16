"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

const COLORS = ["#818cf8", "#f0abfc", "#22d3ee", "#fbbf24", "#34d399", "#f472b6"];

/** Pluie de confettis pour célébrer une bonne note. */
export function Confetti({ count = 60 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: ((i * 37) % 100) + (i % 3),
        delay: (i % 12) * 0.05,
        rotate: (i * 47) % 360,
        color: COLORS[i % COLORS.length],
        size: 6 + (i % 4) * 2,
        drift: ((i % 7) - 3) * 18,
      })),
    [count],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-0 rounded-[2px]"
          style={{ left: `${p.x}%`, width: p.size, height: p.size * 0.5, background: p.color }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{ y: 420, x: p.drift, opacity: [1, 1, 0], rotate: p.rotate + 360 }}
          transition={{ duration: 2.4, delay: p.delay, ease: "easeIn" }}
        />
      ))}
    </div>
  );
}

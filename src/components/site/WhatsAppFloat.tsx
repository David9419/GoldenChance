"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { floatingWhatsApp, images, links } from "@/content/site";
import { useSiteReady } from "@/lib/site-ready";
import { cn } from "@/lib/utils";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const STORAGE_KEY = "gc-whatsapp-corner";

/** Placement de chaque coin (le haut laisse la place à la navbar). */
const CORNER_CLASSES: Record<Corner, string> = {
  "top-left": "items-start justify-start",
  "top-right": "items-start justify-end",
  "bottom-left": "items-end justify-start",
  "bottom-right": "items-end justify-end",
};

/* Coin mémorisé dans le navigateur du visiteur (localStorage). */
let memoryCorner: Corner = "bottom-right";
const listeners = new Set<() => void>();

function readCorner(): Corner {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && saved in CORNER_CLASSES) return saved as Corner;
  } catch {
    /* stockage indisponible */
  }
  return memoryCorner;
}

function writeCorner(next: Corner) {
  memoryCorner = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* stockage indisponible : on garde la valeur en mémoire */
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Bouton WhatsApp flottant. On peut le glisser vers l'un des 4 coins de
 * l'écran (il s'y aimante) ; le coin choisi est mémorisé. Un simple clic
 * ouvre la communauté WhatsApp.
 */
export function WhatsAppFloat() {
  const corner = React.useSyncExternalStore(subscribe, readCorner, () => "bottom-right" as Corner);
  const [dragging, setDragging] = React.useState(false);
  const ready = useSiteReady();
  const moved = React.useRef(false);

  const snapTo = (x: number, y: number) => {
    const next: Corner = `${y < window.innerHeight / 2 ? "top" : "bottom"}-${
      x < window.innerWidth / 2 ? "left" : "right"
    }`;
    writeCorner(next);
  };

  const isLeft = corner.endsWith("left");

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-[140] flex px-5 pb-6 pt-[104px] sm:px-7 sm:pb-8",
        CORNER_CLASSES[corner],
      )}
    >
      <motion.a
        layout
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${floatingWhatsApp.label} (nouvel onglet). Glissez le bouton pour le déplacer dans un coin.`}
        drag
        dragMomentum={false}
        dragSnapToOrigin
        dragElastic={0.2}
        onDragStart={() => {
          moved.current = true;
          setDragging(true);
        }}
        onDragEnd={(_, info) => {
          setDragging(false);
          snapTo(info.point.x - window.scrollX, info.point.y - window.scrollY);
        }}
        onClick={(event) => {
          // Un glisser-déposer ne doit pas ouvrir le lien.
          if (moved.current) {
            event.preventDefault();
            moved.current = false;
          }
        }}
        onPointerDown={() => {
          moved.current = false;
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: ready ? 1 : 0, scale: !ready ? 0.6 : dragging ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 30, opacity: { delay: ready ? 1.1 : 0, duration: 0.6 } }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="group pointer-events-auto relative flex size-[54px] cursor-grab sm:size-[60px] touch-none select-none items-center justify-center rounded-full active:cursor-grabbing"
        draggable={false}
      >
        {/* Halo qui pulse doucement. */}
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-25 [animation-duration:2.4s]"
        />
        <span className="relative flex size-full items-center justify-center rounded-full border border-[rgba(224,192,127,0.45)] bg-[radial-gradient(circle_at_30%_25%,#1b2a44,#0a1120)] shadow-[0_12px_32px_rgba(0,0,0,0.55),0_0_0_4px_rgba(37,211,102,0.08)]">
          <Image
            src={images.whatsapp.src}
            alt=""
            width={34}
            height={28}
            draggable={false}
            className="pointer-events-none"
          />
        </span>
        {/* Info-bulle au survol (ordinateur). */}
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[rgba(199,209,219,0.16)] bg-[rgba(10,17,32,0.85)] px-4 py-2 text-[0.82rem] font-medium text-silver-100 opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 sm:block",
            isLeft ? "left-[calc(100%+12px)]" : "right-[calc(100%+12px)]",
          )}
        >
          {floatingWhatsApp.label}
        </span>
      </motion.a>
    </div>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { backgroundImages } from "@/content/site";

const POSITIONS = [
  "-top-[4%] -left-[4%]",
  "-top-[4%] -right-[4%]",
  "-bottom-[4%] -left-[4%]",
  "-bottom-[4%] -right-[4%]",
];

/**
 * Fond fixe : 4 photos teintées bleu-gris, de plus en plus floues et sombres
 * à mesure que l'on descend dans la page (--frost-blur / --frost-dark).
 * Piloté par le scroll de l'utilisateur : actif même en reduced-motion.
 */
export function FrostBackground() {
  const pathname = usePathname();

  React.useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const maxScroll = Math.max(root.scrollHeight - window.innerHeight, 1);
      const p = Math.min(window.scrollY / Math.min(maxScroll, 2200), 1);
      root.style.setProperty("--frost-blur", `${(2 + p * 38).toFixed(1)}px`);
      root.style.setProperty("--frost-dark", (0.42 + p * 0.5).toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-950"
    >
      {backgroundImages.map((image, i) => (
        <div
          key={image.src}
          className={`absolute h-[52%] w-[52%] opacity-[0.68] will-change-[filter] ${POSITIONS[i]}`}
          style={{
            filter:
              "grayscale(.35) saturate(.75) brightness(.85) sepia(.08) hue-rotate(170deg) blur(var(--frost-blur))",
          }}
        >
          <Image
            src={image.src}
            alt=""
            fill
            sizes="52vw"
            className="object-cover"
          />
        </div>
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(5,8,16,0.35) 0%, rgba(5,8,16,var(--frost-dark)) 55%, rgba(5,8,16,0.97) 100%)",
        }}
      />
      <div className="grain absolute inset-0" />
    </div>
  );
}

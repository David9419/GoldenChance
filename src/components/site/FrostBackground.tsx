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

const TINT = "grayscale(.35) saturate(.75) brightness(.85) sepia(.08) hue-rotate(170deg)";

/**
 * Le collage de 4 photos est rendu en 3 couches pré-floutées (2px, 14px, 40px).
 * Au scroll, on fait varier l'opacité des couches floues : le fond devient de
 * plus en plus flou et sombre (de 2px à 40px), sans recalculer de flou à chaque
 * image — c'est ce qui garde le défilement parfaitement fluide, même sur mobile.
 */
const LAYERS = [2, 14, 40];

function Collage({
  blur,
  layerRef,
  hidden = false,
}: {
  blur: number;
  layerRef?: React.Ref<HTMLDivElement>;
  hidden?: boolean;
}) {
  return (
    <div ref={layerRef} className="absolute inset-0 will-change-[opacity]" style={{ opacity: hidden ? 0 : 1 }}>
      {backgroundImages.map((image, i) => (
        <div
          key={image.src}
          className={`absolute h-[52%] w-[52%] ${POSITIONS[i]}`}
          style={{ filter: `${TINT} blur(${blur}px)` }}
        >
          <Image src={image.src} alt="" fill sizes="52vw" quality={60} className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function FrostBackground() {
  const pathname = usePathname();
  const baseRef = React.useRef<HTMLDivElement>(null);
  const midRef = React.useRef<HTMLDivElement>(null);
  const farRef = React.useRef<HTMLDivElement>(null);
  const darkRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const maxScroll = Math.max(root.scrollHeight - window.innerHeight, 1);
      const p = Math.min(window.scrollY / Math.min(maxScroll, 2200), 1);
      // Flou équivalent : 2px → 40px. Couche 14px sur la 1re moitié, 40px ensuite.
      const blur = 2 + p * 38;
      const mid = Math.min(Math.max((blur - 2) / 12, 0), 1);
      const far = Math.min(Math.max((blur - 14) / 26, 0), 1);
      // La couche nette s'efface quand la plus floue arrive (pas d'arêtes nettes visibles).
      if (baseRef.current) baseRef.current.style.opacity = (1 - far).toFixed(3);
      if (midRef.current) midRef.current.style.opacity = mid.toFixed(3);
      if (farRef.current) farRef.current.style.opacity = far.toFixed(3);
      // Voile sombre : 0.42 → 0.92 au centre (opacité d'une couche, peu coûteux).
      if (darkRef.current) darkRef.current.style.opacity = p.toFixed(3);
      root.style.setProperty("--frost-blur", `${blur.toFixed(1)}px`);
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
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-950">
      {/* Opacité .68 appliquée au groupe : les couches superposées ne s'additionnent pas. */}
      <div className="absolute inset-0 opacity-[0.68]">
        <Collage blur={LAYERS[0]} layerRef={baseRef} />
        <Collage blur={LAYERS[1]} layerRef={midRef} hidden />
        <Collage blur={LAYERS[2]} layerRef={farRef} hidden />
      </div>
      {/* Voile en haut de page. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(5,8,16,0.35) 0%, rgba(5,8,16,0.42) 55%, rgba(5,8,16,0.97) 100%)",
        }}
      />
      {/* Voile plus sombre qui apparaît en descendant (0.42 → 0.92 au centre). */}
      <div
        ref={darkRef}
        className="absolute inset-0 opacity-0 will-change-[opacity]"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(5,8,16,0.35) 0%, rgba(5,8,16,0.92) 55%, rgba(5,8,16,0.97) 100%)",
        }}
      />
      <div className="grain absolute inset-0" />
    </div>
  );
}

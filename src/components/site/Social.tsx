import Image from "next/image";

import { images, links } from "@/content/site";
import { cn } from "@/lib/utils";

const RING =
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgba(199,209,219,0.18)] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-[transform,border-color,box-shadow] duration-300 ease-lux hover:-translate-y-0.5 hover:border-gold-300/60 hover:shadow-[0_10px_30px_rgba(201,162,91,0.25)]";

/** Pastille ronde Instagram (photo pleine). */
export function InstagramMark({ size, className }: { size: number; className?: string }) {
  return (
    <span className={cn(RING, "bg-black", className)} style={{ width: size, height: size }}>
      <Image src={images.instagram.src} alt="" fill sizes={`${size}px`} className="object-cover" />
    </span>
  );
}

/** Pastille ronde WhatsApp (logo transparent sur verre sombre). */
export function WhatsAppMark({ size, className }: { size: number; className?: string }) {
  return (
    <span
      className={cn(RING, "bg-[rgba(10,17,32,0.72)] backdrop-blur-md", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={images.whatsapp.src}
        alt=""
        width={Math.round(size * 0.78)}
        height={Math.round(size * 0.78 * (244 / 300))}
        className="object-contain"
      />
    </span>
  );
}

/** Logo WhatsApp seul, pour l'intérieur des boutons. */
export function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <Image
      src={images.whatsapp.src}
      alt=""
      width={Math.round(size * (300 / 244))}
      height={size}
      className="-mx-1 object-contain"
    />
  );
}

export function SocialLinks({ size, className }: { size: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3.5", className)}>
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram GoldenChance (nouvel onglet)"
        className="rounded-full"
      >
        <InstagramMark size={size} />
      </a>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Communauté WhatsApp GoldenChance (nouvel onglet)"
        className="rounded-full"
      >
        <WhatsAppMark size={size} />
      </a>
    </div>
  );
}

import { cn } from "@/lib/utils";

/** Logo CapBac : médaillon dégradé, toque de diplômé et étoile montante. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-10", className)} aria-hidden="true">
      <defs>
        <linearGradient id="cb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#818cf8" />
          <stop offset="0.55" stopColor="#6366f1" />
          <stop offset="1" stopColor="#a21caf" />
        </linearGradient>
        <linearGradient id="cb-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cb-star" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fde68a" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="18" fill="url(#cb-bg)" />
      <rect x="2" y="2" width="60" height="30" rx="18" fill="url(#cb-shine)" />
      {/* Toque */}
      <path d="M32 17 L52 26 L32 35 L12 26 Z" fill="#fff" />
      <path d="M20 30 V39 C20 43 26 46 32 46 C38 46 44 43 44 39 V30 L32 35.5 Z" fill="#fff" fillOpacity="0.88" />
      <path d="M50 27 V37" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="50" cy="39" r="2.4" fill="url(#cb-star)" />
      {/* Étoile */}
      <path
        d="M47 8.5 L48.4 12.1 L52.2 12.3 L49.2 14.7 L50.2 18.4 L47 16.3 L43.8 18.4 L44.8 14.7 L41.8 12.3 L45.6 12.1 Z"
        fill="url(#cb-star)"
      />
    </svg>
  );
}

export function Logo({ className, subtitle = true }: { className?: string; subtitle?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.2rem] font-bold tracking-tight">
          Cap<span className="text-gradient">Bac</span>
        </span>
        {subtitle && <span className="mt-1 text-[0.66rem] font-semibold tracking-[0.14em] text-mist-500 uppercase">Ma route vers le bac</span>}
      </span>
    </span>
  );
}

import { Coffee, Wind } from "lucide-react";
import { BREAKS, type Break } from "@/content/schedule";
import { formatHour } from "@/lib/dates";
import { cn } from "@/lib/utils";

/** Séparateur « pause » entre deux cours. */
export function BreakLine({ b, className }: { b: Break; className?: string }) {
  const Icon = b.lunch ? Coffee : Wind;
  return (
    <div className={cn("flex items-center gap-3 text-xs font-semibold", b.lunch ? "text-amber-300/90" : "text-emerald-300/90", className)}>
      <span className="h-px flex-1 bg-border" />
      <Icon className="size-3.5" />
      {b.label} · {formatHour(b.start)} – {formatHour(b.end)}
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

/** Pauses situées entre deux horaires (fin d'un cours → début du suivant). */
export function breaksBetween(end: string, start: string) {
  return BREAKS.filter((b) => b.start >= end && b.end <= start);
}

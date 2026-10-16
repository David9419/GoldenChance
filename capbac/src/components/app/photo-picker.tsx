"use client";

import { useRef, useState } from "react";
import { Camera, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fileToAvatar } from "@/lib/image";
import { cn } from "@/lib/utils";

export function PhotoPicker({
  value,
  onChange,
  initials,
  className,
}: {
  value?: string;
  onChange: (v: string | undefined) => void;
  initials: string;
  className?: string;
}) {
  const input = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  async function pick(file: File | undefined) {
    if (!file) return;
    setError(null);
    try {
      onChange(await fileToAvatar(file));
    } catch {
      setError("Cette image n’a pas pu être lue. Essaie une autre photo (JPG ou PNG).");
    }
  }

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <button
        type="button"
        onClick={() => input.current?.click()}
        className="group relative size-36 cursor-pointer rounded-full p-[3px] transition-transform hover:scale-[1.03]"
        style={{ background: "conic-gradient(from 180deg, #818cf8, #f0abfc, #22d3ee, #818cf8)" }}
        aria-label="Choisir une photo de profil"
      >
        <span className="relative flex size-full items-center justify-center overflow-hidden rounded-full bg-ink-850">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="Photo de profil" className="size-full object-cover" />
          ) : (
            <span className="font-display text-4xl font-bold text-mist-300">{initials || "?"}</span>
          )}
          <span className="absolute inset-0 flex items-center justify-center bg-ink-950/60 opacity-0 transition-opacity group-hover:opacity-100">
            <Camera className="size-7 text-white" />
          </span>
        </span>
        <span className="absolute right-1 bottom-1 flex size-10 items-center justify-center rounded-full border-4 border-ink-900 bg-brand-500 text-white shadow-lg">
          <Camera className="size-4" />
        </span>
      </button>
      <input ref={input} type="file" accept="image/*" className="hidden" onChange={(e) => pick(e.target.files?.[0])} />
      <div className="flex gap-2">
        <Button type="button" variant="secondary" size="sm" onClick={() => input.current?.click()}>
          <Camera /> {value ? "Changer la photo" : "Ajouter une photo"}
        </Button>
        {value && (
          <Button type="button" variant="ghost" size="sm" onClick={() => onChange(undefined)}>
            <Trash2 /> Retirer
          </Button>
        )}
      </div>
      {error && <p className="text-center text-xs text-rose-300">{error}</p>}
    </div>
  );
}

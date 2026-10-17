"use client";

import { Briefcase, ShieldCheck } from "lucide-react";
import type { AppData, Role } from "@/lib/store";
import { cn } from "@/lib/utils";
import { UserAvatar } from "./user-avatar";

export const ROLE_GRADIENT: Record<Role, string> = {
  eleve: "linear-gradient(135deg,#818cf8,#c026d3)",
  prof: "linear-gradient(135deg,#34d399,#0891b2)",
  directeur: "linear-gradient(135deg,#fbbf24,#ea580c)",
};

/** Avatar d'un compte (photo pour l'élève, icône pour le prof et la direction). */
export function ContactAvatar({ role, data, className }: { role: Role; data: AppData; className?: string }) {
  if (role === "eleve") return <UserAvatar profile={data.profile} className={cn("size-11", className)} />;
  const Icon = role === "prof" ? Briefcase : ShieldCheck;
  return (
    <span className={cn("flex size-11 shrink-0 items-center justify-center rounded-full text-white shadow-lg", className)} style={{ background: ROLE_GRADIENT[role] }}>
      <Icon className="size-5" />
    </span>
  );
}

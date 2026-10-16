"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Profile } from "@/lib/store";
import { cn } from "@/lib/utils";

export function UserAvatar({ profile, className }: { profile: Profile | null; className?: string }) {
  const initials = `${profile?.firstName?.[0] ?? ""}${profile?.lastName?.[0] ?? ""}`.toUpperCase() || "?";
  return (
    <Avatar className={cn("ring-2 ring-brand-400/40 ring-offset-2 ring-offset-ink-950", className)}>
      {profile?.photo && <AvatarImage src={profile.photo} alt={`Photo de ${profile.firstName}`} />}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}

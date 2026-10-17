"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { displayName, unreadFor } from "@/lib/messages";
import type { AppData, Role } from "@/lib/store";
import { toast } from "./toast";

/** Prévient en direct (toast + notification de l'ordinateur) quand un message arrive. */
export function MessageWatcher({ data, role }: { data: AppData; role: Role }) {
  const seen = useRef<Set<string> | null>(null);
  const router = useRouter();
  const unread = unreadFor(role, data);

  useEffect(() => {
    if (!seen.current) {
      // Premier rendu : on ne notifie pas les anciens messages.
      seen.current = new Set(unread.map((m) => m.id));
      return;
    }
    for (const m of unread) {
      if (seen.current.has(m.id)) continue;
      seen.current.add(m.id);
      const from = displayName(m.from, data);
      const onMessages = window.location.pathname.startsWith("/messages");
      if (!onMessages) toast(`Nouveau message de ${from}`, "info");
      try {
        if ("Notification" in window && Notification.permission === "granted" && document.visibilityState === "hidden") {
          const n = new Notification(`Message de ${from}`, { body: m.text.slice(0, 140), icon: "/icon.svg" });
          n.onclick = () => {
            window.focus();
            router.push("/messages");
          };
        }
      } catch {
        /* notifications indisponibles */
      }
    }
  }, [unread, data, router]);
  return null;
}

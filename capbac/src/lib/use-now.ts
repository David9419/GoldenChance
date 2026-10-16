"use client";

import { useEffect, useState } from "react";

/** Heure courante, rafraîchie régulièrement (pour les séances « en cours »). */
export function useNow(intervalMs = 30_000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}

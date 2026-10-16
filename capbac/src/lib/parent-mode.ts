"use client";

import { useSyncExternalStore } from "react";

/** Mode parent : déverrouillé par code, mémorisé le temps de l'onglet (sessionStorage). */
const KEY = "capbac:parent";
const listeners = new Set<() => void>();

function read() {
  try {
    return window.sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function setParentMode(on: boolean) {
  try {
    if (on) window.sessionStorage.setItem(KEY, "1");
    else window.sessionStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function useParentMode() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    read,
    () => false,
  );
}

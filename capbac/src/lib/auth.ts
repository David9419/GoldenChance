"use client";

import { useSyncExternalStore } from "react";
import type { Role } from "./store";

/** Compte connecté sur cet appareil (élève, professeur ou direction). */
const KEY = "capbac:auth";
const listeners = new Set<() => void>();

function read(): Role | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "eleve" || v === "prof" || v === "directeur" ? v : null;
  } catch {
    return null;
  }
}

export function signIn(role: Role) {
  try {
    window.localStorage.setItem(KEY, role);
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function signOut() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function useRole(): Role | null {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      const onStorage = (e: StorageEvent) => e.key === KEY && cb();
      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(cb);
        window.removeEventListener("storage", onStorage);
      };
    },
    read,
    () => null,
  );
}

export const ROLE_LABEL: Record<Role, string> = { eleve: "Élève", prof: "Professeur", directeur: "Direction" };
export const isStaff = (r: Role | null) => r === "prof" || r === "directeur";

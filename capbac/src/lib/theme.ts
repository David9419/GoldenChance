"use client";

import { useSyncExternalStore } from "react";
import { THEME_KEY as KEY } from "./theme-script";

export type ThemePref = "dark" | "light" | "system";
const listeners = new Set<() => void>();

function readPref(): ThemePref {
  try {
    return (window.localStorage.getItem(KEY) as ThemePref) || "dark";
  } catch {
    return "dark";
  }
}

export function resolvedLight(pref: ThemePref) {
  return pref === "light" || (pref === "system" && window.matchMedia("(prefers-color-scheme: light)").matches);
}

export function setTheme(pref: ThemePref) {
  try {
    window.localStorage.setItem(KEY, pref);
  } catch {
    /* ignore */
  }
  const root = document.documentElement;
  root.classList.add("theme-switching");
  root.classList.toggle("light", resolvedLight(pref));
  window.setTimeout(() => root.classList.remove("theme-switching"), 450);
  listeners.forEach((l) => l());
}

export function useTheme(): ThemePref {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    readPref,
    () => "dark",
  );
}

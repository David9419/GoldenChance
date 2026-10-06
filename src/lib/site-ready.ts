"use client";

import * as React from "react";

/**
 * « Site prêt » : posé par l'écran de chargement (SiteLoader) au moment où il
 * s'ouvre. Les animations d'arrivée (hero, navbar, bouton WhatsApp…) attendent
 * ce signal pour démarrer toutes ensemble, au bon moment.
 */
const EVENT = "gc:ready";

export function isSiteReady() {
  return typeof document !== "undefined" && document.documentElement.hasAttribute("data-ready");
}

export function markSiteReady() {
  if (isSiteReady()) return;
  document.documentElement.setAttribute("data-ready", "");
  window.dispatchEvent(new Event(EVENT));
}

export function onSiteReady(callback: () => void) {
  if (isSiteReady()) {
    callback();
    return () => {};
  }
  window.addEventListener(EVENT, callback, { once: true });
  return () => window.removeEventListener(EVENT, callback);
}

/** Hook : `true` dès que le site est prêt (toujours `false` côté serveur). */
export function useSiteReady() {
  return React.useSyncExternalStore(onSiteReady, isSiteReady, () => false);
}

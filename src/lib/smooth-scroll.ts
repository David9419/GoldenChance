import type Lenis from "lenis";

/** Instance Lenis partagée (défilement fluide), posée par <SmoothScroll />. */
let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

/* La place de la navbar fixe est déjà réservée par `scroll-padding-top` (globals.css),
   que Lenis prend en compte : aucun décalage supplémentaire ici. */

/** Courbe douce : accélère puis ralentit (easeInOutQuart). */
const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);

function reduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Défilement animé jusqu'à une section (ou instantané si mouvements réduits). */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const distance = Math.abs(el.getBoundingClientRect().top);
  const duration = Math.min(1.8, Math.max(0.9, distance / 2200));
  if (lenis) {
    lenis.scrollTo(el, { duration, easing: easeInOutQuart, immediate: reduced(), force: true });
  } else {
    el.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
  }
}

export function scrollToTop(immediate = false) {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2, easing: easeInOutQuart, immediate: immediate || reduced(), force: true });
  } else {
    window.scrollTo({ top: 0, behavior: immediate || reduced() ? "instant" : "smooth" });
  }
}

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

const FADE_OUT_MS = 260;
const FADE_IN_MS = 320;

type TransitionContextValue = {
  /** Navigue vers `href` : défilement fluide sur la même page, fondu sinon. */
  navigate: (href: string) => void;
  visible: boolean;
  reduced: boolean;
};

const TransitionContext = React.createContext<TransitionContextValue | null>(
  null,
);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [visible, setVisible] = React.useState(true);
  const pending = React.useRef<{ hash: string | null } | null>(null);

  const navigate = React.useCallback(
    (href: string) => {
      const url = new URL(href, window.location.href);
      const hash = url.hash ? decodeURIComponent(url.hash.slice(1)) : null;

      // Même page : défilement fluide, sans rechargement ni saut en haut.
      if (url.pathname === pathname) {
        if (hash) scrollToSection(hash);
        else scrollToTop();
        window.history.replaceState(
          window.history.state,
          "",
          hash ? `${url.pathname}#${hash}` : url.pathname,
        );
        return;
      }

      // Autre page : fondu de sortie, changement de route, fondu d'entrée.
      pending.current = { hash };
      setVisible(false);
      window.setTimeout(
        () =>
          router.push(url.pathname + (hash ? `#${hash}` : ""), {
            scroll: false,
          }),
        reduced ? 0 : FADE_OUT_MS,
      );
    },
    [pathname, reduced, router],
  );

  React.useEffect(() => {
    const target = pending.current;
    if (!target) {
      setVisible(true);
      return;
    }
    pending.current = null;
    window.scrollTo({ top: 0, behavior: "instant" });
    setVisible(true);
    if (target.hash) {
      const id = target.hash;
      const timer = window.setTimeout(
        () => scrollToSection(id),
        reduced ? 0 : FADE_IN_MS,
      );
      return () => window.clearTimeout(timer);
    }
  }, [pathname, reduced]);

  return (
    <TransitionContext.Provider
      value={{ navigate, visible, reduced: !!reduced }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

/** Contenu de page : s'efface (~260 ms) puis réapparaît (~320 ms) à chaque changement de page. */
export function PageFade({ children }: { children: React.ReactNode }) {
  const { visible, reduced } = usePageTransition();
  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{
        duration: reduced ? 0 : (visible ? FADE_IN_MS : FADE_OUT_MS) / 1000,
        ease: "easeInOut",
      }}
      className="flex min-h-svh flex-col [overflow-x:clip]"
    >
      {children}
    </motion.div>
  );
}

export function usePageTransition() {
  const ctx = React.useContext(TransitionContext);
  if (!ctx)
    throw new Error(
      "usePageTransition doit être utilisé dans PageTransitionProvider",
    );
  return ctx;
}

type SmartLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * Lien interne GoldenChance : défilement fluide vers les sections de la page
 * courante, transition en fondu vers les autres pages.
 */
export function SmartLink({ href, onClick, ...props }: SmartLinkProps) {
  const { navigate } = usePageTransition();

  return (
    <Link
      href={href}
      scroll={false}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        event.preventDefault();
        navigate(href);
      }}
      {...props}
    />
  );
}

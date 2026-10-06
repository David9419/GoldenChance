"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Logo } from "@/components/site/Logo";
import { scrollToSection, scrollToTop } from "@/lib/smooth-scroll";

/** Durées du rideau de transition entre pages (ms). */
const COVER_MS = 550;
const REVEAL_MS = 650;
const EASE = [0.76, 0, 0.24, 1] as const;

type Phase = "idle" | "cover" | "reveal";

type TransitionContextValue = {
  /** Navigue vers `href` : défilement animé sur la même page, rideau sinon. */
  navigate: (href: string) => void;
};

const TransitionContext = React.createContext<TransitionContextValue | null>(null);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [phase, setPhase] = React.useState<Phase>("idle");
  const pending = React.useRef<{ hash: string | null } | null>(null);

  const navigate = React.useCallback(
    (href: string) => {
      const url = new URL(href, window.location.href);
      const hash = url.hash ? decodeURIComponent(url.hash.slice(1)) : null;

      // Même page : défilement animé jusqu'à la section (ou en haut).
      if (url.pathname === pathname) {
        if (hash) scrollToSection(hash);
        else scrollToTop();
        window.history.replaceState(window.history.state, "", hash ? `${url.pathname}#${hash}` : url.pathname);
        return;
      }

      // Autre page : le rideau recouvre l'écran, la page change, le rideau s'ouvre.
      if (phase !== "idle") return;
      pending.current = { hash };
      setPhase("cover");
      window.setTimeout(
        () => router.push(url.pathname + (hash ? `#${hash}` : ""), { scroll: false }),
        reduced ? 0 : COVER_MS,
      );
    },
    [pathname, phase, reduced, router],
  );

  React.useEffect(() => {
    const target = pending.current;
    if (!target) return;
    pending.current = null;
    scrollToTop(true);
    // Laisse la nouvelle page se peindre sous le rideau avant de l'ouvrir.
    const reveal = window.setTimeout(() => setPhase("reveal"), 60);
    const done = window.setTimeout(() => {
      setPhase("idle");
      if (target.hash) scrollToSection(target.hash);
    }, reduced ? 80 : REVEAL_MS + 80);
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(done);
    };
  }, [pathname, reduced]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {phase !== "idle" && (
          <motion.div
            key="curtain"
            aria-hidden
            initial={{ y: "100%" }}
            animate={phase === "cover" ? { y: "0%" } : { y: "-100%" }}
            transition={{ duration: reduced ? 0 : (phase === "cover" ? COVER_MS : REVEAL_MS) / 1000, ease: EASE }}
            className="fixed inset-0 z-[400] flex items-center justify-center bg-navy-950"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#e0c07f,transparent)]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: phase === "cover" ? 1 : 0, scale: 1 }}
              transition={{ duration: 0.35, delay: phase === "cover" ? 0.15 : 0 }}
            >
              <Logo size={110} decorative />
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,#e0c07f,transparent)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

/** Contenu de page : simple conteneur (le rideau gère la transition). */
export function PageFade({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-svh flex-col [overflow-x:clip]">{children}</div>;
}

export function usePageTransition() {
  const ctx = React.useContext(TransitionContext);
  if (!ctx) throw new Error("usePageTransition doit être utilisé dans PageTransitionProvider");
  return ctx;
}

type SmartLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * Lien interne GoldenChance : défilement animé vers les sections de la page
 * courante, rideau de transition vers les autres pages.
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

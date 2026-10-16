"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { BookOpen, CalendarDays, ClipboardCheck, GraduationCap, House, ShieldCheck, Trophy, UserRound } from "lucide-react";
import { LEVELS } from "@/content/subjects";
import { levelAt } from "@/lib/calendar";
import { toISO } from "@/lib/dates";
import { useParentMode } from "@/lib/parent-mode";
import { useData } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Logo, LogoMark } from "./logo";
import { Onboarding } from "./onboarding";
import { UserAvatar } from "./user-avatar";

export const NAV = [
  { href: "/", label: "Accueil", icon: House },
  { href: "/emploi-du-temps", label: "Emploi du temps", short: "Agenda", icon: CalendarDays },
  { href: "/matieres", label: "Matières & cours", short: "Cours", icon: BookOpen },
  { href: "/notes", label: "Notes & bulletin", short: "Notes", icon: Trophy },
  { href: "/absences", label: "Vie scolaire", short: "Absences", icon: ClipboardCheck },
  { href: "/programme", label: "Mon parcours", short: "Parcours", icon: GraduationCap },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href) || (href === "/matieres" && (pathname.startsWith("/chapitre") || pathname.startsWith("/seance")));
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const data = useData();
  const pathname = usePathname();
  const parent = useParentMode();

  if (!data) return <Splash />;
  if (!data.profile) return <Onboarding />;

  const level = levelAt(toISO(new Date()), data.settings) ?? (toISO(new Date()) < data.settings.startDate ? "seconde" : null);

  return (
    <div className="min-h-dvh">
      {/* Barre latérale (ordinateur) */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] flex-col border-r border-border bg-ink-900/70 px-4 py-6 backdrop-blur-xl lg:flex">
        <Link href="/" className="px-2">
          <Logo />
        </Link>
        <nav className="mt-9 flex flex-col gap-1" aria-label="Navigation principale">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                  active ? "text-white" : "text-mist-500 hover:bg-white/[0.04] hover:text-mist-100",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl border border-brand-400/25 bg-[linear-gradient(90deg,rgba(99,102,241,0.28),rgba(99,102,241,0.06))]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <item.icon className={cn("relative size-[18px]", active && "text-brand-300")} />
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          {parent && (
            <div className="flex items-center gap-2 rounded-xl border border-amber-400/25 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-200">
              <ShieldCheck className="size-4" /> Mode parent activé
            </div>
          )}
          <Link
            href="/profil"
            className={cn(
              "flex items-center gap-3 rounded-2xl border border-border bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.06]",
              pathname.startsWith("/profil") && "border-brand-400/30",
            )}
          >
            <UserAvatar profile={data.profile} />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">
                {data.profile.firstName} {data.profile.lastName}
              </span>
              <span className="block text-xs text-mist-500">{level ? `Élève de ${LEVELS[level].name}` : "Vacances"}</span>
            </span>
            <UserRound className="size-4 text-mist-500" />
          </Link>
        </div>
      </aside>

      {/* Barre du haut (mobile) */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-ink-950/75 px-4 py-3 backdrop-blur-xl lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark className="size-9" />
          <span className="font-display text-lg font-bold">
            Cap<span className="text-gradient">Bac</span>
          </span>
        </Link>
        <Link href="/profil" aria-label="Mon profil" className="flex items-center gap-2">
          {parent && <ShieldCheck className="size-4 text-amber-300" />}
          <UserAvatar profile={data.profile} className="size-9" />
        </Link>
      </header>

      <main className="lg:pl-[264px]">
        <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
            transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            className="mx-auto w-full max-w-[1180px] px-4 pt-6 pb-28 sm:px-6 lg:px-10 lg:pt-10 lg:pb-16"
          >
            {children}
        </motion.div>
      </main>

      {/* Barre d'onglets (mobile) */}
      <nav
        aria-label="Navigation"
        className="fixed inset-x-3 bottom-3 z-40 flex justify-between rounded-2xl border border-border bg-ink-900/85 p-1.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl lg:hidden"
      >
        {NAV.filter((n) => n.href !== "/programme").map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[0.64rem] font-semibold transition-colors",
                active ? "text-white" : "text-mist-500",
              )}
            >
              {active && (
                <motion.span
                  layoutId="tab-active"
                  className="absolute inset-0 rounded-xl bg-brand-500/20"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <item.icon className={cn("relative size-5", active && "text-brand-300")} />
              <span className="relative">{item.short ?? item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function Splash() {
  return (
    <div className="grid min-h-dvh place-items-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <LogoMark className="size-16 animate-float-slow" />
      </motion.div>
    </div>
  );
}

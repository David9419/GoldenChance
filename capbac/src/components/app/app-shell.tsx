"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  ClipboardPen,
  GraduationCap,
  House,
  LayoutDashboard,
  ListTodo,
  MessageCircle,
  Settings,
  Trophy,
} from "lucide-react";
import { LEVELS } from "@/content/subjects";
import { ROLE_LABEL, useRole } from "@/lib/auth";
import { levelAt } from "@/lib/calendar";
import { toISO } from "@/lib/dates";
import { useData, type Role } from "@/lib/store";
import { cn } from "@/lib/utils";
import { CheckInBanner } from "./checkin-banner";
import { PauseBanner } from "./pause-banner";
import { TestAlert } from "./test-alert";
import { LoginScreen } from "./login";
import { Logo } from "./logo";
import { MessageWatcher } from "./message-watcher";
import { unreadFor } from "@/lib/messages";
import { Onboarding } from "./onboarding";
import { SplashLoader } from "./splash-loader";
import { Topbar } from "./topbar";

type NavItem = { href: string; label: string; short?: string; icon: typeof House; mobile?: boolean };

const NAV: Record<Role, NavItem[]> = {
  eleve: [
    { href: "/", label: "Accueil", icon: House, mobile: true },
    { href: "/agenda", label: "Agenda", icon: ListTodo, mobile: true },
    { href: "/emploi-du-temps", label: "Emploi du temps", short: "EDT", icon: CalendarDays, mobile: true },
    { href: "/devoirs", label: "Devoirs", icon: ClipboardPen },
    { href: "/matieres", label: "Matières & cours", short: "Cours", icon: BookOpen, mobile: true },
    { href: "/notes", label: "Notes & bulletin", short: "Notes", icon: Trophy, mobile: true },
    { href: "/absences", label: "Vie scolaire", icon: ClipboardCheck },
    { href: "/messages", label: "Messages", icon: MessageCircle },
    { href: "/programme", label: "Mon parcours", icon: GraduationCap },
  ],
  prof: [
    { href: "/", label: "Tableau de bord", short: "Accueil", icon: LayoutDashboard, mobile: true },
    { href: "/devoirs", label: "Devoirs & contrôles", short: "Devoirs", icon: ClipboardPen, mobile: true },
    { href: "/emploi-du-temps", label: "Emploi du temps", short: "EDT", icon: CalendarDays, mobile: true },
    { href: "/notes", label: "Notes & bulletin", short: "Notes", icon: Trophy, mobile: true },
    { href: "/absences", label: "Vie scolaire", short: "Absences", icon: ClipboardCheck, mobile: true },
    { href: "/messages", label: "Messages", icon: MessageCircle },
    { href: "/agenda", label: "Agenda", icon: ListTodo },
    { href: "/matieres", label: "Programme & cours", icon: BookOpen },
    { href: "/programme", label: "Parcours de l’élève", icon: GraduationCap },
  ],
  directeur: [
    { href: "/", label: "Vue d’ensemble", short: "Accueil", icon: LayoutDashboard, mobile: true },
    { href: "/notes", label: "Notes & bulletin", short: "Notes", icon: Trophy, mobile: true },
    { href: "/absences", label: "Vie scolaire", short: "Absences", icon: ClipboardCheck, mobile: true },
    { href: "/emploi-du-temps", label: "Emploi du temps", short: "EDT", icon: CalendarDays, mobile: true },
    { href: "/devoirs", label: "Devoirs & contrôles", icon: ClipboardPen },
    { href: "/messages", label: "Messages", icon: MessageCircle },
    { href: "/agenda", label: "Agenda", icon: ListTodo },
    { href: "/programme", label: "Parcours de l’élève", icon: GraduationCap },
    { href: "/matieres", label: "Programme & cours", icon: BookOpen },
    { href: "/profil", label: "Paramètres", short: "Réglages", icon: Settings, mobile: true },
  ],
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href) || (href === "/matieres" && (pathname.startsWith("/chapitre") || pathname.startsWith("/seance")));
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const data = useData();
  return (
    <>
      <ShellContent data={data}>{children}</ShellContent>
      <SplashLoader ready={!!data} />
    </>
  );
}

function ShellContent({ data, children }: { data: ReturnType<typeof useData>; children: React.ReactNode }) {
  const role = useRole();
  const pathname = usePathname();

  if (!data) return <div className="min-h-dvh" />;
  if (!data.profile) return <Onboarding />;
  if (!role) return <LoginScreen data={data} />;

  const level = levelAt(toISO(new Date()), data.settings) ?? "seconde";
  const nav = NAV[role];
  const unreadMessages = unreadFor(role, data).length;
  const accent = role === "eleve" ? "brand" : role === "prof" ? "emerald" : "amber";

  return (
    <div className="min-h-dvh">
      {/* Barre latérale (ordinateur) */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] flex-col border-r border-border bg-ink-900/70 px-4 py-6 backdrop-blur-xl lg:flex">
        <Link href="/" className="px-2">
          <Logo />
        </Link>
        <div
          className={cn(
            "mx-2 mt-6 flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold",
            accent === "brand" && "border-brand-400/25 bg-brand-500/10 text-brand-300",
            accent === "emerald" && "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
            accent === "amber" && "border-amber-400/25 bg-amber-500/10 text-amber-300",
          )}
        >
          <span className="size-1.5 animate-pulse rounded-full bg-current" />
          {role === "eleve" ? `${LEVELS[level].name} · ${LEVELS[level].tagline}` : `Espace ${ROLE_LABEL[role].toLowerCase()}`}
        </div>
        <nav className="mt-5 flex flex-col gap-1" aria-label="Navigation principale">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                  active ? "text-mist-100" : "text-mist-500 hover:bg-fg/[0.04] hover:text-mist-100",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl border border-brand-400/25 bg-[linear-gradient(90deg,rgba(99,102,241,0.28),rgba(99,102,241,0.06))]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <item.icon className={cn("relative size-[18px] transition-transform group-hover:scale-110", active && "text-brand-300")} />
                <span className="relative flex-1">{item.label}</span>
                {item.href === "/messages" && unreadMessages > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="relative flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[0.65rem] font-bold text-white"
                  >
                    {unreadMessages}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>
        <p className="mt-auto px-3 text-[0.7rem] text-mist-500">CapBac · données enregistrées sur cet appareil</p>
      </aside>

      <div className="lg:pl-[264px]">
        <Topbar data={data} role={role} />
        <main>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
            transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            className="mx-auto w-full max-w-[1180px] px-4 pt-6 pb-28 sm:px-6 lg:px-10 lg:pt-8 lg:pb-16"
          >
            <MessageWatcher data={data} role={role} />
            {role === "eleve" && <TestAlert data={data} />}
            {role === "eleve" && <PauseBanner data={data} />}
            {role === "eleve" && <CheckInBanner data={data} />}
            {children}
          </motion.div>
        </main>
      </div>

      {/* Barre d'onglets (mobile) */}
      <nav
        aria-label="Navigation"
        className="fixed inset-x-3 bottom-3 z-40 flex justify-between rounded-2xl border border-border bg-ink-900/85 p-1.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:hidden"
      >
        {nav
          .filter((n) => n.mobile)
          .map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[0.64rem] font-semibold transition-colors",
                  active ? "text-mist-100" : "text-mist-500",
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

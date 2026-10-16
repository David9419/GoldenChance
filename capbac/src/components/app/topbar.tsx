"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Bell, BellRing, CalendarClock, ClipboardPen, LogOut, Moon, Radio, Settings, ShieldAlert, Sun, Trophy, UserRound, UserX } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROLE_LABEL, signOut } from "@/lib/auth";
import { formatLong, toISO } from "@/lib/dates";
import { notificationsFor, type Notif } from "@/lib/notifications";
import { actions, type AppData, type Role } from "@/lib/store";
import { resolvedLight, setTheme, useTheme } from "@/lib/theme";
import { useNow } from "@/lib/use-now";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { toast } from "./toast";
import { UserAvatar } from "./user-avatar";

const NOTIF_ICON: Record<Notif["kind"], typeof Bell> = {
  controle: Trophy,
  devoir: ClipboardPen,
  note: BellRing,
  absence: UserX,
  info: CalendarClock,
  alerte: ShieldAlert,
};

export function Topbar({ data, role }: { data: AppData; role: Role }) {
  const now = useNow(30_000);
  const router = useRouter();
  const pref = useTheme();
  const light = typeof window !== "undefined" && resolvedLight(pref);
  const notifs = notificationsFor(role, data, now);
  const unread = notifs.filter((n) => n.unread).length;
  const staff = role !== "eleve";
  const name = role === "eleve" ? `${data.profile!.firstName} ${data.profile!.lastName}`.trim() : data.accounts[role].name;

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-ink-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center gap-3 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 lg:hidden">
          <LogoMark className="size-9" />
          <span className="font-display text-lg font-bold">
            Cap<span className="text-gradient">Bac</span>
          </span>
        </Link>
        <p className="hidden text-sm font-semibold text-mist-500 lg:block">{formatLong(toISO(now))}</p>
        {staff && (
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[0.7rem] font-bold text-emerald-300 sm:flex">
            <Radio className="size-3.5 animate-pulse" /> En direct
          </span>
        )}

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />

          {/* Notifications */}
          <DropdownMenu onOpenChange={(o) => !o && unread > 0 && actions.markSeen(role)}>
            <DropdownMenuTrigger
              aria-label="Notifications"
              className="relative flex size-9 cursor-pointer items-center justify-center rounded-xl border border-border bg-fg/[0.04] text-mist-300 transition-colors hover:text-mist-100"
            >
              <Bell className={cn("size-4", unread && "animate-[wiggle_1.6s_ease-in-out_infinite]")} />
              <AnimatePresence>
                {unread > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-rose-500 px-1 text-[0.62rem] font-bold text-white"
                  >
                    {unread}
                  </motion.span>
                )}
              </AnimatePresence>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[min(360px,calc(100vw-2rem))]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              {notifs.length === 0 && <p className="px-3 pb-3 text-sm text-mist-500">Rien de nouveau pour l’instant.</p>}
              <div className="max-h-[60vh] overflow-y-auto">
                {notifs.map((n) => {
                  const Icon = NOTIF_ICON[n.kind];
                  return (
                    <DropdownMenuItem key={n.id} onSelect={() => router.push(n.href)} className="items-start py-2.5">
                      <span
                        className={cn(
                          "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg]:!text-current",
                          n.kind === "controle" && "bg-amber-500/15 text-amber-300",
                          n.kind === "devoir" && "bg-brand-500/15 text-brand-300",
                          n.kind === "note" && "bg-emerald-500/15 text-emerald-300",
                          n.kind === "absence" && "bg-rose-500/15 text-rose-300",
                          n.kind === "info" && "bg-fg/[0.06] text-mist-300",
                          n.kind === "alerte" && "bg-rose-500/20 text-rose-300",
                        )}
                      >
                        <Icon />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2 font-semibold">
                          {n.title}
                          {n.unread && <span className="size-1.5 rounded-full bg-rose-400" />}
                        </span>
                        <span className="block text-xs text-mist-500">{n.text}</span>
                      </span>
                    </DropdownMenuItem>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Compte */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2.5 rounded-xl py-1 pr-2 pl-1 transition-colors hover:bg-fg/[0.05]">
              {role === "eleve" ? (
                <UserAvatar profile={data.profile} className="size-8 ring-offset-1" />
              ) : (
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-full text-xs font-bold text-white",
                    role === "prof" ? "bg-[linear-gradient(135deg,#34d399,#0891b2)]" : "bg-[linear-gradient(135deg,#fbbf24,#ea580c)]",
                  )}
                >
                  {name.slice(0, 2).toUpperCase()}
                </span>
              )}
              <span className="hidden text-left leading-tight sm:block">
                <span className="block text-sm font-semibold">{name}</span>
                <span className="block text-[0.7rem] text-mist-500">{ROLE_LABEL[role]}</span>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{ROLE_LABEL[role]}</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => router.push("/profil")}>
                {role === "directeur" ? <Settings /> : <UserRound />} {role === "directeur" ? "Paramètres" : "Mon profil & paramètres"}
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setTheme(light ? "dark" : "light")}>
                {light ? <Moon /> : <Sun />} {light ? "Passer en mode sombre" : "Passer en mode clair"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="danger"
                onSelect={() => {
                  signOut();
                  router.push("/");
                  toast("Déconnecté");
                }}
              >
                <LogOut /> Se déconnecter
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Briefcase, CalendarDays, ChevronRight, Delete, Feather, GraduationCap, Lock, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { quoteOfDay } from "@/content/quotes";
import { LEVELS, SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import { allHolidays, holidayOn, levelAt, sessionsOn } from "@/lib/calendar";
import { at, daysBetween, formatFull, formatLong, toISO } from "@/lib/dates";
import { displayName } from "@/lib/messages";
import { useNow } from "@/lib/use-now";
import { signIn } from "@/lib/auth";
import type { AppData, Role } from "@/lib/store";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo";
import { SubjectIcon } from "./subject-icon";
import { ThemeToggle } from "./theme-toggle";
import { toast } from "./toast";
import { UserAvatar } from "./user-avatar";

const pad = (n: number) => String(n).padStart(2, "0");

const ACCOUNT_STYLE: Record<Role, { subtitle: string; hint: string; icon: typeof GraduationCap; gradient: string; glow: string }> = {
  eleve: { subtitle: "Espace élève", hint: "Cours, exercices, contrôles, devoirs, messages", icon: GraduationCap, gradient: "linear-gradient(135deg,#818cf8,#c026d3)", glow: "rgba(129,140,248,0.55)" },
  prof: { subtitle: "Espace professeur", hint: "Suivi, devoirs, contrôles, copies, messages", icon: Briefcase, gradient: "linear-gradient(135deg,#34d399,#0891b2)", glow: "rgba(52,211,153,0.5)" },
  directeur: { subtitle: "Espace direction", hint: "Vue d’ensemble, paramètres, messages", icon: ShieldCheck, gradient: "linear-gradient(135deg,#fbbf24,#ea580c)", glow: "rgba(251,191,36,0.5)" },
};

/** Page d'accueil : l'heure en fond, la rentrée, le compte à rebours du bac de français et les 3 espaces (avec code). */
export function LoginScreen({ data }: { data: AppData }) {
  const [role, setRole] = useState<Role | null>(null);
  const now = useNow(1000);
  const today = toISO(now);
  const s = data.settings;
  const q = quoteOfDay(now);
  const level = levelAt(today, s) ?? "seconde";
  const hour = now.getHours();
  const greeting = hour < 6 ? "Bonne nuit" : hour < 18 ? "Bonjour" : "Bonsoir";

  const holiday = holidayOn(today, allHolidays(s));
  const sessions = sessionsOn(today, data);
  const dow = now.getDay();
  const dayStatus =
    today < s.startDate
      ? "Les cours n’ont pas encore commencé"
      : holiday
        ? `${holiday.label} : pas d’école aujourd’hui`
        : dow === 0 || dow === 6
          ? "C’est le week-end, repose-toi !"
          : sessions.length
            ? `${sessions.length} cours aujourd’hui`
            : "Pas de cours aujourd’hui";

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <LandingBackground now={now} />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-4 pt-5 sm:px-8">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3">
          <LogoMark className="size-11 drop-shadow-[0_12px_30px_rgba(99,102,241,0.5)]" />
          <div>
            <p className="font-display text-xl leading-none font-bold tracking-tight">
              Cap<span className="text-gradient">Bac</span>
            </p>
            <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.18em] text-mist-500 uppercase">Ma route vers le bac</p>
          </div>
        </motion.div>
        <ThemeToggle />
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-10 pb-14 sm:px-8 sm:pt-14">
        {/* L'heure et la date */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3.5 py-1 text-xs font-bold text-brand-300"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-current" />
          {greeting} · {LEVELS[level].name}
        </motion.span>
        <motion.p
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-4 font-display text-[clamp(4rem,15vw,8.5rem)] leading-none font-bold tracking-tight tabular-nums"
          aria-label={`Il est ${hour} heures ${now.getMinutes()}`}
        >
          <span className="text-gradient">{pad(hour)}</span>
          <motion.span animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 1, repeat: Infinity }} className="text-mist-500">
            :
          </motion.span>
          <span className="text-gradient">{pad(now.getMinutes())}</span>
          <span className="ml-2 align-top font-display text-[clamp(1.4rem,4vw,2.4rem)] text-mist-500">{pad(now.getSeconds())}</span>
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-center text-lg font-semibold text-mist-300 sm:text-xl">
          {formatLong(today)} {now.getFullYear()}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-1 flex items-center gap-1.5 text-sm text-mist-500">
          <CalendarDays className="size-4" /> {dayStatus}
        </motion.p>

        {/* Rentrée + bac de français */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <RentreeCard data={data} now={now} />
          <BacCountdown data={data} now={now} />
        </div>

        {/* Les 3 espaces */}
        <section className="mt-12 w-full" aria-labelledby="choose-title">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-300 uppercase">Connexion</p>
            <h1 id="choose-title" className="mt-1 font-display text-3xl font-bold sm:text-4xl">
              Choisis ton espace
            </h1>
            <p className="mt-1 text-sm text-mist-500">Chaque espace est protégé par un code de connexion.</p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {(["eleve", "prof", "directeur"] as Role[]).map((r, i) => {
              const st = ACCOUNT_STYLE[r];
              return (
                <motion.button
                  key={r}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setRole(r)}
                  data-role={r}
                  className="group glass relative flex cursor-pointer flex-col items-center overflow-hidden rounded-[1.75rem] p-6 text-center transition-shadow"
                >
                  <span
                    aria-hidden
                    className="absolute -top-16 left-1/2 size-40 -translate-x-1/2 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-70"
                    style={{ background: st.glow }}
                  />
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 opacity-70" style={{ background: st.gradient }} />
                  {r === "eleve" ? (
                    <UserAvatar profile={data.profile} className="relative size-20 text-2xl ring-4" />
                  ) : (
                    <span className="relative flex size-20 items-center justify-center rounded-full text-white shadow-xl" style={{ background: st.gradient }}>
                      <st.icon className="size-9" />
                    </span>
                  )}
                  <span className="relative mt-4 text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">{st.subtitle}</span>
                  <span className="relative mt-1 font-display text-xl font-bold">{displayName(r, data)}</span>
                  <span className="relative mt-1 text-sm text-mist-500">{st.hint}</span>
                  <span className="relative mt-5 flex items-center gap-1.5 rounded-full border border-border bg-fg/[0.04] px-3.5 py-1.5 text-sm font-semibold transition-colors group-hover:bg-fg/[0.08]">
                    <Lock className="size-3.5" /> Se connecter
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </motion.button>
              );
            })}
          </div>
        </section>

        <motion.figure initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-12 max-w-2xl text-center">
          <Sparkles className="mx-auto size-5 text-amber-300" />
          <blockquote className="mt-2 font-display text-lg text-mist-300 italic">« {q.text} »</blockquote>
          {q.author && <figcaption className="mt-1 text-sm text-mist-500">— {q.author}</figcaption>}
        </motion.figure>
      </main>

      {/* Saisie du code */}
      <AnimatePresence>
        {role && (
          <motion.div
            key="pin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur-md"
            onMouseDown={(e) => e.target === e.currentTarget && setRole(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Code de connexion"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="glass w-full max-w-sm rounded-[2rem] p-6 sm:p-8"
            >
              <PinPad role={role} data={data} onBack={() => setRole(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Décor : l'heure géante en fond, un cadran qui tourne, des orbites et les matières qui flottent. */
function LandingBackground({ now }: { now: Date }) {
  const sec = now.getSeconds();
  const min = now.getMinutes() + sec / 60;
  const hr = (now.getHours() % 12) + min / 60;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
      <p className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(11rem,34vw,30rem)] leading-none font-bold tracking-tighter whitespace-nowrap text-fg/[0.035] tabular-nums">
        {pad(now.getHours())}:{pad(now.getMinutes())}
      </p>

      <div className="absolute top-[42%] left-1/2 size-[min(780px,140vw)] -translate-x-1/2 -translate-y-1/2">
        {/* Graduations du cadran, qui tournent lentement */}
        <motion.svg viewBox="0 0 200 200" className="absolute inset-0 size-full" animate={{ rotate: 360 }} transition={{ duration: 240, repeat: Infinity, ease: "linear" }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <line key={i} x1="100" y1="3" x2="100" y2={i % 5 ? 6 : 10} stroke="currentColor" strokeWidth={i % 5 ? 0.35 : 0.8} className="text-fg/15" transform={`rotate(${i * 6} 100 100)`} />
          ))}
        </motion.svg>
        {/* Aiguilles à l'heure réelle */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 size-full">
          <defs>
            <linearGradient id="landing-hand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#818cf8" stopOpacity="0.55" />
              <stop offset="1" stopColor="#c026d3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="100" y1="100" x2="100" y2="52" stroke="url(#landing-hand)" strokeWidth="2.2" strokeLinecap="round" transform={`rotate(${hr * 30} 100 100)`} />
          <line x1="100" y1="100" x2="100" y2="26" stroke="url(#landing-hand)" strokeWidth="1.4" strokeLinecap="round" transform={`rotate(${min * 6} 100 100)`} />
          <g style={{ transform: `rotate(${sec * 6}deg)`, transformOrigin: "100px 100px", transition: sec === 0 ? "none" : "transform 0.35s cubic-bezier(.4,2.2,.6,1)" }}>
            <line x1="100" y1="112" x2="100" y2="12" stroke="#f472b6" strokeOpacity="0.45" strokeWidth="0.5" />
            <circle cx="100" cy="12" r="1.6" fill="#f472b6" fillOpacity="0.7" />
          </g>
          <circle cx="100" cy="100" r="2" fill="#818cf8" fillOpacity="0.5" />
        </svg>
        {/* Orbites */}
        {[0.72, 1.18, 1.5].map((k, i) => (
          <motion.span
            key={k}
            className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-fg/[0.06]"
            style={{ width: `${k * 100}%`, height: `${k * 100}%`, marginLeft: `-${k * 50}%`, marginTop: `-${k * 50}%` }}
            animate={{ rotate: i % 2 ? -360 : 360 }}
            transition={{ duration: 50 + i * 30, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -top-1.5 left-1/2 size-3 rounded-full shadow-[0_0_16px_currentColor]" style={{ background: ["#818cf8", "#f0abfc", "#22d3ee"][i], color: ["#818cf8", "#f0abfc", "#22d3ee"][i] }} />
          </motion.span>
        ))}
      </div>

      {SUBJECT_IDS.map((id, i) => (
        <motion.span
          key={id}
          className="absolute flex size-14 items-center justify-center rounded-2xl text-white opacity-[0.14]"
          style={{ background: SUBJECTS[id].gradient, left: `${[5, 89, 9, 86, 22, 72][i]}%`, top: `${[16, 22, 62, 66, 90, 88][i]}%` }}
          animate={{ y: [0, -18, 0], rotate: [0, i % 2 ? 8 : -8, 0] }}
          transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <SubjectIcon subject={id} className="size-7" />
        </motion.span>
      ))}
    </div>
  );
}

function RentreeCard({ data, now }: { data: AppData; now: Date }) {
  const s = data.settings;
  const today = toISO(now);
  const start = at(s.startDate, "10:00");
  const before = now < start;
  const left = daysBetween(today, s.startDate);
  const since = daysBetween(s.startDate, today) + 1;
  return (
    <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.55 }} className="glass relative overflow-hidden rounded-[1.75rem] p-6">
      <span aria-hidden className="absolute -top-14 -left-10 size-44 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="relative flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#34d399,#0891b2)] text-white shadow-lg">
          <Rocket className="size-5" />
        </span>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-emerald-300 uppercase">Rentrée de Seconde</p>
          <p className="font-display text-lg font-bold">Remise à niveau</p>
        </div>
      </div>
      <p className="relative mt-5 font-display text-2xl font-bold sm:text-3xl">{formatLong(s.startDate)}</p>
      <p className="relative text-sm text-mist-500">{formatFull(s.startDate)} · premier cours à 10h</p>
      <div className="relative mt-5 flex items-end gap-3">
        {before ? (
          <>
            <span className="font-display text-5xl leading-none font-bold text-emerald-300 tabular-nums">J-{Math.max(0, left)}</span>
            <span className="pb-1 text-sm text-mist-300">{left <= 0 ? "C’est aujourd’hui à 10h !" : left === 1 ? "C’est demain !" : `Encore ${left} jours`}</span>
          </>
        ) : (
          <>
            <span className="font-display text-5xl leading-none font-bold text-emerald-300 tabular-nums">{since}</span>
            <span className="pb-1 text-sm text-mist-300">{since === 1 ? "C’est le jour de la rentrée !" : "jours depuis la rentrée"}</span>
          </>
        )}
      </div>
      <p className="relative mt-4 text-xs text-mist-500">Première à partir du {formatFull(s.premiereStart)}</p>
    </motion.div>
  );
}

function BacCountdown({ data, now }: { data: AppData; now: Date }) {
  const s = data.settings;
  const target = at(s.bacFrancaisDate, "08:00");
  const ms = Math.max(0, target.getTime() - now.getTime());
  const total = Math.floor(ms / 1000);
  const units = [
    { label: "jours", value: Math.floor(total / 86400) },
    { label: "heures", value: Math.floor((total % 86400) / 3600) },
    { label: "minutes", value: Math.floor((total % 3600) / 60) },
    { label: "secondes", value: total % 60 },
  ];
  const span = at(s.bacFrancaisDate, "08:00").getTime() - at(s.startDate, "10:00").getTime();
  const progress = Math.min(100, Math.max(0, ((now.getTime() - at(s.startDate, "10:00").getTime()) / span) * 100));
  return (
    <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.55 }} className="glass relative overflow-hidden rounded-[1.75rem] p-6">
      <span aria-hidden className="absolute -top-16 -right-10 size-52 rounded-full bg-pink-500/25 blur-3xl" />
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f472b6,#a21caf)] text-white shadow-lg">
            <Feather className="size-5" />
          </span>
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-pink-300 uppercase">Compte à rebours</p>
            <p className="font-display text-lg font-bold">Bac de français</p>
          </div>
        </div>
        <span className="hidden rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-1 text-xs font-bold text-pink-300 sm:block">{formatFull(s.bacFrancaisDate)}</span>
      </div>
      <div className="relative mt-5 grid grid-cols-4 gap-2 sm:gap-3" data-testid="bac-countdown">
        {units.map((u) => (
          <div key={u.label} className="rounded-2xl border border-border bg-fg/[0.04] px-1 py-3 text-center">
            <div className="relative h-[2.6rem] overflow-hidden sm:h-[3.1rem]">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={u.value}
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  className="block font-display text-[1.7rem] leading-[2.6rem] font-bold tabular-nums sm:text-[2.6rem] sm:leading-[3.1rem]"
                >
                  {u.label === "jours" ? u.value : pad(u.value)}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="mt-0.5 text-[0.62rem] font-bold tracking-wider text-mist-500 uppercase sm:text-[0.7rem]">{u.label}</p>
          </div>
        ))}
      </div>
      <div className="relative mt-5">
        <div className="flex justify-between text-[0.68rem] font-semibold text-mist-500">
          <span>Rentrée</span>
          <span>Première</span>
          <span>Bac de français</span>
        </div>
        <div className="relative mt-1.5 h-2 overflow-hidden rounded-full bg-fg/[0.08]">
          <motion.div
            className="h-full rounded-full bg-[linear-gradient(90deg,#34d399,#818cf8,#f472b6)]"
            initial={{ width: 0 }}
            animate={{ width: `${Math.max(progress, 1.5)}%` }}
            transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          />
        </div>
        <p className="mt-2 text-xs text-mist-500">{ms === 0 ? "C’est le jour J, bon courage !" : `Écrit de 4 h le ${formatLong(s.bacFrancaisDate).toLowerCase()} (date à confirmer selon le calendrier officiel).`}</p>
      </div>
    </motion.div>
  );
}

function PinPad({ role, data, onBack }: { role: Role; data: AppData; onBack: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const name = displayName(role, data);
  const expected = role === "eleve" ? data.accounts.eleve.pin : data.accounts[role].pin;
  const st = ACCOUNT_STYLE[role];

  // Saisie au clavier
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) press(e.key);
      else if (e.key === "Backspace") setPin((p) => p.slice(0, -1));
      else if (e.key === "Escape") onBack();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function press(d: string) {
    if (pin.length >= expected.length) return;
    const next = pin + d;
    setError(false);
    setPin(next);
    if (next.length === expected.length) {
      if (next === expected) {
        signIn(role);
        toast(role === "eleve" ? `Bienvenue ${data.profile?.firstName ?? ""} !` : `Connecté : ${name}`, "success");
      } else {
        setError(true);
        window.setTimeout(() => setPin(""), 400);
      }
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      <button onClick={onBack} className="mb-5 flex cursor-pointer items-center gap-1.5 self-start text-sm font-semibold text-mist-500 hover:text-mist-100">
        <ArrowLeft className="size-4" /> Retour
      </button>
      {role === "eleve" ? (
        <UserAvatar profile={data.profile} className="size-16 text-xl ring-2" />
      ) : (
        <span className="flex size-16 items-center justify-center rounded-full text-white shadow-lg" style={{ background: st.gradient }}>
          <st.icon className="size-7" />
        </span>
      )}
      <p className="mt-3 text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">{st.subtitle}</p>
      <h2 className="mt-0.5 font-display text-2xl font-bold">{name}</h2>
      <p className="text-sm text-mist-500">Entre ton code de connexion</p>
      <motion.div animate={error ? { x: [0, -12, 12, -8, 8, 0] } : {}} transition={{ duration: 0.4 }} className="mt-6 flex gap-3" data-testid="pin-dots">
        {Array.from({ length: expected.length }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "size-4 rounded-full border-2 transition-all",
              error ? "border-rose-400 bg-rose-400" : i < pin.length ? "scale-110 border-brand-400 bg-brand-400" : "border-mist-500",
            )}
          />
        ))}
      </motion.div>
      <p className={cn("mt-3 h-5 text-sm text-rose-300 transition-opacity", error ? "opacity-100" : "opacity-0")}>Code incorrect</p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"].map((k) =>
          k === "" ? (
            <span key="empty" />
          ) : (
            <motion.button
              key={k}
              whileTap={{ scale: 0.9 }}
              onClick={() => (k === "del" ? setPin(pin.slice(0, -1)) : press(k))}
              aria-label={k === "del" ? "Effacer" : k}
              className="glass flex size-16 cursor-pointer items-center justify-center rounded-2xl font-display text-xl font-semibold transition-colors hover:bg-fg/[0.08]"
            >
              {k === "del" ? <Delete className="size-5" /> : k}
            </motion.button>
          ),
        )}
      </div>
      <p className="mt-5 text-xs text-mist-500">Code oublié ? La direction peut le changer dans Paramètres.</p>
    </div>
  );
}

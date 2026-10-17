"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Briefcase, CalendarDays, ChevronRight, Delete, GraduationCap, Lock, ShieldCheck, Trophy } from "lucide-react";
import { quoteOfDay } from "@/content/quotes";
import { LEVELS, SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import { allHolidays, holidayOn, levelAt, scheduledTests, sessionsOn } from "@/lib/calendar";
import { at, daysBetween, formatHour, formatLong, toISO } from "@/lib/dates";
import { useNow } from "@/lib/use-now";
import { signIn } from "@/lib/auth";
import type { AppData, Role } from "@/lib/store";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo";
import { SubjectIcon } from "./subject-icon";
import { ThemeToggle } from "./theme-toggle";
import { toast } from "./toast";
import { UserAvatar } from "./user-avatar";

/** Écran de connexion : la journée en un coup d'œil, puis choix du compte (code pour le prof et la direction). */
export function LoginScreen({ data }: { data: AppData }) {
  const [role, setRole] = useState<Role | null>(null);
  const now = useNow(1000);
  const today = toISO(now);
  const q = quoteOfDay(now);
  const s = data.settings;
  const accounts: { role: Role; title: string; subtitle: string; icon: typeof GraduationCap; gradient: string; hint: string }[] = [
    {
      role: "eleve",
      title: `${data.profile!.firstName} ${data.profile!.lastName}`.trim(),
      subtitle: "Espace élève",
      icon: GraduationCap,
      gradient: "linear-gradient(135deg,#818cf8,#c026d3)",
      hint: "Cours, exercices, contrôles, devoirs",
    },
    {
      role: "prof",
      title: data.accounts.prof.name,
      subtitle: "Espace professeur",
      icon: Briefcase,
      gradient: "linear-gradient(135deg,#34d399,#0891b2)",
      hint: "Suivi, devoirs, contrôles, copies",
    },
    {
      role: "directeur",
      title: data.accounts.directeur.name,
      subtitle: "Espace direction",
      icon: ShieldCheck,
      gradient: "linear-gradient(135deg,#fbbf24,#ea580c)",
      hint: "Vue d’ensemble et paramètres",
    },
  ];

  // La journée en un coup d'œil
  const sessions = sessionsOn(today, data);
  const holiday = holidayOn(today, allHolidays(s));
  const dow = now.getDay();
  const dayStatus =
    today < s.startDate
      ? `Rentrée le ${formatLong(s.startDate).toLowerCase()}`
      : holiday
        ? `${holiday.label} : pas d’école aujourd’hui`
        : dow === 0 || dow === 6
          ? "C’est le week-end, repose-toi !"
          : sessions.length
            ? `${sessions.length} cours aujourd’hui`
            : "Pas de cours aujourd’hui";
  const nextTest = scheduledTests(data).find((t) => t.date >= today && at(t.date, t.end) > now && daysBetween(today, t.date) <= 14);
  const level = levelAt(today, s) ?? "seconde";
  const counters = [
    today < s.startDate
      ? { label: "Rentrée", value: daysBetween(today, s.startDate), unit: "jours", color: "#34d399" }
      : { label: "Depuis la rentrée", value: Math.max(1, daysBetween(s.startDate, today) + 1), unit: "jours", color: "#34d399" },
    { label: "Passage en Première", value: Math.max(0, daysBetween(today, s.premiereStart)), unit: "jours", color: "#818cf8" },
    { label: "Bac de français", value: Math.max(0, daysBetween(today, s.bacFrancaisDate)), unit: "jours", color: "#f472b6" },
  ];

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <ThemeToggle className="absolute top-5 right-5 z-10" />

      {/* Décor : orbites et icônes des matières qui flottent */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[620, 900, 1180].map((sz, i) => (
            <motion.div
              key={sz}
              className="absolute top-1/2 left-1/2 rounded-full border border-fg/[0.05]"
              style={{ width: sz, height: sz, marginLeft: -sz / 2, marginTop: -sz / 2 }}
              animate={{ rotate: i % 2 ? -360 : 360 }}
              transition={{ duration: 80 + i * 30, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-1.5 left-1/2 size-3 rounded-full" style={{ background: ["#818cf8", "#f0abfc", "#22d3ee"][i] }} />
            </motion.div>
          ))}
        </div>
        {SUBJECT_IDS.map((id, i) => (
          <motion.span
            key={id}
            className="absolute flex size-14 items-center justify-center rounded-2xl text-white opacity-[0.13] blur-[0.5px]"
            style={{ background: SUBJECTS[id].gradient, left: `${[6, 88, 12, 82, 46, 70][i]}%`, top: `${[14, 18, 72, 70, 88, 6][i]}%` }}
            animate={{ y: [0, -18, 0], rotate: [0, i % 2 ? 8 : -8, 0] }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <SubjectIcon subject={id} className="size-7" />
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto grid min-h-dvh w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        {/* Colonne gauche : la journée */}
        <motion.section initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <motion.div initial={{ scale: 0.5, rotate: -15, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 180, damping: 14 }}>
              <LogoMark className="size-16 drop-shadow-[0_20px_40px_rgba(99,102,241,0.5)]" />
            </motion.div>
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight">
                Cap<span className="text-gradient">Bac</span>
              </h1>
              <p className="text-sm font-semibold tracking-[0.14em] text-mist-500 uppercase">Ma route vers le bac</p>
            </div>
          </div>

          <div>
            <p className="font-display text-6xl font-bold tracking-tight tabular-nums sm:text-7xl">
              {String(now.getHours()).padStart(2, "0")}
              <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                :
              </motion.span>
              {String(now.getMinutes()).padStart(2, "0")}
            </p>
            <p className="mt-1 text-lg text-mist-300">{formatLong(today)}</p>
          </div>

          <div className="glass rounded-3xl p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="flex items-center gap-2 font-semibold">
                <CalendarDays className="size-4 text-brand-300" /> {dayStatus}
              </p>
              <span className="rounded-full border border-brand-400/30 bg-brand-500/10 px-2.5 py-0.5 text-xs font-bold text-brand-300">
                {LEVELS[level].name}
              </span>
            </div>
            {sessions.length > 0 && !holiday && (
              <div className="mt-4 flex flex-wrap gap-2">
                {sessions.map((x, i) => (
                  <motion.span
                    key={x.key}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className={cn(
                      "flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-semibold",
                      x.test ? "border-amber-400/50 bg-amber-500/15 text-amber-200" : "border-border bg-fg/[0.03]",
                    )}
                  >
                    <span className="size-2 rounded-full" style={{ background: SUBJECTS[x.subject].color }} />
                    {formatHour(x.start)} · {x.test ? `Contrôle de ${SUBJECTS[x.subject].short}` : SUBJECTS[x.subject].short}
                  </motion.span>
                ))}
              </div>
            )}
            {nextTest && (
              <p className="mt-4 flex items-center gap-2 text-sm text-amber-200">
                <Trophy className="size-4" /> Prochain contrôle : {SUBJECTS[nextTest.subject].name}, {formatLong(nextTest.date).toLowerCase()} à {formatHour(nextTest.start)}
              </p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {counters.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="glass relative overflow-hidden rounded-2xl p-4"
              >
                <span className="absolute -top-8 -right-8 size-20 rounded-full blur-2xl" style={{ background: c.color, opacity: 0.25 }} />
                <p className="text-[0.68rem] font-bold tracking-wider text-mist-500 uppercase">{c.label}</p>
                <p className="mt-1 font-display text-3xl font-bold" style={{ color: c.color }}>
                  {c.value}
                </p>
                <p className="text-xs text-mist-500">{c.unit}</p>
              </motion.div>
            ))}
          </div>

          <motion.figure initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="border-l-2 border-brand-400/40 pl-4">
            <blockquote className="font-display text-lg text-mist-300 italic">« {q.text} »</blockquote>
            {q.author && <figcaption className="mt-1 text-sm text-mist-500">— {q.author}</figcaption>}
          </motion.figure>
        </motion.section>

        {/* Colonne droite : choix du compte (en premier sur téléphone) */}
        <section className="relative order-first lg:order-none">
          <AnimatePresence mode="wait">
            {!role || role === "eleve" ? (
              <motion.div key="choose" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="glass rounded-[2rem] p-6 sm:p-8">
                <p className="text-xs font-bold tracking-[0.18em] text-brand-300 uppercase">Connexion</p>
                <h2 className="mt-1 font-display text-3xl font-bold">Qui se connecte ?</h2>
                <p className="mt-1 text-sm text-mist-500">Choisis ton espace pour commencer.</p>
                <div className="mt-6 flex flex-col gap-3">
                  {accounts.map((a, i) => (
                    <motion.button
                      key={a.role}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        if (a.role === "eleve") {
                          signIn("eleve");
                          toast(`Bienvenue ${data.profile!.firstName} !`, "success");
                        } else setRole(a.role);
                      }}
                      className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-border bg-fg/[0.03] p-4 text-left transition-all hover:border-brand-400/40 hover:bg-fg/[0.06] hover:shadow-[0_20px_40px_-25px_rgba(99,102,241,0.7)]"
                    >
                      {a.role === "eleve" ? (
                        <UserAvatar profile={data.profile} className="size-14 text-lg ring-2" />
                      ) : (
                        <span className="flex size-14 shrink-0 items-center justify-center rounded-full text-white shadow-lg" style={{ background: a.gradient }}>
                          <a.icon className="size-6" />
                        </span>
                      )}
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-lg font-bold">{a.title}</span>
                        <span className="block text-sm text-mist-300">{a.subtitle}</span>
                        <span className="block text-xs text-mist-500">{a.hint}</span>
                      </span>
                      {a.role !== "eleve" && <Lock className="size-4 text-mist-500" />}
                      <ChevronRight className="size-5 text-mist-500 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  ))}
                </div>
                <p className="mt-6 flex items-center gap-2 text-xs text-mist-500">
                  <ShieldCheck className="size-3.5" /> Les espaces professeur et direction sont protégés par un code.
                </p>
              </motion.div>
            ) : (
              <motion.div key="pin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="glass rounded-[2rem] p-6 sm:p-8">
                <PinPad role={role} data={data} onBack={() => setRole(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}

function PinPad({ role, data, onBack }: { role: Role; data: AppData; onBack: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const account = role === "prof" ? data.accounts.prof : data.accounts.directeur;
  const expected = account.pin;

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
    if (pin.length >= 8) return;
    const next = pin + d;
    setError(false);
    setPin(next);
    if (next.length === expected.length) {
      if (next === expected) {
        signIn(role);
        toast(`Connecté : ${account.name}`, "success");
      } else {
        setError(true);
        window.setTimeout(() => setPin(""), 400);
      }
    }
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} className="mx-auto flex max-w-xs flex-col items-center text-center">
      <button onClick={onBack} className="mb-6 flex cursor-pointer items-center gap-1.5 self-start text-sm font-semibold text-mist-500 hover:text-mist-100">
        <ArrowLeft className="size-4" /> Retour
      </button>
      <span className={cn("flex size-16 items-center justify-center rounded-full text-white shadow-lg", role === "prof" ? "bg-[linear-gradient(135deg,#34d399,#0891b2)]" : "bg-[linear-gradient(135deg,#fbbf24,#ea580c)]")}>
        {role === "prof" ? <Briefcase className="size-7" /> : <ShieldCheck className="size-7" />}
      </span>
      <h2 className="mt-4 font-display text-2xl font-bold">{account.name}</h2>
      <p className="text-sm text-mist-500">Entre ton code d’accès</p>
      <motion.div animate={error ? { x: [0, -12, 12, -8, 8, 0] } : {}} transition={{ duration: 0.4 }} className="mt-6 flex gap-3">
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
      <div className="mt-4 grid grid-cols-3 gap-3">
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
    </motion.div>
  );
}

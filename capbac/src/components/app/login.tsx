"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Briefcase, Delete, GraduationCap, ShieldCheck } from "lucide-react";
import { quoteOfDay } from "@/content/quotes";
import { signIn } from "@/lib/auth";
import type { AppData, Role } from "@/lib/store";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { toast } from "./toast";
import { UserAvatar } from "./user-avatar";

/** Écran de connexion : choix du compte, puis code pour le professeur et la direction. */
export function LoginScreen({ data }: { data: AppData }) {
  const [role, setRole] = useState<Role | null>(null);
  const q = quoteOfDay(new Date());
  const accounts: { role: Role; title: string; subtitle: string; icon: typeof GraduationCap; gradient: string }[] = [
    {
      role: "eleve",
      title: `${data.profile!.firstName} ${data.profile!.lastName}`.trim(),
      subtitle: "Espace élève",
      icon: GraduationCap,
      gradient: "linear-gradient(135deg,#818cf8,#c026d3)",
    },
    { role: "prof", title: data.accounts.prof.name, subtitle: "Espace professeur", icon: Briefcase, gradient: "linear-gradient(135deg,#34d399,#0891b2)" },
    { role: "directeur", title: data.accounts.directeur.name, subtitle: "Espace direction", icon: ShieldCheck, gradient: "linear-gradient(135deg,#fbbf24,#ea580c)" },
  ];

  return (
    <div className="relative grid min-h-dvh place-items-center overflow-hidden px-4 py-10">
      <ThemeToggle className="absolute top-5 right-5" />
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[560, 820].map((s, i) => (
          <motion.div
            key={s}
            className="absolute rounded-full border border-fg/[0.06]"
            style={{ width: s, height: s }}
            animate={{ rotate: i ? -360 : 360 }}
            transition={{ duration: 70 + i * 30, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -top-1.5 left-1/2 size-3 rounded-full" style={{ background: ["#818cf8", "#f0abfc"][i] }} />
          </motion.div>
        ))}
      </div>

      <div className="relative w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {!role || role === "eleve" ? (
            <motion.div key="choose" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="flex flex-col items-center text-center">
              <motion.div initial={{ scale: 0.5, rotate: -15, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 180, damping: 14 }}>
                <LogoMark className="size-20 drop-shadow-[0_20px_40px_rgba(99,102,241,0.5)]" />
              </motion.div>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight">
                Cap<span className="text-gradient">Bac</span>
              </h1>
              <p className="mt-2 text-mist-300">Qui se connecte ?</p>

              <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
                {accounts.map((a, i) => (
                  <motion.button
                    key={a.role}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      if (a.role === "eleve") {
                        signIn("eleve");
                        toast(`Bienvenue ${data.profile!.firstName} !`, "success");
                      } else setRole(a.role);
                    }}
                    className="glass group flex cursor-pointer flex-col items-center gap-4 rounded-3xl p-6 transition-shadow hover:shadow-[0_30px_60px_-30px_rgba(99,102,241,0.6)]"
                  >
                    {a.role === "eleve" ? (
                      <UserAvatar profile={data.profile} className="size-20 text-2xl ring-4" />
                    ) : (
                      <span className="flex size-20 items-center justify-center rounded-full text-white shadow-lg" style={{ background: a.gradient }}>
                        <a.icon className="size-9" />
                      </span>
                    )}
                    <span>
                      <span className="block font-display text-lg font-bold">{a.title}</span>
                      <span className="block text-sm text-mist-500">{a.subtitle}</span>
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.figure initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12 max-w-lg">
                <blockquote className="font-display text-lg text-mist-300 italic">« {q.text} »</blockquote>
                {q.author && <figcaption className="mt-1 text-sm text-mist-500">— {q.author}</figcaption>}
              </motion.figure>
            </motion.div>
          ) : (
            <PinPad key="pin" role={role} data={data} onBack={() => setRole(null)} />
          )}
        </AnimatePresence>
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

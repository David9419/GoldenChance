"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CalendarDays, ClipboardCheck, Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SUBJECT_IDS } from "@/content/subjects";
import { actions } from "@/lib/store";
import { LogoMark } from "./logo";
import { PhotoPicker } from "./photo-picker";
import { SubjectBadge } from "./subject-icon";

const FEATURES = [
  { icon: CalendarDays, title: "Ton emploi du temps", text: "Chaque jour, tes cours sont prêts, matière par matière." },
  { icon: Trophy, title: "Exercices et contrôles notés", text: "Des notes sur 20, une moyenne et un vrai bulletin." },
  { icon: ClipboardCheck, title: "Vie scolaire", text: "Pointe ta présence à chaque cours, comme au lycée." },
];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState<string | undefined>();
  const [profName, setProfName] = useState("Professeur");
  const [profPin, setProfPin] = useState("1111");
  const [dirName, setDirName] = useState("Direction");
  const [dirPin, setDirPin] = useState("9999");

  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase();

  function finish() {
    actions.saveAccount("prof", { name: profName.trim() || "Professeur", pin: profPin });
    actions.saveAccount("directeur", { name: dirName.trim() || "Direction", pin: dirPin });
    actions.saveProfile({ firstName: firstName.trim(), lastName: lastName.trim(), photo });
  }
  const pinsOk = profPin.length >= 4 && dirPin.length >= 4 && profPin !== dirPin;

  return (
    <div className="relative grid min-h-dvh place-items-center overflow-hidden px-4 py-10">
      {/* Orbites décoratives */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[520, 760, 1000].map((s, i) => (
          <motion.div
            key={s}
            className="absolute rounded-full border border-fg/[0.05]"
            style={{ width: s, height: s }}
            animate={{ rotate: i % 2 ? -360 : 360 }}
            transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -top-1.5 left-1/2 size-3 rounded-full" style={{ background: ["#818cf8", "#f0abfc", "#22d3ee"][i] }} />
          </motion.div>
        ))}
      </div>

      <div className="relative w-full max-w-lg">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="welcome" {...stepAnim} className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0.4, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
              >
                <LogoMark className="size-24 drop-shadow-[0_20px_40px_rgba(99,102,241,0.55)]" />
              </motion.div>
              <h1 className="mt-7 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Bienvenue sur Cap<span className="text-gradient">Bac</span>
              </h1>
              <p className="mt-4 max-w-md text-mist-300">
                Ton espace pour reprendre tout le programme de Seconde, réussir ta Première et le bac de français, puis la Terminale.
              </p>
              <div className="mt-6 flex gap-2">
                {SUBJECT_IDS.map((s, i) => (
                  <motion.span key={s} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 + i * 0.07 }}>
                    <SubjectBadge subject={s} size="sm" />
                  </motion.span>
                ))}
              </div>
              <div className="mt-8 grid w-full gap-3 text-left">
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="glass flex items-center gap-4 rounded-2xl p-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                      <f.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{f.title}</span>
                      <span className="block text-sm text-mist-500">{f.text}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
              <Button size="lg" className="mt-8 w-full" onClick={() => setStep(1)}>
                Configurer CapBac <ArrowRight />
              </Button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.form
              key="name"
              {...stepAnim}
              className="glass rounded-3xl p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (firstName.trim()) setStep(2);
              }}
            >
              <StepHeader n={1} title="L’élève" text="Prénom et nom de l’élève : ils apparaîtront sur son profil et son bulletin." />
              <div className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="fn">Prénom</Label>
                  <Input id="fn" autoFocus value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Ton prénom" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ln">Nom</Label>
                  <Input id="ln" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Ton nom de famille" />
                </div>
              </div>
              <div className="mt-8 flex justify-between gap-3">
                <Button type="button" variant="ghost" onClick={() => setStep(0)}>
                  <ArrowLeft /> Retour
                </Button>
                <Button type="submit" disabled={!firstName.trim()}>
                  Continuer <ArrowRight />
                </Button>
              </div>
            </motion.form>
          )}

          {step === 2 && (
            <motion.div key="photo" {...stepAnim} className="glass rounded-3xl p-6 sm:p-8">
              <StepHeader n={2} title="Photo de profil" text="Ajoute une photo de l’élève (modifiable plus tard)." />
              <PhotoPicker className="mt-7" value={photo} onChange={setPhoto} initials={initials} />
              <div className="mt-8 flex justify-between gap-3">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  <ArrowLeft /> Retour
                </Button>
                <Button onClick={() => setStep(3)}>
                  Continuer <ArrowRight />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="accounts" {...stepAnim} className="glass rounded-3xl p-6 sm:p-8">
              <StepHeader n={3} title="Comptes professeur et direction" text="Choisis les noms et les codes d’accès (4 chiffres ou plus). Garde-les secrets." />
              <div className="mt-6 grid gap-5">
                {[
                  { label: "Professeur", name: profName, setName: setProfName, pin: profPin, setPin: setProfPin, color: "#34d399" },
                  { label: "Direction", name: dirName, setName: setDirName, pin: dirPin, setPin: setDirPin, color: "#fbbf24" },
                ].map((a) => (
                  <div key={a.label} className="grid gap-3 rounded-2xl border border-border p-4 sm:grid-cols-[1fr_120px]">
                    <div className="grid gap-2">
                      <Label style={{ color: a.color }}>Nom affiché · {a.label}</Label>
                      <Input value={a.name} onChange={(e) => a.setName(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                      <Label>Code</Label>
                      <Input inputMode="numeric" value={a.pin} onChange={(e) => a.setPin(e.target.value.replace(/\D/g, "").slice(0, 8))} className="font-mono tracking-[0.3em]" />
                    </div>
                  </div>
                ))}
                {!pinsOk && <p className="text-sm text-rose-300">Les deux codes doivent faire au moins 4 chiffres et être différents.</p>}
              </div>
              <div className="mt-8 flex justify-between gap-3">
                <Button variant="ghost" onClick={() => setStep(2)}>
                  <ArrowLeft /> Retour
                </Button>
                <Button onClick={finish} disabled={!pinsOk}>
                  <Sparkles /> Terminer
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const stepAnim = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.98 },
  transition: { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] as const },
};

function StepHeader({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div>
      <span className="text-xs font-bold tracking-[0.16em] text-brand-300 uppercase">Étape {n} sur 3</span>
      <h2 className="mt-2 font-display text-2xl font-bold">{title}</h2>
      <p className="mt-1 text-sm text-mist-500">{text}</p>
    </div>
  );
}

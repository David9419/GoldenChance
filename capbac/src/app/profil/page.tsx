"use client";

import { useRef, useState } from "react";
import { Briefcase, CalendarRange, Palette, Download, KeyRound, Palmtree, Plus, RotateCcw, Save, ShieldCheck, Trash2, Upload, UserRound } from "lucide-react";
import { PageHeader } from "@/components/app/common";
import { PhotoPicker } from "@/components/app/photo-picker";
import { ThemePicker } from "@/components/app/theme-toggle";
import { toast } from "@/components/app/toast";
import { UserAvatar } from "@/components/app/user-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { LEVELS } from "@/content/subjects";
import { levelAt } from "@/lib/calendar";
import { addDays, formatFull, formatShort, fromISO, toISO } from "@/lib/dates";
import { jewishHolidays } from "@/lib/jewish";
import { ROLE_LABEL, useRole } from "@/lib/auth";
import { attendanceStats, fmtNote, generalAverage } from "@/lib/stats";
import { actions, uid, useData, type AppData, type Settings } from "@/lib/store";

export default function ProfilePage() {
  const data = useData();
  const role = useRole();
  if (!data?.profile || !role) return null;
  const level = levelAt(toISO(new Date()), data.settings) ?? "seconde";
  const avg = generalAverage(data, level);
  const att = attendanceStats(data);

  return (
    <div>
      <PageHeader eyebrow={`Espace ${ROLE_LABEL[role].toLowerCase()}`} title={role === "directeur" ? "Paramètres" : "Profil & paramètres"} />

      {/* Carte d'identité */}
      <div className="relative mb-6 overflow-hidden rounded-3xl border border-fg/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.35),rgba(192,38,211,0.18)_50%,var(--surface))] p-6 sm:p-8">
        <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <UserAvatar profile={data.profile} className="size-28 text-3xl ring-4" />
          <div className="flex-1">
            <h2 className="font-display text-3xl font-bold">
              {data.profile.firstName} {data.profile.lastName}
            </h2>
            <p className="mt-1 text-mist-300">
              Élève de {LEVELS[level].name} · {LEVELS[level].tagline}
            </p>
            <p className="mt-1 text-sm text-mist-500">Inscrit depuis le {formatFull(data.profile.createdAt.slice(0, 10))}</p>
          </div>
          <div className="flex gap-6">
            <Stat label="Moyenne" value={fmtNote(avg)} />
            <Stat label="Assiduité" value={att.rate === null ? "—" : `${Math.round(att.rate)}%`} />
            <Stat label="Exercices" value={String(data.attempts.length)} />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          {role === "prof" ? <StaffCard data={data} role="prof" /> : <IdentityCard data={data} title={role === "directeur" ? "Profil de l’élève" : "Mon identité"} />}
          {role !== "prof" && <StudentPinCard data={data} />}
          {role === "directeur" && (
            <>
              <StaffCard data={data} role="directeur" />
              <StaffCard data={data} role="prof" />
            </>
          )}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="size-5 text-fuchsia-300" /> Apparence
              </CardTitle>
              <CardDescription>Mode clair, mode sombre, ou automatique selon l’appareil.</CardDescription>
            </CardHeader>
            <CardContent>
              <ThemePicker />
            </CardContent>
          </Card>
        </div>
        {role === "directeur" ? (
          <SettingsCard data={data} />
        ) : (
          <Card className="flex flex-col items-center justify-center gap-3 p-8 text-center lg:self-start">
            <ShieldCheck className="size-10 text-amber-300" />
            <p className="font-display text-lg font-semibold">Réglages de l’établissement</p>
            <p className="max-w-sm text-sm text-mist-500">
              Calendrier de l’année, vacances, comptes et sauvegardes sont gérés par la direction.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}

function StudentPinCard({ data }: { data: AppData }) {
  const [pin, setPin] = useState(data.accounts.eleve.pin);
  const others = [data.accounts.prof.pin, data.accounts.directeur.pin];
  const ok = pin.length >= 4 && !others.includes(pin);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <KeyRound className="size-5 text-brand-300" /> Code de connexion de l’élève
        </CardTitle>
        <CardDescription>Demandé à chaque connexion à l’espace élève (4 chiffres ou plus).</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="eleve-pin">Code</Label>
          <Input id="eleve-pin" inputMode="numeric" value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 8))} className="font-mono tracking-[0.3em]" />
        </div>
        <Button
          disabled={!ok}
          onClick={() => {
            actions.saveStudentPin(pin);
            toast("Code de l’élève mis à jour", "success");
          }}
        >
          <Save /> Enregistrer
        </Button>
      </CardContent>
      {!ok && pin.length >= 4 && <p className="px-6 pb-4 text-xs text-rose-300">Ce code est déjà utilisé par un autre compte.</p>}
    </Card>
  );
}

function StaffCard({ data, role }: { data: AppData; role: "prof" | "directeur" }) {
  const acc = data.accounts[role];
  const [name, setName] = useState(acc.name);
  const [pin, setPin] = useState(acc.pin);
  const others = [data.accounts[role === "prof" ? "directeur" : "prof"].pin, data.accounts.eleve.pin];
  const ok = name.trim() && pin.length >= 4 && !others.includes(pin);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {role === "prof" ? <Briefcase className="size-5 text-emerald-300" /> : <ShieldCheck className="size-5 text-amber-300" />} Compte {ROLE_LABEL[role].toLowerCase()}
        </CardTitle>
        <CardDescription>Nom affiché et code d’accès (4 chiffres ou plus).</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-[1fr_140px_auto] sm:items-end">
        <div className="grid gap-2">
          <Label htmlFor={`${role}-name`}>Nom</Label>
          <Input id={`${role}-name`} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${role}-pin`} className="flex items-center gap-1.5">
            <KeyRound className="size-3.5" /> Code
          </Label>
          <Input id={`${role}-pin`} inputMode="numeric" value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 8))} className="font-mono tracking-[0.3em]" />
        </div>
        <Button
          disabled={!ok}
          onClick={() => {
            actions.saveAccount(role, { name: name.trim(), pin });
            toast("Compte mis à jour", "success");
          }}
        >
          <Save /> Enregistrer
        </Button>
      </CardContent>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-2xl font-bold">{value}</p>
      <p className="text-[0.7rem] font-bold tracking-wider text-mist-500 uppercase">{label}</p>
    </div>
  );
}

function IdentityCard({ data, title = "Mon identité" }: { data: AppData; title?: string }) {
  const p = data.profile!;
  const [firstName, setFirstName] = useState(p.firstName);
  const [lastName, setLastName] = useState(p.lastName);
  const [photo, setPhoto] = useState(p.photo);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserRound className="size-5 text-brand-300" /> {title}
        </CardTitle>
        <CardDescription>Photo de profil, prénom et nom.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-5">
        <PhotoPicker value={photo} onChange={setPhoto} initials={`${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase()} />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="p-fn">Prénom</Label>
            <Input id="p-fn" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="p-ln">Nom</Label>
            <Input id="p-ln" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
        <Button
          disabled={!firstName.trim()}
          onClick={() => {
            actions.saveProfile({ firstName: firstName.trim(), lastName: lastName.trim(), photo, createdAt: p.createdAt });
            toast("Profil enregistré", "success");
          }}
        >
          <Save /> Enregistrer mon profil
        </Button>
      </CardContent>
    </Card>
  );
}

function SettingsCard({ data }: { data: AppData }) {
  const [s, setS] = useState<Settings>(data.settings);
  const [newHoliday, setNewHoliday] = useState({ label: "", start: "", end: "" });
  const file = useRef<HTMLInputElement>(null);
  const set = <K extends keyof Settings>(k: K, v: Settings[K]) => setS((prev) => ({ ...prev, [k]: v }));

  const dateFields: { key: keyof Settings; label: string }[] = [
    { key: "startDate", label: "Jour de la rentrée (Seconde)" },
    { key: "premiereStart", label: "Début de la Première" },
    { key: "bacFrancaisDate", label: "Bac de français (écrit)" },
    { key: "premiereEnd", label: "Fin de la Première" },
    { key: "terminaleStart", label: "Rentrée de Terminale" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarRange className="size-5 text-brand-300" /> Calendrier de l’année
          </CardTitle>
          <CardDescription>Ces dates déterminent le niveau et la répartition des cours.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-3 sm:grid-cols-2 [&>*]:min-w-0">
            {dateFields.map((f) => (
              <div key={f.key} className="grid gap-2">
                <Label htmlFor={f.key}>{f.label}</Label>
                <Input id={f.key} type="date" value={s[f.key] as string} onChange={(e) => set(f.key, e.target.value as never)} />
              </div>
            ))}
            <div className="grid gap-2">
              <Label htmlFor="ramp">Rentrée en douceur sans contrôle ni devoir (jours)</Label>
              <Input id="ramp" type="number" min={0} max={60} value={s.rampUpDays} onChange={(e) => set("rampUpDays", Math.max(0, Number(e.target.value) || 0))} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tpw">Contrôles par semaine</Label>
              <Input id="tpw" type="number" min={0} max={6} value={s.testsPerWeek} onChange={(e) => set("testsPerWeek", Math.min(6, Math.max(0, Number(e.target.value) || 0)))} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cd">Correction des contrôles après (jours)</Label>
              <Input
                id="cd"
                type="number"
                min={0}
                max={10}
                step={0.5}
                value={s.correctionDelayHours / 24}
                onChange={(e) => set("correctionDelayHours", Math.max(0, Number(e.target.value) || 0) * 24)}
              />
            </div>
          </div>

          <div className="mt-2 rounded-2xl border border-border p-4">
            <label className="flex items-center justify-between gap-3">
              <span>
                <span className="block text-sm font-semibold">Fêtes et jeûnes juifs : pas d’école</span>
                <span className="block text-xs text-mist-500">
                  Roch Hachana, jeûne de Guedalia, Yom Kippour, Souccot, Chemini Atseret, Simhat Torah, 10 Tevet, jeûne d’Esther, Pourim, Pessah, Chavouot,
                  17 Tamouz, Tisha Beav — dates calculées automatiquement chaque année.
                </span>
              </span>
              <Switch checked={s.jewishHolidays} onCheckedChange={(v) => set("jewishHolidays", v)} />
            </label>
            {s.jewishHolidays && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {jewishHolidays(toISO(new Date()), addDays(toISO(new Date()), 400))
                  .filter((h) => ![0, 6].includes(fromISO(h.start).getDay()))
                  .slice(0, 14)
                  .map((h) => (
                    <Badge key={h.id} variant="outline">
                      {h.label} · {formatShort(h.start)}
                    </Badge>
                  ))}
              </div>
            )}
          </div>
          <div className="mt-2">
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Palmtree className="size-4 text-amber-300" /> Vacances et jours fériés
            </p>
            <div className="flex flex-col gap-2">
              {s.holidays.map((h) => (
                <div key={h.id} className="flex items-center gap-3 rounded-xl border border-border px-3 py-2 text-sm">
                  <span className="flex-1 font-semibold">{h.label}</span>
                  <Badge variant="outline">{h.start === h.end ? formatShort(h.start) : `${formatShort(h.start)} → ${formatShort(h.end)}`}</Badge>
                  <Button variant="ghost" size="icon" className="size-8" aria-label="Supprimer" onClick={() => set("holidays", s.holidays.filter((x) => x.id !== h.id))}>
                    <Trash2 />
                  </Button>
                </div>
              ))}
            </div>
            <Input className="mt-3" placeholder="Nouvelle période, ex. Vacances d’hiver" value={newHoliday.label} onChange={(e) => setNewHoliday({ ...newHoliday, label: e.target.value })} />
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-[1fr_1fr_auto] [&>*]:min-w-0">
              <Input type="date" value={newHoliday.start} onChange={(e) => setNewHoliday({ ...newHoliday, start: e.target.value })} />
              <Input type="date" value={newHoliday.end} onChange={(e) => setNewHoliday({ ...newHoliday, end: e.target.value })} />
              <Button
                variant="secondary"
                disabled={!newHoliday.label || !newHoliday.start}
                onClick={() => {
                  const end = newHoliday.end && newHoliday.end >= newHoliday.start ? newHoliday.end : newHoliday.start;
                  set("holidays", [...s.holidays, { id: uid(), label: newHoliday.label, start: newHoliday.start, end }].sort((a, b) => a.start.localeCompare(b.start)));
                  setNewHoliday({ label: "", start: "", end: "" });
                }}
              >
                <Plus /> Ajouter
              </Button>
            </div>
          </div>

          <Button
            onClick={() => {
              actions.saveSettings(s);
              toast("Réglages enregistrés", "success");
            }}
          >
            <Save /> Enregistrer les réglages
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sauvegarde</CardTitle>
          <CardDescription>Les données sont enregistrées dans ce navigateur. Exporte-les régulièrement pour ne rien perdre ou pour les transférer sur un autre appareil.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button
            variant="secondary"
            onClick={() => {
              const blob = new Blob([actions.exportData()], { type: "application/json" });
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = `capbac-sauvegarde-${toISO(new Date())}.json`;
              a.click();
              URL.revokeObjectURL(a.href);
            }}
          >
            <Download /> Exporter
          </Button>
          <Button variant="secondary" onClick={() => file.current?.click()}>
            <Upload /> Importer
          </Button>
          <input
            ref={file}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              try {
                actions.importData(await f.text());
                toast("Sauvegarde importée", "success");
              } catch {
                toast("Fichier invalide", "warning");
              }
              e.target.value = "";
            }}
          />
          <Button
            variant="danger"
            onClick={() => {
              if (window.confirm("Tout effacer (profil, notes, présences) ? Cette action est définitive.")) actions.reset();
            }}
          >
            <RotateCcw /> Tout réinitialiser
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

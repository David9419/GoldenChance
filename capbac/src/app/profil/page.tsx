"use client";

import { useRef, useState } from "react";
import { CalendarRange, Download, KeyRound, Palmtree, Plus, RotateCcw, Save, ShieldCheck, Trash2, Upload, UserRound } from "lucide-react";
import { PageHeader } from "@/components/app/common";
import { ParentToggle } from "@/components/app/parent-gate";
import { PhotoPicker } from "@/components/app/photo-picker";
import { toast } from "@/components/app/toast";
import { UserAvatar } from "@/components/app/user-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LEVELS } from "@/content/subjects";
import { levelAt } from "@/lib/calendar";
import { formatFull, formatShort, toISO } from "@/lib/dates";
import { useParentMode } from "@/lib/parent-mode";
import { attendanceStats, fmtNote, generalAverage } from "@/lib/stats";
import { actions, uid, useData, type AppData, type Settings } from "@/lib/store";

export default function ProfilePage() {
  const data = useData();
  const parent = useParentMode();
  if (!data?.profile) return null;
  const level = levelAt(toISO(new Date()), data.settings) ?? "seconde";
  const avg = generalAverage(data, level);
  const att = attendanceStats(data);

  return (
    <div>
      <PageHeader eyebrow="Mon profil" title="Profil & réglages" actions={<ParentToggle />} />

      {/* Carte d'identité */}
      <div className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.35),rgba(192,38,211,0.18)_50%,rgba(17,20,39,0.9))] p-6 sm:p-8">
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
        <IdentityCard data={data} />
        {parent ? (
          <SettingsCard data={data} />
        ) : (
          <Card className="flex flex-col items-center justify-center gap-3 p-8 text-center">
            <ShieldCheck className="size-10 text-amber-300" />
            <p className="font-display text-lg font-semibold">Réglages réservés aux parents</p>
            <p className="max-w-sm text-sm text-mist-500">Dates de l’année, vacances, code parent, sauvegarde : active le mode parent pour y accéder.</p>
            <ParentToggle />
          </Card>
        )}
      </div>
    </div>
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

function IdentityCard({ data }: { data: AppData }) {
  const p = data.profile!;
  const [firstName, setFirstName] = useState(p.firstName);
  const [lastName, setLastName] = useState(p.lastName);
  const [photo, setPhoto] = useState(p.photo);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserRound className="size-5 text-brand-300" /> Mon identité
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
    { key: "startDate", label: "Début de la remise à niveau (Seconde)" },
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
          <div className="grid gap-3 sm:grid-cols-2">
            {dateFields.map((f) => (
              <div key={f.key} className="grid gap-2">
                <Label htmlFor={f.key}>{f.label}</Label>
                <Input id={f.key} type="date" value={s[f.key] as string} onChange={(e) => set(f.key, e.target.value as never)} />
              </div>
            ))}
            <div className="grid gap-2">
              <Label htmlFor="tm">Durée d’un contrôle (minutes)</Label>
              <Input id="tm" type="number" min={5} max={120} value={s.testMinutes} onChange={(e) => set("testMinutes", Number(e.target.value) || 20)} />
            </div>
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
            <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto_auto_auto]">
              <Input placeholder="Ex. Vacances d’hiver" value={newHoliday.label} onChange={(e) => setNewHoliday({ ...newHoliday, label: e.target.value })} />
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

          <div className="grid gap-2">
            <Label htmlFor="pin" className="flex items-center gap-2">
              <KeyRound className="size-4" /> Code parent (4 chiffres ou plus)
            </Label>
            <Input id="pin" inputMode="numeric" value={s.parentPin} onChange={(e) => set("parentPin", e.target.value.replace(/\D/g, "").slice(0, 8))} />
          </div>

          <Button
            disabled={s.parentPin.length < 4}
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

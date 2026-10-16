"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, ClipboardPen, Hourglass, PenLine, Plus, Trophy, TriangleAlert } from "lucide-react";
import { EmptyState, PageHeader } from "@/components/app/common";
import { SubjectBadge } from "@/components/app/subject-icon";
import { toast } from "@/components/app/toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { getChapter, PROGRAMS } from "@/content";
import { SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import type { SubjectId } from "@/content/types";
import { agendaItems, assignmentStatus } from "@/lib/agenda";
import { isStaff, useRole } from "@/lib/auth";
import { autoHomework, homeworkGiven, levelAt, sessionsOn } from "@/lib/calendar";
import { addDays, formatHour, formatLong, toISO } from "@/lib/dates";
import { fmtNote, noteTone, pendingCorrections, submissionsToGrade } from "@/lib/stats";
import { actions, useData, type AppData } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function AssignmentsPage() {
  const data = useData();
  const role = useRole();
  const [open, setOpen] = useState(false);
  if (!data) return null;
  const staff = isStaff(role);
  const today = toISO(new Date());
  const list = [...data.assignments].sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  const upcoming = list.filter((a) => a.dueDate >= today);
  const past = list.filter((a) => a.dueDate < today).reverse();
  const autoList = autoHomework(data)
    .filter((h) => homeworkGiven(h, undefined, data.profile?.createdAt) && h.dueDate >= addDays(today, -14))
    .sort((a, b) => b.givenDate.localeCompare(a.givenDate));
  const toGrade = submissionsToGrade(data);
  const pending = pendingCorrections(data);

  return (
    <div>
      <PageHeader
        eyebrow="Devoirs & contrôles"
        title={staff ? "Devoirs et contrôles du professeur" : "Mes devoirs"}
        description={
          staff
            ? "Ajoute des devoirs (réponse rédigée ou QCM) et des contrôles supplémentaires. Ils apparaissent tout de suite dans l’agenda de l’élève."
            : "Tes devoirs maison (donnés chaque soir sur la leçon du jour) et ceux de ton professeur. Tu peux t’avancer dès qu’ils sont donnés."
        }
        actions={
          staff && (
            <Button onClick={() => setOpen(true)}>
              <Plus /> Nouveau
            </Button>
          )
        }
      />

      {staff && (toGrade.length > 0 || pending.length > 0) && (
        <div className="mb-6 grid gap-4 lg:grid-cols-2">
          {toGrade.length > 0 && (
            <Card className="border-amber-400/25">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PenLine className="size-5 text-amber-300" /> Copies à corriger ({toGrade.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {toGrade.map((s) => {
                  const a = data.assignments.find((x) => x.id === s.assignmentId);
                  if (!a) return null;
                  return (
                    <Link key={s.assignmentId} href={`/devoirs/${a.id}`} className="flex items-center gap-3 rounded-xl border border-border p-3 hover:bg-fg/[0.04]">
                      <SubjectBadge subject={a.subject} size="sm" />
                      <span className="flex-1 text-sm font-semibold">{a.title}</span>
                      <ChevronRight className="size-4 text-mist-500" />
                    </Link>
                  );
                })}
              </CardContent>
            </Card>
          )}
          {pending.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hourglass className="size-5 text-brand-300" /> Contrôles en attente de correction ({pending.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {pending.map((p) => (
                  <div key={p.id} className="flex items-center gap-3 rounded-xl border border-border p-3">
                    <SubjectBadge subject={p.subject} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{getChapter(p.chapterId)?.chapter.title}</p>
                      <p className="text-xs text-mist-500">
                        Note : <span className={noteTone(p.score)}>{fmtNote(p.score)}/20</span> · publication auto le{" "}
                        {new Date(p.releaseAt!).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                      </p>
                    </div>
                    <Button size="sm" variant="secondary" onClick={() => (actions.releaseAttempt(p.id), toast("Correction publiée", "success"))}>
                      Publier
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {autoList.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 font-display text-lg font-bold">Devoirs maison du soir</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {autoList.map((h, i) => {
              const done = data.attempts.find((a) => a.context === h.id && a.official);
              const late = !done && h.dueDate < today;
              return (
                <motion.div key={h.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link href={`/devoirs/auto/${encodeURIComponent(h.id)}`} className="glass group flex h-full items-start gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5">
                    <SubjectBadge subject={h.subject} />
                    <div className="min-w-0 flex-1">
                      <Badge variant={done ? "success" : late ? "danger" : "outline"}>
                        {done ? `Fait · ${fmtNote(done.score)}/20` : late ? "Non rendu" : "À faire"}
                      </Badge>
                      <p className="mt-2 font-semibold">{getChapter(h.chapterId)?.chapter.title}</p>
                      <p className="text-sm text-mist-500">
                        {SUBJECTS[h.subject].name} · pour le {formatLong(h.dueDate)}
                      </p>
                    </div>
                    <ChevronRight className="size-4 text-mist-500 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {list.length === 0 ? (
        <EmptyState icon={ClipboardPen} title={staff ? "Aucun devoir du professeur" : "Aucun devoir du professeur pour l’instant"} text={staff ? "Clique sur « Nouveau » pour donner un devoir ou un contrôle." : "Ton professeur n’a pas encore donné de devoir."}>
          {staff && (
            <Button onClick={() => setOpen(true)}>
              <Plus /> Nouveau devoir
            </Button>
          )}
        </EmptyState>
      ) : (
        <div className="flex flex-col gap-8">
          {[
            { title: "À venir", items: upcoming },
            { title: "Passés", items: past },
          ].map(
            (g) =>
              g.items.length > 0 && (
                <section key={g.title}>
                  <h2 className="mb-3 font-display text-lg font-bold">{g.title}</h2>
                  <div className="grid gap-3 md:grid-cols-2">
                    {g.items.map((a, i) => {
                      const st = assignmentStatus(a, data);
                      return (
                        <motion.div key={a.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                          <Link href={`/devoirs/${a.id}`} className="glass group flex h-full items-start gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5">
                            <SubjectBadge subject={a.subject} />
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <Badge variant={a.kind === "controle" ? "warning" : "default"}>
                                  {a.kind === "controle" ? <Trophy /> : <PenLine />} {a.kind === "controle" ? "Contrôle" : "Devoir"}
                                </Badge>
                                <Badge variant={st.tone}>{st.label}</Badge>
                              </div>
                              <p className="mt-2 font-semibold">{a.title}</p>
                              <p className="text-sm text-mist-500">
                                {SUBJECTS[a.subject].name} · {a.kind === "controle" ? "le" : "pour le"} {formatLong(a.dueDate)} · coef {a.coef}
                              </p>
                            </div>
                            <ChevronRight className="size-4 text-mist-500 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </section>
              ),
          )}
        </div>
      )}

      {staff && <CreateAssignmentDialog open={open} onOpenChange={setOpen} data={data} />}
    </div>
  );
}

function CreateAssignmentDialog({ open, onOpenChange, data }: { open: boolean; onOpenChange: (o: boolean) => void; data: AppData }) {
  const today = toISO(new Date());
  const level = levelAt(today, data.settings) ?? "seconde";
  const [kind, setKind] = useState<"devoir" | "controle">("devoir");
  const [subject, setSubject] = useState<SubjectId>("maths");
  const [mode, setMode] = useState<"texte" | "qcm">("texte");
  const [chapterId, setChapterId] = useState("");
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [dueDate, setDueDate] = useState(addDays(today, 2));
  const [coef, setCoef] = useState("1");
  const [slot, setSlot] = useState<number | null>(null);
  const [long, setLong] = useState(false);

  const minTestDate = addDays(today, 3);
  const isTest = kind === "controle";
  const effectiveMode = isTest ? "qcm" : mode;
  // Créneaux du jour choisi (un contrôle remplace 1 ou 2 heures de cours).
  const daySessions = sessionsOn(dueDate, data).filter((s) => !s.test);
  const canLong = slot !== null && slot % 2 === 0 && daySessions.some((s) => s.slot === slot + 1);
  const chapters = PROGRAMS[level][subject];
  const sameDay = agendaItems(data, dueDate, dueDate).filter((i) => i.type !== "exercice");
  const valid =
    title.trim() && dueDate && (effectiveMode === "texte" ? instructions.trim() : chapterId) && (!isTest || (dueDate >= minTestDate && slot !== null));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Nouveau devoir ou contrôle</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-2">
            {(["devoir", "controle"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  setKind(k);
                  setCoef(k === "controle" ? "2" : "1");
                  setSlot(null);
                  if (k === "controle" && dueDate < minTestDate) setDueDate(minTestDate);
                }}
                className={cn(
                  "flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 text-sm font-semibold transition-colors",
                  kind === k ? "border-brand-400/60 bg-brand-500/15 text-mist-100" : "border-border text-mist-500",
                )}
              >
                {k === "controle" ? <Trophy className="size-4" /> : <PenLine className="size-4" />} {k === "controle" ? "Contrôle" : "Devoir maison"}
              </button>
            ))}
          </div>
          <div className="grid gap-2">
            <Label>Matière</Label>
            <div className="grid grid-cols-3 gap-2">
              {SUBJECT_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => (setSubject(id), setChapterId(""))}
                  className={cn("cursor-pointer rounded-xl border px-2 py-2 text-xs font-semibold", subject === id ? "text-mist-100" : "border-border text-mist-500")}
                  style={subject === id ? { background: `${SUBJECTS[id].color}30`, borderColor: SUBJECTS[id].color } : undefined}
                >
                  {SUBJECTS[id].short}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="as-title">Titre</Label>
            <Input id="as-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={kind === "controle" ? "Ex. Contrôle sur les fonctions" : "Ex. Rédiger un paragraphe argumenté"} />
          </div>
          {!isTest && (
          <div className="grid grid-cols-2 gap-2">
            {(["texte", "qcm"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={cn("cursor-pointer rounded-xl border py-2 text-xs font-semibold", mode === m ? "border-brand-400/60 bg-brand-500/15 text-mist-100" : "border-border text-mist-500")}
              >
                {m === "texte" ? "Réponse rédigée (corrigée par le prof)" : "QCM d’un chapitre (corrigé automatiquement)"}
              </button>
            ))}
          </div>
          )}
          {effectiveMode === "qcm" ? (
            <div className="grid gap-2">
              <Label htmlFor="as-ch">Chapitre</Label>
              <select
                id="as-ch"
                value={chapterId}
                onChange={(e) => setChapterId(e.target.value)}
                className="h-11 rounded-xl border border-border bg-ink-850 px-3 text-sm text-mist-100"
              >
                <option value="">Choisir un chapitre…</option>
                {chapters.map((c, i) => (
                  <option key={c.id} value={c.id}>
                    {i + 1}. {c.title}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          <div className="grid gap-2">
            <Label htmlFor="as-ins">Consignes {effectiveMode === "qcm" && "(facultatif)"}</Label>
            <Textarea id="as-ins" value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Ce que l’élève doit faire…" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="as-date">{kind === "controle" ? "Date du contrôle" : "À rendre pour le"}</Label>
              <Input
                id="as-date"
                type="date"
                min={isTest ? minTestDate : today}
                value={dueDate}
                onChange={(e) => {
                  setDueDate(e.target.value);
                  setSlot(null);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="as-coef">Coefficient</Label>
              <Input id="as-coef" type="number" min="0.5" step="0.5" value={coef} onChange={(e) => setCoef(e.target.value)} />
            </div>
          </div>
          {isTest && (
            <div className="grid gap-2">
              <Label>Créneau remplacé par le contrôle</Label>
              {dueDate < minTestDate ? (
                <p className="text-xs text-rose-300">Un contrôle doit être annoncé au moins 3 jours avant (à partir du {formatLong(minTestDate)}).</p>
              ) : daySessions.length === 0 ? (
                <p className="text-xs text-mist-500">Pas de cours ce jour-là.</p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {daySessions.map((s) => (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => {
                        setSlot(s.slot);
                        setLong(false);
                      }}
                      className={cn(
                        "cursor-pointer rounded-xl border px-3 py-2 text-left text-xs",
                        slot === s.slot ? "border-amber-400/70 bg-amber-500/15 text-mist-100" : "border-border text-mist-500",
                      )}
                    >
                      <span className="block font-bold">
                        {formatHour(s.start)} – {formatHour(s.end)}
                      </span>
                      {SUBJECTS[s.subject].short}
                    </button>
                  ))}
                </div>
              )}
              {canLong && (
                <label className="flex items-center justify-between rounded-xl border border-border p-3 text-sm">
                  <span>Contrôle long : 2 heures (prend aussi le créneau suivant)</span>
                  <Switch checked={long} onCheckedChange={setLong} />
                </label>
              )}
            </div>
          )}
          {sameDay.length >= 1 && (
            <p className="flex items-start gap-2 rounded-xl border border-amber-400/25 bg-amber-500/10 p-3 text-xs text-amber-200">
              <TriangleAlert className="mt-0.5 size-4 shrink-0" />
              Il y a déjà {sameDay.length} évaluation{sameDay.length > 1 ? "s" : ""} ce jour-là ({sameDay.map((s) => SUBJECTS[s.subject].short).join(", ")}). Pense à
              ne pas surcharger l’élève.
            </p>
          )}
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button
            disabled={!valid}
            onClick={() => {
              actions.addAssignment({
                kind,
                subject,
                level,
                title: title.trim(),
                instructions: instructions.trim(),
                dueDate,
                chapterId: effectiveMode === "qcm" ? chapterId : undefined,
                coef: Number(coef) || 1,
                slot: isTest ? (slot ?? undefined) : undefined,
                long: isTest && canLong ? long : undefined,
              });
              toast(kind === "controle" ? "Contrôle placé dans l’emploi du temps" : "Devoir ajouté à l’agenda", "success");
              setTitle("");
              setInstructions("");
              setChapterId("");
              onOpenChange(false);
            }}
          >
            Publier
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Printer, Trash2, Trophy } from "lucide-react";
import { EmptyState, PageHeader, Ring } from "@/components/app/common";
import { ParentToggle } from "@/components/app/parent-gate";
import { SubjectBadge } from "@/components/app/subject-icon";
import { toast } from "@/components/app/toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChapter } from "@/content";
import { LEVELS, SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import type { Level, SubjectId } from "@/content/types";
import { levelAt } from "@/lib/calendar";
import { formatShort, toISO } from "@/lib/dates";
import { useParentMode } from "@/lib/parent-mode";
import { appreciation, fmtNote, generalAverage, gradeLines, noteTone, subjectAverages, type GradeLine } from "@/lib/stats";
import { actions, useData } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function GradesPage() {
  const data = useData();
  const parent = useParentMode();
  const [level, setLevel] = useState<Level | null>(null);
  const [adding, setAdding] = useState(false);
  if (!data?.profile) return null;
  const current = level ?? levelAt(toISO(new Date()), data.settings) ?? "seconde";
  const avgs = subjectAverages(data, current);
  const general = generalAverage(data, current);
  const lines = gradeLines(data, current);

  return (
    <div>
      <PageHeader
        eyebrow="Notes & bulletin"
        title="Mon bulletin"
        description="Exercices notés (coef 1), contrôles (coef 2) et devoirs ajoutés par les parents. Seule la 1re tentative compte."
        actions={
          <>
            <Tabs value={current} onValueChange={(v) => setLevel(v as Level)}>
              <TabsList>
                {(["seconde", "premiere", "terminale"] as Level[]).map((l) => (
                  <TabsTrigger key={l} value={l}>
                    {LEVELS[l].name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <Button variant="secondary" size="sm" onClick={() => window.print()} className="no-print">
              <Printer /> Imprimer
            </Button>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <Card className="flex flex-col items-center gap-4 p-6 text-center lg:sticky lg:top-10 lg:self-start">
          <p className="text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">Moyenne générale · {LEVELS[current].name}</p>
          <Ring value={general} max={20} size={170} stroke={14}>
            <span className={cn("font-display text-5xl font-bold", noteTone(general))}>{fmtNote(general)}</span>
            <span className="text-sm text-mist-500">/ 20</span>
          </Ring>
          <p className="text-sm text-mist-300">{appreciation(general)}</p>
          <p className="text-xs text-mist-500">{lines.length} note{lines.length > 1 ? "s" : ""} au total</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {parent ? (
              <Button size="sm" onClick={() => setAdding(true)}>
                <Plus /> Ajouter une note
              </Button>
            ) : null}
            <ParentToggle />
          </div>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Moyennes par matière</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {SUBJECT_IDS.map((id, i) => {
                const a = avgs[id];
                return (
                  <motion.div key={id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3">
                    <SubjectBadge subject={id} size="sm" />
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm font-semibold">{SUBJECTS[id].name}</span>
                        <span className={cn("font-display font-bold", noteTone(a.avg))}>
                          {fmtNote(a.avg)}
                          <span className="text-xs text-mist-500">{a.avg !== null && "/20"}</span>
                        </span>
                      </div>
                      <div className="relative mt-1.5 h-2 overflow-hidden rounded-full bg-fg/[0.07]">
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{ background: SUBJECTS[id].gradient }}
                          initial={{ width: 0 }}
                          animate={{ width: `${((a.avg ?? 0) / 20) * 100}%` }}
                          transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
                        />
                        <span className="absolute inset-y-0 left-1/2 w-px bg-fg/25" title="10/20" />
                      </div>
                      <p className="mt-1 text-[0.7rem] text-mist-500">
                        {a.count} note{a.count > 1 ? "s" : ""} · {appreciation(a.avg)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Toutes les notes</CardTitle>
            </CardHeader>
            <CardContent>
              {lines.length ? (
                <div className="flex flex-col divide-y divide-border">
                  {lines.map((l) => (
                    <GradeRow key={l.id} line={l} parent={parent} />
                  ))}
                </div>
              ) : (
                <EmptyState icon={Trophy} title="Aucune note pour l’instant" text="Fais les exercices notés et les contrôles de tes séances : tes notes s’afficheront ici." />
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <AddGradeDialog open={adding} onOpenChange={setAdding} level={current} />
    </div>
  );
}

function GradeRow({ line, parent }: { line: GradeLine; parent: boolean }) {
  const ch = line.chapterId ? getChapter(line.chapterId) : undefined;
  return (
    <div className="flex items-center gap-3 py-3">
      <SubjectBadge subject={line.subject} size="sm" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{ch ? ch.chapter.title : line.label}</p>
        <p className="flex flex-wrap items-center gap-x-2 text-xs text-mist-500">
          <span>{SUBJECTS[line.subject].short}</span>·<span>{line.kind === "manual" ? "Devoir" : line.label}</span>·<span>coef {line.coef}</span>·
          <span>{formatShort(line.date.slice(0, 10))}</span>
        </p>
        {line.comment && <p className="mt-1 text-xs text-mist-300 italic">« {line.comment} »</p>}
      </div>
      {line.kind === "test" && <Badge variant="warning">Contrôle</Badge>}
      <span className={cn("w-16 text-right font-display text-lg font-bold", noteTone(line.score20))}>{line.raw}</span>
      {parent && (
        <Button
          variant="ghost"
          size="icon"
          aria-label="Supprimer la note"
          onClick={() => {
            if (!window.confirm("Supprimer cette note ?")) return;
            if (line.kind === "manual") actions.deleteManualGrade(line.id);
            else actions.deleteAttempt(line.id);
            toast("Note supprimée");
          }}
        >
          <Trash2 />
        </Button>
      )}
    </div>
  );
}

function AddGradeDialog({ open, onOpenChange, level }: { open: boolean; onOpenChange: (o: boolean) => void; level: Level }) {
  const [subject, setSubject] = useState<SubjectId>("maths");
  const [label, setLabel] = useState("");
  const [score, setScore] = useState("");
  const [outOf, setOutOf] = useState("20");
  const [coef, setCoef] = useState("1");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState(() => toISO(new Date()));

  const valid = label.trim() && score !== "" && Number(score) >= 0 && Number(outOf) > 0 && Number(score) <= Number(outOf);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Ajouter une note</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Matière</Label>
            <div className="grid grid-cols-3 gap-2">
              {SUBJECT_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSubject(id)}
                  className={cn(
                    "cursor-pointer rounded-xl border px-2 py-2 text-xs font-semibold transition-colors",
                    subject === id ? "text-mist-100" : "border-border text-mist-500 hover:text-mist-100",
                  )}
                  style={subject === id ? { background: `${SUBJECTS[id].color}30`, borderColor: SUBJECTS[id].color } : undefined}
                >
                  {SUBJECTS[id].short}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="g-label">Intitulé</Label>
            <Input id="g-label" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Ex. Dissertation sur le roman" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="g-score">Note</Label>
              <Input id="g-score" type="number" step="0.25" min="0" value={score} onChange={(e) => setScore(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="g-out">Sur</Label>
              <Input id="g-out" type="number" min="1" value={outOf} onChange={(e) => setOutOf(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="g-coef">Coef</Label>
              <Input id="g-coef" type="number" min="0.5" step="0.5" value={coef} onChange={(e) => setCoef(e.target.value)} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="g-date">Date</Label>
            <Input id="g-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="g-comment">Appréciation (facultatif)</Label>
            <Textarea id="g-comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Bon travail, attention à l’orthographe…" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button
            disabled={!valid}
            onClick={() => {
              actions.addManualGrade({
                subject,
                level,
                label: label.trim(),
                score: Number(score),
                outOf: Number(outOf),
                coef: Number(coef) || 1,
                date,
                comment: comment.trim() || undefined,
              });
              toast("Note ajoutée au bulletin", "success");
              setLabel("");
              setScore("");
              setComment("");
              onOpenChange(false);
            }}
          >
            Enregistrer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

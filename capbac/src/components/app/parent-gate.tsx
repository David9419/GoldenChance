"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { LockKeyhole, ShieldCheck, ShieldOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { setParentMode, useParentMode } from "@/lib/parent-mode";
import { useData } from "@/lib/store";
import { toast } from "./toast";

/** Bouton pour activer / désactiver le mode parent (protégé par code). */
export function ParentToggle({ size = "sm" }: { size?: "sm" | "default" }) {
  const parent = useParentMode();
  const data = useData();
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  if (parent) {
    return (
      <Button
        variant="secondary"
        size={size}
        onClick={() => {
          setParentMode(false);
          toast("Mode parent désactivé");
        }}
      >
        <ShieldOff /> Quitter le mode parent
      </Button>
    );
  }

  return (
    <>
      <Button variant="secondary" size={size} onClick={() => setOpen(true)}>
        <LockKeyhole /> Mode parent
      </Button>
      <Dialog
        open={open}
        onOpenChange={(o) => {
          setOpen(o);
          setPin("");
          setError(false);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-amber-300" /> Espace parent
            </DialogTitle>
            <DialogDescription>
              Le mode parent permet de justifier les absences, corriger une présence et ajouter des notes. Entre le code à 4 chiffres.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (pin === data?.settings.parentPin) {
                setParentMode(true);
                setOpen(false);
                toast("Mode parent activé", "success");
              } else {
                setError(true);
                setPin("");
              }
            }}
            className="grid gap-4"
          >
            <motion.div animate={error ? { x: [0, -10, 10, -6, 6, 0] } : {}} transition={{ duration: 0.4 }}>
              <Input
                autoFocus
                inputMode="numeric"
                type="password"
                maxLength={8}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.replace(/\D/g, ""));
                  setError(false);
                }}
                placeholder="••••"
                className="h-14 text-center font-mono text-2xl tracking-[0.6em]"
              />
            </motion.div>
            {error && <p className="text-center text-sm text-rose-300">Code incorrect.</p>}
            <Button type="submit" disabled={pin.length < 4}>
              Déverrouiller
            </Button>
            <p className="text-center text-xs text-mist-500">Code par défaut : 1234 — à changer dans Profil &gt; Réglages.</p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

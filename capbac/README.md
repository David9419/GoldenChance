# CapBac — Ma route vers le bac

Application d’école à la maison : emploi du temps, cours de la Seconde (remise à niveau) puis de la Première (bac de français), exercices et contrôles notés, bulletin, absences et retards.

## Ce que contient l’application

- **Profil & paramètres** : prénom, nom et photo de profil, mode clair / sombre / automatique.
- **Phrase motivante** différente chaque jour sur l’accueil.
- **Emploi du temps** : repris du PDF (lun.–jeu. 10h–12h30 / 13h30–16h30, ven. 10h–12h30), une couleur par matière, navigation de semaine en semaine, impression.
- **Séances** : chaque créneau est relié automatiquement à un chapitre du programme (cours → exercice noté → révisions, et un contrôle tous les deux chapitres).
- **6 matières × 8 chapitres** pour la Seconde et pour la Première : Maths, Français, Physique-Chimie, SVT, Histoire-Géo, Anglais. Chaque chapitre = 3 parties de cours, 6 questions d’exercice noté, 8 questions de contrôle chronométré, avec correction détaillée.
- **Notes** : exercice = coef 1, contrôle = coef 2. Seule la 1re tentative compte (les suivantes servent à s’entraîner). Moyennes par matière, moyenne générale, appréciation.
- **Vie scolaire** : bouton « Je suis présent » (15 min avant le cours → fin du cours, retard après 10 min). Un cours non pointé = absence. Les parents justifient les absences.
- **Mode parent** (code, `1234` par défaut) : justifier/corriger les présences, ajouter des notes (devoirs rédigés…), régler les dates de l’année et les vacances, sauvegarder/importer les données.

## Dates par défaut (modifiables dans Profil > Réglages, en mode parent)

| Étape | Date |
|---|---|
| Début de la remise à niveau (Seconde) | 19 octobre 2026 |
| Début de la Première | 1er décembre 2026 |
| Bac de français (écrit) | 14 juin 2027 — **à confirmer** avec le calendrier officiel |
| Rentrée de Terminale | 1er septembre 2027 |

Vacances préremplies : 11 novembre, Noël (19 déc. → 3 janv.), lundi de Pâques, pont de l’Ascension, lundi de Pentecôte. Ajouter les autres vacances selon votre organisation.

## Modifier le contenu

- Emploi du temps (répartition des matières) : `src/content/schedule.ts`
- Cours, exercices et contrôles : `src/content/programmes/<niveau>/<matière>.ts`
- Couleurs et noms des matières : `src/content/subjects.ts`

## Données

Tout est enregistré dans le navigateur de l’appareil utilisé (pas de compte, pas de serveur). Penser à **exporter une sauvegarde** de temps en temps (Profil > Sauvegarde) ; on peut la réimporter sur un autre appareil.

## Lancer / déployer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Sur Vercel : nouveau projet à partir du dépôt GitHub, **Root Directory = `capbac`**.

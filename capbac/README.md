# CapBac — Ma route vers le bac

Application d’école à la maison : emploi du temps, cours de la Seconde (remise à niveau) puis de la Première (bac de français), exercices et contrôles notés, bulletin, absences et retards.

## Ce que contient l’application

- **3 comptes** sur l’écran de connexion :
  - **Élève** : accès direct (sans code).
  - **Professeur** (code `1111` par défaut) : tableau de bord de suivi, devoirs et contrôles en plus, correction des copies, publication anticipée des corrections, vie scolaire.
  - **Direction** (code `9999` par défaut) : vue d’ensemble en direct, toutes les pages, et les **Paramètres** (comptes et codes, calendrier, vacances, durée des contrôles, délai de correction, sauvegarde).
  - Les codes se choisissent à la première configuration et se changent dans Paramètres.
- **Accès par niveau** : l’élève n’a accès qu’au programme de Seconde ; la Première s’ouvre automatiquement le 1er janvier 2027, la Terminale à la rentrée 2027.
- **Emploi du temps** (repris du PDF) : lundi → jeudi 10h–16h30 (5 cours, déjeuner 12h30–13h30 et **3 petites pauses de 10 min** : 11h10, 14h25, 15h30), vendredi 10h–12h30. Pendant une pause, un bandeau invite l’élève à se lever et prendre l’air. La semaine en cours s’affiche du lundi au samedi, et **dès le dimanche, la semaine qui arrive**.
- **Fêtes et jeûnes juifs : pas d’école** (calculés automatiquement chaque année) : Roch Hachana, jeûne de Guedalia, Yom Kippour, Souccot (toute la fête), Chemini Atseret, Simhat Torah, 10 Tevet, jeûne d’Esther, Pourim, Pessah (8 jours), Chavouot, 17 Tamouz, Tisha Beav. Désactivable dans Paramètres.
- **Leçons** : chaque créneau est relié automatiquement à un chapitre (une leçon par partie → exercice de synthèse → révisions). **Une leçon n’est visible qu’au début de son cours** (jour et heure) ; les leçons passées restent consultables. Les cours contiennent des schémas, graphiques, tableaux, frises et exemples corrigés.
- **Exercices** : après la leçon, l’élève clique « J’ai compris et appris la leçon », ce qui débloque 1 ou 2 exercices sur cette leçon, **corrigés question par question** avec l’explication.
- **Rentrée en douceur** : les 2 premières semaines, leçons et exercices seulement (pas de contrôle ni de devoir).
- **Contrôles** : **3 par semaine** (réglable), matières et jours différents, **annoncés au moins 3 jours avant** (agenda + notifications). Un contrôle **remplace 1 créneau (1h15–1h30), ou 2 créneaux (≈ 2h45) pour certains contrôles de maths/français**. Il ne peut se faire **que le jour même, pendant le créneau**. **Alerte 1 h avant** (bandeau + notification de l’ordinateur). Correction publiée 2 jours après (réglable). Contrôle manqué : le prof peut autoriser un rattrapage.
- **Devoirs maison** : donnés automatiquement **en fin de journée (après le dernier cours)**, 1 ou 2 par jour, sur ce qui a été appris, **pour le lendemain ou le surlendemain**. L’élève peut les faire dès qu’ils sont donnés. Correction dès la copie rendue.
- **Anti-triche** : pendant un contrôle ou un devoir (mode examen plein écran), **quitter la page, l’onglet ou l’application fait recommencer l’épreuve** (questions mélangées), et le prof/la direction reçoivent une alerte.
- **Agenda** : contrôles à venir, devoirs pour le lendemain et les jours suivants, exercices en classe.
- **Prof** : peut ajouter des devoirs (QCM ou rédaction, corrigée par lui) et des contrôles en choisissant le jour (≥ 3 jours à l’avance) et le créneau remplacé (1 ou 2 heures).
- **Notes** : exercice = coef 1, contrôle = coef 2, devoirs du prof = coef choisi. Moyenne par matière et moyenne générale.
- **Vie scolaire** : bouton « Je suis présent » à chaque cours (15 min avant → fin du cours, retard après 10 min). **Un cours non pointé à la fin = absent automatiquement.** Le prof ou la direction peuvent corriger et justifier.
- **Notifications** (cloche) : contrôles à venir, notes publiées, copies à corriger, absences du jour.
- **Phrase motivante** différente chaque jour, **mode clair / sombre** (bouton en haut à droite et dans le menu du compte).

## Modifier le contenu

- Emploi du temps (répartition des matières) : `src/content/schedule.ts`
- Cours, exercices et contrôles : `src/content/programmes/<niveau>/<matière>.ts`
- Couleurs et noms des matières : `src/content/subjects.ts`

## Données

Tout est enregistré dans le navigateur de l’ordinateur utilisé (pas de serveur) : élève, prof et direction partagent les mêmes données sur cet ordinateur, et deux onglets ouverts se mettent à jour en direct. Pour que le prof ou la direction suivent depuis un autre appareil, il faudra une base de données en ligne (étape suivante). Penser à **exporter une sauvegarde** de temps en temps (Direction > Paramètres > Sauvegarde).

## Lancer / déployer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Sur Vercel : nouveau projet à partir du dépôt GitHub, **Root Directory = `capbac`**.

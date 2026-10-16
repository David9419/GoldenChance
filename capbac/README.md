# CapBac — Ma route vers le bac

Application d’école à la maison : emploi du temps, cours de la Seconde (remise à niveau) puis de la Première (bac de français), exercices et contrôles notés, bulletin, absences et retards.

## Ce que contient l’application

- **3 comptes** sur l’écran de connexion :
  - **Élève** : accès direct (sans code).
  - **Professeur** (code `1111` par défaut) : tableau de bord de suivi, devoirs et contrôles en plus, correction des copies, publication anticipée des corrections, vie scolaire.
  - **Direction** (code `9999` par défaut) : vue d’ensemble en direct, toutes les pages, et les **Paramètres** (comptes et codes, calendrier, vacances, durée des contrôles, délai de correction, sauvegarde).
  - Les codes se choisissent à la première configuration et se changent dans Paramètres.
- **Accès par niveau** : l’élève n’a accès qu’au programme de Seconde ; la Première s’ouvre automatiquement le 1er décembre 2026, la Terminale à la rentrée 2027.
- **Emploi du temps** (repris du PDF) : la semaine en cours s’affiche du lundi au samedi, et **dès le dimanche, la semaine qui arrive**.
- **Séances** : chaque créneau est relié automatiquement à un chapitre (cours → exercice noté → révisions).
- **Contrôles** : **3 à 4 par semaine** (en alternance), dans des **matières différentes** et des jours différents, en début de séance, sur un chapitre déjà terminé. Une seule copie, chronométrée. **La note et la correction arrivent 2 jours après** (réglable). Les **exercices notés** sont corrigés tout de suite.
- **Agenda** : contrôles, exercices notés et devoirs des jours à venir (aujourd’hui, demain…).
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

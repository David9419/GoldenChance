# À valider par David avant la mise en ligne

## 1. Points à confirmer

- [ ] **« Plateforme de roulette »** : le site dit « Résultat déterminé sur une vraie plateforme de roulette ». Si la plateforme est réellement certifiée, on peut écrire « certifiée » ; sinon, on garde la phrase actuelle.
- [ ] **Photo et nom du gagnant (Lévi Siboni)** : il faut son accord écrit pour publier sa photo et son nom (droit à l'image / RGPD).
- [ ] **Nom de domaine** : une fois choisi, ajoutez-le dans Vercel (voir la procédure de déploiement) et la variable `NEXT_PUBLIC_SITE_URL`.
- [ ] **Juridique (important)** : un tirage au sort avec ticket payant (10 €) est en principe encadré, voire interdit, en France (loteries prohibées sauf exceptions). À vérifier avec un avocat ou l'ANJ avant de vendre des tickets. Prévoir aussi : mentions légales, règlement du concours, politique de confidentialité, âge minimum (18 ans).

## 2. FAQ — proposition de nouvelle version (non publiée)

La FAQ actuellement en ligne reprend les textes génériques d'origine. Voici une proposition cohérente avec ce que vous avez précisé (ticket à 10 €, tickets limités, tirage filmé en direct sur Instagram).
Les passages entre **[crochets]** sont des informations que je ne connais pas : à compléter par vous, rien n'a été inventé.

**Combien coûte un ticket ?**
Le ticket coûte 10 €. Le nombre de tickets est limité pour chaque concours. [Nombre de tickets par personne autorisé ?]

**Comment participer à un concours ?**
Chaque concours est annoncé sur notre Instagram @goldenchanceconcours et dans notre communauté WhatsApp. [Comment acheter un ticket aujourd'hui : message privé, lien de paiement… ?]

**Comment se déroule le tirage ?**
Le tirage au sort est filmé en direct sur notre Instagram, sur une vraie plateforme de roulette. Chacun peut suivre le résultat en temps réel.

**Que se passe-t-il si tous les tickets ne sont pas vendus ?**
[À définir : tirage maintenu, reporté, ou remboursement ?]

**Comment je reçois mon lot si je gagne ?**
Nous contactons le gagnant directement après le tirage pour organiser la remise du lot [en main propre / par envoi suivi — à préciser].

**Les lots sont-ils authentiques ?**
[À confirmer : lots neufs et authentiques, avec facture ?]

**Comment être prévenu du prochain concours ?**
Un nouveau concours est lancé toutes les deux semaines. Suivez notre Instagram @goldenchanceconcours et rejoignez notre communauté WhatsApp : les annonces y sont publiées en priorité.

Dès que vous validez (et complétez) ces réponses, il suffit de les reporter dans `src/content/site.ts` (rubrique `faq`).

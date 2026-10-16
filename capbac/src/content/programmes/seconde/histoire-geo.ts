import type { Chapter } from "../../types";

export const chapters: Chapter[] = [
  // ───────────────────────────── Chapitre 1 ─────────────────────────────
  {
    id: "2nde-hg-01",
    title: "Histoire — La Méditerranée antique : l’empreinte grecque et romaine",
    summary:
      "Athènes invente la démocratie au Ve siècle av. J.-C., puis Rome unifie la Méditerranée dans un empire où la citoyenneté s’étend et où le christianisme devient religion officielle.",
    objectives: [
      "Je sais expliquer le fonctionnement de la démocratie athénienne et ses limites.",
      "Je sais situer les grandes étapes de l’histoire romaine (République, Empire, fin de l’Empire d’Occident).",
      "Je sais expliquer comment Rome intègre les peuples conquis (citoyenneté, romanisation).",
      "Je sais expliquer comment le christianisme passe du statut de religion persécutée à celui de religion officielle.",
    ],
    sections: [
      {
        title: "Athènes au Ve siècle av. J.-C. : naissance de la démocratie",
        body: [
          "Dans le monde grec, l’organisation politique de base est la **cité** (*polis*) : une communauté de citoyens indépendante, avec sa ville, son territoire agricole, ses lois et ses dieux protecteurs. Athènes, en Attique, devient la plus puissante d’entre elles. En **508-507 av. J.-C.**, l’aristocrate **Clisthène** réorganise la cité : il répartit les citoyens en dix tribus mêlant habitants de la ville, de la côte et de l’intérieur, ce qui affaiblit le poids des grandes familles. C’est l’acte de naissance de la **démocratie** (du grec *dêmos*, le peuple, et *kratos*, le pouvoir).",
          "Les institutions reposent sur la participation directe des citoyens. L’**Ecclésia** (assemblée du peuple) réunit sur la colline de la Pnyx tous les citoyens volontaires : elle vote les lois, décide de la guerre et de la paix, élit les **stratèges** (dix chefs militaires) et peut prononcer l’**ostracisme** (exil de dix ans d’un citoyen jugé dangereux). La **Boulè** (conseil de 500 membres tirés au sort, 50 par tribu) prépare les décrets. L’**Héliée** (tribunal populaire de 6 000 jurés tirés au sort) rend la justice. Le **tirage au sort** et la rotation rapide des charges garantissent l’égalité entre citoyens.",
          "Après les victoires contre les Perses lors des **guerres médiques** (Marathon en **490**, Salamine en **480 av. J.-C.**), Athènes prend la tête de la **ligue de Délos** (**478-477 av. J.-C.**), alliance de cités qui devient un véritable empire maritime. Sous **Périclès** (stratège réélu presque chaque année de 443 à 429), la cité est à son apogée : construction du Parthénon sur l’Acropole, création du **misthos** (indemnité versée aux citoyens qui siègent, permettant aux plus pauvres de participer).",
          "Cette démocratie a pourtant des **limites** importantes. Seuls sont citoyens les hommes libres, majeurs, nés depuis la loi de Périclès de **451 av. J.-C.** d’un père citoyen et d’une mère fille de citoyen : environ 30 000 à 40 000 personnes sur peut-être 250 000 à 300 000 habitants de l’Attique. Les **femmes**, les **métèques** (étrangers libres résidant à Athènes) et les **esclaves**, très nombreux, en sont exclus. La puissance athénienne repose aussi sur la domination imposée aux alliés de la ligue.",
        ],
        keyPoints: [
          "**Cité** (*polis*) : communauté de citoyens indépendante, avec sa ville, son territoire, ses lois et ses dieux.",
          "**508-507 av. J.-C.** : réformes de Clisthène, naissance de la démocratie athénienne.",
          "**Ecclésia** : assemblée des citoyens qui vote les lois ; **Boulè** : conseil des 500 ; **Héliée** : tribunal populaire.",
          "**Misthos** : indemnité versée aux citoyens pour exercer une fonction publique (créée sous Périclès).",
          "Exclus de la citoyenneté : femmes, métèques, esclaves.",
        ],
        formulas: [
          "490 av. J.-C. → bataille de Marathon (1re guerre médique)",
          "480 av. J.-C. → bataille de Salamine (2e guerre médique)",
          "478-477 av. J.-C. → fondation de la ligue de Délos",
          "451 av. J.-C. → loi de Périclès sur la citoyenneté",
        ],
        example: {
          title: "Méthode : analyser un document sur la démocratie athénienne (l’oraison funèbre de Périclès)",
          steps: [
            "Présenter le document : discours prononcé par Périclès en 431 av. J.-C. en l’honneur des soldats morts, rapporté par l’historien **Thucydide** (donc réécrit par lui).",
            "Relever les idées clés : le pouvoir appartient au plus grand nombre, tous sont égaux devant la loi, le mérite compte plus que la richesse.",
            "Relier aux institutions : l’Ecclésia ouverte à tous les citoyens, le tirage au sort, le misthos qui permet aux pauvres de participer.",
            "Exercer un regard critique : c’est un discours d’éloge destiné à glorifier Athènes au début de la guerre du Péloponnèse ; il passe sous silence les exclus (femmes, métèques, esclaves) et la domination exercée sur les alliés.",
            "Conclure : le document montre l’idéal démocratique athénien, réel mais réservé à une minorité.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Athènes au Ve siècle av. J.-C. : les grandes dates",
          caption: "Toutes les dates sont avant J.-C. : on compte « à rebours », donc 508 est plus ancien que 431.",
          events: [
            {
              date: "508-507 av. J.-C.",
              label: "Réformes de Clisthène : naissance de la démocratie",
            },
            {
              date: "490 av. J.-C.",
              label: "Victoire de Marathon (1re guerre médique)",
            },
            {
              date: "480 av. J.-C.",
              label: "Victoire navale de Salamine (2e guerre médique)",
            },
            {
              date: "478-477 av. J.-C.",
              label: "Fondation de la ligue de Délos",
            },
            {
              date: "451 av. J.-C.",
              label: "Loi de Périclès sur la citoyenneté",
            },
            {
              date: "443-429 av. J.-C.",
              label: "Périclès réélu stratège presque chaque année",
            },
            {
              date: "431 av. J.-C.",
              label: "Début de la guerre du Péloponnèse, oraison funèbre de Périclès",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-01-s1-p1",
            prompt: "Comment sont désignés les 500 membres de la **Boulè** athénienne ?",
            choices: [
              "Ils sont élus par l’Ecclésia parmi les plus riches",
              "Ils sont nommés par les stratèges",
              "Ils sont tirés au sort, à raison de 50 par tribu",
              "Ils héritent de leur charge de leur père",
            ],
            answer: 2,
            explanation: "La **Boulè** est un conseil de **500 citoyens tirés au sort**, 50 dans chacune des dix tribus créées par Clisthène. Elle prépare les décrets votés ensuite par l’Ecclésia ; le tirage au sort et la rotation des charges garantissent l’égalité entre citoyens.",
          },
          {
            id: "2nde-hg-01-s1-p2",
            prompt: "Qu’est-ce que le **misthos**, créé à l’époque de Périclès ?",
            choices: [
              "Une indemnité versée aux citoyens qui exercent une fonction publique",
              "Un impôt payé par les métèques",
              "Le vote d’exil d’un citoyen jugé dangereux",
              "Le temple principal de l’Acropole",
            ],
            answer: 0,
            explanation: "Le **misthos** est une indemnité qui compense la journée de travail perdue par un citoyen qui siège (au tribunal, au conseil). Il permet aux citoyens les plus pauvres de participer réellement à la vie politique ; le vote d’exil, lui, s’appelle l’ostracisme.",
          },
          {
            id: "2nde-hg-01-s1-p3",
            prompt: "Lequel de ces habitants d’Athènes peut voter à l’**Ecclésia** au Ve siècle av. J.-C. ?",
            choices: [
              "Une fille de citoyen",
              "Un esclave affranchi par son maître",
              "Un métèque installé depuis vingt ans",
              "Un homme libre et majeur, né d’un père citoyen et d’une mère fille de citoyen",
            ],
            answer: 3,
            explanation: "Depuis la loi de Périclès de **451 av. J.-C.**, seuls les hommes libres et majeurs nés de deux parents athéniens sont citoyens. Les **femmes**, les **métèques** (étrangers libres résidents) et les **esclaves** sont exclus, ce qui fait de la démocratie athénienne le pouvoir d’une minorité.",
          },
        ],
      },
      {
        title: "Rome : de la République à l’Empire, un empire méditerranéen",
        body: [
          "Selon la légende, Rome est fondée en **753 av. J.-C.** par Romulus. Après une période royale, les Romains instaurent en **509 av. J.-C.** la **République** (*res publica*, la chose publique) : le pouvoir est partagé entre des magistrats élus pour un an (les deux **consuls** en tête), le **Sénat** (assemblée d’anciens magistrats, très influente) et les assemblées du peuple. Par ses conquêtes, Rome domine l’Italie puis l’ensemble du bassin méditerranéen, que les Romains appellent *Mare nostrum* (notre mer).",
          "Au Ier siècle av. J.-C., les guerres civiles entre généraux ambitieux (Marius, Sylla, Pompée, **Jules César**, assassiné en **44 av. J.-C.**) déstabilisent la République. Son fils adoptif Octave l’emporte et reçoit du Sénat en **27 av. J.-C.** le titre d’**Auguste** : il devient le premier **empereur**. Il conserve en apparence les institutions républicaines mais concentre en réalité tous les pouvoirs (militaire, politique, religieux). Ce régime est appelé le **Principat**.",
          "L’Empire connaît ensuite deux siècles de stabilité relative, la **paix romaine** (*pax romana*). Il s’étend à son maximum sous Trajan (début du IIe siècle ap. J.-C.), de la Bretagne (Angleterre actuelle) à l’Égypte et de l’Espagne à la Mésopotamie, protégé par des frontières fortifiées (le *limes*). Les **routes**, les ports et la navigation relient les provinces ; le **culte impérial** (honneurs rendus à l’empereur) renforce la fidélité des populations.",
          "À partir du IIIe siècle, l’Empire est fragilisé (crises militaires, pressions aux frontières). L’empereur **Constantin** fonde en **330** une nouvelle capitale, **Constantinople**. À la mort de Théodose en **395**, l’Empire est partagé entre Occident et Orient. L’**Empire romain d’Occident disparaît en 476**, quand le chef germanique Odoacre dépose le dernier empereur, Romulus Augustule ; l’Empire d’Orient (byzantin) survit jusqu’en **1453**.",
        ],
        keyPoints: [
          "**509 av. J.-C.** : naissance de la République romaine.",
          "**27 av. J.-C.** : Octave reçoit le titre d’Auguste, début de l’Empire.",
          "**Sénat** : assemblée d’anciens magistrats, pilier de la République, conservé sous l’Empire.",
          "***Pax romana*** : période de paix relative (Ier-IIe siècles) favorisant les échanges.",
          "**476** : fin de l’Empire romain d’Occident.",
        ],
        formulas: [
          "753 av. J.-C. → fondation légendaire de Rome",
          "509 av. J.-C. → début de la République",
          "27 av. J.-C. → Auguste, premier empereur",
          "330 → fondation de Constantinople",
          "395 → partage de l’Empire ; 476 → fin de l’Empire d’Occident",
        ],
        example: {
          title: "Étude de cas : comment Auguste fonde un nouveau régime sans le dire",
          steps: [
            "Le contexte : en 31 av. J.-C., Octave bat Antoine et Cléopâtre à **Actium** ; il est seul maître du monde romain.",
            "Le choix politique : en 27 av. J.-C., il prétend « rendre » la République au Sénat, qui lui accorde en retour le titre d’Auguste.",
            "La réalité du pouvoir : il commande les armées, dispose de la puissance tribunicienne et devient grand pontife (chef de la religion) en 12 av. J.-C.",
            "La propagande : monnaies, statues (Auguste de Prima Porta) et récit de ses actions (*Res gestae*) présentent l’empereur comme le restaurateur de la paix.",
            "Bilan : sous l’apparence républicaine, un régime monarchique s’installe pour près de cinq siècles en Occident.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Rome, de la fondation légendaire à la fin de l’Empire",
          caption: "Repères à connaître : 509 av. J.-C. (République), 27 av. J.-C. (Empire), 476 (fin de l’Empire d’Occident).",
          events: [
            {
              date: "753 av. J.-C.",
              label: "Fondation légendaire de Rome par Romulus",
            },
            {
              date: "509 av. J.-C.",
              label: "Instauration de la République",
            },
            {
              date: "44 av. J.-C.",
              label: "Assassinat de Jules César",
            },
            {
              date: "27 av. J.-C.",
              label: "Octave reçoit le titre d’Auguste : début de l’Empire",
            },
            {
              date: "330",
              label: "Constantin fonde Constantinople",
            },
            {
              date: "395",
              label: "Partage de l’Empire entre Occident et Orient",
            },
            {
              date: "476",
              label: "Fin de l’Empire romain d’Occident",
            },
            {
              date: "1453",
              label: "Prise de Constantinople : fin de l’Empire d’Orient",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-01-s2-p1",
            prompt: "Comment appelle-t-on le régime fondé par **Auguste**, qui conserve en apparence les institutions républicaines ?",
            choices: ["La tétrarchie", "Le Principat", "La démocratie", "La monarchie de droit divin"],
            answer: 1,
            explanation: "Le régime fondé par Auguste en **27 av. J.-C.** est le **Principat** : le Sénat et les magistratures subsistent, mais l’empereur concentre les pouvoirs militaire, politique et religieux. C’est une monarchie qui ne dit pas son nom.",
          },
          {
            id: "2nde-hg-01-s2-p2",
            prompt: "Qu’appelle-t-on la ***pax romana*** ?",
            choices: [
              "Le traité de paix signé avec Carthage",
              "La frontière fortifiée de l’Empire",
              "Une période de paix relative aux Ier-IIe siècles qui favorise les échanges",
              "Le partage de l’Empire en 395",
            ],
            answer: 2,
            explanation: "La ***pax romana*** désigne les deux siècles de stabilité relative qui suivent l’installation de l’Empire. Les routes, les ports et la navigation relient alors les provinces ; la frontière fortifiée, elle, se nomme le ***limes***.",
          },
          {
            id: "2nde-hg-01-s2-p3",
            prompt: "Quel empereur fonde **Constantinople** en **330** ?",
            choices: ["Constantin", "Théodose", "Trajan", "Auguste"],
            answer: 0,
            explanation: "C’est **Constantin** qui fonde en **330** une nouvelle capitale sur le site de Byzance, à laquelle il donne son nom. Elle devient la capitale de l’Empire d’Orient, qui survit jusqu’en 1453.",
          },
        ],
      },
      {
        title: "Citoyenneté romaine, romanisation et christianisation",
        body: [
          "Rome intègre progressivement les peuples conquis par la **citoyenneté**. Être citoyen romain donne des droits (voter, être protégé par le droit romain, faire appel à l’empereur, ne pas subir certains châtiments) et des devoirs (service militaire, impôts). En **48 ap. J.-C.**, l’empereur **Claude** obtient du Sénat que des notables de Gaule chevelue puissent y siéger : son discours est gravé sur la **Table claudienne** retrouvée à Lyon. Enfin, l’**édit de Caracalla** (**212**) accorde la citoyenneté à presque tous les hommes libres de l’Empire.",
          "La **romanisation** désigne la diffusion du mode de vie romain dans les provinces : urbanisme (forum, thermes, amphithéâtre, aqueduc), langue latine en Occident (le grec reste dominant en Orient), droit romain, culte impérial. Elle touche surtout les élites locales, qui y trouvent un moyen de promotion sociale. Nîmes (Maison carrée, pont du Gard) ou Lyon (*Lugdunum*, capitale des Gaules) en sont des exemples.",
          "Le **christianisme** naît en Palestine au Ier siècle autour de la prédication de **Jésus de Nazareth**, puis se diffuse dans l’Empire grâce aux apôtres, notamment **Paul de Tarse**. Monothéistes, les chrétiens refusent le culte impérial, ce qui leur vaut des **persécutions** (sous Néron en 64, puis sous Dèce et surtout Dioclétien au début du IVe siècle).",
          "Tout change avec **Constantin** : l’**édit de Milan** (**313**), signé avec Licinius, accorde la liberté de culte, et l’empereur favorise l’Église. En **380**, l’**édit de Thessalonique** de **Théodose** fait du christianisme (nicéen) la religion officielle de l’Empire ; en **392**, les cultes païens sont interdits. Le christianisme devient ainsi un héritage majeur de Rome pour l’Europe médiévale.",
        ],
        keyPoints: [
          "**Romanisation** : diffusion de la langue, du droit, de l’urbanisme et des modes de vie romains dans les provinces.",
          "**48** : discours de Claude (Table claudienne) ; **212** : édit de Caracalla, citoyenneté pour presque tous les hommes libres.",
          "**313** : édit de Milan, liberté de culte pour les chrétiens.",
          "**380** : édit de Thessalonique, christianisme religion officielle ; **392** : interdiction des cultes païens.",
        ],
        formulas: [
          "48 ap. J.-C. → Table claudienne (Lyon)",
          "212 → édit de Caracalla",
          "313 → édit de Milan (Constantin)",
          "380 → édit de Thessalonique (Théodose)",
        ],
        example: {
          title: "Étude de cas : la Table claudienne, une source sur l’intégration des Gaulois",
          steps: [
            "Nature : plaque de bronze découverte à Lyon en 1528, reproduisant un discours de l’empereur Claude devant le Sénat en 48.",
            "Contexte : les notables de Gaule chevelue, déjà citoyens, demandent le droit d’accéder aux magistratures et au Sénat ; des sénateurs s’y opposent.",
            "Arguments de Claude : Rome s’est toujours agrandie en intégrant les vaincus ; les Gaulois sont fidèles depuis la conquête de César.",
            "Portée : le Sénat accepte d’abord pour les Éduens ; l’intégration des élites provinciales renforce la cohésion de l’Empire.",
            "Lien avec la suite : ce mouvement aboutit en 212 à l’édit de Caracalla.",
          ],
        },
        figure: {
          type: "table",
          title: "Quatre textes qui transforment l’Empire romain",
          headers: ["Date", "Texte", "Auteur", "Portée"],
          rows: [
            [
              "48",
              "Discours gravé sur la Table claudienne",
              "L’empereur Claude",
              "Des notables de Gaule chevelue peuvent entrer au Sénat",
            ],
            [
              "212",
              "Édit de Caracalla",
              "L’empereur Caracalla",
              "Citoyenneté pour presque tous les hommes libres de l’Empire",
            ],
            [
              "313",
              "Édit de Milan",
              "Constantin et Licinius",
              "Liberté de culte, fin des persécutions contre les chrétiens",
            ],
            [
              "380",
              "Édit de Thessalonique",
              "L’empereur Théodose",
              "Le christianisme devient religion officielle",
            ],
          ],
        },
        practice: [
          {
            id: "2nde-hg-01-s3-p1",
            prompt: "Que décide l’**édit de Caracalla** en **212** ?",
            choices: [
              "Il interdit les cultes païens",
              "Il accorde la liberté de culte aux chrétiens",
              "Il partage l’Empire en deux",
              "Il accorde la citoyenneté romaine à presque tous les hommes libres de l’Empire",
            ],
            answer: 3,
            explanation: "L’**édit de Caracalla** (212) étend la citoyenneté romaine à presque tous les hommes libres de l’Empire. Il est l’aboutissement d’une intégration progressive des provinciaux, dont la Table claudienne (48) est une étape.",
          },
          {
            id: "2nde-hg-01-s3-p2",
            prompt: "Quelle catégorie de la population des provinces est surtout touchée par la **romanisation** ?",
            choices: [
              "Les élites locales",
              "Les esclaves des mines",
              "Les paysans des campagnes reculées",
              "Les soldats germaniques",
            ],
            answer: 0,
            explanation: "La romanisation touche d’abord les **élites locales**, qui adoptent la langue latine, le droit et l’urbanisme romains pour s’intégrer et obtenir des fonctions. Les campagnes reculées restent plus longtemps fidèles aux langues et coutumes locales.",
          },
          {
            id: "2nde-hg-01-s3-p3",
            prompt: "Pourquoi les chrétiens sont-ils persécutés dans l’Empire avant 313 ?",
            choices: [
              "Parce qu’ils refusent de payer l’impôt",
              "Parce qu’ils refusent de rendre un culte à l’empereur",
              "Parce qu’ils parlent grec",
              "Parce qu’ils ne sont pas citoyens romains",
            ],
            answer: 1,
            explanation: "Monothéistes, les chrétiens refusent le **culte impérial**, perçu comme un signe de loyauté envers Rome. Ce refus leur vaut des persécutions (Néron en 64, Dèce, Dioclétien) jusqu’à l’**édit de Milan** de 313.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-hg-01-ex-1",
        prompt: "Qui est à l’origine des réformes de **508-507 av. J.-C.** qui fondent la démocratie athénienne ?",
        choices: ["Périclès", "Clisthène", "Solon", "Thucydide"],
        answer: 1,
        explanation:
          "C’est **Clisthène** qui, en 508-507 av. J.-C., réorganise les citoyens en dix tribus mêlant ville, côte et intérieur, affaiblissant les grandes familles aristocratiques. Solon avait réformé Athènes plus tôt (début du VIe siècle) sans créer la démocratie ; Périclès domine la vie politique plus tard, au milieu du Ve siècle ; Thucydide est un historien.",
      },
      {
        id: "2nde-hg-01-ex-2",
        prompt: "Quelle institution athénienne vote les lois et décide de la guerre et de la paix ?",
        choices: ["L’Ecclésia", "La Boulè", "L’Héliée", "Le Sénat"],
        answer: 0,
        explanation:
          "L’**Ecclésia** est l’assemblée de tous les citoyens volontaires, réunie sur la Pnyx : elle vote les lois, décide de la guerre et élit les stratèges. La Boulè (500 membres tirés au sort) prépare les décrets ; l’Héliée est le tribunal populaire ; le Sénat est une institution romaine.",
      },
      {
        id: "2nde-hg-01-ex-3",
        prompt: "Parmi ces habitants de l’Attique, lequel peut être citoyen athénien au Ve siècle av. J.-C. ?",
        choices: [
          "Une femme née de parents athéniens",
          "Un métèque riche installé depuis vingt ans",
          "Un homme libre et majeur né d’un père citoyen et d’une mère fille de citoyen",
          "Un esclave affranchi",
        ],
        answer: 2,
        explanation:
          "Depuis la loi de Périclès (**451 av. J.-C.**), seuls les **hommes libres et majeurs nés d’un père citoyen et d’une mère fille de citoyen** sont citoyens. Les femmes, même athéniennes, sont exclues de la vie politique ; les métèques (étrangers résidents) et les esclaves, même affranchis, ne sont pas citoyens.",
      },
      {
        id: "2nde-hg-01-ex-4",
        prompt: "En quelle année Octave reçoit-il le titre d’**Auguste**, marquant le début de l’Empire romain ?",
        choices: ["509 av. J.-C.", "44 av. J.-C.", "212 ap. J.-C.", "27 av. J.-C."],
        answer: 3,
        explanation:
          "En **27 av. J.-C.**, le Sénat accorde à Octave le titre d’Auguste : c’est le début du Principat, donc de l’Empire. 509 av. J.-C. correspond au début de la République, 44 av. J.-C. à l’assassinat de Jules César et 212 à l’édit de Caracalla.",
      },
      {
        id: "2nde-hg-01-ex-5",
        prompt: "Que décide l’**édit de Caracalla** en 212 ?",
        choices: [
          "Il fait du christianisme la religion officielle de l’Empire",
          "Il accorde la citoyenneté romaine à presque tous les hommes libres de l’Empire",
          "Il partage l’Empire entre Orient et Occident",
          "Il autorise les Gaulois à entrer au Sénat",
        ],
        answer: 1,
        explanation:
          "L’**édit de Caracalla** (212) généralise la **citoyenneté romaine** à presque tous les hommes libres de l’Empire. La religion officielle chrétienne date de l’édit de Thessalonique (380), le partage de 395, et l’entrée des notables gaulois au Sénat du discours de Claude (48).",
      },
      {
        id: "2nde-hg-01-ex-6",
        prompt: "Quel texte accorde en **313** la liberté de culte aux chrétiens ?",
        choices: ["L’édit de Thessalonique", "La Table claudienne", "L’édit de Milan", "Les Res gestae"],
        answer: 2,
        explanation:
          "L’**édit de Milan** (313), décidé par Constantin et Licinius, met fin aux persécutions et accorde la liberté de culte. L’édit de Thessalonique (380, Théodose) va plus loin en faisant du christianisme la religion officielle. La Table claudienne (48) concerne les Gaulois au Sénat ; les *Res gestae* sont le récit des actions d’Auguste.",
      },
    ],
    test: [
      {
        id: "2nde-hg-01-ct-1",
        prompt: "Pourquoi l’Héliée et la Boulè recrutent-elles leurs membres par **tirage au sort** ?",
        choices: [
          "Pour garantir l’égalité entre citoyens et limiter l’influence des riches et des orateurs",
          "Parce que les citoyens refusaient de voter",
          "Pour permettre aux métèques d’y participer",
          "Parce que les dieux devaient choisir les magistrats militaires",
        ],
        answer: 0,
        explanation:
          "Pour les Athéniens, le **tirage au sort** est le procédé démocratique par excellence : chaque citoyen a la même chance d’exercer une charge, ce qui empêche les plus riches ou les meilleurs orateurs de monopoliser le pouvoir. Les métèques restent exclus. Les stratèges, chefs militaires, sont au contraire **élus**, car leur fonction exige des compétences.",
      },
      {
        id: "2nde-hg-01-ct-2",
        prompt: "Quel est le rôle du **misthos** créé à l’époque de Périclès ?",
        choices: [
          "Financer la construction du Parthénon",
          "Payer les soldats mercenaires étrangers",
          "Exiler pour dix ans un citoyen jugé dangereux",
          "Indemniser les citoyens qui siègent afin que les plus pauvres puissent participer",
        ],
        answer: 3,
        explanation:
          "Le **misthos** est une indemnité versée aux citoyens qui siègent à l’Héliée, à la Boulè ou exercent une charge : il compense la perte d’une journée de travail et rend la participation possible pour les citoyens modestes. L’exil de dix ans correspond à l’**ostracisme**.",
      },
      {
        id: "2nde-hg-01-ct-3",
        prompt: "En quoi la ligue de Délos montre-t-elle une limite de la démocratie athénienne ?",
        choices: [
          "Elle donnait la citoyenneté athénienne à tous les alliés",
          "Athènes en a fait un empire et impose sa domination et un tribut aux cités alliées",
          "Elle a été dirigée par Sparte",
          "Elle interdisait aux Athéniens de voter",
        ],
        answer: 1,
        explanation:
          "Fondée en **478-477 av. J.-C.** contre les Perses, la **ligue de Délos** devient sous la direction d’Athènes un véritable empire : le trésor est transféré à Athènes (454), les alliés paient un tribut et ceux qui veulent quitter la ligue sont réprimés. La démocratie à l’intérieur s’accompagne donc d’une domination à l’extérieur. Les alliés ne deviennent pas citoyens athéniens.",
      },
      {
        id: "2nde-hg-01-ct-4",
        prompt: "Quelle affirmation décrit le mieux le **Principat** fondé par Auguste ?",
        choices: [
          "Une monarchie ouvertement proclamée qui supprime le Sénat",
          "Une démocratie directe sur le modèle athénien",
          "Un régime où l’empereur concentre les pouvoirs tout en conservant les apparences républicaines",
          "Un partage égal du pouvoir entre deux consuls élus chaque année",
        ],
        answer: 2,
        explanation:
          "Auguste prétend restaurer la République : le **Sénat** et les magistratures subsistent. Mais il détient en réalité le commandement des armées, la puissance tribunicienne et la fonction de grand pontife. Le **Principat** est donc une monarchie déguisée. Le partage entre deux consuls caractérise la République.",
      },
      {
        id: "2nde-hg-01-ct-5",
        prompt: "Quel ordre chronologique est correct ?",
        choices: [
          "Édit de Milan → édit de Caracalla → Table claudienne → édit de Thessalonique",
          "Édit de Caracalla → Table claudienne → édit de Thessalonique → édit de Milan",
          "Table claudienne → édit de Milan → édit de Caracalla → édit de Thessalonique",
          "Table claudienne → édit de Caracalla → édit de Milan → édit de Thessalonique",
        ],
        answer: 3,
        explanation:
          "Les dates sont : **Table claudienne (48)**, **édit de Caracalla (212)**, **édit de Milan (313)**, **édit de Thessalonique (380)**. Cet ordre montre deux mouvements : l’extension progressive de la citoyenneté, puis la christianisation de l’Empire.",
      },
      {
        id: "2nde-hg-01-ct-6",
        prompt: "Pourquoi les chrétiens ont-ils été persécutés à plusieurs reprises avant le IVe siècle ?",
        choices: [
          "Parce que, monothéistes, ils refusaient de rendre un culte à l’empereur et aux dieux de Rome",
          "Parce qu’ils refusaient de parler latin",
          "Parce qu’ils n’étaient jamais citoyens romains",
          "Parce qu’ils avaient assassiné Jules César",
        ],
        answer: 0,
        explanation:
          "Le **culte impérial** est un signe de loyauté politique. Les chrétiens, **monothéistes**, refusent de sacrifier à l’empereur et aux dieux, ce qui les fait apparaître comme des ennemis de l’ordre romain. D’où des persécutions (Néron en 64, Dèce, Dioclétien). Beaucoup de chrétiens étaient au contraire citoyens, comme Paul de Tarse.",
      },
      {
        id: "2nde-hg-01-ct-7",
        prompt: "Que montre l’exemple de Nîmes (Maison carrée, aqueduc du pont du Gard) ?",
        choices: [
          "La résistance des Gaulois à toute influence romaine",
          "La romanisation par l’urbanisme et l’adoption des modèles romains par les élites locales",
          "La diffusion de la démocratie athénienne en Gaule",
          "La christianisation de la Gaule dès le Ier siècle av. J.-C.",
        ],
        answer: 1,
        explanation:
          "La Maison carrée (temple lié au culte impérial) et l’aqueduc illustrent la **romanisation** : les villes de province adoptent l’urbanisme romain (temples, forums, thermes, aqueducs), souvent financé par des notables locaux qui y gagnent prestige et carrière. Il ne s’agit ni de démocratie athénienne ni de christianisation (bien plus tardive).",
      },
      {
        id: "2nde-hg-01-ct-8",
        prompt: "Quel événement de **476** est traditionnellement retenu comme la fin de l’Antiquité en Occident ?",
        choices: [
          "La fondation de Constantinople par Constantin",
          "Le partage de l’Empire à la mort de Théodose",
          "La déposition du dernier empereur d’Occident, Romulus Augustule, par Odoacre",
          "La prise de Constantinople par les Ottomans",
        ],
        answer: 2,
        explanation:
          "En **476**, le chef germanique **Odoacre** dépose Romulus Augustule et renvoie les insignes impériaux à Constantinople : l’Empire romain d’Occident disparaît. Constantinople a été fondée en 330, le partage date de 395 et la prise de Constantinople par les Ottomans de **1453** (fin de l’Empire d’Orient).",
      },
    ],
    homework: [
      {
        id: "2nde-hg-01-hw-1",
        prompt: "Classe ces événements dans l’ordre chronologique : édit de Thessalonique, réformes de Clisthène, Auguste empereur, fin de l’Empire d’Occident.",
        choices: [
          "Auguste ; Clisthène ; Thessalonique ; fin de l’Empire d’Occident",
          "Clisthène ; Thessalonique ; Auguste ; fin de l’Empire d’Occident",
          "Clisthène ; Auguste ; Thessalonique ; fin de l’Empire d’Occident",
        ],
        answer: 2,
        explanation: "Les réformes de Clisthène datent de **508-507 av. J.-C.**, Auguste devient empereur en **27 av. J.-C.**, l’édit de Thessalonique est de **380** et l’Empire d’Occident disparaît en **476**. Attention : pour les dates avant J.-C., plus le nombre est grand, plus l’événement est ancien.",
      },
      {
        id: "2nde-hg-01-hw-2",
        prompt: "Quel point commun peut-on établir entre la citoyenneté athénienne et la citoyenneté romaine ?",
        choices: [
          "Les deux excluent femmes et esclaves de la vie politique, mais Rome s’ouvre bien plus aux étrangers",
          "Les deux sont ouvertes aux femmes",
          "Les deux sont accordées automatiquement aux esclaves",
          "Athènes intègre plus facilement les étrangers que Rome",
        ],
        answer: 0,
        explanation: "Athènes comme Rome excluent les femmes et les esclaves de la vie politique. Mais Athènes ferme sa citoyenneté (loi de 451 av. J.-C.), alors que Rome l’ouvre progressivement aux vaincus jusqu’à l’**édit de Caracalla** en 212.",
      },
      {
        id: "2nde-hg-01-hw-3",
        prompt: "Dans l’oraison funèbre de Périclès rapportée par Thucydide, quel élément doit inciter à la prudence ?",
        choices: [
          "Le texte a été écrit par un esclave",
          "C’est un discours d’éloge, réécrit par l’historien, qui passe sous silence les exclus",
          "Le texte date de l’époque romaine",
          "Le discours critique violemment la démocratie",
        ],
        answer: 1,
        explanation: "Le discours est un **éloge** prononcé en 431 av. J.-C. pour glorifier Athènes en guerre, et il est rapporté (donc réécrit) par **Thucydide**. Il ne dit rien des femmes, des métèques, des esclaves ni de la domination sur les alliés : il faut le confronter aux réalités de la cité.",
      },
      {
        id: "2nde-hg-01-hw-4",
        prompt: "Quel enchaînement résume le mieux le passage du christianisme de religion persécutée à religion officielle ?",
        choices: [
          "Édit de Caracalla → édit de Milan → Table claudienne",
          "Édit de Thessalonique → persécutions de Dioclétien → édit de Milan",
          "Persécutions de Dioclétien → édit de Milan (313) → édit de Thessalonique (380) → interdiction des cultes païens (392)",
          "Édit de Milan → persécutions de Néron → édit de Caracalla",
        ],
        answer: 2,
        explanation: "Les dernières grandes persécutions ont lieu sous **Dioclétien** au début du IVe siècle. Puis l’**édit de Milan** (313) accorde la liberté de culte, l’**édit de Thessalonique** (380) fait du christianisme la religion officielle et les cultes païens sont interdits en **392**.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 2 ─────────────────────────────
  {
    id: "2nde-hg-02",
    title: "Histoire — La Méditerranée médiévale : espace d’échanges et de conflits",
    summary:
      "Entre le VIIe et le XVe siècle, trois civilisations — chrétienté latine, Empire byzantin et monde musulman — se partagent la Méditerranée, s’y affrontent (croisades, Reconquista) mais y échangent marchandises, savoirs et idées.",
    objectives: [
      "Je sais présenter les trois grandes civilisations qui se partagent la Méditerranée médiévale.",
      "Je sais expliquer les croisades et la Reconquista et en donner les dates clés.",
      "Je sais montrer que la Méditerranée est aussi un espace d’échanges commerciaux et culturels.",
      "Je sais présenter un exemple de contacts entre cultures (Sicile normande, Tolède, Venise).",
    ],
    sections: [
      {
        title: "Trois civilisations héritières de Rome",
        body: [
          "Après la chute de l’Empire romain d’Occident (476), trois ensembles se partagent peu à peu la Méditerranée. À l’est, l’**Empire byzantin**, héritier direct de l’Empire romain d’Orient, a pour capitale **Constantinople** ; on y parle grec et l’empereur (*basileus*) est le protecteur de l’Église. Sous **Justinien** (527-565), il reconquiert une partie de l’Occident et fait bâtir Sainte-Sophie.",
          "Au VIIe siècle naît l’**islam**. Le prophète **Mahomet** quitte La Mecque pour Médine en **622** : c’est l’**Hégire**, point de départ du calendrier musulman. Après sa mort en **632**, ses successeurs, les **califes**, mènent des conquêtes rapides : Syrie, Égypte, Perse, Afrique du Nord, puis péninsule Ibérique à partir de **711** (Al-Andalus). Le califat **omeyyade** a pour capitale Damas (661-750), puis le califat **abbasside** fonde **Bagdad** en **762**. Un émirat omeyyade (califat en 929) se maintient à **Cordoue**.",
          "À l’ouest, la **chrétienté latine** rassemble des royaumes issus des peuples germaniques, unis par la foi catholique et l’autorité du **pape** de Rome. **Charlemagne** est couronné empereur à Rome le **25 décembre 800**. Entre chrétiens d’Orient et d’Occident, les divergences (langue, liturgie, autorité du pape) aboutissent au **schisme de 1054** : séparation entre l’Église **catholique** (Rome) et l’Église **orthodoxe** (Constantinople).",
          "Ces trois civilisations se réclament chacune d’une vérité religieuse universelle, mais elles partagent des héritages communs : le droit et l’administration romains, la philosophie et les sciences grecques, un même espace maritime et des routes commerciales qui les relient.",
        ],
        keyPoints: [
          "**Empire byzantin** : Empire romain d’Orient chrétien, capitale Constantinople, langue grecque.",
          "**622** : Hégire, début du calendrier musulman ; **calife** : successeur du Prophète, chef politique et religieux.",
          "**800** : couronnement impérial de Charlemagne.",
          "**1054** : schisme entre catholiques et orthodoxes.",
        ],
        formulas: [
          "622 → Hégire",
          "711 → début de la conquête musulmane de la péninsule Ibérique",
          "762 → fondation de Bagdad par les Abbassides",
          "800 → Charlemagne empereur",
          "1054 → schisme d’Orient",
        ],
        example: {
          title: "Méthode : réaliser un croquis des trois civilisations vers l’an 1000",
          steps: [
            "Choisir trois couleurs : une pour la chrétienté latine (ouest et nord de la Méditerranée), une pour l’Empire byzantin (Balkans, Anatolie), une pour le monde musulman (Proche-Orient, Afrique du Nord, Al-Andalus).",
            "Localiser les grandes capitales : Rome (pape), Aix-la-Chapelle (ancienne capitale de Charlemagne), Constantinople, Bagdad, Cordoue, Le Caire (fondé en 969).",
            "Ajouter les zones de contact et de conflit : péninsule Ibérique, Sicile, Proche-Orient.",
            "Tracer les principales routes commerciales maritimes.",
            "Rédiger une légende organisée en parties (les trois civilisations / les lieux de pouvoir / contacts et échanges).",
          ],
        },
        figure: {
          type: "timeline",
          title: "Trois civilisations se mettent en place (VIe-XIe siècles)",
          events: [
            {
              date: "527-565",
              label: "Règne de Justinien à Byzance",
            },
            {
              date: "622",
              label: "Hégire : début du calendrier musulman",
            },
            {
              date: "632",
              label: "Mort de Mahomet, début des conquêtes des califes",
            },
            {
              date: "711",
              label: "Début de la conquête musulmane de la péninsule Ibérique",
            },
            {
              date: "762",
              label: "Les Abbassides fondent Bagdad",
            },
            {
              date: "800",
              label: "Charlemagne couronné empereur à Rome",
            },
            {
              date: "929",
              label: "Califat omeyyade de Cordoue",
            },
            {
              date: "1054",
              label: "Schisme entre catholiques et orthodoxes",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-02-s1-p1",
            prompt: "Quel événement de **622** marque le début du calendrier musulman ?",
            choices: [
              "La mort de Mahomet",
              "La fondation de Bagdad",
              "L’Hégire, départ de Mahomet de La Mecque pour Médine",
              "La conquête de l’Égypte",
            ],
            answer: 2,
            explanation: "L’**Hégire** désigne le départ de Mahomet de La Mecque pour Médine en **622**. Cette date sert de point de départ au calendrier musulman ; la mort du Prophète survient en 632.",
          },
          {
            id: "2nde-hg-02-s1-p2",
            prompt: "Que sépare le **schisme de 1054** ?",
            choices: [
              "L’Église catholique de Rome et l’Église orthodoxe de Constantinople",
              "Les sunnites et les chiites",
              "Les catholiques et les protestants",
              "Les Omeyyades et les Abbassides",
            ],
            answer: 0,
            explanation: "En **1054**, les divergences de langue, de liturgie et d’autorité (le pape revendique la primauté) aboutissent à la séparation entre l’Église **catholique** (Rome) et l’Église **orthodoxe** (Constantinople). La division entre catholiques et protestants date, elle, du XVIe siècle.",
          },
          {
            id: "2nde-hg-02-s1-p3",
            prompt: "Quelle ville est la capitale du califat **abbasside** à partir de 762 ?",
            choices: ["Damas", "Cordoue", "Le Caire", "Bagdad"],
            answer: 3,
            explanation: "Les Abbassides fondent **Bagdad** en **762** et en font leur capitale. Damas était la capitale des Omeyyades (661-750), et Cordoue celle de l’émirat puis du califat omeyyade d’Al-Andalus.",
          },
        ],
      },
      {
        title: "Un espace de conflits : croisades et Reconquista",
        body: [
          "En **1095**, au concile de **Clermont**, le pape **Urbain II** appelle les chrétiens d’Occident à porter secours aux chrétiens d’Orient menacés par les Turcs seldjoukides et à délivrer **Jérusalem** et le tombeau du Christ. Une **croisade** est un pèlerinage armé, accordant aux participants la rémission de leurs péchés (indulgence). La première croisade aboutit à la **prise de Jérusalem en 1099** et à la création des **États latins d’Orient** (royaume de Jérusalem, comté d’Édesse, principauté d’Antioche, comté de Tripoli).",
          "Les musulmans réagissent : le sultan **Saladin** reprend Jérusalem en **1187**. Les croisades suivantes n’atteignent pas leurs objectifs ; la **quatrième croisade** est même détournée par Venise et aboutit au **sac de Constantinople en 1204**, ville pourtant chrétienne, ce qui aggrave la rupture entre catholiques et orthodoxes. En **1291**, la chute de Saint-Jean-d’Acre met fin aux États latins d’Orient.",
          "Dans la péninsule Ibérique, les royaumes chrétiens du nord (Castille, Aragon, Portugal…) mènent la **Reconquista**, la reconquête des territoires musulmans. Étapes clés : prise de **Tolède en 1085**, victoire de **Las Navas de Tolosa en 1212**, puis prise de **Grenade**, dernier royaume musulman, en **1492** par les Rois catholiques Isabelle de Castille et Ferdinand d’Aragon. La même année, les juifs sont expulsés d’Espagne.",
          "À l’est, l’Empire byzantin recule face aux **Turcs ottomans**. Le sultan **Mehmed II** prend **Constantinople le 29 mai 1453** : c’est la fin de l’Empire byzantin. La ville, rebaptisée plus tard Istanbul, devient la capitale ottomane, et Sainte-Sophie est transformée en mosquée.",
        ],
        keyPoints: [
          "**Croisade** : expédition militaire et religieuse vers la Terre sainte, prêchée par le pape.",
          "**1095** : appel de Clermont ; **1099** : prise de Jérusalem ; **1187** : reprise par Saladin.",
          "**1204** : sac de Constantinople par la 4e croisade.",
          "**Reconquista** : reconquête chrétienne de la péninsule Ibérique, achevée en **1492** (Grenade).",
          "**1453** : prise de Constantinople par Mehmed II, fin de l’Empire byzantin.",
        ],
        formulas: [
          "1085 → prise de Tolède par Alphonse VI de Castille",
          "1095 → appel d’Urbain II à Clermont",
          "1099 → prise de Jérusalem",
          "1187 → Saladin reprend Jérusalem",
          "1204 → sac de Constantinople",
          "1453 → chute de Constantinople ; 1492 → prise de Grenade",
        ],
        example: {
          title: "Étude de cas : la quatrième croisade et le sac de Constantinople (1204)",
          steps: [
            "Objectif initial : partir vers l’Égypte pour reprendre ensuite Jérusalem.",
            "Problème : les croisés ne peuvent pas payer à Venise les navires commandés ; le doge Enrico Dandolo leur fait d’abord prendre Zara (ville chrétienne de l’Adriatique).",
            "Détournement : les croisés interviennent dans une querelle dynastique byzantine et s’emparent de Constantinople en avril 1204, qu’ils pillent.",
            "Conséquences : création d’un Empire latin de Constantinople (jusqu’en 1261) ; Venise obtient des comptoirs et îles stratégiques.",
            "Bilan : l’hostilité entre orthodoxes et catholiques s’accroît, et Byzance sort durablement affaiblie.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Croisades et Reconquista (1085-1492)",
          caption: "Deux fronts : la Terre sainte à l’est, la péninsule Ibérique à l’ouest.",
          events: [
            {
              date: "1085",
              label: "Prise de Tolède par Alphonse VI de Castille",
            },
            {
              date: "1095",
              label: "Appel d’Urbain II à Clermont",
            },
            {
              date: "1099",
              label: "Prise de Jérusalem, États latins d’Orient",
            },
            {
              date: "1187",
              label: "Saladin reprend Jérusalem",
            },
            {
              date: "1204",
              label: "Sac de Constantinople par la 4e croisade",
            },
            {
              date: "1212",
              label: "Victoire chrétienne de Las Navas de Tolosa",
            },
            {
              date: "1291",
              label: "Chute de Saint-Jean-d’Acre, fin des États latins",
            },
            {
              date: "1453",
              label: "Mehmed II prend Constantinople",
            },
            {
              date: "1492",
              label: "Prise de Grenade, fin de la Reconquista",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-02-s2-p1",
            prompt: "Qu’est-ce qu’une **croisade** ?",
            choices: [
              "Un pèlerinage armé vers la Terre sainte, prêché par le pape et accordant une indulgence",
              "Une expédition commerciale vénitienne",
              "Une guerre entre deux royaumes chrétiens d’Occident",
              "Une conquête menée par les califes",
            ],
            answer: 0,
            explanation: "Une **croisade** est un pèlerinage armé, prêché par le pape, qui accorde aux participants la rémission de leurs péchés (indulgence). La première est lancée par **Urbain II** à Clermont en **1095** pour délivrer Jérusalem.",
          },
          {
            id: "2nde-hg-02-s2-p2",
            prompt: "Comment la **quatrième croisade** s’achève-t-elle en **1204** ?",
            choices: [
              "Par la reprise de Jérusalem",
              "Par le sac de Constantinople, ville chrétienne",
              "Par la conquête de l’Égypte",
              "Par la prise de Grenade",
            ],
            answer: 1,
            explanation: "Détournée par **Venise**, à qui les croisés devaient de l’argent, la quatrième croisade s’empare de **Constantinople** en **1204** et la pille. Cet épisode aggrave la rupture entre catholiques et orthodoxes et affaiblit durablement Byzance.",
          },
          {
            id: "2nde-hg-02-s2-p3",
            prompt: "Qui achève la **Reconquista** en prenant Grenade en **1492** ?",
            choices: [
              "Le sultan Mehmed II",
              "Le pape Urbain II",
              "Alphonse VI de Castille",
              "Les Rois catholiques Isabelle de Castille et Ferdinand d’Aragon",
            ],
            answer: 3,
            explanation: "En **1492**, **Isabelle de Castille** et **Ferdinand d’Aragon** prennent **Grenade**, dernier royaume musulman de la péninsule. Alphonse VI avait pris Tolède en 1085, bien plus tôt ; Mehmed II, lui, prend Constantinople en 1453.",
          },
        ],
      },
      {
        title: "Un espace d’échanges : commerce, savoirs et cohabitations",
        body: [
          "Malgré les conflits, la Méditerranée reste un espace de circulation intense. Les cités marchandes italiennes, **Venise** et **Gênes** en tête, dominent le commerce à partir du XIe-XIIe siècle. Leurs galées rapportent du Levant et d’Égypte des produits de luxe venus d’Asie : **épices** (poivre, cannelle), soie, coton, alun, sucre. Les marchands occidentaux installent des **comptoirs** et logent dans des **fondouks** (entrepôts-hôtelleries) à Alexandrie ou Acre.",
          "Les échanges sont aussi **intellectuels**. Les savants du monde musulman ont traduit en arabe et commenté les œuvres grecques (Aristote, Ptolémée, Galien) ; ils ont développé les mathématiques (algèbre, chiffres dits « arabes » venus d’Inde, zéro), la médecine et l’astronomie. Le philosophe **Averroès** (Ibn Rushd, 1126-1198), né à Cordoue, commente Aristote. À **Tolède**, reprise en 1085, des traducteurs chrétiens, juifs et musulmans traduisent ces œuvres en latin au XIIe siècle, nourrissant le renouveau intellectuel de l’Occident.",
          "La **Sicile normande** offre un exemple de cohabitation. Conquise sur les musulmans par des chevaliers normands au XIe siècle, elle devient un royaume avec **Roger II**, couronné en **1130**. À Palerme, la cour mêle influences latine, grecque et arabe : la chapelle Palatine associe mosaïques byzantines et plafond de style islamique, et le géographe arabe **Al-Idrisi** réalise pour Roger II une grande description du monde (*Livre de Roger*, **1154**).",
          "Ces cohabitations ont des limites : les minorités (juifs, chrétiens en terre d’islam — les *dhimmis*, protégés mais soumis à un impôt spécial —, musulmans en terre chrétienne) sont tolérées mais dans une position inférieure, et les périodes de tension provoquent violences et expulsions.",
        ],
        keyPoints: [
          "**Venise** et **Gênes** : grandes républiques marchandes qui dominent le commerce méditerranéen.",
          "**Comptoir** / **fondouk** : établissement commercial installé à l’étranger / entrepôt-hôtellerie pour marchands.",
          "Transmission des savoirs grecs à l’Occident via l’arabe, notamment à **Tolède** (XIIe siècle).",
          "**Dhimmi** : non-musulman (juif, chrétien) protégé en terre d’islam en échange d’un impôt.",
          "**Sicile de Roger II** (roi en 1130) : carrefour des cultures latine, grecque et arabe.",
        ],
        example: {
          title: "Étude de cas : Venise, une puissance née du commerce méditerranéen",
          steps: [
            "Situation : ville bâtie sur une lagune au fond de l’Adriatique, à l’interface entre Occident et Orient byzantin.",
            "Organisation : république gouvernée par un doge et une aristocratie marchande ; l’Arsenal construit des galées en série.",
            "Réseau : comptoirs à Constantinople, en Crète, à Chypre, à Alexandrie ; convois réguliers de galées (les *mude*).",
            "Produits : épices, soie et coton importés ; draps, métaux, bois exportés vers l’Orient.",
            "Bilan : Venise montre que commerce et conflits sont liés (rôle dans le sac de 1204, puis rivalité avec Gênes et les Ottomans).",
          ],
        },
        figure: {
          type: "flow",
          title: "Comment les savoirs grecs reviennent en Occident",
          steps: [
            {
              label: "Savoirs grecs antiques",
              detail: "Aristote, Ptolémée, Galien",
            },
            {
              label: "Traduction et commentaire en arabe",
              detail: "Savants du monde musulman, Averroès (1126-1198)",
            },
            {
              label: "Enrichissement",
              detail: "Algèbre, chiffres venus d’Inde, zéro, médecine, astronomie",
            },
            {
              label: "Traduction en latin à Tolède",
              detail: "Traducteurs chrétiens, juifs et musulmans au XIIe siècle",
            },
            {
              label: "Renouveau intellectuel de l’Occident",
              detail: "Les œuvres circulent dans la chrétienté latine",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-02-s3-p1",
            prompt: "Qu’est-ce qu’un **fondouk** ?",
            choices: [
              "Un navire de guerre vénitien",
              "Un impôt payé par les non-musulmans",
              "Un entrepôt-hôtellerie où logent les marchands étrangers",
              "Une école de traducteurs",
            ],
            answer: 2,
            explanation: "Un **fondouk** est un bâtiment qui sert à la fois d’entrepôt et d’hôtellerie pour les marchands, par exemple les Occidentaux à Alexandrie ou à Acre. Il montre que les échanges commerciaux se poursuivent malgré les conflits.",
          },
          {
            id: "2nde-hg-02-s3-p2",
            prompt: "Quelle œuvre le géographe arabe **Al-Idrisi** réalise-t-il en **1154** pour le roi normand Roger II ?",
            choices: [
              "Une grande description du monde, le *Livre de Roger*",
              "Le plafond de la chapelle Palatine",
              "Une traduction latine d’Aristote",
              "Un traité de médecine",
            ],
            answer: 0,
            explanation: "Al-Idrisi réalise pour **Roger II** de Sicile une grande description du monde, le ***Livre de Roger*** (1154). Qu’un roi chrétien commande cette œuvre à un savant musulman illustre la cohabitation des cultures latine, grecque et arabe à Palerme.",
          },
          {
            id: "2nde-hg-02-s3-p3",
            prompt: "Quel est le statut d’un **dhimmi** en terre d’islam ?",
            choices: [
              "Un musulman converti au christianisme",
              "Un non-musulman protégé mais soumis à un impôt spécial",
              "Un marchand vénitien",
              "Un esclave affranchi",
            ],
            answer: 1,
            explanation: "Le **dhimmi** est un juif ou un chrétien vivant en terre d’islam : il est protégé et peut pratiquer sa religion, mais il paie un impôt spécial et reste dans une position inférieure. Cette tolérance a donc des limites.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-hg-02-ex-1",
        prompt: "Que désigne l’**Hégire** en 622 ?",
        choices: [
          "La mort du prophète Mahomet",
          "La prise de Jérusalem par les musulmans",
          "Le départ de Mahomet de La Mecque pour Médine, début du calendrier musulman",
          "La fondation de Bagdad",
        ],
        answer: 2,
        explanation:
          "L’**Hégire** (622) est l’émigration de Mahomet et de ses compagnons de La Mecque vers Médine ; elle marque l’an 1 du calendrier musulman. Mahomet meurt en 632 ; Bagdad est fondée en 762 par les Abbassides.",
      },
      {
        id: "2nde-hg-02-ex-2",
        prompt: "Quel événement de **1054** sépare durablement les chrétiens d’Orient et d’Occident ?",
        choices: ["Le schisme", "La première croisade", "Le sac de Constantinople", "Le couronnement de Charlemagne"],
        answer: 0,
        explanation:
          "Le **schisme de 1054** sépare l’Église catholique (Rome, latin) et l’Église orthodoxe (Constantinople, grec). La première croisade est lancée en 1095, le sac de Constantinople a lieu en 1204 et Charlemagne est couronné en 800.",
      },
      {
        id: "2nde-hg-02-ex-3",
        prompt: "Quel pape lance l’appel à la première croisade à Clermont en **1095** ?",
        choices: ["Grégoire VII", "Innocent III", "Léon III", "Urbain II"],
        answer: 3,
        explanation:
          "C’est **Urbain II** qui, au concile de Clermont en 1095, appelle à secourir les chrétiens d’Orient et à délivrer Jérusalem. Léon III a couronné Charlemagne en 800 ; Innocent III a lancé la quatrième croisade (1202-1204).",
      },
      {
        id: "2nde-hg-02-ex-4",
        prompt: "Qui reprend Jérusalem aux croisés en **1187** ?",
        choices: ["Mehmed II", "Saladin", "Roger II", "Averroès"],
        answer: 1,
        explanation:
          "Le sultan **Saladin** reprend Jérusalem en 1187 après sa victoire de Hattin. Mehmed II prend Constantinople en 1453 ; Roger II est roi de Sicile ; Averroès est un philosophe de Cordoue.",
      },
      {
        id: "2nde-hg-02-ex-5",
        prompt: "Quelle date marque la fin de la Reconquista avec la prise de **Grenade** ?",
        choices: ["1085", "1212", "1492", "1453"],
        answer: 2,
        explanation:
          "Grenade, dernier royaume musulman de la péninsule Ibérique, est prise en **1492** par Isabelle de Castille et Ferdinand d’Aragon. 1085 correspond à la prise de Tolède, 1212 à la victoire de Las Navas de Tolosa et 1453 à la chute de Constantinople.",
      },
      {
        id: "2nde-hg-02-ex-6",
        prompt: "Quelles cités italiennes dominent le commerce méditerranéen à la fin du Moyen Âge ?",
        choices: ["Venise et Gênes", "Rome et Naples", "Florence et Milan", "Palerme et Tolède"],
        answer: 0,
        explanation:
          "**Venise** et **Gênes** sont les grandes républiques maritimes : leurs flottes de galées et leurs comptoirs dominent les échanges avec le Levant et la mer Noire. Florence et Milan sont de grandes villes marchandes et artisanales, mais pas des puissances maritimes ; Palerme n’est pas une république marchande et Tolède n’est pas une ville italienne.",
      },
    ],
    test: [
      {
        id: "2nde-hg-02-ct-1",
        prompt: "Pourquoi la quatrième croisade (1202-1204) est-elle un tournant dans les relations entre chrétiens ?",
        choices: [
          "Elle reprend définitivement Jérusalem aux musulmans",
          "Elle aboutit au pillage de Constantinople, ville chrétienne orthodoxe, par les croisés latins",
          "Elle met fin au schisme de 1054",
          "Elle est dirigée contre les musulmans d’Al-Andalus",
        ],
        answer: 1,
        explanation:
          "Détournée par les intérêts vénitiens et une querelle dynastique byzantine, la quatrième croisade s’achève par le **sac de Constantinople en 1204** et la création d’un Empire latin. Des chrétiens latins pillent une grande ville chrétienne : la fracture entre catholiques et orthodoxes s’approfondit au lieu de se résorber.",
      },
      {
        id: "2nde-hg-02-ct-2",
        prompt: "Quel rôle joue Tolède dans l’histoire intellectuelle de l’Occident au XIIe siècle ?",
        choices: [
          "C’est la capitale du califat abbasside",
          "C’est le lieu du couronnement de Charlemagne",
          "C’est un centre de traduction en latin d’œuvres grecques et arabes",
          "C’est la ville d’où partent les croisades",
        ],
        answer: 2,
        explanation:
          "Reprise par la Castille en **1085**, **Tolède** abrite des bibliothèques arabes. Au XIIe siècle, des traducteurs chrétiens, juifs et musulmans y traduisent en latin Aristote, Ptolémée, des traités d’algèbre ou de médecine, transmettant ces savoirs à l’Occident. Les Abbassides siègent à Bagdad.",
      },
      {
        id: "2nde-hg-02-ct-3",
        prompt: "Quel statut a un **dhimmi** dans le monde musulman médiéval ?",
        choices: [
          "Un esclave converti à l’islam",
          "Un marchand vénitien installé dans un fondouk",
          "Un chef militaire turc",
          "Un juif ou un chrétien protégé, libre de pratiquer sa religion mais soumis à un impôt spécial",
        ],
        answer: 3,
        explanation:
          "Les **dhimmis** (« protégés ») sont les juifs et chrétiens vivant en terre d’islam : ils peuvent pratiquer leur culte mais paient un impôt spécifique (la *jizya*) et subissent des restrictions. Cela illustre une cohabitation réelle mais inégalitaire.",
      },
      {
        id: "2nde-hg-02-ct-4",
        prompt: "Quel ordre chronologique est exact ?",
        choices: [
          "Prise de Jérusalem par les croisés → reprise par Saladin → sac de Constantinople → chute de Constantinople",
          "Reprise par Saladin → prise de Jérusalem par les croisés → chute de Constantinople → sac de Constantinople",
          "Sac de Constantinople → prise de Jérusalem par les croisés → reprise par Saladin → chute de Constantinople",
          "Prise de Jérusalem par les croisés → sac de Constantinople → reprise par Saladin → chute de Constantinople",
        ],
        answer: 0,
        explanation:
          "Ordre exact : **1099** (prise de Jérusalem par les croisés), **1187** (reprise par Saladin), **1204** (sac de Constantinople par la 4e croisade), **1453** (prise de Constantinople par les Ottomans).",
      },
      {
        id: "2nde-hg-02-ct-5",
        prompt: "Que montre la chapelle Palatine de Palerme, construite sous Roger II ?",
        choices: [
          "La destruction de la culture arabe par les Normands",
          "Le rejet de l’art byzantin par les rois latins",
          "Le mélange des influences latine, byzantine et islamique à la cour normande de Sicile",
          "L’origine vénitienne de l’art sicilien",
        ],
        answer: 2,
        explanation:
          "La chapelle Palatine associe une architecture latine, des **mosaïques byzantines** et un plafond de bois peint de style **islamique**. Elle reflète la politique de Roger II, qui s’appuie sur des élites et des savants des trois cultures (comme le géographe Al-Idrisi).",
      },
      {
        id: "2nde-hg-02-ct-6",
        prompt: "Pourquoi les marchands italiens fréquentent-ils Alexandrie et les ports du Levant ?",
        choices: [
          "Pour y acheter des esclaves destinés aux mines d’Amérique",
          "Pour y acquérir les épices et la soie venues d’Asie, revendues très cher en Europe",
          "Parce que ces ports sont sous domination vénitienne depuis l’Antiquité",
          "Pour y vendre de l’or venu des Amériques",
        ],
        answer: 1,
        explanation:
          "Les produits d’Asie (**épices**, soie) arrivent par la mer Rouge ou les routes caravanières jusqu’aux ports d’Égypte et du Levant. Les Italiens les y achètent pour les revendre avec de forts profits en Europe. Les Amériques ne sont pas encore connues des Européens avant 1492.",
      },
      {
        id: "2nde-hg-02-ct-7",
        prompt: "Quelle affirmation sur l’année **1492** dans la péninsule Ibérique est exacte ?",
        choices: [
          "Les Rois catholiques prennent Grenade et expulsent les juifs d’Espagne",
          "Les musulmans reprennent Tolède",
          "Le califat de Cordoue est proclamé",
          "Le Portugal est conquis par la Castille",
        ],
        answer: 0,
        explanation:
          "En **1492**, Isabelle et Ferdinand prennent **Grenade** (2 janvier) puis signent le décret d’**expulsion des juifs** (décret de l’Alhambra, mars). La même année, Colomb atteint l’Amérique. Le califat de Cordoue a été proclamé en 929 ; Tolède est chrétienne depuis 1085.",
      },
      {
        id: "2nde-hg-02-ct-8",
        prompt: "Quelle conséquence a la prise de Constantinople par **Mehmed II** en 1453 ?",
        choices: [
          "La naissance de l’Empire byzantin",
          "Le retour de Constantinople sous l’autorité du pape",
          "La fondation des États latins d’Orient",
          "La disparition de l’Empire byzantin ; la ville devient la capitale de l’Empire ottoman",
        ],
        answer: 3,
        explanation:
          "Le **29 mai 1453**, les Ottomans prennent Constantinople : l’**Empire byzantin**, héritier de Rome en Orient depuis plus de mille ans, disparaît. La ville devient la capitale ottomane et Sainte-Sophie est transformée en mosquée. Les États latins d’Orient datent de 1099 et ont disparu en 1291.",
      },
    ],
    homework: [
      {
        id: "2nde-hg-02-hw-1",
        prompt: "Laquelle de ces villes **n’a pas** changé de civilisation dominante entre 1050 et 1500 ?",
        choices: ["Constantinople", "Tolède", "Grenade", "Venise"],
        answer: 3,
        explanation: "**Venise** reste une république chrétienne pendant toute la période. Tolède passe aux chrétiens en 1085, Grenade en 1492, et Constantinople aux Ottomans en 1453 : ces trois villes montrent les déplacements des frontières entre civilisations.",
      },
      {
        id: "2nde-hg-02-hw-2",
        prompt: "Quel événement montre que les conflits médiévaux ne sont pas seulement religieux entre chrétiens et musulmans ?",
        choices: [
          "La prise de Jérusalem en 1099",
          "Le sac de Constantinople par des croisés en 1204",
          "La reprise de Jérusalem par Saladin en 1187",
          "La prise de Grenade en 1492",
        ],
        answer: 1,
        explanation: "En **1204**, des croisés catholiques, poussés par les intérêts de **Venise**, pillent **Constantinople**, une ville chrétienne orthodoxe. Cela montre le poids des intérêts politiques et commerciaux dans les croisades.",
      },
      {
        id: "2nde-hg-02-hw-3",
        prompt: "Quel personnage est **mal associé** à son action ?",
        choices: [
          "Urbain II — appel à la croisade à Clermont",
          "Saladin — reprise de Jérusalem en 1187",
          "Charlemagne — prise de Constantinople en 1453",
          "Averroès — commentaire d’Aristote",
        ],
        answer: 2,
        explanation: "**Charlemagne** est couronné empereur en **800** ; c’est le sultan ottoman **Mehmed II** qui prend Constantinople en **1453**. Les trois autres associations sont exactes.",
      },
      {
        id: "2nde-hg-02-hw-4",
        prompt: "Pour justifier que la Méditerranée médiévale est un espace d’échanges, quel argument est le plus pertinent ?",
        choices: [
          "Les croisades réunissent chrétiens et musulmans dans une même armée",
          "Il n’y a jamais de guerre entre les trois civilisations",
          "Les califes se convertissent au christianisme",
          "Venise et Gênes importent épices et soie du Levant, et Tolède traduit en latin des savoirs grecs passés par l’arabe",
        ],
        answer: 3,
        explanation: "Les échanges sont à la fois **commerciaux** (épices, soie, alun importés par Venise et Gênes) et **intellectuels** (traductions de Tolède au XIIe siècle). Les autres propositions sont fausses : les conflits sont nombreux et les civilisations restent distinctes.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 3 ─────────────────────────────
  {
    id: "2nde-hg-03",
    title: "Histoire — L’ouverture atlantique, la Renaissance et l’humanisme (XVe-XVIe s.)",
    summary:
      "Aux XVe et XVIe siècles, les Européens s’ouvrent à l’Atlantique et conquièrent l’Amérique, tandis que l’humanisme, la Renaissance artistique et les Réformes religieuses transforment profondément leur vision de l’homme et du monde.",
    objectives: [
      "Je sais expliquer les causes et les grandes étapes des explorations portugaises et espagnoles.",
      "Je sais décrire les conséquences de la conquête de l’Amérique pour les sociétés amérindiennes.",
      "Je sais définir l’humanisme et la Renaissance et citer des acteurs majeurs.",
      "Je sais expliquer les Réformes protestante et catholique et leurs conséquences en France.",
    ],
    sections: [
      {
        title: "Les grandes découvertes : l’Europe s’ouvre à l’Atlantique",
        body: [
          "Au XVe siècle, les Européens cherchent à atteindre directement les richesses de l’Asie (épices, soie) et de l’Afrique (or) sans passer par les intermédiaires musulmans et vénitiens. Ils disposent de nouveaux outils : la **caravelle** (navire léger et maniable), la **boussole**, l’**astrolabe** et des cartes plus précises (portulans). Les motivations sont à la fois **économiques**, **religieuses** (diffuser le christianisme) et **politiques** (prestige des souverains).",
          "Le **Portugal** ouvre la voie. Sous l’impulsion du prince **Henri le Navigateur**, les Portugais explorent les côtes africaines. **Bartolomeu Dias** franchit le **cap de Bonne-Espérance en 1488** ; **Vasco de Gama** atteint **Calicut**, en Inde, en **1498**. En **1500**, **Pedro Álvares Cabral** aborde le **Brésil**. Le Portugal bâtit un empire de comptoirs commerciaux (Goa, Malacca).",
          "Pour la Castille, le Génois **Christophe Colomb** cherche à atteindre l’Asie par l’ouest. Le **12 octobre 1492**, il débarque aux **Bahamas** (île de Guanahani) en croyant être aux Indes, d’où le nom d’« Indiens » donné aux Amérindiens. En **1494**, le **traité de Tordesillas**, conclu sous l’égide du pape, partage le monde à découvrir entre l’Espagne et le Portugal. De **1519 à 1522**, l’expédition de **Magellan** (mort aux Philippines en 1521), achevée par **Elcano**, réalise le premier **tour du monde**, prouvant la rotondité de la Terre par l’expérience.",
          "Ces voyages déplacent le centre de gravité économique de l’Europe de la Méditerranée vers l’**Atlantique** : Lisbonne et Séville (où la **Casa de Contratación** contrôle à partir de 1503 le commerce avec l’Amérique) puis Anvers deviennent les grands ports européens.",
        ],
        keyPoints: [
          "**Caravelle** : navire mis au point par les Portugais, adapté à la navigation en haute mer.",
          "**1488** : Dias passe le cap de Bonne-Espérance ; **1498** : Vasco de Gama en Inde.",
          "**12 octobre 1492** : Colomb atteint l’Amérique (Bahamas).",
          "**1494** : traité de Tordesillas, partage du monde entre Espagne et Portugal.",
          "**1519-1522** : premier tour du monde (Magellan puis Elcano).",
        ],
        formulas: [
          "1488 → Bartolomeu Dias, cap de Bonne-Espérance",
          "1492 → Christophe Colomb en Amérique",
          "1494 → traité de Tordesillas",
          "1498 → Vasco de Gama à Calicut",
          "1500 → Cabral au Brésil",
          "1519-1522 → tour du monde de Magellan et Elcano",
        ],
        example: {
          title: "Méthode : comparer les voyages de Colomb et de Vasco de Gama",
          steps: [
            "Commanditaires : Colomb navigue pour les Rois catholiques (Castille) ; Vasco de Gama pour le roi Manuel Ier de Portugal.",
            "Routes : Colomb traverse l’Atlantique vers l’ouest ; Vasco de Gama longe l’Afrique, passe le cap de Bonne-Espérance et traverse l’océan Indien.",
            "Objectif commun : atteindre l’Asie et ses épices sans intermédiaires.",
            "Résultats : Colomb découvre sans le savoir un continent inconnu des Européens ; Vasco de Gama ouvre une route maritime directe vers l’Inde.",
            "Conclusion : deux stratégies qui fondent deux empires différents — un empire territorial (Espagne) et un empire de comptoirs (Portugal).",
          ],
        },
        figure: {
          type: "timeline",
          title: "Les grandes explorations (1488-1522)",
          events: [
            {
              date: "1488",
              label: "Bartolomeu Dias franchit le cap de Bonne-Espérance",
            },
            {
              date: "12 octobre 1492",
              label: "Christophe Colomb débarque aux Bahamas",
            },
            {
              date: "1494",
              label: "Traité de Tordesillas entre Espagne et Portugal",
            },
            {
              date: "1498",
              label: "Vasco de Gama atteint Calicut, en Inde",
            },
            {
              date: "1500",
              label: "Pedro Álvares Cabral aborde le Brésil",
            },
            {
              date: "1503",
              label: "Création de la Casa de Contratación à Séville",
            },
            {
              date: "1519-1522",
              label: "Premier tour du monde (Magellan puis Elcano)",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-03-s1-p1",
            prompt: "Que prévoit le **traité de Tordesillas** (**1494**) ?",
            choices: [
              "La fin de la guerre entre la France et l’Espagne",
              "Le partage des terres à découvrir entre l’Espagne et le Portugal",
              "L’interdiction de l’esclavage des Amérindiens",
              "La création de la Casa de Contratación",
            ],
            answer: 1,
            explanation: "Conclu sous l’égide du pape, le **traité de Tordesillas** partage en **1494** le monde à découvrir entre l’**Espagne** et le **Portugal** selon une ligne nord-sud dans l’Atlantique. C’est ce qui explique que le Brésil, abordé par Cabral en 1500, soit devenu portugais.",
          },
          {
            id: "2nde-hg-03-s1-p2",
            prompt: "Quel navigateur atteint **Calicut**, en Inde, en **1498** ?",
            choices: ["Christophe Colomb", "Fernand de Magellan", "Vasco de Gama", "Bartolomeu Dias"],
            answer: 2,
            explanation: "**Vasco de Gama**, au service du roi de Portugal, contourne l’Afrique et atteint **Calicut** en **1498**, ouvrant une route maritime directe vers les épices de l’Inde. Dias avait seulement franchi le cap de Bonne-Espérance en 1488.",
          },
          {
            id: "2nde-hg-03-s1-p3",
            prompt: "Quelle est la principale conséquence économique des grandes découvertes pour l’Europe ?",
            choices: [
              "Le centre de gravité du commerce se déplace de la Méditerranée vers l’Atlantique",
              "Venise devient la première puissance du monde",
              "Le commerce des épices disparaît",
              "L’Europe cesse de commercer avec l’Asie",
            ],
            answer: 0,
            explanation: "Les nouvelles routes océaniques font des ports atlantiques (**Lisbonne**, **Séville**, puis **Anvers**) les grands centres du commerce européen. La Méditerranée et ses intermédiaires (Venise, marchands musulmans) perdent leur position centrale.",
          },
        ],
      },
      {
        title: "La conquête de l’Amérique et ses conséquences",
        body: [
          "Les Espagnols, appelés **conquistadors**, soumettent rapidement de grands empires amérindiens. **Hernán Cortés** conquiert l’**Empire aztèque** : la capitale **Tenochtitlan** tombe en **1521**. **Francisco Pizarro** s’empare de l’**Empire inca** à partir de **1532** (capture de l’empereur Atahualpa en 1532, exécution en 1533). Malgré leur petit nombre, les conquistadors l’emportent grâce aux armes à feu, aux chevaux, aux alliances avec des peuples hostiles aux Aztèques ou aux Incas, et surtout aux épidémies.",
          "Les conséquences pour les Amérindiens sont catastrophiques. Le **choc microbien** (variole, grippe, rougeole, contre lesquelles ils ne sont pas immunisés), les guerres, le travail forcé dans les mines (comme celle d’argent du **Potosí**, découverte en 1545) et dans les plantations provoquent un **effondrement démographique** : la population du Mexique central aurait chuté de plusieurs dizaines de millions à quelques millions en un siècle. Le système de l’**encomienda** confie des Amérindiens à un colon qui doit les évangéliser en échange de leur travail.",
          "Ces violences suscitent un débat en Espagne. Le dominicain **Bartolomé de Las Casas** dénonce les abus. Lors de la **controverse de Valladolid** (**1550-1551**), il affronte le juriste **Juan Ginés de Sepúlveda**, qui justifie la domination des Amérindiens. Pour remplacer une main-d’œuvre amérindienne décimée, les Européens développent la **traite atlantique** : des Africains réduits en esclavage sont déportés vers les plantations d’Amérique.",
          "La conquête provoque aussi des transferts à l’échelle mondiale, parfois appelés **échange colombien** : maïs, pomme de terre, tomate, cacao arrivent en Europe ; chevaux, bovins, blé, canne à sucre en Amérique. L’**argent américain** afflue en Europe par Séville et irrigue l’économie mondiale : on parle de **première mondialisation**.",
        ],
        keyPoints: [
          "**Conquistador** : conquérant espagnol de l’Amérique au XVIe siècle.",
          "**1521** : chute de Tenochtitlan (Cortés) ; **1532-1533** : conquête de l’Empire inca (Pizarro).",
          "**Choc microbien** : propagation de maladies européennes qui déciment les Amérindiens.",
          "**Encomienda** : attribution d’Amérindiens à un colon qui exploite leur travail en échange de leur évangélisation.",
          "**1550-1551** : controverse de Valladolid (Las Casas contre Sepúlveda).",
        ],
        example: {
          title: "Étude de cas : la chute de Tenochtitlan (1519-1521)",
          steps: [
            "1519 : Cortés débarque au Mexique avec environ 500 hommes et fonde Veracruz.",
            "Il s’allie aux **Tlaxcaltèques**, ennemis des Aztèques, et entre à Tenochtitlan, où il retient l’empereur **Moctezuma II**.",
            "1520 : révolte des Aztèques, mort de Moctezuma, retraite des Espagnols (la « Noche triste ») ; une épidémie de variole frappe la ville.",
            "1521 : siège de la ville avec des brigantins sur le lac et des dizaines de milliers d’alliés amérindiens ; Tenochtitlan tombe le 13 août.",
            "Conséquences : sur les ruines est bâtie Mexico, capitale de la Nouvelle-Espagne ; la conquête montre le rôle décisif des alliances et des épidémies.",
          ],
        },
        figure: {
          type: "table",
          title: "L’« échange colombien » : des transferts à l’échelle mondiale",
          headers: ["Sens du transfert", "Exemples", "Conséquences"],
          rows: [
            [
              "Amérique → Europe",
              "Maïs, pomme de terre, tomate, cacao, argent du Potosí",
              "Nouvelles cultures, afflux de métal précieux par Séville",
            ],
            [
              "Europe → Amérique",
              "Chevaux, bovins, blé, canne à sucre, maladies (variole, rougeole, grippe)",
              "Transformation des paysages, effondrement démographique amérindien",
            ],
            [
              "Afrique → Amérique",
              "Africains réduits en esclavage (traite atlantique)",
              "Main-d’œuvre forcée des plantations",
            ],
          ],
        },
        practice: [
          {
            id: "2nde-hg-03-s2-p1",
            prompt: "En quelle année la capitale aztèque **Tenochtitlan** tombe-t-elle aux mains de Cortés ?",
            choices: ["1492", "1532", "1545", "1521"],
            answer: 3,
            explanation: "Après un long siège mené avec des dizaines de milliers d’alliés amérindiens, **Tenochtitlan** tombe le 13 août **1521**. La conquête de l’Empire inca par Pizarro commence en 1532, et la mine du Potosí est découverte en 1545.",
          },
          {
            id: "2nde-hg-03-s2-p2",
            prompt: "Qu’est-ce que l’**encomienda** ?",
            choices: [
              "L’attribution d’Amérindiens à un colon qui exploite leur travail en échange de leur évangélisation",
              "Une mine d’argent du Pérou",
              "Un tribunal chargé de juger les conquistadors",
              "Le nom donné à la traite des Africains",
            ],
            answer: 0,
            explanation: "L’**encomienda** confie un groupe d’Amérindiens à un colon : en échange de leur évangélisation, il exploite leur travail. En pratique, ce système a favorisé de graves abus dénoncés par Las Casas.",
          },
          {
            id: "2nde-hg-03-s2-p3",
            prompt: "Qui s’affronte lors de la **controverse de Valladolid** (1550-1551) ?",
            choices: [
              "Cortés et Pizarro",
              "Las Casas, défenseur des Amérindiens, et Sepúlveda, qui justifie leur domination",
              "Luther et le pape",
              "Colomb et les Rois catholiques",
            ],
            answer: 1,
            explanation: "À Valladolid, le dominicain **Bartolomé de Las Casas** dénonce les violences subies par les Amérindiens, face au juriste **Juan Ginés de Sepúlveda** qui justifie leur domination. Ce débat montre que la conquête suscite des critiques jusqu’en Espagne.",
          },
        ],
      },
      {
        title: "Humanisme, Renaissance et Réformes",
        body: [
          "L’**humanisme** est un mouvement intellectuel européen des XVe-XVIe siècles qui place l’**homme** au centre de la réflexion et veut retrouver les textes antiques dans leur pureté (grec, latin, hébreu). Les humanistes croient au progrès de l’homme par l’**éducation** et l’esprit critique. Leur diffusion est accélérée par l’**imprimerie** à caractères mobiles mise au point par **Gutenberg** à Mayence vers **1450** (Bible imprimée vers **1455**). Le plus célèbre est **Érasme** (*Éloge de la folie*, **1511**) ; citons aussi **Thomas More** (*Utopie*, **1516**), Rabelais ou Montaigne en France.",
          "La **Renaissance** artistique naît en Italie, notamment à **Florence**, grâce au **mécénat** de riches familles comme les **Médicis** (Laurent le Magnifique) et des papes. Les artistes s’inspirent de l’Antiquité, maîtrisent la **perspective**, étudient l’anatomie et représentent l’homme avec réalisme : **Léonard de Vinci** (*La Joconde*), **Michel-Ange** (plafond de la chapelle Sixtine, **1508-1512**), **Raphaël**. Le roi de France **François Ier** invite Léonard à Amboise et fait construire Chambord. En science, **Copernic** propose en **1543** l’**héliocentrisme** (la Terre tourne autour du Soleil).",
          "L’esprit critique touche aussi la religion. En **1517**, le moine allemand **Martin Luther** publie ses **95 thèses** contre la vente des **indulgences**. Il affirme que le salut vient de la seule **foi** (et non des œuvres), que la **Bible** est la seule autorité et que chaque fidèle doit pouvoir la lire dans sa langue. Excommunié en 1521, il est à l’origine de la **Réforme protestante**. En France puis à Genève, **Jean Calvin** (*Institution de la religion chrétienne*, **1536**) développe une autre forme de protestantisme.",
          "L’Église catholique réagit par la **Réforme catholique** (ou Contre-Réforme) lors du **concile de Trente** (**1545-1563**) : elle réaffirme ses dogmes, améliore la formation des prêtres et s’appuie sur de nouveaux ordres comme les **Jésuites** (1540). En France, la division religieuse mène aux **guerres de Religion** (1562-1598), marquées par le **massacre de la Saint-Barthélemy** (**24 août 1572**). Elles s’achèvent par l’**édit de Nantes** (**1598**) d’**Henri IV**, qui accorde aux protestants la liberté de culte dans certains lieux.",
        ],
        keyPoints: [
          "**Humanisme** : mouvement intellectuel qui place l’homme au centre, retourne aux textes antiques et valorise l’éducation.",
          "**Renaissance** : renouveau artistique et culturel inspiré de l’Antiquité, né en Italie au XVe siècle.",
          "**Mécène** : personne riche qui protège et finance des artistes.",
          "**1517** : 95 thèses de Luther ; **1545-1563** : concile de Trente.",
          "**1572** : Saint-Barthélemy ; **1598** : édit de Nantes.",
        ],
        formulas: [
          "v. 1450-1455 → imprimerie de Gutenberg (Bible)",
          "1511 → Éloge de la folie (Érasme)",
          "1517 → 95 thèses de Luther",
          "1543 → Copernic, héliocentrisme",
          "1545-1563 → concile de Trente",
          "1598 → édit de Nantes",
        ],
        example: {
          title: "Méthode : analyser une œuvre de la Renaissance (L’École d’Athènes de Raphaël, 1509-1511)",
          steps: [
            "Identifier : fresque peinte par **Raphaël** au Vatican pour le pape **Jules II** (mécène).",
            "Décrire : philosophes antiques réunis dans une architecture monumentale ; au centre **Platon** (le doigt vers le ciel) et **Aristote** (la main vers la terre).",
            "Repérer les techniques : perspective avec point de fuite central, réalisme des corps, inspiration de l’architecture antique.",
            "Interpréter : l’œuvre célèbre la sagesse antique et l’homme qui pense, idéal humaniste ; Raphaël aurait donné à Platon les traits de Léonard de Vinci.",
            "Conclure : un pape commande une œuvre qui glorifie des philosophes païens, preuve que l’humanisme se concilie avec la foi chrétienne.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Humanisme, Renaissance et Réformes (v. 1450-1598)",
          events: [
            {
              date: "v. 1450-1455",
              label: "Imprimerie de Gutenberg, Bible imprimée",
            },
            {
              date: "1508-1512",
              label: "Michel-Ange peint le plafond de la chapelle Sixtine",
            },
            {
              date: "1511",
              label: "Érasme, Éloge de la folie",
            },
            {
              date: "1517",
              label: "Les 95 thèses de Luther",
            },
            {
              date: "1536",
              label: "Calvin, Institution de la religion chrétienne",
            },
            {
              date: "1543",
              label: "Copernic propose l’héliocentrisme",
            },
            {
              date: "1545-1563",
              label: "Concile de Trente (Réforme catholique)",
            },
            {
              date: "24 août 1572",
              label: "Massacre de la Saint-Barthélemy",
            },
            {
              date: "1598",
              label: "Édit de Nantes d’Henri IV",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-03-s3-p1",
            prompt: "Selon **Luther**, comment le chrétien obtient-il son salut ?",
            choices: [
              "Par l’achat d’indulgences",
              "Par les pèlerinages",
              "Par la seule foi",
              "Par l’obéissance au pape",
            ],
            answer: 2,
            explanation: "Luther affirme que le salut vient de la **seule foi** en Dieu, et non des œuvres ni des indulgences vendues par l’Église. Il fait aussi de la **Bible** la seule autorité, ce qui l’oppose à Rome et le conduit à l’excommunication en 1521.",
          },
          {
            id: "2nde-hg-03-s3-p2",
            prompt: "Qu’est-ce qu’un **mécène** à la Renaissance ?",
            choices: [
              "Un moine qui recopie des manuscrits",
              "Un artiste qui peint des fresques",
              "Un imprimeur",
              "Une personne riche qui protège et finance des artistes",
            ],
            answer: 3,
            explanation: "Un **mécène** est une personne riche et puissante (les **Médicis** à Florence, les papes, François Ier) qui protège et finance des artistes. Le mécénat est l’une des conditions de l’essor de la Renaissance en Italie.",
          },
          {
            id: "2nde-hg-03-s3-p3",
            prompt: "Quel est le rôle du **concile de Trente** (1545-1563) ?",
            choices: [
              "Il réaffirme les dogmes catholiques et réforme l’Église catholique",
              "Il accorde la liberté de culte aux protestants",
              "Il condamne Copernic",
              "Il crée l’Église anglicane",
            ],
            answer: 0,
            explanation: "Le **concile de Trente** est le cœur de la **Réforme catholique** : il réaffirme les dogmes contestés par les protestants et améliore la formation des prêtres. La liberté de culte des protestants en France vient de l’édit de Nantes (1598).",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-hg-03-ex-1",
        prompt: "Quel navigateur atteint l’Inde (Calicut) par la route maritime du sud de l’Afrique en **1498** ?",
        choices: ["Christophe Colomb", "Bartolomeu Dias", "Vasco de Gama", "Magellan"],
        answer: 2,
        explanation:
          "**Vasco de Gama**, au service du Portugal, atteint **Calicut en 1498** après avoir contourné l’Afrique. Dias avait passé le cap de Bonne-Espérance en 1488 sans aller jusqu’en Inde ; Colomb a atteint l’Amérique en 1492 ; Magellan a lancé le premier tour du monde (1519).",
      },
      {
        id: "2nde-hg-03-ex-2",
        prompt: "Que partage le **traité de Tordesillas** (1494) ?",
        choices: [
          "Les terres à découvrir entre l’Espagne et le Portugal",
          "L’Italie entre la France et l’Espagne",
          "L’Empire aztèque entre Cortés et ses alliés",
          "Les églises entre catholiques et protestants",
        ],
        answer: 0,
        explanation:
          "Le **traité de Tordesillas** (1494) fixe une ligne à 370 lieues à l’ouest des îles du Cap-Vert : à l’ouest, les terres reviennent à la Castille, à l’est au Portugal. C’est pourquoi le Brésil, situé à l’est de la ligne, devient portugais.",
      },
      {
        id: "2nde-hg-03-ex-3",
        prompt: "Quelle est la principale cause de l’effondrement démographique des Amérindiens au XVIe siècle ?",
        choices: [
          "Les famines dues à l’arrivée du maïs",
          "Les guerres entre Aztèques et Incas",
          "L’émigration massive vers l’Europe",
          "Les épidémies apportées par les Européens (choc microbien)",
        ],
        answer: 3,
        explanation:
          "Le **choc microbien** (variole, rougeole, grippe) est la cause majeure : les Amérindiens n’avaient aucune immunité contre ces maladies. Guerres, travail forcé et désorganisation des sociétés aggravent la catastrophe. Le maïs est une plante américaine, et Aztèques et Incas ne se sont jamais affrontés.",
      },
      {
        id: "2nde-hg-03-ex-4",
        prompt: "Qui met au point l’**imprimerie** à caractères mobiles en Europe vers 1450 ?",
        choices: ["Érasme", "Gutenberg", "Copernic", "Luther"],
        answer: 1,
        explanation:
          "**Gutenberg**, à Mayence, met au point vers 1450 l’imprimerie à caractères mobiles en métal ; sa Bible paraît vers 1455. Cette invention permet la diffusion rapide des idées humanistes puis protestantes.",
      },
      {
        id: "2nde-hg-03-ex-5",
        prompt: "Quel humaniste écrit l’*Éloge de la folie* (1511) ?",
        choices: ["Thomas More", "Rabelais", "Érasme", "Machiavel"],
        answer: 2,
        explanation:
          "**Érasme de Rotterdam**, le « prince des humanistes », publie l’*Éloge de la folie* en 1511, satire des abus de la société et de l’Église. Thomas More écrit *Utopie* (1516), Machiavel *Le Prince* (rédigé en 1513), Rabelais *Pantagruel* (1532).",
      },
      {
        id: "2nde-hg-03-ex-6",
        prompt: "Quel texte de **1598** met fin aux guerres de Religion en France ?",
        choices: ["L’édit de Nantes", "Le concile de Trente", "Les 95 thèses", "Le traité de Tordesillas"],
        answer: 0,
        explanation:
          "L’**édit de Nantes**, signé par Henri IV en 1598, accorde aux protestants la liberté de conscience, la liberté de culte dans certains lieux et des places de sûreté. Le concile de Trente (1545-1563) organise la Réforme catholique ; les 95 thèses de Luther datent de 1517.",
      },
    ],
    test: [
      {
        id: "2nde-hg-03-ct-1",
        prompt: "Pourquoi le **Brésil** devient-il une colonie portugaise et non espagnole ?",
        choices: [
          "Parce que Colomb y a débarqué pour le compte du Portugal",
          "Parce qu’il se trouve à l’est de la ligne fixée par le traité de Tordesillas",
          "Parce que l’Espagne l’a vendu au Portugal en 1550",
          "Parce que Magellan l’a offert au roi du Portugal",
        ],
        answer: 1,
        explanation:
          "Le **traité de Tordesillas** (1494) attribue au Portugal les terres situées à l’est d’un méridien passant à 370 lieues à l’ouest du Cap-Vert. La côte orientale de l’Amérique du Sud se trouve à l’est de cette ligne : **Cabral** en prend possession pour le Portugal en **1500**.",
      },
      {
        id: "2nde-hg-03-ct-2",
        prompt: "Quelle affirmation sur l’expédition de **Magellan** est exacte ?",
        choices: [
          "Magellan est le premier à réaliser lui-même le tour du monde",
          "Elle part du Portugal en 1492",
          "Elle fait le premier tour du monde (1519-1522), achevé par Elcano après la mort de Magellan aux Philippines",
          "Elle découvre le cap de Bonne-Espérance",
        ],
        answer: 2,
        explanation:
          "Portugais au service de l’Espagne, **Magellan** part d’Espagne (Sanlúcar de Barrameda) en 1519, franchit le détroit qui porte son nom et traverse le Pacifique. Il est tué aux **Philippines en 1521** ; **Juan Sebastián Elcano** ramène le dernier navire, la *Victoria*, en Espagne en **1522**, avec seulement 18 survivants européens.",
      },
      {
        id: "2nde-hg-03-ct-3",
        prompt: "Lors de la **controverse de Valladolid** (1550-1551), quelle position défend Bartolomé de Las Casas ?",
        choices: [
          "Les Amérindiens sont des êtres humains dotés d’une âme qu’il faut convertir pacifiquement, sans les asservir",
          "Les Amérindiens sont naturellement inférieurs et doivent être soumis par la guerre",
          "Il faut remplacer les Espagnols par des colons portugais",
          "Il faut cesser toute évangélisation de l’Amérique",
        ],
        answer: 0,
        explanation:
          "**Las Casas**, dominicain et ancien colon, dénonce les violences et défend l’humanité pleine des Amérindiens, à convertir par la persuasion. **Sepúlveda** soutient au contraire que leur infériorité supposée justifie la guerre et la domination. Paradoxe tragique : Las Casas a un temps suggéré de recourir à des esclaves africains, ce qu’il regretta ensuite.",
      },
      {
        id: "2nde-hg-03-ct-4",
        prompt: "Que reproche principalement Luther à l’Église dans ses **95 thèses** (1517) ?",
        choices: [
          "L’usage du latin dans la Bible imprimée par Gutenberg",
          "Le célibat des prêtres, qu’il souhaite rendre obligatoire",
          "La conquête de l’Amérique",
          "La vente des indulgences, qui laisse croire que le salut s’achète",
        ],
        answer: 3,
        explanation:
          "Les **indulgences** (remises de peine dans l’au-delà) étaient vendues pour financer notamment la reconstruction de Saint-Pierre de Rome. Pour **Luther**, le salut est un don de Dieu reçu par la **foi seule** : il ne s’achète pas. Il s’opposera aussi au célibat des prêtres (il se marie lui-même).",
      },
      {
        id: "2nde-hg-03-ct-5",
        prompt: "Quel lien peut-on établir entre l’imprimerie et la Réforme protestante ?",
        choices: [
          "L’imprimerie a été inventée par Luther",
          "L’imprimerie permet la diffusion massive et rapide des écrits de Luther et des Bibles en langue vulgaire",
          "L’Église a interdit l’imprimerie dès 1450",
          "Aucun : la Réforme s’est diffusée uniquement à l’oral",
        ],
        answer: 1,
        explanation:
          "Les textes de Luther sont imprimés et diffusés à des centaines de milliers d’exemplaires en quelques années ; sa traduction du Nouveau Testament en allemand (1522) est un grand succès. L’**imprimerie** de Gutenberg (vers 1450) est donc un accélérateur décisif de la Réforme, comme de l’humanisme.",
      },
      {
        id: "2nde-hg-03-ct-6",
        prompt: "En quoi l’œuvre de **Copernic** (1543) est-elle révolutionnaire ?",
        choices: [
          "Il prouve que la Terre est plate",
          "Il démontre la théorie de la gravitation universelle",
          "Il place le Soleil, et non la Terre, au centre de l’univers (héliocentrisme)",
          "Il découvre le continent américain par le calcul",
        ],
        answer: 2,
        explanation:
          "Dans *Des révolutions des orbes célestes* (1543), **Copernic** propose l’**héliocentrisme**, contre le géocentrisme hérité de Ptolémée et admis par l’Église. La gravitation universelle est l’œuvre de Newton (1687). La rotondité de la Terre était connue depuis l’Antiquité.",
      },
      {
        id: "2nde-hg-03-ct-7",
        prompt: "Quelle proposition décrit correctement le rôle des **Médicis** à Florence ?",
        choices: [
          "Ce sont des banquiers qui dominent la ville et financent artistes et savants (mécénat)",
          "Ce sont des papes qui dirigent l’Inquisition espagnole",
          "Ce sont des navigateurs génois au service du Portugal",
          "Ce sont des humanistes hollandais réfugiés en Italie",
        ],
        answer: 0,
        explanation:
          "Famille de **banquiers**, les **Médicis** dominent Florence au XVe siècle. **Laurent le Magnifique** (1449-1492) protège Botticelli ou le jeune Michel-Ange : c’est le **mécénat**, qui sert aussi leur prestige politique. Deux Médicis deviendront papes au XVIe siècle (Léon X, Clément VII), mais sans lien avec l’Inquisition espagnole.",
      },
      {
        id: "2nde-hg-03-ct-8",
        prompt: "Classez ces événements dans l’ordre chronologique : Saint-Barthélemy, 95 thèses, ouverture du concile de Trente, édit de Nantes.",
        choices: [
          "Concile de Trente → 95 thèses → Saint-Barthélemy → édit de Nantes",
          "95 thèses → Saint-Barthélemy → concile de Trente → édit de Nantes",
          "Saint-Barthélemy → 95 thèses → édit de Nantes → concile de Trente",
          "95 thèses → concile de Trente → Saint-Barthélemy → édit de Nantes",
        ],
        answer: 3,
        explanation:
          "Ordre : **95 thèses (1517)**, ouverture du **concile de Trente (1545)**, **Saint-Barthélemy (1572)**, **édit de Nantes (1598)**. On passe de la rupture religieuse à la réponse catholique, puis aux guerres de Religion en France et à leur pacification.",
      },
    ],
    homework: [
      {
        id: "2nde-hg-03-hw-1",
        prompt: "Quel facteur a le plus contribué à l’effondrement démographique des Amérindiens au XVIe siècle ?",
        choices: [
          "Le choc microbien (variole, rougeole, grippe)",
          "La famine due à l’échange colombien",
          "Une émigration massive vers l’Europe",
          "Les guerres entre Espagnols et Portugais",
        ],
        answer: 0,
        explanation: "Les guerres et le travail forcé ont tué beaucoup d’Amérindiens, mais le facteur principal est le **choc microbien** : n’étant pas immunisés contre les maladies européennes, ils meurent en masse. La population du Mexique central aurait chuté de plusieurs dizaines de millions à quelques millions en un siècle.",
      },
      {
        id: "2nde-hg-03-hw-2",
        prompt: "Quel lien peut-on établir entre l’imprimerie et la Réforme protestante ?",
        choices: [
          "L’imprimerie a été inventée par Luther",
          "L’imprimerie permet de diffuser rapidement les idées de Luther et la Bible en langue vulgaire",
          "L’imprimerie est interdite dans les pays protestants",
          "Il n’y a aucun lien",
        ],
        answer: 1,
        explanation: "Mise au point par **Gutenberg** vers 1450, l’imprimerie permet de diffuser en grand nombre les écrits de Luther (dès 1517) et des Bibles traduites dans les langues parlées. Elle accélère ainsi la propagation des idées humanistes et réformées.",
      },
      {
        id: "2nde-hg-03-hw-3",
        prompt: "Classe dans l’ordre chronologique : concile de Trente, 95 thèses de Luther, édit de Nantes, voyage de Colomb.",
        choices: [
          "95 thèses ; Colomb ; Trente ; édit de Nantes",
          "Colomb ; Trente ; 95 thèses ; édit de Nantes",
          "Colomb ; 95 thèses ; édit de Nantes ; Trente",
          "Colomb ; 95 thèses ; Trente ; édit de Nantes",
        ],
        answer: 3,
        explanation: "Colomb atteint l’Amérique en **1492**, Luther publie ses thèses en **1517**, le concile de Trente se tient de **1545 à 1563** et l’édit de Nantes est signé en **1598**. Ces repères couvrent tout le XVIe siècle.",
      },
      {
        id: "2nde-hg-03-hw-4",
        prompt: "Pourquoi peut-on parler de **première mondialisation** au XVIe siècle ?",
        choices: [
          "Parce que toutes les régions du monde sont reliées par des échanges réguliers de produits, d’hommes et de métaux précieux",
          "Parce que l’Europe abandonne le commerce",
          "Parce que l’Asie colonise l’Amérique",
          "Parce que les Amérindiens découvrent l’Europe",
        ],
        answer: 0,
        explanation: "L’argent américain afflue en Europe puis gagne l’Asie, les plantes et les animaux circulent entre continents (échange colombien) et la traite relie l’Afrique à l’Amérique. Pour la première fois, des échanges réguliers connectent l’ensemble des continents habités.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 4 ─────────────────────────────
  {
    id: "2nde-hg-04",
    title: "Histoire — L’affirmation de l’État dans le royaume de France et les Lumières (XVIe-XVIIIe s.)",
    summary:
      "Du XVIe au XVIIIe siècle, les rois de France renforcent l’État jusqu’à la monarchie absolue de Louis XIV, tandis que la révolution scientifique et les philosophes des Lumières remettent en cause l’absolutisme et l’intolérance.",
    objectives: [
      "Je sais expliquer comment le pouvoir royal se renforce de François Ier à Louis XIV.",
      "Je sais définir la monarchie absolue de droit divin et en décrire les instruments.",
      "Je sais comparer la monarchie absolue française et la monarchie parlementaire anglaise.",
      "Je sais présenter les idées des Lumières et leurs principaux acteurs.",
    ],
    sections: [
      {
        title: "Le renforcement du pouvoir royal (XVIe-XVIIe siècles)",
        body: [
          "Au XVIe siècle, le roi de France renforce son autorité sur un royaume vaste et divers. **François Ier** (roi de 1515 à 1547) signe en **1539** l’**ordonnance de Villers-Cotterêts**, qui impose le **français** à la place du latin dans les actes de justice et d’administration et oblige les curés à tenir des registres de baptêmes (ancêtres de l’état civil). Le royaume se dote progressivement d’officiers, de tribunaux et d’impôts permanents comme la **taille**.",
          "Les **guerres de Religion** (1562-1598) affaiblissent la monarchie. **Henri IV** (1589-1610), protestant converti au catholicisme en 1593, rétablit la paix avec l’**édit de Nantes** (**1598**) et restaure l’autorité royale. Assassiné en 1610, il laisse le trône à son fils **Louis XIII**, qui gouverne avec le cardinal **Richelieu** (principal ministre de 1624 à 1642) : celui-ci soumet les grands nobles (interdiction des duels, destruction de châteaux forts) et les protestants (siège de La Rochelle, 1627-1628), et développe les **intendants**, représentants du roi dans les provinces.",
          "La minorité de **Louis XIV** (né en 1638, roi en 1643) est marquée par la **Fronde** (**1648-1653**), révolte des parlementaires, des grands nobles et du peuple de Paris contre le cardinal **Mazarin**. Le jeune roi en garde une méfiance durable envers les nobles et Paris. À la mort de Mazarin en **1661**, il décide de gouverner seul : c’est le début du **règne personnel**, qui dure jusqu’en **1715**.",
        ],
        keyPoints: [
          "**1539** : ordonnance de Villers-Cotterêts (français obligatoire dans les actes officiels).",
          "**Intendant** : agent nommé et révocable par le roi, chargé de la justice, de la police et des finances dans une province.",
          "**Fronde (1648-1653)** : révolte contre le pouvoir royal pendant la minorité de Louis XIV.",
          "**1661** : début du règne personnel de Louis XIV.",
        ],
        formulas: [
          "1515-1547 → règne de François Ier",
          "1539 → ordonnance de Villers-Cotterêts",
          "1598 → édit de Nantes (Henri IV)",
          "1624-1642 → Richelieu principal ministre",
          "1648-1653 → la Fronde",
          "1661-1715 → règne personnel de Louis XIV",
        ],
        example: {
          title: "Étude de cas : l’ordonnance de Villers-Cotterêts, un acte fondateur de l’État",
          steps: [
            "Date et auteur : août 1539, ordonnance de François Ier, signée au château de Villers-Cotterêts.",
            "Contenu principal : 192 articles, essentiellement sur la justice ; les articles 110 et 111 imposent le « langage maternel français » dans les actes.",
            "Autre mesure : les curés doivent enregistrer les baptêmes, ce qui permet de connaître l’identité et l’âge des sujets.",
            "Portée : unification administrative et linguistique, meilleure connaissance de la population par l’État.",
            "Postérité : c’est l’un des plus anciens textes encore partiellement en vigueur dans le droit français.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Le renforcement du pouvoir royal (1515-1661)",
          events: [
            {
              date: "1515-1547",
              label: "Règne de François Ier",
            },
            {
              date: "1539",
              label: "Ordonnance de Villers-Cotterêts",
            },
            {
              date: "1562-1598",
              label: "Guerres de Religion",
            },
            {
              date: "1598",
              label: "Édit de Nantes d’Henri IV",
            },
            {
              date: "1624-1642",
              label: "Richelieu principal ministre de Louis XIII",
            },
            {
              date: "1627-1628",
              label: "Siège de La Rochelle",
            },
            {
              date: "1648-1653",
              label: "La Fronde",
            },
            {
              date: "1661",
              label: "Début du règne personnel de Louis XIV",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-04-s1-p1",
            prompt: "Que décide l’**ordonnance de Villers-Cotterêts** en **1539** ?",
            choices: [
              "L’usage du français dans les actes de justice et d’administration",
              "La liberté de culte pour les protestants",
              "La création des intendants",
              "L’installation de la cour à Versailles",
            ],
            answer: 0,
            explanation: "Signée par **François Ier**, l’ordonnance impose le **français** à la place du latin dans les actes officiels et oblige les curés à tenir des registres de baptêmes. Elle contribue à l’unification administrative du royaume.",
          },
          {
            id: "2nde-hg-04-s1-p2",
            prompt: "Qu’est-ce qu’un **intendant** ?",
            choices: [
              "Un noble élu par sa province",
              "Un juge du parlement de Paris qui achète sa charge",
              "Un agent nommé et révocable par le roi, chargé de la justice, de la police et des finances dans une province",
              "Un prêtre chargé de tenir les registres de baptême",
            ],
            answer: 2,
            explanation: "L’**intendant** est un représentant direct du roi dans une province : nommé et révocable à tout moment, il dépend entièrement du souverain. Richelieu développe cette fonction, et Louis XIV en fait un relais essentiel de son autorité.",
          },
          {
            id: "2nde-hg-04-s1-p3",
            prompt: "Pourquoi la **Fronde** (1648-1653) marque-t-elle durablement Louis XIV ?",
            choices: [
              "Parce qu’elle le chasse définitivement de France",
              "Parce que cette révolte des parlementaires, des grands nobles et des Parisiens lui inspire une méfiance durable envers eux",
              "Parce qu’elle aboutit à la révocation de l’édit de Nantes",
              "Parce qu’elle oppose la France à l’Angleterre",
            ],
            answer: 1,
            explanation: "Pendant la minorité du roi, les parlementaires, les grands nobles et le peuple de Paris se révoltent contre **Mazarin**. Le jeune Louis XIV en garde une méfiance envers la noblesse et Paris, ce qui explique en partie le choix de **Versailles** et la domestication de la noblesse.",
          },
        ],
      },
      {
        title: "Louis XIV et la monarchie absolue",
        body: [
          "La **monarchie absolue de droit divin** est un régime où le roi, considéré comme le représentant de Dieu sur terre (il est **sacré** à Reims), concentre tous les pouvoirs : il fait la loi, rend la justice en dernier ressort, lève l’impôt, décide de la guerre et de la paix. L’évêque **Bossuet** théorise cette conception. Le pouvoir n’est cependant pas sans limites : le roi doit respecter les **lois fondamentales du royaume** (règles de succession) et les lois de Dieu, et les privilèges des provinces et corps freinent son action.",
          "Louis XIV gouverne avec des **conseils** restreints et des ministres issus de la bourgeoisie ou de la petite noblesse, comme **Colbert** (contrôleur général des finances à partir de 1665). Celui-ci applique le **mercantilisme** : enrichir le royaume en exportant plus qu’on n’importe, grâce aux **manufactures royales** (Gobelins, Saint-Gobain), aux compagnies de commerce et au développement de la marine. Les **intendants** relaient partout l’autorité royale.",
          "Le roi contrôle aussi les esprits et la noblesse. Il fait de **Versailles**, où la cour s’installe en **1682**, la vitrine de sa puissance : les nobles y vivent sous son regard, soumis à l’**étiquette**. Les arts sont mis au service de la gloire royale (Académies, Molière, Lully, Le Brun). Recherchant l’unité religieuse (« un roi, une foi, une loi »), il **révoque l’édit de Nantes** par l’**édit de Fontainebleau** en **1685** : environ 150 000 à 200 000 protestants fuient le royaume.",
          "Ce modèle contraste avec l’**Angleterre**, où le Parlement l’emporte sur le roi. Après la **Glorieuse Révolution** (**1688-1689**), les nouveaux souverains Guillaume III et Marie II acceptent le **Bill of Rights** (**1689**) : le roi ne peut lever d’impôts ni entretenir une armée en temps de paix sans l’accord du Parlement, dont les élections et les débats doivent être libres. C’est une **monarchie parlementaire**, modèle admiré par les philosophes des Lumières.",
        ],
        keyPoints: [
          "**Monarchie absolue de droit divin** : le roi tient son pouvoir de Dieu et concentre tous les pouvoirs.",
          "**Mercantilisme** : doctrine économique qui vise à enrichir l’État par l’excédent commercial et l’accumulation de métaux précieux.",
          "**1682** : installation de la cour à Versailles.",
          "**1685** : révocation de l’édit de Nantes (édit de Fontainebleau).",
          "**1689** : Bill of Rights en Angleterre (monarchie parlementaire).",
        ],
        formulas: [
          "1665 → Colbert contrôleur général des finances",
          "1682 → la cour s’installe à Versailles",
          "1685 → révocation de l’édit de Nantes",
          "1688-1689 → Glorieuse Révolution, Bill of Rights",
          "1715 → mort de Louis XIV",
        ],
        example: {
          title: "Méthode : analyser le portrait de Louis XIV en costume de sacre (Hyacinthe Rigaud, 1701)",
          steps: [
            "Présenter : portrait officiel peint par Hyacinthe Rigaud en 1701, le roi a 63 ans.",
            "Décrire les symboles : manteau fleurdelisé doublé d’hermine, couronne, sceptre, main de justice, épée dite de Charlemagne.",
            "Interpréter : chaque objet rappelle un pouvoir (sacré, militaire, judiciaire) et la légitimité dynastique.",
            "Noter la mise en scène : colonne et drapé théâtral, posture majestueuse, jambes mises en valeur.",
            "Conclure : le tableau est une œuvre de propagande qui incarne la monarchie absolue de droit divin.",
          ],
        },
        figure: {
          type: "table",
          title: "Deux modèles politiques à la fin du XVIIe siècle",
          headers: ["Critère", "France de Louis XIV", "Angleterre après 1689"],
          rows: [
            [
              "Source du pouvoir",
              "Dieu : le roi est sacré à Reims (droit divin)",
              "Le roi règne dans le cadre fixé par le Parlement",
            ],
            ["Impôts", "Levés par décision du roi", "Consentis par le Parlement"],
            ["Armée en temps de paix", "Décidée par le roi seul", "Accord du Parlement obligatoire"],
            ["Texte de référence", "Lois fondamentales du royaume (non écrites)", "Bill of Rights (1689)"],
            ["Nom du régime", "Monarchie absolue de droit divin", "Monarchie parlementaire"],
          ],
        },
        practice: [
          {
            id: "2nde-hg-04-s2-p1",
            prompt: "Quelle doctrine économique applique **Colbert** ?",
            choices: ["Le libéralisme", "Le mercantilisme", "Le socialisme", "Le libre-échange"],
            answer: 1,
            explanation: "Colbert applique le **mercantilisme** : l’État doit s’enrichir en exportant plus qu’il n’importe et en accumulant des métaux précieux. Il crée pour cela des **manufactures royales** (Gobelins, Saint-Gobain) et des compagnies de commerce.",
          },
          {
            id: "2nde-hg-04-s2-p2",
            prompt: "En quelle année la cour de Louis XIV s’installe-t-elle à **Versailles** ?",
            choices: ["1661", "1685", "1715", "1682"],
            answer: 3,
            explanation: "La cour s’installe à **Versailles** en **1682**. 1661 marque le début du règne personnel, 1685 la révocation de l’édit de Nantes et 1715 la mort du roi.",
          },
          {
            id: "2nde-hg-04-s2-p3",
            prompt: "Que décide Louis XIV par l’**édit de Fontainebleau** (1685) ?",
            choices: [
              "Il révoque l’édit de Nantes et interdit le culte protestant",
              "Il accorde la liberté de culte aux protestants",
              "Il crée l’Académie des sciences",
              "Il impose le français dans les actes officiels",
            ],
            answer: 0,
            explanation: "Par l’**édit de Fontainebleau**, Louis XIV **révoque l’édit de Nantes** au nom de l’unité religieuse (« un roi, une foi, une loi »). Environ 150 000 à 200 000 protestants fuient alors le royaume.",
          },
        ],
      },
      {
        title: "Révolution scientifique et Lumières",
        body: [
          "Aux XVIe et XVIIe siècles, une **révolution scientifique** fonde le savoir sur l’**observation**, l’**expérience** et les **mathématiques**. **Galilée** observe le ciel à la lunette et défend l’héliocentrisme de Copernic : il est condamné par l’Église en **1633**. **Descartes** (*Discours de la méthode*, **1637**) prône le doute méthodique. **Newton** formule la loi de la **gravitation universelle** (*Principia*, **1687**). Les États soutiennent la recherche : l’**Académie des sciences** est fondée en France en **1666**.",
          "Au XVIIIe siècle, les **Lumières** désignent un mouvement intellectuel européen qui veut éclairer les hommes par la **raison** et lutter contre l’ignorance, la superstition, l’intolérance et l’arbitraire. Les philosophes défendent les **libertés** (d’expression, de conscience), l’**égalité** devant la loi et le bonheur des hommes. Le philosophe allemand Kant résume en 1784 : « Ose savoir ! ».",
          "En France, **Montesquieu** propose dans *De l’esprit des lois* (**1748**) la **séparation des pouvoirs** (législatif, exécutif, judiciaire) pour éviter le despotisme, en s’inspirant de l’Angleterre. **Voltaire** combat le fanatisme : lors de l’**affaire Calas** (le protestant Jean Calas, exécuté à Toulouse en **1762**), il publie le *Traité sur la tolérance* (**1763**) et obtient sa réhabilitation en 1765. **Rousseau**, dans *Du contrat social* (**1762**), affirme que la souveraineté appartient au **peuple**. **Diderot** et **d’Alembert** dirigent l’**Encyclopédie** (**1751-1772**), qui rassemble les connaissances de l’époque et diffuse l’esprit critique malgré la censure.",
          "Ces idées circulent dans les **salons** (tenus souvent par des femmes, comme Mme Geoffrin), les **cafés**, les académies de province, les loges maçonniques et par la presse et les livres, parfois imprimés à l’étranger pour échapper à la censure. Certains souverains, comme Frédéric II de Prusse ou Catherine II de Russie, se disent inspirés par les philosophes : on parle de **despotisme éclairé**. Les Lumières préparent les révolutions de la fin du siècle.",
        ],
        keyPoints: [
          "**Lumières** : mouvement intellectuel du XVIIIe siècle qui défend la raison, la liberté, la tolérance et le progrès.",
          "**Séparation des pouvoirs** (Montesquieu, 1748) : législatif, exécutif et judiciaire confiés à des organes distincts.",
          "**Souveraineté populaire** (Rousseau, 1762) : le pouvoir appartient au peuple.",
          "**1751-1772** : publication de l’Encyclopédie (Diderot et d’Alembert).",
          "**Despotisme éclairé** : monarques absolus qui se réclament des idées des Lumières.",
        ],
        formulas: [
          "1633 → condamnation de Galilée",
          "1687 → Newton, gravitation universelle",
          "1748 → De l’esprit des lois (Montesquieu)",
          "1751-1772 → l’Encyclopédie",
          "1762 → Du contrat social (Rousseau) ; affaire Calas",
          "1763 → Traité sur la tolérance (Voltaire)",
        ],
        example: {
          title: "Étude de cas : l’affaire Calas, Voltaire contre l’intolérance",
          steps: [
            "Les faits : en 1761, à Toulouse, Marc-Antoine Calas est retrouvé mort chez ses parents, protestants.",
            "L’accusation : la rumeur affirme que son père, Jean Calas, l’a tué pour l’empêcher de se convertir au catholicisme.",
            "Le jugement : sans preuve, Jean Calas est condamné et exécuté sur la roue le 10 mars 1762.",
            "L’engagement de Voltaire : il enquête, mobilise l’opinion et publie le *Traité sur la tolérance* (1763).",
            "Le résultat : Jean Calas est réhabilité en 1765 ; l’affaire montre la naissance d’une opinion publique et le rôle de l’intellectuel engagé.",
          ],
        },
        figure: {
          type: "timeline",
          title: "De la révolution scientifique aux Lumières",
          events: [
            {
              date: "1633",
              label: "Condamnation de Galilée",
            },
            {
              date: "1637",
              label: "Descartes, Discours de la méthode",
            },
            {
              date: "1666",
              label: "Fondation de l’Académie des sciences",
            },
            {
              date: "1687",
              label: "Newton, gravitation universelle (Principia)",
            },
            {
              date: "1748",
              label: "Montesquieu, De l’esprit des lois",
            },
            {
              date: "1751-1772",
              label: "Publication de l’Encyclopédie",
            },
            {
              date: "1762",
              label: "Rousseau, Du contrat social ; exécution de Jean Calas",
            },
            {
              date: "1763",
              label: "Voltaire, Traité sur la tolérance",
            },
            {
              date: "1784",
              label: "Kant : « Ose savoir ! »",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-04-s3-p1",
            prompt: "Quelle idée **Montesquieu** défend-il dans *De l’esprit des lois* (1748) ?",
            choices: [
              "La souveraineté du peuple",
              "La séparation des pouvoirs législatif, exécutif et judiciaire",
              "La monarchie de droit divin",
              "Le doute méthodique",
            ],
            answer: 1,
            explanation: "Pour éviter le despotisme, **Montesquieu** propose de confier les pouvoirs **législatif**, **exécutif** et **judiciaire** à des organes distincts, en s’inspirant de l’Angleterre. La souveraineté du peuple est l’idée de Rousseau, le doute méthodique celle de Descartes.",
          },
          {
            id: "2nde-hg-04-s3-p2",
            prompt: "Qui dirige la publication de l’**Encyclopédie** (1751-1772) ?",
            choices: ["Voltaire et Rousseau", "Newton et Galilée", "Diderot et d’Alembert", "Montesquieu et Kant"],
            answer: 2,
            explanation: "**Diderot** et **d’Alembert** dirigent l’**Encyclopédie**, qui rassemble les connaissances de l’époque et diffuse l’esprit critique. Elle est publiée malgré la censure, sur plus de vingt ans.",
          },
          {
            id: "2nde-hg-04-s3-p3",
            prompt: "Que désigne le **despotisme éclairé** ?",
            choices: [
              "Des monarques absolus, comme Frédéric II ou Catherine II, qui se disent inspirés par les philosophes",
              "Une république fondée sur les idées des Lumières",
              "La monarchie parlementaire anglaise",
              "Le gouvernement des philosophes",
            ],
            answer: 0,
            explanation: "Le **despotisme éclairé** désigne des souverains absolus, comme **Frédéric II** de Prusse ou **Catherine II** de Russie, qui se réclament des Lumières. Ils mènent certaines réformes sans renoncer à leur pouvoir absolu.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-hg-04-ex-1",
        prompt: "Que décide l’**ordonnance de Villers-Cotterêts** (1539) ?",
        choices: [
          "L’usage du français dans les actes de justice et d’administration",
          "La liberté de culte pour les protestants",
          "L’installation de la cour à Versailles",
          "La séparation des pouvoirs",
        ],
        answer: 0,
        explanation:
          "Signée par **François Ier** en 1539, l’ordonnance impose le **français** dans les actes officiels et la tenue de registres de baptêmes. La liberté de culte relève de l’édit de Nantes (1598), Versailles de 1682 et la séparation des pouvoirs de Montesquieu (1748).",
      },
      {
        id: "2nde-hg-04-ex-2",
        prompt: "Comment appelle-t-on la révolte de 1648-1653 contre le pouvoir royal pendant la minorité de Louis XIV ?",
        choices: ["La Glorieuse Révolution", "La Saint-Barthélemy", "La Fronde", "La Ligue"],
        answer: 2,
        explanation:
          "La **Fronde** (1648-1653) oppose parlementaires, grands nobles et Parisiens au cardinal **Mazarin** et à la régente Anne d’Autriche. La Glorieuse Révolution est anglaise (1688-1689) ; la Saint-Barthélemy (1572) et la Ligue appartiennent aux guerres de Religion.",
      },
      {
        id: "2nde-hg-04-ex-3",
        prompt: "En quelle année Louis XIV **révoque-t-il l’édit de Nantes** ?",
        choices: ["1661", "1682", "1715", "1685"],
        answer: 3,
        explanation:
          "Par l’**édit de Fontainebleau** de **1685**, Louis XIV révoque l’édit de Nantes : le protestantisme est interdit en France. 1661 marque le début de son règne personnel, 1682 l’installation de la cour à Versailles et 1715 sa mort.",
      },
      {
        id: "2nde-hg-04-ex-4",
        prompt: "Quel ministre de Louis XIV applique une politique **mercantiliste** fondée sur les manufactures ?",
        choices: ["Richelieu", "Colbert", "Mazarin", "Bossuet"],
        answer: 1,
        explanation:
          "**Colbert**, contrôleur général des finances à partir de 1665, crée des manufactures royales et des compagnies de commerce pour exporter davantage : c’est le **mercantilisme** (ou colbertisme). Richelieu et Mazarin sont des cardinaux-ministres antérieurs ; Bossuet est un évêque, théoricien de l’absolutisme.",
      },
      {
        id: "2nde-hg-04-ex-5",
        prompt: "Quel philosophe théorise la **séparation des pouvoirs** dans *De l’esprit des lois* (1748) ?",
        choices: ["Rousseau", "Voltaire", "Montesquieu", "Diderot"],
        answer: 2,
        explanation:
          "**Montesquieu** affirme qu’il faut que « le pouvoir arrête le pouvoir » : législatif, exécutif et judiciaire doivent être séparés. Rousseau défend la souveraineté du peuple (*Du contrat social*), Voltaire la tolérance, Diderot dirige l’Encyclopédie.",
      },
      {
        id: "2nde-hg-04-ex-6",
        prompt: "Quel texte anglais de **1689** limite le pouvoir du roi au profit du Parlement ?",
        choices: ["Le Bill of Rights", "La Magna Carta", "L’Habeas Corpus", "Le Contrat social"],
        answer: 0,
        explanation:
          "Le **Bill of Rights** (1689), accepté par Guillaume III et Marie II après la Glorieuse Révolution, interdit au roi de lever l’impôt ou une armée permanente en temps de paix sans le Parlement. La Magna Carta date de 1215, l’Habeas Corpus de 1679 ; le *Contrat social* est un livre de Rousseau.",
      },
    ],
    test: [
      {
        id: "2nde-hg-04-ct-1",
        prompt: "Quel est le rôle des **intendants** dans le royaume de France au XVIIe siècle ?",
        choices: [
          "Ce sont des nobles élus par les provinces pour conseiller le roi",
          "Ce sont des juges du Parlement de Paris qui peuvent refuser les lois",
          "Ce sont des agents nommés et révocables par le roi, chargés de la justice, de la police et des finances en province",
          "Ce sont les gouverneurs militaires héréditaires des provinces frontalières",
        ],
        answer: 2,
        explanation:
          "Les **intendants**, développés sous Richelieu puis généralisés sous Louis XIV, sont des commissaires **nommés et révocables** par le roi : contrairement aux officiers (qui possèdent leur charge) ou aux gouverneurs nobles, ils dépendent entièrement de lui. Ils sont l’instrument de la centralisation monarchique.",
      },
      {
        id: "2nde-hg-04-ct-2",
        prompt: "Pourquoi peut-on dire que la monarchie absolue n’est pas un pouvoir **sans limites** ?",
        choices: [
          "Parce que le roi doit respecter les lois de Dieu, les lois fondamentales du royaume et se heurte aux privilèges des provinces et des corps",
          "Parce que le roi doit faire voter toutes ses lois par des élus",
          "Parce que le pape nomme les ministres du roi",
          "Parce que la Constitution de 1661 encadre ses décisions",
        ],
        answer: 0,
        explanation:
          "Le roi absolu n’est soumis à aucun contrôle institutionnel régulier (pas d’assemblée élue, les états généraux ne sont plus réunis de 1614 à 1789), mais il doit respecter la **loi divine**, les **lois fondamentales** (succession masculine par ordre de primogéniture, inaliénabilité du domaine) et composer avec les **privilèges**. Il n’existe pas de constitution écrite.",
      },
      {
        id: "2nde-hg-04-ct-3",
        prompt: "Quelle est la principale différence entre la France de Louis XIV et l’Angleterre après 1689 ?",
        choices: [
          "La France est une république, l’Angleterre une monarchie",
          "En France le roi concentre les pouvoirs ; en Angleterre le roi doit obtenir l’accord du Parlement pour l’impôt et l’armée",
          "L’Angleterre est catholique, la France protestante",
          "En Angleterre le roi est élu par le peuple",
        ],
        answer: 1,
        explanation:
          "La France est une **monarchie absolue** : le roi décide seul de l’impôt et de la loi. L’Angleterre devient une **monarchie parlementaire** : le **Bill of Rights** impose l’accord du Parlement pour lever l’impôt ou entretenir une armée en temps de paix. Le roi anglais reste héréditaire, non élu.",
      },
      {
        id: "2nde-hg-04-ct-4",
        prompt: "Quelle est la conséquence majeure de la révocation de l’édit de Nantes (1685) ?",
        choices: [
          "Le retour massif des protestants exilés en France",
          "La fin de la monarchie absolue",
          "Une alliance entre Louis XIV et les princes protestants allemands",
          "L’exil de 150 000 à 200 000 protestants, souvent artisans qualifiés, vers les pays protestants",
        ],
        answer: 3,
        explanation:
          "Malgré l’interdiction d’émigrer, environ **150 000 à 200 000 huguenots** quittent la France pour les Provinces-Unies, l’Angleterre, la Prusse ou la Suisse. Ce départ de nombreux artisans et marchands profite aux pays d’accueil et ternit l’image du roi dans l’Europe protestante.",
      },
      {
        id: "2nde-hg-04-ct-5",
        prompt: "Pourquoi Louis XIV fait-il vivre la noblesse à **Versailles** ?",
        choices: [
          "Pour la surveiller, la rendre dépendante de ses faveurs et la détourner de la révolte",
          "Pour lui confier le gouvernement du royaume",
          "Parce que Paris a été détruit par la Fronde",
          "Pour préparer la séparation des pouvoirs",
        ],
        answer: 0,
        explanation:
          "Marqué par la **Fronde**, Louis XIV attire les grands nobles à **Versailles** (cour installée en 1682) : soumis à l’**étiquette** et en quête de pensions et de charges, ils dépendent du roi et ne peuvent plus organiser de révoltes dans leurs provinces. Il gouverne en revanche avec des ministres d’origine plus modeste.",
      },
      {
        id: "2nde-hg-04-ct-6",
        prompt: "Quel lien peut-on établir entre la révolution scientifique et les Lumières ?",
        choices: [
          "Les Lumières rejettent la science au nom de la religion",
          "La révolution scientifique est postérieure aux Lumières",
          "La confiance dans la raison et l’expérience (Galilée, Newton) inspire la volonté des Lumières de tout examiner par la raison",
          "Aucun lien : ce sont deux mouvements opposés",
        ],
        answer: 2,
        explanation:
          "La révolution scientifique (XVIe-XVIIe siècles) montre la puissance de la **raison**, de l’**observation** et de l’**expérience**. Les philosophes des Lumières (XVIIIe siècle) appliquent cette démarche critique à la politique, à la religion et à la société ; Voltaire popularise d’ailleurs Newton en France.",
      },
      {
        id: "2nde-hg-04-ct-7",
        prompt: "Que montre l’**affaire Calas** (1762-1765) ?",
        choices: [
          "Que les protestants étaient favorisés par la justice royale",
          "Le combat de Voltaire contre l’intolérance religieuse et le poids naissant de l’opinion publique",
          "Que Rousseau soutenait l’absolutisme",
          "La victoire de la Fronde sur Mazarin",
        ],
        answer: 1,
        explanation:
          "Le protestant **Jean Calas** est exécuté en 1762 sur une accusation infondée. **Voltaire** mobilise l’opinion, publie le *Traité sur la tolérance* (1763) et obtient sa **réhabilitation** (1765). L’affaire illustre l’intolérance envers les protestants et le rôle nouveau de l’intellectuel et de l’opinion publique.",
      },
      {
        id: "2nde-hg-04-ct-8",
        prompt: "Quelle idée de **Rousseau** remet le plus directement en cause la monarchie de droit divin ?",
        choices: [
          "La séparation des pouvoirs",
          "Le mercantilisme",
          "Le despotisme éclairé",
          "La souveraineté appartient au peuple",
        ],
        answer: 3,
        explanation:
          "Dans *Du contrat social* (1762), **Rousseau** fonde la légitimité politique sur la **volonté générale** du peuple souverain, et non sur Dieu. La séparation des pouvoirs est l’idée de Montesquieu ; le mercantilisme est une doctrine économique ; le despotisme éclairé désigne des monarques absolus inspirés des Lumières.",
      },
    ],
    homework: [
      {
        id: "2nde-hg-04-hw-1",
        prompt: "Quel instrument de gouvernement **n’est pas** utilisé par Louis XIV pour renforcer son pouvoir ?",
        choices: [
          "Les intendants dans les provinces",
          "La cour et l’étiquette à Versailles",
          "Les arts et les Académies au service de sa gloire",
          "La convocation régulière des États généraux pour voter l’impôt",
        ],
        answer: 3,
        explanation: "Louis XIV ne convoque jamais les **États généraux** : leur dernière réunion avant 1789 date de 1614. Il gouverne avec des conseils restreints, des intendants, et utilise Versailles et les arts pour imposer son autorité.",
      },
      {
        id: "2nde-hg-04-hw-2",
        prompt: "Pourquoi les philosophes des Lumières admirent-ils l’Angleterre ?",
        choices: [
          "Parce que le roi y est sacré à Reims",
          "Parce que le Bill of Rights y limite le pouvoir royal au profit du Parlement",
          "Parce qu’elle interdit toute religion",
          "Parce qu’elle a aboli la monarchie",
        ],
        answer: 1,
        explanation: "Depuis le **Bill of Rights** de **1689**, le roi d’Angleterre ne peut ni lever d’impôts ni entretenir une armée en temps de paix sans l’accord du Parlement. Montesquieu y voit un modèle de liberté fondé sur l’équilibre des pouvoirs.",
      },
      {
        id: "2nde-hg-04-hw-3",
        prompt: "Dans l’affaire Calas, quel est le principal combat de **Voltaire** ?",
        choices: [
          "La lutte contre le fanatisme et l’intolérance religieuse",
          "La défense du droit divin",
          "La séparation des pouvoirs",
          "La défense du mercantilisme",
        ],
        answer: 0,
        explanation: "Voltaire enquête sur la condamnation du protestant **Jean Calas**, exécuté en 1762 sans preuve, et publie le *Traité sur la tolérance* (1763). Il obtient sa réhabilitation en 1765 : c’est un combat contre le **fanatisme** et l’intolérance.",
      },
      {
        id: "2nde-hg-04-hw-4",
        prompt: "Quelle affirmation sur la monarchie absolue est **exacte** ?",
        choices: [
          "Le roi peut modifier librement les règles de succession",
          "Le roi tient son pouvoir des États généraux",
          "Le roi concentre tous les pouvoirs, mais doit respecter les lois fondamentales du royaume et les lois de Dieu",
          "Le roi partage le pouvoir législatif avec un Parlement élu",
        ],
        answer: 2,
        explanation: "Le roi absolu fait la loi, rend la justice et lève l’impôt, mais il n’est pas un tyran sans limite : il doit respecter les **lois fondamentales** (comme les règles de succession) et les lois de Dieu. Les privilèges des provinces et des corps freinent aussi son action.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 5 ─────────────────────────────
  {
    id: "2nde-hg-05",
    title: "Histoire — La Révolution française et l’Empire",
    summary:
      "De 1789 à 1815, la France abolit la société d’ordres et la monarchie absolue, expérimente la monarchie constitutionnelle puis la République, avant que Napoléon Bonaparte n’installe un régime autoritaire qui consolide certains acquis révolutionnaires et les diffuse en Europe.",
    objectives: [
      "Je sais expliquer les causes de la Révolution et les grandes ruptures de 1789.",
      "Je sais retracer les étapes de 1789 à 1799 (monarchie constitutionnelle, République, Terreur, Directoire).",
      "Je sais expliquer ce que Napoléon Bonaparte conserve et transforme de l’héritage révolutionnaire.",
      "Je sais présenter les révolutions dans les colonies (Saint-Domingue, esclavage).",
    ],
    sections: [
      {
        title: "1789 : la fin de l’Ancien Régime",
        body: [
          "À la fin du XVIIIe siècle, la France connaît une **crise financière** (dette aggravée par la participation à la guerre d’indépendance américaine), une **crise économique** (mauvaise récolte de 1788, hausse du prix du pain) et une **crise politique** : les privilégiés refusent de payer l’impôt, tandis que la bourgeoisie, nourrie des idées des Lumières, conteste une société d’**ordres** (clergé, noblesse, tiers état) fondée sur les **privilèges**. Pour trouver de l’argent, **Louis XVI** convoque les **États généraux**, qui s’ouvrent à Versailles le **5 mai 1789**. Les Français rédigent des **cahiers de doléances**.",
          "Les députés du tiers état réclament le vote par tête (et non par ordre). Le **17 juin 1789**, ils se proclament **Assemblée nationale** ; le **20 juin**, par le **serment du Jeu de paume**, ils jurent de ne pas se séparer avant d’avoir donné une constitution au royaume : la **souveraineté nationale** remplace le droit divin. Le roi masse des troupes autour de Paris : le peuple parisien s’empare de la **Bastille** le **14 juillet 1789**.",
          "Dans les campagnes, la **Grande Peur** pousse les paysans à attaquer les châteaux. Dans la **nuit du 4 août 1789**, l’Assemblée **abolit les privilèges** et les droits féodaux (certains devant être rachetés, jusqu’à leur suppression complète en 1793). Le **26 août 1789**, elle adopte la **Déclaration des droits de l’homme et du citoyen** (DDHC) : liberté, égalité en droits, propriété, sûreté, résistance à l’oppression, souveraineté de la nation, séparation des pouvoirs.",
          "L’Assemblée réorganise le pays : création des **départements** (1790), vente des biens du clergé devenus **biens nationaux**, **Constitution civile du clergé** (1790) qui divise les catholiques. La **Constitution de septembre 1791** établit une **monarchie constitutionnelle** : le roi conserve l’exécutif et un droit de veto, une Assemblée législative élue au **suffrage censitaire** fait les lois. Mais la **fuite du roi à Varennes** (**20-21 juin 1791**) ruine la confiance des Français en Louis XVI.",
        ],
        keyPoints: [
          "**Société d’ordres** : société divisée en clergé, noblesse et tiers état, inégaux en droits (privilèges).",
          "**Souveraineté nationale** : le pouvoir appartient à la nation, représentée par des députés.",
          "**14 juillet 1789** : prise de la Bastille ; **4 août** : abolition des privilèges ; **26 août** : DDHC.",
          "**Suffrage censitaire** : droit de vote réservé aux hommes qui paient un certain montant d’impôt (le cens).",
          "**Monarchie constitutionnelle** (1791) : le roi gouverne dans le cadre d’une constitution qui limite ses pouvoirs.",
        ],
        formulas: [
          "5 mai 1789 → ouverture des États généraux",
          "20 juin 1789 → serment du Jeu de paume",
          "14 juillet 1789 → prise de la Bastille",
          "4 août 1789 → abolition des privilèges",
          "26 août 1789 → DDHC",
          "Septembre 1791 → première Constitution (monarchie constitutionnelle)",
        ],
        example: {
          title: "Méthode : analyser l’article 1er et l’article 3 de la DDHC",
          steps: [
            "Article 1 : « Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l’utilité commune. »",
            "Rupture : c’est la fin juridique de la société d’ordres et des privilèges de naissance.",
            "Article 3 : « Le principe de toute souveraineté réside essentiellement dans la Nation. »",
            "Rupture : le pouvoir ne vient plus de Dieu mais de la nation, ce qui condamne la monarchie absolue de droit divin.",
            "Limites : les femmes, les esclaves des colonies et les plus pauvres (citoyens passifs) restent exclus de la citoyenneté politique ; Olympe de Gouges le dénonce en 1791 dans sa *Déclaration des droits de la femme et de la citoyenne*.",
          ],
        },
        figure: {
          type: "timeline",
          title: "1789-1791 : la fin de l’Ancien Régime",
          events: [
            {
              date: "5 mai 1789",
              label: "Ouverture des États généraux à Versailles",
            },
            {
              date: "17 juin 1789",
              label: "Le tiers état se proclame Assemblée nationale",
            },
            {
              date: "20 juin 1789",
              label: "Serment du Jeu de paume",
            },
            {
              date: "14 juillet 1789",
              label: "Prise de la Bastille",
            },
            {
              date: "4 août 1789",
              label: "Abolition des privilèges",
            },
            {
              date: "26 août 1789",
              label: "Déclaration des droits de l’homme et du citoyen",
            },
            {
              date: "20-21 juin 1791",
              label: "Fuite du roi, arrêté à Varennes",
            },
            {
              date: "Septembre 1791",
              label: "Constitution : monarchie constitutionnelle",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-05-s1-p1",
            prompt: "Que jurent les députés lors du **serment du Jeu de paume** (20 juin 1789) ?",
            choices: [
              "D’abolir les privilèges",
              "De ne pas se séparer avant d’avoir donné une constitution au royaume",
              "De renverser Louis XVI",
              "De prendre la Bastille",
            ],
            answer: 1,
            explanation: "Le **20 juin 1789**, les députés du tiers état, proclamés Assemblée nationale, jurent de ne pas se séparer avant d’avoir donné une **constitution** au royaume. Ils affirment ainsi que la souveraineté appartient à la nation et non plus au roi de droit divin.",
          },
          {
            id: "2nde-hg-05-s1-p2",
            prompt: "Qu’est-ce que le **suffrage censitaire** prévu par la Constitution de 1791 ?",
            choices: [
              "Le vote de tous les hommes adultes",
              "Le vote des femmes et des hommes",
              "Le vote réservé aux hommes qui paient un certain montant d’impôt",
              "Le vote par ordre aux États généraux",
            ],
            answer: 2,
            explanation: "Le **suffrage censitaire** réserve le droit de vote aux hommes qui paient un impôt minimal, le **cens**. Les plus pauvres, appelés citoyens passifs, en sont exclus : l’égalité en droits proclamée en 1789 ne s’étend donc pas à l’égalité politique.",
          },
          {
            id: "2nde-hg-05-s1-p3",
            prompt: "Quelle décision l’Assemblée prend-elle dans la **nuit du 4 août 1789** ?",
            choices: [
              "Elle abolit les privilèges et les droits féodaux",
              "Elle adopte la DDHC",
              "Elle proclame la République",
              "Elle crée les départements",
            ],
            answer: 0,
            explanation: "Dans la **nuit du 4 août 1789**, en réponse à la Grande Peur, l’Assemblée **abolit les privilèges** et les droits féodaux (certains rachetables jusqu’en 1793). C’est la fin juridique de la société d’ordres ; la DDHC suit le 26 août.",
          },
        ],
      },
      {
        title: "La République, la guerre et la Terreur (1792-1799)",
        body: [
          "En **avril 1792**, la France déclare la guerre au roi de Bohême et de Hongrie (l’Autriche). Les défaites et le soupçon de trahison du roi provoquent l’insurrection du **10 août 1792** : les Parisiens prennent les Tuileries, le roi est suspendu puis emprisonné. Une nouvelle assemblée, la **Convention**, est élue au **suffrage universel masculin**. Le **20 septembre 1792**, la victoire de **Valmy** arrête les Prussiens ; le **21 septembre**, la Convention abolit la royauté, et le **22 septembre 1792** devient le premier jour de l’an I de la **République**.",
          "Jugé pour trahison, **Louis XVI** est guillotiné le **21 janvier 1793**. La République doit alors affronter une coalition européenne, la **guerre de Vendée** (soulèvement contre-révolutionnaire à partir de mars 1793) et des révoltes fédéralistes. Les **Montagnards** de **Robespierre**, soutenus par les **sans-culottes** parisiens, éliminent les **Girondins** (juin 1793) et instaurent la **Terreur** : gouvernement révolutionnaire dominé par le **Comité de salut public**, loi des suspects (septembre 1793), tribunal révolutionnaire. Environ 17 000 personnes sont condamnées à mort officiellement, et bien davantage meurent dans la répression (notamment en Vendée).",
          "La Convention montagnarde prend aussi des mesures sociales et symboliques : **calendrier républicain**, maximum des prix, et surtout **abolition de l’esclavage** dans les colonies le **4 février 1794** (16 pluviôse an II). Après les victoires militaires (Fleurus, juin 1794), la Terreur paraît moins justifiée : Robespierre est renversé le **9 thermidor an II** (**27 juillet 1794**) et exécuté le lendemain.",
          "La Constitution de l’an III (1795) crée le **Directoire** : le pouvoir exécutif est confié à cinq directeurs, le législatif à deux conseils élus au suffrage censitaire. Ce régime, instable et menacé à la fois par les royalistes et les jacobins, fait appel à l’armée. Le général **Napoléon Bonaparte**, auréolé de ses victoires en Italie, en profite : par le **coup d’État du 18 brumaire an VIII** (**9 novembre 1799**), il prend le pouvoir.",
        ],
        keyPoints: [
          "**10 août 1792** : chute de la monarchie ; **21-22 septembre 1792** : abolition de la royauté et naissance de la République.",
          "**Suffrage universel masculin** : droit de vote pour tous les hommes adultes (élection de la Convention en 1792).",
          "**21 janvier 1793** : exécution de Louis XVI.",
          "**Terreur** (1793-1794) : gouvernement d’exception qui recourt à la répression pour sauver la République.",
          "**4 février 1794** : première abolition de l’esclavage ; **27 juillet 1794** (9 thermidor) : chute de Robespierre.",
        ],
        formulas: [
          "20 avril 1792 → déclaration de guerre",
          "10 août 1792 → chute de la monarchie",
          "22 septembre 1792 → an I de la République",
          "21 janvier 1793 → exécution de Louis XVI",
          "1793-1794 → la Terreur",
          "1795-1799 → le Directoire ; 9 novembre 1799 → 18 brumaire",
        ],
        example: {
          title: "Étude de cas : la Révolution à Saint-Domingue et l’abolition de l’esclavage",
          steps: [
            "Contexte : Saint-Domingue (ouest de l’île d’Hispaniola) est la colonie la plus riche de France grâce au sucre et au café produits par environ 500 000 esclaves.",
            "Août 1791 : grande insurrection des esclaves du Nord de la colonie.",
            "1793 : les commissaires civils Sonthonax et Polverel proclament l’émancipation des esclaves de la colonie.",
            "4 février 1794 : la Convention abolit l’esclavage dans toutes les colonies françaises ; **Toussaint Louverture**, ancien esclave, se rallie à la République et devient le chef de la colonie.",
            "1802 : Bonaparte **rétablit l’esclavage** (en Guadeloupe et dans les colonies où il n’avait pas été aboli) et envoie une expédition à Saint-Domingue ; Toussaint Louverture, capturé, meurt en France en 1803.",
            "1er janvier 1804 : Saint-Domingue proclame son indépendance sous le nom d’**Haïti**, première république fondée par d’anciens esclaves.",
          ],
        },
        figure: {
          type: "timeline",
          title: "La République en guerre (1792-1799)",
          events: [
            {
              date: "20 avril 1792",
              label: "Déclaration de guerre au roi de Bohême et de Hongrie",
            },
            {
              date: "10 août 1792",
              label: "Prise des Tuileries, chute de la monarchie",
            },
            {
              date: "20 septembre 1792",
              label: "Victoire de Valmy",
            },
            {
              date: "22 septembre 1792",
              label: "An I de la République",
            },
            {
              date: "21 janvier 1793",
              label: "Exécution de Louis XVI",
            },
            {
              date: "4 février 1794",
              label: "Première abolition de l’esclavage",
            },
            {
              date: "27 juillet 1794",
              label: "9 thermidor : chute de Robespierre",
            },
            {
              date: "1795",
              label: "Constitution de l’an III, le Directoire",
            },
            {
              date: "9 novembre 1799",
              label: "Coup d’État du 18 brumaire",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-05-s2-p1",
            prompt: "Comment est élue la **Convention** en 1792 ?",
            choices: [
              "Au suffrage censitaire",
              "Par tirage au sort",
              "Par les seuls députés du tiers état de 1789",
              "Au suffrage universel masculin",
            ],
            answer: 3,
            explanation: "Après la chute de la monarchie le 10 août 1792, la **Convention** est élue au **suffrage universel masculin**. C’est elle qui abolit la royauté et proclame la République en septembre 1792.",
          },
          {
            id: "2nde-hg-05-s2-p2",
            prompt: "Quelle mesure la Convention adopte-t-elle le **4 février 1794** (16 pluviôse an II) ?",
            choices: [
              "L’abolition de l’esclavage dans toutes les colonies françaises",
              "Le calendrier républicain",
              "La loi des suspects",
              "L’exécution de Louis XVI",
            ],
            answer: 0,
            explanation: "Le **4 février 1794**, la Convention abolit l’**esclavage** dans toutes les colonies, après l’insurrection des esclaves de Saint-Domingue (1791) et l’émancipation proclamée sur place en 1793. Bonaparte le rétablit en 1802.",
          },
          {
            id: "2nde-hg-05-s2-p3",
            prompt: "Que se passe-t-il le **9 thermidor an II** (27 juillet 1794) ?",
            choices: [
              "Le coup d’État de Bonaparte",
              "La chute de Robespierre, qui met fin à la Terreur",
              "La victoire de Valmy",
              "La création du Directoire",
            ],
            answer: 1,
            explanation: "Le **9 thermidor an II**, les députés renversent **Robespierre**, exécuté le lendemain. Les victoires militaires (Fleurus) rendaient la Terreur moins justifiée à leurs yeux ; le Directoire est créé ensuite par la Constitution de l’an III (1795).",
          },
        ],
      },
      {
        title: "Napoléon Bonaparte : du Consulat à l’Empire (1799-1815)",
        body: [
          "La Constitution de l’an VIII (décembre 1799) crée le **Consulat** : Bonaparte, **Premier consul**, détient l’essentiel du pouvoir ; le suffrage universel masculin est rétabli mais vidé de son sens, et le régime recourt au **plébiscite**. Bonaparte réorganise durablement la France : **préfets** dans chaque département (**1800**), **Banque de France** (**1800**), **Concordat** avec le pape (**1801**) qui réconcilie l’État et l’Église catholique, **lycées** (**1802**), **Légion d’honneur** (**1802**). Le **Code civil** (**21 mars 1804**) unifie le droit et consacre l’égalité devant la loi, la propriété et la liberté du travail, mais il renforce l’autorité du père et du mari sur la femme.",
          "Consul à vie en 1802, Bonaparte se fait proclamer empereur des Français en mai 1804 et **sacrer à Notre-Dame le 2 décembre 1804**, en présence du pape Pie VII. L’**Empire** est un régime **autoritaire** : censure de la presse, police dirigée par Fouché, opposants surveillés, création d’une noblesse d’Empire (1808). Il conserve cependant des acquis de 1789 : fin des privilèges, égalité civile, vente des biens nationaux confirmée.",
          "Par les guerres, Napoléon domine l’Europe : victoire d’**Austerlitz** (**2 décembre 1805**), Iéna (1806), Wagram (1809). Le **Grand Empire** compte jusqu’à 130 départements en 1811, entourés d’États vassaux confiés à sa famille. Dans les pays conquis, il diffuse le Code civil et supprime les droits féodaux, mais la domination française (impôts, conscription, pillages) suscite des résistances nationales, notamment en **Espagne** (1808).",
          "La désastreuse **campagne de Russie** (**1812**) puis la défaite de Leipzig (1813) entraînent l’invasion de la France et la **première abdication** (**avril 1814**). Exilé à l’île d’Elbe, Napoléon revient pour les **Cent-Jours** (mars-juin 1815), mais il est définitivement vaincu à **Waterloo le 18 juin 1815** et exilé à **Sainte-Hélène**, où il meurt en 1821. Les Bourbons reviennent au pouvoir (Restauration avec Louis XVIII).",
        ],
        keyPoints: [
          "**18 brumaire an VIII (9 novembre 1799)** : coup d’État de Bonaparte, début du Consulat.",
          "**Plébiscite** : vote par lequel les citoyens approuvent ou rejettent par oui ou non une décision ou une personne.",
          "**Concordat (1801)** : accord avec le pape ; **Code civil (1804)** : unification du droit civil.",
          "**2 décembre 1804** : sacre de Napoléon Ier ; **2 décembre 1805** : Austerlitz.",
          "**18 juin 1815** : Waterloo, fin de l’Empire.",
        ],
        formulas: [
          "1799 → Consulat",
          "1800 → préfets, Banque de France",
          "1801 → Concordat ; 1802 → lycées, Légion d’honneur, rétablissement de l’esclavage",
          "1804 → Code civil (mars), sacre (2 décembre)",
          "1812 → campagne de Russie",
          "1814 → abdication ; 1815 → Cent-Jours et Waterloo",
        ],
        example: {
          title: "Méthode : bilan des héritages révolutionnaires sous Napoléon (tableau à deux colonnes)",
          steps: [
            "Colonne « conservé » : égalité devant la loi, fin des privilèges et des droits féodaux, biens nationaux, départements, Code civil qui fixe ces principes.",
            "Colonne « remis en cause » : libertés politiques (censure, police), pouvoir personnel et héréditaire, noblesse d’Empire, esclavage rétabli en 1802.",
            "Ajouter les créations nouvelles qui durent jusqu’à aujourd’hui : préfets, lycées, Légion d’honneur, Banque de France.",
            "Nuancer : le régime s’appuie sur le suffrage masculin mais par plébiscites, sans véritable choix.",
            "Conclure : Napoléon est à la fois l’héritier de la Révolution (égalité civile) et son fossoyeur (liberté politique).",
          ],
        },
        figure: {
          type: "table",
          title: "Napoléon face à l’héritage de la Révolution",
          headers: ["Domaine", "Ce que Napoléon conserve", "Ce qu’il remet en cause"],
          rows: [
            [
              "Société",
              "Fin des privilèges, égalité devant la loi (Code civil, 1804), biens nationaux confirmés",
              "Noblesse d’Empire (1808)",
            ],
            [
              "Vie politique",
              "Suffrage universel masculin maintenu",
              "Plébiscites sans vrai choix, censure, police de Fouché",
            ],
            [
              "Famille",
              "Mariage civil et divorce maintenus",
              "Autorité renforcée du père et du mari sur la femme",
            ],
            [
              "Colonies",
              "Rien : la liberté des esclaves n’est pas maintenue",
              "Rétablissement de l’esclavage (1802)",
            ],
          ],
        },
        practice: [
          {
            id: "2nde-hg-05-s3-p1",
            prompt: "Quelle est la date du **Code civil** ?",
            choices: ["1801", "1804", "1808", "1815"],
            answer: 1,
            explanation: "Le **Code civil** est promulgué le **21 mars 1804**. Il unifie le droit et consacre l’égalité devant la loi, la propriété et la liberté du travail, tout en renforçant l’autorité du père et du mari ; 1801 est la date du Concordat.",
          },
          {
            id: "2nde-hg-05-s3-p2",
            prompt: "Qu’est-ce qu’un **plébiscite** ?",
            choices: [
              "Une assemblée élue au suffrage censitaire",
              "Un accord avec le pape",
              "Une loi votée par le Sénat",
              "Un vote par lequel les citoyens approuvent ou rejettent par oui ou non une décision ou une personne",
            ],
            answer: 3,
            explanation: "Le **plébiscite** demande aux citoyens de répondre par **oui ou non**. Bonaparte l’utilise pour faire approuver ses Constitutions et son pouvoir : le suffrage universel masculin existe, mais il est vidé de son sens car les électeurs n’ont pas de véritable choix.",
          },
          {
            id: "2nde-hg-05-s3-p3",
            prompt: "Quelle bataille met définitivement fin à l’Empire, le **18 juin 1815** ?",
            choices: ["Waterloo", "Austerlitz", "Leipzig", "Wagram"],
            answer: 0,
            explanation: "Le **18 juin 1815**, Napoléon est vaincu à **Waterloo**, ce qui met fin aux Cent-Jours. Il est exilé à Sainte-Hélène ; Austerlitz (1805) et Wagram (1809) sont des victoires, Leipzig (1813) une défaite qui conduit à la première abdication.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-hg-05-ex-1",
        prompt: "Que se passe-t-il le **20 juin 1789** ?",
        choices: [
          "La prise de la Bastille",
          "Le serment du Jeu de paume",
          "L’abolition des privilèges",
          "L’ouverture des États généraux",
        ],
        answer: 1,
        explanation:
          "Le **20 juin 1789**, les députés du tiers état, réunis dans la salle du Jeu de paume, jurent de ne pas se séparer avant d’avoir donné une constitution à la France. Les États généraux s’ouvrent le 5 mai, la Bastille est prise le 14 juillet et les privilèges abolis dans la nuit du 4 août.",
      },
      {
        id: "2nde-hg-05-ex-2",
        prompt: "Quel texte est adopté le **26 août 1789** ?",
        choices: [
          "Le Code civil",
          "La Constitution civile du clergé",
          "La Déclaration des droits de l’homme et du citoyen",
          "La Constitution de 1791",
        ],
        answer: 2,
        explanation:
          "La **DDHC** est adoptée le 26 août 1789 : elle affirme les droits naturels (liberté, propriété, sûreté, résistance à l’oppression), l’égalité en droits et la souveraineté de la nation. La Constitution civile du clergé date de 1790, la Constitution de septembre 1791, le Code civil de 1804.",
      },
      {
        id: "2nde-hg-05-ex-3",
        prompt: "Quand la **République** est-elle proclamée en France ?",
        choices: ["14 juillet 1789", "10 août 1792", "21 janvier 1793", "21-22 septembre 1792"],
        answer: 3,
        explanation:
          "La Convention abolit la royauté le **21 septembre 1792** et le **22 septembre** devient le premier jour de l’an I de la République. Le 10 août 1792 marque la chute de la monarchie (prise des Tuileries), le 21 janvier 1793 l’exécution de Louis XVI.",
      },
      {
        id: "2nde-hg-05-ex-4",
        prompt: "Quel événement met fin à la **Terreur** ?",
        choices: [
          "La chute de Robespierre le 9 thermidor an II (27 juillet 1794)",
          "Le coup d’État du 18 brumaire",
          "La victoire de Valmy",
          "La fuite à Varennes",
        ],
        answer: 0,
        explanation:
          "Le **9 thermidor an II** (27 juillet 1794), la Convention renverse **Robespierre**, guillotiné le lendemain : la Terreur prend fin. Le 18 brumaire (1799) marque la prise de pouvoir de Bonaparte, Valmy (1792) une victoire militaire, Varennes (1791) la fuite du roi.",
      },
      {
        id: "2nde-hg-05-ex-5",
        prompt: "En quelle année est promulgué le **Code civil** ?",
        choices: ["1801", "1804", "1799", "1815"],
        answer: 1,
        explanation:
          "Le **Code civil** est promulgué le **21 mars 1804**. Il unifie le droit civil (famille, propriété, contrats) en reprenant des principes de 1789 comme l’égalité devant la loi. 1801 correspond au Concordat, 1799 au 18 brumaire et 1815 à Waterloo.",
      },
      {
        id: "2nde-hg-05-ex-6",
        prompt: "Quelle bataille marque la défaite définitive de Napoléon le **18 juin 1815** ?",
        choices: ["Austerlitz", "Leipzig", "Waterloo", "Iéna"],
        answer: 2,
        explanation:
          "À **Waterloo** (Belgique actuelle), Napoléon est battu par les Britanniques de Wellington et les Prussiens de Blücher : c’est la fin des Cent-Jours. Austerlitz (1805) et Iéna (1806) sont des victoires ; Leipzig (1813) est une défaite antérieure.",
      },
    ],
    test: [
      {
        id: "2nde-hg-05-ct-1",
        prompt: "Pourquoi le serment du Jeu de paume est-il une **rupture politique** majeure ?",
        choices: [
          "Parce que les députés y proclament la République",
          "Parce que le roi y accepte de supprimer les privilèges",
          "Parce que les députés affirment représenter la nation et vouloir lui donner une constitution, contre la volonté royale",
          "Parce qu’il déclenche la guerre contre l’Autriche",
        ],
        answer: 2,
        explanation:
          "En jurant de donner une **constitution** au royaume, les députés affirment que la **souveraineté** appartient à la **nation** et non plus au roi de droit divin. C’est la naissance d’un pouvoir concurrent du roi. La République n’est proclamée qu’en 1792 et la guerre déclarée en 1792.",
      },
      {
        id: "2nde-hg-05-ct-2",
        prompt: "Quelle limite de la DDHC dénonce **Olympe de Gouges** en 1791 ?",
        choices: [
          "L’exclusion des femmes de la citoyenneté et des droits politiques",
          "L’absence de liberté religieuse",
          "Le maintien des privilèges de la noblesse",
          "La suppression de la propriété",
        ],
        answer: 0,
        explanation:
          "Dans la *Déclaration des droits de la femme et de la citoyenne* (1791), **Olympe de Gouges** réclame pour les femmes les mêmes droits que les hommes : « La femme a le droit de monter sur l’échafaud ; elle doit avoir également celui de monter à la Tribune. » Elle est guillotinée en 1793. Les femmes n’obtiendront le droit de vote en France qu’en 1944.",
      },
      {
        id: "2nde-hg-05-ct-3",
        prompt: "Pourquoi la **fuite à Varennes** (juin 1791) fragilise-t-elle la monarchie constitutionnelle ?",
        choices: [
          "Parce que le roi est tué pendant sa fuite",
          "Parce qu’elle montre que le roi rejette la Révolution, ce qui détruit la confiance d’une partie des Français",
          "Parce que le roi s’enfuit en Angleterre et abdique",
          "Parce qu’elle provoque immédiatement la proclamation de la République",
        ],
        answer: 1,
        explanation:
          "Le roi, déguisé, tente de rejoindre la frontière de l’Est ; il est reconnu et arrêté à **Varennes**. Il apparaît comme un traître, mais l’Assemblée maintient la monarchie constitutionnelle (Constitution de septembre 1791). La confiance est cependant brisée, ce qui prépare la chute du 10 août 1792. La République n’est proclamée que plus d’un an après.",
      },
      {
        id: "2nde-hg-05-ct-4",
        prompt: "Quelle différence existe-t-il entre les élections de l’Assemblée législative (1791) et celles de la Convention (1792) ?",
        choices: [
          "La première est élue au suffrage universel masculin, la seconde au suffrage censitaire",
          "Les femmes votent pour la Convention",
          "Les deux sont désignées par le roi",
          "La première est élue au suffrage censitaire, la seconde au suffrage universel masculin",
        ],
        answer: 3,
        explanation:
          "La Constitution de 1791 distingue citoyens actifs (qui paient un cens) et passifs : c’est le **suffrage censitaire**. La **Convention**, élue en septembre 1792 après la chute du roi, l’est au **suffrage universel masculin** (indirect), première expérience de ce type en France. Les femmes restent exclues.",
      },
      {
        id: "2nde-hg-05-ct-5",
        prompt: "Quelle mesure de la Convention montagnarde concerne les **colonies** le 4 février 1794 ?",
        choices: [
          "L’abolition de l’esclavage dans toutes les colonies françaises",
          "La vente de Saint-Domingue à l’Espagne",
          "Le rétablissement de la traite négrière",
          "L’indépendance d’Haïti",
        ],
        answer: 0,
        explanation:
          "Le **16 pluviôse an II** (4 février 1794), la Convention abolit l’**esclavage**, après l’insurrection des esclaves de Saint-Domingue (1791) et les décisions de Sonthonax (1793). Bonaparte le rétablit en **1802** ; il ne sera définitivement aboli qu’en **1848**. L’indépendance d’Haïti date de 1804.",
      },
      {
        id: "2nde-hg-05-ct-6",
        prompt: "Laquelle de ces créations n’est **pas** l’œuvre de Bonaparte sous le Consulat ?",
        choices: ["Les préfets", "La Banque de France", "Les départements", "Le Concordat"],
        answer: 2,
        explanation:
          "Les **départements** sont créés par l’Assemblée constituante en **1790**. Bonaparte crée les **préfets** (1800) pour les administrer, la **Banque de France** (1800) et signe le **Concordat** (1801). Il s’appuie donc sur des structures révolutionnaires tout en centralisant le pouvoir.",
      },
      {
        id: "2nde-hg-05-ct-7",
        prompt: "En quoi le **Code civil** de 1804 est-il à la fois un héritage de la Révolution et un texte conservateur ?",
        choices: [
          "Il rétablit les privilèges mais accorde le droit de vote aux femmes",
          "Il consacre l’égalité devant la loi et la propriété, mais place la femme mariée sous l’autorité de son mari",
          "Il abolit la propriété privée mais maintient la noblesse",
          "Il instaure la séparation des Églises et de l’État mais rétablit la monarchie absolue",
        ],
        answer: 1,
        explanation:
          "Le **Code civil** reprend les acquis de 1789 : égalité civile, liberté individuelle, liberté du travail, **propriété**, mariage civil et divorce (restreint). Mais il est conservateur sur la famille : la femme mariée est juridiquement **incapable** et doit obéissance à son mari ; le père a une forte autorité sur les enfants. La séparation des Églises et de l’État date de 1905.",
      },
      {
        id: "2nde-hg-05-ct-8",
        prompt: "Pourquoi la domination napoléonienne suscite-t-elle des **résistances** en Europe, notamment en Espagne à partir de 1808 ?",
        choices: [
          "Parce que Napoléon y rétablit les droits féodaux",
          "Parce que les peuples refusent le Code civil qui les prive de tout droit",
          "Parce que l’Espagne est alliée à la Russie depuis 1789",
          "Parce que l’occupation (impôts, conscription, pillages, imposition de Joseph Bonaparte comme roi) heurte le sentiment national et religieux",
        ],
        answer: 3,
        explanation:
          "En 1808, Napoléon impose son frère **Joseph** sur le trône d’Espagne. Le soulèvement du 2 mai 1808 à Madrid, réprimé le 3 mai (peint par Goya), ouvre une guérilla soutenue par le clergé et les Britanniques. Partout, la domination française (impôts, conscription, réquisitions) éveille des **sentiments nationaux** — alors même que Napoléon supprime les droits féodaux et diffuse le Code civil.",
      },
    ],
    homework: [
      {
        id: "2nde-hg-05-hw-1",
        prompt: "Classe ces régimes dans l’ordre : Directoire, monarchie constitutionnelle, Consulat, Convention.",
        choices: [
          "Convention ; monarchie constitutionnelle ; Directoire ; Consulat",
          "Monarchie constitutionnelle ; Convention ; Directoire ; Consulat",
          "Monarchie constitutionnelle ; Directoire ; Convention ; Consulat",
          "Consulat ; Convention ; Directoire ; monarchie constitutionnelle",
        ],
        answer: 1,
        explanation: "La **monarchie constitutionnelle** est fondée par la Constitution de 1791, la **Convention** gouverne de 1792 à 1795, le **Directoire** de 1795 à 1799 et le **Consulat** commence après le 18 brumaire (novembre 1799). L’Empire suit en 1804.",
      },
      {
        id: "2nde-hg-05-hw-2",
        prompt: "Pourquoi l’article 3 de la DDHC est-il une rupture avec l’Ancien Régime ?",
        choices: [
          "Il rétablit les privilèges",
          "Il donne la souveraineté au roi",
          "Il place la souveraineté dans la nation, et non plus en Dieu et dans le roi",
          "Il abolit l’esclavage",
        ],
        answer: 2,
        explanation: "L’article 3 affirme que « le principe de toute souveraineté réside essentiellement dans la Nation ». Le pouvoir ne vient plus de Dieu par le roi : c’est la condamnation de la monarchie absolue de **droit divin**.",
      },
      {
        id: "2nde-hg-05-hw-3",
        prompt: "Quel enchaînement résume l’histoire de Saint-Domingue entre 1791 et 1804 ?",
        choices: [
          "Insurrection des esclaves → abolition (1793-1794) → rétablissement de l’esclavage et expédition de Bonaparte (1802) → indépendance d’Haïti (1804)",
          "Abolition (1791) → insurrection (1802) → indépendance (1794)",
          "Indépendance (1791) → rétablissement de l’esclavage (1794) → abolition (1804)",
          "Expédition de Bonaparte (1791) → insurrection (1794) → Toussaint Louverture président de la France",
        ],
        answer: 0,
        explanation: "L’insurrection des esclaves éclate en **août 1791** ; l’émancipation est proclamée sur place en 1793 puis étendue à toutes les colonies le **4 février 1794**. En **1802**, Bonaparte rétablit l’esclavage et envoie une expédition ; Saint-Domingue proclame son indépendance sous le nom d’**Haïti** le 1er janvier **1804**.",
      },
      {
        id: "2nde-hg-05-hw-4",
        prompt: "Pourquoi dit-on que Napoléon est à la fois **héritier** et **fossoyeur** de la Révolution ?",
        choices: [
          "Parce qu’il rétablit la monarchie absolue et les privilèges",
          "Parce qu’il conserve l’égalité civile mais supprime les libertés politiques",
          "Parce qu’il abolit l’esclavage puis la Bastille",
          "Parce qu’il refuse le Code civil",
        ],
        answer: 1,
        explanation: "Napoléon fixe dans le **Code civil** l’égalité devant la loi et la fin des privilèges : il est héritier de 1789. Mais il impose un régime **autoritaire** (censure, police, plébiscites, pouvoir héréditaire) qui supprime les libertés politiques : il en est aussi le fossoyeur.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 6 ─────────────────────────────
  {
    id: "2nde-hg-06",
    title: "Géographie — Sociétés et environnements : des équilibres fragiles (risques, ressources)",
    summary:
      "Les sociétés exploitent des ressources et s’exposent à des risques dans des environnements qu’elles transforment : comprendre ces interactions est la condition d’un développement durable face au changement climatique.",
    objectives: [
      "Je sais définir environnement, ressource, risque, aléa et vulnérabilité.",
      "Je sais expliquer pourquoi un même aléa n’a pas les mêmes conséquences selon les sociétés.",
      "Je sais montrer comment la gestion des ressources (eau, énergie) peut créer des tensions.",
      "Je sais présenter les enjeux du changement climatique et du développement durable.",
    ],
    sections: [
      {
        title: "Des sociétés dans leurs environnements",
        body: [
          "En géographie, l’**environnement** désigne l’ensemble des éléments naturels (relief, climat, sols, eau, êtres vivants) et des éléments transformés par l’homme, avec lesquels une société est en interaction. Il n’existe presque plus de milieu « vierge » : forêts exploitées, cours d’eau aménagés, sols cultivés, littoraux urbanisés. Les sociétés **transforment** l’environnement autant qu’elles en dépendent.",
          "Une **ressource** est un élément que les sociétés jugent utile et qu’elles ont les moyens techniques et économiques d’exploiter : eau, sols, forêts, minerais, hydrocarbures, mais aussi paysages pour le tourisme. Une ressource est donc **construite** : le pétrole n’est devenu une ressource majeure qu’avec le moteur à explosion au XIXe-XXe siècle. On distingue les ressources **renouvelables** (soleil, vent, eau, biomasse si elle est bien gérée) et **non renouvelables** (pétrole, gaz, charbon, minerais), dont les stocks s’épuisent à l’échelle humaine.",
          "Les activités humaines exercent des **pressions** croissantes sur les milieux : déforestation (Amazonie, Asie du Sud-Est), érosion de la **biodiversité**, pollution de l’air et des eaux, artificialisation des sols. Le cas de la **mer d’Aral**, en Asie centrale, est emblématique : à partir des années 1960, les fleuves qui l’alimentaient (Amou-Daria et Syr-Daria) ont été détournés pour irriguer le coton soviétique ; la mer a perdu l’essentiel de sa surface, avec des effets sanitaires et économiques graves.",
          "La prise de conscience de ces enjeux conduit à l’idée de **développement durable**, défini par le **rapport Brundtland** (**1987**) comme « un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs ». Il repose sur trois piliers : **économique**, **social** et **environnemental**. Le **sommet de la Terre de Rio** (**1992**) l’a popularisé.",
        ],
        keyPoints: [
          "**Environnement** : ensemble des éléments naturels et transformés avec lesquels une société interagit.",
          "**Ressource** : élément utile qu’une société a les moyens d’exploiter ; renouvelable ou non renouvelable.",
          "**Biodiversité** : diversité des espèces vivantes, des gènes et des écosystèmes.",
          "**Développement durable** (rapport Brundtland, 1987) : concilier économie, société et environnement pour les générations présentes et futures.",
        ],
        formulas: [
          "1987 → rapport Brundtland (définition du développement durable)",
          "1992 → sommet de la Terre de Rio",
          "Développement durable = économique + social + environnemental",
        ],
        example: {
          title: "Étude de cas : l’assèchement de la mer d’Aral",
          steps: [
            "Situation : lac salé d’Asie centrale, entre Kazakhstan et Ouzbékistan, autrefois l’un des plus grands lacs du monde.",
            "Cause : à partir des années 1960, l’URSS détourne l’Amou-Daria et le Syr-Daria pour irriguer des millions d’hectares de coton.",
            "Conséquences environnementales : la mer recule de plusieurs dizaines de kilomètres, se fragmente, devient très salée ; tempêtes de sel et de pesticides.",
            "Conséquences humaines : disparition de la pêche, ports abandonnés (Mouïnak), problèmes respiratoires et sanitaires.",
            "Réponse : le barrage de Kokaral (2005) a permis de faire remonter la « petite Aral » au Kazakhstan ; la grande Aral reste très dégradée.",
          ],
        },
        figure: {
          type: "flow",
          title: "L’assèchement de la mer d’Aral : un enchaînement de causes et de conséquences",
          steps: [
            {
              label: "Choix politique et économique",
              detail: "Années 1960 : l’URSS veut développer le coton",
            },
            {
              label: "Détournement des fleuves",
              detail: "L’Amou-Daria et le Syr-Daria irriguent des millions d’hectares",
            },
            {
              label: "Recul de la mer",
              detail: "La mer se fragmente et devient très salée",
            },
            {
              label: "Conséquences humaines",
              detail: "Fin de la pêche, ports abandonnés, problèmes de santé",
            },
            {
              label: "Réponse partielle",
              detail: "Barrage de Kokaral (2005) : la « petite Aral » remonte",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-06-s1-p1",
            prompt: "Pourquoi dit-on qu’une ressource est **construite** ?",
            choices: [
              "Parce qu’elle est fabriquée en usine",
              "Parce qu’elle ne devient ressource que lorsqu’une société la juge utile et a les moyens de l’exploiter",
              "Parce qu’elle est toujours renouvelable",
              "Parce qu’elle appartient à l’État",
            ],
            answer: 1,
            explanation: "Un élément naturel ne devient une **ressource** que si une société en a besoin et sait l’exploiter. Le pétrole, par exemple, n’est devenu une ressource majeure qu’avec le moteur à explosion aux XIXe-XXe siècles.",
          },
          {
            id: "2nde-hg-06-s1-p2",
            prompt: "Laquelle de ces ressources est **non renouvelable** à l’échelle humaine ?",
            choices: ["Le vent", "Le soleil", "Le gaz naturel", "La biomasse bien gérée"],
            answer: 2,
            explanation: "Le **gaz naturel**, comme le pétrole, le charbon et les minerais, s’est formé sur des millions d’années : ses stocks s’épuisent à l’échelle humaine. Le soleil, le vent et la biomasse bien gérée sont des ressources renouvelables.",
          },
          {
            id: "2nde-hg-06-s1-p3",
            prompt: "Quel document définit le **développement durable** en **1987** ?",
            choices: [
              "Le rapport Brundtland",
              "L’accord de Paris",
              "Le protocole de Kyoto",
              "La Convention de Genève",
            ],
            answer: 0,
            explanation: "Le **rapport Brundtland** (1987) définit le développement durable comme un développement qui répond aux besoins du présent sans compromettre ceux des générations futures. Le **sommet de la Terre de Rio** (1992) a ensuite popularisé la notion.",
          },
        ],
      },
      {
        title: "Les risques : aléas et vulnérabilités",
        body: [
          "Un **risque** est la possibilité qu’un événement dangereux affecte une société. Il résulte de la rencontre entre un **aléa** (phénomène potentiellement dangereux : séisme, cyclone, inondation, accident industriel…) et des **enjeux** (personnes, biens, activités) plus ou moins **vulnérables**. On résume souvent : **risque = aléa × vulnérabilité**. Un séisme dans un désert inhabité n’est pas une catastrophe ; le même séisme sous une grande ville peut l’être.",
          "On distingue les risques **naturels** (séismes, éruptions volcaniques, cyclones, inondations, sécheresses), **technologiques** (accidents industriels ou nucléaires, comme l’explosion de l’usine **AZF** à Toulouse en **2001** ou l’incendie de **Lubrizol** à Rouen en **2019**) et **sanitaires**. Beaucoup de risques sont **mixtes** : une catastrophe naturelle peut déclencher une catastrophe technologique.",
          "La **vulnérabilité** dépend du niveau de développement, de la densité de population, de la qualité des constructions, de l’information et de la préparation des habitants, de l’efficacité des secours. La **résilience** est la capacité d’une société à faire face à une catastrophe et à se reconstruire. Les pays riches subissent souvent des **dégâts matériels** plus coûteux, les pays pauvres des **pertes humaines** plus lourdes.",
          "Pour réduire les risques, les sociétés misent sur la **prévision** (surveillance sismique, météorologique), la **prévention** (normes parasismiques, plans de prévention des risques interdisant de construire en zone inondable, exercices d’évacuation, information) et la **protection** (digues, bassins de rétention). Le changement climatique accroît l’intensité de certains aléas (vagues de chaleur, sécheresses, pluies extrêmes).",
        ],
        keyPoints: [
          "**Aléa** : phénomène naturel ou technologique potentiellement dangereux.",
          "**Vulnérabilité** : fragilité d’une société face à un aléa (exposition, préparation, moyens).",
          "**Risque = aléa × vulnérabilité** (ou aléa × enjeux exposés).",
          "**Résilience** : capacité d’une société à surmonter une catastrophe et à se reconstruire.",
          "**Prévention** : mesures prises en amont pour limiter les effets (normes, zonage, information).",
        ],
        formulas: ["Risque = aléa × vulnérabilité", "Réduire le risque = prévision + prévention + protection"],
        example: {
          title: "Étude de cas : comparer deux séismes, Haïti (2010) et Japon (2011)",
          steps: [
            "Haïti, **12 janvier 2010** : séisme de magnitude 7,0 près de Port-au-Prince ; plus de 200 000 morts, bâtiments non parasismiques, État et secours désorganisés.",
            "Japon (Tohoku), **11 mars 2011** : séisme de magnitude 9,0-9,1, l’un des plus puissants jamais mesurés, suivi d’un tsunami ; environ 18 000 morts et disparus.",
            "Comparer l’aléa : le séisme japonais est des milliers de fois plus énergétique que celui d’Haïti.",
            "Comparer la vulnérabilité : au Japon, normes parasismiques et exercices limitent les morts dus aux secousses ; la plupart des victimes sont causées par le tsunami. En Haïti, pauvreté, constructions fragiles et absence de préparation expliquent l’ampleur du bilan.",
            "Risque mixte : au Japon, le tsunami provoque l’accident nucléaire de **Fukushima Daiichi**, catastrophe technologique majeure.",
            "Conclusion : la vulnérabilité, plus que l’aléa, explique la gravité d’une catastrophe ; même un pays riche et préparé reste exposé.",
          ],
        },
        figure: {
          type: "table",
          title: "Deux séismes, deux bilans : Haïti (2010) et Japon (2011)",
          headers: ["Critère", "Haïti (12 janvier 2010)", "Japon (11 mars 2011)"],
          rows: [
            ["Magnitude", "7,0", "9,0-9,1"],
            ["Bilan humain", "Plus de 200 000 morts", "Environ 18 000 morts et disparus"],
            [
              "Principale cause des victimes",
              "Effondrement de bâtiments non parasismiques",
              "Le tsunami qui suit le séisme",
            ],
            [
              "Préparation",
              "Faible : pauvreté, État et secours désorganisés",
              "Forte : normes parasismiques, exercices réguliers",
            ],
            [
              "Conséquence particulière",
              "Reconstruction longue et difficile",
              "Accident nucléaire de Fukushima Daiichi (risque mixte)",
            ],
          ],
        },
        practice: [
          {
            id: "2nde-hg-06-s2-p1",
            prompt: "Quelle formule résume la notion de **risque** ?",
            choices: [
              "Risque = aléa + prévention",
              "Risque = catastrophe − résilience",
              "Risque = prévision × protection",
              "Risque = aléa × vulnérabilité",
            ],
            answer: 3,
            explanation: "Un risque naît de la rencontre entre un **aléa** (phénomène dangereux) et des **enjeux vulnérables** (personnes, biens, activités). Sans population exposée, un séisme dans un désert n’est pas une catastrophe.",
          },
          {
            id: "2nde-hg-06-s2-p2",
            prompt: "Qu’est-ce que la **résilience** ?",
            choices: [
              "La capacité d’une société à faire face à une catastrophe et à se reconstruire",
              "L’intensité d’un séisme",
              "Une digue de protection",
              "L’interdiction de construire en zone inondable",
            ],
            answer: 0,
            explanation: "La **résilience** est la capacité d’une société à surmonter une catastrophe et à se reconstruire. Elle dépend des moyens financiers, de l’organisation des secours et de la préparation des habitants.",
          },
          {
            id: "2nde-hg-06-s2-p3",
            prompt: "À quelle catégorie appartient l’explosion de l’usine **AZF** à Toulouse en **2001** ?",
            choices: ["Risque naturel", "Risque technologique", "Risque sanitaire", "Risque climatique"],
            answer: 1,
            explanation: "L’explosion de l’usine chimique **AZF** est un accident industriel : c’est un **risque technologique**, comme l’incendie de Lubrizol à Rouen en 2019. Un risque naturel provient d’un phénomène comme un séisme ou un cyclone.",
          },
        ],
      },
      {
        title: "Ressources sous tension et changement climatique",
        body: [
          "L’**eau douce** est une ressource vitale mais inégalement répartie. On parle de **stress hydrique** lorsque les ressources disponibles sont insuffisantes par rapport aux besoins (moins de 1 700 m³ par habitant et par an selon l’indicateur de Falkenmark). L’agriculture irriguée consomme environ **70 %** de l’eau prélevée dans le monde. Le partage des fleuves transfrontaliers peut créer des tensions : le **Grand barrage de la Renaissance** éthiopien (GERD) sur le Nil Bleu inquiète l’Égypte, très dépendante du Nil.",
          "L’**énergie** est au cœur du développement. Le **mix énergétique** mondial (répartition des sources d’énergie utilisées) reste dominé par les **énergies fossiles** (pétrole, charbon, gaz : environ 80 % de l’énergie primaire), dont la combustion émet du CO₂. La **transition énergétique** vise à passer à des énergies **décarbonées** (renouvelables, nucléaire) et à réduire la consommation (sobriété, efficacité).",
          "Le **changement climatique** actuel est principalement dû aux émissions humaines de **gaz à effet de serre** (CO₂, méthane). Il est étudié par le **GIEC** (Groupe d’experts intergouvernemental sur l’évolution du climat), créé en **1988**. Ses effets : hausse des températures, fonte des glaciers, élévation du niveau des mers, multiplication des événements extrêmes. Les pays les plus pauvres et les petits États insulaires (Tuvalu, Maldives) sont parmi les plus vulnérables, alors qu’ils émettent peu.",
          "Les réponses se jouent à plusieurs **échelles**. À l’échelle mondiale, l’**accord de Paris** (**COP21**, **2015**) vise à limiter le réchauffement « nettement en dessous de 2 °C » par rapport à l’ère préindustrielle, en poursuivant les efforts pour le limiter à **1,5 °C**. Les États adoptent des politiques nationales ; les villes et territoires développent transports collectifs, rénovation thermique ou adaptation (végétalisation contre les îlots de chaleur). On distingue l’**atténuation** (réduire les émissions) et l’**adaptation** (s’ajuster aux effets).",
        ],
        keyPoints: [
          "**Stress hydrique** : situation où la demande en eau dépasse les ressources disponibles.",
          "**Mix énergétique** : répartition des différentes sources d’énergie consommées par un territoire.",
          "**Transition énergétique** : passage d’un système fondé sur les énergies fossiles à un système plus sobre et décarboné.",
          "**GIEC** (créé en **1988**) ; **accord de Paris** (**2015**) : objectif « nettement en dessous de 2 °C », si possible 1,5 °C.",
          "**Atténuation** (réduire les causes) / **adaptation** (réduire les effets).",
        ],
        formulas: [
          "1988 → création du GIEC",
          "1997 → protocole de Kyoto",
          "2015 → accord de Paris (COP21)",
          "≈ 70 % de l’eau prélevée dans le monde → agriculture",
        ],
        example: {
          title: "Méthode : construire un schéma des tensions autour du Nil",
          steps: [
            "Placer le fleuve et ses deux branches : Nil Blanc (lac Victoria) et Nil Bleu (Éthiopie), qui se rejoignent à Khartoum (Soudan).",
            "Identifier les acteurs : Éthiopie (amont, besoin d’électricité), Soudan (milieu), Égypte (aval, plus de 100 millions d’habitants dépendant presque entièrement du Nil).",
            "Localiser les aménagements : barrage d’Assouan (Égypte, 1970), Grand barrage de la Renaissance (Éthiopie, remplissage depuis 2020).",
            "Représenter les tensions par des flèches et pictogrammes : crainte d’une baisse du débit en aval, négociations difficiles sur le rythme de remplissage.",
            "Rédiger une légende : la ressource / les usages / les tensions et tentatives de coopération.",
          ],
        },
        figure: {
          type: "figures",
          title: "Ressources et climat : les chiffres clés",
          items: [
            {
              value: "≈ 70 %",
              label: "de l’eau prélevée dans le monde sert à l’agriculture",
            },
            {
              value: "≈ 80 %",
              label: "de l’énergie primaire mondiale vient des énergies fossiles",
            },
            {
              value: "1 700 m³",
              label: "par habitant et par an : seuil de stress hydrique (Falkenmark)",
            },
            {
              value: "1,5 °C",
              label: "objectif de réchauffement maximal visé par l’accord de Paris (2015)",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-06-s3-p1",
            prompt: "Végétaliser une ville pour lutter contre les îlots de chaleur relève de :",
            choices: ["l’atténuation", "la prévision", "l’adaptation", "la transition démographique"],
            answer: 2,
            explanation: "L’**adaptation** consiste à s’ajuster aux effets du changement climatique, par exemple en végétalisant les villes contre les fortes chaleurs. L’**atténuation**, elle, vise à réduire les émissions de gaz à effet de serre.",
          },
          {
            id: "2nde-hg-06-s3-p2",
            prompt: "Pourquoi le **Grand barrage de la Renaissance** (GERD) crée-t-il des tensions ?",
            choices: [
              "Parce que l’Éthiopie, en amont sur le Nil Bleu, peut réduire le débit dont dépend l’Égypte en aval",
              "Parce qu’il prive l’Éthiopie d’électricité",
              "Parce qu’il est construit sur le Danube",
              "Parce que l’Égypte veut le détruire pour irriguer le Sahara",
            ],
            answer: 0,
            explanation: "Le barrage éthiopien est situé **en amont** sur le Nil Bleu : l’Égypte, **en aval** et presque entièrement dépendante du Nil, craint une baisse du débit, notamment pendant le remplissage. C’est un exemple de tension autour d’un fleuve transfrontalier.",
          },
          {
            id: "2nde-hg-06-s3-p3",
            prompt: "Quel organisme, créé en **1988**, étudie le changement climatique ?",
            choices: ["Le HCR", "Le PNUD", "L’UNESCO", "Le GIEC"],
            answer: 3,
            explanation: "Le **GIEC** (Groupe d’experts intergouvernemental sur l’évolution du climat) est créé en **1988**. Ses rapports établissent que le réchauffement actuel est principalement dû aux émissions humaines de gaz à effet de serre.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-hg-06-ex-1",
        prompt: "Comment définit-on un **aléa** ?",
        choices: [
          "Un phénomène naturel ou technologique potentiellement dangereux",
          "La capacité d’une société à se reconstruire après une catastrophe",
          "L’ensemble des biens et des personnes exposés",
          "Une mesure de prévention contre les inondations",
        ],
        answer: 0,
        explanation:
          "L’**aléa** est le phénomène lui-même (séisme, crue, cyclone, explosion…), indépendamment de ses effets. La capacité à se reconstruire est la **résilience** ; les biens et personnes exposés sont les **enjeux** ; une mesure de prévention vise à réduire la vulnérabilité.",
      },
      {
        id: "2nde-hg-06-ex-2",
        prompt: "Laquelle de ces ressources est **non renouvelable** ?",
        choices: ["Le vent", "Le rayonnement solaire", "Le gaz naturel", "L’énergie des marées"],
        answer: 2,
        explanation:
          "Le **gaz naturel**, comme le pétrole et le charbon, est une énergie **fossile** formée en millions d’années : son stock s’épuise à l’échelle humaine. Le vent, le soleil et les marées sont des énergies renouvelables.",
      },
      {
        id: "2nde-hg-06-ex-3",
        prompt: "Quel document de **1987** donne la définition la plus célèbre du développement durable ?",
        choices: ["L’accord de Paris", "Le protocole de Kyoto", "Le rapport du GIEC", "Le rapport Brundtland"],
        answer: 3,
        explanation:
          "Le **rapport Brundtland** (1987, ONU) définit le développement durable comme un développement qui répond aux besoins du présent sans compromettre ceux des générations futures. Le protocole de Kyoto date de 1997, l’accord de Paris de 2015 ; le GIEC a été créé en 1988.",
      },
      {
        id: "2nde-hg-06-ex-4",
        prompt: "Quelle formule résume la notion de **risque** ?",
        choices: [
          "Risque = ressource × développement",
          "Risque = aléa × vulnérabilité",
          "Risque = population ÷ superficie",
          "Risque = résilience − prévention",
        ],
        answer: 1,
        explanation:
          "Le **risque** naît de la rencontre d’un **aléa** et d’une société **vulnérable** : sans enjeux exposés, il n’y a pas de risque. Population ÷ superficie correspond à la densité.",
      },
      {
        id: "2nde-hg-06-ex-5",
        prompt: "Quelle activité consomme la plus grande part de l’eau douce prélevée dans le monde ?",
        choices: ["L’industrie", "Les usages domestiques", "L’agriculture (irrigation)", "Le tourisme"],
        answer: 2,
        explanation:
          "L’**agriculture**, surtout l’irrigation, représente environ **70 %** des prélèvements mondiaux d’eau douce, loin devant l’industrie (près de 20 %) et les usages domestiques (environ 10 %).",
      },
      {
        id: "2nde-hg-06-ex-6",
        prompt: "Quel accord international de **2015** fixe l’objectif de limiter le réchauffement nettement en dessous de 2 °C ?",
        choices: ["L’accord de Paris (COP21)", "Le sommet de Rio", "Le protocole de Kyoto", "Le rapport Brundtland"],
        answer: 0,
        explanation:
          "L’**accord de Paris**, adopté lors de la **COP21** en décembre 2015, vise à contenir le réchauffement nettement en dessous de 2 °C et à poursuivre les efforts pour 1,5 °C. Le sommet de Rio date de 1992, le protocole de Kyoto de 1997.",
      },
    ],
    test: [
      {
        id: "2nde-hg-06-ct-1",
        prompt: "Le séisme d’Haïti (2010, magnitude 7,0) a fait beaucoup plus de victimes que les secousses du séisme japonais de 2011 (magnitude 9,0-9,1). Quelle est la principale explication ?",
        choices: [
          "L’aléa était plus puissant en Haïti",
          "Le Japon n’est pas situé sur une zone sismique",
          "La vulnérabilité d’Haïti était bien plus forte (constructions fragiles, pauvreté, faible préparation)",
          "Le séisme d’Haïti a eu lieu en mer",
        ],
        answer: 2,
        explanation:
          "L’aléa japonais était bien plus puissant (une échelle logarithmique : 2 degrés de magnitude correspondent à environ 1 000 fois plus d’énergie). C’est la **vulnérabilité** qui explique l’écart : Haïti, pays le plus pauvre des Amériques, avait des bâtiments non parasismiques et peu de moyens de secours, alors que le Japon applique des normes strictes et organise des exercices. Au Japon, l’essentiel des victimes est dû au tsunami.",
      },
      {
        id: "2nde-hg-06-ct-2",
        prompt: "Pourquoi dit-on qu’une ressource est **construite** par les sociétés ?",
        choices: [
          "Parce qu’elle est fabriquée en usine",
          "Parce qu’un élément ne devient ressource que si une société le juge utile et a les moyens de l’exploiter",
          "Parce que toutes les ressources sont renouvelables",
          "Parce qu’elle n’existe que dans les pays développés",
        ],
        answer: 1,
        explanation:
          "Le pétrole existait bien avant le XIXe siècle, mais il n’est devenu une ressource majeure qu’avec les techniques d’extraction et le moteur à explosion. Le lithium est devenu stratégique avec les batteries. Une ressource dépend donc des **besoins**, des **techniques** et des **coûts** d’une époque.",
      },
      {
        id: "2nde-hg-06-ct-3",
        prompt: "L’accident de Fukushima Daiichi (2011) est un exemple de risque **mixte**. Pourquoi ?",
        choices: [
          "Parce qu’il a touché deux pays à la fois",
          "Parce qu’il résulte uniquement d’une erreur humaine",
          "Parce qu’il a été causé par un incendie de forêt",
          "Parce qu’un aléa naturel (séisme puis tsunami) a déclenché une catastrophe technologique (accident nucléaire)",
        ],
        answer: 3,
        explanation:
          "Le **tsunami** du 11 mars 2011 a submergé la centrale, privant les réacteurs de refroidissement et provoquant la fusion de cœurs et des rejets radioactifs. L’enchaînement d’un aléa **naturel** et d’une catastrophe **technologique** définit un risque mixte (on parle aussi de risque « natech »).",
      },
      {
        id: "2nde-hg-06-ct-4",
        prompt: "Quelle mesure relève de l’**adaptation** au changement climatique, et non de l’atténuation ?",
        choices: [
          "Végétaliser les villes pour réduire les îlots de chaleur",
          "Remplacer les centrales à charbon par des éoliennes",
          "Développer le covoiturage",
          "Taxer les émissions de CO₂",
        ],
        answer: 0,
        explanation:
          "L’**adaptation** consiste à réduire les effets d’un changement déjà engagé : **végétaliser les villes** limite les îlots de chaleur lors des canicules. Remplacer le charbon, développer le covoiturage ou taxer le carbone réduisent les émissions : c’est de l’**atténuation**.",
      },
      {
        id: "2nde-hg-06-ct-5",
        prompt: "Pourquoi le Grand barrage de la Renaissance (Éthiopie) suscite-t-il des tensions avec l’Égypte ?",
        choices: [
          "Parce qu’il est construit sur le territoire égyptien sans autorisation",
          "Parce que l’Égypte, située en aval et très dépendante du Nil, craint une baisse du débit disponible",
          "Parce qu’il empêche les navires égyptiens d’accéder à la mer Rouge",
          "Parce qu’il est financé par l’Égypte qui n’en reçoit pas l’électricité",
        ],
        answer: 1,
        explanation:
          "Le barrage est situé sur le **Nil Bleu**, en Éthiopie (amont), qui veut produire de l’électricité. L’**Égypte**, en **aval**, dépend presque entièrement du Nil pour son eau et son agriculture : elle redoute que le remplissage du réservoir réduise le débit. C’est un exemple de tension sur une ressource partagée entre pays amont et aval.",
      },
      {
        id: "2nde-hg-06-ct-6",
        prompt: "Quelle affirmation sur le **mix énergétique** mondial actuel est exacte ?",
        choices: [
          "Il est dominé par le nucléaire",
          "Les renouvelables représentent plus de 80 % de l’énergie consommée",
          "Les énergies fossiles fournissent encore environ 80 % de l’énergie primaire",
          "Le charbon a disparu du mix énergétique mondial",
        ],
        answer: 2,
        explanation:
          "Pétrole, charbon et gaz fournissent encore environ **80 %** de l’énergie primaire mondiale. Le nucléaire ne dépasse pas quelques pourcents à l’échelle mondiale (contrairement à la France pour l’électricité), et le charbon reste massif, notamment en Chine et en Inde. D’où l’enjeu de la **transition énergétique**.",
      },
      {
        id: "2nde-hg-06-ct-7",
        prompt: "Pourquoi les petits États insulaires comme Tuvalu sont-ils parmi les plus vulnérables au changement climatique ?",
        choices: [
          "Parce qu’ils sont les plus gros émetteurs de gaz à effet de serre",
          "Parce qu’ils sont situés dans des zones polaires",
          "Parce qu’ils n’ont pas signé l’accord de Paris",
          "Parce que leur faible altitude les expose à la montée du niveau de la mer et aux tempêtes, avec peu de moyens pour s’adapter",
        ],
        answer: 3,
        explanation:
          "Atolls culminant à quelques mètres, ces États sont menacés par l’**élévation du niveau de la mer**, la salinisation des nappes d’eau douce et les cyclones, alors qu’ils émettent très peu. Ils illustrent une **injustice climatique** et défendent l’objectif de 1,5 °C dans les négociations.",
      },
      {
        id: "2nde-hg-06-ct-8",
        prompt: "Interdire de construire en zone inondable grâce à un plan de prévention des risques relève de…",
        choices: ["la prévention", "la prévision", "la gestion de crise", "l’atténuation du changement climatique"],
        answer: 0,
        explanation:
          "Limiter l’urbanisation des zones exposées réduit les **enjeux** et donc la **vulnérabilité** : c’est de la **prévention**, menée en amont. La **prévision** consiste à anticiper l’aléa (surveillance des cours d’eau, Vigicrues) ; la gestion de crise intervient pendant la catastrophe.",
      },
    ],
    homework: [
      {
        id: "2nde-hg-06-hw-1",
        prompt: "Pourquoi le séisme d’Haïti (2010), moins puissant que celui du Japon (2011), a-t-il fait beaucoup plus de victimes ?",
        choices: [
          "Parce qu’il a été suivi d’un tsunami plus haut",
          "Parce que la vulnérabilité de la société haïtienne était bien plus forte",
          "Parce qu’Haïti est plus peuplé que le Japon",
          "Parce que le Japon n’était pas touché par l’aléa",
        ],
        answer: 1,
        explanation: "L’aléa japonais (magnitude 9,0-9,1) était des milliers de fois plus énergétique que le séisme d’Haïti (7,0). Mais la **vulnérabilité** haïtienne (pauvreté, constructions fragiles, absence de préparation) explique un bilan de plus de 200 000 morts : c’est la vulnérabilité, plus que l’aléa, qui fait la catastrophe.",
      },
      {
        id: "2nde-hg-06-hw-2",
        prompt: "Quelle mesure relève de la **prévention** des risques ?",
        choices: [
          "Une digue construite après une inondation",
          "L’envoi de secours après une catastrophe",
          "Un plan qui interdit de construire en zone inondable",
          "La reconstruction d’un quartier détruit",
        ],
        answer: 2,
        explanation: "La **prévention** regroupe les mesures prises en amont pour limiter les effets d’un aléa : normes parasismiques, zonage interdisant de construire en zone inondable, exercices, information. Les digues relèvent de la **protection**, et les secours de la gestion de crise.",
      },
      {
        id: "2nde-hg-06-hw-3",
        prompt: "Quelle affirmation sur le changement climatique est **exacte** ?",
        choices: [
          "Les pays qui émettent le moins de gaz à effet de serre sont souvent parmi les plus vulnérables",
          "Il touche uniquement les pays riches",
          "Il est sans lien avec les activités humaines",
          "L’accord de Paris vise un réchauffement de 4 °C",
        ],
        answer: 0,
        explanation: "Les pays pauvres et les petits États insulaires comme **Tuvalu** ou les **Maldives** émettent peu mais sont très exposés à la montée des eaux et aux événements extrêmes. L’accord de Paris vise un réchauffement « nettement en dessous de 2 °C », si possible 1,5 °C.",
      },
      {
        id: "2nde-hg-06-hw-4",
        prompt: "Quels sont les trois piliers du développement durable ?",
        choices: [
          "Politique, militaire, religieux",
          "Démographique, culturel, touristique",
          "Local, national, mondial",
          "Économique, social, environnemental",
        ],
        answer: 3,
        explanation: "Le développement durable cherche à concilier l’**économie** (créer des richesses), le **social** (répondre aux besoins de tous) et l’**environnement** (préserver les ressources et les milieux). Ces trois piliers doivent être pensés ensemble, pour les générations présentes et futures.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 7 ─────────────────────────────
  {
    id: "2nde-hg-07",
    title: "Géographie — Territoires, populations et développement (transition démographique, IDH)",
    summary:
      "La population mondiale, passée à 8 milliards en 2022, connaît des dynamiques très contrastées selon l’avancée de la transition démographique, et ces dynamiques sont étroitement liées à des niveaux de développement inégaux mesurés notamment par l’IDH.",
    objectives: [
      "Je sais décrire et expliquer les phases de la transition démographique.",
      "Je sais définir et calculer les principaux indicateurs démographiques (natalité, mortalité, accroissement naturel, ISF).",
      "Je sais définir le développement et expliquer comment se calcule l’IDH.",
      "Je sais comparer des trajectoires démographiques et de développement contrastées (Afrique subsaharienne, Inde, Chine, Japon, Europe).",
    ],
    sections: [
      {
        title: "Une population mondiale en forte croissance : la transition démographique",
        body: [
          "La population mondiale a connu une croissance spectaculaire : environ **1 milliard** d’habitants vers **1800**, **2,5 milliards** en **1950**, **6 milliards** en **1999** et **8 milliards** le **15 novembre 2022** selon l’ONU. Selon les projections des Nations unies, elle pourrait atteindre un maximum d’environ **10,3 milliards** vers le milieu des années 2080, avant de se stabiliser ou de diminuer légèrement. La croissance ralentit donc : c’est l’effet de la **transition démographique**.",
          "La **transition démographique** est le passage d’un régime démographique **traditionnel** (natalité et mortalité élevées, croissance faible) à un régime **moderne** (natalité et mortalité faibles, croissance faible). Dans une **première phase**, la mortalité baisse grâce aux progrès de l’hygiène, de la médecine, de l’alimentation, alors que la natalité reste forte : la population augmente très vite. Dans une **seconde phase**, la natalité baisse à son tour (urbanisation, scolarisation des filles, travail des femmes, contraception, recul de la mortalité infantile) : la croissance ralentit.",
          "Pour mesurer ces évolutions, on utilise plusieurs indicateurs. Le **taux de natalité** et le **taux de mortalité** rapportent le nombre de naissances ou de décès d’une année à la population totale (en ‰). Leur différence donne le **taux d’accroissement naturel**. L’**indice synthétique de fécondité** (ISF) indique le nombre moyen d’enfants par femme : il faut environ **2,1 enfants par femme** dans les pays développés pour assurer le **renouvellement des générations**. L’ISF mondial est aujourd’hui d’environ **2,3**, contre environ 5 en 1950.",
          "Tous les pays ne sont pas au même stade. L’Europe a commencé sa transition au XVIIIe-XIXe siècle (la France dès la fin du XVIIIe siècle) et l’a achevée ; la plupart des pays d’Asie et d’Amérique latine l’ont presque terminée en quelques décennies ; l’**Afrique subsaharienne** est encore en pleine transition, avec des ISF souvent supérieurs à 4 (environ 6 au **Niger**, l’un des plus élevés du monde).",
        ],
        keyPoints: [
          "**Transition démographique** : passage d’une natalité et d’une mortalité élevées à une natalité et une mortalité faibles.",
          "**Taux d’accroissement naturel** = taux de natalité − taux de mortalité.",
          "**ISF** : nombre moyen d’enfants par femme ; **seuil de renouvellement** ≈ 2,1.",
          "**15 novembre 2022** : la population mondiale atteint 8 milliards (ONU).",
        ],
        formulas: [
          "Taux de natalité (‰) = naissances de l’année ÷ population totale × 1 000",
          "Taux de mortalité (‰) = décès de l’année ÷ population totale × 1 000",
          "Taux d’accroissement naturel = natalité − mortalité",
          "≈ 1 milliard (1800) → 2,5 (1950) → 6 (1999) → 8 milliards (2022)",
        ],
        example: {
          title: "Méthode : calculer et interpréter un taux d’accroissement naturel",
          steps: [
            "Données (ordres de grandeur) : au Niger, natalité ≈ 45 ‰ et mortalité ≈ 11 ‰ ; en France, natalité ≈ 10 ‰ et mortalité ≈ 9 ‰.",
            "Calcul pour le Niger : 45 − 11 = 34 ‰, soit environ 3,4 % de croissance naturelle par an.",
            "Calcul pour la France : 10 − 9 = 1 ‰, soit 0,1 % par an : la croissance naturelle est presque nulle.",
            "Interpréter : le Niger est au milieu de la transition (la mortalité a baissé, la natalité reste très forte) ; la France l’a achevée et sa population vieillit.",
            "Conséquence : à ce rythme, la population du Niger double en une vingtaine d’années, ce qui pose des défis majeurs (écoles, emplois, alimentation).",
          ],
        },
        figure: {
          type: "bars",
          title: "La population mondiale depuis 1800",
          caption: "Estimations et projection moyenne de l’ONU (World Population Prospects), valeurs arrondies ; le maximum d’environ 10,3 milliards est attendu vers le milieu des années 2080.",
          unit: "milliards d’habitants",
          data: [
            {
              label: "1800",
              value: 1,
            },
            {
              label: "1950",
              value: 2.5,
            },
            {
              label: "1999",
              value: 6,
            },
            {
              label: "2022",
              value: 8,
            },
            {
              label: "v. 2085 (projection)",
              value: 10.3,
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-07-s1-p1",
            prompt: "Un pays a un taux de natalité de **30 ‰** et un taux de mortalité de **8 ‰**. Quel est son taux d’accroissement naturel ?",
            choices: ["38 ‰", "22 ‰", "3,75 ‰", "8 ‰"],
            answer: 1,
            explanation: "Le taux d’accroissement naturel est la **différence** entre natalité et mortalité : 30 − 8 = **22 ‰**, soit 2,2 % par an. On ne fait ni la somme ni le quotient des deux taux.",
          },
          {
            id: "2nde-hg-07-s1-p2",
            prompt: "Que se passe-t-il pendant la **première phase** de la transition démographique ?",
            choices: [
              "La natalité baisse alors que la mortalité reste forte",
              "La natalité et la mortalité baissent en même temps",
              "La mortalité baisse alors que la natalité reste forte : la population augmente très vite",
              "La population diminue",
            ],
            answer: 2,
            explanation: "Dans la première phase, les progrès de l’hygiène, de la médecine et de l’alimentation font **baisser la mortalité**, alors que la **natalité reste élevée**. L’écart entre les deux provoque une très forte croissance ; la natalité ne baisse qu’ensuite, dans la seconde phase.",
          },
          {
            id: "2nde-hg-07-s1-p3",
            prompt: "Quelle valeur de l’**ISF** assure environ le renouvellement des générations dans les pays développés ?",
            choices: ["2,1 enfants par femme", "1,2 enfant par femme", "4 enfants par femme", "6 enfants par femme"],
            answer: 0,
            explanation: "Il faut environ **2,1 enfants par femme** pour remplacer les deux parents, compte tenu de la mortalité avant l’âge adulte et du léger excédent de naissances masculines. En dessous, la population finit par diminuer sans apport migratoire.",
          },
        ],
      },
      {
        title: "Le développement et ses mesures : du PIB à l’IDH",
        body: [
          "Le **développement** est l’amélioration des conditions de vie d’une population sur les plans économique, social, sanitaire et culturel. Il ne se confond pas avec la **croissance économique**, qui désigne la seule augmentation de la production de richesses, mesurée par le **PIB** (produit intérieur brut). Un pays peut connaître une forte croissance sans que la majorité de sa population en profite.",
          "Pour mesurer le développement de façon plus complète, le **PNUD** (Programme des Nations unies pour le développement) a créé en **1990** l’**indice de développement humain** (**IDH**), conçu par l’économiste pakistanais **Mahbub ul Haq** avec l’Indien **Amartya Sen**. Il combine trois dimensions : la **santé** (espérance de vie à la naissance), l’**éducation** (durée moyenne de scolarisation des adultes et durée attendue pour les enfants) et le **niveau de vie** (revenu national brut par habitant en parité de pouvoir d’achat). Sa valeur est comprise entre **0 et 1**.",
          "L’IDH révèle de fortes **inégalités**. Les pays d’Europe du Nord et de l’Ouest (Suisse, Norvège, Islande…) dépassent **0,95**, alors que plusieurs pays d’Afrique subsaharienne (Niger, Tchad, Soudan du Sud, Somalie) sont autour de **0,4**. L’écart d’espérance de vie entre pays dépasse 25 ans. Ces inégalités existent aussi **à l’intérieur des pays** : entre villes et campagnes, entre régions (en France, entre l’Île-de-France et certains territoires ultramarins comme Mayotte), entre groupes sociaux.",
          "La communauté internationale s’est fixé des objectifs : les **Objectifs du millénaire pour le développement** (OMD, **2000-2015**), puis les **17 Objectifs de développement durable** (**ODD**), adoptés en **2015** pour **2030** (éliminer la pauvreté et la faim, santé, éducation de qualité, égalité femmes-hommes, eau potable, lutte contre le changement climatique…). Démographie et développement sont liés : l’éducation des filles et la baisse de la mortalité infantile font reculer la fécondité.",
        ],
        keyPoints: [
          "**Développement** : amélioration globale des conditions de vie ; à distinguer de la **croissance** (hausse du PIB).",
          "**IDH** (PNUD, **1990**) : santé + éducation + niveau de vie ; valeur entre 0 et 1.",
          "**PPA** (parité de pouvoir d’achat) : conversion qui tient compte des différences de prix entre pays.",
          "**ODD** : 17 objectifs adoptés par l’ONU en **2015**, à atteindre d’ici **2030**.",
        ],
        formulas: [
          "IDH = moyenne (géométrique) de 3 indices : santé, éducation, revenu",
          "0 ≤ IDH ≤ 1 (développement « très élevé » à partir de 0,800)",
          "1990 → création de l’IDH ; 2000 → OMD ; 2015 → ODD (horizon 2030)",
        ],
        example: {
          title: "Étude de cas : comparer la Norvège et le Niger",
          steps: [
            "IDH : environ 0,97 pour la Norvège (parmi les premiers mondiaux), environ 0,4 pour le Niger (parmi les derniers).",
            "Santé : espérance de vie d’environ 83 ans en Norvège contre environ 62-63 ans au Niger ; forte mortalité infantile au Niger.",
            "Éducation : plus de 13 ans de scolarisation moyenne pour les adultes en Norvège, environ 2 ans au Niger, où une majorité d’adultes n’est pas alphabétisée.",
            "Niveau de vie : revenu par habitant (en PPA) plus de 50 fois supérieur en Norvège, grâce notamment au pétrole et à un État-providence redistributif.",
            "Démographie : ISF d’environ 1,4 en Norvège contre environ 6 au Niger ; la faiblesse du développement entretient une forte fécondité, qui elle-même freine le développement.",
          ],
        },
        figure: {
          type: "bars",
          title: "L’IDH de quelques pays",
          caption: "Valeurs de l’IDH pour 2022, publiées par le PNUD (rapport 2023-2024), arrondies au centième.",
          unit: "IDH (entre 0 et 1)",
          data: [
            {
              label: "Suisse",
              value: 0.97,
            },
            {
              label: "Norvège",
              value: 0.97,
            },
            {
              label: "France",
              value: 0.91,
            },
            {
              label: "Chine",
              value: 0.79,
            },
            {
              label: "Inde",
              value: 0.64,
            },
            {
              label: "Niger",
              value: 0.39,
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-07-s2-p1",
            prompt: "Quelles sont les trois dimensions mesurées par l’**IDH** ?",
            choices: [
              "Population, superficie, PIB",
              "Santé, éducation, niveau de vie",
              "Natalité, mortalité, fécondité",
              "Industrie, agriculture, services",
            ],
            answer: 1,
            explanation: "L’**IDH** combine la **santé** (espérance de vie à la naissance), l’**éducation** (durées de scolarisation) et le **niveau de vie** (revenu national brut par habitant en PPA). Il a été créé par le PNUD en 1990.",
          },
          {
            id: "2nde-hg-07-s2-p2",
            prompt: "Pourquoi utilise-t-on la **parité de pouvoir d’achat** (PPA) pour comparer les revenus ?",
            choices: [
              "Pour tenir compte des différences de prix entre pays",
              "Pour convertir toutes les monnaies en euros",
              "Pour exclure les revenus du pétrole",
              "Pour mesurer les inégalités à l’intérieur d’un pays",
            ],
            answer: 0,
            explanation: "Avec un même revenu, on n’achète pas la même quantité de biens partout, car les prix diffèrent. La **PPA** corrige ces écarts de prix pour comparer le pouvoir d’achat réel des habitants des différents pays.",
          },
          {
            id: "2nde-hg-07-s2-p3",
            prompt: "Combien d’**Objectifs de développement durable** l’ONU a-t-elle adoptés en 2015, et pour quelle échéance ?",
            choices: [
              "8 objectifs, pour 2015",
              "10 objectifs, pour 2050",
              "17 objectifs, pour 2030",
              "3 objectifs, pour 2100",
            ],
            answer: 2,
            explanation: "Les **17 ODD** ont été adoptés en **2015** pour être atteints d’ici **2030**. Ils prennent la suite des 8 Objectifs du millénaire pour le développement (2000-2015).",
          },
        ],
      },
      {
        title: "Des trajectoires contrastées : croissance, vieillissement et politiques de population",
        body: [
          "L’**Afrique subsaharienne** est la région du monde où la population croît le plus vite : elle compte environ 1,2 milliard d’habitants et pourrait en rassembler plus de 2 milliards vers 2050. Sa population est **très jeune** (âge médian d’environ 18-19 ans). Ce dynamisme peut être un atout, à condition que l’économie crée suffisamment d’emplois : on parle de **dividende démographique** lorsque la part des actifs augmente par rapport aux personnes dépendantes (enfants et personnes âgées), ce qui favorise la croissance.",
          "L’**Asie** concentre près de 60 % de l’humanité. En **2023**, l’**Inde** (environ 1,43 milliard d’habitants) est devenue, selon l’ONU, le pays le plus peuplé du monde devant la **Chine**. La Chine a mené de **1979-1980 à 2015** une **politique de l’enfant unique**, très contraignante, puis a autorisé deux enfants (2016) et trois (2021). Sa population diminue depuis 2022 et vieillit rapidement : elle risque de « devenir vieille avant d’être riche ».",
          "Le **Japon** et l’**Europe** connaissent un **vieillissement démographique** marqué : faible fécondité (environ 1,2 au Japon, environ 1,6 en France) et allongement de l’espérance de vie. Au Japon, près de **30 %** des habitants ont 65 ans ou plus et la population diminue depuis la fin des années 2000. Le vieillissement pose des défis : financement des retraites et de la santé, manque de main-d’œuvre, adaptation des logements et des territoires (déprise des campagnes). Certains pays y répondent par des **politiques natalistes** ou par l’**immigration**.",
          "Les **politiques de population** visent à agir sur la natalité : **antinatalistes** (Chine, Inde avec ses campagnes de stérilisation des années 1970) ou **natalistes** (allocations familiales, congés parentaux, crèches en France ou dans les pays nordiques). Leur efficacité est variable : la baisse de la fécondité dépend surtout du développement, de l’urbanisation et de la place des femmes dans la société.",
        ],
        keyPoints: [
          "**Dividende démographique** : période où la part des actifs est forte par rapport aux inactifs, favorable à la croissance si les emplois existent.",
          "**Vieillissement démographique** : augmentation de la part des personnes âgées dans la population.",
          "**2023** : l’Inde dépasse la Chine comme pays le plus peuplé (estimation ONU).",
          "**Politique de l’enfant unique** en Chine : 1979-1980 à 2015.",
          "**Politique nataliste / antinataliste** : politique qui encourage / freine les naissances.",
        ],
        formulas: [
          "Inde ≈ 1,43 milliard ; Chine ≈ 1,41 milliard (2023)",
          "Japon : ≈ 30 % de 65 ans et plus ; ISF ≈ 1,2",
          "Afrique subsaharienne : âge médian ≈ 18-19 ans",
        ],
        example: {
          title: "Méthode : lire et comparer deux pyramides des âges (Niger et Japon)",
          steps: [
            "Rappel : une pyramide des âges représente la population par sexe (hommes à gauche, femmes à droite) et par tranche d’âge.",
            "Niger : base très large et sommet très étroit (forme de triangle) → natalité élevée, population très jeune, espérance de vie encore limitée.",
            "Japon : base étroite et sommet large (forme d’urne ou de toupie) → faible natalité, nombreux seniors, longue espérance de vie ; davantage de femmes aux âges élevés.",
            "Relier à la transition : le Niger est au milieu de la transition, le Japon l’a achevée depuis longtemps et entre dans une phase de déclin.",
            "Conclure sur les défis : scolariser et employer les jeunes au Niger ; financer les retraites et compenser le manque d’actifs au Japon.",
          ],
        },
        figure: {
          type: "table",
          title: "Des trajectoires démographiques contrastées",
          headers: ["Espace", "Situation démographique", "Principal défi"],
          rows: [
            [
              "Afrique subsaharienne",
              "Croissance rapide, âge médian ≈ 18-19 ans",
              "Scolariser et créer des emplois pour profiter du dividende démographique",
            ],
            [
              "Inde",
              "Pays le plus peuplé du monde depuis 2023 (≈ 1,43 milliard)",
              "Nourrir, former et employer une population nombreuse",
            ],
            [
              "Chine",
              "Enfant unique de 1979-1980 à 2015, population en baisse depuis 2022",
              "Vieillissement rapide avant d’être riche",
            ],
            ["Japon", "≈ 30 % de 65 ans et plus, ISF ≈ 1,2", "Financer retraites et santé, manque d’actifs"],
          ],
        },
        practice: [
          {
            id: "2nde-hg-07-s3-p1",
            prompt: "Qu’appelle-t-on le **dividende démographique** ?",
            choices: [
              "L’argent versé aux familles nombreuses",
              "La baisse de la population due à l’émigration",
              "Une période où la part des actifs est forte par rapport aux personnes dépendantes, favorable à la croissance si les emplois existent",
              "Le vieillissement de la population",
            ],
            answer: 2,
            explanation: "Quand la natalité commence à baisser, la part des **actifs** augmente par rapport aux enfants et aux personnes âgées. Cette situation peut favoriser la croissance économique, à condition que l’économie crée assez d’emplois.",
          },
          {
            id: "2nde-hg-07-s3-p2",
            prompt: "Selon l’ONU, quel pays devient en **2023** le plus peuplé du monde ?",
            choices: ["La Chine", "Les États-Unis", "Le Nigeria", "L’Inde"],
            answer: 3,
            explanation: "En **2023**, l’**Inde** (environ 1,43 milliard d’habitants) dépasse la **Chine** (environ 1,41 milliard), dont la population diminue depuis 2022. Ce basculement s’explique par une fécondité restée plus élevée en Inde.",
          },
          {
            id: "2nde-hg-07-s3-p3",
            prompt: "Des allocations familiales, des congés parentaux et des crèches relèvent d’une politique :",
            choices: ["nataliste", "antinataliste", "d’enfant unique", "migratoire"],
            answer: 0,
            explanation: "Ces mesures cherchent à **encourager les naissances** : c’est une politique **nataliste**, menée par exemple en France ou dans les pays nordiques. La politique de l’enfant unique en Chine était au contraire antinataliste.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-hg-07-ex-1",
        prompt: "Selon l’ONU, quand la population mondiale a-t-elle atteint **8 milliards** d’habitants ?",
        choices: ["En 1999", "En 2011", "En 2022", "En 2030"],
        answer: 2,
        explanation:
          "L’ONU a retenu symboliquement le **15 novembre 2022**. Le cap des 6 milliards avait été franchi en 1999 et celui des 7 milliards en 2011.",
      },
      {
        id: "2nde-hg-07-ex-2",
        prompt: "Quelle est la formule du **taux d’accroissement naturel** ?",
        choices: [
          "Taux de natalité − taux de mortalité",
          "Taux de natalité + solde migratoire",
          "Nombre d’enfants par femme × 1 000",
          "Population ÷ superficie",
        ],
        answer: 0,
        explanation:
          "Le **taux d’accroissement naturel** est la différence entre le **taux de natalité** et le **taux de mortalité**. Il ne tient pas compte des migrations (le solde migratoire s’y ajoute pour obtenir la croissance totale). Population ÷ superficie correspond à la densité.",
      },
      {
        id: "2nde-hg-07-ex-3",
        prompt: "Quel est le niveau de l’ISF qui assure le **renouvellement des générations** dans un pays développé ?",
        choices: ["1,2 enfant par femme", "1,6 enfant par femme", "3 enfants par femme", "2,1 enfants par femme"],
        answer: 3,
        explanation:
          "Il faut environ **2,1 enfants par femme** : 2 pour remplacer les parents, et un peu plus pour compenser la mortalité avant l’âge adulte et le fait qu’il naît un peu plus de garçons que de filles. Dans les pays où la mortalité infantile est forte, ce seuil est plus élevé.",
      },
      {
        id: "2nde-hg-07-ex-4",
        prompt: "Quelles sont les trois dimensions mesurées par l’**IDH** ?",
        choices: [
          "PIB, exportations, population",
          "Santé, éducation, niveau de vie",
          "Natalité, mortalité, migrations",
          "Emploi, logement, sécurité",
        ],
        answer: 1,
        explanation:
          "L’**IDH** combine la **santé** (espérance de vie à la naissance), l’**éducation** (durées de scolarisation) et le **niveau de vie** (RNB par habitant en PPA). Il a été créé par le PNUD en 1990 pour dépasser une vision purement économique du développement.",
      },
      {
        id: "2nde-hg-07-ex-5",
        prompt: "Quel pays est devenu en **2023** le plus peuplé du monde selon l’ONU ?",
        choices: ["La Chine", "Les États-Unis", "L’Inde", "Le Nigeria"],
        answer: 2,
        explanation:
          "En **2023**, l’**Inde** (environ 1,43 milliard d’habitants) a dépassé la **Chine**, dont la population diminue depuis 2022. Le Nigeria est le pays le plus peuplé d’Afrique, les États-Unis le troisième pays le plus peuplé du monde.",
      },
      {
        id: "2nde-hg-07-ex-6",
        prompt: "Combien d’**Objectifs de développement durable** (ODD) l’ONU a-t-elle adoptés en 2015 ?",
        choices: ["17", "8", "10", "25"],
        answer: 0,
        explanation:
          "Les **ODD**, adoptés en **2015**, sont au nombre de **17**, à atteindre d’ici **2030**. Ils ont succédé aux **8** Objectifs du millénaire pour le développement (2000-2015).",
      },
    ],
    test: [
      {
        id: "2nde-hg-07-ct-1",
        prompt: "Pourquoi la population augmente-t-elle très vite pendant la **première phase** de la transition démographique ?",
        choices: [
          "Parce que la natalité augmente fortement alors que la mortalité reste élevée",
          "Parce que l’immigration devient massive",
          "Parce que la natalité et la mortalité baissent en même temps",
          "Parce que la mortalité baisse alors que la natalité reste élevée",
        ],
        answer: 3,
        explanation:
          "Dans la première phase, les progrès de l’hygiène, de la médecine et de l’alimentation font **reculer la mortalité**, surtout infantile, tandis que les comportements de fécondité restent ceux du régime traditionnel : la **natalité reste forte**. L’écart entre les deux taux crée une forte croissance naturelle (« explosion démographique »).",
      },
      {
        id: "2nde-hg-07-ct-2",
        prompt: "Un pays a un taux de natalité de 38 ‰ et un taux de mortalité de 8 ‰. Quel est son taux d’accroissement naturel ?",
        choices: ["46 ‰ (4,6 %)", "30 ‰ (3 %)", "4,75 ‰", "3 ‰ (0,3 %)"],
        answer: 1,
        explanation:
          "Taux d’accroissement naturel = 38 − 8 = **30 ‰**, soit **3 %** par an. Un tel rythme fait doubler la population en environ 23 ans. Ce profil (natalité forte, mortalité déjà basse) est celui d’un pays au milieu de sa transition démographique.",
      },
      {
        id: "2nde-hg-07-ct-3",
        prompt: "Pourquoi l’IDH est-il considéré comme un meilleur indicateur du développement que le seul PIB par habitant ?",
        choices: [
          "Parce qu’il ne prend pas en compte le revenu",
          "Parce qu’il mesure uniquement la croissance économique",
          "Parce qu’il intègre aussi la santé et l’éducation, qui reflètent les conditions de vie réelles",
          "Parce qu’il est calculé par chaque pays selon ses propres critères",
        ],
        answer: 2,
        explanation:
          "Le PIB par habitant est une moyenne de richesse qui ne dit rien de la santé ni de l’éducation. L’**IDH** ajoute l’**espérance de vie** et la **scolarisation** au revenu : un pays riche en pétrole mais peu scolarisé aura un IDH inférieur à ce que suggère son PIB. L’IDH a cependant lui aussi des limites (il ignore les inégalités internes, sauf dans sa version ajustée).",
      },
      {
        id: "2nde-hg-07-ct-4",
        prompt: "Qu’est-ce que le **dividende démographique** ?",
        choices: [
          "Une période où la part des actifs est élevée par rapport aux dépendants, qui peut favoriser la croissance si les emplois existent",
          "Une aide financière versée aux familles nombreuses",
          "Le bénéfice tiré par les pays riches de l’immigration",
          "La baisse automatique de la pauvreté quand la population augmente",
        ],
        answer: 0,
        explanation:
          "Quand la fécondité baisse, la proportion d’enfants diminue sans que celle des personnes âgées soit encore forte : la part des **actifs** est maximale. Si l’économie crée assez d’emplois et si la population est formée, cela stimule la croissance (cas de la Corée du Sud ou de la Chine). Ce n’est donc pas automatique.",
      },
      {
        id: "2nde-hg-07-ct-5",
        prompt: "Quelle affirmation sur la **Chine** est exacte ?",
        choices: [
          "Elle n’a jamais mené de politique démographique",
          "Sa population augmente plus vite que celle de l’Inde",
          "Elle encourage aujourd’hui la limitation stricte à un enfant",
          "Après la politique de l’enfant unique (1979-1980 à 2015), sa population a commencé à diminuer en 2022 et vieillit rapidement",
        ],
        answer: 3,
        explanation:
          "La Chine a imposé de **1979-1980 à 2015** la **politique de l’enfant unique**, puis autorisé deux enfants (2016) et trois (2021). Malgré cela, la fécondité reste très basse (environ 1). Sa population **diminue depuis 2022** et vieillit vite, d’où la formule : la Chine risque d’être « vieille avant d’être riche ».",
      },
      {
        id: "2nde-hg-07-ct-6",
        prompt: "Quelle forme a la pyramide des âges d’un pays au **vieillissement** avancé comme le Japon ?",
        choices: [
          "Une base très large et un sommet très étroit",
          "Une base étroite et des classes âgées larges",
          "Une forme parfaitement rectangulaire du bas au haut",
          "Une base large avec une encoche au milieu due à l’émigration",
        ],
        answer: 1,
        explanation:
          "Au Japon, la faible natalité depuis des décennies rétrécit la **base**, tandis que la longue espérance de vie élargit le **sommet** : la pyramide prend une forme d’urne. Une base large et un sommet étroit (triangle) caractérisent au contraire un pays jeune comme le Niger.",
      },
      {
        id: "2nde-hg-07-ct-7",
        prompt: "Quel facteur explique le mieux la baisse durable de la fécondité dans un pays ?",
        choices: [
          "La scolarisation des filles, l’urbanisation et la baisse de la mortalité infantile",
          "L’augmentation de la mortalité des adultes",
          "Uniquement les politiques autoritaires de contrôle des naissances",
          "L’arrivée de migrants dans le pays",
        ],
        answer: 0,
        explanation:
          "Les études montrent que la **scolarisation des filles** (mariage et premières naissances plus tardifs, accès à l’emploi), l’**urbanisation** (coût des enfants plus élevé) et le recul de la **mortalité infantile** (moins besoin d’avoir beaucoup d’enfants pour en voir survivre) sont les moteurs principaux. Les politiques autoritaires ont un effet réel mais limité et coûteux humainement.",
      },
      {
        id: "2nde-hg-07-ct-8",
        prompt: "Pourquoi dit-on que les inégalités de développement existent aussi **à l’intérieur** des pays ?",
        choices: [
          "Parce que l’IDH est identique dans tous les pays",
          "Parce que les pays riches n’ont aucune région pauvre",
          "Parce que l’accès aux revenus, à la santé et à l’éducation varie entre régions, entre villes et campagnes et entre groupes sociaux",
          "Parce que le PIB est calculé uniquement pour les capitales",
        ],
        answer: 2,
        explanation:
          "Une moyenne nationale masque des écarts : en France, l’IDH de l’Île-de-France est bien supérieur à celui de **Mayotte** ; en Inde ou en Chine, les écarts entre régions littorales ou urbaines et campagnes de l’intérieur sont considérables. L’analyse doit donc se faire à **plusieurs échelles**.",
      },
    ],
    homework: [
      {
        id: "2nde-hg-07-hw-1",
        prompt: "Une pyramide des âges à base très large et sommet étroit correspond plutôt à :",
        choices: ["Le Japon", "Le Niger", "La Norvège", "La Chine d’aujourd’hui"],
        answer: 1,
        explanation: "Une base large signale une **natalité élevée** et une population jeune, un sommet étroit une espérance de vie encore limitée : c’est le cas du **Niger** (ISF d’environ 6). Le Japon a au contraire une pyramide à base étroite et à sommet large.",
      },
      {
        id: "2nde-hg-07-hw-2",
        prompt: "Pourquoi le PIB ne suffit-il pas à mesurer le **développement** ?",
        choices: [
          "Parce qu’il ne mesure pas la production",
          "Parce qu’il ne concerne que l’agriculture",
          "Parce qu’il mesure la croissance des richesses sans dire si elles améliorent la santé ou l’éducation de toute la population",
          "Parce qu’il est calculé uniquement pour les pays pauvres",
        ],
        answer: 2,
        explanation: "Le **PIB** mesure la production de richesses, donc la **croissance**, mais pas leur répartition ni leurs effets sur la vie des habitants. Un pays peut avoir une forte croissance sans que la majorité en profite : d’où l’IDH, qui intègre santé et éducation.",
      },
      {
        id: "2nde-hg-07-hw-3",
        prompt: "Quel facteur contribue le plus à la **baisse de la fécondité** dans un pays ?",
        choices: [
          "La scolarisation des filles et le recul de la mortalité infantile",
          "La hausse de la mortalité",
          "La baisse de l’urbanisation",
          "L’interdiction du travail des femmes",
        ],
        answer: 0,
        explanation: "Lorsque les filles sont scolarisées, que les femmes travaillent et que la mortalité infantile recule, les familles ont moins d’enfants. La baisse de la fécondité dépend donc surtout du développement, plus que des seules politiques de population.",
      },
      {
        id: "2nde-hg-07-hw-4",
        prompt: "Un pays a un IDH de **0,85**. Comment le qualifier selon le PNUD ?",
        choices: [
          "Développement faible",
          "Développement moyen",
          "Développement élevé, juste sous le seuil du très élevé",
          "Développement très élevé",
        ],
        answer: 3,
        explanation: "Le PNUD classe un pays en développement humain **« très élevé » à partir de 0,800**. Avec 0,85, le pays fait donc partie de cette catégorie, même s’il reste derrière la Suisse ou la Norvège (environ 0,97).",
      },
    ],
  },

  // ───────────────────────────── Chapitre 8 ─────────────────────────────
  {
    id: "2nde-hg-08",
    title: "Géographie — Des mobilités généralisées (migrations, tourisme) et l’Afrique australe",
    summary:
      "Les mobilités humaines — migrations internationales, déplacements forcés et tourisme — se sont généralisées et transforment les territoires, comme le montre l’Afrique australe, espace de migrations régionales et de tourisme international.",
    objectives: [
      "Je sais définir migrant international, réfugié, déplacé interne et touriste.",
      "Je sais décrire les grands flux migratoires mondiaux et leurs causes.",
      "Je sais expliquer l’essor du tourisme international et ses effets sur les territoires.",
      "Je sais présenter les mobilités en Afrique australe, autour de l’Afrique du Sud.",
    ],
    sections: [
      {
        title: "Les migrations internationales : des flux croissants et diversifiés",
        body: [
          "Selon l’ONU, un **migrant international** est une personne qui vit dans un pays autre que celui de sa naissance depuis au moins un an. On en comptait environ **281 millions en 2020**, soit **3,6 %** de la population mondiale : la grande majorité des humains ne migrent donc pas. Les migrations sont **multiples** : de travail, familiales, étudiantes, environnementales, forcées.",
          "Les causes se combinent : **facteurs répulsifs** dans le pays de départ (pauvreté, chômage, guerres, persécutions, catastrophes) et **facteurs attractifs** dans le pays d’arrivée (emplois, salaires, sécurité, réseaux familiaux déjà installés). Contrairement à une idée reçue, une grande partie des migrations se fait **entre pays du Sud** (migrations **Sud-Sud**) et souvent à l’échelle **régionale**, par exemple de l’Asie du Sud vers les pays du Golfe ou entre pays d’Afrique de l’Ouest. Les principaux pays d’accueil sont les **États-Unis**, l’**Allemagne**, l’**Arabie saoudite**, le Royaume-Uni et la France ; les principaux pays de départ sont l’**Inde**, le **Mexique**, la Russie et la Chine.",
          "Les **réfugiés** sont protégés par la **Convention de Genève** de **1951** : est réfugiée une personne qui craint avec raison d’être persécutée du fait de sa « race », de sa religion, de sa nationalité, de son appartenance à un groupe social ou de ses opinions politiques, et qui se trouve hors de son pays. Le **HCR** (Haut-Commissariat des Nations unies pour les réfugiés, créé en **1950**) leur vient en aide. Les **déplacés internes** fuient sans franchir de frontière. Au total, les personnes déplacées de force dépassent aujourd’hui **100 millions** (Syrie, Ukraine, Afghanistan, Soudan…). La plupart sont accueillies dans des pays voisins, souvent en développement (Turquie, Iran, Colombie, Pakistan, Ouganda).",
          "Les migrations ont des effets sur les territoires de départ comme d’arrivée. Les **remises** (transferts d’argent des migrants vers leur famille) dépassent **650 milliards de dollars** par an vers les pays à revenu faible et intermédiaire : l’**Inde** en est le premier bénéficiaire (plus de 120 milliards de dollars). Dans les pays d’accueil, les migrants occupent souvent des emplois peu attractifs (bâtiment, agriculture, aide à la personne) mais aussi qualifiés (médecins, ingénieurs) ; leur intégration et le contrôle des frontières sont des enjeux politiques majeurs (Méditerranée, frontière États-Unis-Mexique).",
        ],
        keyPoints: [
          "**Migrant international** : personne vivant depuis au moins un an hors de son pays de naissance (≈ 281 millions en 2020).",
          "**Réfugié** : personne persécutée ayant fui son pays, protégée par la **Convention de Genève (1951)**.",
          "**Déplacé interne** : personne contrainte de fuir sans quitter son pays.",
          "**Remises** : transferts d’argent des migrants vers leur pays d’origine.",
          "**Migrations Sud-Sud** : flux entre pays en développement, aussi importants que les flux Sud-Nord.",
        ],
        formulas: [
          "≈ 281 millions de migrants internationaux en 2020 (≈ 3,6 % de la population mondiale)",
          "1950 → création du HCR ; 1951 → Convention de Genève",
          "Remises > 650 milliards de dollars par an (Inde 1er bénéficiaire)",
        ],
        example: {
          title: "Méthode : réaliser un schéma des flux migratoires vers les pays du Golfe",
          steps: [
            "Placer les pays d’accueil : Arabie saoudite, Émirats arabes unis, Qatar, Koweït ; dans certains d’entre eux, les étrangers représentent plus de 80 % de la population (Qatar, Émirats).",
            "Placer les pays de départ : Inde, Pakistan, Bangladesh, Népal, Philippines, Égypte.",
            "Tracer des flèches proportionnelles à l’importance des flux de travailleurs, et des flèches de retour pour les remises.",
            "Ajouter les secteurs d’emploi : construction, services domestiques, commerce, santé.",
            "Rédiger une légende et une phrase de bilan : des migrations Sud-Sud de travail, temporaires, parfois dans des conditions difficiles (système de la *kafala* qui lie le travailleur à son employeur).",
          ],
        },
        figure: {
          type: "figures",
          title: "Les migrations internationales en chiffres",
          caption: "Sources : ONU (2020), HCR, Banque mondiale ; ordres de grandeur.",
          items: [
            {
              value: "≈ 281 millions",
              label: "de migrants internationaux en 2020",
            },
            {
              value: "≈ 3,6 %",
              label: "de la population mondiale : la plupart des humains ne migrent pas",
            },
            {
              value: "> 100 millions",
              label: "de personnes déplacées de force (réfugiés et déplacés internes)",
            },
            {
              value: "> 650 milliards $",
              label: "de remises par an vers les pays à revenu faible et intermédiaire",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-08-s1-p1",
            prompt: "Selon l’ONU, qu’est-ce qu’un **migrant international** ?",
            choices: [
              "Une personne qui voyage à l’étranger pour ses vacances",
              "Une personne qui vit depuis au moins un an dans un pays autre que celui de sa naissance",
              "Une personne qui fuit sans quitter son pays",
              "Une personne qui change de région dans son propre pays",
            ],
            answer: 1,
            explanation: "L’ONU définit le **migrant international** comme une personne vivant depuis **au moins un an** hors de son pays de naissance. Un touriste reste moins d’un an, et une personne qui fuit sans franchir de frontière est un **déplacé interne**.",
          },
          {
            id: "2nde-hg-08-s1-p2",
            prompt: "Quel texte protège les **réfugiés** depuis **1951** ?",
            choices: [
              "La Convention de Genève",
              "La Déclaration des droits de l’homme et du citoyen",
              "L’accord de Paris",
              "Le traité de Tordesillas",
            ],
            answer: 0,
            explanation: "La **Convention de Genève** de 1951 définit le réfugié comme une personne qui craint avec raison d’être persécutée et se trouve hors de son pays. Le **HCR**, créé en 1950, est chargé de leur venir en aide.",
          },
          {
            id: "2nde-hg-08-s1-p3",
            prompt: "Quelle affirmation sur les migrations est **exacte** ?",
            choices: [
              "Presque tous les migrants vont du Sud vers le Nord",
              "Les remises des migrants sont négligeables",
              "Les réfugiés sont surtout accueillis par les pays riches",
              "Une grande partie des migrations se fait entre pays du Sud, souvent à l’échelle régionale",
            ],
            answer: 3,
            explanation: "Les migrations **Sud-Sud** sont aussi importantes que les flux Sud-Nord, par exemple de l’Asie du Sud vers les pays du Golfe. De plus, la plupart des réfugiés sont accueillis dans des pays voisins souvent en développement (Turquie, Iran, Colombie, Pakistan, Ouganda).",
          },
        ],
      },
      {
        title: "Le tourisme : une mobilité de masse qui transforme les territoires",
        body: [
          "Le **tourisme** désigne les déplacements de loisirs ou d’affaires hors du lieu de vie habituel pour au moins une nuit et moins d’un an. Il est devenu une mobilité de masse : on comptait environ **25 millions** d’arrivées de touristes internationaux en **1950** et environ **1,46 milliard** en **2019**, selon l’Organisation mondiale du tourisme (**ONU Tourisme**). Après l’effondrement dû à la **pandémie de Covid-19** (environ −70 % en 2020), le tourisme international a retrouvé en 2024 un niveau proche de celui de 2019. Le **tourisme intérieur** (dans son propre pays) reste cependant bien plus important en nombre de voyages.",
          "Cet essor s’explique par la hausse des niveaux de vie, les **congés payés** (1936 en France), le développement des transports (avion, compagnies *low cost*), Internet et l’émergence de **classes moyennes** dans les pays émergents, notamment en Chine. L’**Europe** reste la première région d’accueil ; la **France** est le premier pays au monde pour les arrivées de touristes internationaux (près de **90 millions** en 2019), devant l’Espagne et les États-Unis.",
          "Le tourisme transforme fortement les territoires. Il crée des emplois et des revenus (environ 10 % du PIB mondial en comptant les effets indirects avant la pandémie), finance des infrastructures et valorise le patrimoine (sites inscrits au **patrimoine mondial de l’UNESCO**). Mais il peut aussi provoquer du **surtourisme** (Venise, Barcelone, Dubrovnik), une hausse des prix du logement, des pressions sur l’eau et les milieux, et une forte dépendance économique de certains territoires (petites îles, stations de ski).",
          "Pour limiter ces effets, des acteurs développent un **tourisme durable** : quotas ou taxes d’entrée (Venise depuis 2024), régulation des locations de courte durée, écotourisme associant les populations locales à la protection de la nature. Le tourisme illustre ainsi les liens entre mobilité, développement et environnement.",
        ],
        keyPoints: [
          "**Tourisme** : déplacement de loisirs ou d’affaires d’au moins une nuit et de moins d’un an hors du lieu de vie habituel.",
          "≈ **1,46 milliard** d’arrivées de touristes internationaux en **2019** ; chute d’environ 70 % en 2020 (Covid-19).",
          "**France** : premier pays récepteur du monde.",
          "**Surtourisme** : fréquentation excessive qui dégrade un lieu et la vie de ses habitants.",
          "**Écotourisme** : tourisme fondé sur la découverte et la protection de la nature, au bénéfice des populations locales.",
        ],
        formulas: [
          "1950 → ≈ 25 millions d’arrivées internationales",
          "2019 → ≈ 1,46 milliard d’arrivées internationales",
          "2020 → chute d’environ 70 % (pandémie)",
        ],
        example: {
          title: "Étude de cas : Venise face au surtourisme",
          steps: [
            "Constat : environ 50 000 habitants dans le centre historique (contre plus de 170 000 en 1950) pour plus de 20 millions de visiteurs par an selon les estimations.",
            "Causes : patrimoine exceptionnel (UNESCO), croisières, compagnies aériennes à bas prix, excursionnistes à la journée.",
            "Effets : hausse des loyers liée aux locations touristiques, départ des habitants, commerces tournés vers les touristes, pression sur la lagune.",
            "Réponses : interdiction des grands navires de croisière dans le bassin de Saint-Marc (2021), droit d’entrée pour les visiteurs à la journée certains jours (depuis 2024).",
            "Bilan : le tourisme fait vivre la ville mais menace son fonctionnement ; il faut concilier accueil et vie locale.",
          ],
        },
        figure: {
          type: "bars",
          title: "Arrivées de touristes internationaux dans le monde",
          caption: "Données ONU Tourisme, arrondies : environ 25 millions en 1950, 1,46 milliard en 2019, environ 400 millions en 2020 (Covid-19), retour proche du niveau de 2019 en 2024.",
          unit: "millions d’arrivées",
          data: [
            {
              label: "1950",
              value: 25,
            },
            {
              label: "2019",
              value: 1460,
            },
            {
              label: "2020",
              value: 400,
            },
            {
              label: "2024",
              value: 1400,
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-08-s2-p1",
            prompt: "Quelle est la durée d’un déplacement **touristique** ?",
            choices: [
              "Moins d’une journée",
              "Au moins un an",
              "Au moins une nuit et moins d’un an hors du lieu de vie habituel",
              "Exactement une semaine",
            ],
            answer: 2,
            explanation: "Le **tourisme** désigne un déplacement de loisirs ou d’affaires d’**au moins une nuit** et de **moins d’un an** hors du lieu de vie habituel. Au-delà d’un an, on parle de migration ; sans nuitée, d’excursion.",
          },
          {
            id: "2nde-hg-08-s2-p2",
            prompt: "Quel pays est le **premier au monde** pour les arrivées de touristes internationaux ?",
            choices: ["L’Espagne", "La France", "Les États-Unis", "La Chine"],
            answer: 1,
            explanation: "La **France** est le premier pays récepteur du monde, avec près de **90 millions** d’arrivées internationales en 2019, devant l’Espagne et les États-Unis. L’Europe reste la première région d’accueil.",
          },
          {
            id: "2nde-hg-08-s2-p3",
            prompt: "Qu’est-ce que le **surtourisme** ?",
            choices: [
              "Une fréquentation excessive qui dégrade un lieu et la vie de ses habitants",
              "Le tourisme dans son propre pays",
              "Le tourisme d’affaires",
              "Un tourisme fondé sur la protection de la nature",
            ],
            answer: 0,
            explanation: "Le **surtourisme** désigne une fréquentation excessive qui dégrade un site et la vie de ses habitants : hausse des loyers, départ des résidents, pression sur l’environnement. Venise, Barcelone ou Dubrovnik en sont des exemples.",
          },
        ],
      },
      {
        title: "L’Afrique australe : un espace de mobilités autour de l’Afrique du Sud",
        body: [
          "L’**Afrique australe** regroupe les pays du sud du continent : Afrique du Sud, Namibie, Botswana, Zimbabwe, Mozambique, Zambie, Malawi, Lesotho, Eswatini… Ils coopèrent au sein de la **SADC** (Communauté de développement de l’Afrique australe, créée en **1992**). La région est dominée par l’**Afrique du Sud**, première puissance industrielle et minière du continent, qui exerce une forte **attraction** sur ses voisins.",
          "Ces mobilités ont des racines anciennes. Après la découverte de l’or du **Witwatersrand** (**1886**), autour de **Johannesburg**, les compagnies minières recrutent des travailleurs migrants du Lesotho, du Mozambique, du Malawi ou du Botswana : c’est un système de **migrations de travail** temporaires et contrôlées. Sous l’**apartheid** (**1948-1991**), régime de ségrégation raciale, les Noirs sud-africains eux-mêmes subissent des déplacements forcés vers les « homelands ». Après la libération de **Nelson Mandela** (**1990**) et son élection à la présidence en **1994**, l’Afrique du Sud devient une démocratie et un pôle d’attraction encore plus fort.",
          "Aujourd’hui, l’Afrique du Sud accueille environ **3 millions** de migrants internationaux, venus surtout du **Zimbabwe** (fuyant la crise économique et politique des années 2000), du **Mozambique** et du **Lesotho** (pays totalement **enclavé** dans le territoire sud-africain), mais aussi de RDC ou de Somalie, parfois comme réfugiés. Ils travaillent dans les mines, l’agriculture, la construction, le commerce informel ou les services domestiques. Ces migrations suscitent des tensions : de **violentes émeutes xénophobes** ont eu lieu en **2008** (plus de 60 morts) puis à plusieurs reprises.",
          "L’Afrique australe est aussi une destination **touristique** en croissance : paysages et faune (parc national **Kruger** en Afrique du Sud, delta de l’**Okavango** au Botswana, désert du Namib), **chutes Victoria** entre Zambie et Zimbabwe, villes comme **Le Cap**. La **Coupe du monde de football de 2010**, organisée en Afrique du Sud, a renforcé son image internationale. Le tourisme crée des emplois mais profite inégalement aux populations locales ; l’**écotourisme** et les parcs transfrontaliers (Kavango-Zambezi, entre cinq pays) tentent d’associer développement et protection de la nature.",
        ],
        keyPoints: [
          "**SADC** (1992) : organisation régionale de coopération des pays d’Afrique australe.",
          "**Apartheid** (1948-1991) : politique de ségrégation raciale en Afrique du Sud ; **1994** : Mandela président.",
          "**Pays enclavé** : pays sans accès à la mer (le Lesotho est entièrement entouré par l’Afrique du Sud).",
          "**Xénophobie** : hostilité envers les étrangers (émeutes de 2008 en Afrique du Sud).",
          "Afrique du Sud : ≈ 3 millions de migrants internationaux, principal pôle migratoire de la région.",
        ],
        formulas: [
          "1886 → découverte de l’or du Witwatersrand",
          "1948-1991 → apartheid",
          "1992 → création de la SADC",
          "1994 → Nelson Mandela élu président",
          "2010 → Coupe du monde de football en Afrique du Sud",
        ],
        example: {
          title: "Étude de cas : Johannesburg, carrefour des mobilités de l’Afrique australe",
          steps: [
            "Origine : ville née de la ruée vers l’or de 1886, elle devient le cœur économique du pays (le Gauteng concentre environ un tiers du PIB sud-africain).",
            "Migrations de travail : arrivée de mineurs et d’ouvriers de toute la région, logés pendant l’apartheid dans des foyers et des townships comme **Soweto**.",
            "Aujourd’hui : migrants zimbabwéens, mozambicains, malawites ; commerce informel et marchés transfrontaliers ; « tourisme de shopping » de voisins venus acheter des biens.",
            "Mobilités internationales : l’aéroport O. R. Tambo est le principal hub aérien du continent pour l’Afrique australe ; tourisme d’affaires et mémoriel (musée de l’Apartheid, Soweto).",
            "Tensions : inégalités extrêmes, chômage élevé, épisodes de violences xénophobes ; Johannesburg résume les opportunités et les fractures liées aux mobilités.",
          ],
        },
        figure: {
          type: "timeline",
          title: "L’Afrique du Sud, pôle des mobilités d’Afrique australe",
          events: [
            {
              date: "1886",
              label: "Découverte de l’or du Witwatersrand (Johannesburg)",
            },
            {
              date: "1948",
              label: "Début de l’apartheid",
            },
            {
              date: "1990",
              label: "Libération de Nelson Mandela",
            },
            {
              date: "1991",
              label: "Abolition des dernières lois de l’apartheid",
            },
            {
              date: "1992",
              label: "Création de la SADC",
            },
            {
              date: "1994",
              label: "Nelson Mandela élu président",
            },
            {
              date: "2008",
              label: "Émeutes xénophobes (plus de 60 morts)",
            },
            {
              date: "2010",
              label: "Coupe du monde de football en Afrique du Sud",
            },
          ],
        },
        practice: [
          {
            id: "2nde-hg-08-s3-p1",
            prompt: "Pourquoi le **Lesotho** est-il très lié à l’Afrique du Sud ?",
            choices: [
              "C’est une île au large du Cap",
              "C’est le pays le plus riche de la région",
              "C’est un pays enclavé, entièrement entouré par l’Afrique du Sud",
              "C’est une province sud-africaine",
            ],
            answer: 2,
            explanation: "Le **Lesotho** est un État indépendant **enclavé** : sans accès à la mer, il est entièrement entouré par le territoire sud-africain. Ses habitants partent depuis longtemps travailler en Afrique du Sud, notamment dans les mines.",
          },
          {
            id: "2nde-hg-08-s3-p2",
            prompt: "De quel pays vient une grande partie des migrants arrivés en Afrique du Sud dans les années 2000, fuyant une crise économique et politique ?",
            choices: ["Le Zimbabwe", "Le Maroc", "Madagascar", "L’Éthiopie"],
            answer: 0,
            explanation: "Le **Zimbabwe**, en crise économique et politique dans les années 2000, est l’un des principaux pays d’origine des migrants en Afrique du Sud, avec le **Mozambique** et le **Lesotho**. L’Afrique du Sud compte environ 3 millions de migrants internationaux.",
          },
          {
            id: "2nde-hg-08-s3-p3",
            prompt: "Qu’est-ce que la **SADC**, créée en 1992 ?",
            choices: [
              "Un parc naturel transfrontalier",
              "La compagnie minière du Witwatersrand",
              "Le parti de Nelson Mandela",
              "La Communauté de développement de l’Afrique australe",
            ],
            answer: 3,
            explanation: "La **SADC** (Communauté de développement de l’Afrique australe) est une organisation régionale de coopération créée en **1992**. Elle regroupe les pays du sud du continent, dominés économiquement par l’Afrique du Sud.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-hg-08-ex-1",
        prompt: "Combien de **migrants internationaux** l’ONU comptait-elle environ en **2020** ?",
        choices: ["28 millions", "281 millions", "1,4 milliard", "2,8 milliards"],
        answer: 1,
        explanation:
          "L’ONU estimait à environ **281 millions** le nombre de migrants internationaux en 2020, soit **3,6 %** de la population mondiale. 1,4 milliard correspond plutôt au nombre d’arrivées de touristes internationaux.",
      },
      {
        id: "2nde-hg-08-ex-2",
        prompt: "Quel texte international définit le statut de **réfugié** ?",
        choices: ["L’accord de Paris", "Le traité de Tordesillas", "La Convention de Genève de 1951", "Le Bill of Rights"],
        answer: 2,
        explanation:
          "La **Convention de Genève** (1951) définit le réfugié comme une personne craignant avec raison d’être persécutée et se trouvant hors de son pays. Le **HCR** (créé en 1950) est chargé de la protéger.",
      },
      {
        id: "2nde-hg-08-ex-3",
        prompt: "Que sont les **remises** des migrants ?",
        choices: [
          "Les réductions accordées aux touristes",
          "Les quotas d’immigration fixés par les États",
          "Les retours forcés de migrants dans leur pays",
          "Les transferts d’argent des migrants vers leur famille restée au pays",
        ],
        answer: 3,
        explanation:
          "Les **remises** sont les sommes envoyées par les migrants à leurs proches. Elles dépassent 650 milliards de dollars par an vers les pays à revenu faible et intermédiaire, davantage que l’aide publique au développement ; l’Inde en est le premier bénéficiaire.",
      },
      {
        id: "2nde-hg-08-ex-4",
        prompt: "Quel est le premier pays au monde pour les arrivées de **touristes internationaux** ?",
        choices: ["La France", "Les États-Unis", "La Chine", "L’Italie"],
        answer: 0,
        explanation:
          "La **France** est la première destination mondiale (près de 90 millions d’arrivées en 2019), devant l’Espagne et les États-Unis. Les États-Unis sont en revanche premiers pour les recettes touristiques.",
      },
      {
        id: "2nde-hg-08-ex-5",
        prompt: "Quel pays est entièrement **enclavé** dans le territoire de l’Afrique du Sud ?",
        choices: ["Le Botswana", "Le Zimbabwe", "Le Lesotho", "Le Mozambique"],
        answer: 2,
        explanation:
          "Le **Lesotho** est entièrement entouré par l’Afrique du Sud, dont il dépend fortement (emplois, commerce, eau vendue à l’Afrique du Sud). Le Botswana et le Zimbabwe sont enclavés mais bordent plusieurs pays ; le Mozambique a une large façade sur l’océan Indien.",
      },
      {
        id: "2nde-hg-08-ex-6",
        prompt: "En quelle année **Nelson Mandela** est-il élu président de l’Afrique du Sud ?",
        choices: ["1990", "1994", "1948", "2010"],
        answer: 1,
        explanation:
          "Libéré en **1990**, Nelson Mandela est élu président en **1994**, à l’issue des premières élections multiraciales. 1948 marque le début de l’apartheid, 2010 la Coupe du monde de football en Afrique du Sud.",
      },
    ],
    test: [
      {
        id: "2nde-hg-08-ct-1",
        prompt: "Quelle affirmation sur les migrations internationales est exacte ?",
        choices: [
          "La majorité de la population mondiale est migrante",
          "Les migrations se font presque uniquement du Sud vers le Nord",
          "Les migrations entre pays du Sud sont aussi importantes que les migrations Sud-Nord",
          "Les migrants s’installent surtout dans des pays sans emploi",
        ],
        answer: 2,
        explanation:
          "Avec environ 3,6 % de la population mondiale, les migrants restent minoritaires. Les flux **Sud-Sud** (Asie du Sud vers le Golfe, migrations intra-africaines, Venezuela vers la Colombie) sont aussi importants que les flux Sud-Nord. Les migrants se dirigent vers les territoires qui offrent des emplois et de la sécurité.",
      },
      {
        id: "2nde-hg-08-ct-2",
        prompt: "Quelle est la différence entre un **réfugié** et un **déplacé interne** ?",
        choices: [
          "Le réfugié a franchi une frontière internationale ; le déplacé interne fuit à l’intérieur de son propre pays",
          "Le réfugié migre pour le travail ; le déplacé interne pour le tourisme",
          "Le déplacé interne est protégé par la Convention de Genève, pas le réfugié",
          "Il n’y a aucune différence",
        ],
        answer: 0,
        explanation:
          "Le **réfugié** se trouve hors de son pays et bénéficie de la protection de la **Convention de Genève** (1951). Le **déplacé interne**, qui fuit violences ou catastrophes sans franchir de frontière, reste sous la responsabilité de son propre État, souvent incapable de le protéger. Les déplacés internes sont aujourd’hui plus nombreux que les réfugiés.",
      },
      {
        id: "2nde-hg-08-ct-3",
        prompt: "Pourquoi la plupart des réfugiés sont-ils accueillis dans des **pays voisins** de leur pays d’origine ?",
        choices: [
          "Parce que les pays riches leur interdisent légalement toute demande d’asile",
          "Parce qu’ils fuient dans l’urgence, souvent à pied, et espèrent revenir chez eux rapidement",
          "Parce que les pays voisins sont toujours les plus riches",
          "Parce que la Convention de Genève l’impose",
        ],
        answer: 1,
        explanation:
          "Les réfugiés fuient dans l’**urgence**, avec peu de moyens, et cherchent la sécurité au plus près, en espérant un retour rapide. Ainsi la **Turquie** a accueilli des millions de Syriens, l’**Ouganda** des Sud-Soudanais, la **Colombie** des Vénézuéliens. Les pays voisins, souvent en développement, supportent donc l’essentiel de l’accueil.",
      },
      {
        id: "2nde-hg-08-ct-4",
        prompt: "Quel facteur n’explique **pas** l’essor du tourisme international depuis 1950 ?",
        choices: [
          "La baisse du coût des transports aériens",
          "La hausse des niveaux de vie et des congés payés",
          "L’émergence de classes moyennes en Chine et dans les pays émergents",
          "La fermeture des frontières pendant la pandémie de Covid-19",
        ],
        answer: 3,
        explanation:
          "La **pandémie de Covid-19** a au contraire provoqué l’**effondrement** du tourisme international en 2020 (environ −70 %). L’essor depuis 1950 s’explique par la hausse des revenus, les congés payés, la baisse du coût des transports (avion, *low cost*) et l’arrivée de nouveaux touristes venus des pays émergents.",
      },
      {
        id: "2nde-hg-08-ct-5",
        prompt: "Quelle mesure vise à lutter contre le **surtourisme** à Venise ?",
        choices: [
          "Un droit d’entrée pour les visiteurs à la journée et l’interdiction des grands paquebots dans le bassin de Saint-Marc",
          "La construction d’un aéroport supplémentaire dans la lagune",
          "La suppression des sites classés à l’UNESCO",
          "La gratuité des transports pour les croisiéristes",
        ],
        answer: 0,
        explanation:
          "Venise a interdit les **grands navires de croisière** dans le bassin de Saint-Marc et le canal de la Giudecca (2021) et instauré depuis **2024** un **droit d’entrée** pour les visiteurs à la journée certains jours. Ces mesures visent à réduire la pression touristique et à préserver la vie des habitants.",
      },
      {
        id: "2nde-hg-08-ct-6",
        prompt: "Pourquoi l’Afrique du Sud attire-t-elle de nombreux migrants d’Afrique australe ?",
        choices: [
          "Parce qu’elle est le seul pays de la région à ne pas avoir de frontières",
          "Parce que l’apartheid y est toujours en vigueur",
          "Parce qu’elle est la première puissance économique de la région (mines, industrie, services) et offre davantage d’emplois et de revenus",
          "Parce que la SADC oblige les migrants à s’y installer",
        ],
        answer: 2,
        explanation:
          "L’**Afrique du Sud** est la première économie industrielle et minière d’Afrique : ses mines, son agriculture commerciale, ses villes (Johannesburg, Le Cap, Durban) offrent emplois et revenus plus élevés que dans les pays voisins. Les crises (au Zimbabwe notamment) renforcent ces flux. L’apartheid a pris fin en 1991.",
      },
      {
        id: "2nde-hg-08-ct-7",
        prompt: "Quel lien existe-t-il entre les mines du **Witwatersrand** et les migrations en Afrique australe ?",
        choices: [
          "Les mines ont été fermées en 1886, ce qui a provoqué l’émigration des Sud-Africains",
          "Dès la fin du XIXe siècle, les compagnies minières ont recruté des travailleurs migrants dans toute la région, créant des flux durables",
          "Les mines ont attiré surtout des migrants européens à partir de 1994",
          "Aucun lien : les mines employaient uniquement des machines",
        ],
        answer: 1,
        explanation:
          "Après la découverte de l’or en **1886**, les compagnies minières organisent le recrutement de travailleurs venus du **Lesotho**, du **Mozambique**, du **Malawi** ou du **Botswana**, sous contrat temporaire et logés dans des foyers. Ce système a créé des réseaux migratoires régionaux qui perdurent aujourd’hui.",
      },
      {
        id: "2nde-hg-08-ct-8",
        prompt: "Quelle affirmation sur le tourisme en Afrique australe est la plus juste ?",
        choices: [
          "Il est inexistant en raison de l’absence de patrimoine",
          "Il profite à toute la population de manière égale",
          "Il repose uniquement sur le tourisme balnéaire de masse",
          "Il s’appuie sur la nature et la faune (Kruger, Okavango, chutes Victoria) et crée des emplois, mais ses bénéfices sont inégalement répartis",
        ],
        answer: 3,
        explanation:
          "Le tourisme en Afrique australe repose sur les **safaris** et paysages (parc **Kruger**, delta de l’**Okavango**, **chutes Victoria**, désert du Namib), les villes (Le Cap) et des grands événements (Coupe du monde 2010). Il crée des emplois, mais les revenus profitent surtout aux grands opérateurs et aux zones déjà équipées ; l’**écotourisme** et les parcs transfrontaliers cherchent à mieux associer les populations locales.",
      },
    ],
    homework: [
      {
        id: "2nde-hg-08-hw-1",
        prompt: "Quelle est la différence entre un **réfugié** et un **déplacé interne** ?",
        choices: [
          "Le réfugié a franchi une frontière internationale, le déplacé interne non",
          "Le déplacé interne est protégé par la Convention de Genève, pas le réfugié",
          "Le réfugié migre pour le travail, le déplacé pour les vacances",
          "Il n’y a aucune différence",
        ],
        answer: 0,
        explanation: "Tous deux fuient des dangers, mais le **réfugié** se trouve **hors de son pays** et bénéficie de la protection de la Convention de Genève (1951). Le **déplacé interne** fuit sans franchir de frontière, ce qui le laisse sous la responsabilité de son propre État.",
      },
      {
        id: "2nde-hg-08-hw-2",
        prompt: "D’après la figure sur le tourisme, quelle évolution peut-on décrire ?",
        choices: [
          "Une baisse continue depuis 1950",
          "Une croissance très forte de 1950 à 2019, un effondrement en 2020 puis un retour proche du niveau de 2019",
          "Une stagnation depuis 1950",
          "Une croissance régulière sans aucune rupture",
        ],
        answer: 1,
        explanation: "Les arrivées passent d’environ **25 millions** (1950) à **1,46 milliard** (2019), soit près de 60 fois plus. La pandémie de Covid-19 provoque une chute d’environ 70 % en 2020, avant un retour proche du niveau de 2019 en 2024.",
      },
      {
        id: "2nde-hg-08-hw-3",
        prompt: "Pourquoi l’Afrique du Sud attire-t-elle les migrants d’Afrique australe ?",
        choices: [
          "Parce qu’elle est le pays le moins peuplé de la région",
          "Parce qu’elle n’a pas de frontières terrestres",
          "Parce qu’elle a interdit l’immigration",
          "Parce qu’elle est la première puissance industrielle et minière du continent, avec des réseaux migratoires anciens",
        ],
        answer: 3,
        explanation: "L’Afrique du Sud est la **première puissance industrielle et minière** d’Afrique. Depuis la découverte de l’or en **1886**, les mines recrutent des travailleurs des pays voisins, ce qui a créé des réseaux migratoires toujours actifs.",
      },
      {
        id: "2nde-hg-08-hw-4",
        prompt: "Quel effet du tourisme est **positif** pour un territoire ?",
        choices: [
          "La hausse des loyers liée aux locations touristiques",
          "Le départ des habitants des centres historiques",
          "La création d’emplois et la valorisation du patrimoine",
          "La pression sur l’eau et les milieux",
        ],
        answer: 2,
        explanation: "Le tourisme crée des **emplois** et des revenus, finance des infrastructures et valorise le **patrimoine** (sites UNESCO). Les autres propositions sont des effets négatifs, qui poussent à développer un tourisme durable.",
      },
    ],
  },
];

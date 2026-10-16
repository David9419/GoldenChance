import type { Chapter } from "../../types";

export const chapters: Chapter[] = [
  {
    id: "2nde-svt-01",
    title: "L’organisme pluricellulaire : cellules, tissus, organes",
    summary:
      "Un organisme pluricellulaire est un ensemble organisé de cellules spécialisées, regroupées en tissus puis en organes, qui coopèrent grâce à des échanges permanents.",
    objectives: [
      "Je sais décrire les différents niveaux d’organisation d’un organisme : molécule, cellule, tissu, organe, organisme.",
      "Je sais reconnaître et légender une cellule animale et une cellule végétale observées au microscope.",
      "Je sais expliquer le rôle de la membrane plasmique et de la matrice extracellulaire.",
      "Je sais expliquer comment des cellules spécialisées proviennent d’une même cellule-œuf.",
      "Je sais calculer une taille réelle à partir d’un grossissement ou d’une échelle.",
    ],
    sections: [
      {
        title: "La cellule, unité du vivant",
        body: [
          "Tous les êtres vivants sont constitués de **cellules** : c’est la **théorie cellulaire**, formulée au XIXᵉ siècle (Schleiden, Schwann, Virchow). Une cellule est la plus petite unité capable de réaliser les fonctions du vivant : se nourrir, produire de l’énergie, se reproduire. Toute cellule provient d’une cellule préexistante, par division (mitose).",
          "Une cellule **eucaryote** (animale ou végétale) possède : une **membrane plasmique** qui la délimite, un **cytoplasme** (liquide, le cytosol, contenant des organites) et un **noyau** entouré d’une enveloppe, qui contient l’ADN. Parmi les organites : les **mitochondries** (lieu de la respiration), le réticulum endoplasmique et l’appareil de Golgi (fabrication et transport des protéines). La cellule végétale possède en plus une **paroi** rigide en cellulose, une grande **vacuole** et des **chloroplastes** (lieu de la photosynthèse).",
          "Les bactéries sont des cellules **procaryotes** : elles n’ont pas de noyau, leur ADN est libre dans le cytoplasme. Elles sont en général bien plus petites (1 à 5 µm) que les cellules eucaryotes (10 à 100 µm).",
          "Pour observer les cellules, on utilise le **microscope optique**. Le grossissement total est le produit du grossissement de l’oculaire par celui de l’objectif. Les tailles cellulaires s’expriment en **micromètres** (1 µm = 10⁻⁶ m = 0,001 mm).",
        ],
        keyPoints: [
          "**Cellule** : unité structurale et fonctionnelle du vivant, délimitée par une membrane plasmique.",
          "**Eucaryote** : cellule possédant un noyau ; **procaryote** : cellule sans noyau (bactéries).",
          "Spécificités végétales : paroi en cellulose, chloroplastes, grande vacuole.",
          "**Mitochondrie** : organite de la respiration cellulaire ; **chloroplaste** : organite de la photosynthèse.",
        ],
        formulas: [
          "Grossissement total = grossissement de l’objectif × grossissement de l’oculaire",
          "Taille réelle = taille mesurée sur l’image ÷ grossissement",
        ],
        example: {
          title: "Calculer la taille réelle d’une cellule d’épiderme d’oignon",
          steps: [
            "Sur une photographie, la cellule mesure 30 mm de long ; le grossissement indiqué est ×400.",
            "Taille réelle = 30 mm ÷ 400 = 0,075 mm.",
            "Conversion : 0,075 mm × 1 000 = 75 µm.",
            "Conclusion : la cellule mesure environ 75 µm, une taille typique de cellule végétale.",
          ],
        },
        figure: {
          type: "table",
          title: "Comparer cellules procaryotes et eucaryotes",
          caption: "Les bactéries n’ont pas de noyau ; seules les cellules végétales possèdent chloroplastes et paroi en cellulose.",
          headers: ["Caractéristique", "Procaryote (bactérie)", "Eucaryote animale", "Eucaryote végétale"],
          rows: [
            ["Noyau", "Absent (ADN libre dans le cytoplasme)", "Présent", "Présent"],
            ["Taille habituelle", "1 à 5 µm", "10 à 100 µm", "10 à 100 µm"],
            ["Mitochondries", "Absentes", "Présentes", "Présentes"],
            ["Chloroplastes", "Absents", "Absents", "Présents"],
            ["Paroi", "Présente (non cellulosique)", "Absente", "Présente, en cellulose"],
          ],
        },
        practice: [
          {
            id: "2nde-svt-01-s1-p1",
            prompt: "Quel organite est le lieu de la **respiration cellulaire** ?",
            choices: ["Le chloroplaste", "La mitochondrie", "Le noyau", "La vacuole"],
            answer: 1,
            explanation: "La respiration cellulaire se déroule dans les **mitochondries**, présentes chez les cellules animales comme végétales. Le chloroplaste est l’organite de la photosynthèse et le noyau contient l’ADN.",
          },
          {
            id: "2nde-svt-01-s1-p2",
            prompt: "Sur une photographie au grossissement ×500, une cellule mesure 20 mm. Quelle est sa taille réelle ?",
            choices: ["4 µm", "400 µm", "40 µm", "10 000 µm"],
            answer: 2,
            explanation: "Taille réelle = taille mesurée ÷ grossissement = 20 mm ÷ 500 = 0,04 mm. Comme 1 mm = 1 000 µm, on obtient 0,04 × 1 000 = **40 µm**.",
          },
          {
            id: "2nde-svt-01-s1-p3",
            prompt: "Quelle caractéristique distingue une bactérie d’une cellule eucaryote ?",
            choices: ["L’absence de noyau", "La présence d’une membrane plasmique", "La présence d’ADN"],
            answer: 0,
            explanation: "Une bactérie est une cellule **procaryote** : son ADN est libre dans le cytoplasme, sans noyau. Toutes les cellules, procaryotes ou eucaryotes, possèdent une membrane plasmique et de l’ADN.",
          },
        ],
      },
      {
        title: "Des cellules spécialisées organisées en tissus et en organes",
        body: [
          "Un organisme pluricellulaire présente plusieurs **niveaux d’organisation** emboîtés : molécules → organites → cellules → **tissus** → **organes** → appareils (ou systèmes) → organisme. Un **tissu** est un ensemble de cellules semblables qui assurent une même fonction (tissu musculaire, tissu nerveux, épiderme, tissu conducteur chez les plantes…). Un **organe** associe plusieurs tissus pour remplir une fonction (le cœur, la feuille, l’estomac).",
          "Chez l’être humain, il existe plus de 200 types de cellules différents : neurones, globules rouges, cellules musculaires, cellules intestinales… Pourtant, toutes possèdent **la même information génétique**, car toutes proviennent par mitoses successives d’une même cellule, la **cellule-œuf** (zygote) issue de la fécondation.",
          "La **spécialisation** (ou différenciation) cellulaire s’explique par le fait que chaque type de cellule n’**exprime** qu’une partie de ses gènes. Par exemple, seules les cellules précurseurs des globules rouges expriment fortement le gène de l’hémoglobine. La forme de la cellule est adaptée à sa fonction : le neurone a de longs prolongements pour transmettre des messages, le globule rouge est un disque biconcave sans noyau qui maximise le transport du dioxygène.",
        ],
        keyPoints: [
          "**Tissu** : ensemble de cellules semblables assurant une même fonction.",
          "**Organe** : ensemble de tissus coopérant pour une fonction.",
          "Toutes les cellules d’un individu ont le même ADN ; elles diffèrent par les gènes qu’elles expriment.",
          "**Différenciation** : acquisition par une cellule d’une forme et d’une fonction spécialisées.",
        ],
        example: {
          title: "Décrire l’organisation d’une feuille",
          steps: [
            "Niveau organe : la feuille, qui réalise la photosynthèse.",
            "Niveau tissus : l’épiderme (protection, avec des stomates), le parenchyme chlorophyllien (photosynthèse), les tissus conducteurs (nervures : xylème et phloème).",
            "Niveau cellules : les cellules du parenchyme sont riches en chloroplastes.",
            "Niveau organites : les chloroplastes contiennent la chlorophylle qui capte la lumière.",
            "Conclusion : chaque niveau est adapté à la fonction de l’organe.",
          ],
        },
        figure: {
          type: "flow",
          title: "Les niveaux d’organisation d’un organisme pluricellulaire",
          caption: "Chaque niveau est formé par l’assemblage d’éléments du niveau précédent.",
          steps: [
            {
              label: "Molécules",
              detail: "ADN, protéines, lipides, glucides",
            },
            {
              label: "Organites",
              detail: "Noyau, mitochondries, chloroplastes",
            },
            {
              label: "Cellules",
              detail: "Plus de 200 types chez l’être humain",
            },
            {
              label: "Tissus",
              detail: "Cellules semblables, même fonction",
            },
            {
              label: "Organes",
              detail: "Plusieurs tissus coopérant (cœur, feuille)",
            },
            {
              label: "Organisme",
              detail: "Ensemble d’appareils coordonnés",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-01-s2-p1",
            prompt: "Qu’est-ce qu’un **tissu** ?",
            choices: [
              "Un ensemble d’organes",
              "Un ensemble de cellules semblables assurant une même fonction",
              "Une cellule très spécialisée",
              "Un organite de grande taille",
            ],
            answer: 1,
            explanation: "Un tissu regroupe des cellules semblables qui assurent une même fonction, comme le tissu musculaire ou l’épiderme. Plusieurs tissus associés forment un organe.",
          },
          {
            id: "2nde-svt-01-s2-p2",
            prompt: "Un neurone et un globule rouge d’une même personne sont très différents. Pourquoi ?",
            choices: [
              "Ils proviennent de deux cellules-œufs différentes",
              "Ils ont des chromosomes différents",
              "Ils n’expriment pas les mêmes gènes",
            ],
            answer: 2,
            explanation: "Toutes les cellules d’un individu proviennent de la même cellule-œuf par mitoses et possèdent donc le même ADN. Elles se différencient parce que chaque type cellulaire n’**exprime** qu’une partie de ses gènes.",
          },
          {
            id: "2nde-svt-01-s2-p3",
            prompt: "Quel classement va du niveau le plus petit au plus grand ?",
            choices: ["Organe < tissu < cellule", "Cellule < tissu < organe", "Tissu < cellule < organe", "Cellule < organe < tissu"],
            answer: 1,
            explanation: "Des cellules semblables forment un tissu, et plusieurs tissus forment un organe. L’ordre croissant est donc **cellule < tissu < organe**.",
          },
        ],
      },
      {
        title: "Échanges et cohésion : membrane, matrice et communication",
        body: [
          "La **membrane plasmique** est une double couche de lipides (phospholipides) dans laquelle sont insérées des protéines. Elle sépare l’intérieur de la cellule du milieu extérieur et contrôle les **échanges** : certaines molécules (O₂, CO₂) la traversent librement, d’autres (glucose, ions) passent grâce à des protéines de transport. On dit qu’elle est **semi-perméable**.",
          "Dans un tissu, les cellules sont maintenues entre elles par des **jonctions** et par une **matrice extracellulaire**, un réseau de molécules (collagène chez l’animal, cellulose de la paroi chez les végétaux) qui assure la cohésion et la solidité. L’os, par exemple, possède une matrice très abondante et minéralisée.",
          "Les cellules d’un organisme **communiquent** : par contact direct, par des messages chimiques comme les **hormones**, transportées par le sang jusqu’aux cellules cibles qui possèdent un **récepteur** spécifique, ou par les messages nerveux. Cette coordination permet à l’organisme de fonctionner comme un tout.",
          "Enfin, les cellules échangent avec leur environnement par l’intermédiaire du **milieu intérieur** (sang, lymphe, liquide interstitiel) chez les animaux : il apporte nutriments et O₂ et évacue les déchets comme le CO₂ et l’urée.",
        ],
        keyPoints: [
          "**Membrane plasmique** : bicouche lipidique + protéines, contrôle les échanges.",
          "**Matrice extracellulaire** : assure la cohésion des cellules au sein d’un tissu.",
          "**Hormone** : messager chimique transporté par le sang, agissant sur des cellules cibles munies de récepteurs.",
          "Les cellules d’un organisme pluricellulaire sont interdépendantes.",
        ],
        example: {
          title: "Interpréter une expérience de plasmolyse",
          steps: [
            "On place des cellules d’épiderme d’oignon rouge dans de l’eau très salée.",
            "Observation : la vacuole colorée rétrécit et la membrane se décolle de la paroi.",
            "Interprétation : l’eau sort de la cellule vers le milieu plus concentré (osmose).",
            "Remises dans l’eau pure, les cellules regonflent : la membrane laisse passer l’eau dans les deux sens.",
            "Conclusion : la membrane plasmique contrôle les échanges entre la cellule et son milieu.",
          ],
        },
        practice: [
          {
            id: "2nde-svt-01-s3-p1",
            prompt: "De quoi est constituée la **membrane plasmique** ?",
            choices: [
              "D’une paroi de cellulose",
              "D’une couche de collagène",
              "D’une bicouche de phospholipides dans laquelle sont insérées des protéines",
            ],
            answer: 2,
            explanation: "La membrane plasmique est une double couche de lipides (phospholipides) contenant des protéines, dont certaines assurent le transport de molécules. La cellulose forme la paroi des végétaux et le collagène fait partie de la matrice extracellulaire animale.",
          },
          {
            id: "2nde-svt-01-s3-p2",
            prompt: "On place des cellules d’oignon rouge dans de l’eau très salée. Que se passe-t-il ?",
            choices: [
              "L’eau sort des cellules et la vacuole rétrécit",
              "L’eau entre dans les cellules qui éclatent",
              "Rien, la membrane est imperméable à l’eau",
              "La paroi se dissout",
            ],
            answer: 0,
            explanation: "L’eau traverse la membrane vers le milieu le plus concentré : elle sort de la cellule, la vacuole rétrécit et la membrane se décolle de la paroi (**plasmolyse**). Ce phénomène est réversible si l’on remet les cellules dans l’eau pure.",
          },
          {
            id: "2nde-svt-01-s3-p3",
            prompt: "Pourquoi une hormone n’agit-elle que sur certaines cellules, dites cellules cibles ?",
            choices: [
              "Parce qu’elles sont les seules irriguées par le sang",
              "Parce qu’elles possèdent un récepteur spécifique de cette hormone",
              "Parce qu’elles fabriquent cette hormone",
              "Parce qu’elles n’ont pas de membrane",
            ],
            answer: 1,
            explanation: "L’hormone circule dans le sang et atteint toutes les cellules, mais seules celles qui possèdent un **récepteur** spécifique y répondent. C’est ce qui assure la précision de la communication hormonale.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-svt-01-ex-1",
        prompt: "Quel élément est présent dans une cellule végétale mais **absent** d’une cellule animale ?",
        choices: ["Le noyau", "La membrane plasmique", "La paroi en cellulose", "Les mitochondries"],
        answer: 2,
        explanation:
          "La paroi en cellulose est propre aux cellules végétales (avec les chloroplastes et la grande vacuole). Le noyau, la membrane plasmique et les mitochondries existent dans les deux types de cellules eucaryotes.",
      },
      {
        id: "2nde-svt-01-ex-2",
        prompt: "Qu’est-ce qu’un tissu ?",
        choices: [
          "Un ensemble de cellules semblables assurant une même fonction",
          "Un organite présent dans le cytoplasme",
          "Un ensemble d’organes travaillant ensemble",
          "Une molécule qui maintient les cellules entre elles",
        ],
        answer: 0,
        explanation:
          "Un tissu regroupe des cellules de même type qui réalisent une même fonction (ex. : tissu musculaire). Un ensemble d’organes forme un appareil ; la molécule de cohésion relève de la matrice extracellulaire.",
      },
      {
        id: "2nde-svt-01-ex-3",
        prompt: "Une bactérie est une cellule procaryote. Cela signifie qu’elle :",
        choices: [
          "possède plusieurs noyaux",
          "ne possède pas de noyau",
          "ne possède pas d’ADN",
          "ne possède pas de membrane plasmique",
        ],
        answer: 1,
        explanation:
          "Procaryote signifie « sans noyau » : l’ADN de la bactérie est libre dans le cytoplasme. Elle possède bien de l’ADN et une membrane plasmique, comme toute cellule.",
      },
      {
        id: "2nde-svt-01-ex-4",
        prompt: "Une cellule mesure 45 mm sur une photo prise au grossissement ×500. Quelle est sa taille réelle ?",
        choices: ["9 µm", "22,5 µm", "0,9 µm", "90 µm"],
        answer: 3,
        explanation:
          "Taille réelle = 45 mm ÷ 500 = 0,09 mm. Comme 1 mm = 1 000 µm, 0,09 mm = 90 µm.",
      },
      {
        id: "2nde-svt-01-ex-5",
        prompt: "Dans quel organite se déroule la photosynthèse ?",
        choices: ["Le chloroplaste", "La mitochondrie", "Le noyau", "La vacuole"],
        answer: 0,
        explanation:
          "Le chloroplaste contient la chlorophylle qui capte l’énergie lumineuse : c’est le siège de la photosynthèse. La mitochondrie est le siège de la respiration cellulaire.",
      },
      {
        id: "2nde-svt-01-ex-6",
        prompt: "Pourquoi un neurone et une cellule musculaire d’une même personne sont-ils différents ?",
        choices: [
          "Ils possèdent des ADN différents",
          "Ils proviennent de deux cellules-œufs différentes",
          "Ils n’expriment pas les mêmes gènes",
          "L’un est eucaryote et l’autre procaryote",
        ],
        answer: 2,
        explanation:
          "Toutes les cellules d’un individu proviennent de la même cellule-œuf et ont le même ADN. Leur spécialisation s’explique par l’expression d’une partie seulement de leurs gènes, différente selon le type cellulaire.",
      },
    ],
    test: [
      {
        id: "2nde-svt-01-ct-1",
        prompt:
          "On place des cellules d’épiderme d’oignon rouge dans une solution très salée : leur vacuole se rétracte. Quelle interprétation est correcte ?",
        choices: [
          "Le sel détruit la paroi de la cellule",
          "L’eau sort de la cellule vers le milieu extérieur plus concentré",
          "Le pigment rouge se dissout dans le sel",
          "L’eau entre dans la cellule, qui éclate",
        ],
        answer: 1,
        explanation:
          "Par osmose, l’eau se déplace du milieu le moins concentré (l’intérieur de la cellule) vers le milieu le plus concentré (l’eau salée). La vacuole perd de l’eau et se rétracte : c’est la plasmolyse. La paroi, rigide, reste intacte.",
      },
      {
        id: "2nde-svt-01-ct-2",
        prompt:
          "Un globule rouge humain mature ne possède pas de noyau. Quelle conséquence peut-on en déduire ?",
        choices: [
          "Il ne peut pas se diviser",
          "Il ne peut pas transporter le dioxygène",
          "Il est une cellule procaryote",
          "Il n’a pas de membrane plasmique",
        ],
        answer: 0,
        explanation:
          "Sans noyau, donc sans ADN, le globule rouge ne peut ni se diviser ni produire de nouvelles protéines : il est renouvelé par la moelle osseuse. Il reste une cellule d’origine eucaryote, avec une membrane, et transporte très bien le O₂ grâce à l’hémoglobine.",
      },
      {
        id: "2nde-svt-01-ct-3",
        prompt:
          "On extrait le noyau d’une cellule de peau de grenouille et on l’injecte dans un ovule énucléé : un têtard complet se développe. Que démontre cette expérience ?",
        choices: [
          "Les cellules de peau sont des cellules procaryotes",
          "Seuls les ovules contiennent toute l’information génétique",
          "Le noyau d’une cellule spécialisée contient toute l’information génétique de l’organisme",
          "La peau est le premier organe formé chez l’embryon",
        ],
        answer: 2,
        explanation:
          "Le noyau d’une cellule différenciée a permis de former un organisme entier : il contient donc l’ensemble de l’information génétique. La spécialisation ne résulte pas d’une perte de gènes mais d’une expression sélective.",
      },
      {
        id: "2nde-svt-01-ct-4",
        prompt:
          "Dans un muscle, on observe des fibres musculaires, des vaisseaux sanguins et des fibres nerveuses. Quel niveau d’organisation représente le muscle ?",
        choices: ["Une cellule", "Un tissu", "Un organite", "Un organe"],
        answer: 3,
        explanation:
          "Le muscle associe plusieurs tissus différents (tissu musculaire, tissu sanguin, tissu nerveux, tissu conjonctif) qui coopèrent pour assurer le mouvement : c’est donc un organe.",
      },
      {
        id: "2nde-svt-01-ct-5",
        prompt:
          "Une hormone circule dans tout le sang mais n’agit que sur certaines cellules. Pourquoi ?",
        choices: [
          "Seules les cellules cibles possèdent le récepteur spécifique de cette hormone",
          "L’hormone ne peut pas sortir des vaisseaux sanguins",
          "Les autres cellules détruisent immédiatement l’hormone",
          "L’hormone n’agit que sur les cellules proches de la glande qui la sécrète",
        ],
        answer: 0,
        explanation:
          "Une hormone agit uniquement sur les cellules cibles qui portent un récepteur capable de la reconnaître. Les autres cellules, bien qu’exposées, ne réagissent pas.",
      },
      {
        id: "2nde-svt-01-ct-6",
        prompt:
          "Une bactérie de 2 µm est observée avec un objectif ×100 et un oculaire ×10. Quelle sera la taille de son image ?",
        choices: ["0,2 mm", "2 mm", "20 mm", "200 mm"],
        answer: 1,
        explanation:
          "Grossissement total = 100 × 10 = 1 000. Taille de l’image = 2 µm × 1 000 = 2 000 µm = 2 mm.",
      },
      {
        id: "2nde-svt-01-ct-7",
        prompt:
          "On traite un tissu animal avec une enzyme qui détruit le collagène. Les cellules se séparent les unes des autres. Quelle conclusion en tirer ?",
        choices: [
          "Le collagène est le constituant principal de la membrane plasmique",
          "Le collagène est une molécule du noyau",
          "Le collagène fait partie de la matrice extracellulaire qui assure la cohésion du tissu",
          "Le collagène est indispensable à la photosynthèse",
        ],
        answer: 2,
        explanation:
          "Le collagène est une protéine de la matrice extracellulaire : en le détruisant, on supprime ce qui relie les cellules entre elles, d’où leur dissociation. Cette technique est d’ailleurs utilisée pour mettre des cellules en culture.",
      },
      {
        id: "2nde-svt-01-ct-8",
        prompt:
          "Le glucose ne traverse pas une bicouche lipidique artificielle, mais entre facilement dans une cellule. Quelle hypothèse est la plus pertinente ?",
        choices: [
          "Le glucose est fabriqué dans la cellule",
          "La cellule n’a pas de membrane",
          "Le glucose traverse la paroi en cellulose",
          "Des protéines membranaires de transport permettent l’entrée du glucose",
        ],
        answer: 3,
        explanation:
          "La bicouche lipidique seule est imperméable au glucose. Dans la membrane réelle, des protéines de transport insérées dans la bicouche permettent son passage : la membrane contrôle ainsi sélectivement les échanges.",
      },
    ],
    homework: [
      {
        id: "2nde-svt-01-hw-1",
        prompt: "Un microscope est équipé d’un objectif ×40 et d’un oculaire ×10. Quel est le grossissement total ?",
        choices: ["×50", "×400", "×4", "×4 000"],
        answer: 1,
        explanation: "Le grossissement total est le **produit** des grossissements de l’objectif et de l’oculaire : 40 × 10 = 400. On ne les additionne pas.",
      },
      {
        id: "2nde-svt-01-hw-2",
        prompt: "Parmi ces éléments, lequel est un **organe** ?",
        choices: ["L’épiderme", "Un neurone", "Le cœur", "Un chloroplaste"],
        answer: 2,
        explanation: "Le cœur associe plusieurs tissus (musculaire, nerveux, conjonctif) pour assurer une fonction : c’est un organe. L’épiderme est un tissu, le neurone une cellule et le chloroplaste un organite.",
      },
      {
        id: "2nde-svt-01-hw-3",
        prompt: "Quel élément n’est présent que dans la cellule végétale ?",
        choices: ["La mitochondrie", "Le noyau", "La membrane plasmique", "Le chloroplaste"],
        answer: 3,
        explanation: "Le chloroplaste, lieu de la photosynthèse, est propre aux cellules végétales chlorophylliennes. Mitochondries, noyau et membrane plasmique existent aussi dans les cellules animales.",
      },
      {
        id: "2nde-svt-01-hw-4",
        prompt: "Quel est le rôle principal de la **matrice extracellulaire** ?",
        choices: ["Assurer la cohésion et la solidité des tissus", "Produire l’énergie de la cellule", "Porter l’information génétique"],
        answer: 0,
        explanation: "La matrice extracellulaire est un réseau de molécules (collagène chez l’animal, cellulose chez les végétaux) qui maintient les cellules ensemble. Elle donne au tissu sa cohésion et sa solidité, comme dans l’os où elle est minéralisée.",
      },
    ],
  },
  {
    id: "2nde-svt-02",
    title: "L’ADN, support de l’information génétique",
    summary:
      "L’ADN, molécule universelle en double hélice, porte dans la séquence de ses nucléotides l’information génétique, organisée en gènes dont les variations, les allèles, expliquent la diversité des individus.",
    objectives: [
      "Je sais décrire la structure de l’ADN : double hélice, nucléotides, complémentarité des bases.",
      "Je sais définir gène, allèle et chromosome.",
      "Je sais expliquer que l’information génétique réside dans la séquence des nucléotides.",
      "Je sais expliquer l’origine des mutations et leurs conséquences possibles.",
      "Je sais justifier l’universalité de l’ADN et ses conséquences (transgenèse).",
    ],
    sections: [
      {
        title: "La structure de l’ADN",
        body: [
          "L’**ADN** (acide désoxyribonucléique) est la molécule qui porte l’information génétique de tous les êtres vivants. Chez les eucaryotes, il se trouve dans le noyau, associé à des protéines pour former les **chromosomes**. L’être humain possède 46 chromosomes, soit 23 paires.",
          "L’ADN est une **double hélice** : deux brins enroulés l’un autour de l’autre, comme une échelle torsadée. Chaque brin est une longue chaîne de **nucléotides**. Un nucléotide est formé d’un sucre (le désoxyribose), d’un groupement phosphate et d’une **base azotée**. Il existe quatre bases : **A** (adénine), **T** (thymine), **G** (guanine) et **C** (cytosine).",
          "Les deux brins sont reliés par leurs bases, selon la règle de **complémentarité** : A s’associe toujours avec T, et G toujours avec C. Ainsi, connaître la séquence d’un brin permet de déduire celle de l’autre. Conséquence chimique : dans un ADN, la quantité de A est égale à celle de T, et celle de G à celle de C (règle de Chargaff).",
          "Historiquement, la structure en double hélice a été établie en 1953 par Watson et Crick, en s’appuyant notamment sur les clichés de diffraction aux rayons X de Rosalind Franklin.",
        ],
        keyPoints: [
          "**Nucléotide** : sucre + phosphate + base azotée (A, T, G ou C).",
          "**Complémentarité** : A–T et G–C.",
          "**Chromosome** : molécule d’ADN associée à des protéines.",
          "%A = %T et %G = %C dans un ADN double brin.",
        ],
        formulas: ["A ↔ T   et   G ↔ C", "%A + %T + %G + %C = 100 %"],
        example: {
          title: "Retrouver le brin complémentaire",
          steps: [
            "Brin connu : 5’ ATG CCG TAA 3’.",
            "On remplace chaque A par T, chaque T par A, chaque G par C et chaque C par G.",
            "Brin complémentaire : TAC GGC ATT.",
            "Vérification : chaque paire de bases face à face est bien A–T ou G–C.",
          ],
        },
        figure: {
          type: "table",
          title: "Les quatre bases de l’ADN et leur complémentarité",
          caption: "A s’associe toujours avec T, et G toujours avec C.",
          headers: ["Base azotée", "Abréviation", "S’associe avec"],
          rows: [
            ["Adénine", "A", "Thymine (T)"],
            ["Thymine", "T", "Adénine (A)"],
            ["Guanine", "G", "Cytosine (C)"],
            ["Cytosine", "C", "Guanine (G)"],
          ],
        },
        practice: [
          {
            id: "2nde-svt-02-s1-p1",
            prompt: "Quel est le brin complémentaire de la séquence **AGCT** ?",
            choices: ["AGCT", "TCGA", "GATC", "CTAG"],
            answer: 1,
            explanation: "On applique la complémentarité base par base : A → T, G → C, C → G, T → A. Le brin complémentaire est donc **TCGA**.",
          },
          {
            id: "2nde-svt-02-s1-p2",
            prompt: "Un ADN double brin contient 30 % d’adénine. Quel est son pourcentage de guanine ?",
            choices: ["30 %", "40 %", "20 %", "70 %"],
            answer: 2,
            explanation: "Comme A = T, on a 30 % de T, soit 60 % pour A + T. Il reste 40 % pour G + C, et puisque G = C, il y a **20 %** de guanine.",
          },
          {
            id: "2nde-svt-02-s1-p3",
            prompt: "De quoi est formé un **nucléotide** ?",
            choices: [
              "D’un sucre, d’un groupement phosphate et d’une base azotée",
              "D’un acide aminé et d’un sucre",
              "De deux bases complémentaires",
              "D’une protéine et d’ADN",
            ],
            answer: 0,
            explanation: "Un nucléotide associe un sucre (le désoxyribose), un phosphate et une base azotée (A, T, G ou C). L’ADN est une longue chaîne de nucléotides.",
          },
        ],
      },
      {
        title: "Gènes, allèles et mutations",
        body: [
          "Un **gène** est une portion d’ADN, située à un endroit précis d’un chromosome (son **locus**), qui contient l’information pour fabriquer une protéine. C’est l’**ordre** des nucléotides (la **séquence**) qui constitue l’information, comme l’ordre des lettres forme un mot.",
          "Un même gène peut exister sous plusieurs versions, appelées **allèles**, qui diffèrent par quelques nucléotides. Par exemple, le gène du groupe sanguin ABO possède les allèles A, B et O. Chaque individu possède deux exemplaires de chaque chromosome (un venant du père, un de la mère) et donc deux allèles pour chaque gène, identiques ou différents.",
          "Les allèles naissent des **mutations** : des modifications accidentelles de la séquence de l’ADN (substitution d’un nucléotide par un autre, ajout ou perte d’un nucléotide). Elles surviennent spontanément, notamment lors de la copie de l’ADN avant une division, et leur fréquence est augmentée par des **agents mutagènes** (rayons UV, rayons X, certaines substances chimiques comme celles de la fumée de tabac).",
          "Une mutation peut être **neutre** (sans effet), **défavorable** (protéine non fonctionnelle, comme dans la mucoviscidose) ou parfois **favorable**. Elle n’est transmise à la descendance que si elle touche une cellule reproductrice (gamète) ou ses cellules souches.",
        ],
        keyPoints: [
          "**Gène** : séquence d’ADN codant une protéine, à un locus donné.",
          "**Allèle** : version d’un gène.",
          "**Mutation** : modification de la séquence de l’ADN, source de nouveaux allèles.",
          "Seules les mutations des cellules germinales sont héréditaires.",
        ],
        example: {
          title: "Identifier une mutation",
          steps: [
            "Allèle normal : ATG GAG CTT. Allèle muté : ATG GTG CTT.",
            "On compare nucléotide par nucléotide.",
            "Différence en 5ᵉ position : A remplacé par T.",
            "C’est une **substitution**, qui peut modifier un acide aminé de la protéine (c’est le cas de l’anémie falciforme).",
          ],
        },
        figure: {
          type: "flow",
          title: "De la mutation au nouvel allèle",
          caption: "Les mutations surviennent au hasard ; seules celles des cellules reproductrices sont héréditaires.",
          steps: [
            {
              label: "Copie de l’ADN",
              detail: "Avant chaque division cellulaire",
            },
            {
              label: "Erreur accidentelle",
              detail: "Substitution, ajout ou perte d’un nucléotide ; plus fréquente avec les agents mutagènes (UV, rayons X, tabac)",
            },
            {
              label: "Nouvelle séquence",
              detail: "Un nouvel allèle du gène apparaît",
            },
            {
              label: "Effet",
              detail: "Neutre, défavorable ou parfois favorable",
            },
            {
              label: "Transmission",
              detail: "Seulement si la mutation touche une cellule reproductrice",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-02-s2-p1",
            prompt: "Qu’est-ce qu’un **allèle** ?",
            choices: ["Un chromosome entier", "Une version d’un gène", "Une protéine fabriquée par la cellule"],
            answer: 1,
            explanation: "Un même gène peut exister sous plusieurs versions qui diffèrent par quelques nucléotides : ce sont les allèles. Par exemple, le gène du groupe sanguin possède les allèles A, B et O.",
          },
          {
            id: "2nde-svt-02-s2-p2",
            prompt: "Allèle de référence : ATG CAT. Allèle muté : ATG CGT. De quel type de mutation s’agit-il ?",
            choices: ["Un ajout de nucléotide", "Une perte de nucléotide", "Une substitution", "Il n’y a aucune mutation"],
            answer: 2,
            explanation: "Les deux séquences ont la même longueur, mais le 5ᵉ nucléotide A a été remplacé par G. Le remplacement d’un nucléotide par un autre est une **substitution**.",
          },
          {
            id: "2nde-svt-02-s2-p3",
            prompt: "Dans quel cas une mutation peut-elle être transmise aux enfants ?",
            choices: [
              "Si elle touche une cellule de la peau exposée aux UV",
              "Si elle touche un neurone",
              "Si elle touche un globule rouge",
              "Si elle touche une cellule reproductrice (gamète) ou ses cellules souches",
            ],
            answer: 3,
            explanation: "Seules les mutations des cellules germinales passent dans les gamètes et donc dans la cellule-œuf. Une mutation d’une cellule de la peau ne concerne que l’individu lui-même.",
          },
        ],
      },
      {
        title: "Une molécule universelle",
        body: [
          "L’ADN a **la même structure chez tous les êtres vivants** : bactéries, plantes, champignons, animaux. Les mêmes quatre nucléotides, la même double hélice, le même « code » pour traduire l’information en protéines. Cette **universalité** est un argument fort en faveur d’une **origine commune** de tous les êtres vivants.",
          "Conséquence pratique : un gène d’une espèce peut être lu et exprimé par une autre espèce. C’est la **transgenèse** : on insère par exemple le gène de l’insuline humaine dans une bactérie, qui produit alors de l’insuline humaine utilisée pour soigner les diabétiques. Un organisme ayant reçu un gène étranger est un **OGM** (organisme génétiquement modifié).",
          "La quantité d’ADN est énorme : déroulé, l’ADN d’une seule cellule humaine mesure environ 2 m, pour un noyau de quelques micromètres. Cette molécule se condense fortement avant chaque division cellulaire, ce qui rend les chromosomes visibles au microscope.",
        ],
        keyPoints: [
          "L’ADN est **universel** : même structure et même code chez tous les êtres vivants.",
          "**Transgenèse** : transfert d’un gène d’une espèce à une autre.",
          "L’universalité de l’ADN témoigne d’une parenté entre tous les êtres vivants.",
        ],
        example: {
          title: "La luciole et le tabac",
          steps: [
            "On isole chez la luciole le gène de la luciférase, enzyme qui produit de la lumière.",
            "On l’insère dans l’ADN de cellules de tabac.",
            "Les plants de tabac obtenus émettent de la lumière.",
            "Conclusion : la cellule de tabac lit le gène de luciole comme le sien, preuve de l’universalité de l’ADN.",
          ],
        },
        figure: {
          type: "figures",
          title: "L’ADN en chiffres",
          items: [
            {
              value: "46",
              label: "chromosomes (23 paires) dans une cellule humaine",
            },
            {
              value: "≈ 2 m",
              label: "d’ADN déroulé dans une seule cellule humaine",
            },
            {
              value: "4",
              label: "nucléotides (A, T, G, C) communs à tous les êtres vivants",
            },
            {
              value: "1953",
              label: "découverte de la double hélice (Watson, Crick, d’après les clichés de Franklin)",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-02-s3-p1",
            prompt: "Que suggère l’**universalité** de l’ADN ?",
            choices: [
              "Que les espèces sont apparues indépendamment",
              "Que l’ADN est identique chez tous les individus",
              "Que seuls les animaux ont de l’ADN",
              "Que tous les êtres vivants ont une origine commune",
            ],
            answer: 3,
            explanation: "Tous les êtres vivants utilisent la même molécule, les mêmes nucléotides et le même code. Cette ressemblance s’explique le mieux par une **parenté** : tous descendent d’un ancêtre commun.",
          },
          {
            id: "2nde-svt-02-s3-p2",
            prompt: "Comment appelle-t-on le transfert du gène de l’insuline humaine dans une bactérie ?",
            choices: ["Une transgenèse", "Une mutation", "Une fermentation"],
            answer: 0,
            explanation: "La **transgenèse** consiste à insérer un gène d’une espèce dans le génome d’une autre. La bactérie, qui lit ce gène comme le sien, produit de l’insuline humaine : c’est un OGM.",
          },
          {
            id: "2nde-svt-02-s3-p3",
            prompt: "Pourquoi les chromosomes deviennent-ils visibles au microscope avant une division ?",
            choices: [
              "Parce que le noyau grossit mille fois",
              "Parce que l’ADN se condense fortement",
              "Parce que l’ADN se colore naturellement en bleu",
            ],
            answer: 1,
            explanation: "L’ADN d’une cellule humaine mesure environ 2 m déroulé. Avant chaque division, il se condense fortement autour de protéines, ce qui forme des chromosomes compacts et visibles.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-svt-02-ex-1",
        prompt: "Quelle base s’associe à la guanine (G) dans la double hélice d’ADN ?",
        choices: ["L’adénine (A)", "La thymine (T)", "La guanine (G)", "La cytosine (C)"],
        answer: 3,
        explanation: "Selon la complémentarité des bases, G s’associe toujours avec C, et A avec T.",
      },
      {
        id: "2nde-svt-02-ex-2",
        prompt: "Un allèle est :",
        choices: [
          "une version d’un gène",
          "une paire de chromosomes",
          "une protéine fabriquée par la cellule",
          "un nucléotide particulier",
        ],
        answer: 0,
        explanation:
          "Les allèles sont les différentes versions d’un même gène, qui diffèrent par quelques nucléotides et sont situées au même locus.",
      },
      {
        id: "2nde-svt-02-ex-3",
        prompt: "Quel est le brin complémentaire de la séquence AGCTTA ?",
        choices: ["AGCTTA", "TCGAAT", "UCGAAU", "GATCCG"],
        answer: 1,
        explanation: "On applique A↔T et G↔C : A→T, G→C, C→G, T→A, T→A, A→T, soit TCGAAT.",
      },
      {
        id: "2nde-svt-02-ex-4",
        prompt: "Où l’information génétique est-elle contenue dans l’ADN ?",
        choices: [
          "Dans la longueur totale de la molécule",
          "Dans le sucre désoxyribose",
          "Dans l’ordre (la séquence) des nucléotides",
          "Dans le nombre de phosphates",
        ],
        answer: 2,
        explanation:
          "Le sucre et le phosphate sont identiques dans tous les nucléotides : seule la succession des bases A, T, G, C varie et porte l’information.",
      },
      {
        id: "2nde-svt-02-ex-5",
        prompt: "Lequel de ces facteurs augmente la fréquence des mutations ?",
        choices: ["La lumière visible", "Les rayons ultraviolets", "L’eau", "Le dioxygène de l’air ambiant"],
        answer: 1,
        explanation:
          "Les UV sont des agents mutagènes : ils endommagent l’ADN, notamment des cellules de la peau, ce qui explique les risques de cancers cutanés liés à l’exposition solaire.",
      },
      {
        id: "2nde-svt-02-ex-6",
        prompt: "Combien de chromosomes contient une cellule humaine (hors gamètes) ?",
        choices: ["23", "44", "48", "46"],
        answer: 3,
        explanation:
          "Une cellule humaine contient 46 chromosomes, soit 23 paires. Les gamètes (spermatozoïdes, ovules) n’en contiennent que 23.",
      },
    ],
    test: [
      {
        id: "2nde-svt-02-ct-1",
        prompt: "Un ADN double brin contient 30 % d’adénine. Quel est son pourcentage de guanine ?",
        choices: ["30 %", "40 %", "20 %", "70 %"],
        answer: 2,
        explanation:
          "A = T = 30 %, donc A + T = 60 %. Il reste 40 % pour G + C, et comme G = C, G = 20 %.",
      },
      {
        id: "2nde-svt-02-ct-2",
        prompt:
          "Une mutation apparaît dans une cellule de la peau d’un adulte. Sera-t-elle transmise à ses enfants ?",
        choices: [
          "Oui, car toutes les mutations sont héréditaires",
          "Non, car elle ne concerne pas les cellules reproductrices",
          "Oui, si elle est favorable",
          "Non, car les cellules de la peau n’ont pas d’ADN",
        ],
        answer: 1,
        explanation:
          "Une mutation somatique (cellule non reproductrice) n’est transmise qu’aux cellules filles de cette cellule, dans l’individu. Seules les mutations des cellules germinales passent à la descendance, qu’elles soient favorables ou non.",
      },
      {
        id: "2nde-svt-02-ct-3",
        prompt:
          "Des bactéries ayant reçu le gène humain de l’insuline produisent de l’insuline humaine. Quelle propriété de l’ADN cette expérience illustre-t-elle ?",
        choices: [
          "Son universalité",
          "Sa capacité à muter",
          "Sa localisation dans le noyau",
          "Sa structure à un seul brin",
        ],
        answer: 0,
        explanation:
          "Les bactéries lisent et expriment un gène humain : l’information génétique est écrite dans le même langage chez tous les êtres vivants. C’est l’universalité de l’ADN, base de la transgenèse.",
      },
      {
        id: "2nde-svt-02-ct-4",
        prompt:
          "Allèle 1 : TAC CGA TTG. Allèle 2 : TAC CGA ATG. De quel type de mutation s’agit-il ?",
        choices: [
          "Une délétion (perte) d’un nucléotide",
          "Une insertion d’un nucléotide",
          "Une perte d’un chromosome entier",
          "Une substitution d’un nucléotide",
        ],
        answer: 3,
        explanation:
          "Les deux séquences ont la même longueur ; seule la 7ᵉ base diffère (T remplacé par A). Un nucléotide a été remplacé par un autre : c’est une substitution.",
      },
      {
        id: "2nde-svt-02-ct-5",
        prompt:
          "Deux personnes ont des groupes sanguins différents (A et B). Que peut-on affirmer au sujet du gène ABO chez elles ?",
        choices: [
          "Elles possèdent des gènes situés sur des chromosomes différents",
          "L’une d’elles n’a pas de gène ABO",
          "Elles possèdent le même gène mais des allèles différents",
          "Elles ont un nombre de chromosomes différent",
        ],
        answer: 2,
        explanation:
          "Le gène ABO est présent chez tout le monde, au même locus. Ce sont les allèles (versions du gène) qui diffèrent et déterminent le groupe sanguin.",
      },
      {
        id: "2nde-svt-02-ct-6",
        prompt:
          "On analyse l’ADN de deux échantillons : X (A = 25 %, T = 25 %, G = 25 %, C = 25 %) et Y (A = 30 %, T = 18 %, G = 22 %, C = 30 %). Que conclure ?",
        choices: [
          "X et Y sont tous deux des ADN double brin",
          "X peut être un ADN double brin, Y ne l’est pas",
          "Y est un ADN double brin, X ne l’est pas",
          "Aucun des deux ne peut être de l’ADN",
        ],
        answer: 1,
        explanation:
          "Dans un ADN double brin, A = T et G = C. C’est vérifié pour X, pas pour Y (A ≠ T et G ≠ C) : Y est probablement un ADN simple brin (comme chez certains virus).",
      },
      {
        id: "2nde-svt-02-ct-7",
        prompt:
          "Une crème solaire réduit le nombre de cancers de la peau. Quelle explication est la plus juste ?",
        choices: [
          "Elle limite les mutations de l’ADN des cellules de la peau causées par les UV",
          "Elle répare directement les chromosomes",
          "Elle empêche toute division cellulaire",
          "Elle modifie les allèles hérités des parents",
        ],
        answer: 0,
        explanation:
          "Les UV sont mutagènes. En les filtrant, la crème diminue la fréquence des mutations dans les cellules de la peau, donc le risque que des mutations conduisent à un cancer.",
      },
      {
        id: "2nde-svt-02-ct-8",
        prompt:
          "La séquence d’un gène est très proche chez l’homme, la souris et la levure. Quelle hypothèse cette observation soutient-elle ?",
        choices: [
          "Ces espèces vivent dans le même milieu",
          "Le gène a été transféré par transgenèse naturelle récemment",
          "Ces espèces ont le même nombre de chromosomes",
          "Ces espèces partagent un ancêtre commun dont elles ont hérité ce gène",
        ],
        answer: 3,
        explanation:
          "Des séquences très semblables chez des espèces éloignées s’expliquent par l’héritage d’un gène ancestral commun, modifié par peu de mutations. C’est un argument de parenté entre êtres vivants.",
      },
    ],
    homework: [
      {
        id: "2nde-svt-02-hw-1",
        prompt: "Quel est le brin complémentaire de **GGA TTC** ?",
        choices: ["GGA TTC", "AAG CCT", "CCT AAG", "CCU AAG"],
        answer: 2,
        explanation: "On remplace G par C, A par T, T par A et C par G : GGA TTC devient **CCT AAG**. L’ADN ne contient pas d’uracile (U), base propre à l’ARN.",
      },
      {
        id: "2nde-svt-02-hw-2",
        prompt: "Comment appelle-t-on l’emplacement précis d’un gène sur un chromosome ?",
        choices: ["Un allèle", "Un locus", "Un nucléotide", "Un brin"],
        answer: 1,
        explanation: "Le **locus** est la position d’un gène sur un chromosome. Les différents allèles d’un gène occupent le même locus sur les chromosomes homologues.",
      },
      {
        id: "2nde-svt-02-hw-3",
        prompt: "Parmi ces facteurs, lequel est un **agent mutagène** ?",
        choices: ["L’eau pure", "Le glucose", "Les rayons UV"],
        answer: 2,
        explanation: "Les rayons UV, les rayons X et certaines substances chimiques (fumée de tabac) endommagent l’ADN et augmentent la fréquence des mutations. L’eau et le glucose n’ont pas cet effet.",
      },
      {
        id: "2nde-svt-02-hw-4",
        prompt: "Qui a réalisé les clichés de diffraction aux rayons X ayant permis d’établir la structure de l’ADN ?",
        choices: ["Charles Darwin", "Rosalind Franklin", "Louis Pasteur", "Gregor Mendel"],
        answer: 1,
        explanation: "Rosalind Franklin a obtenu des clichés de diffraction aux rayons X de l’ADN. Watson et Crick s’en sont notamment servis pour proposer en 1953 le modèle de la double hélice.",
      },
    ],
  },
  {
    id: "2nde-svt-03",
    title: "Le métabolisme des cellules (photosynthèse, respiration, enzymes)",
    summary:
      "Le métabolisme est l’ensemble des réactions chimiques d’une cellule : la photosynthèse produit de la matière organique grâce à la lumière, la respiration et la fermentation en libèrent l’énergie, et des enzymes catalysent chacune de ces réactions.",
    objectives: [
      "Je sais définir le métabolisme et distinguer autotrophie et hétérotrophie.",
      "Je sais écrire les équations bilans de la photosynthèse, de la respiration et de la fermentation.",
      "Je sais interpréter des mesures d’échanges gazeux (O₂, CO₂) à la lumière et à l’obscurité.",
      "Je sais expliquer le rôle et la spécificité des enzymes.",
      "Je sais interpréter l’effet de la température ou du pH sur l’activité d’une enzyme.",
    ],
    sections: [
      {
        title: "Autotrophie et photosynthèse",
        body: [
          "Le **métabolisme** désigne l’ensemble des réactions chimiques qui se déroulent dans une cellule. Il dépend de l’équipement de la cellule (ses enzymes, donc ses gènes) et de son environnement. Il permet de produire de la matière (construire les molécules de la cellule) et de l’énergie utilisable.",
          "Les végétaux chlorophylliens sont **autotrophes** : ils fabriquent leur propre matière organique à partir de matière **minérale** (CO₂ de l’air, eau et sels minéraux du sol) en utilisant l’énergie lumineuse. Cette réaction est la **photosynthèse** ; elle a lieu dans les **chloroplastes**, grâce à la **chlorophylle** qui capte la lumière.",
          "La photosynthèse produit du **glucose**, qui est ensuite transformé en saccharose (transporté dans la sève élaborée) ou stocké sous forme d’**amidon** (mis en évidence par l’eau iodée, qui le colore en bleu-noir). Elle libère du **dioxygène** : c’est l’origine de l’O₂ de l’atmosphère.",
          "Expérimentalement, on montre la photosynthèse en mesurant, à l’aide d’un capteur (ExAO), la **concentration en O₂** dans une enceinte contenant des algues ou des feuilles : à la lumière, l’O₂ augmente et le CO₂ diminue.",
        ],
        keyPoints: [
          "**Autotrophe** : produit sa matière organique à partir de matière minérale.",
          "**Hétérotrophe** : utilise de la matière organique produite par d’autres êtres vivants.",
          "La photosynthèse a lieu dans les chloroplastes, à la lumière.",
          "L’**amidon** est la forme de stockage du glucose chez les végétaux.",
        ],
        formulas: [
          "Photosynthèse : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (énergie lumineuse, chlorophylle)",
        ],
        example: {
          title: "L’expérience de la feuille panachée",
          steps: [
            "Une feuille de géranium possède des zones vertes (chlorophylle) et des zones blanches (sans chlorophylle).",
            "Après plusieurs heures à la lumière, on décolore la feuille à l’alcool chaud puis on la plonge dans l’eau iodée.",
            "Seules les zones vertes deviennent bleu-noir.",
            "Conclusion : l’amidon, issu du glucose de la photosynthèse, n’est produit que là où il y a de la chlorophylle.",
          ],
        },
        figure: {
          type: "flow",
          title: "La photosynthèse dans une feuille",
          caption: "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, grâce à l’énergie lumineuse captée par la chlorophylle.",
          steps: [
            {
              label: "Entrées minérales",
              detail: "CO₂ de l’air, eau et sels minéraux du sol",
            },
            {
              label: "Chloroplaste",
              detail: "La chlorophylle capte l’énergie lumineuse",
            },
            {
              label: "Production de glucose",
              detail: "C₆H₁₂O₆, matière organique",
            },
            {
              label: "Devenir du glucose",
              detail: "Stocké en amidon ou transporté en saccharose (sève élaborée)",
            },
            {
              label: "Rejet de dioxygène",
              detail: "O₂ libéré dans l’atmosphère",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-03-s1-p1",
            prompt: "Un organisme **autotrophe** est un organisme qui…",
            choices: [
              "consomme d’autres êtres vivants",
              "fabrique sa matière organique à partir de matière minérale",
              "vit sans lumière ni eau",
              "ne respire jamais",
            ],
            answer: 1,
            explanation: "Les végétaux chlorophylliens sont autotrophes : ils produisent leur matière organique à partir de CO₂, d’eau et de sels minéraux grâce à la lumière. Les animaux, au contraire, sont hétérotrophes.",
          },
          {
            id: "2nde-svt-03-s1-p2",
            prompt: "L’eau iodée colore en bleu-noir les zones d’une feuille qui contiennent…",
            choices: ["du glucose", "de l’amidon", "du dioxygène", "de la chlorophylle"],
            answer: 1,
            explanation: "L’eau iodée est le réactif de l’**amidon**, forme de stockage du glucose produit par la photosynthèse. Dans une feuille panachée, seules les zones vertes deviennent bleu-noir.",
          },
          {
            id: "2nde-svt-03-s1-p3",
            prompt: "Dans une enceinte éclairée contenant des algues, un capteur ExAO enregistre…",
            choices: ["une baisse de O₂ et une hausse de CO₂", "une hausse simultanée de O₂ et de CO₂", "une hausse de O₂ et une baisse de CO₂"],
            answer: 2,
            explanation: "À la lumière, la photosynthèse consomme du CO₂ et libère du O₂, plus intensément que la respiration. On mesure donc une augmentation du dioxygène et une diminution du dioxyde de carbone.",
          },
        ],
      },
      {
        title: "Respiration et fermentation : produire de l’énergie",
        body: [
          "Toutes les cellules, autotrophes comme hétérotrophes, ont besoin d’énergie pour fonctionner. Elles l’obtiennent en dégradant des molécules organiques, principalement le **glucose**. L’énergie libérée est stockée dans une molécule universelle, l’**ATP**, utilisée ensuite par la cellule.",
          "La **respiration cellulaire** se déroule dans les **mitochondries** en présence de dioxygène. Elle dégrade complètement le glucose en CO₂ et H₂O et libère beaucoup d’énergie. Les végétaux respirent aussi, jour et nuit ; à la lumière, leur photosynthèse est simplement plus intense que leur respiration, ce qui masque celle-ci.",
          "En absence de dioxygène, certaines cellules (levures, bactéries, cellules musculaires en effort intense) réalisent une **fermentation** : dégradation incomplète du glucose, dans le cytoplasme, qui libère peu d’énergie. La fermentation alcoolique des levures produit de l’éthanol et du CO₂ (fabrication du pain, de la bière) ; la fermentation lactique produit de l’acide lactique (yaourts).",
          "On compare : pour une molécule de glucose, la respiration fournit près de 18 fois plus d’énergie utilisable que la fermentation, car les produits de la fermentation (éthanol, acide lactique) contiennent encore beaucoup d’énergie chimique.",
        ],
        keyPoints: [
          "**Respiration** : dégradation complète du glucose avec O₂, dans les mitochondries, très rentable.",
          "**Fermentation** : dégradation incomplète sans O₂, dans le cytoplasme, peu rentable.",
          "L’**ATP** est la molécule énergétique utilisée par toutes les cellules.",
          "Les végétaux respirent en permanence.",
        ],
        formulas: [
          "Respiration : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + énergie",
          "Fermentation alcoolique : C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ + peu d’énergie",
        ],
        example: {
          title: "Interpréter un suivi de levures en ExAO",
          steps: [
            "Des levures sont placées dans un bioréacteur avec du glucose ; on mesure le O₂.",
            "Pendant 10 min, le O₂ diminue régulièrement : les levures respirent.",
            "Lorsque le O₂ est épuisé, le CO₂ continue d’augmenter et de l’éthanol apparaît.",
            "Interprétation : les levures passent de la respiration à la fermentation alcoolique.",
            "Conclusion : le type de métabolisme dépend des conditions du milieu (présence ou non d’O₂).",
          ],
        },
        figure: {
          type: "table",
          title: "Respiration et fermentation",
          headers: ["Critère", "Respiration", "Fermentation"],
          rows: [
            ["Dioxygène", "Nécessaire", "Non nécessaire"],
            ["Lieu", "Mitochondries", "Cytoplasme"],
            ["Dégradation du glucose", "Complète (CO₂ + H₂O)", "Incomplète (éthanol + CO₂, ou acide lactique)"],
            ["Énergie produite", "Importante (près de 18 fois plus)", "Faible"],
            ["Exemples", "Presque toutes les cellules", "Levures, bactéries lactiques, muscle en effort intense"],
          ],
        },
        practice: [
          {
            id: "2nde-svt-03-s2-p1",
            prompt: "Quelle molécule stocke l’énergie utilisable par toutes les cellules ?",
            choices: ["Le glucose", "L’ATP", "L’amidon", "L’ADN"],
            answer: 1,
            explanation: "L’énergie libérée par la dégradation du glucose est stockée dans l’**ATP**, molécule universelle. La cellule utilise ensuite l’ATP pour ses activités (synthèses, mouvements, transports).",
          },
          {
            id: "2nde-svt-03-s2-p2",
            prompt: "Quels sont les produits de la **fermentation alcoolique** des levures ?",
            choices: ["L’éthanol et le CO₂", "L’acide lactique seul", "Le CO₂ et l’eau", "Le dioxygène et le glucose"],
            answer: 0,
            explanation: "En absence de O₂, les levures dégradent incomplètement le glucose en éthanol et CO₂ : C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂. C’est ce CO₂ qui fait lever la pâte à pain.",
          },
          {
            id: "2nde-svt-03-s2-p3",
            prompt: "Une plante respire-t-elle ?",
            choices: [
              "Uniquement la nuit",
              "Jamais, elle fait seulement la photosynthèse",
              "Jour et nuit, mais le jour sa respiration est masquée par la photosynthèse",
            ],
            answer: 2,
            explanation: "Les cellules végétales respirent en permanence dans leurs mitochondries. Le jour, la photosynthèse est plus intense que la respiration : les échanges gazeux mesurés traduisent donc surtout la photosynthèse.",
          },
        ],
      },
      {
        title: "Les enzymes, catalyseurs du vivant",
        body: [
          "Les réactions du métabolisme seraient beaucoup trop lentes à 37 °C sans **enzymes**. Une enzyme est une **protéine** qui **catalyse** (accélère) une réaction chimique sans être consommée : elle est retrouvée intacte à la fin et peut agir de nombreuses fois.",
          "Chaque enzyme est **spécifique** : elle agit sur un seul type de molécule, son **substrat**, et catalyse un seul type de réaction. Cette spécificité s’explique par la forme de l’enzyme : le substrat se fixe dans une région précise, le **site actif**, dont la forme est complémentaire de celle du substrat, comme une clé dans une serrure. On forme un **complexe enzyme-substrat**, puis les **produits** sont libérés.",
          "L’activité d’une enzyme dépend des conditions du milieu. Elle est maximale à une **température optimale** (environ 37 °C pour les enzymes humaines) et à un **pH optimal** (pH 2 pour la pepsine de l’estomac, pH 7 environ pour l’amylase salivaire). À basse température, l’activité ralentit mais reprend si l’on réchauffe ; à haute température (au-delà de 50–60 °C), la protéine est **dénaturée** : sa forme est détruite de façon irréversible.",
          "Comme les enzymes sont des protéines, codées par des gènes, c’est le **génome** de la cellule qui détermine son équipement enzymatique, donc son métabolisme.",
        ],
        keyPoints: [
          "**Enzyme** : protéine catalysant une réaction spécifique, non consommée.",
          "**Site actif** : zone de l’enzyme où se fixe le substrat.",
          "Double spécificité : de substrat et de réaction.",
          "**Dénaturation** : perte irréversible de la forme et donc de l’activité (chaleur, pH extrême).",
        ],
        formulas: ["Enzyme + Substrat → Complexe enzyme-substrat → Enzyme + Produit(s)"],
        example: {
          title: "Action de l’amylase sur l’amidon",
          steps: [
            "Quatre tubes contiennent de l’amidon et de l’amylase salivaire, placés à 0 °C, 37 °C, 70 °C, et 70 °C puis ramené à 37 °C.",
            "Après 15 min, on teste l’amidon à l’eau iodée.",
            "Seul le tube à 37 °C ne bleuit pas : l’amidon a été hydrolysé (en maltose).",
            "Le tube à 0 °C, réchauffé à 37 °C, finit par réagir : le froid ralentit sans détruire.",
            "Le tube chauffé à 70 °C reste bleu même ramené à 37 °C : l’enzyme a été dénaturée.",
          ],
        },
        figure: {
          type: "flow",
          title: "Le fonctionnement d’une enzyme",
          caption: "L’enzyme est retrouvée intacte et peut catalyser de nombreuses réactions.",
          steps: [
            {
              label: "Enzyme + substrat",
              detail: "Le substrat a une forme complémentaire du site actif",
            },
            {
              label: "Complexe enzyme-substrat",
              detail: "Le substrat se fixe dans le site actif",
            },
            {
              label: "Réaction catalysée",
              detail: "Le substrat est transformé",
            },
            {
              label: "Libération des produits",
              detail: "L’enzyme, non consommée, est de nouveau disponible",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-03-s3-p1",
            prompt: "Qu’est-ce qu’une **enzyme** ?",
            choices: [
              "Un glucide consommé par la réaction",
              "Un lipide de la membrane",
              "Une protéine qui accélère une réaction sans être consommée",
            ],
            answer: 2,
            explanation: "Une enzyme est une protéine qui **catalyse** une réaction chimique. Elle est retrouvée intacte à la fin et peut donc agir de nombreuses fois.",
          },
          {
            id: "2nde-svt-03-s3-p2",
            prompt: "De l’amylase est chauffée à 70 °C puis ramenée à 37 °C. Que devient son activité ?",
            choices: ["Elle redevient normale", "Elle reste nulle, car l’enzyme est dénaturée", "Elle devient plus forte qu’avant"],
            answer: 1,
            explanation: "Au-delà de 50–60 °C, la forme de la protéine est détruite de façon **irréversible** : c’est la dénaturation. Contrairement au froid, qui ralentit seulement l’enzyme, la chaleur forte la rend définitivement inactive.",
          },
          {
            id: "2nde-svt-03-s3-p3",
            prompt: "Comment s’explique la **spécificité** d’une enzyme pour son substrat ?",
            choices: [
              "Par la taille de la cellule",
              "Par la couleur de l’enzyme",
              "Par la quantité d’enzyme présente",
              "Par la forme du site actif, complémentaire de celle du substrat",
            ],
            answer: 3,
            explanation: "Le substrat se fixe dans le site actif, dont la forme lui est complémentaire, comme une clé dans une serrure. Une molécule de forme différente ne peut pas s’y fixer et n’est donc pas transformée.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-svt-03-ex-1",
        prompt: "Quels sont les réactifs de la photosynthèse ?",
        choices: [
          "Glucose et dioxygène",
          "Dioxyde de carbone et eau",
          "Amidon et eau",
          "Dioxygène et dioxyde de carbone",
        ],
        answer: 1,
        explanation:
          "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ : le CO₂ et l’eau sont consommés (réactifs), le glucose et le O₂ sont produits.",
      },
      {
        id: "2nde-svt-03-ex-2",
        prompt: "Dans quel organite se déroule la respiration cellulaire ?",
        choices: ["Le chloroplaste", "Le noyau", "La mitochondrie", "La vacuole"],
        answer: 2,
        explanation:
          "La respiration cellulaire (dégradation complète du glucose en présence d’O₂) a lieu dans les mitochondries, présentes dans les cellules animales et végétales.",
      },
      {
        id: "2nde-svt-03-ex-3",
        prompt: "Un être vivant hétérotrophe :",
        choices: [
          "fabrique sa matière organique à partir de matière minérale",
          "ne respire pas",
          "possède obligatoirement des chloroplastes",
          "se nourrit de matière organique produite par d’autres êtres vivants",
        ],
        answer: 3,
        explanation:
          "Les hétérotrophes (animaux, champignons, la plupart des bactéries) doivent prélever de la matière organique déjà fabriquée. Ils respirent ou fermentent pour en tirer de l’énergie.",
      },
      {
        id: "2nde-svt-03-ex-4",
        prompt: "Une enzyme est :",
        choices: [
          "une protéine qui accélère une réaction chimique spécifique",
          "un glucide de réserve",
          "un lipide de la membrane",
          "un organite de la cellule",
        ],
        answer: 0,
        explanation:
          "Une enzyme est une protéine catalysant une réaction spécifique, sans être consommée.",
      },
      {
        id: "2nde-svt-03-ex-5",
        prompt: "Quels sont les produits de la fermentation alcoolique ?",
        choices: [
          "Acide lactique seul",
          "CO₂ et H₂O",
          "Éthanol et CO₂",
          "Glucose et O₂",
        ],
        answer: 2,
        explanation:
          "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ : la fermentation alcoolique des levures produit de l’éthanol et du dioxyde de carbone (qui fait lever la pâte à pain).",
      },
      {
        id: "2nde-svt-03-ex-6",
        prompt: "Quel réactif permet de mettre en évidence l’amidon ?",
        choices: ["L’eau de chaux", "L’eau iodée", "Le bleu de méthylène", "L’alcool"],
        answer: 1,
        explanation:
          "L’eau iodée colore l’amidon en bleu-noir. L’eau de chaux, elle, se trouble en présence de CO₂.",
      },
    ],
    test: [
      {
        id: "2nde-svt-03-ct-1",
        prompt:
          "Une plante est placée dans une enceinte fermée : à la lumière, le O₂ augmente ; à l’obscurité, il diminue. Quelle interprétation est correcte ?",
        choices: [
          "La plante ne fait que de la photosynthèse",
          "La plante respire uniquement la nuit",
          "La plante respire en permanence ; à la lumière, la photosynthèse produit plus d’O₂ que la respiration n’en consomme",
          "La plante fermente à l’obscurité",
        ],
        answer: 2,
        explanation:
          "À l’obscurité, seule la respiration a lieu : le O₂ diminue. À la lumière, la respiration continue mais la photosynthèse, plus intense, produit davantage d’O₂ : le bilan est positif.",
      },
      {
        id: "2nde-svt-03-ct-2",
        prompt:
          "On fait agir la pepsine (enzyme de l’estomac) sur des protéines à pH 2 et à pH 7. La digestion n’a lieu qu’à pH 2. Que conclure ?",
        choices: [
          "La pepsine a un pH optimal acide, adapté au milieu de l’estomac",
          "La pepsine n’est pas une enzyme",
          "La pepsine est dénaturée à pH 2",
          "Les protéines ne sont digestibles que dans l’intestin",
        ],
        answer: 0,
        explanation:
          "L’activité de la pepsine dépend du pH : elle est active à pH acide (≈ 2), ce qui correspond au pH de l’estomac. À pH 7, sa forme n’est pas favorable à la fixation du substrat.",
      },
      {
        id: "2nde-svt-03-ct-3",
        prompt:
          "L’amylase est mise en présence d’amidon, puis de saccharose. Elle ne dégrade que l’amidon. Quelle propriété des enzymes est démontrée ?",
        choices: [
          "Leur dénaturation par la chaleur",
          "Leur consommation au cours de la réaction",
          "Leur dépendance au pH",
          "Leur spécificité de substrat",
        ],
        answer: 3,
        explanation:
          "L’amylase agit sur l’amidon mais pas sur le saccharose : seul un substrat de forme complémentaire de son site actif peut s’y fixer. C’est la spécificité de substrat.",
      },
      {
        id: "2nde-svt-03-ct-4",
        prompt:
          "Pour une molécule de glucose, la respiration fournit environ 36 ATP et la fermentation 2 ATP. Pourquoi cette différence ?",
        choices: [
          "La fermentation utilise plus de glucose",
          "Les produits de la fermentation contiennent encore beaucoup d’énergie chimique",
          "La fermentation a lieu dans les mitochondries",
          "La respiration n’a pas besoin d’enzymes",
        ],
        answer: 1,
        explanation:
          "La fermentation est une dégradation incomplète : l’éthanol ou l’acide lactique produits sont encore riches en énergie. La respiration oxyde complètement le glucose en CO₂ et H₂O, libérant toute l’énergie disponible.",
      },
      {
        id: "2nde-svt-03-ct-5",
        prompt:
          "Des cellules musculaires d’un sprinteur produisent de l’acide lactique pendant un effort très intense. Que peut-on en déduire ?",
        choices: [
          "L’apport en O₂ devient insuffisant et une partie du glucose est dégradée par fermentation",
          "Les muscles réalisent la photosynthèse",
          "Les mitochondries produisent de l’acide lactique",
          "Le sprinteur n’utilise plus de glucose",
        ],
        answer: 0,
        explanation:
          "Lors d’un effort intense, l’apport de O₂ par le sang ne suffit plus : les cellules musculaires complètent leur production d’énergie par fermentation lactique, dans le cytoplasme.",
      },
      {
        id: "2nde-svt-03-ct-6",
        prompt:
          "Une enzyme chauffée à 80 °C puis refroidie à 37 °C reste inactive. Quelle explication est correcte ?",
        choices: [
          "Elle a été consommée par la réaction",
          "Son substrat a été détruit",
          "Elle a été dénaturée : sa forme, et donc son site actif, ont été irréversiblement modifiés",
          "Elle a besoin d’un temps d’adaptation à 37 °C",
        ],
        answer: 2,
        explanation:
          "Au-delà d’une certaine température, la structure de la protéine est détruite de façon irréversible : le site actif ne peut plus fixer le substrat. Contrairement au froid, la chaleur ne fait pas que ralentir l’enzyme.",
      },
      {
        id: "2nde-svt-03-ct-7",
        prompt:
          "On cultive des algues avec du CO₂ contenant un atome de carbone radioactif (¹⁴C), à la lumière. Où retrouvera-t-on la radioactivité ?",
        choices: [
          "Dans le dioxygène libéré",
          "Dans l’eau absorbée",
          "Uniquement dans les mitochondries",
          "Dans le glucose puis l’amidon produits",
        ],
        answer: 3,
        explanation:
          "Le carbone du CO₂ est incorporé dans la matière organique lors de la photosynthèse : on le retrouve dans le glucose puis l’amidon. Le O₂ libéré provient, lui, de l’eau.",
      },
      {
        id: "2nde-svt-03-ct-8",
        prompt:
          "Deux souches de levures sont cultivées sur du lactose : l’une se développe, l’autre non. Quelle hypothèse est la plus pertinente ?",
        choices: [
          "La deuxième souche ne respire jamais",
          "Seule la première souche possède le gène codant l’enzyme qui dégrade le lactose",
          "Le lactose est toxique pour toutes les levures",
          "La première souche fait de la photosynthèse",
        ],
        answer: 1,
        explanation:
          "Le métabolisme dépend des enzymes dont dispose la cellule, elles-mêmes codées par ses gènes. Une souche dépourvue de l’enzyme adaptée (et donc du gène) ne peut pas utiliser le lactose.",
      },
    ],
    homework: [
      {
        id: "2nde-svt-03-hw-1",
        prompt: "Quelle est l’équation équilibrée de la photosynthèse ?",
        choices: ["C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O", "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂", "CO₂ + H₂O → C₆H₁₂O₆ + O₂", "6 O₂ + 6 H₂O → C₆H₁₂O₆ + 6 CO₂"],
        answer: 1,
        explanation: "La photosynthèse transforme 6 CO₂ et 6 H₂O en une molécule de glucose et 6 O₂. L’équation inverse correspond à la respiration, et la troisième proposition n’est pas équilibrée.",
      },
      {
        id: "2nde-svt-03-hw-2",
        prompt: "Quel est le pH optimal de la **pepsine**, enzyme de l’estomac ?",
        choices: ["Environ 2", "Environ 7", "Environ 12"],
        answer: 0,
        explanation: "La pepsine agit dans l’estomac, milieu très acide : son pH optimal est d’environ 2. L’amylase salivaire, elle, fonctionne au mieux vers pH 7.",
      },
      {
        id: "2nde-svt-03-hw-3",
        prompt: "Des levures placées dans un milieu sans dioxygène réalisent…",
        choices: ["la photosynthèse", "la respiration", "la fermentation alcoolique", "la fermentation lactique"],
        answer: 2,
        explanation: "Sans O₂, la respiration est impossible : les levures dégradent le glucose par **fermentation alcoolique**, produisant éthanol et CO₂. La fermentation lactique est réalisée par certaines bactéries et par le muscle.",
      },
      {
        id: "2nde-svt-03-hw-4",
        prompt: "Quelle est l’origine du dioxygène de l’atmosphère ?",
        choices: ["La respiration des animaux", "La fermentation", "Les volcans", "La photosynthèse"],
        answer: 3,
        explanation: "La photosynthèse libère du O₂ en décomposant l’eau ; c’est elle qui a enrichi l’atmosphère en dioxygène. La respiration et la fermentation, au contraire, ne produisent pas de O₂.",
      },
    ],
  },
  {
    id: "2nde-svt-04",
    title: "Biodiversité et évolution (échelles de la biodiversité, sélection naturelle, dérive)",
    summary:
      "La biodiversité, observable à l’échelle des écosystèmes, des espèces et des gènes, change au cours du temps sous l’effet des mutations, de la sélection naturelle et de la dérive génétique.",
    objectives: [
      "Je sais décrire les trois échelles de la biodiversité.",
      "Je sais estimer la taille d’une population par la méthode de capture-marquage-recapture.",
      "Je sais expliquer le mécanisme de la sélection naturelle à partir d’un exemple.",
      "Je sais expliquer la dérive génétique et le rôle de l’effectif de la population.",
      "Je sais citer des menaces sur la biodiversité et des moyens de la préserver.",
    ],
    sections: [
      {
        title: "Les trois échelles de la biodiversité",
        body: [
          "La **biodiversité** désigne la diversité du vivant. On la décrit à trois échelles emboîtées. La **diversité des écosystèmes** : un écosystème est l’ensemble formé par un milieu de vie (le **biotope** : sol, climat, eau) et les êtres vivants qui l’habitent (la **biocénose**), avec leurs interactions. Forêt, mare, récif corallien sont des écosystèmes différents.",
          "La **diversité spécifique** : le nombre et l’abondance des **espèces**. Une espèce est un ensemble d’individus qui se ressemblent et qui peuvent se reproduire entre eux en donnant une descendance **fertile**. Environ 2 millions d’espèces sont décrites, mais on estime qu’il en existe bien plus (peut-être 8 à 10 millions).",
          "La **diversité génétique** : au sein d’une même espèce, les individus ne sont pas identiques car ils possèdent des **allèles** différents. Par exemple, les escargots des haies (*Cepaea nemoralis*) ont des coquilles jaunes, roses ou brunes, avec ou sans bandes, selon leurs allèles.",
          "La biodiversité actuelle n’est qu’une étape : elle change en permanence. Les fossiles montrent que de nombreuses espèces ont disparu (environ 99 % des espèces ayant existé) et que d’autres sont apparues. On a connu au moins cinq **crises biologiques** majeures (extinctions massives), comme celle de la fin du Crétacé il y a 66 millions d’années.",
        ],
        keyPoints: [
          "Trois échelles : **écosystèmes**, **espèces**, **gènes (allèles)**.",
          "**Écosystème** = biotope + biocénose + interactions.",
          "**Espèce** : individus interféconds donnant une descendance fertile.",
          "La biodiversité varie au cours du temps (extinctions, apparitions d’espèces).",
        ],
        formulas: [
          "Capture-marquage-recapture : N ≈ (M × C) ÷ R",
          "N : effectif total ; M : individus marqués ; C : individus de la 2ᵉ capture ; R : marqués recapturés",
        ],
        example: {
          title: "Estimer une population de criquets",
          steps: [
            "On capture 60 criquets, on les marque (M = 60) et on les relâche.",
            "Une semaine plus tard, on en capture 80 (C = 80), dont 12 sont marqués (R = 12).",
            "On suppose que la proportion de marqués est la même dans l’échantillon et dans la population : 12/80 = 60/N.",
            "N = (60 × 80) ÷ 12 = 400 criquets environ.",
          ],
        },
        figure: {
          type: "figures",
          title: "La biodiversité en chiffres",
          items: [
            {
              value: "≈ 2 millions",
              label: "d’espèces décrites",
            },
            {
              value: "8 à 10 millions",
              label: "d’espèces estimées sur Terre",
            },
            {
              value: "≈ 99 %",
              label: "des espèces ayant existé ont disparu",
            },
            {
              value: "5",
              label: "crises biologiques majeures (dont la fin du Crétacé, il y a 66 Ma)",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-04-s1-p1",
            prompt: "Un **écosystème** est formé…",
            choices: [
              "d’une seule espèce et de son habitat",
              "du biotope, de la biocénose et de leurs interactions",
              "uniquement des êtres vivants d’un milieu",
              "uniquement du sol et du climat",
            ],
            answer: 1,
            explanation: "Un écosystème associe un milieu de vie (le biotope : sol, climat, eau), les êtres vivants qui l’habitent (la biocénose) et toutes leurs interactions. Forêt et mare sont deux écosystèmes différents.",
          },
          {
            id: "2nde-svt-04-s1-p2",
            prompt: "Capture-marquage-recapture : 50 individus marqués ; 2ᵉ capture de 40 individus dont 10 marqués. Quel est l’effectif estimé ?",
            choices: ["80", "500", "200", "2 000"],
            answer: 2,
            explanation: "On applique N ≈ (M × C) ÷ R = (50 × 40) ÷ 10 = 200. On suppose que la proportion d’individus marqués est la même dans l’échantillon et dans toute la population.",
          },
          {
            id: "2nde-svt-04-s1-p3",
            prompt: "Les escargots *Cepaea* d’une même espèce ont des coquilles de couleurs différentes. Cela illustre la diversité…",
            choices: ["des écosystèmes", "spécifique", "génétique"],
            answer: 2,
            explanation: "Il s’agit d’individus d’une même espèce qui diffèrent par leurs **allèles** : c’est la diversité génétique. La diversité spécifique concerne le nombre d’espèces différentes.",
          },
        ],
      },
      {
        title: "La sélection naturelle",
        body: [
          "Charles **Darwin** (1859) a proposé que les espèces se transforment sous l’effet de la **sélection naturelle**. Son raisonnement repose sur trois constats : les individus d’une population sont **variés** ; une partie de ces variations est **héréditaire** (on sait aujourd’hui qu’elles sont dues aux allèles) ; tous les individus nés ne survivent pas et ne se reproduisent pas autant.",
          "Dans un environnement donné, les individus porteurs de caractères **avantageux** survivent mieux et ont **plus de descendants**. Ils transmettent leurs allèles, dont la **fréquence augmente** au fil des générations. Il ne s’agit pas d’une « adaptation volontaire » : les mutations apparaissent au hasard, et c’est l’environnement qui trie après coup.",
          "Exemple célèbre : la **phalène du bouleau** en Angleterre. Avant l’industrialisation, la forme claire dominait, bien camouflée sur les troncs couverts de lichens clairs. La pollution au charbon a noirci les troncs : les formes sombres, moins repérées par les oiseaux prédateurs, sont devenues majoritaires. Après les lois antipollution, la forme claire est redevenue fréquente.",
          "Autres exemples actuels : la **résistance des bactéries aux antibiotiques**, la résistance des insectes aux insecticides. L’agent sélectif (antibiotique, insecticide) élimine les individus sensibles et laisse se multiplier les résistants, qui existaient déjà par mutation.",
        ],
        keyPoints: [
          "**Sélection naturelle** : tri des individus par l’environnement selon leur survie et leur reproduction.",
          "Les mutations sont aléatoires ; la sélection, elle, dépend du milieu.",
          "Un caractère avantageux dans un milieu peut être désavantageux dans un autre.",
          "La sélection fait varier la fréquence des allèles dans une population.",
        ],
        example: {
          title: "Raisonner sur les phalènes",
          steps: [
            "Variation : il existe des phalènes claires et sombres (un gène, deux allèles).",
            "Environnement : troncs noircis par la suie.",
            "Pression de sélection : les oiseaux repèrent et mangent davantage les phalènes claires.",
            "Conséquence : les sombres survivent et se reproduisent plus ; l’allèle « sombre » devient majoritaire.",
            "Conclusion : la population a évolué par sélection naturelle.",
          ],
        },
        figure: {
          type: "flow",
          title: "Le mécanisme de la sélection naturelle",
          caption: "Exemple : les phalènes du bouleau dans l’Angleterre industrielle.",
          steps: [
            {
              label: "Variation",
              detail: "Les individus diffèrent par leurs allèles (mutations aléatoires)",
            },
            {
              label: "Pression du milieu",
              detail: "Prédateurs, climat, antibiotique, insecticide…",
            },
            {
              label: "Survie différentielle",
              detail: "Les porteurs d’un caractère avantageux survivent mieux",
            },
            {
              label: "Reproduction",
              detail: "Ils ont plus de descendants et transmettent leurs allèles",
            },
            {
              label: "Évolution",
              detail: "La fréquence de l’allèle avantageux augmente au fil des générations",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-04-s2-p1",
            prompt: "Selon la théorie de la sélection naturelle, les mutations…",
            choices: [
              "apparaissent pour répondre aux besoins de l’individu",
              "apparaissent au hasard, puis le milieu trie les individus",
              "sont toujours favorables",
            ],
            answer: 1,
            explanation: "Les mutations surviennent de façon aléatoire, indépendamment de leur utilité. C’est ensuite l’environnement qui favorise la survie et la reproduction des porteurs de caractères avantageux.",
          },
          {
            id: "2nde-svt-04-s2-p2",
            prompt: "Pourquoi les phalènes sombres sont-elles devenues majoritaires quand les troncs ont été noircis par la suie ?",
            choices: [
              "La suie a noirci les ailes des papillons",
              "Les papillons ont choisi de devenir sombres",
              "Elles étaient moins repérées par les oiseaux prédateurs",
              "Les phalènes claires ont migré",
            ],
            answer: 2,
            explanation: "Sur des troncs sombres, les phalènes sombres sont mieux camouflées et sont moins mangées. Elles survivent et se reproduisent davantage, si bien que l’allèle « sombre » devient majoritaire.",
          },
          {
            id: "2nde-svt-04-s2-p3",
            prompt: "Comment expliquer l’apparition d’insectes résistants à un insecticide ?",
            choices: [
              "L’insecticide sélectionne des insectes résistants qui existaient déjà par mutation",
              "L’insecticide provoque chez chaque insecte la mutation de résistance",
              "Les insectes apprennent à éviter l’insecticide",
            ],
            answer: 0,
            explanation: "Des mutants résistants existent par hasard avant le traitement. L’insecticide tue les sensibles et laisse les résistants se multiplier : c’est un cas de sélection naturelle.",
          },
        ],
      },
      {
        title: "La dérive génétique et la préservation de la biodiversité",
        body: [
          "La fréquence des allèles peut aussi varier **au hasard**, sans lien avec un avantage : c’est la **dérive génétique**. À chaque génération, seuls certains individus se reproduisent, et seule une partie de leurs allèles est transmise, par hasard. Dans une petite population, ce hasard peut faire disparaître un allèle ou au contraire le fixer (fréquence 100 %).",
          "L’effet de la dérive est d’autant plus fort que la **population est petite**. On peut le comparer à des tirages à pile ou face : sur 10 lancers, on peut obtenir 8 piles ; sur 10 000 lancers, on sera très proche de 50 %. Les populations isolées sur des îles, ou réduites après une catastrophe (« effet goulot d’étranglement »), perdent ainsi rapidement de la diversité génétique.",
          "Les espèces peuvent aussi se séparer en espèces nouvelles (**spéciation**) lorsque deux populations sont isolées : mutations, sélection et dérive les font diverger jusqu’à ce qu’elles ne puissent plus se reproduire entre elles.",
          "Aujourd’hui, les activités humaines provoquent un déclin rapide de la biodiversité : **destruction des habitats**, **surexploitation** (pêche, chasse), **pollutions**, **espèces exotiques envahissantes** et **changement climatique**. Pour la préserver : aires protégées, corridors écologiques reliant les populations (pour éviter leur isolement), réglementation de la pêche, lutte contre les pollutions.",
        ],
        keyPoints: [
          "**Dérive génétique** : variation aléatoire des fréquences alléliques, forte dans les petites populations.",
          "Sélection naturelle et dérive sont les deux grands moteurs de l’évolution des populations.",
          "**Spéciation** : formation d’une nouvelle espèce à partir de populations isolées.",
          "Menaces : habitats détruits, surexploitation, pollutions, espèces invasives, climat.",
        ],
        example: {
          title: "Comparer deux simulations de dérive",
          steps: [
            "On simule 50 générations d’une population avec un allèle de fréquence initiale 0,5, sans sélection.",
            "Population de 20 individus : en quelques dizaines de générations, l’allèle disparaît ou se fixe selon les essais.",
            "Population de 2 000 individus : la fréquence reste proche de 0,5.",
            "Conclusion : le hasard modifie fortement les petites populations, d’où l’importance de préserver de grands effectifs.",
          ],
        },
        figure: {
          type: "table",
          title: "Sélection naturelle et dérive génétique",
          headers: ["Critère", "Sélection naturelle", "Dérive génétique"],
          rows: [
            ["Cause", "Avantage dans un milieu donné", "Hasard de la reproduction"],
            ["Direction", "Favorise les allèles avantageux", "Aléatoire, sans lien avec un avantage"],
            ["Populations concernées", "Toutes", "Effet surtout fort dans les petites populations"],
            ["Conséquence", "Adaptation au milieu", "Perte ou fixation d’allèles, baisse de diversité"],
          ],
        },
        practice: [
          {
            id: "2nde-svt-04-s3-p1",
            prompt: "Dans quel cas la **dérive génétique** a-t-elle l’effet le plus fort ?",
            choices: ["Dans une très grande population", "Dans une petite population", "Seulement chez les bactéries"],
            answer: 1,
            explanation: "Comme pour des lancers de pièce, le hasard pèse beaucoup sur un petit nombre de reproductions. Dans une petite population, un allèle peut ainsi disparaître ou se fixer en quelques générations.",
          },
          {
            id: "2nde-svt-04-s3-p2",
            prompt: "Quelle condition favorise la formation d’une nouvelle espèce (**spéciation**) ?",
            choices: [
              "Le brassage permanent de toutes les populations",
              "L’isolement de deux populations",
              "L’absence totale de mutations",
              "Une population très nombreuse et unique",
            ],
            answer: 1,
            explanation: "Lorsque deux populations sont isolées, mutations, sélection et dérive les font diverger indépendamment. À terme, elles ne peuvent plus se reproduire entre elles : une nouvelle espèce est née.",
          },
          {
            id: "2nde-svt-04-s3-p3",
            prompt: "Quel aménagement aide à préserver la biodiversité en évitant l’isolement des populations ?",
            choices: ["Un corridor écologique", "Une autoroute", "Le drainage des zones humides", "L’introduction d’espèces exotiques"],
            answer: 0,
            explanation: "Un corridor écologique relie des habitats et permet aux individus de circuler. Les populations restent connectées et conservent de grands effectifs, ce qui limite la dérive et la perte de diversité génétique.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-svt-04-ex-1",
        prompt: "Quelles sont les trois échelles de la biodiversité ?",
        choices: [
          "Cellules, tissus, organes",
          "Écosystèmes, espèces, gènes",
          "Continents, pays, régions",
          "Animaux, végétaux, bactéries",
        ],
        answer: 1,
        explanation:
          "La biodiversité s’étudie à l’échelle des écosystèmes, des espèces (diversité spécifique) et des gènes (diversité génétique au sein d’une espèce).",
      },
      {
        id: "2nde-svt-04-ex-2",
        prompt: "Deux individus appartiennent à la même espèce s’ils :",
        choices: [
          "vivent dans le même écosystème",
          "ont la même couleur",
          "ont exactement les mêmes allèles",
          "peuvent se reproduire entre eux et avoir une descendance fertile",
        ],
        answer: 3,
        explanation:
          "Le critère de l’espèce est l’interfécondité avec descendance fertile. Le cheval et l’âne donnent un mulet stérile : ce sont deux espèces différentes.",
      },
      {
        id: "2nde-svt-04-ex-3",
        prompt: "La dérive génétique est :",
        choices: [
          "une variation aléatoire de la fréquence des allèles",
          "le tri des individus les mieux adaptés",
          "le déplacement des continents",
          "une mutation provoquée par l’environnement",
        ],
        answer: 0,
        explanation:
          "La dérive est due au hasard de la reproduction : la fréquence des allèles varie sans lien avec un avantage. Le tri des mieux adaptés correspond à la sélection naturelle.",
      },
      {
        id: "2nde-svt-04-ex-4",
        prompt: "Dans quel type de population la dérive génétique a-t-elle le plus d’effet ?",
        choices: [
          "Une très grande population",
          "Une population en forte croissance",
          "Une petite population isolée",
          "Elle a le même effet partout",
        ],
        answer: 2,
        explanation:
          "Dans une petite population, le hasard de la transmission des allèles pèse beaucoup plus, comme un petit nombre de lancers de pièce s’écarte facilement de 50 %.",
      },
      {
        id: "2nde-svt-04-ex-5",
        prompt: "Dans un écosystème, le biotope désigne :",
        choices: [
          "l’ensemble des êtres vivants",
          "le milieu de vie et ses caractéristiques physico-chimiques",
          "l’ensemble des gènes d’une espèce",
          "le prédateur principal",
        ],
        answer: 1,
        explanation:
          "Le biotope est le milieu physique (sol, eau, climat, lumière). L’ensemble des êtres vivants est la biocénose.",
      },
      {
        id: "2nde-svt-04-ex-6",
        prompt: "Laquelle de ces actions favorise la préservation de la biodiversité ?",
        choices: [
          "Introduire des espèces exotiques",
          "Fragmenter les forêts par des routes",
          "Augmenter les quotas de pêche",
          "Créer des corridors écologiques entre les habitats",
        ],
        answer: 3,
        explanation:
          "Les corridors écologiques (haies, passages à faune) relient les populations, limitent leur isolement et donc la perte de diversité génétique par dérive.",
      },
    ],
    test: [
      {
        id: "2nde-svt-04-ct-1",
        prompt:
          "On marque 50 poissons dans un étang. Plus tard, on en capture 40, dont 8 marqués. Quel est l’effectif estimé ?",
        choices: ["98", "160", "250", "400"],
        answer: 2,
        explanation: "N ≈ (M × C) ÷ R = (50 × 40) ÷ 8 = 2 000 ÷ 8 = 250 poissons.",
      },
      {
        id: "2nde-svt-04-ct-2",
        prompt:
          "Avant l’utilisation d’un insecticide, 1 % des moustiques sont résistants. Après 10 ans d’épandage, 90 % le sont. Quelle explication est correcte ?",
        choices: [
          "Les moustiques résistants, préexistants, ont survécu et se sont davantage reproduits",
          "L’insecticide a provoqué des mutations de résistance chez tous les moustiques",
          "Les moustiques ont appris à éviter l’insecticide",
          "La dérive génétique a éliminé les sensibles au hasard",
        ],
        answer: 0,
        explanation:
          "L’allèle de résistance existait déjà (1 %). L’insecticide exerce une pression de sélection : il tue les sensibles, les résistants se reproduisent et leur allèle devient majoritaire. Ce n’est pas le hasard (dérive) puisqu’il y a un avantage net.",
      },
      {
        id: "2nde-svt-04-ct-3",
        prompt:
          "Sur une île, une population de 15 lézards a perdu en 30 générations un allèle de couleur sans effet sur la survie. Sur le continent (100 000 lézards), cet allèle reste fréquent. Quel mécanisme explique la perte ?",
        choices: [
          "La sélection naturelle",
          "La dérive génétique",
          "Une mutation",
          "La transgenèse",
        ],
        answer: 1,
        explanation:
          "L’allèle n’a pas d’effet sur la survie : il n’y a pas de sélection. Sa perte dans une très petite population isolée s’explique par le hasard de la reproduction, c’est-à-dire la dérive génétique.",
      },
      {
        id: "2nde-svt-04-ct-4",
        prompt:
          "Le lion et le tigre peuvent donner en captivité un « ligre », généralement stérile chez le mâle. Que conclure ?",
        choices: [
          "Le lion et le tigre forment une seule espèce",
          "Le ligre est une nouvelle espèce",
          "Le lion et le tigre sont deux espèces distinctes",
          "La stérilité est due à la captivité",
        ],
        answer: 2,
        explanation:
          "Une espèce se définit par une descendance fertile. Le ligre étant le plus souvent stérile, le lion et le tigre restent deux espèces distinctes, bien que proches.",
      },
      {
        id: "2nde-svt-04-ct-5",
        prompt:
          "Dans une forêt de troncs clairs, on relâche autant de phalènes claires que sombres. On recapture 40 % des claires et 19 % des sombres. Que montre ce résultat ?",
        choices: [
          "Les phalènes sombres vivent plus longtemps quel que soit le milieu",
          "Les oiseaux préfèrent le goût des phalènes claires",
          "La couleur n’a aucun effet sur la survie",
          "Les phalènes claires sont avantagées dans ce milieu car mieux camouflées",
        ],
        answer: 3,
        explanation:
          "Davantage de phalènes claires ont survécu : sur des troncs clairs, elles sont moins visibles des prédateurs. L’avantage dépend du milieu, ce qui est au cœur de la sélection naturelle.",
      },
      {
        id: "2nde-svt-04-ct-6",
        prompt:
          "Le guépard présente une très faible diversité génétique, que l’on attribue à une forte réduction de ses effectifs il y a environ 10 000 ans. Comment appelle-t-on ce phénomène ?",
        choices: [
          "Un goulot d’étranglement suivi de dérive",
          "Une spéciation",
          "Une sélection artificielle",
          "Une crise de surpopulation",
        ],
        answer: 0,
        explanation:
          "Quand une population est réduite à quelques individus, une grande partie des allèles est perdue par hasard : c’est un goulot d’étranglement. Les descendants ont alors une faible diversité génétique, ce qui fragilise l’espèce (maladies, reproduction).",
      },
      {
        id: "2nde-svt-04-ct-7",
        prompt:
          "Un étudiant affirme : « Les girafes ont un long cou parce qu’elles ont eu besoin d’atteindre les feuilles hautes. » Pourquoi ce raisonnement est-il incorrect ?",
        choices: [
          "Parce que les girafes ne mangent pas de feuilles",
          "Parce que les variations apparaissent au hasard et que l’environnement sélectionne ensuite les plus favorables",
          "Parce que la longueur du cou n’est pas héréditaire",
          "Parce que l’évolution ne concerne que les végétaux",
        ],
        answer: 1,
        explanation:
          "Un besoin ne crée pas de mutation. Des variations de longueur du cou existaient au hasard ; celles qui procuraient un avantage (accès à la nourriture, mais aussi compétition entre mâles) ont été transmises davantage.",
      },
      {
        id: "2nde-svt-04-ct-8",
        prompt:
          "Une autoroute coupe une forêt en deux et isole deux populations de cerfs. À long terme, quel risque principal cela entraîne-t-il ?",
        choices: [
          "Une augmentation de la diversité génétique de chaque population",
          "Aucun, car les cerfs sont nombreux",
          "Une transformation immédiate en deux espèces",
          "Une perte de diversité génétique par dérive dans chaque population, plus petite",
        ],
        answer: 3,
        explanation:
          "La fragmentation crée des populations plus petites et isolées, où la dérive est plus forte et où les échanges d’allèles cessent. C’est pourquoi on construit des passages à faune (écoducs).",
      },
    ],
    homework: [
      {
        id: "2nde-svt-04-hw-1",
        prompt: "Un âne et une jument donnent un mulet, toujours stérile. Que peut-on en conclure ?",
        choices: [
          "L’âne et le cheval appartiennent à la même espèce",
          "Le mulet est une nouvelle espèce",
          "L’âne et le cheval sont deux espèces différentes",
        ],
        answer: 2,
        explanation: "Une espèce regroupe des individus pouvant donner une descendance **fertile**. Le mulet étant stérile, l’âne et le cheval appartiennent à deux espèces distinctes.",
      },
      {
        id: "2nde-svt-04-hw-2",
        prompt: "On marque 100 poissons ; plus tard, sur 50 poissons capturés, 5 sont marqués. Quelle est la taille estimée de la population ?",
        choices: ["250", "500", "1 000", "5 000"],
        answer: 2,
        explanation: "N ≈ (M × C) ÷ R = (100 × 50) ÷ 5 = 1 000. La proportion de marqués (5 sur 50, soit 10 %) est supposée la même que dans la population entière (100 sur 1 000).",
      },
      {
        id: "2nde-svt-04-hw-3",
        prompt: "À quand remonte la crise biologique de la fin du Crétacé ?",
        choices: ["66 millions d’années", "6,6 millions d’années", "660 millions d’années", "6 600 ans"],
        answer: 0,
        explanation: "La crise Crétacé–Paléogène date d’environ **66 millions d’années**. Elle a notamment fait disparaître les dinosaures non aviens et de nombreuses espèces marines.",
      },
      {
        id: "2nde-svt-04-hw-4",
        prompt: "Quelle est la conséquence principale d’un « goulot d’étranglement » sur une population ?",
        choices: ["Une augmentation de sa diversité génétique", "Une perte de diversité génétique", "L’apparition immédiate d’une nouvelle espèce"],
        answer: 1,
        explanation: "Après une forte réduction d’effectif, seuls quelques individus transmettent leurs allèles et la dérive agit fortement. La population perd ainsi une grande partie de sa diversité génétique.",
      },
    ],
  },
  {
    id: "2nde-svt-05",
    title: "Géosciences et dynamique des paysages (érosion, sédimentation, roches)",
    summary:
      "Les paysages sont façonnés par l’altération et l’érosion des roches, puis par le transport et la sédimentation des particules qui forment de nouvelles roches : un cycle permanent auquel l’être humain participe.",
    objectives: [
      "Je sais distinguer altération, érosion, transport et sédimentation.",
      "Je sais expliquer l’altération du granite et l’origine des sables et des argiles.",
      "Je sais expliquer la formation d’une roche sédimentaire (diagenèse).",
      "Je sais relier la vitesse d’un courant à la taille des particules transportées ou déposées.",
      "Je sais identifier l’impact des activités humaines sur l’érosion et la sédimentation.",
    ],
    sections: [
      {
        title: "Altération et érosion des roches",
        body: [
          "Les reliefs, même les plus imposants, s’usent en permanence. Cette usure commence par l’**altération** : la transformation physique et chimique des roches au contact de l’eau, de l’air et des êtres vivants. L’**altération physique** fragmente la roche sans changer ses minéraux (par exemple le **gel** : l’eau qui gèle dans les fissures augmente de volume d’environ 9 % et fait éclater la roche). L’**altération chimique** modifie les minéraux : l’eau, légèrement acide, dissout ou transforme certains minéraux.",
          "Le **granite**, roche magmatique des massifs anciens (Massif central, Bretagne), est formé de trois minéraux : **quartz**, **feldspaths** et **micas**. Sous l’action de l’eau, les feldspaths et les micas sont transformés en **argiles**, tandis que le quartz, très résistant, est libéré sous forme de grains de **sable**. Le granite devient une arène granitique friable, et des boules de granite plus résistantes subsistent (chaos granitiques).",
          "L’**érosion** désigne l’enlèvement des particules issues de l’altération, sous l’action de l’eau (ruissellement, rivières, vagues), du vent, des glaciers ou de la gravité. Elle dépend du climat, de la pente, de la nature de la roche et du **couvert végétal** : les racines des plantes retiennent le sol et limitent fortement l’érosion.",
          "Certaines substances sont emportées sous forme **dissoute** (ions calcium, sodium…), d’autres sous forme **solide** (blocs, galets, sables, argiles).",
        ],
        keyPoints: [
          "**Altération** : transformation physique ou chimique d’une roche sur place.",
          "**Érosion** : enlèvement et départ des produits de l’altération.",
          "Granite = quartz + feldspaths + micas ; altéré, il donne sables (quartz) et argiles.",
          "Le couvert végétal protège les sols de l’érosion.",
        ],
        example: {
          title: "Expliquer la formation d’un chaos granitique",
          steps: [
            "Le granite est découpé par un réseau de fractures (diaclases).",
            "L’eau s’infiltre dans ces fractures et altère le granite, plus vite sur les arêtes et les angles.",
            "Les blocs s’arrondissent, entourés d’arène sableuse.",
            "Le ruissellement emporte l’arène : il reste un amas de grosses boules de granite.",
          ],
        },
        figure: {
          type: "table",
          title: "Devenir des minéraux du granite lors de l’altération",
          headers: ["Minéral", "Comportement face à l’eau", "Produit de l’altération"],
          rows: [
            ["Quartz", "Très résistant", "Grains de sable"],
            ["Feldspaths", "Transformés chimiquement", "Argiles (et ions dissous)"],
            ["Micas", "Transformés chimiquement", "Argiles"],
          ],
        },
        practice: [
          {
            id: "2nde-svt-05-s1-p1",
            prompt: "L’eau qui gèle dans les fissures fait éclater la roche. De quel processus s’agit-il ?",
            choices: ["D’une altération chimique", "D’une altération physique", "D’une sédimentation", "D’une diagenèse"],
            answer: 1,
            explanation: "En gelant, l’eau augmente de volume d’environ 9 % et fragmente la roche sans modifier ses minéraux : c’est une altération **physique**. L’altération chimique, elle, transforme les minéraux.",
          },
          {
            id: "2nde-svt-05-s1-p2",
            prompt: "Quel minéral du granite résiste le mieux à l’altération ?",
            choices: ["Le feldspath", "Le mica", "Le quartz"],
            answer: 2,
            explanation: "Le quartz est très résistant : il est libéré intact sous forme de grains de sable. Les feldspaths et les micas, eux, sont transformés en argiles.",
          },
          {
            id: "2nde-svt-05-s1-p3",
            prompt: "Quel facteur limite fortement l’érosion d’un sol ?",
            choices: ["Une pente forte", "Un couvert végétal dense", "Des pluies violentes", "Un sol nu après labour"],
            answer: 1,
            explanation: "Les racines des plantes retiennent les particules du sol et la végétation amortit l’impact des pluies. Pente forte, pluies violentes et sol nu favorisent au contraire l’érosion.",
          },
        ],
      },
      {
        title: "Transport et sédimentation",
        body: [
          "Les particules arrachées sont **transportées** par l’eau, le vent ou la glace, parfois sur des milliers de kilomètres : la Loire transporte chaque année plusieurs millions de tonnes de sédiments vers l’océan. Pendant le transport, les particules s’usent et s’arrondissent (un galet de rivière est arrondi, un bloc près de la source est anguleux), et elles sont **triées** par taille.",
          "La capacité de transport d’un cours d’eau dépend de sa **vitesse** : plus le courant est rapide, plus il peut transporter de grosses particules. Quand la vitesse diminue (plaine, embouchure, lac, mer), les particules se **déposent** : c’est la **sédimentation**. Les plus grosses se déposent en premier, les plus fines (argiles) restent longtemps en suspension et se déposent en eau calme. Le **diagramme de Hjulström** représente ces relations entre vitesse du courant, taille des particules et comportement (érosion, transport, dépôt).",
          "Les sédiments se déposent en couches successives horizontales, les **strates**. Selon le **principe de superposition**, une strate est plus récente que celle qu’elle recouvre. Les lieux de dépôt majeurs sont les **bassins sédimentaires** : fonds océaniques, deltas, lacs, bassins comme le Bassin parisien.",
        ],
        keyPoints: [
          "**Sédimentation** : dépôt des particules quand l’agent de transport perd de l’énergie.",
          "Plus le courant est rapide, plus les particules transportées peuvent être grosses.",
          "Transport = usure (arrondi) + tri granulométrique.",
          "**Principe de superposition** : la couche du dessus est la plus récente.",
        ],
        example: {
          title: "Lire le diagramme de Hjulström",
          steps: [
            "Question : une rivière à 10 cm/s transporte-t-elle un galet de 5 cm ?",
            "Sur le diagramme, pour 5 cm (50 mm) et 10 cm/s, le point est dans le domaine « sédimentation ».",
            "Le galet se dépose (ou reste immobile).",
            "Un sable de 0,1 mm, au même courant, est dans le domaine « transport » : il continue d’être emporté.",
            "Conclusion : à vitesse égale, le courant trie les particules selon leur taille.",
          ],
        },
        figure: {
          type: "table",
          title: "Taille des particules et comportement lors du ralentissement du courant",
          caption: "Les plus grosses particules se déposent en premier ; les plus fines restent longtemps en suspension.",
          headers: ["Particule", "Taille", "Dépôt"],
          rows: [
            ["Galets et graviers", "> 2 mm", "En premier, dès que le courant ralentit"],
            ["Sables", "50 µm à 2 mm", "Courant modéré"],
            ["Limons", "2 à 50 µm", "Courant faible"],
            ["Argiles", "< 2 µm", "Seulement en eau très calme (lac, fond marin)"],
          ],
        },
        practice: [
          {
            id: "2nde-svt-05-s2-p1",
            prompt: "Quand la vitesse d’une rivière diminue, quelles particules se déposent en premier ?",
            choices: ["Les argiles", "Les limons", "Les plus grosses (galets, graviers)"],
            answer: 2,
            explanation: "La capacité de transport dépend de la vitesse du courant. Quand le courant ralentit, il ne peut plus porter les particules les plus lourdes, qui se déposent les premières ; les argiles restent en suspension.",
          },
          {
            id: "2nde-svt-05-s2-p2",
            prompt: "Un galet bien arrondi trouvé dans une rivière indique…",
            choices: [
              "qu’il vient d’être arraché à la roche",
              "qu’il a subi un long transport",
              "qu’il s’est formé sur place",
              "qu’il a été chauffé",
            ],
            answer: 1,
            explanation: "Pendant le transport, les particules s’entrechoquent et s’usent : leurs angles s’arrondissent. Un bloc anguleux est proche de sa source, un galet arrondi a parcouru une longue distance.",
          },
          {
            id: "2nde-svt-05-s2-p3",
            prompt: "Selon le **principe de superposition**, une strate…",
            choices: [
              "est plus récente que celle qu’elle recouvre",
              "est plus ancienne que celle qu’elle recouvre",
              "a toujours le même âge que les autres",
            ],
            answer: 0,
            explanation: "Les sédiments se déposent en couches successives : chaque couche se dépose sur les précédentes. La strate du dessus est donc la plus récente, sauf si les couches ont été retournées par la tectonique.",
          },
        ],
      },
      {
        title: "Des sédiments aux roches, et le rôle de l’être humain",
        body: [
          "Avec le temps, les sédiments meubles s’accumulent et s’enfouissent. Sous le poids des couches supérieures, ils sont **compactés** (l’eau est expulsée), puis **cimentés** par des minéraux qui précipitent entre les grains. Cette transformation en roche dure s’appelle la **diagenèse**. Ainsi, le sable devient **grès**, la boue argileuse devient argilite, les galets cimentés forment un **conglomérat**.",
          "D’autres roches sédimentaires ont une origine **biologique** ou **chimique** : le **calcaire** se forme souvent par accumulation de coquilles et squelettes calcaires d’organismes marins (la craie est formée de minuscules plaques d’algues, les coccolithes). On peut ainsi reconstituer les **paysages anciens** : un calcaire à coraux indique une mer chaude et peu profonde.",
          "Ces roches peuvent être un jour soulevées (formation de montagnes), à nouveau altérées et érodées : c’est le **cycle des roches**. Il fonctionne sur des millions d’années. Le relief résulte donc d’un équilibre entre les forces qui le créent (tectonique) et celles qui le détruisent (érosion).",
          "L’être humain modifie fortement ce cycle : la **déforestation** et le labour accélèrent l’érosion des sols ; les **barrages** retiennent les sédiments et privent les littoraux de sable (recul des plages) ; l’extraction de **granulats** (sables, graviers pour le béton) dans les rivières ou en mer est l’une des plus importantes exploitations de ressources au monde. Le sable, ressource non renouvelable à l’échelle humaine, devient rare.",
        ],
        keyPoints: [
          "**Diagenèse** : transformation d’un sédiment en roche (compaction + cimentation).",
          "Sable → grès ; galets → conglomérat ; coquilles calcaires → calcaire.",
          "Le **cycle des roches** relie altération, érosion, sédimentation, enfouissement, soulèvement.",
          "Barrages, déforestation et extraction de granulats modifient l’érosion et la sédimentation.",
        ],
        example: {
          title: "Reconstituer un paysage ancien à partir d’une roche",
          steps: [
            "On observe un grès formé de grains de quartz arrondis et bien triés, avec des fossiles de coquillages marins.",
            "Grains arrondis et triés : long transport par l’eau.",
            "Coquillages marins : dépôt en milieu marin.",
            "Conclusion : la région était autrefois une plage ou un fond marin peu profond, alimenté par l’érosion d’un massif granitique.",
          ],
        },
        figure: {
          type: "flow",
          title: "Le cycle des roches",
          caption: "Il fonctionne sur des millions d’années, entre tectonique (création de reliefs) et érosion (destruction).",
          steps: [
            {
              label: "Altération",
              detail: "Fragmentation et transformation des roches",
            },
            {
              label: "Érosion et transport",
              detail: "Eau, vent, glace ; usure et tri des particules",
            },
            {
              label: "Sédimentation",
              detail: "Dépôt en strates dans les bassins",
            },
            {
              label: "Diagenèse",
              detail: "Compaction puis cimentation : sable → grès",
            },
            {
              label: "Soulèvement",
              detail: "La tectonique forme de nouveaux reliefs, à nouveau altérés",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-05-s3-p1",
            prompt: "La **diagenèse** correspond à…",
            choices: [
              "la fonte d’une roche en profondeur",
              "la transformation d’un sédiment en roche par compaction et cimentation",
              "l’érosion d’un relief par le vent",
            ],
            answer: 1,
            explanation: "Enfoui sous d’autres couches, le sédiment est compacté (l’eau est expulsée) puis cimenté par des minéraux qui précipitent entre les grains. Il devient alors une roche sédimentaire dure.",
          },
          {
            id: "2nde-svt-05-s3-p2",
            prompt: "Quelle roche obtient-on par cimentation d’un sable ?",
            choices: ["Le granite", "Le conglomérat", "Le grès", "La craie"],
            answer: 2,
            explanation: "Un sable cimenté donne un **grès**. Des galets cimentés forment un conglomérat, et la craie provient de l’accumulation de coccolithes.",
          },
          {
            id: "2nde-svt-05-s3-p3",
            prompt: "Quel est l’effet des barrages sur les littoraux ?",
            choices: [
              "Ils apportent davantage de sable aux plages",
              "Ils retiennent les sédiments et favorisent le recul des plages",
              "Ils n’ont aucun effet sur les sédiments",
              "Ils transforment le sable en grès",
            ],
            answer: 1,
            explanation: "Les sédiments s’accumulent dans la retenue en amont du barrage au lieu d’atteindre la mer. Privées de cet apport, les plages ne sont plus alimentées et reculent sous l’effet des vagues.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-svt-05-ex-1",
        prompt: "Quels minéraux composent le granite ?",
        choices: [
          "Calcite, argile et sel",
          "Quartz, feldspaths et micas",
          "Quartz, calcite et charbon",
          "Uniquement du quartz",
        ],
        answer: 1,
        explanation:
          "Le granite est une roche magmatique formée de quartz (grains translucides), de feldspaths (blancs ou roses) et de micas (paillettes noires ou blanches).",
      },
      {
        id: "2nde-svt-05-ex-2",
        prompt: "Lors de l’altération du granite, quel minéral donne les grains de sable ?",
        choices: ["Le mica", "Le feldspath", "L’argile", "Le quartz"],
        answer: 3,
        explanation:
          "Le quartz résiste très bien à l’altération chimique : il est libéré sous forme de grains de sable. Feldspaths et micas se transforment en argiles.",
      },
      {
        id: "2nde-svt-05-ex-3",
        prompt: "Que signifie le terme « sédimentation » ?",
        choices: [
          "Le dépôt des particules transportées",
          "La transformation d’une roche sur place",
          "Le soulèvement d’une montagne",
          "La fusion d’une roche",
        ],
        answer: 0,
        explanation:
          "La sédimentation est le dépôt des particules lorsque l’agent de transport (eau, vent) perd de l’énergie, par exemple quand le courant ralentit.",
      },
      {
        id: "2nde-svt-05-ex-4",
        prompt: "Quelle roche obtient-on par diagenèse d’un sable ?",
        choices: ["Le granite", "Le calcaire", "Le grès", "Le basalte"],
        answer: 2,
        explanation:
          "Un sable compacté puis cimenté devient un grès. Le granite et le basalte sont des roches magmatiques, pas sédimentaires.",
      },
      {
        id: "2nde-svt-05-ex-5",
        prompt: "Pourquoi les galets d’une rivière sont-ils arrondis ?",
        choices: [
          "Ils ont été fondus",
          "Ils ont été usés par les chocs et frottements durant le transport",
          "Ils se sont formés ronds dans le sol",
          "Ils ont été dissous par l’eau",
        ],
        answer: 1,
        explanation:
          "Pendant le transport, les particules s’entrechoquent et frottent sur le fond : leurs angles s’usent. Plus le transport est long, plus elles sont arrondies.",
      },
      {
        id: "2nde-svt-05-ex-6",
        prompt: "Quel facteur limite l’érosion d’un sol en pente ?",
        choices: [
          "Le labour dans le sens de la pente",
          "La déforestation",
          "Les pluies intenses",
          "La présence d’un couvert végétal",
        ],
        answer: 3,
        explanation:
          "Les racines retiennent le sol et la végétation freine le ruissellement. À l’inverse, la déforestation et le labour dans le sens de la pente favorisent l’érosion.",
      },
    ],
    test: [
      {
        id: "2nde-svt-05-ct-1",
        prompt:
          "Un fleuve ralentit fortement en arrivant dans la mer. Dans quel ordre les particules se déposent-elles en s’éloignant de l’embouchure ?",
        choices: [
          "Argiles, puis sables, puis graviers",
          "Toutes en même temps au même endroit",
          "Graviers, puis sables, puis argiles",
          "Sables, puis argiles, puis graviers",
        ],
        answer: 2,
        explanation:
          "Les particules les plus grosses se déposent dès que la vitesse diminue un peu ; les plus fines (argiles) restent en suspension et vont plus loin, en eau calme. On observe donc un tri : graviers près de l’embouchure, puis sables, puis argiles au large.",
      },
      {
        id: "2nde-svt-05-ct-2",
        prompt:
          "Depuis la construction de barrages sur un fleuve, les plages situées à son embouchure reculent. Quelle explication est la plus pertinente ?",
        choices: [
          "Les barrages retiennent les sédiments qui alimentaient les plages",
          "Les barrages augmentent le niveau de la mer",
          "Les barrages produisent de l’argile qui recouvre le sable",
          "Les barrages accélèrent le courant du fleuve",
        ],
        answer: 0,
        explanation:
          "Le sable des plages est apporté par les fleuves. Les barrages piègent les sédiments dans leur retenue : les plages ne sont plus alimentées et l’érosion par les vagues n’est plus compensée.",
      },
      {
        id: "2nde-svt-05-ct-3",
        prompt:
          "Dans une falaise, une couche de calcaire à coraux est recouverte par une couche de grès. Que peut-on affirmer ?",
        choices: [
          "Le grès est plus ancien que le calcaire",
          "Les deux roches se sont formées au même moment",
          "Le calcaire s’est formé dans un désert",
          "Le calcaire est plus ancien et s’est formé dans une mer chaude peu profonde",
        ],
        answer: 3,
        explanation:
          "Principe de superposition : la couche inférieure (calcaire) est la plus ancienne. Les coraux vivent dans des mers chaudes et peu profondes, ce qui renseigne sur le paysage de l’époque.",
      },
      {
        id: "2nde-svt-05-ct-4",
        prompt:
          "On compare deux granites : l’un sous climat tropical humide, l’autre sous climat froid et sec. Lequel est le plus profondément altéré chimiquement ?",
        choices: [
          "Le granite du climat froid et sec",
          "Le granite du climat tropical humide",
          "Les deux de la même façon",
          "Aucun, le granite ne s’altère pas",
        ],
        answer: 1,
        explanation:
          "L’altération chimique est favorisée par l’eau et la chaleur : sous climat tropical humide, le granite peut être altéré sur des dizaines de mètres. Sous climat froid et sec, c’est surtout l’altération physique (gel) qui agit, en surface.",
      },
      {
        id: "2nde-svt-05-ct-5",
        prompt:
          "Un sédiment récent contient 40 % d’eau ; la roche correspondante, enfouie à 2 km, n’en contient que 5 %. Quel processus de la diagenèse est mis en évidence ?",
        choices: [
          "La compaction sous le poids des sédiments sus-jacents",
          "L’altération chimique",
          "Le transport par le vent",
          "La fusion",
        ],
        answer: 0,
        explanation:
          "En s’enfouissant, le sédiment supporte le poids des couches au-dessus : les grains se rapprochent et l’eau est expulsée. C’est la compaction, première étape de la diagenèse avant la cimentation.",
      },
      {
        id: "2nde-svt-05-ct-6",
        prompt:
          "Après un incendie de forêt sur un versant, les rivières en aval deviennent beaucoup plus boueuses lors des pluies. Pourquoi ?",
        choices: [
          "Le feu a fondu les roches",
          "Les cendres sont des argiles",
          "Sans végétation, le ruissellement érode davantage le sol",
          "Les pluies sont plus abondantes après un incendie",
        ],
        answer: 2,
        explanation:
          "La végétation détruite ne retient plus le sol et ne freine plus l’eau : le ruissellement arrache beaucoup plus de particules, qui rendent les rivières boueuses.",
      },
      {
        id: "2nde-svt-05-ct-7",
        prompt:
          "D’après le diagramme de Hjulström, les argiles très fines sont difficiles à éroder une fois déposées mais restent transportées même à très faible vitesse. Quelle conséquence ?",
        choices: [
          "Les argiles se déposent toujours près des montagnes",
          "Les argiles ne se déposent qu’en eau très calme (lacs, fonds marins)",
          "Les argiles ne sont jamais transportées",
          "Les argiles se déposent avant les graviers",
        ],
        answer: 1,
        explanation:
          "Les particules fines restent en suspension tant qu’il y a un faible courant ; elles ne sédimentent que dans les milieux très calmes, comme les lacs ou les fonds marins profonds.",
      },
      {
        id: "2nde-svt-05-ct-8",
        prompt:
          "Une roche est formée de galets arrondis de tailles variées liés par un ciment. Comment s’appelle-t-elle et qu’indique-t-elle ?",
        choices: [
          "Un granite, formé en profondeur",
          "Une argilite, déposée en eau calme",
          "Une craie, formée de coccolithes",
          "Un conglomérat, déposé par un courant puissant après transport",
        ],
        answer: 3,
        explanation:
          "Des galets cimentés forment un conglomérat. Les galets arrondis témoignent d’un transport ; leur grande taille indique un courant fort (torrent, rivière en crue) au moment du dépôt.",
      },
    ],
    homework: [
      {
        id: "2nde-svt-05-hw-1",
        prompt: "De quoi la **craie** est-elle principalement formée ?",
        choices: [
          "De grains de quartz",
          "De minuscules plaques calcaires d’algues, les coccolithes",
          "D’argiles compactées",
          "De cristaux de feldspath",
        ],
        answer: 1,
        explanation: "La craie est une roche calcaire d’origine biologique, formée par l’accumulation de coccolithes, plaques produites par des algues microscopiques. C’est un exemple de roche sédimentaire d’origine biologique.",
      },
      {
        id: "2nde-svt-05-hw-2",
        prompt: "Que représente le **diagramme de Hjulström** ?",
        choices: [
          "L’évolution de la température au cours du temps",
          "La composition chimique du granite",
          "La relation entre vitesse du courant, taille des particules et érosion, transport ou dépôt",
        ],
        answer: 2,
        explanation: "Le diagramme de Hjulström indique, pour une taille de particule et une vitesse du courant données, si la particule est érodée, transportée ou déposée. Il permet d’expliquer le tri des sédiments.",
      },
      {
        id: "2nde-svt-05-hw-3",
        prompt: "Un calcaire contenant des coraux fossiles indique un ancien milieu…",
        choices: ["marin chaud et peu profond", "glaciaire", "désertique", "de haute montagne"],
        answer: 0,
        explanation: "Les coraux constructeurs de récifs vivent aujourd’hui dans des mers chaudes et peu profondes. En appliquant ce principe d’actualisme, on reconstitue le paysage ancien.",
      },
      {
        id: "2nde-svt-05-hw-4",
        prompt: "Quelle est la différence entre **altération** et **érosion** ?",
        choices: [
          "Ce sont deux synonymes",
          "L’altération transforme la roche sur place, l’érosion enlève les produits de l’altération",
          "L’érosion transforme la roche sur place, l’altération transporte les particules",
        ],
        answer: 1,
        explanation: "L’altération désigne la transformation physique ou chimique de la roche à l’endroit où elle se trouve. L’érosion correspond à l’enlèvement et au départ des particules produites.",
      },
    ],
  },
  {
    id: "2nde-svt-06",
    title: "Agrosystèmes, sols et développement durable",
    summary:
      "Un agrosystème est un écosystème géré par l’être humain pour produire de la biomasse ; son fonctionnement exporte de la matière et repose sur un sol vivant qu’il faut préserver par des pratiques durables.",
    objectives: [
      "Je sais comparer un agrosystème et un écosystème naturel.",
      "Je sais expliquer les flux de matière et la notion d’exportation de biomasse.",
      "Je sais décrire la composition et la formation d’un sol.",
      "Je sais expliquer le rôle du complexe argilo-humique et des organismes du sol.",
      "Je sais discuter les impacts des intrants et des pratiques d’une agriculture durable.",
    ],
    sections: [
      {
        title: "Écosystème et agrosystème",
        body: [
          "Dans un **écosystème naturel**, la matière circule en boucle. Les **producteurs** (végétaux chlorophylliens) fabriquent de la matière organique par photosynthèse ; les **consommateurs** (herbivores, carnivores) la mangent ; les **décomposeurs** (bactéries, champignons, petits animaux du sol) transforment les cadavres et déchets en **matière minérale**, réutilisée par les végétaux. Les éléments comme l’azote, le phosphore, le potassium sont ainsi **recyclés** sur place.",
          "Un **agrosystème** (champ de blé, verger, élevage) est un écosystème aménagé par l’être humain pour **produire** de la nourriture, des fibres ou de l’énergie. Il se distingue par une faible diversité (souvent une seule espèce cultivée), un contrôle des autres espèces (désherbage, traitements) et surtout par l’**exportation** de la biomasse : la récolte quitte le champ, avec les éléments minéraux qu’elle contient.",
          "Pour compenser ces pertes et augmenter les rendements, l’agriculteur apporte des **intrants** : engrais (minéraux ou organiques comme le fumier), eau d’irrigation, pesticides, énergie (carburant des machines). Un agrosystème n’est donc pas autonome : il dépend d’apports extérieurs.",
          "La **productivité** d’un agrosystème se mesure en biomasse produite par unité de surface et de temps (ex. : tonnes de blé par hectare et par an). Il faut aussi tenir compte des **pertes** dans les chaînes alimentaires : pour produire 1 kg de viande de bœuf, il faut plusieurs kilos de végétaux, car l’animal utilise l’essentiel de sa nourriture pour respirer et vivre.",
        ],
        keyPoints: [
          "Écosystème naturel : recyclage local de la matière (producteurs → consommateurs → décomposeurs).",
          "**Agrosystème** : écosystème géré, peu diversifié, dont la biomasse est exportée.",
          "**Intrants** : apports extérieurs (engrais, eau, pesticides, énergie).",
          "Une production animale nécessite beaucoup plus de surface qu’une production végétale.",
        ],
        formulas: ["Rendement d’un transfert = (biomasse produite au niveau n+1 ÷ biomasse consommée au niveau n) × 100"],
        example: {
          title: "Comparer production végétale et animale",
          steps: [
            "Un bovin consomme environ 10 kg de végétaux (matière sèche) pour produire 1 kg de viande.",
            "Rendement du transfert ≈ 1 ÷ 10 × 100 = 10 %.",
            "Les 90 % restants sont utilisés pour la respiration, rejetés (excréments) ou non consommés.",
            "Conclusion : une alimentation riche en produits végétaux mobilise moins de surface agricole.",
          ],
        },
        figure: {
          type: "table",
          title: "Écosystème naturel et agrosystème",
          headers: ["Critère", "Écosystème naturel", "Agrosystème"],
          rows: [
            ["Biodiversité", "Élevée", "Faible (souvent une seule espèce cultivée)"],
            ["Devenir de la biomasse", "Recyclée sur place par les décomposeurs", "En grande partie exportée (récolte)"],
            ["Apports extérieurs", "Aucun", "Intrants : engrais, eau, pesticides, énergie"],
            ["Fonctionnement", "Autonome", "Géré et contrôlé par l’être humain"],
          ],
        },
        practice: [
          {
            id: "2nde-svt-06-s1-p1",
            prompt: "Lequel de ces éléments est un **intrant** agricole ?",
            choices: ["La récolte de blé", "Un engrais", "La photosynthèse", "Les décomposeurs du sol"],
            answer: 1,
            explanation: "Un intrant est un apport extérieur à l’agrosystème : engrais, eau d’irrigation, pesticides, carburant. La récolte est au contraire une exportation de biomasse.",
          },
          {
            id: "2nde-svt-06-s1-p2",
            prompt: "Un animal consomme 5 kg de végétaux pour produire 0,5 kg de chair. Quel est le rendement de ce transfert ?",
            choices: ["50 %", "5 %", "10 %", "1 %"],
            answer: 2,
            explanation: "Rendement = (0,5 ÷ 5) × 100 = 10 %. Les 90 % restants sont utilisés pour la respiration, rejetés dans les excréments ou non consommés.",
          },
          {
            id: "2nde-svt-06-s1-p3",
            prompt: "Quel est le rôle des **décomposeurs** dans un écosystème ?",
            choices: [
              "Transformer la matière organique morte en matière minérale",
              "Produire de la matière organique par photosynthèse",
              "Consommer uniquement des herbivores",
            ],
            answer: 0,
            explanation: "Bactéries, champignons et petits animaux du sol dégradent cadavres et déchets en matière minérale. Celle-ci est réutilisée par les végétaux, ce qui ferme le cycle de la matière.",
          },
        ],
      },
      {
        title: "Le sol, un milieu vivant et fragile",
        body: [
          "Le **sol** est la couche superficielle meuble de la Terre, située entre la roche (la **roche mère**) et l’atmosphère. Il est formé d’une **fraction minérale** (sables, limons, argiles issus de l’altération de la roche), d’une **fraction organique** (débris végétaux, **humus**), d’eau, d’air et d’une immense quantité d’êtres vivants : une cuillère à soupe de sol peut contenir des milliards de bactéries.",
          "Un sol est organisé en couches parallèles à la surface, les **horizons** : en haut une litière de feuilles, puis un horizon riche en humus (sombre), puis un horizon d’altération, et enfin la roche mère. Sa formation (**pédogenèse**) résulte de l’altération de la roche mère et de l’incorporation de matière organique. Elle est **très lente** : il faut de l’ordre de 1 000 à 10 000 ans pour former un mètre de sol. À l’échelle humaine, le sol est donc une **ressource non renouvelable**.",
          "Les **décomposeurs** et la faune du sol (vers de terre, collemboles, acariens) fragmentent et minéralisent la matière organique, libérant des **ions minéraux** (nitrates, phosphates, potassium) assimilables par les racines. Les vers de terre creusent des galeries qui aèrent le sol et favorisent l’infiltration de l’eau. Les racines de nombreuses plantes s’associent à des champignons (**mycorhizes**) qui améliorent leur nutrition.",
          "Les argiles et l’humus s’associent pour former le **complexe argilo-humique** (CAH). Chargé négativement, il **retient les ions positifs** (K⁺, Ca²⁺, Mg²⁺, NH₄⁺) et les empêche d’être entraînés par l’eau : c’est une réserve de nutriments pour les plantes. En revanche, les ions négatifs comme les **nitrates** (NO₃⁻) ne sont pas retenus et sont facilement lessivés vers les nappes.",
        ],
        keyPoints: [
          "Sol = fraction minérale + matière organique (humus) + eau + air + êtres vivants.",
          "**Horizons** : couches successives du sol ; **roche mère** à la base.",
          "**Complexe argilo-humique** : retient les ions positifs, réservoir de fertilité.",
          "Les nitrates (ions négatifs) sont peu retenus et facilement lessivés.",
          "Le sol se forme très lentement : ressource non renouvelable à l’échelle humaine.",
        ],
        example: {
          title: "Interpréter une expérience de lessivage",
          steps: [
            "On verse une solution contenant des ions K⁺ (positifs) et NO₃⁻ (négatifs) sur deux colonnes : sable pur, et terre riche en argile et humus.",
            "On analyse l’eau recueillie en bas.",
            "Sable : K⁺ et NO₃⁻ ressortent tous les deux.",
            "Terre : NO₃⁻ ressort, mais K⁺ est en grande partie retenu.",
            "Conclusion : le complexe argilo-humique retient les ions positifs, pas les nitrates.",
          ],
        },
        figure: {
          type: "bars",
          title: "Composition volumique d’un sol cultivé en bon état",
          caption: "Valeurs indicatives classiques ; elles varient selon le type de sol et son humidité.",
          unit: "%",
          data: [
            {
              label: "Matière minérale",
              value: 45,
            },
            {
              label: "Eau",
              value: 25,
            },
            {
              label: "Air",
              value: 25,
            },
            {
              label: "Matière organique",
              value: 5,
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-06-s2-p1",
            prompt: "Lequel de ces ions est retenu par le **complexe argilo-humique** ?",
            choices: ["Le nitrate NO₃⁻", "Le potassium K⁺", "Aucun ion n’est retenu"],
            answer: 1,
            explanation: "Le complexe argilo-humique est chargé négativement : il retient les ions **positifs** comme K⁺, Ca²⁺ ou NH₄⁺. Les ions négatifs, comme les nitrates, ne sont pas retenus et sont lessivés.",
          },
          {
            id: "2nde-svt-06-s2-p2",
            prompt: "Combien de temps faut-il environ pour former un mètre de sol ?",
            choices: ["Quelques mois", "Une dizaine d’années", "De l’ordre de 1 000 à 10 000 ans", "Plusieurs milliards d’années"],
            answer: 2,
            explanation: "La pédogenèse, qui associe altération de la roche mère et incorporation de matière organique, est très lente. C’est pourquoi le sol est une ressource non renouvelable à l’échelle humaine.",
          },
          {
            id: "2nde-svt-06-s2-p3",
            prompt: "Quel est l’un des rôles des vers de terre dans le sol ?",
            choices: ["Ils aèrent le sol et favorisent l’infiltration de l’eau", "Ils réalisent la photosynthèse", "Ils détruisent l’humus"],
            answer: 0,
            explanation: "En creusant leurs galeries, les vers de terre aèrent le sol et facilitent la circulation de l’eau. Ils participent aussi à la fragmentation et au mélange de la matière organique.",
          },
        ],
      },
      {
        title: "Vers une agriculture durable",
        body: [
          "L’agriculture intensive a fortement augmenté les rendements depuis 1950, mais avec des **impacts** : excès d’**engrais azotés** non absorbés par les cultures → lessivage des **nitrates** vers les rivières et les nappes → **eutrophisation** (prolifération d’algues, manque d’O₂, mort des poissons, « marées vertes » en Bretagne) et eau impropre à la consommation. Les **pesticides** peuvent nuire aux insectes pollinisateurs et à la biodiversité. Le labour intensif et les sols nus favorisent l’**érosion** et la perte de matière organique.",
          "Le **développement durable** vise à répondre aux besoins actuels sans compromettre ceux des générations futures, en conciliant enjeux **environnementaux**, **économiques** et **sociaux**. En agriculture, cela passe par des pratiques comme : la **rotation des cultures** (alterner les espèces sur une parcelle), l’introduction de **légumineuses** (pois, luzerne, trèfle) qui, grâce à des bactéries de leurs racines, fixent l’azote de l’air et enrichissent le sol, les **cultures intermédiaires** (couverts végétaux en hiver) qui piègent les nitrates et protègent de l’érosion.",
          "D’autres leviers : la **lutte biologique** (utiliser des coccinelles contre les pucerons), le maintien des **haies** (abri pour les auxiliaires, frein à l’érosion), la réduction du travail du sol (agriculture de conservation), l’**agriculture de précision** (doser les engrais selon les besoins mesurés) et l’agroforesterie. L’agriculture biologique interdit les engrais et pesticides de synthèse.",
          "Enfin, nos choix alimentaires comptent : limiter le gaspillage (environ un tiers de la nourriture produite dans le monde est perdue ou gaspillée) et rééquilibrer la part des produits animaux réduisent la pression sur les sols.",
        ],
        keyPoints: [
          "Excès de nitrates → **eutrophisation** des eaux.",
          "**Légumineuses** : fixent l’azote atmosphérique grâce à des bactéries symbiotiques.",
          "Pratiques durables : rotations, couverts végétaux, haies, lutte biologique, dosage raisonné.",
          "Développement durable : environnement + économie + social.",
        ],
        example: {
          title: "Analyser une rotation avec légumineuse",
          steps: [
            "Parcelle A : blé tous les ans, avec 180 kg d’azote minéral par hectare.",
            "Parcelle B : luzerne une année, puis blé avec seulement 100 kg d’azote par hectare.",
            "Les rendements en blé sont comparables.",
            "Interprétation : la luzerne a enrichi le sol en azote grâce aux bactéries de ses racines.",
            "Conclusion : la rotation réduit les engrais, donc les coûts et les risques de pollution aux nitrates.",
          ],
        },
        figure: {
          type: "flow",
          title: "De l’excès d’engrais à l’eutrophisation",
          steps: [
            {
              label: "Excès d’engrais azotés",
              detail: "Non absorbés par les cultures",
            },
            {
              label: "Lessivage des nitrates",
              detail: "Vers les rivières et les nappes",
            },
            {
              label: "Prolifération d’algues",
              detail: "Marées vertes, eaux troubles",
            },
            {
              label: "Décomposition des algues",
              detail: "Les bactéries consomment le O₂ de l’eau",
            },
            {
              label: "Manque de dioxygène",
              detail: "Mort des poissons, perte de biodiversité",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-06-s3-p1",
            prompt: "Pourquoi les **légumineuses** enrichissent-elles le sol en azote ?",
            choices: [
              "Elles absorbent les nitrates des nappes",
              "Des bactéries de leurs racines fixent l’azote de l’air",
              "Elles produisent des engrais de synthèse",
              "Elles retiennent l’azote du complexe argilo-humique",
            ],
            answer: 1,
            explanation: "Les légumineuses (pois, luzerne, trèfle) vivent en symbiose avec des bactéries de leurs racines qui fixent le diazote atmosphérique. Cet azote enrichit ensuite le sol, ce qui réduit le besoin d’engrais.",
          },
          {
            id: "2nde-svt-06-s3-p2",
            prompt: "Quelle est la cause principale de l’**eutrophisation** des eaux en zone agricole ?",
            choices: ["Un excès de nitrates provenant des engrais", "Un manque de pluie", "La présence de haies"],
            answer: 0,
            explanation: "Les nitrates en excès, lessivés vers les cours d’eau, provoquent la prolifération d’algues. Leur décomposition consomme le dioxygène de l’eau et entraîne la mort des poissons.",
          },
          {
            id: "2nde-svt-06-s3-p3",
            prompt: "Lequel de ces exemples relève de la **lutte biologique** ?",
            choices: [
              "Pulvériser un insecticide de synthèse",
              "Labourer profondément",
              "Utiliser des coccinelles contre les pucerons",
              "Augmenter les doses d’engrais",
            ],
            answer: 2,
            explanation: "La lutte biologique utilise des êtres vivants, comme les coccinelles prédatrices des pucerons, pour limiter les ravageurs. Elle réduit l’usage de pesticides chimiques.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-svt-06-ex-1",
        prompt: "Qu’est-ce qui distingue principalement un agrosystème d’un écosystème naturel ?",
        choices: [
          "L’absence de photosynthèse",
          "L’absence de sol",
          "L’exportation de la biomasse par les récoltes",
          "L’absence de décomposeurs",
        ],
        answer: 2,
        explanation:
          "Dans un agrosystème, la biomasse produite est récoltée et quitte la parcelle : la matière n’est plus recyclée sur place, d’où la nécessité d’apports d’engrais.",
      },
      {
        id: "2nde-svt-06-ex-2",
        prompt: "Quel est le rôle principal des décomposeurs du sol ?",
        choices: [
          "Transformer la matière organique en matière minérale",
          "Réaliser la photosynthèse",
          "Produire des pesticides",
          "Fixer le dioxygène de l’air",
        ],
        answer: 0,
        explanation:
          "Bactéries, champignons et faune du sol dégradent les débris organiques et libèrent des ions minéraux réutilisables par les végétaux : c’est la minéralisation.",
      },
      {
        id: "2nde-svt-06-ex-3",
        prompt: "Le complexe argilo-humique retient principalement :",
        choices: [
          "les nitrates",
          "les ions positifs comme K⁺ et Ca²⁺",
          "les grains de sable",
          "le dioxyde de carbone",
        ],
        answer: 1,
        explanation:
          "Chargé négativement, le complexe argilo-humique fixe les ions positifs (cations) et les met à disposition des racines. Les nitrates, négatifs, ne sont pas retenus.",
      },
      {
        id: "2nde-svt-06-ex-4",
        prompt: "Pourquoi le sol est-il considéré comme une ressource non renouvelable à l’échelle humaine ?",
        choices: [
          "Parce qu’il ne contient aucun être vivant",
          "Parce qu’il est formé de pétrole",
          "Parce qu’il est fabriqué par l’être humain",
          "Parce que sa formation demande des milliers d’années",
        ],
        answer: 3,
        explanation:
          "La pédogenèse est très lente (1 000 à 10 000 ans pour un mètre). Un sol perdu par érosion ne se reconstitue donc pas à l’échelle d’une vie humaine.",
      },
      {
        id: "2nde-svt-06-ex-5",
        prompt: "Quelles plantes enrichissent naturellement le sol en azote ?",
        choices: ["Les légumineuses (pois, luzerne, trèfle)", "Les céréales (blé, maïs)", "Les conifères", "Les mousses"],
        answer: 0,
        explanation:
          "Les légumineuses abritent dans des nodosités de leurs racines des bactéries (Rhizobium) qui fixent l’azote de l’air ; elles enrichissent le sol pour les cultures suivantes.",
      },
      {
        id: "2nde-svt-06-ex-6",
        prompt: "L’eutrophisation d’une rivière est principalement causée par :",
        choices: [
          "un manque de lumière",
          "un excès d’ions nutritifs (nitrates, phosphates)",
          "une baisse de la température",
          "un excès de dioxygène",
        ],
        answer: 1,
        explanation:
          "L’excès de nitrates et de phosphates provoque une prolifération d’algues ; leur décomposition par les bactéries consomme le O₂ de l’eau, ce qui asphyxie les animaux aquatiques.",
      },
    ],
    test: [
      {
        id: "2nde-svt-06-ct-1",
        prompt:
          "Une forêt naturelle se maintient sans engrais depuis des siècles, alors qu’un champ de maïs voit ses rendements chuter en quelques années sans engrais. Pourquoi ?",
        choices: [
          "Le maïs ne fait pas de photosynthèse",
          "La forêt reçoit plus de pluie",
          "Dans la forêt, la matière est recyclée sur place ; dans le champ, la récolte exporte les éléments minéraux",
          "Le sol de la forêt ne contient pas de décomposeurs",
        ],
        answer: 2,
        explanation:
          "En forêt, feuilles et bois morts retournent au sol et sont minéralisés : la boucle est fermée. Dans le champ, la récolte emporte azote, phosphore et potassium, qu’il faut restituer par des engrais.",
      },
      {
        id: "2nde-svt-06-ct-2",
        prompt:
          "On mesure les nitrates dans une rivière : pics en hiver, sous des champs laissés nus après la récolte. Quelle pratique serait la plus efficace pour réduire ces pics ?",
        choices: [
          "Labourer plus profondément",
          "Implanter des cultures intermédiaires (couverts végétaux) en hiver",
          "Augmenter les apports d’engrais en automne",
          "Arracher les haies",
        ],
        answer: 1,
        explanation:
          "En hiver, sans plantes pour les absorber, les nitrates sont lessivés par les pluies. Un couvert végétal les capte (« piège à nitrates ») et protège aussi le sol de l’érosion.",
      },
      {
        id: "2nde-svt-06-ct-3",
        prompt:
          "Une prairie fournit 10 t de végétaux par hectare, qui permettent de produire 1 t de bovins. Combien de personnes nourrit-on, en énergie, en consommant directement des végétaux plutôt que de la viande ?",
        choices: [
          "Moins de personnes",
          "Autant de personnes",
          "Exactement deux fois plus",
          "Environ dix fois plus, car on évite la perte du transfert vers l’animal",
        ],
        answer: 3,
        explanation:
          "Le rendement du transfert végétal → bovin est d’environ 10 %. Consommer directement des végétaux (comestibles par l’homme) évite cette perte : à surface égale, on nourrit beaucoup plus de personnes. Ce calcul est simplifié (toutes les prairies ne sont pas cultivables), mais le principe est juste.",
      },
      {
        id: "2nde-svt-06-ct-4",
        prompt:
          "On compte 300 vers de terre par m² dans une prairie et 30 dans un champ labouré et traité chaque année. Quelle conséquence pour le sol du champ ?",
        choices: [
          "Un sol moins aéré, une infiltration de l’eau réduite et une moindre décomposition de la matière organique",
          "Aucune conséquence, les vers sont inutiles",
          "Un sol plus fertile",
          "Une augmentation de l’humus",
        ],
        answer: 0,
        explanation:
          "Les vers de terre creusent des galeries (aération, infiltration) et participent à la fragmentation de la matière organique. Leur raréfaction appauvrit le fonctionnement biologique du sol et favorise le ruissellement.",
      },
      {
        id: "2nde-svt-06-ct-5",
        prompt:
          "Un sol sableux et un sol argileux reçoivent la même dose d’engrais potassique (K⁺). Une semaine de pluie plus tard, lequel a perdu le plus de potassium ?",
        choices: [
          "Le sol argileux, car l’argile est imperméable",
          "Les deux de la même façon",
          "Le sol sableux, car il n’a presque pas de complexe argilo-humique pour retenir K⁺",
          "Aucun, car le potassium ne se dissout pas",
        ],
        answer: 2,
        explanation:
          "Le sable n’a pas de charges capables de fixer les cations : K⁺ est lessivé. Dans le sol argileux, le complexe argilo-humique retient K⁺.",
      },
      {
        id: "2nde-svt-06-ct-6",
        prompt:
          "Dans un verger, on remplace un insecticide par des lâchers de coccinelles contre les pucerons. Quel est l’intérêt principal de cette pratique ?",
        choices: [
          "Augmenter l’exportation de biomasse",
          "Réduire l’usage de produits chimiques nuisibles aux pollinisateurs et à la biodiversité",
          "Éliminer tous les insectes du verger",
          "Fertiliser le sol en azote",
        ],
        answer: 1,
        explanation:
          "La lutte biologique utilise des prédateurs naturels (auxiliaires) des ravageurs. Elle limite les pesticides, qui touchent aussi les insectes utiles comme les abeilles.",
      },
      {
        id: "2nde-svt-06-ct-7",
        prompt:
          "Un agriculteur mesure les besoins de sa culture par capteurs et n’apporte que la quantité d’engrais nécessaire. Quel double bénéfice obtient-il ?",
        choices: [
          "Une baisse des rendements et des coûts",
          "Une hausse de l’érosion et des rendements",
          "Une augmentation des nitrates dans les nappes",
          "Une baisse des coûts et des pertes de nitrates vers l’environnement",
        ],
        answer: 3,
        explanation:
          "L’agriculture de précision évite les excès d’engrais : moins d’achats (bénéfice économique) et moins de nitrates non absorbés lessivés vers les eaux (bénéfice environnemental), sans perte de rendement.",
      },
      {
        id: "2nde-svt-06-ct-8",
        prompt:
          "Dans une coupe de sol, l’horizon supérieur est sombre et riche en débris végétaux, l’horizon inférieur est clair avec des fragments de roche. Comment l’interpréter ?",
        choices: [
          "L’horizon supérieur est riche en humus ; l’inférieur est proche de la roche mère en cours d’altération",
          "L’horizon supérieur est le plus ancien",
          "L’horizon inférieur est formé par les vers de terre",
          "Les deux horizons ont la même origine et la même composition",
        ],
        answer: 0,
        explanation:
          "La matière organique s’accumule en surface (humus, couleur sombre). En profondeur, on passe progressivement à la roche mère altérée, d’où les fragments de roche : le sol se forme à partir du haut (matière organique) et du bas (altération).",
      },
    ],
    homework: [
      {
        id: "2nde-svt-06-hw-1",
        prompt: "Comment s’appellent les couches successives d’un sol, parallèles à la surface ?",
        choices: ["Des strates", "Des horizons", "Des diaclases", "Des litières"],
        answer: 1,
        explanation: "Un sol est organisé en **horizons** : litière, horizon riche en humus, horizon d’altération, puis roche mère à la base. Le terme « strates » désigne les couches de roches sédimentaires.",
      },
      {
        id: "2nde-svt-06-hw-2",
        prompt: "Pourquoi les nitrates sont-ils facilement entraînés vers les nappes phréatiques ?",
        choices: [
          "Car ce sont des ions négatifs non retenus par le complexe argilo-humique",
          "Car ils sont insolubles dans l’eau",
          "Car ils sont dégradés par les vers de terre",
        ],
        answer: 0,
        explanation: "Le complexe argilo-humique, chargé négativement, ne retient que les ions positifs. Les nitrates (NO₃⁻), chargés négativement, restent dans l’eau du sol et sont lessivés.",
      },
      {
        id: "2nde-svt-06-hw-3",
        prompt: "Le développement durable concilie trois dimensions. Lesquelles ?",
        choices: ["Environnementale, économique et sociale", "Agricole, industrielle et urbaine", "Locale, nationale et mondiale"],
        answer: 0,
        explanation: "Le développement durable cherche à répondre aux besoins actuels sans compromettre ceux des générations futures. Il associe des enjeux environnementaux, économiques et sociaux.",
      },
      {
        id: "2nde-svt-06-hw-4",
        prompt: "Quelle part de la nourriture produite dans le monde est perdue ou gaspillée ?",
        choices: ["Environ 1 %", "Environ 10 %", "Environ un tiers", "Plus de 90 %"],
        answer: 2,
        explanation: "On estime qu’environ un tiers de la nourriture produite est perdue ou gaspillée. Réduire ce gaspillage diminue la surface agricole nécessaire et la pression sur les sols.",
      },
    ],
  },
  {
    id: "2nde-svt-07",
    title: "Corps humain et santé : procréation et sexualité humaine (hormones, contraception, IST)",
    summary:
      "De la différenciation de l’appareil génital à la puberté, la reproduction humaine est contrôlée par des hormones, ce qui permet de maîtriser la procréation, tandis que la protection contre les IST relève d’une sexualité responsable.",
    objectives: [
      "Je sais expliquer la mise en place de l’appareil sexuel, du sexe génétique au sexe phénotypique.",
      "Je sais décrire le rôle des hormones dans le fonctionnement des appareils reproducteurs.",
      "Je sais expliquer le principe des méthodes contraceptives hormonales et de la contraception d’urgence.",
      "Je sais citer des IST et les moyens de s’en protéger.",
      "Je sais distinguer procréation et plaisir dans la sexualité humaine.",
    ],
    sections: [
      {
        title: "Devenir homme ou femme : du sexe génétique à la puberté",
        body: [
          "Le **sexe génétique** est déterminé dès la fécondation par les chromosomes sexuels : **XX** chez la femme, **XY** chez l’homme. Pendant les premières semaines, l’embryon possède des gonades **indifférenciées** et deux paires de canaux (canaux de Wolff et de Müller) : il peut évoluer dans les deux directions.",
          "Vers la 7ᵉ semaine, chez l’embryon XY, le **gène SRY** porté par le chromosome Y entraîne la transformation des gonades en **testicules**. Ceux-ci produisent de la **testostérone**, qui maintient et développe les canaux de Wolff (futurs canaux déférents) et masculinise les organes génitaux externes, ainsi qu’une hormone (AMH) qui fait régresser les canaux de Müller. En l’absence de SRY (XX), les gonades deviennent des **ovaires**, les canaux de Wolff régressent et les canaux de Müller forment les trompes, l’utérus et le haut du vagin.",
          "À la naissance, l’appareil génital est en place mais **non fonctionnel**. À la **puberté** (vers 10–14 ans), l’**hypothalamus** et l’**hypophyse**, dans le cerveau, augmentent leur sécrétion d’hormones qui stimulent les gonades : **FSH** et **LH**. Les testicules produisent alors des spermatozoïdes et davantage de testostérone ; les ovaires commencent des cycles et sécrètent **œstrogènes** et **progestérone**. Apparaissent les **caractères sexuels secondaires** (pilosité, développement des seins, mue de la voix…).",
          "Il existe des situations où le sexe génétique et l’apparence ne concordent pas (par exemple une insensibilité aux androgènes chez une personne XY), ce qui montre que la différenciation dépend d’une chaîne d’étapes génétiques et hormonales.",
        ],
        keyPoints: [
          "Sexe génétique : XX ou XY ; le gène **SRY** du chromosome Y oriente vers les testicules.",
          "**Testostérone** : hormone masculinisante produite par les testicules.",
          "**Puberté** : activation de l’axe hypothalamus–hypophyse–gonades.",
          "**FSH** et **LH** : hormones de l’hypophyse qui commandent les gonades.",
        ],
        example: {
          title: "Raisonner sur une expérience historique (Jost)",
          steps: [
            "Sur des embryons de lapin, on retire les gonades indifférenciées avant leur différenciation.",
            "Résultat : tous les embryons, XX ou XY, développent un appareil génital de type féminin.",
            "Si l’on greffe un testicule ou que l’on apporte de la testostérone, l’appareil se masculinise.",
            "Conclusion : le développement féminin est la voie « par défaut » ; la masculinisation nécessite les hormones testiculaires.",
          ],
        },
        figure: {
          type: "table",
          title: "La différenciation de l’appareil génital chez l’embryon",
          headers: ["Étape", "Embryon XX", "Embryon XY"],
          rows: [
            ["Gène SRY", "Absent", "Présent sur le chromosome Y"],
            ["Gonades", "Deviennent des ovaires", "Deviennent des testicules (vers la 7ᵉ semaine)"],
            ["Canaux de Wolff", "Régressent", "Se développent sous l’effet de la testostérone"],
            ["Canaux de Müller", "Forment trompes, utérus et haut du vagin", "Régressent sous l’effet de l’AMH"],
          ],
        },
        practice: [
          {
            id: "2nde-svt-07-s1-p1",
            prompt: "Sur quel chromosome se trouve le gène **SRY** ?",
            choices: ["Le chromosome X", "Le chromosome Y", "Le chromosome 21"],
            answer: 1,
            explanation: "Le gène SRY est porté par le chromosome Y. Chez l’embryon XY, il oriente la transformation des gonades indifférenciées en testicules.",
          },
          {
            id: "2nde-svt-07-s1-p2",
            prompt: "Dans l’expérience de Jost, que deviennent des embryons de lapin privés de leurs gonades indifférenciées ?",
            choices: [
              "Tous développent un appareil génital masculin",
              "Ils ne développent aucun appareil génital",
              "Tous développent un appareil génital féminin",
              "Cela dépend de leurs chromosomes",
            ],
            answer: 2,
            explanation: "Sans gonades, et donc sans testostérone, tous les embryons, XX comme XY, développent un appareil génital féminin. Le développement féminin est la voie « par défaut » ; la masculinisation nécessite les hormones testiculaires.",
          },
          {
            id: "2nde-svt-07-s1-p3",
            prompt: "Quelles hormones de l’hypophyse stimulent les gonades à la puberté ?",
            choices: ["L’insuline et le glucagon", "La testostérone et la progestérone", "La FSH et la LH", "L’adrénaline et la noradrénaline"],
            answer: 2,
            explanation: "À la puberté, l’hypothalamus stimule l’hypophyse qui sécrète davantage de **FSH** et de **LH**. Ces hormones activent les gonades, qui produisent alors gamètes et hormones sexuelles.",
          },
        ],
      },
      {
        title: "La régulation hormonale de la reproduction",
        body: [
          "Chez l’**homme**, à partir de la puberté, les testicules produisent en continu des **spermatozoïdes** (dans les tubes séminifères) et de la **testostérone**. L’hypophyse sécrète FSH et LH, sous le contrôle de l’hypothalamus. La testostérone exerce un **rétrocontrôle négatif** : quand sa concentration augmente, elle freine la sécrétion de LH et FSH, ce qui maintient un taux stable.",
          "Chez la **femme**, le fonctionnement est **cyclique** (cycle d’environ 28 jours, de la puberté à la ménopause). Dans l’ovaire, un **follicule** grossit sous l’effet de la FSH et produit des **œstrogènes**. Vers le 14ᵉ jour, un **pic de LH** déclenche l’**ovulation** : l’ovocyte est libéré dans la trompe. Le follicule vide devient le **corps jaune**, qui sécrète de la **progestérone** et des œstrogènes.",
          "Ces hormones ovariennes agissent sur l’**utérus** : la muqueuse utérine (endomètre) s’épaissit et se vascularise pour accueillir un éventuel embryon. Sans fécondation, le corps jaune dégénère, la progestérone chute et la muqueuse se détache : ce sont les **règles**, qui marquent le début d’un nouveau cycle. En cas de grossesse, l’embryon sécrète une hormone (**hCG**, détectée par les tests de grossesse) qui maintient le corps jaune.",
          "La **fécondation** a lieu dans la trompe : un spermatozoïde (23 chromosomes) s’unit à l’ovocyte (23 chromosomes) pour former la cellule-œuf (46 chromosomes). Les spermatozoïdes survivent 3 à 5 jours dans les voies génitales féminines, l’ovocyte environ 24 h.",
        ],
        keyPoints: [
          "Homme : production continue de spermatozoïdes et de testostérone, régulée par rétrocontrôle négatif.",
          "Femme : cycle ovarien (follicule → ovulation → corps jaune) synchronisé avec le cycle utérin.",
          "Le **pic de LH** déclenche l’ovulation.",
          "La chute de progestérone en fin de cycle provoque les règles.",
        ],
        formulas: [
          "Hypothalamus → hypophyse (FSH, LH) → gonades (testostérone ; œstrogènes, progestérone)",
          "Spermatozoïde (23 chromosomes) + ovocyte (23 chromosomes) → cellule-œuf (46 chromosomes)",
        ],
        example: {
          title: "Lire des courbes hormonales d’un cycle",
          steps: [
            "Jours 1 à 13 : les œstrogènes augmentent progressivement (follicule en croissance).",
            "Jour 14 : pic de LH → ovulation.",
            "Jours 15 à 25 : la progestérone est élevée (corps jaune), la muqueuse utérine est épaisse.",
            "Jours 26–28 : chute de la progestérone et des œstrogènes → règles au jour 1 du cycle suivant.",
          ],
        },
        figure: {
          type: "flow",
          title: "Le cycle féminin (environ 28 jours)",
          steps: [
            {
              label: "Jours 1 à 5 : règles",
              detail: "Élimination de la muqueuse utérine",
            },
            {
              label: "Phase folliculaire",
              detail: "Sous l’effet de la FSH, un follicule grossit et sécrète des œstrogènes",
            },
            {
              label: "Vers le jour 14 : pic de LH",
              detail: "Ovulation : l’ovocyte est libéré dans la trompe",
            },
            {
              label: "Phase lutéale",
              detail: "Le corps jaune sécrète progestérone et œstrogènes ; l’endomètre s’épaissit",
            },
            {
              label: "Sans fécondation",
              detail: "Le corps jaune dégénère, la progestérone chute : nouvelles règles",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-07-s2-p1",
            prompt: "Quel événement hormonal déclenche l’**ovulation** ?",
            choices: ["Un pic de LH", "Une chute des œstrogènes", "Un pic de testostérone"],
            answer: 0,
            explanation: "Vers le 14ᵉ jour du cycle, l’hypophyse libère brutalement une grande quantité de LH. Ce pic de LH provoque la rupture du follicule et la libération de l’ovocyte.",
          },
          {
            id: "2nde-svt-07-s2-p2",
            prompt: "Quelle structure sécrète la **progestérone** après l’ovulation ?",
            choices: ["L’hypophyse", "L’utérus", "Le corps jaune", "La trompe"],
            answer: 2,
            explanation: "Après l’ovulation, le follicule vide se transforme en corps jaune, qui sécrète progestérone et œstrogènes. Ces hormones maintiennent la muqueuse utérine épaisse et vascularisée.",
          },
          {
            id: "2nde-svt-07-s2-p3",
            prompt: "Chez l’homme, que se passe-t-il quand le taux de testostérone augmente ?",
            choices: [
              "La sécrétion de LH et de FSH augmente aussi",
              "La sécrétion de LH et de FSH diminue",
              "La production de spermatozoïdes s’arrête définitivement",
              "L’hypophyse sécrète de la progestérone",
            ],
            answer: 1,
            explanation: "La testostérone exerce un **rétrocontrôle négatif** sur l’hypothalamus et l’hypophyse : elle freine la sécrétion de LH et de FSH. Ce mécanisme maintient un taux de testostérone stable.",
          },
        ],
      },
      {
        title: "Maîtriser la procréation et se protéger des IST",
        body: [
          "La **contraception** permet d’éviter une grossesse non désirée. La **pilule** contraceptive contient des hormones de synthèse (dérivés d’œstrogènes et/ou de progestérone) qui, par **rétrocontrôle négatif** sur l’hypothalamus et l’hypophyse, bloquent le pic de LH et donc **l’ovulation** ; elles épaississent aussi la glaire du col de l’utérus, qui devient infranchissable pour les spermatozoïdes. L’implant, l’anneau vaginal et le patch fonctionnent sur le même principe. Le **stérilet** (DIU) empêche la nidation et/ou agit sur les spermatozoïdes.",
          "La **contraception d’urgence** (« pilule du lendemain ») doit être prise le plus tôt possible après un rapport non protégé (jusqu’à 3 à 5 jours selon la molécule) : elle retarde ou bloque l’ovulation. Elle est disponible sans ordonnance en pharmacie, gratuitement pour les mineures. Elle ne remplace pas une contraception régulière.",
          "Les **infections sexuellement transmissibles** (IST) se transmettent lors des rapports sexuels : **VIH** (virus du sida), **chlamydia**, **gonorrhée**, **syphilis**, **papillomavirus** (HPV, responsable de cancers du col de l’utérus), herpès génital, hépatite B. Beaucoup sont **sans symptômes** au début, d’où l’importance du **dépistage**. Le **préservatif** (masculin ou féminin) est le **seul** moyen contraceptif qui protège aussi des IST. Il existe des **vaccins** contre le HPV (recommandé aux filles et garçons dès 11 ans) et l’hépatite B.",
          "La sexualité humaine ne se limite pas à la procréation : elle fait intervenir le **plaisir**, lié au **système de récompense** du cerveau, ainsi que des dimensions affectives et sociales. Elle repose sur le **consentement** libre et mutuel. En cas d’infertilité, la médecine propose l’**assistance médicale à la procréation** (AMP), comme la fécondation in vitro.",
        ],
        keyPoints: [
          "**Pilule** : hormones de synthèse → rétrocontrôle négatif → pas de pic de LH → pas d’ovulation.",
          "**Contraception d’urgence** : à prendre au plus vite après un rapport à risque.",
          "Le **préservatif** est le seul moyen de protection contre les IST.",
          "Dépistage et vaccination (HPV, hépatite B) sont des moyens de prévention.",
          "Le **consentement** est indispensable à toute relation sexuelle.",
        ],
        example: {
          title: "Expliquer l’action de la pilule à partir de dosages",
          steps: [
            "Chez une femme sans contraception, on observe un pic de LH vers le 14ᵉ jour.",
            "Chez une femme sous pilule, la LH reste basse et constante, sans pic.",
            "Les hormones de synthèse freinent l’hypothalamus et l’hypophyse (rétrocontrôle négatif).",
            "Sans pic de LH, il n’y a pas d’ovulation, donc pas de fécondation possible.",
          ],
        },
        figure: {
          type: "figures",
          title: "Repères pour la santé sexuelle",
          items: [
            {
              value: "≈ 24 h",
              label: "durée de vie de l’ovocyte après l’ovulation",
            },
            {
              value: "3 à 5 jours",
              label: "survie des spermatozoïdes dans les voies génitales féminines",
            },
            {
              value: "3 à 5 jours",
              label: "délai maximal de la contraception d’urgence, selon la molécule",
            },
            {
              value: "11 ans",
              label: "âge à partir duquel la vaccination HPV est recommandée (filles et garçons)",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-07-s3-p1",
            prompt: "Comment la **pilule** contraceptive empêche-t-elle l’ovulation ?",
            choices: [
              "Elle détruit les ovocytes",
              "Ses hormones de synthèse bloquent le pic de LH par rétrocontrôle négatif",
              "Elle tue les spermatozoïdes dans l’utérus",
              "Elle augmente fortement la sécrétion de FSH",
            ],
            answer: 1,
            explanation: "Les hormones de synthèse de la pilule freinent l’hypothalamus et l’hypophyse. Sans pic de LH, il n’y a pas d’ovulation ; la glaire cervicale épaissie bloque aussi les spermatozoïdes.",
          },
          {
            id: "2nde-svt-07-s3-p2",
            prompt: "Quel est le seul moyen contraceptif qui protège aussi des **IST** ?",
            choices: ["La pilule", "Le stérilet", "Le préservatif", "L’implant"],
            answer: 2,
            explanation: "Le préservatif (masculin ou féminin) forme une barrière qui empêche le contact avec les sécrétions et les muqueuses du partenaire. Les méthodes hormonales et le stérilet ne protègent pas des infections.",
          },
          {
            id: "2nde-svt-07-s3-p3",
            prompt: "Contre quelle IST existe-t-il un vaccin recommandé dès 11 ans ?",
            choices: ["Le papillomavirus (HPV)", "La chlamydia", "La syphilis"],
            answer: 0,
            explanation: "Le vaccin contre le HPV, recommandé aux filles et aux garçons dès 11 ans, prévient des infections responsables notamment de cancers du col de l’utérus. Il n’existe pas de vaccin contre la chlamydia ni la syphilis.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-svt-07-ex-1",
        prompt: "Quel gène, porté par le chromosome Y, oriente la gonade embryonnaire vers un testicule ?",
        choices: ["Le gène de l’hémoglobine", "Le gène ABO", "Le gène SRY", "Le gène de l’insuline"],
        answer: 2,
        explanation:
          "Le gène SRY, présent sur le chromosome Y, déclenche la différenciation des gonades en testicules vers la 7ᵉ semaine de développement.",
      },
      {
        id: "2nde-svt-07-ex-2",
        prompt: "Quelle hormone déclenche l’ovulation ?",
        choices: ["La progestérone", "Le pic de LH", "La testostérone", "L’insuline"],
        answer: 1,
        explanation:
          "Un pic brutal de LH, sécrétée par l’hypophyse vers le 14ᵉ jour du cycle, provoque la libération de l’ovocyte par le follicule.",
      },
      {
        id: "2nde-svt-07-ex-3",
        prompt: "Quelle méthode protège à la fois d’une grossesse et des IST ?",
        choices: ["La pilule", "Le stérilet", "L’implant", "Le préservatif"],
        answer: 3,
        explanation:
          "Seul le préservatif (masculin ou féminin) forme une barrière qui empêche le contact avec les sécrétions et donc la transmission des IST.",
      },
      {
        id: "2nde-svt-07-ex-4",
        prompt: "Où a lieu la fécondation chez la femme ?",
        choices: ["Dans la trompe", "Dans l’ovaire", "Dans le vagin", "Dans l’utérus"],
        answer: 0,
        explanation:
          "La rencontre entre spermatozoïde et ovocyte se fait dans le tiers supérieur de la trompe ; l’embryon migre ensuite vers l’utérus où il s’implante (nidation).",
      },
      {
        id: "2nde-svt-07-ex-5",
        prompt: "Quel organe produit la testostérone ?",
        choices: ["L’hypophyse", "Le testicule", "La prostate", "L’hypothalamus"],
        answer: 1,
        explanation:
          "La testostérone est produite par les testicules. L’hypophyse produit FSH et LH, qui stimulent les testicules.",
      },
      {
        id: "2nde-svt-07-ex-6",
        prompt: "Pourquoi le dépistage des IST est-il important ?",
        choices: [
          "Parce que les IST guérissent toujours seules",
          "Parce qu’il remplace le préservatif",
          "Parce que de nombreuses IST n’ont pas de symptômes au début",
          "Parce qu’il vaccine contre le VIH",
        ],
        answer: 2,
        explanation:
          "Une IST peut être silencieuse (chlamydia, VIH au début) : on peut la transmettre sans le savoir et développer des complications (stérilité). Le dépistage permet un traitement précoce.",
      },
    ],
    test: [
      {
        id: "2nde-svt-07-ct-1",
        prompt:
          "Une personne XY possède des testicules qui produisent de la testostérone, mais ses cellules n’ont pas de récepteurs fonctionnels à cette hormone. Quel phénotype attend-on ?",
        choices: [
          "Un appareil génital externe de type masculin",
          "Une absence totale d’organes génitaux",
          "Un appareil génital externe de type féminin",
          "Des ovaires fonctionnels",
        ],
        answer: 2,
        explanation:
          "Sans récepteur, les cellules cibles ne réagissent pas à la testostérone : les organes génitaux externes se développent selon la voie par défaut, féminine. Les testicules restent présents (gène SRY), mais il n’y a ni utérus (AMH active) ni ovaires.",
      },
      {
        id: "2nde-svt-07-ct-2",
        prompt:
          "On injecte de la testostérone à un homme adulte. Sa sécrétion de LH diminue. Quel mécanisme est mis en évidence ?",
        choices: [
          "Un rétrocontrôle négatif de la testostérone sur l’axe hypothalamus–hypophyse",
          "Une stimulation de l’hypophyse par la testostérone",
          "Une destruction de l’hypophyse",
          "Une transformation de la LH en testostérone",
        ],
        answer: 0,
        explanation:
          "Une hausse de testostérone freine la sécrétion de LH : c’est un rétrocontrôle négatif, qui stabilise le taux d’hormone. Ce principe est utilisé pour la recherche sur la contraception masculine hormonale.",
      },
      {
        id: "2nde-svt-07-ct-3",
        prompt:
          "Chez une femme, la progestérone reste élevée au-delà du 28ᵉ jour et les règles ne surviennent pas. Quelle hypothèse est la plus probable ?",
        choices: [
          "L’ovulation n’a pas eu lieu",
          "Le corps jaune a dégénéré",
          "Les œstrogènes ont disparu",
          "Une grossesse a débuté et l’embryon maintient le corps jaune",
        ],
        answer: 3,
        explanation:
          "Les règles sont dues à la chute de la progestérone. Si elle reste élevée, le corps jaune est maintenu, ce qui se produit quand un embryon sécrète l’hormone hCG : c’est le signe d’une grossesse.",
      },
      {
        id: "2nde-svt-07-ct-4",
        prompt:
          "Des dosages montrent l’absence de pic de LH chez une femme sous pilule combinée. Quelle conclusion en tirer ?",
        choices: [
          "La pilule détruit les ovaires",
          "La pilule bloque l’ovulation en empêchant le pic de LH",
          "La pilule provoque une ovulation tous les jours",
          "La pilule agit uniquement contre les IST",
        ],
        answer: 1,
        explanation:
          "Les hormones de synthèse exercent un rétrocontrôle négatif sur l’hypothalamus et l’hypophyse : le pic de LH n’a pas lieu, donc l’ovulation non plus. L’effet est réversible à l’arrêt de la pilule.",
      },
      {
        id: "2nde-svt-07-ct-5",
        prompt:
          "Un couple a eu un rapport le 12ᵉ jour d’un cycle régulier de 28 jours, sans contraception. Pourquoi une grossesse est-elle possible ?",
        choices: [
          "Parce que les spermatozoïdes survivent plusieurs jours et que l’ovulation a lieu vers le 14ᵉ jour",
          "Parce que l’ovulation a lieu le 1ᵉʳ jour",
          "Parce que les ovocytes survivent 10 jours",
          "Une grossesse n’est pas possible ce jour-là",
        ],
        answer: 0,
        explanation:
          "Les spermatozoïdes peuvent survivre 3 à 5 jours ; l’ovulation, vers le 14ᵉ jour, peut survenir pendant cette période. De plus, la date d’ovulation varie d’un cycle à l’autre : ce n’est pas une méthode fiable.",
      },
      {
        id: "2nde-svt-07-ct-6",
        prompt:
          "Le papillomavirus (HPV) peut provoquer des cancers du col de l’utérus, mais aussi de la gorge ou de l’anus. Pourquoi recommande-t-on de vacciner filles **et** garçons ?",
        choices: [
          "Parce que les garçons ne peuvent pas être infectés",
          "Parce que le vaccin remplace le préservatif",
          "Parce que le vaccin est une contraception",
          "Parce que les garçons peuvent être infectés, développer des cancers et transmettre le virus",
        ],
        answer: 3,
        explanation:
          "Le HPV touche les deux sexes. Vacciner les garçons les protège eux-mêmes de certains cancers et réduit la circulation du virus dans la population, protégeant aussi leurs partenaires.",
      },
      {
        id: "2nde-svt-07-ct-7",
        prompt:
          "Chez un embryon XX, on observe le développement des trompes et de l’utérus, et la régression des canaux de Wolff. Quelle explication ?",
        choices: [
          "La présence de testostérone",
          "L’absence de gène SRY, donc de testicules et de testostérone",
          "La présence d’un chromosome Y",
          "Une forte sécrétion d’AMH",
        ],
        answer: 1,
        explanation:
          "Sans SRY, les gonades deviennent des ovaires ; sans testostérone, les canaux de Wolff régressent, et sans AMH les canaux de Müller se développent en trompes et utérus.",
      },
      {
        id: "2nde-svt-07-ct-8",
        prompt:
          "Une jeune femme a eu un rapport non protégé il y a 24 heures. Quelle est la démarche la plus adaptée ?",
        choices: [
          "Attendre les prochaines règles",
          "Commencer une pilule classique le mois suivant",
          "Prendre rapidement une contraception d’urgence et envisager un dépistage des IST",
          "Ne rien faire, le risque est nul après 24 h",
        ],
        answer: 2,
        explanation:
          "La contraception d’urgence est d’autant plus efficace qu’elle est prise tôt. Un rapport non protégé expose aussi aux IST : un dépistage (et parfois un traitement préventif du VIH dans les 48 h) doit être envisagé avec un professionnel de santé.",
      },
    ],
    homework: [
      {
        id: "2nde-svt-07-hw-1",
        prompt: "Où a lieu la **fécondation** chez la femme ?",
        choices: ["Dans l’ovaire", "Dans la trompe", "Dans l’utérus", "Dans le vagin"],
        answer: 1,
        explanation: "L’ovocyte libéré lors de l’ovulation est capté par la trompe, où il peut rencontrer un spermatozoïde. La cellule-œuf migre ensuite vers l’utérus pour s’y implanter.",
      },
      {
        id: "2nde-svt-07-hw-2",
        prompt: "Quelle hormone est détectée par les tests de grossesse ?",
        choices: ["La LH", "La testostérone", "La hCG"],
        answer: 2,
        explanation: "En cas de grossesse, l’embryon sécrète de la **hCG**, qui maintient le corps jaune et donc la sécrétion de progestérone. Sa présence dans l’urine est détectée par les tests de grossesse.",
      },
      {
        id: "2nde-svt-07-hw-3",
        prompt: "Combien de chromosomes possède la cellule-œuf humaine ?",
        choices: ["23", "46", "92", "44"],
        answer: 1,
        explanation: "Le spermatozoïde et l’ovocyte apportent chacun 23 chromosomes. Leur union à la fécondation donne une cellule-œuf à 46 chromosomes, soit 23 paires.",
      },
      {
        id: "2nde-svt-07-hw-4",
        prompt: "Quelle est la cause des règles en fin de cycle ?",
        choices: [
          "Un pic de LH",
          "La chute de la progestérone due à la dégénérescence du corps jaune",
          "Une augmentation de la FSH",
          "La sécrétion de hCG",
        ],
        answer: 1,
        explanation: "Sans fécondation, le corps jaune dégénère et la progestérone chute. La muqueuse utérine n’est plus maintenue et se détache : ce sont les règles.",
      },
    ],
  },
  {
    id: "2nde-svt-08",
    title: "Microorganismes et santé (microbiote, agents pathogènes, antibiotiques)",
    summary:
      "Nous vivons avec d’innombrables microorganismes, dont le microbiote est bénéfique, alors que certains agents pathogènes provoquent des maladies que l’on prévient par l’hygiène et la vaccination et que l’on traite, pour les bactéries, par des antibiotiques à utiliser avec raison.",
    objectives: [
      "Je sais définir un microorganisme et distinguer bactéries, virus et champignons.",
      "Je sais décrire le microbiote humain et ses rôles.",
      "Je sais expliquer la transmission d’un agent pathogène et les moyens de prévention.",
      "Je sais expliquer le mode d’action des antibiotiques et l’apparition de résistances.",
      "Je sais interpréter un antibiogramme.",
    ],
    sections: [
      {
        title: "Le monde microbien et le microbiote",
        body: [
          "Un **microorganisme** est un être vivant invisible à l’œil nu. On y trouve les **bactéries** (cellules procaryotes, 1 à 5 µm), les **champignons** microscopiques (levures, moisissures), certains **protozoaires** (eucaryotes unicellulaires, comme le parasite du paludisme). Les **virus** (20 à 300 nm) sont à part : ce ne sont pas des cellules ; ils sont formés d’un matériel génétique entouré d’une enveloppe protéique et ne peuvent se multiplier qu’**à l’intérieur d’une cellule** qu’ils parasitent.",
          "L’immense majorité des microorganismes est **inoffensive** ou **utile**. Le corps humain héberge environ autant de bactéries que de cellules humaines (de l’ordre de 30 000 milliards) : c’est le **microbiote**, présent sur la peau, dans la bouche, le vagin et surtout l’**intestin** (environ 1 à 2 kg de bactéries).",
          "Le microbiote intestinal joue des rôles essentiels : il **digère** des fibres que nos enzymes ne peuvent pas dégrader, produit certaines **vitamines** (K, B12), participe à la **maturation du système immunitaire** et **protège** contre les pathogènes en occupant la place et les ressources (effet barrière). Il s’acquiert dès la naissance (mode d’accouchement, allaitement) puis dépend de l’alimentation.",
          "Un déséquilibre du microbiote (**dysbiose**), causé par exemple par un traitement antibiotique ou une alimentation pauvre en fibres, est associé à des troubles digestifs, à l’obésité ou à certaines maladies inflammatoires. Les microorganismes sont aussi utilisés par l’être humain : fermentations alimentaires (pain, yaourt, fromage), production de médicaments.",
        ],
        keyPoints: [
          "**Bactérie** : cellule procaryote ; **virus** : non cellulaire, parasite obligatoire d’une cellule.",
          "**Microbiote** : ensemble des microorganismes vivant dans et sur notre corps.",
          "Rôles du microbiote intestinal : digestion des fibres, vitamines, immunité, effet barrière.",
          "**Dysbiose** : déséquilibre du microbiote.",
        ],
        example: {
          title: "Comparer souris axéniques et souris normales",
          steps: [
            "Des souris axéniques (élevées sans aucun microorganisme) sont comparées à des souris normales.",
            "Les souris axéniques ont un système immunitaire intestinal peu développé et sont plus sensibles à certaines infections.",
            "Après transfert de microbiote, ces défauts se corrigent en partie.",
            "Conclusion : le microbiote contribue à la maturation de l’immunité et à la protection contre les pathogènes.",
          ],
        },
        figure: {
          type: "table",
          title: "Les principaux microorganismes",
          headers: ["Microorganisme", "Organisation", "Taille", "Exemple"],
          rows: [
            ["Bactérie", "Cellule procaryote", "1 à 5 µm", "Escherichia coli (intestin)"],
            ["Levure", "Champignon unicellulaire eucaryote", "Quelques µm", "Levure de boulanger"],
            ["Protozoaire", "Eucaryote unicellulaire", "Quelques µm à plus de 100 µm", "Plasmodium (paludisme)"],
            ["Virus", "Non cellulaire, parasite obligatoire", "20 à 300 nm", "Virus de la grippe"],
          ],
        },
        practice: [
          {
            id: "2nde-svt-08-s1-p1",
            prompt: "Quelle affirmation sur les **virus** est exacte ?",
            choices: [
              "Ce sont des bactéries de petite taille",
              "Ce ne sont pas des cellules et ils ne se multiplient qu’à l’intérieur d’une cellule",
              "Ils possèdent des mitochondries",
              "Ils sont sensibles aux antibiotiques",
            ],
            answer: 1,
            explanation: "Un virus est formé d’un matériel génétique entouré d’une enveloppe protéique : ce n’est pas une cellule. Il détourne la machinerie d’une cellule hôte pour se multiplier.",
          },
          {
            id: "2nde-svt-08-s1-p2",
            prompt: "Lequel de ces rôles est assuré par le **microbiote intestinal** ?",
            choices: ["Produire de l’insuline", "Fabriquer les globules rouges", "Produire certaines vitamines comme K et B12"],
            answer: 2,
            explanation: "Le microbiote intestinal produit des vitamines (K, B12), digère des fibres que nos enzymes ne dégradent pas et protège contre les pathogènes. Il participe aussi à la maturation du système immunitaire.",
          },
          {
            id: "2nde-svt-08-s1-p3",
            prompt: "Quelle est une cause fréquente de **dysbiose** ?",
            choices: ["Un traitement antibiotique", "Une alimentation riche en fibres", "La pratique d’un sport", "Le sommeil"],
            answer: 0,
            explanation: "Un antibiotique détruit aussi une partie des bactéries utiles du microbiote, ce qui le déséquilibre. Une alimentation pauvre en fibres peut également provoquer une dysbiose.",
          },
        ],
      },
      {
        title: "Agents pathogènes, transmission et prévention",
        body: [
          "Un **agent pathogène** est un microorganisme capable de provoquer une maladie : bactéries (tuberculose, salmonellose, tétanos), virus (grippe, COVID-19, VIH, rougeole), champignons (mycoses), parasites (paludisme). Une **maladie infectieuse** apparaît lorsqu’un pathogène pénètre dans l’organisme et s’y multiplie.",
          "La **transmission** peut être directe (gouttelettes de toux, contact cutané, rapports sexuels, sang) ou indirecte (eau ou aliments contaminés, objets, piqûres d’insectes **vecteurs** comme le moustique anophèle pour le paludisme). Une **épidémie** est la propagation rapide d’une maladie dans une population ; une **pandémie** est une épidémie à l’échelle mondiale.",
          "La **prévention** limite la transmission : **hygiène** (lavage des mains, eau potable, cuisson des aliments), port du masque, préservatif, lutte contre les vecteurs (moustiquaires), et surtout **vaccination**. Le vaccin contient un agent pathogène inactivé, atténué, ou une partie de celui-ci (ou l’ARN codant une de ses protéines) : il prépare le système immunitaire, qui réagira plus vite et plus fort en cas de contact réel (**mémoire immunitaire**).",
          "Lorsqu’une forte proportion de la population est vaccinée, le pathogène circule difficilement, ce qui protège aussi les personnes non vaccinées (nourrissons, malades) : c’est l’**immunité collective**. Elle a permis l’**éradication** de la variole en 1980.",
        ],
        keyPoints: [
          "**Pathogène** : microorganisme provoquant une maladie.",
          "Transmission directe ou indirecte (eau, aliments, vecteurs).",
          "**Vaccination** : déclenche une mémoire immunitaire sans provoquer la maladie.",
          "**Immunité collective** : protection indirecte des non-vaccinés.",
        ],
        example: {
          title: "Analyser une courbe d’épidémie et de vaccination",
          steps: [
            "Avant la vaccination contre la rougeole en France (1983), on comptait plus de 500 000 cas par an.",
            "Avec une couverture vaccinale croissante, le nombre de cas chute très fortement.",
            "En 2008–2011, une baisse de la couverture vaccinale entraîne une épidémie de plus de 20 000 cas.",
            "Conclusion : le maintien d’une couverture vaccinale élevée est indispensable pour bloquer la circulation du virus.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Quelques étapes de l’histoire de la vaccination",
          events: [
            {
              date: "1796",
              label: "Edward Jenner protège contre la variole grâce à la vaccine",
            },
            {
              date: "1885",
              label: "Louis Pasteur administre le premier vaccin contre la rage",
            },
            {
              date: "1980",
              label: "L’OMS déclare la variole éradiquée",
            },
            {
              date: "2020",
              label: "Premiers vaccins à ARN messager autorisés contre la COVID-19",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-08-s2-p1",
            prompt: "Comment le **paludisme** est-il transmis ?",
            choices: ["Par l’eau du robinet", "Par la piqûre d’un moustique vecteur, l’anophèle", "Par les poignées de main", "Par l’air"],
            answer: 1,
            explanation: "Le parasite du paludisme (Plasmodium) est transmis par la piqûre de moustiques anophèles, qui jouent le rôle de **vecteurs**. Les moustiquaires et la lutte contre les moustiques limitent donc la transmission.",
          },
          {
            id: "2nde-svt-08-s2-p2",
            prompt: "Qu’est-ce qu’une **pandémie** ?",
            choices: ["Une maladie non contagieuse", "Une épidémie limitée à une ville", "Une épidémie à l’échelle mondiale"],
            answer: 2,
            explanation: "Une épidémie est la propagation rapide d’une maladie dans une population. Lorsqu’elle s’étend à l’échelle de la planète, comme la COVID-19, on parle de pandémie.",
          },
          {
            id: "2nde-svt-08-s2-p3",
            prompt: "Que permet l’**immunité collective** ?",
            choices: [
              "De protéger aussi les personnes non vaccinées",
              "De rendre les antibiotiques plus efficaces",
              "D’éviter toute mutation des virus",
            ],
            answer: 0,
            explanation: "Lorsqu’une forte proportion de la population est vaccinée, le pathogène circule difficilement. Les personnes qui ne peuvent pas être vaccinées, comme les nourrissons, sont ainsi protégées indirectement.",
          },
        ],
      },
      {
        title: "Les antibiotiques et la résistance bactérienne",
        body: [
          "Un **antibiotique** est une molécule qui **tue les bactéries** ou bloque leur multiplication, en agissant sur des cibles propres aux bactéries (paroi bactérienne, ribosomes bactériens…). Le premier, la **pénicilline**, a été découvert par Alexander **Fleming** en 1928 : il avait observé qu’une moisissure (*Penicillium*) empêchait la croissance des bactéries autour d’elle.",
          "Les antibiotiques sont **inefficaces contre les virus** : ceux-ci n’ont ni paroi ni métabolisme propre. Prendre un antibiotique contre la grippe ou un rhume viral est inutile et même nuisible, car cela perturbe le microbiote et favorise les résistances. « Les antibiotiques, c’est pas automatique. »",
          "Pour choisir l’antibiotique adapté, on réalise un **antibiogramme** : on étale la bactérie sur une gélose, on dépose des pastilles imprégnées de différents antibiotiques. Après incubation, une **zone claire** (zone d’inhibition) autour d’une pastille indique que la bactérie est **sensible** ; plus le diamètre est grand, plus l’antibiotique est efficace. L’absence de zone signifie que la bactérie est **résistante**.",
          "Dans une population de bactéries, quelques individus peuvent porter, par **mutation** ou par transfert de gènes entre bactéries, un caractère de résistance. Un antibiotique tue les bactéries sensibles et laisse survivre et se multiplier les résistantes : c’est une **sélection naturelle**. L’usage excessif ou mal conduit des antibiotiques (traitement arrêté trop tôt, usage massif dans l’élevage) favorise ainsi l’émergence de **bactéries multirésistantes**, un enjeu majeur de santé publique. D’où les règles : antibiotique seulement sur prescription, à la bonne dose, pendant toute la durée prévue.",
        ],
        keyPoints: [
          "**Antibiotique** : molécule active contre les bactéries, **pas contre les virus**.",
          "**Antibiogramme** : zone d’inhibition = sensibilité ; pas de zone = résistance.",
          "La résistance apparaît par mutation puis est **sélectionnée** par l’usage des antibiotiques.",
          "Bon usage : prescription médicale, dose et durée respectées.",
        ],
        example: {
          title: "Interpréter un antibiogramme",
          steps: [
            "Une bactérie urinaire est testée avec trois antibiotiques A, B et C.",
            "Diamètres d’inhibition : A = 0 mm, B = 25 mm, C = 12 mm.",
            "A : aucune zone → bactérie résistante.",
            "B : grande zone → bactérie très sensible ; C : sensibilité plus faible.",
            "Conclusion : le médecin prescrira l’antibiotique B.",
          ],
        },
        figure: {
          type: "flow",
          title: "La sélection de bactéries résistantes",
          steps: [
            {
              label: "Population initiale",
              detail: "Surtout des bactéries sensibles, quelques mutantes résistantes",
            },
            {
              label: "Traitement antibiotique",
              detail: "Les bactéries sensibles sont tuées",
            },
            {
              label: "Survie des résistantes",
              detail: "Elles ne subissent plus la concurrence",
            },
            {
              label: "Multiplication",
              detail: "La population devient majoritairement résistante",
            },
          ],
        },
        practice: [
          {
            id: "2nde-svt-08-s3-p1",
            prompt: "Pourquoi un antibiotique est-il inutile contre la grippe ?",
            choices: [
              "Parce que la grippe est due à un virus",
              "Parce que la grippe est due à un champignon",
              "Parce que la grippe guérit toujours seule en une heure",
            ],
            answer: 0,
            explanation: "Les antibiotiques agissent sur des cibles propres aux bactéries, comme la paroi ou les ribosomes bactériens. Les virus n’en possèdent pas : l’antibiotique n’a aucun effet sur eux et perturbe inutilement le microbiote.",
          },
          {
            id: "2nde-svt-08-s3-p2",
            prompt: "Sur un antibiogramme, aucune zone claire n’apparaît autour d’une pastille. Que conclure ?",
            choices: [
              "La bactérie est très sensible à cet antibiotique",
              "La bactérie est résistante à cet antibiotique",
              "L’antibiotique a tué toutes les bactéries de la boîte",
              "Le test est forcément raté",
            ],
            answer: 1,
            explanation: "La zone claire (zone d’inhibition) correspond à l’absence de croissance bactérienne. Si les bactéries poussent jusqu’au contact de la pastille, cet antibiotique ne les empêche pas de se multiplier : elles sont résistantes.",
          },
          {
            id: "2nde-svt-08-s3-p3",
            prompt: "Comment des bactéries résistantes deviennent-elles majoritaires ?",
            choices: [
              "L’antibiotique transforme chaque bactérie en bactérie résistante",
              "Les bactéries s’habituent volontairement à l’antibiotique",
              "Des mutantes résistantes préexistantes sont sélectionnées par l’antibiotique",
            ],
            answer: 2,
            explanation: "La résistance apparaît au hasard par mutation ou par transfert de gènes. L’antibiotique élimine les sensibles et laisse se multiplier les résistantes : c’est une **sélection naturelle**.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-svt-08-ex-1",
        prompt: "Contre quel type d’agent pathogène un antibiotique est-il efficace ?",
        choices: ["Les virus", "Les bactéries", "Tous les microorganismes", "Les champignons uniquement"],
        answer: 1,
        explanation:
          "Les antibiotiques ciblent des structures propres aux bactéries (paroi, ribosomes bactériens). Ils n’agissent pas sur les virus, qui n’ont pas de métabolisme propre.",
      },
      {
        id: "2nde-svt-08-ex-2",
        prompt: "Qu’est-ce que le microbiote intestinal ?",
        choices: [
          "Un organe de l’intestin",
          "Une maladie de l’intestin",
          "Un antibiotique naturel",
          "L’ensemble des microorganismes vivant dans l’intestin",
        ],
        answer: 3,
        explanation:
          "Le microbiote intestinal regroupe des milliers de milliards de bactéries (et d’autres microorganismes) vivant dans notre intestin, avec des rôles bénéfiques.",
      },
      {
        id: "2nde-svt-08-ex-3",
        prompt: "Quelle caractéristique distingue un virus d’une bactérie ?",
        choices: [
          "Le virus ne peut se multiplier qu’à l’intérieur d’une cellule",
          "Le virus est plus gros",
          "Le virus possède un noyau",
          "Le virus réalise la photosynthèse",
        ],
        answer: 0,
        explanation:
          "Un virus n’est pas une cellule : il doit infecter une cellule hôte et détourner sa machinerie pour se multiplier. Il est beaucoup plus petit qu’une bactérie.",
      },
      {
        id: "2nde-svt-08-ex-4",
        prompt: "Sur un antibiogramme, une large zone claire autour d’une pastille signifie que :",
        choices: [
          "la bactérie est résistante à cet antibiotique",
          "l’antibiotique favorise la croissance bactérienne",
          "la bactérie est sensible à cet antibiotique",
          "la pastille est contaminée",
        ],
        answer: 2,
        explanation:
          "La zone claire (zone d’inhibition) correspond à l’absence de croissance bactérienne : l’antibiotique a diffusé dans la gélose et a empêché la multiplication des bactéries.",
      },
      {
        id: "2nde-svt-08-ex-5",
        prompt: "Quel est le principe de la vaccination ?",
        choices: [
          "Tuer directement les bactéries présentes dans le corps",
          "Préparer le système immunitaire grâce à un agent inoffensif dérivé du pathogène",
          "Remplacer le microbiote",
          "Soigner une maladie déjà déclarée par des antibiotiques",
        ],
        answer: 1,
        explanation:
          "Le vaccin présente au système immunitaire un pathogène inactivé, atténué ou une de ses parties : une mémoire immunitaire se forme, qui permettra une réponse rapide lors d’un contact réel.",
      },
      {
        id: "2nde-svt-08-ex-6",
        prompt: "Lequel de ces rôles est assuré par le microbiote intestinal ?",
        choices: [
          "Produire de l’insuline",
          "Fabriquer les globules rouges",
          "Transporter le dioxygène",
          "Digérer certaines fibres alimentaires",
        ],
        answer: 3,
        explanation:
          "Les bactéries intestinales possèdent des enzymes capables de dégrader des fibres que nos propres enzymes ne digèrent pas ; elles produisent aussi certaines vitamines.",
      },
    ],
    test: [
      {
        id: "2nde-svt-08-ct-1",
        prompt:
          "Un patient atteint de grippe demande des antibiotiques. Pourquoi le médecin refuse-t-il ?",
        choices: [
          "Parce que la grippe est due à un virus, sur lequel les antibiotiques n’agissent pas",
          "Parce que la grippe guérit plus vite sans traitement",
          "Parce que les antibiotiques sont toxiques pour l’être humain",
          "Parce que la grippe est due à un champignon",
        ],
        answer: 0,
        explanation:
          "La grippe est virale. Un antibiotique serait inefficace, perturberait le microbiote et favoriserait la sélection de bactéries résistantes.",
      },
      {
        id: "2nde-svt-08-ct-2",
        prompt:
          "Antibiogramme : pastille A = 0 mm, B = 8 mm, C = 22 mm, D = 15 mm. Quel antibiotique est le plus adapté ?",
        choices: ["A", "B", "D", "C"],
        answer: 3,
        explanation:
          "Plus la zone d’inhibition est grande, plus la bactérie est sensible. C (22 mm) est donc le plus efficace ; la bactérie est résistante à A (pas de zone).",
      },
      {
        id: "2nde-svt-08-ct-3",
        prompt:
          "On cultive des bactéries en présence d’une faible dose d’antibiotique pendant plusieurs générations. La proportion de bactéries résistantes passe de 0,01 % à 60 %. Quelle explication ?",
        choices: [
          "L’antibiotique a transformé les bactéries sensibles en résistantes",
          "Les bactéries résistantes préexistantes ont été sélectionnées et se sont multipliées",
          "Les bactéries ont appris à résister",
          "Il s’agit uniquement de dérive génétique",
        ],
        answer: 1,
        explanation:
          "Les résistantes existaient déjà (0,01 %, par mutation). L’antibiotique élimine les sensibles : les résistantes, avantagées, deviennent majoritaires. C’est de la sélection naturelle, pas une transformation provoquée.",
      },
      {
        id: "2nde-svt-08-ct-4",
        prompt:
          "Après un traitement antibiotique, un patient souffre de diarrhées. Quelle hypothèse est la plus probable ?",
        choices: [
          "L’antibiotique a détruit une partie du microbiote intestinal (dysbiose)",
          "L’antibiotique a infecté l’intestin",
          "L’antibiotique a renforcé le microbiote",
          "Le patient a développé une grippe",
        ],
        answer: 0,
        explanation:
          "Les antibiotiques tuent aussi les bactéries utiles du microbiote. Ce déséquilibre (dysbiose) perturbe la digestion et peut laisser se développer des bactéries pathogènes normalement contenues par l’effet barrière.",
      },
      {
        id: "2nde-svt-08-ct-5",
        prompt:
          "Pourquoi est-il important de terminer un traitement antibiotique même si l’on se sent mieux ?",
        choices: [
          "Pour habituer le corps à l’antibiotique",
          "Pour renforcer le microbiote",
          "Pour éliminer les bactéries restantes, souvent les moins sensibles, et éviter de sélectionner des résistantes",
          "Parce que l’antibiotique agit aussi sur les virus",
        ],
        answer: 2,
        explanation:
          "Les symptômes disparaissent avant que toutes les bactéries soient éliminées. Arrêter trop tôt laisse survivre les moins sensibles, qui peuvent se multiplier : on favorise la résistance.",
      },
      {
        id: "2nde-svt-08-ct-6",
        prompt:
          "Dans une région, 95 % des enfants sont vaccinés contre la rougeole. Un nourrisson trop jeune pour être vacciné est malgré tout peu exposé. Pourquoi ?",
        choices: [
          "Le nourrisson possède déjà des antibiotiques naturels",
          "Le virus de la rougeole n’infecte pas les nourrissons",
          "La rougeole est une maladie bactérienne",
          "Le virus circule peu grâce à l’immunité collective",
        ],
        answer: 3,
        explanation:
          "Avec une couverture vaccinale élevée, le virus trouve très peu de personnes à infecter : sa circulation est bloquée, ce qui protège indirectement les non-vaccinés.",
      },
      {
        id: "2nde-svt-08-ct-7",
        prompt:
          "Dans la boîte de Fleming, les colonies de staphylocoques étaient absentes autour d’une moisissure *Penicillium*. Quelle hypothèse en a-t-il tiré ?",
        choices: [
          "La moisissure mangeait les bactéries",
          "La moisissure produit une substance qui diffuse et empêche la croissance des bactéries",
          "Les bactéries fuyaient la lumière",
          "La moisissure était un virus",
        ],
        answer: 1,
        explanation:
          "L’absence de bactéries sur une zone autour de la moisissure suggère qu’une substance diffuse dans la gélose et inhibe les bactéries : c’est la pénicilline, premier antibiotique.",
      },
      {
        id: "2nde-svt-08-ct-8",
        prompt:
          "Le paludisme est transmis par la piqûre de moustiques anophèles. Quelle mesure agit directement sur la transmission ?",
        choices: [
          "Prendre des antibiotiques en prévention",
          "Se laver les mains régulièrement",
          "Utiliser des moustiquaires imprégnées d’insecticide",
          "Porter un masque chirurgical",
        ],
        answer: 2,
        explanation:
          "Le paludisme est dû à un parasite transmis par un vecteur, le moustique. Les moustiquaires empêchent les piqûres, donc la transmission. Le lavage des mains et le masque visent d’autres modes de transmission.",
      },
    ],
    homework: [
      {
        id: "2nde-svt-08-hw-1",
        prompt: "Qui a découvert la pénicilline, et en quelle année ?",
        choices: ["Louis Pasteur, en 1885", "Alexander Fleming, en 1928", "Edward Jenner, en 1796", "Charles Darwin, en 1859"],
        answer: 1,
        explanation: "Alexander Fleming a remarqué en 1928 qu’une moisissure, *Penicillium*, empêchait la croissance des bactéries autour d’elle. La pénicilline a été le premier antibiotique.",
      },
      {
        id: "2nde-svt-08-hw-2",
        prompt: "En quelle année la variole a-t-elle été déclarée éradiquée ?",
        choices: ["1928", "1950", "1980", "2001"],
        answer: 2,
        explanation: "Grâce à une vaccination massive à l’échelle mondiale, l’OMS a déclaré la variole éradiquée en 1980. C’est la seule maladie humaine éradiquée à ce jour.",
      },
      {
        id: "2nde-svt-08-hw-3",
        prompt: "Combien de bactéries le corps humain héberge-t-il environ ?",
        choices: [
          "Quelques milliers",
          "Environ 30 000 milliards, autant que de cellules humaines",
          "Environ 10 fois moins que de cellules humaines",
        ],
        answer: 1,
        explanation: "On estime que le corps humain héberge de l’ordre de 30 000 milliards de bactéries, soit à peu près autant que de cellules humaines. La majorité se trouve dans l’intestin.",
      },
      {
        id: "2nde-svt-08-hw-4",
        prompt: "Que contient un vaccin ?",
        choices: [
          "Un antibiotique puissant",
          "Des globules blancs d’un donneur",
          "Un agent pathogène inactivé ou atténué, une partie de celui-ci, ou un ARN codant une de ses protéines",
          "Un pathogène vivant à pleine virulence",
        ],
        answer: 2,
        explanation: "Un vaccin présente au système immunitaire un élément du pathogène sans provoquer la maladie. L’organisme développe alors une **mémoire immunitaire** qui permettra une réaction rapide en cas de contact réel.",
      },
    ],
  },
];

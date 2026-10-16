import type { Chapter } from "../../types";

export const chapters: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // Chapitre 1
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-svt-01",
    title: "Réplication de l’ADN et divisions cellulaires",
    summary:
      "Avant chaque division, la cellule copie fidèlement son ADN par réplication semi-conservative, puis la mitose répartit équitablement les chromosomes entre deux cellules filles génétiquement identiques.",
    objectives: [
      "Je sais décrire les phases du cycle cellulaire et l’évolution de la quantité d’ADN au cours de ce cycle.",
      "Je sais expliquer le mécanisme semi-conservatif de la réplication et le rôle de l’ADN polymérase.",
      "Je sais interpréter l’expérience de Meselson et Stahl.",
      "Je sais décrire les étapes de la mitose et expliquer pourquoi elle conserve l’information génétique.",
    ],
    sections: [
      {
        title: "Le cycle cellulaire et l’évolution des chromosomes",
        body: [
          "Une cellule eucaryote qui se divise suit un **cycle cellulaire** composé de deux grandes périodes : l’**interphase**, la plus longue, et la **mitose** (phase M), suivie de la séparation du cytoplasme (**cytodiérèse**). L’interphase comprend trois phases : **G1** (croissance de la cellule, activité normale), **S** (synthèse, c’est-à-dire réplication de l’ADN) et **G2** (préparation de la division). Une cellule qui cesse de se diviser (neurone, par exemple) sort du cycle et entre en phase **G0**.",
          "L’ADN est associé à des protéines (histones) pour former la **chromatine**. Pendant l’interphase, la chromatine est dispersée dans le noyau. Au début de la mitose, elle se **condense** et devient visible au microscope sous forme de **chromosomes**. Après la phase S, chaque chromosome est constitué de **deux chromatides sœurs** identiques, reliées au niveau du **centromère** : on parle de chromosome à deux chromatides (ou dupliqué).",
          "Si l’on note **Q** la quantité d’ADN d’une cellule en G1, cette quantité passe progressivement à **2Q** pendant la phase S, reste à 2Q en G2 et pendant la mitose, puis revient à **Q** dans chaque cellule fille après la séparation. Chez l’être humain, une cellule somatique contient **46 chromosomes** (23 paires) : ce nombre ne change pas au cours du cycle, seul le nombre de chromatides par chromosome passe de 1 à 2 puis revient à 1.",
        ],
        keyPoints: [
          "Cycle cellulaire = interphase (G1 → S → G2) + mitose + cytodiérèse.",
          "Phase S = réplication de l’ADN : la quantité d’ADN double (Q → 2Q).",
          "Chromatides sœurs : deux copies identiques d’une molécule d’ADN, reliées au centromère.",
          "Le nombre de chromosomes reste constant (46 chez l’Homme) ; c’est le nombre de chromatides qui varie.",
        ],
        formulas: [
          "G1 : Q d’ADN, chromosomes à 1 chromatide",
          "S : Q → 2Q (réplication)",
          "G2 et mitose : 2Q, chromosomes à 2 chromatides",
          "Après la division : Q dans chaque cellule fille",
        ],
        example: {
          title: "Interpréter une courbe de quantité d’ADN",
          steps: [
            "On mesure la quantité d’ADN par cellule en fonction du temps : elle vaut 7 pg pendant 10 h, augmente régulièrement jusqu’à 14 pg en 8 h, reste stable 4 h, puis chute brutalement à 7 pg.",
            "Le plateau initial à 7 pg correspond à la phase G1 (Q = 7 pg).",
            "L’augmentation de 7 à 14 pg correspond à la phase S : l’ADN est répliqué.",
            "Le plateau à 14 pg correspond à G2 puis à la mitose : chaque chromosome possède deux chromatides.",
            "La chute brutale à 7 pg correspond à la séparation des deux cellules filles, qui reçoivent chacune Q.",
          ],
        },
      },
      {
        title: "La réplication semi-conservative de l’ADN",
        body: [
          "L’ADN est une double hélice formée de deux brins de **nucléotides** (désoxyribose + phosphate + base azotée). Les bases sont **complémentaires** : A s’apparie avec T (2 liaisons hydrogène) et G avec C (3 liaisons hydrogène). Les deux brins sont **antiparallèles** : l’un est orienté 5’→3’, l’autre 3’→5’.",
          "La **réplication** a lieu en phase S. Les deux brins se séparent localement en formant un **œil de réplication** limité par deux **fourches de réplication** qui progressent en sens opposés. Chez les eucaryotes, il existe de très nombreuses **origines de réplication** le long de chaque chromosome, ce qui permet de copier rapidement des milliards de nucléotides. L’enzyme **ADN polymérase** lit chaque brin parental et assemble un brin nouveau en ajoutant des nucléotides libres complémentaires, toujours dans le sens 5’→3’.",
          "Chaque molécule fille est donc constituée d’**un brin ancien** (brin matrice) et d’**un brin nouveau** : c’est la réplication **semi-conservative**. Ce modèle a été démontré en 1958 par **Meselson et Stahl** : des bactéries cultivées sur azote lourd (¹⁵N) puis transférées sur azote léger (¹⁴N) produisent, après une génération, uniquement de l’ADN de densité intermédiaire (¹⁵N/¹⁴N), puis, après deux générations, autant d’ADN intermédiaire que d’ADN léger.",
          "La réplication est très **fidèle** grâce à la complémentarité des bases et à une activité de **relecture** (correction) de l’ADN polymérase : le taux d’erreur final est de l’ordre d’une erreur pour 10⁹ à 10¹⁰ nucléotides copiés. Les rares erreurs non corrigées sont à l’origine de **mutations** (chapitre 2).",
        ],
        keyPoints: [
          "Complémentarité : A–T et G–C.",
          "ADN polymérase : synthétise le nouveau brin dans le sens 5’→3’ en utilisant le brin parental comme matrice.",
          "Semi-conservative : chaque molécule fille = 1 brin ancien + 1 brin néoformé.",
          "Expérience de Meselson et Stahl : 100 % d’ADN intermédiaire à la 1re génération, 50 % intermédiaire / 50 % léger à la 2e.",
        ],
        example: {
          title: "Prévoir les résultats de Meselson et Stahl",
          steps: [
            "Génération 0 (milieu ¹⁵N) : tout l’ADN est lourd (¹⁵N/¹⁵N).",
            "Après une réplication en ¹⁴N : chaque molécule contient un brin ¹⁵N ancien et un brin ¹⁴N nouveau → 100 % intermédiaire.",
            "Après deux réplications : les brins ¹⁵N servent de matrice à des brins ¹⁴N (→ intermédiaire), les brins ¹⁴N à des brins ¹⁴N (→ léger) : 50 % / 50 %.",
            "Un modèle conservatif aurait donné dès la 1re génération 50 % lourd et 50 % léger, sans ADN intermédiaire : il est donc rejeté.",
          ],
        },
      },
      {
        title: "La mitose : une répartition équitable de l’information",
        body: [
          "La **mitose** est une division cellulaire qui produit, à partir d’une cellule mère, **deux cellules filles génétiquement identiques** entre elles et à la cellule mère (aux mutations près). Elle permet la croissance, le renouvellement des tissus et la réparation. On la découpe en quatre étapes continues.",
          "En **prophase**, les chromosomes à deux chromatides se condensent, l’enveloppe nucléaire disparaît et le **fuseau de division** (fibres de microtubules) se met en place. En **métaphase**, les chromosomes s’alignent au centre de la cellule sur la **plaque équatoriale**, attachés au fuseau par leur centromère. En **anaphase**, les centromères se séparent : les deux chromatides de chaque chromosome migrent vers des pôles opposés. En **télophase**, chaque lot de chromosomes (désormais à une chromatide) se décondense, une enveloppe nucléaire se reforme, puis la **cytodiérèse** sépare le cytoplasme.",
          "Comme les deux chromatides sœurs sont des copies identiques issues de la réplication, chaque cellule fille reçoit exactement **un exemplaire de chaque molécule d’ADN** : le **caryotype** (ensemble des chromosomes) et l’information génétique sont conservés. L’ensemble des cellules issues d’une même cellule par mitoses successives forme un **clone**. Le cycle est contrôlé par des protéines régulatrices ; un dérèglement de ces contrôles peut conduire à une prolifération anarchique, comme dans les **cancers**.",
        ],
        keyPoints: [
          "Prophase : condensation, disparition de l’enveloppe nucléaire, mise en place du fuseau.",
          "Métaphase : alignement des chromosomes sur la plaque équatoriale.",
          "Anaphase : séparation des chromatides sœurs vers les pôles.",
          "Télophase + cytodiérèse : formation de deux cellules filles identiques.",
          "Clone : ensemble de cellules issues d’une même cellule par mitoses.",
        ],
        example: {
          title: "Reconnaître une étape de mitose sur une photographie",
          steps: [
            "On observe une cellule de pointe de racine d’oignon où des chromosomes très condensés forment une ligne au milieu de la cellule.",
            "Les chromosomes sont alignés au centre : il s’agit de la plaque équatoriale.",
            "Aucun lot de chromatides ne migre encore vers les pôles.",
            "Conclusion : la cellule est en métaphase ; chaque chromosome possède encore deux chromatides.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-svt-01-ex-1",
        prompt: "Au cours de quelle phase du cycle cellulaire l’ADN est-il répliqué ?",
        choices: ["Phase G1", "Phase S", "Phase G2", "Anaphase"],
        answer: 1,
        explanation:
          "La réplication a lieu pendant la **phase S** (synthèse) de l’interphase. La quantité d’ADN passe alors de Q à 2Q. G1 et G2 sont des phases de croissance et de préparation, et l’anaphase est une étape de la mitose.",
      },
      {
        id: "1re-svt-01-ex-2",
        prompt: "Quelle base s’apparie avec la guanine (G) dans la double hélice d’ADN ?",
        choices: ["L’adénine (A)", "La thymine (T)", "L’uracile (U)", "La cytosine (C)"],
        answer: 3,
        explanation:
          "Les bases sont complémentaires : **G s’associe à C** (3 liaisons hydrogène) et A à T (2 liaisons hydrogène). L’uracile n’existe pas dans l’ADN : on le trouve dans l’ARN.",
      },
      {
        id: "1re-svt-01-ex-3",
        prompt: "Que signifie « réplication semi-conservative » ?",
        choices: [
          "Chaque molécule fille contient un brin ancien et un brin nouvellement synthétisé.",
          "Une molécule fille est entièrement ancienne, l’autre entièrement nouvelle.",
          "Chaque brin fille est un mélange de fragments anciens et nouveaux.",
          "Seule la moitié du génome est copiée à chaque cycle.",
        ],
        answer: 0,
        explanation:
          "Lors de la réplication, chaque brin parental sert de matrice : chaque molécule fille conserve donc **un brin parental** et possède **un brin néoformé**. Le modèle « une molécule ancienne, une nouvelle » est le modèle conservatif, et le mélange de fragments est le modèle dispersif.",
      },
      {
        id: "1re-svt-01-ex-4",
        prompt: "Pendant quelle étape de la mitose les chromatides sœurs se séparent-elles ?",
        choices: ["Prophase", "Métaphase", "Anaphase", "Télophase"],
        answer: 2,
        explanation:
          "En **anaphase**, les centromères se séparent et les deux chromatides de chaque chromosome migrent vers les pôles opposés de la cellule. En métaphase, elles sont encore réunies sur la plaque équatoriale.",
      },
      {
        id: "1re-svt-01-ex-5",
        prompt: "Une cellule humaine en phase G2 contient :",
        choices: [
          "23 chromosomes à une chromatide",
          "46 chromosomes à une chromatide",
          "92 chromosomes à une chromatide",
          "46 chromosomes à deux chromatides",
        ],
        answer: 3,
        explanation:
          "Après la phase S, le nombre de chromosomes reste **46**, mais chacun est formé de **deux chromatides** identiques. La quantité d’ADN est 2Q.",
      },
      {
        id: "1re-svt-01-ex-6",
        prompt: "Quel est le rôle de l’ADN polymérase ?",
        choices: [
          "Séparer les chromatides sœurs pendant l’anaphase",
          "Assembler des nucléotides complémentaires du brin matrice pour former un nouveau brin",
          "Condenser la chromatine en chromosomes",
          "Copier l’ADN en ARN messager",
        ],
        answer: 1,
        explanation:
          "L’**ADN polymérase** est l’enzyme de la réplication : elle lit le brin matrice et ajoute un à un des nucléotides complémentaires (dans le sens 5’→3’). La copie de l’ADN en ARN est la transcription, réalisée par l’ARN polymérase.",
      },
    ],
    test: [
      {
        id: "1re-svt-01-ct-1",
        prompt:
          "Dans l’expérience de Meselson et Stahl, des bactéries cultivées sur ¹⁵N sont transférées sur ¹⁴N. Après **une** génération, on obtient une seule bande d’ADN de densité intermédiaire. Quel modèle est rejeté par ce résultat ?",
        choices: [
          "Le modèle semi-conservatif",
          "Le modèle dispersif",
          "Le modèle conservatif",
          "Aucun modèle n’est rejeté",
        ],
        answer: 2,
        explanation:
          "Le modèle **conservatif** prévoit, après une génération, deux bandes (une lourde, une légère). L’unique bande intermédiaire le rejette. En revanche, ce résultat est compatible à la fois avec le modèle semi-conservatif et le modèle dispersif : il faut la 2e génération pour les départager.",
      },
      {
        id: "1re-svt-01-ct-2",
        prompt:
          "Même expérience : après **deux** générations sur ¹⁴N, on obtient 50 % d’ADN intermédiaire et 50 % d’ADN léger. Que permet de conclure ce résultat ?",
        choices: [
          "Il valide le modèle semi-conservatif et rejette le modèle dispersif.",
          "Il valide le modèle dispersif.",
          "Il valide le modèle conservatif.",
          "Il montre que l’ADN n’est pas répliqué.",
        ],
        answer: 0,
        explanation:
          "Le modèle dispersif prévoirait une bande unique, de plus en plus légère (¼ de ¹⁵N), sans ADN totalement léger. L’apparition d’ADN léger à côté d’ADN intermédiaire correspond exactement à la prédiction **semi-conservative** : les 2 brins ¹⁵N d’origine restent associés chacun à un brin ¹⁴N, les autres molécules sont entièrement ¹⁴N.",
      },
      {
        id: "1re-svt-01-ct-3",
        prompt:
          "On fournit pendant quelques minutes de la thymidine radioactive à des cellules en culture, puis on les observe. Seuls les noyaux de certaines cellules sont radioactifs. Dans quelle phase étaient ces cellules pendant le marquage ?",
        choices: ["En phase G1", "En métaphase", "En phase G2", "En phase S"],
        answer: 3,
        explanation:
          "La thymidine est un précurseur de nucléotide à thymine, incorporé **uniquement dans l’ADN en cours de synthèse**. Seules les cellules en train de répliquer leur ADN, donc en **phase S**, deviennent radioactives.",
      },
      {
        id: "1re-svt-01-ct-4",
        prompt:
          "Un cycle cellulaire dure 24 h. Sur 1 000 cellules observées à un instant donné, 50 sont en mitose. Quelle est la durée approximative de la mitose ?",
        choices: ["50 min", "1 h 12 min", "2 h 24 min", "12 h"],
        answer: 1,
        explanation:
          "Dans une population asynchrone, la proportion de cellules dans une phase est proportionnelle à la durée de cette phase : 50/1000 = 5 %. Durée = 0,05 × 24 h = **1,2 h = 1 h 12 min**.",
      },
      {
        id: "1re-svt-01-ct-5",
        prompt:
          "La colchicine empêche la formation du fuseau de division. Des cellules traitées s’accumulent dans un état où les chromosomes sont condensés mais dispersés. Quelle conséquence est attendue ?",
        choices: [
          "La réplication de l’ADN est bloquée.",
          "Les chromatides sœurs ne peuvent pas être réparties vers les pôles.",
          "Les chromosomes se décondensent immédiatement.",
          "Les cellules filles reçoivent chacune la moitié des chromosomes.",
        ],
        answer: 1,
        explanation:
          "Sans fuseau, les chromosomes ne peuvent ni s’aligner sur la plaque équatoriale ni être tirés vers les pôles : la mitose est **bloquée** avant l’anaphase. La réplication (phase S) a déjà eu lieu et n’est pas concernée. Ce blocage est utilisé pour observer les caryotypes.",
      },
      {
        id: "1re-svt-01-ct-6",
        prompt:
          "Une molécule d’ADN contient 30 % d’adénine. Quel est son pourcentage de guanine ?",
        choices: ["30 %", "70 %", "40 %", "20 %"],
        answer: 3,
        explanation:
          "Par complémentarité, %A = %T = 30 %, donc A + T = 60 %. Il reste 40 % pour G + C, avec %G = %C : **G = 20 %**.",
      },
      {
        id: "1re-svt-01-ct-7",
        prompt:
          "Sur une photographie de cellules de racine, une cellule montre deux lots de chromosomes en train de se rapprocher des pôles opposés. Combien de chromatides possède chaque chromosome visible ?",
        choices: [
          "Une seule chromatide : la cellule est en anaphase.",
          "Deux chromatides : la cellule est en métaphase.",
          "Deux chromatides : la cellule est en prophase.",
          "Quatre chromatides : la cellule est en télophase.",
        ],
        answer: 0,
        explanation:
          "La migration de deux lots vers les pôles caractérise l’**anaphase**. Les chromatides sœurs viennent d’être séparées : chaque chromosome en migration n’a donc **qu’une chromatide**.",
      },
      {
        id: "1re-svt-01-ct-8",
        prompt:
          "Une cellule mère porte une mutation sur un gène. Après trois mitoses successives sans nouvelle erreur, combien de cellules du clone porteront cette mutation ?",
        choices: ["1", "4", "8", "Aucune"],
        answer: 2,
        explanation:
          "Trois mitoses produisent 2³ = **8 cellules**. La réplication semi-conservative recopie fidèlement la séquence mutée et la mitose la transmet à chaque cellule fille : tout le clone porte la mutation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 2
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-svt-02",
    title: "Mutations de l’ADN et variabilité génétique",
    summary:
      "Des modifications de la séquence de l’ADN, spontanées ou provoquées par des agents mutagènes, créent de nouveaux allèles qui sont la source de la variabilité génétique, à condition d’échapper aux systèmes de réparation.",
    objectives: [
      "Je sais définir une mutation et en distinguer les principaux types (substitution, insertion, délétion).",
      "Je sais expliquer l’origine des mutations : erreurs de réplication et agents mutagènes.",
      "Je sais expliquer le rôle des systèmes de réparation de l’ADN.",
      "Je sais distinguer mutation somatique et mutation germinale et relier mutations et diversité allélique.",
    ],
    sections: [
      {
        title: "Qu’est-ce qu’une mutation ?",
        body: [
          "Une **mutation** est une modification **rare, aléatoire et héréditaire** (transmise lors des divisions) de la séquence des nucléotides de l’ADN. Elle crée, à partir d’un **allèle** existant, un nouvel allèle du même gène. Un **gène** est une portion d’ADN qui détermine un caractère ; ses différentes versions sont les allèles.",
          "On distingue trois grands types de mutations ponctuelles : la **substitution** (un nucléotide est remplacé par un autre), l’**insertion** (ajout d’un ou plusieurs nucléotides) et la **délétion** (perte d’un ou plusieurs nucléotides). Une insertion ou une délétion d’un nombre de nucléotides non multiple de 3 dans une partie codante provoque un **décalage du cadre de lecture**, qui modifie toute la suite de la protéine.",
          "Les conséquences d’une substitution sont variables : elle peut être **silencieuse** (le codon modifié code le même acide aminé, grâce à la redondance du code génétique), **faux-sens** (un acide aminé est remplacé par un autre) ou **non-sens** (apparition d’un codon stop, protéine tronquée). Un exemple célèbre est la **drépanocytose** : une substitution A → T dans le gène de la β-globine remplace l’acide glutamique par la valine en position 6, ce qui déforme les globules rouges.",
        ],
        keyPoints: [
          "Mutation = modification de la séquence d’ADN, à l’origine d’un nouvel allèle.",
          "Substitution, insertion, délétion.",
          "Insertion/délétion non multiple de 3 → décalage du cadre de lecture.",
          "Substitution : silencieuse, faux-sens ou non-sens.",
        ],
        example: {
          title: "Identifier une mutation en comparant deux séquences",
          steps: [
            "Allèle de référence (brin codant) : ATG GAG GAG AAG.",
            "Allèle étudié : ATG GTG GAG AAG.",
            "On compare nucléotide par nucléotide : le 5e nucléotide A est remplacé par T.",
            "Il s’agit d’une substitution ; le codon GAG (acide glutamique) devient GTG (valine) : c’est une mutation faux-sens.",
          ],
        },
      },
      {
        title: "L’origine des mutations et leur réparation",
        body: [
          "Les mutations ont deux origines. Les **mutations spontanées** résultent surtout d’**erreurs de réplication** non corrigées par l’ADN polymérase, ou de lésions chimiques naturelles de l’ADN. Leur fréquence est très faible (environ 10⁻⁹ à 10⁻¹⁰ par nucléotide et par réplication) mais, rapportée aux 3 milliards de paires de bases du génome humain et au nombre immense de divisions, elle n’est pas négligeable.",
          "Les **agents mutagènes** augmentent la fréquence des mutations. Ce sont des agents physiques, comme les **rayons ultraviolets** (UV), qui créent des liaisons anormales entre deux thymines voisines (dimères de thymine), ou les rayons X et γ qui cassent l’ADN ; et des agents chimiques, comme certaines molécules de la **fumée de tabac** (benzopyrène) qui se fixent sur les bases.",
          "La cellule possède des **systèmes de réparation** de l’ADN : des enzymes détectent les anomalies, excisent la portion endommagée et resynthétisent la séquence correcte à partir du brin complémentaire. Une mutation n’apparaît que lorsque la lésion **n’est pas réparée** avant la réplication suivante. Chez les personnes atteintes de **xeroderma pigmentosum**, un système de réparation des lésions dues aux UV est déficient : leur risque de cancer de la peau est multiplié par plusieurs milliers.",
        ],
        keyPoints: [
          "Mutations spontanées : erreurs de réplication non corrigées.",
          "Agents mutagènes physiques (UV, rayons X) et chimiques (benzopyrène…) : ils augmentent la fréquence des mutations.",
          "Systèmes de réparation : la plupart des lésions sont corrigées ; seule une lésion non réparée devient mutation.",
        ],
        example: {
          title: "Analyser une expérience sur des levures exposées aux UV",
          steps: [
            "Deux souches de levures (normale et déficiente en réparation) sont exposées à des doses croissantes d’UV, puis on compte les survivantes.",
            "La survie diminue avec la dose d’UV pour les deux souches : les UV endommagent l’ADN.",
            "Pour une même dose, la souche déficiente survit beaucoup moins.",
            "Conclusion : les UV sont mutagènes et les systèmes de réparation limitent les conséquences de leurs lésions.",
          ],
        },
      },
      {
        title: "Mutations et variabilité génétique",
        body: [
          "Une mutation qui survient dans une **cellule somatique** (cellule du corps : peau, foie…) est transmise aux cellules filles par mitose et forme un **clone** muté, mais elle **n’est pas transmise à la descendance**. Certaines mutations somatiques, en touchant des gènes qui contrôlent la division, peuvent contribuer à l’apparition d’un **cancer**.",
          "Une mutation qui survient dans la **lignée germinale** (cellules à l’origine des gamètes) peut être transmise à la génération suivante : elle est alors présente dans **toutes les cellules** de l’individu issu de ce gamète. C’est par ces mutations germinales que de nouveaux allèles entrent dans une population.",
          "Les mutations sont ainsi la **source première de la diversité allélique** : au sein d’une population, un même gène existe sous plusieurs allèles, ce qu’on appelle le **polymorphisme génétique**. Le devenir de ces allèles (fréquence qui augmente ou diminue) dépend ensuite du hasard (dérive génétique) et de la sélection naturelle. L’analyse des séquences d’ADN montre d’ailleurs que deux humains non apparentés diffèrent en moyenne d’environ un nucléotide sur 1 000.",
        ],
        keyPoints: [
          "Mutation somatique : touche un clone de cellules, non héréditaire.",
          "Mutation germinale : transmissible à la descendance.",
          "Polymorphisme : un gène est polymorphe s’il possède plusieurs allèles fréquents dans la population.",
          "Les mutations sont la source de la diversité des allèles.",
        ],
        example: {
          title: "Mutation somatique ou germinale ?",
          steps: [
            "Un homme présente une tache de peau de couleur différente du reste de son corps ; ses enfants n’ont pas cette tache.",
            "La particularité ne concerne qu’une zone : elle provient d’une cellule de peau mutée qui s’est divisée (clone).",
            "Elle n’est pas transmise aux enfants : les gamètes ne portent pas la mutation.",
            "Conclusion : il s’agit d’une mutation somatique.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-svt-02-ex-1",
        prompt: "Qu’est-ce qu’une mutation ?",
        choices: [
          "Une modification de la séquence des nucléotides de l’ADN",
          "Le passage d’un chromosome à une chromatide à un chromosome à deux chromatides",
          "La copie de l’ADN en ARN",
          "Un changement de l’apparence d’un individu dû à l’environnement",
        ],
        answer: 0,
        explanation:
          "Une **mutation** est une modification de la séquence de l’ADN, transmise lors des divisions. Elle crée un nouvel allèle. Un changement d’apparence dû seulement à l’environnement n’est pas une mutation.",
      },
      {
        id: "1re-svt-02-ex-2",
        prompt: "La séquence ATGCCA devient ATGCA. De quel type de mutation s’agit-il ?",
        choices: ["Une substitution", "Une insertion", "Une délétion", "Une mutation silencieuse"],
        answer: 2,
        explanation:
          "La séquence passe de 6 à 5 nucléotides : un C a été **perdu**. C’est une **délétion**. Dans une partie codante, elle décale le cadre de lecture.",
      },
      {
        id: "1re-svt-02-ex-3",
        prompt: "Lequel de ces agents est un agent mutagène physique ?",
        choices: ["Le benzopyrène", "Les rayons ultraviolets", "L’ADN polymérase", "Le glucose"],
        answer: 1,
        explanation:
          "Les **UV** sont un agent mutagène **physique** : ils provoquent notamment des dimères de thymine. Le benzopyrène est un mutagène **chimique** ; l’ADN polymérase est une enzyme de réplication.",
      },
      {
        id: "1re-svt-02-ex-4",
        prompt: "Une mutation survenue dans une cellule du foie :",
        choices: [
          "sera transmise à tous les enfants de l’individu",
          "sera transmise à la moitié des enfants",
          "modifie toutes les cellules de l’organisme",
          "est transmise aux cellules issues de cette cellule mais pas à la descendance",
        ],
        answer: 3,
        explanation:
          "Une cellule du foie est une **cellule somatique** : la mutation se transmet par mitose à son clone, mais pas aux gamètes, donc **pas à la descendance**.",
      },
      {
        id: "1re-svt-02-ex-5",
        prompt: "Pourquoi une substitution peut-elle être sans effet sur la protéine ?",
        choices: [
          "Parce que les substitutions ne touchent jamais les gènes",
          "Parce que l’ARN polymérase corrige toujours l’erreur",
          "Parce que plusieurs codons peuvent coder le même acide aminé",
          "Parce que la protéine est fabriquée avant la mutation",
        ],
        answer: 2,
        explanation:
          "Le code génétique est **redondant** : plusieurs codons codent le même acide aminé. Une substitution qui transforme un codon en un codon synonyme est **silencieuse**.",
      },
      {
        id: "1re-svt-02-ex-6",
        prompt: "Quel est le rôle des systèmes de réparation de l’ADN ?",
        choices: [
          "Créer de nouveaux allèles pour augmenter la diversité",
          "Détecter et corriger les lésions de l’ADN avant qu’elles ne deviennent des mutations",
          "Traduire l’ARN messager en protéine",
          "Séparer les chromatides pendant la mitose",
        ],
        answer: 1,
        explanation:
          "Les enzymes de réparation **détectent, excisent et remplacent** les portions d’ADN endommagées. Une lésion ne devient une mutation que si elle échappe à la réparation.",
      },
    ],
    test: [
      {
        id: "1re-svt-02-ct-1",
        prompt:
          "Brin codant de référence : ATG AAA GGC TTT … Allèle muté : ATG AAG GGC TTT … (AAA et AAG codent tous deux la lysine). Quelle est la conséquence ?",
        choices: [
          "Mutation silencieuse : la protéine est inchangée.",
          "Mutation faux-sens : un acide aminé est remplacé.",
          "Mutation non-sens : la protéine est tronquée.",
          "Décalage du cadre de lecture.",
        ],
        answer: 0,
        explanation:
          "Il y a une substitution (A → G en 6e position), mais AAG code le même acide aminé que AAA (lysine). La séquence protéique est inchangée : mutation **silencieuse**.",
      },
      {
        id: "1re-svt-02-ct-2",
        prompt:
          "Une insertion d’un seul nucléotide survient au début de la partie codante d’un gène. Quelle est la conséquence la plus probable ?",
        choices: [
          "Un seul acide aminé est modifié.",
          "Aucune, car le code est redondant.",
          "Le cadre de lecture est décalé : la suite de la protéine est modifiée et un codon stop apparaît souvent précocement.",
          "Le gène est dupliqué.",
        ],
        answer: 2,
        explanation:
          "L’ARNm est lu par groupes de 3 nucléotides. Ajouter 1 nucléotide **décale tous les codons suivants** : les acides aminés en aval sont différents et un codon stop prématuré apparaît fréquemment. La protéine est en général non fonctionnelle.",
      },
      {
        id: "1re-svt-02-ct-3",
        prompt:
          "On expose des cultures de bactéries à des doses croissantes d’UV et on compte les mutants résistants à un antibiotique : 2 mutants sans UV, 20 pour une dose faible, 200 pour une dose forte. Quelle conclusion est correcte ?",
        choices: [
          "Les UV créent des mutations dirigées vers la résistance à l’antibiotique.",
          "Les UV augmentent la fréquence des mutations ; sans UV, des mutations spontanées existent.",
          "Les mutations n’apparaissent qu’en présence d’UV.",
          "L’antibiotique provoque les mutations de résistance.",
        ],
        answer: 1,
        explanation:
          "Il y a déjà 2 mutants sans UV : des **mutations spontanées** existent. Le nombre de mutants augmente avec la dose : les UV **augmentent la fréquence** des mutations. Les mutations restent aléatoires : les UV n’orientent pas vers la résistance ; l’antibiotique sert seulement à révéler (sélectionner) les mutants.",
      },
      {
        id: "1re-svt-02-ct-4",
        prompt:
          "Les personnes atteintes de xeroderma pigmentosum développent très tôt de nombreux cancers de la peau, mais pas d’autres organes. Quelle hypothèse est la plus cohérente ?",
        choices: [
          "Leur peau reçoit davantage d’UV que celle des autres personnes.",
          "Leurs cellules ne se divisent jamais.",
          "Leur ADN ne contient pas de thymine.",
          "Elles ne réparent pas efficacement les lésions de l’ADN causées par les UV, qui n’atteignent que la peau.",
        ],
        answer: 3,
        explanation:
          "Les UV ne pénètrent que la peau. Chez ces patients, un système de **réparation** des lésions dues aux UV est déficient : les lésions persistent, deviennent des mutations et s’accumulent, notamment dans des gènes contrôlant la division, d’où les cancers cutanés.",
      },
      {
        id: "1re-svt-02-ct-5",
        prompt:
          "Un enfant présente une maladie génétique liée à une mutation absente chez ses deux parents ; cette mutation est présente dans toutes ses cellules. Où la mutation est-elle le plus probablement apparue ?",
        choices: [
          "Dans un gamète d’un des parents (ou la cellule-œuf)",
          "Dans une cellule de peau de l’enfant après sa naissance",
          "Dans une cellule du foie d’un parent",
          "Dans un globule rouge de l’enfant",
        ],
        answer: 0,
        explanation:
          "Une mutation présente dans **toutes les cellules** de l’enfant était déjà dans la cellule-œuf. Comme les parents ne la portent pas dans leurs cellules, elle est apparue **de novo** dans la lignée germinale d’un parent (gamète) ou dans la cellule-œuf elle-même.",
      },
      {
        id: "1re-svt-02-ct-6",
        prompt:
          "Dans le gène de la β-globine, le codon GAG (acide glutamique) devient GTG (valine) chez les personnes drépanocytaires. Comment qualifier cette mutation ?",
        choices: [
          "Délétion entraînant un décalage du cadre de lecture",
          "Substitution non-sens",
          "Substitution faux-sens",
          "Mutation silencieuse",
        ],
        answer: 2,
        explanation:
          "Un nucléotide est remplacé (A → T) : c’est une **substitution**. Le nouveau codon code un autre acide aminé (valine au lieu d’acide glutamique) : elle est **faux-sens**. La protéine garde sa longueur mais ses propriétés changent (polymérisation de l’hémoglobine).",
      },
      {
        id: "1re-svt-02-ct-7",
        prompt:
          "Le taux d’erreur après relecture est de 10⁻¹⁰ par nucléotide et par réplication. Le génome diploïde humain compte environ 6 × 10⁹ paires de bases. Combien de mutations nouvelles en moyenne par division ?",
        choices: ["Environ 60", "Environ 0,6", "Environ 6", "Environ 0,006"],
        answer: 1,
        explanation:
          "6 × 10⁹ × 10⁻¹⁰ = **0,6 mutation par division** en moyenne. C’est faible, mais un organisme réalise des milliers de milliards de divisions : les mutations somatiques sont donc nombreuses à l’échelle d’une vie.",
      },
      {
        id: "1re-svt-02-ct-8",
        prompt:
          "Un gène possède 5 allèles dans une population, dont 3 présents à plus de 1 %. Que peut-on affirmer ?",
        choices: [
          "Le gène n’a jamais muté.",
          "Seuls 3 allèles ont pu apparaître par mutation.",
          "Tous les individus portent les 5 allèles.",
          "Le gène est polymorphe : ses allèles sont issus de mutations successives à partir d’un allèle ancestral.",
        ],
        answer: 3,
        explanation:
          "Un gène possédant plusieurs allèles dont au moins deux à une fréquence supérieure à 1 % est **polymorphe**. Tous ses allèles dérivent d’un allèle ancestral par **mutations**. Un individu diploïde ne porte au plus que 2 allèles d’un même gène.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // Chapitre 3
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-svt-03",
    title: "L’expression du patrimoine génétique",
    summary:
      "L’information portée par un gène est d’abord transcrite en ARN messager dans le noyau, puis traduite en protéine dans le cytoplasme grâce au code génétique.",
    objectives: [
      "Je sais décrire la transcription et expliquer le rôle de l’ARN polymérase.",
      "Je sais expliquer la maturation de l’ARN pré-messager (épissage) et l’épissage alternatif.",
      "Je sais utiliser le tableau du code génétique pour traduire une séquence.",
      "Je sais décrire les étapes de la traduction par les ribosomes.",
    ],
    sections: [
      {
        title: "La transcription : de l’ADN à l’ARN",
        body: [
          "Chez les eucaryotes, l’ADN reste dans le noyau, alors que les protéines sont fabriquées dans le cytoplasme. Un intermédiaire transporte l’information : l’**ARN messager** (ARNm). L’ARN est une molécule **simple brin**, plus courte que l’ADN, dont les nucléotides contiennent du **ribose** (au lieu du désoxyribose) et la base **uracile (U)** à la place de la thymine.",
          "La **transcription** est la synthèse d’un ARN à partir d’un gène. L’enzyme **ARN polymérase** se fixe en début de gène, sépare localement les deux brins et assemble des **ribonucléotides** complémentaires d’un seul des deux brins, appelé **brin transcrit** (ou brin matrice) : face à A elle place U, face à T elle place A, face à G elle place C et face à C elle place G. L’ARN obtenu a donc la même séquence que l’autre brin, le **brin codant** (non transcrit), en remplaçant T par U.",
          "Un même gène peut être transcrit simultanément par plusieurs ARN polymérases, ce qui produit de nombreuses copies d’ARN : c’est une **amplification** de l’information. Seule une partie des gènes est transcrite dans une cellule donnée, ce qui explique que les cellules d’un même organisme, qui ont le même ADN, fabriquent des protéines différentes.",
        ],
        keyPoints: [
          "ARN : simple brin, ribose, uracile (U) au lieu de thymine.",
          "Transcription = synthèse d’ARN par l’ARN polymérase, par complémentarité avec le brin transcrit.",
          "Séquence de l’ARNm = séquence du brin codant avec U à la place de T.",
          "Chaque cellule n’exprime qu’une partie de ses gènes.",
        ],
        example: {
          title: "Écrire l’ARNm à partir du brin transcrit",
          steps: [
            "Brin transcrit (3’→5’) : TAC GGA TTC ACT.",
            "On écrit le complémentaire en utilisant U face à A : AUG CCU AAG UGA.",
            "On vérifie avec le brin codant (complémentaire du brin transcrit) : ATG CCT AAG TGA.",
            "L’ARNm est bien identique au brin codant, T étant remplacé par U.",
          ],
        },
      },
      {
        title: "La maturation de l’ARN et l’épissage alternatif",
        body: [
          "Chez les eucaryotes, la transcription produit d’abord un **ARN pré-messager**. Un gène est en effet constitué d’une alternance d’**exons** (séquences conservées dans l’ARNm mature) et d’**introns** (séquences éliminées). Lors de la **maturation**, qui a lieu dans le noyau, les introns sont retirés et les exons sont raboutés : c’est l’**épissage**.",
          "Pour un même ARN pré-messager, l’épissage peut se faire de plusieurs façons : certains exons peuvent être conservés ou éliminés. Cet **épissage alternatif** permet à un seul gène de produire **plusieurs ARNm différents**, donc plusieurs protéines. C’est l’une des raisons pour lesquelles l’être humain, avec environ 20 000 gènes codant des protéines, en produit bien davantage.",
          "L’ARNm mature quitte ensuite le noyau par les **pores nucléaires** pour gagner le cytoplasme, où il sera traduit. Chez les bactéries (procaryotes), il n’y a ni noyau ni introns : la traduction commence même avant la fin de la transcription.",
        ],
        keyPoints: [
          "Gène eucaryote = exons + introns.",
          "Épissage : élimination des introns et raboutage des exons → ARNm mature.",
          "Épissage alternatif : un gène → plusieurs ARNm → plusieurs protéines.",
        ],
        example: {
          title: "Compter les ARNm possibles",
          steps: [
            "Un gène comporte 4 exons (E1, E2, E3, E4) séparés par 3 introns.",
            "On sait que E1 et E4 sont toujours conservés, mais que E2 et E3 peuvent chacun être conservés ou retirés.",
            "Combinaisons possibles : E1-E2-E3-E4, E1-E2-E4, E1-E3-E4, E1-E4.",
            "Ce gène peut donc produire 4 ARNm matures, et donc 4 protéines différentes.",
          ],
        },
      },
      {
        title: "La traduction et le code génétique",
        body: [
          "La **traduction** est la synthèse d’une protéine (enchaînement d’**acides aminés**) à partir de l’ARNm. Elle se déroule dans le cytoplasme, au niveau des **ribosomes**. L’ARNm est lu par groupes de **trois nucléotides** consécutifs appelés **codons**. Il existe 4³ = **64 codons** pour **20 acides aminés**.",
          "La correspondance entre codons et acides aminés est le **code génétique**. Il est **universel** (le même chez presque tous les êtres vivants, ce qui permet la transgenèse), **redondant** (plusieurs codons peuvent coder le même acide aminé) et **non ambigu** (un codon donné ne code qu’un seul acide aminé). Le codon **AUG** (méthionine) est le **codon initiateur** ; les codons **UAA, UAG et UGA** sont des **codons stop** qui ne codent aucun acide aminé.",
          "La traduction comporte trois étapes. **Initiation** : le ribosome s’assemble sur l’ARNm au niveau du codon AUG. **Élongation** : le ribosome avance codon par codon ; à chaque codon, l’acide aminé correspondant est apporté (par un ARN de transfert) et lié au précédent par une **liaison peptidique**. **Terminaison** : à la rencontre d’un codon stop, le ribosome se détache et libère la chaîne polypeptidique. Plusieurs ribosomes peuvent traduire simultanément le même ARNm (**polysome**), ce qui amplifie encore la production.",
          "La séquence des acides aminés détermine le repliement de la protéine dans l’espace, donc sa **forme** et sa **fonction**. Ainsi, la séquence des nucléotides d’un gène détermine, via l’ARNm et le code génétique, la séquence d’une protéine.",
        ],
        keyPoints: [
          "Codon = 3 nucléotides de l’ARNm ; 64 codons, 20 acides aminés.",
          "Code génétique : universel, redondant, non ambigu.",
          "AUG = initiation (méthionine) ; UAA, UAG, UGA = stop.",
          "Traduction : initiation, élongation, terminaison, dans le cytoplasme (ribosomes).",
        ],
        formulas: [
          "ADN —(transcription, noyau)→ ARN pré-messager —(épissage)→ ARNm —(traduction, cytoplasme)→ protéine",
          "Nombre d’acides aminés = (nombre de nucléotides codants − 3 du codon stop) ÷ 3",
        ],
        example: {
          title: "Traduire un ARNm",
          steps: [
            "ARNm : 5’- GCA AUG UUU GGC UAA CCG -3’.",
            "On cherche le codon initiateur AUG : la lecture commence là.",
            "AUG → Met ; UUU → Phe ; GGC → Gly ; UAA → stop.",
            "Le peptide obtenu est Met–Phe–Gly (3 acides aminés) ; les nucléotides avant AUG et après le stop ne sont pas traduits.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-svt-03-ex-1",
        prompt: "Quelle base est présente dans l’ARN mais pas dans l’ADN ?",
        choices: ["Thymine", "Adénine", "Uracile", "Guanine"],
        answer: 2,
        explanation:
          "L’ARN contient l’**uracile (U)** à la place de la thymine (T). Adénine, guanine et cytosine sont communes à l’ADN et à l’ARN.",
      },
      {
        id: "1re-svt-03-ex-2",
        prompt: "Où se déroule la transcription chez un eucaryote ?",
        choices: ["Dans le noyau", "Dans le cytoplasme, sur les ribosomes", "Dans la membrane plasmique", "Dans le sang"],
        answer: 0,
        explanation:
          "L’ADN étant dans le **noyau**, la transcription y a lieu, ainsi que la maturation. La traduction, elle, se déroule dans le cytoplasme.",
      },
      {
        id: "1re-svt-03-ex-3",
        prompt: "Combien de nucléotides forment un codon ?",
        choices: ["1", "2", "4", "3"],
        answer: 3,
        explanation:
          "Un **codon** est un triplet de **3 nucléotides** de l’ARNm. Avec 4 nucléotides possibles, on obtient 4³ = 64 codons, suffisants pour 20 acides aminés.",
      },
      {
        id: "1re-svt-03-ex-4",
        prompt: "Que signifie « le code génétique est redondant » ?",
        choices: [
          "Un codon peut coder plusieurs acides aminés.",
          "Plusieurs codons peuvent coder le même acide aminé.",
          "Le code est le même chez tous les êtres vivants.",
          "Chaque gène est présent en deux exemplaires.",
        ],
        answer: 1,
        explanation:
          "**Redondant** : plusieurs codons différents codent le même acide aminé (par exemple 4 codons pour la glycine). Le fait que le code soit le même pour tous est son **universalité** ; un codon ne code jamais plusieurs acides aminés (non-ambiguïté).",
      },
      {
        id: "1re-svt-03-ex-5",
        prompt: "Qu’est-ce que l’épissage ?",
        choices: [
          "La copie de l’ADN avant la mitose",
          "L’assemblage des acides aminés par le ribosome",
          "L’élimination des introns et le raboutage des exons de l’ARN pré-messager",
          "La sortie de l’ARNm du noyau",
        ],
        answer: 2,
        explanation:
          "L’**épissage** transforme l’ARN pré-messager en ARNm mature en éliminant les **introns** et en raboutant les **exons**.",
      },
      {
        id: "1re-svt-03-ex-6",
        prompt: "Brin codant de l’ADN : ATG GCT. Quelle est la séquence de l’ARNm ?",
        choices: ["AUG GCU", "UAC CGA", "TAC CGA", "ATG GCT"],
        answer: 0,
        explanation:
          "L’ARNm a la même séquence que le **brin codant**, avec U à la place de T : **AUG GCU**. UAC CGA serait le complémentaire du brin codant.",
      },
    ],
    test: [
      {
        id: "1re-svt-03-ct-1",
        prompt:
          "On injecte des nucléotides à uracile radioactif à des cellules. Après 5 min, la radioactivité est dans le noyau ; après 30 min, elle est aussi dans le cytoplasme. Quelle interprétation est correcte ?",
        choices: [
          "L’ADN est répliqué dans le noyau puis migre dans le cytoplasme.",
          "Les protéines sont fabriquées dans le noyau.",
          "L’uracile est dégradé dans le noyau.",
          "L’ARN est synthétisé dans le noyau puis migre vers le cytoplasme.",
        ],
        answer: 3,
        explanation:
          "L’uracile n’entre que dans l’**ARN**. Le marquage d’abord nucléaire montre que l’ARN est **synthétisé dans le noyau** (transcription) ; sa présence ensuite dans le cytoplasme montre qu’il **migre** vers le lieu de la traduction.",
      },
      {
        id: "1re-svt-03-ct-2",
        prompt:
          "Un ARNm mature contient 900 nucléotides entre le premier nucléotide du codon AUG et le dernier nucléotide du codon stop inclus. Combien d’acides aminés comporte la protéine ?",
        choices: ["300", "900", "299", "297"],
        answer: 2,
        explanation:
          "900 nucléotides = 300 codons, dont le dernier est un **codon stop** qui ne code aucun acide aminé. La protéine compte donc **299 acides aminés** (la méthionine initiale incluse).",
      },
      {
        id: "1re-svt-03-ct-3",
        prompt:
          "Un gène de 15 000 nucléotides produit un ARNm mature de 2 000 nucléotides. Comment expliquer cette différence ?",
        choices: [
          "Le gène contient des introns éliminés lors de l’épissage.",
          "Seul un brin de l’ADN est transcrit.",
          "L’ARN polymérase s’arrête au milieu du gène.",
          "Le ribosome raccourcit l’ARNm.",
        ],
        answer: 0,
        explanation:
          "Le gène comporte des **introns**, transcrits dans l’ARN pré-messager puis éliminés lors de l’**épissage**. L’ARNm mature ne contient que les exons. Le fait qu’un seul brin soit transcrit n’explique pas une réduction de longueur.",
      },
      {
        id: "1re-svt-03-ct-4",
        prompt:
          "On introduit le gène humain de l’insuline dans une bactérie, qui produit alors une insuline identique à l’insuline humaine. Quelle propriété du code génétique cette expérience illustre-t-elle ?",
        choices: ["Sa redondance", "Son universalité", "Sa non-ambiguïté", "L’existence de codons stop"],
        answer: 1,
        explanation:
          "La bactérie lit les codons du gène humain et produit la même séquence d’acides aminés : le code génétique est **universel**. (Pour cette transgenèse, on utilise une version du gène sans introns, car les bactéries ne réalisent pas l’épissage.)",
      },
      {
        id: "1re-svt-03-ct-5",
        prompt:
          "Des cellules de muscle et de thyroïde produisent deux protéines différentes, la calcitonine et le CGRP, à partir du même gène. Quel mécanisme l’explique ?",
        choices: [
          "Une mutation différente dans chaque tissu",
          "Une réplication différente de l’ADN",
          "Un code génétique différent selon les tissus",
          "Un épissage alternatif de l’ARN pré-messager",
        ],
        answer: 3,
        explanation:
          "Toutes les cellules ont le même gène et le code est le même. Selon le tissu, des exons différents sont conservés lors de la maturation : c’est l’**épissage alternatif**, qui produit des ARNm, donc des protéines, différents.",
      },
      {
        id: "1re-svt-03-ct-6",
        prompt:
          "Au microscope électronique, on observe un ARNm sur lequel sont fixés une dizaine de ribosomes portant des chaînes de longueurs croissantes. Que montre cette observation ?",
        choices: [
          "Plusieurs ribosomes traduisent simultanément le même ARNm (polysome), qu’ils parcourent dans le même sens.",
          "Chaque ribosome fabrique une protéine différente.",
          "L’ARNm est en cours de transcription.",
          "Les ribosomes découpent l’ARNm en codons.",
        ],
        answer: 0,
        explanation:
          "C’est un **polysome** : plusieurs ribosomes traduisent en même temps le même ARNm. Les chaînes sont plus longues sur les ribosomes qui ont parcouru davantage l’ARNm, ce qui montre que tous avancent dans le même sens. Ils produisent la même protéine : la production est amplifiée.",
      },
      {
        id: "1re-svt-03-ct-7",
        prompt:
          "Dans un ARNm, le codon UGG (tryptophane) devient UGA à la suite d’une mutation. Quelle est la conséquence ?",
        choices: [
          "La protéine est inchangée.",
          "Un acide aminé est remplacé par un autre.",
          "La traduction s’arrête prématurément : la protéine est tronquée.",
          "La protéine est allongée.",
        ],
        answer: 2,
        explanation:
          "**UGA est un codon stop** : à sa rencontre, le ribosome libère la chaîne. La protéine est raccourcie et souvent non fonctionnelle : mutation **non-sens**.",
      },
      {
        id: "1re-svt-03-ct-8",
        prompt:
          "Brin transcrit de l’ADN : TAC AAA CCG ATT. Sachant que AUG = Met, UUU = Phe, GGC = Gly, UAA = stop, quel peptide est produit ?",
        choices: ["Met–Lys–Pro", "Met–Phe–Gly", "Tyr–Lys–Pro–Ile", "Met–Phe–Gly–Ile"],
        answer: 1,
        explanation:
          "ARNm = complémentaire du brin transcrit : TAC → AUG, AAA → UUU, CCG → GGC, ATT → UAA. Traduction : Met–Phe–Gly puis **stop**. Le peptide est **Met–Phe–Gly**.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 4
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-svt-04",
    title: "Enzymes, métabolisme et phénotypes",
    summary:
      "Les enzymes, protéines catalysant spécifiquement les réactions du métabolisme, relient le génotype au phénotype, lequel dépend aussi de l’environnement.",
    objectives: [
      "Je sais définir une enzyme et expliquer sa double spécificité (substrat et action).",
      "Je sais expliquer la formation du complexe enzyme-substrat et le rôle du site actif.",
      "Je sais expliquer l’influence de la température et du pH sur l’activité enzymatique.",
      "Je sais définir le phénotype aux échelles moléculaire, cellulaire et macroscopique et expliquer comment il dépend du génotype et de l’environnement.",
    ],
    sections: [
      {
        title: "Les enzymes, des catalyseurs biologiques spécifiques",
        body: [
          "Le **métabolisme** est l’ensemble des réactions chimiques d’une cellule ou d’un organisme : dégradation de molécules pour obtenir de l’énergie, synthèse de molécules nécessaires à la croissance… Ces réactions seraient trop lentes à 37 °C sans **enzymes**. Une enzyme est une **protéine** qui agit comme **catalyseur biologique** : elle accélère une réaction chimique sans être modifiée ni consommée à la fin de la réaction, et peut donc resservir.",
          "Chaque enzyme possède une **double spécificité**. **Spécificité de substrat** : elle ne reconnaît qu’un substrat (ou une famille de substrats très proches). **Spécificité d’action** : elle ne catalyse qu’un seul type de réaction sur ce substrat. Par exemple, l’**amylase** hydrolyse l’amidon en maltose mais n’agit pas sur les protéines ; la glucose oxydase oxyde le glucose mais pas le fructose.",
          "Le nom d’une enzyme se forme souvent avec le suffixe **-ase** ajouté au nom du substrat (lactase, amylase) ou de l’action (oxydase, polymérase). Comme toute protéine, une enzyme est codée par un gène : son existence et sa structure dépendent donc du génotype.",
        ],
        keyPoints: [
          "Métabolisme = ensemble des réactions chimiques de l’organisme.",
          "Enzyme = protéine catalyseur : accélère une réaction, non consommée.",
          "Double spécificité : de substrat et d’action.",
          "Toute enzyme est codée par un gène.",
        ],
        formulas: ["Substrat(s) —(enzyme)→ Produit(s)", "E + S ⇄ [E–S] → E + P"],
        example: {
          title: "Mettre en évidence la spécificité de l’amylase",
          steps: [
            "Tube 1 : amidon + amylase ; tube 2 : saccharose + amylase ; tube 3 : amidon seul. Les tubes sont placés à 37 °C.",
            "Après 15 min, on teste l’amidon à l’eau iodée (coloration bleu-noir) et les sucres réducteurs à la liqueur de Fehling.",
            "Tube 1 : plus de coloration à l’eau iodée, Fehling positif → l’amidon a été hydrolysé en maltose.",
            "Tubes 2 et 3 : pas de transformation → l’amylase n’agit pas sur le saccharose, et l’amidon ne s’hydrolyse pas seul.",
            "Conclusion : l’amylase est indispensable à l’hydrolyse de l’amidon et spécifique de son substrat.",
          ],
        },
      },
      {
        title: "Le complexe enzyme-substrat et les conditions d’activité",
        body: [
          "La spécificité s’explique par la **structure tridimensionnelle** de l’enzyme. Une petite région de la protéine, le **site actif**, possède une forme et des propriétés chimiques complémentaires de celles du substrat. Le substrat s’y fixe pour former un **complexe enzyme-substrat** : c’est le **site de fixation**. Certains acides aminés du site actif, le **site catalytique**, réalisent alors la transformation ; les produits sont libérés et l’enzyme est de nouveau disponible.",
          "La forme du site actif dépend du repliement de la chaîne d’acides aminés, lui-même maintenu par des liaisons faibles. Les conditions du milieu agissent sur ces liaisons. La **température** : l’activité augmente avec elle jusqu’à une **température optimale** (environ 37 °C pour beaucoup d’enzymes humaines), puis chute rapidement car la protéine se **dénature** (perte de sa forme, souvent irréversible). Aux basses températures, l’activité est faible mais l’enzyme n’est pas détruite : elle redevient active quand on la réchauffe.",
          "Le **pH** agit aussi : chaque enzyme a un **pH optimal** (environ 2 pour la pepsine de l’estomac, environ 7 pour l’amylase salivaire, environ 8 pour la trypsine de l’intestin). Loin de cet optimum, les charges électriques des acides aminés changent, la forme du site actif est altérée et l’activité diminue.",
          "Enfin, une modification de la séquence de l’enzyme (par **mutation** du gène) peut changer la forme du site actif et réduire ou supprimer son activité, si l’acide aminé modifié est important pour la structure ou pour le site actif.",
        ],
        keyPoints: [
          "Site actif = site de fixation + site catalytique.",
          "Complexe enzyme-substrat : étape obligatoire de la catalyse.",
          "Température optimale ; dénaturation irréversible au-delà.",
          "pH optimal propre à chaque enzyme.",
          "Une mutation peut modifier le site actif et l’activité.",
        ],
        example: {
          title: "Interpréter une courbe d’activité en fonction de la température",
          steps: [
            "L’activité d’une enzyme est mesurée de 0 à 70 °C : elle est presque nulle à 0 °C, maximale à 40 °C, nulle à 60 °C.",
            "Entre 0 et 40 °C, l’activité augmente : l’agitation moléculaire favorise les rencontres enzyme-substrat.",
            "Au-delà de 40 °C, l’activité chute : l’enzyme se dénature, son site actif est déformé.",
            "Si l’on ramène l’enzyme de 60 °C à 40 °C, elle reste inactive (dénaturation irréversible) ; en revanche, une enzyme placée à 0 °C retrouve son activité à 40 °C.",
          ],
        },
      },
      {
        title: "Du génotype au phénotype",
        body: [
          "Le **phénotype** est l’ensemble des caractères observables d’un individu. On le décrit à trois échelles : **macroscopique** (l’organisme : couleur de peau, maladie…), **cellulaire** (forme ou fonctionnement des cellules) et **moléculaire** (les protéines présentes et leur activité). Le **génotype** est l’ensemble des allèles d’un individu.",
          "Les enzymes font le lien entre génotype et phénotype. Une chaîne de réactions catalysées par des enzymes successives (voie métabolique) aboutit à des molécules qui contribuent au phénotype. Exemple de l’**albinisme** : la **tyrosinase** transforme la tyrosine en précurseurs de la **mélanine**, pigment de la peau et des cheveux. Si les deux allèles du gène de la tyrosinase sont mutés et produisent une enzyme inactive (phénotype moléculaire), les mélanocytes ne fabriquent pas de mélanine (phénotype cellulaire) et la personne a une peau et des cheveux très clairs (phénotype macroscopique).",
          "Autre exemple : la **phénylcétonurie**. L’enzyme qui transforme la phénylalanine en tyrosine est déficiente ; la phénylalanine s’accumule et devient toxique pour le cerveau. Un **régime pauvre en phénylalanine** dès la naissance permet d’éviter les troubles : le phénotype dépend donc **du génotype et de l’environnement**.",
          "L’environnement intervient de nombreuses façons : chez le chat siamois, la tyrosinase est inactive au-dessus d’environ 34 °C, si bien que seules les extrémités, plus froides (oreilles, pattes, queue), sont foncées. Exposition au soleil, alimentation, température : un même génotype peut donner des phénotypes différents selon le milieu.",
        ],
        keyPoints: [
          "Phénotype : échelles moléculaire, cellulaire, macroscopique.",
          "Génotype → protéines (enzymes) → réactions du métabolisme → phénotype.",
          "Albinisme : tyrosinase inactive → absence de mélanine.",
          "Phénotype = génotype + influence de l’environnement.",
        ],
        example: {
          title: "Raisonner sur une voie métabolique",
          steps: [
            "Voie : précurseur A —(enzyme E1)→ B —(enzyme E2)→ pigment C.",
            "Un mutant ne produit pas C mais accumule A : l’étape bloquée est la première, l’enzyme E1 est déficiente.",
            "Un autre mutant ne produit pas C mais accumule B : c’est l’enzyme E2 qui est déficiente.",
            "Si l’on fournit B au premier mutant, il produit C, car E2 est fonctionnelle chez lui : on confirme le diagnostic.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-svt-04-ex-1",
        prompt: "Une enzyme est :",
        choices: [
          "un lipide qui fournit de l’énergie",
          "un sucre qui se dégrade lors de la réaction",
          "un acide nucléique qui porte l’information génétique",
          "une protéine qui accélère une réaction chimique sans être consommée",
        ],
        answer: 3,
        explanation:
          "Une enzyme est une **protéine** jouant le rôle de **catalyseur biologique** : elle accélère une réaction et se retrouve intacte à la fin, prête à resservir.",
      },
      {
        id: "1re-svt-04-ex-2",
        prompt: "Comment nomme-t-on la région de l’enzyme où se fixe le substrat ?",
        choices: ["Le codon", "Le site actif", "Le centromère", "L’exon"],
        answer: 1,
        explanation:
          "Le **site actif** est la région de l’enzyme dont la forme est complémentaire du substrat ; il comprend le site de fixation et le site catalytique.",
      },
      {
        id: "1re-svt-04-ex-3",
        prompt: "Que devient une enzyme humaine chauffée à 80 °C puis ramenée à 37 °C ?",
        choices: [
          "Elle est dénaturée et reste inactive.",
          "Elle retrouve toute son activité.",
          "Elle devient plus active qu’avant.",
          "Elle change de substrat.",
        ],
        answer: 0,
        explanation:
          "À 80 °C, la protéine se **dénature** : sa structure 3D, donc son site actif, est détruite de façon **irréversible**. Elle reste inactive même à 37 °C.",
      },
      {
        id: "1re-svt-04-ex-4",
        prompt: "La pepsine digère les protéines dans l’estomac. Son pH optimal est probablement voisin de :",
        choices: ["2", "7", "9", "12"],
        answer: 0,
        explanation:
          "Le contenu de l’estomac est très acide (pH ≈ 2). La pepsine est adaptée à ce milieu : son **pH optimal est d’environ 2**.",
      },
      {
        id: "1re-svt-04-ex-5",
        prompt: "Le phénotype moléculaire d’une personne atteinte d’albinisme est :",
        choices: [
          "une peau et des cheveux très clairs",
          "des mélanocytes sans mélanine",
          "une tyrosinase inactive",
          "deux allèles mutés du gène de la tyrosinase",
        ],
        answer: 2,
        explanation:
          "Le phénotype **moléculaire** concerne les protéines : ici une **tyrosinase inactive**. Les mélanocytes sans mélanine sont le phénotype cellulaire, la peau claire le phénotype macroscopique, et les deux allèles mutés constituent le génotype.",
      },
      {
        id: "1re-svt-04-ex-6",
        prompt: "Que signifie la « spécificité de substrat » d’une enzyme ?",
        choices: [
          "L’enzyme ne fonctionne qu’à une température précise.",
          "L’enzyme peut transformer n’importe quelle molécule.",
          "L’enzyme est codée par un seul gène.",
          "L’enzyme ne reconnaît et ne fixe qu’un substrat donné.",
        ],
        answer: 3,
        explanation:
          "La **spécificité de substrat** signifie que l’enzyme ne fixe qu’un substrat (ou des substrats très proches) grâce à la complémentarité de forme avec son site actif.",
      },
    ],
    test: [
      {
        id: "1re-svt-04-ct-1",
        prompt:
          "On mesure la vitesse d’hydrolyse de l’amidon par l’amylase à différents pH : 0,1 à pH 4 ; 1,0 à pH 7 ; 0,2 à pH 9 (unités arbitraires). Quelle conclusion est correcte ?",
        choices: [
          "Le pH n’influence pas l’activité de l’amylase.",
          "L’amylase est plus active en milieu acide.",
          "L’amylase a un pH optimal voisin de 7, cohérent avec son action dans la bouche.",
          "L’amylase est détruite à pH 7.",
        ],
        answer: 2,
        explanation:
          "La vitesse est maximale à **pH 7** et diminue de part et d’autre : c’est le pH optimal. Il correspond au pH de la salive, milieu où agit l’amylase salivaire.",
      },
      {
        id: "1re-svt-04-ct-2",
        prompt:
          "Une enzyme est placée 10 min à 0 °C : activité nulle. Puis on la place à 37 °C : activité maximale. Que montre cette expérience ?",
        choices: [
          "Le froid inactive l’enzyme de façon réversible.",
          "Le froid dénature l’enzyme.",
          "L’enzyme a été consommée à 0 °C.",
          "L’enzyme a changé de substrat.",
        ],
        answer: 0,
        explanation:
          "L’enzyme retrouve son activité à 37 °C : le froid ralentit l’agitation moléculaire et les rencontres enzyme-substrat, mais **ne détruit pas** la structure de l’enzyme. L’inactivation est **réversible**, contrairement à la dénaturation par la chaleur.",
      },
      {
        id: "1re-svt-04-ct-3",
        prompt:
          "La tyrosinase du chat siamois est active en dessous de 34 °C et inactive au-dessus. Un chat siamois dont on rase une zone du dos que l’on garde ensuite au froid voit les poils y repousser foncés. Quelle conclusion ?",
        choices: [
          "Le froid a provoqué une mutation dans les cellules du dos.",
          "Le génotype du chat a changé.",
          "Les poils foncés sont dus à un autre gène.",
          "L’environnement (température) modifie le phénotype sans modifier le génotype.",
        ],
        answer: 3,
        explanation:
          "Le génotype est le même dans toutes les cellules. Au froid, la tyrosinase (thermosensible) devient active et la mélanine est produite : **l’environnement** agit sur l’activité enzymatique donc sur le **phénotype**, sans modifier les allèles.",
      },
      {
        id: "1re-svt-04-ct-4",
        prompt:
          "Une mutation remplace un acide aminé situé loin du site actif d’une enzyme, à la surface de la protéine, par un acide aminé aux propriétés proches. Quelle conséquence est la plus probable ?",
        choices: [
          "L’enzyme est totalement inactive.",
          "L’activité de l’enzyme est peu ou pas modifiée.",
          "L’enzyme change de substrat.",
          "L’enzyme n’est plus synthétisée.",
        ],
        answer: 1,
        explanation:
          "Un remplacement conservatif (propriétés proches), éloigné du site actif et sans rôle dans le repliement, **modifie peu ou pas** la forme du site actif : l’activité est conservée. Toutes les mutations faux-sens n’ont donc pas le même effet.",
      },
      {
        id: "1re-svt-04-ct-5",
        prompt:
          "Voie métabolique : A —(E1)→ B —(E2)→ C —(E3)→ D. Un mutant accumule C et ne produit pas D. Quelle enzyme est déficiente ?",
        choices: ["E1", "E2", "E3", "Aucune, le mutant manque de A"],
        answer: 2,
        explanation:
          "C est produit, donc E1 et E2 fonctionnent. C n’est pas transformé en D et s’accumule : c’est l’enzyme **E3**, qui catalyse C → D, qui est déficiente.",
      },
      {
        id: "1re-svt-04-ct-6",
        prompt:
          "Un enfant atteint de phénylcétonurie suit un régime pauvre en phénylalanine depuis la naissance et se développe normalement. Que peut-on dire de son génotype et de son phénotype ?",
        choices: [
          "Son génotype a été corrigé par le régime.",
          "Son génotype est muté, mais le régime (environnement) évite le phénotype macroscopique de la maladie.",
          "Son enzyme est redevenue active grâce au régime.",
          "Il n’a jamais porté la mutation.",
        ],
        answer: 1,
        explanation:
          "Le régime ne modifie ni les allèles ni l’enzyme (toujours déficiente : phénotype moléculaire inchangé). Il empêche l’**accumulation toxique** de phénylalanine : le **phénotype macroscopique** (troubles neurologiques) est évité. Le phénotype dépend du génotype **et** de l’environnement.",
      },
      {
        id: "1re-svt-04-ct-7",
        prompt:
          "On ajoute de plus en plus de substrat à une quantité fixe d’enzyme. La vitesse de réaction augmente puis atteint un plateau. Comment expliquer ce plateau ?",
        choices: [
          "Tous les sites actifs sont occupés : l’enzyme est saturée.",
          "L’enzyme est dénaturée par le substrat.",
          "Le substrat est épuisé.",
          "Le produit se retransforme en substrat.",
        ],
        answer: 0,
        explanation:
          "Chaque molécule d’enzyme ne traite qu’un substrat à la fois. Quand le substrat est en excès, **tous les sites actifs sont occupés** en permanence : la vitesse ne peut plus augmenter, elle est limitée par la quantité d’enzyme (saturation).",
      },
      {
        id: "1re-svt-04-ct-8",
        prompt:
          "Une personne porte un allèle normal et un allèle muté (enzyme inactive) du gène de la tyrosinase. Elle a une pigmentation normale. Quelle est l’explication ?",
        choices: [
          "L’allèle muté est toujours éliminé par réparation.",
          "La tyrosinase n’intervient pas dans la pigmentation.",
          "L’allèle muté produit une enzyme plus active.",
          "L’allèle normal produit assez de tyrosinase active pour synthétiser la mélanine.",
        ],
        answer: 3,
        explanation:
          "Une seule copie fonctionnelle suffit à produire assez d’**enzyme active** : la mélanine est synthétisée et le phénotype est normal. L’allèle muté est dit **récessif** ; l’albinisme n’apparaît que si les deux allèles sont mutés.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // Chapitre 5
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-svt-05",
    title: "La structure du globe terrestre",
    summary:
      "L’étude de la propagation des ondes sismiques et des roches révèle une Terre structurée en enveloppes concentriques (croûtes, manteau, noyau) et, du point de vue mécanique, en une lithosphère rigide reposant sur une asthénosphère ductile.",
    objectives: [
      "Je sais décrire les ondes sismiques P et S et expliquer comment leur vitesse renseigne sur les matériaux traversés.",
      "Je sais expliquer comment l’étude des ondes a permis de découvrir le Moho, la discontinuité de Gutenberg et le noyau liquide.",
      "Je sais comparer la croûte continentale et la croûte océanique (roches, densité, épaisseur).",
      "Je sais distinguer lithosphère et asthénosphère et expliquer la notion de LVZ.",
    ],
    sections: [
      {
        title: "Les ondes sismiques, une échographie de la Terre",
        body: [
          "Un **séisme** est une libération brutale d’énergie lors de la rupture de roches en profondeur, au niveau du **foyer** ; le point de la surface situé à la verticale est l’**épicentre**. L’énergie se propage sous forme d’**ondes sismiques**, enregistrées par des **sismomètres** qui produisent des **sismogrammes**.",
          "On distingue les **ondes P** (premières, ondes de compression), les plus rapides, qui se propagent dans les solides, les liquides et les gaz ; et les **ondes S** (secondes, ondes de cisaillement), plus lentes, qui **ne se propagent pas dans les liquides**. Les ondes de surface (L et R), les plus lentes, causent l’essentiel des dégâts.",
          "La vitesse des ondes dépend des propriétés du milieu : elle augmente en général avec la **rigidité** et avec la profondeur. Lorsqu’une onde rencontre une surface séparant deux milieux de propriétés différentes, une **discontinuité**, elle est **réfléchie** et **réfractée** (déviée), comme la lumière. L’analyse des temps d’arrivée des ondes dans des stations situées à différentes distances de l’épicentre permet donc de repérer ces discontinuités et de reconstituer la structure interne du globe.",
        ],
        keyPoints: [
          "Ondes P : rapides, traversent solides et liquides.",
          "Ondes S : plus lentes, ne traversent pas les liquides.",
          "Vitesse des ondes = f(nature et état du milieu).",
          "Discontinuité : réflexion et réfraction des ondes.",
        ],
        formulas: [
          "v = d / t (vitesse = distance ÷ durée)",
          "Δt (S − P) augmente avec la distance au foyer",
        ],
        example: {
          title: "Calculer la vitesse d’une onde",
          steps: [
            "Une station située à 400 km du foyer enregistre l’arrivée des ondes P 66 s après le séisme.",
            "v = d / t = 400 / 66 ≈ 6,1 km·s⁻¹.",
            "Les ondes S arrivent à 115 s : v ≈ 400 / 115 ≈ 3,5 km·s⁻¹.",
            "Les ondes P sont bien plus rapides que les ondes S ; ces valeurs sont typiques de la croûte continentale.",
          ],
        },
      },
      {
        title: "Les grandes discontinuités et les enveloppes du globe",
        body: [
          "En 1909, **Mohorovičić** remarque que, au-delà d’environ 200 km de l’épicentre, certaines ondes P arrivent plus tôt que prévu : elles ont été **réfractées** sur une surface profonde, sous laquelle elles vont plus vite. Cette discontinuité, le **Moho**, sépare la **croûte** du **manteau**. Elle se situe vers 30 km de profondeur en moyenne sous les continents (jusqu’à 70 km sous les montagnes) et vers 7 km sous les océans.",
          "En 1912, **Gutenberg** constate qu’entre environ 105° et 142° de distance angulaire de l’épicentre, aucune onde P directe n’est enregistrée : c’est la **zone d’ombre**. Il l’explique par une discontinuité à **2 900 km** de profondeur, limite **manteau / noyau**, où les ondes P sont fortement ralenties et déviées. Comme les ondes S ne traversent pas le **noyau externe**, celui-ci est **liquide**. En 1936, **Inge Lehmann** découvre, à environ 5 150 km, la limite avec la **graine** (noyau interne) solide.",
          "Le globe comporte donc des enveloppes concentriques : la **croûte**, le **manteau** (péridotite solide, jusqu’à 2 900 km), le **noyau externe** liquide et la **graine** solide, constitués surtout de fer et de nickel. Le rayon moyen de la Terre est d’environ **6 370 km**.",
        ],
        keyPoints: [
          "Moho : croûte / manteau (≈ 30 km sous les continents, ≈ 7 km sous les océans).",
          "Discontinuité de Gutenberg (2 900 km) : manteau / noyau ; zone d’ombre des ondes P.",
          "Noyau externe liquide (pas d’ondes S), graine solide (discontinuité de Lehmann ≈ 5 150 km).",
          "Manteau solide, constitué de péridotite.",
        ],
        example: {
          title: "Déduire l’état du noyau externe",
          steps: [
            "Observation : les ondes S ne sont jamais enregistrées au-delà de 105° de l’épicentre.",
            "Les rayons atteignant ces stations traversent le noyau.",
            "Or les ondes S ne se propagent pas dans les liquides.",
            "Conclusion : le noyau externe est liquide.",
          ],
        },
      },
      {
        title: "Croûtes, lithosphère et asthénosphère",
        body: [
          "La **croûte continentale** est épaisse (30 km en moyenne, jusqu’à 70 km), de composition proche du **granite** (roche plutonique à quartz, feldspaths et micas), de densité moyenne **2,7**, et peut être très ancienne (jusqu’à 4 milliards d’années). La **croûte océanique** est mince (environ 7 km), formée de **basalte** en surface et de **gabbro** en profondeur (même composition, mais refroidissement plus lent pour le gabbro), de densité **2,9**, et n’a jamais plus de 180 millions d’années environ. Le **manteau** sous-jacent est formé de **péridotite** (riche en olivine), de densité **3,3**.",
          "Une autre découpe, fondée sur le **comportement mécanique** des roches, est essentielle. Vers 100 km sous les océans (davantage sous les continents), les ondes sismiques sont légèrement ralenties : c’est la **LVZ** (Low Velocity Zone, zone de moindre vitesse). Elle marque le passage d’une enveloppe **rigide**, la **lithosphère**, à une enveloppe plus **ductile** (déformable), l’**asthénosphère**. Le ralentissement s’explique par une température proche du début de fusion de la péridotite, voire par une fusion très partielle.",
          "La **lithosphère** comprend la croûte et la partie supérieure, rigide, du manteau (manteau lithosphérique). Sa base correspond approximativement à l’**isotherme 1 300 °C**. L’**asthénosphère**, en dessous, reste **solide** mais peut se déformer lentement par fluage. C’est cette organisation qui permet aux **plaques lithosphériques** de se déplacer sur l’asthénosphère (chapitre 6). Attention : la limite lithosphère/asthénosphère n’est pas le Moho !",
        ],
        keyPoints: [
          "Croûte continentale : granitique, d = 2,7, épaisse, ancienne.",
          "Croûte océanique : basalte + gabbro, d = 2,9, mince, jeune.",
          "Manteau : péridotite, d = 3,3.",
          "Lithosphère (croûte + manteau supérieur rigide) / asthénosphère (ductile), limite ≈ isotherme 1 300 °C, LVZ.",
        ],
        example: {
          title: "Estimer l’âge maximal des fonds océaniques",
          steps: [
            "Les forages océaniques montrent que les sédiments les plus anciens reposant sur le basalte datent d’environ 180 Ma.",
            "Aucune croûte océanique plus ancienne n’est trouvée dans les océans actuels.",
            "En revanche, on trouve des roches continentales de plus de 4 milliards d’années.",
            "Conclusion : la lithosphère océanique est régulièrement renouvelée (créée puis détruite), contrairement à la croûte continentale.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-svt-05-ex-1",
        prompt: "Quelles ondes sismiques ne se propagent pas dans les liquides ?",
        choices: ["Les ondes P", "Toutes les ondes", "Les ondes S", "Aucune"],
        answer: 2,
        explanation:
          "Les **ondes S** sont des ondes de cisaillement : un liquide ne résiste pas au cisaillement, elles ne s’y propagent donc pas. Les ondes P, elles, traversent solides et liquides.",
      },
      {
        id: "1re-svt-05-ex-2",
        prompt: "Le Moho est la discontinuité qui sépare :",
        choices: [
          "la croûte du manteau",
          "le manteau du noyau",
          "la lithosphère de l’asthénosphère",
          "le noyau externe de la graine",
        ],
        answer: 0,
        explanation:
          "Le **Moho** (Mohorovičić) sépare la **croûte** du **manteau**. La limite manteau/noyau est la discontinuité de Gutenberg ; la limite lithosphère/asthénosphère correspond à la LVZ.",
      },
      {
        id: "1re-svt-05-ex-3",
        prompt: "Quelle roche constitue l’essentiel du manteau ?",
        choices: ["Le granite", "Le basalte", "Le calcaire", "La péridotite"],
        answer: 3,
        explanation:
          "Le manteau est constitué de **péridotite**, roche dense (d = 3,3) riche en olivine. Le granite caractérise la croûte continentale, le basalte la croûte océanique.",
      },
      {
        id: "1re-svt-05-ex-4",
        prompt: "Quelle est l’épaisseur moyenne de la croûte océanique ?",
        choices: ["Environ 7 km", "Environ 30 km", "Environ 100 km", "Environ 2 900 km"],
        answer: 0,
        explanation:
          "La croûte océanique est **mince : environ 7 km**. La croûte continentale fait environ 30 km en moyenne ; 100 km est l’ordre de grandeur de l’épaisseur de la lithosphère océanique âgée.",
      },
      {
        id: "1re-svt-05-ex-5",
        prompt: "La lithosphère comprend :",
        choices: [
          "uniquement la croûte",
          "la croûte et la partie supérieure rigide du manteau",
          "le manteau et le noyau",
          "uniquement l’asthénosphère",
        ],
        answer: 1,
        explanation:
          "La **lithosphère** est l’enveloppe **rigide** : elle comprend la **croûte** et le **manteau lithosphérique** sous-jacent, jusqu’à environ l’isotherme 1 300 °C.",
      },
      {
        id: "1re-svt-05-ex-6",
        prompt: "Que signifie le sigle LVZ ?",
        choices: [
          "Zone de très haute température du noyau",
          "Limite entre croûte continentale et croûte océanique",
          "Zone où les ondes sismiques sont ralenties, sous la lithosphère",
          "Zone d’ombre sismique",
        ],
        answer: 2,
        explanation:
          "La **LVZ** (Low Velocity Zone) est une **zone de moindre vitesse** des ondes, située au sommet de l’asthénosphère : la péridotite y est proche de son point de fusion, voire très partiellement fondue.",
      },
    ],
    test: [
      {
        id: "1re-svt-05-ct-1",
        prompt:
          "Pour des stations proches de l’épicentre, l’onde P directe arrive en premier. Au-delà d’environ 200 km, une onde P arrive avant l’onde directe. Comment l’expliquer ?",
        choices: [
          "L’onde directe est ralentie par l’atmosphère.",
          "Une partie des ondes est réfractée sur une discontinuité profonde sous laquelle elles se propagent plus vite.",
          "Les stations lointaines sont mal réglées.",
          "Les ondes S se transforment en ondes P.",
        ],
        answer: 1,
        explanation:
          "C’est le raisonnement de Mohorovičić : l’onde réfractée fait un trajet plus long mais traverse un milieu plus rapide (le **manteau**) ; au-delà d’une certaine distance, elle **rattrape puis dépasse** l’onde directe. Cela révèle le **Moho**.",
      },
      {
        id: "1re-svt-05-ct-2",
        prompt:
          "Entre 105° et 142° de l’épicentre, aucune onde P directe n’est enregistrée, alors qu’elles réapparaissent au-delà de 142°. Quelle interprétation ?",
        choices: [
          "Les ondes P sont absorbées par le manteau.",
          "La Terre est creuse à partir de 2 900 km.",
          "Les ondes P sont fortement ralenties et déviées en entrant dans le noyau, ce qui crée une zone d’ombre.",
          "Les ondes P sont transformées en ondes de surface.",
        ],
        answer: 2,
        explanation:
          "À la discontinuité de **Gutenberg** (2 900 km), les ondes P entrent dans un milieu où elles sont plus lentes : elles sont **réfractées** vers l’intérieur et ressortent au-delà de 142°. Aucune ne parvient entre 105° et 142° : c’est la **zone d’ombre**.",
      },
      {
        id: "1re-svt-05-ct-3",
        prompt:
          "Une station enregistre les ondes P à 08 h 00 min 40 s et les ondes S à 08 h 01 min 10 s. Une autre station enregistre un écart S − P de 60 s. Que peut-on dire ?",
        choices: [
          "La deuxième station est plus éloignée du foyer que la première.",
          "La deuxième station est plus proche du foyer.",
          "Les deux stations sont à la même distance.",
          "On ne peut rien dire sans l’heure du séisme.",
        ],
        answer: 0,
        explanation:
          "Première station : écart S − P = 30 s. Les ondes P étant plus rapides, l’**écart S − P augmente avec la distance** parcourue. Un écart de 60 s signifie que la deuxième station est **plus éloignée**.",
      },
      {
        id: "1re-svt-05-ct-4",
        prompt:
          "Sous une chaîne de montagnes, les ondes réfractées sur le Moho indiquent une profondeur de 65 km. Que traduit cette mesure ?",
        choices: [
          "Une croûte océanique très épaisse",
          "Un épaississement de la croûte continentale (racine crustale)",
          "Une lithosphère absente",
          "Un noyau plus proche de la surface",
        ],
        answer: 1,
        explanation:
          "Sous les continents, le Moho est normalement vers 30 km. À 65 km, la croûte continentale est deux fois plus épaisse : c’est une **racine crustale**, caractéristique des chaînes de collision (chapitre 6).",
      },
      {
        id: "1re-svt-05-ct-5",
        prompt:
          "On compare trois roches : A (d = 2,7, quartz + feldspaths + micas, grands cristaux), B (d = 2,9, petits cristaux et verre, pyroxènes + feldspaths), C (d = 3,3, riche en olivine). Lesquelles correspondent respectivement à la croûte continentale, à la croûte océanique et au manteau ?",
        choices: [
          "A = basalte, B = granite, C = péridotite",
          "A = péridotite, B = basalte, C = granite",
          "A = granite, B = péridotite, C = basalte",
          "A = granite, B = basalte, C = péridotite",
        ],
        answer: 3,
        explanation:
          "A est un **granite** (croûte continentale, d = 2,7, roche grenue). B, avec cristaux et verre, est un **basalte** (croûte océanique, d = 2,9, roche volcanique). C, riche en olivine et très dense, est une **péridotite** (manteau).",
      },
      {
        id: "1re-svt-05-ct-6",
        prompt:
          "Le Moho est à 7 km sous un océan, mais la LVZ est vers 90 km. Que peut-on en déduire ?",
        choices: [
          "La lithosphère océanique comprend la croûte et environ 80 km de manteau rigide.",
          "La lithosphère se limite à la croûte.",
          "L’asthénosphère commence au Moho.",
          "Le manteau est liquide entre 7 et 90 km.",
        ],
        answer: 0,
        explanation:
          "La lithosphère s’arrête au sommet de la LVZ (≈ 90 km). Elle comprend donc les 7 km de croûte **et** environ 83 km de **manteau lithosphérique** rigide. Lithosphère/asthénosphère et croûte/manteau sont deux découpages différents.",
      },
      {
        id: "1re-svt-05-ct-7",
        prompt:
          "L’asthénosphère transmet les ondes S, mais avec une vitesse légèrement réduite. Quel est son état ?",
        choices: [
          "Entièrement liquide",
          "Gazeux",
          "Solide mais ductile, proche du début de fusion (fusion très partielle possible)",
          "Solide et plus rigide que la lithosphère",
        ],
        answer: 2,
        explanation:
          "La transmission des ondes S prouve que l’asthénosphère est **solide** (au plus quelques pourcents de liquide). Leur ralentissement indique une moindre rigidité : la péridotite, proche de sa température de fusion, est **ductile**.",
      },
      {
        id: "1re-svt-05-ct-8",
        prompt:
          "La densité moyenne de la Terre est 5,5, alors que les roches de surface ont une densité de 2,7 à 3,3. Quelle conclusion en tirer ?",
        choices: [
          "Les mesures de surface sont fausses.",
          "Les profondeurs contiennent des matériaux beaucoup plus denses, comme le fer du noyau.",
          "La Terre contient de grandes cavités.",
          "La croûte est plus dense que le noyau.",
        ],
        answer: 1,
        explanation:
          "Pour que la moyenne atteigne 5,5 avec des roches superficielles de densité ≈ 3, il faut des matériaux **très denses en profondeur** : le **noyau** de fer et de nickel (densité ≈ 10 à 13).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 6
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-svt-06",
    title: "La dynamique de la lithosphère",
    summary:
      "La lithosphère est découpée en plaques mobiles qui s’écartent au niveau des dorsales, plongent dans le manteau aux zones de subduction et s’affrontent aux zones de collision, chacune de ces frontières ayant son propre magmatisme et ses déformations.",
    objectives: [
      "Je sais expliquer les arguments en faveur de l’expansion océanique (âges des fonds, anomalies magnétiques, GPS).",
      "Je sais décrire la formation de la lithosphère océanique au niveau des dorsales et son évolution en s’éloignant de l’axe.",
      "Je sais expliquer la subduction, ses indices et l’origine du magmatisme associé.",
      "Je sais décrire les indices d’une collision continentale et expliquer la formation d’une chaîne de montagnes.",
    ],
    sections: [
      {
        title: "Les dorsales : divergence et naissance de la lithosphère océanique",
        body: [
          "La lithosphère est découpée en une douzaine de grandes **plaques** rigides qui se déplacent les unes par rapport aux autres de quelques centimètres par an. Leurs frontières sont soulignées par la sismicité et le volcanisme. Les mouvements actuels sont mesurés directement par **GPS** : par exemple, l’Europe et l’Amérique du Nord s’écartent d’environ 2 cm par an.",
          "Au niveau des **dorsales océaniques**, deux plaques **divergent**. La remontée de l’asthénosphère s’accompagne d’une **décompression** : la péridotite, chaude, fond partiellement (environ 10 à 20 %) sans être chauffée davantage. Le magma basaltique produit s’accumule dans une chambre magmatique, puis forme la **croûte océanique** : **basalte** en coulées (souvent en coussins) et filons en surface, **gabbro** cristallisé lentement en profondeur. Le manteau résiduel devient la péridotite du manteau lithosphérique.",
          "L’**expansion océanique** est démontrée par plusieurs arguments. **Âge des fonds** : les sédiments au contact du basalte sont de plus en plus anciens quand on s’éloigne de l’axe, de façon **symétrique** de part et d’autre. **Anomalies magnétiques** : en se refroidissant, le basalte enregistre le champ magnétique terrestre ; comme celui-ci s’inverse régulièrement, le plancher océanique présente des bandes d’aimantation normale et inverse, **parallèles et symétriques** à l’axe. Connaissant l’âge des inversions, on calcule la vitesse d’expansion.",
          "En s’éloignant de la dorsale, la lithosphère océanique **refroidit** : le manteau asthénosphérique sous-jacent passe sous l’isotherme 1 300 °C et devient rigide. La lithosphère **s’épaissit** (jusqu’à environ 100 km) et sa **densité augmente** ; après quelques dizaines de millions d’années, elle devient plus dense que l’asthénosphère sous-jacente.",
        ],
        keyPoints: [
          "Dorsale : divergence, fusion partielle par décompression de la péridotite.",
          "Croûte océanique : basalte (surface) + gabbro (profondeur).",
          "Preuves de l’expansion : âges symétriques, anomalies magnétiques symétriques, GPS.",
          "En vieillissant, la lithosphère océanique refroidit, s’épaissit et devient plus dense.",
        ],
        formulas: ["Vitesse d’expansion (demi-taux) = distance à l’axe ÷ âge", "Taux d’expansion total = 2 × demi-taux (si symétrique)"],
        example: {
          title: "Calculer une vitesse d’expansion",
          steps: [
            "Une anomalie magnétique datée de 10 Ma se trouve à 250 km à l’est de l’axe d’une dorsale.",
            "Demi-taux = 250 km / 10 Ma = 25 km/Ma = 2,5 cm/an (1 km/Ma = 0,1 cm/an).",
            "La même anomalie se trouve à 250 km à l’ouest : l’expansion est symétrique.",
            "Les deux plaques s’écartent donc de 5 cm/an.",
          ],
        },
      },
      {
        title: "La subduction : disparition de la lithosphère océanique",
        body: [
          "La surface de la Terre ne grandit pas : la lithosphère créée aux dorsales disparaît ailleurs, dans les **zones de subduction**, où une lithosphère océanique **âgée et dense** plonge sous une autre plaque (océanique ou continentale), principalement parce qu’elle est devenue plus dense que l’asthénosphère.",
          "Les indices de subduction sont nombreux. **Topographiques** : une **fosse océanique** profonde (jusqu’à 11 km pour la fosse des Mariannes) borde la zone. **Sismiques** : les foyers des séismes se répartissent sur un plan incliné qui s’enfonce sous la plaque chevauchante jusqu’à environ 700 km : le **plan de Wadati-Benioff**, qui matérialise la plaque plongeante. **Thermiques** : la tomographie sismique montre une anomalie « froide » (ondes plus rapides) correspondant à la plaque plongeante.",
          "Le **magmatisme** des zones de subduction est particulier. En s’enfonçant, la croûte océanique, hydratée lors de son séjour au fond de l’océan, subit une augmentation de pression et de température : ses minéraux se transforment (**métamorphisme**) et libèrent de l’**eau**. Cette eau gagne le manteau de la plaque chevauchante, abaisse sa température de fusion et provoque sa **fusion partielle** vers 100 km de profondeur. Le magma, riche en eau et en gaz, est **visqueux** : il donne un **volcanisme explosif** (andésites, rhyolites) et, en profondeur, des **granitoïdes** (diorites, granodiorites). C’est ainsi que se forme de la **nouvelle croûte continentale** (Andes, Japon).",
        ],
        keyPoints: [
          "Subduction : la lithosphère océanique âgée et dense plonge dans l’asthénosphère.",
          "Indices : fosse, plan de Wadati-Benioff, anomalie froide en tomographie.",
          "Déshydratation de la plaque plongeante → fusion partielle du manteau sus-jacent.",
          "Volcanisme explosif (andésites) et plutonisme (granodiorites) → création de croûte continentale.",
        ],
        example: {
          title: "Interpréter la répartition des foyers sismiques",
          steps: [
            "Le long d’une coupe perpendiculaire à la côte du Chili, les foyers sont superficiels près de la fosse et de plus en plus profonds vers l’est, jusqu’à 600 km.",
            "Ils dessinent un plan incliné vers l’est : le plan de Wadati-Benioff.",
            "Ce plan correspond à la plaque Nazca, rigide et cassante, qui s’enfonce sous la plaque sud-américaine.",
            "Les volcans des Andes se situent à l’aplomb des foyers situés vers 100 km de profondeur, là où le manteau fond grâce à l’eau libérée.",
          ],
        },
      },
      {
        title: "La collision continentale et la formation des chaînes de montagnes",
        body: [
          "Lorsqu’un océan s’est entièrement refermé par subduction, deux lithosphères continentales se rencontrent. La croûte continentale, peu dense (2,7), **ne peut pas plonger** durablement dans le manteau : la convergence se poursuit alors par une **collision** qui raccourcit et **épaissit** la croûte. C’est l’origine des grandes chaînes de montagnes comme l’**Himalaya** (collision Inde-Asie, depuis environ 50 Ma) ou les **Alpes** (Afrique/Adria-Europe).",
          "Les indices de **raccourcissement et d’épaississement** sont observables à toutes les échelles : **plis** (déformations souples), **failles inverses** (qui rapprochent deux points), **chevauchements** et **nappes de charriage** (empilements de grands ensembles de roches déplacés sur des dizaines de kilomètres). En profondeur, la sismologie révèle une **racine crustale** : le Moho atteint 50 à 70 km sous les chaînes.",
          "On trouve aussi dans les chaînes des **ophiolites** : des fragments de lithosphère océanique (péridotite, gabbro, basalte en coussins, sédiments) charriés sur le continent. Elles témoignent d’un **ancien océan** disparu, refermé avant la collision (par exemple l’ophiolite du Chenaillet, dans les Alpes). Des roches **métamorphiques** de haute pression et basse température, comme celles contenant de la **glaucophane** ou de la **jadéite**, indiquent qu’une partie de la croûte a d’abord été entraînée en profondeur par subduction avant de remonter.",
        ],
        keyPoints: [
          "Collision : affrontement de deux lithosphères continentales après fermeture d’un océan.",
          "Indices de raccourcissement : plis, failles inverses, chevauchements, nappes.",
          "Indice d’épaississement : racine crustale (Moho profond).",
          "Ophiolites : témoins d’un ancien océan ; roches HP-BT : témoins d’une subduction passée.",
        ],
        example: {
          title: "Calculer un raccourcissement",
          steps: [
            "Une couche sédimentaire plissée occupe aujourd’hui 60 km de largeur.",
            "Déplissée (mesure de la longueur de la couche le long des plis), elle mesure 100 km.",
            "Raccourcissement = 100 − 60 = 40 km, soit 40 % de la longueur initiale.",
            "Ce raccourcissement s’accompagne d’un épaississement : la croûte, comprimée horizontalement, gagne en épaisseur.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-svt-06-ex-1",
        prompt: "Au niveau d’une dorsale océanique, les plaques :",
        choices: ["convergent", "coulissent sans s’écarter", "s’écartent (divergent)", "sont immobiles"],
        answer: 2,
        explanation:
          "Les dorsales sont des frontières **divergentes** : les deux plaques s’écartent et de la nouvelle lithosphère océanique se forme entre elles.",
      },
      {
        id: "1re-svt-06-ex-2",
        prompt: "Quelle est l’origine de la fusion partielle du manteau sous une dorsale ?",
        choices: [
          "Une forte augmentation de température due au noyau",
          "Une décompression lors de la remontée de la péridotite chaude",
          "Un apport d’eau provenant d’une plaque plongeante",
          "La friction entre deux plaques",
        ],
        answer: 1,
        explanation:
          "Sous la dorsale, la péridotite remonte rapidement sans beaucoup se refroidir : la **baisse de pression** (décompression) la fait passer au-dessus de sa température de début de fusion. L’apport d’eau est le mécanisme des zones de subduction.",
      },
      {
        id: "1re-svt-06-ex-3",
        prompt: "Comment évolue l’âge des fonds océaniques quand on s’éloigne d’une dorsale ?",
        choices: [
          "Il augmente, de façon symétrique de part et d’autre de l’axe.",
          "Il diminue.",
          "Il reste constant.",
          "Il augmente d’un seul côté de la dorsale.",
        ],
        answer: 0,
        explanation:
          "La croûte se forme à l’axe puis s’en éloigne : l’âge des fonds **augmente avec la distance** à l’axe, **symétriquement**. C’est un argument majeur de l’expansion océanique.",
      },
      {
        id: "1re-svt-06-ex-4",
        prompt: "Le plan de Wadati-Benioff correspond à :",
        choices: [
          "l’axe d’une dorsale",
          "une bande d’anomalie magnétique",
          "la limite entre croûte et manteau",
          "un plan incliné de foyers sismiques matérialisant la plaque plongeante",
        ],
        answer: 3,
        explanation:
          "Le **plan de Wadati-Benioff** est formé par la répartition inclinée des foyers sismiques dans une zone de subduction : il dessine la plaque qui s’enfonce.",
      },
      {
        id: "1re-svt-06-ex-5",
        prompt: "Qu’est-ce qu’une ophiolite ?",
        choices: [
          "Un fragment de lithosphère océanique retrouvé sur un continent",
          "Un volcan de zone de subduction",
          "Une roche granitique de la croûte continentale",
          "Une faille inverse",
        ],
        answer: 0,
        explanation:
          "Une **ophiolite** est un ensemble péridotite + gabbro + basalte (+ sédiments océaniques) charrié sur un continent : c’est le témoin d’un **ancien océan** refermé.",
      },
      {
        id: "1re-svt-06-ex-6",
        prompt: "Quel type de volcanisme caractérise les zones de subduction ?",
        choices: [
          "Effusif, avec des laves très fluides",
          "Explosif, avec des magmas visqueux riches en eau et en gaz",
          "Uniquement sous-marin",
          "Il n’y a pas de volcanisme",
        ],
        answer: 1,
        explanation:
          "Les magmas de subduction sont riches en eau et en silice, donc **visqueux** : les gaz s’échappent difficilement et les éruptions sont **explosives** (andésites, rhyolites).",
      },
    ],
    test: [
      {
        id: "1re-svt-06-ct-1",
        prompt:
          "Une anomalie magnétique datée de 4 Ma est située à 80 km de l’axe d’une dorsale, de chaque côté. Quelle est la vitesse d’écartement des deux plaques ?",
        choices: ["2 cm/an", "8 cm/an", "1 cm/an", "4 cm/an"],
        answer: 3,
        explanation:
          "Demi-taux = 80 km / 4 Ma = 20 km/Ma = **2 cm/an**. L’anomalie étant à 80 km de chaque côté, les plaques s’écartent de 2 × 2 = **4 cm/an**.",
      },
      {
        id: "1re-svt-06-ct-2",
        prompt:
          "Le plancher océanique présente des bandes d’aimantation alternativement normale et inverse, parallèles et symétriques par rapport à l’axe de la dorsale. Que montre cette observation ?",
        choices: [
          "Le champ magnétique terrestre est constant.",
          "Le basalte se forme à l’axe, enregistre le champ du moment puis s’éloigne symétriquement.",
          "Les bandes sont dues à des failles transformantes.",
          "Les plaques convergent au niveau de la dorsale.",
        ],
        answer: 1,
        explanation:
          "Chaque bande correspond à du basalte formé à l’axe pendant une période de polarité donnée, puis écarté de part et d’autre. La **symétrie** prouve que la croûte se forme à l’axe et s’en éloigne : c’est l’**expansion océanique**.",
      },
      {
        id: "1re-svt-06-ct-3",
        prompt:
          "Dans une zone de subduction, les volcans se situent à environ 200 km de la fosse, à l’aplomb de la plaque plongeante à 100 km de profondeur. Pourquoi pas plus près de la fosse ?",
        choices: [
          "Il faut que la plaque plongeante atteigne une profondeur où ses minéraux libèrent de l’eau, qui fait fondre le manteau sus-jacent.",
          "La plaque plongeante fond entièrement dès la fosse.",
          "Les volcans sont déplacés par l’érosion.",
          "La croûte continentale est trop épaisse près de la fosse.",
        ],
        answer: 0,
        explanation:
          "La **déshydratation** des minéraux de la croûte plongeante nécessite des conditions de pression et de température atteintes vers 100 km. L’eau libérée fait alors **fondre partiellement le manteau** de la plaque chevauchante, juste au-dessus : les volcans se placent à l’aplomb.",
      },
      {
        id: "1re-svt-06-ct-4",
        prompt:
          "Un gabbro de la plaque plongeante contient, à 30 km, du glaucophane, puis, à 80 km, du grenat et de la jadéite, et de moins en moins de minéraux hydratés. Que révèle cette évolution ?",
        choices: [
          "Une fusion totale de la croûte océanique",
          "Un réchauffement à basse pression",
          "Un métamorphisme de haute pression avec déshydratation progressive de la croûte plongeante",
          "Une cristallisation de magma en surface",
        ],
        answer: 2,
        explanation:
          "Les nouveaux minéraux apparaissent à l’état **solide** sous l’effet de l’augmentation de pression : c’est du **métamorphisme** (HP-BT). La diminution des minéraux hydratés montre que la croûte **libère de l’eau** en s’enfonçant.",
      },
      {
        id: "1re-svt-06-ct-5",
        prompt:
          "La lithosphère océanique a 2 Ma près de la dorsale (épaisseur 15 km) et 100 Ma loin de celle-ci (épaisseur 95 km). Pourquoi s’épaissit-elle ?",
        choices: [
          "Elle reçoit des sédiments de plus en plus épais.",
          "Elle refroidit : l’isotherme 1 300 °C s’enfonce et le manteau asthénosphérique sous-jacent devient lithosphérique.",
          "Des magmas s’accumulent sous elle.",
          "Elle est comprimée par les plaques voisines.",
        ],
        answer: 1,
        explanation:
          "En s’éloignant de la dorsale, la lithosphère **se refroidit**. La limite lithosphère/asthénosphère étant l’isotherme 1 300 °C, celui-ci s’approfondit : de la péridotite asthénosphérique devient rigide et s’ajoute à la base de la lithosphère, qui **s’épaissit et se densifie**.",
      },
      {
        id: "1re-svt-06-ct-6",
        prompt:
          "Dans les Alpes, au Chenaillet, on trouve des basaltes en coussins reposant sur des gabbros et des péridotites, à plus de 2 000 m d’altitude. Quelle conclusion ?",
        choices: [
          "Il s’agit d’un ancien volcan de subduction.",
          "Les Alpes se sont formées par divergence.",
          "Ce sont des roches du manteau remontées par un point chaud.",
          "C’est un fragment d’une ancienne lithosphère océanique (ophiolite), témoin d’un océan refermé avant la collision.",
        ],
        answer: 3,
        explanation:
          "La succession péridotite / gabbro / basalte en coussins est celle d’une **lithosphère océanique**. Sa présence dans une chaîne de montagnes atteste l’existence d’un **ancien océan** (l’océan alpin) disparu par subduction avant la collision.",
      },
      {
        id: "1re-svt-06-ct-7",
        prompt:
          "Sous l’Himalaya, le Moho est à 70 km ; sous la plaine indienne, il est à 35 km. Associé à de nombreux plis et chevauchements, ce résultat indique :",
        choices: [
          "un épaississement de la croûte continentale par raccourcissement lors de la collision",
          "un amincissement de la croûte",
          "la présence d’une dorsale sous l’Himalaya",
          "une subduction de croûte continentale jusqu’au noyau",
        ],
        answer: 0,
        explanation:
          "Les plis et chevauchements témoignent d’un **raccourcissement** horizontal ; le Moho profond révèle une **racine crustale** : la croûte s’est **épaissie** (de 35 à 70 km) lors de la collision Inde-Asie.",
      },
      {
        id: "1re-svt-06-ct-8",
        prompt:
          "Pourquoi la lithosphère océanique entre-t-elle en subduction alors que la lithosphère continentale ne plonge pas durablement ?",
        choices: [
          "La lithosphère continentale est plus froide.",
          "La lithosphère océanique est plus jeune.",
          "La lithosphère océanique âgée devient plus dense que l’asthénosphère, contrairement à la lithosphère continentale, dont la croûte épaisse est peu dense.",
          "La lithosphère continentale est liquide.",
        ],
        answer: 2,
        explanation:
          "En vieillissant, la lithosphère océanique se refroidit et s’épaissit en manteau dense : sa densité moyenne dépasse celle de l’asthénosphère, ce qui permet sa plongée. La lithosphère continentale, avec une croûte épaisse de densité 2,7, reste **moins dense** : elle **résiste à l’enfouissement**, d’où la collision.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // Chapitre 7
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-svt-07",
    title: "Écosystèmes et services environnementaux",
    summary:
      "Un écosystème est un ensemble dynamique d’êtres vivants en interaction entre eux et avec leur milieu, qui fournit à l’humanité des services précieux qu’une gestion raisonnée permet de préserver.",
    objectives: [
      "Je sais définir un écosystème, une biocénose et un biotope et décrire les interactions entre êtres vivants.",
      "Je sais expliquer les flux de matière et d’énergie dans un écosystème (réseaux trophiques, cycle du carbone).",
      "Je sais expliquer la dynamique d’un écosystème : résilience et effets des perturbations.",
      "Je sais identifier des services écosystémiques et argumenter sur leur gestion durable.",
    ],
    sections: [
      {
        title: "Un écosystème : des êtres vivants en interaction avec leur milieu",
        body: [
          "Un **écosystème** est formé par l’association d’une **biocénose** (l’ensemble des êtres vivants d’un lieu : végétaux, animaux, champignons, micro-organismes) et d’un **biotope** (le milieu physico-chimique : sol, eau, climat, lumière…). Ses limites sont fixées par l’observateur : une mare, une forêt, un récif corallien.",
          "Les êtres vivants interagissent entre eux de multiples façons. Interactions **trophiques** : la **prédation**, le **parasitisme** (un organisme vit aux dépens d’un hôte), la **compétition** pour une ressource (lumière, nourriture, territoire). Interactions **bénéfiques** : le **mutualisme**, où chaque partenaire tire profit de l’association (pollinisation, mycorhizes entre champignons et racines) ; la **symbiose** est un mutualisme durable et obligatoire, comme le lichen (algue + champignon) ou les coraux et leurs algues.",
          "Les êtres vivants interagissent aussi avec le biotope : ils en dépendent (température, disponibilité en eau) mais le **modifient** également. Les végétaux produisent du dioxygène et un sol riche en matière organique ; les castors transforment un cours d’eau en zone humide ; les vers de terre aèrent et brassent le sol. On parle d’**espèces ingénieures** lorsque leur action transforme profondément le milieu.",
        ],
        keyPoints: [
          "Écosystème = biocénose + biotope + leurs interactions.",
          "Interactions : prédation, parasitisme, compétition, mutualisme, symbiose.",
          "Les êtres vivants dépendent du milieu et le modifient (espèces ingénieures).",
        ],
        formulas: ["Écosystème = biocénose + biotope"],
        example: {
          title: "Identifier des interactions dans une forêt",
          steps: [
            "Le pin et un champignon (bolet) forment des mycorhizes : le champignon apporte eau et sels minéraux, le pin fournit des sucres → mutualisme.",
            "Les jeunes pins poussant sous les grands pins manquent de lumière → compétition.",
            "Le gui prélève de la sève brute dans les branches du pin → parasitisme (le gui est hémiparasite).",
            "La chouette capture des mulots → prédation.",
          ],
        },
      },
      {
        title: "Flux de matière et d’énergie, dynamique des écosystèmes",
        body: [
          "Les **producteurs primaires** (végétaux chlorophylliens, algues, cyanobactéries) fabriquent leur matière organique à partir de matière minérale (CO₂, eau, sels minéraux) grâce à l’énergie lumineuse : c’est la **photosynthèse**. Ils sont mangés par des **consommateurs** (herbivores, puis carnivores), et la matière organique morte (feuilles, cadavres, excréments) est transformée en matière minérale par les **décomposeurs** (bactéries, champignons, aidés par la faune du sol). Ces relations alimentaires forment un **réseau trophique**.",
          "La **matière** est ainsi **recyclée** : un même atome de carbone passe du CO₂ de l’air à la matière organique des végétaux, puis des animaux, avant de retourner dans l’atmosphère par la **respiration** et la **décomposition**. L’**énergie**, au contraire, n’est pas recyclée : elle entre par la lumière et une grande partie est dissipée sous forme de chaleur à chaque niveau. En moyenne, seuls **10 % environ** de l’énergie d’un niveau trophique se retrouvent dans le niveau suivant, ce qui limite la longueur des chaînes alimentaires.",
          "Un écosystème est **dynamique** : il évolue en permanence (saisons, successions écologiques), mais reste en équilibre dynamique tant que les perturbations sont modérées. Sa **résilience** est sa capacité à retrouver un état proche de l’état initial après une perturbation (tempête, incendie). Une perturbation trop forte ou durable (pollution, surexploitation, espèce invasive, changement climatique) peut le faire basculer vers un autre état, parfois de façon irréversible. La **biodiversité** favorise souvent la résilience : si une espèce disparaît, une autre peut assurer une fonction proche.",
        ],
        keyPoints: [
          "Producteurs → consommateurs → décomposeurs : réseau trophique.",
          "La matière est recyclée ; l’énergie circule et se dissipe (≈ 10 % transmis par niveau).",
          "Résilience : capacité à retrouver un état proche de l’état initial après une perturbation.",
          "La biodiversité contribue à la stabilité et à la résilience.",
        ],
        example: {
          title: "Calculer l’énergie disponible en bout de chaîne",
          steps: [
            "Les herbes d’une prairie produisent 10 000 kJ de matière organique par m² et par an.",
            "Avec un rendement d’environ 10 %, les herbivores (criquets) en stockent environ 1 000 kJ.",
            "Les carnivores primaires (musaraignes) en stockent environ 100 kJ.",
            "Les carnivores secondaires (rapaces) environ 10 kJ : il ne peut y avoir que peu de niveaux et peu de grands prédateurs.",
          ],
        },
      },
      {
        title: "Les services écosystémiques et leur gestion",
        body: [
          "Les **services écosystémiques** sont les bénéfices que l’humanité retire des écosystèmes. On distingue les services d’**approvisionnement** (nourriture, eau douce, bois, fibres, molécules médicinales), de **régulation** (pollinisation des cultures, épuration de l’eau par les zones humides, stockage du carbone par les forêts et les sols, protection contre l’érosion et les crues), et les services **culturels** (loisirs, paysages, valeur patrimoniale). Tous reposent sur des **services de soutien** comme la formation des sols, la photosynthèse ou le recyclage des nutriments.",
          "Par exemple, les **insectes pollinisateurs** (abeilles domestiques et sauvages, bourdons…) assurent la reproduction d’environ trois quarts des espèces cultivées dans le monde. Leur déclin, lié aux pesticides, à la perte d’habitats et aux parasites, menace la production de fruits et de légumes. Autre exemple : une forêt en amont d’une ville filtre l’eau et limite les crues ; la préserver coûte souvent beaucoup moins cher que de construire une usine de traitement.",
          "Les activités humaines (agriculture intensive, urbanisation, déforestation, pollutions) dégradent souvent les écosystèmes et donc les services qu’ils rendent. Une **gestion durable** cherche à concilier production et préservation : **agroécologie** (haies, bandes fleuries, rotation des cultures, réduction des intrants), **ingénierie écologique** (restauration de zones humides), aires protégées, gestion des stocks de poissons. Ces choix s’appuient sur des connaissances scientifiques, mais relèvent aussi de décisions collectives qui prennent en compte des enjeux économiques et sociaux.",
        ],
        keyPoints: [
          "Services d’approvisionnement, de régulation, culturels (et de soutien).",
          "Exemples : pollinisation, épuration de l’eau, stockage du carbone.",
          "Les activités humaines peuvent dégrader ces services.",
          "Gestion durable : agroécologie, ingénierie écologique, aires protégées.",
        ],
        example: {
          title: "Évaluer l’intérêt d’une haie en bordure de champ",
          steps: [
            "On compare deux parcelles de colza, l’une bordée d’une haie fleurie, l’autre non.",
            "La parcelle avec haie accueille davantage de pollinisateurs et d’insectes prédateurs de ravageurs.",
            "Son rendement est plus élevé et elle nécessite moins d’insecticides.",
            "La haie rend donc des services de régulation (pollinisation, lutte biologique) et limite aussi l’érosion des sols.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-svt-07-ex-1",
        prompt: "Un écosystème est constitué :",
        choices: [
          "uniquement des animaux d’un milieu",
          "de la biocénose, du biotope et de leurs interactions",
          "uniquement du sol et du climat",
          "des seules espèces protégées d’une région",
        ],
        answer: 1,
        explanation:
          "Un **écosystème** associe la **biocénose** (les êtres vivants) et le **biotope** (le milieu physico-chimique), ainsi que toutes les interactions entre eux.",
      },
      {
        id: "1re-svt-07-ex-2",
        prompt: "L’association entre un champignon et les racines d’un arbre, bénéfique pour les deux, est :",
        choices: ["une compétition", "un parasitisme", "une prédation", "un mutualisme (mycorhize)"],
        answer: 3,
        explanation:
          "Dans une **mycorhize**, le champignon fournit eau et sels minéraux à l’arbre, qui lui fournit des sucres : les deux partenaires en tirent profit, c’est du **mutualisme**.",
      },
      {
        id: "1re-svt-07-ex-3",
        prompt: "Quel est le rôle des décomposeurs ?",
        choices: [
          "Transformer la matière organique morte en matière minérale",
          "Produire de la matière organique par photosynthèse",
          "Consommer uniquement des herbivores",
          "Fixer l’énergie lumineuse",
        ],
        answer: 0,
        explanation:
          "Les **décomposeurs** (bactéries, champignons) **minéralisent** la matière organique morte : ils rendent disponibles les éléments minéraux pour les producteurs, bouclant le cycle de la matière.",
      },
      {
        id: "1re-svt-07-ex-4",
        prompt: "Dans un écosystème, l’énergie :",
        choices: [
          "est entièrement recyclée",
          "circule et une grande partie est dissipée sous forme de chaleur à chaque niveau trophique",
          "augmente à chaque niveau trophique",
          "provient des décomposeurs",
        ],
        answer: 1,
        explanation:
          "Contrairement à la matière, l’**énergie n’est pas recyclée** : elle entre sous forme lumineuse et se **dissipe** (respiration, chaleur) à chaque niveau ; environ 10 % seulement passent au niveau suivant.",
      },
      {
        id: "1re-svt-07-ex-5",
        prompt: "La pollinisation des cultures par les abeilles est un service écosystémique :",
        choices: ["culturel", "d’approvisionnement", "de régulation", "sans intérêt économique"],
        answer: 2,
        explanation:
          "La pollinisation est un service de **régulation** : elle conditionne la production de nombreuses cultures (fruits, légumes, oléagineux), dont la valeur économique est considérable.",
      },
      {
        id: "1re-svt-07-ex-6",
        prompt: "Qu’est-ce que la résilience d’un écosystème ?",
        choices: [
          "Sa capacité à ne jamais changer",
          "Le nombre d’espèces qu’il contient",
          "Sa production de matière organique",
          "Sa capacité à retrouver un état proche de l’état initial après une perturbation",
        ],
        answer: 3,
        explanation:
          "La **résilience** est l’aptitude d’un écosystème à **se rétablir** après une perturbation (incendie, tempête), en retrouvant un fonctionnement proche de l’état antérieur.",
      },
    ],
    test: [
      {
        id: "1re-svt-07-ct-1",
        prompt:
          "Dans un parc américain, la réintroduction des loups a réduit le nombre de cerfs ; les jeunes saules et peupliers des berges ont alors repoussé, et les castors sont revenus. Quel phénomène cette observation illustre-t-elle ?",
        choices: [
          "Une cascade trophique : un prédateur influence indirectement la végétation et d’autres espèces.",
          "Une compétition entre loups et arbres.",
          "Un mutualisme entre loups et castors.",
          "L’absence d’interactions dans les écosystèmes.",
        ],
        answer: 0,
        explanation:
          "Les loups limitent les cerfs (prédation), qui broutaient les jeunes arbres. La végétation se reconstitue et offre ressources et habitats aux castors : c’est une **cascade trophique**, montrant que les interactions se propagent dans tout le réseau.",
      },
      {
        id: "1re-svt-07-ct-2",
        prompt:
          "Dans un champ, on mesure la production des producteurs : 20 000 kJ·m⁻²·an⁻¹. Avec un rendement de 10 % entre niveaux, quelle énergie est disponible pour les carnivores secondaires (4e niveau) ?",
        choices: ["2 000 kJ", "200 kJ", "20 kJ", "2 kJ"],
        answer: 2,
        explanation:
          "Herbivores : 20 000 × 0,1 = 2 000 ; carnivores primaires : 200 ; carnivores secondaires : **20 kJ·m⁻²·an⁻¹**. Chaque passage perd environ 90 % de l’énergie.",
      },
      {
        id: "1re-svt-07-ct-3",
        prompt:
          "On place des feuilles mortes dans des sacs à mailles fines (n’excluant que la faune) ou larges, dans un sol forestier. Après un an, il reste 70 % de la masse dans les sacs à mailles fines et 30 % dans les sacs à mailles larges. Conclusion ?",
        choices: [
          "La faune du sol ne joue aucun rôle dans la décomposition.",
          "Seule la faune décompose la litière.",
          "La taille des mailles augmente la photosynthèse.",
          "Les micro-organismes décomposent seuls lentement, et la faune du sol accélère nettement la décomposition.",
        ],
        answer: 3,
        explanation:
          "Avec les micro-organismes seuls (mailles fines), 30 % de la masse disparaît : ils décomposent. Avec la faune en plus (mailles larges), 70 % disparaît : la **faune du sol** (vers, collemboles…) fragmente la litière et **accélère** son recyclage par les micro-organismes.",
      },
      {
        id: "1re-svt-07-ct-4",
        prompt:
          "Après un incendie modéré, une garrigue retrouve en 15 ans une végétation proche de l’initiale. Après des incendies répétés tous les 3 ans, le sol est érodé et la végétation reste rase. Qu’en conclure ?",
        choices: [
          "La garrigue n’est pas résiliente.",
          "La garrigue est résiliente face à une perturbation modérée, mais des perturbations trop fréquentes dépassent sa capacité de récupération.",
          "Les incendies répétés augmentent la biodiversité.",
          "La fréquence des incendies n’a pas d’effet.",
        ],
        answer: 1,
        explanation:
          "Face à un incendie isolé, l’écosystème se reconstitue : il est **résilient**. Avec des incendies trop rapprochés, la végétation n’a pas le temps de se rétablir, le sol se dégrade et l’écosystème **bascule** vers un autre état durable.",
      },
      {
        id: "1re-svt-07-ct-5",
        prompt:
          "Une étude compare des vergers de pommiers : avec pollinisateurs libres, 80 % des fleurs donnent un fruit ; avec fleurs ensachées (pollinisateurs exclus), 5 %. Que montrent ces résultats ?",
        choices: [
          "La production de pommes dépend fortement du service de pollinisation rendu par les insectes.",
          "Les pommiers n’ont pas besoin de pollinisation.",
          "Le sachet améliore la fructification.",
          "La pollinisation est un service culturel.",
        ],
        answer: 0,
        explanation:
          "L’exclusion des pollinisateurs fait chuter la fructification de 80 % à 5 % : la production dépend presque entièrement de la **pollinisation par les insectes**, service de régulation essentiel.",
      },
      {
        id: "1re-svt-07-ct-6",
        prompt:
          "Une ville doit garantir une eau potable de qualité. Option A : construire une usine de traitement (coût élevé, entretien permanent). Option B : protéger et restaurer la forêt et les zones humides du bassin versant. Quel argument scientifique soutient l’option B ?",
        choices: [
          "Les forêts consomment toute l’eau des rivières.",
          "Les zones humides polluent l’eau.",
          "Les sols forestiers et les zones humides filtrent et épurent naturellement l’eau, tout en rendant d’autres services.",
          "L’option B n’a aucun effet sur la qualité de l’eau.",
        ],
        answer: 2,
        explanation:
          "Les sols forestiers et les zones humides **retiennent les sédiments**, absorbent nitrates et phosphates et régulent les débits : c’est un service d’**épuration et de régulation**. L’option B fournit en plus d’autres services (carbone, biodiversité, loisirs). C’est le choix fait par la ville de New York.",
      },
      {
        id: "1re-svt-07-ct-7",
        prompt:
          "Dans une parcelle, on remplace une prairie diversifiée par une monoculture. Lors d’une sécheresse, la production de la prairie baisse de 20 %, celle de la monoculture de 60 %. Interprétation ?",
        choices: [
          "La monoculture est plus résistante.",
          "La diversité des espèces de la prairie favorise sa stabilité face aux perturbations.",
          "La sécheresse touche uniquement les prairies.",
          "La biodiversité n’a pas de lien avec le fonctionnement des écosystèmes.",
        ],
        answer: 1,
        explanation:
          "Dans la prairie diversifiée, certaines espèces tolérantes à la sécheresse compensent la baisse des autres : la **biodiversité** renforce la **stabilité** et la **résilience** de la production. La monoculture, où toutes les plantes réagissent de la même façon, est plus vulnérable.",
      },
      {
        id: "1re-svt-07-ct-8",
        prompt:
          "Le carbone d’une feuille de chêne tombée au sol retourne dans l’atmosphère principalement :",
        choices: [
          "par la photosynthèse des décomposeurs",
          "par l’évaporation de l’eau",
          "sous forme de dioxygène",
          "sous forme de CO₂, par la respiration des décomposeurs",
        ],
        answer: 3,
        explanation:
          "Les décomposeurs utilisent la matière organique de la feuille et **respirent** : le carbone est rejeté sous forme de **CO₂**, qui pourra de nouveau être fixé par photosynthèse. La matière est ainsi recyclée.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 8
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-svt-08",
    title: "Immunité : réaction inflammatoire, immunité adaptative, vaccination",
    summary:
      "L’organisme se défend d’abord par une immunité innée, rapide et déclenchant la réaction inflammatoire, puis par une immunité adaptative spécifique (lymphocytes B et T) qui laisse une mémoire, principe exploité par la vaccination.",
    objectives: [
      "Je sais décrire la réaction inflammatoire aiguë et le rôle des cellules de l’immunité innée.",
      "Je sais expliquer la réponse adaptative à médiation humorale (lymphocytes B, anticorps).",
      "Je sais expliquer la réponse adaptative à médiation cellulaire (lymphocytes T CD8 et CD4).",
      "Je sais expliquer la mémoire immunitaire et le principe de la vaccination.",
    ],
    sections: [
      {
        title: "L’immunité innée et la réaction inflammatoire",
        body: [
          "L’organisme est protégé par des **barrières naturelles** (peau, muqueuses, mucus, acidité de l’estomac). Lorsqu’un agent pathogène (bactérie, virus, champignon) les franchit, l’**immunité innée** est la première à intervenir. Elle est présente dès la naissance, héritée génétiquement, **très rapide** (quelques minutes à quelques heures) et peu spécifique : elle reconnaît des **motifs moléculaires** communs à de nombreux pathogènes grâce à des récepteurs présents sur des cellules sentinelles (macrophages, cellules dendritiques, mastocytes).",
          "Cette reconnaissance déclenche la **réaction inflammatoire aiguë**, qui se manifeste par quatre symptômes : **rougeur**, **chaleur**, **gonflement** (œdème) et **douleur**. Les cellules sentinelles libèrent des **médiateurs chimiques** (histamine, prostaglandines, cytokines) qui dilatent les vaisseaux sanguins (rougeur, chaleur), augmentent leur perméabilité (sortie de plasma → œdème) et stimulent les terminaisons nerveuses (douleur).",
          "Ces médiateurs attirent sur le site infecté des **leucocytes** (globules blancs), en particulier les **granulocytes neutrophiles** et les **monocytes** qui se transforment en macrophages. Ces cellules **phagocytes** englobent les microbes et les digèrent : c’est la **phagocytose**. La réaction inflammatoire prépare aussi l’immunité adaptative : les **cellules dendritiques** capturent des fragments du pathogène et migrent vers les ganglions lymphatiques pour les présenter aux lymphocytes. Les anti-inflammatoires (aspirine, ibuprofène) atténuent les symptômes en bloquant la synthèse des prostaglandines.",
        ],
        keyPoints: [
          "Immunité innée : immédiate, héréditaire, peu spécifique.",
          "Réaction inflammatoire : rougeur, chaleur, gonflement, douleur.",
          "Médiateurs chimiques : vasodilatation, perméabilité, recrutement des leucocytes.",
          "Phagocytose par les neutrophiles et les macrophages ; cellules dendritiques = présentatrices d’antigène.",
        ],
        example: {
          title: "Expliquer les symptômes d’une écharde infectée",
          steps: [
            "Une écharde introduit des bactéries dans la peau.",
            "Les macrophages et mastocytes reconnaissent les bactéries et libèrent histamine et cytokines.",
            "Les vaisseaux se dilatent (rougeur, chaleur) et laissent fuir du plasma (gonflement) ; les terminaisons nerveuses sont stimulées (douleur).",
            "Des neutrophiles affluent et phagocytent les bactéries ; le pus est formé de leucocytes morts et de débris.",
          ],
        },
      },
      {
        title: "L’immunité adaptative : lymphocytes B et T",
        body: [
          "L’**immunité adaptative** n’existe que chez les vertébrés. Elle est **spécifique** : chaque **lymphocyte** porte un récepteur qui reconnaît un seul **antigène** (molécule reconnue comme étrangère). L’immense diversité des récepteurs, produite au hasard lors de la formation des lymphocytes, permet de reconnaître pratiquement n’importe quel antigène. Elle est plus lente que l’immunité innée lors d’un premier contact (environ une semaine).",
          "Lorsqu’un lymphocyte reconnaît son antigène, il est **sélectionné**, se multiplie (**amplification clonale**) puis se **différencie** en cellules effectrices. Les **lymphocytes B** se différencient en **plasmocytes** qui sécrètent des **anticorps** (immunoglobulines) : ce sont des protéines en forme de Y qui se fixent spécifiquement à l’antigène et forment des **complexes immuns**, neutralisant le pathogène et facilitant sa **phagocytose**. C’est la réponse **à médiation humorale** (par les liquides du corps).",
          "Les **lymphocytes T CD8** reconnaissent un antigène présenté par une cellule de l’organisme (cellule infectée par un virus, cellule cancéreuse) ; ils se différencient en **lymphocytes T cytotoxiques** (LTc) qui **détruisent** ces cellules : c’est la réponse **à médiation cellulaire**. Les **lymphocytes T CD4**, activés par les cellules dendritiques, deviennent des **lymphocytes T auxiliaires** (helper) qui sécrètent des **interleukines** : ces messagers stimulent la multiplication et la différenciation des LB et des LT CD8. Ils sont ainsi les **chefs d’orchestre** de la réponse adaptative ; leur destruction par le VIH explique l’effondrement des défenses dans le SIDA.",
        ],
        keyPoints: [
          "Lymphocyte : un récepteur spécifique d’un antigène.",
          "Sélection → amplification clonale → différenciation.",
          "LB → plasmocytes → anticorps (réponse humorale) ; complexes immuns éliminés par phagocytose.",
          "LT CD8 → LT cytotoxiques (détruisent les cellules infectées) ; LT CD4 → LT auxiliaires (interleukines).",
        ],
        example: {
          title: "Le test d’Ouchterlony (immunodiffusion)",
          steps: [
            "Dans une gélose, on place au centre le sérum d’un lapin immunisé contre l’albumine humaine, et autour différents antigènes.",
            "Les molécules diffusent dans la gélose.",
            "Un arc de précipitation apparaît uniquement entre le sérum et le puits contenant l’albumine humaine.",
            "Cet arc correspond aux complexes immuns : les anticorps du sérum sont spécifiques de l’antigène qui a provoqué leur production.",
          ],
        },
      },
      {
        title: "Mémoire immunitaire et vaccination",
        body: [
          "Lors d’une première réponse adaptative (**réponse primaire**), une partie des lymphocytes sélectionnés ne se différencie pas en cellules effectrices mais en **cellules mémoire** (LB et LT mémoire), à longue durée de vie et plus nombreuses que les lymphocytes initiaux spécifiques de cet antigène. Lors d’un second contact avec le même antigène, la **réponse secondaire** est **plus rapide**, **plus intense** (beaucoup plus d’anticorps) et **plus durable**. Le pathogène est souvent éliminé avant l’apparition de symptômes : l’individu est **immunisé**.",
          "La **vaccination** exploite cette mémoire. Un vaccin contient un antigène inoffensif : agent pathogène tué ou atténué, fragment (protéine), toxine inactivée (anatoxine), ou ARN messager faisant produire une protéine du pathogène par nos propres cellules. Il est souvent associé à un **adjuvant**, qui déclenche une réaction inflammatoire locale et active l’immunité innée, indispensable au bon démarrage de la réponse adaptative. Le vaccin provoque une réponse primaire et la constitution de cellules mémoire ; les **rappels** renforcent cette mémoire.",
          "Sur le plan collectif, lorsque la proportion de personnes vaccinées est suffisante, le pathogène circule difficilement : c’est l’**immunité de groupe**, qui protège aussi les personnes qui ne peuvent pas être vaccinées (nouveau-nés, personnes immunodéprimées). C’est grâce à la vaccination que la variole a été **éradiquée** en 1980. La vaccination est **préventive** : elle diffère de la sérothérapie, qui injecte directement des anticorps (protection immédiate mais temporaire, sans mémoire).",
        ],
        keyPoints: [
          "Cellules mémoire : formées lors de la réponse primaire.",
          "Réponse secondaire : plus rapide, plus intense, plus durable.",
          "Vaccin = antigène inoffensif (+ adjuvant) → réponse primaire et mémoire.",
          "Immunité de groupe ; vaccination (préventive, mémoire) ≠ sérothérapie (immédiate, temporaire).",
        ],
        example: {
          title: "Comparer réponses primaire et secondaire",
          steps: [
            "Un individu reçoit une première injection d’antigène au jour 0 : les anticorps apparaissent vers J7 et culminent à 10 unités vers J14.",
            "Il reçoit une seconde injection du même antigène au jour 60 : les anticorps apparaissent dès J62 et atteignent 1 000 unités.",
            "La réponse secondaire est plus rapide (délai plus court) et 100 fois plus intense.",
            "Cela s’explique par les lymphocytes B mémoire produits lors de la première injection : c’est le principe des rappels de vaccin.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-svt-08-ex-1",
        prompt: "Lequel de ces symptômes n’appartient pas à la réaction inflammatoire aiguë ?",
        choices: ["La rougeur", "La chaleur", "Le gonflement", "La production d’anticorps spécifiques"],
        answer: 3,
        explanation:
          "Les quatre symptômes de l’inflammation sont **rougeur, chaleur, gonflement et douleur**. La production d’anticorps relève de l’**immunité adaptative**.",
      },
      {
        id: "1re-svt-08-ex-2",
        prompt: "Qu’est-ce que la phagocytose ?",
        choices: [
          "L’ingestion et la digestion d’un microbe par une cellule",
          "La production d’anticorps par les plasmocytes",
          "La destruction d’une cellule infectée par un LT cytotoxique",
          "La multiplication des lymphocytes",
        ],
        answer: 0,
        explanation:
          "La **phagocytose** est l’englobement puis la digestion d’un élément étranger par une cellule phagocytaire (macrophage, granulocyte neutrophile).",
      },
      {
        id: "1re-svt-08-ex-3",
        prompt: "Les anticorps sont produits par :",
        choices: ["les macrophages", "les lymphocytes T cytotoxiques", "les plasmocytes", "les globules rouges"],
        answer: 2,
        explanation:
          "Les **plasmocytes**, issus de la différenciation des lymphocytes B, sécrètent les anticorps.",
      },
      {
        id: "1re-svt-08-ex-4",
        prompt: "Quel est le rôle des lymphocytes T CD4 auxiliaires ?",
        choices: [
          "Phagocyter les bactéries",
          "Stimuler, par des interleukines, la multiplication et la différenciation des LB et LT CD8",
          "Produire des anticorps",
          "Détruire directement les cellules infectées",
        ],
        answer: 1,
        explanation:
          "Les **LT auxiliaires** sécrètent des **interleukines** qui activent la prolifération et la différenciation des LB (en plasmocytes) et des LT CD8 (en LT cytotoxiques).",
      },
      {
        id: "1re-svt-08-ex-5",
        prompt: "Qu’est-ce qu’un antigène ?",
        choices: [
          "Une molécule reconnue comme étrangère par le système immunitaire",
          "Un médicament contre les bactéries",
          "Un type de globule blanc",
          "Une protéine sécrétée par les plasmocytes",
        ],
        answer: 0,
        explanation:
          "Un **antigène** est une molécule reconnue par les récepteurs des lymphocytes (ou les anticorps) et capable de déclencher une réponse immunitaire adaptative.",
      },
      {
        id: "1re-svt-08-ex-6",
        prompt: "Pourquoi fait-on des rappels de vaccins ?",
        choices: [
          "Pour provoquer une réaction inflammatoire durable",
          "Pour remplacer les anticorps détruits par le vaccin",
          "Pour changer l’antigène reconnu",
          "Pour renforcer la mémoire immunitaire en augmentant le nombre de cellules mémoire",
        ],
        answer: 3,
        explanation:
          "Chaque rappel déclenche une **réponse secondaire** qui augmente le nombre de **cellules mémoire** et le taux d’anticorps : la protection est renforcée et prolongée.",
      },
    ],
    test: [
      {
        id: "1re-svt-08-ct-1",
        prompt:
          "Des souris sans lymphocytes T mais avec des LB normaux sont immunisées contre une protéine étrangère. Elles produisent très peu d’anticorps. Comment l’expliquer ?",
        choices: [
          "Les LB ne reconnaissent pas les antigènes protéiques.",
          "Les anticorps sont produits par les LT.",
          "Sans LT CD4 auxiliaires, les LB ne reçoivent pas les interleukines nécessaires à leur multiplication et différenciation en plasmocytes.",
          "Les macrophages détruisent les anticorps.",
        ],
        answer: 2,
        explanation:
          "Les LB reconnaissent l’antigène, mais leur **amplification et différenciation** en plasmocytes nécessitent les **interleukines** des **LT CD4 auxiliaires**. Sans LT, la réponse humorale reste très faible.",
      },
      {
        id: "1re-svt-08-ct-2",
        prompt:
          "On met en contact des cellules infectées par le virus A avec des LT CD8 prélevés chez une souris immunisée contre A, puis contre B. Les cellules infectées par A sont détruites seulement par les LT de la souris immunisée contre A. Que montre cette expérience ?",
        choices: [
          "Les LT cytotoxiques sont spécifiques de l’antigène contre lequel ils ont été produits.",
          "Les LT CD8 détruisent toutes les cellules infectées.",
          "Les anticorps détruisent les cellules infectées.",
          "Le virus B protège contre le virus A.",
        ],
        answer: 0,
        explanation:
          "Seuls les LT issus d’une immunisation contre A détruisent les cellules infectées par A : les **LT cytotoxiques** sont **spécifiques** de l’antigène qui a sélectionné leur clone.",
      },
      {
        id: "1re-svt-08-ct-3",
        prompt:
          "Un patient séropositif voit son nombre de LT CD4 passer de 1 000 à 150 par mm³ de sang en quelques années ; il développe alors des infections opportunistes. Pourquoi ?",
        choices: [
          "Le VIH détruit les globules rouges.",
          "Les LT CD4 étant détruits, les réponses humorale et cellulaire ne sont plus activées.",
          "Le VIH stimule trop l’immunité innée.",
          "Les anticorps anti-VIH détruisent les autres anticorps.",
        ],
        answer: 1,
        explanation:
          "Le VIH infecte et détruit les **LT CD4**. Sans eux, les LB et les LT CD8 ne sont plus correctement activés : l’immunité adaptative s’effondre et des pathogènes habituellement inoffensifs provoquent des maladies (**SIDA**).",
      },
      {
        id: "1re-svt-08-ct-4",
        prompt:
          "Une souris reçoit une injection d’antigène X à J0, puis X et Y à J30. Au jour 37, le taux d’anticorps anti-X est 50 fois plus élevé que celui des anticorps anti-Y. Quelle interprétation ?",
        choices: [
          "L’antigène Y n’est pas reconnu par le système immunitaire.",
          "Les anticorps anti-X neutralisent les anticorps anti-Y.",
          "Les deux réponses sont primaires.",
          "Contre X, c’est une réponse secondaire grâce aux cellules mémoire ; contre Y, une réponse primaire.",
        ],
        answer: 3,
        explanation:
          "La souris avait déjà rencontré X : elle possède des **LB mémoire** anti-X, d’où une **réponse secondaire** rapide et intense. Y est rencontré pour la première fois : réponse **primaire**, lente et faible. Cela montre aussi la **spécificité** de la mémoire.",
      },
      {
        id: "1re-svt-08-ct-5",
        prompt:
          "Un vaccin contenant uniquement une protéine virale purifiée provoque une réponse faible ; additionné d’un adjuvant, il provoque une forte réponse. Quel est le rôle de l’adjuvant ?",
        choices: [
          "Il remplace les lymphocytes.",
          "Il contient des anticorps.",
          "Il déclenche une réaction inflammatoire qui active l’immunité innée, nécessaire au démarrage de la réponse adaptative.",
          "Il tue le virus.",
        ],
        answer: 2,
        explanation:
          "L’**adjuvant** stimule l’**immunité innée** (réaction inflammatoire locale, activation des cellules dendritiques), ce qui favorise la présentation de l’antigène et l’activation des lymphocytes : la réponse adaptative est bien plus efficace.",
      },
      {
        id: "1re-svt-08-ct-6",
        prompt:
          "Après une morsure par un animal suspect de rage, on injecte au patient à la fois des anticorps anti-rabiques (sérothérapie) et un vaccin. Pourquoi les deux ?",
        choices: [
          "Les anticorps protègent immédiatement, le temps que le vaccin déclenche une réponse active avec mémoire.",
          "Le vaccin agit immédiatement et les anticorps assurent la mémoire.",
          "Les deux sont inutiles après une morsure.",
          "Les anticorps renforcent le virus.",
        ],
        answer: 0,
        explanation:
          "La **sérothérapie** apporte des anticorps prêts à l’emploi : protection **immédiate mais transitoire**. Le **vaccin** déclenche une réponse propre au patient, plus lente, mais durable avec **mémoire**. Leur association couvre la période critique.",
      },
      {
        id: "1re-svt-08-ct-7",
        prompt:
          "On applique un anti-inflammatoire bloquant la synthèse des prostaglandines sur une zone enflammée. Quel effet attendre ?",
        choices: [
          "Une disparition immédiate des bactéries",
          "Une augmentation de la douleur",
          "Une production accrue d’anticorps",
          "Une diminution de la douleur et du gonflement, sans élimination directe du pathogène",
        ],
        answer: 3,
        explanation:
          "Les **prostaglandines** sont des médiateurs de la douleur, de la vasodilatation et de l’œdème. Les bloquer **atténue les symptômes**, mais l’anti-inflammatoire n’élimine pas le pathogène ; il peut même ralentir une partie de la réponse.",
      },
      {
        id: "1re-svt-08-ct-8",
        prompt:
          "Pour une maladie très contagieuse, l’immunité de groupe est atteinte quand 95 % de la population est immunisée. Dans une ville, la couverture vaccinale tombe à 80 %. Quelle conséquence ?",
        choices: [
          "Aucune, car 80 % est une majorité.",
          "Le pathogène peut circuler à nouveau, exposant les non-vaccinés, y compris ceux qui ne peuvent pas être vaccinés.",
          "Les vaccinés perdent leur immunité.",
          "La maladie est éradiquée.",
        ],
        answer: 1,
        explanation:
          "Sous le seuil de 95 %, chaque malade peut contaminer en moyenne plus d’une personne non immunisée : des **épidémies** redeviennent possibles. Les personnes non vaccinées, notamment les nourrissons et les immunodéprimés, ne sont plus protégées par l’**immunité de groupe** (cas des épidémies de rougeole).",
      },
    ],
  },
];

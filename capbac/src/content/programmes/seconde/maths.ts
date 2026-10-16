import type { Chapter } from "../../types";

export const chapters: Chapter[] = [
  // ───────────────────────────── Chapitre 1 ─────────────────────────────
  {
    id: "2nde-maths-01",
    title: "Nombres et calculs",
    summary:
      "Connaître les ensembles de nombres, calculer avec les puissances et les racines carrées, et manipuler intervalles et valeur absolue.",
    objectives: [
      "Je sais reconnaître si un nombre est entier, décimal, rationnel ou irrationnel.",
      "Je sais appliquer les règles de calcul sur les puissances et utiliser l’écriture scientifique.",
      "Je sais simplifier une racine carrée et éviter les erreurs classiques.",
      "Je sais écrire un ensemble de réels sous forme d’intervalle et déterminer intersection et réunion.",
      "Je sais interpréter |x − a| comme une distance et résoudre |x − a| ≤ r.",
    ],
    sections: [
      {
        title: "Les ensembles de nombres",
        body: [
          "Les nombres que l’on utilise en mathématiques sont rangés dans des **ensembles** emboîtés. L’ensemble des **entiers naturels** ℕ = {0 ; 1 ; 2 ; 3 ; …} contient les entiers positifs. L’ensemble des **entiers relatifs** ℤ = {… ; −2 ; −1 ; 0 ; 1 ; 2 ; …} y ajoute les entiers négatifs.",
          "Un **nombre décimal** est un nombre qui peut s’écrire a/10ⁿ avec a ∈ ℤ et n ∈ ℕ : il possède un nombre **fini** de chiffres après la virgule. Par exemple 3,25 = 325/10² est décimal. L’ensemble des décimaux est noté 𝔻. Un **nombre rationnel** est un quotient a/b de deux entiers avec b ≠ 0 ; leur ensemble est noté ℚ. Ainsi 1/3 = 0,333… est rationnel mais **pas** décimal, car son écriture décimale est illimitée.",
          "L’ensemble des **nombres réels** ℝ regroupe tous les nombres que l’on peut placer sur une droite graduée. Certains réels ne sont pas rationnels : on les appelle **irrationnels**. C’est le cas de √2, de √3 ou de π. On démontre par exemple que √2 ne peut pas s’écrire comme un quotient de deux entiers.",
          "Ces ensembles sont inclus les uns dans les autres : ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ. Le symbole ∈ signifie « appartient à » et ∉ « n’appartient pas à » : on écrit −4 ∈ ℤ mais −4 ∉ ℕ. Pour trouver le plus petit ensemble auquel appartient un nombre, on commence toujours par le **simplifier**.",
        ],
        keyPoints: [
          "ℕ : entiers naturels ; ℤ : entiers relatifs ; 𝔻 : décimaux ; ℚ : rationnels ; ℝ : réels.",
          "Un décimal a un nombre fini de chiffres après la virgule.",
          "1/3 est rationnel mais pas décimal ; √2 et π sont irrationnels.",
          "On simplifie avant de classer : √9 = 3 ∈ ℕ, 12/4 = 3 ∈ ℕ.",
        ],
        formulas: ["ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ"],
        example: {
          title: "Classer des nombres",
          steps: [
            "Énoncé : donner le plus petit ensemble auquel appartient chacun des nombres −12/4, 7/20, 2/3 et √25 − √2.",
            "−12/4 = −3 : c’est un entier négatif, donc −12/4 ∈ ℤ (mais ∉ ℕ).",
            "7/20 = 35/100 = 0,35 : l’écriture décimale est finie, donc 7/20 ∈ 𝔻 (mais ∉ ℤ).",
            "2/3 = 0,666… : écriture illimitée, mais c’est un quotient d’entiers, donc 2/3 ∈ ℚ (mais ∉ 𝔻).",
            "√25 − √2 = 5 − √2 : la somme d’un rationnel et d’un irrationnel est irrationnelle, donc ce nombre appartient seulement à ℝ.",
          ],
        },
        figure: {
          type: "table",
          title: "Les ensembles de nombres",
          caption: "Chaque ensemble est inclus dans le suivant : ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ.",
          headers: ["Ensemble", "Nom", "Exemples"],
          rows: [
            ["ℕ", "entiers naturels", "0 ; 7 ; √9 = 3"],
            ["ℤ", "entiers relatifs", "−4 ; −12/4 = −3"],
            ["𝔻", "nombres décimaux", "0,35 ; 7/20 ; −2,5"],
            ["ℚ", "nombres rationnels", "1/3 ; 2/3"],
            ["ℝ", "nombres réels", "√2 ; π ; 5 − √2"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-01-s1-p1",
            prompt: "Quel est le plus petit ensemble auquel appartient le nombre 21/7 ?",
            choices: ["ℕ", "ℤ", "ℚ", "ℝ"],
            answer: 0,
            explanation: "On commence toujours par **simplifier** : 21/7 = 3. Or 3 est un entier positif, donc 21/7 ∈ ℕ. Il appartient aussi à ℤ, ℚ et ℝ (car ℕ est inclus dans ces ensembles), mais le plus petit ensemble est ℕ.",
          },
          {
            id: "2nde-maths-01-s1-p2",
            prompt: "Dans quel plus petit ensemble se trouve le nombre 3/8 ?",
            choices: ["ℤ", "ℚ mais pas 𝔻", "𝔻", "ℝ seulement"],
            answer: 2,
            explanation: "On effectue la division : 3/8 = 0,375. L’écriture décimale est **finie** (trois chiffres après la virgule), donc 3/8 est un nombre décimal : 3/8 = 375/10³ ∈ 𝔻. Ce n’est pas un entier, donc 3/8 ∉ ℤ : le plus petit ensemble est 𝔻.",
          },
          {
            id: "2nde-maths-01-s1-p3",
            prompt: "Quelle affirmation est vraie ?",
            choices: ["√16 ∉ ℕ", "−5 ∈ ℕ", "1/3 ∈ 𝔻", "π ∉ ℚ"],
            answer: 3,
            explanation: "π est un nombre **irrationnel** : il ne peut pas s’écrire comme quotient de deux entiers, donc π ∉ ℚ. Les autres sont fausses : √16 = 4 ∈ ℕ ; −5 est négatif donc −5 ∉ ℕ ; 1/3 = 0,333… a une écriture décimale illimitée donc 1/3 ∉ 𝔻.",
          },
        ],
      },
      {
        title: "Puissances et racines carrées",
        body: [
          "Pour un réel a et un entier n ≥ 1, la **puissance** aⁿ est le produit de n facteurs égaux à a : aⁿ = a × a × … × a. Par convention a⁰ = 1 (pour a ≠ 0) et, pour a ≠ 0, a⁻ⁿ = 1/aⁿ. Ainsi 2⁻³ = 1/2³ = 1/8.",
          "Les puissances obéissent à des règles de calcul à connaître par cœur (voir l’encadré). Attention : ces règles concernent les **produits** et les **quotients** ; il n’existe **aucune** règle pour une somme : 2³ + 2⁵ = 8 + 32 = 40, alors que 2⁸ = 256. Les puissances de 10 permettent l’**écriture scientifique** : tout décimal non nul s’écrit a × 10ⁿ avec 1 ≤ |a| < 10 et n ∈ ℤ, par exemple 0,00052 = 5,2 × 10⁻⁴.",
          "La **racine carrée** d’un réel positif a, notée √a, est l’unique réel **positif** dont le carré vaut a. Ainsi √49 = 7 (et non −7). Pour tout réel a ≥ 0, (√a)² = a ; et pour tout réel x, √(x²) = |x|, ce qui donne par exemple √((−3)²) = √9 = 3.",
          "Pour a ≥ 0 et b ≥ 0, √(ab) = √a × √b et, si b > 0, √(a/b) = √a / √b. Ces propriétés permettent de **simplifier** une racine en faisant apparaître un carré parfait sous le radical. En revanche √(a + b) ≠ √a + √b en général : √(9 + 16) = √25 = 5 alors que √9 + √16 = 3 + 4 = 7.",
        ],
        keyPoints: [
          "a⁰ = 1 et a⁻ⁿ = 1/aⁿ (pour a ≠ 0).",
          "Aucune règle pour une somme de puissances.",
          "√a est toujours positif ou nul ; √(x²) = |x|.",
          "Écriture scientifique : a × 10ⁿ avec 1 ≤ |a| < 10.",
          "√(a + b) ≠ √a + √b en général.",
        ],
        formulas: [
          "aᵐ × aⁿ = aᵐ⁺ⁿ",
          "aᵐ / aⁿ = aᵐ⁻ⁿ (a ≠ 0)",
          "(aᵐ)ⁿ = aᵐⁿ",
          "(ab)ⁿ = aⁿ × bⁿ",
          "√(ab) = √a × √b (a ≥ 0, b ≥ 0)",
          "√(a/b) = √a / √b (a ≥ 0, b > 0)",
        ],
        example: {
          title: "Simplifier √72 et A = (3² × 3⁵) / 3⁴",
          steps: [
            "√72 : on cherche le plus grand carré parfait qui divise 72 : 72 = 36 × 2.",
            "√72 = √36 × √2 = 6√2.",
            "A : au numérateur, 3² × 3⁵ = 3²⁺⁵ = 3⁷.",
            "A = 3⁷ / 3⁴ = 3⁷⁻⁴ = 3³ = 27.",
          ],
        },
        figure: {
          type: "table",
          title: "Puissances de 2",
          caption: "Chaque fois que l’exposant augmente de 1, on multiplie par 2 ; a⁰ = 1 et a⁻ⁿ = 1/aⁿ.",
          headers: ["n", "−3", "−2", "−1", "0", "1", "2", "3"],
          rows: [
            ["2ⁿ", "1/8", "1/4", "1/2", "1", "2", "4", "8"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-01-s2-p1",
            prompt: "Que vaut 5³ × 5⁻⁵ ?",
            choices: ["5⁻¹⁵", "1/25", "25", "5⁸"],
            answer: 1,
            explanation: "Pour un **produit** de puissances d’un même nombre, on additionne les exposants : 5³ × 5⁻⁵ = 5³⁺⁽⁻⁵⁾ = 5⁻². Puis, par définition, 5⁻² = 1/5² = 1/25. Le piège 5⁻¹⁵ vient d’une multiplication des exposants, qui ne concerne que (aᵐ)ⁿ.",
          },
          {
            id: "2nde-maths-01-s2-p2",
            prompt: "Quelle est l’écriture simplifiée de √50 ?",
            choices: ["25√2", "2√5", "10√5", "5√2"],
            answer: 3,
            explanation: "On cherche le plus grand carré parfait qui divise 50 : 50 = 25 × 2. Donc √50 = √25 × √2 = 5√2. Vérification : (5√2)² = 25 × 2 = 50. ✓",
          },
          {
            id: "2nde-maths-01-s2-p3",
            prompt: "Quelle est l’écriture scientifique de 0,000 73 ?",
            choices: ["7,3 × 10⁻⁴", "73 × 10⁻⁵", "7,3 × 10⁴", "0,73 × 10⁻³"],
            answer: 0,
            explanation: "L’écriture scientifique est a × 10ⁿ avec 1 ≤ |a| < 10 : ici a = 7,3. Pour passer de 7,3 à 0,000 73, on décale la virgule de 4 rangs vers la gauche, ce qui revient à multiplier par 10⁻⁴. Donc 0,000 73 = 7,3 × 10⁻⁴. Les écritures 73 × 10⁻⁵ et 0,73 × 10⁻³ sont égales au nombre mais ne sont pas scientifiques (73 ≥ 10 et 0,73 < 1).",
          },
        ],
      },
      {
        title: "Intervalles et valeur absolue",
        body: [
          "Un **intervalle** est un ensemble de réels « sans trou » compris entre deux bornes. Pour a < b, [a ; b] désigne l’ensemble des réels x tels que a ≤ x ≤ b (bornes incluses : intervalle **fermé**) et ]a ; b[ celui des réels tels que a < x < b (bornes exclues : intervalle **ouvert**). Il existe aussi les intervalles semi-ouverts [a ; b[ et ]a ; b].",
          "Les intervalles non bornés utilisent les symboles +∞ et −∞, qui ne sont pas des nombres : le crochet est donc toujours **ouvert** de leur côté. Par exemple x ≥ 3 s’écrit x ∈ [3 ; +∞[ et x < 1 s’écrit x ∈ ]−∞ ; 1[. On a ℝ = ]−∞ ; +∞[.",
          "L’**intersection** I ∩ J est l’ensemble des réels qui appartiennent à la fois à I **et** à J ; la **réunion** I ∪ J est l’ensemble des réels qui appartiennent à I **ou** à J (au moins l’un des deux). Pour les déterminer sans erreur, on représente les deux intervalles sur une même droite graduée.",
          "La **valeur absolue** d’un réel x, notée |x|, vaut x si x ≥ 0 et −x si x < 0 : c’est le nombre « sans son signe ». Géométriquement, |a − b| est la **distance** entre les réels a et b sur la droite graduée. Ainsi |x − 2| ≤ 3 signifie que x est à une distance au plus 3 de 2, c’est-à-dire x ∈ [−1 ; 5].",
        ],
        keyPoints: [
          "Crochet tourné vers le nombre : borne incluse ; tourné vers l’extérieur : borne exclue.",
          "Toujours un crochet ouvert du côté de +∞ ou de −∞.",
          "∩ se traduit par « et » ; ∪ par « ou » (au moins l’un).",
          "|a − b| est la distance entre a et b ; une valeur absolue est toujours positive ou nulle.",
        ],
        formulas: [
          "|x| = x si x ≥ 0 ; |x| = −x si x < 0",
          "|x − a| ≤ r ⇔ a − r ≤ x ≤ a + r ⇔ x ∈ [a − r ; a + r]",
        ],
        example: {
          title: "Intersection, réunion et valeur absolue",
          steps: [
            "Énoncé : I = [−2 ; 5[ et J = ]1 ; 8]. Déterminer I ∩ J et I ∪ J, puis résoudre |x + 1| < 4.",
            "On place I et J sur une droite graduée : I va de −2 (inclus) à 5 (exclu), J de 1 (exclu) à 8 (inclus).",
            "Les réels communs aux deux vont de 1 (exclu) à 5 (exclu) : I ∩ J = ]1 ; 5[.",
            "Les réels d’au moins un des deux vont de −2 (inclus) à 8 (inclus) : I ∪ J = [−2 ; 8].",
            "|x + 1| = |x − (−1)| est la distance entre x et −1. Elle est < 4 lorsque −1 − 4 < x < −1 + 4, soit x ∈ ]−5 ; 3[.",
          ],
        },
        figure: {
          type: "flow",
          title: "Résoudre |x − a| ≤ r",
          caption: "Exemple : |x − 2| ≤ 3 ⇔ −1 ≤ x ≤ 5 ⇔ x ∈ [−1 ; 5].",
          steps: [
            { label: "Lire une distance", detail: "|x − a| est la distance entre x et a" },
            { label: "Repérer centre et rayon", detail: "centre a, rayon r" },
            { label: "Encadrer", detail: "a − r ≤ x ≤ a + r" },
            { label: "Conclure", detail: "x ∈ [a − r ; a + r]" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-01-s3-p1",
            prompt: "Comment s’écrit l’ensemble des réels x tels que −3 < x ≤ 4 ?",
            choices: ["[−3 ; 4]", "]−3 ; 4]", "[−3 ; 4[", "]−3 ; 4["],
            answer: 1,
            explanation: "La borne −3 est **exclue** (inégalité stricte −3 < x) : le crochet est tourné vers l’extérieur, « ]−3 ». La borne 4 est **incluse** (x ≤ 4) : le crochet est tourné vers le nombre, « 4] ». On obtient ]−3 ; 4].",
          },
          {
            id: "2nde-maths-01-s3-p2",
            prompt: "On donne I = [0 ; 6] et J = ]4 ; 10[. Que vaut I ∩ J ?",
            choices: ["[0 ; 10[", "[4 ; 6]", "]4 ; 6[", "]4 ; 6]"],
            answer: 3,
            explanation: "I ∩ J contient les réels qui sont **à la fois** dans I et dans J. Sur une droite graduée, ils vont de 4 à 6. La borne 4 est exclue (elle n’est pas dans J) et la borne 6 est incluse (elle est dans I et dans J, car 6 < 10). Donc I ∩ J = ]4 ; 6]. [0 ; 10[ est la réunion I ∪ J.",
          },
          {
            id: "2nde-maths-01-s3-p3",
            prompt: "Quel est l’ensemble des réels x tels que |x − 5| ≤ 2 ?",
            choices: ["[3 ; 7]", "[−7 ; −3]", "]3 ; 7[", "[−2 ; 2]"],
            answer: 0,
            explanation: "|x − 5| est la distance entre x et 5. Elle est inférieure ou égale à 2 lorsque 5 − 2 ≤ x ≤ 5 + 2, soit 3 ≤ x ≤ 7. L’inégalité est large, donc les bornes sont incluses : x ∈ [3 ; 7].",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-maths-01-ex-1",
        prompt: "Le nombre 3/4 appartient à :",
        choices: ["ℤ, mais pas à 𝔻", "𝔻", "ℕ", "ℝ seulement (il est irrationnel)"],
        answer: 1,
        explanation:
          "3/4 = 0,75 : son écriture décimale est finie (3/4 = 75/10²), donc c’est un nombre **décimal** : 3/4 ∈ 𝔻. Ce n’est pas un entier (0,75 n’est ni dans ℕ ni dans ℤ), et ce n’est pas un irrationnel puisqu’il s’écrit comme un quotient d’entiers.",
      },
      {
        id: "2nde-maths-01-ex-2",
        prompt: "Que vaut 2³ × 2⁵ ?",
        choices: ["2¹⁵", "4⁸", "2⁸", "2²"],
        answer: 2,
        explanation:
          "Règle : aᵐ × aⁿ = aᵐ⁺ⁿ. On **additionne** les exposants (on ne les multiplie pas) : 2³ × 2⁵ = 2³⁺⁵ = 2⁸ = 256. Vérification : 8 × 32 = 256. L’écriture 4⁸ est fausse : on ne multiplie pas les bases.",
      },
      {
        id: "2nde-maths-01-ex-3",
        prompt: "Quelle est l’écriture simplifiée de √50 ?",
        choices: ["25√2", "2√5", "10√5", "5√2"],
        answer: 3,
        explanation:
          "On fait apparaître le plus grand carré parfait qui divise 50 : 50 = 25 × 2. Donc √50 = √25 × √2 = 5√2. Vérification : (5√2)² = 25 × 2 = 50.",
      },
      {
        id: "2nde-maths-01-ex-4",
        prompt: "L’ensemble des réels x tels que −2 < x ≤ 5 s’écrit :",
        choices: ["]−2 ; 5]", "[−2 ; 5[", "[−2 ; 5]", "]−2 ; 5["],
        answer: 0,
        explanation:
          "−2 < x : l’inégalité est stricte, −2 est exclu, donc crochet ouvert ] devant −2. x ≤ 5 : l’inégalité est large, 5 est inclus, donc crochet fermé ] après 5. On obtient ]−2 ; 5].",
      },
      {
        id: "2nde-maths-01-ex-5",
        prompt: "Que vaut |3 − 8| ?",
        choices: ["−5", "5", "11", "−11"],
        answer: 1,
        explanation:
          "On calcule d’abord l’intérieur : 3 − 8 = −5. Puis |−5| = 5 car la valeur absolue d’un nombre négatif est son opposé. Une valeur absolue n’est jamais négative. Interprétation : la distance entre 3 et 8 vaut 5.",
      },
      {
        id: "2nde-maths-01-ex-6",
        prompt: "Que vaut (10⁻²)³ ?",
        choices: ["10⁻⁵", "10⁶", "10⁻⁶", "10¹"],
        answer: 2,
        explanation:
          "Règle : (aᵐ)ⁿ = aᵐⁿ, on **multiplie** les exposants : (10⁻²)³ = 10⁽⁻²⁾ˣ³ = 10⁻⁶ = 0,000001. Additionner les exposants (−2 + 3 = 1) est l’erreur classique.",
      },
    ],
    test: [
      {
        id: "2nde-maths-01-ct-1",
        prompt: "Lequel de ces nombres est **irrationnel** ?",
        choices: ["√2 × √8", "22/7", "√3 + 1", "√49"],
        answer: 2,
        explanation:
          "√2 × √8 = √16 = 4 : rationnel (et même entier). 22/7 est un quotient d’entiers : rationnel (c’est seulement une valeur approchée de π). √49 = 7 : entier. En revanche √3 est irrationnel et ajouter un rationnel (1) à un irrationnel donne un irrationnel : √3 + 1 est irrationnel.",
      },
      {
        id: "2nde-maths-01-ct-2",
        prompt: "Que vaut (2³ × 4²) / 8² ?",
        choices: ["1/2", "2", "4", "8"],
        answer: 1,
        explanation:
          "On écrit tout en puissances de 2 : 4² = (2²)² = 2⁴ et 8² = (2³)² = 2⁶. Le numérateur vaut 2³ × 2⁴ = 2⁷. Le quotient vaut 2⁷ / 2⁶ = 2¹ = 2. Vérification : (8 × 16)/64 = 128/64 = 2.",
      },
      {
        id: "2nde-maths-01-ct-3",
        prompt: "Que vaut √12 + √27 ?",
        choices: ["5√3", "√39", "6√3", "13"],
        answer: 0,
        explanation:
          "On ne peut pas additionner sous le radical (√12 + √27 ≠ √39). On simplifie chaque racine : √12 = √(4 × 3) = 2√3 et √27 = √(9 × 3) = 3√3. On additionne alors comme des termes semblables : 2√3 + 3√3 = 5√3.",
      },
      {
        id: "2nde-maths-01-ct-4",
        prompt: "On donne I = [−3 ; 4] et J = ]1 ; 7[. Que vaut I ∩ J ?",
        choices: ["[−3 ; 7[", "[1 ; 4]", "]1 ; 4[", "]1 ; 4]"],
        answer: 3,
        explanation:
          "I ∩ J contient les réels qui sont **dans les deux** intervalles. Ils doivent être > 1 (borne exclue de J) et ≤ 4 (borne incluse de I, et 4 < 7 est bien dans J). Donc I ∩ J = ]1 ; 4]. [−3 ; 7[ serait la réunion I ∪ J.",
      },
      {
        id: "2nde-maths-01-ct-5",
        prompt: "L’ensemble des réels x tels que |x − 2| ≤ 3 est :",
        choices: ["[−5 ; 1]", "[−3 ; 3]", "[−1 ; 5]", "]−∞ ; 5]"],
        answer: 2,
        explanation:
          "|x − 2| est la distance entre x et 2. Elle est au plus 3 lorsque 2 − 3 ≤ x ≤ 2 + 3, soit −1 ≤ x ≤ 5. Donc x ∈ [−1 ; 5] (bornes incluses car l’inégalité est large). Vérification : |−1 − 2| = 3 et |5 − 2| = 3.",
      },
      {
        id: "2nde-maths-01-ct-6",
        prompt: "Quelle est l’écriture de 1/(√3 − 1) sans racine au dénominateur ?",
        choices: ["(√3 + 1)/2", "√3 + 1", "(√3 − 1)/2", "(√3 + 1)/4"],
        answer: 0,
        explanation:
          "On multiplie numérateur et dénominateur par la **quantité conjuguée** √3 + 1 : 1/(√3 − 1) = (√3 + 1)/[(√3 − 1)(√3 + 1)]. Au dénominateur, identité (a − b)(a + b) = a² − b² : (√3)² − 1² = 3 − 1 = 2. Résultat : (√3 + 1)/2.",
      },
      {
        id: "2nde-maths-01-ct-7",
        prompt: "Quelle est l’écriture scientifique de 0,00042 × 5 000 ?",
        choices: ["2,1 × 10⁻¹", "21 × 10⁻¹", "2,1 × 10⁰", "2,1 × 10¹"],
        answer: 2,
        explanation:
          "0,00042 = 4,2 × 10⁻⁴ et 5 000 = 5 × 10³. Produit : (4,2 × 5) × 10⁻⁴⁺³ = 21 × 10⁻¹ = 2,1. Mais 21 × 10⁻¹ n’est pas une écriture scientifique (21 n’est pas entre 1 et 10). On écrit 21 = 2,1 × 10¹, d’où 2,1 × 10¹ × 10⁻¹ = 2,1 × 10⁰.",
      },
      {
        id: "2nde-maths-01-ct-8",
        prompt: "Pour x = −5, que vaut √(x²) ?",
        choices: ["25", "n’existe pas", "−5", "5"],
        answer: 3,
        explanation:
          "x² = (−5)² = 25, qui est positif : la racine existe. √25 = 5, car une racine carrée est toujours **positive**. Plus généralement √(x²) = |x|, et |−5| = 5. Répondre −5 est le piège classique (on « simplifie » à tort √(x²) en x).",
      },
    ],
    homework: [
      {
        id: "2nde-maths-01-hw-1",
        prompt: "Que vaut A = (2⁴ × 2⁻¹) / 2⁵ ?",
        choices: ["4", "1/4", "2⁻¹⁰", "1/2"],
        answer: 1,
        explanation: "Au numérateur : 2⁴ × 2⁻¹ = 2⁴⁻¹ = 2³. Puis A = 2³ / 2⁵ = 2³⁻⁵ = 2⁻². Enfin 2⁻² = 1/2² = 1/4. Vérification numérique : (16 × 0,5)/32 = 8/32 = 1/4. ✓",
      },
      {
        id: "2nde-maths-01-hw-2",
        prompt: "Quelle est l’écriture simplifiée de √12 + √27 ?",
        choices: ["√39", "6√3", "5√3", "13√3"],
        answer: 2,
        explanation: "On simplifie chaque racine : √12 = √(4 × 3) = 2√3 et √27 = √(9 × 3) = 3√3. On additionne ensuite comme des termes semblables : 2√3 + 3√3 = 5√3. Le piège √39 vient de l’erreur √a + √b = √(a + b), qui est fausse.",
      },
      {
        id: "2nde-maths-01-hw-3",
        prompt: "On donne I = ]−∞ ; 2] et J = [−1 ; 5[. Que vaut I ∪ J ?",
        choices: ["[−1 ; 2]", "]−∞ ; 5[", "]−∞ ; 5]", "ℝ"],
        answer: 1,
        explanation: "I ∪ J contient les réels qui sont dans I **ou** dans J. I couvre tout ce qui est à gauche de 2 (inclus) et J prolonge jusqu’à 5 exclu. La réunion va donc de −∞ jusqu’à 5, borne exclue car 5 ∉ J et 5 ∉ I : I ∪ J = ]−∞ ; 5[. L’intervalle [−1 ; 2] est l’intersection I ∩ J.",
      },
      {
        id: "2nde-maths-01-hw-4",
        prompt: "Parmi ces nombres, lequel est décimal mais pas entier ?",
        choices: ["√2", "1/6", "12/3", "9/4"],
        answer: 3,
        explanation: "9/4 = 2,25 : l’écriture décimale est finie, donc 9/4 ∈ 𝔻, et ce n’est pas un entier. Les autres ne conviennent pas : √2 est irrationnel ; 1/6 = 0,1666… a une écriture illimitée (rationnel non décimal) ; 12/3 = 4 est un entier.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 2 ─────────────────────────────
  {
    id: "2nde-maths-02",
    title: "Calcul littéral",
    summary:
      "Transformer des expressions algébriques : développer, factoriser avec un facteur commun ou les identités remarquables, et calculer avec des fractions.",
    objectives: [
      "Je sais développer et réduire une expression avec la simple et la double distributivité.",
      "Je connais les trois identités remarquables et je sais les utiliser dans les deux sens.",
      "Je sais factoriser une expression à l’aide d’un facteur commun.",
      "Je sais additionner, multiplier et diviser des fractions, y compris avec des expressions en x.",
    ],
    sections: [
      {
        title: "Développer et réduire",
        body: [
          "**Développer** une expression, c’est transformer un produit en somme. On utilise la **distributivité** : k(a + b) = ka + kb. Par exemple −3(2x − 4) = −6x + 12 : il faut multiplier **chaque** terme de la parenthèse par −3, en respectant la règle des signes.",
          "Pour un produit de deux sommes, on utilise la **double distributivité** : chaque terme de la première parenthèse multiplie chaque terme de la seconde, soit (a + b)(c + d) = ac + ad + bc + bd. On **réduit** ensuite en regroupant les termes de même nature (les x² ensemble, les x ensemble, les constantes ensemble).",
          "Un signe « − » devant une parenthèse change le signe de **tous** les termes qu’elle contient : −(3x − 5) = −3x + 5. Lorsqu’on soustrait un produit, il est prudent de le développer d’abord entre crochets : 4x − (x + 2)(x − 1) = 4x − [x² + x − 2] = −x² + 3x + 2.",
          "**Réduire** une expression, c’est l’écrire avec le moins de termes possible ; **ordonner**, c’est ranger les termes par puissances décroissantes de x. Le résultat d’un développement s’écrit en général sous la forme ax² + bx + c. On peut toujours contrôler un développement en remplaçant x par une valeur simple dans les deux expressions.",
        ],
        keyPoints: [
          "Développer = transformer un produit en somme.",
          "Chaque terme d’une parenthèse multiplie chaque terme de l’autre.",
          "Un « − » devant une parenthèse change tous les signes à l’intérieur.",
          "On vérifie un calcul en testant une valeur de x (par exemple x = 1).",
        ],
        formulas: ["k(a + b) = ka + kb", "(a + b)(c + d) = ac + ad + bc + bd"],
        example: {
          title: "Développer et réduire A = (2x − 3)(x + 4) − 2(x − 1)",
          steps: [
            "Double distributivité : (2x − 3)(x + 4) = 2x × x + 2x × 4 − 3 × x − 3 × 4 = 2x² + 8x − 3x − 12.",
            "On réduit : (2x − 3)(x + 4) = 2x² + 5x − 12.",
            "Simple distributivité : −2(x − 1) = −2x + 2.",
            "A = 2x² + 5x − 12 − 2x + 2 = 2x² + 3x − 10.",
            "Vérification avec x = 1 : forme initiale (−1) × 5 − 2 × 0 = −5 ; forme développée 2 + 3 − 10 = −5. ✓",
          ],
        },
        figure: {
          type: "table",
          title: "Double distributivité : (2x − 3)(x + 4)",
          caption: "Chaque terme de la première parenthèse multiplie chaque terme de la seconde : 2x² + 8x − 3x − 12 = 2x² + 5x − 12.",
          headers: ["×", "x", "+4"],
          rows: [
            ["2x", "2x²", "+8x"],
            ["−3", "−3x", "−12"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-02-s1-p1",
            prompt: "Quel est le développement de −4(3x − 2) ?",
            choices: ["−12x − 8", "−12x + 8", "12x − 8", "−12x + 2"],
            answer: 1,
            explanation: "On multiplie **chaque** terme de la parenthèse par −4 : −4 × 3x = −12x et −4 × (−2) = +8 (moins par moins donne plus). Donc −4(3x − 2) = −12x + 8. Vérification avec x = 1 : −4 × 1 = −4 et −12 + 8 = −4. ✓",
          },
          {
            id: "2nde-maths-02-s1-p2",
            prompt: "Quel est le développement réduit de (x + 3)(x − 5) ?",
            choices: ["x² − 15", "x² + 2x − 15", "x² − 2x − 15", "x² − 8x − 15"],
            answer: 2,
            explanation: "Double distributivité : (x + 3)(x − 5) = x × x + x × (−5) + 3 × x + 3 × (−5) = x² − 5x + 3x − 15. On réduit les termes en x : −5x + 3x = −2x. Résultat : x² − 2x − 15. Vérification avec x = 1 : 4 × (−4) = −16 et 1 − 2 − 15 = −16. ✓",
          },
          {
            id: "2nde-maths-02-s1-p3",
            prompt: "Quelle est la forme réduite de 5x − (2x − 7) ?",
            choices: ["3x + 7", "3x − 7", "7x − 7", "7x + 7"],
            answer: 0,
            explanation: "Le signe « − » devant la parenthèse change le signe de **tous** les termes qu’elle contient : −(2x − 7) = −2x + 7. Donc 5x − (2x − 7) = 5x − 2x + 7 = 3x + 7. L’erreur fréquente 3x − 7 vient d’un oubli de changement de signe sur le −7.",
          },
        ],
      },
      {
        title: "Identités remarquables et factorisation",
        body: [
          "Trois produits reviennent si souvent qu’on les appelle **identités remarquables** (voir l’encadré). Elles permettent de développer rapidement : (x + 5)² = x² + 10x + 25. L’erreur classique est d’écrire (a + b)² = a² + b² : on oublie le **double produit** 2ab.",
          "**Factoriser**, c’est l’inverse de développer : transformer une somme en produit. La première méthode consiste à repérer un **facteur commun** à tous les termes : ka + kb = k(a + b). Le facteur commun peut être un nombre, une lettre ou une expression entière : 3x(x − 1) + 5(x − 1) = (x − 1)(3x + 5).",
          "La seconde méthode utilise les identités remarquables « à l’envers ». Une **différence de deux carrés** a² − b² se factorise en (a − b)(a + b) : x² − 49 = (x − 7)(x + 7). Une expression de la forme a² + 2ab + b² (ou a² − 2ab + b²) se factorise en (a + b)² (ou (a − b)²) : x² − 6x + 9 = (x − 3)².",
          "La forme factorisée est indispensable pour **résoudre des équations** (produit nul) et étudier un **signe** ; la forme développée est pratique pour calculer des images ou comparer des expressions. Savoir passer de l’une à l’autre est une compétence centrale de la Seconde.",
        ],
        keyPoints: [
          "Factoriser = transformer une somme en produit.",
          "Toujours chercher d’abord un facteur commun.",
          "a² − b² = (a − b)(a + b) : différence de deux carrés.",
          "(a + b)² ≠ a² + b² : ne pas oublier le double produit 2ab.",
        ],
        formulas: [
          "(a + b)² = a² + 2ab + b²",
          "(a − b)² = a² − 2ab + b²",
          "(a + b)(a − b) = a² − b²",
          "ka + kb = k(a + b)",
        ],
        example: {
          title: "Factoriser B = (x + 3)² − 4x²",
          steps: [
            "On reconnaît une différence de deux carrés a² − b² avec a = x + 3 et b = 2x (car 4x² = (2x)²).",
            "B = (a − b)(a + b) = [(x + 3) − 2x][(x + 3) + 2x].",
            "On réduit dans chaque crochet : B = (3 − x)(3x + 3).",
            "On peut encore factoriser 3 dans le second facteur : B = 3(3 − x)(x + 1).",
            "Vérification avec x = 0 : (0 + 3)² − 0 = 9 et 3 × 3 × 1 = 9. ✓",
          ],
        },
        figure: {
          type: "table",
          title: "Les trois identités remarquables",
          caption: "Lues de gauche à droite, elles développent ; lues de droite à gauche, elles factorisent.",
          headers: ["Forme factorisée", "Forme développée", "Exemple"],
          rows: [
            ["(a + b)²", "a² + 2ab + b²", "(x + 5)² = x² + 10x + 25"],
            ["(a − b)²", "a² − 2ab + b²", "(x − 3)² = x² − 6x + 9"],
            ["(a + b)(a − b)", "a² − b²", "(x + 7)(x − 7) = x² − 49"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-02-s2-p1",
            prompt: "Quel est le développement de (2x + 3)² ?",
            choices: ["4x² + 9", "2x² + 12x + 9", "4x² + 6x + 9", "4x² + 12x + 9"],
            answer: 3,
            explanation: "On applique (a + b)² = a² + 2ab + b² avec a = 2x et b = 3. a² = (2x)² = 4x², 2ab = 2 × 2x × 3 = 12x et b² = 9. Donc (2x + 3)² = 4x² + 12x + 9. Le piège 4x² + 9 oublie le double produit.",
          },
          {
            id: "2nde-maths-02-s2-p2",
            prompt: "Quelle est la forme factorisée de x² − 25 ?",
            choices: ["(x − 5)²", "(x − 5)(x + 5)", "(x − 25)(x + 25)", "x(x − 25)"],
            answer: 1,
            explanation: "x² − 25 = x² − 5² est une **différence de deux carrés** a² − b² avec a = x et b = 5. Elle se factorise en (a − b)(a + b) = (x − 5)(x + 5). Vérification : (x − 5)(x + 5) = x² + 5x − 5x − 25 = x² − 25. ✓",
          },
          {
            id: "2nde-maths-02-s2-p3",
            prompt: "Quelle est la forme factorisée de 4x(x + 2) − 3(x + 2) ?",
            choices: ["(x + 2)(4x − 3)", "(x + 2)(4x + 3)", "4x − 3(x + 2)", "(x + 2)²(4x − 3)"],
            answer: 0,
            explanation: "Le **facteur commun** aux deux termes est l’expression (x + 2). On l’écrit en facteur et on recopie ce qui reste : 4x(x + 2) − 3(x + 2) = (x + 2)(4x − 3). Attention au signe : c’est bien « − 3 » qui reste dans la seconde parenthèse.",
          },
        ],
      },
      {
        title: "Calcul fractionnaire et expressions rationnelles",
        body: [
          "Pour **additionner** ou **soustraire** deux fractions, elles doivent avoir le même dénominateur : a/b + c/b = (a + c)/b. Sinon, on les réduit au même dénominateur, de préférence le plus petit multiple commun : 5/6 − 3/4 = 10/12 − 9/12 = 1/12.",
          "Pour **multiplier** deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux : (a/b) × (c/d) = ac/(bd). **Diviser** par une fraction non nulle revient à multiplier par son **inverse** : (a/b) ÷ (c/d) = (a/b) × (d/c). On simplifie dès que possible en repérant les facteurs communs.",
          "Les mêmes règles s’appliquent aux **expressions rationnelles** (quotients d’expressions contenant x), à condition que les dénominateurs ne s’annulent pas : on précise donc les **valeurs interdites**. Par exemple, pour x ≠ 0 et x ≠ 1 : 2/x − 1/(x − 1) = [2(x − 1) − x] / [x(x − 1)] = (x − 2) / [x(x − 1)].",
          "Piège fréquent : on ne simplifie que des **facteurs**, jamais des termes. (x + 3)/3 n’est pas égal à x : seul (3x)/3 se simplifie en x. De même (2x + 4)/2 = 2(x + 2)/2 = x + 2, mais seulement après avoir factorisé le numérateur.",
        ],
        keyPoints: [
          "Addition : même dénominateur obligatoire.",
          "Division : on multiplie par l’inverse.",
          "On indique les valeurs interdites (dénominateur nul).",
          "On ne simplifie que des facteurs communs, jamais des termes.",
        ],
        formulas: [
          "a/b + c/d = (ad + bc)/(bd)",
          "(a/b) × (c/d) = (ac)/(bd)",
          "(a/b) ÷ (c/d) = (a/b) × (d/c) (c ≠ 0)",
        ],
        example: {
          title: "Calculer C = (2/3 − 1/4) ÷ 5/6",
          steps: [
            "Priorité aux parenthèses : dénominateur commun 12, 2/3 − 1/4 = 8/12 − 3/12 = 5/12.",
            "Diviser par 5/6, c’est multiplier par son inverse 6/5 : C = 5/12 × 6/5.",
            "On simplifie avant de multiplier : le 5 se simplifie, et 6/12 = 1/2.",
            "C = 1/2.",
          ],
        },
        figure: {
          type: "flow",
          title: "Additionner deux fractions",
          caption: "Exemple : 5/6 − 3/4 = 10/12 − 9/12 = 1/12.",
          steps: [
            {
              label: "Dénominateur commun",
              detail: "de préférence le plus petit multiple commun",
            },
            {
              label: "Transformer chaque fraction",
              detail: "multiplier numérateur et dénominateur par le même nombre",
            },
            {
              label: "Additionner les numérateurs",
              detail: "on garde le dénominateur commun",
            },
            { label: "Simplifier", detail: "diviser par un facteur commun" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-02-s3-p1",
            prompt: "Que vaut 3/4 + 5/6 ?",
            choices: ["8/10", "15/24", "19/12", "19/24"],
            answer: 2,
            explanation: "Le plus petit multiple commun de 4 et 6 est 12. On écrit 3/4 = 9/12 et 5/6 = 10/12. Donc 3/4 + 5/6 = 9/12 + 10/12 = 19/12. Le piège 8/10 additionne numérateurs et dénominateurs entre eux, ce qui est faux.",
          },
          {
            id: "2nde-maths-02-s3-p2",
            prompt: "Que vaut (2/3) ÷ (4/9) ?",
            choices: ["8/27", "2/3", "6/7", "3/2"],
            answer: 3,
            explanation: "Diviser par 4/9 revient à multiplier par son **inverse** 9/4 : (2/3) × (9/4) = 18/12. On simplifie par 6 : 18/12 = 3/2. Le piège 8/27 correspond au produit (2/3) × (4/9), et non au quotient.",
          },
          {
            id: "2nde-maths-02-s3-p3",
            prompt: "Quelle simplification est correcte ?",
            choices: ["(x + 5)/5 = x", "(6x)/3 = 2x", "(x + 4)/(x + 2) = 2", "(3x + 1)/3 = x + 1"],
            answer: 1,
            explanation: "On ne simplifie que des **facteurs** : 6x/3 = (3 × 2x)/3 = 2x est correct. Dans (x + 5)/5, (x + 4)/(x + 2) et (3x + 1)/3, le numérateur est une somme : on ne peut pas « barrer » un terme. Par exemple pour x = 1, (3 × 1 + 1)/3 = 4/3, alors que x + 1 = 2.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-maths-02-ex-1",
        prompt: "La forme développée de 3(2x − 5) est :",
        choices: ["6x − 5", "6x − 15", "5x − 15", "6x + 15"],
        answer: 1,
        explanation:
          "On distribue 3 sur **chaque** terme : 3 × 2x = 6x et 3 × (−5) = −15. Donc 3(2x − 5) = 6x − 15. L’erreur « 6x − 5 » vient d’un oubli de multiplier le second terme.",
      },
      {
        id: "2nde-maths-02-ex-2",
        prompt: "La forme développée de (x + 4)² est :",
        choices: ["x² + 16", "x² + 4x + 16", "x² + 8x + 16", "2x + 8"],
        answer: 2,
        explanation:
          "Identité (a + b)² = a² + 2ab + b² avec a = x et b = 4 : x² + 2 × x × 4 + 4² = x² + 8x + 16. « x² + 16 » oublie le double produit ; vérification avec x = 1 : (1 + 4)² = 25 et 1 + 8 + 16 = 25.",
      },
      {
        id: "2nde-maths-02-ex-3",
        prompt: "Une forme factorisée de x² − 9 est :",
        choices: ["(x − 9)(x + 1)", "(x − 3)²", "(x + 3)²", "(x − 3)(x + 3)"],
        answer: 3,
        explanation:
          "x² − 9 = x² − 3² est une différence de deux carrés : a² − b² = (a − b)(a + b) avec a = x, b = 3. Donc x² − 9 = (x − 3)(x + 3). Vérification : (x − 3)(x + 3) = x² + 3x − 3x − 9 = x² − 9.",
      },
      {
        id: "2nde-maths-02-ex-4",
        prompt: "La forme développée et réduite de (2x + 1)(x − 3) est :",
        choices: ["2x² − 5x − 3", "2x² − 6x − 3", "2x² + 5x − 3", "2x² − 7x − 3"],
        answer: 0,
        explanation:
          "Double distributivité : 2x × x = 2x² ; 2x × (−3) = −6x ; 1 × x = x ; 1 × (−3) = −3. On réduit : 2x² − 6x + x − 3 = 2x² − 5x − 3. Vérification avec x = 1 : (3)(−2) = −6 et 2 − 5 − 3 = −6.",
      },
      {
        id: "2nde-maths-02-ex-5",
        prompt: "Que vaut 2/3 + 1/4 ?",
        choices: ["3/7", "11/12", "3/12", "2/12"],
        answer: 1,
        explanation:
          "On ne peut pas additionner numérateurs et dénominateurs (3/7 est faux). Dénominateur commun 12 : 2/3 = 8/12 et 1/4 = 3/12. Donc 2/3 + 1/4 = 8/12 + 3/12 = 11/12.",
      },
      {
        id: "2nde-maths-02-ex-6",
        prompt: "Une factorisation complète de 5x² − 10x est :",
        choices: ["5(x² − 10x)", "x(5x − 2)", "5x(x − 2)", "5x(x − 10)"],
        answer: 2,
        explanation:
          "5x² = 5x × x et 10x = 5x × 2 : le facteur commun le plus grand est 5x. Donc 5x² − 10x = 5x(x − 2). Vérification : 5x × x − 5x × 2 = 5x² − 10x. « 5(x² − 10x) » est faux (cela donnerait 5x² − 50x).",
      },
    ],
    test: [
      {
        id: "2nde-maths-02-ct-1",
        prompt: "La forme développée de (3x − 2)² est :",
        choices: ["9x² − 4", "9x² − 6x + 4", "9x² + 12x + 4", "9x² − 12x + 4"],
        answer: 3,
        explanation:
          "(a − b)² = a² − 2ab + b² avec a = 3x et b = 2 : (3x)² − 2 × 3x × 2 + 2² = 9x² − 12x + 4. Attention : (3x)² = 9x² (on élève aussi le coefficient au carré) et le double produit vaut 2 × 3x × 2 = 12x, pas 6x.",
      },
      {
        id: "2nde-maths-02-ct-2",
        prompt: "Une forme factorisée de (x + 1)(2x − 3) − (x + 1)(x + 4) est :",
        choices: ["(x + 1)(x − 7)", "(x + 1)(3x + 1)", "(x + 1)(x + 1)", "(x + 1)(x − 1)"],
        answer: 0,
        explanation:
          "Facteur commun (x + 1) : (x + 1)[(2x − 3) − (x + 4)]. Le « − » devant la seconde parenthèse change ses signes : 2x − 3 − x − 4 = x − 7. Résultat : (x + 1)(x − 7). Oublier de changer les signes donnerait x + 1, d’où le piège (x + 1)(x + 1).",
      },
      {
        id: "2nde-maths-02-ct-3",
        prompt: "Une forme factorisée de 4x² − 25 est :",
        choices: ["(4x − 5)(4x + 5)", "(2x − 5)(2x + 5)", "(2x − 5)²", "4(x − 5)(x + 5)"],
        answer: 1,
        explanation:
          "4x² = (2x)² et 25 = 5² : c’est une différence de deux carrés a² − b² avec a = 2x, b = 5. Donc 4x² − 25 = (2x − 5)(2x + 5). Le piège 4(x − 5)(x + 5) se développe en 4x² − 100, et (4x − 5)(4x + 5) en 16x² − 25.",
      },
      {
        id: "2nde-maths-02-ct-4",
        prompt: "Une forme factorisée de x² − 6x + 9 est :",
        choices: ["(x + 3)²", "(x − 3)(x + 3)", "(x − 3)²", "(x − 9)(x + 1)"],
        answer: 2,
        explanation:
          "On reconnaît a² − 2ab + b² avec a = x et b = 3 : x² − 2 × x × 3 + 3² = x² − 6x + 9. Donc x² − 6x + 9 = (x − 3)². (x + 3)² donnerait + 6x, et (x − 3)(x + 3) donnerait x² − 9.",
      },
      {
        id: "2nde-maths-02-ct-5",
        prompt: "Une forme factorisée de (x − 1)² − 16 est :",
        choices: ["(x − 17)(x + 15)", "(x − 5)(x + 3)", "(x + 5)(x − 3)", "(x − 5)(x − 3)"],
        answer: 1,
        explanation:
          "C’est a² − b² avec a = x − 1 et b = 4 (16 = 4²). Donc (a − b)(a + b) = (x − 1 − 4)(x − 1 + 4) = (x − 5)(x + 3). Vérification avec x = 0 : (−1)² − 16 = −15 et (−5)(3) = −15. ✓",
      },
      {
        id: "2nde-maths-02-ct-6",
        prompt: "Pour x ≠ 0 et x ≠ −1, 1/x + 2/(x + 1) est égal à :",
        choices: ["3/(2x + 1)", "(3x + 2)/(x(x + 1))", "3/(x(x + 1))", "(3x + 1)/(x(x + 1))"],
        answer: 3,
        explanation:
          "Dénominateur commun x(x + 1) : 1/x = (x + 1)/[x(x + 1)] et 2/(x + 1) = 2x/[x(x + 1)]. Somme : (x + 1 + 2x)/[x(x + 1)] = (3x + 1)/[x(x + 1)]. Vérification avec x = 1 : 1 + 2/2 = 2 et (3 + 1)/(1 × 2) = 2. ✓",
      },
      {
        id: "2nde-maths-02-ct-7",
        prompt: "La forme développée de −(2x − 3)² est :",
        choices: ["−4x² + 12x − 9", "−4x² − 12x − 9", "4x² − 12x + 9", "−4x² − 12x + 9"],
        answer: 0,
        explanation:
          "On développe d’abord le carré **entre crochets** : (2x − 3)² = 4x² − 12x + 9. Le signe « − » devant change ensuite tous les signes : −[4x² − 12x + 9] = −4x² + 12x − 9. Vérification avec x = 0 : −(−3)² = −9. ✓",
      },
      {
        id: "2nde-maths-02-ct-8",
        prompt: "En utilisant une identité remarquable, combien vaut 99 × 101 ?",
        choices: ["10 001", "9 801", "9 999", "10 199"],
        answer: 2,
        explanation:
          "99 × 101 = (100 − 1)(100 + 1) = 100² − 1² = 10 000 − 1 = 9 999, grâce à (a − b)(a + b) = a² − b². 9 801 est 99², et 10 001 serait 100² + 1.",
      },
    ],
    homework: [
      {
        id: "2nde-maths-02-hw-1",
        prompt: "Quelle est la forme développée réduite de (x − 2)² − (x + 1)(x − 1) ?",
        choices: ["−4x + 3", "−4x + 5", "2x² − 4x + 3", "−4x + 4"],
        answer: 1,
        explanation: "(x − 2)² = x² − 4x + 4 et (x + 1)(x − 1) = x² − 1. On soustrait entre crochets : x² − 4x + 4 − [x² − 1] = x² − 4x + 4 − x² + 1 = −4x + 5. Vérification avec x = 0 : (−2)² − (1)(−1) = 4 + 1 = 5 et −4 × 0 + 5 = 5. ✓",
      },
      {
        id: "2nde-maths-02-hw-2",
        prompt: "Quelle est la forme factorisée de 9x² − 12x + 4 ?",
        choices: ["(9x − 2)²", "(3x + 2)²", "(3x − 4)(3x + 1)", "(3x − 2)²"],
        answer: 3,
        explanation: "On reconnaît a² − 2ab + b² avec a² = 9x² (a = 3x) et b² = 4 (b = 2) ; le double produit vaut bien 2 × 3x × 2 = 12x. Donc 9x² − 12x + 4 = (3x − 2)². Vérification : (3x − 2)² = 9x² − 12x + 4. ✓ (3x + 2)² donnerait +12x.",
      },
      {
        id: "2nde-maths-02-hw-3",
        prompt: "Quelle est la forme factorisée de (x + 1)² − 16 ?",
        choices: ["(x − 4)(x + 4)", "(x − 3)(x − 5)", "(x − 3)(x + 5)", "(x − 15)(x + 17)"],
        answer: 2,
        explanation: "C’est une différence de deux carrés a² − b² avec a = x + 1 et b = 4. Donc (x + 1)² − 16 = [(x + 1) − 4][(x + 1) + 4] = (x − 3)(x + 5). Vérification avec x = 0 : 1 − 16 = −15 et (−3) × 5 = −15. ✓",
      },
      {
        id: "2nde-maths-02-hw-4",
        prompt: "Pour x ≠ 0 et x ≠ −1, à quoi est égal 1/x + 1/(x + 1) ?",
        choices: ["2/(2x + 1)", "(2x + 1)/(x(x + 1))", "1/(x(x + 1))", "2/(x(x + 1))"],
        answer: 1,
        explanation: "Le dénominateur commun est x(x + 1). On écrit 1/x = (x + 1)/(x(x + 1)) et 1/(x + 1) = x/(x(x + 1)). En additionnant les numérateurs : (x + 1 + x)/(x(x + 1)) = (2x + 1)/(x(x + 1)). Vérification avec x = 1 : 1 + 1/2 = 3/2 et 3/(1 × 2) = 3/2. ✓",
      },
    ],
  },

  // ───────────────────────────── Chapitre 3 ─────────────────────────────
  {
    id: "2nde-maths-03",
    title: "Équations et inéquations",
    summary:
      "Résoudre des équations du premier degré, des équations produit nul et des inéquations, à l’aide de tableaux de signes.",
    objectives: [
      "Je sais résoudre une équation du premier degré et mettre un problème en équation.",
      "Je sais résoudre une équation produit nul après avoir factorisé.",
      "Je sais résoudre une inéquation du premier degré en changeant le sens quand je multiplie par un négatif.",
      "Je sais dresser un tableau de signes d’un produit ou d’un quotient et en déduire les solutions d’une inéquation.",
    ],
    sections: [
      {
        title: "Équations du premier degré",
        body: [
          "Une **équation** d’inconnue x est une égalité qui n’est vraie que pour certaines valeurs de x, appelées **solutions**. **Résoudre** l’équation, c’est trouver toutes ses solutions ; on note S leur ensemble. Deux équations sont **équivalentes** si elles ont exactement les mêmes solutions.",
          "On obtient une équation équivalente en **ajoutant ou soustrayant** un même nombre (ou une même expression) aux deux membres, ou en **multipliant ou divisant** les deux membres par un même nombre **non nul**. Le but est d’isoler x : on regroupe les termes en x d’un côté et les constantes de l’autre.",
          "Toute équation qui se ramène à ax + b = 0 avec a ≠ 0 est dite du **premier degré** : elle a une unique solution x = −b/a. Si les x disparaissent (a = 0), soit l’égalité obtenue est toujours vraie (S = ℝ), soit elle est toujours fausse (S = ∅).",
          "Pour **mettre un problème en équation**, on choisit l’inconnue en précisant ce qu’elle représente, on traduit l’énoncé par une équation, on la résout, puis on **vérifie** le résultat et on conclut par une phrase qui répond à la question posée.",
        ],
        keyPoints: [
          "On peut ajouter/soustraire la même quantité aux deux membres.",
          "On peut multiplier/diviser les deux membres par un nombre non nul.",
          "ax + b = 0 avec a ≠ 0 a pour unique solution x = −b/a.",
          "On vérifie toujours la solution dans l’équation de départ.",
        ],
        formulas: ["ax + b = 0 (a ≠ 0) ⇔ x = −b/a"],
        example: {
          title: "Résoudre 3(x − 2) + 4 = 5x − 8",
          steps: [
            "On développe : 3x − 6 + 4 = 5x − 8, soit 3x − 2 = 5x − 8.",
            "On soustrait 5x aux deux membres : −2x − 2 = −8.",
            "On ajoute 2 aux deux membres : −2x = −6.",
            "On divise par −2 (non nul) : x = 3.",
            "Vérification : 3 × (3 − 2) + 4 = 7 et 5 × 3 − 8 = 7. ✓ Donc S = {3}.",
          ],
        },
        figure: {
          type: "flow",
          title: "Résoudre une équation du premier degré",
          caption: "Exemple : 3(x − 2) + 4 = 5x − 8 ⇔ 3x − 2 = 5x − 8 ⇔ −2x = −6 ⇔ x = 3.",
          steps: [
            { label: "Développer et réduire", detail: "chaque membre séparément" },
            { label: "Regrouper", detail: "les x d’un côté, les constantes de l’autre" },
            { label: "Diviser", detail: "par le coefficient de x (non nul)" },
            { label: "Vérifier et conclure", detail: "S = {…}" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-03-s1-p1",
            prompt: "Quelle est la solution de l’équation 5x − 7 = 2x + 8 ?",
            choices: ["x = 1/3", "x = 5", "x = 15", "x = −5"],
            answer: 1,
            explanation: "On soustrait 2x aux deux membres : 3x − 7 = 8. On ajoute 7 : 3x = 15. On divise par 3 (non nul) : x = 5. Vérification : 5 × 5 − 7 = 18 et 2 × 5 + 8 = 18. ✓ Donc S = {5}.",
          },
          {
            id: "2nde-maths-03-s1-p2",
            prompt: "Quel est l’ensemble des solutions de 2(x + 3) = 2x + 6 ?",
            choices: ["S = {0}", "S = ∅", "S = ℝ", "S = {3}"],
            answer: 2,
            explanation: "On développe : 2x + 6 = 2x + 6. En soustrayant 2x, on obtient 6 = 6, égalité **toujours vraie** : les x ont disparu et tout réel est solution. Donc S = ℝ. Si l’on avait obtenu une égalité toujours fausse (comme 6 = 5), on aurait S = ∅.",
          },
          {
            id: "2nde-maths-03-s1-p3",
            prompt: "La somme de trois entiers consécutifs vaut 81. Quel est le plus petit de ces entiers ?",
            choices: ["26", "27", "28", "25"],
            answer: 0,
            explanation: "On appelle n le plus petit entier ; les deux suivants sont n + 1 et n + 2. L’équation s’écrit n + (n + 1) + (n + 2) = 81, soit 3n + 3 = 81, donc 3n = 78 et n = 26. Vérification : 26 + 27 + 28 = 81. ✓",
          },
        ],
      },
      {
        title: "Équation produit nul et équations quotient",
        body: [
          "**Propriété du produit nul** : un produit de facteurs est nul si et seulement si l’un au moins de ses facteurs est nul. Ainsi A × B = 0 ⇔ A = 0 ou B = 0. Cette propriété permet de résoudre des équations de degré 2 ou plus, à condition d’avoir une **forme factorisée égale à 0**.",
          "Méthode : on fait tout passer dans un seul membre pour obtenir « … = 0 », on **factorise** (facteur commun ou identité remarquable), puis on applique la propriété. Erreur grave : diviser les deux membres par une expression contenant x, car on peut perdre une solution. Pour x² = 5x, diviser par x donne seulement x = 5, alors que x² − 5x = x(x − 5) = 0 donne S = {0 ; 5}.",
          "Équations du type x² = a : si a > 0, il y a deux solutions √a et −√a ; si a = 0, une seule solution, 0 ; si a < 0, aucune solution réelle, car un carré est toujours positif ou nul.",
          "**Équation quotient** : un quotient A/B est nul si et seulement si A = 0 **et** B ≠ 0. On commence donc par chercher les **valeurs interdites** (celles qui annulent le dénominateur), puis on résout A = 0 et on élimine les éventuelles valeurs interdites.",
        ],
        keyPoints: [
          "On se ramène toujours à « produit = 0 ».",
          "Ne jamais diviser par une expression qui contient x.",
          "x² = a : deux solutions si a > 0, une si a = 0, aucune si a < 0.",
          "Quotient nul : numérateur nul et dénominateur non nul.",
        ],
        formulas: [
          "A × B = 0 ⇔ A = 0 ou B = 0",
          "A / B = 0 ⇔ A = 0 et B ≠ 0",
          "x² = a (a > 0) ⇔ x = √a ou x = −√a",
        ],
        example: {
          title: "Résoudre (x + 1)(2x − 6) = (x + 1)(x − 1)",
          steps: [
            "On ne divise surtout pas par (x + 1) ! On passe tout à gauche : (x + 1)(2x − 6) − (x + 1)(x − 1) = 0.",
            "Facteur commun (x + 1) : (x + 1)[(2x − 6) − (x − 1)] = 0.",
            "On réduit le crochet : 2x − 6 − x + 1 = x − 5, d’où (x + 1)(x − 5) = 0.",
            "Produit nul : x + 1 = 0 ou x − 5 = 0, soit x = −1 ou x = 5.",
            "S = {−1 ; 5}. (Diviser par x + 1 aurait fait perdre la solution −1.)",
          ],
        },
        figure: {
          type: "table",
          title: "Nombre de solutions de x² = a",
          caption: "Un carré est toujours positif ou nul : x² = a n’a pas de solution réelle si a < 0.",
          headers: ["Cas", "Solutions", "Exemple"],
          rows: [
            ["a > 0", "√a et −√a", "x² = 9 : S = {−3 ; 3}"],
            ["a = 0", "0", "x² = 0 : S = {0}"],
            ["a < 0", "aucune", "x² = −4 : S = ∅"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-03-s2-p1",
            prompt: "Quel est l’ensemble des solutions de (x − 4)(3x + 6) = 0 ?",
            choices: ["S = {4 ; 2}", "S = {−4 ; 2}", "S = {4 ; −2}", "S = {4 ; −6}"],
            answer: 2,
            explanation: "Un produit est nul si et seulement si l’un de ses facteurs est nul : x − 4 = 0 ou 3x + 6 = 0. La première donne x = 4 ; la seconde 3x = −6, soit x = −2. Donc S = {4 ; −2}. Le piège −6 oublie de diviser par 3.",
          },
          {
            id: "2nde-maths-03-s2-p2",
            prompt: "Quel est l’ensemble des solutions de x² = 7x ?",
            choices: ["S = {7}", "S = {0 ; 7}", "S = {−7 ; 7}", "S = {0}"],
            answer: 1,
            explanation: "On ne divise surtout pas par x ! On passe tout dans un membre : x² − 7x = 0, puis on factorise : x(x − 7) = 0. Produit nul : x = 0 ou x = 7, donc S = {0 ; 7}. Diviser par x aurait fait perdre la solution 0.",
          },
          {
            id: "2nde-maths-03-s2-p3",
            prompt: "Quel est l’ensemble des solutions de (x − 3)/(x + 2) = 0 ?",
            choices: ["S = {−2}", "S = {−2 ; 3}", "S = ∅", "S = {3}"],
            answer: 3,
            explanation: "Valeur interdite : x + 2 = 0 ⇔ x = −2. Un quotient est nul si et seulement si son numérateur est nul et son dénominateur non nul : x − 3 = 0 donne x = 3, qui n’est pas interdite. Donc S = {3}. −2 ne peut pas être solution puisque le quotient n’y est pas défini.",
          },
        ],
      },
      {
        title: "Inéquations et tableaux de signes",
        body: [
          "Une **inéquation** se résout comme une équation, avec une règle supplémentaire capitale : multiplier ou diviser les deux membres par un nombre **négatif** **change le sens** de l’inégalité. Ainsi −3x < 12 ⇔ x > −4. Ajouter ou soustraire un nombre ne change jamais le sens. L’ensemble des solutions est en général un intervalle ou une réunion d’intervalles.",
          "**Signe de ax + b** (a ≠ 0) : l’expression s’annule pour x = −b/a. Elle est du **signe de a** à droite de cette valeur et du signe contraire à gauche. Par exemple 2x − 6 s’annule en 3, est négative avant et positive après ; −x + 4 s’annule en 4, est positive avant et négative après.",
          "Pour étudier le **signe d’un produit ou d’un quotient**, on dresse un **tableau de signes** : une ligne par facteur, avec les valeurs d’annulation rangées dans l’ordre croissant, puis une dernière ligne obtenue par la règle des signes. Dans un quotient, une valeur qui annule le dénominateur est **interdite** : on la signale par une double barre.",
          "On lit alors les solutions d’une inéquation comme A × B ≥ 0 ou A/B < 0 dans la dernière ligne. Les bornes où l’expression vaut 0 sont incluses pour ≥ ou ≤, exclues pour > ou < ; les valeurs interdites sont **toujours** exclues.",
        ],
        keyPoints: [
          "Multiplier ou diviser par un négatif inverse le sens de l’inégalité.",
          "ax + b est du signe de a à droite de −b/a.",
          "Tableau de signes : une ligne par facteur, puis règle des signes.",
          "Valeur interdite : double barre et toujours exclue.",
        ],
        formulas: [
          "Si k > 0 : a < b ⇔ ka < kb",
          "Si k < 0 : a < b ⇔ ka > kb",
          "ax + b s’annule en −b/a et a le signe de a après −b/a",
        ],
        example: {
          title: "Résoudre (x − 2)/(3 − x) ≥ 0",
          steps: [
            "Valeur interdite : 3 − x = 0 ⇔ x = 3. Le numérateur s’annule pour x = 2.",
            "Signe de x − 2 (a = 1 > 0) : négatif avant 2, positif après.",
            "Signe de 3 − x (a = −1 < 0) : positif avant 3, négatif après.",
            "Tableau du quotient : − sur ]−∞ ; 2[, 0 en 2, + sur ]2 ; 3[, double barre en 3, − sur ]3 ; +∞[.",
            "On veut ≥ 0 : 2 est inclus (le quotient y vaut 0), 3 est exclu (valeur interdite). S = [2 ; 3[.",
          ],
        },
        figure: {
          type: "table",
          title: "Tableau de signes de (x − 2)/(3 − x)",
          caption: "La double barre ‖ signale la valeur interdite 3. Le quotient est positif ou nul sur [2 ; 3[.",
          headers: ["x", "−∞", "", "2", "", "3", "", "+∞"],
          rows: [
            ["x − 2", "", "−", "0", "+", "", "+", ""],
            ["3 − x", "", "+", "", "+", "0", "−", ""],
            ["quotient", "", "−", "0", "+", "‖", "−", ""],
          ],
        },
        practice: [
          {
            id: "2nde-maths-03-s3-p1",
            prompt: "Quel est l’ensemble des solutions de −2x + 5 > 11 ?",
            choices: ["x > −3", "x < −3", "x > 3", "x < 8"],
            answer: 1,
            explanation: "On soustrait 5 aux deux membres : −2x > 6. On divise ensuite par −2, nombre **négatif** : le sens de l’inégalité **change**, d’où x < −3. Vérification avec x = −4 : −2 × (−4) + 5 = 13 > 11. ✓ Donc S = ]−∞ ; −3[.",
          },
          {
            id: "2nde-maths-03-s3-p2",
            prompt: "Sur quel intervalle l’expression −3x + 6 est-elle strictement positive ?",
            choices: ["]2 ; +∞[", "]−∞ ; −2[", "]−∞ ; 2[", "]−2 ; +∞["],
            answer: 2,
            explanation: "−3x + 6 s’annule pour x = −6/(−3) = 2. Le coefficient a = −3 est négatif : l’expression est du signe de a (négative) à droite de 2 et du signe contraire (positive) à gauche. Elle est donc strictement positive sur ]−∞ ; 2[. Vérification : pour x = 0, on obtient 6 > 0. ✓",
          },
          {
            id: "2nde-maths-03-s3-p3",
            prompt: "Quel est l’ensemble des solutions de (x + 1)(x − 4) ≤ 0 ?",
            choices: ["]−∞ ; −1] ∪ [4 ; +∞[", "]−1 ; 4[", "[−4 ; 1]", "[−1 ; 4]"],
            answer: 3,
            explanation: "Les facteurs s’annulent en −1 et en 4. Tableau de signes : x + 1 est négatif avant −1 et positif après ; x − 4 est négatif avant 4 et positif après. Le produit est donc positif sur ]−∞ ; −1[, négatif sur ]−1 ; 4[ et positif sur ]4 ; +∞[. On veut ≤ 0 : les bornes (où le produit vaut 0) sont incluses, d’où S = [−1 ; 4].",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-maths-03-ex-1",
        prompt: "La solution de l’équation 3x − 7 = 2 est :",
        choices: ["x = 5/3", "x = 3", "x = −3", "x = 9"],
        answer: 1,
        explanation:
          "On ajoute 7 aux deux membres : 3x = 9. On divise par 3 : x = 3. Vérification : 3 × 3 − 7 = 9 − 7 = 2. ✓",
      },
      {
        id: "2nde-maths-03-ex-2",
        prompt: "L’ensemble des solutions de (x − 2)(x + 5) = 0 est :",
        choices: ["S = {−2 ; 5}", "S = {2}", "S = {2 ; −5}", "S = {−10}"],
        answer: 2,
        explanation:
          "Produit nul : x − 2 = 0 ou x + 5 = 0, donc x = 2 ou x = −5. Attention aux signes : la solution de x + 5 = 0 est −5, pas 5. S = {2 ; −5}.",
      },
      {
        id: "2nde-maths-03-ex-3",
        prompt: "Les solutions de l’inéquation −2x > 6 sont les réels x tels que :",
        choices: ["x > −3", "x < 3", "x > 3", "x < −3"],
        answer: 3,
        explanation:
          "On divise les deux membres par −2, qui est **négatif** : le sens de l’inégalité change. −2x > 6 ⇔ x < 6/(−2) ⇔ x < −3. Vérification avec x = −4 : −2 × (−4) = 8 > 6. ✓",
      },
      {
        id: "2nde-maths-03-ex-4",
        prompt: "L’ensemble des solutions de x² = 16 est :",
        choices: ["S = {−4 ; 4}", "S = {4}", "S = {8}", "S = {−4}"],
        answer: 0,
        explanation:
          "16 > 0, donc l’équation x² = 16 a deux solutions : √16 = 4 et −√16 = −4. On peut aussi écrire x² − 16 = (x − 4)(x + 4) = 0. Oublier −4 est l’erreur classique : (−4)² = 16 aussi.",
      },
      {
        id: "2nde-maths-03-ex-5",
        prompt: "L’expression 2x − 4 est strictement positive lorsque :",
        choices: ["x < 2", "x > 2", "x > −2", "x > 4"],
        answer: 1,
        explanation:
          "2x − 4 > 0 ⇔ 2x > 4 ⇔ x > 2 (on divise par 2 > 0, le sens ne change pas). C’est cohérent avec la règle : 2x − 4 s’annule en 2 et est du signe de a = 2 (positif) à droite de 2.",
      },
      {
        id: "2nde-maths-03-ex-6",
        prompt: "La solution de 5x + 1 = 2x − 8 est :",
        choices: ["x = −7/3", "x = 3", "x = −3", "x = −9"],
        answer: 2,
        explanation:
          "On soustrait 2x : 3x + 1 = −8. On soustrait 1 : 3x = −9. On divise par 3 : x = −3. Vérification : 5 × (−3) + 1 = −14 et 2 × (−3) − 8 = −14. ✓",
      },
    ],
    test: [
      {
        id: "2nde-maths-03-ct-1",
        prompt: "La solution de 2(x − 3) − (x + 1) = 4 est :",
        choices: ["x = 9", "x = 3", "x = 1", "x = 11"],
        answer: 3,
        explanation:
          "On développe en faisant attention au signe « − » devant la parenthèse : 2x − 6 − x − 1 = 4, soit x − 7 = 4, donc x = 11. Vérification : 2 × 8 − 12 = 16 − 12 = 4. ✓ Le piège x = 9 vient de l’oubli du changement de signe (−x + 1).",
      },
      {
        id: "2nde-maths-03-ct-2",
        prompt: "L’ensemble des solutions de x² = 3x est :",
        choices: ["S = {3}", "S = {0 ; 3}", "S = {−3 ; 3}", "S = {0}"],
        answer: 1,
        explanation:
          "On ne divise pas par x (on perdrait la solution 0). On passe tout d’un côté : x² − 3x = 0, puis on factorise : x(x − 3) = 0. Produit nul : x = 0 ou x = 3. Vérification : 0² = 3 × 0 et 3² = 9 = 3 × 3. S = {0 ; 3}.",
      },
      {
        id: "2nde-maths-03-ct-3",
        prompt: "L’ensemble des solutions de (2x + 1)/(x − 3) = 0 est :",
        choices: ["S = {−1/2 ; 3}", "S = {3}", "S = {−1/2}", "Pas de solution"],
        answer: 2,
        explanation:
          "Valeur interdite : x − 3 = 0 ⇔ x = 3 (3 ne peut pas être solution). Un quotient est nul si son numérateur est nul : 2x + 1 = 0 ⇔ x = −1/2. Comme −1/2 ≠ 3, il est accepté. S = {−1/2}.",
      },
      {
        id: "2nde-maths-03-ct-4",
        prompt: "L’ensemble des solutions de (x − 1)(3 − x) ≥ 0 est :",
        choices: ["[1 ; 3]", "]−∞ ; 1] ∪ [3 ; +∞[", "]1 ; 3[", "[−3 ; 1]"],
        answer: 0,
        explanation:
          "x − 1 s’annule en 1 (négatif avant, positif après). 3 − x s’annule en 3 (a = −1 : positif avant, négatif après). Produit : sur ]−∞ ; 1[ (−)(+) = − ; sur ]1 ; 3[ (+)(+) = + ; sur ]3 ; +∞[ (+)(−) = −. On veut ≥ 0, bornes incluses (le produit y vaut 0) : S = [1 ; 3].",
      },
      {
        id: "2nde-maths-03-ct-5",
        prompt: "L’ensemble des solutions de (x + 2)/(x − 4) < 0 est :",
        choices: ["[−2 ; 4[", "]−∞ ; −2[ ∪ ]4 ; +∞[", "]−2 ; 4]", "]−2 ; 4["],
        answer: 3,
        explanation:
          "Valeur interdite : 4. Le numérateur s’annule en −2. Signes : x + 2 est − avant −2 et + après ; x − 4 est − avant 4 et + après. Quotient : + sur ]−∞ ; −2[, − sur ]−2 ; 4[, + sur ]4 ; +∞[. On veut < 0 (strict) : −2 exclu (le quotient y vaut 0) et 4 exclu (interdit). S = ]−2 ; 4[.",
      },
      {
        id: "2nde-maths-03-ct-6",
        prompt: "L’ensemble des solutions de (x + 3)² = 25 est :",
        choices: ["S = {2}", "S = {2 ; −8}", "S = {−2 ; 8}", "S = {22}"],
        answer: 1,
        explanation:
          "(x + 3)² = 25 ⇔ x + 3 = 5 ou x + 3 = −5 (deux nombres ont pour carré 25). Donc x = 2 ou x = −8. Autre méthode : (x + 3)² − 5² = (x + 3 − 5)(x + 3 + 5) = (x − 2)(x + 8) = 0. Vérification : (−8 + 3)² = (−5)² = 25. ✓",
      },
      {
        id: "2nde-maths-03-ct-7",
        prompt: "Les solutions de −3x + 4 ≤ 2x − 6 sont les réels x tels que :",
        choices: ["x ≤ 2", "x ≥ −2", "x ≥ 2", "x ≤ −2"],
        answer: 2,
        explanation:
          "On soustrait 2x : −5x + 4 ≤ −6. On soustrait 4 : −5x ≤ −10. On divise par −5 (négatif) : le sens change, x ≥ 2. Vérification avec x = 3 : −9 + 4 = −5 et 6 − 6 = 0, et −5 ≤ 0. ✓",
      },
      {
        id: "2nde-maths-03-ct-8",
        prompt:
          "Un rectangle a un périmètre de 30 cm et sa longueur dépasse sa largeur de 3 cm. Quelle est sa largeur ?",
        choices: ["6 cm", "7,5 cm", "9 cm", "13,5 cm"],
        answer: 0,
        explanation:
          "Soit ℓ la largeur (en cm) ; la longueur vaut ℓ + 3. Périmètre : 2(ℓ + ℓ + 3) = 30, soit 2(2ℓ + 3) = 30, donc 2ℓ + 3 = 15, 2ℓ = 12 et ℓ = 6. Vérification : largeur 6, longueur 9, périmètre 2 × 15 = 30. ✓ (9 cm est la longueur, pas la largeur.)",
      },
    ],
    homework: [
      {
        id: "2nde-maths-03-hw-1",
        prompt: "Quel est l’ensemble des solutions de (x + 2)² = 9 ?",
        choices: ["S = {1}", "S = {1 ; −5}", "S = {−1 ; 5}", "S = {7}"],
        answer: 1,
        explanation: "Un carré vaut 9 si et seulement si le nombre élevé au carré vaut 3 ou −3 : x + 2 = 3 ou x + 2 = −3, soit x = 1 ou x = −5. On peut aussi écrire (x + 2)² − 9 = 0, puis (x + 2 − 3)(x + 2 + 3) = (x − 1)(x + 5) = 0. Donc S = {1 ; −5}. Oublier la solution négative est l’erreur classique.",
      },
      {
        id: "2nde-maths-03-hw-2",
        prompt: "Quel est l’ensemble des solutions de (2x − 1)(x + 3) − (2x − 1)(4 − x) = 0 ?",
        choices: ["S = {1/2}", "S = {1/2 ; −3}", "S = {1/2 ; 4}", "S = ∅"],
        answer: 0,
        explanation: "On factorise par (2x − 1) : (2x − 1)[(x + 3) − (4 − x)] = 0. On réduit le crochet : x + 3 − 4 + x = 2x − 1. L’équation devient (2x − 1)(2x − 1) = (2x − 1)² = 0, d’où 2x − 1 = 0 et x = 1/2. Donc S = {1/2} : il n’y a qu’une solution, car les deux facteurs sont identiques.",
      },
      {
        id: "2nde-maths-03-hw-3",
        prompt: "Quel est l’ensemble des solutions de (2x − 6)/(x + 1) < 0 ?",
        choices: ["]−1 ; 3]", "]−∞ ; −1[ ∪ ]3 ; +∞[", "[−1 ; 3[", "]−1 ; 3["],
        answer: 3,
        explanation: "Valeur interdite : x = −1. Le numérateur 2x − 6 s’annule en 3, négatif avant et positif après ; le dénominateur x + 1 est négatif avant −1 et positif après. Le quotient est donc positif sur ]−∞ ; −1[, négatif sur ]−1 ; 3[, nul en 3 et positif sur ]3 ; +∞[. On veut < 0 (strict) : 3 est exclu et −1 est interdit, donc S = ]−1 ; 3[.",
      },
      {
        id: "2nde-maths-03-hw-4",
        prompt: "Forfait A : 20 € par mois. Forfait B : 8 € par mois plus 0,50 € par Go consommé. À partir de quelle consommation (strictement au-delà) le forfait A devient-il plus avantageux ?",
        choices: ["Plus de 12 Go", "Plus de 40 Go", "Plus de 24 Go", "Plus de 56 Go"],
        answer: 2,
        explanation: "On note g le nombre de Go. Le forfait B coûte 8 + 0,5g euros. A est plus avantageux quand 8 + 0,5g > 20, soit 0,5g > 12, donc g > 24 (on divise par 0,5, positif : le sens ne change pas). Vérification : pour 24 Go, B coûte 8 + 12 = 20 €, autant que A ; au-delà, B coûte plus cher.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 4 ─────────────────────────────
  {
    id: "2nde-maths-04",
    title: "Généralités sur les fonctions",
    summary:
      "Comprendre la notion de fonction, calculer images et antécédents, lire une courbe et résoudre graphiquement équations et inéquations.",
    objectives: [
      "Je sais calculer l’image d’un nombre et déterminer ses antécédents par le calcul.",
      "Je sais déterminer l’ensemble de définition d’une fonction simple.",
      "Je sais vérifier si un point appartient à une courbe et lire images et antécédents sur un graphique.",
      "Je sais résoudre graphiquement f(x) = k, f(x) < k et f(x) = g(x).",
      "Je sais reconnaître une fonction paire ou impaire.",
    ],
    sections: [
      {
        title: "Image, antécédent et ensemble de définition",
        body: [
          "Une **fonction** f définie sur un ensemble D (souvent un intervalle ou une réunion d’intervalles) associe à chaque réel x de D **un unique** réel noté f(x). On écrit f : x ↦ f(x). D est l’**ensemble de définition** de f.",
          "Si f(a) = b, on dit que b est **l’image** de a par f et que a est **un antécédent** de b par f. Un nombre de D a toujours **une seule** image, mais un réel peut avoir zéro, un ou plusieurs antécédents. Pour f(x) = x², l’image de 3 est 9 ; 9 a deux antécédents (3 et −3), et −1 n’en a aucun.",
          "Pour **calculer une image**, on remplace x par la valeur dans l’expression, en mettant des parenthèses autour des nombres négatifs. Pour **chercher les antécédents** d’un réel b, on résout l’équation f(x) = b.",
          "L’ensemble de définition est imposé par l’énoncé ou par l’expression : un **dénominateur** ne doit pas s’annuler, et un nombre sous une **racine carrée** doit être positif ou nul. Par exemple x ↦ 1/(x + 2) est définie sur ℝ \\ {−2} et x ↦ √(x − 3) est définie sur [3 ; +∞[.",
        ],
        keyPoints: [
          "Image : unique. Antécédents : 0, 1 ou plusieurs.",
          "Image de a : on calcule f(a). Antécédents de b : on résout f(x) = b.",
          "Dénominateur ≠ 0 ; nombre sous une racine ≥ 0.",
        ],
        formulas: ["f(a) = b ⇔ b est l’image de a ⇔ a est un antécédent de b"],
        example: {
          title: "Image et antécédents pour f(x) = x² − 2x",
          steps: [
            "Image de −3 : f(−3) = (−3)² − 2 × (−3) = 9 + 6 = 15.",
            "Antécédents de 0 : on résout x² − 2x = 0, soit x(x − 2) = 0.",
            "Produit nul : x = 0 ou x = 2. Les antécédents de 0 sont 0 et 2.",
            "Antécédents de −1 : x² − 2x = −1 ⇔ x² − 2x + 1 = 0 ⇔ (x − 1)² = 0 ⇔ x = 1. Le réel −1 a un seul antécédent : 1.",
          ],
        },
        figure: {
          type: "table",
          title: "Tableau de valeurs de f(x) = x² − 2x",
          caption: "On y lit par exemple que 0 a deux antécédents (0 et 2) et que −1 a un seul antécédent (1).",
          headers: ["x", "−2", "−1", "0", "1", "2", "3"],
          rows: [
            ["f(x)", "8", "3", "0", "−1", "0", "3"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-04-s1-p1",
            prompt: "On considère f(x) = 2x² − 3x + 1. Quelle est l’image de −2 par f ?",
            choices: ["3", "15", "−1", "11"],
            answer: 1,
            explanation: "On remplace x par (−2), entre parenthèses : f(−2) = 2 × (−2)² − 3 × (−2) + 1 = 2 × 4 + 6 + 1 = 15. Le piège 3 vient d’une erreur de signe sur −3 × (−2), qui vaut +6.",
          },
          {
            id: "2nde-maths-04-s1-p2",
            prompt: "On considère g(x) = 3x − 5. Quel est l’antécédent de 7 par g ?",
            choices: ["16", "2/3", "4", "12"],
            answer: 2,
            explanation: "Pour trouver un antécédent de 7, on résout g(x) = 7 : 3x − 5 = 7, donc 3x = 12 et x = 4. Vérification : g(4) = 12 − 5 = 7. ✓ Le piège 16 est l’**image** de 7 (g(7) = 21 − 5 = 16), et non son antécédent.",
          },
          {
            id: "2nde-maths-04-s1-p3",
            prompt: "Quel est l’ensemble de définition de h(x) = √(2x − 8) ?",
            choices: ["]4 ; +∞[", "ℝ \\ {4}", "[−4 ; +∞[", "[4 ; +∞["],
            answer: 3,
            explanation: "Le nombre sous la racine doit être **positif ou nul** : 2x − 8 ≥ 0 ⇔ 2x ≥ 8 ⇔ x ≥ 4. La valeur 4 est autorisée car √0 = 0 existe. Donc h est définie sur [4 ; +∞[.",
          },
        ],
      },
      {
        title: "Courbe représentative et parité",
        body: [
          "Dans un repère, la **courbe représentative** 𝒞f de f est l’ensemble des points M(x ; y) tels que x ∈ D et y = f(x). On dit que y = f(x) est une **équation** de la courbe. Un point M(a ; b) appartient à 𝒞f si et seulement si a ∈ D et f(a) = b.",
          "Pour **tracer** une courbe, on dresse un **tableau de valeurs** (souvent avec la calculatrice), on place les points obtenus, puis on les relie par un trait régulier. Plus on prend de points, plus le tracé est fidèle.",
          "**Lire une image** sur un graphique : on part de x sur l’axe des abscisses, on rejoint verticalement la courbe, puis on lit l’ordonnée du point atteint. **Lire les antécédents** de b : on trace la droite horizontale d’équation y = b et on lit les abscisses de **tous** ses points d’intersection avec la courbe. Une lecture graphique est toujours approximative.",
          "**Parité** : f est **paire** si, pour tout x de D, −x ∈ D et f(−x) = f(x) ; sa courbe est alors symétrique par rapport à l’axe des ordonnées (exemple : x ↦ x²). f est **impaire** si, pour tout x de D, −x ∈ D et f(−x) = −f(x) ; sa courbe est symétrique par rapport à l’origine O (exemples : x ↦ x³, x ↦ 1/x).",
        ],
        keyPoints: [
          "M(a ; b) ∈ 𝒞f ⇔ f(a) = b.",
          "Antécédents graphiques : intersections avec la droite y = b.",
          "Paire : f(−x) = f(x), symétrie par rapport à l’axe des ordonnées.",
          "Impaire : f(−x) = −f(x), symétrie par rapport à l’origine.",
        ],
        example: {
          title: "Les points A(−2 ; 5) et B(3 ; 9) sont-ils sur la courbe de f(x) = x² + 1 ?",
          steps: [
            "Pour A : f(−2) = (−2)² + 1 = 4 + 1 = 5.",
            "f(−2) = 5 est l’ordonnée de A, donc A ∈ 𝒞f.",
            "Pour B : f(3) = 3² + 1 = 10.",
            "10 ≠ 9, donc B ∉ 𝒞f.",
            "Remarque : f(−x) = (−x)² + 1 = x² + 1 = f(x), donc f est paire et le point A′(2 ; 5) est lui aussi sur la courbe.",
          ],
        },
        figure: {
          type: "function",
          title: "Parité : symétries des courbes",
          caption: "La parabole y = x² est symétrique par rapport à l’axe des ordonnées (fonction paire) ; la courbe y = x³ est symétrique par rapport à l’origine (fonction impaire).",
          xMin: -2,
          xMax: 2,
          yMin: -4,
          yMax: 4,
          curves: [
            { expr: "x*x", label: "y = x² (paire)" },
            { expr: "x*x*x", label: "y = x³ (impaire)" },
          ],
          points: [
            { x: -1, y: 1, label: "(−1 ; 1)" },
            { x: 1, y: 1, label: "(1 ; 1)" },
            { x: -1, y: -1, label: "(−1 ; −1)" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-04-s2-p1",
            prompt: "Lequel de ces points appartient à la courbe de f(x) = x² − 3 ?",
            choices: ["A(2 ; 4)", "B(−1 ; −2)", "C(0 ; 3)", "D(3 ; 9)"],
            answer: 1,
            explanation: "Un point M(a ; b) est sur la courbe si et seulement si f(a) = b. f(−1) = (−1)² − 3 = 1 − 3 = −2 : c’est bien l’ordonnée de B, donc B ∈ 𝒞f. Pour les autres : f(2) = 1 ≠ 4, f(0) = −3 ≠ 3 et f(3) = 6 ≠ 9.",
          },
          {
            id: "2nde-maths-04-s2-p2",
            prompt: "On considère la fonction f définie sur ℝ par f(x) = x³ − 2x. Que peut-on dire de sa parité ?",
            choices: ["f est paire.", "f n’est ni paire ni impaire.", "f est impaire.", "f est à la fois paire et impaire."],
            answer: 2,
            explanation:
              "On calcule f(−x) = (−x)³ − 2 × (−x) = −x³ + 2x = −(x³ − 2x) = −f(x). Pour tout réel x, f(−x) = −f(x) : f est **impaire**, et sa courbe est symétrique par rapport à l’origine. Elle n’est pas paire, car par exemple f(1) = −1 alors que f(−1) = 1.",
          },
          {
            id: "2nde-maths-04-s2-p3",
            prompt: "Pour déterminer graphiquement les antécédents de 4 par f, que fait-on ?",
            choices: [
              "On lit l’ordonnée du point de 𝒞f d’abscisse 4.",
              "On calcule f(4).",
              "On lit les ordonnées des points d’intersection de 𝒞f avec la droite x = 4.",
              "On lit les abscisses des points d’intersection de 𝒞f avec la droite y = 4.",
            ],
            answer: 3,
            explanation: "Les antécédents de 4 sont les x tels que f(x) = 4 : ce sont les **abscisses** des points de la courbe dont l’ordonnée vaut 4, c’est-à-dire des points d’intersection avec la droite horizontale y = 4. Lire l’ordonnée du point d’abscisse 4 (ou calculer f(4)) donne au contraire l’**image** de 4.",
          },
        ],
      },
      {
        title: "Résolution graphique d’équations et d’inéquations",
        body: [
          "**Équation f(x) = k** : ses solutions sont les abscisses des points d’intersection de 𝒞f avec la droite horizontale d’équation y = k. **Inéquation f(x) > k** : ses solutions sont les abscisses des points de 𝒞f situés **strictement au-dessus** de cette droite (strictement en dessous pour f(x) < k).",
          "**Équation f(x) = g(x)** : ses solutions sont les abscisses des points d’intersection des courbes 𝒞f et 𝒞g. **Inéquation f(x) ≤ g(x)** : ses solutions sont les abscisses des points où 𝒞f est en dessous de 𝒞g ou la coupe.",
          "Deux réflexes : on répond par des **abscisses** (des valeurs de x), jamais par des ordonnées ; et on écrit l’ensemble des solutions sous forme d’ensemble ({…} pour une équation, intervalles pour une inéquation), en restant dans l’ensemble de définition et en incluant les bornes seulement si l’inégalité est large.",
          "Une résolution graphique donne des valeurs **approchées**. Lorsque c’est possible, on confirme par le calcul : par exemple, si on lit que les courbes de f(x) = x² et g(x) = x + 2 se coupent en x = −1 et x = 2, on vérifie que (−1)² = 1 = −1 + 2 et 2² = 4 = 2 + 2.",
        ],
        keyPoints: [
          "Les solutions sont des abscisses.",
          "f(x) > g(x) : 𝒞f strictement au-dessus de 𝒞g.",
          "Inégalité large : bornes incluses ; stricte : bornes exclues.",
          "Un graphique donne des valeurs approchées : on vérifie par le calcul si possible.",
        ],
        example: {
          title: "f(x) = x² et g(x) = x + 2 sur [−3 ; 3] : résoudre f(x) ≤ g(x)",
          steps: [
            "Les courbes se coupent aux points d’abscisses −1 et 2 (vérifié par le calcul ci-dessus).",
            "Entre −1 et 2, la parabole est sous la droite : par exemple f(0) = 0 < g(0) = 2.",
            "En dehors, la parabole est au-dessus : par exemple f(3) = 9 > g(3) = 5.",
            "L’inégalité est large, les bornes sont incluses : S = [−1 ; 2].",
            "Confirmation algébrique : x² − x − 2 = (x + 1)(x − 2), qui est négatif ou nul exactement sur [−1 ; 2].",
          ],
        },
        figure: {
          type: "function",
          title: "Résoudre graphiquement x² ≤ x + 2",
          caption: "La parabole est sous la droite (ou la coupe) pour x entre −1 et 2 : S = [−1 ; 2].",
          xMin: -3,
          xMax: 3,
          yMin: -1,
          yMax: 9,
          curves: [
            { expr: "x*x", label: "f(x) = x²" },
            { expr: "x+2", label: "g(x) = x + 2" },
          ],
          points: [
            { x: -1, y: 1, label: "(−1 ; 1)" },
            { x: 2, y: 4, label: "(2 ; 4)" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-04-s3-p1",
            prompt: "Les courbes de f et de g se coupent exactement aux points (−2 ; 3) et (1 ; 0). Quel est l’ensemble des solutions de f(x) = g(x) ?",
            choices: ["S = {−2 ; 1}", "S = {3 ; 0}", "S = {−2 ; 0}", "S = {(−2 ; 3)}"],
            answer: 0,
            explanation: "Les solutions de f(x) = g(x) sont les **abscisses** des points d’intersection des deux courbes. Ici ce sont −2 et 1, donc S = {−2 ; 1}. Les nombres 3 et 0 sont des ordonnées : ce sont les valeurs communes de f(x) et g(x), pas les solutions.",
          },
          {
            id: "2nde-maths-04-s3-p2",
            prompt: "Pour quelles valeurs de x la parabole y = x² est-elle strictement en dessous de la droite y = 4 ?",
            choices: ["x ∈ [−2 ; 2]", "x ∈ ]−2 ; 2[", "x ∈ ]−∞ ; −2[ ∪ ]2 ; +∞[", "x ∈ ]0 ; 4["],
            answer: 1,
            explanation: "La parabole coupe la droite y = 4 aux points d’abscisses −2 et 2 (car (−2)² = 2² = 4). Entre ces deux valeurs elle est en dessous (par exemple 0² = 0 < 4), en dehors elle est au-dessus. L’inégalité x² < 4 est stricte, donc les bornes sont exclues : x ∈ ]−2 ; 2[.",
          },
          {
            id: "2nde-maths-04-s3-p3",
            prompt: "f est définie sur [−5 ; 5]. Sa courbe coupe la droite y = 1 en x = −3 et x = 2, est strictement au-dessus de cette droite pour x ∈ ]−3 ; 2[ et strictement en dessous ailleurs. Quel est l’ensemble des solutions de f(x) ≥ 1 ?",
            choices: ["]−3 ; 2[", "[−5 ; −3] ∪ [2 ; 5]", "[−3 ; 2]", "{−3 ; 2}"],
            answer: 2,
            explanation: "On cherche les abscisses des points de la courbe situés au-dessus de la droite y = 1 **ou sur** cette droite. Au-dessus : ]−3 ; 2[ ; sur la droite : −3 et 2. L’inégalité est large, donc les bornes sont incluses : S = [−3 ; 2].",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-maths-04-ex-1",
        prompt: "Soit f(x) = 2x² − 3. Quelle est l’image de −2 par f ?",
        choices: ["−11", "5", "11", "−5"],
        answer: 1,
        explanation:
          "f(−2) = 2 × (−2)² − 3. Priorité au carré : (−2)² = 4. Donc f(−2) = 2 × 4 − 3 = 8 − 3 = 5. Le résultat −11 vient de l’erreur (−2)² = −4.",
      },
      {
        id: "2nde-maths-04-ex-2",
        prompt: "Soit f(x) = 3x + 1. Quel est l’antécédent de 7 par f ?",
        choices: ["22", "8/3", "2", "−2"],
        answer: 2,
        explanation:
          "On résout f(x) = 7 : 3x + 1 = 7 ⇔ 3x = 6 ⇔ x = 2. Vérification : f(2) = 6 + 1 = 7. ✓ Attention : 22 est l’**image** de 7 (f(7) = 22), pas son antécédent.",
      },
      {
        id: "2nde-maths-04-ex-3",
        prompt: "Quel est l’ensemble de définition de f(x) = 1/(x − 4) ?",
        choices: ["ℝ", "[4 ; +∞[", "ℝ \\ {−4}", "ℝ \\ {4}"],
        answer: 3,
        explanation:
          "Le dénominateur ne doit pas s’annuler : x − 4 = 0 ⇔ x = 4. La fonction est donc définie pour tout réel sauf 4 : D = ℝ \\ {4} = ]−∞ ; 4[ ∪ ]4 ; +∞[.",
      },
      {
        id: "2nde-maths-04-ex-4",
        prompt: "Lequel de ces points appartient à la courbe de f : x ↦ x² + 2 ?",
        choices: ["A(1 ; 3)", "B(2 ; 4)", "C(0 ; 0)", "D(−1 ; 1)"],
        answer: 0,
        explanation:
          "On calcule l’image de chaque abscisse : f(1) = 1 + 2 = 3 = ordonnée de A, donc A est sur la courbe. f(2) = 6 ≠ 4 ; f(0) = 2 ≠ 0 ; f(−1) = 1 + 2 = 3 ≠ 1. Seul A convient.",
      },
      {
        id: "2nde-maths-04-ex-5",
        prompt:
          "Une fonction f a le tableau de valeurs suivant : x = −1 → f(x) = 4 ; x = 0 → f(x) = 1 ; x = 1 → f(x) = 0 ; x = 2 → f(x) = 1. Combien d’antécédents de 1 lit-on dans ce tableau ?",
        choices: ["1", "2", "3", "0"],
        answer: 1,
        explanation:
          "On cherche les x tels que f(x) = 1 dans la ligne des images : c’est le cas pour x = 0 et pour x = 2. On lit donc 2 antécédents de 1. Attention : 1 apparaît aussi dans la ligne des x, mais f(1) = 0, ce n’est pas un antécédent de 1.",
      },
      {
        id: "2nde-maths-04-ex-6",
        prompt: "Quel est l’ensemble de définition de f(x) = √(x − 1) ?",
        choices: ["]1 ; +∞[", "ℝ", "[1 ; +∞[", "[0 ; +∞["],
        answer: 2,
        explanation:
          "Le nombre sous la racine doit être positif ou nul : x − 1 ≥ 0 ⇔ x ≥ 1. La borne 1 est incluse car √0 = 0 existe. D = [1 ; +∞[.",
      },
    ],
    test: [
      {
        id: "2nde-maths-04-ct-1",
        prompt: "Soit f(x) = (x − 1)² − 4. Quels sont les antécédents de −4 par f ?",
        choices: ["1 et −1", "Aucun", "−3", "1 seulement"],
        answer: 3,
        explanation:
          "On résout (x − 1)² − 4 = −4 ⇔ (x − 1)² = 0 ⇔ x − 1 = 0 ⇔ x = 1. Un carré n’est nul que si le nombre est nul : un seul antécédent, 1. Vérification : f(1) = 0 − 4 = −4. ✓ f(−1) = 4 − 4 = 0, donc −1 ne convient pas.",
      },
      {
        id: "2nde-maths-04-ct-2",
        prompt: "Soit f(x) = x² − 5. Quelle affirmation est vraie ?",
        choices: [
          "−6 a deux antécédents par f.",
          "4 a pour antécédents −3 et 3.",
          "L’image de −3 est −14.",
          "0 n’a pas d’antécédent par f.",
        ],
        answer: 1,
        explanation:
          "x² − 5 = 4 ⇔ x² = 9 ⇔ x = 3 ou x = −3 : vrai. Les autres sont fausses : x² − 5 = −6 ⇔ x² = −1, impossible (aucun antécédent) ; f(−3) = 9 − 5 = 4 (et non −14) ; x² − 5 = 0 ⇔ x = ±√5, donc 0 a deux antécédents.",
      },
      {
        id: "2nde-maths-04-ct-3",
        prompt: "Quel est l’ensemble de définition de g(x) = √(6 − 2x) ?",
        choices: ["]−∞ ; 3]", "[3 ; +∞[", "]−∞ ; 3[", "]−∞ ; −3]"],
        answer: 0,
        explanation:
          "Il faut 6 − 2x ≥ 0 ⇔ −2x ≥ −6 ⇔ x ≤ 3 (on divise par −2 : le sens change !). 3 est inclus car √0 existe. D = ]−∞ ; 3]. Le piège [3 ; +∞[ vient de l’oubli du changement de sens.",
      },
      {
        id: "2nde-maths-04-ct-4",
        prompt: "Soit h(x) = (2x − 1)/(x + 3). Quel est l’antécédent de 1 par h ?",
        choices: ["x = −4", "x = 2", "x = 4", "1 n’a pas d’antécédent"],
        answer: 2,
        explanation:
          "Valeur interdite : −3. On résout (2x − 1)/(x + 3) = 1 ⇔ 2x − 1 = x + 3 (en multipliant par x + 3 ≠ 0) ⇔ x = 4. 4 ≠ −3, donc il est accepté. Vérification : h(4) = 7/7 = 1. ✓",
      },
      {
        id: "2nde-maths-04-ct-5",
        prompt:
          "Sur [−5 ; 5], les courbes de f et g se coupent uniquement aux points d’abscisses −1 et 3 ; la courbe de f est strictement au-dessus de celle de g entre ces deux abscisses, et strictement en dessous ailleurs. L’ensemble des solutions de f(x) ≤ g(x) est :",
        choices: ["[−1 ; 3]", "]−1 ; 3[", "[−5 ; −1] ∪ [3 ; 5]", "]−5 ; −1[ ∪ ]3 ; 5["],
        answer: 2,
        explanation:
          "f(x) ≤ g(x) correspond aux abscisses où 𝒞f est en dessous de 𝒞g ou la coupe. 𝒞f est en dessous sur [−5 ; −1[ et sur ]3 ; 5], et les courbes se coupent en −1 et 3 (égalité, donc incluse car l’inégalité est large). S = [−5 ; −1] ∪ [3 ; 5]. [−1 ; 3] serait la solution de f(x) ≥ g(x).",
      },
      {
        id: "2nde-maths-04-ct-6",
        prompt: "Laquelle de ces fonctions, définies sur ℝ (ou ℝ \\ {0}), est **paire** ?",
        choices: ["f(x) = x³", "f(x) = x + 1", "f(x) = 1/x", "f(x) = x² + 3"],
        answer: 3,
        explanation:
          "Pour f(x) = x² + 3 : f(−x) = (−x)² + 3 = x² + 3 = f(x), donc f est paire. x³ et 1/x sont impaires (f(−x) = −f(x)). x + 1 n’est ni paire ni impaire : f(−1) = 0 alors que f(1) = 2.",
      },
      {
        id: "2nde-maths-04-ct-7",
        prompt: "Soit f(x) = −x² + 4x. Que vaut f(√2) ?",
        choices: ["2 + 4√2", "−2 + 4√2", "−4 + 4√2", "2 − 4√2"],
        answer: 1,
        explanation:
          "f(√2) = −(√2)² + 4√2. Attention : −x² signifie −(x²), donc −(√2)² = −2 (et non +2). Ainsi f(√2) = −2 + 4√2.",
      },
      {
        id: "2nde-maths-04-ct-8",
        prompt: "Le point M(a ; 7) appartient à la courbe de f(x) = 3x − 2. Que vaut a ?",
        choices: ["a = 3", "a = 19", "a = 5/3", "a = 7"],
        answer: 0,
        explanation:
          "M ∈ 𝒞f ⇔ f(a) = 7 ⇔ 3a − 2 = 7 ⇔ 3a = 9 ⇔ a = 3. Ici on cherche un antécédent de 7. Le piège a = 19 correspond à l’image de 7 : f(7) = 19.",
      },
    ],
    homework: [
      {
        id: "2nde-maths-04-hw-1",
        prompt: "On considère f(x) = (x − 1)/(x + 3). Quelle affirmation est vraie ?",
        choices: ["f est définie sur ℝ.", "f(−1) = −1", "0 n’a pas d’antécédent par f.", "f(1) = 1/4"],
        answer: 1,
        explanation: "f(−1) = (−1 − 1)/(−1 + 3) = −2/2 = −1 : l’affirmation est vraie. Les autres sont fausses : f n’est pas définie en −3 (dénominateur nul), donc sur ℝ \\ {−3} ; 0 a pour antécédent 1, car f(1) = 0/4 = 0 ; et donc f(1) = 0, pas 1/4.",
      },
      {
        id: "2nde-maths-04-hw-2",
        prompt: "On considère f(x) = x² − 4x. Quels sont les antécédents de −4 par f ?",
        choices: ["0 et 4", "−2 et 2", "aucun", "2 seulement"],
        answer: 3,
        explanation: "On résout f(x) = −4 : x² − 4x = −4 ⇔ x² − 4x + 4 = 0 ⇔ (x − 2)² = 0 ⇔ x = 2. Le réel −4 a donc un seul antécédent : 2. Vérification : f(2) = 4 − 8 = −4. ✓ Le piège « 0 et 4 » correspond aux antécédents de 0.",
      },
      {
        id: "2nde-maths-04-hw-3",
        prompt: "f est une fonction impaire définie sur ℝ et f(3) = −5. Que vaut f(−3) ?",
        choices: ["5", "−5", "3", "−3"],
        answer: 0,
        explanation: "f impaire signifie f(−x) = −f(x) pour tout x. Avec x = 3 : f(−3) = −f(3) = −(−5) = 5. Graphiquement, les points (3 ; −5) et (−3 ; 5) sont symétriques par rapport à l’origine. Si f était paire, on aurait f(−3) = −5.",
      },
      {
        id: "2nde-maths-04-hw-4",
        prompt: "On considère f(x) = x² et g(x) = 2x + 3. Quel est l’ensemble des solutions de f(x) > g(x) ?",
        choices: ["]−1 ; 3[", "[−1 ; 3]", "]−∞ ; −1[ ∪ ]3 ; +∞[", "]−∞ ; −3[ ∪ ]1 ; +∞["],
        answer: 2,
        explanation: "f(x) > g(x) ⇔ x² − 2x − 3 > 0. On factorise : (x + 1)(x − 3) = x² − 3x + x − 3 = x² − 2x − 3. ✓ Ce produit s’annule en −1 et 3 ; il est positif à l’extérieur de ces racines et négatif entre elles. Graphiquement, la parabole est strictement au-dessus de la droite pour x < −1 ou x > 3 : S = ]−∞ ; −1[ ∪ ]3 ; +∞[.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 5 ─────────────────────────────
  {
    id: "2nde-maths-05",
    title: "Variations et fonctions de référence",
    summary:
      "Décrire les variations d’une fonction, lire ses extremums et connaître les fonctions affines, carré, inverse, racine carrée et cube.",
    objectives: [
      "Je sais traduire le sens de variation d’une fonction par un tableau de variations et lire ses extremums.",
      "Je sais déterminer l’expression d’une fonction affine, ses variations et son signe.",
      "Je connais les variations et l’allure des courbes des fonctions carré, inverse, racine carrée et cube.",
      "Je sais utiliser les variations pour comparer des nombres et encadrer x², 1/x ou √x.",
    ],
    sections: [
      {
        title: "Sens de variation et extremums",
        body: [
          "Soit f une fonction définie sur un intervalle I. f est **croissante** sur I si, pour tous réels a et b de I, a ≤ b entraîne f(a) ≤ f(b) : les images sont rangées dans le **même ordre** que les nombres de départ. f est **décroissante** sur I si a ≤ b entraîne f(a) ≥ f(b) : l’ordre est **inversé**. Avec des inégalités strictes, on parle de fonction strictement croissante ou strictement décroissante.",
          "Graphiquement, une fonction croissante « monte » quand on parcourt la courbe de gauche à droite, une fonction décroissante « descend ». On résume les variations dans un **tableau de variations** : sur la première ligne, les bornes et les valeurs où le sens change ; sur la seconde, des flèches montantes ou descendantes, avec les images aux extrémités des flèches.",
          "Le **maximum** de f sur I est la plus grande valeur M prise par f(x) : f(x) ≤ M pour tout x de I, et il existe a ∈ I tel que f(a) = M. Le **minimum** se définit de la même façon. Dans un tableau de variations, un maximum se lit au sommet d’une flèche montante suivie d’une flèche descendante, ou bien à une borne ; on compare les candidats.",
          "Le tableau de variations permet de **comparer des images** sans les calculer : si f est décroissante sur [1 ; 6], alors 2 < 4 entraîne f(2) > f(4). En revanche, si les deux nombres ne sont pas dans un même intervalle où f est monotone, on ne peut pas conclure directement.",
        ],
        keyPoints: [
          "Croissante : même ordre ; décroissante : ordre inversé.",
          "Un tableau de variations indique le sens et les valeurs aux extrémités.",
          "Le maximum (ou minimum) est une valeur de f(x), atteinte pour une certaine valeur de x.",
          "On ne compare des images qu’à l’intérieur d’un intervalle où f est monotone.",
        ],
        formulas: [
          "f croissante sur I : a ≤ b ⇒ f(a) ≤ f(b)",
          "f décroissante sur I : a ≤ b ⇒ f(a) ≥ f(b)",
        ],
        example: {
          title: "Exploiter un tableau de variations",
          steps: [
            "Énoncé : f est définie sur [−4 ; 6], croissante sur [−4 ; 1] de f(−4) = −2 à f(1) = 5, puis décroissante sur [1 ; 6] jusqu’à f(6) = 0.",
            "Tableau : x : −4 ; 1 ; 6 — f(x) : −2 ↗ 5 ↘ 0.",
            "Maximum : 5, atteint en x = 1. Minimum : on compare les valeurs aux bornes −2 et 0 ; le minimum est −2, atteint en x = −4.",
            "Comparaison : 2 et 4 sont dans [1 ; 6] où f est décroissante ; 2 < 4 donc f(2) > f(4).",
            "Équation f(x) = 3 : 3 est compris entre −2 et 5 (une solution sur [−4 ; 1]) et entre 0 et 5 (une solution sur [1 ; 6]) : l’équation a deux solutions.",
          ],
        },
        figure: {
          type: "table",
          title: "Tableau de variations de f sur [−4 ; 6]",
          caption: "Maximum 5 atteint en x = 1 ; minimum −2 atteint en x = −4 (on compare −2 et 0).",
          headers: ["x", "−4", "", "1", "", "6"],
          rows: [
            ["f(x)", "−2", "↗", "5", "↘", "0"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-05-s1-p1",
            prompt: "f est croissante sur [0 ; 10]. Que peut-on dire de f(3) et f(7) ?",
            choices: ["f(3) ≥ f(7)", "f(3) ≤ f(7)", "On ne peut pas les comparer.", "f(3) = f(7)"],
            answer: 1,
            explanation: "3 et 7 appartiennent à [0 ; 10], intervalle sur lequel f est croissante : f conserve l’ordre. Comme 3 ≤ 7, on en déduit f(3) ≤ f(7). Si f était décroissante, l’ordre serait inversé.",
          },
          {
            id: "2nde-maths-05-s1-p2",
            prompt: "Le tableau de variations de f est : x : −3 ; 0 ; 4 — f(x) : 2 ↘ −6 ↗ 1. Quel est le minimum de f sur [−3 ; 4] ?",
            choices: [
              "−3, atteint en x = 2",
              "0, atteint en x = −6",
              "1, atteint en x = 4",
              "−6, atteint en x = 0",
            ],
            answer: 3,
            explanation: "f décroît de 2 à −6 sur [−3 ; 0], puis croît de −6 à 1 sur [0 ; 4]. La plus petite valeur prise par f(x) est donc −6, atteinte pour x = 0. Attention à ne pas confondre la valeur du minimum (une valeur de f(x), lue sur la 2ᵉ ligne) et l’endroit où il est atteint (une valeur de x, lue sur la 1ʳᵉ ligne).",
          },
          {
            id: "2nde-maths-05-s1-p3",
            prompt: "Avec le même tableau (x : −3 ; 0 ; 4 — f(x) : 2 ↘ −6 ↗ 1), quel est le maximum de f sur [−3 ; 4] ?",
            choices: [
              "2, atteint en x = −3",
              "1, atteint en x = 4",
              "4, atteint en x = 1",
              "0, atteint en x = −6",
            ],
            answer: 0,
            explanation: "Le maximum ne peut être atteint qu’aux bornes, puisque f décroît puis croît. On compare les deux candidats : f(−3) = 2 et f(4) = 1. Comme 2 > 1, le maximum est 2, atteint en x = −3. Le piège « 1 » est la valeur à la borne droite, qui n’est pas la plus grande.",
          },
        ],
      },
      {
        title: "Fonctions affines",
        body: [
          "Une fonction **affine** est définie sur ℝ par f(x) = mx + p, où m et p sont deux réels. Sa courbe est une **droite** ; m est le **coefficient directeur** et p l’**ordonnée à l’origine** (f(0) = p). Si p = 0, f(x) = mx est **linéaire** : sa droite passe par l’origine (situation de proportionnalité). Si m = 0, f est **constante**.",
          "Le coefficient directeur mesure l’accroissement des images : pour deux réels distincts a et b, m = (f(b) − f(a))/(b − a). Quand x augmente de 1, f(x) augmente de m. Connaître les images de deux nombres suffit donc pour retrouver m, puis p.",
          "**Variations** : si m > 0, f est strictement croissante sur ℝ ; si m < 0, f est strictement décroissante sur ℝ ; si m = 0, f est constante. **Signe** : pour m ≠ 0, mx + p s’annule en x = −p/m et est du signe de m à droite de cette valeur, du signe contraire à gauche.",
        ],
        keyPoints: [
          "f(x) = mx + p : droite de coefficient directeur m et d’ordonnée à l’origine p.",
          "m = (f(b) − f(a))/(b − a).",
          "m > 0 : croissante ; m < 0 : décroissante ; m = 0 : constante.",
          "mx + p s’annule en −p/m.",
        ],
        formulas: ["f(x) = mx + p", "m = (f(b) − f(a)) / (b − a)", "p = f(0)"],
        example: {
          title: "Trouver f affine telle que f(−1) = 7 et f(2) = −2",
          steps: [
            "m = (f(2) − f(−1))/(2 − (−1)) = (−2 − 7)/3 = −9/3 = −3.",
            "f(x) = −3x + p et f(2) = −2 : −6 + p = −2, donc p = 4. Ainsi f(x) = −3x + 4.",
            "Vérification : f(−1) = 3 + 4 = 7. ✓",
            "m = −3 < 0 : f est strictement décroissante sur ℝ.",
            "f(x) = 0 ⇔ x = 4/3 : f(x) > 0 sur ]−∞ ; 4/3[ et f(x) < 0 sur ]4/3 ; +∞[.",
          ],
        },
        figure: {
          type: "function",
          title: "Deux fonctions affines",
          caption: "f(x) = 2x + 1 (m = 2 > 0) est croissante ; g(x) = −3x + 4 (m = −3 < 0) est décroissante et s’annule en 4/3.",
          xMin: -2,
          xMax: 3,
          yMin: -5,
          yMax: 8,
          curves: [
            { expr: "2*x+1", label: "f(x) = 2x + 1" },
            { expr: "-3*x+4", label: "g(x) = −3x + 4" },
          ],
          points: [
            { x: 0, y: 1, label: "p = 1" },
            { x: 0, y: 4, label: "p = 4" },
            { x: 4 / 3, y: 0, label: "x = 4/3" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-05-s2-p1",
            prompt: "f est affine avec f(1) = 3 et f(4) = 12. Quelle est son expression ?",
            choices: ["f(x) = 3x + 3", "f(x) = x + 2", "f(x) = 3x", "f(x) = 9x − 6"],
            answer: 2,
            explanation: "Coefficient directeur : m = (f(4) − f(1))/(4 − 1) = (12 − 3)/3 = 3. Donc f(x) = 3x + p, et f(1) = 3 donne 3 + p = 3, soit p = 0. Ainsi f(x) = 3x (fonction linéaire). Vérification : f(4) = 12. ✓",
          },
          {
            id: "2nde-maths-05-s2-p2",
            prompt: "On considère f(x) = −0,5x + 2. Quelle affirmation est vraie ?",
            choices: [
              "f est croissante et s’annule en 4.",
              "f est décroissante et s’annule en 4.",
              "f est décroissante et s’annule en −4.",
              "f est croissante et s’annule en −4.",
            ],
            answer: 1,
            explanation: "Le coefficient directeur m = −0,5 est négatif : f est strictement décroissante sur ℝ. f(x) = 0 ⇔ −0,5x + 2 = 0 ⇔ 0,5x = 2 ⇔ x = 4. Vérification : f(4) = −2 + 2 = 0. ✓",
          },
          {
            id: "2nde-maths-05-s2-p3",
            prompt: "Sur quel intervalle f(x) = 4x − 10 est-elle strictement négative ?",
            choices: ["]−∞ ; 2,5[", "]2,5 ; +∞[", "]−∞ ; −2,5[", "]−∞ ; 10["],
            answer: 0,
            explanation: "4x − 10 s’annule en x = 10/4 = 2,5. Le coefficient m = 4 est positif : l’expression est du signe de m (positive) à droite de 2,5 et négative à gauche. Donc f(x) < 0 sur ]−∞ ; 2,5[. Vérification : f(0) = −10 < 0. ✓",
          },
        ],
      },
      {
        title: "Fonctions de référence : carré, inverse, racine carrée, cube",
        body: [
          "**Fonction carré** x ↦ x², définie sur ℝ : elle est décroissante sur ]−∞ ; 0] et croissante sur [0 ; +∞[, avec un minimum égal à 0 en x = 0. Sa courbe est une **parabole** symétrique par rapport à l’axe des ordonnées (fonction paire). Conséquence : pour a > 0, x² < a ⇔ −√a < x < √a, et x² > a ⇔ x < −√a ou x > √a.",
          "**Fonction inverse** x ↦ 1/x, définie sur ℝ \\ {0} = ]−∞ ; 0[ ∪ ]0 ; +∞[ : elle est décroissante sur ]−∞ ; 0[ **et** décroissante sur ]0 ; +∞[ (mais pas sur la réunion des deux !). Sa courbe est une **hyperbole** symétrique par rapport à l’origine (fonction impaire). Elle inverse l’ordre de deux nombres **de même signe** : si 0 < a < b, alors 1/a > 1/b.",
          "**Fonction racine carrée** x ↦ √x, définie sur [0 ; +∞[, est croissante : si 0 ≤ a < b, alors √a < √b. **Fonction cube** x ↦ x³, définie sur ℝ, est croissante sur ℝ et impaire ; l’équation x³ = a a toujours une unique solution réelle.",
          "**Positions relatives** : pour 0 < x < 1, on a x³ < x² < x < √x ; pour x > 1, c’est l’inverse : √x < x < x² < x³. On retrouve ces comparaisons en testant une valeur, par exemple x = 0,5 (0,125 < 0,25 < 0,5 < 0,707…) ou x = 4 (2 < 4 < 16 < 64).",
        ],
        keyPoints: [
          "Carré : décroissante sur ]−∞ ; 0], croissante sur [0 ; +∞[.",
          "Inverse : décroissante sur chacun des intervalles ]−∞ ; 0[ et ]0 ; +∞[.",
          "Racine carrée et cube : croissantes sur leur ensemble de définition.",
          "Si x change de signe dans un encadrement, on ne peut pas élever directement au carré.",
        ],
        formulas: [
          "0 ≤ a < b ⇒ a² < b²",
          "a < b ≤ 0 ⇒ a² > b²",
          "0 < a < b ⇒ 1/a > 1/b",
          "0 ≤ a < b ⇒ √a < √b",
          "a < b ⇒ a³ < b³",
        ],
        example: {
          title: "Encadrer x² et 1/x sachant que 2 ≤ x ≤ 5",
          steps: [
            "Sur [0 ; +∞[ la fonction carré est croissante : elle conserve l’ordre.",
            "Donc 2² ≤ x² ≤ 5², soit 4 ≤ x² ≤ 25.",
            "Sur ]0 ; +∞[ la fonction inverse est décroissante : elle inverse l’ordre.",
            "Donc 1/5 ≤ 1/x ≤ 1/2, soit 0,2 ≤ 1/x ≤ 0,5.",
            "Piège : si −2 ≤ x ≤ 5, x change de signe ; la valeur minimale de x² est 0 (en x = 0) et la maximale 25, donc 0 ≤ x² ≤ 25.",
          ],
        },
        figure: {
          type: "function",
          title: "Positions relatives sur [0 ; 2]",
          caption: "Pour 0 < x < 1 : x³ < x² < x < √x. Pour x > 1, l’ordre s’inverse : √x < x < x² < x³. Toutes les courbes passent par (1 ; 1).",
          xMin: 0,
          xMax: 2,
          yMin: 0,
          yMax: 4,
          curves: [
            { expr: "Math.sqrt(x)", label: "y = √x" },
            { expr: "x", label: "y = x" },
            { expr: "x*x", label: "y = x²" },
            { expr: "x*x*x", label: "y = x³" },
          ],
          points: [
            { x: 1, y: 1, label: "(1 ; 1)" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-05-s3-p1",
            prompt: "On sait que −5 ≤ x ≤ −2. Quel encadrement de x² est correct ?",
            choices: ["−25 ≤ x² ≤ −4", "4 ≤ x² ≤ 25", "25 ≤ x² ≤ 4", "0 ≤ x² ≤ 25"],
            answer: 1,
            explanation: "Sur ]−∞ ; 0], la fonction carré est **décroissante** : elle inverse l’ordre. De −5 ≤ x ≤ −2, on déduit (−5)² ≥ x² ≥ (−2)², soit 25 ≥ x² ≥ 4, c’est-à-dire 4 ≤ x² ≤ 25. Un carré n’est jamais négatif, ce qui élimine la première proposition ; x ne change pas de signe ici, donc 0 n’est pas atteint.",
          },
          {
            id: "2nde-maths-05-s3-p2",
            prompt: "On sait que 4 ≤ x ≤ 8. Quel encadrement de 1/x est correct ?",
            choices: ["1/4 ≤ 1/x ≤ 1/8", "−8 ≤ 1/x ≤ −4", "1/8 ≤ 1/x ≤ 1/4", "0 ≤ 1/x ≤ 1/4"],
            answer: 2,
            explanation: "Sur ]0 ; +∞[, la fonction inverse est **décroissante** : elle inverse l’ordre. De 4 ≤ x ≤ 8, on déduit 1/4 ≥ 1/x ≥ 1/8, soit 1/8 ≤ 1/x ≤ 1/4 (0,125 ≤ 1/x ≤ 0,25). La première proposition est mal ordonnée, car 1/4 > 1/8.",
          },
          {
            id: "2nde-maths-05-s3-p3",
            prompt: "Pour x = 0,25, quel classement est correct ?",
            choices: ["√x < x < x²", "x < x² < √x", "x² < √x < x", "x² < x < √x"],
            answer: 3,
            explanation: "Calculons : x² = 0,0625, x = 0,25 et √x = √0,25 = 0,5. Donc x² < x < √x. C’est la règle du cours : pour 0 < x < 1, élever au carré fait diminuer le nombre et prendre la racine carrée le fait augmenter.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-maths-05-ex-1",
        prompt: "La fonction f(x) = −3x + 5 est :",
        choices: ["croissante sur ℝ", "décroissante sur ℝ", "constante sur ℝ", "croissante puis décroissante"],
        answer: 1,
        explanation:
          "f est affine de coefficient directeur m = −3. Comme m < 0, f est strictement décroissante sur ℝ. Le nombre 5 (ordonnée à l’origine) n’a aucune influence sur le sens de variation.",
      },
      {
        id: "2nde-maths-05-ex-2",
        prompt: "Sur l’intervalle ]−∞ ; 0], la fonction carré est :",
        choices: ["croissante", "constante", "décroissante", "ni croissante ni décroissante"],
        answer: 2,
        explanation:
          "Sur les nombres négatifs, plus x est petit, plus x² est grand : par exemple −3 < −1 mais 9 > 1. L’ordre est inversé : la fonction carré est décroissante sur ]−∞ ; 0].",
      },
      {
        id: "2nde-maths-05-ex-3",
        prompt: "Par la fonction inverse, l’image de 1/4 est :",
        choices: ["−4", "1/4", "0,4", "4"],
        answer: 3,
        explanation:
          "L’image de a par la fonction inverse est 1/a. Ici 1/(1/4) = 4 (diviser par une fraction revient à multiplier par son inverse). Attention : l’inverse n’est pas l’opposé (−1/4).",
      },
      {
        id: "2nde-maths-05-ex-4",
        prompt:
          "f est croissante sur [0 ; 2] de f(0) = 1 à f(2) = 5, puis décroissante sur [2 ; 6] jusqu’à f(6) = −3. Le maximum de f sur [0 ; 6] est :",
        choices: ["5, atteint en x = 2", "2, atteint en x = 5", "6, atteint en x = −3", "1, atteint en x = 0"],
        answer: 0,
        explanation:
          "f monte jusqu’à x = 2 puis redescend : la plus grande valeur prise est f(2) = 5. Le maximum est donc 5 (une valeur de f(x)), atteint en x = 2. Ne pas confondre le maximum (5) et l’endroit où il est atteint (2).",
      },
      {
        id: "2nde-maths-05-ex-5",
        prompt: "Si 0 < x < 1, alors :",
        choices: ["x² > x", "x² < x", "x² = x", "x² < 0"],
        answer: 1,
        explanation:
          "Pour 0 < x < 1, on multiplie l’inégalité x < 1 par x > 0 : x² < x. Exemple : 0,3² = 0,09 < 0,3. Élever au carré un nombre entre 0 et 1 le rend plus petit.",
      },
      {
        id: "2nde-maths-05-ex-6",
        prompt: "La fonction affine f telle que f(1) = 3 et f(3) = 7 est :",
        choices: ["f(x) = 4x − 1", "f(x) = 2x + 3", "f(x) = 2x + 1", "f(x) = x + 2"],
        answer: 2,
        explanation:
          "m = (f(3) − f(1))/(3 − 1) = (7 − 3)/2 = 2. Puis f(1) = 2 × 1 + p = 3 donne p = 1. Donc f(x) = 2x + 1. Vérification : f(3) = 6 + 1 = 7. ✓ (4x − 1 donne bien f(1) = 3, mais f(3) = 11.)",
      },
    ],
    test: [
      {
        id: "2nde-maths-05-ct-1",
        prompt: "Comment se comparent 1/2,3 et 1/2,31 ?",
        choices: ["1/2,3 < 1/2,31", "1/2,3 = 1/2,31", "On ne peut pas les comparer", "1/2,3 > 1/2,31"],
        answer: 3,
        explanation:
          "2,3 et 2,31 sont positifs et 2,3 < 2,31. La fonction inverse est décroissante sur ]0 ; +∞[ : elle inverse l’ordre. Donc 1/2,3 > 1/2,31.",
      },
      {
        id: "2nde-maths-05-ct-2",
        prompt: "Si −3 ≤ x ≤ −1, quel encadrement de x² est correct ?",
        choices: ["9 ≤ x² ≤ 1", "1 ≤ x² ≤ 9", "−9 ≤ x² ≤ −1", "0 ≤ x² ≤ 9"],
        answer: 1,
        explanation:
          "x est négatif sur tout l’intervalle, où la fonction carré est **décroissante** : l’ordre s’inverse. (−1)² = 1 et (−3)² = 9, d’où 1 ≤ x² ≤ 9. Un carré ne peut pas être négatif, et 0 n’est pas atteint car x ne s’annule pas.",
      },
      {
        id: "2nde-maths-05-ct-3",
        prompt: "Si −2 ≤ x ≤ 3, quel est le meilleur encadrement de x² ?",
        choices: ["4 ≤ x² ≤ 9", "−4 ≤ x² ≤ 9", "0 ≤ x² ≤ 9", "0 ≤ x² ≤ 4"],
        answer: 2,
        explanation:
          "Piège : x change de signe. Sur [−2 ; 0], x² décroît de 4 à 0 ; sur [0 ; 3], x² croît de 0 à 9. La plus petite valeur est 0 (en x = 0) et la plus grande 9 (en x = 3). Donc 0 ≤ x² ≤ 9. « 4 ≤ x² ≤ 9 » est faux : pour x = 0, x² = 0.",
      },
      {
        id: "2nde-maths-05-ct-4",
        prompt: "L’ensemble des solutions de x² < 9 est :",
        choices: ["]−3 ; 3[", "]−∞ ; 3[", "]−∞ ; −3[ ∪ ]3 ; +∞[", "]−9 ; 9["],
        answer: 0,
        explanation:
          "x² < 9 ⇔ x² − 9 < 0 ⇔ (x − 3)(x + 3) < 0. Ce produit est négatif strictement entre ses racines −3 et 3. S = ]−3 ; 3[. « x < 3 » est faux : x = −5 vérifie x < 3 mais (−5)² = 25 > 9.",
      },
      {
        id: "2nde-maths-05-ct-5",
        prompt: "L’ensemble des solutions de 1/x > 2 est :",
        choices: ["]−∞ ; ½[", "]½ ; +∞[", "]0 ; ½]", "]0 ; ½["],
        answer: 3,
        explanation:
          "Si x < 0, 1/x est négatif, donc ne peut pas dépasser 2 : aucune solution négative. Si x > 0, la fonction inverse est décroissante : 1/x > 2 = 1/(½) ⇔ x < ½. Avec x > 0 : S = ]0 ; ½[. ½ est exclu car 1/(½) = 2 n’est pas > 2.",
      },
      {
        id: "2nde-maths-05-ct-6",
        prompt: "L’ensemble des solutions de √x ≤ 3 est :",
        choices: ["]−∞ ; 9]", "[0 ; 9]", "[0 ; 3]", "[0 ; √3]"],
        answer: 1,
        explanation:
          "√x n’est défini que pour x ≥ 0. Sur [0 ; +∞[, la fonction racine carrée est croissante et 3 = √9, donc √x ≤ √9 ⇔ x ≤ 9. Avec la condition x ≥ 0 : S = [0 ; 9]. Oublier x ≥ 0 conduit au piège ]−∞ ; 9].",
      },
      {
        id: "2nde-maths-05-ct-7",
        prompt: "Le signe de −2x + 6 est :",
        choices: [
          "− puis +, avec un changement en x = 3",
          "+ puis −, avec un changement en x = −3",
          "+ puis −, avec un changement en x = 3",
          "toujours positif",
        ],
        answer: 2,
        explanation:
          "−2x + 6 = 0 ⇔ x = 3. Le coefficient de x est m = −2 < 0 : l’expression est du signe de m (négative) à droite de 3 et positive à gauche. Vérification : en x = 0, on obtient 6 > 0. Donc + puis −, avec changement en 3.",
      },
      {
        id: "2nde-maths-05-ct-8",
        prompt: "Pour x = −0,5, quel classement est correct ?",
        choices: ["x³ < x < x²", "x < x³ < x²", "x² < x³ < x", "x < x² < x³"],
        answer: 1,
        explanation:
          "On calcule : x = −0,5 ; x² = 0,25 ; x³ = (−0,5)³ = −0,125. Or −0,5 < −0,125 < 0,25, donc x < x³ < x². Les comparaisons valables pour 0 < x < 1 ne s’appliquent pas ici car x est négatif : il faut calculer.",
      },
    ],
    homework: [
      {
        id: "2nde-maths-05-hw-1",
        prompt: "Quel est l’ensemble des solutions de x² ≤ 9 ?",
        choices: ["]−∞ ; 3]", "[−3 ; 3]", "[0 ; 3]", "]−∞ ; −3] ∪ [3 ; +∞["],
        answer: 1,
        explanation: "D’après le cours, pour a > 0 : x² ≤ a ⇔ −√a ≤ x ≤ √a. Ici √9 = 3, donc −3 ≤ x ≤ 3 et S = [−3 ; 3]. Le piège ]−∞ ; 3] oublie que, par exemple, (−4)² = 16 > 9. La dernière proposition est l’ensemble des solutions de x² ≥ 9.",
      },
      {
        id: "2nde-maths-05-hw-2",
        prompt: "La droite représentant la fonction affine f passe par les points (−2 ; 5) et (2 ; −3). Quelle est l’expression de f ?",
        choices: ["f(x) = 2x + 9", "f(x) = −0,5x + 4", "f(x) = −2x − 1", "f(x) = −2x + 1"],
        answer: 3,
        explanation: "m = (−3 − 5)/(2 − (−2)) = −8/4 = −2. Donc f(x) = −2x + p ; avec f(2) = −3 : −4 + p = −3, d’où p = 1. Ainsi f(x) = −2x + 1. Vérification : f(−2) = 4 + 1 = 5. ✓",
      },
      {
        id: "2nde-maths-05-hw-3",
        prompt: "Comment se comparent 1/π et 1/3,14 ?",
        choices: ["1/π < 1/3,14", "1/π > 1/3,14", "1/π = 1/3,14", "On ne peut pas les comparer."],
        answer: 0,
        explanation: "On sait que π ≈ 3,1416, donc 0 < 3,14 < π. La fonction inverse est décroissante sur ]0 ; +∞[ : elle inverse l’ordre de deux nombres positifs. Donc 1/3,14 > 1/π, c’est-à-dire 1/π < 1/3,14.",
      },
      {
        id: "2nde-maths-05-hw-4",
        prompt: "f est définie sur [−2 ; 5] : elle décroît de f(−2) = 4 à f(1) = −3, puis croît jusqu’à f(5) = 6. Combien de solutions l’équation f(x) = 0 admet-elle ?",
        choices: ["0", "1", "2", "3"],
        answer: 2,
        explanation: "Sur [−2 ; 1], f décroît de 4 à −3 : elle passe une seule fois par 0, qui est compris entre −3 et 4. Sur [1 ; 5], f croît de −3 à 6 : elle passe encore une seule fois par 0. L’équation f(x) = 0 a donc exactement 2 solutions, une dans chaque intervalle.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 6 ─────────────────────────────
  {
    id: "2nde-maths-06",
    title: "Vecteurs",
    summary:
      "Définir un vecteur à partir d’une translation, additionner des vecteurs avec la relation de Chasles et utiliser les coordonnées pour tester la colinéarité.",
    objectives: [
      "Je sais associer un vecteur à une translation et caractériser un parallélogramme par une égalité de vecteurs.",
      "Je sais additionner des vecteurs et simplifier une somme avec la relation de Chasles.",
      "Je sais calculer les coordonnées d’un vecteur, d’une somme et d’un produit par un réel.",
      "Je sais utiliser le déterminant pour démontrer une colinéarité, un alignement ou un parallélisme.",
    ],
    sections: [
      {
        title: "Translations et vecteurs",
        body: [
          "La **translation** qui transforme A en B fait « glisser » chaque point du plan dans la même **direction** (celle de la droite (AB)), le même **sens** (de A vers B) et sur la même **longueur** AB. À cette translation on associe le **vecteur** AB⃗ (on lit « vecteur AB ») : A est son origine, B son extrémité.",
          "Un vecteur est caractérisé par trois éléments : une direction, un sens et une **norme** (longueur), notée ‖AB⃗‖ = AB. Deux vecteurs sont **égaux** s’ils ont même direction, même sens et même norme. On peut alors désigner un vecteur par une seule lettre, u⃗, quel que soit le point à partir duquel on le trace.",
          "**Propriété fondamentale** : AB⃗ = DC⃗ si et seulement si **ABCD est un parallélogramme** (éventuellement aplati). Attention à l’ordre des lettres : c’est AB⃗ = DC⃗ et non AB⃗ = CD⃗. De même, I est le milieu de [AB] si et seulement si AI⃗ = IB⃗.",
          "Le vecteur AA⃗ est le **vecteur nul**, noté 0⃗. Le vecteur BA⃗ a même direction et même norme que AB⃗ mais un sens contraire : c’est l’**opposé** de AB⃗, noté −AB⃗.",
        ],
        keyPoints: [
          "Un vecteur = une direction, un sens, une norme.",
          "AB⃗ = DC⃗ ⇔ ABCD est un parallélogramme.",
          "I milieu de [AB] ⇔ AI⃗ = IB⃗.",
          "BA⃗ = −AB⃗ et AA⃗ = 0⃗.",
        ],
        formulas: ["AB⃗ = DC⃗ ⇔ ABCD parallélogramme", "I milieu de [AB] ⇔ AI⃗ = IB⃗"],
        example: {
          title: "Démontrer qu’un quadrilatère est un parallélogramme",
          steps: [
            "Énoncé : A, B, C sont trois points non alignés et D est l’image de C par la translation de vecteur BA⃗. Montrer que ABCD est un parallélogramme.",
            "Par définition, D image de C par la translation de vecteur BA⃗ signifie CD⃗ = BA⃗.",
            "En prenant les opposés des deux membres : DC⃗ = AB⃗.",
            "D’après la propriété fondamentale, AB⃗ = DC⃗ ⇔ ABCD est un parallélogramme.",
            "Comme A, B, C ne sont pas alignés, ce parallélogramme n’est pas aplati.",
          ],
        },
        figure: {
          type: "table",
          title: "Les trois caractéristiques du vecteur AB⃗",
          caption: "Deux vecteurs sont égaux lorsqu’ils ont même direction, même sens et même norme.",
          headers: ["Caractéristique", "Pour AB⃗", "Pour BA⃗ = −AB⃗"],
          rows: [
            ["Direction", "celle de la droite (AB)", "la même"],
            ["Sens", "de A vers B", "de B vers A (contraire)"],
            ["Norme", "la longueur AB", "la même"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-06-s1-p1",
            prompt: "Quelle égalité caractérise le fait que ABCD est un parallélogramme ?",
            choices: ["AB⃗ = CD⃗", "AB⃗ = DC⃗", "AC⃗ = BD⃗", "AD⃗ = CB⃗"],
            answer: 1,
            explanation: "D’après la propriété fondamentale, ABCD est un parallélogramme si et seulement si AB⃗ = DC⃗ : les côtés [AB] et [DC] ont même direction, même longueur et même sens (de A vers B comme de D vers C). AB⃗ = CD⃗ est faux : ces deux vecteurs sont de sens contraires dans un parallélogramme ABCD.",
          },
          {
            id: "2nde-maths-06-s1-p2",
            prompt: "Quelle égalité traduit le fait que I est le milieu de [AB] ?",
            choices: ["AI⃗ = BI⃗", "IA⃗ = IB⃗", "AI⃗ = IB⃗", "AB⃗ = IB⃗"],
            answer: 2,
            explanation: "I est le milieu de [AB] si et seulement si AI⃗ = IB⃗ : on va de A à I puis de I à B avec le même déplacement. AI⃗ = BI⃗ et IA⃗ = IB⃗ sont fausses, car ces vecteurs ont des sens contraires (AI⃗ = −BI⃗). Enfin AB⃗ = 2IB⃗, et non IB⃗.",
          },
          {
            id: "2nde-maths-06-s1-p3",
            prompt: "Quel vecteur est égal à −MN⃗ ?",
            choices: ["MN⃗", "0⃗", "2MN⃗", "NM⃗"],
            answer: 3,
            explanation: "L’opposé de MN⃗ a même direction et même norme que MN⃗ mais un sens contraire : c’est NM⃗. Ainsi −MN⃗ = NM⃗, et MN⃗ + NM⃗ = MM⃗ = 0⃗. Retenir : changer l’ordre des lettres revient à prendre l’opposé.",
          },
        ],
      },
      {
        title: "Somme de vecteurs, relation de Chasles, produit par un réel",
        body: [
          "La **somme** u⃗ + v⃗ correspond à l’enchaînement des deux translations : on trace v⃗ à partir de l’extrémité de u⃗. Si u⃗ = AB⃗ et v⃗ = BC⃗, alors u⃗ + v⃗ = AC⃗ : c’est la **relation de Chasles**, AB⃗ + BC⃗ = AC⃗, valable pour tous points A, B, C. **Règle du parallélogramme** : AB⃗ + AC⃗ = AD⃗, où D est le point tel que ABDC est un parallélogramme.",
          "La **différence** u⃗ − v⃗ est définie par u⃗ − v⃗ = u⃗ + (−v⃗). Pour simplifier une somme vectorielle, on transforme les soustractions (−CB⃗ = BC⃗), puis on « enchaîne » les lettres avec Chasles : AB⃗ + BC⃗ + CD⃗ = AD⃗ et AB⃗ + BA⃗ = AA⃗ = 0⃗.",
          "Pour un réel k et un vecteur u⃗ non nul, le vecteur k u⃗ a la **même direction** que u⃗, le même sens si k > 0 et le sens contraire si k < 0, et pour norme |k| × ‖u⃗‖. Deux vecteurs u⃗ et v⃗ sont **colinéaires** s’il existe un réel k tel que v⃗ = k u⃗ (ou si u⃗ = 0⃗). Par exemple, si I est le milieu de [AB], AB⃗ = 2AI⃗.",
        ],
        keyPoints: [
          "Chasles : AB⃗ + BC⃗ = AC⃗ (l’extrémité du premier est l’origine du second).",
          "−CB⃗ = BC⃗ : on change l’ordre des lettres pour supprimer un signe moins.",
          "k u⃗ : même direction que u⃗ ; sens selon le signe de k ; norme |k| × ‖u⃗‖.",
          "Colinéaires : v⃗ = k u⃗.",
        ],
        formulas: ["AB⃗ + BC⃗ = AC⃗", "AB⃗ + AC⃗ = AD⃗ ⇔ ABDC parallélogramme", "‖k u⃗‖ = |k| × ‖u⃗‖"],
        example: {
          title: "Simplifier w⃗ = AB⃗ − AC⃗ + BC⃗ − 2BA⃗",
          steps: [
            "On transforme la soustraction : −AC⃗ = CA⃗, donc AB⃗ − AC⃗ = CA⃗ + AB⃗.",
            "Chasles : CA⃗ + AB⃗ = CB⃗.",
            "Puis CB⃗ + BC⃗ = CC⃗ = 0⃗.",
            "Enfin −2BA⃗ = 2AB⃗ (l’opposé de BA⃗ est AB⃗).",
            "Conclusion : w⃗ = 2AB⃗.",
          ],
        },
        figure: {
          type: "flow",
          title: "Simplifier une somme de vecteurs",
          caption: "Exemple : AB⃗ − AC⃗ = CA⃗ + AB⃗ = CB⃗.",
          steps: [
            { label: "Supprimer les signes moins", detail: "−CB⃗ = BC⃗" },
            { label: "Réordonner les termes", detail: "pour que les lettres s’enchaînent" },
            { label: "Appliquer Chasles", detail: "AB⃗ + BC⃗ = AC⃗" },
            { label: "Conclure", detail: "un seul vecteur (ou 0⃗)" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-06-s2-p1",
            prompt: "À quel vecteur est égale la somme AB⃗ + BC⃗ + CD⃗ ?",
            choices: ["AC⃗", "AD⃗", "DA⃗", "BD⃗"],
            answer: 1,
            explanation: "On applique deux fois la relation de Chasles : AB⃗ + BC⃗ = AC⃗, puis AC⃗ + CD⃗ = AD⃗. Les lettres « s’enchaînent » (B puis C), il ne reste que la première origine A et la dernière extrémité D : AD⃗.",
          },
          {
            id: "2nde-maths-06-s2-p2",
            prompt: "À quel vecteur est égal MN⃗ − PN⃗ ?",
            choices: ["MP⃗", "PM⃗", "NP⃗", "0⃗"],
            answer: 0,
            explanation: "On supprime la soustraction : −PN⃗ = NP⃗. Donc MN⃗ − PN⃗ = MN⃗ + NP⃗. Par la relation de Chasles, MN⃗ + NP⃗ = MP⃗.",
          },
          {
            id: "2nde-maths-06-s2-p3",
            prompt: "On a ‖u⃗‖ = 2. Que peut-on dire du vecteur −3u⃗ ?",
            choices: [
              "Sa norme vaut −6 et il est de sens contraire à u⃗.",
              "Sa norme vaut 6 et il est de même sens que u⃗.",
              "Sa norme vaut 6 et il est de sens contraire à u⃗.",
              "Sa norme vaut 2/3 et il est de sens contraire à u⃗.",
            ],
            answer: 2,
            explanation: "Le vecteur k u⃗ a pour norme |k| × ‖u⃗‖ : ici |−3| × 2 = 6. Comme k = −3 < 0, il est de sens contraire à u⃗ (et de même direction). Une norme est une longueur : elle n’est jamais négative, d’où l’erreur de « −6 ».",
          },
        ],
      },
      {
        title: "Coordonnées et colinéarité",
        body: [
          "Dans un repère (O ; i⃗, j⃗), tout vecteur u⃗ s’écrit de façon unique u⃗ = x i⃗ + y j⃗ : on note u⃗(x ; y) ses **coordonnées**. Pour deux points A(xA ; yA) et B(xB ; yB), on a AB⃗(xB − xA ; yB − yA) : « extrémité moins origine ».",
          "Les opérations se font coordonnée par coordonnée : si u⃗(x ; y) et v⃗(x′ ; y′), alors u⃗ + v⃗ a pour coordonnées (x + x′ ; y + y′) et k u⃗ a pour coordonnées (kx ; ky). Deux vecteurs sont égaux si et seulement s’ils ont les mêmes coordonnées. Dans un repère **orthonormé**, la norme vaut ‖u⃗‖ = √(x² + y²).",
          "Le **déterminant** de u⃗(x ; y) et v⃗(x′ ; y′) est le nombre det(u⃗, v⃗) = xy′ − x′y. **Critère de colinéarité** : u⃗ et v⃗ sont colinéaires si et seulement si det(u⃗, v⃗) = 0, c’est-à-dire si leurs coordonnées sont proportionnelles.",
          "Applications : trois points A, B, C sont **alignés** si et seulement si AB⃗ et AC⃗ sont colinéaires ; deux droites (AB) et (CD) sont **parallèles** si et seulement si AB⃗ et CD⃗ sont colinéaires.",
        ],
        keyPoints: [
          "AB⃗(xB − xA ; yB − yA).",
          "Somme et produit par un réel : coordonnée par coordonnée.",
          "det(u⃗, v⃗) = xy′ − x′y ; colinéaires ⇔ det = 0.",
          "Alignement et parallélisme se ramènent à la colinéarité.",
        ],
        formulas: [
          "AB⃗(xB − xA ; yB − yA)",
          "‖u⃗‖ = √(x² + y²) (repère orthonormé)",
          "det(u⃗, v⃗) = xy′ − x′y",
          "u⃗ et v⃗ colinéaires ⇔ det(u⃗, v⃗) = 0",
        ],
        example: {
          title: "A(−1 ; 2), B(3 ; 4), C(7 ; 6), D(1 ; −1) : alignement et parallélisme",
          steps: [
            "AB⃗(3 − (−1) ; 4 − 2) = AB⃗(4 ; 2) et AC⃗(7 − (−1) ; 6 − 2) = AC⃗(8 ; 4).",
            "det(AB⃗, AC⃗) = 4 × 4 − 8 × 2 = 16 − 16 = 0 : les vecteurs sont colinéaires, donc A, B, C sont alignés.",
            "CD⃗(1 − 7 ; −1 − 6) = CD⃗(−6 ; −7).",
            "det(AB⃗, CD⃗) = 4 × (−7) − (−6) × 2 = −28 + 12 = −16 ≠ 0.",
            "AB⃗ et CD⃗ ne sont pas colinéaires : les droites (AB) et (CD) ne sont pas parallèles.",
          ],
        },
        figure: {
          type: "table",
          title: "Calculer avec les coordonnées",
          caption: "Exemple : u⃗(2 ; −3) et v⃗(−6 ; 9) : det = 2 × 9 − (−6) × (−3) = 18 − 18 = 0, ils sont colinéaires.",
          headers: ["Objet", "Coordonnées ou formule"],
          rows: [
            ["AB⃗", "(xB − xA ; yB − yA)"],
            ["u⃗ + v⃗", "(x + x′ ; y + y′)"],
            ["k u⃗", "(kx ; ky)"],
            ["‖u⃗‖ (repère orthonormé)", "√(x² + y²)"],
            ["det(u⃗, v⃗)", "xy′ − x′y"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-06-s3-p1",
            prompt: "On donne A(2 ; −1) et B(−3 ; 4). Quelles sont les coordonnées de AB⃗ ?",
            choices: ["(5 ; −5)", "(−5 ; 5)", "(−1 ; 3)", "(−5 ; 3)"],
            answer: 1,
            explanation: "« Extrémité moins origine » : AB⃗(xB − xA ; yB − yA) = (−3 − 2 ; 4 − (−1)) = (−5 ; 5). Le piège (5 ; −5) correspond à BA⃗ (origine moins extrémité).",
          },
          {
            id: "2nde-maths-06-s3-p2",
            prompt: "Dans un repère orthonormé, quelle est la norme du vecteur u⃗(3 ; −4) ?",
            choices: ["7", "√7", "25", "5"],
            answer: 3,
            explanation: "‖u⃗‖ = √(x² + y²) = √(3² + (−4)²) = √(9 + 16) = √25 = 5. Attention : (−4)² = 16 (positif), et l’on ne doit pas oublier la racine carrée (25 est le carré de la norme).",
          },
          {
            id: "2nde-maths-06-s3-p3",
            prompt: "Pour quelle valeur de k les vecteurs u⃗(2 ; −3) et v⃗(−6 ; k) sont-ils colinéaires ?",
            choices: ["k = 9", "k = −9", "k = 4", "k = −4"],
            answer: 0,
            explanation: "u⃗ et v⃗ sont colinéaires ⇔ det(u⃗, v⃗) = 0. det(u⃗, v⃗) = 2 × k − (−6) × (−3) = 2k − 18. On résout 2k − 18 = 0 : k = 9. Vérification : v⃗(−6 ; 9) = −3 × u⃗(2 ; −3). ✓",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-maths-06-ex-1",
        prompt: "ABCD est un parallélogramme si et seulement si :",
        choices: ["AB⃗ = CD⃗", "AB⃗ = DC⃗", "AC⃗ = BD⃗", "AD⃗ = CB⃗"],
        answer: 1,
        explanation:
          "Dans le parallélogramme ABCD, les côtés [AB] et [DC] sont parallèles, de même longueur et « parcourus dans le même sens » : AB⃗ = DC⃗. AB⃗ = CD⃗ est faux (sens contraire : AB⃗ = −CD⃗). De même on aurait AD⃗ = BC⃗, et non AD⃗ = CB⃗.",
      },
      {
        id: "2nde-maths-06-ex-2",
        prompt: "Que vaut AB⃗ + BC⃗ ?",
        choices: ["CA⃗", "BA⃗", "AC⃗", "0⃗"],
        answer: 2,
        explanation:
          "Relation de Chasles : l’extrémité du premier vecteur (B) est l’origine du second, on « enchaîne » : AB⃗ + BC⃗ = AC⃗. CA⃗ est l’opposé de ce résultat.",
      },
      {
        id: "2nde-maths-06-ex-3",
        prompt: "On donne A(1 ; 2) et B(4 ; −1). Les coordonnées de AB⃗ sont :",
        choices: ["(5 ; 1)", "(−3 ; 3)", "(3 ; 1)", "(3 ; −3)"],
        answer: 3,
        explanation:
          "« Extrémité moins origine » : AB⃗(xB − xA ; yB − yA) = (4 − 1 ; −1 − 2) = (3 ; −3). (−3 ; 3) correspond à BA⃗ (calcul dans le mauvais sens).",
      },
      {
        id: "2nde-maths-06-ex-4",
        prompt: "On donne u⃗(2 ; −1) et v⃗(−3 ; 4). Les coordonnées de u⃗ + v⃗ sont :",
        choices: ["(−1 ; 3)", "(5 ; −5)", "(−1 ; −5)", "(−6 ; −4)"],
        answer: 0,
        explanation:
          "On additionne coordonnée par coordonnée : (2 + (−3) ; −1 + 4) = (−1 ; 3). (5 ; −5) serait u⃗ − v⃗, et (−6 ; −4) le produit des coordonnées, qui n’a pas de sens ici.",
      },
      {
        id: "2nde-maths-06-ex-5",
        prompt: "On donne u⃗(2 ; −5). Les coordonnées de 3u⃗ sont :",
        choices: ["(5 ; −2)", "(6 ; −15)", "(6 ; −5)", "(2 ; −15)"],
        answer: 1,
        explanation:
          "On multiplie **chaque** coordonnée par 3 : (3 × 2 ; 3 × (−5)) = (6 ; −15).",
      },
      {
        id: "2nde-maths-06-ex-6",
        prompt: "Quel vecteur est colinéaire à u⃗(2 ; 3) ?",
        choices: ["(3 ; 2)", "(4 ; 3)", "(−4 ; −6)", "(2 ; −3)"],
        answer: 2,
        explanation:
          "(−4 ; −6) = −2 × (2 ; 3) : il est colinéaire à u⃗. Avec le déterminant : 2 × (−6) − (−4) × 3 = −12 + 12 = 0. Pour (3 ; 2) : 2 × 2 − 3 × 3 = −5 ≠ 0 ; pour (4 ; 3) : 6 − 12 = −6 ≠ 0 ; pour (2 ; −3) : −6 − 6 = −12 ≠ 0.",
      },
    ],
    test: [
      {
        id: "2nde-maths-06-ct-1",
        prompt: "Que vaut AB⃗ − CB⃗ + CA⃗ ?",
        choices: ["2AB⃗", "AC⃗", "2CA⃗", "0⃗"],
        answer: 3,
        explanation:
          "−CB⃗ = BC⃗, donc l’expression vaut AB⃗ + BC⃗ + CA⃗. Chasles : AB⃗ + BC⃗ = AC⃗, puis AC⃗ + CA⃗ = AA⃗ = 0⃗. On fait le tour du triangle et on revient au point de départ.",
      },
      {
        id: "2nde-maths-06-ct-2",
        prompt: "Pour quelle valeur de m les vecteurs u⃗(m ; 4) et v⃗(3 ; 6) sont-ils colinéaires ?",
        choices: ["m = 8", "m = 2", "m = 4,5", "m = −2"],
        answer: 1,
        explanation:
          "det(u⃗, v⃗) = m × 6 − 3 × 4 = 6m − 12. Colinéaires ⇔ 6m − 12 = 0 ⇔ m = 2. Vérification : u⃗(2 ; 4) = (2/3) × v⃗(3 ; 6), car (2/3) × 3 = 2 et (2/3) × 6 = 4. ✓",
      },
      {
        id: "2nde-maths-06-ct-3",
        prompt: "On donne A(1 ; 1), B(4 ; 2) et C(5 ; 5). Pour que ABCD soit un parallélogramme, D a pour coordonnées :",
        choices: ["D(2 ; 4)", "D(8 ; 6)", "D(0 ; −2)", "D(4 ; 2)"],
        answer: 0,
        explanation:
          "ABCD parallélogramme ⇔ AD⃗ = BC⃗. BC⃗(5 − 4 ; 5 − 2) = (1 ; 3). AD⃗(xD − 1 ; yD − 1) = (1 ; 3) donne xD = 2 et yD = 4. D(2 ; 4). Le piège D(8 ; 6) correspond au parallélogramme ABDC (ordre des lettres différent). Vérification : les diagonales [AC] et [BD] ont le même milieu (3 ; 3). ✓",
      },
      {
        id: "2nde-maths-06-ct-4",
        prompt: "Les points A(1 ; 2), B(3 ; 6) et C(5 ; y) sont alignés lorsque :",
        choices: ["y = 8", "y = 9", "y = 10", "y = 12"],
        answer: 2,
        explanation:
          "AB⃗(2 ; 4) et AC⃗(4 ; y − 2). Alignés ⇔ det(AB⃗, AC⃗) = 0 ⇔ 2(y − 2) − 4 × 4 = 0 ⇔ 2y − 4 − 16 = 0 ⇔ y = 10. Vérification : AC⃗(4 ; 8) = 2AB⃗. ✓",
      },
      {
        id: "2nde-maths-06-ct-5",
        prompt: "On donne u⃗(1 ; 2) et v⃗(3 ; −1). Les coordonnées de 2u⃗ − 3v⃗ sont :",
        choices: ["(−7 ; 1)", "(11 ; 1)", "(−1 ; 1)", "(−7 ; 7)"],
        answer: 3,
        explanation:
          "2u⃗(2 ; 4) et 3v⃗(9 ; −3). Donc 2u⃗ − 3v⃗ = (2 − 9 ; 4 − (−3)) = (−7 ; 7). Le piège (−7 ; 1) vient de l’oubli du double signe moins : 4 − (−3) = 4 + 3 = 7.",
      },
      {
        id: "2nde-maths-06-ct-6",
        prompt: "Dans un repère orthonormé, quelle est la norme de u⃗(−3 ; 4) ?",
        choices: ["7", "1", "5", "25"],
        answer: 2,
        explanation:
          "‖u⃗‖ = √(x² + y²) = √((−3)² + 4²) = √(9 + 16) = √25 = 5. 25 est le carré de la norme ; 7 et 1 proviennent d’additions de coordonnées, qui n’ont pas de sens ici.",
      },
      {
        id: "2nde-maths-06-ct-7",
        prompt: "I est le milieu du segment [AB] si et seulement si :",
        choices: ["AI⃗ = IB⃗", "AI⃗ = BI⃗", "IA⃗ + IB⃗ = AB⃗", "AI⃗ = 2AB⃗"],
        answer: 0,
        explanation:
          "I milieu de [AB] : AI⃗ et IB⃗ ont même direction, même sens (de A vers B) et même longueur, donc AI⃗ = IB⃗. On a aussi IA⃗ + IB⃗ = 0⃗ et AB⃗ = 2AI⃗ (et non AI⃗ = 2AB⃗). AI⃗ = BI⃗ voudrait dire A = B.",
      },
      {
        id: "2nde-maths-06-ct-8",
        prompt: "Quelle est l’image du point M(3 ; −1) par la translation de vecteur u⃗(−2 ; 5) ?",
        choices: ["M′(5 ; −6)", "M′(1 ; 4)", "M′(−6 ; −5)", "M′(−5 ; 6)"],
        answer: 1,
        explanation:
          "M′ est l’image de M ⇔ MM′⃗ = u⃗ ⇔ (x′ − 3 ; y′ + 1) = (−2 ; 5). Donc x′ = 1 et y′ = 4 : M′(1 ; 4). On ajoute les coordonnées du vecteur à celles du point ; (5 ; −6) correspond à une soustraction.",
      },
    ],
    homework: [
      {
        id: "2nde-maths-06-hw-1",
        prompt: "À quel vecteur est égale la somme AC⃗ + BA⃗ + CB⃗ ?",
        choices: ["2AC⃗", "0⃗", "AB⃗", "BC⃗"],
        answer: 1,
        explanation: "On réordonne les termes pour enchaîner les lettres : BA⃗ + AC⃗ + CB⃗. Par Chasles, BA⃗ + AC⃗ = BC⃗, puis BC⃗ + CB⃗ = BB⃗ = 0⃗. La somme est donc le vecteur nul : on part de B et on revient en B.",
      },
      {
        id: "2nde-maths-06-hw-2",
        prompt: "On donne u⃗(1 ; 2) et v⃗(−3 ; 4). Quelles sont les coordonnées de 2u⃗ − v⃗ ?",
        choices: ["(−1 ; 8)", "(5 ; 8)", "(5 ; 0)", "(−1 ; 0)"],
        answer: 2,
        explanation: "On calcule coordonnée par coordonnée : 2u⃗(2 ; 4), puis 2u⃗ − v⃗ = (2 − (−3) ; 4 − 4) = (5 ; 0). Le piège (−1 ; 8) correspond à 2u⃗ + v⃗.",
      },
      {
        id: "2nde-maths-06-hw-3",
        prompt: "On donne A(1 ; 2), B(3 ; 5) et C(7 ; 11). Que peut-on affirmer ?",
        choices: [
          "A, B, C ne sont pas alignés car det(AB⃗, AC⃗) = 6.",
          "A, B, C sont alignés car AB = AC.",
          "A, B, C ne sont pas alignés car AB⃗ ≠ AC⃗.",
          "A, B, C sont alignés car det(AB⃗, AC⃗) = 0.",
        ],
        answer: 3,
        explanation: "AB⃗(3 − 1 ; 5 − 2) = (2 ; 3) et AC⃗(7 − 1 ; 11 − 2) = (6 ; 9). det(AB⃗, AC⃗) = 2 × 9 − 6 × 3 = 18 − 18 = 0 : les vecteurs sont colinéaires (AC⃗ = 3AB⃗), donc A, B, C sont alignés. Le fait que AB⃗ ≠ AC⃗ n’empêche pas l’alignement.",
      },
      {
        id: "2nde-maths-06-hw-4",
        prompt: "On donne A(1 ; 1), B(4 ; 2) et C(5 ; 5). Quelles sont les coordonnées du point D tel que ABCD soit un parallélogramme ?",
        choices: ["D(8 ; 6)", "D(2 ; 4)", "D(0 ; −2)", "D(4 ; 2)"],
        answer: 1,
        explanation: "ABCD est un parallélogramme ⇔ AB⃗ = DC⃗. AB⃗(3 ; 1) et DC⃗(5 − xD ; 5 − yD). On obtient 5 − xD = 3 et 5 − yD = 1, donc D(2 ; 4). Vérification par les diagonales : milieu de [AC] = (3 ; 3) et milieu de [BD] = ((4 + 2)/2 ; (2 + 4)/2) = (3 ; 3). ✓",
      },
    ],
  },

  // ───────────────────────────── Chapitre 7 ─────────────────────────────
  {
    id: "2nde-maths-07",
    title: "Géométrie repérée et droites",
    summary:
      "Calculer dans un repère (milieu, distance), déterminer des équations de droites et résoudre des systèmes de deux équations à deux inconnues.",
    objectives: [
      "Je sais calculer les coordonnées du milieu d’un segment et la distance entre deux points.",
      "Je sais déterminer une équation cartésienne et l’équation réduite d’une droite.",
      "Je sais lire et utiliser le coefficient directeur d’une droite et reconnaître des droites parallèles.",
      "Je sais résoudre un système de deux équations linéaires par substitution ou par combinaison et l’interpréter graphiquement.",
    ],
    sections: [
      {
        title: "Milieu et distance dans un repère",
        body: [
          "On se place dans un repère (O ; I, J) du plan. Chaque point M est repéré par ses **coordonnées** (x ; y) : l’abscisse x se lit sur l’axe horizontal, l’ordonnée y sur l’axe vertical. Le repère est **orthonormé** si les axes sont perpendiculaires et OI = OJ = 1 ; c’est indispensable pour calculer des longueurs.",
          "Le **milieu** M de [AB] a pour coordonnées la moyenne de celles de A et de B : xM = (xA + xB)/2 et yM = (yA + yB)/2. Cette formule est valable dans n’importe quel repère. Elle sert aussi « à l’envers » : connaissant A et le milieu M, on retrouve B par xB = 2xM − xA et yB = 2yM − yA.",
          "Dans un repère **orthonormé**, la **distance** AB se calcule par AB = √((xB − xA)² + (yB − yA)²), conséquence directe du théorème de Pythagore. On l’utilise pour démontrer qu’un triangle est isocèle (deux côtés égaux), équilatéral, ou rectangle (réciproque du théorème de Pythagore).",
          "Pour montrer qu’un quadrilatère est un **parallélogramme**, il suffit de montrer que ses diagonales ont le même milieu ; si, de plus, ses diagonales ont la même longueur, c’est un rectangle.",
        ],
        keyPoints: [
          "Milieu : moyenne des abscisses, moyenne des ordonnées.",
          "Distance : uniquement dans un repère orthonormé.",
          "Diagonales de même milieu ⇔ parallélogramme.",
          "Réciproque de Pythagore : si AB² + BC² = AC², le triangle est rectangle en B.",
        ],
        formulas: [
          "M milieu de [AB] : M((xA + xB)/2 ; (yA + yB)/2)",
          "AB = √((xB − xA)² + (yB − yA)²)",
        ],
        example: {
          title: "A(−2 ; 1), B(2 ; 4), C(5 ; 0) dans un repère orthonormé : nature du triangle ABC",
          steps: [
            "AB = √((2 − (−2))² + (4 − 1)²) = √(16 + 9) = √25 = 5.",
            "BC = √((5 − 2)² + (0 − 4)²) = √(9 + 16) = √25 = 5.",
            "AC = √((5 − (−2))² + (0 − 1)²) = √(49 + 1) = √50 = 5√2.",
            "AB = BC : le triangle est isocèle en B. De plus AB² + BC² = 25 + 25 = 50 = AC² : d’après la réciproque de Pythagore, il est rectangle en B.",
            "Conclusion : ABC est rectangle isocèle en B.",
          ],
        },
        figure: {
          type: "flow",
          title: "Déterminer la nature d’un triangle (repère orthonormé)",
          caption: "Exemple du cours : AB = BC = 5 et AB² + BC² = 50 = AC², donc ABC est rectangle isocèle en B.",
          steps: [
            {
              label: "Calculer les trois longueurs",
              detail: "AB = √((xB − xA)² + (yB − yA)²)",
            },
            {
              label: "Comparer les longueurs",
              detail: "deux égales : isocèle ; trois égales : équilatéral",
            },
            {
              label: "Tester Pythagore",
              detail: "plus grand côté² = somme des carrés des deux autres ?",
            },
            { label: "Conclure", detail: "par une phrase" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-07-s1-p1",
            prompt: "On donne A(−3 ; 5) et B(7 ; −1). Quelles sont les coordonnées du milieu M de [AB] ?",
            choices: ["(5 ; 3)", "(2 ; 2)", "(4 ; 4)", "(2 ; 3)"],
            answer: 1,
            explanation: "On fait la moyenne des abscisses et celle des ordonnées : xM = (−3 + 7)/2 = 4/2 = 2 et yM = (5 + (−1))/2 = 4/2 = 2. Donc M(2 ; 2). Le piège (5 ; 3) vient d’une demi-différence au lieu d’une demi-somme.",
          },
          {
            id: "2nde-maths-07-s1-p2",
            prompt: "Dans un repère orthonormé, on donne A(1 ; −2) et B(4 ; 2). Que vaut AB ?",
            choices: ["7", "√7", "5", "25"],
            answer: 2,
            explanation: "AB = √((4 − 1)² + (2 − (−2))²) = √(3² + 4²) = √(9 + 16) = √25 = 5. Le piège 25 oublie la racine carrée ; 7 additionne les écarts 3 + 4 sans passer par les carrés.",
          },
          {
            id: "2nde-maths-07-s1-p3",
            prompt: "M(5 ; −1) est le milieu de [AB], avec A(2 ; 3). Quelles sont les coordonnées de B ?",
            choices: ["(3,5 ; 1)", "(3 ; −4)", "(7 ; 2)", "(8 ; −5)"],
            answer: 3,
            explanation: "On utilise la formule du milieu « à l’envers » : xB = 2xM − xA = 10 − 2 = 8 et yB = 2yM − yA = −2 − 3 = −5. Donc B(8 ; −5). Vérification : milieu de [AB] = ((2 + 8)/2 ; (3 − 5)/2) = (5 ; −1). ✓ (3,5 ; 1) est le milieu de [AM], pas le point B.",
          },
        ],
      },
      {
        title: "Équations de droites",
        body: [
          "Toute droite du plan admet une **équation cartésienne** de la forme ax + by + c = 0 avec (a ; b) ≠ (0 ; 0) : un point M(x ; y) appartient à la droite si et seulement si ses coordonnées vérifient l’équation. Le vecteur u⃗(−b ; a) est alors un **vecteur directeur** de la droite : il indique sa direction.",
          "Méthode pour obtenir une équation cartésienne de la droite passant par A et dirigée par u⃗ : M(x ; y) est sur la droite ⇔ AM⃗ et u⃗ sont colinéaires ⇔ det(AM⃗, u⃗) = 0. On développe ce déterminant pour obtenir une égalité de la forme ax + by + c = 0.",
          "Si la droite n’est pas parallèle à l’axe des ordonnées, elle admet une unique **équation réduite** y = mx + p, où m est le **coefficient directeur** et p l’**ordonnée à l’origine**. Pour deux points A et B d’abscisses différentes, m = (yB − yA)/(xB − xA). Une droite parallèle à l’axe des ordonnées a une équation de la forme x = k : elle n’a pas de coefficient directeur.",
          "Deux droites d’équations réduites y = mx + p et y = m′x + p′ sont **parallèles** si et seulement si m = m′. Plus généralement, deux droites sont parallèles si et seulement si leurs vecteurs directeurs sont colinéaires.",
        ],
        keyPoints: [
          "ax + by + c = 0 a pour vecteur directeur u⃗(−b ; a).",
          "y = mx + p : m = (yB − yA)/(xB − xA), p = ordonnée à l’origine.",
          "Droite verticale : x = k.",
          "Droites parallèles ⇔ même coefficient directeur.",
        ],
        formulas: [
          "ax + by + c = 0 ; vecteur directeur u⃗(−b ; a)",
          "y = mx + p avec m = (yB − yA)/(xB − xA)",
          "M ∈ (AB) ⇔ det(AM⃗, AB⃗) = 0",
        ],
        example: {
          title: "Équation de la droite d passant par A(1 ; −2) et B(4 ; 4)",
          steps: [
            "AB⃗(4 − 1 ; 4 − (−2)) = AB⃗(3 ; 6) est un vecteur directeur de d.",
            "M(x ; y) ∈ d ⇔ det(AM⃗, AB⃗) = 0, avec AM⃗(x − 1 ; y + 2).",
            "(x − 1) × 6 − 3 × (y + 2) = 0 ⇔ 6x − 6 − 3y − 6 = 0 ⇔ 6x − 3y − 12 = 0, soit, en divisant par 3, 2x − y − 4 = 0.",
            "Équation réduite : y = 2x − 4 (coefficient directeur m = 6/3 = 2, ordonnée à l’origine −4).",
            "Vérification : pour A, 2 × 1 − 4 = −2 ✓ ; pour B, 2 × 4 − 4 = 4 ✓.",
          ],
        },
        figure: {
          type: "function",
          title: "La droite d : y = 2x − 4",
          caption: "Elle passe par A(1 ; −2) et B(4 ; 4) ; coefficient directeur m = 6/3 = 2, ordonnée à l’origine p = −4.",
          xMin: -1,
          xMax: 5,
          yMin: -6,
          yMax: 6,
          curves: [
            { expr: "2*x-4", label: "y = 2x − 4" },
          ],
          points: [
            { x: 1, y: -2, label: "A(1 ; −2)" },
            { x: 4, y: 4, label: "B(4 ; 4)" },
            { x: 0, y: -4, label: "p = −4" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-07-s2-p1",
            prompt: "Quelle est l’équation réduite de la droite passant par A(0 ; 3) et B(2 ; 7) ?",
            choices: ["y = 2x + 3", "y = 3x + 2", "y = 0,5x + 3", "y = 2x + 7"],
            answer: 0,
            explanation: "Coefficient directeur : m = (yB − yA)/(xB − xA) = (7 − 3)/(2 − 0) = 2. A a pour abscisse 0, donc l’ordonnée à l’origine est p = 3. D’où y = 2x + 3. Vérification avec B : 2 × 2 + 3 = 7. ✓",
          },
          {
            id: "2nde-maths-07-s2-p2",
            prompt: "Quel est un vecteur directeur de la droite d’équation 3x − 2y + 5 = 0 ?",
            choices: ["u⃗(3 ; −2)", "u⃗(2 ; 3)", "u⃗(−2 ; 3)", "u⃗(3 ; 2)"],
            answer: 1,
            explanation: "Pour ax + by + c = 0, un vecteur directeur est u⃗(−b ; a). Ici a = 3 et b = −2, donc u⃗(−(−2) ; 3) = u⃗(2 ; 3). Vérification : l’équation réduite est y = 1,5x + 2,5, de coefficient directeur 3/2, ce qui correspond bien à u⃗(2 ; 3).",
          },
          {
            id: "2nde-maths-07-s2-p3",
            prompt: "Laquelle de ces droites est parallèle à la droite d : y = −3x + 1 ?",
            choices: ["y = 3x + 1", "y = x − 3", "y = −3x − 7", "y = (1/3)x + 1"],
            answer: 2,
            explanation: "Deux droites d’équations réduites sont parallèles si et seulement si elles ont le **même coefficient directeur**. d a pour coefficient directeur −3 ; seule y = −3x − 7 a aussi m = −3. Avoir la même ordonnée à l’origine (y = 3x + 1) ne rend pas deux droites parallèles.",
          },
        ],
      },
      {
        title: "Systèmes de deux équations à deux inconnues",
        body: [
          "Un **système de deux équations linéaires à deux inconnues** s’écrit { ax + by = c ; a′x + b′y = c′ }. Une solution est un **couple** (x ; y) qui vérifie les deux équations **à la fois**. Géométriquement, chaque équation est celle d’une droite : résoudre le système revient à chercher les points communs aux deux droites.",
          "Trois cas se présentent. Si les droites sont **sécantes** (vecteurs directeurs non colinéaires, c’est-à-dire ab′ − a′b ≠ 0), le système a une **unique solution**. Si elles sont **parallèles et distinctes**, il n’a **aucune solution**. Si elles sont **confondues**, il en a une **infinité**.",
          "**Méthode par substitution** : on exprime une inconnue en fonction de l’autre dans l’une des équations (idéalement celle où un coefficient vaut 1 ou −1), puis on remplace dans l’autre équation. **Méthode par combinaison** : on multiplie les équations par des nombres bien choisis pour que, en les additionnant ou en les soustrayant, une inconnue disparaisse.",
          "On termine toujours par une **vérification** dans les deux équations et on écrit la solution sous forme de couple : S = {(x ; y)}. Dans un problème concret, on définit clairement les inconnues au départ et on conclut par une phrase.",
        ],
        keyPoints: [
          "Une solution est un couple (x ; y) qui vérifie les deux équations.",
          "ab′ − a′b ≠ 0 : une unique solution (droites sécantes).",
          "Droites parallèles distinctes : aucune solution ; confondues : une infinité.",
          "Substitution ou combinaison, puis vérification.",
        ],
        formulas: ["Système sécant ⇔ ab′ − a′b ≠ 0 (une unique solution)"],
        example: {
          title: "Résoudre par combinaison { 3x + 2y = 7 ; 5x − 2y = 9 }",
          steps: [
            "Les coefficients de y sont opposés (2 et −2) : on additionne membre à membre les deux équations.",
            "(3x + 5x) + (2y − 2y) = 7 + 9, soit 8x = 16, d’où x = 2.",
            "On remplace dans la première équation : 3 × 2 + 2y = 7, donc 2y = 1 et y = 0,5.",
            "Vérification dans la seconde : 5 × 2 − 2 × 0,5 = 10 − 1 = 9. ✓",
            "S = {(2 ; 0,5)}.",
          ],
        },
        figure: {
          type: "table",
          title: "Système de deux équations : les trois cas",
          caption: "Pour le système { ax + by = c ; a′x + b′y = c′ }, on calcule ab′ − a′b.",
          headers: ["Position des deux droites", "Critère", "Nombre de solutions"],
          rows: [
            ["sécantes", "ab′ − a′b ≠ 0", "une unique solution"],
            ["parallèles distinctes", "ab′ − a′b = 0", "aucune solution"],
            ["confondues", "ab′ − a′b = 0", "une infinité de solutions"],
          ],
        },
        practice: [
          {
            id: "2nde-maths-07-s3-p1",
            prompt: "Quelle est la solution du système { x + y = 10 ; x − y = 4 } ?",
            choices: ["(3 ; 7)", "(7 ; 3)", "(6 ; 4)", "(14 ; −4)"],
            answer: 1,
            explanation: "Combinaison : en additionnant les deux équations, les y disparaissent : 2x = 14, donc x = 7. Puis 7 + y = 10 donne y = 3. Vérification : 7 − 3 = 4. ✓ S = {(7 ; 3)} ; le couple (3 ; 7) inverse x et y et ne vérifie pas la seconde équation.",
          },
          {
            id: "2nde-maths-07-s3-p2",
            prompt: "Quelle est la solution du système { 2x + y = 1 ; 3x − 2y = 12 } ?",
            choices: ["(−3 ; 2)", "(2 ; 3)", "(2 ; −3)", "(1 ; −1)"],
            answer: 2,
            explanation: "Substitution : la première équation donne y = 1 − 2x. On remplace dans la seconde : 3x − 2(1 − 2x) = 12 ⇔ 3x − 2 + 4x = 12 ⇔ 7x = 14 ⇔ x = 2. Puis y = 1 − 4 = −3. Vérification : 2 × 2 + (−3) = 1 ✓ et 3 × 2 − 2 × (−3) = 6 + 6 = 12 ✓. S = {(2 ; −3)}.",
          },
          {
            id: "2nde-maths-07-s3-p3",
            prompt: "Combien de solutions le système { 2x − 4y = 3 ; −x + 2y = 5 } admet-il ?",
            choices: [
              "une unique solution",
              "aucune solution",
              "une infinité de solutions",
              "exactement deux solutions",
            ],
            answer: 1,
            explanation: "ab′ − a′b = 2 × 2 − (−1) × (−4) = 4 − 4 = 0 : les droites sont parallèles. En multipliant la seconde équation par −2, on obtient 2x − 4y = −10, incompatible avec 2x − 4y = 3 : les droites sont parallèles et **distinctes**, donc le système n’a aucune solution. Un système linéaire ne peut jamais avoir exactement deux solutions.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-maths-07-ex-1",
        prompt: "Quelles sont les coordonnées du milieu de [AB] avec A(2 ; −4) et B(6 ; 8) ?",
        choices: ["(4 ; 6)", "(4 ; 2)", "(8 ; 4)", "(2 ; 6)"],
        answer: 1,
        explanation:
          "x = (2 + 6)/2 = 4 et y = (−4 + 8)/2 = 4/2 = 2. Le milieu est (4 ; 2). (8 ; 4) correspond à la somme des coordonnées sans division par 2.",
      },
      {
        id: "2nde-maths-07-ex-2",
        prompt: "Dans un repère orthonormé, quelle est la distance AB avec A(1 ; 2) et B(4 ; 6) ?",
        choices: ["7", "√7", "5", "25"],
        answer: 2,
        explanation:
          "AB = √((4 − 1)² + (6 − 2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5. Le piège 7 vient de l’addition 3 + 4 sans passer par les carrés.",
      },
      {
        id: "2nde-maths-07-ex-3",
        prompt: "Quel est le coefficient directeur de la droite passant par A(1 ; 3) et B(3 ; 11) ?",
        choices: ["1/4", "−4", "8", "4"],
        answer: 3,
        explanation:
          "m = (yB − yA)/(xB − xA) = (11 − 3)/(3 − 1) = 8/2 = 4. Attention à ne pas inverser le quotient (on obtiendrait 1/4) : les ordonnées sont au numérateur.",
      },
      {
        id: "2nde-maths-07-ex-4",
        prompt: "Un vecteur directeur de la droite d’équation 2x − 3y + 1 = 0 est :",
        choices: ["u⃗(3 ; 2)", "u⃗(2 ; −3)", "u⃗(−3 ; 2)", "u⃗(2 ; 3)"],
        answer: 0,
        explanation:
          "Pour ax + by + c = 0, un vecteur directeur est u⃗(−b ; a). Ici a = 2 et b = −3, donc u⃗(3 ; 2). Vérification : la droite passe par (1 ; 1) (2 − 3 + 1 = 0) et par (1 + 3 ; 1 + 2) = (4 ; 3) (8 − 9 + 1 = 0). ✓",
      },
      {
        id: "2nde-maths-07-ex-5",
        prompt: "Quel point appartient à la droite d’équation y = −2x + 5 ?",
        choices: ["(1 ; 2)", "(2 ; 1)", "(0 ; −5)", "(3 ; 2)"],
        answer: 1,
        explanation:
          "On remplace x par l’abscisse et on compare avec l’ordonnée. Pour (2 ; 1) : −2 × 2 + 5 = 1 ✓. Pour (1 ; 2) : −2 + 5 = 3 ≠ 2 ; pour (0 ; −5) : 5 ≠ −5 ; pour (3 ; 2) : −6 + 5 = −1 ≠ 2.",
      },
      {
        id: "2nde-maths-07-ex-6",
        prompt: "La solution du système { x + y = 7 ; x − y = 1 } est :",
        choices: ["(3 ; 4)", "(6 ; 1)", "(4 ; 3)", "(5 ; 2)"],
        answer: 2,
        explanation:
          "En additionnant les deux équations : 2x = 8, donc x = 4. Puis y = 7 − 4 = 3. Vérification : 4 − 3 = 1 ✓. Solution (4 ; 3). (3 ; 4) vérifie la première équation mais pas la seconde (3 − 4 = −1).",
      },
    ],
    test: [
      {
        id: "2nde-maths-07-ct-1",
        prompt: "L’équation réduite de la droite passant par A(−1 ; 4) et B(2 ; −2) est :",
        choices: ["y = 2x + 6", "y = −2x + 6", "y = −½x + 3,5", "y = −2x + 2"],
        answer: 3,
        explanation:
          "m = (−2 − 4)/(2 − (−1)) = −6/3 = −2. Puis y = −2x + p passe par A : 4 = −2 × (−1) + p = 2 + p, donc p = 2. Équation : y = −2x + 2. Vérification avec B : −4 + 2 = −2 ✓. Le piège y = −2x + 6 vient d’une erreur de signe (−2 × (−1) = +2).",
      },
      {
        id: "2nde-maths-07-ct-2",
        prompt: "Quelle est l’équation de la droite parallèle à y = 3x − 1 passant par le point (2 ; 1) ?",
        choices: ["y = 3x + 1", "y = 3x − 5", "y = −⅓x + 5/3", "y = 3x − 1"],
        answer: 1,
        explanation:
          "Parallèle ⇔ même coefficient directeur : m = 3. Donc y = 3x + p, et le point (2 ; 1) donne 1 = 6 + p, soit p = −5. Équation : y = 3x − 5. y = 3x − 1 est la droite de départ, qui ne passe pas par (2 ; 1) (3 × 2 − 1 = 5 ≠ 1).",
      },
      {
        id: "2nde-maths-07-ct-3",
        prompt: "Dans un repère orthonormé, on donne A(1 ; 1), B(5 ; 1) et C(1 ; 4). Le triangle ABC est :",
        choices: ["rectangle en A", "isocèle en A", "équilatéral", "rectangle en B"],
        answer: 0,
        explanation:
          "AB = √(4² + 0²) = 4 ; AC = √(0² + 3²) = 3 ; BC = √((1 − 5)² + (4 − 1)²) = √(16 + 9) = 5. Le plus grand côté est [BC] et AB² + AC² = 16 + 9 = 25 = BC² : d’après la réciproque de Pythagore, ABC est rectangle en A (sommet opposé à l’hypoténuse). AB ≠ AC, il n’est pas isocèle.",
      },
      {
        id: "2nde-maths-07-ct-4",
        prompt: "Une équation de la droite passant par A(3 ; 1) et B(3 ; −5) est :",
        choices: ["y = 3", "y = 3x", "x = 3", "Cette droite n’a pas d’équation"],
        answer: 2,
        explanation:
          "A et B ont la même abscisse 3 : la droite (AB) est parallèle à l’axe des ordonnées. Elle n’a pas d’équation réduite (on ne peut pas diviser par xB − xA = 0) mais elle a pour équation x = 3 : tous ses points ont pour abscisse 3.",
      },
      {
        id: "2nde-maths-07-ct-5",
        prompt: "La solution du système { 2x + 3y = 12 ; x − y = 1 } est :",
        choices: ["(2 ; 3)", "(4 ; 3)", "(0 ; 4)", "(3 ; 2)"],
        answer: 3,
        explanation:
          "Substitution : la seconde équation donne x = 1 + y. Dans la première : 2(1 + y) + 3y = 12 ⇔ 2 + 5y = 12 ⇔ y = 2, puis x = 3. Vérification : 6 + 6 = 12 ✓ et 3 − 2 = 1 ✓. (0 ; 4) vérifie la première équation (0 + 12 = 12) mais pas la seconde (0 − 4 ≠ 1) ; (2 ; 3) ne vérifie aucune des deux (4 + 9 = 13).",
      },
      {
        id: "2nde-maths-07-ct-6",
        prompt: "Combien de solutions a le système { 2x − y = 3 ; −4x + 2y = 5 } ?",
        choices: [
          "Une infinité de solutions",
          "Aucune solution",
          "Une unique solution, (2 ; 1)",
          "Une unique solution, (0 ; −3)",
        ],
        answer: 1,
        explanation:
          "ab′ − a′b = 2 × 2 − (−4) × (−1) = 4 − 4 = 0 : les droites sont parallèles. En multipliant la première équation par −2, on obtient −4x + 2y = −6, alors que la seconde impose −4x + 2y = 5. C’est impossible : droites parallèles distinctes, aucune solution. (2 ; 1) et (0 ; −3) vérifient la première équation mais pas la seconde.",
      },
      {
        id: "2nde-maths-07-ct-7",
        prompt: "Quel est le point d’intersection des droites d’équations y = 2x − 1 et y = −x + 5 ?",
        choices: ["(3 ; 2)", "(2 ; 5)", "(2 ; 3)", "(4/3 ; 5/3)"],
        answer: 2,
        explanation:
          "On résout 2x − 1 = −x + 5 ⇔ 3x = 6 ⇔ x = 2. Puis y = 2 × 2 − 1 = 3 (et −2 + 5 = 3 ✓). Le point d’intersection est (2 ; 3). Le piège (3 ; 2) inverse abscisse et ordonnée.",
      },
      {
        id: "2nde-maths-07-ct-8",
        prompt: "M(3 ; −1) est le milieu de [AB] avec A(1 ; 2). Les coordonnées de B sont :",
        choices: ["B(5 ; −4)", "B(2 ; 0,5)", "B(4 ; 1)", "B(−1 ; 5)"],
        answer: 0,
        explanation:
          "xM = (xA + xB)/2 ⇔ xB = 2xM − xA = 6 − 1 = 5 ; yB = 2yM − yA = −2 − 2 = −4. B(5 ; −4). Vérification : ((1 + 5)/2 ; (2 − 4)/2) = (3 ; −1) ✓. B(2 ; 0,5) est le milieu de [AM], pas le point cherché.",
      },
    ],
    homework: [
      {
        id: "2nde-maths-07-hw-1",
        prompt: "Dans un repère orthonormé, on donne A(−1 ; 0), B(3 ; 2) et C(1 ; 6). Quelle est la nature du triangle ABC ?",
        choices: ["équilatéral", "rectangle isocèle en B", "isocèle en A seulement", "rectangle en A"],
        answer: 1,
        explanation: "AB = √(4² + 2²) = √20 ; BC = √((−2)² + 4²) = √20 ; AC = √(2² + 6²) = √40. AB = BC, donc ABC est isocèle en B. De plus AB² + BC² = 20 + 20 = 40 = AC² : par la réciproque de Pythagore, il est rectangle en B. ABC est donc rectangle isocèle en B.",
      },
      {
        id: "2nde-maths-07-hw-2",
        prompt: "On donne A(1 ; 2), B(5 ; 3), C(6 ; 7) et D(2 ; 6) dans un repère orthonormé. Quelle affirmation est vraie ?",
        choices: [
          "ABCD est un rectangle car AC = BD.",
          "ABCD n’est pas un parallélogramme.",
          "Les diagonales [AC] et [BD] ont pour milieu commun (4 ; 5).",
          "ABCD est un parallélogramme car [AC] et [BD] ont le même milieu.",
        ],
        answer: 3,
        explanation: "Milieu de [AC] : ((1 + 6)/2 ; (2 + 7)/2) = (3,5 ; 4,5). Milieu de [BD] : ((5 + 2)/2 ; (3 + 6)/2) = (3,5 ; 4,5). Les diagonales ont le même milieu, donc ABCD est un parallélogramme. En revanche AC = √(5² + 5²) = √50 et BD = √((−3)² + 3²) = √18 : les diagonales n’ont pas la même longueur, ce n’est pas un rectangle.",
      },
      {
        id: "2nde-maths-07-hw-3",
        prompt: "Quelle est l’équation réduite de la droite passant par A(−2 ; 1) et parallèle à la droite d’équation y = 3x − 5 ?",
        choices: ["y = 3x − 5", "y = 3x − 7", "y = 3x + 7", "y = −2x + 1"],
        answer: 2,
        explanation: "Une droite parallèle a le même coefficient directeur, m = 3 : son équation est y = 3x + p. Elle passe par A(−2 ; 1) : 1 = 3 × (−2) + p = −6 + p, donc p = 7. D’où y = 3x + 7. Vérification : 3 × (−2) + 7 = 1. ✓",
      },
      {
        id: "2nde-maths-07-hw-4",
        prompt: "Au cinéma, 3 places adulte et 2 places enfant coûtent 46 € ; 1 place adulte et 4 places enfant coûtent 42 €. Quel est le prix de chaque place ?",
        choices: [
          "adulte 10 €, enfant 8 €",
          "adulte 8 €, enfant 10 €",
          "adulte 12 €, enfant 5 €",
          "adulte 14 €, enfant 2 €",
        ],
        answer: 0,
        explanation: "On note a le prix adulte et e le prix enfant : { 3a + 2e = 46 ; a + 4e = 42 }. La seconde donne a = 42 − 4e ; on substitue : 3(42 − 4e) + 2e = 46 ⇔ 126 − 10e = 46 ⇔ e = 8, puis a = 42 − 32 = 10. Vérification : 30 + 16 = 46 ✓ et 10 + 32 = 42 ✓.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 8 ─────────────────────────────
  {
    id: "2nde-maths-08",
    title: "Statistiques et probabilités",
    summary:
      "Résumer une série statistique par des indicateurs de position et de dispersion, calculer des probabilités et comprendre la fluctuation d’échantillonnage.",
    objectives: [
      "Je sais calculer une moyenne (éventuellement pondérée), une médiane et des quartiles.",
      "Je sais calculer et interpréter l’étendue, l’écart interquartile et l’écart-type.",
      "Je sais calculer une probabilité en situation d’équiprobabilité, à l’aide d’un arbre ou d’un tableau.",
      "Je sais utiliser l’événement contraire et la formule P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
      "Je sais que la fréquence observée sur un grand échantillon se rapproche de la probabilité.",
    ],
    sections: [
      {
        title: "Indicateurs de position : moyenne, médiane, quartiles",
        body: [
          "Une série statistique est une liste de valeurs, souvent présentée sous la forme de valeurs x₁, x₂, …, xₚ d’effectifs n₁, n₂, …, nₚ, avec un effectif total N = n₁ + n₂ + … + nₚ. La **moyenne** est x̄ = (n₁x₁ + n₂x₂ + … + nₚxₚ)/N : c’est la valeur qu’aurait chaque individu si l’on répartissait équitablement le total. Elle est sensible aux valeurs extrêmes.",
          "**Linéarité de la moyenne** : si l’on transforme chaque valeur xᵢ en axᵢ + b, la nouvelle moyenne est ax̄ + b. Ajouter 1 point à toutes les notes d’un devoir augmente donc la moyenne de 1 point ; doubler toutes les valeurs double la moyenne.",
          "La **médiane** Me partage la série **rangée dans l’ordre croissant** en deux groupes de même effectif : au moins la moitié des valeurs sont inférieures ou égales à Me, et au moins la moitié lui sont supérieures ou égales. Si N est impair, Me est la valeur de rang (N + 1)/2 ; si N est pair, c’est la moyenne des valeurs de rangs N/2 et N/2 + 1. Elle est peu sensible aux valeurs extrêmes.",
          "Le **premier quartile** Q₁ est la plus petite valeur de la série telle qu’au moins 25 % des valeurs lui soient inférieures ou égales ; le **troisième quartile** Q₃ est la plus petite valeur telle qu’au moins 75 % des valeurs lui soient inférieures ou égales. En pratique, Q₁ est la valeur de rang N/4 et Q₃ celle de rang 3N/4, ces rangs étant arrondis à l’entier supérieur s’ils ne sont pas entiers.",
        ],
        keyPoints: [
          "Toujours ranger la série avant de chercher médiane et quartiles.",
          "Moyenne : sensible aux valeurs extrêmes ; médiane : peu sensible.",
          "Q₁ : rang N/4 ; Q₃ : rang 3N/4 (arrondis à l’entier supérieur).",
          "Q₁ et Q₃ sont toujours des valeurs de la série.",
        ],
        formulas: [
          "x̄ = (n₁x₁ + n₂x₂ + … + nₚxₚ) / N",
          "Moyenne de axᵢ + b = a x̄ + b",
        ],
        example: {
          title: "Série : 12 ; 5 ; 8 ; 15 ; 9 ; 11 ; 7 ; 14 ; 10 ; 13 (N = 10)",
          steps: [
            "On range : 5 ; 7 ; 8 ; 9 ; 10 ; 11 ; 12 ; 13 ; 14 ; 15.",
            "Moyenne : la somme vaut 104, donc x̄ = 104/10 = 10,4.",
            "Médiane : N = 10 est pair, on prend la moyenne des 5ᵉ et 6ᵉ valeurs : Me = (10 + 11)/2 = 10,5.",
            "Q₁ : 10/4 = 2,5, arrondi au rang 3 : Q₁ = 8.",
            "Q₃ : 3 × 10/4 = 7,5, arrondi au rang 8 : Q₃ = 13. L’écart interquartile vaut 13 − 8 = 5.",
          ],
        },
        figure: {
          type: "bars",
          title: "Notes d’un devoir : effectifs",
          caption: "Série de 12 notes : 8 (2 élèves), 10 (5 élèves), 12 (3 élèves), 15 (2 élèves). Moyenne 11, médiane 10.",
          unit: "élèves",
          data: [
            { label: "8", value: 2 },
            { label: "10", value: 5 },
            { label: "12", value: 3 },
            { label: "15", value: 2 },
          ],
        },
        practice: [
          {
            id: "2nde-maths-08-s1-p1",
            prompt: "Dans une classe, les notes sont : 8 (2 élèves), 10 (5 élèves), 12 (3 élèves) et 15 (2 élèves). Quelle est la moyenne ?",
            choices: ["11,25", "11", "10", "12"],
            answer: 1,
            explanation: "Effectif total : N = 2 + 5 + 3 + 2 = 12. Somme pondérée : 2 × 8 + 5 × 10 + 3 × 12 + 2 × 15 = 16 + 50 + 36 + 30 = 132. Moyenne : x̄ = 132/12 = 11. Le piège 11,25 est la moyenne des quatre valeurs sans tenir compte des effectifs (45/4).",
          },
          {
            id: "2nde-maths-08-s1-p2",
            prompt: "Avec la même série (8 : 2 élèves ; 10 : 5 ; 12 : 3 ; 15 : 2), quelle est la médiane ?",
            choices: ["11", "12", "10", "10,5"],
            answer: 2,
            explanation: "Série rangée : 8 ; 8 ; 10 ; 10 ; 10 ; 10 ; 10 ; 12 ; 12 ; 12 ; 15 ; 15. N = 12 est pair : la médiane est la moyenne des valeurs de rangs 6 et 7, qui valent toutes deux 10. Donc Me = 10. On remarque qu’elle diffère de la moyenne (11).",
          },
          {
            id: "2nde-maths-08-s1-p3",
            prompt: "Une série a pour moyenne 11. On multiplie chaque valeur par 2, puis on ajoute 1. Quelle est la nouvelle moyenne ?",
            choices: ["22", "24", "13", "23"],
            answer: 3,
            explanation: "Par linéarité de la moyenne, si chaque valeur xᵢ devient axᵢ + b, la moyenne devient a x̄ + b. Ici a = 2 et b = 1 : 2 × 11 + 1 = 23. Le piège 24 correspond à 2 × (11 + 1), qui inverse l’ordre des opérations.",
          },
        ],
      },
      {
        title: "Indicateurs de dispersion : étendue, écart interquartile, écart-type",
        body: [
          "Deux séries peuvent avoir la même moyenne et être très différentes : 10 ; 10 ; 10 et 0 ; 10 ; 20 ont toutes deux pour moyenne 10. Les **indicateurs de dispersion** mesurent l’étalement des valeurs. L’**étendue** est la différence entre la plus grande et la plus petite valeur ; elle est simple à calculer mais très sensible aux valeurs extrêmes.",
          "L’**écart interquartile** Q₃ − Q₁ mesure l’étendue de la moitié « centrale » des valeurs ; il est associé à la médiane et peu sensible aux valeurs extrêmes. On visualise le couple (médiane ; quartiles) avec un **diagramme en boîte** qui représente le minimum, Q₁, Me, Q₃ et le maximum.",
          "La **variance** V est la moyenne des carrés des écarts à la moyenne : V = [n₁(x₁ − x̄)² + … + nₚ(xₚ − x̄)²]/N. L’**écart-type** σ = √V s’exprime dans la même unité que les données ; plus il est grand, plus les valeurs sont dispersées autour de la moyenne. Il est associé à la moyenne et s’obtient en pratique avec la calculatrice ou un tableur.",
          "Si l’on ajoute un même nombre b à toutes les valeurs, la série est seulement décalée : l’écart-type ne change pas. Si l’on multiplie toutes les valeurs par a, l’écart-type est multiplié par |a|.",
        ],
        keyPoints: [
          "Étendue = max − min.",
          "Écart interquartile = Q₃ − Q₁ (associé à la médiane).",
          "Écart-type σ = √V (associé à la moyenne), même unité que les données.",
          "Ajouter b ne change pas σ ; multiplier par a multiplie σ par |a|.",
        ],
        formulas: [
          "V = [n₁(x₁ − x̄)² + … + nₚ(xₚ − x̄)²] / N",
          "σ = √V",
          "Écart interquartile = Q₃ − Q₁",
        ],
        example: {
          title: "Écart-type de la série 4 ; 8 ; 6 ; 2 ; 10",
          steps: [
            "Moyenne : (4 + 8 + 6 + 2 + 10)/5 = 30/5 = 6.",
            "Écarts à la moyenne : −2 ; 2 ; 0 ; −4 ; 4. Leurs carrés : 4 ; 4 ; 0 ; 16 ; 16.",
            "Variance : V = (4 + 4 + 0 + 16 + 16)/5 = 40/5 = 8.",
            "Écart-type : σ = √8 = 2√2 ≈ 2,83.",
            "Étendue : 10 − 2 = 8.",
          ],
        },
        figure: {
          type: "figures",
          title: "Indicateurs de la série 4 ; 8 ; 6 ; 2 ; 10",
          caption: "Calculs détaillés dans l’exemple corrigé ci-dessous.",
          items: [
            { value: "6", label: "moyenne x̄" },
            { value: "8", label: "variance V" },
            { value: "≈ 2,83", label: "écart-type σ = √8" },
            { value: "8", label: "étendue (10 − 2)" },
          ],
        },
        practice: [
          {
            id: "2nde-maths-08-s2-p1",
            prompt: "Quelle est l’étendue de la série 12 ; 4 ; 19 ; 7 ; 15 ?",
            choices: ["15", "19", "11", "12"],
            answer: 0,
            explanation: "L’étendue est la différence entre la plus grande et la plus petite valeur : 19 − 4 = 15. Il faut bien repérer le minimum (4) et le maximum (19), même si la série n’est pas rangée.",
          },
          {
            id: "2nde-maths-08-s2-p2",
            prompt: "Quel est l’écart-type de la série 2 ; 4 ; 6 ; 8 ?",
            choices: ["5", "√5", "√20", "2"],
            answer: 1,
            explanation: "Moyenne : (2 + 4 + 6 + 8)/4 = 20/4 = 5. Écarts à la moyenne : −3 ; −1 ; 1 ; 3, dont les carrés valent 9 ; 1 ; 1 ; 9. Variance : V = 20/4 = 5. Écart-type : σ = √V = √5 ≈ 2,24. Le piège 5 est la variance, pas l’écart-type.",
          },
          {
            id: "2nde-maths-08-s2-p3",
            prompt: "Une série a un écart-type de 3. On multiplie toutes les valeurs par 2, puis on ajoute 5. Quel est le nouvel écart-type ?",
            choices: ["11", "8", "6", "3"],
            answer: 2,
            explanation: "Ajouter 5 à toutes les valeurs décale la série sans changer sa dispersion : l’écart-type n’est pas modifié par cet ajout. Multiplier par 2 multiplie l’écart-type par |2| = 2. Le nouvel écart-type vaut donc 2 × 3 = 6. Le piège 11 applique à tort la linéarité de la moyenne.",
          },
        ],
      },
      {
        title: "Probabilités et échantillonnage",
        body: [
          "Une **expérience aléatoire** a plusieurs issues possibles, sans que l’on puisse prévoir laquelle se produira. L’ensemble des issues est l’**univers** Ω. Un **événement** est une partie de Ω. Une **loi de probabilité** associe à chaque issue un nombre compris entre 0 et 1, la somme de ces nombres valant 1 ; la probabilité P(A) d’un événement est la somme des probabilités des issues qui le réalisent.",
          "En situation d’**équiprobabilité** (dé équilibré, tirage au hasard…), toutes les issues ont la même probabilité et P(A) = (nombre d’issues favorables)/(nombre total d’issues). Pour une expérience à plusieurs épreuves, on dénombre les issues avec un **arbre** ou un **tableau à double entrée**.",
          "L’événement **contraire** Ā est réalisé quand A ne l’est pas : P(Ā) = 1 − P(A). L’événement A ∩ B (« A et B ») est réalisé quand les deux le sont ; A ∪ B (« A ou B ») quand au moins l’un des deux l’est, et P(A ∪ B) = P(A) + P(B) − P(A ∩ B). A et B sont **incompatibles** si A ∩ B = ∅ ; alors P(A ∪ B) = P(A) + P(B).",
          "**Échantillonnage** : quand on répète n fois la même expérience, la fréquence observée d’un événement varie d’un échantillon à l’autre (**fluctuation**), mais elle se **stabilise** autour de la probabilité p quand n devient grand (loi des grands nombres). Pour n assez grand, dans environ 95 % des échantillons, l’écart entre la fréquence observée et p est inférieur à 1/√n. Inversement, une fréquence observée sur un grand échantillon permet d’**estimer** une probabilité inconnue.",
        ],
        keyPoints: [
          "Équiprobabilité : P(A) = issues favorables / issues possibles.",
          "P(Ā) = 1 − P(A).",
          "P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
          "La fréquence se rapproche de la probabilité quand n est grand, sans lui être forcément égale.",
        ],
        formulas: [
          "0 ≤ P(A) ≤ 1 ; P(Ω) = 1",
          "P(Ā) = 1 − P(A)",
          "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
        ],
        example: {
          title: "On lance deux dés équilibrés à 6 faces et on additionne les résultats",
          steps: [
            "Un tableau à double entrée 6 × 6 donne 36 issues équiprobables (couples de résultats).",
            "Somme égale à 7 : (1 ; 6), (2 ; 5), (3 ; 4), (4 ; 3), (5 ; 2), (6 ; 1), soit 6 issues : P = 6/36 = 1/6.",
            "Somme ≥ 10 : pour 10, (4 ; 6), (5 ; 5), (6 ; 4) ; pour 11, (5 ; 6), (6 ; 5) ; pour 12, (6 ; 6). Soit 6 issues : P = 6/36 = 1/6.",
            "Événement contraire : P(somme < 10) = 1 − 1/6 = 5/6.",
          ],
        },
        figure: {
          type: "bars",
          title: "Somme de deux dés : nombre d’issues sur 36",
          caption: "La somme 7 est la plus probable (6 issues sur 36, soit 1/6).",
          unit: "issues",
          data: [
            { label: "2", value: 1 },
            { label: "3", value: 2 },
            { label: "4", value: 3 },
            { label: "5", value: 4 },
            { label: "6", value: 5 },
            { label: "7", value: 6 },
            { label: "8", value: 5 },
            { label: "9", value: 4 },
            { label: "10", value: 3 },
            { label: "11", value: 2 },
            { label: "12", value: 1 },
          ],
        },
        practice: [
          {
            id: "2nde-maths-08-s3-p1",
            prompt: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d’obtenir un multiple de 3 ?",
            choices: ["1/2", "1/3", "1/6", "2/3"],
            answer: 1,
            explanation: "Les issues sont équiprobables : 1, 2, 3, 4, 5, 6. Les multiples de 3 sont 3 et 6, soit 2 issues favorables sur 6. P = 2/6 = 1/3.",
          },
          {
            id: "2nde-maths-08-s3-p2",
            prompt: "On a P(A) = 0,35. Que vaut P(Ā) ?",
            choices: ["0,65", "0,35", "−0,35", "1,35"],
            answer: 0,
            explanation: "L’événement contraire vérifie P(Ā) = 1 − P(A) = 1 − 0,35 = 0,65. Une probabilité est toujours comprise entre 0 et 1, ce qui élimine −0,35 et 1,35.",
          },
          {
            id: "2nde-maths-08-s3-p3",
            prompt: "On a P(A) = 0,5, P(B) = 0,4 et P(A ∩ B) = 0,15. Que vaut P(A ∪ B) ?",
            choices: ["0,9", "0,2", "0,6", "0,75"],
            answer: 3,
            explanation: "On applique P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,5 + 0,4 − 0,15 = 0,75. Le piège 0,9 oublie de retirer P(A ∩ B) : les issues communes à A et B seraient comptées deux fois.",
          },
        ],
      },
    ],
    exercise: [
      {
        id: "2nde-maths-08-ex-1",
        prompt: "Quelle est la moyenne de la série 8 ; 12 ; 15 ; 9 ; 11 ?",
        choices: ["10", "11", "12", "55"],
        answer: 1,
        explanation:
          "Somme : 8 + 12 + 15 + 9 + 11 = 55. Effectif : 5 valeurs. Moyenne : 55/5 = 11. 55 est la somme, pas la moyenne.",
      },
      {
        id: "2nde-maths-08-ex-2",
        prompt: "Quelle est la médiane de la série 3 ; 7 ; 9 ; 12 ; 15 ; 20 ?",
        choices: ["9", "12", "10,5", "11"],
        answer: 2,
        explanation:
          "La série est déjà rangée et N = 6 est pair. La médiane est la moyenne des 3ᵉ et 4ᵉ valeurs : (9 + 12)/2 = 21/2 = 10,5. (11 est la moyenne de la série : 66/6 = 11.)",
      },
      {
        id: "2nde-maths-08-ex-3",
        prompt: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d’obtenir un multiple de 3 ?",
        choices: ["1/6", "1/2", "2/3", "1/3"],
        answer: 3,
        explanation:
          "Les issues sont 1, 2, 3, 4, 5, 6, équiprobables. Les multiples de 3 sont 3 et 6 : 2 issues favorables sur 6. P = 2/6 = 1/3.",
      },
      {
        id: "2nde-maths-08-ex-4",
        prompt: "Si P(A) = 0,35, que vaut P(Ā) ?",
        choices: ["0,65", "0,35", "1,35", "0,5"],
        answer: 0,
        explanation:
          "P(Ā) = 1 − P(A) = 1 − 0,35 = 0,65. Une probabilité est toujours comprise entre 0 et 1, donc 1,35 est impossible.",
      },
      {
        id: "2nde-maths-08-ex-5",
        prompt: "Quelle est l’étendue de la série 4 ; 18 ; 7 ; 11 ; 2 ?",
        choices: ["14", "16", "18", "8,4"],
        answer: 1,
        explanation:
          "Étendue = plus grande valeur − plus petite valeur = 18 − 2 = 16. Le piège 14 correspond à 18 − 4 (la première valeur n’est pas forcément la plus petite) ; 8,4 est la moyenne.",
      },
      {
        id: "2nde-maths-08-ex-6",
        prompt: "Un élève a 12 (coefficient 2) et 15 (coefficient 3). Quelle est sa moyenne ?",
        choices: ["13,5", "14", "13,8", "27"],
        answer: 2,
        explanation:
          "Moyenne pondérée : (12 × 2 + 15 × 3)/(2 + 3) = (24 + 45)/5 = 69/5 = 13,8. On divise par la somme des coefficients (5), pas par le nombre de notes. 13,5 serait la moyenne sans coefficients.",
      },
    ],
    test: [
      {
        id: "2nde-maths-08-ct-1",
        prompt: "Quel est l’écart interquartile de la série 2 ; 4 ; 5 ; 7 ; 8 ; 10 ; 12 ; 15 ?",
        choices: ["13", "8", "5", "6"],
        answer: 3,
        explanation:
          "N = 8 et la série est rangée. Q₁ : rang 8/4 = 2, donc Q₁ = 4. Q₃ : rang 3 × 8/4 = 6, donc Q₃ = 10. Écart interquartile : Q₃ − Q₁ = 10 − 4 = 6. 13 est l’étendue (15 − 2).",
      },
      {
        id: "2nde-maths-08-ct-2",
        prompt: "Quel est l’écart-type de la série 2 ; 4 ; 4 ; 4 ; 5 ; 5 ; 7 ; 9 ?",
        choices: ["4", "2", "5", "√32"],
        answer: 1,
        explanation:
          "Moyenne : 40/8 = 5. Carrés des écarts à 5 : 9 ; 1 ; 1 ; 1 ; 0 ; 0 ; 4 ; 16, de somme 32. Variance : V = 32/8 = 4. Écart-type : σ = √4 = 2. Le piège 4 est la variance (on a oublié la racine).",
      },
      {
        id: "2nde-maths-08-ct-3",
        prompt:
          "Une série a pour moyenne 10 et pour écart-type 3. On multiplie toutes les valeurs par 2, puis on ajoute 1. Quels sont la nouvelle moyenne et le nouvel écart-type ?",
        choices: [
          "Moyenne 21, écart-type 7",
          "Moyenne 20, écart-type 6",
          "Moyenne 21, écart-type 6",
          "Moyenne 21, écart-type 3",
        ],
        answer: 2,
        explanation:
          "Moyenne : linéarité, 2 × 10 + 1 = 21. Écart-type : multiplier par 2 multiplie σ par 2, et ajouter 1 ne change pas la dispersion (simple décalage) : σ = 2 × 3 = 6. Le piège « 7 » applique à tort le +1 à l’écart-type.",
      },
      {
        id: "2nde-maths-08-ct-4",
        prompt: "On sait que P(A) = 0,5, P(B) = 0,4 et P(A ∩ B) = 0,15. Que vaut P(A ∪ B) ?",
        choices: ["0,75", "0,9", "0,6", "0,65"],
        answer: 0,
        explanation:
          "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,5 + 0,4 − 0,15 = 0,75. Additionner simplement (0,9) compte deux fois les issues communes à A et B : A et B ne sont pas incompatibles ici.",
      },
      {
        id: "2nde-maths-08-ct-5",
        prompt: "On lance deux pièces équilibrées. Quelle est la probabilité d’obtenir au moins un « pile » ?",
        choices: ["1/2", "2/3", "1/4", "3/4"],
        answer: 3,
        explanation:
          "Les issues équiprobables sont PP, PF, FP, FF (4 issues, et non 3 : PF et FP sont différentes). L’événement contraire « aucun pile » est FF, de probabilité 1/4. Donc P(au moins un pile) = 1 − 1/4 = 3/4. Le piège 2/3 vient du décompte « 0, 1 ou 2 piles » comme si ces cas étaient équiprobables.",
      },
      {
        id: "2nde-maths-08-ct-6",
        prompt: "Quelle est la médiane de la série 14 ; 3 ; 9 ; 21 ; 6 ; 11 ; 8 ?",
        choices: ["21", "9", "11", "10,3"],
        answer: 1,
        explanation:
          "Il faut d’abord **ranger** la série : 3 ; 6 ; 8 ; 9 ; 11 ; 14 ; 21. N = 7 est impair : la médiane est la valeur de rang (7 + 1)/2 = 4, soit 9. Le piège 21 est la 4ᵉ valeur de la série non rangée ; 10,3 est environ la moyenne (72/7).",
      },
      {
        id: "2nde-maths-08-ct-7",
        prompt:
          "Dans une classe de 30 élèves, 18 font du sport, 12 font de la musique et 5 font les deux. On choisit un élève au hasard. Quelle est la probabilité qu’il ne fasse ni sport ni musique ?",
        choices: ["0", "5/6", "1/6", "1/3"],
        answer: 2,
        explanation:
          "Nombre d’élèves faisant sport ou musique : 18 + 12 − 5 = 25 (on retire ceux comptés deux fois). Ceux qui ne font ni l’un ni l’autre : 30 − 25 = 5. Probabilité : 5/30 = 1/6. Le piège 0 vient de 18 + 12 = 30, qui compte deux fois les 5 élèves faisant les deux.",
      },
      {
        id: "2nde-maths-08-ct-8",
        prompt: "On lance 1 000 fois une pièce équilibrée. Quelle affirmation est correcte ?",
        choices: [
          "On obtiendra exactement 500 « pile ».",
          "La fréquence de « pile » sera très probablement proche de 0,5, sans être forcément égale à 0,5.",
          "Après cinq « face » consécutifs, « pile » devient plus probable.",
          "La fréquence de « pile » sera forcément comprise entre 0,49 et 0,51.",
        ],
        answer: 1,
        explanation:
          "La fréquence fluctue mais se rapproche de p = 0,5 quand n est grand. Avec n = 1 000, dans environ 95 % des cas elle est à moins de 1/√1000 ≈ 0,03 de 0,5, soit entre environ 0,47 et 0,53 : rien n’est garanti exactement (ni 500 piles, ni l’intervalle [0,49 ; 0,51]). La pièce n’a pas de mémoire : chaque lancer reste à probabilité 1/2.",
      },
    ],
    homework: [
      {
        id: "2nde-maths-08-hw-1",
        prompt: "On considère la série rangée 3 ; 7 ; 8 ; 10 ; 12 ; 14 ; 15 ; 18. Quel est son écart interquartile ?",
        choices: ["15", "7", "11", "8"],
        answer: 1,
        explanation: "N = 8. Q₁ : 8/4 = 2, c’est la 2ᵉ valeur, soit Q₁ = 7. Q₃ : 3 × 8/4 = 6, c’est la 6ᵉ valeur, soit Q₃ = 14. Écart interquartile : Q₃ − Q₁ = 14 − 7 = 7. Le piège 15 est l’étendue (18 − 3) et 11 la médiane ((10 + 12)/2).",
      },
      {
        id: "2nde-maths-08-hw-2",
        prompt: "On lance deux dés équilibrés à 6 faces et on additionne les résultats. Quelle est la probabilité d’obtenir une somme égale à 8 ?",
        choices: ["1/6", "1/12", "5/36", "8/36"],
        answer: 2,
        explanation: "Il y a 36 issues équiprobables. Somme égale à 8 : (2 ; 6), (3 ; 5), (4 ; 4), (5 ; 3), (6 ; 2), soit 5 issues. P = 5/36 ≈ 0,139. Le piège 1/6 correspond à la somme 7 (6 issues).",
      },
      {
        id: "2nde-maths-08-hw-3",
        prompt: "Un élève a obtenu 12 (coefficient 2), 9 (coefficient 3) et 15 (coefficient 1). Quelle est sa moyenne ?",
        choices: ["11", "12", "10,5", "12,5"],
        answer: 0,
        explanation: "Moyenne pondérée : (2 × 12 + 3 × 9 + 1 × 15)/(2 + 3 + 1) = (24 + 27 + 15)/6 = 66/6 = 11. Le piège 12 est la moyenne sans coefficients ((12 + 9 + 15)/3 = 36/3).",
      },
      {
        id: "2nde-maths-08-hw-4",
        prompt: "On lance 400 fois une pièce équilibrée (p = 0,5). Dans environ 95 % des échantillons, entre quelles valeurs se situe la fréquence de « pile » ?",
        choices: ["[0,49 ; 0,51]", "[0,4 ; 0,6]", "[0,3 ; 0,7]", "[0,45 ; 0,55]"],
        answer: 3,
        explanation: "D’après le cours, pour n assez grand, dans environ 95 % des échantillons l’écart entre la fréquence et p est inférieur à 1/√n. Ici 1/√400 = 1/20 = 0,05. La fréquence est donc en général dans [0,5 − 0,05 ; 0,5 + 0,05] = [0,45 ; 0,55].",
      },
    ],
  },
];

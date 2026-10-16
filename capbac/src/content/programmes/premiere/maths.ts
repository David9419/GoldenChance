import type { Chapter } from "../../types";

export const chapters: Chapter[] = [
  // ───────────────────────────── Chapitre 1 ─────────────────────────────
  {
    id: "1re-maths-01",
    title: "Le second degré",
    summary:
      "Étudier les fonctions polynômes du second degré grâce à la forme canonique et au discriminant pour résoudre des équations, factoriser et déterminer un signe.",
    objectives: [
      "Je sais mettre un trinôme sous forme canonique et en déduire son sommet.",
      "Je sais calculer le discriminant Δ et déterminer le nombre de racines.",
      "Je sais résoudre une équation du second degré et factoriser un trinôme.",
      "Je sais dresser le tableau de signes d’un trinôme et résoudre une inéquation.",
    ],
    sections: [
      {
        title: "Fonctions polynômes du second degré et forme canonique",
        body: [
          "On appelle **fonction polynôme du second degré** (ou **trinôme**) toute fonction f définie sur ℝ par f(x) = ax² + bx + c, où a, b et c sont des réels avec **a ≠ 0**. L’écriture ax² + bx + c est la **forme développée**. Par exemple f(x) = 2x² − 3x + 1 (a = 2, b = −3, c = 1) ou g(x) = −x² + 4 (a = −1, b = 0, c = 4).",
          "Tout trinôme peut s’écrire sous la **forme canonique** f(x) = a(x − α)² + β, avec α = −b/(2a) et β = f(α). Pour l’obtenir à la main, on factorise par a puis on reconnaît le début d’une identité remarquable : x² + px = (x + p/2)² − (p/2)². Par exemple x² − 6x + 5 = (x − 3)² − 9 + 5 = (x − 3)² − 4.",
          "La forme canonique révèle la géométrie : la courbe de f est une **parabole** de sommet S(α ; β), symétrique par rapport à la droite verticale d’équation x = α. Si **a > 0**, la parabole est « tournée vers le haut » : f est décroissante sur ]−∞ ; α] puis croissante sur [α ; +∞[ et β est le **minimum** de f. Si **a < 0**, c’est l’inverse et β est le **maximum** de f.",
          "Retenir ces trois formes (développée, canonique, factorisée quand elle existe) est essentiel : la forme développée donne f(0) = c, la forme canonique donne le sommet et les variations, la forme factorisée donne les racines et le signe.",
        ],
        keyPoints: [
          "Un trinôme s’écrit ax² + bx + c avec a ≠ 0.",
          "Forme canonique : a(x − α)² + β, avec α = −b/(2a) et β = f(α).",
          "Sommet de la parabole : S(α ; β) ; axe de symétrie x = α.",
          "a > 0 : minimum β en α ; a < 0 : maximum β en α.",
        ],
        formulas: [
          "f(x) = ax² + bx + c = a(x − α)² + β",
          "α = −b/(2a)    β = f(α)",
          "x² + px = (x + p/2)² − p²/4",
        ],
        example: {
          title: "Forme canonique et variations de f(x) = 2x² − 8x + 3",
          steps: [
            "On factorise par a = 2 les deux premiers termes : f(x) = 2(x² − 4x) + 3.",
            "On complète le carré : x² − 4x = (x − 2)² − 4.",
            "Donc f(x) = 2[(x − 2)² − 4] + 3 = 2(x − 2)² − 8 + 3 = 2(x − 2)² − 5.",
            "Vérification : α = −b/(2a) = 8/4 = 2 et f(2) = 8 − 16 + 3 = −5. ✔",
            "Comme a = 2 > 0, f est décroissante sur ]−∞ ; 2], croissante sur [2 ; +∞[ et admet un minimum égal à −5 atteint en x = 2.",
          ],
        },
      },
      {
        title: "Discriminant et résolution de ax² + bx + c = 0",
        body: [
          "On appelle **racine** du trinôme tout réel x tel que ax² + bx + c = 0. Pour savoir s’il en existe, on calcule le **discriminant** Δ = b² − 4ac. En effet, la forme canonique peut s’écrire f(x) = a[(x + b/(2a))² − Δ/(4a²)] : tout dépend donc du signe de Δ.",
          "**Si Δ > 0**, l’équation a deux solutions distinctes : x₁ = (−b − √Δ)/(2a) et x₂ = (−b + √Δ)/(2a). **Si Δ = 0**, elle a une unique solution (dite racine double) : x₀ = −b/(2a). **Si Δ < 0**, elle n’a aucune solution réelle : un carré augmenté d’un nombre strictement positif ne peut pas être nul.",
          "Avant de foncer sur Δ, observez l’équation : si c = 0, on factorise directement par x (x(ax + b) = 0) ; si b = 0, on isole x² (x² = −c/a). Ces raccourcis évitent des calculs et des erreurs.",
          "Lorsque deux racines x₁ et x₂ existent, elles vérifient les relations **x₁ + x₂ = −b/a** et **x₁ × x₂ = c/a**. Elles permettent de vérifier un résultat ou de trouver une racine quand on connaît déjà l’autre (racine « évidente » comme 1, −1, 2…).",
        ],
        keyPoints: [
          "Δ = b² − 4ac.",
          "Δ > 0 : deux racines ; Δ = 0 : une racine double ; Δ < 0 : aucune racine réelle.",
          "Somme des racines : −b/a ; produit des racines : c/a.",
          "Penser aux cas particuliers c = 0 ou b = 0 avant de calculer Δ.",
        ],
        formulas: [
          "Δ = b² − 4ac",
          "Δ > 0 : x₁ = (−b − √Δ)/(2a) ; x₂ = (−b + √Δ)/(2a)",
          "Δ = 0 : x₀ = −b/(2a)",
          "x₁ + x₂ = −b/a    x₁x₂ = c/a",
        ],
        example: {
          title: "Résoudre 3x² − 5x − 2 = 0",
          steps: [
            "On identifie a = 3, b = −5, c = −2.",
            "Δ = (−5)² − 4 × 3 × (−2) = 25 + 24 = 49 > 0, et √Δ = 7.",
            "x₁ = (5 − 7)/6 = −2/6 = −1/3 et x₂ = (5 + 7)/6 = 2.",
            "Contrôle : x₁ + x₂ = −1/3 + 2 = 5/3 = −b/a ✔ et x₁x₂ = −2/3 = c/a ✔.",
            "Conclusion : S = {−1/3 ; 2}.",
          ],
        },
      },
      {
        title: "Factorisation et signe d’un trinôme",
        body: [
          "Les racines permettent de **factoriser** le trinôme. Si Δ > 0 : ax² + bx + c = a(x − x₁)(x − x₂). Si Δ = 0 : ax² + bx + c = a(x − x₀)². Si Δ < 0, le trinôme ne se factorise pas en produit de facteurs du premier degré dans ℝ. Attention à ne jamais oublier le coefficient a devant les parenthèses.",
          "Le **signe** du trinôme se lit alors facilement. Règle à retenir : **ax² + bx + c est du signe de a, sauf entre ses racines** (lorsqu’elles existent). Si Δ < 0, le trinôme garde le signe de a sur tout ℝ ; si Δ = 0, il a le signe de a partout et s’annule seulement en x₀.",
          "Pour résoudre une **inéquation** du second degré, on se ramène à « trinôme ≥ 0 » (ou ≤, <, >) en passant tout dans un membre, on cherche les racines, on dresse le tableau de signes puis on lit les intervalles solutions en faisant attention aux crochets (inclus si l’inégalité est large, exclus si elle est stricte).",
          "Ces outils servent aussi en modélisation : maximiser une aire, un bénéfice, déterminer quand une hauteur dépasse un seuil… Le plus souvent, on traduit l’énoncé en trinôme, puis on utilise la forme canonique (pour un extremum) ou les racines (pour un seuil).",
        ],
        keyPoints: [
          "Δ > 0 : f(x) = a(x − x₁)(x − x₂).",
          "Δ = 0 : f(x) = a(x − x₀)².",
          "Signe de a à l’extérieur des racines, signe contraire entre les racines.",
          "Δ < 0 : signe de a sur tout ℝ.",
        ],
        formulas: [
          "ax² + bx + c = a(x − x₁)(x − x₂)   (Δ > 0)",
          "ax² + bx + c = a(x − x₀)²   (Δ = 0)",
        ],
        example: {
          title: "Résoudre −x² + 2x + 3 > 0",
          steps: [
            "a = −1, b = 2, c = 3 ; Δ = 4 + 12 = 16 > 0, √Δ = 4.",
            "Racines : x₁ = (−2 − 4)/(−2) = 3 et x₂ = (−2 + 4)/(−2) = −1.",
            "Factorisation : −x² + 2x + 3 = −(x + 1)(x − 3).",
            "a = −1 < 0 : le trinôme est négatif à l’extérieur des racines et positif entre elles.",
            "Inégalité stricte, donc racines exclues : S = ]−1 ; 3[.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-maths-01-ex-1",
        prompt: "Quelle est la forme canonique de f(x) = x² − 6x + 5 ?",
        choices: ["(x + 3)² − 4", "(x − 3)² − 4", "(x − 3)² + 5", "(x − 6)² − 31"],
        answer: 1,
        explanation:
          "On complète le carré : x² − 6x = (x − 3)² − 9. Donc f(x) = (x − 3)² − 9 + 5 = (x − 3)² − 4. Vérification avec les formules : α = −b/(2a) = 6/2 = 3 et β = f(3) = 9 − 18 + 5 = −4.",
      },
      {
        id: "1re-maths-01-ex-2",
        prompt: "Quel est le discriminant du trinôme 2x² + 3x − 2 ?",
        choices: ["−7", "7", "25", "−25"],
        answer: 2,
        explanation:
          "a = 2, b = 3, c = −2. Δ = b² − 4ac = 3² − 4 × 2 × (−2) = 9 + 16 = 25. Attention au signe de c : −4 × 2 × (−2) = +16.",
      },
      {
        id: "1re-maths-01-ex-3",
        prompt: "Quelles sont les solutions de x² − 5x + 6 = 0 ?",
        choices: ["2 et 3", "−2 et −3", "1 et 6", "Aucune solution réelle"],
        answer: 0,
        explanation:
          "Δ = (−5)² − 4 × 1 × 6 = 25 − 24 = 1 > 0, √Δ = 1. x₁ = (5 − 1)/2 = 2 et x₂ = (5 + 1)/2 = 3. Contrôle : somme 5 = −b/a et produit 6 = c/a.",
      },
      {
        id: "1re-maths-01-ex-4",
        prompt: "Combien l’équation x² + x + 1 = 0 admet-elle de solutions réelles ?",
        choices: ["Deux solutions", "Une solution double", "Aucune solution réelle", "Une infinité"],
        answer: 2,
        explanation:
          "Δ = 1² − 4 × 1 × 1 = 1 − 4 = −3 < 0. Un discriminant strictement négatif signifie qu’il n’y a aucune racine réelle : la parabole (a = 1 > 0) reste entièrement au-dessus de l’axe des abscisses.",
      },
      {
        id: "1re-maths-01-ex-5",
        prompt: "On considère f(x) = −2(x − 1)² + 8. Que peut-on dire du sommet de sa parabole ?",
        choices: ["S(−1 ; 8), minimum", "S(1 ; 8), maximum", "S(1 ; −8), maximum", "S(8 ; 1), minimum"],
        answer: 1,
        explanation:
          "La forme canonique a(x − α)² + β donne directement α = 1 (attention : (x − 1) correspond à α = +1) et β = 8. Comme a = −2 < 0, la parabole est tournée vers le bas : 8 est le maximum de f, atteint en x = 1.",
      },
      {
        id: "1re-maths-01-ex-6",
        prompt: "Quelle est la forme factorisée de x² − 4x + 4 ?",
        choices: ["(x + 2)²", "(x − 2)(x + 2)", "(x − 4)(x + 1)", "(x − 2)²"],
        answer: 3,
        explanation:
          "Δ = 16 − 16 = 0 : une racine double x₀ = −b/(2a) = 4/2 = 2. Donc x² − 4x + 4 = 1 × (x − 2)². On reconnaît aussi l’identité remarquable a² − 2ab + b² avec a = x et b = 2.",
      },
    ],
    test: [
      {
        id: "1re-maths-01-ct-1",
        prompt: "Quel est l’ensemble des solutions de l’inéquation x² − x − 6 ≤ 0 ?",
        choices: ["]−∞ ; −2] ∪ [3 ; +∞[", "[−2 ; 3]", "[−3 ; 2]", "]−2 ; 3["],
        answer: 1,
        explanation:
          "Δ = 1 + 24 = 25, √Δ = 5. Racines : (1 − 5)/2 = −2 et (1 + 5)/2 = 3. Comme a = 1 > 0, le trinôme est négatif entre les racines. L’inégalité est large (≤) donc les racines sont incluses : S = [−2 ; 3]. Piège : ]−2 ; 3[ correspondrait à une inégalité stricte.",
      },
      {
        id: "1re-maths-01-ct-2",
        prompt: "Pour tout réel x, le nombre −x² + 4x − 5 est :",
        choices: ["strictement négatif", "strictement positif", "nul en x = 2", "positif puis négatif"],
        answer: 0,
        explanation:
          "Δ = 16 − 4 × (−1) × (−5) = 16 − 20 = −4 < 0 : pas de racine. Le trinôme garde donc le signe de a = −1 sur tout ℝ : il est strictement négatif. Contrôle : en x = 2 (sommet), −4 + 8 − 5 = −1 < 0, ce qui élimine aussi la proposition « nul en x = 2 ».",
      },
      {
        id: "1re-maths-01-ct-3",
        prompt: "Pour quelle valeur strictement positive de m l’équation x² + mx + 9 = 0 admet-elle une racine double ?",
        choices: ["m = 3", "m = 9", "m = 36", "m = 6"],
        answer: 3,
        explanation:
          "Racine double ⇔ Δ = 0. Ici Δ = m² − 4 × 1 × 9 = m² − 36. Δ = 0 ⇔ m² = 36 ⇔ m = 6 ou m = −6. La valeur strictement positive est m = 6. Vérification : x² + 6x + 9 = (x + 3)², racine double −3.",
      },
      {
        id: "1re-maths-01-ct-4",
        prompt: "Quelle est une forme factorisée de 2x² − x − 1 ?",
        choices: ["(x − 1)(2x + 1)", "(x + 1)(2x − 1)", "2(x − 1)(x − 1/2)", "(2x − 1)(x − 1)"],
        answer: 0,
        explanation:
          "Δ = 1 + 8 = 9, √Δ = 3. Racines : (1 − 3)/4 = −1/2 et (1 + 3)/4 = 1. Donc 2x² − x − 1 = 2(x − 1)(x + 1/2) = (x − 1)(2x + 1). Vérification en développant : 2x² + x − 2x − 1 = 2x² − x − 1 ✔.",
      },
      {
        id: "1re-maths-01-ct-5",
        prompt: "Le réel 2 est solution de x² − 7x + k = 0. Quelle est l’autre solution ?",
        choices: ["3", "5", "10", "−5"],
        answer: 1,
        explanation:
          "Étape 1 : 2 est solution donc 4 − 14 + k = 0, d’où k = 10. Étape 2 : la somme des racines vaut −b/a = 7, donc l’autre racine est 7 − 2 = 5. Contrôle avec le produit : 2 × 5 = 10 = c/a ✔.",
      },
      {
        id: "1re-maths-01-ct-6",
        prompt: "Que peut-on dire de f(x) = −x² + 6x − 1 sur ℝ ?",
        choices: [
          "Elle admet un minimum égal à 8 atteint en 3",
          "Elle admet un maximum égal à −1 atteint en 0",
          "Elle admet un maximum égal à 8 atteint en 3",
          "Elle admet un maximum égal à 3 atteint en 8",
        ],
        answer: 2,
        explanation:
          "a = −1 < 0 : la parabole est tournée vers le bas, il y a un maximum. α = −b/(2a) = −6/(−2) = 3 et β = f(3) = −9 + 18 − 1 = 8. Le maximum vaut 8 et il est atteint en x = 3. Attention à ne pas inverser α (abscisse) et β (valeur).",
      },
      {
        id: "1re-maths-01-ct-7",
        prompt: "Quel est l’ensemble des solutions de (x − 1)² = 2x − 2 ?",
        choices: ["{3}", "{1 ; 3}", "{1}", "{−1 ; 3}"],
        answer: 1,
        explanation:
          "On remarque que 2x − 2 = 2(x − 1). L’équation devient (x − 1)² − 2(x − 1) = 0, soit (x − 1)(x − 1 − 2) = 0, c’est-à-dire (x − 1)(x − 3) = 0. Donc x = 1 ou x = 3. Piège : diviser par (x − 1) ferait perdre la solution x = 1 (on ne divise jamais par une expression qui peut être nulle).",
      },
      {
        id: "1re-maths-01-ct-8",
        prompt: "Un rectangle a un périmètre de 20 m et une aire de 21 m². Quelles sont ses dimensions ?",
        choices: ["4 m et 6 m", "2 m et 8 m", "1 m et 21 m", "3 m et 7 m"],
        answer: 3,
        explanation:
          "Si x est la longueur d’un côté, l’autre vaut 10 − x (demi-périmètre 10). L’aire donne x(10 − x) = 21, soit x² − 10x + 21 = 0. Δ = 100 − 84 = 16, racines (10 − 4)/2 = 3 et (10 + 4)/2 = 7. Les dimensions sont 3 m et 7 m (3 + 7 = 10 ✔, 3 × 7 = 21 ✔).",
      },
    ],
  },

  // ───────────────────────────── Chapitre 2 ─────────────────────────────
  {
    id: "1re-maths-02",
    title: "Suites numériques",
    summary:
      "Définir une suite de façon explicite ou par récurrence, reconnaître les suites arithmétiques et géométriques, calculer leurs termes et leurs sommes, et étudier leur sens de variation.",
    objectives: [
      "Je sais calculer des termes d’une suite définie explicitement ou par récurrence.",
      "Je sais reconnaître une suite arithmétique ou géométrique et donner son terme général.",
      "Je sais calculer la somme de termes consécutifs d’une suite arithmétique ou géométrique.",
      "Je sais étudier le sens de variation d’une suite.",
    ],
    sections: [
      {
        title: "Généralités sur les suites",
        body: [
          "Une **suite numérique** u associe à chaque entier naturel n un réel noté uₙ, appelé **terme de rang n** (ou terme d’indice n). On note la suite (uₙ). Attention : uₙ₊₁ est le terme qui suit uₙ, alors que uₙ + 1 est le terme uₙ augmenté de 1.",
          "Une suite peut être définie de **façon explicite** : uₙ = f(n). On calcule alors directement n’importe quel terme, par exemple si uₙ = n² − 1, alors u₁₀ = 99. Elle peut aussi être définie **par récurrence** : on donne le premier terme et une relation uₙ₊₁ = f(uₙ). Pour obtenir u₁₀, il faut alors calculer de proche en proche u₁, u₂, … (ce qui se programme facilement avec une boucle en Python ou au tableur).",
          "Une suite (uₙ) est **croissante** si uₙ₊₁ ≥ uₙ pour tout n, **décroissante** si uₙ₊₁ ≤ uₙ pour tout n, **constante** si uₙ₊₁ = uₙ. La méthode principale consiste à étudier le **signe de uₙ₊₁ − uₙ**. Si tous les termes sont strictement positifs, on peut aussi comparer le quotient uₙ₊₁/uₙ à 1.",
          "Lorsque uₙ = f(n) avec f monotone sur [0 ; +∞[, la suite a le même sens de variation que f. En revanche, pour une suite définie par récurrence, ce raisonnement ne fonctionne pas : il faut revenir à uₙ₊₁ − uₙ.",
        ],
        keyPoints: [
          "uₙ₊₁ (terme suivant) ≠ uₙ + 1 (terme augmenté de 1).",
          "Explicite : uₙ = f(n) ; récurrence : u₀ donné et uₙ₊₁ = f(uₙ).",
          "Croissante : uₙ₊₁ − uₙ ≥ 0 pour tout n.",
          "Si uₙ = f(n) et f croissante sur [0 ; +∞[, alors (uₙ) est croissante.",
        ],
        formulas: [
          "(uₙ) croissante ⇔ uₙ₊₁ − uₙ ≥ 0 pour tout n",
          "(uₙ) décroissante ⇔ uₙ₊₁ − uₙ ≤ 0 pour tout n",
          "Si uₙ > 0 : uₙ₊₁/uₙ ≥ 1 ⇔ croissante",
        ],
        example: {
          title: "Sens de variation de uₙ = 3n² − 2n",
          steps: [
            "uₙ₊₁ = 3(n + 1)² − 2(n + 1) = 3n² + 6n + 3 − 2n − 2 = 3n² + 4n + 1.",
            "uₙ₊₁ − uₙ = 3n² + 4n + 1 − 3n² + 2n = 6n + 1.",
            "Pour tout entier n ≥ 0, 6n + 1 ≥ 1 > 0.",
            "Donc uₙ₊₁ > uₙ pour tout n : la suite (uₙ) est strictement croissante.",
          ],
        },
      },
      {
        title: "Suites arithmétiques",
        body: [
          "Une suite (uₙ) est **arithmétique** s’il existe un réel r, appelé **raison**, tel que pour tout n : uₙ₊₁ = uₙ + r. On passe d’un terme au suivant en **ajoutant toujours le même nombre**. Pour prouver qu’une suite est arithmétique, on montre que uₙ₊₁ − uₙ est une constante (qui ne dépend pas de n).",
          "Le **terme général** s’écrit uₙ = u₀ + nr, et plus généralement uₙ = uₚ + (n − p)r pour tous entiers n et p. Ainsi, connaissant deux termes, on retrouve la raison : r = (uₙ − uₚ)/(n − p). Les points (n ; uₙ) sont alignés : une suite arithmétique modélise une **croissance linéaire** (augmentation de la même quantité à chaque étape).",
          "Le sens de variation se lit sur la raison : si r > 0, la suite est strictement croissante ; si r < 0, elle est strictement décroissante ; si r = 0, elle est constante.",
          "**Somme de termes consécutifs** : S = (nombre de termes) × (premier terme + dernier terme)/2. En particulier 1 + 2 + … + n = n(n + 1)/2. Attention au décompte : de u₀ à uₙ il y a n + 1 termes.",
        ],
        keyPoints: [
          "Arithmétique ⇔ uₙ₊₁ − uₙ = r constant.",
          "uₙ = u₀ + nr = uₚ + (n − p)r.",
          "r > 0 : croissante ; r < 0 : décroissante.",
          "De u₀ à uₙ : n + 1 termes.",
        ],
        formulas: [
          "uₙ₊₁ = uₙ + r",
          "uₙ = u₀ + nr",
          "1 + 2 + … + n = n(n + 1)/2",
          "S = nombre de termes × (premier + dernier)/2",
        ],
        example: {
          title: "Somme des termes d’une suite arithmétique",
          steps: [
            "Soit (uₙ) arithmétique avec u₀ = 7 et r = 4. On cherche S = u₀ + u₁ + … + u₁₂.",
            "Dernier terme : u₁₂ = 7 + 12 × 4 = 55.",
            "Nombre de termes : de 0 à 12, il y en a 13.",
            "S = 13 × (7 + 55)/2 = 13 × 31 = 403.",
          ],
        },
      },
      {
        title: "Suites géométriques et sommes",
        body: [
          "Une suite (vₙ) est **géométrique** s’il existe un réel q, appelé **raison**, tel que pour tout n : vₙ₊₁ = q × vₙ. On passe d’un terme au suivant en **multipliant toujours par le même nombre**. Pour une suite à termes non nuls, on le prouve en montrant que vₙ₊₁/vₙ est constant.",
          "Le **terme général** s’écrit vₙ = v₀ × qⁿ, et plus généralement vₙ = vₚ × qⁿ⁻ᵖ. Les suites géométriques modélisent les **évolutions à taux constant** : une hausse de t % correspond à q = 1 + t/100, une baisse de t % à q = 1 − t/100. Par exemple, un capital placé à 3 % d’intérêts composés est multiplié par 1,03 chaque année.",
          "Sens de variation lorsque v₀ > 0 : si q > 1, la suite est croissante ; si 0 < q < 1, elle est décroissante ; si q = 1, elle est constante. Si v₀ < 0, les sens sont inversés. Si q < 0, les termes changent de signe à chaque rang : la suite n’est pas monotone. On peut le justifier par vₙ₊₁ − vₙ = v₀qⁿ(q − 1).",
          "**Somme de termes consécutifs** : pour q ≠ 1, 1 + q + q² + … + qⁿ = (1 − qⁿ⁺¹)/(1 − q). Plus généralement, S = premier terme × (1 − q^(nombre de termes))/(1 − q). Cette formule sert par exemple à calculer le total de versements qui augmentent d’un pourcentage fixe.",
        ],
        keyPoints: [
          "Géométrique ⇔ vₙ₊₁ = q × vₙ.",
          "vₙ = v₀ × qⁿ = vₚ × qⁿ⁻ᵖ.",
          "Hausse de t % : q = 1 + t/100 ; baisse de t % : q = 1 − t/100.",
          "v₀ > 0 et q > 1 : croissante ; v₀ > 0 et 0 < q < 1 : décroissante.",
        ],
        formulas: [
          "vₙ₊₁ = q × vₙ",
          "vₙ = v₀ × qⁿ",
          "1 + q + … + qⁿ = (1 − qⁿ⁺¹)/(1 − q)   (q ≠ 1)",
          "S = premier terme × (1 − q^(nb de termes))/(1 − q)",
        ],
        example: {
          title: "Une population qui augmente de 5 % par an",
          steps: [
            "Une ville compte 20 000 habitants en 2026 (rang 0) et sa population augmente de 5 % par an.",
            "Augmenter de 5 % revient à multiplier par 1,05 : pₙ₊₁ = 1,05 × pₙ, suite géométrique de raison q = 1,05.",
            "Terme général : pₙ = 20 000 × 1,05ⁿ.",
            "En 2030 (n = 4) : p₄ = 20 000 × 1,05⁴ ≈ 20 000 × 1,2155 ≈ 24 310 habitants.",
            "Comme p₀ > 0 et q > 1, la suite est croissante : la population ne cesse d’augmenter.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-maths-02-ex-1",
        prompt: "Soit uₙ = 3n − 2. Que vaut u₅ ?",
        choices: ["13", "15", "10", "17"],
        answer: 0,
        explanation:
          "La suite est définie de façon explicite : on remplace n par 5. u₅ = 3 × 5 − 2 = 15 − 2 = 13.",
      },
      {
        id: "1re-maths-02-ex-2",
        prompt: "Soit u₀ = 2 et uₙ₊₁ = 2uₙ − 1. Que vaut u₃ ?",
        choices: ["5", "7", "9", "17"],
        answer: 2,
        explanation:
          "Suite définie par récurrence : on calcule de proche en proche. u₁ = 2 × 2 − 1 = 3 ; u₂ = 2 × 3 − 1 = 5 ; u₃ = 2 × 5 − 1 = 9.",
      },
      {
        id: "1re-maths-02-ex-3",
        prompt: "(uₙ) est arithmétique de premier terme u₀ = 4 et de raison r = −3. Que vaut u₁₀ ?",
        choices: ["34", "−26", "−29", "−30"],
        answer: 1,
        explanation:
          "uₙ = u₀ + nr, donc u₁₀ = 4 + 10 × (−3) = 4 − 30 = −26.",
      },
      {
        id: "1re-maths-02-ex-4",
        prompt: "(vₙ) est géométrique de premier terme v₀ = 5 et de raison q = 2. Que vaut v₄ ?",
        choices: ["40", "160", "13", "80"],
        answer: 3,
        explanation:
          "vₙ = v₀ × qⁿ, donc v₄ = 5 × 2⁴ = 5 × 16 = 80. (Le piège 13 = 5 + 4 × 2 correspond à une suite arithmétique.)",
      },
      {
        id: "1re-maths-02-ex-5",
        prompt: "Que vaut la somme 1 + 2 + 3 + … + 100 ?",
        choices: ["5000", "5050", "10 100", "4950"],
        answer: 1,
        explanation:
          "On applique 1 + 2 + … + n = n(n + 1)/2 avec n = 100 : 100 × 101/2 = 10 100/2 = 5050.",
      },
      {
        id: "1re-maths-02-ex-6",
        prompt: "Quel est le sens de variation de la suite uₙ = 5 − 2n ?",
        choices: ["Croissante", "Décroissante", "Constante", "Ni croissante ni décroissante"],
        answer: 1,
        explanation:
          "uₙ₊₁ − uₙ = 5 − 2(n + 1) − (5 − 2n) = −2 < 0. La suite est arithmétique de raison −2, donc strictement décroissante.",
      },
    ],
    test: [
      {
        id: "1re-maths-02-ct-1",
        prompt: "(uₙ) est arithmétique avec u₃ = 11 et u₇ = 23. Que vaut u₀ ?",
        choices: ["2", "3", "5", "−1"],
        answer: 0,
        explanation:
          "Entre u₃ et u₇, on ajoute 4 fois la raison : u₇ = u₃ + 4r, donc 23 = 11 + 4r et r = 3. Puis u₃ = u₀ + 3r donne 11 = u₀ + 9, d’où u₀ = 2.",
      },
      {
        id: "1re-maths-02-ct-2",
        prompt: "Que vaut la somme S = 1 + 3 + 3² + … + 3⁶ ?",
        choices: ["729", "1093", "2186", "3280"],
        answer: 1,
        explanation:
          "C’est la somme de 7 termes d’une suite géométrique de premier terme 1 et de raison 3. S = (1 − 3⁷)/(1 − 3) = (1 − 2187)/(−2) = 2186/2 = 1093. Piège : 729 = 3⁶ n’est que le dernier terme.",
      },
      {
        id: "1re-maths-02-ct-3",
        prompt: "(uₙ) est arithmétique avec u₀ = 5 et r = 2. Que vaut S = u₀ + u₁ + … + u₂₀ ?",
        choices: ["500", "1050", "525", "545"],
        answer: 2,
        explanation:
          "Dernier terme : u₂₀ = 5 + 20 × 2 = 45. Nombre de termes : de 0 à 20, soit 21 termes (et non 20 !). S = 21 × (5 + 45)/2 = 21 × 25 = 525.",
      },
      {
        id: "1re-maths-02-ct-4",
        prompt: "Soit uₙ = n² − 4n. Quel est le sens de variation de (uₙ) ?",
        choices: [
          "Croissante",
          "Décroissante",
          "Croissante à partir du rang n = 2",
          "Décroissante à partir du rang n = 2",
        ],
        answer: 2,
        explanation:
          "uₙ₊₁ − uₙ = (n + 1)² − 4(n + 1) − n² + 4n = 2n + 1 − 4 = 2n − 3. Ce nombre est négatif pour n = 0 et n = 1, positif pour n ≥ 2. Ainsi u₀ = 0, u₁ = −3, u₂ = −4, puis u₃ = −3, u₄ = 0… : la suite décroît jusqu’à u₂ puis est croissante à partir du rang 2.",
      },
      {
        id: "1re-maths-02-ct-5",
        prompt: "On place 1000 € à intérêts composés de 3 % par an. Quel est le capital Cₙ après n années ?",
        choices: ["Cₙ = 1000 + 30n", "Cₙ = 1000 × 0,03ⁿ", "Cₙ = 1030ⁿ", "Cₙ = 1000 × 1,03ⁿ"],
        answer: 3,
        explanation:
          "Chaque année le capital augmente de 3 %, c’est-à-dire qu’il est multiplié par 1 + 3/100 = 1,03. (Cₙ) est donc géométrique de raison 1,03 et de premier terme 1000 : Cₙ = 1000 × 1,03ⁿ. La formule 1000 + 30n correspond à des intérêts simples (suite arithmétique).",
      },
      {
        id: "1re-maths-02-ct-6",
        prompt: "Quel est le sens de variation de la suite vₙ = −2 × 3ⁿ ?",
        choices: ["Croissante car q = 3 > 1", "Décroissante", "Constante", "Ni croissante ni décroissante"],
        answer: 1,
        explanation:
          "Piège classique : q = 3 > 1, mais le premier terme v₀ = −2 est négatif. vₙ₊₁ − vₙ = −2 × 3ⁿ⁺¹ + 2 × 3ⁿ = −2 × 3ⁿ × (3 − 1) = −4 × 3ⁿ < 0. La suite est donc strictement décroissante (v₀ = −2, v₁ = −6, v₂ = −18…).",
      },
      {
        id: "1re-maths-02-ct-7",
        prompt: "Soit u₀ = 0 et uₙ₊₁ = uₙ + 2n + 1. Quelle expression explicite de uₙ est compatible avec les premiers termes ?",
        choices: ["uₙ = n²", "uₙ = 2n + 1", "uₙ = n² + 1", "uₙ = (n + 1)²"],
        answer: 0,
        explanation:
          "On calcule : u₁ = 0 + 0 + 1 = 1 ; u₂ = 1 + 2 + 1 = 4 ; u₃ = 4 + 4 + 1 = 9. On reconnaît les carrés : uₙ = n². Vérification générale : (n + 1)² = n² + 2n + 1, c’est exactement la relation de récurrence. Les autres propositions donnent u₀ ≠ 0.",
      },
      {
        id: "1re-maths-02-ct-8",
        prompt: "(vₙ) est géométrique à termes positifs avec v₁ = 6 et v₄ = 48. Que vaut S = v₀ + v₁ + … + v₅ ?",
        choices: ["93", "192", "381", "189"],
        answer: 3,
        explanation:
          "v₄ = v₁ × q³ donc q³ = 48/6 = 8 et q = 2. Puis v₀ = v₁/q = 3. S compte 6 termes : S = 3 × (1 − 2⁶)/(1 − 2) = 3 × (−63)/(−1) = 189. Contrôle : 3 + 6 + 12 + 24 + 48 + 96 = 189 ✔.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 3 ─────────────────────────────
  {
    id: "1re-maths-03",
    title: "Dérivation",
    summary:
      "Définir le nombre dérivé comme limite d’un taux de variation, l’interpréter comme coefficient directeur de la tangente et calculer des fonctions dérivées à l’aide des formules usuelles.",
    objectives: [
      "Je sais calculer un taux de variation et en déduire un nombre dérivé.",
      "Je sais déterminer l’équation de la tangente à une courbe en un point.",
      "Je connais les dérivées des fonctions usuelles.",
      "Je sais dériver une somme, un produit, un quotient et une fonction x ↦ g(ax + b).",
    ],
    sections: [
      {
        title: "Taux de variation et nombre dérivé",
        body: [
          "Soit f une fonction définie sur un intervalle I, a un réel de I et h un réel non nul tel que a + h ∈ I. Le **taux de variation** de f entre a et a + h est le quotient τ(h) = [f(a + h) − f(a)]/h. Géométriquement, c’est le **coefficient directeur de la sécante** passant par les points A(a ; f(a)) et M(a + h ; f(a + h)) de la courbe.",
          "Lorsque h se rapproche de 0, le point M se rapproche de A sur la courbe. Si le taux de variation se rapproche d’un nombre réel L, on dit que f est **dérivable en a** et que L est le **nombre dérivé** de f en a, noté f′(a). On écrit f′(a) = lim (h→0) [f(a + h) − f(a)]/h.",
          "Méthode de calcul : on développe f(a + h) − f(a), on simplifie par h (h ≠ 0), puis on regarde ce que devient l’expression quand h tend vers 0. Par exemple pour f(x) = x² et a = 3 : [(3 + h)² − 9]/h = (6h + h²)/h = 6 + h, qui tend vers 6. Donc f′(3) = 6.",
          "Toutes les fonctions ne sont pas dérivables partout : la fonction racine carrée n’est pas dérivable en 0 (le taux 1/√h devient aussi grand que l’on veut) et la fonction valeur absolue n’est pas dérivable en 0 (le taux vaut 1 à droite et −1 à gauche).",
        ],
        keyPoints: [
          "Taux de variation = coefficient directeur de la sécante.",
          "f′(a) est la limite du taux de variation quand h tend vers 0.",
          "On simplifie par h avant de faire tendre h vers 0.",
          "√ et |·| ne sont pas dérivables en 0.",
        ],
        formulas: [
          "τ(h) = [f(a + h) − f(a)]/h",
          "f′(a) = lim (h→0) [f(a + h) − f(a)]/h",
        ],
        example: {
          title: "Nombre dérivé de f(x) = 1/x en a = 2",
          steps: [
            "f(2 + h) − f(2) = 1/(2 + h) − 1/2 = [2 − (2 + h)]/[2(2 + h)] = −h/[2(2 + h)].",
            "On divise par h (h ≠ 0) : τ(h) = −1/[2(2 + h)].",
            "Quand h tend vers 0, 2(2 + h) tend vers 4.",
            "Donc f′(2) = −1/4.",
          ],
        },
      },
      {
        title: "Tangente à une courbe",
        body: [
          "Si f est dérivable en a, la **tangente** à la courbe 𝒞f au point A(a ; f(a)) est la droite passant par A et de **coefficient directeur f′(a)**. C’est la position limite des sécantes (AM) quand M se rapproche de A : au voisinage de A, la courbe et sa tangente se confondent presque.",
          "Son équation réduite est **y = f′(a)(x − a) + f(a)**. Pour l’obtenir, on calcule f(a), puis f′(a), on remplace dans la formule et on développe. Il est prudent de vérifier que le point A appartient bien à la droite trouvée.",
          "Interprétations utiles : si f′(a) = 0, la tangente est **horizontale** ; si f′(a) > 0, elle « monte » ; si f′(a) < 0, elle « descend ». Deux tangentes sont parallèles si et seulement si elles ont le même coefficient directeur : chercher où la tangente est parallèle à une droite y = mx + p revient à résoudre f′(x) = m.",
          "Graphiquement, on lit f′(a) comme le coefficient directeur de la tangente tracée : on choisit deux points de la tangente et on calcule (Δy)/(Δx).",
        ],
        keyPoints: [
          "Coefficient directeur de la tangente en a : f′(a).",
          "Équation : y = f′(a)(x − a) + f(a).",
          "Tangente horizontale ⇔ f′(a) = 0.",
          "Tangente parallèle à y = mx + p ⇔ f′(a) = m.",
        ],
        formulas: ["T : y = f′(a)(x − a) + f(a)"],
        example: {
          title: "Tangente à la courbe de f(x) = x² − 3x + 1 au point d’abscisse 2",
          steps: [
            "f(2) = 4 − 6 + 1 = −1.",
            "f′(x) = 2x − 3, donc f′(2) = 1.",
            "T : y = 1 × (x − 2) + (−1) = x − 3.",
            "Vérification : pour x = 2, y = −1 = f(2) ✔.",
          ],
        },
      },
      {
        title: "Fonctions dérivées usuelles et opérations",
        body: [
          "Si f est dérivable en tout point d’un intervalle I, la fonction x ↦ f′(x) s’appelle la **fonction dérivée** de f. On dispose de formules pour les fonctions de référence : la dérivée d’une constante est 0 ; (x)′ = 1 ; (x²)′ = 2x ; (x³)′ = 3x² ; plus généralement (xⁿ)′ = nxⁿ⁻¹ pour n entier naturel non nul ; (1/x)′ = −1/x² sur ]−∞ ; 0[ et sur ]0 ; +∞[ ; (√x)′ = 1/(2√x) sur ]0 ; +∞[.",
          "**Opérations** (u et v dérivables, k réel) : (u + v)′ = u′ + v′ ; (ku)′ = ku′ ; (uv)′ = u′v + uv′ ; (1/v)′ = −v′/v² et (u/v)′ = (u′v − uv′)/v² là où v ne s’annule pas. Le produit est un piège classique : la dérivée d’un produit n’est **pas** le produit des dérivées.",
          "**Composée avec une fonction affine** : si g est dérivable, la fonction x ↦ g(ax + b) a pour dérivée x ↦ a × g′(ax + b). Par exemple (√(3x + 1))′ = 3/(2√(3x + 1)) et ((2x − 5)⁴)′ = 4 × 2 × (2x − 5)³ = 8(2x − 5)³.",
          "Conseil de méthode : avant de dériver, identifiez la **structure** de l’expression (somme ? produit ? quotient ? composée affine ?), nommez u et v, calculez u′ et v′ à part, puis appliquez la formule. Simplifiez ensuite le résultat, souvent en factorisant, car on aura besoin du signe de f′ (chapitre suivant).",
        ],
        keyPoints: [
          "(xⁿ)′ = nxⁿ⁻¹ ; (1/x)′ = −1/x² ; (√x)′ = 1/(2√x).",
          "(uv)′ = u′v + uv′.",
          "(u/v)′ = (u′v − uv′)/v².",
          "(g(ax + b))′ = a g′(ax + b).",
        ],
        formulas: [
          "(k)′ = 0   (x)′ = 1   (xⁿ)′ = nxⁿ⁻¹",
          "(1/x)′ = −1/x²   (√x)′ = 1/(2√x)",
          "(u + v)′ = u′ + v′   (ku)′ = ku′",
          "(uv)′ = u′v + uv′   (1/v)′ = −v′/v²   (u/v)′ = (u′v − uv′)/v²",
          "[g(ax + b)]′ = a × g′(ax + b)",
        ],
        example: {
          title: "Dériver f(x) = (x² + 1)/(2x − 1) sur ]1/2 ; +∞[",
          steps: [
            "Structure : quotient u/v avec u(x) = x² + 1 et v(x) = 2x − 1.",
            "u′(x) = 2x et v′(x) = 2.",
            "f′(x) = [2x(2x − 1) − 2(x² + 1)]/(2x − 1)².",
            "Numérateur : 4x² − 2x − 2x² − 2 = 2x² − 2x − 2.",
            "Donc f′(x) = (2x² − 2x − 2)/(2x − 1)² = 2(x² − x − 1)/(2x − 1)².",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-maths-03-ex-1",
        prompt: "Quel est le taux de variation de f(x) = x² entre 1 et 3 ?",
        choices: ["4", "8", "2", "3"],
        answer: 0,
        explanation:
          "Taux = [f(3) − f(1)]/(3 − 1) = (9 − 1)/2 = 8/2 = 4. Piège : 8 est la variation f(3) − f(1), il faut encore diviser par l’écart des abscisses.",
      },
      {
        id: "1re-maths-03-ex-2",
        prompt: "Soit f(x) = x³. Que vaut f′(2) ?",
        choices: ["8", "6", "12", "3"],
        answer: 2,
        explanation:
          "(x³)′ = 3x², donc f′(2) = 3 × 2² = 3 × 4 = 12. (8 est f(2), pas f′(2).)",
      },
      {
        id: "1re-maths-03-ex-3",
        prompt: "Quelle est la dérivée de f(x) = 3x² − 5x + 1 ?",
        choices: ["3x − 5", "6x + 1", "6x² − 5x", "6x − 5"],
        answer: 3,
        explanation:
          "On dérive terme à terme : (3x²)′ = 3 × 2x = 6x ; (−5x)′ = −5 ; (1)′ = 0. Donc f′(x) = 6x − 5.",
      },
      {
        id: "1re-maths-03-ex-4",
        prompt: "Quelle est la dérivée de f(x) = √x sur ]0 ; +∞[ ?",
        choices: ["1/√x", "1/(2√x)", "2√x", "−1/(2√x)"],
        answer: 1,
        explanation:
          "C’est une formule du cours : (√x)′ = 1/(2√x), valable pour x > 0 (la racine carrée n’est pas dérivable en 0).",
      },
      {
        id: "1re-maths-03-ex-5",
        prompt: "Quelle est l’équation de la tangente à la courbe de f(x) = x² au point d’abscisse 1 ?",
        choices: ["y = 2x − 1", "y = 2x + 1", "y = x + 1", "y = 2x"],
        answer: 0,
        explanation:
          "f(1) = 1 et f′(x) = 2x donc f′(1) = 2. T : y = f′(1)(x − 1) + f(1) = 2(x − 1) + 1 = 2x − 1. Vérification : en x = 1, y = 1 ✔.",
      },
      {
        id: "1re-maths-03-ex-6",
        prompt: "Soit f(x) = 1/x. Que vaut f′(−2) ?",
        choices: ["1/4", "−1/2", "−1/4", "1/2"],
        answer: 2,
        explanation:
          "f′(x) = −1/x², donc f′(−2) = −1/(−2)² = −1/4. Attention : le carré rend le dénominateur positif, la dérivée de 1/x est toujours négative.",
      },
    ],
    test: [
      {
        id: "1re-maths-03-ct-1",
        prompt: "Quelle est la dérivée de f(x) = (2x + 1)(x² − 3) ?",
        choices: ["4x", "6x² + 2x − 6", "2x² + 2x − 6", "6x² − 6"],
        answer: 1,
        explanation:
          "Produit uv avec u = 2x + 1 (u′ = 2) et v = x² − 3 (v′ = 2x). f′(x) = 2(x² − 3) + (2x + 1)(2x) = 2x² − 6 + 4x² + 2x = 6x² + 2x − 6. Piège : u′ × v′ = 4x n’est pas la dérivée d’un produit.",
      },
      {
        id: "1re-maths-03-ct-2",
        prompt: "Quelle est la dérivée de f(x) = (x + 1)/(x − 2) sur ]2 ; +∞[ ?",
        choices: ["3/(x − 2)²", "1", "−3/(x − 2)²", "(2x − 1)/(x − 2)²"],
        answer: 2,
        explanation:
          "u = x + 1, u′ = 1 ; v = x − 2, v′ = 1. f′(x) = [1 × (x − 2) − (x + 1) × 1]/(x − 2)² = (x − 2 − x − 1)/(x − 2)² = −3/(x − 2)².",
      },
      {
        id: "1re-maths-03-ct-3",
        prompt: "Quelle est la dérivée de f(x) = (3x − 1)⁵ ?",
        choices: ["5(3x − 1)⁴", "3(3x − 1)⁴", "15(3x − 1)⁵", "15(3x − 1)⁴"],
        answer: 3,
        explanation:
          "f(x) = g(3x − 1) avec g(X) = X⁵ et g′(X) = 5X⁴. La formule [g(ax + b)]′ = a g′(ax + b) donne f′(x) = 3 × 5(3x − 1)⁴ = 15(3x − 1)⁴. Oublier le facteur a = 3 donne la réponse piège 5(3x − 1)⁴.",
      },
      {
        id: "1re-maths-03-ct-4",
        prompt: "Soit f(x) = √(4x + 1) sur ]−1/4 ; +∞[. Que vaut f′(2) ?",
        choices: ["2/3", "1/3", "4/3", "1/6"],
        answer: 0,
        explanation:
          "f(x) = g(4x + 1) avec g = √, g′(X) = 1/(2√X). f′(x) = 4 × 1/(2√(4x + 1)) = 2/√(4x + 1). En x = 2 : √(4 × 2 + 1) = √9 = 3, donc f′(2) = 2/3.",
      },
      {
        id: "1re-maths-03-ct-5",
        prompt: "Quelle est l’équation de la tangente à la courbe de f(x) = x³ − 3x au point d’abscisse 2 ?",
        choices: ["y = 9x + 2", "y = 3x − 4", "y = 9x − 16", "y = 9x − 18"],
        answer: 2,
        explanation:
          "f(2) = 8 − 6 = 2. f′(x) = 3x² − 3 donc f′(2) = 12 − 3 = 9. T : y = 9(x − 2) + 2 = 9x − 18 + 2 = 9x − 16. Vérification : en x = 2, y = 18 − 16 = 2 ✔. (9x − 18 oublie d’ajouter f(2).)",
      },
      {
        id: "1re-maths-03-ct-6",
        prompt: "En quel point la tangente à la courbe de f(x) = x² − 4x + 1 est-elle parallèle à la droite y = 2x + 3 ?",
        choices: ["Au point d’abscisse 1", "Au point d’abscisse 3", "Au point d’abscisse 2", "Au point d’abscisse 5/2"],
        answer: 1,
        explanation:
          "Deux droites sont parallèles si elles ont le même coefficient directeur. On résout f′(x) = 2 : 2x − 4 = 2, soit x = 3. (En x = 2, f′(2) = 0 : la tangente y est horizontale.)",
      },
      {
        id: "1re-maths-03-ct-7",
        prompt: "Soit f(x) = x² + x. On calcule [f(2 + h) − f(2)]/h pour h ≠ 0, puis on fait tendre h vers 0. Quel est le nombre dérivé f′(2) ?",
        choices: ["5 + h", "6", "4", "5"],
        answer: 3,
        explanation:
          "f(2 + h) = (2 + h)² + (2 + h) = 4 + 4h + h² + 2 + h = 6 + 5h + h². f(2) = 6. Taux : (5h + h²)/h = 5 + h. Quand h tend vers 0, 5 + h tend vers 5 : f′(2) = 5. « 5 + h » est le taux de variation, pas le nombre dérivé. Contrôle : f′(x) = 2x + 1 donne bien f′(2) = 5.",
      },
      {
        id: "1re-maths-03-ct-8",
        prompt: "Quelle est la dérivée de f(x) = 1/(x² + 1) sur ℝ ?",
        choices: ["1/(2x)", "−2x/(x² + 1)²", "−1/(x² + 1)²", "2x/(x² + 1)²"],
        answer: 1,
        explanation:
          "f = 1/v avec v(x) = x² + 1 (qui ne s’annule jamais) et v′(x) = 2x. (1/v)′ = −v′/v², donc f′(x) = −2x/(x² + 1)². Le piège 1/(2x) consiste à « inverser la dérivée », ce qui est faux.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 4 ─────────────────────────────
  {
    id: "1re-maths-04",
    title: "Applications de la dérivation",
    summary:
      "Utiliser le signe de la dérivée pour déterminer les variations d’une fonction, localiser ses extremums et résoudre des problèmes d’optimisation.",
    objectives: [
      "Je sais relier le signe de f′ au sens de variation de f.",
      "Je sais dresser le tableau de variations complet d’une fonction.",
      "Je sais déterminer les extremums locaux et globaux d’une fonction sur un intervalle.",
      "Je sais résoudre un problème d’optimisation ou démontrer une inégalité avec l’étude d’une fonction.",
    ],
    sections: [
      {
        title: "Signe de la dérivée et sens de variation",
        body: [
          "Le théorème fondamental de ce chapitre relie la dérivée aux variations. Soit f dérivable sur un **intervalle** I. Si f′(x) ≥ 0 pour tout x de I, alors f est **croissante** sur I ; si f′(x) ≤ 0 sur I, f est **décroissante** sur I ; si f′(x) = 0 sur I, f est **constante** sur I. Si f′ est strictement positive sur I (sauf éventuellement en des points isolés où elle s’annule), f est strictement croissante.",
          "L’intuition vient de la tangente : si en chaque point la tangente « monte » (coefficient directeur positif), la courbe monte. Inversement, si f est croissante sur I, alors f′(x) ≥ 0 sur I.",
          "**Méthode d’étude des variations** : 1) déterminer l’ensemble de définition et de dérivabilité ; 2) calculer f′(x) ; 3) **factoriser** f′(x) autant que possible ; 4) étudier son signe (tableau de signes : facteurs affines, trinômes, quotients…) ; 5) en déduire les variations de f dans un tableau.",
          "Attention, le théorème exige un **intervalle** : la fonction inverse a une dérivée négative sur ℝ privé de 0, mais elle n’est pas décroissante sur ℝ* (−1 < 1 alors que 1/(−1) < 1/1). On dit qu’elle est décroissante sur ]−∞ ; 0[ et sur ]0 ; +∞[, séparément.",
        ],
        keyPoints: [
          "f′ ≥ 0 sur I ⇒ f croissante sur I.",
          "f′ ≤ 0 sur I ⇒ f décroissante sur I.",
          "Toujours factoriser f′ avant d’étudier son signe.",
          "Le théorème s’applique sur un intervalle, pas sur une réunion d’intervalles.",
        ],
        formulas: [
          "f′(x) > 0 sur I ⇒ f strictement croissante sur I",
          "f′(x) < 0 sur I ⇒ f strictement décroissante sur I",
        ],
        example: {
          title: "Variations de f(x) = x³ − 3x² + 2 sur ℝ",
          steps: [
            "f′(x) = 3x² − 6x = 3x(x − 2).",
            "f′ s’annule en 0 et en 2 ; c’est un trinôme de coefficient a = 3 > 0 : positif à l’extérieur des racines, négatif entre elles.",
            "Donc f est croissante sur ]−∞ ; 0], décroissante sur [0 ; 2], croissante sur [2 ; +∞[.",
            "Valeurs aux points clés : f(0) = 2 et f(2) = 8 − 12 + 2 = −2.",
          ],
        },
      },
      {
        title: "Extremums locaux",
        body: [
          "On dit que f admet un **maximum local** en a s’il existe un intervalle ouvert J contenant a tel que f(x) ≤ f(a) pour tout x de J ∩ I. On définit de même un **minimum local**. Un **extremum** est un maximum ou un minimum. Il est **global** (ou absolu) sur I si l’inégalité est vraie pour tout x de I.",
          "**Condition nécessaire** : si f est dérivable sur un intervalle ouvert I et admet un extremum local en a, alors **f′(a) = 0** : la tangente y est horizontale. **Mais la réciproque est fausse** : pour f(x) = x³, f′(0) = 0 et pourtant f est strictement croissante, il n’y a pas d’extremum en 0.",
          "**Condition suffisante** : si f′ s’annule en a **en changeant de signe**, alors f admet un extremum local en a. Si f′ passe de + à −, c’est un maximum local ; si f′ passe de − à +, c’est un minimum local.",
          "Sur un intervalle fermé [a ; b], un extremum global peut aussi être atteint **aux bornes**. Pour trouver le maximum global, on compare donc les maximums locaux et les valeurs f(a) et f(b) lues dans le tableau de variations.",
        ],
        keyPoints: [
          "Extremum local en a (intérieur) ⇒ f′(a) = 0.",
          "f′(a) = 0 n’implique pas un extremum (contre-exemple : x³ en 0).",
          "f′ s’annule et change de signe en a ⇒ extremum local.",
          "Sur [a ; b], comparer aussi les valeurs aux bornes.",
        ],
        formulas: [
          "f′ : + puis − en a ⇒ maximum local f(a)",
          "f′ : − puis + en a ⇒ minimum local f(a)",
        ],
        example: {
          title: "Extremums de f(x) = −2x³ + 3x² + 12x sur [−2 ; 3]",
          steps: [
            "f′(x) = −6x² + 6x + 12 = −6(x² − x − 2) = −6(x + 1)(x − 2).",
            "f′ est négative sur [−2 ; −1[, positive sur ]−1 ; 2[, négative sur ]2 ; 3].",
            "Minimum local en −1 : f(−1) = 2 + 3 − 12 = −7. Maximum local en 2 : f(2) = −16 + 12 + 24 = 20.",
            "Bornes : f(−2) = 16 + 12 − 24 = 4 et f(3) = −54 + 27 + 36 = 9.",
            "Conclusion : sur [−2 ; 3], le maximum global vaut 20 (en 2) et le minimum global vaut −7 (en −1).",
          ],
        },
      },
      {
        title: "Tableaux de variations et applications",
        body: [
          "Un **tableau de variations complet** comporte : une ligne x avec les bornes et les valeurs où f′ s’annule ; une ligne « signe de f′(x) » ; une ligne « variations de f » avec des flèches et les **valeurs exactes** de f aux bornes et aux points critiques. Une double barre signale une valeur interdite.",
          "**Optimisation** : pour maximiser ou minimiser une grandeur (aire, volume, coût, bénéfice…), on choisit une variable x, on exprime la grandeur en fonction de x, on précise l’intervalle où x varie (contraintes physiques), puis on étudie la fonction obtenue et on lit l’extremum dans le tableau. On termine par une phrase de conclusion qui répond à la question posée.",
          "**Démontrer une inégalité** f(x) ≥ g(x) sur I : on étudie la fonction différence h = f − g. Si le minimum de h sur I est positif ou nul, alors h(x) ≥ 0, donc f(x) ≥ g(x) pour tout x de I. C’est aussi ainsi qu’on étudie la **position relative** d’une courbe et d’une de ses tangentes.",
          "**Nombre de solutions d’une équation** f(x) = k : le tableau de variations montre sur chaque intervalle de monotonie si la valeur k est « traversée ». Sur un intervalle où f est strictement monotone et continue, l’équation a au plus une solution, et exactement une si k est compris entre les valeurs extrêmes de f sur cet intervalle.",
        ],
        keyPoints: [
          "Tableau : ligne x, signe de f′, flèches et valeurs exactes.",
          "Optimisation : variable, fonction, intervalle, étude, conclusion.",
          "Inégalité f ≥ g : étudier h = f − g et montrer min h ≥ 0.",
          "Sur un intervalle de stricte monotonie : au plus une solution à f(x) = k.",
        ],
        formulas: ["f(x) ≥ g(x) sur I ⇔ h(x) = f(x) − g(x) ≥ 0 sur I"],
        example: {
          title: "La boîte de volume maximal",
          steps: [
            "Dans un carré de carton de 12 cm de côté, on découpe aux 4 coins des carrés de côté x cm, puis on plie pour former une boîte sans couvercle ; x ∈ ]0 ; 6[.",
            "Volume : V(x) = x(12 − 2x)² = 4x³ − 48x² + 144x.",
            "V′(x) = 12x² − 96x + 144 = 12(x² − 8x + 12) = 12(x − 2)(x − 6).",
            "Sur ]0 ; 6[, x − 6 < 0 : V′ est positive sur ]0 ; 2[ et négative sur ]2 ; 6[ ; V est maximal en x = 2.",
            "V(2) = 2 × 8² = 128 : le volume maximal est 128 cm³, obtenu en découpant des carrés de 2 cm.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-maths-04-ex-1",
        prompt: "Si f′(x) > 0 pour tout x d’un intervalle I, alors :",
        choices: [
          "f est strictement décroissante sur I",
          "f est strictement croissante sur I",
          "f est constante sur I",
          "f est positive sur I",
        ],
        answer: 1,
        explanation:
          "D’après le théorème du cours, une dérivée strictement positive sur un intervalle entraîne une fonction strictement croissante sur cet intervalle. Attention : f′ > 0 ne dit rien sur le signe de f elle-même (x ↦ x − 10 a une dérivée positive mais prend des valeurs négatives).",
      },
      {
        id: "1re-maths-04-ex-2",
        prompt: "Soit f(x) = x² − 6x + 2. Sur quel intervalle f est-elle décroissante ?",
        choices: ["]−∞ ; 3]", "[3 ; +∞[", "]−∞ ; −3]", "[−3 ; 3]"],
        answer: 0,
        explanation:
          "f′(x) = 2x − 6, qui est négative lorsque x ≤ 3. Donc f est décroissante sur ]−∞ ; 3] et croissante sur [3 ; +∞[.",
      },
      {
        id: "1re-maths-04-ex-3",
        prompt: "Soit f(x) = x³ − 3x. En quelles valeurs f′ s’annule-t-elle ?",
        choices: ["0 et 3", "−1 et 1", "1 seulement", "−3 et 3"],
        answer: 1,
        explanation:
          "f′(x) = 3x² − 3 = 3(x² − 1) = 3(x − 1)(x + 1). Elle s’annule pour x = −1 et x = 1. (0, √3 et −√3 sont les racines de f, pas de f′.)",
      },
      {
        id: "1re-maths-04-ex-4",
        prompt: "Toujours avec f(x) = x³ − 3x, quel est le maximum local de f, atteint en x = −1 ?",
        choices: ["−2", "0", "2", "3"],
        answer: 2,
        explanation:
          "f′(x) = 3(x − 1)(x + 1) est positive avant −1 et négative entre −1 et 1 : f′ passe de + à −, c’est un maximum local. Sa valeur est f(−1) = (−1)³ − 3 × (−1) = −1 + 3 = 2.",
      },
      {
        id: "1re-maths-04-ex-5",
        prompt: "La dérivée f′ s’annule en a en passant du signe − au signe +. Que peut-on en déduire ?",
        choices: [
          "f admet un maximum local en a",
          "f n’est pas définie en a",
          "f est constante",
          "f admet un minimum local en a",
        ],
        answer: 3,
        explanation:
          "Avant a, f′ < 0 donc f décroît ; après a, f′ > 0 donc f croît. La fonction « redescend puis remonte » : f(a) est un minimum local.",
      },
      {
        id: "1re-maths-04-ex-6",
        prompt: "Pour f(x) = x³, on a f′(0) = 0. La fonction admet-elle un extremum en 0 ?",
        choices: ["Oui, un minimum", "Oui, un maximum", "Non, car f′ ne change pas de signe en 0"],
        answer: 2,
        explanation:
          "f′(x) = 3x² ≥ 0 pour tout x : f′ s’annule en 0 sans changer de signe. f est strictement croissante sur ℝ, donc pas d’extremum en 0. C’est le contre-exemple qui montre que « f′(a) = 0 » ne suffit pas.",
      },
    ],
    test: [
      {
        id: "1re-maths-04-ct-1",
        prompt: "Soit f(x) = x³ − 6x² + 9x + 1. Quels sont ses extremums locaux ?",
        choices: [
          "Un maximum local 5 en x = 1 et un minimum local 1 en x = 3",
          "Un minimum local 5 en x = 1 et un maximum local 1 en x = 3",
          "Un maximum local 1 en x = 3 seulement",
          "Un maximum local 5 en x = 3 et un minimum local 1 en x = 1",
        ],
        answer: 0,
        explanation:
          "f′(x) = 3x² − 12x + 9 = 3(x² − 4x + 3) = 3(x − 1)(x − 3). Signe : + avant 1, − entre 1 et 3, + après 3. Donc maximum local en 1 : f(1) = 1 − 6 + 9 + 1 = 5 ; minimum local en 3 : f(3) = 27 − 54 + 27 + 1 = 1.",
      },
      {
        id: "1re-maths-04-ct-2",
        prompt: "Quel est le minimum de f(x) = x + 4/x sur ]0 ; +∞[ ?",
        choices: ["2", "4", "0", "5"],
        answer: 1,
        explanation:
          "f′(x) = 1 − 4/x² = (x² − 4)/x² = (x − 2)(x + 2)/x². Sur ]0 ; +∞[, x + 2 > 0 et x² > 0, donc f′ a le signe de x − 2 : négatif avant 2, positif après. Minimum en x = 2 : f(2) = 2 + 4/2 = 4. Piège : 2 est l’abscisse du minimum, pas sa valeur.",
      },
      {
        id: "1re-maths-04-ct-3",
        prompt: "Parmi les rectangles de périmètre 40 cm, lequel a la plus grande aire ?",
        choices: ["5 cm × 15 cm, aire 75 cm²", "8 cm × 12 cm, aire 96 cm²", "10 cm × 10 cm, aire 100 cm²", "20 cm × 20 cm, aire 400 cm²"],
        answer: 2,
        explanation:
          "Côtés x et 20 − x avec x ∈ ]0 ; 20[. Aire A(x) = x(20 − x) = 20x − x². A′(x) = 20 − 2x, positive avant 10 et négative après : maximum en x = 10, A(10) = 100. C’est le carré 10 × 10. (Un carré 20 × 20 aurait un périmètre de 80 cm.)",
      },
      {
        id: "1re-maths-04-ct-4",
        prompt: "On pose h(x) = x³ − 3x + 2 sur [0 ; +∞[. Quel est le minimum de h sur cet intervalle (ce qui permet de comparer x³ et 3x − 2) ?",
        choices: ["2", "−1", "1", "0"],
        answer: 3,
        explanation:
          "h′(x) = 3x² − 3 = 3(x − 1)(x + 1). Sur [0 ; +∞[, x + 1 > 0, donc h′ est du signe de x − 1 : h décroît sur [0 ; 1] puis croît. Minimum : h(1) = 1 − 3 + 2 = 0. Conséquence : h(x) ≥ 0, donc x³ ≥ 3x − 2 pour tout x ≥ 0.",
      },
      {
        id: "1re-maths-04-ct-5",
        prompt: "Quel est le maximum global de f(x) = x³ − 3x sur l’intervalle [−2 ; 2] ?",
        choices: ["2, atteint en −1 seulement", "2, atteint en −1 et en 2", "8, atteint en 2", "−2, atteint en −2 et en 1"],
        answer: 1,
        explanation:
          "f′(x) = 3(x − 1)(x + 1) : f croît sur [−2 ; −1], décroît sur [−1 ; 1], croît sur [1 ; 2]. Valeurs : f(−2) = −8 + 6 = −2, f(−1) = 2, f(1) = −2, f(2) = 8 − 6 = 2. Le maximum global vaut 2 et il est atteint deux fois : en −1 et en la borne 2. Piège : oublier de tester les bornes.",
      },
      {
        id: "1re-maths-04-ct-6",
        prompt: "Quel est le sens de variation de f(x) = (x − 1)/(x + 1) sur ]−1 ; +∞[ ?",
        choices: ["Décroissante", "Croissante puis décroissante", "Décroissante puis croissante", "Croissante"],
        answer: 3,
        explanation:
          "f′(x) = [1 × (x + 1) − (x − 1) × 1]/(x + 1)² = 2/(x + 1)². Le numérateur 2 et le dénominateur (carré non nul) sont strictement positifs : f′ > 0 sur ]−1 ; +∞[, donc f est strictement croissante sur cet intervalle.",
      },
      {
        id: "1re-maths-04-ct-7",
        prompt: "Soit f(x) = x³ − 3x sur [−2 ; 2] (tableau : −2 ↗ 2 ↘ −2 ↗ 2). Combien l’équation f(x) = 1 a-t-elle de solutions sur [−2 ; 2] ?",
        choices: ["1", "2", "3", "0"],
        answer: 2,
        explanation:
          "Sur [−2 ; −1], f croît strictement de −2 à 2 : la valeur 1 est atteinte une fois. Sur [−1 ; 1], f décroît strictement de 2 à −2 : une deuxième fois. Sur [1 ; 2], f croît strictement de −2 à 2 : une troisième fois. Il y a donc 3 solutions.",
      },
      {
        id: "1re-maths-04-ct-8",
        prompt: "Le bénéfice d’une entreprise (en milliers d’euros) pour q tonnes produites, q ∈ [0 ; 10], est B(q) = −q² + 12q − 20. Quelle production maximise le bénéfice ?",
        choices: ["q = 6, bénéfice 16 000 €", "q = 12, bénéfice −20 000 €", "q = 6, bénéfice 52 000 €", "q = 10, bénéfice 0 €"],
        answer: 0,
        explanation:
          "B′(q) = −2q + 12, positive pour q < 6 et négative pour q > 6 : B est maximal en q = 6. B(6) = −36 + 72 − 20 = 16, soit 16 000 €. (q = 12 n’est pas dans [0 ; 10] et B(10) = −100 + 120 − 20 = 0 est plus petit.)",
      },
    ],
  },

  // ───────────────────────────── Chapitre 5 ─────────────────────────────
  {
    id: "1re-maths-05",
    title: "La fonction exponentielle",
    summary:
      "Découvrir la fonction exponentielle, unique fonction égale à sa dérivée et valant 1 en 0, maîtriser ses règles de calcul, ses variations et les fonctions x ↦ e^(ax + b).",
    objectives: [
      "Je connais la définition de la fonction exponentielle et le nombre e.",
      "Je sais utiliser les propriétés algébriques de l’exponentielle pour simplifier une expression.",
      "Je sais résoudre des équations et inéquations du type e^A = e^B ou e^A ≤ e^B.",
      "Je sais dériver x ↦ e^(ax + b) et étudier les variations de fonctions contenant une exponentielle.",
    ],
    sections: [
      {
        title: "Définition et premières propriétés",
        body: [
          "**Théorème-définition** : il existe une unique fonction f, définie et dérivable sur ℝ, telle que **f′ = f** et **f(0) = 1**. On l’appelle **fonction exponentielle** et on la note exp. Ainsi exp′(x) = exp(x) pour tout réel x, et exp(0) = 1.",
          "On montre que l’exponentielle **ne s’annule jamais** : pour tout x, exp(x) × exp(−x) = 1. On en déduit que **exp(x) > 0 pour tout réel x** (une fonction qui ne s’annule pas et vaut 1 en 0 garde le signe +). Retenez : une exponentielle est toujours strictement positive, ce qui est très utile pour étudier un signe.",
          "On note **e = exp(1) ≈ 2,718**. Ce nombre irrationnel est aussi célèbre que π. Les propriétés algébriques ci-dessous montrent que exp(n) = eⁿ pour tout entier n ; par extension, on note **exp(x) = eˣ** pour tout réel x. Lorsque l’exposant est une expression, on l’écrit entre parenthèses : e^(2x + 1).",
          "Lien avec les suites : pour tout réel a, la suite (e^(na)) est géométrique de raison eᵃ, car e^((n + 1)a) = e^(na) × eᵃ. L’exponentielle est en quelque sorte la version « continue » des suites géométriques, ce qui explique son rôle en modélisation (croissance de populations, désintégration radioactive, intérêts…).",
        ],
        keyPoints: [
          "exp est l’unique fonction dérivable sur ℝ telle que exp′ = exp et exp(0) = 1.",
          "Pour tout réel x : eˣ > 0.",
          "e = e¹ ≈ 2,718.",
          "(e^(na)) est une suite géométrique de raison eᵃ.",
        ],
        formulas: ["exp′(x) = exp(x)    exp(0) = e⁰ = 1", "eˣ > 0 pour tout x ∈ ℝ", "e ≈ 2,718"],
        example: {
          title: "Étudier le signe de f(x) = (x − 3)eˣ",
          steps: [
            "Pour tout réel x, eˣ > 0 : ce facteur ne change jamais le signe.",
            "Le signe de f(x) est donc celui de x − 3.",
            "f(x) < 0 pour x < 3, f(3) = 0, f(x) > 0 pour x > 3.",
          ],
        },
      },
      {
        title: "Propriétés algébriques",
        body: [
          "L’exponentielle transforme les sommes en produits : pour tous réels a et b, **e^(a + b) = eᵃ × eᵇ**. C’est la relation fondamentale, d’où découlent toutes les autres : **e^(−a) = 1/eᵃ**, **e^(a − b) = eᵃ/eᵇ** et **(eᵃ)ⁿ = e^(na)** pour tout entier relatif n.",
          "Ces règles sont exactement celles des puissances que vous connaissez déjà (2³ × 2⁵ = 2⁸…) : on additionne les exposants pour un produit, on les soustrait pour un quotient, on les multiplie pour une puissance. Par exemple : e³ × e⁵ = e⁸ ; e⁴/e⁻² = e⁶ ; (e²)³ = e⁶ ; √(eˣ) = e^(x/2).",
          "Erreurs fréquentes à éviter : eᵃ + eᵇ n’est **pas** égal à e^(a + b) ; (eᵃ)ᵇ n’est pas e^(a + b) mais e^(ab) ; e^(−x) n’est pas négatif (c’est 1/eˣ > 0).",
          "Pour simplifier une expression, on regroupe tout en une seule exponentielle en appliquant pas à pas les règles, et l’on vérifie au besoin avec une valeur numérique (par exemple x = 0).",
        ],
        keyPoints: [
          "e^(a + b) = eᵃ × eᵇ.",
          "e^(−a) = 1/eᵃ et e^(a − b) = eᵃ/eᵇ.",
          "(eᵃ)ⁿ = e^(na).",
          "eᵃ + eᵇ ≠ e^(a + b).",
        ],
        formulas: ["e^(a + b) = eᵃ × eᵇ", "e^(−a) = 1/eᵃ", "e^(a − b) = eᵃ / eᵇ", "(eᵃ)ⁿ = e^(na)"],
        example: {
          title: "Simplifier A = e^(2x + 1) × e^(−x) / e^(x − 2)",
          steps: [
            "Numérateur : e^(2x + 1) × e^(−x) = e^(2x + 1 − x) = e^(x + 1).",
            "Quotient : e^(x + 1)/e^(x − 2) = e^((x + 1) − (x − 2)).",
            "(x + 1) − (x − 2) = x + 1 − x + 2 = 3.",
            "Donc A = e³, une constante qui ne dépend pas de x.",
            "Vérification pour x = 0 : e¹ × e⁰ / e⁻² = e × e² = e³ ✔.",
          ],
        },
      },
      {
        title: "Variations, équations et fonctions x ↦ e^(ax + b)",
        body: [
          "Comme exp′ = exp > 0, la fonction exponentielle est **strictement croissante sur ℝ**. Sa courbe passe par (0 ; 1) et (1 ; e), reste au-dessus de l’axe des abscisses et sa tangente en 0 a pour équation **y = x + 1**. On retiendra aussi que la courbe est située au-dessus de cette tangente : eˣ ≥ x + 1 pour tout réel x.",
          "La stricte croissance donne deux équivalences fondamentales : **eᵃ = eᵇ ⇔ a = b** et **eᵃ < eᵇ ⇔ a < b**. Pour résoudre une équation ou inéquation, on écrit chaque membre comme une seule exponentielle, puis on compare les exposants. Rappel : eˣ = k n’a aucune solution si k ≤ 0, puisqu’une exponentielle est toujours strictement positive. En particulier eˣ = 1 ⇔ x = 0.",
          "**Dérivée de x ↦ e^(ax + b)** : par la formule de la composée affine, (e^(ax + b))′ = a e^(ax + b). Ainsi (e^(3x))′ = 3e^(3x) et (e^(−x))′ = −e^(−x). La fonction x ↦ e^(kx) est strictement croissante si k > 0 et strictement décroissante si k < 0 ; elle modélise une croissance ou une décroissance exponentielle.",
          "Pour étudier une fonction comme f(x) = (2x − 1)eˣ, on utilise la dérivée d’un produit puis on **factorise par l’exponentielle** : comme eˣ > 0, le signe de f′ se ramène à celui d’un facteur simple.",
        ],
        keyPoints: [
          "exp est strictement croissante sur ℝ.",
          "eᵃ = eᵇ ⇔ a = b ; eᵃ < eᵇ ⇔ a < b.",
          "Tangente en 0 : y = x + 1.",
          "(e^(ax + b))′ = a e^(ax + b).",
        ],
        formulas: ["eᵃ = eᵇ ⇔ a = b", "eᵃ < eᵇ ⇔ a < b", "(e^(ax + b))′ = a·e^(ax + b)", "(u·eˣ)′ = (u′ + u)eˣ"],
        example: {
          title: "Variations de f(x) = (2x − 1)eˣ",
          steps: [
            "Produit u × v avec u = 2x − 1 (u′ = 2) et v = eˣ (v′ = eˣ).",
            "f′(x) = 2eˣ + (2x − 1)eˣ = (2x + 1)eˣ.",
            "Comme eˣ > 0, f′(x) a le signe de 2x + 1 : négatif pour x < −1/2, positif pour x > −1/2.",
            "f est décroissante sur ]−∞ ; −1/2] et croissante sur [−1/2 ; +∞[.",
            "Minimum : f(−1/2) = (−2)e^(−1/2) = −2/√e ≈ −1,21.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-maths-05-ex-1",
        prompt: "Simplifier e³ × e⁵.",
        choices: ["e¹⁵", "e⁸", "e²", "2e⁸"],
        answer: 1,
        explanation:
          "Pour un produit, on additionne les exposants : e³ × e⁵ = e^(3 + 5) = e⁸. Multiplier les exposants (e¹⁵) est l’erreur classique.",
      },
      {
        id: "1re-maths-05-ex-2",
        prompt: "Simplifier (e²)³.",
        choices: ["e⁵", "e⁸", "e⁶", "e⁹"],
        answer: 2,
        explanation:
          "Pour une puissance d’exponentielle, on multiplie les exposants : (e²)³ = e^(2 × 3) = e⁶.",
      },
      {
        id: "1re-maths-05-ex-3",
        prompt: "Simplifier e⁴ / e⁻².",
        choices: ["e⁶", "e²", "e⁻⁸", "e⁻²"],
        answer: 0,
        explanation:
          "Pour un quotient, on soustrait les exposants : e⁴/e⁻² = e^(4 − (−2)) = e^(4 + 2) = e⁶. Attention au double signe moins.",
      },
      {
        id: "1re-maths-05-ex-4",
        prompt: "Quelle est la dérivée de f(x) = e^(3x) ?",
        choices: ["e^(3x)", "3e^(3x)", "3x·e^(3x − 1)", "x·e^(3x)"],
        answer: 1,
        explanation:
          "On applique (e^(ax + b))′ = a e^(ax + b) avec a = 3 et b = 0 : f′(x) = 3e^(3x). La règle des puissances (« descendre l’exposant ») ne s’applique pas à l’exponentielle.",
      },
      {
        id: "1re-maths-05-ex-5",
        prompt: "Résoudre dans ℝ l’équation eˣ = 1.",
        choices: ["x = 1", "x = e", "x = 0", "Aucune solution"],
        answer: 2,
        explanation:
          "On sait que e⁰ = 1, donc eˣ = 1 ⇔ eˣ = e⁰ ⇔ x = 0 (l’exponentielle est strictement croissante, donc injective).",
      },
      {
        id: "1re-maths-05-ex-6",
        prompt: "Résoudre dans ℝ l’équation eˣ = −2.",
        choices: ["x = −2", "x = −e²", "x = 2", "Aucune solution"],
        answer: 3,
        explanation:
          "Pour tout réel x, eˣ > 0. Un nombre strictement positif ne peut pas être égal à −2 : l’équation n’a aucune solution.",
      },
    ],
    test: [
      {
        id: "1re-maths-05-ct-1",
        prompt: "Résoudre dans ℝ : e^(2x − 1) = e^(x + 3).",
        choices: ["x = 4", "x = 2", "x = −4", "x = 4/3"],
        answer: 0,
        explanation:
          "eᵃ = eᵇ ⇔ a = b. On résout 2x − 1 = x + 3, soit x = 4. Vérification : 2 × 4 − 1 = 7 et 4 + 3 = 7 ✔.",
      },
      {
        id: "1re-maths-05-ct-2",
        prompt: "Résoudre dans ℝ : e^(3x) ≤ e^(x + 4).",
        choices: ["[2 ; +∞[", "]−∞ ; 2]", "]−∞ ; 4/3]", "]−∞ ; 1]"],
        answer: 1,
        explanation:
          "L’exponentielle est strictement croissante : eᵃ ≤ eᵇ ⇔ a ≤ b. On résout 3x ≤ x + 4, soit 2x ≤ 4, x ≤ 2. S = ]−∞ ; 2] (crochet fermé car inégalité large).",
      },
      {
        id: "1re-maths-05-ct-3",
        prompt: "Quel est le minimum de f(x) = x·eˣ sur ℝ ?",
        choices: ["−e", "0", "−1/e", "1/e"],
        answer: 2,
        explanation:
          "f′(x) = 1 × eˣ + x × eˣ = (1 + x)eˣ. Comme eˣ > 0, f′ a le signe de 1 + x : négatif avant −1, positif après. Minimum en x = −1 : f(−1) = −1 × e⁻¹ = −1/e ≈ −0,37.",
      },
      {
        id: "1re-maths-05-ct-4",
        prompt: "Quel est le sens de variation de f(x) = e^(−2x + 1) ?",
        choices: ["Croissante sur ℝ", "Croissante puis décroissante", "Négative sur ℝ", "Décroissante sur ℝ"],
        answer: 3,
        explanation:
          "f′(x) = −2e^(−2x + 1). Une exponentielle est strictement positive, donc f′(x) < 0 pour tout x : f est strictement décroissante sur ℝ. Elle reste cependant positive (piège « négative sur ℝ »).",
      },
      {
        id: "1re-maths-05-ct-5",
        prompt: "Simplifier B = (eˣ)² × e^(−x) / e^(x + 1).",
        choices: ["e⁻¹", "e^(2x − 1)", "e^(x − 1)", "1"],
        answer: 0,
        explanation:
          "(eˣ)² = e^(2x). Puis e^(2x) × e^(−x) = eˣ. Enfin eˣ/e^(x + 1) = e^(x − x − 1) = e⁻¹ = 1/e. Vérification avec x = 0 : 1 × 1/e = e⁻¹ ✔.",
      },
      {
        id: "1re-maths-05-ct-6",
        prompt: "Quelle est l’équation de la tangente à la courbe de la fonction exponentielle au point d’abscisse 0 ?",
        choices: ["y = x", "y = ex", "y = x + 1", "y = eˣ"],
        answer: 2,
        explanation:
          "T : y = exp′(0)(x − 0) + exp(0). Or exp′(0) = exp(0) = e⁰ = 1. Donc y = 1 × x + 1 = x + 1. (y = ex est la tangente en 1 : y = e(x − 1) + e = ex.)",
      },
      {
        id: "1re-maths-05-ct-7",
        prompt: "La suite définie par uₙ = e^(0,5n) est :",
        choices: [
          "arithmétique de raison 0,5",
          "géométrique de raison 0,5",
          "ni arithmétique ni géométrique",
          "géométrique de raison √e",
        ],
        answer: 3,
        explanation:
          "uₙ₊₁ = e^(0,5(n + 1)) = e^(0,5n) × e^(0,5) = uₙ × e^(0,5). Le quotient est constant : la suite est géométrique de raison e^(0,5) = √e ≈ 1,65 (car (e^(0,5))² = e).",
      },
      {
        id: "1re-maths-05-ct-8",
        prompt: "Résoudre dans ℝ : e^(x²) = e^(4x − 3).",
        choices: ["{3}", "{1 ; 3}", "{−1 ; −3}", "Aucune solution"],
        answer: 1,
        explanation:
          "eᵃ = eᵇ ⇔ a = b : x² = 4x − 3, soit x² − 4x + 3 = 0. Δ = 16 − 12 = 4, racines (4 − 2)/2 = 1 et (4 + 2)/2 = 3. S = {1 ; 3}. Vérification : 1² = 4 − 3 ✔ et 3² = 12 − 3 ✔.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 6 ─────────────────────────────
  {
    id: "1re-maths-06",
    title: "Trigonométrie",
    summary:
      "Repérer un point sur le cercle trigonométrique grâce à un réel, utiliser le radian, définir le cosinus et le sinus d’un réel et connaître leurs valeurs remarquables et propriétés.",
    objectives: [
      "Je sais convertir des degrés en radians et inversement.",
      "Je sais placer sur le cercle trigonométrique le point associé à un réel et déterminer une mesure principale.",
      "Je connais les valeurs remarquables du cosinus et du sinus.",
      "Je sais utiliser les relations cos²x + sin²x = 1, la parité et les angles associés.",
    ],
    sections: [
      {
        title: "Cercle trigonométrique et radian",
        body: [
          "Dans un repère orthonormé (O ; I, J), le **cercle trigonométrique** est le cercle de centre O et de rayon 1, orienté dans le **sens direct** (sens inverse des aiguilles d’une montre). Son périmètre vaut 2π.",
          "**Enroulement de la droite des réels** : on « enroule » une droite graduée, tangente au cercle en I, autour du cercle. À tout réel x correspond ainsi un unique point M du cercle : on parcourt une longueur |x| à partir de I, dans le sens direct si x > 0, dans le sens indirect si x < 0. Les réels x et x + 2kπ (k ∈ ℤ) sont associés au **même point**, car un tour complet mesure 2π.",
          "Le **radian** est l’unité d’angle telle que l’angle au centre interceptant un arc de longueur 1 mesure 1 rad. Un tour complet mesure 2π rad = 360°, donc **π rad = 180°**. Conversions : pour passer des degrés aux radians, on multiplie par π/180 ; dans l’autre sens, par 180/π. À retenir : 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π.",
          "Parmi tous les réels associés à un même point, un seul appartient à l’intervalle ]−π ; π] : c’est la **mesure principale**. Pour la trouver, on retranche ou on ajoute un multiple de 2π adapté. Par exemple 7π/4 − 2π = −π/4, donc la mesure principale de 7π/4 est −π/4.",
        ],
        keyPoints: [
          "Cercle de centre O, de rayon 1, orienté dans le sens direct.",
          "x et x + 2kπ (k ∈ ℤ) correspondent au même point.",
          "π rad = 180°.",
          "Mesure principale : l’unique représentant dans ]−π ; π].",
        ],
        formulas: [
          "π rad = 180°",
          "angle en rad = angle en degrés × π/180",
          "Périmètre du cercle trigonométrique : 2π",
        ],
        example: {
          title: "Mesure principale de 29π/6",
          steps: [
            "On cherche k entier tel que 29π/6 − 2kπ ∈ ]−π ; π]. Or 2π = 12π/6.",
            "29π/6 − 2 × 12π/6 = 29π/6 − 24π/6 = 5π/6.",
            "5π/6 ≈ 2,62 appartient bien à ]−π ; π] (π ≈ 3,14).",
            "La mesure principale de 29π/6 est 5π/6 ; en degrés, 5π/6 = 150°.",
          ],
        },
      },
      {
        title: "Cosinus et sinus d’un nombre réel",
        body: [
          "Soit x un réel et M le point du cercle trigonométrique qui lui est associé. Par définition, le **cosinus** de x est l’abscisse de M et le **sinus** de x est l’ordonnée de M : **M(cos x ; sin x)**. Pour un angle aigu, cette définition coïncide avec celle du collège dans le triangle rectangle (côté adjacent/hypoténuse, côté opposé/hypoténuse), l’hypoténuse valant 1.",
          "Conséquences immédiates : pour tout réel x, **−1 ≤ cos x ≤ 1** et **−1 ≤ sin x ≤ 1** ; par le théorème de Pythagore dans le triangle formé par O, M et son projeté sur l’axe des abscisses, **cos²x + sin²x = 1**. Enfin cos(x + 2π) = cos x et sin(x + 2π) = sin x : on dit que cos et sin sont **2π-périodiques**.",
          "**Valeurs remarquables** à connaître par cœur : cos 0 = 1, sin 0 = 0 ; cos(π/6) = √3/2, sin(π/6) = 1/2 ; cos(π/4) = sin(π/4) = √2/2 ; cos(π/3) = 1/2, sin(π/3) = √3/2 ; cos(π/2) = 0, sin(π/2) = 1 ; cos π = −1, sin π = 0. Moyen mnémotechnique : les sinus de 0, π/6, π/4, π/3, π/2 valent √0/2, √1/2, √2/2, √3/2, √4/2.",
          "Le signe de cos x et de sin x dépend du **quadrant** où se trouve M : dans le quart supérieur droit, les deux sont positifs ; dans le quart supérieur gauche, cos < 0 et sin > 0 ; en bas à gauche, les deux sont négatifs ; en bas à droite, cos > 0 et sin < 0. Connaissant cos x et le quadrant, la relation cos²x + sin²x = 1 donne sin x.",
        ],
        keyPoints: [
          "M(cos x ; sin x) sur le cercle trigonométrique.",
          "−1 ≤ cos x ≤ 1 et −1 ≤ sin x ≤ 1.",
          "cos²x + sin²x = 1.",
          "Le signe dépend du quadrant de M.",
        ],
        formulas: [
          "cos²x + sin²x = 1",
          "cos(π/6) = √3/2 ; sin(π/6) = 1/2",
          "cos(π/4) = sin(π/4) = √2/2",
          "cos(π/3) = 1/2 ; sin(π/3) = √3/2",
          "cos(π/2) = 0 ; sin(π/2) = 1 ; cos π = −1 ; sin π = 0",
        ],
        example: {
          title: "Calculer sin x sachant cos x = −3/5 et x ∈ [−π ; 0]",
          steps: [
            "cos²x + sin²x = 1 donc sin²x = 1 − 9/25 = 16/25.",
            "Ainsi sin x = 4/5 ou sin x = −4/5.",
            "x ∈ [−π ; 0] : le point M est dans le demi-cercle inférieur, donc sin x ≤ 0.",
            "Conclusion : sin x = −4/5.",
          ],
        },
      },
      {
        title: "Angles associés et équations trigonométriques",
        body: [
          "Les symétries du cercle donnent des formules dites des **angles associés**. Par symétrie par rapport à l’axe des abscisses : cos(−x) = cos x et sin(−x) = −sin x (la fonction cosinus est **paire**, la fonction sinus est **impaire**). Par symétrie par rapport à l’axe des ordonnées : cos(π − x) = −cos x et sin(π − x) = sin x. Par symétrie de centre O : cos(π + x) = −cos x et sin(π + x) = −sin x.",
          "Par symétrie par rapport à la première bissectrice (droite y = x) : cos(π/2 − x) = sin x et sin(π/2 − x) = cos x. Et cos(π/2 + x) = −sin x, sin(π/2 + x) = cos x. Plutôt que d’apprendre ces formules par cœur, il est conseillé de **refaire le dessin** sur le cercle : on place x, puis le point associé, et on lit les coordonnées.",
          "Ces formules permettent de calculer de nouvelles valeurs : cos(2π/3) = cos(π − π/3) = −cos(π/3) = −1/2 ; sin(5π/6) = sin(π − π/6) = 1/2 ; cos(3π/4) = −√2/2.",
          "**Équations** : pour résoudre cos x = a (avec −1 ≤ a ≤ 1), on repère un réel α tel que cos α = a, puis on lit sur le cercle les deux points d’abscisse a : les solutions sont x = α + 2kπ ou x = −α + 2kπ. Pour sin x = sin α : x = α + 2kπ ou x = π − α + 2kπ. On ne garde ensuite que les solutions de l’intervalle demandé. Les fonctions cos et sin, définies sur ℝ, ont des courbes en forme de vague (sinusoïdes) qui traduisent ces propriétés.",
        ],
        keyPoints: [
          "cos(−x) = cos x ; sin(−x) = −sin x.",
          "cos(π − x) = −cos x ; sin(π − x) = sin x.",
          "cos(π + x) = −cos x ; sin(π + x) = −sin x.",
          "cos(π/2 − x) = sin x ; sin(π/2 − x) = cos x.",
        ],
        formulas: [
          "cos x = cos α ⇔ x = α + 2kπ ou x = −α + 2kπ (k ∈ ℤ)",
          "sin x = sin α ⇔ x = α + 2kπ ou x = π − α + 2kπ (k ∈ ℤ)",
        ],
        example: {
          title: "Résoudre cos x = −√2/2 dans ]−π ; π]",
          steps: [
            "On sait que cos(3π/4) = cos(π − π/4) = −cos(π/4) = −√2/2.",
            "Sur le cercle, deux points ont pour abscisse −√2/2 : ceux associés à 3π/4 et à −3π/4.",
            "Les solutions générales sont x = 3π/4 + 2kπ ou x = −3π/4 + 2kπ.",
            "Dans ]−π ; π], on obtient S = {−3π/4 ; 3π/4}.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-maths-06-ex-1",
        prompt: "Combien mesure un angle de 60° en radians ?",
        choices: ["π/6", "π/3", "π/4", "2π/3"],
        answer: 1,
        explanation: "On multiplie par π/180 : 60 × π/180 = 60π/180 = π/3.",
      },
      {
        id: "1re-maths-06-ex-2",
        prompt: "Combien mesure un angle de 3π/4 radians en degrés ?",
        choices: ["135°", "120°", "150°", "270°"],
        answer: 0,
        explanation: "On remplace π par 180° : 3 × 180°/4 = 540°/4 = 135°.",
      },
      {
        id: "1re-maths-06-ex-3",
        prompt: "Que vaut cos(π/3) ?",
        choices: ["√3/2", "√2/2", "1/2", "0"],
        answer: 2,
        explanation:
          "Valeur remarquable : cos(π/3) = cos 60° = 1/2. (√3/2 est sin(π/3), à ne pas confondre.)",
      },
      {
        id: "1re-maths-06-ex-4",
        prompt: "Que vaut sin(π/4) ?",
        choices: ["1/2", "√3/2", "1", "√2/2"],
        answer: 3,
        explanation:
          "Pour π/4 (45°), le point M est sur la première bissectrice : cos(π/4) = sin(π/4) = √2/2 ≈ 0,707.",
      },
      {
        id: "1re-maths-06-ex-5",
        prompt: "Que vaut cos π ?",
        choices: ["0", "1", "−1", "π"],
        answer: 2,
        explanation:
          "Le réel π correspond au point du cercle diamétralement opposé à I(1 ; 0), c’est-à-dire le point (−1 ; 0). Son abscisse est −1, donc cos π = −1.",
      },
      {
        id: "1re-maths-06-ex-6",
        prompt: "On sait que cos x = 0,6 et sin x > 0. Que vaut sin x ?",
        choices: ["0,4", "0,8", "−0,8", "0,64"],
        answer: 1,
        explanation:
          "sin²x = 1 − cos²x = 1 − 0,36 = 0,64. Donc sin x = 0,8 ou −0,8 ; comme sin x > 0, sin x = 0,8. (0,4 = 1 − 0,6 est faux : la relation porte sur les carrés.)",
      },
    ],
    test: [
      {
        id: "1re-maths-06-ct-1",
        prompt: "Que vaut cos(2π/3) ?",
        choices: ["1/2", "−1/2", "−√3/2", "√3/2"],
        answer: 1,
        explanation:
          "2π/3 = π − π/3. Or cos(π − x) = −cos x, donc cos(2π/3) = −cos(π/3) = −1/2. Le point est dans le quart supérieur gauche : cosinus négatif.",
      },
      {
        id: "1re-maths-06-ct-2",
        prompt: "Que vaut sin(−π/6) ?",
        choices: ["−1/2", "1/2", "−√3/2", "√3/2"],
        answer: 0,
        explanation:
          "La fonction sinus est impaire : sin(−x) = −sin x. Donc sin(−π/6) = −sin(π/6) = −1/2.",
      },
      {
        id: "1re-maths-06-ct-3",
        prompt: "Quelle est la mesure principale de 17π/3 ?",
        choices: ["π/3", "5π/3", "−π/3", "2π/3"],
        answer: 2,
        explanation:
          "2π = 6π/3. 17π/3 − 3 × 6π/3 = 17π/3 − 18π/3 = −π/3, qui appartient à ]−π ; π]. Piège : 17π/3 − 12π/3 = 5π/3 n’est pas dans ]−π ; π] (5π/3 > π).",
      },
      {
        id: "1re-maths-06-ct-4",
        prompt: "Que vaut cos(5π/6) + sin(5π/6) ?",
        choices: ["(1 + √3)/2", "(√3 − 1)/2", "−(1 + √3)/2", "(1 − √3)/2"],
        answer: 3,
        explanation:
          "5π/6 = π − π/6. cos(5π/6) = −cos(π/6) = −√3/2 et sin(5π/6) = sin(π/6) = 1/2. Somme : 1/2 − √3/2 = (1 − √3)/2 ≈ −0,37.",
      },
      {
        id: "1re-maths-06-ct-5",
        prompt: "Résoudre cos x = 1/2 dans ]−π ; π].",
        choices: ["{π/3}", "{−π/3 ; π/3}", "{π/6 ; 5π/6}", "{π/3 ; 2π/3}"],
        answer: 1,
        explanation:
          "cos(π/3) = 1/2. Deux points du cercle ont pour abscisse 1/2 : ceux associés à π/3 et à −π/3 (symétriques par rapport à l’axe des abscisses, car cos est paire). Dans ]−π ; π] : S = {−π/3 ; π/3}. Ne pas oublier la solution négative.",
      },
      {
        id: "1re-maths-06-ct-6",
        prompt: "On sait que x ∈ ]π/2 ; π[ et sin x = 1/3. Que vaut cos x ?",
        choices: ["−2√2/3", "2√2/3", "−2/3", "−8/9"],
        answer: 0,
        explanation:
          "cos²x = 1 − sin²x = 1 − 1/9 = 8/9, donc cos x = ±√(8/9) = ±2√2/3 (car √8 = 2√2). Pour x ∈ ]π/2 ; π[, le point est dans le quart supérieur gauche : cos x < 0. D’où cos x = −2√2/3.",
      },
      {
        id: "1re-maths-06-ct-7",
        prompt: "Simplifier A = cos(π − x) + cos(π + x) + cos(−x).",
        choices: ["3cos x", "cos x", "−cos x", "−3cos x"],
        answer: 2,
        explanation:
          "cos(π − x) = −cos x ; cos(π + x) = −cos x ; cos(−x) = cos x. Donc A = −cos x − cos x + cos x = −cos x.",
      },
      {
        id: "1re-maths-06-ct-8",
        prompt: "Résoudre sin x = √3/2 dans [0 ; 2π[.",
        choices: ["{π/6 ; 5π/6}", "{π/3 ; 4π/3}", "{π/3 ; 5π/3}", "{π/3 ; 2π/3}"],
        answer: 3,
        explanation:
          "sin(π/3) = √3/2. Les solutions sont x = π/3 + 2kπ ou x = π − π/3 + 2kπ = 2π/3 + 2kπ. Dans [0 ; 2π[ : S = {π/3 ; 2π/3}. Piège : π/6 et 5π/6 ont un sinus égal à 1/2, pas √3/2 ; 5π/3 a un sinus négatif.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 7 ─────────────────────────────
  {
    id: "1re-maths-07",
    title: "Produit scalaire et géométrie repérée",
    summary:
      "Définir le produit scalaire de deux vecteurs de plusieurs façons, l’utiliser pour calculer longueurs et angles, caractériser l’orthogonalité et écrire des équations de droites et de cercles.",
    objectives: [
      "Je sais calculer un produit scalaire avec la formule adaptée (cosinus, projection, coordonnées, normes).",
      "Je sais utiliser le théorème d’Al-Kashi pour calculer une longueur ou un angle.",
      "Je sais démontrer que deux vecteurs ou deux droites sont orthogonaux.",
      "Je sais déterminer une équation de droite à partir d’un vecteur normal et une équation de cercle.",
    ],
    sections: [
      {
        title: "Définitions du produit scalaire",
        body: [
          "Le **produit scalaire** de deux vecteurs u⃗ et v⃗ est un **nombre réel** noté u⃗ · v⃗. Si u⃗ et v⃗ sont non nuls et forment un angle géométrique θ, on pose **u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos θ** ; si l’un des deux vecteurs est nul, le produit scalaire vaut 0. En particulier u⃗ · u⃗ = ‖u⃗‖², noté u⃗².",
          "**Avec une projection** : si u⃗ = AB⃗ et v⃗ = AC⃗, et si H est le projeté orthogonal de C sur la droite (AB), alors AB⃗ · AC⃗ = AB⃗ · AH⃗. Ce produit vaut AB × AH si AB⃗ et AH⃗ sont de même sens, et −AB × AH s’ils sont de sens contraires. Cette formule est très efficace dans les figures usuelles (carré, rectangle, triangle rectangle).",
          "**Avec les coordonnées** : dans un repère **orthonormé**, si u⃗(x ; y) et v⃗(x′ ; y′), alors **u⃗ · v⃗ = xx′ + yy′**, et ‖u⃗‖ = √(x² + y²). C’est la formule la plus utilisée en géométrie repérée.",
          "**Avec les normes** (formules de polarisation) : u⃗ · v⃗ = ½(‖u⃗ + v⃗‖² − ‖u⃗‖² − ‖v⃗‖²) = ½(‖u⃗‖² + ‖v⃗‖² − ‖u⃗ − v⃗‖²). Elles servent quand on connaît uniquement des longueurs. Le produit scalaire est symétrique (u⃗ · v⃗ = v⃗ · u⃗) et bilinéaire : u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗ et (ku⃗) · v⃗ = k(u⃗ · v⃗). On retrouve ainsi des identités remarquables : ‖u⃗ + v⃗‖² = ‖u⃗‖² + 2u⃗ · v⃗ + ‖v⃗‖².",
        ],
        keyPoints: [
          "u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos θ.",
          "AB⃗ · AC⃗ = AB⃗ · AH⃗ avec H projeté de C sur (AB).",
          "Repère orthonormé : u⃗ · v⃗ = xx′ + yy′.",
          "u⃗ · u⃗ = ‖u⃗‖².",
        ],
        formulas: [
          "u⃗ · v⃗ = ‖u⃗‖ ‖v⃗‖ cos(u⃗, v⃗)",
          "u⃗ · v⃗ = xx′ + yy′",
          "u⃗ · v⃗ = ½(‖u⃗ + v⃗‖² − ‖u⃗‖² − ‖v⃗‖²)",
          "‖u⃗ + v⃗‖² = ‖u⃗‖² + 2u⃗ · v⃗ + ‖v⃗‖²",
        ],
        example: {
          title: "Calculer un angle avec les coordonnées",
          steps: [
            "Soit u⃗(1 ; 1) et v⃗(0 ; 2) dans un repère orthonormé.",
            "Produit scalaire : u⃗ · v⃗ = 1 × 0 + 1 × 2 = 2.",
            "Normes : ‖u⃗‖ = √(1 + 1) = √2 et ‖v⃗‖ = √(0 + 4) = 2.",
            "cos θ = u⃗ · v⃗/(‖u⃗‖ ‖v⃗‖) = 2/(2√2) = 1/√2 = √2/2.",
            "Donc θ = π/4 (soit 45°).",
          ],
        },
      },
      {
        title: "Orthogonalité et théorème d’Al-Kashi",
        body: [
          "Deux vecteurs u⃗ et v⃗ sont **orthogonaux** si et seulement si **u⃗ · v⃗ = 0** (par convention, le vecteur nul est orthogonal à tout vecteur). En coordonnées dans un repère orthonormé : u⃗(x ; y) ⊥ v⃗(x′ ; y′) ⇔ xx′ + yy′ = 0. C’est l’outil principal pour démontrer qu’un triangle est rectangle ou que deux droites sont perpendiculaires.",
          "**Théorème d’Al-Kashi** (ou loi des cosinus) : dans un triangle ABC, avec les notations a = BC, b = CA, c = AB et Â l’angle en A, on a **a² = b² + c² − 2bc cos Â**. Lorsque Â = 90°, cos Â = 0 et on retrouve le théorème de Pythagore : Al-Kashi en est la généralisation à tous les triangles.",
          "Usages : connaissant deux côtés et l’angle entre eux, on calcule le troisième côté ; connaissant les trois côtés, on calcule un angle grâce à cos Â = (b² + c² − a²)/(2bc). Si cos Â < 0, l’angle Â est obtus.",
          "**Ensemble des points M tels que MA⃗ · MB⃗ = 0** : c’est le **cercle de diamètre [AB]**. En effet, l’angle AMB est droit exactement quand M est sur ce cercle (ou M = A, M = B). Ce résultat permet d’obtenir rapidement l’équation d’un cercle dont on connaît un diamètre.",
        ],
        keyPoints: [
          "u⃗ ⊥ v⃗ ⇔ u⃗ · v⃗ = 0.",
          "Al-Kashi : a² = b² + c² − 2bc cos Â.",
          "cos Â = (b² + c² − a²)/(2bc).",
          "MA⃗ · MB⃗ = 0 ⇔ M appartient au cercle de diamètre [AB].",
        ],
        formulas: [
          "u⃗ ⊥ v⃗ ⇔ xx′ + yy′ = 0",
          "BC² = AB² + AC² − 2 AB × AC × cos Â",
          "cos Â = (b² + c² − a²)/(2bc)",
        ],
        example: {
          title: "Calculer une longueur avec Al-Kashi",
          steps: [
            "Dans un triangle ABC, AB = 4, AC = 6 et Â = 120°. On cherche BC.",
            "Al-Kashi : BC² = AB² + AC² − 2 × AB × AC × cos Â.",
            "cos 120° = −1/2, donc BC² = 16 + 36 − 2 × 4 × 6 × (−1/2) = 52 + 24 = 76.",
            "BC = √76 = 2√19 ≈ 8,72.",
          ],
        },
      },
      {
        title: "Équations de droites et de cercles",
        body: [
          "Un **vecteur normal** à une droite d est un vecteur non nul orthogonal à un vecteur directeur de d. Dans un repère orthonormé, la droite passant par A et de vecteur normal n⃗(a ; b) est l’ensemble des points M tels que AM⃗ · n⃗ = 0. On obtient une équation de la forme **ax + by + c = 0**.",
          "Réciproquement, la droite d’équation cartésienne ax + by + c = 0 admet **n⃗(a ; b)** comme vecteur normal et **u⃗(−b ; a)** comme vecteur directeur. Deux droites sont perpendiculaires si et seulement si leurs vecteurs normaux sont orthogonaux. Méthode : on écrit ax + by + c = 0 avec (a ; b) connu, puis on trouve c en exprimant que A appartient à la droite.",
          "Le **cercle** de centre Ω(x₀ ; y₀) et de rayon r est l’ensemble des points M tels que ΩM = r, soit ΩM² = r². Son équation est **(x − x₀)² + (y − y₀)² = r²**.",
          "Inversement, une équation du type x² + y² + αx + βy + γ = 0 peut représenter un cercle, un point ou l’ensemble vide. Pour le savoir, on **complète les carrés** (comme pour la forme canonique) afin d’obtenir (x − x₀)² + (y − y₀)² = k. Si k > 0, c’est un cercle de centre (x₀ ; y₀) et de rayon √k ; si k = 0, c’est un point ; si k < 0, l’ensemble est vide.",
        ],
        keyPoints: [
          "ax + by + c = 0 a pour vecteur normal n⃗(a ; b) et pour vecteur directeur u⃗(−b ; a).",
          "Droite par A de vecteur normal n⃗ : AM⃗ · n⃗ = 0.",
          "Cercle de centre (x₀ ; y₀), rayon r : (x − x₀)² + (y − y₀)² = r².",
          "Compléter les carrés pour reconnaître un cercle.",
        ],
        formulas: [
          "d : ax + by + c = 0 ⇒ n⃗(a ; b) normal, u⃗(−b ; a) directeur",
          "𝒞 : (x − x₀)² + (y − y₀)² = r²",
          "x² + 2px = (x + p)² − p²",
        ],
        example: {
          title: "Hauteur d’un triangle",
          steps: [
            "Soit A(1 ; 2), B(3 ; −1) et C(5 ; 3). On cherche une équation de la hauteur issue de A.",
            "La hauteur passe par A et est perpendiculaire à (BC) : BC⃗(2 ; 4) est un vecteur normal.",
            "Équation : 2x + 4y + c = 0. Comme A appartient à la droite : 2 + 8 + c = 0, donc c = −10.",
            "Hauteur : 2x + 4y − 10 = 0, soit x + 2y − 5 = 0 après division par 2.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-maths-07-ex-1",
        prompt: "Dans un repère orthonormé, u⃗(2 ; 3) et v⃗(4 ; −1). Que vaut u⃗ · v⃗ ?",
        choices: ["5", "11", "−5", "7"],
        answer: 0,
        explanation: "u⃗ · v⃗ = xx′ + yy′ = 2 × 4 + 3 × (−1) = 8 − 3 = 5.",
      },
      {
        id: "1re-maths-07-ex-2",
        prompt: "‖u⃗‖ = 3, ‖v⃗‖ = 4 et l’angle entre u⃗ et v⃗ mesure π/3. Que vaut u⃗ · v⃗ ?",
        choices: ["12", "6√3", "6", "7"],
        answer: 2,
        explanation:
          "u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(π/3) = 3 × 4 × 1/2 = 6. (6√3 utiliserait à tort sin(π/3) = √3/2.)",
      },
      {
        id: "1re-maths-07-ex-3",
        prompt: "Dans un repère orthonormé, u⃗(3 ; −2) et v⃗(4 ; 6). Les vecteurs u⃗ et v⃗ sont :",
        choices: ["colinéaires", "orthogonaux", "de même norme", "ni colinéaires ni orthogonaux"],
        answer: 1,
        explanation:
          "u⃗ · v⃗ = 3 × 4 + (−2) × 6 = 12 − 12 = 0, donc u⃗ et v⃗ sont orthogonaux. (Ils ne sont pas colinéaires : 3 × 6 − (−2) × 4 = 26 ≠ 0.)",
      },
      {
        id: "1re-maths-07-ex-4",
        prompt: "Quel est un vecteur normal à la droite d’équation 2x − 5y + 1 = 0 ?",
        choices: ["(5 ; 2)", "(−5 ; 2)", "(2 ; 5)", "(2 ; −5)"],
        answer: 3,
        explanation:
          "Pour ax + by + c = 0, le vecteur n⃗(a ; b) est normal : ici n⃗(2 ; −5). Le vecteur (5 ; 2) = (−b ; a) est un vecteur directeur, pas un vecteur normal.",
      },
      {
        id: "1re-maths-07-ex-5",
        prompt: "Quelle est l’équation du cercle de centre Ω(1 ; −2) et de rayon 3 ?",
        choices: [
          "(x − 1)² + (y + 2)² = 9",
          "(x + 1)² + (y − 2)² = 9",
          "(x − 1)² + (y + 2)² = 3",
          "(x − 1)² + (y − 2)² = 9",
        ],
        answer: 0,
        explanation:
          "(x − x₀)² + (y − y₀)² = r² avec x₀ = 1, y₀ = −2, r = 3 : (x − 1)² + (y − (−2))² = 3², soit (x − 1)² + (y + 2)² = 9. Ne pas oublier d’élever le rayon au carré.",
      },
      {
        id: "1re-maths-07-ex-6",
        prompt: "Dans un triangle ABC, AB = 5, AC = 8 et Â = 60°. Que vaut BC ?",
        choices: ["√89", "7", "49", "√129"],
        answer: 1,
        explanation:
          "Al-Kashi : BC² = 5² + 8² − 2 × 5 × 8 × cos 60° = 25 + 64 − 80 × 1/2 = 89 − 40 = 49. Donc BC = 7. (49 est BC², √89 oublie le terme en cosinus.)",
      },
    ],
    test: [
      {
        id: "1re-maths-07-ct-1",
        prompt: "Dans un repère orthonormé, A(1 ; 2), B(4 ; 6) et C(5 ; −1). Le triangle ABC est :",
        choices: ["rectangle en A", "rectangle en B", "équilatéral", "rectangle en C"],
        answer: 0,
        explanation:
          "AB⃗(3 ; 4) et AC⃗(4 ; −3). AB⃗ · AC⃗ = 12 − 12 = 0 : les vecteurs sont orthogonaux, le triangle est rectangle en A. De plus AB = AC = 5 : il est même isocèle rectangle en A (BC = √(1 + 49) = √50 = 5√2).",
      },
      {
        id: "1re-maths-07-ct-2",
        prompt: "On sait que ‖u⃗‖ = 3, ‖v⃗‖ = 5 et ‖u⃗ + v⃗‖ = 7. Que vaut u⃗ · v⃗ ?",
        choices: ["15", "−7,5", "7,5", "21"],
        answer: 2,
        explanation:
          "Polarisation : u⃗ · v⃗ = ½(‖u⃗ + v⃗‖² − ‖u⃗‖² − ‖v⃗‖²) = ½(49 − 9 − 25) = ½ × 15 = 7,5. Piège : oublier le facteur ½ donne 15.",
      },
      {
        id: "1re-maths-07-ct-3",
        prompt: "Quelle est une équation de la droite passant par A(2 ; −1) et de vecteur normal n⃗(3 ; 4) ?",
        choices: ["3x + 4y + 2 = 0", "3x + 4y − 2 = 0", "4x − 3y − 11 = 0", "3x − 4y − 10 = 0"],
        answer: 1,
        explanation:
          "Équation de la forme 3x + 4y + c = 0. A appartient à la droite : 3 × 2 + 4 × (−1) + c = 0, soit 6 − 4 + c = 0, c = −2. D’où 3x + 4y − 2 = 0. La droite 4x − 3y − 11 = 0 passe aussi par A mais a pour vecteur normal (4 ; −3) : c’est la perpendiculaire.",
      },
      {
        id: "1re-maths-07-ct-4",
        prompt: "Quel ensemble est défini par l’équation x² + y² − 4x + 6y − 3 = 0 ?",
        choices: [
          "Le cercle de centre (−2 ; 3) et de rayon 4",
          "Le cercle de centre (2 ; −3) et de rayon 16",
          "Le cercle de centre (2 ; −3) et de rayon √3",
          "Le cercle de centre (2 ; −3) et de rayon 4",
        ],
        answer: 3,
        explanation:
          "On complète les carrés : x² − 4x = (x − 2)² − 4 et y² + 6y = (y + 3)² − 9. L’équation devient (x − 2)² − 4 + (y + 3)² − 9 − 3 = 0, soit (x − 2)² + (y + 3)² = 16. Centre (2 ; −3), rayon √16 = 4.",
      },
      {
        id: "1re-maths-07-ct-5",
        prompt: "Un triangle ABC a pour côtés BC = 7, CA = 5 et AB = 3. Combien mesure l’angle Â ?",
        choices: ["60°", "120°", "150°", "30°"],
        answer: 1,
        explanation:
          "cos Â = (AB² + AC² − BC²)/(2 × AB × AC) = (9 + 25 − 49)/(2 × 3 × 5) = −15/30 = −1/2. Donc Â = 120° (angle obtus, cohérent avec le cosinus négatif ; BC est le plus grand côté).",
      },
      {
        id: "1re-maths-07-ct-6",
        prompt: "Pour quelle valeur de m les vecteurs u⃗(m ; 2) et v⃗(3 ; m − 5) sont-ils orthogonaux ?",
        choices: ["m = 2", "m = −2", "m = 5", "m = 10/3"],
        answer: 0,
        explanation:
          "u⃗ · v⃗ = 3m + 2(m − 5) = 3m + 2m − 10 = 5m − 10. Orthogonaux ⇔ 5m − 10 = 0 ⇔ m = 2. Vérification : u⃗(2 ; 2), v⃗(3 ; −3), produit 6 − 6 = 0 ✔.",
      },
      {
        id: "1re-maths-07-ct-7",
        prompt: "ABCD est un carré de côté 4. Que vaut AB⃗ · AC⃗ ?",
        choices: ["16√2", "8", "16", "0"],
        answer: 2,
        explanation:
          "Le projeté orthogonal de C sur (AB) est B. Donc AB⃗ · AC⃗ = AB⃗ · AB⃗ = AB² = 16. Autre méthode : AB × AC × cos 45° = 4 × 4√2 × √2/2 = 16 ✔.",
      },
      {
        id: "1re-maths-07-ct-8",
        prompt: "Dans un repère orthonormé, A(−1 ; 0) et B(3 ; 0). Quel est l’ensemble des points M tels que MA⃗ · MB⃗ = 0 ?",
        choices: [
          "La droite d’équation x = 1",
          "Le cercle de centre (1 ; 0) et de rayon 4",
          "Le segment [AB]",
          "Le cercle de centre (1 ; 0) et de rayon 2",
        ],
        answer: 3,
        explanation:
          "MA⃗ · MB⃗ = 0 caractérise le cercle de diamètre [AB]. Son centre est le milieu de [AB] : (1 ; 0). Son rayon vaut AB/2 = 4/2 = 2. Vérification par le calcul : (−1 − x)(3 − x) + y² = 0 ⇔ x² − 2x − 3 + y² = 0 ⇔ (x − 1)² + y² = 4 ✔.",
      },
    ],
  },

  // ───────────────────────────── Chapitre 8 ─────────────────────────────
  {
    id: "1re-maths-08",
    title: "Probabilités conditionnelles et variables aléatoires",
    summary:
      "Calculer des probabilités conditionnelles à l’aide d’arbres pondérés, utiliser la formule des probabilités totales et l’indépendance, puis étudier une variable aléatoire par sa loi, son espérance et sa variance.",
    objectives: [
      "Je sais calculer et interpréter une probabilité conditionnelle.",
      "Je sais construire et exploiter un arbre pondéré, et appliquer la formule des probabilités totales.",
      "Je sais reconnaître deux événements indépendants.",
      "Je sais déterminer la loi d’une variable aléatoire et calculer son espérance, sa variance et son écart-type.",
    ],
    sections: [
      {
        title: "Probabilités conditionnelles et arbres pondérés",
        body: [
          "Soit A un événement de probabilité non nulle. La **probabilité de B sachant A** est le nombre **P_A(B) = P(A ∩ B)/P(A)**. Elle mesure la probabilité que B se réalise lorsqu’on sait déjà que A est réalisé : l’univers est en quelque sorte « restreint » à A. Exemple : dans une classe de 30 élèves dont 12 filles, dont 3 sont gauchères, la probabilité qu’une élève choisie parmi les filles soit gauchère est 3/12 = 1/4.",
          "La formule se retourne : **P(A ∩ B) = P(A) × P_A(B)**. C’est la règle de calcul des **arbres pondérés** : la probabilité d’un chemin est le **produit** des probabilités rencontrées sur ses branches. Sur les branches de second niveau, on écrit des probabilités conditionnelles.",
          "Règles de construction d’un arbre : la somme des probabilités des branches issues d’un même nœud vaut 1 (ainsi P_A(B̄) = 1 − P_A(B)) ; chaque chemin correspond à une intersection d’événements. On note Ā l’événement contraire de A, avec P(Ā) = 1 − P(A).",
          "Attention à ne pas confondre P_A(B) et P_B(A) : la probabilité d’être positif à un test sachant qu’on est malade n’est pas la probabilité d’être malade sachant que le test est positif. Pour « inverser » le conditionnement, on revient à la définition : P_B(A) = P(A ∩ B)/P(B).",
        ],
        keyPoints: [
          "P_A(B) = P(A ∩ B)/P(A), avec P(A) ≠ 0.",
          "P(A ∩ B) = P(A) × P_A(B) : produit le long d’un chemin.",
          "La somme des branches issues d’un nœud vaut 1.",
          "P_A(B) et P_B(A) sont en général différents.",
        ],
        formulas: [
          "P_A(B) = P(A ∩ B)/P(A)",
          "P(A ∩ B) = P(A) × P_A(B)",
          "P_A(B̄) = 1 − P_A(B)",
        ],
        example: {
          title: "Un arbre en deux étapes",
          steps: [
            "Dans un lycée, 60 % des élèves pratiquent un sport (S). Parmi les sportifs, 30 % jouent d’un instrument (I) ; parmi les non-sportifs, 50 %.",
            "Arbre : P(S) = 0,6 ; P(S̄) = 0,4 ; P_S(I) = 0,3 ; P_S̄(I) = 0,5.",
            "P(S ∩ I) = 0,6 × 0,3 = 0,18.",
            "P(S̄ ∩ I) = 0,4 × 0,5 = 0,20.",
            "Interprétation : 18 % des élèves sont sportifs et musiciens.",
          ],
        },
      },
      {
        title: "Probabilités totales et indépendance",
        body: [
          "Des événements A₁, A₂, …, Aₙ forment une **partition** de l’univers s’ils sont deux à deux incompatibles, de probabilités non nulles, et si leur réunion est l’univers tout entier. Le cas le plus courant est la partition {A ; Ā}.",
          "**Formule des probabilités totales** : si A₁, …, Aₙ forment une partition, alors P(B) = P(A₁ ∩ B) + P(A₂ ∩ B) + … + P(Aₙ ∩ B). Avec un arbre : **P(B) est la somme des probabilités de tous les chemins qui mènent à B**. Pour la partition {A ; Ā} : P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B).",
          "Deux événements A et B sont **indépendants** si **P(A ∩ B) = P(A) × P(B)**. Lorsque P(A) ≠ 0, cela équivaut à P_A(B) = P(B) : savoir que A est réalisé ne change pas la probabilité de B. Si A et B sont indépendants, alors Ā et B, A et B̄, Ā et B̄ le sont aussi.",
          "Ne pas confondre **indépendants** et **incompatibles** : deux événements incompatibles (A ∩ B = ∅) de probabilités non nulles ne sont jamais indépendants, puisque P(A ∩ B) = 0 ≠ P(A) × P(B). Pour une **succession d’épreuves indépendantes** (tirages avec remise, lancers successifs…), la probabilité d’une liste de résultats est le produit des probabilités de chaque résultat.",
        ],
        keyPoints: [
          "P(B) = P(A)P_A(B) + P(Ā)P_Ā(B).",
          "Indépendance : P(A ∩ B) = P(A) × P(B).",
          "Si P(A) ≠ 0 : indépendance ⇔ P_A(B) = P(B).",
          "Incompatibles ≠ indépendants.",
        ],
        formulas: [
          "P(B) = P(A ∩ B) + P(Ā ∩ B)",
          "A et B indépendants ⇔ P(A ∩ B) = P(A) × P(B)",
          "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
        ],
        example: {
          title: "Suite de l’exemple : inverser le conditionnement",
          steps: [
            "Probabilités totales : P(I) = P(S ∩ I) + P(S̄ ∩ I) = 0,18 + 0,20 = 0,38.",
            "On choisit un élève musicien. Probabilité qu’il soit sportif : P_I(S) = P(S ∩ I)/P(I) = 0,18/0,38 = 9/19 ≈ 0,47.",
            "Indépendance ? P(S) × P(I) = 0,6 × 0,38 = 0,228 ≠ 0,18 = P(S ∩ I).",
            "Donc S et I ne sont pas indépendants (cohérent avec P_S(I) = 0,3 ≠ P(I) = 0,38).",
          ],
        },
      },
      {
        title: "Variables aléatoires : loi, espérance, variance",
        body: [
          "Une **variable aléatoire** X est une fonction qui associe un nombre réel à chaque issue d’une expérience aléatoire (un gain, un nombre de succès, une somme de dés…). L’événement « X prend la valeur xᵢ » se note {X = xᵢ}. Donner la **loi de probabilité** de X, c’est donner toutes les valeurs x₁, …, xₙ prises par X et les probabilités pᵢ = P(X = xᵢ) correspondantes, généralement dans un tableau. On a toujours p₁ + p₂ + … + pₙ = 1.",
          "L’**espérance** de X est la moyenne des valeurs pondérées par leurs probabilités : **E(X) = x₁p₁ + x₂p₂ + … + xₙpₙ**. Elle s’interprète comme la valeur moyenne de X sur un très grand nombre de répétitions. Pour un jeu, E(X) est le gain moyen par partie : si E(X) < 0, le jeu est défavorable au joueur ; si E(X) = 0, il est équitable.",
          "La **variance** mesure la dispersion des valeurs autour de l’espérance : **V(X) = p₁(x₁ − E(X))² + … + pₙ(xₙ − E(X))²**, ou plus simplement V(X) = E(X²) − E(X)² (formule de König-Huygens). L’**écart-type** est σ(X) = √V(X) ; il s’exprime dans la même unité que X. Une variance est toujours positive ou nulle.",
          "**Transformation affine** : pour tous réels a et b, **E(aX + b) = aE(X) + b** et **V(aX + b) = a²V(X)**, donc σ(aX + b) = |a|σ(X). Ajouter une constante décale les valeurs sans changer leur dispersion ; multiplier par a multiplie la variance par a².",
        ],
        keyPoints: [
          "Loi : valeurs xᵢ et probabilités pᵢ, avec Σpᵢ = 1.",
          "E(X) = Σ xᵢpᵢ.",
          "V(X) = Σ pᵢ(xᵢ − E(X))² = E(X²) − E(X)².",
          "E(aX + b) = aE(X) + b ; V(aX + b) = a²V(X).",
        ],
        formulas: [
          "E(X) = x₁p₁ + x₂p₂ + … + xₙpₙ",
          "V(X) = Σ pᵢ(xᵢ − E(X))² = E(X²) − (E(X))²",
          "σ(X) = √V(X)",
          "E(aX + b) = aE(X) + b   V(aX + b) = a²V(X)",
        ],
        example: {
          title: "Un jeu de dé",
          steps: [
            "On lance un dé équilibré : on gagne 6 € si l’on obtient 6, 2 € si l’on obtient 4 ou 5, et on perd 3 € sinon. X est le gain.",
            "Loi : P(X = 6) = 1/6 ; P(X = 2) = 2/6 = 1/3 ; P(X = −3) = 3/6 = 1/2 (somme : 1 ✔).",
            "E(X) = 6 × 1/6 + 2 × 1/3 + (−3) × 1/2 = 1 + 2/3 − 3/2 = 1/6 ≈ 0,17 €.",
            "E(X²) = 36 × 1/6 + 4 × 1/3 + 9 × 1/2 = 6 + 4/3 + 9/2 = 71/6.",
            "V(X) = 71/6 − (1/6)² = 426/36 − 1/36 = 425/36 ≈ 11,8 et σ(X) ≈ 3,44 €. Le jeu est légèrement favorable au joueur.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-maths-08-ex-1",
        prompt: "On sait que P(A) = 0,4 et P(A ∩ B) = 0,1. Que vaut P_A(B) ?",
        choices: ["0,04", "0,25", "0,5", "0,1"],
        answer: 1,
        explanation: "P_A(B) = P(A ∩ B)/P(A) = 0,1/0,4 = 0,25.",
      },
      {
        id: "1re-maths-08-ex-2",
        prompt: "Dans un arbre pondéré, P(A) = 0,3 et P_A(B) = 0,6. Que vaut P(A ∩ B) ?",
        choices: ["0,9", "0,5", "0,18", "0,3"],
        answer: 2,
        explanation:
          "On multiplie les probabilités le long du chemin A puis B : P(A ∩ B) = P(A) × P_A(B) = 0,3 × 0,6 = 0,18.",
      },
      {
        id: "1re-maths-08-ex-3",
        prompt: "P(A) = 0,3, P_A(B) = 0,6 et P_Ā(B) = 0,2. Que vaut P(B) ?",
        choices: ["0,32", "0,8", "0,14", "0,4"],
        answer: 0,
        explanation:
          "Probabilités totales : P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B) = 0,3 × 0,6 + 0,7 × 0,2 = 0,18 + 0,14 = 0,32. Ne pas oublier P(Ā) = 1 − 0,3 = 0,7.",
      },
      {
        id: "1re-maths-08-ex-4",
        prompt: "A et B sont indépendants, avec P(A) = 0,5 et P(B) = 0,4. Que vaut P(A ∩ B) ?",
        choices: ["0,9", "0,1", "0,45", "0,2"],
        answer: 3,
        explanation: "Par définition de l’indépendance : P(A ∩ B) = P(A) × P(B) = 0,5 × 0,4 = 0,2.",
      },
      {
        id: "1re-maths-08-ex-5",
        prompt: "X prend les valeurs 0, 1 et 2 avec les probabilités 0,5 ; 0,3 et 0,2. Que vaut E(X) ?",
        choices: ["1", "0,7", "0,5", "1,2"],
        answer: 1,
        explanation: "E(X) = 0 × 0,5 + 1 × 0,3 + 2 × 0,2 = 0 + 0,3 + 0,4 = 0,7.",
      },
      {
        id: "1re-maths-08-ex-6",
        prompt: "X prend les valeurs 1, 2 et 3 avec les probabilités 0,2 ; 0,5 et p. Que vaut p ?",
        choices: ["0,7", "0,5", "0,3", "0,2"],
        answer: 2,
        explanation: "La somme des probabilités vaut 1 : 0,2 + 0,5 + p = 1, donc p = 1 − 0,7 = 0,3.",
      },
    ],
    test: [
      {
        id: "1re-maths-08-ct-1",
        prompt: "P(A) = 0,3, P_A(B) = 0,6 et P_Ā(B) = 0,2. Que vaut P_B(A) ?",
        choices: ["0,6", "0,18", "9/16", "0,32"],
        answer: 2,
        explanation:
          "Étape 1 : P(A ∩ B) = 0,3 × 0,6 = 0,18. Étape 2 : P(B) = 0,18 + 0,7 × 0,2 = 0,32. Étape 3 : P_B(A) = P(A ∩ B)/P(B) = 0,18/0,32 = 18/32 = 9/16 = 0,5625. Piège : 0,6 est P_A(B), pas P_B(A).",
      },
      {
        id: "1re-maths-08-ct-2",
        prompt: "2 % d’une population est malade. Un test est positif dans 95 % des cas chez un malade et dans 10 % des cas chez une personne saine. Quelle est la probabilité qu’un test soit positif ?",
        choices: ["0,117", "0,105", "0,019", "0,95"],
        answer: 0,
        explanation:
          "M : « malade », T : « test positif ». P(T) = P(M) × P_M(T) + P(M̄) × P_M̄(T) = 0,02 × 0,95 + 0,98 × 0,10 = 0,019 + 0,098 = 0,117. Remarque : P_T(M) = 0,019/0,117 ≈ 0,16 seulement !",
      },
      {
        id: "1re-maths-08-ct-3",
        prompt: "P(A) = 0,5, P(B) = 0,6 et P(A ∪ B) = 0,8. Que peut-on dire de A et B ?",
        choices: [
          "A et B sont incompatibles",
          "A et B sont indépendants",
          "A et B ne sont pas indépendants",
          "On ne peut pas conclure",
        ],
        answer: 1,
        explanation:
          "P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0,5 + 0,6 − 0,8 = 0,3. Or P(A) × P(B) = 0,5 × 0,6 = 0,3. L’égalité P(A ∩ B) = P(A)P(B) est vérifiée : A et B sont indépendants. Ils ne sont pas incompatibles puisque P(A ∩ B) ≠ 0.",
      },
      {
        id: "1re-maths-08-ct-4",
        prompt: "Un jeu coûte 2 €. On lance un dé équilibré : si on obtient 6, on reçoit 10 € ; sinon on ne reçoit rien. Quelle est l’espérance du gain net G ?",
        choices: ["1/3 €", "0 €", "−2 €", "−1/3 €"],
        answer: 3,
        explanation:
          "Gain net : 10 − 2 = 8 € avec probabilité 1/6, et −2 € avec probabilité 5/6. E(G) = 8 × 1/6 + (−2) × 5/6 = 8/6 − 10/6 = −2/6 = −1/3 ≈ −0,33 €. Le jeu est défavorable au joueur. Piège : oublier de retrancher la mise.",
      },
      {
        id: "1re-maths-08-ct-5",
        prompt: "X prend les valeurs 0, 2 et 4 avec les probabilités 0,25 ; 0,5 et 0,25. Que vaut V(X) ?",
        choices: ["2", "4", "√2", "1"],
        answer: 0,
        explanation:
          "E(X) = 0 + 2 × 0,5 + 4 × 0,25 = 1 + 1 = 2. V(X) = 0,25 × (0 − 2)² + 0,5 × (2 − 2)² + 0,25 × (4 − 2)² = 1 + 0 + 1 = 2. (√2 est l’écart-type.) Vérification : E(X²) = 0 + 2 + 4 = 6 et 6 − 2² = 2 ✔.",
      },
      {
        id: "1re-maths-08-ct-6",
        prompt: "E(X) = 3 et V(X) = 2. On pose Y = −2X + 5. Que valent E(Y) et V(Y) ?",
        choices: [
          "E(Y) = −1 et V(Y) = −4",
          "E(Y) = 11 et V(Y) = 8",
          "E(Y) = −1 et V(Y) = 8",
          "E(Y) = −1 et V(Y) = 9",
        ],
        answer: 2,
        explanation:
          "E(Y) = −2E(X) + 5 = −6 + 5 = −1. V(Y) = (−2)²V(X) = 4 × 2 = 8 : la constante 5 n’intervient pas et le coefficient est élevé au carré. Une variance n’est jamais négative (−4 est impossible).",
      },
      {
        id: "1re-maths-08-ct-7",
        prompt: "Une urne contient 3 boules rouges et 2 bleues. On tire successivement 2 boules avec remise. Quelle est la probabilité d’obtenir exactement une boule rouge ?",
        choices: ["6/25", "12/25", "9/25", "13/25"],
        answer: 1,
        explanation:
          "Les tirages avec remise sont indépendants : P(R) = 3/5, P(B) = 2/5. Deux chemins conviennent : (R ; B) et (B ; R). P = 3/5 × 2/5 + 2/5 × 3/5 = 6/25 + 6/25 = 12/25 = 0,48. Piège : ne compter qu’un seul ordre (6/25).",
      },
      {
        id: "1re-maths-08-ct-8",
        prompt: "P(A) = 0,4, P_A(B) = 0,5 et P(B) = 0,5. Que vaut P_Ā(B) ?",
        choices: ["0,3", "0,6", "0,2", "0,5"],
        answer: 3,
        explanation:
          "Probabilités totales : P(B) = P(A)P_A(B) + P(Ā)P_Ā(B), soit 0,5 = 0,4 × 0,5 + 0,6 × P_Ā(B) = 0,2 + 0,6 × P_Ā(B). Donc P_Ā(B) = 0,3/0,6 = 0,5. On remarque que P_A(B) = P(B) : A et B sont indépendants, ce qui est cohérent avec P_Ā(B) = P(B).",
      },
    ],
  },
];

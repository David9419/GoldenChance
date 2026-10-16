import type { Chapter } from "../../types";

export const chapters: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // Chapitre 1 — Figures de style et registres
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-francais-01",
    title: "Les outils d’analyse : figures de style et registres",
    summary:
      "Repérer et interpréter les principales figures de style et les registres littéraires, pour transformer une simple lecture en véritable analyse.",
    objectives: [
      "Je sais définir et reconnaître les principales figures d’analogie, d’opposition, d’insistance et d’atténuation.",
      "Je sais distinguer une comparaison d’une métaphore, une métonymie d’une périphrase.",
      "Je sais identifier les grands registres (lyrique, tragique, pathétique, comique, épique, satirique, polémique…).",
      "Je sais rédiger une analyse qui relie un procédé à son effet sur le lecteur.",
    ],
    sections: [
      {
        title: "Les figures d’analogie et de substitution",
        body: [
          "Une **figure de style** est une manière particulière d’utiliser la langue pour produire un effet : rendre une idée plus frappante, créer une image, émouvoir, faire sourire. Repérer une figure ne suffit jamais : il faut toujours dire **ce qu’elle apporte au sens du texte**. Au bac comme en Seconde, une analyse se construit sur le trio **procédé → citation → effet**.",
          "Les **figures d’analogie** rapprochent deux réalités. La **comparaison** relie un comparé et un comparant grâce à un **outil de comparaison** (comme, tel, pareil à, semblable à, ressembler à…) : « Le Poète est semblable au prince des nuées » (Baudelaire, « L’Albatros »). La **métaphore** opère le même rapprochement **sans outil** : dans « Cette faucille d’or dans le champ des étoiles » (Victor Hugo, « Booz endormi »), le croissant de lune devient une faucille. Quand la métaphore se prolonge sur plusieurs mots ou plusieurs vers, on parle de **métaphore filée**. La **personnification** prête des caractéristiques humaines à une chose ou un animal : « La Nature est un temple où de vivants piliers / Laissent parfois sortir de confuses paroles » (Baudelaire, « Correspondances »).",
          "Les **figures de substitution** remplacent un mot par un autre. La **métonymie** désigne une réalité par une autre qui lui est liée logiquement : le contenant pour le contenu (« boire un verre »), l’auteur pour l’œuvre (« lire un Zola »), le lieu pour l’institution (« l’Élysée a annoncé »). La **synecdoque**, souvent rangée dans les métonymies, prend la partie pour le tout (« une voile à l’horizon » pour un bateau). La **périphrase** remplace un mot par une expression plus longue qui le définit : « la Ville lumière » pour Paris, « le roi des animaux » pour le lion.",
          "Ces figures ne sont pas des ornements gratuits : la comparaison et la métaphore **créent des images** et orientent le regard du lecteur ; la périphrase peut **valoriser** (éloge) ou **éviter un mot jugé trivial** ; la métonymie produit souvent un effet de **concision** et de concret.",
        ],
        keyPoints: [
          "**Comparaison** : comparé + outil + comparant (« semblable au prince des nuées »).",
          "**Métaphore** : rapprochement sans outil ; **métaphore filée** si elle se prolonge.",
          "**Personnification** : une chose ou une idée est présentée comme un être humain.",
          "**Métonymie** : un mot remplacé par un autre qui lui est logiquement lié ; **synecdoque** : la partie pour le tout.",
          "**Périphrase** : une expression qui désigne indirectement un être ou une chose.",
        ],
        formulas: [
          "Analyser = nommer le procédé + citer précisément + interpréter l’effet.",
          "Comparaison → outil présent ; métaphore → pas d’outil.",
        ],
        example: {
          title: "Analyser une métaphore : « Cette faucille d’or dans le champ des étoiles » (Hugo)",
          steps: [
            "Repérer : la lune (comparé, implicite) est désignée par « faucille d’or » (comparant).",
            "Nommer : il n’y a pas d’outil de comparaison, c’est donc une **métaphore**.",
            "Observer le prolongement : « champ des étoiles » poursuit l’image agricole (faucille → champ) : c’est une **métaphore filée**.",
            "Interpréter : le ciel nocturne devient un champ de moisson, en accord avec le monde biblique et paysan du poème ; l’image unit la terre et le ciel.",
            "Rédiger : « Par la métaphore filée de la “faucille d’or” dans le “champ des étoiles”, Hugo transforme le ciel en paysage rural et donne à la nuit une dimension sacrée et paisible. »",
          ],
        },
      },
      {
        title: "Les figures d’opposition, d’insistance et d’atténuation",
        body: [
          "Les **figures d’opposition** mettent en tension deux idées. L’**antithèse** rapproche deux termes de sens contraire dans un même passage : « Ver de terre amoureux d’une étoile » (Victor Hugo, Ruy Blas) oppose la bassesse et l’élévation. L’**oxymore** réunit deux termes contradictoires **dans un même groupe de mots** : « Cette obscure clarté qui tombe des étoiles » (Corneille, Le Cid). Le **chiasme** organise deux groupes selon une structure croisée A-B / B-A : « Il faut manger pour vivre et non pas vivre pour manger » (Molière, L’Avare).",
          "Les **figures d’insistance** amplifient. L’**anaphore** répète un mot ou un groupe en début de vers, de phrase ou de proposition. L’**accumulation** (ou énumération) aligne de nombreux termes ; si ces termes sont rangés par intensité croissante ou décroissante, on parle de **gradation** : « C’est un roc !… c’est un pic !… c’est un cap ! / Que dis-je, c’est un cap ?… C’est une péninsule ! » (Edmond Rostand, Cyrano de Bergerac). L’**hyperbole** exagère pour frapper les esprits (« mourir de rire », « un bruit à réveiller un mort »). Le **parallélisme** reprend une même construction syntaxique : « Je le vis, je rougis, je pâlis à sa vue » (Racine, Phèdre).",
          "Les **figures d’atténuation** disent moins pour suggérer plus ou pour adoucir. La **litote** dit moins pour faire entendre davantage : « Va, je ne te hais point » (Corneille, Le Cid) signifie en réalité « je t’aime ». L’**euphémisme** adoucit une réalité pénible (« il nous a quittés » pour « il est mort »). L’**ironie** dit le contraire de ce que l’on pense en comptant sur le lecteur pour rétablir le vrai sens : Montesquieu, feignant de justifier l’esclavage, écrit des esclaves qu’« ils ont le nez si écrasé qu’il est presque impossible de les plaindre » (De l’esprit des lois) — l’absurdité de l’argument dénonce le racisme.",
          "Enfin, les **figures de sonorité** jouent sur les sons : l’**allitération** répète une consonne (« Pour qui sont ces serpents qui sifflent sur vos têtes ? », Racine, Andromaque, où le [s] imite le sifflement), l’**assonance** répète une voyelle (« Tout m’afflige et me nuit et conspire à me nuire », Racine, Phèdre, avec le son [i]). On les commente toujours en lien avec le sens : imitation, musicalité, insistance.",
        ],
        keyPoints: [
          "**Antithèse** : deux idées opposées rapprochées ; **oxymore** : deux termes contradictoires accolés.",
          "**Chiasme** : structure croisée A-B / B-A.",
          "**Gradation** : énumération ordonnée par intensité ; **hyperbole** : exagération.",
          "**Litote** : dire moins pour suggérer plus ; **euphémisme** : adoucir une réalité dure.",
          "**Allitération** = répétition de consonnes ; **assonance** = répétition de voyelles.",
        ],
        formulas: [
          "Litote ≠ euphémisme : la litote renforce le sens, l’euphémisme l’adoucit.",
          "Oxymore = contradiction dans un même groupe ; antithèse = opposition à l’échelle de la phrase ou du passage.",
        ],
        example: {
          title: "Identifier une litote : « Va, je ne te hais point » (Corneille)",
          steps: [
            "Lire le contexte : Chimène parle à Rodrigue, qui a tué son père ; elle ne peut avouer ouvertement son amour.",
            "Repérer la tournure négative : « je ne te hais point » nie un sentiment négatif.",
            "Comprendre : nier la haine revient ici à affirmer un sentiment bien plus fort, l’amour.",
            "Nommer : on dit moins pour faire entendre plus, c’est une **litote**.",
            "Interpréter : la litote traduit le conflit entre la passion et l’honneur, au cœur de la tragi-comédie cornélienne.",
          ],
        },
      },
      {
        title: "Les registres littéraires",
        body: [
          "Un **registre** (on dit aussi **tonalité**) est l’effet dominant qu’un texte cherche à produire sur le lecteur : faire rire, émouvoir, faire peur, indigner, admirer. Un même genre peut adopter plusieurs registres : une pièce de théâtre peut être comique ou tragique, un poème lyrique ou satirique. Identifier le registre permet de **formuler l’enjeu** d’un texte.",
          "Le **registre lyrique** exprime les sentiments personnels (amour, mélancolie, nostalgie, joie) avec la première personne, des exclamations, une forte musicalité : « Ô temps ! suspends ton vol » (Lamartine, « Le Lac »). Le **registre pathétique** cherche à susciter la pitié devant la souffrance d’un personnage. Le **registre tragique** montre un personnage écrasé par une force qui le dépasse (destin, dieux, passion) : sa perte est inévitable. Le **registre épique** amplifie les exploits héroïques et les combats grâce aux hyperboles, aux pluriels et aux énumérations. Le **registre fantastique** fait naître l’hésitation entre une explication rationnelle et une explication surnaturelle.",
          "Le **registre comique** fait rire : comique de mots, de gestes, de caractère, de situation, de répétition. Le **registre satirique** se moque des travers d’une personne, d’un groupe ou d’une société pour les critiquer. Le **registre polémique** attaque avec violence un adversaire ou une idée (vocabulaire péjoratif, interpellations, phrases exclamatives). Le **registre ironique** repose sur le décalage entre ce qui est dit et ce qui est pensé. Le **registre didactique** cherche à enseigner, l’**épidictique** à faire l’éloge ou le blâme, l’**oratoire** à convaincre un auditoire par l’art du discours.",
          "Pour identifier un registre, on part toujours des **indices** : champs lexicaux, ponctuation, types de phrases, figures dominantes, situation des personnages. On ne se contente jamais d’une étiquette : on justifie par des citations, et on explique l’effet visé.",
        ],
        keyPoints: [
          "**Lyrique** : expression des sentiments personnels, souvent à la 1re personne.",
          "**Tragique** : fatalité, issue inévitable ; **pathétique** : susciter la pitié.",
          "**Épique** : exploits héroïques amplifiés ; **fantastique** : hésitation entre réel et surnaturel.",
          "**Comique, satirique, ironique, polémique** : rire, moquerie critique, décalage, attaque.",
          "Un registre s’identifie par des indices précis (lexique, ponctuation, figures).",
        ],
        example: {
          title: "Identifier le registre de « Ô temps ! suspends ton vol » (Lamartine)",
          steps: [
            "Repérer l’apostrophe « Ô temps ! » : le poète s’adresse au temps comme à une personne (personnification).",
            "Repérer le mode impératif « suspends » et la ponctuation exclamative : expression d’un désir intense.",
            "Relier au thème : le poète voudrait arrêter le temps pour prolonger le bonheur amoureux perdu.",
            "Conclure : expression d’un sentiment personnel de nostalgie → **registre lyrique**, teinté d’élégie (plainte).",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-francais-01-ex-1",
        prompt: "Dans « Le Poète est semblable au prince des nuées » (Baudelaire), quelle figure de style est employée ?",
        choices: ["Une métaphore", "Une comparaison", "Une métonymie", "Une périphrase"],
        answer: 1,
        explanation:
          "Le comparé (« le Poète ») est relié au comparant (« le prince des nuées », l’albatros) par l’outil de comparaison « semblable à ». La présence d’un outil de comparaison distingue la **comparaison** de la métaphore.",
      },
      {
        id: "2nde-francais-01-ex-2",
        prompt: "« Cette obscure clarté qui tombe des étoiles » (Corneille, Le Cid) contient :",
        choices: ["une antithèse étendue à toute la phrase", "un chiasme", "un oxymore", "une hyperbole"],
        answer: 2,
        explanation:
          "« Obscure » et « clarté » sont deux termes contradictoires réunis **dans un même groupe nominal** : c’est un **oxymore**. L’antithèse oppose deux idées dans un passage plus large, sans les accoler ainsi.",
      },
      {
        id: "2nde-francais-01-ex-3",
        prompt: "Dans « Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine), la répétition du son [s] est :",
        choices: ["une allitération", "une assonance", "une anaphore"],
        answer: 0,
        explanation:
          "La répétition d’une **consonne** ([s]) est une **allitération** (l’assonance concerne les voyelles). Elle imite ici le sifflement des serpents qui hantent Oreste devenu fou : le son épouse le sens.",
      },
      {
        id: "2nde-francais-01-ex-4",
        prompt: "« Il faut manger pour vivre et non pas vivre pour manger » (Molière, L’Avare) repose sur :",
        choices: ["une gradation", "une litote", "une personnification", "un chiasme"],
        answer: 3,
        explanation:
          "Les termes sont disposés en structure croisée : manger (A) – vivre (B) / vivre (B) – manger (A). Ce schéma A-B / B-A est un **chiasme**, qui met ici en valeur l’opposition entre deux conceptions de la vie.",
      },
      {
        id: "2nde-francais-01-ex-5",
        prompt: "« Boire un verre » est un exemple de :",
        choices: ["périphrase", "métonymie (le contenant pour le contenu)", "métaphore", "euphémisme"],
        answer: 1,
        explanation:
          "On ne boit pas le verre mais son contenu : le contenant désigne le contenu. C’est une **métonymie**, fondée sur un lien logique entre deux réalités (et non sur une ressemblance, comme la métaphore).",
      },
      {
        id: "2nde-francais-01-ex-6",
        prompt: "Un texte qui cherche avant tout à susciter la pitié du lecteur pour la souffrance d’un personnage relève du registre :",
        choices: ["pathétique", "épique", "satirique", "didactique"],
        answer: 0,
        explanation:
          "Le **registre pathétique** (du grec pathos, la souffrance, l’émotion) vise à émouvoir et à faire naître la compassion. L’épique amplifie des exploits, le satirique se moque, le didactique enseigne.",
      },
    ],
    test: [
      {
        id: "2nde-francais-01-ct-1",
        prompt: "« C’est un roc !… c’est un pic !… c’est un cap ! / Que dis-je, c’est un cap ?… C’est une péninsule ! » (Rostand). Quelle figure organise ce passage ?",
        choices: ["Une antithèse", "Une litote", "Une gradation ascendante", "Un euphémisme"],
        answer: 2,
        explanation:
          "Cyrano décrit son nez par des termes de plus en plus grands (roc, pic, cap, péninsule) : l’énumération suit un ordre d’intensité croissante, c’est une **gradation ascendante**, à visée comique et hyperbolique.",
      },
      {
        id: "2nde-francais-01-ct-2",
        prompt: "Quelle différence entre litote et euphémisme est exacte ?",
        choices: [
          "La litote adoucit une réalité pénible, l’euphémisme la renforce.",
          "Les deux disent moins, mais la litote suggère davantage tandis que l’euphémisme atténue.",
          "La litote est toujours positive, l’euphémisme toujours négatif.",
          "Il n’y a aucune différence : ce sont des synonymes.",
        ],
        answer: 1,
        explanation:
          "Les deux sont des figures d’atténuation, mais leur effet diffère : la **litote** dit moins pour **faire entendre plus** (« je ne te hais point » = je t’aime), l’**euphémisme** dit moins pour **adoucir** (« il nous a quittés » = il est mort).",
      },
      {
        id: "2nde-francais-01-ct-3",
        prompt: "« Ver de terre amoureux d’une étoile » (Hugo, Ruy Blas) : Ruy Blas, simple valet, aime la reine. L’effet principal de l’antithèse est de :",
        choices: [
          "souligner l’écart social immense entre le valet et la reine",
          "créer un effet comique de répétition",
          "décrire précisément la nature",
          "atténuer la violence du sentiment",
        ],
        answer: 0,
        explanation:
          "L’**antithèse** oppose le « ver de terre » (ce qui rampe, le plus bas) et l’« étoile » (ce qui est inaccessible, le plus haut). Elle traduit l’écart social entre le valet et la reine, et rend cet amour à la fois sublime et impossible — un ressort du drame romantique.",
      },
      {
        id: "2nde-francais-01-ct-4",
        prompt: "Montesquieu écrit, en feignant de défendre l’esclavage, qu’il est « presque impossible de les plaindre » parce que les esclaves ont « le nez si écrasé ». Le registre dominant est :",
        choices: ["lyrique", "épique", "tragique", "ironique"],
        answer: 3,
        explanation:
          "Montesquieu prête à ses adversaires des arguments absurdes : le lecteur comprend que l’auteur pense exactement le contraire. Ce décalage entre l’énoncé et la pensée réelle caractérise l’**ironie**, mise ici au service d’une dénonciation.",
      },
      {
        id: "2nde-francais-01-ct-5",
        prompt: "« Tout m’afflige et me nuit et conspire à me nuire » (Racine, Phèdre). Quels procédés se combinent dans ce vers ?",
        choices: [
          "Assonance en [i] et accumulation de verbes reliés par « et » (polysyndète)",
          "Allitération en [r] et chiasme",
          "Oxymore et périphrase",
          "Comparaison et personnification",
        ],
        answer: 0,
        explanation:
          "La voyelle [i] revient (afflige, nuit, conspire, nuire) : c’est une **assonance**, plaintive et aiguë. Les verbes s’enchaînent avec la répétition de « et » (polysyndète), donnant l’impression d’un accablement total : Phèdre se sent persécutée par tout ce qui l’entoure.",
      },
      {
        id: "2nde-francais-01-ct-6",
        prompt: "Un personnage est conduit à sa perte par une force supérieure à laquelle il ne peut échapper, malgré sa lucidité. Ce texte relève surtout du registre :",
        choices: ["comique", "fantastique", "tragique", "satirique"],
        answer: 2,
        explanation:
          "Le **registre tragique** repose sur la **fatalité** : le héros, souvent lucide, ne peut échapper à son destin. Il ne faut pas le confondre avec le pathétique, qui vise surtout la pitié sans impliquer nécessairement une issue inévitable.",
      },
      {
        id: "2nde-francais-01-ct-7",
        prompt: "« La Nature est un temple où de vivants piliers / Laissent parfois sortir de confuses paroles » (Baudelaire). Quelle analyse est la plus juste ?",
        choices: [
          "Une comparaison simple entre la nature et une église",
          "Une litote qui atténue la beauté de la nature",
          "Une hyperbole décrivant une forêt immense",
          "Une métaphore (nature = temple) prolongée par une personnification (des piliers « vivants » qui parlent)",
        ],
        answer: 3,
        explanation:
          "« La Nature est un temple » rapproche deux réalités sans outil : c’est une **métaphore**. Les arbres deviennent des « piliers » « vivants » qui laissent sortir des « paroles » : ils sont **personnifiés**. La nature est ainsi présentée comme un lieu sacré porteur de messages mystérieux.",
      },
      {
        id: "2nde-francais-01-ct-8",
        prompt: "Quelle phrase d’analyse est la mieux construite ?",
        choices: [
          "Il y a une allitération dans le vers.",
          "Par l’allitération en [s] (« ces serpents qui sifflent »), Racine fait entendre le sifflement des serpents et rend sensible la folie d’Oreste.",
          "Le vers est très beau et utilise beaucoup de figures de style.",
          "Racine écrit « serpents », ce qui montre qu’il y a des serpents.",
        ],
        answer: 1,
        explanation:
          "Une bonne analyse associe **le procédé nommé**, **la citation précise** et **l’interprétation de l’effet**. Les autres propositions se contentent d’un repérage, d’un jugement de goût ou d’une paraphrase sans analyse.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 2 — La poésie du Moyen Âge au XVIIIe siècle
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-francais-02",
    title: "La poésie du Moyen Âge au XVIIIe siècle",
    summary:
      "Maîtriser la versification (mètre, rimes, strophes, formes fixes) et situer les grandes étapes de la poésie française, des troubadours aux Lumières.",
    objectives: [
      "Je sais compter les syllabes d’un vers en appliquant les règles du e muet, de la diérèse et de la synérèse.",
      "Je sais nommer les vers (alexandrin, décasyllabe, octosyllabe…) et repérer la césure.",
      "Je sais caractériser les rimes selon leur disposition, leur richesse et leur genre.",
      "Je sais reconnaître les strophes et les formes fixes (sonnet, ballade, rondeau).",
      "Je sais situer quelques poètes majeurs du Moyen Âge au XVIIIe siècle.",
    ],
    sections: [
      {
        title: "Le vers : compter les syllabes",
        body: [
          "La poésie versifiée repose sur un **mètre**, c’est-à-dire un nombre fixe de **syllabes prononcées** par vers. On ne compte pas les syllabes comme dans la langue parlée : la versification classique a ses propres règles. Le vers le plus prestigieux est l’**alexandrin** (12 syllabes), vers de la tragédie et de la grande poésie ; viennent ensuite le **décasyllabe** (10), vers de la poésie médiévale et de la Renaissance, et l’**octosyllabe** (8), plus léger. On rencontre aussi l’hexasyllabe (6), l’heptasyllabe (7) et des vers impairs plus rares.",
          "La règle la plus importante concerne le **e muet** (ou e caduc). Il **se prononce et compte** devant une consonne ; il **s’élide** (ne compte pas) devant une voyelle ou un h muet ; il **ne compte jamais en fin de vers**. Ainsi, dans « Je le vis, je rougis, je pâlis à sa vue » (Racine, Phèdre) : Je / le / vis / je / rou / gis / je / pâ / lis / à / sa / vue → 12 syllabes, le e final de « vue » n’étant pas compté.",
          "Deux voyelles qui se suivent dans un même mot peuvent se prononcer en une seule syllabe (**synérèse**) ou en deux (**diérèse**). La diérèse allonge le mot et le met en valeur. Dans « Le violon frémit comme un cœur qu’on afflige » (Baudelaire, « Harmonie du soir »), il faut prononcer « vi-o-lon » pour obtenir 12 syllabes : la diérèse étire le mot comme la note de l’instrument.",
          "Dans l’alexandrin classique, une pause principale, la **césure**, sépare le vers en deux **hémistiches** de 6 syllabes (6 // 6). Des pauses secondaires (les **coupes**) dessinent le rythme : « Je le vis, / je rougis, // je pâlis, / à sa vue » donne un rythme 3/3//3/3, régulier et martelé, qui traduit les étapes du coup de foudre. Lorsque la phrase déborde sur le vers suivant, on parle d’**enjambement** ; si un mot bref seulement déborde, de **rejet** ; si une phrase commence brièvement à la fin d’un vers pour se poursuivre au suivant, de **contre-rejet**.",
        ],
        keyPoints: [
          "**Alexandrin** = 12 syllabes ; **décasyllabe** = 10 ; **octosyllabe** = 8.",
          "**E muet** : compté devant consonne, élidé devant voyelle, jamais compté en fin de vers.",
          "**Diérèse** : une syllabe dédoublée (vi-o-lon) ; **synérèse** : deux voyelles fondues en une.",
          "**Césure** : pause centrale de l’alexandrin (6 // 6) ; **hémistiche** : chaque moitié.",
          "**Enjambement, rejet, contre-rejet** : débordements de la phrase sur le vers.",
        ],
        formulas: [
          "e muet + consonne → compté ; e muet + voyelle → élidé ; e muet en fin de vers → non compté.",
          "Alexandrin classique : 6 syllabes // 6 syllabes.",
        ],
        example: {
          title: "Scander « Demain, dès l’aube, à l’heure où blanchit la campagne » (Hugo)",
          steps: [
            "Découper : De / main / dès / l’au / be à…",
            "Appliquer l’élision : le e de « aube » est suivi de « à » (voyelle) → il ne compte pas : « l’au / b’à ».",
            "Même règle pour « heure où » : « l’heu / r’où ».",
            "Compter : De(1) main(2) dès(3) l’au(4) b’à(5) l’heu(6) r’où(7) blan(8) chit(9) la(10) cam(11) pa(12) — le e final de « campagne » ne compte pas.",
            "Conclure : 12 syllabes, c’est un **alexandrin**. La phrase se poursuit au vers suivant par le bref « Je partirai » : ce **rejet** met en relief la décision du poète.",
          ],
        },
      },
      {
        title: "Rimes et strophes",
        body: [
          "La **rime** est le retour d’un même son en fin de vers. On la caractérise selon trois critères. Sa **disposition** : **rimes plates** ou suivies (AABB), **croisées** (ABAB), **embrassées** (ABBA). Sa **richesse**, c’est-à-dire le nombre de sons communs à partir de la dernière voyelle prononcée : **pauvre** (1 son : ami / joli), **suffisante** (2 sons : rose / chose — [o] + [z]), **riche** (3 sons ou plus : charmant / dormant, [R] + [m] + [ɑ̃]). Son **genre** : une rime est **féminine** si le vers se termine par un e muet (rose, campagne), **masculine** dans les autres cas. La poésie classique fait alterner rimes masculines et féminines.",
          "Les vers sont regroupés en **strophes**, séparées par un blanc. On les nomme selon leur nombre de vers : **distique** (2), **tercet** (3), **quatrain** (4), **quintil** (5), **sizain** (6), huitain (8), dizain (10). Le quatrain est la strophe la plus courante ; le tercet est caractéristique de la fin du sonnet.",
          "La versification n’est pas une contrainte décorative : elle produit du **sens**. Une rime peut rapprocher deux mots pour créer une association (amour / jour, ou au contraire une opposition) ; un enjambement peut traduire un élan, un rejet mettre un mot en valeur ; un changement de rythme peut marquer une rupture. Dans un commentaire, on n’étudie la versification que lorsqu’elle **éclaire l’interprétation**.",
        ],
        keyPoints: [
          "**Rimes plates** AABB, **croisées** ABAB, **embrassées** ABBA.",
          "Richesse : **pauvre** (1 son), **suffisante** (2), **riche** (3 et plus).",
          "**Rime féminine** : terminée par un e muet ; **masculine** : sans e muet final.",
          "Strophes : distique (2), tercet (3), quatrain (4), quintil (5), sizain (6), dizain (10).",
        ],
        formulas: [
          "Plates : A A B B — Croisées : A B A B — Embrassées : A B B A.",
          "On compte les sons à partir de la dernière voyelle prononcée.",
        ],
        example: {
          title: "Analyser les rimes d’un quatrain",
          steps: [
            "Prendre quatre fins de vers : « jour » / « fleurs » / « pleurs » / « amour ».",
            "Attribuer des lettres : jour (A), fleurs (B), pleurs (B), amour (A) → schéma ABBA : **rimes embrassées**.",
            "Mesurer la richesse : fleurs / pleurs partagent [l], [œ], [R] → rime **riche** ; jour / amour partagent [u], [R] → rime **suffisante**.",
            "Déterminer le genre : aucun de ces mots ne finit par un e muet → rimes **masculines**.",
            "Interpréter : la rime « fleurs / pleurs » associe la beauté et la souffrance, au cœur du lyrisme amoureux.",
          ],
        },
      },
      {
        title: "Formes fixes et grandes époques de la poésie",
        body: [
          "Une **forme fixe** impose un nombre de vers, une organisation des strophes et des rimes. Au Moyen Âge, la **ballade** compte généralement **trois strophes et un envoi** (strophe plus courte adressée à un destinataire), chaque strophe se terminant par le même **refrain** : François Villon (XVe siècle) l’illustre avec la « Ballade des pendus », qui s’ouvre sur « Frères humains, qui après nous vivez ». Le **rondeau** repose sur la reprise des premiers mots du poème en refrain : Charles d’Orléans écrit « Le temps a laissé son manteau / De vent, de froidure et de pluie ».",
          "Au XVIe siècle, la **Renaissance** importe d’Italie le **sonnet**, inspiré de Pétrarque : **14 vers**, répartis en **deux quatrains** et **deux tercets**, souvent en alexandrins ou en décasyllabes, avec des rimes embrassées dans les quatrains (ABBA ABBA) puis, dans le modèle français, CCD EED ou CCD EDE dans les tercets. Le dernier vers, la **chute**, doit frapper l’esprit. Les poètes de la **Pléiade**, Ronsard et Du Bellay en tête, en font la forme reine : « Heureux qui, comme Ulysse, a fait un beau voyage » (Du Bellay, Les Regrets), « Quand vous serez bien vieille, au soir, à la chandelle » (Ronsard, Sonnets pour Hélène). Le thème du **carpe diem** (« cueille le jour », profite du présent) traverse leur œuvre : « Mignonne, allons voir si la rose… » (Ronsard).",
          "Au XVIIe siècle, l’âge **classique** recherche l’ordre, la clarté et la mesure : Boileau, dans son Art poétique, résume cet idéal par « Ce que l’on conçoit bien s’énonce clairement ». La **fable** en vers, avec La Fontaine, unit récit plaisant et leçon morale (« La raison du plus fort est toujours la meilleure », « Le Loup et l’Agneau »). Au XVIIIe siècle, siècle des **Lumières**, la poésie est souvent didactique ou satirique, tandis que la prose devient le lieu privilégié des idées ; il faudra attendre le romantisme (XIXe siècle) pour un grand renouveau lyrique.",
        ],
        keyPoints: [
          "**Ballade** : 3 strophes + un envoi, avec refrain (Villon).",
          "**Rondeau** : reprise du début du poème en refrain (Charles d’Orléans).",
          "**Sonnet** : 14 vers = 2 quatrains + 2 tercets ; **chute** finale ; importé d’Italie au XVIe siècle.",
          "**Pléiade** (XVIe) : Ronsard, Du Bellay ; thème du **carpe diem**.",
          "**Classicisme** (XVIIe) : clarté, mesure ; La Fontaine, Boileau.",
        ],
        formulas: [
          "Sonnet = 4 + 4 + 3 + 3 = 14 vers.",
          "Sonnet français : ABBA ABBA CCD EED (ou CCD EDE).",
        ],
        example: {
          title: "Reconnaître un sonnet",
          steps: [
            "Compter les vers : 14.",
            "Observer la disposition : deux strophes de 4 vers puis deux strophes de 3 vers → 2 quatrains + 2 tercets.",
            "Vérifier les rimes des quatrains : ABBA ABBA (rimes embrassées, deux rimes seulement).",
            "Repérer la chute : le dernier vers apporte une pointe, une surprise ou une conclusion forte.",
            "Conclure : c’est un **sonnet**, forme fixe héritée de Pétrarque et acclimatée en France par la Pléiade.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-francais-02-ex-1",
        prompt: "Combien de syllabes compte un alexandrin ?",
        choices: ["8", "10", "12", "14"],
        answer: 2,
        explanation:
          "L’**alexandrin** compte **12 syllabes**. Son nom viendrait du Roman d’Alexandre, poème médiéval écrit dans ce mètre. Le décasyllabe en compte 10, l’octosyllabe 8.",
      },
      {
        id: "2nde-francais-02-ex-2",
        prompt: "Les rimes d’un quatrain suivent le schéma ABAB. Elles sont :",
        choices: ["plates", "embrassées", "croisées"],
        answer: 2,
        explanation:
          "Quand les rimes alternent (A, B, A, B), elles sont **croisées**. Les rimes plates suivent le schéma AABB, les rimes embrassées ABBA (la rime B est « embrassée » par la rime A).",
      },
      {
        id: "2nde-francais-02-ex-3",
        prompt: "Dans un vers, un e muet placé devant un mot commençant par une voyelle :",
        choices: ["s’élide et ne compte pas", "compte toujours", "compte double", "compte seulement à la césure"],
        answer: 0,
        explanation:
          "Devant une voyelle (ou un h muet), le e muet **s’élide** : il ne se prononce pas et ne compte pas. Devant une consonne, il compte ; en fin de vers, il ne compte jamais.",
      },
      {
        id: "2nde-francais-02-ex-4",
        prompt: "Un sonnet se compose de :",
        choices: [
          "trois quatrains et un distique",
          "deux quatrains et deux tercets",
          "trois strophes et un envoi",
          "quatre tercets et deux vers isolés",
        ],
        answer: 1,
        explanation:
          "Le **sonnet** compte 14 vers : **deux quatrains** suivis de **deux tercets** (4 + 4 + 3 + 3). Trois strophes et un envoi décrivent la ballade ; trois quatrains et un distique, le sonnet anglais (shakespearien).",
      },
      {
        id: "2nde-francais-02-ex-5",
        prompt: "La rime « rose / chose » est :",
        choices: ["pauvre", "riche", "suffisante", "masculine"],
        answer: 2,
        explanation:
          "« Rose » et « chose » partagent deux sons à partir de la dernière voyelle prononcée : [o] et [z]. Deux sons communs = rime **suffisante**. Elle est en outre **féminine** (terminaison en e muet), et non masculine.",
      },
      {
        id: "2nde-francais-02-ex-6",
        prompt: "Quel poète appartient à la Pléiade (XVIe siècle) ?",
        choices: ["François Villon", "Jean de La Fontaine", "Charles d’Orléans", "Pierre de Ronsard"],
        answer: 3,
        explanation:
          "**Ronsard**, avec Du Bellay, est la figure majeure de la **Pléiade**, groupe de poètes de la Renaissance qui veut enrichir la langue française et imiter les Anciens et les Italiens. Villon et Charles d’Orléans sont des poètes du XVe siècle ; La Fontaine appartient au XVIIe siècle.",
      },
    ],
    test: [
      {
        id: "2nde-francais-02-ct-1",
        prompt: "« Le violon frémit comme un cœur qu’on afflige » (Baudelaire) compte 12 syllabes à condition de :",
        choices: [
          "prononcer « vi-o-lon » en trois syllabes (diérèse)",
          "ne pas compter le e de « comme »",
          "prononcer « cœur » en deux syllabes",
          "compter le e final de « afflige »",
        ],
        answer: 0,
        explanation:
          "Le(1) vi(2) o(3) lon(4) fré(5) mit(6) // com(7) m’un(8) cœur(9) qu’on(10) af(11) fli(12) — le e de « comme » s’élide devant « un » et le e final de « afflige » ne compte pas. Il faut donc la **diérèse** « vi-o-lon » pour atteindre 12. Elle étire le mot et fait entendre la vibration de l’instrument.",
      },
      {
        id: "2nde-francais-02-ct-2",
        prompt: "« Je le vis, je rougis, je pâlis à sa vue » (Racine). Quel est le rythme de ce vers ?",
        choices: ["6/6 sans coupe secondaire", "4/4/4 (trimètre)", "3/3//3/3, rythme régulier et martelé", "2/10, rythme déséquilibré"],
        answer: 2,
        explanation:
          "Les coupes donnent « Je le vis / je rougis // je pâlis / à sa vue » : quatre groupes de 3 syllabes (**3/3//3/3**). Ce rythme régulier, associé au parallélisme des verbes, rend sensibles les étapes rapides et irrésistibles du coup de foudre de Phèdre.",
      },
      {
        id: "2nde-francais-02-ct-3",
        prompt: "« Demain, dès l’aube, à l’heure où blanchit la campagne, / Je partirai. » Comment nomme-t-on le fait que « Je partirai » soit rejeté au début du vers suivant ?",
        choices: ["Une césure", "Un contre-rejet", "Une diérèse", "Un rejet"],
        answer: 3,
        explanation:
          "La phrase commencée au vers 1 se termine par un élément bref placé en tête du vers suivant : c’est un **rejet**. Il met en valeur la décision du poète (« Je partirai »). Le contre-rejet est l’inverse : un élément bref en fin de vers, annonçant une phrase qui se poursuit au vers suivant.",
      },
      {
        id: "2nde-francais-02-ct-4",
        prompt: "Les rimes « charmant / dormant » sont :",
        choices: ["riches et masculines", "pauvres et féminines", "suffisantes et féminines", "riches et féminines"],
        answer: 0,
        explanation:
          "Les deux mots partagent [m], [ɑ̃] et le son précédent [R] (char-mant / dor-mant) : au moins trois sons communs → rime **riche**. Ils ne se terminent pas par un e muet → rime **masculine**.",
      },
      {
        id: "2nde-francais-02-ct-5",
        prompt: "Quelle caractéristique définit la ballade médiévale de Villon ?",
        choices: [
          "14 vers répartis en deux quatrains et deux tercets",
          "Des strophes terminées par un même refrain et un envoi final",
          "Des vers libres sans rime ni mètre",
          "Une alternance de prose et de vers",
        ],
        answer: 1,
        explanation:
          "La **ballade** (forme fixe médiévale) comporte en général trois strophes construites sur les mêmes rimes, chacune terminée par un **refrain**, puis un **envoi** plus court adressé à un destinataire (souvent « Prince »). La « Ballade des pendus » de Villon en est un exemple célèbre.",
      },
      {
        id: "2nde-francais-02-ct-6",
        prompt: "Le thème du « carpe diem », fréquent chez Ronsard, signifie :",
        choices: [
          "qu’il faut se méfier des plaisirs",
          "que la poésie doit enseigner la morale",
          "qu’il faut profiter du moment présent, car la jeunesse et la beauté passent",
          "que la nature est un temple sacré",
        ],
        answer: 2,
        explanation:
          "« Carpe diem » (Horace) signifie « cueille le jour ». Chez Ronsard, il invite la femme aimée à profiter de sa jeunesse avant que le temps ne la flétrisse, souvent à travers l’image de la rose (« Mignonne, allons voir si la rose… »).",
      },
      {
        id: "2nde-francais-02-ct-7",
        prompt: "« Ce que l’on conçoit bien s’énonce clairement » (Boileau) résume un idéal propre :",
        choices: ["au Moyen Âge courtois", "à la Pléiade", "au romantisme", "au classicisme du XVIIe siècle"],
        answer: 3,
        explanation:
          "Boileau, dans son Art poétique (1674), théorise l’esthétique **classique** : clarté, raison, mesure, imitation des Anciens. Ce vers affirme le lien entre la pensée claire et l’expression claire.",
      },
      {
        id: "2nde-francais-02-ct-8",
        prompt: "Dans un commentaire, quand faut-il analyser la versification d’un poème ?",
        choices: [
          "Toujours, en relevant systématiquement toutes les rimes et toutes les syllabes",
          "Seulement lorsqu’elle éclaire le sens (mise en relief, rythme expressif, rapprochement de mots à la rime)",
          "Jamais, car c’est un simple ornement",
          "Uniquement dans l’introduction",
        ],
        answer: 1,
        explanation:
          "Un relevé mécanique n’est pas une analyse. La versification s’étudie lorsqu’elle **produit du sens** : un rejet qui met un mot en valeur, une diérèse qui l’allonge, une rime qui associe deux idées, une rupture de rythme. On relie toujours la forme à l’interprétation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 3 — Le roman et le récit
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-francais-03",
    title: "Le roman et le récit du XVIIIe au XXIe siècle",
    summary:
      "Analyser un récit grâce aux outils de la narratologie (narrateur, focalisation, temps, rythme, paroles rapportées) et situer les grands mouvements du roman.",
    objectives: [
      "Je sais distinguer l’auteur du narrateur et identifier le type de narrateur.",
      "Je sais reconnaître les trois focalisations et expliquer leur effet.",
      "Je sais analyser l’emploi des temps du récit, l’ordre et la vitesse de la narration.",
      "Je sais distinguer discours direct, indirect et indirect libre.",
      "Je sais situer les grands courants du roman du XVIIIe au XXIe siècle.",
    ],
    sections: [
      {
        title: "Qui raconte ? Narrateur et focalisation",
        body: [
          "L’**auteur** est la personne réelle qui a écrit le livre ; le **narrateur** est l’instance qui raconte l’histoire à l’intérieur du texte. Même dans un récit à la première personne, ils ne se confondent pas, sauf dans l’**autobiographie**, où auteur, narrateur et personnage principal sont la même personne (Rousseau ouvre ses Confessions par « Je forme une entreprise qui n’eut jamais d’exemple »).",
          "On distingue deux grands types de narrateurs. Le **narrateur personnage** (ou interne) participe à l’histoire et raconte à la première personne, comme dans « Longtemps, je me suis couché de bonne heure » (Proust, Du côté de chez Swann). Le **narrateur extérieur** (ou externe à l’histoire) ne fait pas partie des personnages et raconte à la troisième personne, comme dans Germinal de Zola : « Dans la plaine rase, sous la nuit sans étoiles […], un homme suivait seul la grande route de Marchiennes à Montsou ». Certains narrateurs extérieurs interviennent pour commenter ou interpeller le lecteur : Diderot ouvre Jacques le fataliste par « Comment s’étaient-ils rencontrés ? Par hasard, comme tout le monde. »",
          "La **focalisation** (ou point de vue) désigne ce que le narrateur sait et montre. En **focalisation zéro** (point de vue omniscient), le narrateur sait tout : pensées de tous les personnages, passé, avenir ; c’est le choix fréquent du roman réaliste au XIXe siècle (Balzac). En **focalisation interne**, le récit est filtré par la perception et les pensées d’un personnage : le lecteur ne sait que ce qu’il sait, ce qui favorise l’identification. En **focalisation externe**, le narrateur se comporte comme une caméra : il décrit gestes et paroles sans accès aux pensées, ce qui crée mystère ou objectivité. Au début de Germinal, l’homme qui marche n’est pas encore nommé : le lecteur le découvre de l’extérieur.",
          "Un même roman peut changer de focalisation selon les passages. Pour l’identifier, on se demande : **le narrateur a-t-il accès aux pensées ? À celles d’un seul personnage ou de tous ? La description est-elle limitée à ce qu’un personnage voit ?** Des indices comme les verbes de perception (« il vit », « il aperçut ») ou les modalisateurs (« sans doute », « semblait ») sont précieux.",
        ],
        keyPoints: [
          "**Auteur** = personne réelle ; **narrateur** = voix qui raconte dans le texte.",
          "**Narrateur personnage** (je) ou **narrateur extérieur** (il/elle).",
          "**Focalisation zéro** : narrateur omniscient.",
          "**Focalisation interne** : à travers les perceptions et pensées d’un personnage.",
          "**Focalisation externe** : vision de l’extérieur, sans accès aux pensées.",
        ],
        formulas: [
          "Autobiographie : auteur = narrateur = personnage principal.",
          "Indices de focalisation interne : verbes de perception + pensées d’un seul personnage.",
        ],
        example: {
          title: "Identifier la focalisation dans un court passage",
          steps: [
            "Texte : « Elle entra dans la pièce. Une odeur de cire lui monta à la gorge ; elle crut que tout le monde la regardait et sentit ses joues brûler. »",
            "Narrateur : le récit est à la troisième personne (« elle ») → narrateur extérieur à l’histoire.",
            "Accès aux pensées : « elle crut », « sentit ses joues brûler » → nous connaissons ses sensations et ses pensées.",
            "Limitation : nous ne savons rien des pensées des autres personnes présentes, seulement ce qu’elle perçoit.",
            "Conclusion : **focalisation interne**, qui fait partager au lecteur la gêne du personnage.",
          ],
        },
      },
      {
        title: "Le temps du récit et les paroles rapportées",
        body: [
          "Dans un récit au passé, deux temps se partagent le travail. Le **passé simple** exprime les actions de **premier plan**, ponctuelles et successives, qui font avancer l’histoire (« Il ouvrit la porte, entra, s’assit »). L’**imparfait** exprime l’**arrière-plan** : descriptions, actions en cours, habitudes, commentaires (« La pluie tombait ; il attendait chaque soir »). Le **plus-que-parfait** marque l’antériorité. Le **présent de narration** peut remplacer le passé simple pour rendre une scène plus vivante ; le passé composé, utilisé dans certains récits modernes, rapproche le récit de l’oral.",
          "L’**ordre** du récit ne suit pas toujours la chronologie. Un retour en arrière s’appelle une **analepse** ; une anticipation, une **prolepse**. Un roman peut commencer **in medias res** (« au milieu des choses »), en pleine action. La **vitesse** du récit compare le temps de l’histoire au temps du texte : la **scène** (dialogue, temps du texte ≈ temps de l’histoire), le **sommaire** (des années résumées en quelques lignes), l’**ellipse** (une période passée sous silence : « Deux ans plus tard… ») et la **pause** (l’histoire s’arrête pour une description ou un commentaire).",
          "Les paroles des personnages peuvent être rapportées de trois façons. Le **discours direct** cite les paroles telles quelles, avec guillemets ou tirets et un verbe de parole : Il dit : « Je partirai demain. » Le **discours indirect** les intègre dans une subordonnée, avec modification des pronoms et des temps : Il dit qu’il partirait le lendemain. Le **discours indirect libre** mêle les deux : il n’y a ni guillemets ni subordination, mais on garde l’expressivité du personnage : Il partirait demain, c’était décidé ! Très utilisé par Flaubert, il crée une ambiguïté entre la voix du narrateur et celle du personnage.",
          "Enfin, l’**incipit** (début du roman) a une double fonction : **informer** (qui, où, quand ?) et **séduire** le lecteur (créer une attente). L’**excipit** (fin) peut clore l’histoire ou rester ouvert. Candide de Voltaire s’achève sur la célèbre formule « il faut cultiver notre jardin », leçon de sagesse modeste et active.",
        ],
        keyPoints: [
          "**Passé simple** = premier plan (actions) ; **imparfait** = arrière-plan (description, habitude).",
          "**Analepse** = retour en arrière ; **prolepse** = anticipation.",
          "Vitesse : **scène**, **sommaire**, **ellipse**, **pause**.",
          "Discours **direct**, **indirect**, **indirect libre**.",
          "**Incipit** : informer et séduire ; **excipit** : clore ou laisser ouvert.",
        ],
        formulas: [
          "Direct : Il dit : « Je viendrai. » → Indirect : Il dit qu’il viendrait. → Indirect libre : Il viendrait, c’était sûr !",
        ],
        example: {
          title: "Analyser les temps d’un passage",
          steps: [
            "Texte : « Le soleil se couchait sur la ville. Les passants rentraient lentement. Soudain, un cri retentit. Paul se retourna. »",
            "Relever les imparfaits : « se couchait », « rentraient » → décor, actions en cours : arrière-plan.",
            "Relever les passés simples : « retentit », « se retourna » → actions ponctuelles : premier plan.",
            "Observer le connecteur « Soudain » : il marque la rupture et le basculement vers l’événement.",
            "Conclure : le passage oppose un cadre paisible (imparfait) à un événement brutal (passé simple), ce qui crée un effet de surprise.",
          ],
        },
      },
      {
        title: "Les grands courants du roman",
        body: [
          "Au **XVIIIe siècle**, le roman gagne en prestige. Le **conte philosophique** (Voltaire, Candide, 1759) utilise un récit plaisant et ironique pour critiquer la société et l’optimisme naïf. Le **roman épistolaire**, fait de lettres, permet de multiplier les points de vue : Les Lettres persanes de Montesquieu (1721), Les Liaisons dangereuses de Laclos (1782). Diderot, dans Jacques le fataliste, joue avec les conventions du récit en s’adressant directement au lecteur.",
          "Au **XIXe siècle**, le **romantisme** met en avant l’individu, ses passions et son mal-être (Chateaubriand, Hugo, Les Misérables). Le **réalisme** veut représenter fidèlement la société de son temps, toutes classes confondues : Balzac (La Comédie humaine), Stendhal (Le Rouge et le Noir), Flaubert (Madame Bovary). Le **naturalisme**, autour de Zola (Les Rougon-Macquart, dont Germinal), pousse plus loin cette ambition en s’inspirant des sciences : le romancier observe l’influence de l’hérédité et du milieu sur les personnages, à partir d’une documentation précise.",
          "Aux **XXe et XXIe siècles**, le roman se renouvelle profondément. Proust (À la recherche du temps perdu) explore la mémoire et la conscience. Le roman de l’absurde et le roman engagé interrogent la condition humaine et l’histoire. Dans les années 1950, le **Nouveau Roman** (Alain Robbe-Grillet, Nathalie Sarraute) remet en cause le personnage traditionnel et l’intrigue linéaire. Aujourd’hui, le roman explore les frontières avec l’autobiographie (autofiction), l’enquête, le témoignage ou l’histoire.",
          "Pour situer un extrait, on s’appuie sur des indices : époque de publication, thèmes (société, argent, ascension sociale pour le réalisme ; misère ouvrière et déterminisme pour le naturalisme), place des descriptions, traitement du personnage. Ces repères permettent de formuler une **interprétation** plutôt qu’une simple description du texte.",
        ],
        keyPoints: [
          "**XVIIIe** : conte philosophique (Voltaire), roman épistolaire (Montesquieu, Laclos).",
          "**Romantisme** : l’individu, la passion (Hugo, Chateaubriand).",
          "**Réalisme** : peindre la société (Balzac, Stendhal, Flaubert).",
          "**Naturalisme** : hérédité et milieu, démarche scientifique (Zola).",
          "**XXe siècle** : Proust, Nouveau Roman (années 1950), autofiction.",
        ],
        example: {
          title: "Situer un extrait : l’incipit de Germinal",
          steps: [
            "Lire : « Dans la plaine rase, sous la nuit sans étoiles […], un homme suivait seul la grande route de Marchiennes à Montsou ».",
            "Repérer le cadre : une plaine désolée, la nuit, des lieux précis du Nord minier → souci de réalisme géographique.",
            "Observer le personnage : « un homme », anonyme et seul → focalisation externe, mystère, solitude du travailleur.",
            "Mettre en relation avec le contexte : Zola, chef de file du naturalisme, s’est documenté sur les mines.",
            "Conclure : l’incipit installe un univers hostile et l’errance d’un homme pauvre, annonçant le thème de la misère ouvrière.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-francais-03-ex-1",
        prompt: "Dans un roman écrit à la première personne qui n’est pas une autobiographie, le « je » désigne :",
        choices: ["l’auteur", "le narrateur personnage", "le lecteur", "l’éditeur"],
        answer: 1,
        explanation:
          "Le « je » d’un roman est celui du **narrateur**, qui est ici un **personnage** de l’histoire. Il ne faut pas le confondre avec l’auteur : seule l’autobiographie fait coïncider auteur, narrateur et personnage.",
      },
      {
        id: "2nde-francais-03-ex-2",
        prompt: "Un narrateur qui connaît les pensées de tous les personnages, leur passé et leur avenir adopte :",
        choices: ["la focalisation externe", "la focalisation interne", "la focalisation zéro (omnisciente)"],
        answer: 2,
        explanation:
          "Le narrateur **omniscient** sait tout : c’est la **focalisation zéro**. La focalisation interne se limite à un personnage ; la focalisation externe n’accède à aucune pensée.",
      },
      {
        id: "2nde-francais-03-ex-3",
        prompt: "Dans un récit au passé, l’imparfait sert principalement à exprimer :",
        choices: [
          "les descriptions, les habitudes et l’arrière-plan",
          "les actions soudaines de premier plan",
          "les événements futurs",
          "les paroles des personnages",
        ],
        answer: 0,
        explanation:
          "L’**imparfait** installe l’**arrière-plan** : décor, description, actions en cours ou répétées. Les actions ponctuelles qui font avancer l’intrigue sont au **passé simple**.",
      },
      {
        id: "2nde-francais-03-ex-4",
        prompt: "« Deux ans plus tard, il revint au village. » Les deux années passées sous silence constituent :",
        choices: ["une analepse", "une pause", "une scène", "une ellipse"],
        answer: 3,
        explanation:
          "Une période de l’histoire qui n’est pas racontée est une **ellipse**. Elle accélère fortement le récit. L’analepse est un retour en arrière, la pause un arrêt de l’histoire pour décrire.",
      },
      {
        id: "2nde-francais-03-ex-5",
        prompt: "« Elle déclara qu’elle ne reviendrait jamais. » Les paroles sont rapportées au :",
        choices: ["discours direct", "discours indirect", "discours indirect libre", "monologue intérieur"],
        answer: 1,
        explanation:
          "Les paroles sont intégrées dans une **subordonnée** introduite par « que » après un verbe de parole, avec adaptation des pronoms et des temps (« reviendrait ») : c’est le **discours indirect**.",
      },
      {
        id: "2nde-francais-03-ex-6",
        prompt: "Quel romancier est le chef de file du naturalisme ?",
        choices: ["Émile Zola", "Voltaire", "Marcel Proust", "Choderlos de Laclos"],
        answer: 0,
        explanation:
          "**Zola** théorise le **naturalisme** et l’illustre dans le cycle des Rougon-Macquart (dont Germinal et L’Assommoir), qui étudie l’influence de l’hérédité et du milieu. Voltaire et Laclos sont des auteurs du XVIIIe siècle ; Proust, du début du XXe siècle.",
      },
    ],
    test: [
      {
        id: "2nde-francais-03-ct-1",
        prompt: "« Comment s’étaient-ils rencontrés ? Par hasard, comme tout le monde. » (Diderot, Jacques le fataliste). Que révèle cet incipit ?",
        choices: [
          "Un narrateur absent, en focalisation externe stricte",
          "Un narrateur qui intervient avec désinvolture et joue avec les attentes du lecteur",
          "Un narrateur personnage qui raconte son enfance",
          "Un dialogue de théâtre inséré dans le roman",
        ],
        answer: 1,
        explanation:
          "Le narrateur pose lui-même la question qu’attend le lecteur et y répond de façon volontairement décevante. Diderot met ainsi en scène un **narrateur intrusif**, qui souligne le caractère artificiel du récit et réfléchit aux conventions romanesques.",
      },
      {
        id: "2nde-francais-03-ct-2",
        prompt: "Quelle phrase est au discours indirect libre ?",
        choices: [
          "Il pensa : « Je dois partir. »",
          "Il pensa qu’il devait partir.",
          "Il fallait partir, à présent ! Comment avait-il pu attendre si longtemps ?",
          "« Partons », dit-il.",
        ],
        answer: 2,
        explanation:
          "Le **discours indirect libre** n’a ni guillemets ni subordination (« que »), mais conserve l’expressivité du personnage (exclamation, question) avec les temps et pronoms du récit. Les autres phrases relèvent du discours direct (1 et 4) ou indirect (2).",
      },
      {
        id: "2nde-francais-03-ct-3",
        prompt: "Dans « La pluie tombait depuis le matin. Soudain, la porte s’ouvrit. », l’opposition des temps produit :",
        choices: [
          "un effet de rupture : l’événement de premier plan surgit sur un fond descriptif",
          "un retour en arrière",
          "une description sans action",
          "une anticipation de la suite",
        ],
        answer: 0,
        explanation:
          "L’imparfait (« tombait ») installe un arrière-plan durable ; le passé simple (« s’ouvrit »), annoncé par « Soudain », marque une action ponctuelle de premier plan. Le contraste crée une **rupture** et attire l’attention sur l’événement.",
      },
      {
        id: "2nde-francais-03-ct-4",
        prompt: "Au début de Germinal, « un homme suivait seul la grande route » sans être nommé ni décrit de l’intérieur. Cet effet relève de :",
        choices: ["la focalisation zéro", "l’autobiographie", "la focalisation interne", "la focalisation externe"],
        answer: 3,
        explanation:
          "Le personnage est vu **de l’extérieur**, sans accès à ses pensées ni à son identité : c’est la **focalisation externe**. Elle crée un effet de mystère et souligne l’anonymat et la solitude du travailleur dans un décor hostile.",
      },
      {
        id: "2nde-francais-03-ct-5",
        prompt: "Quel est l’intérêt principal du roman épistolaire, comme Les Liaisons dangereuses ?",
        choices: [
          "Imposer un narrateur omniscient unique",
          "Supprimer tout dialogue",
          "Multiplier les points de vue et faire découvrir les personnages par leurs propres mots",
          "Raconter l’histoire dans l’ordre chronologique strict d’un seul témoin",
        ],
        answer: 2,
        explanation:
          "Le **roman épistolaire** est composé de lettres écrites par différents personnages. Le lecteur confronte leurs **points de vue**, découvre leurs mensonges et leurs stratégies : chez Laclos, cela révèle la manipulation des libertins.",
      },
      {
        id: "2nde-francais-03-ct-6",
        prompt: "Quelle affirmation sur le réalisme et le naturalisme est exacte ?",
        choices: [
          "Le réalisme refuse de représenter la société contemporaine.",
          "Le naturalisme prolonge le réalisme en s’appuyant sur une démarche inspirée des sciences (hérédité, milieu).",
          "Le naturalisme est un mouvement poétique du XVIe siècle.",
          "Le réalisme et le naturalisme privilégient le merveilleux et le surnaturel.",
        ],
        answer: 1,
        explanation:
          "Le **réalisme** (Balzac, Flaubert) veut peindre fidèlement la société. Le **naturalisme** (Zola) le prolonge à la fin du XIXe siècle avec une ambition quasi scientifique : observer comment l’hérédité et le milieu déterminent les individus.",
      },
      {
        id: "2nde-francais-03-ct-7",
        prompt: "« Longtemps, je me suis couché de bonne heure » (Proust). Le passé composé et l’adverbe « Longtemps » suggèrent :",
        choices: [
          "une action unique et brutale",
          "un récit en focalisation externe",
          "une prolepse vers un futur lointain",
          "une habitude ancienne, évoquée par un narrateur qui se souvient",
        ],
        answer: 3,
        explanation:
          "« Longtemps » marque la durée et la répétition ; le passé composé relie ce passé au présent du narrateur qui se remémore. L’incipit installe d’emblée le thème central de l’œuvre : la **mémoire**, portée par un narrateur personnage.",
      },
      {
        id: "2nde-francais-03-ct-8",
        prompt: "Un roman commence en pleine bataille, puis le chapitre 2 raconte l’enfance du héros. On peut dire que le roman commence :",
        choices: [
          "in medias res, puis recourt à une analepse",
          "par une prolepse, puis une ellipse",
          "par un sommaire, puis une pause",
          "de façon chronologique",
        ],
        answer: 0,
        explanation:
          "Commencer en pleine action, c’est commencer **in medias res**. Revenir ensuite sur l’enfance du héros, antérieure à la bataille, est un retour en arrière : une **analepse**.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 4 — Le théâtre
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-francais-04",
    title: "Le théâtre du XVIIe au XXIe siècle",
    summary:
      "Comprendre le texte théâtral (double énonciation, formes de parole, structure de l’action) et distinguer les grands genres dramatiques, de la tragédie classique au théâtre contemporain.",
    objectives: [
      "Je sais expliquer la double énonciation et le rôle des didascalies.",
      "Je sais distinguer réplique, tirade, monologue, aparté et stichomythie.",
      "Je sais nommer les étapes de l’action : exposition, nœud, péripéties, dénouement.",
      "Je sais caractériser la tragédie, la comédie, le drame romantique et le théâtre de l’absurde.",
    ],
    sections: [
      {
        title: "Le texte de théâtre et la double énonciation",
        body: [
          "Un texte de théâtre est écrit pour être **joué** devant un public. Il comporte deux types de textes : les **répliques**, prononcées par les personnages, et les **didascalies**, indications scéniques (souvent en italique) qui précisent le décor, les gestes, le ton, les entrées et sorties. La liste des personnages en tête de pièce est aussi une didascalie. Lire une pièce, c’est donc imaginer sa **représentation** (mise en scène, jeu des acteurs, espace scénique).",
          "La notion clé est la **double énonciation** : quand un personnage parle à un autre, l’auteur s’adresse en même temps au **public**. Toute réplique a donc deux destinataires. C’est ce qui permet l’**ironie dramatique** : le spectateur en sait plus que certains personnages et comprend le double sens de leurs paroles. Dans Tartuffe de Molière, quand l’hypocrite s’exclame « Couvrez ce sein que je ne saurais voir », le public, qui connaît sa vraie nature, perçoit le comique de cette fausse pudeur.",
          "La pièce classique est divisée en **actes** (souvent cinq pour la tragédie et la grande comédie, parfois trois) et en **scènes**, qui changent à chaque entrée ou sortie d’un personnage. Le théâtre moderne utilise aussi des **tableaux** ou une structure continue. Le lieu concret du jeu est la **scène** (ou plateau) ; l’espace invisible évoqué par les personnages (les coulisses, la ville) est le **hors-scène**, où se déroulent souvent les événements violents dans la tragédie classique, par souci de **bienséance**.",
        ],
        keyPoints: [
          "**Répliques** (paroles) et **didascalies** (indications scéniques).",
          "**Double énonciation** : le personnage parle à un personnage, l’auteur parle au public.",
          "**Ironie dramatique** : le public en sait plus que le personnage.",
          "Structure : **actes** et **scènes** (nouvelle scène à chaque entrée/sortie).",
          "**Hors-scène** : ce qui se passe en dehors de la vue du public.",
        ],
        formulas: [
          "Énonciation 1 : personnage → personnage ; énonciation 2 : auteur → public.",
        ],
        example: {
          title: "Analyser une réplique de Tartuffe : « Couvrez ce sein que je ne saurais voir »",
          steps: [
            "Situation : Tartuffe, faux dévot, s’adresse à la servante Dorine, dont il juge le décolleté indécent.",
            "Premier niveau : Tartuffe affiche une pudeur exagérée devant Dorine.",
            "Second niveau : le public sait que Tartuffe est un hypocrite qui convoite la femme de son bienfaiteur.",
            "Effet : grâce à la double énonciation, la réplique révèle ce qu’elle prétend cacher : son trouble trahit son désir.",
            "Conclusion : le comique naît du décalage entre l’apparence vertueuse et la réalité du personnage, ce qui sert la satire de l’hypocrisie religieuse.",
          ],
        },
      },
      {
        title: "Les formes de la parole et la construction de l’action",
        body: [
          "Les paroles au théâtre prennent plusieurs formes. La **réplique** est la prise de parole d’un personnage dans un dialogue. La **tirade** est une longue réplique, souvent argumentative ou lyrique, adressée à d’autres personnages : la « tirade du nez » de Cyrano (Rostand) en est un exemple célèbre. Le **monologue** est prononcé par un personnage seul sur scène (ou qui se croit seul) : il révèle ses pensées, ses hésitations ; lorsqu’il hésite entre deux choix, on parle de **monologue délibératif**, comme les stances de Rodrigue dans Le Cid.",
          "L’**aparté** est une réplique que le personnage prononce pour lui-même et que le public entend, mais que les autres personnages présents sont censés ne pas entendre (didascalie « à part »). La **stichomythie** est un échange rapide de répliques très courtes (souvent d’un vers chacune), qui traduit un affrontement ou une grande tension. Le **quiproquo** est un malentendu : un personnage prend une personne ou une chose pour une autre.",
          "L’action dramatique suit traditionnellement plusieurs étapes. L’**exposition** (scène d’exposition, au début) présente les personnages, la situation et les enjeux. Le **nœud** est le conflit principal ; les **péripéties** sont des événements qui relancent l’action ; un **coup de théâtre** est un retournement brusque et inattendu. Le **dénouement** résout le conflit : heureux dans la comédie (souvent un mariage), malheureux dans la tragédie (souvent la mort).",
          "Au XVIIe siècle, la tragédie classique obéit à des règles théorisées notamment par Boileau : la **règle des trois unités** (unité de lieu, de temps — une journée — et d’action : « Qu’en un lieu, qu’en un jour, un seul fait accompli / Tienne jusqu’à la fin le théâtre rempli »), la **vraisemblance** (ce qui est représenté doit paraître crédible) et la **bienséance** (ne pas choquer le public : pas de mort ni de violence montrées sur scène).",
        ],
        keyPoints: [
          "**Tirade** : longue réplique ; **monologue** : personnage seul en scène.",
          "**Aparté** : réplique entendue du public seulement.",
          "**Stichomythie** : échange rapide de répliques brèves.",
          "Étapes : **exposition**, **nœud**, **péripéties**, **coup de théâtre**, **dénouement**.",
          "Règles classiques : **trois unités**, **vraisemblance**, **bienséance**.",
        ],
        formulas: [
          "Trois unités : un lieu + une journée + une seule action.",
        ],
        example: {
          title: "Reconnaître les formes de parole dans un extrait",
          steps: [
            "Repérer une didascalie « (à part) » : la réplique qui suit est un **aparté**.",
            "Repérer une réplique de vingt vers adressée à un autre personnage : c’est une **tirade**.",
            "Repérer une scène où un personnage seul hésite entre amour et honneur : **monologue délibératif**.",
            "Repérer une série de répliques d’un vers chacune, entre deux adversaires : **stichomythie**.",
            "Interpréter : chacune de ces formes sert un effet (complicité avec le public, argumentation, introspection, tension).",
          ],
        },
      },
      {
        title: "Les genres théâtraux",
        body: [
          "La **tragédie** met en scène des personnages de haut rang (rois, princes, héros) confrontés à un conflit insoluble et à la **fatalité** ; elle s’achève généralement par la mort. Écrite en alexandrins, elle vise selon Aristote la **catharsis**, c’est-à-dire la purgation des passions du spectateur par la terreur et la pitié. Les deux grands auteurs tragiques du XVIIe siècle sont **Corneille** (Le Cid, Horace) et **Racine** (Andromaque, Britannicus, Phèdre). Le Cid est d’abord qualifié de **tragi-comédie** : le conflit est grave, mais le dénouement n’est pas funeste.",
          "La **comédie** met en scène des personnages de condition moyenne ou modeste, dans des situations de la vie quotidienne, et se termine bien. Elle vise à « corriger les mœurs en divertissant » (formule latine castigat ridendo mores). **Molière** en est le maître : L’Avare, Tartuffe, Le Misanthrope, Les Fourberies de Scapin (« Que diable allait-il faire dans cette galère ? »). Les procédés comiques sont variés : comique de mots, de gestes, de situation, de caractère, de répétition. Au XVIIIe siècle, **Marivaux** explore les jeux de l’amour, et **Beaumarchais**, avec Le Mariage de Figaro, ajoute une critique sociale des privilèges.",
          "Au XIXe siècle, le **drame romantique** rejette les règles classiques : mélange des genres (le grotesque et le sublime, selon Victor Hugo dans la préface de Cromwell), abandon de l’unité de lieu et de temps, personnages historiques ou populaires. Hugo (Hernani, Ruy Blas, avec la tirade « Bon appétit, messieurs ! ») et Musset (Lorenzaccio) en sont les grands représentants. Rostand, avec Cyrano de Bergerac (1897), prolonge ce souffle héroïque et lyrique.",
          "Au XXe siècle, le **théâtre de l’absurde** (Ionesco, Beckett, dans les années 1950) montre des personnages sans repères, un langage qui tourne à vide, une action quasi absente, pour exprimer l’absurdité de la condition humaine. Le théâtre contemporain multiplie les formes : récit, fragments, théâtre documentaire, mise en scène qui réinvente les textes classiques.",
        ],
        keyPoints: [
          "**Tragédie** : personnages nobles, fatalité, mort, catharsis (Corneille, Racine).",
          "**Comédie** : vie quotidienne, dénouement heureux, critique des mœurs (Molière, Marivaux, Beaumarchais).",
          "**Tragi-comédie** : sujet grave, fin heureuse (Le Cid).",
          "**Drame romantique** : mélange du sublime et du grotesque, refus des règles (Hugo, Musset).",
          "**Théâtre de l’absurde** : absurdité de la condition humaine (Ionesco, Beckett).",
        ],
        example: {
          title: "Déterminer le genre d’une pièce",
          steps: [
            "Observer les personnages : rois et princes → indice tragique ; bourgeois et valets → indice comique.",
            "Observer le dénouement : mort du héros → tragédie ; mariage → comédie.",
            "Observer le respect des règles : unité de lieu et de temps → théâtre classique ; lieux multiples sur plusieurs années → drame romantique.",
            "Observer le langage : alexandrins nobles, ou prose familière, ou dialogue absurde qui tourne à vide.",
            "Conclure en combinant les indices, en nuançant si nécessaire (tragi-comédie, comédie grinçante).",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-francais-04-ex-1",
        prompt: "Les indications scéniques en italique qui précisent les gestes, le ton ou le décor s’appellent :",
        choices: ["des apartés", "des didascalies", "des tirades", "des stichomythies"],
        answer: 1,
        explanation:
          "Les **didascalies** sont les indications de l’auteur destinées au metteur en scène et aux acteurs : décor, gestes, ton, entrées et sorties. Elles ne sont pas prononcées sur scène.",
      },
      {
        id: "2nde-francais-04-ex-2",
        prompt: "Une réplique prononcée par un personnage et entendue seulement du public, les autres personnages présents ne l’entendant pas, est :",
        choices: ["un monologue", "une tirade", "un aparté", "une exposition"],
        answer: 2,
        explanation:
          "L’**aparté** (souvent signalé par la didascalie « à part ») crée une complicité avec le public. Le monologue, lui, est prononcé par un personnage seul en scène.",
      },
      {
        id: "2nde-francais-04-ex-3",
        prompt: "La scène qui présente au début de la pièce les personnages, la situation et les enjeux s’appelle :",
        choices: ["le dénouement", "le coup de théâtre", "le nœud", "la scène d’exposition"],
        answer: 3,
        explanation:
          "La **scène d’exposition** informe le spectateur : qui sont les personnages, quelle est la situation, quel est le conflit à venir. Le dénouement, lui, clôt la pièce.",
      },
      {
        id: "2nde-francais-04-ex-4",
        prompt: "Quel auteur est un grand auteur de comédies du XVIIe siècle ?",
        choices: ["Molière", "Racine", "Victor Hugo"],
        answer: 0,
        explanation:
          "**Molière** (L’Avare, Tartuffe, Le Misanthrope) est le maître de la comédie classique. Racine est un auteur de tragédies du XVIIe siècle ; Victor Hugo, un dramaturge romantique du XIXe siècle.",
      },
      {
        id: "2nde-francais-04-ex-5",
        prompt: "La règle classique des trois unités impose :",
        choices: [
          "trois actes, trois personnages, trois décors",
          "une unité de lieu, de temps (une journée) et d’action",
          "un mélange du comique, du tragique et du lyrique",
          "trois dénouements possibles",
        ],
        answer: 1,
        explanation:
          "La **règle des trois unités** impose **un seul lieu**, **une seule journée** et **une seule action principale**. Boileau la résume : « Qu’en un lieu, qu’en un jour, un seul fait accompli / Tienne jusqu’à la fin le théâtre rempli. »",
      },
      {
        id: "2nde-francais-04-ex-6",
        prompt: "Un échange rapide de répliques très courtes, souvent d’un vers chacune, entre deux personnages qui s’affrontent est :",
        choices: ["une tirade", "un quiproquo", "un monologue délibératif", "une stichomythie"],
        answer: 3,
        explanation:
          "La **stichomythie** traduit une forte tension : les répliques brèves s’enchaînent comme des coups. La tirade, au contraire, est une longue réplique.",
      },
    ],
    test: [
      {
        id: "2nde-francais-04-ct-1",
        prompt: "Qu’appelle-t-on « double énonciation » au théâtre ?",
        choices: [
          "Le fait qu’une pièce soit écrite en vers et en prose",
          "Le fait que chaque réplique s’adresse à la fois aux personnages sur scène et au public",
          "Le fait qu’un acteur joue deux rôles",
          "Le fait que l’auteur écrive deux versions de la pièce",
        ],
        answer: 1,
        explanation:
          "La **double énonciation** signifie que tout énoncé théâtral a deux destinataires : le personnage à qui il est adressé et le **public**, à qui l’auteur s’adresse indirectement. Elle rend possibles l’aparté et l’ironie dramatique.",
      },
      {
        id: "2nde-francais-04-ct-2",
        prompt: "Pourquoi, dans la tragédie classique, les morts violentes sont-elles souvent racontées par un personnage plutôt que montrées ?",
        choices: [
          "Par respect de la règle de bienséance, qui interdit de choquer le public",
          "Parce que la règle des trois unités interdit de faire mourir un personnage",
          "Parce que les acteurs refusaient de jouer ces scènes",
          "Pour respecter l’alternance des rimes",
        ],
        answer: 0,
        explanation:
          "La **bienséance** interdit de montrer sur scène ce qui pourrait heurter le public (violence, mort, intimité). Les morts ont donc lieu **hors-scène** et sont rapportées par un récit, comme le récit de Théramène dans Phèdre.",
      },
      {
        id: "2nde-francais-04-ct-3",
        prompt: "Le Cid de Corneille est d’abord qualifié de « tragi-comédie » car :",
        choices: [
          "il mélange des scènes comiques et des scènes tragiques à part égale",
          "il est écrit en prose",
          "son sujet est grave et héroïque mais son dénouement n’est pas funeste",
          "il ne respecte aucune règle classique",
        ],
        answer: 2,
        explanation:
          "La **tragi-comédie** traite un sujet sérieux (honneur, vengeance, amour contrarié) avec des personnages nobles, mais s’achève sans catastrophe finale : Rodrigue et Chimène peuvent espérer un avenir commun.",
      },
      {
        id: "2nde-francais-04-ct-4",
        prompt: "Dans les stances de Rodrigue (Le Cid, acte I), le héros, seul, hésite entre venger son père et préserver son amour. Il s’agit :",
        choices: ["d’un aparté comique", "d’une stichomythie", "d’une scène d’exposition", "d’un monologue délibératif"],
        answer: 3,
        explanation:
          "Rodrigue est **seul** en scène et pèse les deux termes d’un choix déchirant entre l’honneur et l’amour : c’est un **monologue délibératif**, qui fait du spectateur le témoin direct du dilemme intérieur.",
      },
      {
        id: "2nde-francais-04-ct-5",
        prompt: "Selon Victor Hugo (préface de Cromwell), le drame romantique doit :",
        choices: [
          "respecter strictement les trois unités",
          "mêler le grotesque et le sublime pour représenter la vie dans sa totalité",
          "ne mettre en scène que des rois",
          "s’interdire tout lyrisme",
        ],
        answer: 1,
        explanation:
          "Hugo défend le **mélange des genres** : le grotesque et le sublime coexistent dans la réalité, donc sur scène. Le drame romantique refuse aussi les unités de lieu et de temps, jugées artificielles.",
      },
      {
        id: "2nde-francais-04-ct-6",
        prompt: "Le spectateur sait que le personnage caché sous la table entend tout, mais celui qui parle l’ignore. Ce procédé s’appelle :",
        choices: ["l’ironie dramatique", "la catharsis", "la bienséance", "la stichomythie"],
        answer: 0,
        explanation:
          "L’**ironie dramatique** naît de l’écart entre ce que sait le public et ce qu’ignore un personnage. C’est exactement la situation de la célèbre scène de Tartuffe où Orgon, caché sous la table, découvre l’hypocrisie de Tartuffe.",
      },
      {
        id: "2nde-francais-04-ct-7",
        prompt: "Quelle caractéristique correspond au théâtre de l’absurde (années 1950) ?",
        choices: [
          "Des alexandrins et le respect des trois unités",
          "Un dénouement toujours heureux par un mariage",
          "Un langage qui tourne à vide et une action réduite pour exprimer le non-sens de la condition humaine",
          "Des héros épiques accomplissant des exploits",
        ],
        answer: 2,
        explanation:
          "Chez Ionesco ou Beckett, les personnages parlent sans vraiment communiquer, l’intrigue est presque inexistante : la forme même exprime l’**absurdité** de l’existence et l’impuissance du langage.",
      },
      {
        id: "2nde-francais-04-ct-8",
        prompt: "La catharsis, selon Aristote, désigne :",
        choices: [
          "le coup de théâtre final",
          "le décor unique de la tragédie",
          "le comique de répétition",
          "la purgation des passions du spectateur par la terreur et la pitié",
        ],
        answer: 3,
        explanation:
          "Dans sa Poétique, Aristote explique que la tragédie, en inspirant **terreur et pitié**, permet au spectateur de se libérer de ses passions : c’est la **catharsis** (purification).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 5 — Littérature d’idées et presse
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-francais-05",
    title: "La littérature d’idées et la presse du XIXe au XXIe siècle",
    summary:
      "Analyser un texte argumentatif : identifier la thèse, les arguments, les exemples, les stratégies (convaincre, persuader, délibérer) et les genres de l’argumentation, de l’essai à l’article de presse.",
    objectives: [
      "Je sais identifier le thème, la thèse soutenue et la thèse réfutée d’un texte.",
      "Je sais distinguer un argument d’un exemple et nommer les principaux types d’arguments.",
      "Je sais repérer les connecteurs logiques et les marques de l’engagement de l’auteur.",
      "Je sais distinguer convaincre, persuader et délibérer.",
      "Je sais reconnaître les genres de l’argumentation et de la presse (essai, pamphlet, discours, éditorial, tribune, lettre ouverte).",
    ],
    sections: [
      {
        title: "Thème, thèse, arguments et exemples",
        body: [
          "Un texte argumentatif cherche à **faire adhérer** son destinataire à une opinion. Il faut d’abord distinguer le **thème** (le sujet dont on parle : « la peine de mort », « les réseaux sociaux ») et la **thèse** (l’opinion que l’auteur défend sur ce thème : « la peine de mort doit être abolie »). Souvent, l’auteur combat une opinion adverse : c’est la **thèse réfutée** (ou thèse adverse).",
          "La thèse s’appuie sur des **arguments**, c’est-à-dire des raisons générales qui la justifient (« la peine de mort est irréversible : une erreur judiciaire ne peut être réparée »). Les arguments sont illustrés par des **exemples**, faits précis, concrets et vérifiables (une affaire judiciaire, un chiffre, un événement historique). Un exemple peut aussi avoir valeur d’argument lorsqu’il suffit à lui seul à prouver (on parle d’**exemple argumentatif**), tandis qu’un exemple **illustratif** se contente d’éclairer un argument déjà formulé.",
          "On distingue plusieurs **types d’arguments** : l’**argument d’autorité** (s’appuyer sur une personne reconnue ou une institution), l’**argument logique** de cause à conséquence, l’**argument par analogie** (comparer la situation à une autre pour éclairer le raisonnement), l’**argument ad hominem** (attaquer la personne de l’adversaire plutôt que ses idées, procédé fréquent dans la polémique), l’**argument par l’absurde** (montrer que la thèse adverse mène à une conclusion intenable), l’**argument pragmatique** (s’appuyer sur les effets concrets).",
          "Les **connecteurs logiques** organisent le raisonnement : addition (de plus, en outre), opposition ou concession (mais, cependant, certes… mais, pourtant), cause (car, parce que, puisque), conséquence (donc, ainsi, c’est pourquoi), illustration (par exemple, ainsi), conclusion (en somme, finalement). La **concession** est une stratégie habile : l’auteur reconnaît une part de vérité à l’adversaire (« Certes… ») pour mieux affirmer sa propre thèse (« mais… »).",
        ],
        keyPoints: [
          "**Thème** = sujet ; **thèse** = opinion défendue ; **thèse réfutée** = opinion combattue.",
          "**Argument** = raison générale ; **exemple** = fait précis qui illustre ou prouve.",
          "Arguments : d’autorité, logique, par analogie, ad hominem, par l’absurde, pragmatique.",
          "**Concession** : « Certes… mais… » — accorder pour mieux réfuter.",
          "Les **connecteurs logiques** révèlent la structure du raisonnement.",
        ],
        formulas: [
          "Thèse ← argument(s) ← exemple(s).",
          "Concession : Certes [idée adverse admise], mais [thèse de l’auteur].",
        ],
        example: {
          title: "Analyser un paragraphe argumentatif",
          steps: [
            "Texte : « Certes, les écrans facilitent l’accès à l’information. Mais leur usage excessif nuit à la concentration : plusieurs études montrent qu’un élève interrompu par des notifications met plusieurs minutes à se reconcentrer. Il faut donc apprendre à les maîtriser. »",
            "Thème : l’usage des écrans.",
            "Thèse : il faut apprendre à maîtriser l’usage des écrans (introduite par « donc »).",
            "Concession : « Certes… » reconnaît un avantage ; « Mais » introduit l’argument principal (atteinte à la concentration).",
            "Exemple : les études sur les notifications illustrent et appuient l’argument.",
          ],
        },
      },
      {
        title: "Convaincre, persuader, délibérer",
        body: [
          "On distingue traditionnellement trois manières d’argumenter. **Convaincre**, c’est s’adresser à la **raison** du destinataire, par des arguments logiques, des preuves, des exemples vérifiables, un raisonnement structuré. **Persuader**, c’est s’adresser à ses **émotions** et à ses sentiments : indignation, pitié, peur, admiration. **Délibérer**, c’est examiner le pour et le contre avant de prendre une décision, seul (monologue délibératif) ou à plusieurs (débat).",
          "Les procédés de la **persuasion** sont nombreux : apostrophes et interpellations du lecteur, phrases exclamatives et interrogatives (dont la **question rhétorique**, qui n’attend pas de réponse car elle contient déjà sa réponse), anaphores, gradations, hyperboles, vocabulaire mélioratif ou péjoratif, images frappantes. Victor Hugo, dans son discours sur la misère à l’Assemblée en 1849, affirme : « je suis de ceux qui pensent et qui affirment qu’on peut détruire la misère » ; la répétition et l’engagement personnel (« je ») renforcent la force persuasive.",
          "Il faut aussi repérer l’**implication de l’énonciateur** : pronoms personnels de la première personne, **modalisateurs** qui expriment le degré de certitude ou le jugement (adverbes comme « sans doute », « évidemment », verbes comme « sembler », « devoir », adjectifs évaluatifs, conditionnel de prudence). Un texte peut se présenter comme objectif (neutre, troisième personne, données chiffrées) tout en orientant subtilement le lecteur.",
          "Enfin, l’argumentation peut être **directe** (l’auteur expose explicitement sa thèse : essai, discours, article) ou **indirecte** (la thèse passe par un récit ou une fiction : fable, conte philosophique, apologue). Dans le second cas, le lecteur doit dégager lui-même la leçon, ce qui rend l’argumentation plus plaisante et parfois plus efficace.",
        ],
        keyPoints: [
          "**Convaincre** = raison ; **persuader** = émotions ; **délibérer** = peser le pour et le contre.",
          "**Question rhétorique** : question qui contient sa réponse.",
          "**Modalisateurs** : marques du jugement ou du degré de certitude de l’auteur.",
          "Argumentation **directe** (essai, discours) / **indirecte** (fable, conte, apologue).",
        ],
        example: {
          title: "Distinguer convaincre et persuader",
          steps: [
            "Phrase A : « Selon les chiffres officiels, le nombre d’accidents a diminué après l’abaissement de la vitesse maximale. »",
            "Analyse A : un fait chiffré, une relation de cause à effet → appel à la raison : **convaincre**.",
            "Phrase B : « Combien de familles brisées faudra-t-il encore pour que nous levions le pied ? »",
            "Analyse B : question rhétorique, image pathétique, « nous » qui implique le lecteur → appel aux émotions : **persuader**.",
            "Conclusion : un texte efficace combine souvent les deux stratégies.",
          ],
        },
      },
      {
        title: "Les genres de l’argumentation et de la presse",
        body: [
          "L’**essai** est un texte en prose où un auteur développe librement sa réflexion personnelle sur un sujet ; le mot vient des Essais de Montaigne (XVIe siècle). Le **pamphlet** est un texte court et violent qui attaque une personne, une institution ou une idée, sur un registre polémique. Le **discours** est un texte prononcé oralement devant un auditoire (assemblée, tribunal, foule) ; il utilise les ressources de l’éloquence : apostrophes, rythmes, anaphores. Victor Hugo, député, prononce ainsi plusieurs grands discours (sur la misère, contre la peine de mort).",
          "La **presse** se développe considérablement au XIXe siècle grâce aux progrès de l’imprimerie, de l’instruction et à la loi sur la liberté de la presse de 1881. Les écrivains y publient romans-feuilletons, chroniques et prises de position. L’exemple le plus célèbre est « J’accuse… ! » d’Émile Zola, publié en une du journal L’Aurore le 13 janvier 1898 : cette **lettre ouverte** au président de la République Félix Faure défend le capitaine Dreyfus, injustement condamné, et accuse nommément les responsables de l’erreur judiciaire, avec l’anaphore « J’accuse ».",
          "Les genres journalistiques à connaître sont : l’**article d’information** (factuel, il répond aux questions qui, quoi, où, quand, comment, pourquoi), l’**éditorial** (article qui exprime la position de la rédaction ou de son directeur), la **tribune** (texte d’opinion signé par une personnalité extérieure au journal), la **chronique** (rubrique régulière d’un auteur, souvent sur un ton personnel), le **reportage** (récit vivant d’un journaliste sur le terrain) et le **dessin de presse** (argumentation par l’image et l’humour).",
          "Au XXe et au XXIe siècle, la littérature d’idées se poursuit dans l’essai, les médias audiovisuels puis numériques (blogs, podcasts, réseaux sociaux). Face à cette abondance, l’esprit critique est essentiel : distinguer un fait d’une opinion, identifier la source, repérer les procédés de manipulation (généralisation abusive, faux dilemme, appel à la peur).",
        ],
        keyPoints: [
          "**Essai** : réflexion personnelle en prose (Montaigne).",
          "**Pamphlet** : attaque virulente ; **discours** : texte oral devant un auditoire.",
          "**Lettre ouverte** : lettre adressée à un destinataire mais publiée pour tous (« J’accuse… ! », Zola, 1898).",
          "Presse : **article d’information**, **éditorial**, **tribune**, **chronique**, **reportage**.",
          "Esprit critique : distinguer **fait** et **opinion**.",
        ],
        example: {
          title: "Identifier le genre d’un texte de presse",
          steps: [
            "Observer la signature : un ministre, un chercheur ou un écrivain extérieur au journal → probablement une **tribune**.",
            "Observer le contenu : uniquement des faits, des dates, des témoignages, sans jugement explicite → **article d’information**.",
            "Observer la place et la fonction : texte en tête du journal, exprimant la ligne de la rédaction → **éditorial**.",
            "Observer le destinataire : un texte qui commence par « Monsieur le Président » mais publié dans la presse → **lettre ouverte**.",
            "Conclure en justifiant par ces indices, puis analyser la thèse et les stratégies argumentatives.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-francais-05-ex-1",
        prompt: "Dans un texte, « Il faut abolir la peine de mort » est :",
        choices: ["le thème", "un exemple", "la thèse", "un connecteur"],
        answer: 2,
        explanation:
          "C’est l’**opinion** défendue par l’auteur, donc la **thèse**. Le thème serait simplement « la peine de mort », sans prise de position.",
      },
      {
        id: "2nde-francais-05-ex-2",
        prompt: "« Certes, ce projet coûte cher, mais il sauvera des vies. » Quelle stratégie est utilisée ?",
        choices: ["Une concession", "Un argument d’autorité", "Une question rhétorique", "Un exemple chiffré"],
        answer: 0,
        explanation:
          "L’auteur reconnaît d’abord un point de l’adversaire (« Certes, ce projet coûte cher ») avant d’affirmer sa propre position (« mais il sauvera des vies ») : c’est une **concession**.",
      },
      {
        id: "2nde-francais-05-ex-3",
        prompt: "Faire appel aux émotions du lecteur (pitié, indignation) pour le faire adhérer à une thèse, c’est :",
        choices: ["convaincre", "délibérer", "démontrer", "persuader"],
        answer: 3,
        explanation:
          "**Persuader**, c’est toucher la **sensibilité** du destinataire. **Convaincre**, c’est s’adresser à sa raison par des arguments logiques ; délibérer, c’est peser le pour et le contre.",
      },
      {
        id: "2nde-francais-05-ex-4",
        prompt: "« Comme l’affirme un prix Nobel de médecine, le sommeil est indispensable à la mémoire. » Il s’agit :",
        choices: ["d’un argument ad hominem", "d’un argument d’autorité", "d’un argument par l’absurde"],
        answer: 1,
        explanation:
          "L’auteur s’appuie sur le prestige et la compétence d’une personne reconnue : c’est un **argument d’autorité**. L’argument ad hominem attaque au contraire la personne de l’adversaire.",
      },
      {
        id: "2nde-francais-05-ex-5",
        prompt: "« J’accuse… ! » de Zola, publié en 1898 dans L’Aurore, est :",
        choices: [
          "une lettre ouverte au président de la République",
          "un roman-feuilleton naturaliste",
          "un éditorial anonyme",
          "une fable en vers",
        ],
        answer: 0,
        explanation:
          "Zola adresse ce texte au président **Félix Faure**, mais le publie en une d’un journal pour toucher l’opinion publique : c’est une **lettre ouverte**, prise de position majeure dans l’affaire Dreyfus.",
      },
      {
        id: "2nde-francais-05-ex-6",
        prompt: "Un article d’opinion signé par une personnalité extérieure à la rédaction du journal s’appelle :",
        choices: ["un reportage", "un éditorial", "une dépêche", "une tribune"],
        answer: 3,
        explanation:
          "La **tribune** donne la parole à une personne extérieure (chercheur, écrivain, responsable politique). L’**éditorial** exprime la position de la rédaction elle-même.",
      },
    ],
    test: [
      {
        id: "2nde-francais-05-ct-1",
        prompt: "Quelle est la différence entre un argument et un exemple ?",
        choices: [
          "L’argument est toujours chiffré, l’exemple jamais.",
          "L’argument est une raison générale qui justifie la thèse ; l’exemple est un fait précis qui l’illustre ou la prouve.",
          "L’exemple est toujours placé avant l’argument.",
          "Il n’y en a pas : ce sont deux mots pour la même chose.",
        ],
        answer: 1,
        explanation:
          "L’**argument** est une idée générale (« l’erreur judiciaire est irréparable ») ; l’**exemple** est un cas concret (une affaire précise). L’exemple peut être illustratif ou, s’il prouve à lui seul, argumentatif.",
      },
      {
        id: "2nde-francais-05-ct-2",
        prompt: "« Faudra-t-il attendre une catastrophe pour agir ? » Cette phrase est :",
        choices: [
          "une question réelle qui attend une information",
          "une concession",
          "une question rhétorique qui contient déjà sa réponse (« non »)",
          "un argument d’autorité",
        ],
        answer: 2,
        explanation:
          "La **question rhétorique** n’attend pas de réponse : celle-ci est évidente (« non, il faut agir maintenant »). Elle implique le lecteur et sert la **persuasion**.",
      },
      {
        id: "2nde-francais-05-ct-3",
        prompt: "Un polémiste écrit : « Comment croire cet homme, qui a changé d’avis trois fois ? » sans discuter ses idées. Il emploie :",
        choices: ["un argument par analogie", "un argument logique", "un exemple illustratif", "un argument ad hominem"],
        answer: 3,
        explanation:
          "L’argument **ad hominem** (« contre l’homme ») attaque la personne au lieu de réfuter ses idées. Fréquent dans la polémique, il est considéré comme fallacieux sur le plan logique.",
      },
      {
        id: "2nde-francais-05-ct-4",
        prompt: "Dans « Il est sans doute nécessaire de revoir cette loi », l’expression « sans doute » est :",
        choices: [
          "un modalisateur qui nuance le degré de certitude",
          "un connecteur de conséquence",
          "un exemple",
          "une thèse réfutée",
        ],
        answer: 0,
        explanation:
          "« Sans doute » est un **modalisateur** : il exprime le jugement de l’énonciateur sur ce qu’il dit (ici une forte probabilité, sans certitude absolue). Repérer les modalisateurs permet de mesurer l’engagement de l’auteur.",
      },
      {
        id: "2nde-francais-05-ct-5",
        prompt: "La Fontaine critique l’abus de pouvoir dans « Le Loup et l’Agneau » (« La raison du plus fort est toujours la meilleure »). Il s’agit d’une argumentation :",
        choices: [
          "directe, sous forme d’essai",
          "indirecte, par l’intermédiaire d’un récit (apologue)",
          "journalistique, sous forme de reportage",
          "purement lyrique, sans thèse",
        ],
        answer: 1,
        explanation:
          "La fable est un **apologue** : un court récit dont on tire une leçon. La thèse passe par la fiction, ce qui relève de l’**argumentation indirecte**. La morale est d’ailleurs ironique : elle constate un fait que la fable invite à dénoncer.",
      },
      {
        id: "2nde-francais-05-ct-6",
        prompt: "Quel facteur a favorisé l’essor de la presse au XIXe siècle en France ?",
        choices: [
          "L’invention d’Internet",
          "L’interdiction de la lecture publique",
          "La loi de 1881 sur la liberté de la presse, avec les progrès de l’imprimerie et de l’instruction",
          "La disparition des écrivains engagés",
        ],
        answer: 2,
        explanation:
          "La **loi du 29 juillet 1881** garantit la liberté de la presse ; les progrès techniques (rotatives) et l’alphabétisation font du journal un média de masse, dans lequel les écrivains s’engagent (Zola, Hugo).",
      },
      {
        id: "2nde-francais-05-ct-7",
        prompt: "Dans « J’accuse… ! », la répétition de « J’accuse » en tête de plusieurs paragraphes est :",
        choices: ["un chiasme", "une litote", "un euphémisme", "une anaphore à visée polémique"],
        answer: 3,
        explanation:
          "La reprise d’un même mot ou groupe en début de paragraphe est une **anaphore**. Elle martèle l’accusation, désigne nommément les responsables et donne au texte une force **polémique** et oratoire.",
      },
      {
        id: "2nde-francais-05-ct-8",
        prompt: "« Tous les jeunes passent leurs journées sur leur téléphone. » Quel défaut de raisonnement contient cette phrase ?",
        choices: [
          "Une généralisation abusive",
          "Un argument d’autorité légitime",
          "Une concession bien construite",
          "Un exemple vérifiable",
        ],
        answer: 0,
        explanation:
          "Le mot « tous » étend à l’ensemble d’un groupe ce qui n’est vrai, au mieux, que pour une partie : c’est une **généralisation abusive**. Repérer ces procédés fait partie de l’esprit critique face aux discours et aux médias.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 6 — Grammaire : la phrase et ses constituants
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-francais-06",
    title: "Grammaire : la phrase et ses constituants",
    summary:
      "Identifier la classe et la fonction des mots, distinguer phrase simple et phrase complexe, et reconnaître les différentes propositions subordonnées.",
    objectives: [
      "Je sais distinguer la classe (nature) d’un mot et sa fonction dans la phrase.",
      "Je sais identifier les fonctions essentielles : sujet, COD, COI, attribut, compléments circonstanciels.",
      "Je sais reconnaître les fonctions dans le groupe nominal : épithète, complément du nom, apposition.",
      "Je sais distinguer juxtaposition, coordination et subordination.",
      "Je sais identifier une subordonnée relative, complétive, circonstancielle ou interrogative indirecte.",
    ],
    sections: [
      {
        title: "Les classes de mots",
        body: [
          "Chaque mot appartient à une **classe grammaticale** (on dit aussi **nature**), qu’il possède indépendamment de la phrase : « chat » est un nom, « rapidement » un adverbe. Il ne faut pas la confondre avec la **fonction**, qui dépend du rôle du mot dans une phrase donnée : « chat » peut être sujet, COD, complément du nom…",
          "Les **classes variables** (qui changent de forme) sont : le **nom** (commun ou propre), le **déterminant** (article défini, indéfini, partitif ; déterminant possessif, démonstratif, interrogatif, exclamatif, indéfini, numéral), l’**adjectif** (qualificatif ; il s’accorde avec le nom), le **pronom** (personnel, possessif, démonstratif, relatif, interrogatif, indéfini), et le **verbe** (qui se conjugue).",
          "Les **classes invariables** sont : l’**adverbe** (modifie le sens d’un verbe, d’un adjectif, d’un autre adverbe ou de la phrase : très, souvent, heureusement), la **préposition** (introduit un complément : à, de, par, pour, sans, avec, dans…), la **conjonction de coordination** (mais, ou, et, donc, or, ni, car), la **conjonction de subordination** (que, quand, comme, si, lorsque, puisque, bien que…), et l’**interjection** (ah, hélas, ô).",
          "Certains mots changent de classe selon l’emploi : « que » peut être pronom relatif (« le livre que je lis » — il a un antécédent, « livre »), conjonction de subordination (« je pense que tu as raison » — il n’a pas d’antécédent) ou adverbe exclamatif (« que c’est beau ! »). De même, « le » est un article devant un nom (« le livre ») mais un pronom devant un verbe (« je le lis »). L’analyse se fait toujours **en contexte**.",
        ],
        keyPoints: [
          "**Classe (nature)** = identité du mot ; **fonction** = rôle dans la phrase.",
          "Variables : nom, déterminant, adjectif, pronom, verbe.",
          "Invariables : adverbe, préposition, conjonction de coordination, conjonction de subordination, interjection.",
          "Conjonctions de coordination : **mais, ou, et, donc, or, ni, car**.",
          "« que » : pronom relatif (avec antécédent) ou conjonction de subordination (sans antécédent).",
        ],
        formulas: [
          "Que relatif → remplaçable par « lequel/laquelle », reprend un antécédent.",
          "Que conjonction → introduit une proposition qui complète un verbe, sans antécédent.",
        ],
        example: {
          title: "Donner la classe des mots de « Hélas, le vieux marin ne revint jamais au port. »",
          steps: [
            "« Hélas » : interjection.",
            "« le » : déterminant (article défini) ; « vieux » : adjectif qualificatif ; « marin » : nom commun.",
            "« ne… jamais » : adverbe de négation ; « revint » : verbe revenir au passé simple.",
            "« au » : déterminant contracté (à + le), c’est-à-dire préposition « à » + article « le ».",
            "« port » : nom commun.",
          ],
        },
      },
      {
        title: "Les fonctions dans la phrase et dans le groupe nominal",
        body: [
          "Le **sujet** indique de qui ou de quoi l’on parle et commande l’accord du verbe ; on le trouve avec la question « qui est-ce qui ? / qu’est-ce qui ? » placée avant le verbe, ou avec l’encadrement « c’est… qui ». Le **complément d’objet direct (COD)** complète le verbe sans préposition (« Elle lit **un roman** ») ; le **complément d’objet indirect (COI)** le complète avec une préposition (« Il pense **à son avenir** »). Quand un verbe a deux compléments d’objet, le second est parfois appelé **complément d’objet second (COS)** : « Il offre un livre **à sa sœur** ».",
          "L’**attribut du sujet** exprime une qualité du sujet par l’intermédiaire d’un **verbe attributif** (être, paraître, sembler, devenir, demeurer, rester, avoir l’air…) : « Le ciel paraît **sombre** ». Il ne faut pas le confondre avec le COD : on ne peut pas transformer la phrase au passif. Le **complément d’agent**, dans une phrase passive, désigne celui qui fait l’action (« La lettre a été écrite **par Zola** »).",
          "Les **compléments circonstanciels** (de temps, lieu, cause, conséquence, but, manière, moyen, condition, concession…) précisent les circonstances de l’action ; ils sont généralement **déplaçables et supprimables** : « **Chaque soir**, il écrivait **dans sa chambre** ». Dans la terminologie grammaticale actuelle, on parle aussi de **compléments de phrase** (déplaçables, supprimables) par opposition aux **compléments du verbe** (COD, COI, souvent non supprimables).",
          "Dans le **groupe nominal**, le nom noyau peut être complété par : un **adjectif épithète**, placé directement à côté du nom (« un **long** voyage ») ; un **complément du nom**, souvent introduit par une préposition (« la maison **de mon père** ») ; une **proposition subordonnée relative** (« l’homme **qui marchait** ») ; une **apposition**, séparée par une virgule, qui apporte une précision détachable (« Zola, **romancier naturaliste**, défendit Dreyfus »).",
        ],
        keyPoints: [
          "**Sujet** : « c’est… qui » ; commande l’accord du verbe.",
          "**COD** : sans préposition ; **COI** : avec préposition.",
          "**Attribut du sujet** : après un verbe d’état (être, sembler, paraître, devenir…).",
          "**Compléments circonstanciels** : déplaçables et supprimables.",
          "Groupe nominal : **épithète**, **complément du nom**, **relative**, **apposition**.",
        ],
        formulas: [
          "COD : sujet + verbe + qui ? / quoi ? (sans préposition).",
          "COI : sujet + verbe + à qui ? / de quoi ? (avec préposition).",
          "Attribut : sujet + verbe d’état + qualité du sujet.",
        ],
        example: {
          title: "Analyser « Chaque matin, la jeune femme semblait heureuse. »",
          steps: [
            "Repérer le verbe conjugué : « semblait ».",
            "Trouver le sujet : « C’est la jeune femme qui semblait… » → « la jeune femme » est sujet.",
            "« semblait » est un verbe d’état : « heureuse » qualifie le sujet → **attribut du sujet**.",
            "« Chaque matin » est déplaçable et supprimable → **complément circonstanciel de temps**.",
            "Dans le groupe nominal, « jeune » est un **adjectif épithète** du nom « femme ».",
          ],
        },
      },
      {
        title: "Phrase simple, phrase complexe et propositions subordonnées",
        body: [
          "Une **phrase simple** contient un seul verbe conjugué, donc une seule proposition (« Le vent souffle »). Une **phrase complexe** contient plusieurs verbes conjugués, donc plusieurs **propositions**. Celles-ci peuvent être reliées de trois manières : par **juxtaposition** (signe de ponctuation : « Il pleut, je reste »), par **coordination** (conjonction de coordination ou adverbe de liaison : « Il pleut, donc je reste »), par **subordination** (une proposition dépend d’une autre : « Je reste **parce qu’il pleut** »).",
          "Une proposition **indépendante** ne dépend d’aucune autre et n’en commande aucune. Dans la subordination, la proposition **principale** est complétée par une proposition **subordonnée**, introduite par un mot subordonnant. On distingue quatre grands types de subordonnées. La **relative**, introduite par un **pronom relatif** (qui, que, quoi, dont, où, lequel…), complète un nom ou un pronom appelé **antécédent** : « Le livre **que tu m’as prêté** est passionnant ». Elle est **déterminative** si elle est indispensable à l’identification de l’antécédent, **explicative** si elle apporte une précision détachable (entre virgules).",
          "La **subordonnée conjonctive complétive**, introduite par « que », occupe en général la fonction de COD du verbe principal : « Je crois **que tu as raison** ». La **subordonnée interrogative indirecte**, introduite par si, qui, ce que, quand, où, comment, pourquoi…, rapporte une question après un verbe comme demander, se demander, ignorer, savoir : « Il se demande **si elle viendra** ». La **subordonnée conjonctive circonstancielle** joue le rôle de complément circonstanciel : temps (quand, lorsque, dès que, avant que), cause (parce que, puisque, comme), conséquence (si bien que, de sorte que), but (pour que, afin que), concession (bien que, quoique), condition (si, à condition que), comparaison (comme, ainsi que).",
          "Il existe enfin des propositions sans mot subordonnant : la **subordonnée infinitive** (« J’entends **les oiseaux chanter** », où « les oiseaux » est le sujet de l’infinitif) et la **subordonnée participiale** (« **La nuit tombée**, ils rentrèrent », avec un participe qui a son propre sujet). Le mode est un indice : « bien que », « pour que », « afin que », « avant que » sont suivis du **subjonctif**.",
        ],
        keyPoints: [
          "Phrase simple = 1 verbe conjugué ; phrase complexe = plusieurs propositions.",
          "Liens : **juxtaposition**, **coordination**, **subordination**.",
          "**Relative** : pronom relatif + antécédent (déterminative ou explicative).",
          "**Complétive** : « que » + fonction COD le plus souvent ; **interrogative indirecte** : si, qui, quand, pourquoi…",
          "**Circonstancielle** : temps, cause, conséquence, but, concession, condition, comparaison.",
        ],
        formulas: [
          "Nombre de propositions = nombre de verbes conjugués.",
          "bien que / pour que / afin que / avant que + subjonctif.",
        ],
        example: {
          title: "Analyser « Quand le soleil se leva, Paul comprit que l’homme qu’il attendait ne viendrait pas. »",
          steps: [
            "Compter les verbes conjugués : se leva, comprit, attendait, viendrait → 4 propositions.",
            "Principale : « Paul comprit ».",
            "« Quand le soleil se leva » : subordonnée **circonstancielle de temps**, introduite par « quand ».",
            "« que l’homme… ne viendrait pas » : subordonnée **complétive**, COD de « comprit ».",
            "« qu’il attendait » : subordonnée **relative** ; « qu’ » est un pronom relatif, antécédent « l’homme ».",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-francais-06-ex-1",
        prompt: "Dans « Elle regarde **la mer** », le groupe en gras est :",
        choices: ["sujet", "COI", "COD", "attribut du sujet"],
        answer: 2,
        explanation:
          "« la mer » complète directement le verbe « regarde », sans préposition (elle regarde quoi ? la mer) : c’est un **COD**. « regarder » n’est pas un verbe d’état, donc il ne peut s’agir d’un attribut.",
      },
      {
        id: "2nde-francais-06-ex-2",
        prompt: "Quelle est la classe grammaticale de « mais » ?",
        choices: ["adverbe", "conjonction de coordination", "préposition", "conjonction de subordination"],
        answer: 1,
        explanation:
          "« mais » fait partie des conjonctions de coordination (mais, ou, et, donc, or, ni, car). Il relie deux éléments de même niveau en exprimant l’opposition.",
      },
      {
        id: "2nde-francais-06-ex-3",
        prompt: "Dans « Le ciel devient **menaçant** », le mot en gras est :",
        choices: ["attribut du sujet", "épithète", "COD", "complément circonstanciel"],
        answer: 0,
        explanation:
          "« devenir » est un **verbe d’état** : « menaçant » exprime une qualité du sujet « le ciel » par l’intermédiaire du verbe. C’est donc un **attribut du sujet**, et non un épithète (qui serait directement accolé au nom).",
      },
      {
        id: "2nde-francais-06-ex-4",
        prompt: "Combien de propositions la phrase « Il pleuvait, mais nous sortîmes car nous avions promis de venir » contient-elle ?",
        choices: ["1", "2", "4", "3"],
        answer: 3,
        explanation:
          "On compte les verbes conjugués : « pleuvait », « sortîmes », « avions promis » → **3 propositions**. « venir » est un infinitif, il ne forme pas ici de proposition supplémentaire.",
      },
      {
        id: "2nde-francais-06-ex-5",
        prompt: "Dans « La maison **que j’ai achetée** est ancienne », la proposition en gras est une subordonnée :",
        choices: ["complétive", "relative", "circonstancielle de cause", "interrogative indirecte"],
        answer: 1,
        explanation:
          "« que » reprend le nom « maison » (son **antécédent**) : c’est un **pronom relatif**, qui introduit une **subordonnée relative** complétant ce nom.",
      },
      {
        id: "2nde-francais-06-ex-6",
        prompt: "« Zola, **écrivain engagé**, défendit Dreyfus. » Le groupe en gras est :",
        choices: ["une apposition", "un COD", "un complément du nom", "un attribut du sujet"],
        answer: 0,
        explanation:
          "Le groupe est détaché par des virgules et apporte une précision sur le nom « Zola » sans être indispensable : c’est une **apposition**.",
      },
    ],
    test: [
      {
        id: "2nde-francais-06-ct-1",
        prompt: "Dans « Je pense **que tu as raison** », la subordonnée est :",
        choices: [
          "une relative, car elle est introduite par « que »",
          "une circonstancielle de conséquence",
          "une complétive, COD de « pense »",
          "une interrogative indirecte",
        ],
        answer: 2,
        explanation:
          "« que » n’a pas d’antécédent : ce n’est pas un pronom relatif mais une **conjonction de subordination**. La proposition complète le verbe « pense » (je pense quoi ?) : c’est une **complétive** en fonction de **COD**.",
      },
      {
        id: "2nde-francais-06-ct-2",
        prompt: "Dans « Il se demande **si elle viendra** », la subordonnée est :",
        choices: [
          "une circonstancielle de condition",
          "une relative déterminative",
          "une participiale",
          "une interrogative indirecte",
        ],
        answer: 3,
        explanation:
          "Après « se demander », « si » introduit une question rapportée (question directe : « Viendra-t-elle ? ») : c’est une **interrogative indirecte**. Ce n’est pas une condition : on ne peut pas la paraphraser par « à condition que ».",
      },
      {
        id: "2nde-francais-06-ct-3",
        prompt: "« **Bien qu’il soit fatigué**, il continue. » La subordonnée exprime :",
        choices: ["la cause", "la concession", "le but", "la conséquence"],
        answer: 1,
        explanation:
          "« Bien que » introduit une **circonstancielle de concession** : le fait (la fatigue) n’empêche pas l’action principale. Comme « quoique », il est suivi du **subjonctif** (« soit »).",
      },
      {
        id: "2nde-francais-06-ct-4",
        prompt: "Dans « Les élèves **qui ont révisé** réussiront », la relative est :",
        choices: [
          "déterminative : sans elle, la phrase change de sens",
          "explicative : on peut la supprimer sans changer le sens",
          "complétive, COD de « réussiront »",
          "circonstancielle de temps",
        ],
        answer: 0,
        explanation:
          "La relative restreint le groupe désigné : seuls les élèves qui ont révisé réussiront. La supprimer (« Les élèves réussiront ») changerait le sens : elle est **déterminative**. Une explicative serait placée entre virgules.",
      },
      {
        id: "2nde-francais-06-ct-5",
        prompt: "Dans « J’entends **les enfants rire** », le groupe en gras est :",
        choices: [
          "une subordonnée participiale",
          "un complément du nom",
          "une subordonnée infinitive, COD de « entends »",
          "une subordonnée relative",
        ],
        answer: 2,
        explanation:
          "L’infinitif « rire » a son propre sujet (« les enfants ») différent de celui du verbe principal : c’est une **subordonnée infinitive**, qui occupe la fonction de COD de « entends » (j’entends quoi ?).",
      },
      {
        id: "2nde-francais-06-ct-6",
        prompt: "Dans « Je **le** vois et je prends **le** livre », les deux mots « le » sont respectivement :",
        choices: [
          "deux articles définis",
          "deux pronoms personnels",
          "un article puis un pronom",
          "un pronom personnel puis un article défini",
        ],
        answer: 3,
        explanation:
          "Le premier « le », placé devant un verbe, remplace un nom : c’est un **pronom personnel** COD. Le second, placé devant le nom « livre », est un **article défini** (déterminant). La classe d’un mot se détermine toujours en contexte.",
      },
      {
        id: "2nde-francais-06-ct-7",
        prompt: "« Il a tant travaillé **qu’il a réussi**. » La subordonnée exprime :",
        choices: ["la conséquence", "le but", "la cause", "la comparaison"],
        answer: 0,
        explanation:
          "La construction « tant… que » introduit une **circonstancielle de conséquence** : la réussite est le résultat de l’intensité du travail. Le but (pour que + subjonctif) exprime une intention, non un résultat constaté.",
      },
      {
        id: "2nde-francais-06-ct-8",
        prompt: "« **La pluie ayant cessé**, nous sortîmes. » Le groupe en gras est :",
        choices: [
          "une subordonnée relative",
          "une subordonnée participiale à valeur circonstancielle",
          "une proposition indépendante juxtaposée",
          "un COD",
        ],
        answer: 1,
        explanation:
          "Le participe « ayant cessé » a son propre sujet (« la pluie »), distinct de celui de la principale (« nous ») : c’est une **subordonnée participiale**. Elle joue ici le rôle d’un complément circonstanciel de temps (ou de cause).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 7 — Méthode : le commentaire de texte
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-francais-07",
    title: "Méthode : le commentaire de texte",
    summary:
      "Construire pas à pas un commentaire littéraire : lire et annoter le texte, formuler une problématique, bâtir un plan, rédiger introduction, paragraphes d’analyse et conclusion.",
    objectives: [
      "Je sais préparer un commentaire au brouillon : lecture active, repérages, hypothèses de lecture.",
      "Je sais formuler une problématique pertinente et l’organiser en un plan en deux ou trois axes.",
      "Je sais rédiger une introduction et une conclusion complètes.",
      "Je sais rédiger un paragraphe d’analyse qui relie idée, citation, procédé et interprétation.",
    ],
    sections: [
      {
        title: "Comprendre l’exercice et préparer le brouillon",
        body: [
          "Le **commentaire de texte** est un exercice d’**interprétation argumentée** d’un extrait littéraire. Il ne s’agit ni de résumer, ni de paraphraser (redire le texte avec d’autres mots), ni de juxtaposer des remarques : il faut montrer **comment** le texte produit du sens et des effets, en s’appuyant sur une analyse précise de sa forme. Au baccalauréat de français (épreuve écrite de fin de Première), les candidats de la voie générale choisissent entre le commentaire et la dissertation ; en Seconde, on s’y entraîne progressivement.",
          "La préparation commence par des **lectures actives**. Une première lecture permet de saisir la situation : qui parle ? à qui ? de quoi ? quel est le genre (poème, scène de théâtre, extrait de roman, texte d’idées) ? quel registre domine ? Le **paratexte** (auteur, titre, date, œuvre, chapeau introductif) donne des indices précieux. On formule alors une première impression : qu’est-ce qui frappe dans ce texte, qu’est-ce qui le rend singulier ?",
          "Les lectures suivantes servent à **repérer** les procédés : champs lexicaux, figures de style, énonciation (pronoms, temps), structure du texte (mouvements), rythme, ponctuation, versification pour la poésie. On surligne avec des couleurs différentes selon les axes d’interprétation qui se dessinent. Chaque repérage doit être accompagné, dès le brouillon, d’une **interprétation** : « ce procédé montre que… », « cela suggère… ».",
          "Une méthode efficace consiste à travailler en **tableau** à trois colonnes : citation / procédé / interprétation. On regroupe ensuite les interprétations proches : ces regroupements deviendront les **axes** du plan. Il faut gérer son temps : au bac, environ un tiers du temps au brouillon, puis la rédaction en se réservant quelques minutes pour se relire.",
        ],
        keyPoints: [
          "Commenter = **interpréter** le texte en analysant sa forme, pas le résumer.",
          "Paraphrase = redire le texte : défaut principal à éviter.",
          "Lire le **paratexte** et identifier genre, situation d’énonciation, registre.",
          "Tableau : **citation / procédé / interprétation**.",
          "Regrouper les interprétations proches pour construire les axes.",
        ],
        formulas: [
          "Analyse = idée + citation + procédé + interprétation.",
        ],
        example: {
          title: "Préparer le commentaire de « Demain, dès l’aube… » (Hugo)",
          steps: [
            "Paratexte : poème de Victor Hugo, recueil Les Contemplations (1856) ; la fille du poète, Léopoldine, est morte noyée en 1843.",
            "Première impression : un voyage vers un lieu inconnu, dont on découvre à la fin qu’il s’agit d’une tombe.",
            "Repérages : futur de l’indicatif (« Je partirai »), adresse à un « tu », refus du monde extérieur, chute finale sur la tombe.",
            "Interprétations : le poème mime un rendez-vous amoureux pour mieux révéler un deuil ; la marche est une méditation.",
            "Pistes d’axes : 1. un voyage énigmatique ; 2. un poème de deuil et de fidélité.",
          ],
        },
      },
      {
        title: "Problématique et plan",
        body: [
          "La **problématique** est la question à laquelle le commentaire répond. Elle porte sur la **singularité** du texte et sur le rapport entre sa forme et son sens : « Comment… ? », « En quoi… ? ». Une bonne problématique n’est ni trop vague (« Comment l’auteur écrit-il ? ») ni trop étroite (« Pourquoi y a-t-il une métaphore au vers 3 ? ») ; elle ne se limite pas à une question fermée (réponse oui / non).",
          "Exemples de problématiques réussies : « Comment Hugo transforme-t-il un simple voyage en hommage funèbre ? » ; « En quoi cette scène d’exposition est-elle à la fois informative et inquiétante ? » ; « Comment Zola fait-il d’un décor un personnage menaçant ? ». Chacune annonce un enjeu interprétatif que l’analyse va démontrer.",
          "Le **plan** comporte **deux ou trois axes** (ou parties), chacun divisé en deux ou trois sous-parties. Le plan est **thématique et interprétatif** : chaque axe défend une idée sur le texte. On évite le plan linéaire (suivre le texte ligne à ligne, qui relève de l’explication linéaire de l’oral) et le plan qui sépare le fond et la forme (« I. Le fond, II. La forme »), car l’analyse doit toujours relier les deux. Il est souvent judicieux d’aller du plus évident au plus subtil.",
          "Chaque axe et chaque sous-partie se formule sous forme d’**affirmation** : « I. Un voyage mystérieux » ; « A. Une marche déterminée et solitaire » ; « B. Une destination longtemps cachée ». Les titres guident le brouillon mais ne figurent pas dans la copie rédigée : on rédige en paragraphes reliés par des transitions.",
        ],
        keyPoints: [
          "**Problématique** : question ouverte (« Comment… ? », « En quoi… ? ») sur la singularité du texte.",
          "Plan en **2 ou 3 axes**, chacun avec 2 ou 3 sous-parties.",
          "Éviter le plan **linéaire** et le plan **fond / forme**.",
          "Progression : du plus évident au plus subtil.",
          "Pas de titres dans la copie rédigée.",
        ],
        example: {
          title: "Bâtir un plan à partir d’une problématique",
          steps: [
            "Problématique : « Comment Hugo transforme-t-il un simple voyage en hommage funèbre ? »",
            "Axe I : Un voyage énigmatique — A. une marche décidée (futur, rythme) ; B. un destinataire mystérieux (« tu »).",
            "Axe II : Un poème de deuil — A. le refus du monde extérieur (le poète ne regarde rien) ; B. la révélation finale de la tombe.",
            "Axe III (facultatif) : Un hommage poétique — A. la fidélité au-delà de la mort ; B. le bouquet comme offrande et image du poème lui-même.",
            "Vérifier : chaque axe répond à la problématique et progresse vers l’interprétation la plus profonde.",
          ],
        },
      },
      {
        title: "Rédiger : introduction, développement, conclusion",
        body: [
          "L’**introduction** comporte quatre étapes, rédigées en un seul paragraphe : l’**amorce** (situer le texte dans son contexte littéraire ou historique, sans banalité), la **présentation** du texte (auteur, œuvre, date, situation de l’extrait, genre, thème), la **problématique**, puis l’**annonce du plan** (« Nous verrons d’abord… puis… enfin… »).",
          "Le **développement** se compose de paragraphes argumentés. Chaque paragraphe suit la démarche : une **idée directrice** (phrase qui annonce ce que l’on démontre), puis des **analyses** qui associent une **citation** courte et précise (entre guillemets, avec la ligne ou le vers), le **procédé** nommé et son **interprétation**, enfin une **phrase de bilan**. Les citations sont intégrées à la syntaxe de la phrase. Une **transition** relie chaque grande partie à la suivante en résumant ce qui a été montré et en annonçant la suite.",
          "La **conclusion** comporte deux temps : le **bilan**, qui répond clairement à la problématique en reprenant les étapes du raisonnement (sans les recopier), et l’**ouverture**, qui élargit la réflexion vers une autre œuvre, un autre texte du même auteur, un mouvement artistique, une adaptation. L’ouverture doit être pertinente et précise, pas une question vague.",
          "Quelques règles de rédaction : écrire au **présent**, ne pas utiliser « je » (préférer « nous » ou une tournure impersonnelle), employer un vocabulaire d’analyse précis (le poète **suggère**, **souligne**, **met en relief**…), soigner l’orthographe et la syntaxe, et toujours distinguer l’auteur du narrateur ou du personnage.",
        ],
        keyPoints: [
          "Introduction : **amorce**, **présentation**, **problématique**, **annonce du plan**.",
          "Paragraphe : **idée directrice** → citations analysées → **bilan**.",
          "**Transitions** entre les parties.",
          "Conclusion : **bilan** (réponse à la problématique) + **ouverture** pertinente.",
          "Présent d’analyse, pas de « je », vocabulaire précis.",
        ],
        formulas: [
          "Introduction = amorce + présentation + problématique + annonce du plan.",
          "Conclusion = bilan + ouverture.",
        ],
        example: {
          title: "Rédiger un paragraphe d’analyse",
          steps: [
            "Idée directrice : « Le poète présente d’abord son voyage comme une marche décidée et inéluctable. »",
            "Citation + procédé : « Le futur de l’indicatif (« Je partirai », v. 2) et le rejet qui le met en relief… »",
            "Interprétation : « … traduisent une résolution ferme que rien ne semble pouvoir arrêter. »",
            "Deuxième analyse : « La précision temporelle « dès l’aube » souligne l’impatience du poète. »",
            "Bilan : « Ainsi, dès le premier quatrain, le lecteur perçoit un rendez-vous essentiel, dont la nature reste encore mystérieuse. »",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-francais-07-ex-1",
        prompt: "Quel est le principal défaut à éviter dans un commentaire ?",
        choices: ["Citer le texte", "Nommer les procédés", "La paraphrase", "Formuler une problématique"],
        answer: 2,
        explanation:
          "La **paraphrase** consiste à redire le texte avec d’autres mots sans l’analyser. Le commentaire doit au contraire **interpréter** : expliquer comment la forme produit le sens.",
      },
      {
        id: "2nde-francais-07-ex-2",
        prompt: "Dans quel ordre se présentent les étapes de l’introduction ?",
        choices: [
          "Annonce du plan, amorce, problématique, présentation",
          "Amorce, présentation du texte, problématique, annonce du plan",
          "Problématique, amorce, annonce du plan, présentation",
          "Présentation, annonce du plan, amorce, problématique",
        ],
        answer: 1,
        explanation:
          "L’introduction va du général au particulier : **amorce** (contexte), **présentation** du texte, **problématique**, puis **annonce du plan** qui prépare le développement.",
      },
      {
        id: "2nde-francais-07-ex-3",
        prompt: "Quelle problématique est la mieux formulée ?",
        choices: [
          "Y a-t-il des métaphores dans le texte ?",
          "Que raconte ce texte ?",
          "Comment Zola fait-il de la mine un monstre menaçant ?",
          "Quel est le thème du texte ?",
        ],
        answer: 2,
        explanation:
          "Une bonne problématique est une **question ouverte** qui porte sur la **singularité** du texte et sur le lien entre forme et sens. Les autres questions sont fermées (oui/non) ou invitent au résumé.",
      },
      {
        id: "2nde-francais-07-ex-4",
        prompt: "Que doit contenir la conclusion d’un commentaire ?",
        choices: [
          "Un bilan qui répond à la problématique et une ouverture",
          "Un résumé du texte et une citation nouvelle",
          "L’annonce du plan et l’amorce",
          "Une opinion personnelle sur l’auteur",
        ],
        answer: 0,
        explanation:
          "La conclusion fait le **bilan** de la démonstration en répondant à la problématique, puis propose une **ouverture** pertinente (autre œuvre, autre auteur, mouvement littéraire).",
      },
      {
        id: "2nde-francais-07-ex-5",
        prompt: "Dans un paragraphe d’analyse, une citation doit être :",
        choices: [
          "longue, pour montrer qu’on a lu tout le texte",
          "placée seule, sans commentaire",
          "remplacée par un résumé",
          "courte, précise, intégrée à la phrase et suivie d’une interprétation",
        ],
        answer: 3,
        explanation:
          "Une citation est une **preuve** : elle doit être brève, exacte, intégrée à la syntaxe et toujours accompagnée du procédé nommé et de son **interprétation**.",
      },
      {
        id: "2nde-francais-07-ex-6",
        prompt: "Combien d’axes comporte généralement le plan d’un commentaire ?",
        choices: ["un seul", "deux ou trois", "cinq ou six"],
        answer: 1,
        explanation:
          "Le commentaire s’organise en **deux ou trois axes**, chacun subdivisé en deux ou trois sous-parties. Un seul axe ne permet pas de démonstration progressive ; cinq ou six disperseraient l’analyse.",
      },
    ],
    test: [
      {
        id: "2nde-francais-07-ct-1",
        prompt: "Pourquoi le plan « I. Le fond / II. La forme » est-il déconseillé ?",
        choices: [
          "Parce qu’il est trop court",
          "Parce qu’il sépare ce qui doit être relié : on analyse toujours la forme pour dégager le sens",
          "Parce qu’il est réservé à la dissertation",
          "Parce qu’il oblige à citer le texte",
        ],
        answer: 1,
        explanation:
          "Le principe même du commentaire est de montrer comment les procédés (forme) produisent le sens (fond). Les séparer conduit à une première partie paraphrastique et à une seconde partie de relevés sans interprétation.",
      },
      {
        id: "2nde-francais-07-ct-2",
        prompt: "Quelle phrase relève de l’analyse et non de la paraphrase ?",
        choices: [
          "Le poète dit qu’il va partir le lendemain matin.",
          "Le poète marche longtemps puis arrive à une tombe.",
          "Le futur « Je partirai », mis en relief par le rejet, traduit une décision que rien ne peut ébranler.",
          "Dans ce poème, il y a un futur.",
        ],
        answer: 2,
        explanation:
          "Seule la troisième proposition associe une **citation**, un **procédé** (futur, rejet) et une **interprétation** (la détermination). Les deux premières résument ; la quatrième se contente d’un relevé.",
      },
      {
        id: "2nde-francais-07-ct-3",
        prompt: "Quelle est la fonction d’une transition entre deux parties ?",
        choices: [
          "Résumer brièvement ce qui a été démontré et annoncer l’axe suivant",
          "Ajouter une citation nouvelle sans analyse",
          "Poser une nouvelle problématique",
          "Présenter l’auteur",
        ],
        answer: 0,
        explanation:
          "La **transition** assure la cohérence de la démonstration : elle dresse un bref bilan de la partie achevée et montre pourquoi l’axe suivant est nécessaire pour approfondir la réponse à la problématique.",
      },
      {
        id: "2nde-francais-07-ct-4",
        prompt: "Quelle ouverture est la plus pertinente pour un commentaire de « Demain, dès l’aube… » ?",
        choices: [
          "Et vous, aimez-vous la poésie ?",
          "Ce poème est très beau et triste.",
          "Hugo est né en 1802.",
          "On peut rapprocher ce poème d’autres textes de deuil, comme « Le Lac » de Lamartine, où le poète pleure aussi un être aimé disparu.",
        ],
        answer: 3,
        explanation:
          "Une bonne ouverture établit un **lien précis et justifié** avec une autre œuvre. Les autres propositions sont une question vague adressée au lecteur, un jugement de goût ou une information sans rapport avec l’analyse.",
      },
      {
        id: "2nde-francais-07-ct-5",
        prompt: "Lors de la préparation, à quoi sert le tableau « citation / procédé / interprétation » ?",
        choices: [
          "À recopier le texte entier",
          "À relier dès le brouillon chaque repérage à un effet de sens, puis à regrouper les interprétations en axes",
          "À compter le nombre de figures de style",
          "À rédiger directement la conclusion",
        ],
        answer: 1,
        explanation:
          "Le tableau évite le simple relevé : chaque procédé est immédiatement interprété. En regroupant ensuite les interprétations proches, on obtient naturellement les axes et sous-parties du plan.",
      },
      {
        id: "2nde-francais-07-ct-6",
        prompt: "Dans la copie, comment faut-il présenter le plan ?",
        choices: [
          "Avec des titres soulignés (I, A, B…) comme au brouillon",
          "Sous forme de liste à puces",
          "En paragraphes rédigés, séparés par des sauts de ligne, sans titres apparents",
          "En un seul bloc sans paragraphes",
        ],
        answer: 2,
        explanation:
          "Le commentaire est un devoir **entièrement rédigé** : pas de titres ni de tirets. On marque visuellement les parties par des sauts de ligne et les sous-parties par des alinéas, et on relie le tout par des transitions.",
      },
      {
        id: "2nde-francais-07-ct-7",
        prompt: "À l’écrit du baccalauréat de français (voie générale), le commentaire est :",
        choices: [
          "obligatoire pour tous les candidats",
          "remplacé par un QCM",
          "réservé à l’oral",
          "un des deux sujets au choix, avec la dissertation",
        ],
        answer: 3,
        explanation:
          "À l’épreuve écrite de fin de Première, les candidats de la voie générale choisissent entre le **commentaire** d’un texte et la **dissertation** sur une œuvre au programme.",
      },
      {
        id: "2nde-francais-07-ct-8",
        prompt: "Quelle formulation respecte les règles de rédaction du commentaire ?",
        choices: [
          "L’auteur met en relief, par l’anaphore, l’obsession du personnage.",
          "Je trouve que l’auteur exagère un peu.",
          "Le narrateur, c’est-à-dire Zola, raconte sa vie.",
          "L’auteur avait mis en relief, par l’anaphore, l’obsession du personnage.",
        ],
        answer: 0,
        explanation:
          "On écrit au **présent d’analyse**, sans « je » ni jugement de goût, avec un vocabulaire précis (« met en relief », procédé nommé). La troisième proposition confond auteur et narrateur ; la quatrième utilise un temps du passé inadapté.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 8 — Méthode : contraction de texte et essai
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-francais-08",
    title: "Méthode : la contraction de texte et l’essai",
    summary:
      "Réduire fidèlement un texte argumentatif en respectant son énonciation et sa logique, puis construire un essai personnel argumenté qui répond à une question.",
    objectives: [
      "Je sais dégager la structure logique d’un texte argumentatif avant de le contracter.",
      "Je sais rédiger une contraction fidèle, au nombre de mots demandé, en respectant l’énonciation de l’auteur.",
      "Je sais analyser le sujet d’un essai et construire un plan argumenté.",
      "Je sais rédiger un essai avec introduction, paragraphes argumentés et conclusion.",
    ],
    sections: [
      {
        title: "La contraction de texte : principes",
        body: [
          "La **contraction de texte** consiste à **réduire** un texte argumentatif (souvent au **quart** de sa longueur) en restituant fidèlement sa thèse, ses arguments et l’enchaînement de son raisonnement. C’est l’une des épreuves du baccalauréat de français pour la voie technologique, associée à un essai ; en Seconde, elle constitue aussi un excellent entraînement à la lecture précise et à l’expression concise.",
          "Plusieurs règles sont impératives. On respecte l’**énonciation** du texte : si l’auteur écrit « je », la contraction garde « je » ; on ne commence pas par « L’auteur dit que… ». On respecte l’**ordre** du texte et sa **logique** argumentative. On n’ajoute **aucune opinion personnelle** ni information extérieure. On **reformule** avec ses propres mots : il est interdit de recopier des phrases du texte (sauf quelques mots-clés impossibles à remplacer).",
          "Le **nombre de mots** est imposé : en général, une tolérance de **plus ou moins 10 %** est admise, et il faut indiquer le nombre de mots utilisés à la fin de la contraction. Un mot est ce qui est séparé par un espace ou une apostrophe : « l’homme » compte pour deux mots, « c’est-à-dire » pour quatre ; un nombre écrit en chiffres compte pour un mot.",
          "Pour réduire, on supprime ce qui est secondaire (exemples développés, répétitions, digressions), on **généralise** (une énumération devient un terme englobant), on **nominalise** (« parce que les villes se développent » → « en raison de l’urbanisation »), et on conserve les **connecteurs logiques** qui rendent visible le raisonnement.",
        ],
        keyPoints: [
          "Réduire le texte (souvent **au quart**) en gardant thèse, arguments et logique.",
          "Respecter l’**énonciation** (garder le « je » de l’auteur) et l’**ordre** du texte.",
          "Aucun ajout personnel, aucune citation recopiée : **reformuler**.",
          "Respecter le **nombre de mots** (tolérance ±10 %) et l’indiquer.",
          "Techniques : supprimer le secondaire, **généraliser**, **nominaliser**, garder les **connecteurs**.",
        ],
        formulas: [
          "Texte de 800 mots → contraction d’environ 200 mots (de 180 à 220 avec ±10 %).",
          "« l’homme » = 2 mots ; « c’est-à-dire » = 4 mots.",
        ],
        example: {
          title: "Réduire une phrase par généralisation et nominalisation",
          steps: [
            "Phrase d’origine : « Les gens prennent leur voiture pour aller au travail, pour faire leurs courses, pour conduire leurs enfants à l’école, et cela pollue énormément nos villes. » (26 mots)",
            "Repérer l’idée essentielle : l’usage quotidien de la voiture pollue les villes.",
            "Généraliser l’énumération : « travail, courses, école » → « les déplacements quotidiens ».",
            "Nominaliser et condenser : « Les déplacements quotidiens en voiture polluent fortement nos villes. » (9 mots)",
            "Vérifier la fidélité : le « nos » de l’auteur est conservé, aucune idée n’est ajoutée.",
          ],
        },
      },
      {
        title: "Mener la contraction pas à pas",
        body: [
          "**Étape 1 : lire et comprendre.** On lit plusieurs fois le texte, on identifie le thème, la thèse, la thèse éventuellement réfutée, la situation d’énonciation (qui parle, à qui, sur quel ton). On cherche le sens des mots difficiles dans le contexte.",
          "**Étape 2 : dégager la structure.** On découpe le texte en **mouvements** (ensembles de paragraphes qui développent une même idée) et on résume chaque mouvement en une phrase. On repère les connecteurs logiques et on distingue les arguments essentiels des exemples et des développements secondaires. On calcule la longueur à attribuer à chaque mouvement, proportionnellement à son importance dans le texte.",
          "**Étape 3 : rédiger.** On rédige un texte **suivi**, en paragraphes correspondant aux mouvements, avec des connecteurs logiques. On reformule avec un vocabulaire précis. On ne conserve un exemple que s’il est essentiel au raisonnement, et alors sous une forme très brève.",
          "**Étape 4 : vérifier.** On compte les mots (par lignes, puis on ajuste), on relit en comparant avec le texte d’origine : la thèse est-elle claire ? l’ordre est-il respecté ? le « je » est-il conservé ? aucune phrase n’a-t-elle été recopiée ? On indique enfin le nombre de mots en fin de copie.",
        ],
        keyPoints: [
          "1. **Comprendre** : thème, thèse, énonciation.",
          "2. **Structurer** : mouvements, arguments essentiels, connecteurs.",
          "3. **Rédiger** : texte suivi, reformulé, proportionné.",
          "4. **Vérifier** : nombre de mots, fidélité, énonciation, ordre.",
        ],
        example: {
          title: "Contracter un paragraphe argumentatif",
          steps: [
            "Texte : « Je suis convaincu que la lecture reste indispensable. Certes, les vidéos nous informent vite. Mais lire oblige à imaginer, à ralentir, à réfléchir. Ainsi, mes élèves qui lisent beaucoup écrivent avec plus d’aisance. » (34 mots)",
            "Thèse : la lecture reste indispensable ; concession : les vidéos informent vite ; argument : la lecture développe imagination et réflexion ; exemple : les élèves lecteurs écrivent mieux.",
            "Objectif : environ un quart, soit 8 ou 9 mots ; à cette échelle, il faut garder la thèse, le « je » et l’argument central.",
            "Rédaction : « Je juge la lecture indispensable : elle développe la réflexion. » (9 mots)",
            "Vérification : énonciation conservée, thèse et argument restitués ; la concession et l’exemple, secondaires, sont supprimés pour tenir dans le nombre de mots (dans un texte plus long, la concession serait conservée).",
          ],
        },
      },
      {
        title: "L’essai : construire une réflexion argumentée",
        body: [
          "L’**essai** est une réponse argumentée et personnelle à une **question** liée au thème du texte contracté et à l’œuvre étudiée en classe. Il mobilise trois sources : les **lectures** (œuvres étudiées, lectures personnelles), la **culture** générale et l’**expérience**. Il ne s’agit pas de raconter sa vie, mais de **démontrer** une position nuancée à l’aide d’arguments et d’exemples précis.",
          "La première étape est l’**analyse du sujet**. On définit chaque mot-clé, on repère le type de question (fermée : « Faut-il… ? », « Peut-on… ? » ; ouverte : « Comment… ? », « Pourquoi… ? »), on reformule la question pour en dégager l’**enjeu**. Par exemple : « La lecture peut-elle changer notre vision du monde ? » invite à définir « lecture » (romans, essais, presse ?), « changer » (bouleverser, nuancer ?) et « vision du monde » (opinions, sensibilité ?).",
          "On construit ensuite un **plan**. Pour une question fermée, le plan **dialectique** (I. Oui… II. Mais… III. Dépassement) ou le plan en deux parties (« certes… mais… ») est adapté ; pour une question ouverte, le plan **thématique** ou **analytique** (causes, manifestations, conséquences) convient mieux. Chaque partie contient deux ou trois **paragraphes argumentatifs** : un argument formulé clairement, expliqué, puis illustré par un **exemple précis** (titre d’œuvre, auteur, situation), et une phrase de conclusion partielle.",
          "La rédaction suit la structure classique : une **introduction** (amorce, présentation du sujet, problématique, annonce du plan), un **développement** organisé avec des transitions, et une **conclusion** (réponse claire et nuancée à la question, ouverture). Le registre est soutenu, les connecteurs logiques nombreux, et l’on peut employer « je » avec mesure, puisque l’essai engage la réflexion personnelle.",
        ],
        keyPoints: [
          "Essai = réponse **personnelle et argumentée** à une question.",
          "Sources : **lectures**, **culture**, **expérience**.",
          "**Analyser le sujet** : mots-clés, type de question, enjeu.",
          "Plan **dialectique** (question fermée) ou **thématique / analytique** (question ouverte).",
          "Paragraphe : **argument** → explication → **exemple précis** → conclusion partielle.",
        ],
        formulas: [
          "Paragraphe argumentatif = argument + explication + exemple + mini-conclusion.",
          "Plan dialectique : thèse → antithèse → synthèse (dépassement).",
        ],
        example: {
          title: "Construire un paragraphe d’essai : « La lecture peut-elle changer notre vision du monde ? »",
          steps: [
            "Argument : « La lecture permet d’adopter le point de vue d’autrui. »",
            "Explication : « En partageant les pensées d’un personnage, le lecteur éprouve des situations qu’il n’a jamais vécues. »",
            "Exemple précis : « Dans Germinal, Zola fait découvrir au lecteur bourgeois du XIXe siècle la misère des mineurs du Nord. »",
            "Interprétation de l’exemple : « Le roman suscite ainsi indignation et compassion, et peut transformer le regard porté sur la condition ouvrière. »",
            "Mini-conclusion : « La lecture élargit donc notre expérience et peut modifier notre perception du réel. »",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-francais-08-ex-1",
        prompt: "Un texte de l’auteur est écrit à la première personne (« je »). Dans la contraction, il faut :",
        choices: [
          "écrire « L’auteur pense que… »",
          "passer à la troisième personne",
          "conserver le « je » de l’auteur",
          "utiliser « nous » systématiquement",
        ],
        answer: 2,
        explanation:
          "La contraction respecte l’**énonciation** du texte d’origine : on écrit comme si l’on était l’auteur, en conservant le « je ». Les formules du type « L’auteur dit que… » sont proscrites.",
      },
      {
        id: "2nde-francais-08-ex-2",
        prompt: "Un texte de 800 mots doit être contracté au quart. Quelle longueur viser ?",
        choices: ["environ 400 mots", "environ 200 mots", "environ 100 mots", "environ 80 mots"],
        answer: 1,
        explanation:
          "800 ÷ 4 = **200 mots**. Avec la tolérance habituelle de ±10 %, la contraction doit compter entre 180 et 220 mots.",
      },
      {
        id: "2nde-francais-08-ex-3",
        prompt: "Dans une contraction, peut-on ajouter son avis personnel sur la thèse ?",
        choices: [
          "Non, la contraction restitue fidèlement le texte sans aucun ajout",
          "Oui, en conclusion seulement",
          "Oui, si on le signale entre parenthèses",
        ],
        answer: 0,
        explanation:
          "La contraction est un exercice de **fidélité** : aucune opinion personnelle ni information extérieure. L’avis personnel trouve sa place dans l’**essai**, qui suit.",
      },
      {
        id: "2nde-francais-08-ex-4",
        prompt: "Combien de mots compte « l’homme » selon les règles de comptage ?",
        choices: ["1", "3", "0", "2"],
        answer: 3,
        explanation:
          "L’apostrophe sépare deux mots : « l’ » et « homme ». On compte donc **2 mots**.",
      },
      {
        id: "2nde-francais-08-ex-5",
        prompt: "Pour un sujet d’essai formulé comme une question fermée (« Faut-il… ? »), quel plan est souvent adapté ?",
        choices: ["Un plan linéaire", "Un plan chronologique", "Un plan dialectique", "Aucun plan"],
        answer: 2,
        explanation:
          "Une question fermée appelle l’examen du pour et du contre : le **plan dialectique** (thèse, antithèse, dépassement) ou un plan en deux temps « certes… mais… » permet une réponse nuancée.",
      },
      {
        id: "2nde-francais-08-ex-6",
        prompt: "Dans un paragraphe d’essai, un bon exemple est :",
        choices: [
          "précis : une œuvre, un auteur, une situation identifiable",
          "vague : « dans beaucoup de livres… »",
          "une simple opinion",
          "une citation sans explication",
        ],
        answer: 0,
        explanation:
          "Un exemple doit être **précis et analysé** : titre de l’œuvre, auteur, situation précise, et explication de ce qu’il prouve. Un exemple vague n’a aucune valeur démonstrative.",
      },
    ],
    test: [
      {
        id: "2nde-francais-08-ct-1",
        prompt: "Quelle reformulation est une bonne nominalisation de « parce que les villes se développent rapidement » ?",
        choices: [
          "« parce que les villes deviennent grandes »",
          "« en raison de l’urbanisation rapide »",
          "« les villes se développent rapidement »",
          "« car les villes, en se développant, deviennent rapides »",
        ],
        answer: 1,
        explanation:
          "La **nominalisation** transforme une proposition verbale en groupe nominal : « les villes se développent » → « l’urbanisation ». La formule est plus courte et conserve le rapport de cause (« en raison de »).",
      },
      {
        id: "2nde-francais-08-ct-2",
        prompt: "Une contraction commence par « Dans ce texte, l’auteur explique que la lecture est indispensable. » Quel défaut présente-t-elle ?",
        choices: [
          "Aucun, c’est la formule attendue",
          "Elle est trop courte",
          "Elle utilise un connecteur logique",
          "Elle ne respecte pas l’énonciation : elle parle du texte au lieu de le reformuler à la place de l’auteur",
        ],
        answer: 3,
        explanation:
          "La contraction n’est pas un résumé commenté : on reformule **à la place de l’auteur**, en conservant son énonciation (« Je juge la lecture indispensable… »). Les formules « l’auteur explique que » sont à proscrire.",
      },
      {
        id: "2nde-francais-08-ct-3",
        prompt: "Pour une contraction de 200 mots (±10 %), quelle longueur est acceptable ?",
        choices: ["165 mots", "235 mots", "214 mots", "150 mots"],
        answer: 2,
        explanation:
          "La tolérance de ±10 % autour de 200 mots donne un intervalle de **180 à 220 mots**. Seul 214 respecte cette fourchette.",
      },
      {
        id: "2nde-francais-08-ct-4",
        prompt: "Que fait-on des exemples développés du texte d’origine lors de la contraction ?",
        choices: [
          "On les supprime ou on les réduit à quelques mots s’ils sont essentiels au raisonnement",
          "On les recopie intégralement",
          "On les remplace par ses propres exemples",
          "On les déplace à la fin",
        ],
        answer: 0,
        explanation:
          "Les exemples sont généralement **secondaires** par rapport aux arguments : on les supprime, ou on les conserve sous une forme très brève lorsqu’ils portent le raisonnement. On n’en ajoute jamais de nouveaux, et on respecte l’ordre du texte.",
      },
      {
        id: "2nde-francais-08-ct-5",
        prompt: "Pourquoi faut-il découper le texte en mouvements avant de contracter ?",
        choices: [
          "Pour pouvoir recopier les phrases les plus importantes",
          "Pour changer l’ordre des idées",
          "Pour ajouter une conclusion personnelle",
          "Pour restituer la structure logique et répartir la longueur selon l’importance de chaque partie",
        ],
        answer: 3,
        explanation:
          "Le découpage en **mouvements** fait apparaître la logique argumentative et permet de proportionner la contraction : un mouvement qui occupe la moitié du texte occupera environ la moitié de la contraction.",
      },
      {
        id: "2nde-francais-08-ct-6",
        prompt: "Sujet d’essai : « La lecture peut-elle changer notre vision du monde ? » Quelle première démarche est la plus pertinente ?",
        choices: [
          "Raconter immédiatement son livre préféré",
          "Définir les mots-clés (lecture, changer, vision du monde) et dégager l’enjeu de la question",
          "Recopier le texte contracté",
          "Répondre « oui » en une phrase",
        ],
        answer: 1,
        explanation:
          "L’**analyse du sujet** est indispensable : définir les termes évite le hors-sujet et fait apparaître les nuances (quels types de lecture ? quels changements ?), à partir desquelles on construit la problématique et le plan.",
      },
      {
        id: "2nde-francais-08-ct-7",
        prompt: "Quel paragraphe d’essai est le mieux construit ?",
        choices: [
          "La lecture, c’est bien. Moi j’aime lire. Tout le monde devrait lire.",
          "Dans Germinal. Zola. Les mineurs.",
          "La lecture fait partager le point de vue d’autrui : dans Germinal, Zola fait éprouver au lecteur la misère des mineurs, ce qui peut susciter indignation et compassion. Lire élargit donc notre regard sur le monde.",
          "Il y a beaucoup de livres qui changent la vision du monde, comme beaucoup de romans.",
        ],
        answer: 2,
        explanation:
          "Le troisième paragraphe suit la démarche attendue : **argument** clair, **exemple précis** (œuvre et auteur) **expliqué**, puis **conclusion partielle**. Les autres sont des opinions non justifiées, des notes sans phrase ou un exemple vague.",
      },
      {
        id: "2nde-francais-08-ct-8",
        prompt: "Quelle différence essentielle sépare la contraction de l’essai ?",
        choices: [
          "La contraction est fidèle au texte sans ajout personnel ; l’essai développe une réflexion personnelle argumentée",
          "La contraction est plus longue que l’essai",
          "L’essai doit recopier le texte d’origine",
          "Il n’y a aucune différence",
        ],
        answer: 0,
        explanation:
          "La **contraction** reformule fidèlement la pensée d’un autre, sans aucun ajout ; l’**essai** construit une réponse personnelle, nourrie de lectures, de culture et d’expérience, à une question liée au même thème.",
      },
    ],
  },
];

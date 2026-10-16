import type { Chapter } from "../../types";

export const chapters: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. LA POÉSIE DU XIXe AU XXIe SIÈCLE
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-francais-01",
    title: "La poésie du XIXe au XXIe siècle",
    summary:
      "Du romantisme au poème en prose, la poésie moderne se libère peu à peu des règles classiques pour explorer le moi, la beauté formelle, le mystère du monde et les pouvoirs du langage.",
    objectives: [
      "Je sais situer et caractériser le romantisme, le Parnasse, le symbolisme et le surréalisme.",
      "Je sais analyser un vers : mètre, césure, rimes, enjambement, rejet.",
      "Je sais reconnaître les principales formes poétiques : sonnet, vers libre, poème en prose.",
      "Je sais relier une image poétique (métaphore, comparaison, correspondance) à un effet de sens.",
    ],
    sections: [
      {
        title: "Les grands mouvements poétiques du XIXe siècle",
        body: [
          "Le **romantisme** domine la première moitié du XIXe siècle. En poésie, il s’ouvre avec les **Méditations poétiques** de **Lamartine** (1820) et culmine avec **Victor Hugo** (Les Contemplations, 1856). Le poète romantique exprime son **moi**, ses émotions, sa mélancolie (le « mal du siècle »), et dialogue avec la **nature**, confidente et miroir de l’âme. Le thème de la **fuite du temps** y est central : « Ô temps ! suspends ton vol » (Lamartine, « Le Lac »). Le poète se veut aussi un guide pour l’humanité, un « mage » engagé dans son siècle, comme Hugo exilé sous le Second Empire.",
          "Le **Parnasse**, au milieu du siècle, réagit contre les épanchements lyriques. **Théophile Gautier** (Émaux et Camées, 1852), **Leconte de Lisle** (Poèmes antiques, 1852) et **José-Maria de Heredia** (Les Trophées, 1893) défendent **l’art pour l’art** : la poésie n’a pas à être utile ni à confier des sentiments, elle doit atteindre la **beauté parfaite** par une forme travaillée comme une sculpture. Gautier l’affirme dès la préface de Mademoiselle de Maupin (1835) : « Il n’y a de vraiment beau que ce qui ne peut servir à rien ».",
          "**Baudelaire** (Les Fleurs du mal, 1857) se tient au carrefour : héritier du romantisme et proche du Parnasse par l’exigence formelle, il ouvre la voie au **symbolisme**. Pour lui, le monde visible est un ensemble de signes qui renvoient à une réalité cachée : c’est la théorie des **correspondances** (« La Nature est un temple où de vivants piliers / Laissent parfois sortir de confuses paroles »). Il tire aussi la beauté du laid et du quotidien urbain, déchiré entre le **spleen** et l’**idéal**.",
          "Le **symbolisme** (fin du XIXe siècle) prolonge cette quête : **Verlaine**, **Rimbaud** et **Mallarmé** cherchent à **suggérer** plutôt qu’à décrire, par la musique du vers et le pouvoir des images. Verlaine ouvre son « Art poétique » par « De la musique avant toute chose ». Rimbaud, dans sa lettre dite « du Voyant » (1871), veut que le poète se fasse « voyant par un long, immense et raisonné dérèglement de tous les sens ».",
        ],
        keyPoints: [
          "**Romantisme** (1820-1850 env.) : lyrisme, moi, nature, fuite du temps, poète mage (Lamartine, Hugo, Musset, Vigny).",
          "**Parnasse** (1850-1870 env.) : art pour l’art, impersonnalité, perfection formelle (Gautier, Leconte de Lisle, Heredia).",
          "**Baudelaire** : spleen et idéal, correspondances, beauté moderne, poème en prose.",
          "**Symbolisme** (1870-1900 env.) : suggestion, musique, mystère (Verlaine, Rimbaud, Mallarmé).",
        ],
        example: {
          title: "Situer un extrait : « L’Albatros » de Baudelaire",
          steps: [
            "Recueil et date : Les Fleurs du mal, 1857 (le poème est ajouté dans l’édition de 1861).",
            "Thème : l’oiseau majestueux dans le ciel devient ridicule et maladroit une fois capturé par les marins.",
            "Image clé : la comparaison finale « Le Poète est semblable au prince des nuées ».",
            "Sens : le poète, supérieur dans le monde de l’idéal, est moqué par la société ; « Ses ailes de géant l’empêchent de marcher ».",
            "Conclusion : on reconnaît l’héritage romantique (poète incompris) et la tension baudelairienne entre idéal et réalité.",
          ],
        },
      },
      {
        title: "Analyser la forme poétique : vers, rythme, sonorités",
        body: [
          "Le vers français se mesure en **syllabes**. On compte le **e muet** (ou « e caduc ») quand il est suivi d’une consonne, mais on ne le compte pas devant une voyelle (élision) ni en fin de vers. On distingue la **diérèse** (on prononce en deux syllabes deux voyelles voisines : « na-ti-on ») et la **synérèse** (on les fusionne). Les mètres principaux sont l’**alexandrin** (12 syllabes), le **décasyllabe** (10) et l’**octosyllabe** (8).",
          "L’alexandrin classique est coupé en deux **hémistiches** de 6 syllabes par la **césure**. Quand la phrase déborde sur le vers suivant, on parle d’**enjambement** ; si un mot court est mis en relief au début du vers suivant, c’est un **rejet** ; si un mot court est placé à la fin du vers précédent, c’est un **contre-rejet**. Les romantiques, puis Verlaine et Rimbaud, assouplissent ces règles (alexandrin « disloqué » en trois mesures, vers impairs).",
          "Les **rimes** se décrivent par leur disposition (**plates** AABB, **croisées** ABAB, **embrassées** ABBA), leur richesse (pauvre : 1 son commun ; suffisante : 2 ; riche : 3 ou plus) et leur genre (féminine si elle finit par un e muet, masculine sinon). À l’intérieur des vers, l’**allitération** (répétition de consonnes) et l’**assonance** (répétition de voyelles) créent une musique : « Les sanglots longs / Des violons / De l’automne » (Verlaine) joue sur les nasales pour imiter une plainte.",
          "La poésie se libère progressivement : **vers libre** (sans mètre ni rime fixes) chez les symbolistes puis chez **Apollinaire**, qui supprime aussi la ponctuation dans Alcools (1913). Le **sonnet**, forme fixe héritée de la Renaissance (deux quatrains et deux tercets, 14 vers), reste pourtant très pratiqué par Baudelaire, Verlaine, Rimbaud ou Heredia : la **chute** du dernier vers y produit souvent un effet de surprise.",
        ],
        keyPoints: [
          "Alexandrin = 12 syllabes, césure à l’hémistiche (6/6).",
          "Enjambement : la phrase déborde ; rejet : mot court rejeté au vers suivant ; contre-rejet : mot court placé en fin de vers.",
          "Sonnet = 2 quatrains + 2 tercets ; la chute finale est un lieu stratégique.",
          "Toute remarque formelle doit être reliée à un **effet de sens**.",
        ],
        formulas: [
          "e muet + consonne → compté ; e muet + voyelle → élidé ; e muet en fin de vers → non compté",
          "Rimes plates AABB · croisées ABAB · embrassées ABBA",
          "Rime pauvre (1 son) · suffisante (2 sons) · riche (3 sons ou plus)",
        ],
        example: {
          title: "Scander un alexandrin de Lamartine",
          steps: [
            "Vers : « Ô temps ! suspends ton vol, et vous, heures propices ! »",
            "Découpage : Ô / temps / sus / pends / ton / vol // et / vous / heu / res / pro / pi(ces) → 12 syllabes.",
            "Le e de « heures » est compté car il est suivi d’une consonne (« propices ») ; le e final de « propices » ne l’est pas.",
            "La césure tombe après « vol » : le premier hémistiche est une supplique adressée au temps, le second aux heures.",
            "Effet : l’apostrophe et l’impératif traduisent l’élan lyrique du poète qui voudrait arrêter le temps du bonheur.",
          ],
        },
      },
      {
        title: "Du poème en prose au surréalisme : la poésie au XXe et au XXIe siècle",
        body: [
          "Le **poème en prose** naît au XIXe siècle : **Aloysius Bertrand** (Gaspard de la nuit, 1842, publié après sa mort) en est l’initiateur, et **Baudelaire** le consacre avec Le Spleen de Paris (Petits poèmes en prose, 1869, posthume). Il rêve d’« une prose poétique, musicale sans rythme et sans rime », capable de dire la vie moderne. Le poème en prose est bref, dense, souvent organisé en paragraphes comme des strophes, et repose sur le travail des images et des sonorités. Rimbaud (Illuminations) le pousse vers la vision.",
          "Au début du XXe siècle, **Guillaume Apollinaire** incarne l’« esprit nouveau » : Alcools (1913) mêle tradition et modernité (« À la fin tu es las de ce monde ancien », premier vers de « Zone »), et Calligrammes (1918) fait du poème un dessin. Le **surréalisme**, fondé par **André Breton** avec le Manifeste du surréalisme (1924), veut libérer l’inconscient par l’**écriture automatique**, le rêve et le hasard. Il cultive l’**image** qui rapproche deux réalités éloignées, comme chez **Paul Éluard** (« La terre est bleue comme une orange »).",
          "Après 1945, la poésie se diversifie : **poésie engagée** issue de la Résistance, **poésie des objets** de **Francis Ponge** qui décrit minutieusement les choses du quotidien, exploration intérieure chez **Henri Michaux**, travail sur la langue elle-même. Aux XXe et XXIe siècles, la poésie s’ouvre à la performance, au slam, à la chanson et aux formes visuelles, tout en restant un **travail sur le langage** qui renouvelle notre regard sur le monde.",
        ],
        keyPoints: [
          "Poème en prose : Bertrand (Gaspard de la nuit, 1842), Baudelaire (Le Spleen de Paris, 1869), Rimbaud (Illuminations).",
          "Apollinaire : modernité, suppression de la ponctuation (Alcools, 1913), calligrammes (1918).",
          "Surréalisme : Breton, Manifeste de 1924 ; inconscient, rêve, écriture automatique, image surprenante.",
          "Constante : la poésie est un travail sur le langage qui transforme la perception du réel.",
        ],
        example: {
          title: "Reconnaître un poème en prose",
          steps: [
            "Observer la mise en page : paragraphes en prose, pas de vers, mais un texte bref et autonome.",
            "Repérer un titre et une unité de sujet, souvent un instant ou un objet de la vie moderne.",
            "Chercher les procédés poétiques : images, répétitions, rythme ternaire, sonorités, chute.",
            "Vérifier l’effet produit : le texte suggère une émotion ou une vision plus qu’il ne raconte une histoire.",
            "Conclure : la poésie ne se définit pas par le vers, mais par le travail du langage et de l’image.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-francais-01-ex-1",
        prompt: "Combien de syllabes compte un **alexandrin** ?",
        choices: ["10", "8", "12", "14"],
        answer: 2,
        explanation:
          "L’alexandrin est le vers de **12 syllabes**, divisé en deux hémistiches de 6 syllabes par la césure. Le décasyllabe en compte 10 et l’octosyllabe 8 ; 14 est le nombre de vers d’un sonnet, pas de syllabes.",
      },
      {
        id: "1re-francais-01-ex-2",
        prompt: "Quel mouvement défend la doctrine de **l’art pour l’art** ?",
        choices: ["Le Parnasse", "Le romantisme", "Le surréalisme", "Le classicisme"],
        answer: 0,
        explanation:
          "Le **Parnasse** (Gautier, Leconte de Lisle, Heredia) refuse que l’art soit utile ou serve à confier des sentiments : seule compte la beauté formelle. Le romantisme, au contraire, valorise l’expression du moi et l’engagement du poète.",
      },
      {
        id: "1re-francais-01-ex-3",
        prompt: "Dans un sonnet, comment les 14 vers sont-ils organisés ?",
        choices: [
          "Trois quatrains et un distique",
          "Deux tercets puis deux quatrains",
          "Quatre strophes de longueur libre",
          "Deux quatrains puis deux tercets",
        ],
        answer: 3,
        explanation:
          "Le sonnet régulier, venu d’Italie et acclimaté en France à la Renaissance, se compose de **deux quatrains suivis de deux tercets**. La formule « trois quatrains et un distique » correspond au sonnet anglais (shakespearien).",
      },
      {
        id: "1re-francais-01-ex-4",
        prompt: "Qui a publié **Les Fleurs du mal** en 1857 ?",
        choices: ["Victor Hugo", "Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud"],
        answer: 1,
        explanation:
          "**Les Fleurs du mal** est le recueil de **Baudelaire** (1857), condamné pour « outrage à la morale publique » la même année. Hugo publie Les Contemplations en 1856 ; Verlaine et Rimbaud appartiennent à la génération suivante.",
      },
      {
        id: "1re-francais-01-ex-5",
        prompt:
          "Une phrase commence dans un vers et se prolonge dans le vers suivant sans pause marquée. Comment s’appelle ce procédé ?",
        choices: ["Une césure", "Une diérèse", "Un enjambement", "Une anaphore"],
        answer: 2,
        explanation:
          "C’est un **enjambement** : la syntaxe déborde la limite du vers. La césure est une coupe à l’intérieur du vers, la diérèse une prononciation en deux syllabes de deux voyelles voisines, l’anaphore la reprise d’un mot en tête de vers ou de phrase.",
      },
      {
        id: "1re-francais-01-ex-6",
        prompt: "Quel poète est considéré comme l’initiateur du **poème en prose** avec Gaspard de la nuit ?",
        choices: ["Guillaume Apollinaire", "Stéphane Mallarmé", "Alphonse de Lamartine", "Aloysius Bertrand"],
        answer: 3,
        explanation:
          "**Aloysius Bertrand** écrit Gaspard de la nuit, publié en 1842 après sa mort. Baudelaire reconnaît sa dette envers lui dans la dédicace du Spleen de Paris, qui consacre le genre.",
      },
    ],
    test: [
      {
        id: "1re-francais-01-ct-1",
        prompt:
          "Dans le vers « La Nature est un temple où de vivants piliers », quelle notion baudelairienne est illustrée ?",
        choices: [
          "L’art pour l’art",
          "L’écriture automatique",
          "Les correspondances",
          "Le mal du siècle",
        ],
        answer: 2,
        explanation:
          "Ce vers ouvre le sonnet « **Correspondances** » (Les Fleurs du mal). Le monde visible y est un ensemble de signes qui renvoient à une réalité spirituelle, et les sensations se répondent entre elles. Cette idée annonce le symbolisme.",
      },
      {
        id: "1re-francais-01-ct-2",
        prompt:
          "Combien de syllabes compte le vers « Ses ailes de géant l’empêchent de marcher » ?",
        choices: ["12", "11", "13", "10"],
        answer: 0,
        explanation:
          "Ses / ai / les / de / gé / ant // l’em / pê / chent / de / mar / cher = **12 syllabes**. Le e de « ailes » est compté car il est suivi d’une consonne (« de »), de même que celui de « empêchent » ; la diérèse « gé-ant » est obligatoire ici.",
      },
      {
        id: "1re-francais-01-ct-3",
        prompt: "Laquelle de ces affirmations sur le **symbolisme** est exacte ?",
        choices: [
          "Il cherche à décrire le réel avec une précision scientifique.",
          "Il privilégie la suggestion, la musique et le mystère.",
          "Il est fondé par le Manifeste de 1924.",
          "Il impose le retour strict à l’alexandrin classique.",
        ],
        answer: 1,
        explanation:
          "Le symbolisme (Verlaine, Rimbaud, Mallarmé) veut **suggérer** plutôt que nommer, par la musique du vers et les images. Le Manifeste de 1924 est celui du surréalisme ; la description scientifique relève plutôt du naturalisme ; les symbolistes assouplissent la versification.",
      },
      {
        id: "1re-francais-01-ct-4",
        prompt:
          "Dans le schéma de rimes ABBA, comment qualifie-t-on la disposition ?",
        choices: ["Rimes plates", "Rimes croisées", "Rimes alternées", "Rimes embrassées"],
        answer: 3,
        explanation:
          "ABBA = **rimes embrassées** : les rimes B sont « embrassées » par les rimes A. AABB correspond aux rimes plates (ou suivies), ABAB aux rimes croisées (parfois dites alternées).",
      },
      {
        id: "1re-francais-01-ct-5",
        prompt:
          "Rimbaud écrit que le poète doit se faire « voyant par un long, immense et raisonné dérèglement de tous les sens ». Que signifie cette formule ?",
        choices: [
          "Le poète doit refuser toute émotion pour viser la perfection formelle.",
          "Le poète doit imiter fidèlement la nature.",
          "Le poète doit explorer volontairement des perceptions nouvelles pour atteindre l’inconnu.",
          "Le poète doit renoncer à écrire en vers.",
        ],
        answer: 2,
        explanation:
          "Dans la lettre « du Voyant » (1871), Rimbaud veut un poète qui bouleverse **méthodiquement** (« raisonné ») ses perceptions pour accéder à l’inconnu et inventer une langue nouvelle. Le refus de l’émotion au profit de la forme correspond au Parnasse.",
      },
      {
        id: "1re-francais-01-ct-6",
        prompt:
          "« Les sanglots longs / Des violons / De l’automne » (Verlaine). Quel procédé sonore domine et quel est son effet ?",
        choices: [
          "Une assonance en nasales qui imite une plainte prolongée",
          "Une allitération en [r] qui suggère la violence",
          "Une rime riche qui souligne la joie",
          "Une diérèse qui ralentit le rythme pour l’ironie",
        ],
        answer: 0,
        explanation:
          "Les sons nasals [ɔ̃] et [ɑ̃] (« sanglots », « longs », « violons ») se répètent : c’est une **assonance**. Leur résonance prolongée imite la plainte des violons et traduit la mélancolie, conformément au programme de Verlaine : « De la musique avant toute chose ».",
      },
      {
        id: "1re-francais-01-ct-7",
        prompt: "Quel élément caractérise d’abord l’**image surréaliste** ?",
        choices: [
          "Elle illustre une leçon morale explicite.",
          "Elle respecte la vraisemblance pour convaincre.",
          "Elle décrit un objet avec minutie, sans métaphore.",
          "Elle rapproche deux réalités éloignées pour provoquer la surprise.",
        ],
        answer: 3,
        explanation:
          "Les surréalistes recherchent l’image qui unit des réalités **éloignées** et crée un choc, comme « La terre est bleue comme une orange » d’Éluard. Elle naît souvent du rêve ou de l’écriture automatique, loin de toute vraisemblance ou intention morale.",
      },
      {
        id: "1re-francais-01-ct-8",
        prompt:
          "Pourquoi peut-on dire que le poème en prose prouve que la poésie ne se réduit pas au vers ?",
        choices: [
          "Parce qu’il est toujours plus long qu’un sonnet.",
          "Parce que la poésie y repose sur les images, le rythme et les sonorités, sans mètre ni rime.",
          "Parce qu’il est réservé aux récits d’aventures.",
          "Parce qu’il a été inventé par les surréalistes.",
        ],
        answer: 1,
        explanation:
          "Le poème en prose (Bertrand, Baudelaire, Rimbaud) conserve la **densité**, les **images**, le **rythme** et la musique de la poésie sans recourir au vers. Il est généralement bref, n’est pas lié au récit d’aventures et existe bien avant le surréalisme (XIXe siècle).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. LA LITTÉRATURE D’IDÉES DU XVIe AU XVIIIe SIÈCLE
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-francais-02",
    title: "La littérature d’idées du XVIe au XVIIIe siècle",
    summary:
      "De l’humanisme aux Lumières, les écrivains argumentent pour réfléchir sur l’homme, critiquer la société et défendre la raison, la tolérance et la liberté, en choisissant des formes directes ou indirectes.",
    objectives: [
      "Je sais présenter l’humanisme, les moralistes du XVIIe siècle et les Lumières avec leurs principaux auteurs.",
      "Je sais distinguer argumentation directe (essai, traité, discours) et indirecte (fable, conte, apologue).",
      "Je sais identifier une thèse, des arguments, des exemples et les registres de l’argumentation.",
      "Je sais analyser l’ironie et en expliquer l’effet critique.",
    ],
    sections: [
      {
        title: "Trois moments de la pensée : humanisme, moralistes, Lumières",
        body: [
          "L’**humanisme** (XVIe siècle) place l’homme au centre de la réflexion. Grâce à l’imprimerie et à la redécouverte des textes antiques, les humanistes croient en l’éducation et en la capacité de l’homme à se perfectionner. **Rabelais** (Pantagruel, 1532 ; Gargantua, 1534) propose une pédagogie complète et met dans la bouche de Gargantua la célèbre formule : « science sans conscience n’est que ruine de l’âme ». **Montaigne**, dans ses Essais (1580-1595), s’analyse lui-même pour comprendre l’homme en général : « je suis moi-même la matière de mon livre », et adopte une attitude de doute résumée par sa devise « Que sais-je ? ».",
          "Au XVIIe siècle, les **moralistes** observent les comportements humains avec lucidité, souvent avec pessimisme. **La Rochefoucauld** (Maximes, 1665) démasque l’amour-propre : « Nos vertus ne sont, le plus souvent, que des vices déguisés ». **La Bruyère** (Les Caractères, 1688) peint des types sociaux sous forme de portraits. **Pascal** (Pensées, publiées en 1670) médite sur la misère et la grandeur de l’homme : « L’homme n’est qu’un roseau, le plus faible de la nature ; mais c’est un roseau pensant ». **La Fontaine** (Fables, à partir de 1668) instruit en divertissant.",
          "Les **Lumières** (XVIIIe siècle) veulent éclairer les esprits par la **raison** et combattre l’obscurantisme, le fanatisme, l’arbitraire et l’esclavage. **Montesquieu** (Lettres persanes, 1721 ; De l’esprit des lois, 1748), **Voltaire** (Candide, 1759 ; Traité sur la tolérance, 1763), **Diderot** et **d’Alembert** (l’Encyclopédie, 1751-1772) et **Rousseau** (Du contrat social, 1762) défendent la tolérance, la liberté et le progrès. Rousseau ouvre ainsi son traité : « L’homme est né libre, et partout il est dans les fers ».",
          "Ces combats se prolongent jusqu’à la Révolution : en 1791, **Olympe de Gouges** publie la Déclaration des droits de la femme et de la citoyenne, qui réclame pour les femmes les droits proclamés en 1789. La littérature d’idées est donc toujours liée à un **contexte** historique précis, qu’il faut connaître pour comprendre la cible d’un texte.",
        ],
        keyPoints: [
          "**Humanisme** (XVIe) : confiance en l’homme, éducation, retour aux Anciens (Rabelais, Montaigne, Du Bellay).",
          "**Moralistes** (XVIIe) : observation lucide de la nature humaine (La Rochefoucauld, La Bruyère, Pascal, La Fontaine).",
          "**Lumières** (XVIIIe) : raison, tolérance, liberté, critique des abus (Montesquieu, Voltaire, Diderot, Rousseau).",
        ],
        example: {
          title: "Rattacher une citation à son auteur et à son époque",
          steps: [
            "Citation : « Il faut cultiver notre jardin. »",
            "Auteur et œuvre : Voltaire, dernière phrase de Candide (1759).",
            "Contexte : conte philosophique des Lumières qui critique l’optimisme de Leibniz, caricaturé à travers Pangloss.",
            "Sens : plutôt que de spéculer, l’homme doit agir concrètement, travailler et améliorer le monde à sa mesure.",
            "Usage en dissertation : exemple d’une argumentation indirecte qui aboutit à une leçon claire.",
          ],
        },
      },
      {
        title: "Les genres de l’argumentation : convaincre et persuader",
        body: [
          "L’argumentation **directe** expose explicitement une thèse : c’est le cas de l’**essai** (réflexion personnelle et libre, comme les Essais de Montaigne), du **traité** (exposé méthodique, comme le Traité sur la tolérance), du **discours**, de la **lettre ouverte**, du **dialogue** philosophique ou de l’article d’**encyclopédie**. Le lecteur sait d’emblée qu’on cherche à le faire adhérer à une idée.",
          "L’argumentation **indirecte** passe par un récit ou une fiction : c’est l’**apologue**, court récit qui illustre une leçon. Il prend la forme de la **fable** (La Fontaine), du **conte philosophique** (Voltaire), de l’**utopie** (l’abbaye de Thélème chez Rabelais, l’Eldorado dans Candide) ou du regard **étranger** (les Persans de Montesquieu découvrant Paris). Le plaisir du récit rend la critique plus efficace et permet parfois d’échapper à la censure.",
          "On distingue **convaincre**, qui s’adresse à la raison par des arguments logiques et des exemples, et **persuader**, qui s’adresse aux émotions par les registres (pathétique, polémique, ironique, satirique), les apostrophes, les questions rhétoriques. Un texte efficace combine souvent les deux.",
          "Pour analyser une argumentation, on repère la **thèse** défendue, la **thèse adverse** éventuellement réfutée, les **arguments** (idées générales qui justifient), les **exemples** (faits concrets qui illustrent) et les **connecteurs logiques** qui organisent le raisonnement (car, donc, pourtant, en effet, ainsi).",
        ],
        keyPoints: [
          "Argumentation directe : essai, traité, discours, lettre, dialogue, article.",
          "Argumentation indirecte : apologue (fable, conte philosophique, utopie, regard étranger).",
          "Convaincre = raison ; persuader = émotions.",
          "Thèse ≠ argument ≠ exemple : l’argument justifie, l’exemple illustre.",
        ],
        formulas: [
          "Thèse → arguments → exemples → conclusion",
          "Cause : car, parce que, puisque · Conséquence : donc, ainsi, c’est pourquoi",
          "Opposition / concession : mais, pourtant, cependant, certes… mais, bien que",
        ],
        example: {
          title: "Analyser une fable de La Fontaine comme argumentation",
          steps: [
            "Texte : « Le Loup et l’Agneau » (Fables, livre I, 1668).",
            "Morale placée en tête : « La raison du plus fort est toujours la meilleure ».",
            "Récit : le loup accumule de faux prétextes que l’agneau réfute un à un avec logique.",
            "Dénouement : le loup emporte et mange l’agneau « sans autre forme de procès ».",
            "Leçon : le récit montre que la force l’emporte sur le droit ; la morale est ironique et constate une injustice au lieu de l’approuver.",
          ],
        },
      },
      {
        title: "L’ironie et les stratégies critiques",
        body: [
          "L’**ironie** consiste à dire le contraire de ce que l’on pense en laissant au lecteur les indices pour comprendre le vrai sens : exagération, éloge absurde, contradiction, faux naturel. Elle fait du lecteur un complice et ridiculise l’adversaire. C’est l’arme favorite des Lumières.",
          "Montesquieu, dans « De l’esclavage des nègres » (De l’esprit des lois, 1748), feint de défendre l’esclavage avec des arguments si absurdes qu’ils se retournent contre ceux qui les tiennent : « Ceux dont il s’agit sont noirs depuis les pieds jusqu’à la tête ; et ils ont le nez si écrasé qu’il est presque impossible de les plaindre. » L’absurdité du raisonnement condamne l’esclavagisme.",
          "Voltaire pratique une ironie constante dans Candide : le **naïf** voyageur constate les horreurs du monde (guerre, Inquisition, esclavage) tandis que son maître Pangloss répète que « tout est au mieux ». Face à l’esclave du Surinam mutilé, la critique devient directe et pathétique : « C’est à ce prix que vous mangez du sucre en Europe. » Le **regard faussement naïf** et le **décalage** entre le ton et les faits sont les deux grands ressorts de l’ironie voltairienne.",
          "D’autres stratégies servent la critique : la **satire** (moquerie d’un groupe ou d’une institution), le **portrait** à charge (La Bruyère), l’**antiphrase**, le **paradoxe**, la **réduction à l’absurde**. Dans un commentaire, il faut toujours expliquer **qui** est visé et **pourquoi** l’auteur choisit le détour.",
        ],
        keyPoints: [
          "Ironie = dire le contraire de ce qu’on pense en donnant les indices du vrai sens.",
          "Antiphrase : employer un mot dans le sens contraire (« Quel beau temps ! » sous la pluie).",
          "Les Lumières utilisent l’ironie pour contourner la censure et rendre le lecteur complice.",
        ],
        example: {
          title: "Démontrer l’ironie dans une phrase de Montesquieu",
          steps: [
            "Phrase : « il est presque impossible de les plaindre » parce qu’ils ont le nez écrasé.",
            "Repérer le connecteur implicite de cause : un trait physique justifierait l’absence de pitié.",
            "Constater l’absurdité : l’apparence ne peut fonder un jugement moral.",
            "Conclure à l’antiphrase : le locuteur fictif est ridiculisé, Montesquieu pense l’inverse.",
            "Effet : le lecteur, en riant de l’argument, rejette l’esclavage par lui-même.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-francais-02-ex-1",
        prompt: "Quel auteur a écrit les **Essais** ?",
        choices: ["Rabelais", "Pascal", "Voltaire", "Montaigne"],
        answer: 3,
        explanation:
          "Les **Essais** sont l’œuvre de **Montaigne** (publiés de 1580 à 1595). Il y pratique l’examen de soi pour comprendre l’homme : « je suis moi-même la matière de mon livre ». Rabelais est l’auteur de Pantagruel et Gargantua, Pascal des Pensées, Voltaire de Candide.",
      },
      {
        id: "1re-francais-02-ex-2",
        prompt: "Qu’est-ce qu’un **apologue** ?",
        choices: [
          "Un court récit qui illustre une leçon morale ou philosophique",
          "Un discours prononcé devant une assemblée",
          "Un éloge funèbre en vers",
          "Un article d’encyclopédie",
        ],
        answer: 0,
        explanation:
          "L’**apologue** est un récit bref à visée argumentative : fable, conte philosophique, utopie. Il relève de l’argumentation **indirecte**, car la thèse passe par la fiction.",
      },
      {
        id: "1re-francais-02-ex-3",
        prompt: "Quel siècle est celui des **Lumières** ?",
        choices: ["Le XVIe siècle", "Le XVIIe siècle", "Le XVIIIe siècle", "Le XIXe siècle"],
        answer: 2,
        explanation:
          "Les Lumières correspondent au **XVIIIe siècle** (Montesquieu, Voltaire, Diderot, Rousseau). Le XVIe est le siècle de l’humanisme, le XVIIe celui du classicisme et des moralistes.",
      },
      {
        id: "1re-francais-02-ex-4",
        prompt: "Quelle est la différence entre **convaincre** et **persuader** ?",
        choices: [
          "Convaincre utilise toujours la fiction, persuader jamais.",
          "Convaincre fait appel à la raison, persuader fait appel aux émotions.",
          "Convaincre est réservé à l’oral, persuader à l’écrit.",
          "Il n’y a aucune différence.",
        ],
        answer: 1,
        explanation:
          "**Convaincre** consiste à faire adhérer par des arguments rationnels ; **persuader** consiste à toucher la sensibilité (pathétique, indignation, humour). Les deux peuvent se combiner, à l’écrit comme à l’oral, dans la fiction ou non.",
      },
      {
        id: "1re-francais-02-ex-5",
        prompt: "Qui a dirigé l’**Encyclopédie** avec d’Alembert ?",
        choices: ["Rousseau", "Montesquieu", "La Bruyère", "Diderot"],
        answer: 3,
        explanation:
          "**Diderot** a dirigé l’Encyclopédie (1751-1772), d’abord avec **d’Alembert**. Ce dictionnaire raisonné des sciences, des arts et des métiers diffuse l’esprit critique des Lumières.",
      },
      {
        id: "1re-francais-02-ex-6",
        prompt:
          "« Nos vertus ne sont, le plus souvent, que des vices déguisés. » À quel genre appartient cette phrase de La Rochefoucauld ?",
        choices: ["La maxime", "La fable", "Le conte philosophique", "Le traité"],
        answer: 0,
        explanation:
          "C’est une **maxime** : formule brève, générale et frappante, souvent au présent de vérité générale. Elle figure en épigraphe des Maximes (1665) et résume le pessimisme du moraliste sur l’amour-propre.",
      },
    ],
    test: [
      {
        id: "1re-francais-02-ct-1",
        prompt:
          "« science sans conscience n’est que ruine de l’âme ». Quelle idée humaniste cette phrase de Rabelais exprime-t-elle ?",
        choices: [
          "Le savoir doit être réservé aux religieux.",
          "La science est dangereuse et doit être abandonnée.",
          "Le savoir doit s’accompagner d’une exigence morale.",
          "L’âme est plus importante que le corps.",
        ],
        answer: 2,
        explanation:
          "Dans la lettre de Gargantua à Pantagruel (Pantagruel, 1532), le programme d’éducation encyclopédique s’achève sur cette réserve : la connaissance sans **conscience morale** mène à la perte. L’humanisme valorise le savoir, mais au service de l’homme.",
      },
      {
        id: "1re-francais-02-ct-2",
        prompt:
          "Dans Lettres persanes (1721), Montesquieu fait décrire la France par deux Persans. Quel est l’intérêt argumentatif de ce procédé ?",
        choices: [
          "Le regard étranger fait apparaître comme étranges et critiquables des usages que les Français jugent naturels.",
          "Il permet de célébrer la supériorité de la France sur la Perse.",
          "Il vise uniquement à divertir par l’exotisme, sans visée critique.",
          "Il sert à présenter une utopie parfaite située en Perse.",
        ],
        answer: 0,
        explanation:
          "Le **regard éloigné** (ou décentrement) provoque une distance critique : les Persans s’étonnent du roi, du pape, des modes, et le lecteur découvre l’absurdité de ses propres coutumes. L’exotisme est un moyen, la critique sociale et politique est le but.",
      },
      {
        id: "1re-francais-02-ct-3",
        prompt:
          "Dans un texte argumentatif, comment distinguer un **argument** d’un **exemple** ?",
        choices: [
          "L’argument est toujours placé après l’exemple.",
          "L’argument est une idée générale qui justifie la thèse ; l’exemple est un fait concret qui l’illustre.",
          "L’exemple est abstrait, l’argument est concret.",
          "L’argument est réservé à la thèse adverse.",
        ],
        answer: 1,
        explanation:
          "L’**argument** est une raison générale (« l’esclavage est contraire à l’humanité ») ; l’**exemple** est un cas précis qui l’appuie (l’esclave du Surinam dans Candide). L’ordre peut varier (démarche déductive ou inductive).",
      },
      {
        id: "1re-francais-02-ct-4",
        prompt:
          "« Ceux dont il s’agit sont noirs depuis les pieds jusqu’à la tête ; et ils ont le nez si écrasé qu’il est presque impossible de les plaindre. » Quel procédé Montesquieu emploie-t-il ?",
        choices: [
          "Le registre lyrique pour exprimer sa compassion",
          "Un argument d’autorité fondé sur la science",
          "L’éloge sincère des esclavagistes",
          "L’ironie, en prêtant aux esclavagistes un raisonnement absurde",
        ],
        answer: 3,
        explanation:
          "Montesquieu feint d’adopter le point de vue des esclavagistes : le lien de cause entre une apparence physique et l’absence de pitié est **absurde**. Cette **ironie** discrédite l’argumentaire et conduit le lecteur à condamner l’esclavage.",
      },
      {
        id: "1re-francais-02-ct-5",
        prompt:
          "Pascal écrit : « L’homme n’est qu’un roseau, le plus faible de la nature ; mais c’est un roseau pensant ». Quelle figure structure la phrase ?",
        choices: [
          "Une antithèse entre la faiblesse physique et la grandeur de la pensée",
          "Une hyperbole qui glorifie la force de l’homme",
          "Une litote qui atténue la misère humaine",
          "Une personnification de la nature",
        ],
        answer: 0,
        explanation:
          "La phrase repose sur l’**antithèse** soulignée par « mais » : l’homme est fragile (« le plus faible de la nature ») mais grand par la **pensée**. La métaphore du roseau sert cette opposition entre misère et grandeur, thème central des Pensées.",
      },
      {
        id: "1re-francais-02-ct-6",
        prompt:
          "Pourquoi les philosophes des Lumières recourent-ils souvent à des formes indirectes (contes, lettres fictives) ?",
        choices: [
          "Parce que l’essai n’existait pas encore au XVIIIe siècle.",
          "Parce que la fiction plaît à un large public et permet de contourner la censure.",
          "Parce que ces formes interdisent toute ironie.",
          "Parce qu’elles évitent d’avoir une thèse.",
        ],
        answer: 1,
        explanation:
          "Le récit **instruit en divertissant**, touche un public plus large et brouille la responsabilité de l’auteur face à la **censure** (Candide est publié anonymement). L’essai existe depuis Montaigne (XVIe), et ces formes portent bien une thèse, souvent par l’ironie.",
      },
      {
        id: "1re-francais-02-ct-7",
        prompt:
          "Quelle œuvre commence par « L’homme est né libre, et partout il est dans les fers » ?",
        choices: [
          "Candide de Voltaire",
          "De l’esprit des lois de Montesquieu",
          "Du contrat social de Rousseau",
          "Supplément au voyage de Bougainville de Diderot",
        ],
        answer: 2,
        explanation:
          "C’est l’ouverture du chapitre 1 du livre I **Du contrat social** de **Rousseau** (1762). Le constat paradoxal pose la question de la légitimité du pouvoir politique, que Rousseau fonde sur la volonté générale.",
      },
      {
        id: "1re-francais-02-ct-8",
        prompt:
          "La phrase « C’est à ce prix que vous mangez du sucre en Europe » (Candide) relève surtout de quelle stratégie ?",
        choices: [
          "Une utopie qui décrit une société idéale",
          "Une maxime moraliste sur l’amour-propre",
          "Une ironie par antiphrase qui fait l’éloge de l’esclavage",
          "Une dénonciation directe et pathétique qui implique le lecteur européen",
        ],
        answer: 3,
        explanation:
          "L’esclave mutilé du Surinam s’adresse aux Européens (« vous ») : la phrase établit un lien direct entre leur consommation et la souffrance des esclaves. Le registre est **pathétique** et la critique **explicite**, ce qui tranche avec l’ironie habituelle du conte.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. LE ROMAN ET LE RÉCIT DU MOYEN ÂGE AU XXIe SIÈCLE
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-francais-03",
    title: "Le roman et le récit du Moyen Âge au XXIe siècle",
    summary:
      "Du roman de chevalerie au roman contemporain, le récit ne cesse de se réinventer, notamment à travers la construction du personnage, la question du point de vue et l’ambition réaliste puis naturaliste de représenter la société.",
    objectives: [
      "Je sais retracer les grandes étapes de l’histoire du roman, du Moyen Âge au XXIe siècle.",
      "Je sais analyser un personnage : caractérisation, fonction, évolution, rapport au lecteur.",
      "Je sais identifier le narrateur et la focalisation (interne, externe, zéro).",
      "Je sais distinguer réalisme et naturalisme et les illustrer par des auteurs précis.",
    ],
    sections: [
      {
        title: "Histoire du roman : des chevaliers au Nouveau Roman",
        body: [
          "Au **Moyen Âge**, le mot « roman » désigne d’abord un texte écrit en langue romane (le français) et non en latin. Au XIIe siècle, **Chrétien de Troyes** compose des romans de chevalerie en vers (Lancelot, Perceval) qui mêlent aventure, merveilleux et **amour courtois**. Le Roman de Renart, ensemble de récits animaliers, propose au contraire une satire de la société féodale.",
          "Au **XVIe siècle**, Rabelais renouvelle le récit par le comique et le savoir humaniste. Au **XVIIe siècle**, le roman pastoral et précieux est très long, mais **Madame de Lafayette** publie avec La Princesse de Clèves (1678) un récit bref et sobre, centré sur l’**analyse psychologique** de la passion : c’est souvent considéré comme le premier roman moderne. Au **XVIIIe siècle**, le roman se veut vraisemblable : roman-mémoires (Manon Lescaut de l’abbé Prévost, 1731), roman épistolaire (Les Liaisons dangereuses de Laclos, 1782), conte philosophique.",
          "Le **XIXe siècle** est l’âge d’or du roman. Les romantiques (Hugo, Les Misérables, 1862) y mettent du souffle épique ; **Balzac**, **Stendhal** et **Flaubert** fondent le **réalisme** ; **Zola** et Maupassant prolongent cette ambition avec le **naturalisme**. Le roman devient le grand genre de la représentation de la société.",
          "Au **XXe siècle**, le roman est mis en question. **Proust** (À la recherche du temps perdu, 1913-1927) explore la mémoire et la conscience ; le roman de l’**absurde** et de l’engagement interroge la condition humaine ; le **Nouveau Roman** des années 1950 (Alain Robbe-Grillet, Nathalie Sarraute, Michel Butor) refuse l’intrigue et le personnage traditionnels. Le **XXIe siècle** mêle autofiction, récit de filiation, enquête et roman du réel.",
        ],
        keyPoints: [
          "Moyen Âge : roman de chevalerie, amour courtois (Chrétien de Troyes).",
          "XVIIe : La Princesse de Clèves (1678), roman d’analyse.",
          "XVIIIe : roman-mémoires, roman épistolaire, conte philosophique.",
          "XIXe : romantisme, réalisme, naturalisme. XXe : Proust, roman de l’absurde, Nouveau Roman.",
        ],
        example: {
          title: "Comparer deux incipits pour mesurer une évolution",
          steps: [
            "Lafayette (1678) : « La magnificence et la galanterie n’ont jamais paru en France avec tant d’éclat que dans les dernières années du règne de Henri second. »",
            "Effet : un cadre historique et aristocratique, présenté avec un narrateur extérieur qui généralise.",
            "Proust (1913) : « Longtemps, je me suis couché de bonne heure. »",
            "Effet : un « je » intime, une habitude banale, un passé composé qui installe la mémoire.",
            "Conclusion : on passe d’une peinture de la cour à l’exploration d’une conscience individuelle.",
          ],
        },
      },
      {
        title: "Le personnage et la narration",
        body: [
          "Le **personnage** est un être de papier construit par le texte. On l’analyse à travers sa **caractérisation** : nom, portrait physique et moral, paroles, actions, regard des autres personnages. On étudie aussi sa **fonction** dans l’intrigue (héros, adjuvant, opposant) et son **évolution** : beaucoup de romans du XIXe siècle sont des **romans d’apprentissage** où un jeune homme découvre le monde, comme Julien Sorel dans Le Rouge et le Noir (Stendhal, 1830) ou Rastignac dans Le Père Goriot (Balzac, 1835).",
          "Il ne faut pas confondre **auteur** (personne réelle qui écrit) et **narrateur** (voix qui raconte dans le texte). Le narrateur peut être **interne** à l’histoire (récit à la première personne) ou **externe** (récit à la troisième personne).",
          "La **focalisation** (ou point de vue) désigne ce que le narrateur sait et montre. En **focalisation zéro** (narrateur omniscient), il sait tout, y compris les pensées de tous les personnages et le passé ou l’avenir. En **focalisation interne**, on perçoit le monde à travers un personnage, avec ses limites. En **focalisation externe**, on voit les personnages de l’extérieur, comme une caméra, sans accès à leurs pensées.",
          "Le **rythme** du récit se mesure en comparant le temps de l’histoire et le temps du récit : **scène** (dialogue, temps égal), **sommaire** (résumé rapide), **ellipse** (période passée sous silence), **pause** (description qui suspend l’action). Les **temps verbaux** structurent aussi la narration : le passé simple pour les actions de premier plan, l’imparfait pour l’arrière-plan et les descriptions.",
        ],
        keyPoints: [
          "Auteur ≠ narrateur ≠ personnage.",
          "Focalisation zéro : omniscience ; interne : à travers un personnage ; externe : de l’extérieur.",
          "Scène, sommaire, ellipse, pause : quatre vitesses du récit.",
          "Passé simple = premier plan ; imparfait = arrière-plan, description, habitude.",
        ],
        formulas: [
          "Analyse d’un personnage : identité → portrait → actions/paroles → regard des autres → évolution → valeur symbolique",
        ],
        example: {
          title: "Identifier la focalisation dans un passage",
          steps: [
            "Lire un passage où l’on découvre une ville « à travers les yeux » d’un héros qui arrive.",
            "Relever les verbes de perception (voir, apercevoir, entendre) rapportés à ce personnage.",
            "Vérifier les limites du savoir : le lecteur ignore ce que pensent les autres personnages.",
            "Conclure : focalisation interne.",
            "Interpréter : le lecteur partage la découverte, l’étonnement ou l’inquiétude du personnage.",
          ],
        },
      },
      {
        title: "Réalisme et naturalisme",
        body: [
          "Le **réalisme** (milieu du XIXe siècle) veut représenter fidèlement la société contemporaine, y compris les milieux modestes, sans l’idéaliser. **Balzac** conçoit La Comédie humaine comme une vaste fresque de la société de son temps ; dans l’Avant-propos (1842), il écrit : « La Société française allait être l’historien, je ne devais être que le secrétaire ». **Stendhal** compare le roman à « un miroir qu’on promène le long d’un chemin ». **Flaubert** (Madame Bovary, 1857) recherche l’**impersonnalité** et le style parfait.",
          "Les procédés réalistes sont la **description** précise des lieux et des objets, l’ancrage historique et géographique (dates, villes réelles), la peinture des milieux sociaux et de l’argent, le recours aux détails concrets qui produisent un « effet de réel ».",
          "Le **naturalisme**, autour d’**Émile Zola**, radicalise le réalisme en s’inspirant des sciences. Dans Le Roman expérimental (1880), Zola veut étudier l’homme comme un savant, en montrant l’influence de l’**hérédité** et du **milieu**. Le cycle des Rougon-Macquart (vingt romans, 1871-1893), « histoire naturelle et sociale d’une famille sous le Second Empire », comprend L’Assommoir (1877) et Germinal (1885), qui peint la condition des mineurs. Zola enquête sur le terrain, accumule des notes, décrit sans tabou la misère et l’alcoolisme.",
          "**Maupassant**, proche de Zola, nuance cette ambition dans la préface de Pierre et Jean (1888) : le romancier ne copie pas le réel, il le **sélectionne** et le compose ; « Les réalistes de talent devraient s’appeler plutôt des illusionnistes ». Le réalisme est donc une construction : il crée l’**illusion** du vrai.",
        ],
        keyPoints: [
          "Réalisme : Balzac, Stendhal, Flaubert ; représenter la société sans l’idéaliser.",
          "Naturalisme : Zola, méthode expérimentale, hérédité et milieu, Les Rougon-Macquart.",
          "Maupassant : le réaliste est un « illusionniste » qui compose le réel.",
        ],
        example: {
          title: "Analyser l’incipit de Germinal (1885)",
          steps: [
            "Texte : « Dans la plaine rase, sous la nuit sans étoiles, d’une obscurité et d’une épaisseur d’encre, un homme suivait seul la grande route de Marchiennes à Montsou ».",
            "Ancrage réaliste : lieux nommés, route précise, personnage en marche.",
            "Atmosphère : accumulation de compléments qui disent l’obscurité et le vide, cadre hostile.",
            "Personnage : « un homme » anonyme et « seul », dont on ignore encore le nom (Étienne Lantier).",
            "Interprétation : le décor annonce la misère du pays minier et fait de ce personnage un représentant de la condition ouvrière.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-francais-03-ex-1",
        prompt: "Quel auteur est à l’origine du cycle des **Rougon-Macquart** ?",
        choices: ["Balzac", "Flaubert", "Zola", "Maupassant"],
        answer: 2,
        explanation:
          "**Zola** a écrit les vingt romans des Rougon-Macquart (1871-1893), dont L’Assommoir et Germinal. Balzac est l’auteur de La Comédie humaine, Flaubert de Madame Bovary.",
      },
      {
        id: "1re-francais-03-ex-2",
        prompt: "Dans quelle focalisation le narrateur connaît-il les pensées de tous les personnages ?",
        choices: [
          "La focalisation externe",
          "La focalisation zéro (omnisciente)",
          "La focalisation interne",
          "Aucune focalisation ne le permet",
        ],
        answer: 1,
        explanation:
          "En **focalisation zéro**, le narrateur est **omniscient** : il sait tout des personnages, de leur passé et parfois de leur avenir. En focalisation interne, on n’a accès qu’aux pensées d’un personnage ; en focalisation externe, à aucune.",
      },
      {
        id: "1re-francais-03-ex-3",
        prompt: "Quelle œuvre de 1678 est souvent présentée comme le premier roman d’analyse psychologique ?",
        choices: [
          "La Princesse de Clèves",
          "Manon Lescaut",
          "Les Liaisons dangereuses",
          "Le Rouge et le Noir",
        ],
        answer: 0,
        explanation:
          "**La Princesse de Clèves** de Madame de Lafayette (1678) analyse finement la passion et le devoir. Manon Lescaut date de 1731, Les Liaisons dangereuses de 1782, Le Rouge et le Noir de 1830.",
      },
      {
        id: "1re-francais-03-ex-4",
        prompt: "Comment appelle-t-on une période de l’histoire passée sous silence par le récit ?",
        choices: ["Une pause", "Une scène", "Un sommaire", "Une ellipse"],
        answer: 3,
        explanation:
          "L’**ellipse** supprime une période (« Dix ans passèrent. » ou un silence total). La pause suspend l’action (description), la scène restitue l’action à vitesse réelle, le sommaire résume rapidement.",
      },
      {
        id: "1re-francais-03-ex-5",
        prompt: "Quel est le rôle principal de l’imparfait dans un récit au passé ?",
        choices: [
          "Exprimer les actions brèves de premier plan",
          "Exprimer l’arrière-plan : descriptions, habitudes, actions en cours",
          "Exprimer un ordre",
          "Exprimer une action future",
        ],
        answer: 1,
        explanation:
          "L’**imparfait** présente l’action dans sa durée, sans limites : il sert à l’**arrière-plan** (décor, portraits, habitudes). Le passé simple, lui, exprime les actions ponctuelles de premier plan qui font avancer l’intrigue.",
      },
      {
        id: "1re-francais-03-ex-6",
        prompt: "Qui compare le roman à « un miroir qu’on promène le long d’un chemin » ?",
        choices: ["Zola", "Hugo", "Proust", "Stendhal"],
        answer: 3,
        explanation:
          "La formule figure dans **Le Rouge et le Noir** de **Stendhal** (1830). Elle résume l’ambition réaliste : refléter la société telle qu’elle est, y compris dans ses aspects déplaisants.",
      },
    ],
    test: [
      {
        id: "1re-francais-03-ct-1",
        prompt:
          "Qu’est-ce qui distingue principalement le **naturalisme** du réalisme ?",
        choices: [
          "Le naturalisme refuse de décrire les milieux populaires.",
          "Le naturalisme revient au merveilleux médiéval.",
          "Le naturalisme s’appuie sur une démarche scientifique (hérédité, milieu) pour étudier l’homme.",
          "Le naturalisme abandonne la description au profit du dialogue.",
        ],
        answer: 2,
        explanation:
          "Zola, dans Le Roman expérimental (1880), veut appliquer au roman la **méthode expérimentale** : observer l’influence de l’**hérédité** et du **milieu**. Le naturalisme décrit au contraire abondamment les milieux populaires (mines, faubourgs) et reste très descriptif.",
      },
      {
        id: "1re-francais-03-ct-2",
        prompt:
          "« Les réalistes de talent devraient s’appeler plutôt des illusionnistes. » Que veut dire Maupassant ?",
        choices: [
          "Le romancier ne copie pas le réel : il sélectionne et compose pour donner l’illusion du vrai.",
          "Les romanciers réalistes écrivent en réalité des récits fantastiques.",
          "Le réalisme est un mensonge qu’il faut abandonner.",
          "Seuls les magiciens peuvent écrire des romans.",
        ],
        answer: 0,
        explanation:
          "Dans la préface de **Pierre et Jean** (1888), Maupassant explique qu’il est impossible de tout dire : le romancier **choisit** des détails significatifs et organise son récit pour produire une **illusion** de réalité plus forte que le réel brut.",
      },
      {
        id: "1re-francais-03-ct-3",
        prompt:
          "Dans un roman à la première personne, peut-on identifier systématiquement le narrateur à l’auteur ?",
        choices: [
          "Oui, le « je » désigne toujours l’auteur.",
          "Oui, sauf dans les romans épistolaires.",
          "Non, sauf si le narrateur porte un nom différent de l’auteur.",
          "Non : le narrateur est une instance du texte, même quand il ressemble à l’auteur.",
        ],
        answer: 3,
        explanation:
          "Le **narrateur** est toujours une voix construite par le texte. Même chez Proust, où le narrateur ressemble à l’auteur, il reste un personnage de fiction. Seule l’autobiographie revendique l’identité auteur = narrateur = personnage.",
      },
      {
        id: "1re-francais-03-ct-4",
        prompt:
          "Pourquoi La Comédie humaine de Balzac est-elle emblématique du réalisme ?",
        choices: [
          "Parce qu’elle décrit un monde imaginaire peuplé de créatures merveilleuses.",
          "Parce qu’elle se veut une fresque complète de la société française, où le romancier se fait « secrétaire » de la Société.",
          "Parce qu’elle est entièrement écrite en vers.",
          "Parce qu’elle refuse toute description.",
        ],
        answer: 1,
        explanation:
          "Dans l’**Avant-propos** (1842), Balzac affirme : « La Société française allait être l’historien, je ne devais être que le secrétaire ». Ses romans, reliés par le retour des personnages, peignent tous les milieux sociaux, avec de très nombreuses descriptions.",
      },
      {
        id: "1re-francais-03-ct-5",
        prompt:
          "Quel mouvement des années 1950 remet en cause l’intrigue et le personnage traditionnels ?",
        choices: ["Le naturalisme", "Le romantisme", "Le Nouveau Roman", "Le roman courtois"],
        answer: 2,
        explanation:
          "Le **Nouveau Roman** (Robbe-Grillet, Sarraute, Butor) conteste le personnage doté d’un nom, d’un passé et d’un caractère, ainsi que l’intrigue linéaire. Il privilégie la description des objets, les perceptions et les sous-conversations.",
      },
      {
        id: "1re-francais-03-ct-6",
        prompt:
          "Dans l’incipit de Germinal, le héros est désigné seulement par « un homme ». Quel est l’effet principal de ce choix ?",
        choices: [
          "Faire du personnage une figure anonyme et représentative de la condition ouvrière",
          "Montrer que le narrateur est omniscient",
          "Cacher que le personnage est une femme",
          "Créer un effet comique",
        ],
        answer: 0,
        explanation:
          "L’**anonymat** initial fait d’Étienne une silhouette perdue dans un décor hostile et en fait le **représentant** de tous les travailleurs pauvres. Le nom n’est donné qu’ensuite ; cette retenue relève plutôt d’une focalisation externe que de l’omniscience.",
      },
      {
        id: "1re-francais-03-ct-7",
        prompt: "Qu’appelle-t-on un **roman d’apprentissage** ?",
        choices: [
          "Un manuel destiné aux élèves",
          "Un roman qui raconte la formation d’un jeune héros au contact du monde",
          "Un roman écrit par un auteur débutant",
          "Un roman sans personnage principal",
        ],
        answer: 1,
        explanation:
          "Le **roman d’apprentissage** (ou de formation) suit l’éducation sentimentale et sociale d’un jeune héros qui découvre le monde et ses illusions : Julien Sorel (Le Rouge et le Noir), Rastignac (Le Père Goriot), Frédéric Moreau (L’Éducation sentimentale).",
      },
      {
        id: "1re-francais-03-ct-8",
        prompt:
          "« Nous étions à l’Étude, quand le Proviseur entra » (Madame Bovary). Quelle remarque sur la narration est juste ?",
        choices: [
          "Le narrateur est omniscient dès la première ligne.",
          "Le récit est entièrement à la troisième personne.",
          "La phrase est au présent de narration.",
          "Le « nous » d’un camarade de Charles ouvre le roman avant de disparaître au profit d’un récit à la troisième personne.",
        ],
        answer: 3,
        explanation:
          "Flaubert ouvre le roman par un « **nous** » de collégiens, témoins de l’arrivée de Charles Bovary ; ce narrateur-témoin s’efface ensuite. L’imparfait (« étions ») installe le cadre et le passé simple (« entra ») l’événement de premier plan.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. LE THÉÂTRE DU XVIIe AU XXIe SIÈCLE
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-francais-04",
    title: "Le théâtre du XVIIe au XXIe siècle",
    summary:
      "Écrit pour être joué, le théâtre évolue des règles du classicisme à la liberté du drame romantique puis aux remises en cause du théâtre de l’absurde, tout en reposant sur la double énonciation.",
    objectives: [
      "Je sais expliquer les règles du théâtre classique et la distinction entre tragédie et comédie.",
      "Je sais caractériser le drame romantique et le théâtre de l’absurde.",
      "Je sais utiliser le vocabulaire du théâtre : didascalie, réplique, tirade, monologue, aparté, stichomythie.",
      "Je sais analyser la double énonciation et la fonction d’une scène (exposition, nœud, dénouement).",
    ],
    sections: [
      {
        title: "Le théâtre classique : règles, tragédie et comédie",
        body: [
          "Au **XVIIe siècle**, le théâtre classique obéit à des règles inspirées d’Aristote et fixées par les doctes. La règle des **trois unités** est résumée par **Boileau** dans son Art poétique (1674) : « Qu’en un lieu, qu’en un jour, un seul fait accompli / Tienne jusqu’à la fin le théâtre rempli. » S’y ajoutent la **vraisemblance** (ce qui paraît crédible au public) et la **bienséance** (ne pas choquer : pas de violence ni de mort sur scène, elles sont racontées dans des **récits**).",
          "La **tragédie** met en scène des personnages de haut rang (rois, héros) confrontés à un destin fatal, à des passions violentes ou à un conflit entre l’amour et le devoir. Écrite en alexandrins, en cinq actes, elle vise à susciter la **terreur et la pitié** et à purger les passions (la **catharsis** selon Aristote). **Corneille** exalte l’héroïsme et la gloire (Le Cid, 1637) ; **Racine** peint la passion destructrice (Andromaque, 1667 ; Phèdre, 1677) : « Je le vis, je rougis, je pâlis à sa vue ».",
          "La **comédie** met en scène des personnages de condition moyenne et cherche à faire rire tout en corrigeant les mœurs (« castigat ridendo mores », « elle corrige les mœurs en riant »). **Molière** en est le maître : il dénonce l’hypocrisie religieuse (Tartuffe), l’avarice (L’Avare, 1668), la misanthropie (Le Misanthrope, 1666) ou l’hypocondrie (Le Malade imaginaire, 1673). Il utilise tous les types de comique : de **mots**, de **gestes**, de **situation**, de **caractère** et de **mœurs**.",
          "Au **XVIIIe siècle**, la comédie évolue : **Marivaux** explore les jeux de l’amour et du langage (Le Jeu de l’amour et du hasard, 1730), **Beaumarchais** donne au valet une parole critique contre les privilèges (Le Mariage de Figaro, 1784) : « Vous vous êtes donné la peine de naître, et rien de plus ».",
        ],
        keyPoints: [
          "Trois unités : lieu, temps (24 h), action ; + vraisemblance et bienséance.",
          "Tragédie : héros nobles, fatalité, terreur et pitié, catharsis (Corneille, Racine).",
          "Comédie : rire et critique des mœurs (Molière), puis Marivaux et Beaumarchais au XVIIIe.",
        ],
        formulas: [
          "Structure dramatique : exposition → nœud (péripéties) → dénouement",
          "Cinq types de comique : mots · gestes · situation · caractère · mœurs",
        ],
        example: {
          title: "Analyser un alexandrin tragique de Racine",
          steps: [
            "Vers : « Je le vis, je rougis, je pâlis à sa vue » (Phèdre, acte I, scène 3).",
            "Structure : trois propositions juxtaposées sur le même modèle (rythme ternaire), au passé simple.",
            "Effet : la rapidité des verbes traduit le coup de foudre, immédiat et irrésistible.",
            "Symptômes physiques (rougir, pâlir) : la passion est vécue comme une maladie.",
            "Interprétation : Phèdre subit une passion fatale qu’elle ne maîtrise pas, ce qui est le cœur du tragique racinien.",
          ],
        },
      },
      {
        title: "Le drame romantique et les remises en cause du XIXe siècle",
        body: [
          "Au début du XIXe siècle, les romantiques rejettent les règles classiques jugées artificielles. Dans la **préface de Cromwell** (1827), **Victor Hugo** théorise le **drame romantique** : il faut mêler le **sublime** et le **grotesque**, comme dans la vie, et libérer l’action des unités de temps et de lieu (seule l’unité d’action est conservée).",
          "La première d’**Hernani** (1830) provoque une « bataille » entre partisans du classicisme et jeunes romantiques. Le drame romantique se caractérise par le **mélange des registres** (tragique et comique), des personnages de toutes conditions, des sujets souvent **historiques**, des changements de lieu, un alexandrin assoupli (enjambements audacieux). Dans Ruy Blas (1838), un laquais amoureux d’une reine se décrit comme un « ver de terre amoureux d’une étoile ».",
          "**Alfred de Musset** écrit Lorenzaccio (1834), drame foisonnant (nombreux lieux et personnages) qui ne fut pas joué de son vivant ; il compose aussi un « spectacle dans un fauteuil », un théâtre à lire. À la fin du siècle, **Alfred Jarry** fait scandale avec Ubu roi (1896), farce grotesque qui annonce les ruptures du XXe siècle.",
        ],
        keyPoints: [
          "Préface de Cromwell (1827) : manifeste du drame romantique, mélange du sublime et du grotesque.",
          "Bataille d’Hernani (1830) : victoire symbolique des romantiques.",
          "Drame romantique : liberté de temps et de lieu, mélange des registres, sujets historiques.",
        ],
        example: {
          title: "Montrer qu’une scène relève du drame romantique",
          steps: [
            "Repérer les indices historiques : époque passée, cour royale, personnages réels ou vraisemblables.",
            "Relever le mélange des registres : une réplique comique au milieu d’une situation tragique.",
            "Observer les personnages : un héros d’origine modeste face aux grands (Ruy Blas, laquais).",
            "Noter les libertés formelles : enjambements, alexandrin coupé entre plusieurs personnages.",
            "Conclure : la scène illustre la volonté de Hugo de représenter la vie dans toute sa diversité.",
          ],
        },
      },
      {
        title: "Le théâtre du XXe et du XXIe siècle et le langage théâtral",
        body: [
          "Après 1945, le **théâtre de l’absurde** traduit la perte de sens du monde. **Eugène Ionesco** (La Cantatrice chauve, 1950) et **Samuel Beckett** (En attendant Godot, créé en 1953) mettent en scène des personnages sans identité stable, une intrigue quasi inexistante, un temps circulaire et un **langage qui tourne à vide** (clichés, répétitions, dialogues sans communication). Le rire y côtoie l’angoisse.",
          "Le XXe siècle voit aussi s’imposer le **metteur en scène**, qui interprète le texte, et des formes variées : réécriture des mythes antiques, théâtre engagé, théâtre du quotidien. Au XXIe siècle, le théâtre contemporain mêle les langages (vidéo, danse, récit) et interroge l’actualité.",
          "Quel que soit le siècle, le texte théâtral comporte deux types d’écrit : les **répliques** (paroles des personnages) et les **didascalies** (indications scéniques : noms, gestes, décors, tons). La **double énonciation** est la caractéristique essentielle du genre : un personnage parle à un autre personnage, mais à travers lui l’auteur s’adresse au **public**, qui en sait souvent plus que les personnages (c’est l’**ironie dramatique**).",
          "Le vocabulaire précis est indispensable : la **tirade** est une longue réplique ; le **monologue** une scène où un personnage seul parle (souvent pour délibérer) ; l’**aparté** une réplique que les autres personnages sont censés ne pas entendre ; la **stichomythie** un échange de répliques très brèves, souvent d’un vers chacune, qui traduit l’affrontement. La **scène d’exposition** présente personnages et enjeux ; le **nœud** concentre les obstacles ; le **dénouement** résout l’intrigue (mort tragique ou mariage comique).",
        ],
        keyPoints: [
          "Théâtre de l’absurde : Ionesco, Beckett ; langage vide, personnages et temps déstructurés.",
          "Double énonciation : le personnage parle à un personnage, l’auteur parle au public.",
          "Didascalies vs répliques ; tirade, monologue, aparté, stichomythie.",
          "Exposition, nœud, dénouement.",
        ],
        example: {
          title: "Analyser une stichomythie du Cid",
          steps: [
            "Contexte : acte II, scène 2, Rodrigue défie le Comte, père de Chimène.",
            "Repérer la forme : répliques brèves qui se répondent, souvent d’un seul vers.",
            "Relever une formule : le Comte méprise le jeune homme, qui répond par le défi ; le Comte lance plus loin « À vaincre sans péril, on triomphe sans gloire ».",
            "Effet : le rythme rapide traduit la tension et l’affrontement verbal qui annonce le duel.",
            "Double énonciation : le public, qui connaît l’amour de Rodrigue pour Chimène, mesure le dilemme mieux que le Comte.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-francais-04-ex-1",
        prompt: "Comment appelle-t-on les indications scéniques écrites par l’auteur ?",
        choices: ["Les tirades", "Les apartés", "Les didascalies", "Les répliques"],
        answer: 2,
        explanation:
          "Les **didascalies** (souvent en italique) indiquent les noms des personnages, les gestes, les tons, les décors. Les répliques sont les paroles prononcées ; la tirade est une longue réplique ; l’aparté une réplique non entendue des autres personnages.",
      },
      {
        id: "1re-francais-04-ex-2",
        prompt: "Quelles sont les **trois unités** du théâtre classique ?",
        choices: [
          "Unité de lieu, de temps et d’action",
          "Unité de ton, de style et de vers",
          "Unité de personnage, de décor et de costume",
          "Unité de lieu, de genre et de registre",
        ],
        answer: 0,
        explanation:
          "Le théâtre classique impose l’unité de **lieu** (un seul lieu), de **temps** (24 heures au plus) et d’**action** (une seule intrigue principale), comme le résume Boileau dans son Art poétique (1674).",
      },
      {
        id: "1re-francais-04-ex-3",
        prompt: "Quel texte de Victor Hugo sert de manifeste au drame romantique ?",
        choices: ["Hernani", "Les Contemplations", "Ruy Blas", "La préface de Cromwell"],
        answer: 3,
        explanation:
          "La **préface de Cromwell** (1827) est le manifeste théorique du drame romantique : mélange du sublime et du grotesque, refus des unités de temps et de lieu. Hernani (1830) et Ruy Blas (1838) sont des drames qui appliquent ces principes.",
      },
      {
        id: "1re-francais-04-ex-4",
        prompt: "Qu’est-ce qu’un **aparté** ?",
        choices: [
          "Une scène où un personnage est seul",
          "Une réplique prononcée pour le public, que les autres personnages sont censés ne pas entendre",
          "Un échange de répliques très courtes",
          "Une longue réplique argumentée",
        ],
        answer: 1,
        explanation:
          "L’**aparté** est une convention théâtrale : le personnage dit ce qu’il pense vraiment, et seul le public l’entend. La scène où un personnage est seul est un monologue ; l’échange bref est une stichomythie ; la longue réplique est une tirade.",
      },
      {
        id: "1re-francais-04-ex-5",
        prompt: "Quel auteur a écrit **Tartuffe**, **L’Avare** et **Le Misanthrope** ?",
        choices: ["Racine", "Corneille", "Marivaux", "Molière"],
        answer: 3,
        explanation:
          "Ces trois comédies sont de **Molière**. Racine et Corneille sont les grands auteurs tragiques du XVIIe siècle ; Marivaux écrit des comédies au XVIIIe siècle.",
      },
      {
        id: "1re-francais-04-ex-6",
        prompt: "Quelle pièce est associée au **théâtre de l’absurde** ?",
        choices: ["Le Cid", "La Cantatrice chauve", "Le Mariage de Figaro", "Phèdre"],
        answer: 1,
        explanation:
          "**La Cantatrice chauve** d’Ionesco (1950) est une pièce fondatrice du théâtre de l’absurde, avec des dialogues faits de clichés qui tournent à vide. Le Cid et Phèdre relèvent du XVIIe siècle classique, Le Mariage de Figaro du XVIIIe siècle.",
      },
    ],
    test: [
      {
        id: "1re-francais-04-ct-1",
        prompt: "Qu’est-ce que la **double énonciation** au théâtre ?",
        choices: [
          "Le fait qu’une pièce soit jouée deux fois",
          "Le fait que deux personnages parlent en même temps",
          "Le fait qu’une réplique s’adresse à un personnage et, à travers lui, au public",
          "Le fait qu’une pièce mélange vers et prose",
        ],
        answer: 2,
        explanation:
          "La **double énonciation** est le principe fondamental du théâtre : chaque parole a deux destinataires, le personnage sur scène et le **spectateur**. Elle permet l’**ironie dramatique**, quand le public sait ce que le personnage ignore.",
      },
      {
        id: "1re-francais-04-ct-2",
        prompt: "Selon la règle de la **bienséance**, comment est traitée la mort d’un personnage dans une tragédie classique ?",
        choices: [
          "Elle est montrée avec le plus de réalisme possible.",
          "Elle est interdite dans toute tragédie.",
          "Elle est remplacée par un mariage.",
          "Elle a lieu hors scène et est racontée dans un récit.",
        ],
        answer: 3,
        explanation:
          "La **bienséance** interdit de choquer le public : la violence et la mort ont lieu **hors scène** et sont rapportées par un **récit** (par exemple le récit de Théramène racontant la mort d’Hippolyte dans Phèdre). La mort reste fréquente dans le dénouement tragique.",
      },
      {
        id: "1re-francais-04-ct-3",
        prompt:
          "« Vous vous êtes donné la peine de naître, et rien de plus. » Quelle critique Beaumarchais formule-t-il par la voix de Figaro ?",
        choices: [
          "Une critique des privilèges de la noblesse fondés sur la naissance et non sur le mérite",
          "Une critique de l’hypocrisie religieuse",
          "Une critique de l’avarice bourgeoise",
          "Une critique de la monarchie absolue de droit divin en tant que régime",
        ],
        answer: 0,
        explanation:
          "Dans le monologue de l’acte V du **Mariage de Figaro** (1784), le valet oppose son propre mérite aux privilèges du Comte, obtenus par la seule **naissance**. La pièce est souvent lue comme un signe annonciateur de la crise de la société d’ordres.",
      },
      {
        id: "1re-francais-04-ct-4",
        prompt:
          "Quelle différence fondamentale distingue le drame romantique de la tragédie classique ?",
        choices: [
          "Le drame romantique impose l’unité de lieu, la tragédie non.",
          "Le drame romantique mélange les registres (sublime et grotesque) et s’affranchit des unités de temps et de lieu.",
          "Le drame romantique est toujours en prose et ne comporte qu’un acte.",
          "Le drame romantique interdit les personnages historiques.",
        ],
        answer: 1,
        explanation:
          "Hugo revendique le **mélange des registres** et la liberté de lieu et de temps, en gardant l’unité d’action. Le drame peut être en vers (Hernani, Ruy Blas) ou en prose (Lorenzaccio), en plusieurs actes, et il privilégie justement les sujets historiques.",
      },
      {
        id: "1re-francais-04-ct-5",
        prompt:
          "Une scène présente un personnage seul qui pèse le pour et le contre avant de prendre une décision. Comment nomme-t-on ce type de scène ?",
        choices: [
          "Une scène d’exposition",
          "Une stichomythie",
          "Un monologue délibératif",
          "Un aparté",
        ],
        answer: 2,
        explanation:
          "C’est un **monologue délibératif** : le personnage, seul en scène, examine des choix opposés (les stances de Rodrigue dans Le Cid en sont l’exemple célèbre). La double énonciation permet au public de suivre ce débat intérieur.",
      },
      {
        id: "1re-francais-04-ct-6",
        prompt:
          "Dans le théâtre de l’absurde, quel rôle joue souvent le **langage** ?",
        choices: [
          "Il sert à exposer clairement une thèse philosophique.",
          "Il est réservé aux longues tirades en alexandrins.",
          "Il permet aux personnages de se comprendre parfaitement.",
          "Il tourne à vide (clichés, répétitions, incohérences) et révèle l’impossibilité de communiquer.",
        ],
        answer: 3,
        explanation:
          "Chez Ionesco et Beckett, le langage se dérègle : lieux communs, répétitions, phrases sans logique. Ce **langage vide** montre la solitude et l’incommunicabilité, et provoque un rire mêlé d’angoisse.",
      },
      {
        id: "1re-francais-04-ct-7",
        prompt:
          "Qu’appelle-t-on l’**ironie dramatique** ?",
        choices: [
          "La situation où le spectateur sait ce qu’un personnage ignore",
          "Le fait qu’un personnage se moque d’un autre",
          "Une antiphrase prononcée dans une comédie",
          "La fin heureuse d’une tragédie",
        ],
        answer: 0,
        explanation:
          "L’**ironie dramatique** naît du décalage de savoir entre le public et un personnage : le spectateur voit le piège se refermer (Orgon caché sous la table dans Tartuffe, par exemple). Elle découle de la double énonciation.",
      },
      {
        id: "1re-francais-04-ct-8",
        prompt:
          "Racine écrit dans la préface de Bérénice (1670) : « La principale règle est de plaire et de toucher ». Que révèle cette formule ?",
        choices: [
          "Racine rejette toute règle et prépare le drame romantique.",
          "Pour Racine, les règles sont au service de l’émotion du spectateur, qui reste le but premier.",
          "Racine veut avant tout faire rire le public.",
          "Racine affirme que la tragédie doit montrer des morts sur scène.",
        ],
        answer: 1,
        explanation:
          "Racine respecte les règles classiques, mais rappelle leur finalité : **plaire** et **toucher** (émouvoir). Dans la même préface, il dit que « toute l’invention consiste à faire quelque chose de rien », justifiant une action très simple. Il ne vise ni le rire ni la violence sur scène.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. MÉTHODE DU BAC : LE COMMENTAIRE LITTÉRAIRE
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-francais-05",
    title: "Méthode du bac : le commentaire littéraire",
    summary:
      "Le commentaire consiste à proposer, en quatre heures, une interprétation organisée d’un texte inconnu, en démontrant chaque idée par l’analyse précise de procédés d’écriture cités.",
    objectives: [
      "Je sais analyser un texte au brouillon et formuler une problématique pertinente.",
      "Je sais construire un plan en deux ou trois axes interprétatifs, sans paraphrase.",
      "Je sais rédiger un paragraphe argumenté : idée, citation, procédé, interprétation.",
      "Je sais rédiger une introduction et une conclusion complètes.",
    ],
    sections: [
      {
        title: "Le travail au brouillon : comprendre avant d’analyser",
        body: [
          "À l’écrit du bac de français (4 heures), vous choisissez entre la **dissertation** et le **commentaire**. Le commentaire porte sur un texte que vous ne connaissez pas, relevant de l’un des objets d’étude. Il ne s’agit ni de résumer, ni de paraphraser, ni d’accumuler des remarques techniques : il faut **interpréter** le texte, c’est-à-dire montrer comment sa forme produit du sens. Vérifiez toujours les modalités officielles de votre session.",
          "Commencez par **lire le paratexte** (auteur, titre, date, œuvre, chapeau introductif) : il donne le genre, le contexte et souvent une piste. Lisez ensuite le texte plusieurs fois : une première fois pour la compréhension globale (qui parle ? à qui ? de quoi ? dans quelle situation ?), puis crayon en main pour repérer les **procédés**.",
          "Au brouillon, faites un **relevé organisé** : champs lexicaux, figures de style (métaphore, comparaison, hyperbole, antithèse, anaphore…), énonciation (pronoms, modalisation), temps verbaux, types de phrases, rythme et sonorités, structure du texte. Pour chaque relevé, notez immédiatement son **effet** : un procédé non interprété ne rapporte rien.",
          "Dégagez enfin l’**enjeu** du texte et formulez une **problématique** : une question qui oriente la lecture (« En quoi… ? », « Comment… ? ») et qui porte sur la manière dont le texte produit son sens. Une bonne problématique est spécifique au texte : « Comment ce portrait fait-il d’un personnage ridicule une figure inquiétante ? » est meilleur que « Comment l’auteur décrit-il le personnage ? ».",
        ],
        keyPoints: [
          "Lire le paratexte : auteur, date, genre, mouvement.",
          "Relevé de procédés toujours associé à un effet de sens.",
          "Problématique spécifique : elle annonce une interprétation, pas un thème.",
          "Proscrire la paraphrase : redire le texte avec d’autres mots n’est pas l’analyser.",
        ],
        formulas: [
          "Procédé → citation → effet → interprétation",
          "Questions de départ : Qui parle ? À qui ? De quoi ? Comment ? Dans quel but ?",
        ],
        example: {
          title: "Passer d’un relevé à une piste d’interprétation",
          steps: [
            "Texte : « L’Albatros » de Baudelaire.",
            "Relevé : vocabulaire de la royauté (« rois de l’azur », « prince des nuées ») opposé à celui de la maladresse (« maladroits et honteux », « gauche et veule »).",
            "Procédé : antithèse entre grandeur dans le ciel et déchéance sur le pont.",
            "Effet : l’oiseau passe brutalement du sublime au ridicule.",
            "Piste d’interprétation : le poème construit une allégorie du poète incompris dans la société.",
          ],
        },
      },
      {
        title: "Construire le plan et la problématique",
        body: [
          "Le plan du commentaire est **thématique et interprétatif** : chaque grande partie (deux ou trois) développe une idée directrice qui répond à la problématique. On évite le plan linéaire (qui suit le texte ligne à ligne : c’est la méthode de l’oral) et le plan qui sépare forme et fond (« I. Les procédés / II. Les thèmes »), car la forme et le sens doivent toujours être étudiés ensemble.",
          "Chaque partie comprend deux ou trois **sous-parties**, et chaque sous-partie correspond à un paragraphe argumenté. Les parties doivent progresser : on va souvent de l’évident vers le plus profond (de ce que le texte montre à ce qu’il signifie, ou du littéral au symbolique).",
          "Un plan efficace pour un texte argumentatif peut être : I. Une argumentation rigoureuse ; II. Une stratégie pour émouvoir et impliquer le lecteur ; III. Une critique qui dépasse son objet. Pour un poème lyrique : I. Un paysage décrit ; II. Un paysage état d’âme ; III. Une méditation sur le temps. Ces modèles sont des points de départ : le plan doit toujours être adapté au texte précis.",
        ],
        keyPoints: [
          "2 ou 3 parties, 2 ou 3 sous-parties chacune.",
          "Pas de plan linéaire à l’écrit, pas de séparation forme/fond.",
          "Les intitulés de parties sont des idées (phrases interprétatives), pas des thèmes isolés.",
          "Progression : du sens littéral au sens profond.",
        ],
        formulas: [
          "Problématique → Axe I (évidence du texte) → Axe II (approfondissement) → Axe III (portée, enjeu)",
        ],
        example: {
          title: "Bâtir un plan pour « Demain, dès l’aube… » de Hugo",
          steps: [
            "Situation : poème des Contemplations (1856) ; le poète marche vers un lieu dont on ne comprend la nature qu’à la fin.",
            "Observation : le dernier quatrain révèle qu’il se rend sur la tombe de sa fille, Léopoldine, morte en 1843.",
            "Problématique : comment Hugo transforme-t-il un voyage apparemment ordinaire en hommage funèbre ?",
            "I. Un voyage déterminé et solitaire (futur, rythme de la marche, détermination).",
            "II. Un paysage nié au profit de l’intériorité (refus de regarder, deuil).",
            "III. Une chute qui révèle un rituel de deuil (tombe, offrande du houx et de la bruyère).",
          ],
        },
      },
      {
        title: "Rédiger : introduction, paragraphes, conclusion",
        body: [
          "L’**introduction** comprend : une **amorce** (situer l’auteur, le mouvement ou le thème, sans formule creuse), la **présentation du texte** (auteur, titre, date, genre, situation de l’extrait, contenu en une ou deux phrases), la **problématique** et l’**annonce du plan**. Elle forme un seul paragraphe.",
          "Le **développement** est composé de paragraphes argumentés. Chaque paragraphe commence par une **phrase-idée**, puis enchaîne plusieurs fois le geste d’analyse : **citation** courte et exacte entre guillemets, avec la ligne ou le vers ; identification du **procédé** ; **interprétation** de l’effet. Il se termine par une courte conclusion partielle. Des **transitions** relient les parties.",
          "La **conclusion** fait un **bilan** qui répond clairement à la problématique, puis propose une **ouverture** pertinente : rapprochement avec une autre œuvre, un autre mouvement ou une autre forme d’art, justifié par un lien précis. On n’ouvre jamais sur une question sans rapport.",
          "Gardez du temps pour vous **relire** (orthographe, accords, citations exactes). Une copie de commentaire se rédige en 4 à 6 pages environ ; la qualité de l’analyse compte plus que la longueur. Intégrez les citations dans vos phrases et soignez la syntaxe : « Le poète affirme qu’il ne regardera “ni l’or du soir qui tombe” » plutôt que des citations jetées entre parenthèses.",
        ],
        keyPoints: [
          "Introduction : amorce · présentation · problématique · plan.",
          "Paragraphe : idée → citation → procédé → interprétation → bilan.",
          "Conclusion : bilan qui répond à la problématique + ouverture justifiée.",
          "Citer court, exact, et intégrer la citation à la phrase.",
        ],
        formulas: [
          "Introduction = amorce + présentation + problématique + annonce du plan",
          "Paragraphe = idée directrice + (citation + procédé + effet) × 2 ou 3 + mini-bilan",
          "Conclusion = bilan + ouverture",
        ],
        example: {
          title: "Rédiger un paragraphe d’analyse",
          steps: [
            "Idée : le poète se présente comme insensible au paysage.",
            "Citation : « Je ne regarderai ni l’or du soir qui tombe, / Ni les voiles au loin descendant vers Harfleur ».",
            "Procédé : la négation « ne… ni… ni » écarte deux images de beauté (couleur du couchant, voiles).",
            "Interprétation : le refus de contempler, paradoxal chez un poète lyrique, montre que tout son être est tourné vers la morte.",
            "Mini-bilan : le paysage est nié pour laisser place à l’intériorité et au deuil.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-francais-05-ex-1",
        prompt: "Quel défaut majeur faut-il éviter dans un commentaire ?",
        choices: [
          "Citer le texte",
          "Formuler une problématique",
          "Paraphraser le texte",
          "Annoncer le plan",
        ],
        answer: 2,
        explanation:
          "La **paraphrase** consiste à redire le texte avec d’autres mots, sans l’analyser. Citer, problématiser et annoncer le plan sont au contraire indispensables.",
      },
      {
        id: "1re-francais-05-ex-2",
        prompt: "Quel type de plan est attendu dans un commentaire écrit ?",
        choices: [
          "Un plan linéaire qui suit le texte ligne à ligne",
          "Un plan thématique et interprétatif en deux ou trois axes",
          "Un plan en deux parties : forme puis fond",
          "Un plan chronologique de la vie de l’auteur",
        ],
        answer: 1,
        explanation:
          "Le commentaire écrit suit un **plan thématique** dont chaque axe est une **idée interprétative** répondant à la problématique. Le plan linéaire est réservé à l’explication orale ; séparer forme et fond est une erreur, car le sens naît de la forme.",
      },
      {
        id: "1re-francais-05-ex-3",
        prompt: "Que doit contenir la présentation du texte dans l’introduction ?",
        choices: [
          "L’auteur, l’œuvre, la date, le genre et la situation de l’extrait",
          "La biographie complète de l’auteur",
          "Le plan détaillé avec toutes les sous-parties",
          "Les citations principales du texte",
        ],
        answer: 0,
        explanation:
          "La présentation **situe le texte** : auteur, titre, date, genre, place de l’extrait et contenu en une ou deux phrases. Une biographie complète est hors sujet ; le plan s’annonce par ses grandes parties ; les citations relèvent du développement.",
      },
      {
        id: "1re-francais-05-ex-4",
        prompt: "Dans un paragraphe de commentaire, quel est l’ordre d’analyse le plus efficace ?",
        choices: [
          "Interprétation sans citation",
          "Liste de figures de style sans commentaire",
          "Résumé du passage puis opinion personnelle",
          "Idée directrice, citation, procédé, interprétation",
        ],
        answer: 3,
        explanation:
          "Chaque paragraphe démontre une **idée** à l’aide de **citations** dont on identifie le **procédé** et dont on **interprète** l’effet. Une interprétation sans citation n’est pas prouvée ; une liste de figures sans commentaire n’explique rien.",
      },
      {
        id: "1re-francais-05-ex-5",
        prompt: "Que doit faire la conclusion d’un commentaire ?",
        choices: [
          "Introduire un nouvel argument important",
          "Répondre à la problématique puis proposer une ouverture pertinente",
          "Recopier l’introduction",
          "Donner uniquement son avis sur le texte",
        ],
        answer: 1,
        explanation:
          "La conclusion **répond à la problématique** en faisant le bilan des parties, puis **ouvre** sur un rapprochement justifié. Elle n’apporte pas d’argument nouveau et ne se limite pas à un avis personnel.",
      },
      {
        id: "1re-francais-05-ex-6",
        prompt: "Quelle problématique est la mieux formulée pour un commentaire de « L’Albatros » ?",
        choices: [
          "Qu’est-ce qu’un albatros ?",
          "Baudelaire aime-t-il les oiseaux ?",
          "Le poème est-il un sonnet ?",
          "Comment la scène de l’oiseau capturé devient-elle une allégorie de la condition du poète ?",
        ],
        answer: 3,
        explanation:
          "Une bonne problématique porte sur la **manière** dont le texte construit son sens et annonce une **interprétation**. Les autres propositions sont factuelles (définition, forme) ou hors sujet (goûts de l’auteur).",
      },
    ],
    test: [
      {
        id: "1re-francais-05-ct-1",
        prompt:
          "Un élève écrit : « Dans ce vers, il y a une allitération en [s]. » Que manque-t-il pour que l’analyse soit valable ?",
        choices: [
          "Le nom de l’éditeur",
          "Une deuxième figure de style",
          "L’interprétation de l’effet produit par l’allitération",
          "Rien, la remarque est complète",
        ],
        answer: 2,
        explanation:
          "Identifier un procédé ne suffit pas : il faut **expliquer son effet** (bruissement, sifflement, douceur, menace…) et le relier à l’idée du paragraphe. Sans interprétation, la remarque est un simple relevé.",
      },
      {
        id: "1re-francais-05-ct-2",
        prompt:
          "Pourquoi est-il déconseillé d’organiser un commentaire en « I. La forme / II. Le fond » ?",
        choices: [
          "Parce que le sens d’un texte naît de sa forme et que les deux doivent être analysés ensemble",
          "Parce qu’un commentaire doit obligatoirement comporter trois parties",
          "Parce que la forme d’un texte n’a pas d’importance",
          "Parce que le fond relève uniquement de la dissertation",
        ],
        answer: 0,
        explanation:
          "Le principe même du commentaire est de montrer **comment** la forme produit le sens. Séparer les deux conduit à une première partie de relevés techniques sans interprétation et à une seconde de paraphrase. Un plan en deux parties est par ailleurs tout à fait accepté.",
      },
      {
        id: "1re-francais-05-ct-3",
        prompt:
          "Quelle amorce d’introduction est la plus pertinente pour un poème romantique sur la fuite du temps ?",
        choices: [
          "« Depuis la nuit des temps, les hommes écrivent des poèmes. »",
          "« Je vais commenter un texte. »",
          "« Ce texte est très beau et nous allons voir pourquoi. »",
          "« Le romantisme fait de la fuite du temps un thème majeur du lyrisme, comme l’illustre l’apostrophe de Lamartine dans “Le Lac”. »",
        ],
        answer: 3,
        explanation:
          "Une bonne amorce est **précise** et en lien avec le texte : elle situe le thème dans un mouvement et prépare la présentation. Les formules creuses (« depuis la nuit des temps »), l’annonce scolaire ou le jugement subjectif sont à proscrire.",
      },
      {
        id: "1re-francais-05-ct-4",
        prompt:
          "Comment intégrer correctement une citation dans une phrase de commentaire ?",
        choices: [
          "La recopier sur plusieurs lignes sans commentaire",
          "L’insérer entre guillemets dans une phrase grammaticalement correcte, puis l’analyser",
          "La paraphraser sans guillemets",
          "La placer seule entre parenthèses à la fin du paragraphe",
        ],
        answer: 1,
        explanation:
          "La citation doit être **courte, exacte**, entre guillemets, **intégrée** à la syntaxe de votre phrase et suivie d’une analyse. Les longues citations non commentées ou isolées entre parenthèses n’apportent pas de preuve.",
      },
      {
        id: "1re-francais-05-ct-5",
        prompt:
          "Dans « Demain, dès l’aube… », la révélation de la tombe n’apparaît qu’au dernier quatrain. Quel axe de lecture cela justifie-t-il ?",
        choices: [
          "Un poème construit sur un effet de chute qui donne rétrospectivement tout son sens au voyage",
          "Un poème descriptif sans enjeu émotionnel",
          "Un poème comique fondé sur le malentendu",
          "Un poème argumentatif contre le voyage",
        ],
        answer: 0,
        explanation:
          "La **chute** oblige le lecteur à relire le poème autrement : la marche déterminée devient un **pèlerinage funèbre**. C’est un axe interprétatif riche, qui relie structure et émotion.",
      },
      {
        id: "1re-francais-05-ct-6",
        prompt: "Quelle ouverture de conclusion est la plus pertinente pour un commentaire sur un extrait de Germinal ?",
        choices: [
          "« Et vous, qu’auriez-vous fait à la place d’Étienne ? »",
          "« Zola est un très grand écrivain. »",
          "« On pourrait rapprocher cette peinture de la mine d’autres représentations du travail ouvrier au XIXe siècle, par exemple dans L’Assommoir, autre roman des Rougon-Macquart. »",
          "« En conclusion, la mine est sombre. »",
        ],
        answer: 2,
        explanation:
          "L’ouverture doit proposer un **rapprochement justifié** qui élargit la réflexion. La question au lecteur est une familiarité à éviter ; le jugement de valeur et la redite n’ouvrent rien.",
      },
      {
        id: "1re-francais-05-ct-7",
        prompt:
          "Le passage d’une partie à l’autre dans le développement doit être assuré par :",
        choices: [
          "Un saut de page",
          "Un titre souligné",
          "Une liste à puces",
          "Une transition qui fait le bilan de la partie et annonce la suivante",
        ],
        answer: 3,
        explanation:
          "Le commentaire est **entièrement rédigé**, sans titres ni listes. Les **transitions** (une ou deux phrases) dressent un bilan et introduisent la partie suivante, ce qui rend la progression visible. On saute simplement une ligne entre les parties.",
      },
      {
        id: "1re-francais-05-ct-8",
        prompt:
          "Un élève découvre un texte et repère un champ lexical de la lumière. Quelle démarche est la meilleure ?",
        choices: [
          "Lister tous les mots du champ lexical dans un paragraphe sans autre commentaire",
          "Relier ce champ lexical à un autre (par exemple l’ombre) pour dégager une opposition significative et l’interpréter",
          "Ignorer ce relevé car les champs lexicaux sont trop simples",
          "Le mentionner uniquement dans la conclusion",
        ],
        answer: 1,
        explanation:
          "Un champ lexical prend sens par sa **fonction** dans le texte : opposition lumière/ombre, progression, symbole. Il faut citer quelques termes choisis et **interpréter** le réseau, pas en dresser une liste exhaustive.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. MÉTHODE DU BAC : LA DISSERTATION
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-francais-06",
    title: "Méthode du bac : la dissertation",
    summary:
      "La dissertation consiste à répondre de façon argumentée et nuancée à une question littéraire portant sur une œuvre étudiée et son parcours, en s’appuyant sur des exemples précis.",
    objectives: [
      "Je sais analyser un sujet de dissertation et en dégager une problématique.",
      "Je sais choisir entre plan dialectique, analytique et thématique selon la question posée.",
      "Je sais construire un paragraphe argumentatif : argument, exemple analysé, lien au sujet.",
      "Je sais rédiger une introduction et une conclusion de dissertation.",
    ],
    sections: [
      {
        title: "Analyser le sujet et formuler la problématique",
        body: [
          "La dissertation porte sur l’une des **œuvres intégrales** étudiées dans l’année et sur le **parcours** qui l’accompagne. Le sujet se présente souvent sous la forme d’une **question** (« Peut-on dire que… ? », « Dans quelle mesure… ? ») ou d’une **citation** à discuter. Il faut y répondre avec des arguments organisés, illustrés par des exemples précis tirés de l’œuvre, et éventuellement d’autres lectures.",
          "La première étape, décisive, est l’**analyse du sujet**. Soulignez chaque mot important et définissez-le : un mot comme « seulement », « toujours », « uniquement » ou « surtout » oriente toute la réflexion. Repérez la **thèse implicite** du sujet et les **présupposés**. Reformulez la question avec vos propres mots pour vérifier que vous l’avez comprise.",
          "Le principal danger est le **hors-sujet** : réciter un cours sur l’œuvre au lieu de répondre à la question posée. Un autre danger est de ne traiter qu’une partie du sujet (par exemple oublier un des deux termes d’un sujet du type « émouvoir et instruire »).",
          "La **problématique** fait apparaître la **tension** ou le **paradoxe** contenu dans le sujet. Par exemple, pour le sujet « La poésie de Baudelaire n’est-elle qu’une plainte ? », la tension oppose le spleen (la plainte) à la quête d’idéal et au travail de transformation de la laideur en beauté. Problématique possible : « La poésie baudelairienne se réduit-elle à l’expression d’une souffrance, ou fait-elle de cette souffrance la matière d’une création ? »",
        ],
        keyPoints: [
          "Définir chaque terme du sujet, surtout les mots restrictifs (seulement, toujours, uniquement).",
          "Repérer la thèse implicite et les présupposés.",
          "La problématique exprime une tension, elle ne recopie pas le sujet.",
          "Ne jamais réciter le cours : répondre à la question posée.",
        ],
        example: {
          title: "Analyser un sujet pas à pas",
          steps: [
            "Sujet : « Le théâtre de Molière se contente-t-il de faire rire ? »",
            "Mots clés : « se contente » (restriction), « faire rire » (comique sous toutes ses formes).",
            "Thèse implicite : le théâtre de Molière serait un simple divertissement.",
            "Tension : le rire peut aussi servir à critiquer les mœurs et à inquiéter.",
            "Problématique : le rire moliéresque n’est-il qu’un divertissement, ou devient-il un instrument de critique, voire de malaise ?",
          ],
        },
      },
      {
        title: "Choisir et construire le plan",
        body: [
          "Le **plan dialectique** convient aux questions fermées (réponse oui/non) et aux citations à discuter : I. On peut en effet soutenir la thèse (avec ses arguments) ; II. Cette thèse doit pourtant être nuancée ou contestée ; III. Dépassement : une réponse plus fine qui concilie ou déplace le problème. La troisième partie n’est pas un compromis tiède : elle propose une perspective nouvelle.",
          "Le **plan analytique** (ou explicatif) convient aux questions ouvertes du type « Comment… ? » ou « Pourquoi… ? » : il explore successivement les causes, les formes et les effets d’un phénomène. Le **plan thématique** examine les différents aspects d’une notion (par exemple : les différentes fonctions du personnage).",
          "Chaque partie comprend deux ou trois **arguments**, chacun développé dans un paragraphe. Un **argument** est une idée générale qui répond à la question ; il doit être appuyé par un **exemple** précis (scène, passage, citation exacte) qui est **analysé**, puis relié explicitement au sujet. Un exemple sans analyse ou un argument sans exemple affaiblissent la démonstration.",
          "Variez vos exemples : n’utilisez pas toujours le même passage, puisez dans toute l’œuvre et, si c’est pertinent, dans le parcours associé et dans vos lectures personnelles. Retenez au moins une dizaine de citations courtes et sûres de l’œuvre étudiée.",
        ],
        keyPoints: [
          "Plan dialectique : thèse → antithèse/nuance → dépassement.",
          "Plan analytique : causes → formes → effets (ou manifestations → raisons → conséquences).",
          "Plan thématique : aspects successifs d’une notion.",
          "Paragraphe = argument + exemple analysé + lien au sujet.",
        ],
        formulas: [
          "Question fermée (« Peut-on dire que… ? ») → plan dialectique",
          "Question ouverte (« Comment… ? », « Pourquoi… ? ») → plan analytique ou thématique",
          "Paragraphe : A (argument) + E (exemple) + A (analyse) + L (lien au sujet)",
        ],
        example: {
          title: "Plan dialectique pour le sujet sur Molière",
          steps: [
            "I. Le théâtre de Molière est d’abord un théâtre du rire : comique de gestes, de mots, de situation (coups de bâton, quiproquos).",
            "II. Mais ce rire sert à corriger les mœurs : il dénonce l’hypocrisie, l’avarice, la vanité (Tartuffe, L’Avare).",
            "III. Le rire laisse parfois place au malaise : certains dénouements restent amers et certains personnages inquiètent (Alceste, Dom Juan).",
            "Chaque partie : deux ou trois arguments illustrés par des scènes précises.",
            "Transitions : bilan de la partie + question qui lance la suivante.",
          ],
        },
      },
      {
        title: "Rédiger l’introduction, le développement et la conclusion",
        body: [
          "L’**introduction** comprend cinq temps : une **amorce** (accroche liée au sujet : contexte, citation, fait littéraire), la **citation ou reformulation du sujet**, l’**analyse des termes** (définitions, tension), la **problématique** et l’**annonce du plan**. Elle se rédige souvent en dernier au brouillon, mais doit être soignée car elle donne la première impression au correcteur.",
          "Le **développement** est rédigé en paragraphes séparés par un alinéa, avec des **transitions** entre les parties. Les connecteurs logiques (d’abord, en outre, cependant, ainsi, dès lors) rendent la progression lisible. Le registre doit être soutenu, sans « je » envahissant ; on utilise plutôt « nous » ou les tournures impersonnelles (« on peut penser que »).",
          "La **conclusion** répond clairement à la question posée en reprenant le parcours du développement, puis propose une **ouverture** (autre œuvre, autre genre, autre époque) qui prolonge la réflexion de façon justifiée.",
          "**Gestion du temps (4 h)** : environ 1 h 15 de brouillon (analyse du sujet, recherche d’idées et d’exemples, plan détaillé, introduction et conclusion rédigées), 2 h 15 de rédaction, 20 à 30 minutes de relecture. Ne rédigez pas tout au brouillon : vous n’aurez pas le temps de recopier.",
        ],
        keyPoints: [
          "Introduction : amorce · sujet · analyse des termes · problématique · plan.",
          "Développement rédigé, transitions, connecteurs, registre soutenu.",
          "Conclusion : réponse nette + ouverture.",
          "Temps : 1 h 15 de brouillon, 2 h 15 de rédaction, 20-30 min de relecture.",
        ],
        formulas: [
          "Introduction = amorce + sujet + définitions/tension + problématique + annonce du plan",
          "Conclusion = bilan (réponse à la problématique) + ouverture",
        ],
        example: {
          title: "Rédiger un paragraphe argumentatif",
          steps: [
            "Argument : chez Baudelaire, la souffrance n’est pas seulement subie, elle devient matière poétique.",
            "Exemple : dans « L’Albatros », la déchéance de l’oiseau capturé est transformée en allégorie du poète.",
            "Citation : « Le Poète est semblable au prince des nuées ».",
            "Analyse : la comparaison explicite élève la souffrance du poète au rang de symbole universel.",
            "Lien au sujet : la poésie baudelairienne n’est donc pas une simple plainte, mais une transfiguration de la douleur.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-francais-06-ex-1",
        prompt: "Sur quoi porte la dissertation au bac de français ?",
        choices: [
          "Sur un texte inconnu, à commenter",
          "Sur une question d’actualité sans rapport avec la littérature",
          "Sur une œuvre intégrale étudiée et son parcours associé",
          "Sur la biographie d’un auteur",
        ],
        answer: 2,
        explanation:
          "La dissertation porte sur l’une des **œuvres** au programme étudiées dans l’année et sur son **parcours** associé. Le texte inconnu relève du commentaire ; la biographie et l’actualité sont hors sujet.",
      },
      {
        id: "1re-francais-06-ex-2",
        prompt: "Quel plan convient le mieux à la question « Peut-on dire que ce roman est seulement une histoire d’amour ? »",
        choices: ["Un plan dialectique", "Un plan linéaire", "Un plan chronologique", "Aucun plan"],
        answer: 0,
        explanation:
          "C’est une question **fermée** contenant une restriction (« seulement ») : le **plan dialectique** permet d’abord de reconnaître la part de vérité, puis de nuancer, enfin de dépasser. Le plan linéaire est une méthode d’explication orale.",
      },
      {
        id: "1re-francais-06-ex-3",
        prompt: "Qu’est-ce qu’un **argument** dans une dissertation ?",
        choices: [
          "Une citation recopiée",
          "Le résumé de l’œuvre",
          "Une opinion personnelle non justifiée",
          "Une idée générale qui répond à la question et que l’on appuie sur un exemple",
        ],
        answer: 3,
        explanation:
          "L’**argument** est une idée qui fait avancer la réponse à la problématique. Il doit être illustré par un **exemple** analysé. Une citation seule n’est qu’une preuve, et le résumé de l’œuvre n’argumente pas.",
      },
      {
        id: "1re-francais-06-ex-4",
        prompt: "Quelle étape doit précéder la recherche d’idées ?",
        choices: [
          "La rédaction de la conclusion",
          "L’analyse précise des termes du sujet",
          "La relecture orthographique",
          "Le choix de l’ouverture",
        ],
        answer: 1,
        explanation:
          "Tout part de l’**analyse du sujet** : définir les mots clés, repérer la thèse implicite et la tension. Sans elle, on risque le hors-sujet. La conclusion, l’ouverture et la relecture viennent après.",
      },
      {
        id: "1re-francais-06-ex-5",
        prompt: "Quel est le principal risque quand on connaît bien son cours sur une œuvre ?",
        choices: [
          "Faire des fautes d’orthographe",
          "Écrire trop court",
          "Réciter le cours sans répondre à la question posée",
          "Oublier l’introduction",
        ],
        answer: 2,
        explanation:
          "Le **hors-sujet** par récitation est l’erreur la plus fréquente : le cours fournit des matériaux, mais ils doivent être **sélectionnés et orientés** pour répondre précisément au sujet.",
      },
      {
        id: "1re-francais-06-ex-6",
        prompt: "Que contient l’introduction d’une dissertation ?",
        choices: [
          "Amorce, sujet, analyse des termes, problématique, annonce du plan",
          "Uniquement la problématique",
          "Le premier argument du développement",
          "La conclusion anticipée",
        ],
        answer: 0,
        explanation:
          "L’introduction suit cinq temps : **amorce**, **sujet** (cité ou reformulé), **analyse** des termes, **problématique** et **annonce du plan**. Elle ne développe aucun argument et ne donne pas la réponse finale.",
      },
    ],
    test: [
      {
        id: "1re-francais-06-ct-1",
        prompt:
          "Dans le sujet « La tragédie se contente-t-elle de susciter la pitié ? », quel mot impose de nuancer ?",
        choices: ["« tragédie »", "« pitié »", "« susciter »", "« se contente »"],
        answer: 3,
        explanation:
          "« **Se contente** » est une **restriction** : il invite à montrer que la tragédie suscite bien la pitié, mais aussi autre chose (la terreur, l’admiration, la réflexion sur le destin ou le pouvoir). Les autres mots doivent être définis, mais c’est celui-ci qui crée la tension.",
      },
      {
        id: "1re-francais-06-ct-2",
        prompt:
          "Quel est le rôle de la troisième partie d’un plan dialectique ?",
        choices: [
          "Répéter la première partie avec d’autres mots",
          "Dépasser l’opposition en proposant une perspective nouvelle",
          "Faire la liste des exemples non utilisés",
          "Donner un avis personnel sans argument",
        ],
        answer: 1,
        explanation:
          "La troisième partie **dépasse** la tension entre thèse et antithèse : elle déplace le problème ou en propose une lecture plus juste. Ce n’est ni une répétition, ni un catalogue, ni un compromis sans argument.",
      },
      {
        id: "1re-francais-06-ct-3",
        prompt:
          "Un élève écrit : « Dans Tartuffe, Orgon se cache sous la table. » et passe à l’idée suivante. Quel est le problème ?",
        choices: [
          "L’exemple est mentionné mais ni analysé ni relié au sujet.",
          "L’exemple est inventé.",
          "Il faudrait citer la page.",
          "Il ne faut jamais d’exemple tiré du théâtre.",
        ],
        answer: 0,
        explanation:
          "Un exemple doit être **analysé** (que montre cette scène ? le comique de situation, la révélation de l’hypocrisie, l’ironie dramatique) et **relié au sujet**. Mentionner un épisode sans l’exploiter ne prouve rien.",
      },
      {
        id: "1re-francais-06-ct-4",
        prompt:
          "Pour la question « Comment le romancier rend-il ses personnages vivants ? », quel plan est le plus adapté ?",
        choices: [
          "Un plan dialectique oui/non",
          "Un plan linéaire",
          "Un plan analytique ou thématique qui examine les différents moyens employés",
          "Un plan en une seule partie",
        ],
        answer: 2,
        explanation:
          "« **Comment** » appelle une question **ouverte** : il ne s’agit pas de répondre oui ou non, mais d’examiner les moyens (portrait, paroles, point de vue, évolution…). Un plan **analytique ou thématique** est donc pertinent.",
      },
      {
        id: "1re-francais-06-ct-5",
        prompt: "Laquelle de ces problématiques est la plus satisfaisante pour le sujet « La poésie doit-elle être engagée ? »",
        choices: [
          "« Qu’est-ce que la poésie ? »",
          "« Les poètes ont-ils écrit des poèmes ? »",
          "« Victor Hugo a-t-il été exilé ? »",
          "« La poésie trouve-t-elle sa valeur dans son utilité pour la cité, ou dans sa liberté et sa recherche de beauté ? »",
        ],
        answer: 3,
        explanation:
          "La bonne problématique fait apparaître la **tension** entre engagement (Hugo, poésie de la Résistance) et autonomie de l’art (l’art pour l’art du Parnasse). Les autres questions sont trop larges, absurdes ou purement factuelles.",
      },
      {
        id: "1re-francais-06-ct-6",
        prompt:
          "Quelle répartition du temps est la plus raisonnable pour une épreuve de 4 heures ?",
        choices: [
          "4 heures de brouillon puis recopiage rapide",
          "Environ 1 h 15 de brouillon, 2 h 15 de rédaction et 20 à 30 minutes de relecture",
          "Rédiger directement sans brouillon ni relecture",
          "3 heures de rédaction intégrale au brouillon puis 1 heure de recopie",
        ],
        answer: 1,
        explanation:
          "Un **plan détaillé** au brouillon (avec introduction et conclusion rédigées) suffit : tout rédiger au brouillon empêche de finir. La **relecture** est indispensable pour corriger l’orthographe et vérifier les citations.",
      },
      {
        id: "1re-francais-06-ct-7",
        prompt:
          "Dans une dissertation, comment utiliser une œuvre lue hors du programme ?",
        choices: [
          "Comme exemple complémentaire, à condition qu’il soit précis et pertinent pour le sujet",
          "Jamais : seules les œuvres au programme peuvent être citées",
          "Comme exemple principal à la place de l’œuvre au programme",
          "Uniquement dans l’introduction",
        ],
        answer: 0,
        explanation:
          "L’œuvre au programme doit rester au **centre** de la réflexion, mais des exemples **complémentaires** (parcours, lectures personnelles) enrichissent la copie s’ils sont précis et bien reliés au sujet.",
      },
      {
        id: "1re-francais-06-ct-8",
        prompt:
          "Quelle transition est la mieux construite entre une partie I (le rire chez Molière) et une partie II (la critique des mœurs) ?",
        choices: [
          "« Passons maintenant à la deuxième partie. »",
          "« II. La critique des mœurs »",
          "« Ainsi, le théâtre de Molière déploie toutes les ressources du comique ; mais ce rire n’a-t-il pas aussi une fonction critique ? »",
          "« Molière est né en 1622. »",
        ],
        answer: 2,
        explanation:
          "Une bonne **transition** fait le **bilan** de la partie achevée et **annonce** la suivante, souvent par une question. Les titres sont interdits dans une copie rédigée, et la formule « passons à » est trop scolaire.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. L’ORAL DU BAC : EXPLICATION LINÉAIRE ET ENTRETIEN
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-francais-07",
    title: "L’oral du bac : explication linéaire et entretien",
    summary:
      "L’oral dure 20 minutes après 30 minutes de préparation : explication linéaire d’un texte étudié en classe et question de grammaire, puis présentation d’une œuvre choisie et entretien avec l’examinateur.",
    objectives: [
      "Je sais organiser mon temps de préparation et le déroulé des 20 minutes d’épreuve.",
      "Je sais mener une explication linéaire mouvement par mouvement sans paraphrase.",
      "Je sais lire un texte à voix haute de manière expressive et juste.",
      "Je sais présenter une œuvre choisie et dialoguer avec l’examinateur lors de l’entretien.",
    ],
    sections: [
      {
        title: "Le déroulement de l’épreuve orale",
        body: [
          "L’oral des épreuves anticipées de français s’appuie sur le **récapitulatif** (ou descriptif) des textes étudiés dans l’année, que vous apportez le jour de l’épreuve avec l’œuvre choisie. L’examinateur choisit un **texte** de ce récapitulatif et une **question de grammaire** portant sur un passage de ce texte. Vous disposez de **30 minutes de préparation**. Vérifiez toujours les modalités précises de votre session sur les textes officiels.",
          "L’épreuve dure **20 minutes** et comporte deux parties. **Première partie (12 minutes, notée sur 12 points)** : lecture expressive de l’extrait, explication linéaire, puis réponse à la question de grammaire. **Deuxième partie (8 minutes, notée sur 8 points)** : présentation de l’œuvre que vous avez choisie parmi celles étudiées ou lues dans l’année, suivie d’un **entretien** avec l’examinateur.",
          "Pendant la préparation, ne rédigez pas tout : notez au brouillon votre **introduction** (rédigée), les **mouvements** du texte avec les citations et analyses clés, la **conclusion** et la réponse de grammaire. Gardez quelques minutes pour réfléchir à l’œuvre que vous présenterez ensuite, que vous avez préparée tout au long de l’année.",
          "L’oral évalue aussi la **communication** : regardez l’examinateur, parlez distinctement, à un rythme posé, avec un vocabulaire précis et un registre soutenu. Ne lisez pas vos notes en continu : elles doivent servir de repères.",
        ],
        keyPoints: [
          "30 min de préparation, 20 min d’épreuve.",
          "Partie 1 (12 min, sur 12) : lecture + explication linéaire + grammaire.",
          "Partie 2 (8 min, sur 8) : présentation de l’œuvre choisie + entretien.",
          "Brouillon : introduction rédigée, mouvements, citations, conclusion, réponse de grammaire.",
        ],
        formulas: [
          "Partie 1 : introduction → lecture → explication par mouvements → conclusion → grammaire",
          "Partie 2 : présentation de l’œuvre choisie → entretien",
        ],
        example: {
          title: "Utiliser au mieux les 30 minutes de préparation",
          steps: [
            "0-3 min : relire le texte, repérer la question de grammaire et le passage concerné.",
            "3-8 min : rédiger l’introduction (situation, problématique, mouvements).",
            "8-22 min : noter pour chaque mouvement les citations et les analyses essentielles.",
            "22-27 min : traiter la question de grammaire avec la méthode apprise.",
            "27-30 min : noter la conclusion et repasser mentalement la présentation de l’œuvre choisie.",
          ],
        },
      },
      {
        title: "L’explication linéaire : méthode",
        body: [
          "L’**explication linéaire** suit le texte dans son ordre, du début à la fin, en montrant comment son sens se construit progressivement. Elle n’est pas une paraphrase : à chaque étape, on cite, on identifie les procédés et on interprète leur effet en lien avec la **problématique**.",
          "L’**introduction** (environ une minute) présente l’auteur et l’œuvre de manière ciblée, situe l’extrait, puis vous procédez à la **lecture** du texte. Formulez ensuite la **problématique** et annoncez les **mouvements** du texte (deux à quatre grandes étapes, avec les lignes ou vers correspondants). L’ordre officiel le plus courant est : présentation, lecture, problématique et mouvements, mais suivez les consignes données en classe.",
          "Le **développement** reprend chaque mouvement : pour chaque phrase ou groupe de vers important, on avance en associant **citation, procédé, interprétation**. Il est inutile de tout commenter : on sélectionne ce qui est le plus significatif, sans sauter de passage important. Des transitions brèves signalent le passage d’un mouvement à l’autre.",
          "La **conclusion** répond à la problématique en synthétisant les étapes du texte, puis peut proposer une **ouverture** (rapprochement avec un autre texte du parcours ou une autre œuvre). Une explication réussie dure environ **dix minutes** ; prenez garde à garder du temps pour la question de grammaire.",
        ],
        keyPoints: [
          "Suivre l’ordre du texte, mouvement par mouvement.",
          "Citer, nommer le procédé, interpréter, toujours en lien avec la problématique.",
          "Introduction : situation, lecture, problématique, mouvements.",
          "Conclusion : réponse à la problématique + ouverture éventuelle.",
        ],
        formulas: [
          "Introduction = présentation ciblée + situation de l’extrait + lecture + problématique + mouvements",
          "Pour chaque passage : citation → procédé → effet → lien à la problématique",
        ],
        example: {
          title: "Début d’explication de « Demain, dès l’aube… » (Hugo)",
          steps: [
            "Situation : poème des Contemplations (1856), daté symboliquement de la veille de l’anniversaire de la mort de Léopoldine.",
            "Problématique : comment ce poème transforme-t-il une marche vers un lieu inconnu en rituel de deuil ?",
            "Mouvements : strophe 1 (le départ décidé), strophe 2 (la marche coupée du monde), strophe 3 (la révélation de la tombe).",
            "Premier vers : « Demain, dès l’aube, à l’heure où blanchit la campagne » ; les compléments de temps accumulés et le futur traduisent une détermination absolue.",
            "Interprétation : le poète s’adresse à un « tu » dont l’identité reste mystérieuse, ce qui crée une attente que la chute résoudra.",
          ],
        },
      },
      {
        title: "La lecture expressive, la présentation de l’œuvre et l’entretien",
        body: [
          "La **lecture** est évaluée : elle doit être fluide, audible, respecter la ponctuation et le sens. En poésie, il faut prononcer les **e muets** qui comptent dans le mètre et faire les **diérèses** nécessaires, ainsi que les liaisons obligatoires, sans marquer exagérément la fin de chaque vers en cas d’enjambement. Le ton doit être adapté au registre (lyrique, ironique, tragique) sans surjouer.",
          "Dans la deuxième partie, vous **présentez l’œuvre** que vous avez choisie parmi les œuvres intégrales étudiées en classe ou lues en lecture cursive. Il ne s’agit pas de résumer : expliquez **pourquoi** vous l’avez choisie, ce qui vous a marqué (un personnage, une scène, une idée, un style), avec des références précises. Préparez cette présentation à l’avance (environ trois minutes).",
          "L’**entretien** prolonge cette présentation : l’examinateur vous pose des questions pour approfondir votre lecture, vous faire réagir, rapprocher l’œuvre d’autres textes ou de votre culture personnelle. Il évalue votre capacité à **dialoguer**, à justifier un jugement, à nuancer. Écoutez bien les questions, prenez une seconde pour réfléchir, appuyez vos réponses sur des exemples, et osez un avis personnel argumenté.",
          "Évitez les réponses en un mot, les affirmations non justifiées et la récitation d’une fiche. Un élève qui reconnaît une limite (« je n’y avais pas pensé, mais on pourrait dire que… ») et construit une réponse sur le moment montre justement l’autonomie attendue.",
        ],
        keyPoints: [
          "Lecture : fluide, juste, respect du mètre et de la ponctuation, ton adapté.",
          "Présentation : raisons du choix et lecture personnelle, pas un résumé.",
          "Entretien : écoute, réponses argumentées, exemples, avis personnel nuancé.",
        ],
        example: {
          title: "Structurer la présentation d’une œuvre choisie",
          steps: [
            "Présenter l’œuvre en une phrase : auteur, titre, date, genre.",
            "Exposer la raison du choix : par exemple un personnage qui vous a surpris ou une question qui vous a fait réfléchir.",
            "Appuyer sur un passage précis, avec une citation courte.",
            "Relier l’œuvre au parcours ou à l’objet d’étude.",
            "Conclure par ce que cette lecture vous a apporté, en ouvrant vers l’entretien.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-francais-07-ex-1",
        prompt: "Combien de temps dure l’épreuve orale proprement dite (hors préparation) ?",
        choices: ["10 minutes", "20 minutes", "30 minutes", "45 minutes"],
        answer: 1,
        explanation:
          "L’épreuve dure **20 minutes** après **30 minutes de préparation** : 12 minutes pour la première partie (lecture, explication, grammaire) et 8 minutes pour la seconde (présentation de l’œuvre et entretien).",
      },
      {
        id: "1re-francais-07-ex-2",
        prompt: "Qu’est-ce qui caractérise l’**explication linéaire** ?",
        choices: [
          "Elle suit le texte dans son ordre pour montrer la construction progressive du sens.",
          "Elle regroupe les remarques par thèmes en trois parties.",
          "Elle résume le texte ligne par ligne.",
          "Elle compare deux textes.",
        ],
        answer: 0,
        explanation:
          "L’explication **linéaire** respecte l’ordre du texte, découpé en **mouvements**, et analyse la progression du sens. Le regroupement par thèmes est la méthode du commentaire écrit ; le résumé ligne à ligne est de la paraphrase.",
      },
      {
        id: "1re-francais-07-ex-3",
        prompt: "Que doit-on présenter dans la deuxième partie de l’oral ?",
        choices: [
          "Un second texte inconnu",
          "La biographie complète d’un auteur",
          "Une œuvre choisie parmi celles étudiées ou lues dans l’année",
          "Un exposé sur la grammaire",
        ],
        answer: 2,
        explanation:
          "La seconde partie commence par la **présentation de l’œuvre choisie** par l’élève (œuvre intégrale étudiée ou lecture cursive), suivie d’un **entretien** avec l’examinateur.",
      },
      {
        id: "1re-francais-07-ex-4",
        prompt: "Quel élément doit figurer dans l’introduction d’une explication linéaire ?",
        choices: [
          "Une liste de toutes les figures de style du texte",
          "La réponse à la question de grammaire",
          "Une opinion personnelle sur l’auteur",
          "La problématique et l’annonce des mouvements du texte",
        ],
        answer: 3,
        explanation:
          "L’introduction situe le texte, comporte la **lecture**, la **problématique** et l’annonce des **mouvements**. La question de grammaire est traitée après l’explication ; les relevés se font dans le développement.",
      },
      {
        id: "1re-francais-07-ex-5",
        prompt: "Lors de la lecture d’un alexandrin, que faut-il faire avec un e muet suivi d’une consonne ?",
        choices: [
          "Le prononcer, car il compte dans le mètre",
          "Ne jamais le prononcer",
          "Le remplacer par une pause",
          "Le prononcer uniquement en fin de vers",
        ],
        answer: 0,
        explanation:
          "Un e muet suivi d’une consonne **compte** dans le mètre et doit être légèrement prononcé pour respecter les 12 syllabes. En fin de vers, il ne compte pas ; devant une voyelle, il s’élide.",
      },
      {
        id: "1re-francais-07-ex-6",
        prompt: "Pendant l’entretien, quelle attitude est attendue ?",
        choices: [
          "Réciter une fiche apprise par cœur",
          "Répondre par oui ou non pour gagner du temps",
          "Éviter de donner un avis personnel",
          "Écouter les questions et répondre de façon argumentée, avec des exemples",
        ],
        answer: 3,
        explanation:
          "L’entretien évalue la capacité à **dialoguer**, à **justifier** et à **nuancer** un point de vue personnel. Les réponses brèves, la récitation et l’absence d’avis sont pénalisées.",
      },
    ],
    test: [
      {
        id: "1re-francais-07-ct-1",
        prompt: "Comment sont répartis les 20 points de l’oral ?",
        choices: [
          "10 points pour l’explication, 10 points pour l’entretien",
          "12 points pour la première partie (lecture, explication, grammaire), 8 points pour la seconde (œuvre et entretien)",
          "20 points pour l’explication seule",
          "8 points pour la première partie, 12 points pour la seconde",
        ],
        answer: 1,
        explanation:
          "La **première partie** est notée sur **12 points** (lecture, explication linéaire, question de grammaire) et la **seconde** sur **8 points** (présentation de l’œuvre choisie et entretien).",
      },
      {
        id: "1re-francais-07-ct-2",
        prompt:
          "Un élève dit : « Dans le vers 5, le poète dit qu’il marchera les yeux fixés sur ses pensées. » Qu’est-ce qui manque ?",
        choices: [
          "Le numéro de la page",
          "Une figure de style supplémentaire",
          "L’analyse du procédé et l’interprétation : il paraphrase",
          "Rien, c’est une explication complète",
        ],
        answer: 2,
        explanation:
          "L’élève **paraphrase** : il redit le vers. Il faudrait nommer le procédé (ici une image qui dit l’intériorisation du regard) et en **interpréter** l’effet (le poète est coupé du monde extérieur, tout entier tourné vers son deuil).",
      },
      {
        id: "1re-francais-07-ct-3",
        prompt:
          "Comment découper un texte en **mouvements** pour l’explication linéaire ?",
        choices: [
          "En repérant les étapes de son sens (changement de thème, de ton, de temps, de destinataire…)",
          "En coupant mécaniquement le texte en trois parties égales",
          "En suivant les paragraphes de la page d’en face",
          "En regroupant les figures de style par type",
        ],
        answer: 0,
        explanation:
          "Les mouvements correspondent aux **étapes du sens** : un changement de temps verbal, de thème, de point de vue, de registre ou de destinataire signale souvent une rupture. Leur longueur peut être inégale.",
      },
      {
        id: "1re-francais-07-ct-4",
        prompt:
          "Dans une explication linéaire, faut-il commenter chaque mot du texte ?",
        choices: [
          "Oui, sinon l’explication est incomplète.",
          "Non, il suffit de commenter le premier mouvement.",
          "Oui, en suivant l’ordre alphabétique des mots.",
          "Non : il faut sélectionner les éléments les plus significatifs sans sauter de passage important.",
        ],
        answer: 3,
        explanation:
          "En dix minutes environ, on ne peut tout commenter : il faut **choisir** les passages et procédés les plus significatifs pour la problématique, tout en couvrant l’ensemble du texte.",
      },
      {
        id: "1re-francais-07-ct-5",
        prompt:
          "Lors de la lecture d’un texte à voix haute, un vers s’achève par un enjambement. Comment le lire ?",
        choices: [
          "Marquer une longue pause à la fin du vers",
          "Lier le vers au suivant sans casser le sens, tout en faisant sentir légèrement la fin du vers",
          "Accélérer brusquement",
          "Relire le vers deux fois",
        ],
        answer: 1,
        explanation:
          "L’**enjambement** prolonge la phrase sur le vers suivant : la lecture doit respecter la continuité syntaxique tout en laissant percevoir la limite du vers. Une longue pause trahirait le sens.",
      },
      {
        id: "1re-francais-07-ct-6",
        prompt: "Quelle présentation de l’œuvre choisie est la plus réussie ?",
        choices: [
          "Un résumé chronologique complet de l’intrigue",
          "La lecture de la quatrième de couverture",
          "L’explication argumentée des raisons du choix, appuyée sur un passage précis et reliée au parcours",
          "La biographie détaillée de l’auteur",
        ],
        answer: 2,
        explanation:
          "La présentation doit montrer une **lecture personnelle** : pourquoi cette œuvre, ce qui vous a marqué, avec une référence précise. Un résumé, une quatrième de couverture ou une biographie ne montrent pas votre appropriation de l’œuvre.",
      },
      {
        id: "1re-francais-07-ct-7",
        prompt:
          "L’examinateur demande : « Ce personnage vous paraît-il sympathique ? » Quelle réponse est la meilleure ?",
        choices: [
          "« Oui. »",
          "« Je ne sais pas, le cours ne le dit pas. »",
          "« Il est sympathique parce que l’auteur l’a voulu. »",
          "« En partie : son courage, visible dans telle scène, attire la sympathie, mais sa cruauté envers tel autre personnage la limite, ce qui rend le personnage ambigu. »",
        ],
        answer: 3,
        explanation:
          "La réponse attendue est **personnelle, nuancée et justifiée** par des références au texte. Une réponse brève ou un refus de répondre montrent un manque d’appropriation de l’œuvre.",
      },
      {
        id: "1re-francais-07-ct-8",
        prompt: "Que doit faire la conclusion d’une explication linéaire ?",
        choices: [
          "Répondre à la problématique en synthétisant la progression du texte, éventuellement avec une ouverture",
          "Recommencer la lecture du texte",
          "Donner la réponse à la question de grammaire uniquement",
          "Présenter l’œuvre choisie",
        ],
        answer: 0,
        explanation:
          "La conclusion **répond à la problématique** en rappelant comment le sens s’est construit au fil des mouvements ; une **ouverture** pertinente est appréciée. La grammaire et la présentation de l’œuvre viennent ensuite, chacune à sa place.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. GRAMMAIRE DU BAC
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-francais-08",
    title: "Grammaire du bac",
    summary:
      "La question de grammaire de l’oral porte sur une phrase ou un court passage : il faut identifier précisément une notion (interrogation, négation, subordonnées, accord du participe passé, analyse logique) et en interpréter l’effet.",
    objectives: [
      "Je sais analyser une phrase interrogative et une phrase négative avec le vocabulaire grammatical exact.",
      "Je sais découper une phrase complexe en propositions et identifier les subordonnées.",
      "Je sais justifier l’accord d’un participe passé, y compris avec avoir et les verbes pronominaux.",
      "Je sais relier une analyse grammaticale à un effet de sens dans le texte.",
    ],
    sections: [
      {
        title: "L’interrogation et la négation",
        body: [
          "L’**interrogation directe** se termine par un point d’interrogation. On distingue l’**interrogation totale**, qui porte sur toute la phrase et appelle une réponse par oui ou non (« Viendrez-vous ? »), et l’**interrogation partielle**, qui porte sur un élément et commence par un mot interrogatif (qui, que, quoi, où, quand, comment, pourquoi, quel, lequel, combien) : « Où allez-vous ? ».",
          "Trois constructions sont possibles : la simple **intonation** (« Vous venez ? », registre courant), l’emploi de **est-ce que** (« Est-ce que vous venez ? ») et l’**inversion du sujet**, propre au registre soutenu. L’inversion est **simple** quand le sujet est un pronom (« Venez-vous ? ») et **complexe** quand le sujet est un nom repris par un pronom (« Votre frère vient-il ? »). L’**interrogation indirecte** est une subordonnée, sans point d’interrogation : « Je me demande s’il viendra », « Dis-moi où tu vas ». L’**interrogation rhétorique** (ou oratoire) n’attend pas de réponse : elle affirme fortement une idée.",
          "La **négation totale** porte sur l’ensemble de la phrase : « ne… pas », « ne… point » (soutenu ou littéraire). La **négation partielle** porte sur un élément : « ne… jamais » (temps), « ne… plus », « ne… rien », « ne… personne », « ne… aucun », « ne… guère », « ni… ni ». La tournure **restrictive** « ne… que » n’est pas une vraie négation : elle signifie « seulement » (« Il n’a qu’un ami » = il a un seul ami).",
          "Il faut aussi connaître le **ne explétif**, qui n’a pas de valeur négative et apparaît après certains verbes ou locutions (« Je crains qu’il ne vienne » = je crains qu’il vienne), et la **négation lexicale**, exprimée par des préfixes (in-, im-, dé-, a-) ou des mots de sens négatif (« impossible », « refuser »).",
        ],
        keyPoints: [
          "Interrogation totale (oui/non) ≠ partielle (mot interrogatif).",
          "Inversion simple (pronom) ≠ inversion complexe (nom + pronom de reprise).",
          "Interrogation indirecte = subordonnée, sans point d’interrogation.",
          "Négation totale (ne… pas), partielle (ne… jamais, rien, personne…), restrictive (ne… que), ne explétif.",
        ],
        formulas: [
          "Interrogation : intonation · est-ce que · inversion (simple / complexe)",
          "« ne… que » = seulement (pas une négation)",
          "Ne explétif : après craindre, avant que, à moins que, comparatif d’inégalité",
        ],
        example: {
          title: "Analyser une interrogation dans un texte",
          steps: [
            "Phrase : « Que sais-je ? » (devise de Montaigne).",
            "Type : interrogation directe partielle, introduite par le pronom interrogatif « que » (COD).",
            "Construction : inversion simple du sujet pronom « je ».",
            "Registre : soutenu, ce qui donne une forme de maxime.",
            "Effet : la question sans réponse exprime le doute méthodique et l’humilité de l’humaniste face au savoir.",
          ],
        },
      },
      {
        title: "La phrase complexe et les propositions subordonnées",
        body: [
          "L’**analyse logique** consiste à découper une phrase en **propositions** : il y a en général autant de propositions que de **verbes conjugués**. Une phrase simple contient une seule proposition ; une phrase complexe en contient plusieurs, reliées par **juxtaposition** (virgule, point-virgule, deux-points), **coordination** (mais, ou, et, donc, or, ni, car) ou **subordination** (un mot subordonnant introduit une proposition qui dépend d’une principale).",
          "La **subordonnée relative** est introduite par un **pronom relatif** (qui, que, quoi, dont, où, lequel…) et complète un nom ou un pronom, son **antécédent**. Elle est **déterminative** (indispensable au sens : « Les élèves qui ont révisé ont réussi ») ou **explicative** (supprimable, souvent entre virgules : « Les élèves, qui avaient révisé, ont réussi »).",
          "La **subordonnée conjonctive complétive** est introduite par **que** et occupe une fonction essentielle, le plus souvent **COD** du verbe principal : « Je pense que tu as raison ». On rattache aux complétives l’**interrogative indirecte** (« Je me demande si elle viendra ») et l’**infinitive** (« J’entends les oiseaux chanter », où « les oiseaux » est le sujet de l’infinitif).",
          "La **subordonnée circonstancielle** est introduite par une conjonction de subordination (quand, lorsque, parce que, puisque, si, bien que, afin que, pour que, de sorte que…) et exprime une circonstance : **temps**, **cause**, **conséquence**, **but**, **concession/opposition**, **condition**, **comparaison**. Elle est généralement déplaçable et supprimable. Attention au mode : le but et la concession appellent le **subjonctif** (« afin qu’il comprenne », « bien qu’il soit tard »).",
        ],
        keyPoints: [
          "Nombre de propositions = nombre de verbes conjugués.",
          "Relative : pronom relatif + antécédent ; déterminative ou explicative.",
          "Complétive : introduite par que, souvent COD ; + interrogative indirecte et infinitive.",
          "Circonstancielle : temps, cause, conséquence, but, concession, condition, comparaison.",
        ],
        formulas: [
          "« que » pronom relatif → a un antécédent ; « que » conjonction → introduit une complétive, pas d’antécédent",
          "But (afin que, pour que) et concession (bien que, quoique) → subjonctif",
        ],
        example: {
          title: "Analyse logique d’une phrase",
          steps: [
            "Phrase : « Je crois que l’homme qui doute est plus sage que celui qui affirme tout. »",
            "Verbes conjugués : crois, est, doute, affirme → quatre propositions.",
            "Principale : « Je crois ».",
            "Complétive COD de « crois » : « que l’homme… est plus sage que celui… ».",
            "Relatives : « qui doute » (antécédent « l’homme ») et « qui affirme tout » (antécédent « celui »), toutes deux déterminatives.",
          ],
        },
      },
      {
        title: "L’accord du participe passé",
        body: [
          "Employé **sans auxiliaire**, le participe passé s’accorde comme un adjectif avec le nom auquel il se rapporte : « des lettres oubliées ». Avec l’auxiliaire **être**, il s’accorde avec le **sujet** : « Elles sont parties », « La lettre a été écrite » (passif).",
          "Avec l’auxiliaire **avoir**, le participe passé **ne s’accorde jamais avec le sujet**. Il s’accorde avec le **COD** uniquement si ce COD est **placé avant** le verbe : « J’ai cueilli des fleurs » (COD après : pas d’accord) ; « Les fleurs que j’ai cueillies » (COD « que », mis pour « fleurs », placé avant : accord au féminin pluriel) ; « Ces fleurs, je les ai cueillies ».",
          "Cas particuliers : avec **en** COD, on n’accorde pas (« Des fleurs, j’en ai cueilli ») ; les participes des **verbes impersonnels** restent invariables (« les chaleurs qu’il a fait », « les efforts qu’il a fallu ») ; devant un **infinitif**, on accorde si le COD placé avant fait l’action de l’infinitif (« les musiciens que j’ai entendus jouer ») et on n’accorde pas sinon (« les airs que j’ai entendu jouer ») ; « fait » suivi d’un infinitif reste invariable, et l’orthographe rectifiée de 1990 admet aussi l’invariabilité de « laissé » dans ce cas.",
          "Pour les **verbes pronominaux** (conjugués avec être), on cherche la fonction du pronom réfléchi. Si le verbe est **essentiellement pronominal** (s’évanouir, se souvenir), on accorde avec le sujet : « Elles se sont souvenues ». Sinon, on applique la règle de l’auxiliaire avoir : « Elles se sont lavées » (se = COD placé avant : accord) ; « Elles se sont lavé les mains » (COD « les mains » placé après : pas d’accord) ; « Ils se sont parlé » (se = COI : pas d’accord).",
        ],
        keyPoints: [
          "Être → accord avec le sujet.",
          "Avoir → accord avec le COD seulement s’il est placé avant ; jamais avec le sujet.",
          "En, verbes impersonnels, fait + infinitif → invariable.",
          "Pronominaux : essentiellement pronominaux → sujet ; sinon, fonction du pronom (COD avant = accord, COI = pas d’accord).",
        ],
        formulas: [
          "Être : PP accordé avec le sujet",
          "Avoir : PP accordé avec le COD si COD avant le verbe",
          "Pronominal : se COD → accord ; se COI → invariable ; COD placé après → invariable",
        ],
        example: {
          title: "Justifier un accord à l’oral",
          steps: [
            "Phrase : « Les promesses qu’il avait faites furent oubliées. »",
            "« faites » : auxiliaire avoir ; COD « qu’ » (pronom relatif mis pour « promesses ») placé avant → accord au féminin pluriel.",
            "« oubliées » : passif avec l’auxiliaire être → accord avec le sujet « Les promesses ».",
            "Méthode : identifier l’auxiliaire, puis le sujet ou le COD et sa place.",
            "Effet possible dans un texte : la tournure passive efface l’agent et met l’accent sur les promesses trahies.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "1re-francais-08-ex-1",
        prompt: "« Viendrez-vous demain ? » Quel type d’interrogation est-ce ?",
        choices: [
          "Interrogation partielle",
          "Interrogation indirecte",
          "Interrogation totale",
          "Interrogation rhétorique",
        ],
        answer: 2,
        explanation:
          "La question appelle une réponse par **oui ou non** : c’est une **interrogation totale**, directe, construite par **inversion simple** du sujet pronom « vous ». Il n’y a pas de mot interrogatif (sinon elle serait partielle).",
      },
      {
        id: "1re-francais-08-ex-2",
        prompt: "« Il n’a que dix euros. » Quelle est la valeur de « ne… que » ?",
        choices: [
          "Négation totale",
          "Tournure restrictive signifiant « seulement »",
          "Ne explétif",
          "Négation partielle portant sur le temps",
        ],
        answer: 1,
        explanation:
          "« Ne… que » est une tournure **restrictive** : la phrase est affirmative sur le fond (il a dix euros, et seulement dix euros). Ce n’est donc pas une négation au sens propre.",
      },
      {
        id: "1re-francais-08-ex-3",
        prompt: "Combien de propositions la phrase « Quand il pleut, je reste chez moi et je lis » contient-elle ?",
        choices: ["Une", "Deux", "Quatre", "Trois"],
        answer: 3,
        explanation:
          "Trois verbes conjugués (pleut, reste, lis) → **trois propositions** : une subordonnée circonstancielle de temps (« Quand il pleut ») et deux propositions principales coordonnées par « et ».",
      },
      {
        id: "1re-francais-08-ex-4",
        prompt: "Choisissez l’orthographe correcte : « Les lettres que j’ai … »",
        choices: ["écrites", "écrit", "écrits", "écrite"],
        answer: 0,
        explanation:
          "Avec l’auxiliaire **avoir**, le participe s’accorde avec le **COD placé avant** : « que », mis pour « les lettres » (féminin pluriel). On écrit donc « **écrites** ».",
      },
      {
        id: "1re-francais-08-ex-5",
        prompt: "Dans « Le livre que tu m’as prêté est passionnant », quelle est la nature de « que tu m’as prêté » ?",
        choices: [
          "Subordonnée conjonctive complétive",
          "Subordonnée circonstancielle de cause",
          "Subordonnée relative",
          "Proposition indépendante",
        ],
        answer: 2,
        explanation:
          "« que » est un **pronom relatif** qui reprend son antécédent « Le livre » : c’est une **subordonnée relative** déterminative. Une complétive n’aurait pas d’antécédent.",
      },
      {
        id: "1re-francais-08-ex-6",
        prompt: "« Elles sont arrivées en retard. » Pourquoi « arrivées » est-il au féminin pluriel ?",
        choices: [
          "Parce qu’il s’accorde avec le COD placé avant",
          "Parce qu’avec l’auxiliaire être, il s’accorde avec le sujet « Elles »",
          "Parce qu’il est invariable",
          "Parce qu’il s’accorde avec « retard »",
        ],
        answer: 1,
        explanation:
          "Avec l’auxiliaire **être**, le participe passé s’accorde avec le **sujet** : « Elles » est féminin pluriel, d’où « arrivées ». Le verbe « arriver » n’a d’ailleurs pas de COD.",
      },
    ],
    test: [
      {
        id: "1re-francais-08-ct-1",
        prompt: "« Votre père est-il rentré ? » Comment qualifier précisément cette construction ?",
        choices: [
          "Inversion simple du sujet",
          "Interrogation par intonation",
          "Interrogation indirecte",
          "Inversion complexe : le sujet nominal est repris par un pronom après le verbe",
        ],
        answer: 3,
        explanation:
          "Le sujet est un **nom** (« Votre père ») repris par le pronom « il » placé après l’auxiliaire : c’est une **inversion complexe**, typique du registre soutenu. L’inversion simple ne concerne que les sujets pronoms (« Est-il rentré ? »).",
      },
      {
        id: "1re-francais-08-ct-2",
        prompt: "« Je crains qu’il ne pleuve. » Quelle est la valeur de « ne » ?",
        choices: [
          "Ne explétif, sans valeur négative",
          "Négation totale",
          "Négation restrictive",
          "Négation partielle",
        ],
        answer: 0,
        explanation:
          "Après un verbe de crainte, le **ne explétif** n’a **pas de valeur négative** : la phrase signifie « je crains qu’il pleuve ». Il est facultatif et propre à la langue soutenue ; il n’y a pas de « pas » associé.",
      },
      {
        id: "1re-francais-08-ct-3",
        prompt: "« Elles se sont lavé les mains. » Pourquoi « lavé » est-il invariable ?",
        choices: [
          "Parce que le verbe est essentiellement pronominal",
          "Parce que le sujet est masculin",
          "Parce que le COD « les mains » est placé après le verbe ; « se » est COI",
          "Parce que l’auxiliaire être impose l’invariabilité",
        ],
        answer: 2,
        explanation:
          "Pour ce pronominal, on applique la règle de **avoir** : le COD est « **les mains** », placé **après** le verbe, et « se » est COI (laver les mains **à soi**). Donc pas d’accord. Comparez avec « Elles se sont lavées » où « se » est COD.",
      },
      {
        id: "1re-francais-08-ct-4",
        prompt:
          "Dans « Je sais que tu viendras », quelle est la fonction de la subordonnée « que tu viendras » ?",
        choices: [
          "Complément circonstanciel de but",
          "COD du verbe « sais »",
          "Complément de l’antécédent",
          "Sujet du verbe « sais »",
        ],
        answer: 1,
        explanation:
          "« que » est une **conjonction de subordination** (il n’a pas d’antécédent) : la proposition est une **complétive**, **COD** de « sais » (je sais quoi ? que tu viendras).",
      },
      {
        id: "1re-francais-08-ct-5",
        prompt: "Choisissez la phrase correctement orthographiée.",
        choices: [
          "Les chaleurs qu’il a faites cet été étaient terribles.",
          "Les efforts qu’il a fallus ont été immenses.",
          "Des pommes, j’en ai mangées trois.",
          "Les musiciens que j’ai entendus jouer étaient excellents.",
        ],
        answer: 3,
        explanation:
          "« **entendus** » s’accorde car le COD « que » (les musiciens), placé avant, **fait l’action** de jouer. En revanche, « fait » et « fallu » de verbes impersonnels restent invariables (« qu’il a fait », « qu’il a fallu »), et on n’accorde pas avec « en » (« j’en ai mangé trois »).",
      },
      {
        id: "1re-francais-08-ct-6",
        prompt:
          "« Bien qu’il soit fatigué, il continue. » Quelle est la nature et la valeur de la subordonnée ?",
        choices: [
          "Circonstancielle de concession, au subjonctif",
          "Circonstancielle de cause, à l’indicatif",
          "Relative explicative",
          "Complétive COD",
        ],
        answer: 0,
        explanation:
          "« Bien que » introduit une **circonstancielle de concession** : on reconnaît un fait (la fatigue) qui aurait dû empêcher l’action principale, sans l’empêcher. Elle se construit au **subjonctif** (« soit »).",
      },
      {
        id: "1re-francais-08-ct-7",
        prompt:
          "« Les élèves, qui avaient révisé, ont réussi. » Quelle différence de sens avec « Les élèves qui avaient révisé ont réussi » ?",
        choices: [
          "Aucune, les virgules sont facultatives.",
          "Avec virgules, la relative est déterminative ; sans virgules, explicative.",
          "Avec virgules, la relative est explicative (tous les élèves ont révisé) ; sans virgules, déterminative (seuls ceux qui ont révisé ont réussi).",
          "Sans virgules, la proposition devient une complétive.",
        ],
        answer: 2,
        explanation:
          "La relative **explicative** (entre virgules) ajoute une information sur l’ensemble des élèves : tous avaient révisé. La relative **déterminative** restreint l’antécédent : seuls ceux qui avaient révisé ont réussi. La ponctuation change donc le sens.",
      },
      {
        id: "1re-francais-08-ct-8",
        prompt:
          "« N’est-ce pas assez de souffrir ? » s’exclame un personnage tragique. Quelle analyse est la plus complète ?",
        choices: [
          "Interrogation partielle qui attend une information précise",
          "Interrogation rhétorique à la forme négative, qui affirme avec force qu’il souffre assez",
          "Interrogation indirecte introduite par « si »",
          "Phrase déclarative à la forme affirmative",
        ],
        answer: 1,
        explanation:
          "C’est une interrogation **totale** construite par inversion, à la **forme négative**, mais **rhétorique** : elle n’attend pas de réponse et équivaut à une affirmation forte (« c’est bien assez de souffrir »). L’effet est pathétique : la question souligne le désespoir du personnage.",
      },
    ],
  },
];

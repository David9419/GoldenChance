import type { Chapter } from "../../types";

export const chapters: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // Chapitre 1 — Le présent
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-anglais-01",
    title: "Le présent : present simple et present continuous",
    summary:
      "Ce chapitre t’apprend à choisir entre le present simple (habitudes, vérités générales) et le present continuous (action en cours), et à repérer les verbes d’état qui refusent la forme en -ing.",
    objectives: [
      "Je sais conjuguer un verbe au present simple, y compris le -s de la 3e personne du singulier.",
      "Je sais former le present continuous avec be + V-ing à toutes les formes.",
      "Je sais choisir le bon présent selon le sens (habitude ou action en cours).",
      "Je sais reconnaître les verbes d’état (like, know, want…) qui ne se mettent pas en -ing.",
    ],
    sections: [
      {
        title: "Le present simple : habitudes et vérités générales",
        body: [
          "Le **present simple** sert à parler de ce qui est **habituel, régulier ou toujours vrai** : une routine, un goût, un fait scientifique, un horaire. Il est souvent accompagné d’adverbes de fréquence comme **always, usually, often, sometimes, rarely, never** ou d’expressions comme **every day, on Mondays, twice a week**.",
          "À la forme affirmative, le verbe garde sa base verbale, sauf à la **3e personne du singulier (he, she, it)** où l’on ajoute **-s** (ou **-es** après -s, -sh, -ch, -x, -o : she watches, he goes ; et **-ies** après consonne + y : it flies). Attention aux irréguliers : **have → has**, **be → am / is / are**.",
          "Aux formes négative et interrogative, on utilise l’auxiliaire **do / does** et le verbe revient à la **base verbale** : « She doesn’t like coffee » (et non *doesn’t likes*). C’est l’auxiliaire qui porte le -s : **Does he play football?**",
          "Place de l’adverbe de fréquence : il se met **avant le verbe** (I often read), mais **après be** (She is always late). C’est une erreur fréquente chez les élèves français.",
        ],
        keyPoints: [
          "Habitude, vérité générale, goût, horaire → present simple.",
          "3e personne du singulier : **-s** à l’affirmative, **does** à la négative et à l’interrogative.",
          "Après do / does / doesn’t / don’t : **base verbale** sans -s.",
          "Adverbe de fréquence avant le verbe, mais après be.",
        ],
        formulas: [
          "Affirmatif : Sujet + base verbale (+ -s à he/she/it)",
          "Négatif : Sujet + don’t / doesn’t + base verbale",
          "Interrogatif : (Wh-) + Do / Does + sujet + base verbale ?",
        ],
        example: {
          title: "Décrire la routine de Tom",
          steps: [
            "Tom gets up at 7 every morning. → Tom se lève à 7 h tous les matins (habitude → present simple, -s car he).",
            "He usually takes the bus to school. → Il prend généralement le bus pour aller au lycée (adverbe avant le verbe).",
            "He doesn’t eat breakfast. → Il ne prend pas de petit-déjeuner (doesn’t + base verbale).",
            "Does he like maths? – Yes, he does. → Est-ce qu’il aime les maths ? – Oui (réponse courte avec l’auxiliaire).",
            "Water boils at 100°C. → L’eau bout à 100 °C (vérité générale).",
          ],
        },
      },
      {
        title: "Le present continuous : l’action en cours",
        body: [
          "Le **present continuous** (ou présent en be + -ing) décrit une action **en train de se dérouler au moment où l’on parle**, ou une situation **temporaire**. Il correspond souvent à « être en train de » en français. On le repère avec des marqueurs comme **now, right now, at the moment, today, this week, Look!, Listen!**",
          "Il se forme avec l’auxiliaire **be conjugué au présent (am / is / are)** suivi du verbe en **-ing**. À la négative, on ajoute **not** après be (I’m not working) ; à l’interrogative, on inverse be et le sujet (Are you listening?).",
          "Orthographe du -ing : le **-e muet tombe** (make → making), la **consonne finale double** après une voyelle courte accentuée (run → running, swim → swimming), et **-ie devient -y** (lie → lying, die → dying).",
          "Il sert aussi à parler d’un **projet futur déjà organisé** : « I’m seeing the dentist tomorrow » (j’ai rendez-vous chez le dentiste demain). On reverra cet emploi au chapitre sur le futur.",
        ],
        keyPoints: [
          "Action en cours ou situation temporaire → present continuous.",
          "Marqueurs : now, at the moment, Look!, this week…",
          "be (am/is/are) + V-ing : be porte la négation et l’inversion.",
          "Orthographe : making, running, lying.",
        ],
        formulas: [
          "Affirmatif : Sujet + am / is / are + V-ing",
          "Négatif : Sujet + am / is / are + not + V-ing",
          "Interrogatif : (Wh-) + Am / Is / Are + sujet + V-ing ?",
        ],
        example: {
          title: "Comparer habitude et action en cours",
          steps: [
            "I usually walk to school, but today I’m taking the bus because it’s raining.",
            "→ D’habitude je vais au lycée à pied (habitude : present simple)…",
            "→ … mais aujourd’hui je prends le bus (situation temporaire : present continuous)…",
            "→ … parce qu’il pleut (action en cours au moment où l’on parle).",
          ],
        },
      },
      {
        title: "Les verbes d’état (stative verbs)",
        body: [
          "Certains verbes expriment un **état** (une opinion, un sentiment, une perception, une possession) et non une action. On les appelle **verbes d’état** ; ils s’emploient **normalement au present simple, même au moment où l’on parle**. On dit « I **know** the answer » et jamais *I’m knowing*.",
          "Les principaux : verbes de **goût et sentiment** (like, love, hate, prefer, want, need, wish), de **pensée** (know, believe, understand, remember, forget, mean, think au sens de « penser que »), de **perception involontaire** (see, hear, smell, taste), de **possession** (have au sens de posséder, own, belong to) et d’**apparence** (seem, look au sens de « sembler »).",
          "Certains verbes changent de sens selon la forme : **I think it’s a good idea** (= je pense que, opinion → simple) mais **I’m thinking about my future** (= je réfléchis, activité → continuous). De même, **I have a dog** (possession) mais **I’m having lunch** (je déjeune, action).",
        ],
        keyPoints: [
          "Verbes d’état : like, love, want, need, know, understand, believe, belong, seem…",
          "Ils restent au present simple même pour « maintenant ».",
          "think, have, see, taste peuvent être des verbes d’action avec un autre sens.",
        ],
        formulas: [
          "Verbe d’état → present simple : I want / I know / It belongs to…",
          "think (opinion) → simple ; think about (réfléchir) → continuous",
          "have (posséder) → simple ; have lunch / a shower / fun → continuous possible",
        ],
        example: {
          title: "Corriger des erreurs typiques",
          steps: [
            "✗ I’m not understanding this exercise. → ✓ I don’t understand this exercise. (Je ne comprends pas cet exercice.)",
            "✗ This bag is belonging to Emma. → ✓ This bag belongs to Emma. (Ce sac appartient à Emma.)",
            "✓ What are you thinking about? – I’m thinking about the holidays. (À quoi tu penses ? – Je pense aux vacances : activité mentale.)",
            "✓ I think holidays are too short. (Je trouve que les vacances sont trop courtes : opinion → present simple.)",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-anglais-01-ex-1",
        prompt: "Complète : « My sister ___ the piano every Saturday. »",
        choices: ["play", "plays", "is playing", "playing"],
        answer: 1,
        explanation:
          "« Every Saturday » indique une **habitude** → present simple. Le sujet « my sister » est à la 3e personne du singulier (she), donc on ajoute **-s** : **plays**.",
      },
      {
        id: "2nde-anglais-01-ex-2",
        prompt: "Complète : « Be quiet! The baby ___. »",
        choices: ["sleeps", "sleep", "doesn’t sleep", "is sleeping"],
        answer: 3,
        explanation:
          "« Be quiet! » montre que l’action se déroule **au moment où l’on parle** → present continuous : **is sleeping** (be + V-ing). « Sleeps » exprimerait une habitude.",
      },
      {
        id: "2nde-anglais-01-ex-3",
        prompt: "Choisis la forme négative correcte : « He ___ meat. »",
        choices: ["doesn’t eat", "don’t eat", "doesn’t eats", "not eats"],
        answer: 0,
        explanation:
          "Avec he/she/it, la négation du present simple se fait avec **doesn’t**, et le verbe revient à la **base verbale** (sans -s) : **He doesn’t eat meat**. Le -s est déjà porté par l’auxiliaire does.",
      },
      {
        id: "2nde-anglais-01-ex-4",
        prompt: "Quelle phrase est correcte ?",
        choices: [
          "I’m knowing the answer.",
          "I know the answer.",
          "I am know the answer.",
          "I knows the answer.",
        ],
        answer: 1,
        explanation:
          "**Know** est un **verbe d’état** (connaissance) : il ne se met pas en -ing, même au moment présent. Avec « I », pas de -s : **I know the answer**.",
      },
      {
        id: "2nde-anglais-01-ex-5",
        prompt: "Traduis : « Elle est toujours en retard. »",
        choices: [
          "She always is late.",
          "She is late always.",
          "She is always late.",
          "She is always being late.",
        ],
        answer: 2,
        explanation:
          "Avec le verbe **be**, l’adverbe de fréquence se place **après be** : **She is always late**. Avec les autres verbes, il se place avant (She always arrives late).",
      },
      {
        id: "2nde-anglais-01-ex-6",
        prompt: "Quelle est la forme en -ing correcte du verbe « swim » ?",
        choices: ["swiming", "swimeing", "swimming"],
        answer: 2,
        explanation:
          "« Swim » se termine par consonne + voyelle courte + consonne, avec une seule syllabe accentuée : on **double la consonne finale** → **swimming** (comme run → running, sit → sitting).",
      },
    ],
    test: [
      {
        id: "2nde-anglais-01-ct-1",
        prompt: "Complète : « Water ___ at 0°C. »",
        choices: ["is freezing", "freezes", "freeze", "is freeze"],
        answer: 1,
        explanation:
          "Il s’agit d’une **vérité générale** (fait scientifique) → present simple. Sujet « water » = it → **freezes**. Le present continuous décrirait une situation momentanée, ce qui n’est pas le sens ici.",
      },
      {
        id: "2nde-anglais-01-ct-2",
        prompt: "Complète : « I ___ my grandparents this week because my parents are abroad. »",
        choices: ["stay with", "am staying with", "stays with", "staying with"],
        answer: 1,
        explanation:
          "« This week » et la cause (les parents sont à l’étranger) indiquent une **situation temporaire** → present continuous : **I am staying with**. « Staying » seul est incomplet (il manque be).",
      },
      {
        id: "2nde-anglais-01-ct-3",
        prompt: "Quelle phrase est correcte ?",
        choices: [
          "Does she speaks Spanish?",
          "Is she speak Spanish?",
          "Do she speak Spanish?",
          "Does she speak Spanish?",
        ],
        answer: 3,
        explanation:
          "Question au present simple avec she : **Does + sujet + base verbale**. Le -s est porté par does, donc le verbe reste **speak** : **Does she speak Spanish?**",
      },
      {
        id: "2nde-anglais-01-ct-4",
        prompt: "Complète : « This soup ___ delicious! »",
        choices: ["tastes", "is tasting", "taste", "is taste"],
        answer: 0,
        explanation:
          "Ici « taste » signifie « avoir le goût de » : c’est un **verbe d’état** (perception involontaire) → present simple : **tastes**. On dirait « The chef is tasting the soup » (il goûte, action volontaire).",
      },
      {
        id: "2nde-anglais-01-ct-5",
        prompt: "Choisis le sens le plus juste de « What are you thinking about? »",
        choices: [
          "Qu’est-ce que tu penses de ça ?",
          "À quoi es-tu en train de réfléchir ?",
          "Que penses-tu habituellement ?",
          "Pourquoi penses-tu cela ?",
        ],
        answer: 1,
        explanation:
          "« Think about » au present continuous désigne une **activité mentale en cours** : « à quoi penses-tu / réfléchis-tu ? ». Pour demander une opinion, on dirait « What do you think of it? » (present simple).",
      },
      {
        id: "2nde-anglais-01-ct-6",
        prompt: "Trouve l’erreur : « Look! It snows. We don’t often have snow here. »",
        choices: [
          "« Look » devrait être « Looking ».",
          "« It snows » devrait être « It’s snowing ».",
          "« don’t » devrait être « doesn’t ».",
          "« have » devrait être « having ».",
        ],
        answer: 1,
        explanation:
          "« Look! » signale une action **en cours sous nos yeux** → present continuous : **It’s snowing**. La 2e phrase est correcte : « we don’t often have » exprime une généralité (present simple, we → don’t).",
      },
      {
        id: "2nde-anglais-01-ct-7",
        prompt: "Complète : « Who ___ this phone? It ___ to me! »",
        choices: [
          "is owning / is belonging",
          "own / belong",
          "owns / belongs",
          "does own / belong",
        ],
        answer: 2,
        explanation:
          "« Own » et « belong to » sont des **verbes d’état** (possession) → present simple. « Who » est sujet de la question, donc **pas d’auxiliaire do** et le verbe prend le -s : **Who owns…? It belongs to me.**",
      },
      {
        id: "2nde-anglais-01-ct-8",
        prompt: "Traduis : « D’habitude il travaille à Paris, mais en ce moment il travaille à Londres. »",
        choices: [
          "He usually is working in Paris, but at the moment he works in London.",
          "He usually works in Paris, but at the moment he’s working in London.",
          "He works usually in Paris, but at the moment he works in London.",
          "He is usually work in Paris, but he is working in London at the moment.",
        ],
        answer: 1,
        explanation:
          "Habitude (usually) → present simple, adverbe **avant le verbe** : « He usually works ». Situation temporaire (at the moment) → present continuous : « he’s working ». Les autres propositions inversent les temps ou placent mal l’adverbe.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 2 — Le passé
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-anglais-02",
    title: "Le passé : preterit, past continuous et present perfect",
    summary:
      "Ce chapitre t’apprend à raconter des événements passés avec le preterit et le past continuous, et à relier passé et présent grâce au present perfect, avec for et since.",
    objectives: [
      "Je sais conjuguer les verbes réguliers et les principaux verbes irréguliers au preterit.",
      "Je sais utiliser le past continuous pour planter un décor ou une action interrompue.",
      "Je sais choisir entre preterit et present perfect selon le lien avec le présent.",
      "Je sais employer for (durée) et since (point de départ) avec le present perfect.",
    ],
    sections: [
      {
        title: "Le preterit : une action passée et terminée",
        body: [
          "Le **preterit** (prétérit) exprime une action **terminée, située dans un passé coupé du présent**. Il est souvent accompagné d’un **repère temporel daté** : yesterday, last week, in 2015, two days ago, when I was a child. Il correspond au passé composé ou au passé simple français.",
          "Pour les **verbes réguliers**, on ajoute **-ed** à la base : work → worked, play → played, stop → stopped, study → studied. Les **verbes irréguliers** ont une forme propre à apprendre par cœur : go → went, see → saw, buy → bought, take → took, have → had, make → made, write → wrote, be → was / were.",
          "À la négative et à l’interrogative, on utilise **did** (pour toutes les personnes) et le verbe revient à la **base verbale** : « I didn’t go » (et non *didn’t went*), « Did you see the film? ». Le verbe **be** fait exception : wasn’t / weren’t, Was he…?",
          "Le mot **ago** se place **après** la durée : « three years ago » = il y a trois ans.",
        ],
        keyPoints: [
          "Action passée, terminée, datée → preterit.",
          "Réguliers en -ed, irréguliers à apprendre (went, saw, bought…).",
          "did / didn’t + base verbale, pour toutes les personnes.",
          "« il y a » = durée + **ago**.",
        ],
        formulas: [
          "Affirmatif : Sujet + V-ed / forme irrégulière",
          "Négatif : Sujet + didn’t + base verbale",
          "Interrogatif : (Wh-) + Did + sujet + base verbale ?",
        ],
        example: {
          title: "Raconter son week-end",
          steps: [
            "Last Saturday, I went to the cinema with my cousin. → Samedi dernier, je suis allé au cinéma avec mon cousin (go → went).",
            "We saw a horror film. → Nous avons vu un film d’horreur (see → saw).",
            "I didn’t like the ending. → Je n’ai pas aimé la fin (didn’t + base).",
            "Did you watch it too? → Tu l’as vu aussi ?",
          ],
        },
      },
      {
        title: "Le past continuous : décor et action interrompue",
        body: [
          "Le **past continuous** se forme avec **was / were + V-ing**. Il décrit une action **en cours à un moment précis du passé** : « At 8 pm yesterday, I was having dinner » (hier à 20 h, j’étais en train de dîner).",
          "Il sert souvent à **planter le décor** d’un récit (the sun was shining, people were walking…), à la manière de l’imparfait français.",
          "Combiné au preterit, il exprime une **action longue interrompue par une action brève** : « I was walking home **when** it started to rain ». Le past continuous donne l’action de fond, le preterit l’événement soudain. Avec **while**, on relie souvent deux actions longues simultanées : « While I was cooking, my brother was playing video games. »",
        ],
        keyPoints: [
          "was (I / he / she / it) – were (you / we / they) + V-ing.",
          "Action en cours à un moment passé, décor d’un récit.",
          "Action longue (past continuous) + **when** + action brève (preterit).",
          "**while** + actions simultanées.",
        ],
        formulas: [
          "Sujet + was / were + V-ing",
          "Past continuous + when + preterit",
          "While + past continuous, past continuous / preterit",
        ],
        example: {
          title: "Un début de récit",
          steps: [
            "It was raining and the wind was blowing. → Il pleuvait et le vent soufflait (décor).",
            "I was reading in my room when the lights went out. → Je lisais dans ma chambre quand la lumière s’est éteinte.",
            "« was reading » = action longue en cours ; « went out » = événement bref qui l’interrompt.",
            "While my father was looking for candles, I called my friend. → Pendant que mon père cherchait des bougies, j’ai appelé mon ami.",
          ],
        },
      },
      {
        title: "Le present perfect : le lien entre passé et présent",
        body: [
          "Le **present perfect** se forme avec **have / has + participe passé** (V-ed pour les réguliers, 3e colonne pour les irréguliers : seen, been, done, written, gone). Il exprime une action passée **qui a un lien avec le présent** : un bilan, une expérience, une conséquence visible maintenant.",
          "Il s’emploie : pour un **bilan d’expérience** (Have you ever been to London? – No, I’ve never been there), pour un **résultat présent** (I’ve lost my keys → je ne les ai pas maintenant), avec **just, already, yet** (She has just arrived ; Have you finished yet?). On ne l’utilise **jamais avec une date précise** : on dit « I saw him yesterday », pas *I have seen him yesterday*.",
          "Avec **for** et **since**, il exprime une action **commencée dans le passé et qui dure encore** : là où le français utilise le présent (« J’habite ici depuis 2020 »), l’anglais utilise le present perfect : **I have lived here since 2020**. **For** introduit une **durée** (for three years, for a long time) ; **since** introduit un **point de départ** (since 2020, since Monday, since I was ten).",
          "Pour insister sur l’activité qui dure, on peut utiliser le **present perfect continuous** : I have been waiting for an hour (j’attends depuis une heure).",
        ],
        keyPoints: [
          "have / has + participe passé.",
          "Bilan, expérience (ever, never), résultat, just / already / yet.",
          "Jamais avec un repère daté (yesterday, last year, in 2019 → preterit).",
          "« depuis » + action qui dure → present perfect + **for** (durée) / **since** (point de départ).",
        ],
        formulas: [
          "Sujet + have / has + participe passé",
          "Sujet + have / has + participe passé + for + durée",
          "Sujet + have / has + participe passé + since + point de départ",
          "How long have you + participe passé… ? = Depuis combien de temps… ?",
        ],
        example: {
          title: "Traduire « depuis »",
          steps: [
            "« Je connais Léa depuis trois ans. » → Durée = for ; know est un verbe d’état.",
            "→ I have known Léa for three years.",
            "« Je connais Léa depuis la 6e. » → Point de départ = since.",
            "→ I have known Léa since sixth grade.",
            "« Depuis combien de temps apprends-tu l’anglais ? » → How long have you been learning English?",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-anglais-02-ex-1",
        prompt: "Complète : « Yesterday we ___ a great museum. »",
        choices: ["visit", "have visited", "visited", "were visit"],
        answer: 2,
        explanation:
          "« Yesterday » est un repère daté, coupé du présent → **preterit**. Visit est régulier : **visited**. Le present perfect est impossible avec yesterday.",
      },
      {
        id: "2nde-anglais-02-ex-2",
        prompt: "Quel est le preterit de « buy » ?",
        choices: ["buyed", "bought", "brought", "buied"],
        answer: 1,
        explanation:
          "« Buy » est irrégulier : buy – **bought** – bought. Attention à ne pas confondre avec **brought**, preterit de « bring » (apporter).",
      },
      {
        id: "2nde-anglais-02-ex-3",
        prompt: "Complète : « I ___ TV when my mum came home. »",
        choices: ["was watching", "watched", "am watching", "have watched"],
        answer: 0,
        explanation:
          "Action longue en cours dans le passé, **interrompue** par une action brève (came home, au preterit) → past continuous : **was watching**.",
      },
      {
        id: "2nde-anglais-02-ex-4",
        prompt: "Complète : « She has lived in Lyon ___ 2018. »",
        choices: ["for", "since", "ago", "during"],
        answer: 1,
        explanation:
          "2018 est un **point de départ** → **since**. On utiliserait « for » avec une durée (for eight years) et « ago » avec le preterit (She moved to Lyon eight years ago).",
      },
      {
        id: "2nde-anglais-02-ex-5",
        prompt: "Traduis : « Je n’ai jamais vu la mer. »",
        choices: [
          "I didn’t never see the sea.",
          "I haven’t never seen the sea.",
          "I never saw the sea yesterday.",
          "I have never seen the sea.",
        ],
        answer: 3,
        explanation:
          "Bilan d’expérience jusqu’à maintenant → present perfect avec **never** : **I have never seen the sea**. En anglais, pas de double négation : never suffit (pas de not en plus).",
      },
      {
        id: "2nde-anglais-02-ex-6",
        prompt: "Choisis la forme négative correcte : « They ___ to school last Monday. »",
        choices: ["didn’t went", "didn’t go", "don’t went", "wasn’t go"],
        answer: 1,
        explanation:
          "Négation au preterit : **didn’t + base verbale**. Le passé est déjà marqué par did, donc on ne met pas « went » : **They didn’t go**.",
      },
    ],
    test: [
      {
        id: "2nde-anglais-02-ct-1",
        prompt: "Complète : « I ___ my homework. Can I go out now? »",
        choices: ["finished yesterday", "have finished", "was finishing", "finish"],
        answer: 1,
        explanation:
          "Le résultat compte **maintenant** (je peux sortir puisque c’est fini) et il n’y a pas de date → present perfect : **I have finished**. « finished yesterday » rompt le lien avec la question présente.",
      },
      {
        id: "2nde-anglais-02-ct-2",
        prompt: "Traduis : « Nous attendons le bus depuis vingt minutes. »",
        choices: [
          "We are waiting for the bus since twenty minutes.",
          "We wait for the bus for twenty minutes.",
          "We have been waiting for the bus for twenty minutes.",
          "We waited for the bus since twenty minutes.",
        ],
        answer: 2,
        explanation:
          "Action commencée dans le passé et qui **dure encore** → present perfect (ici continuous pour insister sur l’activité). Vingt minutes est une **durée** → **for**. Le présent français « attendons » ne se traduit jamais par un présent anglais avec depuis.",
      },
      {
        id: "2nde-anglais-02-ct-3",
        prompt: "Complète : « When I ___ him in 2019, he ___ in a bakery. »",
        choices: [
          "met / was working",
          "have met / worked",
          "was meeting / worked",
          "met / has worked",
        ],
        answer: 0,
        explanation:
          "« In 2019 » est daté → preterit **met**. L’autre action est un **décor en cours** à ce moment-là → past continuous **was working**. Le present perfect est exclu à cause de la date.",
      },
      {
        id: "2nde-anglais-02-ct-4",
        prompt: "Quelle phrase est correcte ?",
        choices: [
          "I have seen this film last week.",
          "Did you ever been to Scotland?",
          "She has just left the room.",
          "We know each other since ten years.",
        ],
        answer: 2,
        explanation:
          "**She has just left** est correct : just + present perfect pour une action toute récente. Les autres : « last week » impose le preterit ; « Have you ever been » ; « We have known each other for ten years ».",
      },
      {
        id: "2nde-anglais-02-ct-5",
        prompt: "Complète : « How long ___ English? »",
        choices: [
          "do you study",
          "are you studying",
          "did you studied",
          "have you been studying",
        ],
        answer: 3,
        explanation:
          "« How long…? » interroge sur une durée qui **continue jusqu’à maintenant** → present perfect (continuous) : **have you been studying**. C’est l’équivalent de « Depuis combien de temps étudies-tu l’anglais ? ».",
      },
      {
        id: "2nde-anglais-02-ct-6",
        prompt: "Complète : « ___ I was cooking, my sister was setting the table. »",
        choices: ["When suddenly", "While", "Ago", "Since"],
        answer: 1,
        explanation:
          "Deux actions longues **simultanées** au past continuous → **while** (pendant que). « Since » signifie depuis / puisque, « ago » se place après une durée.",
      },
      {
        id: "2nde-anglais-02-ct-7",
        prompt: "Choisis la bonne traduction de « Il est parti il y a deux heures. »",
        choices: [
          "He has left two hours ago.",
          "He left ago two hours.",
          "He left two hours ago.",
          "He has left since two hours.",
        ],
        answer: 2,
        explanation:
          "« Il y a » + durée = **durée + ago**, toujours avec le **preterit** (moment daté, coupé du présent) : **He left two hours ago**. Ago est incompatible avec le present perfect.",
      },
      {
        id: "2nde-anglais-02-ct-8",
        prompt: "Quel trio de verbes irréguliers (base – preterit – participe passé) est correct ?",
        choices: [
          "write – wrote – written",
          "go – went – went",
          "take – took – taked",
          "see – seen – saw",
        ],
        answer: 0,
        explanation:
          "**write – wrote – written** est correct. Les autres : go – went – **gone** ; take – took – **taken** ; see – **saw** – **seen** (preterit et participe inversés).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 3 — Futur et modaux
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-anglais-03",
    title: "Le futur et les modaux",
    summary:
      "Ce chapitre t’apprend à exprimer le futur (will, be going to, present continuous) et à nuancer ta pensée avec les modaux : capacité, obligation, conseil, permission et probabilité.",
    objectives: [
      "Je sais choisir entre will, be going to et le present continuous pour parler du futur.",
      "Je sais utiliser can, could et be able to pour exprimer la capacité et la permission.",
      "Je sais distinguer must, have to, mustn’t et don’t have to.",
      "Je sais donner un conseil avec should et exprimer une probabilité avec may, might, must.",
    ],
    sections: [
      {
        title: "Exprimer le futur : will, be going to, present continuous",
        body: [
          "L’anglais n’a pas de terminaison de futur : il utilise plusieurs structures selon le **degré de certitude** et l’**intention**. **Will + base verbale** exprime une **prédiction** (It will rain tomorrow), une **décision prise sur le moment** (I’m tired, I’ll go to bed), une **promesse** ou une **offre** (I’ll help you). Négation : **won’t** (= will not).",
          "**Be going to + base verbale** exprime une **intention déjà décidée** (I’m going to study medicine) ou une **prédiction fondée sur un indice présent** (Look at those clouds! It’s going to rain).",
          "Le **present continuous** exprime un **projet organisé**, souvent avec une date et un rendez-vous fixé : « We’re flying to Rome on Friday » (les billets sont achetés).",
          "Après **when, as soon as, before, after, until** à valeur de futur, on utilise le **présent**, pas will : « I’ll call you **when I arrive** » (et non *when I will arrive*). C’est un piège classique pour les francophones.",
        ],
        keyPoints: [
          "will : prédiction, décision spontanée, promesse.",
          "be going to : intention décidée, prédiction avec indice visible.",
          "present continuous : projet organisé (rendez-vous, billets).",
          "when / as soon as + **présent** pour un futur.",
        ],
        formulas: [
          "Sujet + will / won’t + base verbale",
          "Sujet + am / is / are + going to + base verbale",
          "Sujet + am / is / are + V-ing + repère futur",
          "Futur + when / as soon as + présent",
        ],
        example: {
          title: "Trois façons de parler de demain",
          steps: [
            "The phone is ringing. – I’ll answer it! → Décision prise sur le moment : will.",
            "I’m going to learn to drive next year. → Intention déjà décidée : be going to.",
            "I’m meeting Sarah at 6 tomorrow. → Rendez-vous fixé : present continuous.",
            "I’ll text you as soon as I get home. → Je t’enverrai un message dès que je serai rentré (présent après as soon as).",
          ],
        },
      },
      {
        title: "Capacité, permission et obligation",
        body: [
          "Les **modaux** (can, could, must, should, may, might, will, would) ont des règles communes : ils sont **invariables** (pas de -s à la 3e personne), suivis de la **base verbale sans to**, et forment eux-mêmes la négation et la question (She can’t swim ; Can you help me?).",
          "**Can** exprime la **capacité** (I can speak Spanish) et la **permission** (Can I go out?). Au passé : **could** (When I was five, I could read). Pour les autres temps, on utilise **be able to** : « I will be able to drive next year ». Pour une demande polie, on préfère **Could you…?** ou **May I…?**",
          "**Must** exprime une **obligation venant de celui qui parle** ou une règle forte (I must work harder ; You must wear a seatbelt). **Have to** exprime une **obligation extérieure** (I have to wear a uniform at school) et sert aux autres temps : had to, will have to.",
          "Attention à la négation : **mustn’t** = **interdiction** (You mustn’t smoke here : c’est interdit) alors que **don’t have to** = **absence d’obligation** (You don’t have to come : tu n’es pas obligé). Les confondre change complètement le sens.",
        ],
        keyPoints: [
          "Modal + base verbale, sans to, sans -s.",
          "can / could / be able to : capacité ; can / may / could : permission.",
          "must : obligation personnelle ; have to : obligation extérieure.",
          "mustn’t = interdit ≠ don’t have to = pas obligé.",
        ],
        formulas: [
          "Sujet + modal + base verbale (She can swim)",
          "Sujet + modal + not + base verbale (You mustn’t run)",
          "Modal + sujet + base verbale ? (Could you help me?)",
        ],
        example: {
          title: "Le règlement intérieur",
          steps: [
            "You must arrive on time. → Vous devez arriver à l’heure (obligation).",
            "You mustn’t use your phone in class. → Il est interdit d’utiliser son téléphone en classe.",
            "You don’t have to wear a uniform. → Vous n’êtes pas obligés de porter un uniforme.",
            "You can eat in the cafeteria. → Vous pouvez manger à la cantine (permission).",
          ],
        },
      },
      {
        title: "Conseil et probabilité : should, may, might, must, can’t",
        body: [
          "**Should** (et sa variante plus forte **ought to**) exprime un **conseil** ou ce qu’il serait bon de faire : « You should see a doctor » (tu devrais voir un médecin). Négation : **shouldn’t**. Pour un reproche sur le passé : **should have + participe passé** (You should have told me = tu aurais dû me le dire).",
          "Les modaux servent aussi à évaluer la **probabilité** d’un fait. On peut les placer sur une échelle : **will** (certain) > **must** (quasi certain, déduction logique) > **should** (probable) > **may** (possible, environ 50 %) > **might / could** (possible mais incertain) > **can’t** (impossible, déduction logique).",
          "Exemples : « He’s not answering. He **must** be asleep » (il doit dormir, j’en suis presque sûr) ; « She **may** come tonight » (il se peut qu’elle vienne) ; « That **can’t** be true! » (ce n’est pas possible !). Remarque : le contraire de **must** en déduction est **can’t**, pas mustn’t.",
        ],
        keyPoints: [
          "should / ought to : conseil ; should have + participe passé : reproche.",
          "must (déduction) = sûrement ; can’t = sûrement pas.",
          "may / might / could = peut-être.",
        ],
        formulas: [
          "Sujet + should + base verbale (conseil)",
          "Sujet + must / may / might / can’t + be + … (probabilité)",
          "Sujet + should have + participe passé (reproche)",
        ],
        example: {
          title: "Déduire à partir d’indices",
          steps: [
            "Situation : Tom’s lights are off and his car isn’t there.",
            "He must be out. → Il doit être sorti (déduction presque certaine).",
            "He might be at the gym. → Il est peut-être à la salle de sport (simple hypothèse).",
            "He can’t be at home. → Il ne peut pas être chez lui (impossibilité logique).",
            "You should call him later. → Tu devrais l’appeler plus tard (conseil).",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-anglais-03-ex-1",
        prompt: "Complète : « Look at that dark sky! It ___ rain. »",
        choices: ["will maybe", "is going to", "is raining to", "going to"],
        answer: 1,
        explanation:
          "On prédit l’avenir à partir d’un **indice visible maintenant** (le ciel sombre) → **be going to** : It **is going to** rain. « going to » seul est incomplet (il manque be).",
      },
      {
        id: "2nde-anglais-03-ex-2",
        prompt: "Complète : « She ___ speak three languages. »",
        choices: ["cans", "can to", "can", "is can"],
        answer: 2,
        explanation:
          "Les modaux sont **invariables** (pas de -s) et suivis de la **base verbale sans to** : **She can speak**.",
      },
      {
        id: "2nde-anglais-03-ex-3",
        prompt: "Traduis : « Tu devrais te reposer. »",
        choices: [
          "You must to rest.",
          "You should rest.",
          "You should to rest.",
          "You would rest.",
        ],
        answer: 1,
        explanation:
          "Le conseil s’exprime avec **should + base verbale** : **You should rest**. Pas de « to » après un modal.",
      },
      {
        id: "2nde-anglais-03-ex-4",
        prompt: "« You mustn’t touch this button. » signifie :",
        choices: [
          "Tu n’es pas obligé de toucher ce bouton.",
          "Tu ne devrais pas toucher ce bouton.",
          "Tu ne peux pas atteindre ce bouton.",
          "Il est interdit de toucher ce bouton.",
        ],
        answer: 3,
        explanation:
          "**Mustn’t** exprime une **interdiction**. « Tu n’es pas obligé » se dirait **You don’t have to**. C’est la confusion la plus fréquente avec ce modal.",
      },
      {
        id: "2nde-anglais-03-ex-5",
        prompt: "Complète : « I’m thirsty. – Wait, I ___ get you some water. »",
        choices: ["’ll", "’m going", "’m getting to", "must to"],
        answer: 0,
        explanation:
          "Décision **prise sur le moment**, en réaction à ce qui vient d’être dit, et offre d’aide → **will** (contracté ’ll) : **I’ll get you some water**.",
      },
      {
        id: "2nde-anglais-03-ex-6",
        prompt: "Complète : « When I was six, I ___ ride a bike. »",
        choices: ["can", "could", "will be able", "must"],
        answer: 1,
        explanation:
          "Capacité **dans le passé** → **could** (preterit de can). « will be able » serait du futur et il manquerait « to ».",
      },
    ],
    test: [
      {
        id: "2nde-anglais-03-ct-1",
        prompt: "Complète : « I’ll phone you when I ___ in London. »",
        choices: ["will arrive", "arrive", "am going to arrive", "arrived"],
        answer: 1,
        explanation:
          "Après **when** à valeur de futur, l’anglais utilise le **présent** et non will : « when I **arrive** ». Le futur est déjà exprimé dans la proposition principale (I’ll phone).",
      },
      {
        id: "2nde-anglais-03-ct-2",
        prompt: "Complète : « It’s Sunday tomorrow, so you ___ get up early. »",
        choices: ["mustn’t", "can’t", "don’t have to", "shouldn’t to"],
        answer: 2,
        explanation:
          "Le dimanche, il n’y a **pas d’obligation** de se lever tôt → **don’t have to**. « mustn’t » signifierait que c’est interdit, ce qui n’a pas de sens ici.",
      },
      {
        id: "2nde-anglais-03-ct-3",
        prompt: "« She has been working all night. She ___ be exhausted. » (déduction quasi certaine)",
        choices: ["might", "can’t", "should", "must"],
        answer: 3,
        explanation:
          "On tire une **conclusion logique presque certaine** d’un indice (elle a travaillé toute la nuit) → **must** : elle doit être épuisée. « might » serait une simple possibilité, « can’t » l’inverse.",
      },
      {
        id: "2nde-anglais-03-ct-4",
        prompt: "Complète : « Next year, I hope I ___ drive. »",
        choices: ["will can", "can to", "will be able to", "could"],
        answer: 2,
        explanation:
          "On ne peut pas combiner deux modaux (*will can* est impossible). Pour exprimer la capacité au futur, on remplace can par **be able to** : **will be able to drive**.",
      },
      {
        id: "2nde-anglais-03-ct-5",
        prompt: "Traduis : « Tu aurais dû me le dire ! »",
        choices: [
          "You should have told me!",
          "You must tell me!",
          "You should told me!",
          "You had to tell me!",
        ],
        answer: 0,
        explanation:
          "Le reproche sur le passé se construit avec **should have + participe passé** : **You should have told me!** « You had to tell me » signifierait « tu étais obligé de me le dire ».",
      },
      {
        id: "2nde-anglais-03-ct-6",
        prompt: "Complète : « That ___ be Paul at the door: he’s on holiday in Spain! »",
        choices: ["mustn’t", "can’t", "doesn’t have to", "may not to"],
        answer: 1,
        explanation:
          "On exprime une **impossibilité logique** (il est en Espagne) → **can’t** (ça ne peut pas être Paul). En déduction, le contraire de must est can’t, pas mustn’t (qui exprime l’interdiction).",
      },
      {
        id: "2nde-anglais-03-ct-7",
        prompt: "Quelle phrase exprime un **projet déjà organisé** ?",
        choices: [
          "I think I’ll visit my aunt one day.",
          "I might visit my aunt.",
          "I’m visiting my aunt on Saturday; I’ve booked my train.",
          "I’ll visit my aunt, I promise.",
        ],
        answer: 2,
        explanation:
          "Le **present continuous** + repère précis (on Saturday) + organisation concrète (train réservé) = **projet organisé**. Les autres expriment une prédiction vague, une possibilité ou une promesse.",
      },
      {
        id: "2nde-anglais-03-ct-8",
        prompt: "Quelle est la demande la plus polie ?",
        choices: [
          "Give me the salt.",
          "You must give me the salt.",
          "Can you give me the salt?",
          "Could you pass me the salt, please?",
        ],
        answer: 3,
        explanation:
          "**Could you…, please?** est la formule la plus polie : could adoucit la demande par rapport à can. L’impératif et must sont perçus comme des ordres.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 4 — Comparatifs, superlatifs, quantifieurs
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-anglais-04",
    title: "Comparatifs, superlatifs et quantifieurs",
    summary:
      "Ce chapitre t’apprend à comparer des personnes ou des choses (comparatifs, superlatifs, égalité) et à exprimer des quantités avec les quantifieurs adaptés aux noms dénombrables et indénombrables.",
    objectives: [
      "Je sais former le comparatif et le superlatif des adjectifs courts et longs.",
      "Je connais les formes irrégulières (good, bad, far).",
      "Je sais exprimer l’égalité et l’infériorité (as… as, not as… as, less… than).",
      "Je sais distinguer noms dénombrables et indénombrables et choisir much / many, a few / a little.",
    ],
    sections: [
      {
        title: "Le comparatif : supériorité, égalité, infériorité",
        body: [
          "Pour comparer, la forme dépend de la **longueur de l’adjectif**. Les **adjectifs courts** (une syllabe, ou deux syllabes terminées par -y) prennent **-er + than** : tall → taller than, big → bigger than (doublement de la consonne), happy → happier than (y → i).",
          "Les **adjectifs longs** (deux syllabes ou plus, sauf ceux en -y) se construisent avec **more + adjectif + than** : more expensive than, more interesting than, more modern than.",
          "Trois adjectifs très fréquents sont **irréguliers** : **good → better**, **bad → worse**, **far → farther / further**. Ne dis jamais *gooder* ou *more good*.",
          "**Égalité** : **as + adjectif + as** (She is as tall as her brother). **Infériorité** : **not as / not so + adjectif + as** (This film is not as good as the book) ou **less + adjectif + than**, surtout avec les adjectifs longs (less expensive than). Pour renforcer un comparatif : **much / far / a lot** (much bigger, far more dangerous).",
        ],
        keyPoints: [
          "Court : adjectif-er + than ; long : more + adjectif + than.",
          "good → better, bad → worse, far → further.",
          "Égalité : as… as ; infériorité : not as… as / less… than.",
          "Renforcer : much / far + comparatif.",
        ],
        formulas: [
          "Adjectif court + -er + than",
          "more + adjectif long + than",
          "as + adjectif + as / not as + adjectif + as",
          "the + comparatif…, the + comparatif (plus…, plus…)",
        ],
        example: {
          title: "Comparer deux villes",
          steps: [
            "London is bigger than Paris. → Londres est plus grande que Paris (big → bigger).",
            "Paris is more romantic than London. → Paris est plus romantique (adjectif long).",
            "The weather in London is worse than in Nice. → Le temps est pire (bad → worse).",
            "Paris is not as expensive as London. → Paris est moins chère que Londres.",
            "The more you travel, the more you learn. → Plus on voyage, plus on apprend.",
          ],
        },
      },
      {
        title: "Le superlatif",
        body: [
          "Le **superlatif** désigne l’élément qui est « le plus » d’un ensemble. Il est **toujours précédé de the**. Adjectifs courts : **the + adjectif-est** (the tallest, the biggest, the happiest). Adjectifs longs : **the most + adjectif** (the most beautiful, the most famous).",
          "Formes irrégulières : **good → the best**, **bad → the worst**, **far → the farthest / the furthest**. Le superlatif d’infériorité se forme avec **the least** (the least expensive = le moins cher).",
          "Après un superlatif, le complément de lieu ou de groupe s’introduit avec **in** pour un lieu ou un groupe (the tallest building **in** the world, the best student **in** the class) et **of** pour une période ou un ensemble chiffré (the best day **of** my life, the oldest **of** the three). Avec le present perfect et **ever** : « It’s the best film I have ever seen » (le meilleur film que j’aie jamais vu).",
        ],
        keyPoints: [
          "Toujours **the** devant un superlatif.",
          "the + -est (court) / the most + adjectif (long).",
          "the best, the worst, the furthest ; the least = le moins.",
          "in + lieu / groupe ; of + période ; … I have ever + participe passé.",
        ],
        formulas: [
          "the + adjectif court + -est (+ in / of…)",
          "the most / the least + adjectif long",
          "the + superlatif + nom + Sujet + have ever + participe passé",
        ],
        example: {
          title: "Parler de records",
          steps: [
            "Mount Everest is the highest mountain in the world. → La plus haute montagne du monde (in + lieu).",
            "This is the most difficult exercise of the chapter. → L’exercice le plus difficile du chapitre.",
            "It was the worst day of my life! → Le pire jour de ma vie (bad → the worst).",
            "She’s the funniest person I have ever met. → La personne la plus drôle que j’aie jamais rencontrée.",
          ],
        },
      },
      {
        title: "Les quantifieurs : much, many, a lot of, a few, a little",
        body: [
          "En anglais, on distingue les noms **dénombrables** (que l’on peut compter : a book, two books, people, friends) et **indénombrables** (que l’on ne compte pas : water, money, time, information, advice, furniture, news, homework). Les indénombrables n’ont **pas de pluriel** et ne prennent **pas de a / an** : on dit « some advice », « a piece of advice », jamais *an advice*.",
          "Pour une **grande quantité** : **many** + dénombrable pluriel (many friends) ; **much** + indénombrable (much money), surtout aux formes négative et interrogative. **A lot of / lots of** s’utilise avec les deux, surtout à l’affirmative : a lot of people, a lot of time.",
          "Pour une **petite quantité** : **a few** + dénombrable (a few friends = quelques amis) ; **a little** + indénombrable (a little sugar = un peu de sucre). Sans « a », **few** et **little** ont un sens **négatif** : few people came (peu de gens, pas assez) ; I have little time (j’ai peu de temps).",
          "Pour poser une question de quantité : **How many** + dénombrable (How many brothers have you got?) et **How much** + indénombrable (How much money do you need? – aussi pour un prix : How much is it?). **Too much / too many** = trop ; **not enough** = pas assez.",
        ],
        keyPoints: [
          "Dénombrable → many, a few, How many.",
          "Indénombrable → much, a little, How much.",
          "a lot of : les deux, surtout à l’affirmative.",
          "a few / a little = quelques-uns (positif) ; few / little = peu (négatif).",
          "advice, information, news, furniture, homework sont indénombrables.",
        ],
        formulas: [
          "many / a few / How many + nom dénombrable pluriel",
          "much / a little / How much + nom indénombrable",
          "too much / too many + nom ; adjectif + enough",
        ],
        example: {
          title: "Faire les courses",
          steps: [
            "How many eggs do we need? – Just a few. → Combien d’œufs ? – Juste quelques-uns (dénombrable).",
            "How much milk is there? – Only a little. → Combien de lait ? – Seulement un peu (indénombrable).",
            "We don’t have much time. → On n’a pas beaucoup de temps.",
            "There were too many people in the shop. → Il y avait trop de monde dans le magasin.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-anglais-04-ex-1",
        prompt: "Complète : « My brother is ___ than me. »",
        choices: ["more tall", "taller", "tallest", "as tall"],
        answer: 1,
        explanation:
          "« Tall » est un **adjectif court** (une syllabe) → **-er + than** : **taller than**. « more tall » est fautif, « tallest » est un superlatif.",
      },
      {
        id: "2nde-anglais-04-ex-2",
        prompt: "Complète : « This is ___ book I have ever read. »",
        choices: ["the most interesting", "the more interesting", "most interesting", "the interestingest"],
        answer: 0,
        explanation:
          "Superlatif d’un **adjectif long** : **the most + adjectif**. Le « the » est obligatoire, et « I have ever read » confirme qu’on parle du meilleur de toute une expérience.",
      },
      {
        id: "2nde-anglais-04-ex-3",
        prompt: "Complète : « How ___ money have you got? »",
        choices: ["many", "few", "much", "lot"],
        answer: 2,
        explanation:
          "« Money » est **indénombrable** → **How much**. « How many » s’utilise avec des noms dénombrables pluriels (How many coins?).",
      },
      {
        id: "2nde-anglais-04-ex-4",
        prompt: "Quel est le comparatif de « bad » ?",
        choices: ["badder", "more bad", "worst", "worse"],
        answer: 3,
        explanation:
          "« Bad » est **irrégulier** : bad → **worse** (comparatif) → the worst (superlatif). « worst » est donc le superlatif, pas le comparatif.",
      },
      {
        id: "2nde-anglais-04-ex-5",
        prompt: "Traduis : « J’ai quelques amis à Londres. »",
        choices: [
          "I have a little friends in London.",
          "I have a few friends in London.",
          "I have few friend in London.",
          "I have much friends in London.",
        ],
        answer: 1,
        explanation:
          "« Friends » est **dénombrable** et le sens est positif (quelques-uns) → **a few**. « a little » s’emploie avec les indénombrables ; « few » sans « a » signifierait « peu d’amis ».",
      },
      {
        id: "2nde-anglais-04-ex-6",
        prompt: "Complète : « Emma is ___ her sister. » (aussi grande que)",
        choices: ["as tall as", "so tall than", "as taller as", "tall as"],
        answer: 0,
        explanation:
          "L’égalité se construit avec **as + adjectif (forme simple) + as** : **as tall as**. On ne met jamais de -er dans cette structure.",
      },
    ],
    test: [
      {
        id: "2nde-anglais-04-ct-1",
        prompt: "Quelle phrase est correcte ?",
        choices: [
          "Can you give me an advice?",
          "Can you give me some advices?",
          "Can you give me a piece of advice?",
          "Can you give me many advice?",
        ],
        answer: 2,
        explanation:
          "« Advice » est **indénombrable** en anglais : pas de « an », pas de pluriel, pas de « many ». Pour un conseil isolé : **a piece of advice** (ou simplement some advice).",
      },
      {
        id: "2nde-anglais-04-ct-2",
        prompt: "Complète : « The ___ you practise, the ___ you get. »",
        choices: ["much / good", "more / better", "most / best", "more / more good"],
        answer: 1,
        explanation:
          "« Plus…, plus… » se traduit par **the + comparatif…, the + comparatif** : the **more** you practise, the **better** you get (good → better).",
      },
      {
        id: "2nde-anglais-04-ct-3",
        prompt: "« Few students passed the exam. » signifie :",
        choices: [
          "Quelques élèves ont réussi l’examen, c’est bien.",
          "Aucun élève n’a réussi l’examen.",
          "La plupart des élèves ont réussi l’examen.",
          "Peu d’élèves ont réussi l’examen (c’est décevant).",
        ],
        answer: 3,
        explanation:
          "**Few** sans « a » a un **sens négatif** : peu, pas assez. « A few students passed » serait plus neutre ou positif (quelques élèves ont réussi).",
      },
      {
        id: "2nde-anglais-04-ct-4",
        prompt: "Complète : « This phone is ___ expensive than the other one, so I’ll buy it. »",
        choices: ["less", "least", "fewer", "littler"],
        answer: 0,
        explanation:
          "Infériorité avec un adjectif long : **less + adjectif + than** (moins cher que). « The least » est un superlatif ; « fewer » se place devant un nom dénombrable (fewer people).",
      },
      {
        id: "2nde-anglais-04-ct-5",
        prompt: "Complète : « It was the best day ___ my life. »",
        choices: ["in", "of", "on", "for"],
        answer: 1,
        explanation:
          "Après un superlatif, on utilise **of** devant une **période** ou un ensemble (the best day **of** my life) et **in** devant un lieu ou un groupe (the best student in the class).",
      },
      {
        id: "2nde-anglais-04-ct-6",
        prompt: "Complète : « There isn’t ___ information on this website, and there aren’t ___ pictures. »",
        choices: ["many / much", "much / much", "much / many", "a few / a little"],
        answer: 2,
        explanation:
          "« Information » est **indénombrable** → **much**. « Pictures » est **dénombrable pluriel** → **many**. Information ne prend jamais de -s en anglais.",
      },
      {
        id: "2nde-anglais-04-ct-7",
        prompt: "Traduis : « Ce film est bien meilleur que le premier. »",
        choices: [
          "This film is very better than the first one.",
          "This film is more better than the first one.",
          "This film is much good than the first one.",
          "This film is much better than the first one.",
        ],
        answer: 3,
        explanation:
          "Pour renforcer un comparatif, on utilise **much / far / a lot**, jamais « very » ni « more » : **much better than**. « Better » est déjà le comparatif de good.",
      },
      {
        id: "2nde-anglais-04-ct-8",
        prompt: "Complète : « She is ___ girl in the class. »",
        choices: ["the happiest", "the most happy", "happiest", "the happyest"],
        answer: 0,
        explanation:
          "« Happy » a deux syllabes et finit par -y : il se comporte comme un adjectif court. Le **y devient i** devant -est : **the happiest**. « the happyest » est une faute d’orthographe.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 5 — Questions et discours indirect
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-anglais-05",
    title: "Poser des questions et le discours indirect",
    summary:
      "Ce chapitre t’apprend à construire des questions correctes (fermées, ouvertes, question tags) et à rapporter les paroles de quelqu’un au discours indirect.",
    objectives: [
      "Je sais construire une question fermée et une question ouverte avec le bon auxiliaire.",
      "Je connais les principaux mots interrogatifs (who, what, where, how often…).",
      "Je sais distinguer une question sur le sujet d’une question sur le complément.",
      "Je sais rapporter des paroles au discours indirect en faisant les changements nécessaires.",
    ],
    sections: [
      {
        title: "Construire une question : l’ordre auxiliaire + sujet + verbe",
        body: [
          "En anglais, une question se construit par **inversion de l’auxiliaire et du sujet**. Si la phrase contient déjà un auxiliaire (be, have, can, will…), on le place devant le sujet : « You are tired » → **Are you tired?** ; « She can swim » → **Can she swim?**",
          "Si la phrase n’a pas d’auxiliaire (present simple ou preterit d’un verbe ordinaire), on fait appel à **do / does / did**, et le verbe revient à la base verbale : « He likes pizza » → **Does he like pizza?** ; « They left early » → **Did they leave early?**",
          "Les **questions fermées** appellent une réponse par **yes / no**, et on y répond par une **réponse courte** reprenant l’auxiliaire : Yes, I am. / No, she can’t. / Yes, he does. Répondre seulement « Yes » est correct mais moins naturel.",
          "Les **question tags** sont de petites questions en fin de phrase pour demander confirmation (« n’est-ce pas ? ») : on reprend l’auxiliaire avec la **polarité inverse** : « You’re French, **aren’t you?** » ; « She doesn’t smoke, **does she?** » ; « They went to Spain, **didn’t they?** »",
        ],
        keyPoints: [
          "Question = auxiliaire + sujet + verbe.",
          "Pas d’auxiliaire → do / does / did + base verbale.",
          "Réponse courte : Yes, I do. / No, he isn’t.",
          "Question tag : auxiliaire + pronom, polarité inverse.",
        ],
        formulas: [
          "Auxiliaire + sujet + verbe … ?",
          "Do / Does / Did + sujet + base verbale … ?",
          "Phrase affirmative, auxiliaire négatif + pronom ?",
          "Phrase négative, auxiliaire affirmatif + pronom ?",
        ],
        example: {
          title: "Transformer des affirmations en questions",
          steps: [
            "Sam has finished. → Has Sam finished? – Yes, he has.",
            "Lucy works in a bank. → Does Lucy work in a bank? – No, she doesn’t.",
            "You saw the match. → Did you see the match? – Yes, I did.",
            "It’s cold today, isn’t it? → Il fait froid aujourd’hui, n’est-ce pas ?",
          ],
        },
      },
      {
        title: "Les questions ouvertes (Wh- questions)",
        body: [
          "Les **questions ouvertes** commencent par un **mot interrogatif** suivi de la structure de la question (auxiliaire + sujet + verbe). Les principaux : **what** (quoi, quel), **who** (qui), **where** (où), **when** (quand), **why** (pourquoi), **which** (lequel, parmi un choix limité), **whose** (à qui), **how** (comment).",
          "**How** se combine pour former d’autres questions : **how old** (quel âge), **how long** (combien de temps / depuis combien de temps), **how often** (à quelle fréquence), **how far** (à quelle distance), **how much / how many** (combien). **What** se combine aussi : what time (à quelle heure), what kind of (quel genre de), what… like? (comment est… ?).",
          "Attention : quand **who** ou **what** est **sujet** du verbe, on n’utilise **pas d’auxiliaire do** et il n’y a pas d’inversion : « **Who called** you? » (qui t’a appelé ?) ; « **What happened**? ». En revanche, quand il est **complément**, on utilise l’auxiliaire : « **Who did you call**? » (qui as-tu appelé ?).",
          "En anglais, la **préposition se place à la fin** de la question : « Where are you from? » (d’où viens-tu ?), « Who are you talking to? » (à qui parles-tu ?), « What are you looking for? ».",
        ],
        keyPoints: [
          "Wh- + auxiliaire + sujet + verbe ?",
          "how often / how long / how far / what time / what… like?",
          "who / what sujet → pas de do : Who knows? What happened?",
          "Préposition rejetée en fin de question.",
        ],
        formulas: [
          "Wh- + auxiliaire + sujet + verbe … ?",
          "Who / What (sujet) + verbe conjugué … ?",
          "Wh- + auxiliaire + sujet + verbe + préposition ?",
        ],
        example: {
          title: "Interviewer un nouvel élève",
          steps: [
            "Where are you from? – I’m from Canada. → D’où viens-tu ?",
            "How long have you lived in France? – For two years. → Depuis combien de temps vis-tu en France ?",
            "How often do you play hockey? – Twice a week. → À quelle fréquence joues-tu au hockey ?",
            "Who taught you French? – My mother did. → Qui t’a appris le français ? (who sujet, pas de did).",
            "What’s your city like? – It’s big and cold. → Comment est ta ville ?",
          ],
        },
      },
      {
        title: "Le discours indirect (reported speech)",
        body: [
          "Le **discours indirect** permet de **rapporter les paroles** de quelqu’un sans les citer mot pour mot. On utilise des verbes introducteurs comme **say** (say that…, sans complément de personne) et **tell** (tell **somebody** that…, toujours suivi de la personne) : « She said that she was tired » / « She told **me** that she was tired ».",
          "Lorsque le verbe introducteur est au passé (said, told, asked), on opère souvent une **concordance des temps** : le présent devient preterit (« I am tired » → she said she **was** tired), le preterit et le present perfect deviennent **past perfect** (« I lost my keys » → he said he **had lost** his keys), **will** devient **would**, **can** devient **could**. Les **pronoms** et les **repères de temps et de lieu** changent aussi : now → then, today → that day, tomorrow → the next day, yesterday → the day before, here → there.",
          "Pour rapporter une **question**, on utilise **ask** et l’on **supprime l’inversion** (ordre sujet + verbe, sans do, sans point d’interrogation). Question ouverte : on garde le mot interrogatif (« Where do you live? » → He asked me **where I lived**). Question fermée : on ajoute **if / whether** (« Are you coming? » → She asked **if I was coming**).",
          "Pour rapporter un **ordre** ou une **demande**, on utilise **tell / ask + personne + to + base verbale** : « Close the door! » → He told me **to close** the door ; « Don’t shout! » → She asked us **not to shout**.",
        ],
        keyPoints: [
          "say (that) + phrase ; tell + personne + (that) + phrase.",
          "Verbe introducteur au passé → recul des temps (am → was, will → would…).",
          "Changer pronoms et repères : tomorrow → the next day, here → there.",
          "Question rapportée : ask + (wh- / if) + sujet + verbe, sans inversion.",
          "Ordre rapporté : tell / ask + personne + (not) to + base verbale.",
        ],
        formulas: [
          "Sujet + said (that) + sujet + verbe (temps reculé)",
          "Sujet + told + personne + (that) + sujet + verbe",
          "Sujet + asked + (personne) + wh- / if + sujet + verbe",
          "Sujet + told / asked + personne + (not) to + base verbale",
        ],
        example: {
          title: "Rapporter une conversation",
          steps: [
            "Direct : « I’m going to London tomorrow, » said Jack.",
            "→ Jack said (that) he was going to London the next day. (am → was, I → he, tomorrow → the next day)",
            "Direct : « Can you help me? » Mia asked me.",
            "→ Mia asked me if I could help her. (if + ordre sujet-verbe, can → could)",
            "Direct : « Don’t be late! » the teacher told us.",
            "→ The teacher told us not to be late. (ordre négatif : not to + base)",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-anglais-05-ex-1",
        prompt: "Choisis la question correcte :",
        choices: [
          "Where you live?",
          "Where do you live?",
          "Where does you live?",
          "Where you do live?",
        ],
        answer: 1,
        explanation:
          "Present simple d’un verbe ordinaire → auxiliaire **do** (avec you), puis sujet, puis base verbale : **Where do you live?**",
      },
      {
        id: "2nde-anglais-05-ex-2",
        prompt: "Complète : « ___ do you go to the cinema? – About once a month. »",
        choices: ["How long", "How much", "How often", "How far"],
        answer: 2,
        explanation:
          "La réponse « once a month » indique une **fréquence** → **How often**. How long = durée, how far = distance, how much = quantité / prix.",
      },
      {
        id: "2nde-anglais-05-ex-3",
        prompt: "Complète le question tag : « You like chocolate, ___? »",
        choices: ["do you", "don’t you", "aren’t you", "isn’t it"],
        answer: 1,
        explanation:
          "Phrase affirmative au present simple → tag **négatif** avec l’auxiliaire **do** et le pronom sujet : **don’t you?**",
      },
      {
        id: "2nde-anglais-05-ex-4",
        prompt: "Complète : « She ___ me that she was busy. »",
        choices: ["said", "told", "says to", "asked"],
        answer: 1,
        explanation:
          "Le verbe est directement suivi de la personne (me) → **told**. On dirait « She said that she was busy » sans complément de personne, ou « She said to me ».",
      },
      {
        id: "2nde-anglais-05-ex-5",
        prompt: "Traduis : « À qui parles-tu ? »",
        choices: [
          "To who you are talking?",
          "Who do you talk?",
          "Who are you talking to?",
          "Whom talking you to?",
        ],
        answer: 2,
        explanation:
          "En anglais courant, la **préposition est rejetée en fin de question** : **Who are you talking to?** L’action est en cours → present continuous, avec inversion are / you.",
      },
      {
        id: "2nde-anglais-05-ex-6",
        prompt: "Complète : « ___ broke the window? – Tom did. »",
        choices: ["Who did", "Whose", "Who", "Who does"],
        answer: 2,
        explanation:
          "« Who » est ici **sujet** du verbe (c’est Tom qui a cassé) → pas d’auxiliaire did : **Who broke the window?** La réponse « Tom did » confirme que who remplace le sujet.",
      },
    ],
    test: [
      {
        id: "2nde-anglais-05-ct-1",
        prompt: "Mets au discours indirect : « I am hungry, » said Paul.",
        choices: [
          "Paul said that I was hungry.",
          "Paul said that he is hungry yesterday.",
          "Paul told that he was hungry.",
          "Paul said that he was hungry.",
        ],
        answer: 3,
        explanation:
          "Verbe introducteur au passé → **am devient was** ; le pronom **I devient he** (c’est Paul qui parle). « told » exige une personne après (told me / told us).",
      },
      {
        id: "2nde-anglais-05-ct-2",
        prompt: "Mets au discours indirect : « Where do you live? » she asked me.",
        choices: [
          "She asked me where I lived.",
          "She asked me where did I live.",
          "She asked me where do I live?",
          "She asked me if where I lived.",
        ],
        answer: 0,
        explanation:
          "Dans une question rapportée, on **supprime l’inversion et l’auxiliaire do** : wh- + sujet + verbe, avec recul du temps (live → lived) et sans point d’interrogation : **where I lived**.",
      },
      {
        id: "2nde-anglais-05-ct-3",
        prompt: "Complète le question tag : « She can’t drive, ___? »",
        choices: ["can’t she", "can she", "does she", "doesn’t she"],
        answer: 1,
        explanation:
          "Phrase **négative** avec l’auxiliaire can → tag **affirmatif** avec le même auxiliaire : **can she?**",
      },
      {
        id: "2nde-anglais-05-ct-4",
        prompt: "Mets au discours indirect : « Will you come tomorrow? » he asked us.",
        choices: [
          "He asked us will we come the next day.",
          "He asked us if we would come the next day.",
          "He asked us if we will come tomorrow.",
          "He asked us that we would come the next day.",
        ],
        answer: 1,
        explanation:
          "Question fermée → **if / whether** ; ordre **sujet + verbe** ; **will → would** ; **tomorrow → the next day** ; you → we. « that » ne sert pas à rapporter une question.",
      },
      {
        id: "2nde-anglais-05-ct-5",
        prompt: "Quelle question correspond à la réponse « It belongs to my brother. » ?",
        choices: [
          "Who belongs this jacket?",
          "Whose jacket does belong?",
          "Whose is this jacket?",
          "Who is this jacket to?",
        ],
        answer: 2,
        explanation:
          "**Whose** interroge sur le **possesseur** (à qui ?) : **Whose is this jacket?** ou Whose jacket is this? Les autres formulations sont agrammaticales.",
      },
      {
        id: "2nde-anglais-05-ct-6",
        prompt: "Mets au discours indirect : « Don’t touch my phone! » my sister told me.",
        choices: [
          "My sister told me don’t touch her phone.",
          "My sister told me to not touching her phone.",
          "My sister said me not to touch my phone.",
          "My sister told me not to touch her phone.",
        ],
        answer: 3,
        explanation:
          "Un **ordre négatif** se rapporte avec **tell + personne + not to + base verbale**. Le possessif change : my → **her** (le téléphone de la sœur). « said me » est incorrect.",
      },
      {
        id: "2nde-anglais-05-ct-7",
        prompt: "Complète : « Who ___ to at the party? » (complément : à qui as-tu parlé ?)",
        choices: ["did you talk", "talked you", "you talked", "did you talked"],
        answer: 0,
        explanation:
          "Ici **who est complément** (tu as parlé à quelqu’un) → on utilise l’auxiliaire **did** + sujet + base verbale, préposition en fin : **Who did you talk to?**",
      },
      {
        id: "2nde-anglais-05-ct-8",
        prompt: "Mets au discours indirect : « I have finished my project, » Lisa said.",
        choices: [
          "Lisa said she has finished my project.",
          "Lisa said she had finished her project.",
          "Lisa told she had finished her project.",
          "Lisa said she finishes her project.",
        ],
        answer: 1,
        explanation:
          "Le **present perfect devient past perfect** (have finished → **had finished**) ; I → she ; my → **her**. « told » exigerait un complément de personne.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 6 — Le passé dans le présent / Vivre entre générations
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-anglais-06",
    title: "Vocabulaire et culture : « Le passé dans le présent » et « Vivre entre générations »",
    summary:
      "Ce chapitre te donne le vocabulaire et les repères culturels du monde anglophone pour parler de mémoire, d’héritage, de traditions et des relations entre les générations.",
    objectives: [
      "Je sais utiliser le vocabulaire de la mémoire, de l’histoire et du patrimoine.",
      "Je connais quelques repères culturels anglophones (commémorations, monuments, traditions).",
      "Je sais parler de la famille, des relations et des conflits entre générations.",
      "Je sais exprimer une habitude passée avec used to.",
    ],
    sections: [
      {
        title: "Le passé dans le présent : mémoire, héritage et patrimoine",
        body: [
          "Cet axe du programme interroge la **place du passé dans nos sociétés actuelles** : comment se souvient-on (**remember, commemorate, pay tribute to**) ? Que transmet-on (**heritage, legacy, tradition**) ? Le passé peut être une fierté, une blessure ou une source d’inspiration.",
          "Vocabulaire essentiel : **memory** (souvenir, mémoire), **heritage** (patrimoine), **legacy** (héritage laissé par quelqu’un), **ancestor** (ancêtre), **landmark** (monument emblématique, lieu repère), **a historic event** (un événement historique), **a memorial** (un mémorial), **to commemorate** (commémorer), **to remind somebody of something** (rappeler quelque chose à quelqu’un), **to preserve** (préserver), **to look back on** (se remémorer).",
          "Repères culturels : au Royaume-Uni, le **Remembrance Day** (11 novembre) et le **poppy** (coquelicot) honorent les soldats morts au combat. Aux États-Unis, **Memorial Day** (fin mai) et **Thanksgiving** (4e jeudi de novembre) sont des fêtes ancrées dans l’histoire. Des lieux comme la **Statue of Liberty**, **Ellis Island** ou la **Tower of London** sont des lieux de mémoire. Les musées et le **National Trust** britannique protègent le patrimoine.",
          "Attention au faux ami : **remember** = se souvenir de (I remember my first day) ; **remind** = rappeler à quelqu’un (This song reminds me of my childhood). Et **historic** (qui a marqué l’histoire) ≠ **historical** (qui concerne l’histoire : a historical novel).",
        ],
        keyPoints: [
          "heritage = patrimoine ; legacy = héritage laissé ; landmark = monument emblématique.",
          "remember (se souvenir) ≠ remind somebody of (rappeler à).",
          "Remembrance Day, poppy, Memorial Day, Thanksgiving.",
          "historic (marquant) ≠ historical (relatif à l’histoire).",
        ],
        formulas: [
          "Sujet + remember + V-ing / nom (se souvenir d’avoir fait)",
          "Quelque chose + reminds + personne + of + nom",
          "It is important to + base verbale + the past (preserve, remember…)",
        ],
        example: {
          title: "Présenter un document sur le Remembrance Day",
          steps: [
            "This photo shows people wearing red poppies on Remembrance Day.",
            "→ Cette photo montre des gens portant des coquelicots rouges le jour du Souvenir.",
            "Every year, the British commemorate the soldiers who died in the wars.",
            "→ Chaque année, les Britanniques commémorent les soldats morts pendant les guerres.",
            "This tradition reminds younger generations that peace is fragile.",
            "→ Cette tradition rappelle aux jeunes générations que la paix est fragile.",
          ],
        },
      },
      {
        title: "Vivre entre générations : famille et transmission",
        body: [
          "Cet axe explore les **liens entre les générations** : la famille, la transmission des valeurs, l’entraide, mais aussi l’incompréhension et les conflits (**the generation gap** = le fossé des générations).",
          "Vocabulaire de la famille : **grandparents**, **grandchildren**, **relatives** (membres de la famille, et non « relations »), **siblings** (frères et sœurs), **an only child** (enfant unique), **a stepfather / stepmother** (beau-père, belle-mère dans une famille recomposée), **a blended family** (famille recomposée), **to raise / to bring up a child** (élever un enfant), **to look after** (s’occuper de).",
          "Pour parler des relations : **to get on (well) with** (bien s’entendre avec), **to look up to** (admirer), **to rely on** (compter sur), **to argue / to have an argument** (se disputer), **to pass down / to hand down** (transmettre), **to share** (partager), **elderly people / the elderly** (les personnes âgées), **teenagers** (adolescents), **millennials**, **Generation Z**, **baby boomers**.",
          "Thèmes fréquents dans les documents : la place des personnes âgées (**care homes** = maisons de retraite), le rôle des grands-parents, le fossé numérique (**the digital divide**), les jeunes qui restent chez leurs parents plus longtemps, ou au contraire les projets **intergenerational** (colocations entre seniors et étudiants).",
        ],
        keyPoints: [
          "the generation gap = le fossé des générations.",
          "relatives = membres de la famille ; siblings = frères et sœurs.",
          "get on with (s’entendre), look up to (admirer), bring up (élever), hand down (transmettre).",
          "the elderly, care homes, the digital divide.",
        ],
        formulas: [
          "Sujet + get on well / badly + with + personne",
          "Sujet + look up to + personne (admirer)",
          "Sujet + hand down / pass down + nom + to + génération suivante",
        ],
        example: {
          title: "Parler de ses grands-parents",
          steps: [
            "I get on really well with my grandmother. → Je m’entends très bien avec ma grand-mère.",
            "She brought up four children on her own. → Elle a élevé quatre enfants seule.",
            "I really look up to her. → Je l’admire vraiment.",
            "She has handed down her recipes to my mother and me. → Elle nous a transmis ses recettes, à ma mère et à moi.",
          ],
        },
      },
      {
        title: "Parler des habitudes passées et comparer hier et aujourd’hui : used to",
        body: [
          "Pour comparer les générations, on a souvent besoin d’exprimer ce qui **se faisait autrefois et ne se fait plus**. L’anglais utilise **used to + base verbale** : « My grandparents **used to write** letters » (mes grands-parents écrivaient des lettres, autrefois, mais plus maintenant). C’est l’équivalent de l’imparfait d’habitude.",
          "Négation : **didn’t use to** (sans -d) : « People didn’t use to have mobile phones ». Question : **Did you use to…?** : « Did you use to play outside when you were young? »",
          "Ne confonds pas avec **be used to + V-ing / nom** = **être habitué à** : « I’m used to getting up early » (j’ai l’habitude de me lever tôt). La structure et le sens sont différents.",
          "Pour comparer, on utilise aussi des connecteurs : **nowadays / today** (de nos jours), **in the past / in those days** (à cette époque), **whereas / while** (alors que) : « In the past, people used to listen to the radio, whereas nowadays they stream music. »",
        ],
        keyPoints: [
          "used to + base verbale = habitude passée révolue.",
          "didn’t use to / Did… use to…? (sans -d).",
          "be used to + V-ing = être habitué à.",
          "in the past / nowadays / whereas pour comparer.",
        ],
        formulas: [
          "Sujet + used to + base verbale",
          "Sujet + didn’t use to + base verbale",
          "Sujet + be used to + V-ing / nom (être habitué à)",
          "In the past, … whereas nowadays, …",
        ],
        example: {
          title: "Comparer l’enfance de deux générations",
          steps: [
            "My grandfather used to walk five kilometres to school. → Mon grand-père faisait cinq kilomètres à pied pour aller à l’école.",
            "He didn’t use to have a TV at home. → Il n’avait pas de télé chez lui.",
            "Nowadays, teenagers spend hours on their phones. → De nos jours, les adolescents passent des heures sur leur téléphone.",
            "I’m used to doing my homework online. → J’ai l’habitude de faire mes devoirs en ligne (be used to + V-ing).",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-anglais-06-ex-1",
        prompt: "Que signifie « heritage » ?",
        choices: ["l’héritage d’argent uniquement", "le patrimoine", "l’hérédité", "l’histoire ancienne"],
        answer: 1,
        explanation:
          "**Heritage** désigne le **patrimoine** (culturel, historique, naturel) transmis par les générations précédentes : cultural heritage, a heritage site.",
      },
      {
        id: "2nde-anglais-06-ex-2",
        prompt: "Complète : « This old photo ___ me of my holidays in Wales. »",
        choices: ["remembers", "reminds", "memories", "recalls to"],
        answer: 1,
        explanation:
          "**Remind somebody of something** = rappeler quelque chose à quelqu’un. **Remember** (se souvenir) ne se construit pas avec une personne complément.",
      },
      {
        id: "2nde-anglais-06-ex-3",
        prompt: "Traduis : « Je m’entends bien avec mes frères et sœurs. »",
        choices: [
          "I get on well with my siblings.",
          "I agree well with my relations.",
          "I understand me well with my brothers.",
          "I go well with my siblings.",
        ],
        answer: 0,
        explanation:
          "« S’entendre avec » = **get on (well) with**, et « frères et sœurs » = **siblings**. « Relations » est un faux ami : les membres de la famille sont des **relatives**.",
      },
      {
        id: "2nde-anglais-06-ex-4",
        prompt: "Complète : « When I was a child, I ___ play in the garden every day. »",
        choices: ["use to", "am used to", "was use to", "used to"],
        answer: 3,
        explanation:
          "Habitude passée et révolue → **used to + base verbale** : I **used to** play. « am used to » signifierait « je suis habitué à » et demanderait un V-ing.",
      },
      {
        id: "2nde-anglais-06-ex-5",
        prompt: "Quel symbole porte-t-on au Royaume-Uni pour le Remembrance Day ?",
        choices: ["a red poppy", "a white rose", "a shamrock", "a daffodil"],
        answer: 0,
        explanation:
          "Le **red poppy** (coquelicot rouge) rappelle les champs de bataille de la Première Guerre mondiale. Le shamrock est le symbole de l’Irlande, le daffodil celui du pays de Galles.",
      },
      {
        id: "2nde-anglais-06-ex-6",
        prompt: "Que signifie « the generation gap » ?",
        choices: [
          "l’écart d’âge dans un couple",
          "une génération perdue",
          "le fossé des générations",
          "une année sabbatique",
        ],
        answer: 2,
        explanation:
          "**The generation gap** désigne le **fossé entre générations** : différences de valeurs, de goûts et de modes de vie entre jeunes et aînés. Une année sabbatique se dit « a gap year ».",
      },
    ],
    test: [
      {
        id: "2nde-anglais-06-ct-1",
        prompt: "Complète : « My grandmother ___ me up while my parents were working abroad. »",
        choices: ["brought", "raised up", "grew", "educated up"],
        answer: 0,
        explanation:
          "« Élever un enfant » = **bring up** (preterit **brought up**) ou **raise** (sans « up »). « Grow up » signifie grandir et ne prend pas de complément.",
      },
      {
        id: "2nde-anglais-06-ct-2",
        prompt: "Choisis la phrase correcte :",
        choices: [
          "People didn’t used to travel so much.",
          "People didn’t use to travel so much.",
          "People weren’t use to travel so much.",
          "People used not travel so much.",
        ],
        answer: 1,
        explanation:
          "Après l’auxiliaire **did / didn’t**, on retrouve la base : **didn’t use to** (sans -d). Le passé est déjà porté par did.",
      },
      {
        id: "2nde-anglais-06-ct-3",
        prompt: "Complète : « After living in London for a year, I’m used to ___ on the left. »",
        choices: ["drive", "drove", "driving", "have driven"],
        answer: 2,
        explanation:
          "**Be used to** (être habitué à) est suivi d’un **nom ou d’un V-ing**, car « to » est ici une préposition : I’m used to **driving** on the left.",
      },
      {
        id: "2nde-anglais-06-ct-4",
        prompt: "Quel mot complète le mieux : « Nelson Mandela left a powerful ___ of freedom and reconciliation. »",
        choices: ["heritage", "inheritance", "legacy", "souvenir"],
        answer: 2,
        explanation:
          "**Legacy** = ce qu’une personne laisse derrière elle (idées, influence). **Inheritance** désigne l’héritage matériel (biens, argent) et **souvenir** est un objet-souvenir acheté en voyage.",
      },
      {
        id: "2nde-anglais-06-ct-5",
        prompt: "Traduis : « J’admire vraiment mon grand-père. »",
        choices: [
          "I really look after my grandfather.",
          "I really look up to my grandfather.",
          "I really look for my grandfather.",
          "I really look forward my grandfather.",
        ],
        answer: 1,
        explanation:
          "**Look up to** = admirer, prendre pour modèle. **Look after** = s’occuper de ; **look for** = chercher ; **look forward to** = avoir hâte de.",
      },
      {
        id: "2nde-anglais-06-ct-6",
        prompt: "Quelle fête américaine commémore traditionnellement le repas partagé entre les Pèlerins (Pilgrims) et les Amérindiens en 1621 ?",
        choices: ["Independence Day", "Memorial Day", "Halloween", "Thanksgiving"],
        answer: 3,
        explanation:
          "**Thanksgiving**, le 4e jeudi de novembre, rappelle le repas de 1621 à Plymouth. Independence Day (4 juillet) célèbre la déclaration d’indépendance de 1776 ; Memorial Day honore les soldats morts.",
      },
      {
        id: "2nde-anglais-06-ct-7",
        prompt: "Complète : « In the past, families ___ under the same roof, ___ nowadays many elderly people live alone. »",
        choices: [
          "used to live / whereas",
          "are used to living / because",
          "use to live / so",
          "used to living / although",
        ],
        answer: 0,
        explanation:
          "Habitude révolue → **used to + base** (used to live). Pour opposer passé et présent → **whereas** (alors que). « because » et « so » expriment la cause et la conséquence, pas l’opposition.",
      },
      {
        id: "2nde-anglais-06-ct-8",
        prompt: "« The Battle of Hastings was a ___ event, and I’m reading a ___ novel about it. »",
        choices: [
          "historical / historic",
          "historic / historic",
          "historic / historical",
          "historical / historical",
        ],
        answer: 2,
        explanation:
          "**Historic** = qui a marqué l’histoire (a historic event, a historic victory). **Historical** = qui se rapporte à l’histoire ou se situe dans le passé (a historical novel = un roman historique).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 7 — Représentation de soi / Sauver la planète
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-anglais-07",
    title:
      "Vocabulaire et culture : « Représentation de soi et rapport à autrui » et « Sauver la planète, penser les futurs possibles »",
    summary:
      "Ce chapitre te donne le vocabulaire pour parler de l’identité, de l’image de soi et des réseaux sociaux, puis de l’environnement, du changement climatique et des futurs possibles, avec les conditionnels pour formuler des hypothèses.",
    objectives: [
      "Je sais décrire la personnalité, l’apparence et l’image de soi en anglais.",
      "Je sais parler des réseaux sociaux, du harcèlement et de la relation aux autres.",
      "Je maîtrise le vocabulaire de l’environnement et du changement climatique.",
      "Je sais formuler des hypothèses avec if (conditionnels de type 1 et 2).",
    ],
    sections: [
      {
        title: "Représentation de soi et rapport à autrui",
        body: [
          "Cet axe interroge la **construction de l’identité** : comment se voit-on, comment veut-on être vu, et quelle place accorde-t-on au regard des autres ? Les réseaux sociaux, le look, les stéréotypes, l’appartenance à un groupe sont au cœur des documents étudiés.",
          "Vocabulaire de l’identité : **identity**, **self-image** (image de soi), **self-esteem / self-confidence** (estime de soi / confiance en soi), **to fit in** (s’intégrer), **to stand out** (se démarquer), **peer pressure** (pression du groupe, des pairs), **a role model** (un modèle), **appearance** (apparence), **to judge somebody by their looks** (juger sur l’apparence), **a stereotype**, **prejudice** (préjugé).",
          "Les réseaux sociaux : **social media / social networks**, **to post** (publier), **a follower**, **an influencer**, **a selfie**, **a filter**, **to share**, **to like**, **online / offline**, **screen time**, **cyberbullying** (cyberharcèlement), **fake** (faux), **to show off** (frimer). On parle souvent du décalage entre **the real self** et **the online persona** (l’identité affichée en ligne).",
          "Adjectifs de personnalité utiles : **shy** (timide), **outgoing** (sociable), **self-confident**, **open-minded**, **kind** (gentil), **selfish** (égoïste), **sensitive** (sensible — faux ami !), **sensible** (raisonnable), **moody** (lunatique), **reliable** (fiable).",
        ],
        keyPoints: [
          "self-esteem, peer pressure, to fit in, to stand out, role model.",
          "social media, followers, influencer, cyberbullying, screen time.",
          "sensitive = sensible ; sensible = raisonnable (faux ami).",
          "the real self vs the online persona.",
        ],
        formulas: [
          "Sujet + feel(s) + pressure + to + base verbale",
          "Sujet + want(s) to + fit in / stand out",
          "Social media + make(s) + personne + base verbale / adjectif",
        ],
        example: {
          title: "Commenter un document sur les selfies",
          steps: [
            "This cartoon criticises teenagers who post filtered selfies.",
            "→ Ce dessin critique les adolescents qui publient des selfies retouchés.",
            "Many young people feel pressure to look perfect online.",
            "→ Beaucoup de jeunes ressentent une pression pour paraître parfaits en ligne.",
            "Social media can damage their self-esteem.",
            "→ Les réseaux sociaux peuvent nuire à leur estime de soi.",
          ],
        },
      },
      {
        title: "Sauver la planète : environnement et changement climatique",
        body: [
          "Cet axe porte sur les **défis environnementaux** et sur la façon dont les sociétés anglophones y répondent : militantisme, innovations, choix individuels. On y croise des figures comme **Greta Thunberg** et les **Fridays for Future** (grèves pour le climat), ou des œuvres de science-fiction qui imaginent l’avenir.",
          "Vocabulaire du problème : **climate change / global warming** (réchauffement climatique), **greenhouse gases** (gaz à effet de serre), **carbon emissions** (émissions de carbone), **pollution**, **waste** (déchets), **plastic**, **deforestation**, **endangered species** (espèces menacées), **drought** (sécheresse), **floods** (inondations), **wildfires** (feux de forêt), **rising sea levels** (montée des eaux).",
          "Vocabulaire des solutions : **renewable energy** (énergies renouvelables : solar, wind power), **to recycle**, **to reduce**, **to reuse**, **to save energy / water**, **sustainable** (durable), **eco-friendly** (écologique), **public transport**, **to cut down on** (réduire), **a carbon footprint** (empreinte carbone), **a climate activist**, **to raise awareness** (sensibiliser), **to take action** (agir).",
          "Penser les **futurs possibles** : les documents peuvent présenter un avenir **utopique** (utopia) ou **dystopique** (dystopia, un monde futur cauchemardesque). Le vocabulaire de l’hypothèse et de la projection (will, might, could, if…) est donc essentiel.",
        ],
        keyPoints: [
          "global warming, greenhouse gases, carbon footprint, waste.",
          "renewable energy, sustainable, eco-friendly, recycle.",
          "to raise awareness = sensibiliser ; to take action = agir.",
          "utopia / dystopia : futurs idéaux ou cauchemardesques.",
        ],
        formulas: [
          "We should / must + base verbale (cut down on, reduce, recycle…)",
          "It is high time + sujet + preterit (il est grand temps que…)",
          "Unless + présent, … will … (à moins que…)",
        ],
        example: {
          title: "Proposer des solutions",
          steps: [
            "Our carbon footprint is far too big. → Notre empreinte carbone est bien trop importante.",
            "We should cut down on plastic and use public transport. → Nous devrions réduire le plastique et prendre les transports en commun.",
            "Governments must invest in renewable energy. → Les gouvernements doivent investir dans les énergies renouvelables.",
            "It is high time we took action. → Il est grand temps que nous agissions (preterit après it is high time).",
          ],
        },
      },
      {
        title: "Formuler des hypothèses : les phrases avec if",
        body: [
          "Pour imaginer l’avenir ou des situations différentes, on utilise les **phrases conditionnelles** avec **if** (si). Le **type 1** exprime une hypothèse **réaliste, probable** : **If + présent, will + base verbale**. « If we don’t act now, the planet will suffer » (si nous n’agissons pas maintenant, la planète souffrira).",
          "Le **type 2** exprime une hypothèse **imaginaire, peu probable ou irréelle** dans le présent : **If + preterit, would + base verbale**. « If I were president, I would ban plastic bags » (si j’étais président, j’interdirais les sacs plastiques). Avec be, on utilise souvent **were** pour toutes les personnes (If I were you… = à ta place…).",
          "Règle d’or, comme en français : **jamais de will ni de would après if**. On ne dit pas *If I will have time* ni *If I would be rich*. On peut aussi utiliser **unless** (= if… not, à moins que) : « Unless we change our habits, temperatures will keep rising. »",
        ],
        keyPoints: [
          "Type 1 (probable) : If + présent, will + base.",
          "Type 2 (imaginaire) : If + preterit, would + base.",
          "If I were you… = à ta place…",
          "Jamais de will / would après if ; unless = if… not.",
        ],
        formulas: [
          "If + present simple, sujet + will + base verbale",
          "If + preterit, sujet + would + base verbale",
          "Unless + présent, sujet + will + base verbale",
        ],
        example: {
          title: "Imaginer le futur de la planète",
          steps: [
            "If we recycle more, we will produce less waste. → Si nous recyclons davantage, nous produirons moins de déchets (type 1, probable).",
            "If everyone used a bike, cities would be cleaner. → Si tout le monde utilisait un vélo, les villes seraient plus propres (type 2, hypothèse peu réaliste).",
            "If I were you, I would stop buying fast fashion. → À ta place, j’arrêterais d’acheter de la mode jetable.",
            "Unless we act quickly, many species will disappear. → À moins d’agir vite, de nombreuses espèces disparaîtront.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-anglais-07-ex-1",
        prompt: "Que signifie « peer pressure » ?",
        choices: [
          "la pression des parents",
          "la peur de l’échec",
          "la pression des pairs, du groupe",
          "le stress des examens",
        ],
        answer: 2,
        explanation:
          "**Peer pressure** désigne l’influence exercée par les **personnes du même âge ou du même groupe** (les pairs, « peers ») pour adopter certains comportements.",
      },
      {
        id: "2nde-anglais-07-ex-2",
        prompt: "Traduis : « Elle est très sensible. »",
        choices: ["She is very sensible.", "She is very sensitive.", "She is very sensational.", "She is very sense."],
        answer: 1,
        explanation:
          "Faux ami : **sensitive** = sensible (émotif) ; **sensible** = raisonnable, plein de bon sens. Donc : **She is very sensitive**.",
      },
      {
        id: "2nde-anglais-07-ex-3",
        prompt: "Complète : « If it rains tomorrow, we ___ at home. »",
        choices: ["would stay", "stay", "stayed", "will stay"],
        answer: 3,
        explanation:
          "Hypothèse **réaliste** sur l’avenir → conditionnel de type 1 : **If + présent, will + base** : we **will stay** at home.",
      },
      {
        id: "2nde-anglais-07-ex-4",
        prompt: "Que signifie « renewable energy » ?",
        choices: [
          "les énergies renouvelables",
          "les économies d’énergie",
          "l’énergie nucléaire",
          "la crise énergétique",
        ],
        answer: 0,
        explanation:
          "**Renewable energy** = énergies **renouvelables** (solaire, éolien, hydraulique), qui ne s’épuisent pas, par opposition aux énergies fossiles (fossil fuels).",
      },
      {
        id: "2nde-anglais-07-ex-5",
        prompt: "Complète : « Many teenagers want to ___ in with their group of friends. »",
        choices: ["stand", "fit", "show", "get"],
        answer: 1,
        explanation:
          "**To fit in** = s’intégrer, trouver sa place dans un groupe. « To stand out » signifie au contraire se démarquer, et « to show off » frimer.",
      },
      {
        id: "2nde-anglais-07-ex-6",
        prompt: "Que signifie « endangered species » ?",
        choices: [
          "des espèces dangereuses",
          "des espèces disparues",
          "des espèces invasives",
          "des espèces menacées",
        ],
        answer: 3,
        explanation:
          "**Endangered** = menacé (en danger d’extinction). Une espèce dangereuse serait « dangerous », une espèce disparue « extinct ».",
      },
    ],
    test: [
      {
        id: "2nde-anglais-07-ct-1",
        prompt: "Complète : « If I ___ rich, I ___ a house by the sea. »",
        choices: ["am / would buy", "were / would buy", "would be / bought", "was / will buy"],
        answer: 1,
        explanation:
          "Hypothèse **imaginaire** dans le présent → type 2 : **If + preterit (were), would + base** (would buy). On ne met jamais would après if.",
      },
      {
        id: "2nde-anglais-07-ct-2",
        prompt: "Choisis la phrase correcte :",
        choices: [
          "If we will not reduce emissions, the climate will change.",
          "If we wouldn’t reduce emissions, the climate would change.",
          "Unless we reduce emissions, the climate will keep changing.",
          "Unless we don’t reduce emissions, the climate will change.",
        ],
        answer: 2,
        explanation:
          "**Unless** = if… not, il contient déjà la négation : on ne met donc pas « don’t » après. Et après if / unless, jamais de will ni de would. Seule la 3e phrase est correcte.",
      },
      {
        id: "2nde-anglais-07-ct-3",
        prompt: "Complète : « Climate activists organise marches to ___ awareness of global warming. »",
        choices: ["rise", "raise", "arise", "grow"],
        answer: 1,
        explanation:
          "**To raise awareness** = sensibiliser (verbe transitif « raise » = élever, faire monter). **Rise** est intransitif (les prix montent : prices rise) et ne peut pas avoir de complément.",
      },
      {
        id: "2nde-anglais-07-ct-4",
        prompt: "Traduis : « À ta place, je supprimerais ce commentaire. »",
        choices: [
          "If I were you, I would delete this comment.",
          "If I am you, I will delete this comment.",
          "At your place, I would delete this comment.",
          "If I was you, I deleted this comment.",
        ],
        answer: 0,
        explanation:
          "« À ta place » se traduit par la formule figée **If I were you**, suivie de **would + base**. « At your place » est un calque du français et signifie « chez toi ».",
      },
      {
        id: "2nde-anglais-07-ct-5",
        prompt: "Quel mot désigne un monde futur cauchemardesque, comme dans le roman « 1984 » de George Orwell ?",
        choices: ["a utopia", "a fantasy", "a dystopia", "a prophecy"],
        answer: 2,
        explanation:
          "Une **dystopia** (dystopie) décrit une société future oppressante ou cauchemardesque, comme « 1984 » ou « The Hunger Games ». Une utopia est au contraire une société idéale.",
      },
      {
        id: "2nde-anglais-07-ct-6",
        prompt: "Complète : « Online, people often show a perfect image of themselves, but it is not always their ___ self. »",
        choices: ["fake", "real", "selfish", "proper"],
        answer: 1,
        explanation:
          "On oppose l’image affichée en ligne (online persona) au **real self** (le vrai moi). « Fake » dirait l’inverse, et « selfish » signifie égoïste.",
      },
      {
        id: "2nde-anglais-07-ct-7",
        prompt: "Complète : « It is high time governments ___ action against plastic pollution. »",
        choices: ["take", "will take", "took", "taking"],
        answer: 2,
        explanation:
          "Après **it is high time** (il est grand temps que), on utilise le **preterit** pour exprimer que l’action aurait déjà dû avoir lieu : it is high time governments **took** action.",
      },
      {
        id: "2nde-anglais-07-ct-8",
        prompt: "Quel ensemble ne contient que des solutions au changement climatique ?",
        choices: [
          "deforestation, recycling, wildfires",
          "renewable energy, public transport, recycling",
          "greenhouse gases, solar panels, droughts",
          "carbon emissions, floods, wind power",
        ],
        answer: 1,
        explanation:
          "**Renewable energy, public transport, recycling** sont trois solutions. Les autres listes mélangent des solutions avec des causes (deforestation, greenhouse gases, carbon emissions) ou des conséquences (wildfires, droughts, floods).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Chapitre 8 — Méthode
  // ─────────────────────────────────────────────────────────────
  {
    id: "2nde-anglais-08",
    title: "Méthode : compréhension écrite / orale et expression écrite",
    summary:
      "Ce chapitre te donne une méthode efficace pour comprendre un document écrit ou audio en anglais et pour rédiger un texte structuré grâce aux mots de liaison.",
    objectives: [
      "Je sais repérer les informations essentielles d’un document (qui, quoi, où, quand, pourquoi).",
      "Je sais utiliser les indices (mots transparents, contexte, intonation) pour comprendre.",
      "Je sais organiser un texte en introduction, développement et conclusion.",
      "Je sais utiliser des mots de liaison variés pour ajouter, opposer, expliquer et conclure.",
    ],
    sections: [
      {
        title: "Comprendre un document écrit",
        body: [
          "Avant de lire en détail, **observe le document** : titre, source, date, illustrations, type de texte (article de presse, extrait de roman, publicité, post de blog). Ces éléments te permettent de **formuler des hypothèses** sur le thème avant même de lire.",
          "Fais ensuite une **première lecture globale** (skimming) sans t’arrêter sur les mots inconnus, pour répondre aux questions **Who? What? Where? When? Why?**. Puis une **lecture ciblée** (scanning) pour retrouver des informations précises (chiffres, noms, dates, opinions).",
          "Pour les mots inconnus, appuie-toi sur les **mots transparents** (information, environment, solution), sur la **famille de mots** (unhappiness → un- + happy + -ness = le malheur), et sur le **contexte**. Méfie-toi des **faux amis** : actually (en fait), eventually (finalement), library (bibliothèque), sensible (raisonnable), to attend (assister à).",
          "Repère enfin les **mots de liaison** et les **marqueurs d’opinion** (I think, unfortunately, surprisingly) : ils révèlent la structure du texte et le point de vue de l’auteur.",
        ],
        keyPoints: [
          "Observer : titre, source, date, image, type de document.",
          "Skimming (sens global) puis scanning (détails précis).",
          "Mots transparents, familles de mots, contexte.",
          "Faux amis : actually, eventually, library, attend.",
        ],
        formulas: [
          "This document is a(n) + type + taken from + source + published in + date",
          "It deals with / It is about + thème",
          "The author seems to + base verbale (think, criticise, support…)",
        ],
        example: {
          title: "Présenter un article en deux phrases",
          steps: [
            "Observation : titre « Teens and their phones », source The Guardian, 2024.",
            "This document is an article taken from The Guardian, published in 2024.",
            "→ Ce document est un article tiré du Guardian, publié en 2024.",
            "It deals with teenagers’ addiction to their smartphones.",
            "→ Il traite de l’addiction des adolescents à leur smartphone.",
          ],
        },
      },
      {
        title: "Comprendre un document oral",
        body: [
          "La compréhension orale se prépare : **lis bien la consigne** et les éventuelles questions avant l’écoute, et anticipe le vocabulaire probable à partir du titre ou de l’image. Tu sais ainsi ce que tu dois chercher.",
          "**Première écoute** : concentre-toi sur le **sens global** — combien de personnes parlent, quel est le type de document (interview, bulletin d’information, conversation), quel est le ton (joyeux, inquiet, ironique) et le thème général. **Deuxièmes et troisièmes écoutes** : note les **mots accentués** (en anglais, les mots importants sont prononcés plus fort), les chiffres, les noms propres, les dates.",
          "Note en **mots-clés**, pas en phrases complètes, et en anglais ou en français selon ce qui va le plus vite. Ne bloque pas sur un passage incompris : on comprend rarement 100 % d’un document, et c’est normal. Le compte rendu, en français ou en anglais selon la consigne, doit **hiérarchiser** : d’abord l’idée générale, puis les détails les plus importants.",
          "Attention aux sons qui se ressemblent : **thirteen / thirty**, **fifteen / fifty** (l’accent tombe à la fin pour -teen, au début pour -ty) ; **can / can’t** (can’t est plus long et accentué).",
        ],
        keyPoints: [
          "Lire la consigne et anticiper avant d’écouter.",
          "1re écoute : global (qui, ton, thème) ; puis détails.",
          "Mots accentués = mots importants.",
          "Noter en mots-clés ; hiérarchiser le compte rendu.",
          "Pièges : thirteen / thirty, can / can’t.",
        ],
        formulas: [
          "The recording is a(n) + type (interview, news report…)",
          "The speaker sounds + adjectif (worried, enthusiastic…)",
          "The main idea is that + phrase",
        ],
        example: {
          title: "Prendre des notes efficaces",
          steps: [
            "Entendu : « More than fifteen thousand students took part in the climate strike in London last Friday. »",
            "Notes : 15 000 (pas 50 000 : accent sur -teen) / students / climate strike / London / last Friday.",
            "Compte rendu : Plus de 15 000 élèves ont participé vendredi dernier à une grève pour le climat à Londres.",
          ],
        },
      },
      {
        title: "Expression écrite : structurer son texte avec les mots de liaison",
        body: [
          "Un bon texte suit un **plan clair**. L’**introduction** présente le sujet (et éventuellement une question) ; le **développement** contient un paragraphe par idée, chaque idée étant illustrée par un **exemple** ; la **conclusion** résume ta position et peut ouvrir sur une perspective. Saute une ligne entre les paragraphes.",
          "Les **mots de liaison** (linking words) rendent le texte fluide et logique. Pour **ordonner** : first (of all), firstly, then, next, finally. Pour **ajouter** : and, also, moreover, furthermore, besides, what is more. Pour **opposer** : but, however (cependant), on the one hand… on the other hand, whereas, although / even though (bien que + sujet + verbe), despite / in spite of (malgré + nom ou V-ing).",
          "Pour **expliquer la cause** : because (+ phrase), because of (+ nom), since, as. Pour **la conséquence** : so, therefore (par conséquent), as a result. Pour **donner un exemple** : for example, for instance, such as. Pour **conclure** : to conclude, in conclusion, all in all, to sum up.",
          "Relis-toi avec une **check-list** : -s de la 3e personne, accords des temps, base verbale après les modaux et do / did, place de l’adjectif (avant le nom : a beautiful city), pas de -s aux adjectifs, orthographe des mots courants. Varie le vocabulaire et évite de répéter « very » et « good ».",
        ],
        keyPoints: [
          "Introduction / un paragraphe par idée + exemple / conclusion.",
          "Ajouter : moreover, furthermore ; opposer : however, whereas, although.",
          "although + phrase ≠ despite + nom / V-ing.",
          "because + phrase ≠ because of + nom ; therefore = par conséquent.",
          "Relecture systématique avec une check-list.",
        ],
        formulas: [
          "First of all, … Then, … Finally, …",
          "Although + sujet + verbe, … / Despite + nom / V-ing, …",
          "… ; however, … / On the one hand, … On the other hand, …",
          "To conclude, I believe that + phrase",
        ],
        example: {
          title: "Rédiger un court paragraphe argumenté",
          steps: [
            "Sujet : Are social networks good for teenagers?",
            "On the one hand, social networks help teenagers stay in touch with their friends.",
            "Moreover, they can learn a lot, for instance by following science accounts.",
            "On the other hand, they spend too much time online; as a result, they sleep less.",
            "Although these apps are useful, they should be used wisely.",
            "To conclude, I believe social networks are good for teenagers if they use them in moderation.",
          ],
        },
      },
    ],
    exercise: [
      {
        id: "2nde-anglais-08-ex-1",
        prompt: "Que signifie le mot de liaison « however » ?",
        choices: ["par conséquent", "de plus", "cependant", "par exemple"],
        answer: 2,
        explanation:
          "**However** = cependant, toutefois : il introduit une **opposition**. Par conséquent = therefore ; de plus = moreover ; par exemple = for instance.",
      },
      {
        id: "2nde-anglais-08-ex-2",
        prompt: "Quel mot de liaison sert à **ajouter** un argument ?",
        choices: ["Moreover", "Whereas", "Therefore", "Although"],
        answer: 0,
        explanation:
          "**Moreover** (de plus) ajoute une idée. Whereas et although expriment l’opposition ou la concession ; therefore exprime la conséquence.",
      },
      {
        id: "2nde-anglais-08-ex-3",
        prompt: "Que signifie « actually » ?",
        choices: ["actuellement", "en fait", "activement", "exactement"],
        answer: 1,
        explanation:
          "Faux ami : **actually** = **en fait**, en réalité. « Actuellement » se dit **currently** ou **at the moment**.",
      },
      {
        id: "2nde-anglais-08-ex-4",
        prompt: "Quelle technique consiste à lire rapidement pour saisir le **sens général** d’un texte ?",
        choices: ["scanning", "translating", "summarising", "skimming"],
        answer: 3,
        explanation:
          "Le **skimming** est une lecture rapide pour le sens global. Le **scanning** consiste à chercher une information précise (une date, un nom, un chiffre).",
      },
      {
        id: "2nde-anglais-08-ex-5",
        prompt: "Complète : « He stayed at home ___ he was ill. »",
        choices: ["because of", "because", "despite", "so"],
        answer: 1,
        explanation:
          "« He was ill » est une **phrase** (sujet + verbe) → **because**. « Because of » est suivi d’un nom (because of his illness) ; « so » exprimerait la conséquence.",
      },
      {
        id: "2nde-anglais-08-ex-6",
        prompt: "Quelle expression convient pour **conclure** un texte ?",
        choices: ["First of all", "For instance", "To sum up", "Besides"],
        answer: 2,
        explanation:
          "**To sum up** (pour résumer) introduit la conclusion, comme in conclusion ou all in all. First of all ouvre le texte, for instance donne un exemple, besides ajoute une idée.",
      },
    ],
    test: [
      {
        id: "2nde-anglais-08-ct-1",
        prompt: "Complète : « ___ the rain, we went for a walk. »",
        choices: ["Although", "Even though", "Despite", "However"],
        answer: 2,
        explanation:
          "« The rain » est un **nom** → **despite** (ou in spite of). « Although / even though » doivent être suivis d’une phrase : Although it was raining, we went for a walk.",
      },
      {
        id: "2nde-anglais-08-ct-2",
        prompt: "Complète : « Plastic pollutes the oceans; ___, we should use less of it. »",
        choices: ["therefore", "whereas", "although", "for instance"],
        answer: 0,
        explanation:
          "La 2e partie est la **conséquence** logique de la 1re → **therefore** (par conséquent). Whereas et although marquent l’opposition ; for instance introduit un exemple.",
      },
      {
        id: "2nde-anglais-08-ct-3",
        prompt: "À l’oral, comment distinguer « thirteen » de « thirty » ?",
        choices: [
          "thirteen se prononce plus vite que thirty",
          "l’accent tombe sur -teen dans thirteen, et sur thir- dans thirty",
          "il n’y a aucune différence, seul le contexte aide",
          "thirty se termine par un son « n »",
        ],
        answer: 1,
        explanation:
          "Dans **thirTEEN**, l’accent tombe sur la **dernière syllabe** (et le son « n » final est net) ; dans **THIRty**, il tombe sur la **première**. C’est un indice décisif lors des compréhensions orales.",
      },
      {
        id: "2nde-anglais-08-ct-4",
        prompt: "Que signifie « eventually » ?",
        choices: ["éventuellement", "par hasard", "en fin de compte, finalement", "de temps en temps"],
        answer: 2,
        explanation:
          "Faux ami : **eventually** = **finalement**, au bout du compte. « Éventuellement » se traduit par **possibly** ou **perhaps**.",
      },
      {
        id: "2nde-anglais-08-ct-5",
        prompt: "Quelle phrase utilise correctement un mot de liaison ?",
        choices: [
          "Despite he was tired, he finished his essay.",
          "Although he was tired, he finished his essay.",
          "Although of his tiredness, he finished his essay.",
          "Despite of he was tired, he finished his essay.",
        ],
        answer: 1,
        explanation:
          "**Although** est suivi d’une phrase complète (he was tired). Despite se construit avec un nom ou un V-ing (Despite being tired / Despite his tiredness) et jamais avec « of ».",
      },
      {
        id: "2nde-anglais-08-ct-6",
        prompt: "Que signifie « unhelpful » ? (Pense au préfixe et au suffixe.)",
        choices: [
          "très utile",
          "qui aide beaucoup",
          "aide inutile, sans valeur",
          "peu serviable, pas utile",
        ],
        answer: 3,
        explanation:
          "**un-** = négation, **help** = aider, **-ful** = qui est plein de → helpful = serviable, utile ; **unhelpful** = **peu serviable, pas utile**. Décomposer les mots aide à comprendre sans dictionnaire.",
      },
      {
        id: "2nde-anglais-08-ct-7",
        prompt: "Quelle phrase d’introduction présente correctement un document ?",
        choices: [
          "This document is an article taken from The Times and it deals with youth unemployment.",
          "This document talk about youth unemployment from The Times.",
          "In this document, he speaks of the unemployment of the youngs.",
          "The document it is an article of The Times about unemployment.",
        ],
        answer: 0,
        explanation:
          "La 1re phrase est correcte et complète : nature (an article), source (taken from The Times), thème (it deals with). Les autres contiennent des fautes : -s oublié à talks, « the youngs » (on dit young people), double sujet « The document it ».",
      },
      {
        id: "2nde-anglais-08-ct-8",
        prompt: "Complète : « Some people love city life, ___ others prefer the countryside. »",
        choices: ["whereas", "despite", "because of", "therefore"],
        answer: 0,
        explanation:
          "On met en **contraste** deux groupes → **whereas** (alors que, tandis que). Despite et because of doivent être suivis d’un nom ; therefore exprime une conséquence.",
      },
    ],
  },
];

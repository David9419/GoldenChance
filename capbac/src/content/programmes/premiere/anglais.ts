import type { Chapter } from "../../types";

export const chapters: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Temps et aspect
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-anglais-01",
    title: "Révision des temps et de l’aspect",
    summary:
      "En anglais, choisir un temps, c’est combiner une époque (passé, présent) et un aspect (simple, continu, parfait) qui traduit le regard que l’on porte sur l’action.",
    objectives: [
      "Je sais distinguer le présent simple et le présent continu (be + V-ing) selon le point de vue de l’énonciateur.",
      "Je sais choisir entre le prétérit et le present perfect en fonction du lien avec le présent.",
      "Je sais employer le present perfect continuous avec for et since.",
      "Je sais utiliser le past perfect pour exprimer l’antériorité dans un récit au passé.",
    ],
    sections: [
      {
        title: "Simple ou continu : constater ou décrire une action en cours",
        body: [
          "L’anglais n’a que **deux temps grammaticaux** : le présent et le prétérit (le futur s’exprime avec des modaux comme will). Sur ces deux temps se greffent des **aspects** : l’aspect **simple** (rien n’est ajouté), l’aspect **continu** ou progressif (**be + V-ing**) et l’aspect **parfait** (**have + participe passé**). Le choix de l’aspect ne dépend pas seulement de la réalité, mais du **point de vue** de celui qui parle.",
          "Le **présent simple** sert à énoncer des faits présentés comme stables : vérités générales (Water boils at 100°C), habitudes (She takes the bus every morning), caractéristiques (He speaks three languages). Il ne commente pas l’action, il la **pose comme un fait**. On le repère souvent avec des adverbes de fréquence : always, usually, often, never.",
          "Le **présent continu** (am/is/are + V-ing) montre une action **en cours de déroulement**, temporaire ou limitée : Look, it’s raining! / I’m reading a novel by Toni Morrison at the moment. Il peut aussi exprimer un **jugement** de l’énonciateur, souvent agacé, avec always : He’s always complaining! (« Il n’arrête pas de se plaindre ! »). Enfin, il exprime un **futur programmé** : I’m meeting my teacher tomorrow.",
          "Attention aux **verbes d’état** (stative verbs) : know, believe, want, like, love, hate, belong, mean, understand, seem. Ils décrivent un état et non une activité, donc ils s’emploient très rarement à la forme continue : on dit I know the answer et non *I’m knowing.",
        ],
        keyPoints: [
          "Aspect simple = fait brut, général ou habituel.",
          "Aspect continu (be + V-ing) = action en cours, temporaire, ou commentaire de l’énonciateur.",
          "Verbes d’état (know, want, belong, believe…) : pas de forme continue en principe.",
          "Present continuous + marqueur de futur = rendez-vous déjà organisé.",
        ],
        formulas: [
          "Présent simple : I work / she works — He doesn’t work — Does he work?",
          "Présent continu : S + am/is/are + V-ing → She is working.",
          "Prétérit continu : S + was/were + V-ing → They were working when I called.",
        ],
        example: {
          title: "Choisir entre simple et continu",
          steps: [
            "Phrase : « Mon frère travaille à Londres, mais cette semaine il travaille à Paris. »",
            "Première partie : situation stable → présent simple : My brother works in London.",
            "Deuxième partie : situation temporaire, limitée à « cette semaine » → présent continu.",
            "Résultat : My brother works in London, but this week he is working in Paris.",
            "Vérification : works ne prend pas de forme continue car c’est la situation habituelle ; is working souligne le caractère provisoire.",
          ],
        },
        figure: {
          type: "table",
          title: "Temps et aspects en anglais",
          caption: "Deux temps (présent, prétérit) combinés à des aspects (simple, continu, parfait).",
          headers: ["Aspect", "Présent", "Prétérit", "Valeur"],
          rows: [
            ["Simple", "she works", "she worked", "fait brut, habitude, vérité générale"],
            ["Continu (be + V-ing)", "she is working", "she was working", "action en cours, temporaire, commentaire"],
            ["Parfait (have + V-en)", "she has worked", "she had worked", "bilan au présent / antériorité dans le passé"],
            ["Parfait continu (have been + V-ing)", "she has been working", "she had been working", "durée d’une activité jusqu’à un repère"],
          ],
        },
        practice: [
          {
            id: "1re-anglais-01-s1-p1",
            prompt: "Choose the correct form: « Water ___ at 100°C. »",
            choices: ["boils", "is boiling", "boiled"],
            answer: 0,
            explanation:
              "Il s’agit d’une **vérité générale**, toujours valable : on emploie le **présent simple** (boils). Le présent continu présenterait l’action comme temporaire, ce qui n’a pas de sens pour une loi physique.",
          },
          {
            id: "1re-anglais-01-s1-p2",
            prompt: "Which sentence is correct?",
            choices: ["I'm knowing the answer.", "I am know the answer.", "I knowing the answer.", "I know the answer."],
            answer: 3,
            explanation:
              "**Know** est un **verbe d’état** (stative verb) : il ne s’emploie pas à la forme continue. On dit donc simplement I know the answer, au présent simple.",
          },
          {
            id: "1re-anglais-01-s1-p3",
            prompt: "« I'm meeting my teacher tomorrow. » What does the present continuous express here?",
            choices: ["an action in progress right now", "a future arrangement that is already organised", "a permanent situation"],
            answer: 1,
            explanation:
              "Associé à un **marqueur de futur** (tomorrow), le présent continu exprime un **rendez-vous déjà organisé**. Ce n’est ni une action en cours au moment où l’on parle, ni une situation permanente.",
          },
        ],
      },
      {
        title: "Prétérit ou present perfect : coupé du présent ou relié à lui",
        body: [
          "Le **prétérit** (V-ed ou forme irrégulière : went, saw, wrote) situe une action dans un **passé révolu, coupé du présent**. Il s’accompagne souvent d’un repère temporel daté : yesterday, last year, in 1963, two days ago, when I was a child. Exemple : Martin Luther King **delivered** his « I Have a Dream » speech in 1963.",
          "Le **present perfect** (have/has + participe passé) est un **présent** : il fait le **bilan, au moment où l’on parle**, d’une action passée. Ce qui compte, c’est le résultat ou l’expérience. I have lost my keys (= je ne les ai pas, maintenant). Have you ever been to Scotland? (= dans toute ta vie jusqu’à maintenant). On le trouve avec ever, never, already, yet, just, so far, recently.",
          "Règle d’or : **jamais de present perfect avec un repère du passé daté**. On ne dit pas *I have seen him yesterday, mais I saw him yesterday. En revanche, une période non terminée (today, this week, this year) est compatible : I have drunk three coffees today.",
          "Avec **for** (durée) et **since** (point de départ), le français utilise le présent là où l’anglais utilise le present perfect : « J’habite ici depuis 2015 » → I **have lived** here **since** 2015. Si l’on veut insister sur l’activité elle-même, on emploie le **present perfect continuous** : She has been studying for three hours (« Elle révise depuis trois heures »), qui peut aussi expliquer une trace visible : Your eyes are red. Have you been crying?",
        ],
        keyPoints: [
          "Prétérit = passé coupé du présent, souvent daté (yesterday, in 2016, ago).",
          "Present perfect = bilan présent d’un passé (ever, never, just, already, yet).",
          "« depuis » + durée = for ; « depuis » + date / point de départ = since.",
          "« Il y a » + durée (passé) = ago → two years ago.",
        ],
        formulas: [
          "Present perfect : S + have/has + V-en → They have voted.",
          "Present perfect continuous : S + have/has + been + V-ing → I have been waiting for an hour.",
          "Présent français + depuis → present perfect (continu) + for / since.",
        ],
        example: {
          title: "Traduire « depuis » correctement",
          steps: [
            "Phrase : « Elle apprend l’anglais depuis six ans. »",
            "« depuis » + durée (six ans) → for.",
            "L’action commence dans le passé et continue au présent → present perfect, ici continu car l’activité dure.",
            "Résultat : She has been learning English for six years.",
            "Variante avec un point de départ : She has been learning English since 2020.",
          ],
        },
        figure: {
          type: "table",
          title: "Prétérit ou present perfect : les marqueurs",
          caption: "Le marqueur de temps oriente souvent le choix du temps.",
          headers: ["Temps", "Marqueurs", "Exemple"],
          rows: [
            ["Prétérit", "yesterday, last year, in 1963, ago", "I saw him yesterday."],
            ["Present perfect (bilan)", "ever, never, just, already, yet, so far", "Have you ever been to Scotland?"],
            ["Present perfect + for", "durée (for ten years)", "I have lived here for ten years."],
            ["Present perfect + since", "point de départ (since 2015)", "I have lived here since 2015."],
          ],
        },
        practice: [
          {
            id: "1re-anglais-01-s2-p1",
            prompt: "Choose the correct form: « She ___ to Scotland three times so far. »",
            choices: ["went", "has been", "had been", "goes"],
            answer: 1,
            explanation:
              "**So far** (« jusqu’à présent ») indique un **bilan au moment où l’on parle** : on utilise le **present perfect** (has been). Le prétérit went exigerait un passé coupé du présent, souvent daté.",
          },
          {
            id: "1re-anglais-01-s2-p2",
            prompt: "Translate: « J’ai déménagé il y a deux ans. »",
            choices: ["I have moved two years ago.", "I moved since two years.", "I moved two years ago."],
            answer: 2,
            explanation:
              "« Il y a » + durée au passé se traduit par **ago**, qui impose le **prétérit** (moved). Le present perfect est impossible avec un repère passé daté, et since s’emploie avec un point de départ, pas une durée.",
          },
          {
            id: "1re-anglais-01-s2-p3",
            prompt: "« Your eyes are red. ___ » Which question best explains this visible trace?",
            choices: ["Have you been crying?", "Did you cry last year?", "Had you cried?"],
            answer: 0,
            explanation:
              "Le **present perfect continuous** (have been + V-ing) sert à expliquer une **trace visible dans le présent** d’une activité récente. Le prétérit daté (last year) est coupé du présent et le past perfect exigerait un repère passé.",
          },
        ],
      },
      {
        title: "Le past perfect : l’antériorité dans le passé",
        body: [
          "Le **past perfect** (had + participe passé) est l’équivalent du plus-que-parfait français. Il sert à exprimer une action **antérieure à un autre moment du passé**. Dans un récit au prétérit, il permet de revenir en arrière : When the police arrived, the thief **had** already **escaped** (le voleur s’est échappé avant l’arrivée de la police).",
          "Comparez : When I arrived, the film **started** (le film commence au moment où j’arrive) et When I arrived, the film **had started** (le film avait déjà commencé). Le temps choisi change complètement la chronologie : c’est un point très fréquent dans les exercices de compréhension.",
          "Le past perfect s’emploie aussi au **discours indirect** quand le verbe introducteur est au passé : She said, « I lost my phone » → She said (that) she **had lost** her phone. Il apparaît encore après **wish / if only** et dans le conditionnel de type 3 pour parler d’un passé irréel (voir chapitre 2).",
          "Comme le present perfect, il existe une forme continue, le **past perfect continuous** (had been + V-ing), pour insister sur la durée d’une activité avant un moment passé : They had been walking for hours when they finally saw the village.",
        ],
        keyPoints: [
          "Past perfect = had + V-en = plus-que-parfait.",
          "Il marque une étape antérieure dans un récit au prétérit.",
          "Marqueurs fréquents : already, by the time, before, after, when, never… before.",
          "Discours indirect : prétérit → past perfect (I lost → she said she had lost).",
        ],
        formulas: [
          "Past perfect : S + had + V-en → She had left.",
          "Past perfect continuous : S + had + been + V-ing → He had been working all night.",
          "By the time + prétérit, S + past perfect → By the time we arrived, the show had ended.",
        ],
        example: {
          title: "Reconstituer une chronologie",
          steps: [
            "Texte : « By the time Rosa Parks was arrested in 1955, she had worked for the NAACP for over ten years. »",
            "Action 1 (la plus ancienne) : elle travaille pour la NAACP → had worked (past perfect).",
            "Action 2 : elle est arrêtée en 1955 → was arrested (prétérit passif).",
            "Traduction : « Au moment de son arrestation en 1955, Rosa Parks travaillait pour la NAACP depuis plus de dix ans. »",
            "Remarque : le français utilise ici un imparfait + depuis, l’anglais un past perfect + for.",
          ],
        },
        practice: [
          {
            id: "1re-anglais-01-s3-p1",
            prompt: "« When I arrived, the film had started. » What does this sentence mean?",
            choices: [
              "The film started at the moment I arrived.",
              "The film started before I arrived.",
              "The film started after I arrived.",
              "The film never started.",
            ],
            answer: 1,
            explanation:
              "Le **past perfect** (had started) marque une action **antérieure** à un autre moment du passé (mon arrivée). Avec le prétérit started, le film aurait commencé au moment même de l’arrivée.",
          },
          {
            id: "1re-anglais-01-s3-p2",
            prompt: "« I lost my phone », she said. → She said that she ___ her phone.",
            choices: ["has lost", "loses", "had lost"],
            answer: 2,
            explanation:
              "Au **discours indirect** introduit par un verbe au passé (said), le prétérit recule au **past perfect** : had lost. Has lost et loses ne respectent pas cette concordance des temps.",
          },
          {
            id: "1re-anglais-01-s3-p3",
            prompt: "Choose the correct form: « They ___ for hours when they finally saw the village. »",
            choices: ["had been walking", "have been walking", "are walking", "walk"],
            answer: 0,
            explanation:
              "On insiste sur la **durée d’une activité avant un moment passé** (when they saw) : c’est le **past perfect continuous** (had been walking). Le present perfect continuous renverrait au moment présent, ce qui est incompatible avec saw.",
          },
        ],
      },
    ],
    homework: [
      {
        id: "1re-anglais-01-hw-1",
        prompt: "Choose the correct form: « By the time we arrived, the show ___. »",
        choices: ["has ended", "had ended", "ends", "is ending"],
        answer: 1,
        explanation:
          "**By the time** + prétérit annonce une action déjà terminée avant ce moment passé : on emploie le **past perfect** (had ended). Le spectacle s’est terminé avant notre arrivée.",
      },
      {
        id: "1re-anglais-01-hw-2",
        prompt: "Translate: « Elle apprend le piano depuis six mois. »",
        choices: [
          "She learns the piano since six months.",
          "She learned the piano for six months.",
          "She is learning the piano since six months.",
          "She has been learning the piano for six months.",
        ],
        answer: 3,
        explanation:
          "Présent français + « depuis » = action commencée dans le passé qui dure encore : **present perfect continuous**. « Six mois » est une **durée**, donc **for** et non since.",
      },
      {
        id: "1re-anglais-01-hw-3",
        prompt: "Choose the correct form: « Look! The children ___ in the garden. »",
        choices: ["play", "played", "are playing"],
        answer: 2,
        explanation:
          "« Look! » signale une action **en cours au moment où l’on parle** : on emploie le **présent continu** (are playing). Le présent simple play exprimerait une habitude.",
      },
      {
        id: "1re-anglais-01-hw-4",
        prompt: "Which sentence is **incorrect**?",
        choices: [
          "I have seen him yesterday.",
          "I saw him yesterday.",
          "I have already seen this film.",
          "I have drunk three coffees today.",
        ],
        answer: 0,
        explanation:
          "On n’emploie **jamais le present perfect avec un repère passé daté** comme yesterday : il faut dire I saw him yesterday. En revanche, today est une période non terminée, compatible avec le present perfect.",
      },
    ],
    exercise: [
      {
        id: "1re-anglais-01-ex-1",
        prompt: "Choose the correct form: « Listen! Somebody ___ the piano upstairs. »",
        choices: ["plays", "is playing", "has played", "played"],
        answer: 1,
        explanation:
          "« Listen! » montre que l’action se déroule **au moment où l’on parle** : on emploie le **présent continu** (is playing). Le présent simple plays énoncerait une habitude, ce qui ne correspond pas au contexte.",
      },
      {
        id: "1re-anglais-01-ex-2",
        prompt: "Choose the correct form: « I ___ this film three years ago. »",
        choices: ["have seen", "have been seeing", "saw", "had seen"],
        answer: 2,
        explanation:
          "Le marqueur **ago** situe l’action dans un passé daté, coupé du présent : il impose le **prétérit** (saw). Le present perfect est impossible avec un repère passé daté.",
      },
      {
        id: "1re-anglais-01-ex-3",
        prompt: "Translate: « Nous habitons ici depuis 2018. »",
        choices: [
          "We have lived here since 2018.",
          "We live here since 2018.",
          "We have lived here for 2018.",
          "We lived here since 2018.",
        ],
        answer: 0,
        explanation:
          "Le présent français + « depuis » se traduit par un **present perfect** car l’action commence dans le passé et dure encore. 2018 est un **point de départ**, donc **since** (for s’emploie avec une durée : for six years).",
      },
      {
        id: "1re-anglais-01-ex-4",
        prompt: "Choose the correct form: « When we got to the station, the train ___. We had to wait for the next one. »",
        choices: ["left", "is leaving", "has left", "had left"],
        answer: 3,
        explanation:
          "Le train est parti **avant** notre arrivée (puisque nous devons attendre le suivant). Cette antériorité dans le passé exige le **past perfect** : had left. Avec left, on comprendrait que le train part au moment où nous arrivons.",
      },
      {
        id: "1re-anglais-01-ex-5",
        prompt: "Which sentence is grammatically correct?",
        choices: [
          "I am knowing the answer.",
          "She is believing in ghosts.",
          "This bag belongs to my sister.",
          "They are wanting a new phone.",
        ],
        answer: 2,
        explanation:
          "know, believe, belong et want sont des **verbes d’état** : ils ne s’emploient normalement pas à la forme continue. Seule la phrase « This bag belongs to my sister » est correcte. Il faut dire I know, she believes, they want.",
      },
      {
        id: "1re-anglais-01-ex-6",
        prompt: "Choose the best answer: « Have you finished your essay ___? » — « No, not ___. »",
        choices: ["already / already", "yet / yet", "just / yet", "ever / already"],
        answer: 1,
        explanation:
          "Dans une **question** et une **phrase négative** au present perfect, « déjà / pas encore » se traduit par **yet**, placé en fin de phrase. Already s’emploie plutôt dans les phrases affirmatives (I have already finished).",
      },
    ],
    test: [
      {
        id: "1re-anglais-01-ct-1",
        prompt: "Choose the correct form: « She looks exhausted. She ___ for her exams all day. »",
        choices: ["has been revising", "revised", "is revising since", "had revised"],
        answer: 0,
        explanation:
          "La fatigue visible **maintenant** est la conséquence d’une activité qui a duré jusqu’au présent : c’est l’emploi typique du **present perfect continuous** (has been revising). Le prétérit couperait le lien avec le présent, et « is revising since » est une erreur classique de francophone.",
      },
      {
        id: "1re-anglais-01-ct-2",
        prompt: "Choose the correct form: « He ___ in Manchester for ten years before he moved to London in 2019. »",
        choices: ["has lived", "lives", "had lived", "was living since"],
        answer: 2,
        explanation:
          "Les dix années à Manchester précèdent un autre événement passé (le déménagement en 2019, au prétérit). On exprime cette antériorité avec le **past perfect** : had lived. Le present perfect est exclu car tout se passe dans un passé révolu.",
      },
      {
        id: "1re-anglais-01-ct-3",
        prompt: "What does this sentence suggest? « My neighbour is always playing loud music. »",
        choices: [
          "The neighbour plays music once a week.",
          "The neighbour is playing music right now only.",
          "The neighbour has stopped playing music.",
          "The speaker is irritated by a repeated habit.",
        ],
        answer: 3,
        explanation:
          "**Be + always + V-ing** ne décrit pas une simple habitude : il exprime un **jugement de l’énonciateur**, souvent de l’agacement (« Il passe son temps à mettre la musique à fond ! »). C’est une valeur modale de l’aspect continu.",
      },
      {
        id: "1re-anglais-01-ct-4",
        prompt: "Choose the correct sentence.",
        choices: [
          "The UK has voted to leave the EU in 2016.",
          "The UK voted to leave the EU in 2016.",
          "The UK had voted to leave the EU since 2016.",
          "The UK is voting to leave the EU in 2016.",
        ],
        answer: 1,
        explanation:
          "Le référendum sur le Brexit a eu lieu le 23 juin 2016 : **in 2016** est un repère daté, donc **prétérit** obligatoire. « has voted… in 2016 » est une faute fréquente : le present perfect est incompatible avec une date passée.",
      },
      {
        id: "1re-anglais-01-ct-5",
        prompt: "Report this sentence: Tom said, « I have never visited New York. »",
        choices: [
          "Tom said he had never visited New York.",
          "Tom said he has never visited New York.",
          "Tom said he never visits New York.",
          "Tom said I had never visited New York.",
        ],
        answer: 0,
        explanation:
          "Au **discours indirect** introduit par un verbe au passé (said), on « recule » d’un temps : present perfect → **past perfect** (had never visited). Le pronom I devient he puisque c’est Tom qui parle.",
      },
      {
        id: "1re-anglais-01-ct-6",
        prompt: "Which translation is correct? « Il y a deux heures que j’attends. »",
        choices: [
          "I wait for two hours.",
          "I waited two hours ago.",
          "I am waiting since two hours.",
          "I have been waiting for two hours.",
        ],
        answer: 3,
        explanation:
          "« Il y a deux heures que j’attends » = « J’attends depuis deux heures » : l’attente a commencé dans le passé et continue. On emploie le **present perfect continuous** + **for** (durée). « two hours ago » signifierait que l’attente a eu lieu il y a deux heures et qu’elle est terminée.",
      },
      {
        id: "1re-anglais-01-ct-7",
        prompt: "Choose the correct form: « I'm afraid I can't come to the party. I ___ my grandparents on Saturday. »",
        choices: ["visit usually", "am visiting", "have visited", "had visited"],
        answer: 1,
        explanation:
          "Le **présent continu + repère futur** (on Saturday) exprime un **projet déjà organisé**, un rendez-vous fixé. C’est la forme la plus naturelle ici. Le present perfect et le past perfect renvoient à du passé.",
      },
      {
        id: "1re-anglais-01-ct-8",
        prompt: "In which sentence is the past perfect used correctly?",
        choices: [
          "I had seen him yesterday at the market.",
          "She had lived in Paris since she is born.",
          "After she had read the letter, she burst into tears.",
          "We had gone to the cinema tomorrow.",
        ],
        answer: 2,
        explanation:
          "Dans « After she had read the letter, she burst into tears », la lecture précède les larmes : le past perfect marque bien l’**antériorité** par rapport à un prétérit. Les autres phrases mélangent les repères (yesterday sans autre moment passé, since she is born, tomorrow) de façon incorrecte.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Modalité et conditionnel
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-anglais-02",
    title: "Modalité et conditionnel",
    summary:
      "Les modaux et les structures hypothétiques permettent d’exprimer le degré de certitude, l’obligation, le conseil et l’irréel, au présent comme au passé.",
    objectives: [
      "Je sais choisir le modal adapté selon qu’il exprime une probabilité ou une obligation/permission.",
      "Je sais exprimer une déduction ou un reproche sur le passé avec modal + have + participe passé.",
      "Je sais construire les quatre types de phrases en if (0, 1, 2, 3) et les phrases mixtes.",
      "Je sais exprimer un regret ou un souhait avec wish et if only.",
    ],
    sections: [
      {
        title: "Les modaux : deux grandes familles de sens",
        body: [
          "Les **modaux** (can, could, may, might, must, shall, should, will, would) sont suivis de la **base verbale sans to**, ne prennent pas de -s à la 3ᵉ personne et forment seuls la négation et la question : She can swim / She can’t swim / Can she swim? Ils permettent à l’énonciateur de donner son avis sur la réalisation d’une action.",
          "On distingue deux grandes valeurs. La valeur **épistémique** évalue la **probabilité** : He **must** be tired (déduction quasi certaine), She **may / might** be at home (possibilité), That **can’t** be true (impossibilité logique), They **should** arrive soon (forte probabilité). La valeur **radicale** concerne les **relations entre personnes** : obligation (You must wear a seatbelt), permission (You may leave), conseil (You should see a doctor), capacité (I can speak Spanish).",
          "Certains modaux ont des **équivalents** pour les temps qu’ils n’ont pas : can → **be able to** (I will be able to come), must → **have to** (I had to leave early). Attention : **mustn’t** = interdiction (You mustn’t smoke here), alors que **don’t have to / needn’t** = absence d’obligation (You don’t have to come = ce n’est pas nécessaire).",
          "Pour porter un jugement sur le **passé**, on utilise **modal + have + participe passé**. Déduction : She **must have forgotten** (elle a dû oublier). Impossibilité : He **can’t have seen** us (il ne peut pas nous avoir vus). Reproche ou regret : You **should have told** me (tu aurais dû me le dire). Possibilité non réalisée : We **could have won** (nous aurions pu gagner).",
        ],
        keyPoints: [
          "must = certitude ou obligation ; can’t = impossibilité ; may/might = possibilité.",
          "mustn’t = interdiction ≠ don’t have to = pas d’obligation.",
          "should / ought to = conseil ; should have + V-en = reproche.",
          "Équivalents : be able to (can), have to (must), be allowed to (may).",
        ],
        formulas: [
          "Modal + base verbale → She might come.",
          "Modal + have + V-en (passé) → He must have missed the bus.",
          "should have + V-en = « aurait dû » ; could have + V-en = « aurait pu ».",
        ],
        example: {
          title: "Exprimer une déduction sur le passé",
          steps: [
            "Situation : les rues sont mouillées ce matin.",
            "On déduit avec une quasi-certitude qu’il a plu pendant la nuit → must + have + participe passé.",
            "Phrase : It must have rained during the night.",
            "Si l’on est moins sûr : It might have rained during the night.",
            "Si c’est impossible (ciel sans nuage, sol sec ailleurs) : It can’t have rained.",
          ],
        },
        figure: {
          type: "table",
          title: "Les deux valeurs des modaux",
          caption: "Valeur épistémique (probabilité) ou radicale (relations entre personnes).",
          headers: ["Modal", "Valeur épistémique", "Valeur radicale"],
          rows: [
            ["must", "déduction : He must be tired.", "obligation : You must wear a seatbelt."],
            ["can / can’t", "impossibilité : That can’t be true.", "capacité : I can speak Spanish."],
            ["may / might", "possibilité : She may be at home.", "permission (may) : You may leave."],
            ["should", "probabilité : They should arrive soon.", "conseil : You should see a doctor."],
          ],
        },
        practice: [
          {
            id: "1re-anglais-02-s1-p1",
            prompt: "Choose the correct modal: « You ___ smoke here: it's forbidden. »",
            choices: ["don't have to", "mustn't", "needn't"],
            answer: 1,
            explanation:
              "**Mustn’t** exprime une **interdiction**, ce qui correspond à « it’s forbidden ». Don’t have to et needn’t signifient seulement qu’il n’y a **pas d’obligation**.",
          },
          {
            id: "1re-anglais-02-s1-p2",
            prompt: "« The streets are wet this morning. It ___ during the night. »",
            choices: ["must have rained", "should rain", "can rain", "must rain"],
            answer: 0,
            explanation:
              "On fait une **déduction quasi certaine sur le passé** : must + **have + participe passé** (must have rained). Must rain porterait sur le présent ou l’obligation, ce qui ne convient pas.",
          },
          {
            id: "1re-anglais-02-s1-p3",
            prompt: "« You should have told me. » What does this sentence express?",
            choices: ["an obligation in the future", "a deduction about the present", "a reproach about the past"],
            answer: 2,
            explanation:
              "**Should have + participe passé** exprime un **reproche ou un regret** sur une action passée qui n’a pas eu lieu (« tu aurais dû me le dire »). La structure modal + have + V-en renvoie toujours au passé.",
          },
        ],
      },
      {
        title: "Les phrases en if : du réel à l’irréel",
        body: [
          "Les **if-clauses** expriment une condition et sa conséquence. Règle essentielle : on ne met **jamais will ni would dans la subordonnée en if** (sauf cas très particuliers de politesse). Les temps de la subordonnée « reculent » à mesure que l’hypothèse s’éloigne de la réalité.",
          "**Type 0** (vérité générale) : if + présent, présent → If you heat ice, it melts. **Type 1** (hypothèse réalisable) : if + présent, **will** + base verbale → If it rains tomorrow, we will stay at home. On peut remplacer if par **unless** (= if… not) : Unless you hurry, you will miss the train.",
          "**Type 2** (hypothèse irréelle ou peu probable dans le présent ou le futur) : if + **prétérit**, **would** + base verbale → If I had more time, I would travel more. Avec be, on emploie souvent **were** à toutes les personnes dans un registre soutenu : If I were you, I would accept (« À ta place, j’accepterais »).",
          "**Type 3** (irréel du passé, regret) : if + **past perfect**, **would have** + participe passé → If she had studied harder, she would have passed the exam (elle n’a pas assez travaillé et a échoué). On peut aussi construire des **phrases mixtes** : une condition passée avec une conséquence présente → If I had taken that job, I would be rich now.",
        ],
        keyPoints: [
          "Type 0 : if + présent → présent (vérité générale).",
          "Type 1 : if + présent → will + V (possible).",
          "Type 2 : if + prétérit → would + V (irréel du présent).",
          "Type 3 : if + past perfect → would have + V-en (irréel du passé).",
          "unless = if… not ; provided (that) / as long as = « à condition que ».",
        ],
        formulas: [
          "If + présent, S + will + V",
          "If + prétérit (were), S + would/could/might + V",
          "If + had + V-en, S + would/could/might + have + V-en",
          "Inversion soutenue : Had I known… = If I had known…",
        ],
        example: {
          title: "Transformer un fait en hypothèse irréelle",
          steps: [
            "Fait : « I didn’t know about the strike, so I didn’t take my bike. »",
            "On imagine le contraire d’un fait passé → type 3.",
            "Subordonnée : If I had known about the strike (past perfect).",
            "Principale : I would have taken my bike (would have + participe passé).",
            "Résultat : If I had known about the strike, I would have taken my bike.",
            "Version soutenue avec inversion : Had I known about the strike, I would have taken my bike.",
          ],
        },
        figure: {
          type: "table",
          title: "Les quatre types de phrases en if",
          caption: "Plus l’hypothèse s’éloigne du réel, plus les temps « reculent ».",
          headers: ["Type", "Subordonnée (if)", "Principale", "Exemple"],
          rows: [
            ["0 – vérité générale", "présent", "présent", "If you heat ice, it melts."],
            ["1 – possible", "présent", "will + V", "If it rains, we will stay at home."],
            ["2 – irréel du présent", "prétérit (were)", "would + V", "If I had more time, I would travel more."],
            ["3 – irréel du passé", "past perfect", "would have + V-en", "If she had studied, she would have passed."],
          ],
        },
        practice: [
          {
            id: "1re-anglais-02-s2-p1",
            prompt: "Complete: « If I ___ you, I would accept the offer. »",
            choices: ["am", "will be", "were", "would be"],
            answer: 2,
            explanation:
              "C’est un **type 2** (irréel du présent) : if + **prétérit**, et avec be on emploie **were** à toutes les personnes en registre soutenu. On ne met jamais will ni would dans la subordonnée en if.",
          },
          {
            id: "1re-anglais-02-s2-p2",
            prompt: "Complete: « If she had studied harder, she ___ the exam. »",
            choices: ["would pass", "would have passed", "will pass", "had passed"],
            answer: 1,
            explanation:
              "La subordonnée au **past perfect** (had studied) indique un **type 3**, irréel du passé. La principale se construit donc avec **would have + participe passé** : would have passed.",
          },
          {
            id: "1re-anglais-02-s2-p3",
            prompt: "« Unless you hurry, you will miss the train. » This means:",
            choices: [
              "If you don't hurry, you will miss the train.",
              "If you hurry, you will miss the train.",
              "Although you hurry, you will miss the train.",
            ],
            answer: 0,
            explanation:
              "**Unless** équivaut à **if… not** (« à moins que »). La phrase signifie donc : si tu ne te dépêches pas, tu rateras le train.",
          },
        ],
      },
      {
        title: "Wish et if only : souhaits et regrets",
        body: [
          "**Wish** et **if only** (« si seulement ») expriment un décalage entre la réalité et ce que l’on voudrait. Comme dans les phrases en if, on utilise un temps « reculé » pour marquer l’**irréel**.",
          "Pour un **regret présent** : wish / if only + **prétérit** → I wish I **had** a car (je n’en ai pas). If only I **were** taller! Pour un **regret passé** : wish / if only + **past perfect** → I wish I **had listened** to you (je ne t’ai pas écouté). If only they **hadn’t sold** the house!",
          "Pour exprimer un **agacement ou un souhait de changement** concernant le comportement de quelqu’un d’autre, on emploie wish + **would** : I wish you **would stop** interrupting me (« J’aimerais que tu arrêtes de m’interrompre »). On ne l’utilise pas avec le même sujet (on ne dit pas *I wish I would).",
          "D’autres expressions fonctionnent de la même façon : **It’s (high) time** + prétérit (It’s time we left = il est temps que nous partions) et **I’d rather** + sujet + prétérit (I’d rather you didn’t tell her = je préférerais que tu ne le lui dises pas). Ces structures sont très utiles dans l’expression écrite pour nuancer un point de vue.",
        ],
        keyPoints: [
          "wish + prétérit = regret sur le présent.",
          "wish + past perfect = regret sur le passé.",
          "wish + would = souhait de changement chez l’autre (souvent agacé).",
          "It’s high time + prétérit ; I’d rather + S + prétérit.",
        ],
        formulas: [
          "S + wish(es) + S + prétérit → I wish I knew.",
          "S + wish(es) + S + had + V-en → She wishes she had stayed.",
          "If only + S + prétérit / past perfect !",
        ],
        example: {
          title: "Exprimer un regret dans un essai",
          steps: [
            "Fait : « Many people ignored climate warnings in the 1980s. »",
            "On veut exprimer un regret sur le passé → wish / if only + past perfect.",
            "Phrase : Many scientists wish governments had acted earlier.",
            "Variante plus expressive : If only we had listened to the warnings!",
            "Prolongement avec une conséquence présente (phrase mixte) : If we had acted earlier, the situation would be less critical today.",
          ],
        },
        figure: {
          type: "table",
          title: "Wish, if only et structures voisines",
          headers: ["Structure", "Valeur", "Exemple"],
          rows: [
            ["wish / if only + prétérit", "regret sur le présent", "I wish I had a car."],
            ["wish / if only + past perfect", "regret sur le passé", "I wish I had listened to you."],
            ["wish + would", "souhait de changement chez l’autre", "I wish you would stop interrupting me."],
            ["It’s (high) time + prétérit", "il est temps que…", "It’s time we left."],
            ["I’d rather + S + prétérit", "je préférerais que…", "I’d rather you didn’t tell her."],
          ],
        },
        practice: [
          {
            id: "1re-anglais-02-s3-p1",
            prompt: "Express a regret about the present: « I don't have a car. »",
            choices: ["I wish I have a car.", "I wish I would have a car.", "I wish I had had a car.", "I wish I had a car."],
            answer: 3,
            explanation:
              "Pour un **regret sur le présent**, on emploie wish + **prétérit** : I wish I had a car. Had had (past perfect) renverrait à un regret sur le passé, et I wish I would est impossible avec le même sujet.",
          },
          {
            id: "1re-anglais-02-s3-p2",
            prompt: "They sold their house last year and now regret it: « If only we ___ the house! »",
            choices: ["hadn't sold", "didn't sell", "wouldn't sell"],
            answer: 0,
            explanation:
              "Le regret porte sur une **action passée** : if only + **past perfect** (hadn’t sold). Le prétérit didn’t sell exprimerait un regret sur le présent.",
          },
          {
            id: "1re-anglais-02-s3-p3",
            prompt: "Complete: « It's high time we ___. »",
            choices: ["leave", "left", "will leave", "have left"],
            answer: 1,
            explanation:
              "**It’s (high) time** est suivi d’un sujet + **prétérit** à valeur d’irréel : It’s high time we left (« il est grand temps que nous partions »). Le présent ou le futur ne sont pas possibles dans cette structure.",
          },
        ],
      },
    ],
    homework: [
      {
        id: "1re-anglais-02-hw-1",
        prompt: "« He ___ seen us: he was in London at the time. »",
        choices: ["must have", "can't have", "should have", "might have"],
        answer: 1,
        explanation:
          "Il était à Londres : il est **impossible** qu’il nous ait vus. L’impossibilité logique dans le passé s’exprime avec **can’t have + participe passé**.",
      },
      {
        id: "1re-anglais-02-hw-2",
        prompt: "Mixed conditional: « If I had taken that job, I ___ rich now. »",
        choices: ["would have been", "will be", "would be"],
        answer: 2,
        explanation:
          "La condition porte sur le **passé** (had taken) mais la conséquence sur le **présent** (now) : c’est une **phrase mixte**. La principale prend donc would + base verbale : would be.",
      },
      {
        id: "1re-anglais-02-hw-3",
        prompt: "« Had I known about the strike, I would have taken my bike. » « Had I known » is equivalent to:",
        choices: ["If I knew", "If I have known", "If I would know", "If I had known"],
        answer: 3,
        explanation:
          "L’**inversion** Had + sujet + participe passé est une version **soutenue** de if + past perfect. Had I known = If I had known (type 3, irréel du passé).",
      },
      {
        id: "1re-anglais-02-hw-4",
        prompt: "« You don't have to come. » This means:",
        choices: ["It is not necessary for you to come.", "You are forbidden to come.", "You will certainly come."],
        answer: 0,
        explanation:
          "**Don’t have to** exprime l’**absence d’obligation** : ce n’est pas nécessaire. Il ne faut pas le confondre avec mustn’t, qui exprime une interdiction.",
      },
    ],
    exercise: [
      {
        id: "1re-anglais-02-ex-1",
        prompt: "Complete: « If it ___ tomorrow, we will cancel the picnic. »",
        choices: ["will rain", "rains", "would rain", "rained"],
        answer: 1,
        explanation:
          "C’est une hypothèse réalisable (type 1) : **if + présent**, **will** + base verbale dans la principale. On ne met jamais will dans la subordonnée en if.",
      },
      {
        id: "1re-anglais-02-ex-2",
        prompt: "Complete: « If I ___ you, I would apologise. »",
        choices: ["am", "will be", "were", "have been"],
        answer: 2,
        explanation:
          "« If I were you » = « À ta place » : hypothèse irréelle (je ne suis pas toi), donc **type 2** avec un prétérit. Avec be, la forme **were** est utilisée à toutes les personnes dans cette expression figée.",
      },
      {
        id: "1re-anglais-02-ex-3",
        prompt: "Which sentence means « Ce n'est pas obligatoire » ?",
        choices: [
          "You don't have to wear a uniform.",
          "You mustn't wear a uniform.",
          "You can't wear a uniform.",
          "You shouldn't wear a uniform.",
        ],
        answer: 0,
        explanation:
          "**don’t have to** exprime l’**absence d’obligation**. **mustn’t** et **can’t** expriment une interdiction, **shouldn’t** un conseil négatif. C’est un piège fréquent : must not ≠ « ne pas devoir ».",
      },
      {
        id: "1re-anglais-02-ex-4",
        prompt: "Complete: « She isn't answering her phone. She ___ be in a meeting. »",
        choices: ["must have", "should have", "can't to", "might"],
        answer: 3,
        explanation:
          "On émet une **hypothèse sur le présent** : modal épistémique + base verbale. **might be** (« elle est peut-être en réunion ») convient. « must have be » et « should have be » sont agrammaticaux, et un modal n’est jamais suivi de to.",
      },
      {
        id: "1re-anglais-02-ex-5",
        prompt: "Complete: « I wish I ___ more free time. I'm always so busy! »",
        choices: ["have", "will have", "had", "had had"],
        answer: 2,
        explanation:
          "Le regret porte sur le **présent** (« I’m always so busy ») : wish + **prétérit** (had). « had had » exprimerait un regret sur le passé.",
      },
      {
        id: "1re-anglais-02-ex-6",
        prompt: "What does « You should have called me » mean?",
        choices: [
          "Tu devrais m'appeler.",
          "Tu as dû m'appeler.",
          "Tu pourras m'appeler.",
          "Tu aurais dû m'appeler.",
        ],
        answer: 3,
        explanation:
          "**should have + participe passé** exprime un **reproche ou un regret** sur une action passée qui n’a pas eu lieu : « tu aurais dû ». « Tu as dû m’appeler » (déduction) se dirait You must have called me.",
      },
    ],
    test: [
      {
        id: "1re-anglais-02-ct-1",
        prompt: "Complete: « If he had left earlier, he ___ the train. »",
        choices: ["wouldn't miss", "wouldn't have missed", "won't miss", "didn't miss"],
        answer: 1,
        explanation:
          "La subordonnée est au **past perfect** (had left) : c’est un **irréel du passé** (type 3). La principale prend donc **would have + participe passé** : wouldn’t have missed.",
      },
      {
        id: "1re-anglais-02-ct-2",
        prompt: "Choose the best rewrite of: « I didn't study, so I'm not a doctor today. »",
        choices: [
          "If I studied, I would be a doctor today.",
          "If I had studied, I would have been a doctor today.",
          "If I had studied, I would be a doctor today.",
          "If I study, I will be a doctor today.",
        ],
        answer: 2,
        explanation:
          "La condition porte sur le **passé** (I didn’t study → if I had studied) et la conséquence sur le **présent** (today → would be). C’est une **phrase mixte** : past perfect dans la subordonnée, would + base verbale dans la principale.",
      },
      {
        id: "1re-anglais-02-ct-3",
        prompt: "« The lights are off and nobody is answering. They ___ out. »",
        choices: ["must have gone", "should go", "can't have gone", "must go"],
        answer: 0,
        explanation:
          "Les indices présents (lumières éteintes, aucune réponse) permettent une **déduction quasi certaine sur le passé** : must + have + participe passé (« ils ont dû sortir »). can’t have gone dirait le contraire, et must go exprimerait une obligation.",
      },
      {
        id: "1re-anglais-02-ct-4",
        prompt: "Which sentence is correct?",
        choices: [
          "Unless you don't work, you will fail.",
          "If you will work hard, you will succeed.",
          "Unless you work harder, you will fail.",
          "If you would work, you will succeed.",
        ],
        answer: 2,
        explanation:
          "**unless** signifie déjà « if… not » : il ne faut donc pas ajouter de négation (« Unless you don’t » est une double négation fautive). On ne met pas non plus will/would dans la subordonnée. Seule « Unless you work harder, you will fail » est correcte.",
      },
      {
        id: "1re-anglais-02-ct-5",
        prompt: "Complete: « I wish my brother ___ borrowing my clothes without asking. »",
        choices: ["stops", "would stop", "had stopped", "will stop"],
        answer: 1,
        explanation:
          "On exprime l’**agacement** face au comportement de quelqu’un d’autre et le souhait qu’il change : **wish + would + base verbale**. had stopped exprimerait un regret sur le passé.",
      },
      {
        id: "1re-anglais-02-ct-6",
        prompt: "Which sentence is equivalent to « If I had known, I would have helped you » ?",
        choices: [
          "Had I known, I would have helped you.",
          "Did I know, I would help you.",
          "Have I known, I would have helped you.",
          "Would I know, I had helped you.",
        ],
        answer: 0,
        explanation:
          "Dans un registre soutenu, on peut supprimer if et faire l’**inversion sujet / auxiliaire** : **Had I known** = If I had known. Cette structure est appréciée dans l’expression écrite. Les autres inversions ne sont pas correctes.",
      },
      {
        id: "1re-anglais-02-ct-7",
        prompt: "Choose the correct form: « It's high time the government ___ action on housing. »",
        choices: ["takes", "will take", "has taken", "took"],
        answer: 3,
        explanation:
          "**It’s (high) time** + sujet est suivi d’un **prétérit** à valeur d’irréel : l’action n’a pas encore eu lieu mais elle devrait. On dit donc « It’s high time the government took action ».",
      },
      {
        id: "1re-anglais-02-ct-8",
        prompt: "« He can't have written this letter. » What does the speaker mean?",
        choices: [
          "He was not allowed to write this letter.",
          "It is impossible that he wrote this letter.",
          "He didn't know how to write a letter.",
          "He should not have written this letter.",
        ],
        answer: 1,
        explanation:
          "**can’t have + participe passé** est une **déduction négative sur le passé** : « il ne peut pas avoir écrit cette lettre ». Il ne s’agit ni d’une interdiction ni d’un reproche (qui serait shouldn’t have written).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Passif, causatif, verbes à particule
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-anglais-03",
    title: "Passif, causatif et verbes à particule",
    summary:
      "Le passif et le causatif permettent de déplacer l’attention sur l’action ou sur son résultat, tandis que les verbes à particule enrichissent le vocabulaire de façon idiomatique.",
    objectives: [
      "Je sais mettre une phrase au passif à tous les temps, y compris avec un modal.",
      "Je sais employer les passifs impersonnels (He is said to…, It is believed that…).",
      "Je sais utiliser le causatif have/get something done et make/let someone do.",
      "Je sais reconnaître et employer les principaux phrasal verbs et leur place du complément.",
    ],
    sections: [
      {
        title: "La voix passive",
        body: [
          "Le **passif** se forme avec **be** conjugué au temps voulu + **participe passé** du verbe. Le complément d’objet de la phrase active devient sujet, et l’agent, s’il est mentionné, est introduit par **by**. Active : Banksy painted this mural. Passive : This mural **was painted** by Banksy.",
          "C’est **be** qui porte le temps : is built (présent), was built (prétérit), is being built (présent continu), has been built (present perfect), had been built (past perfect), will be built (futur), must be built (modal), should have been built (modal passé). Ce mécanisme régulier permet de tout passiver.",
          "On utilise le passif quand **l’agent est inconnu, évident ou sans importance**, ou quand on veut mettre en avant le **résultat** : The suspect was arrested last night. C’est très fréquent dans la presse, les textes scientifiques et historiques : The Declaration of Independence was signed in 1776.",
          "L’anglais peut aussi passiver un verbe à **deux compléments** en prenant la **personne** comme sujet, ce que le français ne fait pas : They gave her a prize → **She was given** a prize (« On lui a remis un prix »). De même avec les verbes prépositionnels, la préposition reste après le verbe : Nobody listened to him → He **was** not **listened to**.",
        ],
        keyPoints: [
          "Passif = be (au temps voulu) + V-en ; agent introduit par by.",
          "« On » français se traduit très souvent par un passif.",
          "Sujet = personne : She was offered a job (« On lui a proposé un emploi »).",
          "La préposition reste après le verbe : The issue was dealt with.",
        ],
        formulas: [
          "Present continuous passif : is/are being + V-en",
          "Present perfect passif : has/have been + V-en",
          "Modal passif : modal + be + V-en → must be done",
          "Modal passé passif : modal + have been + V-en → should have been done",
        ],
        example: {
          title: "Passer de l’actif au passif",
          steps: [
            "Phrase active : « Engineers are building a new bridge over the Thames. »",
            "Repérer le temps : are building = présent continu.",
            "Le COD a new bridge devient sujet.",
            "be au présent continu : is being + participe passé built.",
            "Résultat : A new bridge is being built over the Thames (by engineers).",
            "L’agent « by engineers » est évident : on peut le supprimer.",
          ],
        },
        figure: {
          type: "table",
          title: "La voix passive à tous les temps",
          caption: "C’est be qui porte le temps ; le verbe est toujours au participe passé.",
          headers: ["Temps", "Actif", "Passif"],
          rows: [
            ["Présent simple", "They build houses.", "Houses are built."],
            ["Présent continu", "They are building a bridge.", "A bridge is being built."],
            ["Prétérit", "Banksy painted this mural.", "This mural was painted by Banksy."],
            ["Present perfect", "They have signed the deal.", "The deal has been signed."],
            ["Modal", "You must do it.", "It must be done."],
            ["Modal passé", "They should have done it.", "It should have been done."],
          ],
        },
        practice: [
          {
            id: "1re-anglais-03-s1-p1",
            prompt: "Put into the passive: « They are building a new school. »",
            choices: [
              "A new school is built.",
              "A new school is being built.",
              "A new school has been building.",
              "A new school was being build.",
            ],
            answer: 1,
            explanation:
              "Are building est au **présent continu** : au passif, be devient **is being**, suivi du participe passé built. Is built correspondrait au présent simple et ne garderait pas l’idée d’action en cours.",
          },
          {
            id: "1re-anglais-03-s1-p2",
            prompt: "Translate: « On lui a proposé un emploi. » (lui = elle)",
            choices: ["She offered a job.", "One offered her a job.", "She was offered a job."],
            answer: 2,
            explanation:
              "Le « on » français se traduit très souvent par un **passif**. Avec un verbe à deux compléments, l’anglais prend la **personne comme sujet** : She was offered a job.",
          },
          {
            id: "1re-anglais-03-s1-p3",
            prompt: "« Nobody listened to him. » → « He ___ »",
            choices: ["was not listened to.", "was not listened.", "did not be listened to.", "was not listen to."],
            answer: 0,
            explanation:
              "Avec un **verbe prépositionnel** (listen to), la préposition **reste après le verbe** au passif : He was not listened to. Le participe passé listened est obligatoire après be.",
          },
        ],
      },
      {
        title: "Passif impersonnel et causatif",
        body: [
          "Pour rapporter une opinion ou une rumeur sans en donner la source, l’anglais emploie le **passif des verbes d’opinion** (say, believe, think, report, know, expect). Deux constructions sont possibles : **It is said that** the president is ill, ou **The president is said to be** ill (« On dit que le président est malade / Le président serait malade »). Pour une action antérieure, on utilise l’infinitif passé : He **is believed to have left** the country (« Il aurait quitté le pays »).",
          "Le **causatif** exprime le fait de faire faire quelque chose par quelqu’un d’autre. **Have / get + objet + participe passé** : I **had my hair cut** (je me suis fait couper les cheveux), She **got her car repaired**. Get est un peu plus familier et peut suggérer un effort. Cette structure exprime aussi une action subie : He **had his phone stolen** (« Il s’est fait voler son téléphone »).",
          "Quand on veut mentionner la personne qui agit, on emploie **make / have + personne + base verbale** (sans to) : The teacher **made us rewrite** the essay (contrainte). I **had** the mechanic **check** the brakes (demande, service). **Get + personne + to + V** : I got my friend to help me (persuader).",
          "Enfin, **let + personne + base verbale** exprime la **permission** : My parents **let me go** to the concert. Au passif, make reprend to (We were made to wait) mais let n’a pas de passif : on dit We were allowed to leave.",
        ],
        keyPoints: [
          "It is said that… / He is said to… = « on dit que… », conditionnel journalistique.",
          "have/get sth done = faire faire / se faire (+ V).",
          "make sb do = obliger ; let sb do = laisser, permettre.",
          "get sb to do = persuader quelqu’un de faire.",
        ],
        formulas: [
          "S + be + said/believed + to + V (ou to have + V-en)",
          "have/get + objet + V-en → I had my bike repaired.",
          "make/have/let + personne + base verbale → She made him apologise.",
          "get + personne + to + V → I got him to sign.",
        ],
        example: {
          title: "Traduire « se faire + infinitif »",
          steps: [
            "Phrase : « Elle s’est fait opérer la semaine dernière. »",
            "Quelqu’un d’autre réalise l’action (le chirurgien) → causatif have + objet + participe passé.",
            "Mais « opérer » n’a pas d’objet chose en anglais : on préfère le passif simple She had an operation ou She was operated on.",
            "Autre phrase : « Il s’est fait voler son portefeuille » → He had his wallet stolen.",
            "Retenir : on vérifie toujours qu’il y a un objet entre have/get et le participe passé.",
          ],
        },
        figure: {
          type: "table",
          title: "Le causatif et les verbes de contrainte ou de permission",
          headers: ["Structure", "Sens", "Exemple"],
          rows: [
            ["have / get + objet + V-en", "faire faire, se faire + V", "I had my hair cut."],
            ["make + personne + V", "obliger", "The teacher made us rewrite the essay."],
            ["have + personne + V", "demander (service)", "I had the mechanic check the brakes."],
            ["get + personne + to + V", "persuader", "I got my friend to help me."],
            ["let + personne + V", "laisser, permettre", "My parents let me go to the concert."],
          ],
        },
        practice: [
          {
            id: "1re-anglais-03-s2-p1",
            prompt: "Translate: « On dit que le président est malade. »",
            choices: [
              "The president is said being ill.",
              "It says the president is ill.",
              "The president says to be ill.",
              "The president is said to be ill.",
            ],
            answer: 3,
            explanation:
              "Le **passif des verbes d’opinion** se construit avec be said + **to + base verbale** : The president is said to be ill. On pourrait aussi dire It is said that the president is ill, mais jamais It says.",
          },
          {
            id: "1re-anglais-03-s2-p2",
            prompt: "Translate: « Il s’est fait voler son portefeuille. »",
            choices: ["He had his wallet stolen.", "He made his wallet steal.", "He got stolen his wallet."],
            answer: 0,
            explanation:
              "Le **causatif** have + **objet** + participe passé exprime aussi une action **subie** : He had his wallet stolen. L’objet (his wallet) doit se placer entre have et le participe passé.",
          },
          {
            id: "1re-anglais-03-s2-p3",
            prompt: "Put into the passive: « They made us wait. »",
            choices: ["We were made wait.", "We were made to wait.", "We were let wait."],
            answer: 1,
            explanation:
              "À l’actif, make est suivi de la base verbale sans to, mais **au passif make reprend to** : We were made to wait. Let n’a pas de passif : on utiliserait be allowed to.",
          },
        ],
      },
      {
        title: "Les verbes à particule (phrasal verbs)",
        body: [
          "Un **phrasal verb** est formé d’un verbe et d’une **particule adverbiale** (up, down, out, off, away, back, on…). Le sens est souvent **idiomatique**, impossible à deviner à partir des deux mots : give up = abandonner, turn down = refuser, put off = repousser, look after = s’occuper de.",
          "La particule peut garder un sens **spatial** (go out = sortir, come back = revenir) ou prendre une valeur **aspectuelle** : up = achèvement (eat up, use up = finir complètement), on = continuation (carry on = continuer), off = départ ou rupture (switch off, set off = partir).",
          "Pour les verbes **séparables** (transitifs avec particule adverbiale), le complément nom peut se placer avant ou après la particule : turn off the light / turn the light off. Mais si le complément est un **pronom**, il se place **obligatoirement entre le verbe et la particule** : turn **it** off (jamais *turn off it).",
          "Les verbes **prépositionnels** (look after, look for, deal with, count on) ne sont pas séparables : look after **her**. En expression écrite, utiliser quelques phrasal verbs bien maîtrisés (bring about = provoquer, stand up for = défendre, cope with = faire face à) rend l’anglais plus authentique.",
        ],
        keyPoints: [
          "give up = abandonner ; turn down = refuser ; put off = remettre à plus tard.",
          "bring up = élever / aborder un sujet ; look forward to + V-ing = avoir hâte de.",
          "stand up for = défendre ; carry out = mener, réaliser ; find out = découvrir.",
          "Pronom complément entre verbe et particule : pick it up, turn it down.",
        ],
        formulas: [
          "Verbe + particule + nom OU verbe + nom + particule → put on your coat / put your coat on",
          "Verbe + pronom + particule → put it on",
          "look forward to + V-ing → I look forward to hearing from you.",
        ],
        example: {
          title: "Placer correctement le complément",
          steps: [
            "Phrase : « Elle a refusé l’offre. » → turn down.",
            "Avec un nom : She turned down the offer / She turned the offer down (les deux sont corrects).",
            "Avec un pronom : She turned it down (obligatoire).",
            "Erreur à éviter : *She turned down it.",
          ],
        },
        figure: {
          type: "table",
          title: "Phrasal verbs essentiels",
          headers: ["Phrasal verb", "Sens", "Exemple"],
          rows: [
            ["give up", "abandonner", "She gave up smoking."],
            ["turn down", "refuser", "She turned the offer down."],
            ["put off", "repousser", "They put off the meeting."],
            ["look after", "s’occuper de", "He looks after his little sister."],
            ["carry out", "mener, réaliser", "Scientists carried out a study."],
            ["bring about", "provoquer", "The war brought about huge changes."],
          ],
        },
        practice: [
          {
            id: "1re-anglais-03-s3-p1",
            prompt: "Choose the correct sentence:",
            choices: ["She turned down it.", "She it turned down.", "She turned it down."],
            answer: 2,
            explanation:
              "Avec un verbe à particule séparable, un **pronom complément** se place **obligatoirement entre le verbe et la particule** : turned it down. *Turned down it est une erreur classique.",
          },
          {
            id: "1re-anglais-03-s3-p2",
            prompt: "Complete: « I look forward to ___ from you. »",
            choices: ["hear", "hearing", "heard", "to hear"],
            answer: 1,
            explanation:
              "Dans look forward to, **to est une préposition** : elle est suivie d’un nom ou d’un **V-ing**. On écrit donc I look forward to hearing from you.",
          },
          {
            id: "1re-anglais-03-s3-p3",
            prompt: "What does « carry on » mean?",
            choices: ["continuer", "abandonner", "porter", "refuser"],
            answer: 0,
            explanation:
              "La particule **on** a ici une valeur aspectuelle de **continuation** : carry on = continuer. Abandonner se dit give up et refuser se dit turn down.",
          },
        ],
      },
    ],
    homework: [
      {
        id: "1re-anglais-03-hw-1",
        prompt: "Put into the passive: « Someone should have warned them. »",
        choices: ["They should be warned.", "They should have been warned.", "They should have warned.", "They had been warned."],
        answer: 1,
        explanation:
          "Le **modal passé passif** se forme avec modal + **have been** + participe passé : They should have been warned. They should have warned garde un sens actif (ils auraient dû prévenir).",
      },
      {
        id: "1re-anglais-03-hw-2",
        prompt: "« He is believed ___ the country last week. » (« Il aurait quitté le pays »)",
        choices: ["to leave", "leaving", "to have left", "having left"],
        answer: 2,
        explanation:
          "L’action est **antérieure** au moment où l’on parle : on emploie l’**infinitif passé** to have + participe passé. He is believed to have left = « on pense qu’il a quitté / il aurait quitté ».",
      },
      {
        id: "1re-anglais-03-hw-3",
        prompt: "Translate: « Mes parents m’ont laissé sortir. »",
        choices: [
          "My parents let me to go out.",
          "My parents made me going out.",
          "My parents allowed me go out.",
          "My parents let me go out.",
        ],
        answer: 3,
        explanation:
          "**Let + personne + base verbale sans to** exprime la permission : My parents let me go out. Avec allow, il faudrait dire allowed me to go out.",
      },
      {
        id: "1re-anglais-03-hw-4",
        prompt: "Complete: « I had the mechanic ___ the brakes. »",
        choices: ["check", "checked", "to check"],
        answer: 0,
        explanation:
          "Quand on mentionne la **personne** qui agit, on emploie have + personne + **base verbale** : I had the mechanic check the brakes. Le participe passé s’emploie seulement avec un objet chose (I had the brakes checked).",
      },
    ],
    exercise: [
      {
        id: "1re-anglais-03-ex-1",
        prompt: "Put into the passive: « Someone has stolen my bike. »",
        choices: [
          "My bike was stolen by someone.",
          "My bike has been stolen.",
          "My bike has stolen.",
          "My bike is being stolen.",
        ],
        answer: 1,
        explanation:
          "Le temps actif est le **present perfect** (has stolen) : au passif, be devient **has been** + participe passé. L’agent someone est vague, on le supprime. « My bike has stolen » est actif et absurde (le vélo a volé quelque chose).",
      },
      {
        id: "1re-anglais-03-ex-2",
        prompt: "Translate: « On m'a offert un stage à Londres. »",
        choices: [
          "One offered me an internship in London.",
          "I offered an internship in London.",
          "I was offered an internship in London.",
          "It was offered me an internship in London.",
        ],
        answer: 2,
        explanation:
          "Le « on » français se traduit naturellement par un **passif**. Avec un verbe à deux compléments (offer sb sth), l’anglais prend la **personne** comme sujet : I was offered…",
      },
      {
        id: "1re-anglais-03-ex-3",
        prompt: "Complete: « I need to ___ my eyes tested before I start driving lessons. »",
        choices: ["make", "let", "do", "have"],
        answer: 3,
        explanation:
          "Faire faire quelque chose par un professionnel : **have + objet + participe passé** (have my eyes tested). make et let sont suivis d’une personne + base verbale, et do ne forme pas de causatif.",
      },
      {
        id: "1re-anglais-03-ex-4",
        prompt: "What does « give up » mean in « She gave up smoking last year » ?",
        choices: ["arrêter, abandonner", "commencer", "réduire", "recommander"],
        answer: 0,
        explanation:
          "**give up** (+ V-ing) signifie **abandonner, arrêter** une activité ou une habitude. « She gave up smoking » = « Elle a arrêté de fumer ».",
      },
      {
        id: "1re-anglais-03-ex-5",
        prompt: "Which sentence is correct?",
        choices: [
          "Can you switch off it?",
          "Can you switch it off?",
          "Can you it switch off?",
          "Can you off switch it?",
        ],
        answer: 1,
        explanation:
          "Avec un phrasal verb séparable, le **pronom complément** se place **entre le verbe et la particule** : switch it off. « switch off it » est une erreur classique.",
      },
      {
        id: "1re-anglais-03-ex-6",
        prompt: "Complete: « My parents never ___ me stay out after midnight. »",
        choices: ["let", "allow", "made to", "have"],
        answer: 0,
        explanation:
          "**let + personne + base verbale** exprime la permission : « Mes parents ne me laissent jamais rentrer après minuit ». allow exige to (allow me to stay), et have me stay signifierait « me faire rester ».",
      },
    ],
    test: [
      {
        id: "1re-anglais-03-ct-1",
        prompt: "Put into the passive: « They should have warned the residents. »",
        choices: [
          "The residents should be warned.",
          "The residents should have warned.",
          "The residents should had been warned.",
          "The residents should have been warned.",
        ],
        answer: 3,
        explanation:
          "Modal passé au passif : **modal + have been + participe passé**. « should have been warned » = « on aurait dû prévenir les habitants ». La forme « should have warned » resterait active.",
      },
      {
        id: "1re-anglais-03-ct-2",
        prompt: "Translate: « Le suspect aurait quitté le pays. » (journalistic style)",
        choices: [
          "The suspect would have left the country.",
          "The suspect is believed to have left the country.",
          "The suspect is believed to leave the country.",
          "It is believed the suspect to have left the country.",
        ],
        answer: 1,
        explanation:
          "Le conditionnel journalistique français (« aurait quitté ») se rend par un **passif d’opinion** + **infinitif passé** : is believed / said / reported **to have left**. « would have left » serait un vrai conditionnel (irréel), contresens.",
      },
      {
        id: "1re-anglais-03-ct-3",
        prompt: "Put into the passive: « The council is renovating the old library. »",
        choices: [
          "The old library is renovated by the council.",
          "The old library has been renovating by the council.",
          "The old library is being renovated by the council.",
          "The old library is been renovated by the council.",
        ],
        answer: 2,
        explanation:
          "Le temps actif est le **présent continu** (is renovating) : au passif on garde l’aspect continu de be → **is being** + participe passé. « is been » n’existe pas.",
      },
      {
        id: "1re-anglais-03-ct-4",
        prompt: "« He had his passport stolen in Rome. » What happened?",
        choices: [
          "Someone stole his passport.",
          "He stole a passport.",
          "He asked someone to steal his passport.",
          "He lost his passport but found it.",
        ],
        answer: 0,
        explanation:
          "Ici **have + objet + participe passé** n’est pas un service demandé : il exprime une **action subie** (« Il s’est fait voler son passeport »). Le contexte permet de distinguer ce sens du causatif volontaire.",
      },
      {
        id: "1re-anglais-03-ct-5",
        prompt: "Put into the passive: « The coach made the players run ten laps. »",
        choices: [
          "The players were made run ten laps.",
          "The players were let to run ten laps.",
          "The players made to run ten laps.",
          "The players were made to run ten laps.",
        ],
        answer: 3,
        explanation:
          "À l’actif, make est suivi de la base verbale sans to ; mais **au passif, to réapparaît** : were made **to** run. let ne se met pas au passif (on utilise be allowed to).",
      },
      {
        id: "1re-anglais-03-ct-6",
        prompt: "Choose the correct meaning of « carry out » in « The researchers carried out a survey of 2,000 teenagers. »",
        choices: ["annuler", "mener, réaliser", "publier", "contester"],
        answer: 1,
        explanation:
          "**carry out** = **mener, effectuer** (une enquête, une expérience, un plan). C’est un phrasal verb très fréquent dans les articles de presse et les textes scientifiques.",
      },
      {
        id: "1re-anglais-03-ct-7",
        prompt: "Which sentence is correct?",
        choices: [
          "Her opinion was never listened.",
          "Her opinion was never listened to.",
          "Her opinion was never listen to.",
          "To her opinion was never listened.",
        ],
        answer: 1,
        explanation:
          "listen **to** est un verbe prépositionnel : au passif, la **préposition reste après le participe** (was never listened to). C’est une construction impossible en français mais naturelle en anglais.",
      },
      {
        id: "1re-anglais-03-ct-8",
        prompt: "Complete: « I'm really looking forward ___ you next summer. »",
        choices: ["to see", "seeing", "to seeing", "for seeing"],
        answer: 2,
        explanation:
          "Dans **look forward to**, to est une **préposition**, pas la marque de l’infinitif : il est donc suivi d’un **V-ing** (to seeing). C’est aussi le cas de be used to, object to, when it comes to.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Relatives, subordonnées, mots de liaison
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-anglais-04",
    title: "Relatives, subordonnées et mots de liaison",
    summary:
      "Maîtriser les pronoms relatifs, les subordonnées et les connecteurs logiques permet d’écrire des phrases complexes et un raisonnement clair en anglais.",
    objectives: [
      "Je sais choisir entre who, which, that, whose, where, when et le pronom zéro.",
      "Je sais distinguer relative déterminative et relative appositive (avec virgules).",
      "Je sais utiliser what et which pour reprendre une idée.",
      "Je sais employer les connecteurs de concession, d’opposition, de cause et de conséquence avec la bonne construction.",
    ],
    sections: [
      {
        title: "Les pronoms relatifs",
        body: [
          "Le pronom relatif dépend de la nature de l’**antécédent** : **who** pour une personne (The woman **who** founded the charity), **which** pour une chose ou un animal (The law **which** was passed in 1964), **that** pour l’un ou l’autre dans une relative déterminative. **Whose** exprime la possession (« dont le / la ») pour une personne ou une chose : The writer **whose** novel won the Booker Prize.",
          "**Where** reprend un lieu (the town **where** I grew up), **when** un moment (the year **when** the Berlin Wall fell). **Whom** est la forme complément de who, réservée au registre soutenu, surtout après préposition : the person **to whom** I spoke (courant : the person I spoke to).",
          "La **relative déterminative** (defining) est indispensable pour identifier l’antécédent : pas de virgules, that possible. The students **who passed** will receive a certificate (seuls ceux qui ont réussi). La **relative appositive** (non-defining) apporte une information supplémentaire entre **virgules** ; that y est **interdit** : My sister, **who lives in Leeds**, is a nurse.",
          "Dans une relative déterminative, lorsque le relatif est **complément** (et non sujet), on peut le supprimer : c’est le **relatif zéro** (Ø). The book (that) I bought → The book **Ø** I bought. C’est impossible quand le relatif est sujet : The man **who** called you (on ne peut pas enlever who).",
        ],
        keyPoints: [
          "who = personne ; which = chose ; that = les deux (déterminative uniquement).",
          "whose + nom = « dont le / la / les » (whose car = dont la voiture).",
          "Relative entre virgules → jamais that.",
          "Relatif complément d’une déterminative → peut être omis (Ø).",
        ],
        formulas: [
          "Antécédent + whose + nom + verbe → a girl whose father is a judge",
          "Préposition en fin de relative (courant) : the town I come from",
          "Préposition + which/whom (soutenu) : the town from which I come",
        ],
        example: {
          title: "Traduire « dont »",
          steps: [
            "Phrase : « C’est l’artiste dont les œuvres ont été exposées à la Tate. »",
            "« dont » + nom (les œuvres de l’artiste) = possession → whose.",
            "Attention : pas d’article après whose (whose works, pas *whose the works).",
            "Résultat : This is the artist whose works were exhibited at the Tate.",
            "Autre cas : « le livre dont je parle » (parler de) → the book I’m talking about.",
          ],
        },
        figure: {
          type: "table",
          title: "Les pronoms relatifs",
          headers: ["Relatif", "Emploi", "Exemple"],
          rows: [
            ["who", "antécédent personne", "the woman who founded the charity"],
            ["which", "antécédent chose ou animal", "the law which was passed in 1964"],
            ["that", "personne ou chose, relative déterminative seulement", "the book that I bought"],
            ["whose", "possession (« dont le / la »)", "the writer whose novel won the prize"],
            ["where / when", "lieu / moment", "the town where I grew up"],
            ["Ø", "relatif complément d’une déterminative", "the book Ø I bought"],
          ],
        },
        practice: [
          {
            id: "1re-anglais-04-s1-p1",
            prompt: "Complete: « My sister, ___ lives in Leeds, is a nurse. »",
            choices: ["that", "who", "which", "whose"],
            answer: 1,
            explanation:
              "La relative est **appositive** (entre virgules) et l’antécédent est une **personne** : on emploie **who**. That est **interdit** dans une relative entre virgules.",
          },
          {
            id: "1re-anglais-04-s1-p2",
            prompt: "Translate: « l’artiste dont les œuvres ont été exposées » → the artist ___ were exhibited",
            choices: ["whose the works", "that works", "whose works"],
            answer: 2,
            explanation:
              "« Dont » + nom exprime ici la **possession** : on emploie **whose**. Attention, **pas d’article** après whose : whose works et non *whose the works.",
          },
          {
            id: "1re-anglais-04-s1-p3",
            prompt: "In which sentence can the relative pronoun be omitted?",
            choices: [
              "The book that I bought is great.",
              "The man who called you is here.",
              "My sister, who lives in Leeds, is a nurse.",
            ],
            answer: 0,
            explanation:
              "On peut supprimer le relatif (**relatif zéro**) seulement quand il est **complément** dans une relative déterminative : that I bought (I est le sujet). Who called you est sujet, et une relative entre virgules ne permet jamais l’omission.",
          },
        ],
      },
      {
        title: "What, which et les subordonnées",
        body: [
          "**What** est un relatif **sans antécédent** qui signifie « ce que / ce qui » : **What** surprised me was his silence (« Ce qui m’a surpris, c’est son silence »). I don’t understand **what** you mean. On ne dit jamais *the thing what.",
          "**Which** peut reprendre **toute une proposition** précédente, après une virgule : He refused to apologise, **which** made everyone angry (« ce qui a mis tout le monde en colère »). Ici, which = « ce qui », et il renvoie à l’idée entière.",
          "Les **subordonnées circonstancielles** se construisent avec une conjonction suivie d’un sujet et d’un verbe conjugué : temps (when, while, as soon as, until, once), cause (because, as, since), but (so that, in order that), condition (if, unless, provided that). Attention : après une conjonction de temps, le futur s’exprime au **présent** : I’ll call you **when** I **arrive** (pas *when I will arrive).",
          "Le but peut aussi s’exprimer par un **infinitif** : to / in order to / so as to + V (She studied hard **to** get a scholarship). Avec un sujet différent ou un modal, on emploie **so that** : I’ll speak slowly **so that** everyone **can** understand.",
        ],
        keyPoints: [
          "what = ce que / ce qui (sans antécédent).",
          ", which = ce qui / ce que (reprend une proposition entière).",
          "when / as soon as / until + présent pour un futur.",
          "to / in order to + V ; so that + S + can/could/will/would.",
        ],
        formulas: [
          "What + S + V + is/was… → What matters is honesty.",
          "Proposition, which + V → She won, which surprised us.",
          "as soon as / when + présent → futur dans la principale",
        ],
        example: {
          title: "Choisir entre what et which",
          steps: [
            "Phrase 1 : « Ce qui me choque, c’est l’indifférence. » → pas d’antécédent → What shocks me is indifference.",
            "Phrase 2 : « Il a menti, ce qui m’a déçu. » → reprend la proposition « il a menti » → He lied, which disappointed me.",
            "Règle : what ouvre la phrase ou suit un verbe ; which suit une virgule et commente ce qui précède.",
          ],
        },
        practice: [
          {
            id: "1re-anglais-04-s2-p1",
            prompt: "Complete: « ___ surprised me was his silence. »",
            choices: ["Which", "That", "What", "The thing what"],
            answer: 2,
            explanation:
              "Il n’y a **pas d’antécédent** : « ce qui » se traduit par **what**. Which a besoin d’une proposition à reprendre, et *the thing what est incorrect.",
          },
          {
            id: "1re-anglais-04-s2-p2",
            prompt: "Complete: « He refused to apologise, ___ made everyone angry. »",
            choices: ["what", "which", "that"],
            answer: 1,
            explanation:
              "Après une virgule, **which** reprend **toute la proposition** précédente (le fait qu’il ait refusé de s’excuser) et signifie « ce qui ». That est impossible après une virgule et what n’a pas d’antécédent.",
          },
          {
            id: "1re-anglais-04-s2-p3",
            prompt: "Complete: « I'll call you when I ___. »",
            choices: ["will arrive", "would arrive", "arrived", "arrive"],
            answer: 3,
            explanation:
              "Après une **conjonction de temps** (when, as soon as, until), le futur s’exprime au **présent** : when I arrive. Will n’apparaît que dans la principale (I’ll call you).",
          },
        ],
      },
      {
        title: "Les mots de liaison : structurer l’argumentation",
        body: [
          "Les **connecteurs logiques** sont indispensables à l’essai argumenté. Il faut connaître leur sens mais aussi leur **construction** : certains sont des **conjonctions** (suivies d’une proposition sujet + verbe), d’autres des **prépositions** (suivies d’un nom ou d’un V-ing), d’autres des **adverbes** (qui relient deux phrases, souvent suivis d’une virgule).",
          "**Concession** : although / even though + proposition (**Although** it was raining, they marched) ; despite / in spite of + nom ou V-ing (**Despite** the rain, they marched / **In spite of** being tired, she continued) ; however, nevertheless, yet (adverbes : It was raining. **However**, they marched). **Opposition** : whereas / while (comparaison de deux faits) : Some see social media as a threat, **whereas** others see it as a tool.",
          "**Cause** : because + proposition, because of / due to + nom (The match was cancelled **because of** the storm). **Conséquence** : so, therefore, thus, as a result, consequently. **Addition** : moreover, furthermore, besides, in addition, what is more. **Exemple** : for instance, for example, such as. **Conclusion** : to sum up, all in all, in conclusion.",
          "Pour nuancer, on peut aussi utiliser **on the one hand… on the other hand** (d’une part… d’autre part) ou **not only… but also** (non seulement… mais aussi). Avec not only en tête de phrase, il faut faire une **inversion** : **Not only did** the law ban segregation, **but** it **also** protected voting rights.",
        ],
        keyPoints: [
          "although / even though = bien que (+ proposition) ; despite / in spite of = malgré (+ nom / V-ing).",
          "whereas / while = alors que (opposition) ; however = cependant (adverbe).",
          "because + proposition ≠ because of + nom.",
          "therefore / as a result = par conséquent ; moreover / furthermore = de plus.",
        ],
        formulas: [
          "Although + S + V, S + V",
          "Despite / In spite of + nom ou V-ing, S + V",
          "Despite the fact that + S + V",
          "Not only + auxiliaire + S + V…, but… also…",
        ],
        example: {
          title: "Relier deux idées de trois façons",
          steps: [
            "Idées : « He was poor. » / « He gave money to charity. »",
            "Conjonction : Although he was poor, he gave money to charity.",
            "Préposition + nom : Despite his poverty, he gave money to charity.",
            "Préposition + V-ing : In spite of being poor, he gave money to charity.",
            "Adverbe : He was poor. Nevertheless, he gave money to charity.",
          ],
        },
        figure: {
          type: "table",
          title: "Les connecteurs selon leur construction",
          caption: "Conjonction + proposition ; préposition + nom ou V-ing ; adverbe entre deux phrases.",
          headers: ["Fonction", "Conjonction (+ S + V)", "Préposition (+ nom / V-ing)", "Adverbe"],
          rows: [
            ["Concession", "although, even though", "despite, in spite of", "however, nevertheless, yet"],
            ["Cause", "because, as, since", "because of, due to", "—"],
            ["Conséquence", "so", "—", "therefore, thus, as a result"],
            ["Opposition", "whereas, while", "unlike", "on the other hand"],
            ["Addition", "—", "in addition to, besides", "moreover, furthermore"],
          ],
        },
        practice: [
          {
            id: "1re-anglais-04-s3-p1",
            prompt: "Complete: « ___ the rain, they marched. »",
            choices: ["Although", "Despite", "However", "Because"],
            answer: 1,
            explanation:
              "The rain est un **nom** : il faut une **préposition** de concession, **despite** (ou in spite of). Although doit être suivi d’une proposition (although it was raining).",
          },
          {
            id: "1re-anglais-04-s3-p2",
            prompt: "Complete: « The match was cancelled ___ the storm. »",
            choices: ["because of", "because", "although"],
            answer: 0,
            explanation:
              "Devant un **nom** (the storm), on emploie la préposition **because of**. Because seul est une conjonction qui doit être suivie d’un sujet et d’un verbe.",
          },
          {
            id: "1re-anglais-04-s3-p3",
            prompt: "Complete: « Not only ___ segregation, but it also protected voting rights. »",
            choices: ["the law banned", "the law did ban", "did the law ban", "banned the law"],
            answer: 2,
            explanation:
              "Quand **not only** est placé en tête de phrase, il entraîne une **inversion** auxiliaire + sujet : Not only did the law ban… L’ordre habituel sujet + verbe n’est pas possible ici.",
          },
        ],
      },
    ],
    homework: [
      {
        id: "1re-anglais-04-hw-1",
        prompt: "Complete: « In spite of ___ tired, she continued. »",
        choices: ["she was", "being", "be", "to be"],
        answer: 1,
        explanation:
          "**In spite of** est une préposition : elle est suivie d’un nom ou d’un **V-ing** (being). Pour garder une proposition, il faudrait écrire although she was tired.",
      },
      {
        id: "1re-anglais-04-hw-2",
        prompt: "Choose the formal version of « the person I spoke to »:",
        choices: ["the person to whom I spoke", "the person to who I spoke", "the person whom I spoke", "the person to that I spoke"],
        answer: 0,
        explanation:
          "En registre soutenu, la préposition se place **devant le relatif**, qui prend la forme **whom** : the person to whom I spoke. That ne peut jamais suivre une préposition.",
      },
      {
        id: "1re-anglais-04-hw-3",
        prompt: "Complete: « I'll speak slowly ___ everyone can understand. »",
        choices: ["in order to", "so as to", "so that"],
        answer: 2,
        explanation:
          "Le but a ici un **sujet différent** (everyone) et un **modal** (can) : on emploie **so that**. In order to et so as to sont suivis d’une base verbale sans nouveau sujet.",
      },
      {
        id: "1re-anglais-04-hw-4",
        prompt: "Which connector expresses a **consequence**?",
        choices: ["whereas", "moreover", "although", "therefore"],
        answer: 3,
        explanation:
          "**Therefore** signifie « par conséquent » et introduit une conséquence. Whereas marque l’opposition, moreover l’addition et although la concession.",
      },
    ],
    exercise: [
      {
        id: "1re-anglais-04-ex-1",
        prompt: "Complete: « Malala Yousafzai is an activist ___ fight for girls' education earned her the Nobel Peace Prize. »",
        choices: ["who", "whose", "which", "that"],
        answer: 1,
        explanation:
          "Il s’agit du combat **de** Malala (« dont le combat ») : relation de possession → **whose** + nom (whose fight). Malala Yousafzai a reçu le prix Nobel de la paix en 2014.",
      },
      {
        id: "1re-anglais-04-ex-2",
        prompt: "Complete: « London, ___ is the capital of the UK, has over eight million inhabitants. »",
        choices: ["that", "where", "which", "what"],
        answer: 2,
        explanation:
          "La relative est entre **virgules** (appositive) : that y est interdit. L’antécédent est une chose (une ville comme entité) et le relatif est sujet de is → **which**. where serait possible seulement pour « où » (London, where I live).",
      },
      {
        id: "1re-anglais-04-ex-3",
        prompt: "Complete: « ___ the bad weather, the ceremony took place outside. »",
        choices: ["Although", "Even though", "Despite", "However"],
        answer: 2,
        explanation:
          "« the bad weather » est un **groupe nominal**, pas une proposition : il faut une préposition → **Despite** (ou In spite of). Although / even though exigent un sujet + verbe (Although the weather was bad).",
      },
      {
        id: "1re-anglais-04-ex-4",
        prompt: "Complete: « ___ I find most difficult is speaking in public. »",
        choices: ["That", "Which", "The thing what", "What"],
        answer: 3,
        explanation:
          "Pas d’antécédent : « Ce que je trouve le plus difficile… » → **What**. « The thing what » est fautif (on dirait the thing that ou simplement what).",
      },
      {
        id: "1re-anglais-04-ex-5",
        prompt: "Complete: « I'll text you as soon as I ___ home. »",
        choices: ["get", "will get", "would get", "got"],
        answer: 0,
        explanation:
          "Après une conjonction de temps (**as soon as**, when, until…), on emploie le **présent** pour parler du futur. will reste dans la principale (I’ll text you).",
      },
      {
        id: "1re-anglais-04-ex-6",
        prompt: "Which connector expresses a contrast between two facts? « Tea is popular in Britain, ___ coffee is more popular in the USA. »",
        choices: ["whereas", "because", "therefore", "moreover"],
        answer: 0,
        explanation:
          "**whereas** (« alors que, tandis que ») met en **opposition** deux faits comparables. because exprime la cause, therefore la conséquence, moreover l’addition.",
      },
    ],
    test: [
      {
        id: "1re-anglais-04-ct-1",
        prompt: "Which sentence is grammatically correct?",
        choices: [
          "My best friend, that lives in Dublin, is coming to visit.",
          "My best friend, who lives in Dublin, is coming to visit.",
          "My best friend, which lives in Dublin, is coming to visit.",
          "My best friend, whose lives in Dublin, is coming to visit.",
        ],
        answer: 1,
        explanation:
          "Relative **appositive** (entre virgules) : that est interdit. L’antécédent est une **personne** et le relatif est sujet → **who**. which ne s’emploie pas pour une personne et whose exige un nom après lui.",
      },
      {
        id: "1re-anglais-04-ct-2",
        prompt: "In which sentence can the relative pronoun be omitted?",
        choices: [
          "The girl who won the race is my cousin.",
          "The film that I saw last night was brilliant.",
          "Paris, which I visited in May, was crowded.",
          "The man whose car was stolen called the police.",
        ],
        answer: 1,
        explanation:
          "On peut omettre le relatif seulement s’il est **complément** dans une relative **déterminative**. Dans « The film (that) I saw », that est complément de saw → omissible. Dans les autres phrases, il est sujet (who won), dans une appositive (which) ou marque de possession (whose).",
      },
      {
        id: "1re-anglais-04-ct-3",
        prompt: "Choose the correct sentence.",
        choices: [
          "In spite of she was tired, she finished the race.",
          "Despite of being tired, she finished the race.",
          "Although being tired, she finished the race.",
          "Despite being tired, she finished the race.",
        ],
        answer: 3,
        explanation:
          "**despite** est une préposition suivie d’un nom ou d’un **V-ing**, sans of (despite being tired). « In spite of she was » mélange préposition et proposition ; « despite of » n’existe pas ; although est suivi d’une proposition complète (although she was tired).",
      },
      {
        id: "1re-anglais-04-ct-4",
        prompt: "« The government raised taxes, which led to protests. » What does « which » refer to?",
        choices: [
          "The government.",
          "Taxes only.",
          "The fact that the government raised taxes.",
          "The protests.",
        ],
        answer: 2,
        explanation:
          "Après une virgule, **which** peut reprendre **toute la proposition précédente** : c’est le fait d’augmenter les impôts qui a provoqué les manifestations (« ce qui a provoqué… »).",
      },
      {
        id: "1re-anglais-04-ct-5",
        prompt: "Complete with the correct inversion: « Not only ___ the speech, but she also answered every question. »",
        choices: ["she gave", "did she give", "she did give", "gave she"],
        answer: 1,
        explanation:
          "Quand **not only** est placé en tête de phrase, il entraîne une **inversion avec auxiliaire**, comme dans une question : did she give. C’est une structure emphatique valorisée à l’écrit.",
      },
      {
        id: "1re-anglais-04-ct-6",
        prompt: "Choose the formal version of « the people I was talking to ».",
        choices: [
          "the people to whom I was talking",
          "the people to who I was talking",
          "the people to that I was talking",
          "the people whom I was talking",
        ],
        answer: 0,
        explanation:
          "En registre soutenu, la préposition se place **devant le relatif**, qui prend alors la forme **whom** (personne) ou which (chose). That et who ne s’emploient jamais directement après une préposition. Sans préposition, « whom I was talking » perd le sens de talk to.",
      },
      {
        id: "1re-anglais-04-ct-7",
        prompt: "Complete: « She took notes ___ she wouldn't forget anything. »",
        choices: ["in order to", "so as to", "so that", "for"],
        answer: 2,
        explanation:
          "La proposition de but contient un **sujet et un modal** (she wouldn’t forget) : il faut la conjonction **so that**. in order to et so as to sont suivis d’une base verbale, sans sujet.",
      },
      {
        id: "1re-anglais-04-ct-8",
        prompt: "Which connector best completes the argument? « Social networks help people stay in touch. ___, they can spread misinformation very quickly. »",
        choices: ["Therefore", "For instance", "Furthermore", "On the other hand"],
        answer: 3,
        explanation:
          "La seconde phrase présente un **argument opposé** au premier : **On the other hand** (« en revanche, d’un autre côté »). Therefore introduirait une conséquence, Furthermore un argument dans le même sens, For instance un exemple.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Identités et échanges / Espace privé et espace public
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-anglais-05",
    title: "Axes « Identités et échanges » et « Espace privé et espace public »",
    summary:
      "Ces deux axes interrogent la construction des identités à travers les migrations et les échanges, ainsi que la frontière, toujours mouvante, entre vie privée et vie publique dans le monde anglophone.",
    objectives: [
      "Je sais présenter quelques moments clés de l’histoire des migrations vers le Royaume-Uni et les États-Unis.",
      "Je sais utiliser le vocabulaire de l’identité, de l’intégration et du multiculturalisme.",
      "Je sais expliquer en anglais les enjeux de la vie privée (privacy) à l’ère numérique.",
      "Je sais mobiliser des exemples culturels précis pour illustrer un document.",
    ],
    sections: [
      {
        title: "Identités et échanges : migrations et sentiment d’appartenance",
        body: [
          "L’axe **« Identités et échanges »** invite à réfléchir à la façon dont les individus et les peuples se construisent au contact des autres : migrations, mobilité étudiante, langues, cultures hybrides. Les États-Unis se définissent comme une **nation of immigrants** : entre 1892 et 1954, environ **12 millions** de migrants sont passés par **Ellis Island**, à New York, au pied de la **Statue of Liberty** (inaugurée en 1886), symbole d’accueil.",
          "Au Royaume-Uni, l’arrivée du navire **HMT Empire Windrush** en **1948**, qui transportait des passagers venus des Caraïbes, symbolise la **Windrush generation**, invitée à reconstruire le pays après la guerre. En 2018, le **Windrush scandal** a révélé que certains de ces citoyens arrivés légalement avaient été menacés d’expulsion faute de papiers : un exemple fort pour parler d’identité contestée.",
          "Les débats opposent souvent deux modèles : le **melting pot** (fusion des cultures dans une identité commune) et la **salad bowl** ou mosaïque (coexistence des cultures, qui gardent leurs spécificités). On parle aussi d’**hyphenated identities** (Irish-American, British-Asian) pour désigner des identités doubles, sources de richesse mais parfois de tiraillements.",
          "Les échanges passent aussi par la **langue** : l’anglais est devenu une **lingua franca** mondiale, utilisée par environ 1,5 milliard de personnes, dont une majorité de non-natifs. Le programme **Erasmus+**, dont le Royaume-Uni est sorti après le Brexit (remplacé par le **Turing scheme** en 2021), illustre l’enjeu des mobilités étudiantes.",
        ],
        keyPoints: [
          "identity = identité ; sense of belonging = sentiment d’appartenance.",
          "immigrant / emigrant = immigré / émigré ; asylum seeker = demandeur d’asile ; refugee = réfugié.",
          "to settle (in) = s’installer ; to fit in = s’intégrer ; to be uprooted = être déraciné.",
          "melting pot = creuset ; multiculturalism = multiculturalisme ; heritage = héritage culturel.",
          "border = frontière ; citizenship = citoyenneté ; to be torn between = être tiraillé entre.",
        ],
        formulas: [
          "Exprimer l’appartenance : I feel both… and… / I identify as… / to be proud of one’s roots.",
          "Situer un fait historique : In 1948, the Empire Windrush brought… → prétérit + date.",
          "Nuancer : While some praise multiculturalism, others claim that…",
        ],
        example: {
          title: "Présenter un document sur l’immigration",
          steps: [
            "Document : une photo d’archives d’Ellis Island.",
            "Nature et source : This black-and-white photograph was taken at Ellis Island in the early 20th century.",
            "Description : In the foreground, we can see a family carrying suitcases; they look exhausted but hopeful.",
            "Contexte : Ellis Island was the main immigration station in the USA from 1892 to 1954.",
            "Lien avec l’axe : This document illustrates how American identity was built through successive waves of immigration.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Repères : migrations et échanges",
          events: [
            { date: "1886", label: "Inauguration de la Statue of Liberty à New York" },
            { date: "1892", label: "Ouverture d’Ellis Island, principal centre d’immigration des États-Unis" },
            { date: "1948", label: "Arrivée de l’HMT Empire Windrush : début de la Windrush generation" },
            { date: "1954", label: "Fermeture d’Ellis Island (environ 12 millions de migrants accueillis)" },
            { date: "2018", label: "Windrush scandal au Royaume-Uni" },
            { date: "2021", label: "Le Turing scheme remplace Erasmus+ au Royaume-Uni" },
          ],
        },
        practice: [
          {
            id: "1re-anglais-05-s1-p1",
            prompt: "Which ship brought passengers from the Caribbean to Britain in 1948?",
            choices: ["The Mayflower", "HMT Empire Windrush", "The Titanic", "HMS Victory"],
            answer: 1,
            explanation:
              "L’**HMT Empire Windrush** est arrivé en **1948** avec des passagers venus des Caraïbes, invités à aider à reconstruire le pays. Il a donné son nom à la **Windrush generation**.",
          },
          {
            id: "1re-anglais-05-s1-p2",
            prompt: "What does the « salad bowl » model mean?",
            choices: [
              "Cultures coexist and keep their specificities.",
              "Cultures merge into one single identity.",
              "Immigrants must give up their language.",
            ],
            answer: 0,
            explanation:
              "Dans le modèle du **salad bowl** (ou mosaïque), les cultures **coexistent** en gardant leurs spécificités, comme les ingrédients d’une salade. La fusion en une identité commune correspond au **melting pot**.",
          },
          {
            id: "1re-anglais-05-s1-p3",
            prompt: "What does « to fit in » mean?",
            choices: ["s’installer", "être déraciné", "s’intégrer", "émigrer"],
            answer: 2,
            explanation:
              "**To fit in** signifie **s’intégrer**, trouver sa place dans un groupe. S’installer se dit to settle et être déraciné se dit to be uprooted.",
          },
        ],
      },
      {
        title: "Espace privé et espace public : où s’arrête l’intime ?",
        body: [
          "L’axe **« Espace privé et espace public »** étudie la frontière entre ce qui relève de l’intime (la maison, la famille, les opinions personnelles) et ce qui relève du collectif (la rue, la politique, les réseaux sociaux). En anglais, on distingue **privacy** (le droit à la vie privée) et **private life**. Le proverbe **« An Englishman’s home is his castle »** résume l’attachement britannique au domicile comme espace protégé.",
          "Le numérique a bouleversé cette frontière. En **2013**, **Edward Snowden**, ancien sous-traitant de la **NSA**, a révélé l’existence de programmes de **mass surveillance**. En **2018**, le scandale **Cambridge Analytica** a montré que les données de dizaines de millions d’utilisateurs de Facebook avaient été exploitées à des fins politiques. Ces affaires posent la question : peut-on sacrifier la vie privée au nom de la sécurité ?",
          "Le Royaume-Uni est souvent cité comme l’un des pays les plus équipés en **CCTV cameras** (caméras de vidéosurveillance). Les défenseurs parlent de sécurité ; les opposants évoquent une **surveillance society** et citent **Big Brother**, personnage du roman **Nineteen Eighty-Four** de George Orwell (publié en **1949**), devenu le symbole de la surveillance totalitaire.",
          "L’espace public est aussi un lieu de **contestation** : manifestations, street art, prises de parole. Les célébrités et les responsables politiques subissent l’intrusion des **paparazzi** et des **tabloids** : la mort de la princesse **Diana** en **1997** à Paris, alors qu’elle était poursuivie par des photographes, a relancé le débat sur les limites de la presse.",
        ],
        keyPoints: [
          "privacy = vie privée ; to invade sb’s privacy = porter atteinte à la vie privée.",
          "surveillance = surveillance ; CCTV camera = caméra de vidéosurveillance.",
          "data = données ; data breach = fuite de données ; to share = partager.",
          "whistleblower = lanceur d’alerte ; tabloid = presse à scandale.",
          "public sphere = sphère publique ; to go public = rendre public.",
        ],
        formulas: [
          "Exprimer une tension : There is a fine line between… and…",
          "Opposer deux points de vue : Supporters argue that… whereas critics fear that…",
          "Passif impersonnel : It is estimated that millions of accounts were affected.",
        ],
        example: {
          title: "Argumenter sur la vidéosurveillance",
          steps: [
            "Question : « Should cities install more CCTV cameras? »",
            "Argument pour : CCTV cameras can deter crime and help the police identify suspects.",
            "Argument contre : However, they can be seen as an invasion of privacy and may lead to a surveillance society.",
            "Référence culturelle : This brings to mind Big Brother in George Orwell’s Nineteen Eighty-Four.",
            "Conclusion nuancée : All in all, security matters, but it should not come at the expense of our freedom.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Repères : vie privée et surveillance",
          events: [
            { date: "1949", label: "Publication de Nineteen Eighty-Four (George Orwell) : naissance de Big Brother" },
            { date: "1997", label: "Mort de la princesse Diana à Paris, poursuivie par des paparazzi" },
            { date: "2013", label: "Révélations d’Edward Snowden sur la surveillance de masse de la NSA" },
            { date: "2018", label: "Scandale Cambridge Analytica (données Facebook)" },
          ],
        },
        practice: [
          {
            id: "1re-anglais-05-s2-p1",
            prompt: "Who revealed the NSA's mass surveillance programmes in 2013?",
            choices: ["Julian Assange", "George Orwell", "Mark Zuckerberg", "Edward Snowden"],
            answer: 3,
            explanation:
              "**Edward Snowden**, ancien sous-traitant de la NSA, a révélé en **2013** l’existence de programmes de surveillance de masse. Il est devenu l’un des **whistleblowers** les plus célèbres.",
          },
          {
            id: "1re-anglais-05-s2-p2",
            prompt: "The character « Big Brother » comes from which novel?",
            choices: ["Animal Farm", "Brave New World", "Nineteen Eighty-Four"],
            answer: 2,
            explanation:
              "**Big Brother** est le chef omniprésent de **Nineteen Eighty-Four**, roman de George Orwell publié en **1949**. Il symbolise la surveillance totalitaire ; Animal Farm est une autre œuvre d’Orwell, sous forme de fable.",
          },
          {
            id: "1re-anglais-05-s2-p3",
            prompt: "What is a « whistleblower »?",
            choices: ["un lanceur d’alerte", "un photographe de presse à scandale", "un pirate informatique"],
            answer: 0,
            explanation:
              "Un **whistleblower** est un **lanceur d’alerte** : il révèle des pratiques illégales ou dangereuses au sein d’une organisation. Le mot vient de l’image du coup de sifflet (whistle) de l’arbitre.",
          },
        ],
      },
      {
        title: "Croiser les deux axes : identités exposées et intimité partagée",
        body: [
          "Les deux axes se rejoignent quand l’**identité privée** devient un **enjeu public**. Le mouvement pour les droits des personnes LGBTQ+ en est un exemple : les émeutes de **Stonewall**, à New York, en **1969**, sont considérées comme le point de départ du mouvement moderne, et l’expression **coming out** désigne justement le passage du privé au public.",
          "Les réseaux sociaux transforment chacun en personnage public : on construit une **online identity**, parfois idéalisée. Le phénomène des **influencers** et la pression à tout partager (**oversharing**) brouillent les frontières. Certains parlent de **curated self** : un moi « mis en scène » qui ne correspond pas toujours à la réalité.",
          "Dans un document, il est utile de repérer **qui parle**, **à qui**, et **dans quel espace** : une lettre intime, un discours public, un post Instagram, un graffiti. La nature du support révèle souvent la tension entre ce que l’on montre et ce que l’on garde pour soi, ce qui nourrit l’analyse et l’essai.",
        ],
        keyPoints: [
          "online identity = identité numérique ; to post = publier.",
          "oversharing = le fait de trop partager ; to keep sth to oneself = garder pour soi.",
          "to come out = révéler son orientation sexuelle ; civil rights = droits civiques.",
          "self-image = image de soi ; peer pressure = pression des pairs.",
        ],
        formulas: [
          "Analyser un support : This is a private letter / a public speech addressed to…",
          "Souligner un paradoxe : Paradoxically, the more we share, the less we…",
          "Comparatif progressif : the more… the more… → The more we post, the more exposed we are.",
        ],
        example: {
          title: "Relier un document à deux axes",
          steps: [
            "Document : un post Instagram d’une jeune Britannique d’origine indienne parlant de sa double culture.",
            "Axe « Identités et échanges » : She describes herself as British-Indian and explains how she navigates two cultures.",
            "Axe « Espace privé et espace public » : She chooses to share a very personal story with thousands of followers.",
            "Problématique : To what extent does social media allow people to express their identity freely?",
          ],
        },
        figure: {
          type: "table",
          title: "Vocabulaire des deux axes",
          headers: ["English", "Français"],
          rows: [
            ["sense of belonging", "sentiment d’appartenance"],
            ["online identity", "identité numérique"],
            ["oversharing", "le fait de trop partager"],
            ["to keep sth to oneself", "garder quelque chose pour soi"],
            ["peer pressure", "pression des pairs"],
            ["self-image", "image de soi"],
          ],
        },
        practice: [
          {
            id: "1re-anglais-05-s3-p1",
            prompt: "Which event is considered the starting point of the modern LGBTQ+ rights movement?",
            choices: ["The Stonewall riots (1969)", "The March on Washington (1963)", "The Montgomery Bus Boycott (1955)"],
            answer: 0,
            explanation:
              "Les **émeutes de Stonewall**, à New York en **1969**, sont considérées comme le point de départ du mouvement LGBTQ+ moderne. La March on Washington et le boycott de Montgomery appartiennent au mouvement des droits civiques.",
          },
          {
            id: "1re-anglais-05-s3-p2",
            prompt: "Complete: « The ___ we post, the more exposed we are. »",
            choices: ["most", "more", "much", "many"],
            answer: 1,
            explanation:
              "Le **comparatif progressif** se construit avec **the more… the more…** (« plus… plus… »). On ne peut employer ni le superlatif most ni much ou many dans cette structure.",
          },
          {
            id: "1re-anglais-05-s3-p3",
            prompt: "What is a « curated self »?",
            choices: ["a legal identity document", "a private diary", "a self-image carefully staged for others"],
            answer: 2,
            explanation:
              "Le **curated self** désigne un **moi mis en scène**, sélectionné et embelli pour les réseaux sociaux. Cette image ne correspond pas toujours à la réalité, ce qui illustre la tension entre privé et public.",
          },
        ],
      },
    ],
    homework: [
      {
        id: "1re-anglais-05-hw-1",
        prompt: "Roughly how many migrants passed through Ellis Island between 1892 and 1954?",
        choices: ["1 million", "12 million", "50 million", "120 million"],
        answer: 1,
        explanation:
          "Environ **12 millions** de migrants sont passés par Ellis Island entre 1892 et 1954. Ce chiffre explique pourquoi les États-Unis se définissent comme une **nation of immigrants**.",
      },
      {
        id: "1re-anglais-05-hw-2",
        prompt: "The saying « An Englishman's home is his castle » underlines:",
        choices: [
          "the home as a protected private space",
          "the British love of medieval castles",
          "the right to buy property abroad",
        ],
        answer: 0,
        explanation:
          "Ce proverbe exprime l’attachement britannique au **domicile comme espace protégé**, à l’abri des intrusions. Il illustre l’axe « Espace privé et espace public ».",
      },
      {
        id: "1re-anglais-05-hw-3",
        prompt: "What does « to invade someone's privacy » mean?",
        choices: ["inviter quelqu’un chez soi", "porter atteinte à la vie privée de quelqu’un", "envahir un pays"],
        answer: 1,
        explanation:
          "**Privacy** désigne la **vie privée** : to invade someone’s privacy, c’est y porter atteinte. Le verbe invade est ici employé au sens figuré.",
      },
      {
        id: "1re-anglais-05-hw-4",
        prompt: "Which term describes identities such as « Irish-American » or « British-Asian »?",
        choices: ["melting pot", "lingua franca", "asylum seekers", "hyphenated identities"],
        answer: 3,
        explanation:
          "On parle d’**hyphenated identities** (identités « à trait d’union ») pour désigner des identités doubles. Elles peuvent être une richesse mais aussi une source de tiraillements.",
      },
    ],
    exercise: [
      {
        id: "1re-anglais-05-ex-1",
        prompt: "What is the meaning of « sense of belonging » ?",
        choices: [
          "sentiment d'appartenance",
          "sens des responsabilités",
          "droit de propriété",
          "sens de l'orientation",
        ],
        answer: 0,
        explanation:
          "**sense of belonging** = **sentiment d’appartenance** (to belong = appartenir). C’est une expression centrale de l’axe « Identités et échanges ».",
      },
      {
        id: "1re-anglais-05-ex-2",
        prompt: "Which ship, arriving in 1948, became the symbol of Caribbean immigration to Britain?",
        choices: ["The Mayflower", "The Titanic", "The Empire Windrush", "The Queen Mary"],
        answer: 2,
        explanation:
          "Le **HMT Empire Windrush** est arrivé à Tilbury en **1948** avec des passagers venus des Caraïbes : il a donné son nom à la **Windrush generation**. Le Mayflower a transporté les Pères pèlerins vers l’Amérique en 1620.",
      },
      {
        id: "1re-anglais-05-ex-3",
        prompt: "A « whistleblower » is…",
        choices: [
          "a sports referee.",
          "a person who reveals wrongdoing inside an organisation.",
          "a police officer in charge of traffic.",
          "a journalist working for a tabloid.",
        ],
        answer: 1,
        explanation:
          "Un **whistleblower** est un **lanceur d’alerte** : une personne qui révèle des pratiques illégales ou contraires à l’éthique au sein d’une organisation, comme Edward Snowden en 2013.",
      },
      {
        id: "1re-anglais-05-ex-4",
        prompt: "Who wrote Nineteen Eighty-Four, the novel featuring Big Brother?",
        choices: ["Aldous Huxley", "Ray Bradbury", "H. G. Wells", "George Orwell"],
        answer: 3,
        explanation:
          "**George Orwell** a publié **Nineteen Eighty-Four** en **1949**. Big Brother et sa formule « Big Brother is watching you » symbolisent la surveillance totalitaire. Huxley a écrit Brave New World (1932), Bradbury Fahrenheit 451 (1953).",
      },
      {
        id: "1re-anglais-05-ex-5",
        prompt: "Which phrase describes a model where cultures coexist while keeping their own features?",
        choices: ["melting pot", "salad bowl", "assimilation", "segregation"],
        answer: 1,
        explanation:
          "Dans la métaphore du **salad bowl**, chaque culture garde sa spécificité, comme les ingrédients d’une salade. Le **melting pot** suppose au contraire une fusion des cultures dans une identité commune (proche de l’assimilation).",
      },
      {
        id: "1re-anglais-05-ex-6",
        prompt: "Translate: « Ils ont porté atteinte à sa vie privée. »",
        choices: [
          "They invaded her privacy.",
          "They attacked her private.",
          "They broke her private life rules.",
          "They entered her privacy room.",
        ],
        answer: 0,
        explanation:
          "L’expression idiomatique est **to invade sb’s privacy** (porter atteinte à la vie privée de quelqu’un). privacy est un nom indénombrable, private un adjectif.",
      },
    ],
    test: [
      {
        id: "1re-anglais-05-ct-1",
        prompt: "What did the 2018 « Windrush scandal » reveal?",
        choices: [
          "That the Windrush ship had sunk in the Atlantic.",
          "That some legal Caribbean-born residents had been wrongly threatened with deportation.",
          "That Caribbean immigrants had refused British citizenship.",
          "That the government had banned immigration in 1948.",
        ],
        answer: 1,
        explanation:
          "En 2018, on a découvert que des personnes arrivées légalement des Caraïbes dans les années 1948-1971, souvent enfants, avaient perdu leur emploi, leurs droits, voire avaient été **expulsées** ou menacées de l’être faute de documents. Le scandale a conduit à la démission de la ministre de l’Intérieur Amber Rudd.",
      },
      {
        id: "1re-anglais-05-ct-2",
        prompt: "Ellis Island was…",
        choices: [
          "the place where the Declaration of Independence was signed.",
          "a prison for political opponents in London.",
          "the main immigration station in New York between 1892 and 1954.",
          "the first English colony in North America.",
        ],
        answer: 2,
        explanation:
          "**Ellis Island**, dans la baie de New York, a été le principal **centre d’accueil et de contrôle des immigrants** aux États-Unis de **1892 à 1954**. La Déclaration d’indépendance a été signée à Philadelphie, et la première colonie anglaise durable est Jamestown (1607).",
      },
      {
        id: "1re-anglais-05-ct-3",
        prompt: "What was revealed by the Cambridge Analytica affair in 2018?",
        choices: [
          "That millions of Facebook users' data had been harvested for political purposes.",
          "That British universities were spying on students.",
          "That Twitter had been hacked by foreign governments.",
          "That the NSA was listening to the Queen's phone calls.",
        ],
        answer: 0,
        explanation:
          "La société **Cambridge Analytica** a exploité sans consentement les données de dizaines de millions d’utilisateurs de **Facebook** pour cibler des messages politiques. L’affaire illustre la fragilité de la vie privée en ligne.",
      },
      {
        id: "1re-anglais-05-ct-4",
        prompt: "Which event is often seen as the beginning of the modern LGBTQ+ rights movement in the USA?",
        choices: [
          "The Boston Tea Party (1773)",
          "The March on Washington (1963)",
          "The Montgomery Bus Boycott (1955)",
          "The Stonewall riots (1969)",
        ],
        answer: 3,
        explanation:
          "Les émeutes de **Stonewall** (Stonewall Inn, New York, juin **1969**) ont éclaté après une descente de police dans un bar fréquenté par la communauté gay. Elles sont commémorées chaque année par les marches des fiertés (Pride).",
      },
      {
        id: "1re-anglais-05-ct-5",
        prompt: "« An Englishman's home is his castle » means that…",
        choices: [
          "English people often live in castles.",
          "the home is a private space that others should not intrude upon.",
          "English houses are very expensive.",
          "English people prefer public spaces to private ones.",
        ],
        answer: 1,
        explanation:
          "Ce proverbe exprime l’idée que le **domicile est un espace privé inviolable**, où chacun est maître chez soi. Il illustre l’attachement britannique à la vie privée.",
      },
      {
        id: "1re-anglais-05-ct-6",
        prompt: "Choose the most accurate sentence about English as a global language.",
        choices: [
          "English is spoken only by native speakers in the UK and the USA.",
          "English is the official language of every country in the world.",
          "Non-native speakers of English now outnumber native speakers.",
          "English has replaced all other languages on the internet.",
        ],
        answer: 2,
        explanation:
          "L’anglais est une **lingua franca** : les locuteurs **non natifs** (plus d’un milliard) sont aujourd’hui **plus nombreux** que les natifs (environ 400 millions). Les autres affirmations sont fausses ou exagérées.",
      },
      {
        id: "1re-anglais-05-ct-7",
        prompt: "Complete with the best word: « Many second-generation immigrants feel ___ between their parents' culture and the culture of the country they grew up in. »",
        choices: ["uprooted", "settled", "torn", "fitted"],
        answer: 2,
        explanation:
          "**to be torn between** = **être tiraillé entre** deux choses. uprooted (déraciné) s’applique plutôt à ceux qui ont quitté leur pays ; settled signifie « installé » ; fitted n’a pas ce sens.",
      },
      {
        id: "1re-anglais-05-ct-8",
        prompt: "Which sentence best expresses a nuanced point of view on surveillance?",
        choices: [
          "Cameras are always bad and should be destroyed.",
          "Cameras solve every crime, so privacy does not matter.",
          "There are cameras in London.",
          "While cameras may reduce crime, they also raise serious concerns about privacy.",
        ],
        answer: 3,
        explanation:
          "Une phrase **nuancée** reconnaît un avantage (may reduce crime) puis introduit une limite (also raise concerns) grâce à **while** (concession). Les deux premières sont caricaturales, la troisième se contente d’un constat.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Art et pouvoir / Citoyenneté et mondes virtuels
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-anglais-06",
    title: "Axes « Art et pouvoir » et « Citoyenneté et mondes virtuels »",
    summary:
      "L’art peut servir le pouvoir ou le contester, tandis que le numérique redéfinit la participation citoyenne, entre engagement en ligne et désinformation.",
    objectives: [
      "Je sais expliquer comment l’art a été utilisé pour glorifier ou critiquer le pouvoir dans le monde anglophone.",
      "Je sais présenter des œuvres et des artistes engagés (protest songs, street art, satire).",
      "Je sais utiliser le vocabulaire de la citoyenneté numérique et de la désinformation.",
      "Je sais argumenter sur les avantages et les dangers des mondes virtuels pour la démocratie.",
    ],
    sections: [
      {
        title: "L’art au service du pouvoir",
        body: [
          "L’axe **« Art et pouvoir »** interroge les liens entre création artistique et autorité. L’art a longtemps servi à **glorifier** les dirigeants : les portraits d’**Elizabeth I** (comme l’**Armada Portrait**, peint vers 1588 après la victoire contre l’Armada espagnole) construisent l’image d’une reine puissante et presque divine. On parle de **propaganda** quand l’art est utilisé pour diffuser une idéologie.",
          "Aux États-Unis, le **Mount Rushmore** (sculpté entre 1927 et 1941) représente quatre présidents (Washington, Jefferson, Theodore Roosevelt et Lincoln) : c’est un monument patriotique, mais il a été taillé dans les **Black Hills**, terres sacrées pour les **Lakotas**, ce qui en fait aussi un symbole controversé.",
          "Pendant la Seconde Guerre mondiale, les affiches de propagande ont mobilisé les populations : **« Uncle Sam Wants You »** (affiche de recrutement de James Montgomery Flagg, 1917, réutilisée en 1941) ou **« Keep Calm and Carry On »** (Royaume-Uni, 1939, presque pas diffusée à l’époque, redécouverte en 2000). L’art officiel peut aussi passer par la **censure** : décider de ce qui peut être montré est une autre forme de pouvoir.",
        ],
        keyPoints: [
          "power = pouvoir ; ruler = dirigeant ; to glorify = glorifier.",
          "propaganda = propagande (indénombrable) ; poster = affiche.",
          "to commission a work = commander une œuvre ; patron = mécène.",
          "censorship = censure ; to ban = interdire.",
          "monument / statue = monument / statue ; to tear down = déboulonner.",
        ],
        formulas: [
          "Décrire une œuvre : This painting depicts / portrays / represents…",
          "Interpréter : The artist seems to suggest that… / It may symbolise…",
          "Passif pour l’histoire de l’œuvre : It was painted / commissioned by…",
        ],
        example: {
          title: "Analyser une affiche de propagande",
          steps: [
            "Document : l’affiche « I Want You for U.S. Army » (Uncle Sam).",
            "Description : Uncle Sam is pointing his finger directly at the viewer.",
            "Effet : The direct gaze and the pointing finger make the viewer feel personally concerned.",
            "Interprétation : The poster was designed to encourage young men to join the army.",
            "Lien avec l’axe : It shows how art can be used by the state to influence citizens.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Repères : l’art au service du pouvoir",
          events: [
            { date: "vers 1588", label: "Armada Portrait d’Elizabeth I, après la victoire sur l’Armada espagnole" },
            { date: "1917", label: "Affiche « I Want You for U.S. Army » (Uncle Sam, James Montgomery Flagg)" },
            { date: "1927-1941", label: "Sculpture du Mount Rushmore dans les Black Hills" },
            { date: "1939", label: "Affiche britannique « Keep Calm and Carry On »" },
          ],
        },
        practice: [
          {
            id: "1re-anglais-06-s1-p1",
            prompt: "Which four presidents are carved on Mount Rushmore?",
            choices: [
              "Washington, Jefferson, Theodore Roosevelt, Lincoln",
              "Washington, Adams, Jefferson, Lincoln",
              "Lincoln, Kennedy, Franklin D. Roosevelt, Washington",
            ],
            answer: 0,
            explanation:
              "Le Mount Rushmore représente **Washington, Jefferson, Theodore Roosevelt et Lincoln**. Ce monument patriotique a été sculpté entre 1927 et 1941.",
          },
          {
            id: "1re-anglais-06-s1-p2",
            prompt: "Why is Mount Rushmore also a controversial symbol?",
            choices: [
              "It depicts British monarchs.",
              "It was carved in the Black Hills, land sacred to the Lakota.",
              "It was built in the 19th century.",
            ],
            answer: 1,
            explanation:
              "Le monument a été taillé dans les **Black Hills**, terres **sacrées pour les Lakotas**. Il glorifie donc le pouvoir américain sur un territoire pris aux peuples autochtones.",
          },
          {
            id: "1re-anglais-06-s1-p3",
            prompt: "Which verb means « commander une œuvre » ?",
            choices: ["to ban", "to glorify", "to commission", "to tear down"],
            answer: 2,
            explanation:
              "**To commission a work** signifie **commander une œuvre** à un artiste, souvent par un mécène (patron) ou un dirigeant. To ban = interdire, to tear down = déboulonner.",
          },
        ],
      },
      {
        title: "L’art contre le pouvoir : contestation et engagement",
        body: [
          "L’art peut aussi **défier** le pouvoir. Les **protest songs** ont accompagné les grandes luttes : **Strange Fruit**, chantée par **Billie Holiday** en **1939**, dénonce les lynchages dans le Sud des États-Unis ; **Blowin’ in the Wind** (Bob Dylan, 1963) et **A Change Is Gonna Come** (Sam Cooke, 1964) sont devenues des hymnes du mouvement des droits civiques. Plus récemment, **Alright** de Kendrick Lamar (2015) a été reprise lors des manifestations Black Lives Matter.",
          "Le **street art** est une forme d’expression souvent illégale qui s’approprie l’espace public. L’artiste britannique anonyme **Banksy**, originaire de Bristol, utilise le **pochoir** (stencil) pour critiquer la guerre, la société de consommation ou la surveillance. En 2018, son tableau **Girl with Balloon** s’est autodétruit partiellement juste après avoir été vendu aux enchères chez Sotheby’s, pour devenir **Love is in the Bin** : un geste qui critique le marché de l’art.",
          "La **satire** est une autre arme : les **political cartoons** caricaturent les dirigeants, et des œuvres littéraires comme **Animal Farm** (George Orwell, 1945) dénoncent les dérives totalitaires sous la forme d’une fable. Certains artistes paient cher leur engagement : censure, exil ou prison, ce qui montre que l’art dérange le pouvoir.",
        ],
        keyPoints: [
          "protest song = chanson engagée ; to denounce = dénoncer.",
          "street art = art urbain ; stencil = pochoir ; mural = peinture murale.",
          "satire = satire ; cartoon = dessin de presse ; to mock = se moquer de.",
          "committed / engaged artist = artiste engagé ; dissent = contestation.",
          "to raise awareness = sensibiliser ; to challenge authority = défier l’autorité.",
        ],
        formulas: [
          "Exprimer un but : The artist aims to / seeks to + V…",
          "Exprimer un effet : This song has become an anthem for…",
          "Opposer art officiel et art contestataire : Whereas some artists serve power, others challenge it.",
        ],
        example: {
          title: "Présenter une protest song",
          steps: [
            "Œuvre : Strange Fruit, performed by Billie Holiday in 1939.",
            "Thème : The song describes the lynching of Black Americans in the South; the « strange fruit » is a metaphor for bodies hanging from trees.",
            "Contexte : At the time, racial segregation was legal in many Southern states.",
            "Portée : It is considered one of the first great songs of the civil rights movement.",
            "Lien avec l’axe : It shows how music can denounce injustice and challenge those in power.",
          ],
        },
        figure: {
          type: "timeline",
          title: "Repères : l’art contre le pouvoir",
          events: [
            { date: "1939", label: "Strange Fruit, chantée par Billie Holiday" },
            { date: "1945", label: "Animal Farm, fable satirique de George Orwell" },
            { date: "1963", label: "Blowin’ in the Wind, Bob Dylan" },
            { date: "1964", label: "A Change Is Gonna Come, Sam Cooke" },
            { date: "2015", label: "Alright, Kendrick Lamar" },
            { date: "2018", label: "Girl with Balloon de Banksy devient Love is in the Bin" },
          ],
        },
        practice: [
          {
            id: "1re-anglais-06-s2-p1",
            prompt: "Who sang « Strange Fruit » in 1939?",
            choices: ["Nina Simone", "Aretha Franklin", "Ella Fitzgerald", "Billie Holiday"],
            answer: 3,
            explanation:
              "**Billie Holiday** a interprété **Strange Fruit** en 1939. La chanson dénonce les lynchages d’Afro-Américains dans le Sud des États-Unis.",
          },
          {
            id: "1re-anglais-06-s2-p2",
            prompt: "Which technique is Banksy famous for?",
            choices: ["stencil", "oil painting", "mosaic"],
            answer: 0,
            explanation:
              "Banksy, artiste anonyme originaire de Bristol, utilise surtout le **pochoir** (stencil). Cette technique permet de peindre rapidement dans l’espace public.",
          },
          {
            id: "1re-anglais-06-s2-p3",
            prompt: "Animal Farm (1945) criticises totalitarianism in the form of:",
            choices: ["a sonnet", "a fable", "a protest song", "a political cartoon"],
            answer: 1,
            explanation:
              "George Orwell dénonce les dérives totalitaires sous la forme d’une **fable** animalière. C’est un exemple de **satire** littéraire contre le pouvoir.",
          },
        ],
      },
      {
        title: "Citoyenneté et mondes virtuels",
        body: [
          "L’axe **« Citoyenneté et mondes virtuels »** étudie la façon dont Internet et les réseaux sociaux transforment la vie démocratique. D’un côté, ils favorisent la **participation** : pétitions en ligne, mobilisations comme **#MeToo** (popularisé en 2017) ou **Black Lives Matter** (né en 2013 sur les réseaux), débats ouverts à tous. On parle parfois de **hashtag activism** ou, de façon critique, de **slacktivism** (un engagement facile qui se limite à un clic).",
          "De l’autre, le numérique favorise la **désinformation** : **fake news**, **conspiracy theories**, **deepfakes** produits par l’intelligence artificielle. Les **algorithms** des réseaux sociaux enferment les utilisateurs dans des **filter bubbles** et des **echo chambers**, où ils ne voient que des contenus confirmant leurs opinions, ce qui peut renforcer la **polarisation**.",
          "Être un **digital citizen** responsable suppose de vérifier ses sources (**fact-checking**), de respecter les autres en ligne et de lutter contre le **cyberbullying** (cyberharcèlement). Les États tentent de réguler : au Royaume-Uni, l’**Online Safety Act** a été adopté en **2023** pour imposer des obligations aux plateformes, notamment pour protéger les mineurs.",
          "Enfin, les **mondes virtuels** (jeux vidéo en ligne, métavers, avatars) posent la question de l’identité et des droits : peut-on être citoyen dans un univers numérique ? Les élèves peuvent utiliser des exemples de fiction, comme la série **Black Mirror** (créée par Charlie Brooker en 2011), qui imagine les dérives possibles des technologies.",
        ],
        keyPoints: [
          "digital citizen = citoyen numérique ; netiquette = règles de politesse en ligne.",
          "fake news / misinformation / disinformation = fausses informations (disinformation = volontaire).",
          "filter bubble = bulle de filtres ; echo chamber = chambre d’écho.",
          "cyberbullying = cyberharcèlement ; troll = troll ; hate speech = discours de haine.",
          "to fact-check = vérifier les faits ; reliable source = source fiable.",
        ],
        formulas: [
          "Présenter un avantage : Social media enable people to + V…",
          "Présenter un risque : They may also lead to / result in + nom…",
          "Proposer une solution : It is essential that users (should) + V… / Governments ought to + V…",
        ],
        example: {
          title: "Construire un paragraphe argumenté",
          steps: [
            "Idée directrice : Social media have changed the way citizens engage in politics.",
            "Argument positif : They enable ordinary people to raise awareness, as the Black Lives Matter movement showed in 2020.",
            "Argument négatif : However, algorithms create echo chambers in which users only see opinions they already share.",
            "Conséquence : As a result, misinformation spreads quickly and society becomes more polarised.",
            "Conclusion du paragraphe : Therefore, teaching young people to fact-check is crucial for democracy.",
          ],
        },
        figure: {
          type: "table",
          title: "Vocabulaire de la citoyenneté numérique",
          headers: ["English", "Français"],
          rows: [
            ["filter bubble", "bulle de filtres"],
            ["echo chamber", "chambre d’écho"],
            ["disinformation", "désinformation (volontaire)"],
            ["cyberbullying", "cyberharcèlement"],
            ["hate speech", "discours de haine"],
            ["to fact-check", "vérifier les faits"],
            ["slacktivism", "engagement limité à un clic"],
          ],
        },
        practice: [
          {
            id: "1re-anglais-06-s3-p1",
            prompt: "What is the difference between misinformation and disinformation?",
            choices: [
              "They mean exactly the same thing.",
              "Misinformation is always deliberate.",
              "Disinformation is deliberately false; misinformation may be shared by mistake.",
            ],
            answer: 2,
            explanation:
              "La **disinformation** est une fausse information diffusée **volontairement** pour tromper. La **misinformation** peut être partagée de bonne foi, par erreur.",
          },
          {
            id: "1re-anglais-06-s3-p2",
            prompt: "What does « slacktivism » refer to?",
            choices: ["violent protest", "an easy form of engagement limited to a click", "voting in elections", "a type of video game"],
            answer: 1,
            explanation:
              "Le **slacktivism** (de slacker, « fainéant », et activism) désigne de façon critique un engagement facile, limité à un like ou un partage. Il s’oppose à une mobilisation concrète.",
          },
          {
            id: "1re-anglais-06-s3-p3",
            prompt: "When was the UK's Online Safety Act passed?",
            choices: ["2013", "2017", "2020", "2023"],
            answer: 3,
            explanation:
              "L’**Online Safety Act** a été adopté au Royaume-Uni en **2023**. Il impose des obligations aux plateformes, notamment pour protéger les mineurs.",
          },
        ],
      },
    ],
    homework: [
      {
        id: "1re-anglais-06-hw-1",
        prompt: "Which 2015 song by Kendrick Lamar became a protest anthem during Black Lives Matter demonstrations?",
        choices: ["Humble", "DNA", "Alright"],
        answer: 2,
        explanation:
          "**Alright** (2015) a été reprise lors des manifestations Black Lives Matter. Elle s’inscrit dans la tradition des protest songs, aux côtés de Strange Fruit ou A Change Is Gonna Come.",
      },
      {
        id: "1re-anglais-06-hw-2",
        prompt: "In an echo chamber, social media users mainly:",
        choices: ["see opinions that confirm their own", "meet opposing points of view", "check their sources carefully"],
        answer: 0,
        explanation:
          "Une **echo chamber** enferme les utilisateurs dans des contenus qui **confirment leurs opinions**, sous l’effet des algorithmes. Cela peut renforcer la **polarisation** de la société.",
      },
      {
        id: "1re-anglais-06-hw-3",
        prompt: "Complete: « The Armada Portrait ___ Elizabeth I as a powerful, almost divine queen. »",
        choices: ["bans", "portrays", "tears down", "censors"],
        answer: 1,
        explanation:
          "**To portray** (ou to depict) signifie **représenter** : c’est le verbe adapté pour décrire une œuvre. Les autres verbes (bans, tears down, censors) n’ont pas de sens ici.",
      },
      {
        id: "1re-anglais-06-hw-4",
        prompt: "Which TV series created by Charlie Brooker in 2011 imagines the dark side of new technologies?",
        choices: ["The Crown", "Sherlock", "Doctor Who", "Black Mirror"],
        answer: 3,
        explanation:
          "**Black Mirror**, créée par Charlie Brooker en 2011, imagine les dérives possibles des technologies. C’est une référence utile pour l’axe « Citoyenneté et mondes virtuels ».",
      },
    ],
    exercise: [
      {
        id: "1re-anglais-06-ex-1",
        prompt: "Which British street artist is known for his stencils and his anonymity?",
        choices: ["David Hockney", "Banksy", "Damien Hirst", "Andy Warhol"],
        answer: 1,
        explanation:
          "**Banksy**, originaire de Bristol, est célèbre pour ses **pochoirs** (stencils) et son **anonymat**. Hockney et Hirst sont des artistes britanniques exposés en galerie ; Warhol est un artiste pop américain.",
      },
      {
        id: "1re-anglais-06-ex-2",
        prompt: "What does « echo chamber » mean?",
        choices: [
          "a room used for music recording",
          "a place where people only hear opinions similar to their own",
          "a parliament debating chamber",
          "a type of computer virus",
        ],
        answer: 1,
        explanation:
          "Une **echo chamber** (« chambre d’écho ») est un environnement, souvent numérique, où l’on n’entend que des opinions qui **renforcent les nôtres**. Elle contribue à la polarisation du débat public.",
      },
      {
        id: "1re-anglais-06-ex-3",
        prompt: "Which singer recorded « Strange Fruit » in 1939, a song denouncing lynching?",
        choices: ["Aretha Franklin", "Nina Simone", "Ella Fitzgerald", "Billie Holiday"],
        answer: 3,
        explanation:
          "**Billie Holiday** a enregistré **Strange Fruit** en **1939**. Le texte, écrit par Abel Meeropol, décrit les corps de victimes de lynchage pendus aux arbres. Nina Simone l’a reprise plus tard, en 1965.",
      },
      {
        id: "1re-anglais-06-ex-4",
        prompt: "Translate « cyberharcèlement ».",
        choices: ["cyberbullying", "cybercrime", "hacking", "trolling"],
        answer: 0,
        explanation:
          "**cyberbullying** = **cyberharcèlement**. cybercrime désigne la criminalité informatique en général, hacking le piratage, trolling le fait de provoquer volontairement en ligne.",
      },
      {
        id: "1re-anglais-06-ex-5",
        prompt: "« Slacktivism » refers to…",
        choices: [
          "a type of extreme political violence.",
          "an art movement of the 1960s.",
          "online support that requires little effort, such as liking a post.",
          "a law against online activism.",
        ],
        answer: 2,
        explanation:
          "**slacktivism** (de slacker, « fainéant », et activism) désigne de façon critique un **engagement minimal** en ligne (liker, partager, signer une pétition) sans action concrète.",
      },
      {
        id: "1re-anglais-06-ex-6",
        prompt: "Which presidents are carved into Mount Rushmore?",
        choices: [
          "Washington, Lincoln, Kennedy and Obama",
          "Washington, Jefferson, Theodore Roosevelt and Lincoln",
          "Lincoln, Franklin D. Roosevelt, Truman and Kennedy",
          "Jefferson, Adams, Madison and Monroe",
        ],
        answer: 1,
        explanation:
          "Le **Mount Rushmore** (Dakota du Sud) représente **George Washington, Thomas Jefferson, Theodore Roosevelt et Abraham Lincoln**. Il a été sculpté entre 1927 et 1941 sous la direction de Gutzon Borglum.",
      },
    ],
    test: [
      {
        id: "1re-anglais-06-ct-1",
        prompt: "Why is Mount Rushmore considered a controversial monument?",
        choices: [
          "Because it was never finished and is about to collapse.",
          "Because it was carved in the Black Hills, land considered sacred by the Lakota people.",
          "Because it represents British kings.",
          "Because it was built by Banksy without permission.",
        ],
        answer: 1,
        explanation:
          "Le monument a été sculpté dans les **Black Hills**, terres sacrées pour les **Lakotas**, qui leur avaient été garanties par le traité de Fort Laramie (1868) avant d’être saisies. Pour beaucoup d’Amérindiens, il symbolise la dépossession.",
      },
      {
        id: "1re-anglais-06-ct-2",
        prompt: "What happened to Banksy's « Girl with Balloon » in 2018?",
        choices: [
          "It was stolen from a museum in London.",
          "It was painted over by the city council.",
          "It partially shredded itself just after being sold at auction.",
          "It was banned by the British government.",
        ],
        answer: 2,
        explanation:
          "En octobre 2018, chez **Sotheby’s** à Londres, l’œuvre s’est **partiellement déchiquetée** grâce à un mécanisme caché dans le cadre, juste après sa vente. Rebaptisée **Love is in the Bin**, elle illustre la critique du marché de l’art par Banksy.",
      },
      {
        id: "1re-anglais-06-ct-3",
        prompt: "Which work by George Orwell is an allegorical fable criticising totalitarianism?",
        choices: ["Animal Farm", "Lord of the Flies", "Brave New World", "The Handmaid's Tale"],
        answer: 0,
        explanation:
          "**Animal Farm** (1945) est une **fable allégorique** dans laquelle des animaux renversent leur fermier avant que les cochons n’instaurent une dictature : c’est une satire de la révolution russe et du stalinisme. Lord of the Flies est de William Golding, Brave New World d’Aldous Huxley, The Handmaid’s Tale de Margaret Atwood.",
      },
      {
        id: "1re-anglais-06-ct-4",
        prompt: "What is the difference between « misinformation » and « disinformation » ?",
        choices: [
          "There is no difference.",
          "Misinformation is always spread by governments.",
          "Disinformation only concerns printed newspapers.",
          "Disinformation is deliberately false; misinformation may be shared without intent to deceive.",
        ],
        answer: 3,
        explanation:
          "La **disinformation** est **volontairement** trompeuse (campagnes organisées), tandis que la **misinformation** désigne une information fausse partagée **sans forcément l’intention de tromper**. La nuance est utile dans un essai.",
      },
      {
        id: "1re-anglais-06-ct-5",
        prompt: "Choose the best sentence to describe a painting in an oral presentation.",
        choices: [
          "In this painting, there is Queen Elizabeth I, who is represented in a majestic way.",
          "In this painting, it has Queen Elizabeth I who is represent majestic.",
          "This painting shows Queen Elizabeth I which is representing majestically.",
          "There is in this painting the queen Elizabeth I represented of a majestic way.",
        ],
        answer: 0,
        explanation:
          "La phrase correcte utilise **there is** (il y a), le relatif **who** pour une personne et un passif bien formé (**is represented**) avec in a majestic way. Les autres contiennent des gallicismes (it has, of a majestic way) ou des erreurs de relatif (which pour une personne).",
      },
      {
        id: "1re-anglais-06-ct-6",
        prompt: "Which law was passed in the UK in 2023 to make online platforms more responsible, especially regarding children?",
        choices: [
          "The Data Protection Act",
          "The Online Safety Act",
          "The Human Rights Act",
          "The Digital Freedom Act",
        ],
        answer: 1,
        explanation:
          "L’**Online Safety Act**, adopté en **2023**, impose aux plateformes des obligations de protection des utilisateurs, en particulier des **mineurs**, contre les contenus illégaux ou dangereux. Le Human Rights Act date de 1998.",
      },
      {
        id: "1re-anglais-06-ct-7",
        prompt: "Complete: « Algorithms tend to show users content they already agree with, ___ reinforces their beliefs. »",
        choices: ["what", "that", "which", "who"],
        answer: 2,
        explanation:
          "**which**, après une virgule, reprend **toute la proposition** précédente (le fait que les algorithmes montrent des contenus déjà approuvés) : « ce qui renforce leurs convictions ». what n’a pas d’antécédent, that est interdit après une virgule.",
      },
      {
        id: "1re-anglais-06-ct-8",
        prompt: "Which song became an anthem of the civil rights movement after being released by Sam Cooke in 1964?",
        choices: [
          "Imagine",
          "Born in the U.S.A.",
          "We Will Rock You",
          "A Change Is Gonna Come",
        ],
        answer: 3,
        explanation:
          "**A Change Is Gonna Come** de **Sam Cooke** (1964) exprime l’espoir d’un changement face à la ségrégation ; elle est devenue un hymne du **civil rights movement**. Imagine (John Lennon, 1971) est un hymne pacifiste, Born in the U.S.A. (1984) évoque les vétérans du Vietnam.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Fictions et réalités, Innovations, Diversité, Territoire
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-anglais-07",
    title: "Axes « Fictions et réalités », « Innovations scientifiques et responsabilité », « Diversité et inclusion », « Territoire et mémoire »",
    summary:
      "Ces quatre axes explorent le rapport entre fiction et réel, les dilemmes éthiques du progrès, les luttes pour l’égalité et la façon dont les sociétés anglophones construisent leur mémoire collective.",
    objectives: [
      "Je sais expliquer comment la fiction (roman, film, dystopie) éclaire la réalité.",
      "Je sais débattre des enjeux éthiques d’une innovation scientifique (IA, génétique, climat).",
      "Je sais présenter des repères de l’histoire des droits civiques et de l’inclusion.",
      "Je sais expliquer comment un territoire entretient sa mémoire (mémoriaux, commémorations, excuses officielles).",
    ],
    sections: [
      {
        title: "Fictions et réalités / Innovations scientifiques et responsabilité",
        body: [
          "L’axe **« Fictions et réalités »** montre que la fiction n’est pas une fuite hors du réel : elle le **reflète**, le **critique** ou l’**anticipe**. Le roman **Uncle Tom’s Cabin** (Harriet Beecher Stowe, 1852) a contribué à renforcer le mouvement **abolitionniste** aux États-Unis. Les **dystopias** comme **Nineteen Eighty-Four** ou **The Handmaid’s Tale** (Margaret Atwood, 1985) imaginent des sociétés oppressives pour alerter sur des dérives possibles. À l’inverse, le **mockumentary** ou les **fake news** brouillent la frontière entre vrai et faux.",
          "L’axe **« Innovations scientifiques et responsabilité »** interroge les limites éthiques du progrès. Dès **1818**, **Mary Shelley** publie **Frankenstein; or, The Modern Prometheus**, où un savant crée une créature qu’il ne parvient pas à contrôler : le mythe du scientifique dépassé par sa création reste une référence pour parler d’**artificial intelligence** ou de **genetic engineering**.",
          "Quelques repères : la brebis **Dolly**, premier mammifère cloné à partir d’une cellule adulte, est née en **1996** au **Roslin Institute** en Écosse ; l’outil d’édition génétique **CRISPR-Cas9** (Prix Nobel de chimie 2020 pour Emmanuelle Charpentier et Jennifer Doudna) ouvre des perspectives médicales mais soulève la crainte des **designer babies**. Le **climate change** pose aussi la question de la responsabilité collective face aux innovations industrielles.",
          "Pour argumenter, on oppose souvent les **benefits** (avancées médicales, confort, productivité) aux **risks** (perte de contrôle, inégalités, atteinte à la vie privée, suppression d’emplois). Une conclusion équilibrée insiste sur la nécessité d’un **cadre éthique** : « Science without conscience is the ruin of the soul » (traduction de Rabelais souvent citée).",
        ],
        keyPoints: [
          "fiction = fiction ; dystopia = dystopie ; utopia = utopie ; plot = intrigue.",
          "to reflect / to mirror reality = refléter la réalité ; to blur the line = brouiller la frontière.",
          "breakthrough = percée, avancée majeure ; cloning = clonage ; gene editing = édition génétique.",
          "AI (artificial intelligence) = IA ; to play God = se prendre pour Dieu.",
          "ethical = éthique ; to be held accountable = être tenu responsable.",
        ],
        formulas: [
          "Évaluer : The benefits outweigh the risks / The risks outweigh the benefits.",
          "Mettre en garde : If scientists are not careful, … could + V.",
          "Responsabilité : Who should be held responsible for…?",
        ],
        example: {
          title: "Relier une fiction à un débat scientifique",
          steps: [
            "Œuvre : Frankenstein by Mary Shelley (1818).",
            "Résumé : Victor Frankenstein creates a living being but rejects it, and the creature turns against him.",
            "Message : The novel warns against scientists who ignore the consequences of their discoveries.",
            "Actualité : Today, the same fear is expressed about artificial intelligence and gene editing.",
            "Problématique : Should there be limits to scientific progress?",
          ],
        },
        figure: {
          type: "timeline",
          title: "Repères : fictions, sciences et responsabilité",
          events: [
            { date: "1818", label: "Frankenstein; or, The Modern Prometheus, Mary Shelley" },
            { date: "1852", label: "Uncle Tom’s Cabin, Harriet Beecher Stowe" },
            { date: "1949", label: "Nineteen Eighty-Four, George Orwell" },
            { date: "1985", label: "The Handmaid’s Tale, Margaret Atwood" },
            { date: "1996", label: "Naissance de la brebis Dolly au Roslin Institute (Écosse)" },
            { date: "2020", label: "Prix Nobel de chimie pour CRISPR-Cas9 (Charpentier et Doudna)" },
          ],
        },
        practice: [
          {
            id: "1re-anglais-07-s1-p1",
            prompt: "Which novel by Mary Shelley (1818) warns against scientists losing control of their creation?",
            choices: ["Dracula", "Frankenstein", "The Handmaid's Tale"],
            answer: 1,
            explanation:
              "Dans **Frankenstein** (1818), Victor Frankenstein crée une créature qu’il ne parvient pas à contrôler. Le roman est une référence pour débattre de l’IA ou de l’édition génétique.",
          },
          {
            id: "1re-anglais-07-s1-p2",
            prompt: "Dolly the sheep, born in 1996, was:",
            choices: [
              "the first mammal cloned from an adult cell",
              "the first animal sent into space",
              "a sheep genetically modified to resist the cold",
            ],
            answer: 0,
            explanation:
              "**Dolly**, née en **1996** au Roslin Institute en Écosse, est le **premier mammifère cloné à partir d’une cellule adulte**. Sa naissance a relancé le débat éthique sur le clonage.",
          },
          {
            id: "1re-anglais-07-s1-p3",
            prompt: "Complete: « The benefits ___ the risks. » (= are greater than)",
            choices: ["overlook", "undergo", "outweigh", "outrun"],
            answer: 2,
            explanation:
              "**To outweigh** signifie « l’emporter sur » : the benefits outweigh the risks = les avantages l’emportent sur les risques. C’est une formule très utile pour conclure un argument.",
          },
        ],
      },
      {
        title: "Diversité et inclusion",
        body: [
          "L’axe **« Diversité et inclusion »** étudie la façon dont les sociétés anglophones combattent les **discriminations** liées à l’origine, au genre, au handicap ou à l’orientation sexuelle. Aux États-Unis, la **ségrégation** était légale dans le Sud (lois **Jim Crow**) jusqu’au milieu du XXᵉ siècle. En **1954**, l’arrêt **Brown v. Board of Education** de la Cour suprême déclare la ségrégation scolaire **inconstitutionnelle**.",
          "En **1955**, **Rosa Parks** refuse de céder sa place à un passager blanc dans un bus de **Montgomery** (Alabama), ce qui déclenche le **Montgomery Bus Boycott**, mené par **Martin Luther King Jr.** En **1963**, lors de la **March on Washington**, celui-ci prononce le discours **« I Have a Dream »**. Le **Civil Rights Act** (**1964**) interdit la discrimination, et le **Voting Rights Act** (**1965**) protège le droit de vote des Afro-Américains.",
          "Aujourd’hui, les débats portent sur l’**affirmative action** (discrimination positive, en grande partie interdite dans les admissions universitaires américaines par la Cour suprême en **2023**), la représentation des minorités dans les médias, l’**accessibility** pour les personnes handicapées et la lutte contre le **racial profiling**. Le mouvement **Black Lives Matter**, né en 2013, a pris une ampleur mondiale après la mort de **George Floyd** en 2020.",
          "Au Royaume-Uni, l’**Equality Act 2010** regroupe les lois contre les discriminations et protège neuf **protected characteristics** (âge, handicap, sexe, origine ethnique, religion, orientation sexuelle…). L’inclusion passe aussi par l’école, le sport et la culture.",
        ],
        keyPoints: [
          "discrimination = discrimination ; prejudice = préjugé ; racism = racisme.",
          "segregation = ségrégation ; civil rights = droits civiques ; equality = égalité.",
          "to include / inclusion = inclure / inclusion ; to be left out = être exclu.",
          "disability = handicap ; disabled people = personnes handicapées ; accessibility = accessibilité.",
          "affirmative action = discrimination positive ; role model = modèle.",
        ],
        formulas: [
          "Dates : In 1955, Rosa Parks refused to give up her seat… (prétérit).",
          "Conséquence historique : This led to… / As a result, Congress passed…",
          "Bilan présent : Although progress has been made, inequalities still persist.",
        ],
        example: {
          title: "Présenter une figure des droits civiques",
          steps: [
            "Personnage : Rosa Parks (1913-2005).",
            "Fait : In December 1955, she refused to give up her seat to a white passenger on a bus in Montgomery, Alabama.",
            "Conséquence : She was arrested, which sparked the Montgomery Bus Boycott led by Martin Luther King Jr.",
            "Résultat : In 1956, the Supreme Court ruled that segregation on buses was unconstitutional.",
            "Portée : She is often called « the mother of the civil rights movement ».",
          ],
        },
        figure: {
          type: "timeline",
          title: "Repères : droits civiques et inclusion",
          events: [
            { date: "1954", label: "Brown v. Board of Education : la ségrégation scolaire est inconstitutionnelle" },
            { date: "1955", label: "Arrestation de Rosa Parks ; début du Montgomery Bus Boycott" },
            { date: "1963", label: "March on Washington : discours « I Have a Dream »" },
            { date: "1964", label: "Civil Rights Act" },
            { date: "1965", label: "Voting Rights Act" },
            { date: "2010", label: "Equality Act au Royaume-Uni" },
            { date: "2013", label: "Naissance du mouvement Black Lives Matter" },
          ],
        },
        practice: [
          {
            id: "1re-anglais-07-s2-p1",
            prompt: "Which 1954 Supreme Court decision declared school segregation unconstitutional?",
            choices: ["Plessy v. Ferguson", "Brown v. Board of Education", "Roe v. Wade"],
            answer: 1,
            explanation:
              "En **1954**, l’arrêt **Brown v. Board of Education** déclare la ségrégation scolaire inconstitutionnelle. Plessy v. Ferguson (1896) avait au contraire validé la doctrine « separate but equal ».",
          },
          {
            id: "1re-anglais-07-s2-p2",
            prompt: "Which law protected African Americans' right to vote?",
            choices: ["the Civil Rights Act (1964)", "the Equality Act (2010)", "the Voting Rights Act (1965)"],
            answer: 2,
            explanation:
              "Le **Voting Rights Act** de **1965** protège le droit de vote des Afro-Américains. Le Civil Rights Act de 1964 interdit plus largement la discrimination, et l’Equality Act est une loi britannique.",
          },
          {
            id: "1re-anglais-07-s2-p3",
            prompt: "In which city did Rosa Parks refuse to give up her seat in 1955?",
            choices: ["Montgomery", "Birmingham", "Atlanta", "Memphis"],
            answer: 0,
            explanation:
              "Rosa Parks a refusé de céder sa place dans un bus de **Montgomery**, en Alabama, en décembre 1955. Son arrestation a déclenché le **Montgomery Bus Boycott**, mené par Martin Luther King Jr.",
          },
        ],
      },
      {
        title: "Territoire et mémoire",
        body: [
          "L’axe **« Territoire et mémoire »** s’intéresse à la façon dont une nation se souvient de son passé, glorieux ou douloureux, et l’inscrit dans l’espace : **memorials**, statues, musées, noms de rues, commémorations. La mémoire est souvent un **enjeu politique** : quels événements choisit-on de commémorer, et comment ?",
          "Au Royaume-Uni et dans le Commonwealth, le **Remembrance Day** (**11 novembre**) rend hommage aux soldats morts depuis la Première Guerre mondiale ; on porte un **poppy** (coquelicot rouge), en référence au poème **In Flanders Fields** (John McCrae, 1915). À New York, le **National September 11 Memorial** rappelle les attentats du **11 septembre 2001** contre le World Trade Center.",
          "Certaines mémoires sont **conflictuelles**. En **2020**, à **Bristol**, des manifestants ont renversé la statue d’**Edward Colston**, marchand impliqué dans la **traite négrière**, et l’ont jetée dans le port. Aux États-Unis, de nombreux monuments **confédérés** ont été retirés. En Australie, le Premier ministre **Kevin Rudd** a présenté en **2008** des **excuses officielles** (« the National Apology ») aux **Stolen Generations**, enfants aborigènes retirés de force à leur famille.",
          "Le territoire porte aussi une **identité régionale** : l’Écosse, le pays de Galles et l’Irlande du Nord ont chacun leur histoire et leurs symboles. En Irlande du Nord, les **murals** de Belfast témoignent des **Troubles** (conflit des années 1960 à l’**accord du Vendredi saint**, Good Friday Agreement, de **1998**).",
        ],
        keyPoints: [
          "memory = mémoire / souvenir ; to remember / to commemorate = se souvenir / commémorer.",
          "memorial = mémorial ; heritage = patrimoine ; landmark = lieu emblématique.",
          "to pay tribute to = rendre hommage à ; to apologise for = présenter des excuses pour.",
          "slave trade = traite négrière ; colonisation = colonisation ; legacy = héritage.",
          "to tear down / to remove a statue = déboulonner / retirer une statue.",
        ],
        formulas: [
          "Rendre hommage : This memorial pays tribute to those who…",
          "Débattre : Should statues of controversial figures be removed or explained?",
          "Passif : The statue was pulled down / was erected in…",
        ],
        example: {
          title: "Argumenter sur les statues controversées",
          steps: [
            "Fait : In June 2020, protesters pulled down the statue of slave trader Edward Colston in Bristol.",
            "Argument pour le retrait : Some argue that honouring a slave trader in a public space is an insult to the descendants of enslaved people.",
            "Argument contre : Others believe that removing statues erases history instead of teaching it.",
            "Compromis : The statue is now displayed in a museum (the M Shed), with explanations about its history.",
            "Conclusion : This shows that memory is never neutral: it reflects the values of each generation.",
          ],
        },
        practice: [
          {
            id: "1re-anglais-07-s3-p1",
            prompt: "Why do people in Britain wear a poppy around Remembrance Day?",
            choices: [
              "in reference to the poem In Flanders Fields",
              "because it is the national flower of England",
              "to celebrate the Good Friday Agreement",
            ],
            answer: 0,
            explanation:
              "Le **poppy** fait référence au poème **In Flanders Fields** (John McCrae, 1915), où les coquelicots poussent sur les tombes des soldats. Il rend hommage aux soldats morts depuis la Première Guerre mondiale.",
          },
          {
            id: "1re-anglais-07-s3-p2",
            prompt: "Whose statue was pulled down by protesters in Bristol in 2020?",
            choices: ["Winston Churchill", "Edward Colston", "Cecil Rhodes", "Queen Victoria"],
            answer: 1,
            explanation:
              "En juin **2020**, des manifestants ont renversé la statue d’**Edward Colston**, marchand impliqué dans la traite négrière, et l’ont jetée dans le port de Bristol. Elle est aujourd’hui exposée dans un musée avec des explications.",
          },
          {
            id: "1re-anglais-07-s3-p3",
            prompt: "In 2008, the Australian Prime Minister Kevin Rudd apologised to:",
            choices: ["the Windrush generation", "the victims of the Troubles", "Native Americans", "the Stolen Generations"],
            answer: 3,
            explanation:
              "En **2008**, Kevin Rudd a présenté des **excuses officielles** aux **Stolen Generations**, enfants aborigènes retirés de force à leur famille. Ce geste illustre le travail de mémoire d’un territoire.",
          },
        ],
      },
    ],
    homework: [
      {
        id: "1re-anglais-07-hw-1",
        prompt: "In which year was the Good Friday Agreement signed?",
        choices: ["1969", "1998", "2001", "2008"],
        answer: 1,
        explanation:
          "L’**accord du Vendredi saint** (Good Friday Agreement) a été signé en **1998**. Il a mis fin aux **Troubles** en Irlande du Nord, conflit commencé à la fin des années 1960.",
      },
      {
        id: "1re-anglais-07-hw-2",
        prompt: "What does « to pay tribute to » mean?",
        choices: ["rendre hommage à", "payer une taxe à", "présenter des excuses à"],
        answer: 0,
        explanation:
          "**To pay tribute to** signifie **rendre hommage à** : This memorial pays tribute to the victims. Présenter des excuses se dit to apologise for.",
      },
      {
        id: "1re-anglais-07-hw-3",
        prompt: "Which dystopian novel imagines a society in which women are deprived of their rights?",
        choices: ["Uncle Tom's Cabin", "Frankenstein", "The Handmaid's Tale"],
        answer: 2,
        explanation:
          "**The Handmaid’s Tale** (Margaret Atwood, 1985) imagine une société oppressive où les femmes sont privées de leurs droits. C’est un exemple de **dystopia** qui alerte sur des dérives possibles.",
      },
      {
        id: "1re-anglais-07-hw-4",
        prompt: "Complete: « Although progress ___, inequalities still persist. »",
        choices: ["was making", "has made", "makes", "has been made"],
        answer: 3,
        explanation:
          "Progress ne fait pas l’action, il la subit : il faut un **passif** au **present perfect** (has been made), car on fait un bilan au présent. Has made serait actif et n’aurait pas de complément.",
      },
    ],
    exercise: [
      {
        id: "1re-anglais-07-ex-1",
        prompt: "Who wrote Frankenstein (1818)?",
        choices: ["Jane Austen", "Mary Shelley", "Emily Brontë", "Bram Stoker"],
        answer: 1,
        explanation:
          "**Mary Shelley** a publié **Frankenstein; or, The Modern Prometheus** en **1818**. Bram Stoker est l’auteur de Dracula (1897), Emily Brontë de Wuthering Heights (1847).",
      },
      {
        id: "1re-anglais-07-ex-2",
        prompt: "What does « a breakthrough » mean?",
        choices: ["un échec", "une interdiction", "une avancée majeure", "une fracture"],
        answer: 2,
        explanation:
          "**a breakthrough** = **une percée, une avancée majeure** (scientifique, médicale, diplomatique). Exemple : The discovery of penicillin was a major medical breakthrough.",
      },
      {
        id: "1re-anglais-07-ex-3",
        prompt: "In which city did Rosa Parks refuse to give up her bus seat in 1955?",
        choices: ["Atlanta", "Chicago", "Washington, D.C.", "Montgomery"],
        answer: 3,
        explanation:
          "Rosa Parks a été arrêtée à **Montgomery**, en **Alabama**, le 1er décembre **1955**, ce qui a déclenché le boycott des bus de la ville, qui a duré 381 jours.",
      },
      {
        id: "1re-anglais-07-ex-4",
        prompt: "What do British people wear around Remembrance Day?",
        choices: ["a red poppy", "a white rose", "a green ribbon", "a blue cornflower"],
        answer: 0,
        explanation:
          "Au Royaume-Uni, on porte un **coquelicot rouge (poppy)** autour du **11 novembre**, en souvenir des soldats morts au combat. Le symbole vient du poème In Flanders Fields (1915). En France, c’est le bleuet qui joue ce rôle.",
      },
      {
        id: "1re-anglais-07-ex-5",
        prompt: "A « dystopia » is…",
        choices: [
          "an ideal society where everyone is happy.",
          "a frightening imaginary society, often oppressive.",
          "a true story told in a documentary.",
          "a scientific experiment on animals.",
        ],
        answer: 1,
        explanation:
          "Une **dystopia** est une **société imaginaire cauchemardesque**, souvent totalitaire, qui sert à alerter le lecteur. C’est l’inverse de l’**utopia**, société idéale.",
      },
      {
        id: "1re-anglais-07-ex-6",
        prompt: "Translate: « rendre hommage aux victimes ».",
        choices: [
          "to pay tribute to the victims",
          "to give homage the victims",
          "to make honour to the victims",
          "to render the victims",
        ],
        answer: 0,
        explanation:
          "L’expression idiomatique est **to pay tribute to** (rendre hommage à). Les autres propositions sont des calques du français incorrects.",
      },
    ],
    test: [
      {
        id: "1re-anglais-07-ct-1",
        prompt: "What did the Supreme Court decide in Brown v. Board of Education (1954)?",
        choices: [
          "That women had the right to vote.",
          "That slavery was abolished.",
          "That racial segregation in public schools was unconstitutional.",
          "That affirmative action was mandatory.",
        ],
        answer: 2,
        explanation:
          "Par l’arrêt **Brown v. Board of Education** (1954), la Cour suprême a jugé que la **ségrégation dans les écoles publiques** était **inconstitutionnelle**, renversant la doctrine « separate but equal » (Plessy v. Ferguson, 1896). L’esclavage avait été aboli en 1865 (13ᵉ amendement).",
      },
      {
        id: "1re-anglais-07-ct-2",
        prompt: "Why is Uncle Tom's Cabin (1852) often cited in the axis « Fictions et réalités » ?",
        choices: [
          "Because it was the first science-fiction novel.",
          "Because it helped strengthen anti-slavery feelings in the North of the USA.",
          "Because it was banned in Britain.",
          "Because it describes the Second World War.",
        ],
        answer: 1,
        explanation:
          "Le roman d’**Harriet Beecher Stowe** a eu un immense succès et a **renforcé l’opinion abolitionniste** dans le Nord avant la guerre de Sécession : un exemple de fiction qui agit sur la réalité.",
      },
      {
        id: "1re-anglais-07-ct-3",
        prompt: "What was Dolly, born in 1996 at the Roslin Institute in Scotland?",
        choices: [
          "The first robot able to speak.",
          "The first mammal cloned from an adult cell.",
          "The first genetically modified plant.",
          "The first test-tube baby.",
        ],
        answer: 1,
        explanation:
          "La brebis **Dolly** a été le **premier mammifère cloné à partir d’une cellule adulte**. Sa naissance, annoncée en 1997, a relancé le débat éthique sur le clonage humain. Le premier « bébé éprouvette », Louise Brown, est né en 1978.",
      },
      {
        id: "1re-anglais-07-ct-4",
        prompt: "In 2008, the Australian Prime Minister Kevin Rudd apologised to…",
        choices: [
          "British soldiers who fought at Gallipoli.",
          "Irish immigrants.",
          "the Stolen Generations of Aboriginal and Torres Strait Islander children.",
          "Chinese gold miners.",
        ],
        answer: 2,
        explanation:
          "Le 13 février **2008**, **Kevin Rudd** a présenté au Parlement les **excuses officielles** de l’Australie aux **Stolen Generations**, ces enfants aborigènes et insulaires du détroit de Torres retirés de force à leurs familles entre la fin du XIXᵉ siècle et les années 1970.",
      },
      {
        id: "1re-anglais-07-ct-5",
        prompt: "Which agreement, signed in 1998, largely ended the conflict known as « the Troubles » in Northern Ireland?",
        choices: [
          "The Treaty of Versailles",
          "The Act of Union",
          "The Magna Carta",
          "The Good Friday Agreement",
        ],
        answer: 3,
        explanation:
          "L’**accord du Vendredi saint** (Good Friday Agreement, ou Belfast Agreement), signé le 10 avril **1998**, a mis fin pour l’essentiel aux **Troubles**, conflit entre unionistes et républicains qui a fait plus de 3 500 morts.",
      },
      {
        id: "1re-anglais-07-ct-6",
        prompt: "Choose the best sentence to introduce a nuanced argument about AI.",
        choices: [
          "AI is the worst invention ever and must be stopped.",
          "AI is AI and it is everywhere.",
          "While AI can save lives in medicine, it also raises ethical issues about jobs and privacy.",
          "AI will certainly replace every human being by 2030.",
        ],
        answer: 2,
        explanation:
          "La bonne réponse **pèse le pour et le contre** grâce à **while** (concession) et présente des enjeux concrets (médecine, emploi, vie privée). Les autres phrases sont excessives, vides ou non fondées.",
      },
      {
        id: "1re-anglais-07-ct-7",
        prompt: "Whose statue was pulled down by protesters in Bristol in 2020?",
        choices: [
          "Winston Churchill",
          "Edward Colston, a slave trader",
          "Queen Victoria",
          "Cecil Rhodes",
        ],
        answer: 1,
        explanation:
          "Le 7 juin **2020**, lors d’une manifestation Black Lives Matter, la statue d’**Edward Colston**, marchand du XVIIᵉ siècle impliqué dans la **traite négrière**, a été renversée et jetée dans le port de Bristol. Elle est aujourd’hui exposée au musée M Shed.",
      },
      {
        id: "1re-anglais-07-ct-8",
        prompt: "Which law, passed in 1964, outlawed discrimination based on race, colour, religion, sex or national origin in the USA?",
        choices: [
          "The Voting Rights Act",
          "The Emancipation Proclamation",
          "The Bill of Rights",
          "The Civil Rights Act",
        ],
        answer: 3,
        explanation:
          "Le **Civil Rights Act** de **1964**, signé par le président Lyndon B. Johnson, interdit la discrimination fondée sur la race, la couleur, la religion, le sexe ou l’origine nationale. Le Voting Rights Act date de 1965, la Proclamation d’émancipation de 1863, le Bill of Rights de 1791.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Méthode
  // ─────────────────────────────────────────────────────────────
  {
    id: "1re-anglais-08",
    title: "Méthode : compréhension et expression",
    summary:
      "Réussir les épreuves d’anglais suppose une méthode rigoureuse : repérer et inférer pour comprendre un document, puis rendre compte en français et argumenter en anglais de façon structurée.",
    objectives: [
      "Je sais aborder un document écrit ou oral en repérant sa nature, sa source et les informations essentielles.",
      "Je sais inférer le sens implicite d’un document (ton, point de vue, intention de l’auteur).",
      "Je sais rédiger un compte rendu en français fidèle, organisé et sans paraphrase.",
      "Je sais construire un essai argumenté en anglais avec introduction, développement et conclusion.",
    ],
    sections: [
      {
        title: "Comprendre un document : repérer puis inférer",
        body: [
          "La compréhension commence par l’**identification du document** : sa **nature** (article de presse, extrait de roman, discours, interview, podcast, publicité), sa **source** (journal, auteur, date) et son **titre**. Ces indices permettent de formuler des **hypothèses** sur le thème et le point de vue avant même de lire le détail. Par exemple, un éditorial du Guardian ne présentera pas les faits comme un article d’agence de presse.",
          "Vient ensuite le **repérage** : relever les éléments explicites qui répondent aux questions **Who? What? Where? When? Why? How?** (les « 5 W + H »). On repère les **noms propres**, les **chiffres**, les **dates**, les mots qui se répètent et les **mots de liaison** qui révèlent la structure (however, as a result). À l’oral, on note les mots accentués et on ne cherche pas à tout comprendre dès la première écoute.",
          "L’**inférence** consiste à comprendre ce qui n’est pas dit explicitement : le **ton** (ironique, critique, enthousiaste, nostalgique), l’**intention** de l’auteur (informer, dénoncer, convaincre, divertir), les **sentiments** des personnages. On s’appuie sur des indices : adjectifs évaluatifs, modaux, ponctuation, choix du registre, contrastes. Toute inférence doit être **justifiée par le texte**.",
          "Pour les **mots inconnus**, on utilise le **contexte**, les **mots transparents** (democracy, citizen) en se méfiant des **faux amis** (actually = en fait, eventually = finalement, library = bibliothèque, sensible = raisonnable), et la **formation des mots** (préfixes un-, mis-, over- ; suffixes -less = sans, -ful = plein de, -ness = nom abstrait).",
        ],
        keyPoints: [
          "Identifier : nature, source, date, titre, auteur.",
          "Repérer : Who? What? Where? When? Why? How?",
          "Inférer : ton, intention, point de vue, sentiments — toujours justifiés.",
          "Faux amis : actually (en fait), eventually (finalement), sensible (raisonnable), library (bibliothèque).",
          "Suffixes : -less (sans), -ful (plein de), -ness / -ity (nom abstrait).",
        ],
        formulas: [
          "Ton : The tone is ironic / critical / humorous / bitter / nostalgic.",
          "Intention : The author aims to denounce / to raise awareness of / to warn against…",
          "Justifier : as shown by… / as the word « … » suggests…",
        ],
        example: {
          title: "Inférer le ton d’une phrase",
          steps: [
            "Extrait : « Another brilliant idea from our wonderful government: closing libraries to save money. »",
            "Repérage : brilliant, wonderful sont des adjectifs très positifs.",
            "Contraste : ils sont associés à une mesure présentée comme absurde (fermer des bibliothèques).",
            "Inférence : le décalage révèle un ton ironique ; l’auteur critique en réalité le gouvernement.",
            "Formulation : The tone is ironic: the author pretends to praise the government but actually criticises its decision.",
          ],
        },
        figure: {
          type: "flow",
          title: "Méthode : comprendre un document",
          steps: [
            { label: "Identifier", detail: "Nature, source, date, titre, auteur." },
            { label: "Formuler des hypothèses", detail: "Thème probable et point de vue attendu." },
            { label: "Repérer", detail: "Who? What? Where? When? Why? How? Noms, chiffres, connecteurs." },
            { label: "Inférer", detail: "Ton, intention de l’auteur, sentiments des personnages." },
            { label: "Justifier", detail: "Appuyer chaque inférence sur un indice précis du texte." },
          ],
        },
        practice: [
          {
            id: "1re-anglais-08-s1-p1",
            prompt: "What does « actually » mean?",
            choices: ["actuellement", "en fait", "finalement", "sensiblement"],
            answer: 1,
            explanation:
              "**Actually** est un **faux ami** : il signifie **en fait**, et non « actuellement » (currently, nowadays). Il faut s’en méfier en compréhension comme en compte rendu.",
          },
          {
            id: "1re-anglais-08-s1-p2",
            prompt: "« Another brilliant idea from our wonderful government: closing libraries to save money. » The tone is:",
            choices: ["enthusiastic", "neutral", "ironic"],
            answer: 2,
            explanation:
              "Les adjectifs très positifs (brilliant, wonderful) contrastent avec une mesure présentée comme absurde. Ce décalage révèle un **ton ironique** : l’auteur critique en réalité le gouvernement.",
          },
          {
            id: "1re-anglais-08-s1-p3",
            prompt: "In « hopeless », what does the suffix -less mean?",
            choices: ["sans", "plein de", "un peu"],
            answer: 0,
            explanation:
              "Le suffixe **-less** signifie **sans** : hopeless = sans espoir. À l’inverse, **-ful** signifie « plein de » (hopeful = plein d’espoir).",
          },
        ],
      },
      {
        title: "Rendre compte en français",
        body: [
          "Le **compte rendu en français** évalue la compréhension d’un document en anglais. Il ne s’agit **ni de traduire ni de paraphraser** ligne à ligne, mais de **restituer l’essentiel** de façon organisée, dans un français correct, comme si l’on expliquait le document à quelqu’un qui ne l’a pas lu.",
          "Méthode : commencer par **présenter le document** (nature, source, date, thème général), puis restituer les **informations principales** dans un ordre logique (pas forcément celui du texte) en regroupant les idées, et terminer par le **point de vue** ou l’**intention** de l’auteur si on l’a compris. On peut citer très brièvement un mot anglais entre guillemets s’il est significatif.",
          "Erreurs à éviter : ajouter des **informations personnelles** ou des jugements qui ne sont pas dans le document, recopier des phrases traduites mot à mot (calques), oublier les **chiffres** et les **noms** importants, ou rédiger une liste décousue. Il faut des **phrases complètes** et des **connecteurs** (d’abord, ensuite, cependant, ainsi).",
          "Le compte rendu doit être **fidèle** et **précis** : un détail mal compris (une négation oubliée, un modal mal interprété comme might = possibilité) peut inverser le sens. Relire en vérifiant que chaque affirmation peut être justifiée par le document.",
        ],
        keyPoints: [
          "Compte rendu ≠ traduction ≠ paraphrase : on reformule l’essentiel.",
          "Structure : présentation du document → informations principales → point de vue de l’auteur.",
          "Aucun avis personnel, aucune information extérieure.",
          "Conserver noms, chiffres, dates ; vérifier négations et modaux.",
        ],
        formulas: [
          "Ouverture : « Ce document est un article publié dans … le … ; il traite de … »",
          "Restitution : « L’auteur explique que… / rapporte que… / souligne que… »",
          "Point de vue : « L’auteur semble dénoncer… / se montre critique à l’égard de… »",
        ],
        example: {
          title: "Rédiger l’ouverture d’un compte rendu",
          steps: [
            "Document : un article de The Guardian (2023) sur la semaine de quatre jours au Royaume-Uni.",
            "Présentation : « Cet article, publié dans le quotidien britannique The Guardian en 2023, porte sur l’expérimentation de la semaine de quatre jours au Royaume-Uni. »",
            "Information principale : « Il indique que la grande majorité des entreprises participantes ont choisi de prolonger l’expérience. »",
            "Point de vue : « Le journaliste présente cette mesure de façon plutôt favorable, tout en rapportant les réserves de certains employeurs. »",
            "Vérification : aucune opinion personnelle n’a été ajoutée.",
          ],
        },
        figure: {
          type: "flow",
          title: "Méthode du compte rendu en français",
          steps: [
            { label: "Comprendre", detail: "Repérer les informations essentielles et l’intention de l’auteur." },
            { label: "Présenter le document", detail: "Nature, source, date, thème général." },
            { label: "Restituer l’essentiel", detail: "Idées regroupées dans un ordre logique, noms et chiffres conservés." },
            { label: "Point de vue de l’auteur", detail: "Intention ou ton, sans avis personnel." },
            { label: "Relire", detail: "Fidélité au texte : négations, modaux, chiffres." },
          ],
        },
        practice: [
          {
            id: "1re-anglais-08-s2-p1",
            prompt: "What is a « compte rendu » in the English exam?",
            choices: [
              "a word-for-word translation of the text",
              "a structured summary in French of the essential information",
              "a personal commentary on the topic",
            ],
            answer: 1,
            explanation:
              "Le compte rendu **restitue l’essentiel** du document en français, de façon organisée. Ce n’est **ni une traduction ni une paraphrase**, et il ne contient aucun avis personnel.",
          },
          {
            id: "1re-anglais-08-s2-p2",
            prompt: "Which element must **not** appear in a compte rendu?",
            choices: [
              "the nature and source of the document",
              "the author's point of view",
              "your personal opinion",
              "important figures and dates",
            ],
            answer: 2,
            explanation:
              "Le compte rendu doit rester **fidèle** au document : on n’y ajoute **aucune opinion personnelle** ni information extérieure. En revanche, la source, le point de vue de l’auteur, les chiffres et les dates sont attendus.",
          },
          {
            id: "1re-anglais-08-s2-p3",
            prompt: "The text says: « The project might be abandoned. » Which French rendering is faithful?",
            choices: ["Le projet pourrait être abandonné.", "Le projet sera abandonné.", "Le projet a été abandonné."],
            answer: 0,
            explanation:
              "**Might** exprime une simple **possibilité** : il faut la conserver (« pourrait »). Traduire par un futur certain ou un passé transformerait le sens du document.",
          },
        ],
      },
      {
        title: "L’essai argumenté en anglais",
        body: [
          "L’**expression écrite** demande souvent un **essai argumenté** (essay) à partir d’une question : « Do you think that social media are a threat to democracy? » Avant d’écrire, il faut **analyser la question** (mots-clés, type de réponse attendue), puis faire un **brouillon** avec deux ou trois idées et des **exemples précis** tirés des axes étudiés.",
          "L’**introduction** comporte une **accroche** (hook : chiffre, citation, fait d’actualité), une **reformulation de la problématique** et l’**annonce du plan**. Le **développement** est organisé en **paragraphes** : une idée par paragraphe, introduite par une **topic sentence**, développée, illustrée par un exemple, puis reliée à la question. La **conclusion** répond clairement à la question et peut s’ouvrir sur une perspective plus large.",
          "Le plan le plus courant est **dialectique** : arguments pour (On the one hand…), arguments contre (On the other hand…), puis conclusion nuancée. On peut aussi adopter un plan **thématique** si la question le permet. Il faut varier les **connecteurs** et les **structures** (relatives, passif, conditionnel, inversions) pour montrer la richesse de la langue.",
          "Les correcteurs valorisent la **pertinence** des idées, la **cohérence** de l’argumentation et la **correction** de la langue (temps, accords, prépositions, ordre des mots). On termine toujours par une **relecture ciblée** : -s de la 3ᵉ personne, prétérits irréguliers, place des adjectifs, absence de -s aux adjectifs (people are different, pas *differents).",
        ],
        keyPoints: [
          "Introduction : hook + problématique + annonce du plan.",
          "Paragraphe : topic sentence → explication → exemple → lien avec la question.",
          "Conclusion : réponse claire + ouverture.",
          "Connecteurs : firstly, moreover, however, therefore, to sum up.",
          "Relecture : -s 3ᵉ personne, verbes irréguliers, adjectifs invariables.",
        ],
        formulas: [
          "Hook : According to a recent survey, … / « … », as … once said.",
          "Problématique : This raises the question of whether…",
          "Annonce : First, we will see… ; then, we will examine…",
          "Conclusion : All things considered, I believe that… / To conclude, …",
        ],
        example: {
          title: "Rédiger une introduction d’essai",
          steps: [
            "Sujet : « Should young people be allowed to vote at 16? »",
            "Accroche : In Scotland, 16-year-olds have been allowed to vote in Scottish Parliament and local elections since 2015.",
            "Problématique : This raises the question of whether teenagers are mature enough to take part in democratic life.",
            "Annonce du plan : First, we will examine the arguments in favour of lowering the voting age; then, we will consider the risks it may involve.",
            "Vérification : la question est reformulée, le plan est annoncé, aucune réponse définitive n’est encore donnée.",
          ],
        },
        figure: {
          type: "flow",
          title: "Méthode de l’essai argumenté",
          steps: [
            { label: "Analyser la question", detail: "Mots-clés et type de réponse attendue." },
            { label: "Brouillon", detail: "Deux ou trois idées, exemples précis tirés des axes." },
            { label: "Introduction", detail: "Hook, problématique, annonce du plan." },
            { label: "Développement", detail: "Topic sentence → explication → exemple → lien avec la question." },
            { label: "Conclusion", detail: "Réponse claire et ouverture." },
            { label: "Relecture ciblée", detail: "-s de la 3ᵉ personne, verbes irréguliers, adjectifs invariables." },
          ],
        },
        practice: [
          {
            id: "1re-anglais-08-s3-p1",
            prompt: "What are the three parts of an essay introduction?",
            choices: ["summary, opinion, conclusion", "title, examples, quotation", "hook, problem statement, outline"],
            answer: 2,
            explanation:
              "L’introduction comporte une **accroche** (hook), la **problématique** reformulée et l’**annonce du plan**. Elle ne donne pas encore de réponse définitive à la question.",
          },
          {
            id: "1re-anglais-08-s3-p2",
            prompt: "What is a « topic sentence »?",
            choices: [
              "the last sentence of the essay",
              "the sentence that introduces the main idea of a paragraph",
              "a quotation used as a hook",
              "the title of the essay",
            ],
            answer: 1,
            explanation:
              "La **topic sentence** ouvre un paragraphe et en annonce l’**idée principale**. Elle est ensuite développée, illustrée par un exemple et reliée à la question.",
          },
          {
            id: "1re-anglais-08-s3-p3",
            prompt: "Which sentence is correct?",
            choices: ["People are different.", "People are differents.", "People is different."],
            answer: 0,
            explanation:
              "En anglais, les **adjectifs sont invariables** : ils ne prennent jamais de -s. De plus, people est un pluriel et s’accorde avec are.",
          },
        ],
      },
    ],
    homework: [
      {
        id: "1re-anglais-08-hw-1",
        prompt: "What does « eventually » mean?",
        choices: ["éventuellement", "finalement", "actuellement"],
        answer: 1,
        explanation:
          "**Eventually** est un **faux ami** : il signifie **finalement**, au bout du compte. « Éventuellement » se traduit plutôt par possibly.",
      },
      {
        id: "1re-anglais-08-hw-2",
        prompt: "Which type of essay plan presents arguments for, then arguments against, then a nuanced conclusion?",
        choices: ["thematic", "chronological", "dialectical"],
        answer: 2,
        explanation:
          "Le plan **dialectique** oppose les arguments pour (On the one hand…) et contre (On the other hand…) avant une conclusion nuancée. C’est le plan le plus courant dans l’essai argumenté.",
      },
      {
        id: "1re-anglais-08-hw-3",
        prompt: "Where would you typically write « This raises the question of whether… »?",
        choices: [
          "in the introduction, to state the problem",
          "in the conclusion, to add a new example",
          "in a compte rendu in French",
        ],
        answer: 0,
        explanation:
          "Cette formule sert à **formuler la problématique** dans l’**introduction** de l’essai. Le compte rendu, lui, est rédigé en français, et la conclusion n’introduit pas de nouvel exemple.",
      },
      {
        id: "1re-anglais-08-hw-4",
        prompt: "Which question words guide the « repérage » stage when you study a document?",
        choices: [
          "If, unless, although, whereas",
          "Must, can, may, should",
          "However, therefore, moreover, yet",
          "Who, What, Where, When, Why, How",
        ],
        answer: 3,
        explanation:
          "Le repérage s’appuie sur les **5 W + H** : Who? What? Where? When? Why? How? Ces questions permettent de relever les informations explicites essentielles du document.",
      },
    ],
    exercise: [
      {
        id: "1re-anglais-08-ex-1",
        prompt: "What does « actually » mean?",
        choices: ["actuellement", "en fait", "activement", "finalement"],
        answer: 1,
        explanation:
          "**actually** est un **faux ami** : il signifie **en fait, en réalité**. « Actuellement » se dit currently ou at present. « Finalement » se dit eventually ou finally.",
      },
      {
        id: "1re-anglais-08-ex-2",
        prompt: "Which of these should NOT appear in a « compte rendu en français » ?",
        choices: [
          "The nature and source of the document.",
          "The main ideas of the document.",
          "Your personal opinion on the topic.",
          "The author's point of view.",
        ],
        answer: 2,
        explanation:
          "Le compte rendu doit rester **fidèle au document** : on présente le document, ses idées principales et le point de vue de l’auteur, mais **jamais son avis personnel**, qui relève de l’expression écrite.",
      },
      {
        id: "1re-anglais-08-ex-3",
        prompt: "What is a « topic sentence » ?",
        choices: [
          "The title of the essay.",
          "The last sentence of the conclusion.",
          "A quotation from a famous author.",
          "The sentence that states the main idea of a paragraph.",
        ],
        answer: 3,
        explanation:
          "La **topic sentence** est la **phrase qui annonce l’idée principale d’un paragraphe**, généralement en première position. Le reste du paragraphe la développe et l’illustre.",
      },
      {
        id: "1re-anglais-08-ex-4",
        prompt: "« Careless » means…",
        choices: ["sans soin, négligent", "très prudent", "plein d'attention", "sans voiture"],
        answer: 0,
        explanation:
          "Le suffixe **-less** signifie « **sans** » : care (soin) + less = **careless** (négligent, imprudent). Son contraire est **careful** (-ful = plein de).",
      },
      {
        id: "1re-anglais-08-ex-5",
        prompt: "Which question helps you identify the context of a document?",
        choices: [
          "How many words does it contain?",
          "Who wrote it, when, and for which publication?",
          "Which words are difficult?",
          "Is it written in a big font?",
        ],
        answer: 1,
        explanation:
          "Identifier l’**auteur**, la **date** et la **source** permet de comprendre le **contexte** et de formuler des hypothèses sur le point de vue. Le nombre de mots ou la typographie n’aident pas à la compréhension.",
      },
      {
        id: "1re-anglais-08-ex-6",
        prompt: "Which phrase is the best « hook » to start an essay on climate change?",
        choices: [
          "In this essay I will talk about climate change.",
          "Climate change is a subject.",
          "According to the UN, the last decade was the warmest on record.",
          "I don't know much about climate change.",
        ],
        answer: 2,
        explanation:
          "Une bonne **accroche** capte l’attention avec un **fait précis, un chiffre ou une citation**. Annoncer « I will talk about » est maladroit, et les autres propositions n’apportent rien.",
      },
    ],
    test: [
      {
        id: "1re-anglais-08-ct-1",
        prompt: "« Oh great, another Monday morning stuck in traffic. » What is the tone?",
        choices: ["enthusiastic", "sarcastic", "neutral", "nostalgic"],
        answer: 1,
        explanation:
          "« Oh great » est en **décalage** avec la situation désagréable (un lundi dans les embouteillages) : c’est du **sarcasme**. Il faut inférer le sens réel à partir du contraste entre les mots et la situation.",
      },
      {
        id: "1re-anglais-08-ct-2",
        prompt: "« Eventually, the protesters went home. » In a compte rendu, how should you render « eventually » ?",
        choices: ["éventuellement", "peut-être", "finalement", "immédiatement"],
        answer: 2,
        explanation:
          "**eventually** est un **faux ami** : il signifie **finalement, au bout du compte**. « Éventuellement » se traduit par possibly. Une erreur ici changerait le sens du compte rendu.",
      },
      {
        id: "1re-anglais-08-ct-3",
        prompt: "A text says: « The new policy might reduce poverty. » Which French rendering is faithful?",
        choices: [
          "La nouvelle politique va réduire la pauvreté.",
          "La nouvelle politique a réduit la pauvreté.",
          "La nouvelle politique doit réduire la pauvreté.",
          "La nouvelle politique pourrait réduire la pauvreté.",
        ],
        answer: 3,
        explanation:
          "**might** exprime une **possibilité** assez faible, pas une certitude : « pourrait ». Traduire par « va réduire » ou « a réduit » transforme une hypothèse en fait, ce qui est un contresens sanctionné.",
      },
      {
        id: "1re-anglais-08-ct-4",
        prompt: "Which sentence is grammatically correct in an essay?",
        choices: [
          "Young people are more and more connected to social networks.",
          "The young peoples is more and more connected.",
          "Youngs are more and more connecteds to social networks.",
          "The young people are differents from their parents.",
        ],
        answer: 0,
        explanation:
          "people est déjà un **pluriel** (are), les **adjectifs sont invariables** (pas de -s : different, connected) et young ne s’emploie pas seul au pluriel (*youngs). Seule la première phrase est correcte.",
      },
      {
        id: "1re-anglais-08-ct-5",
        prompt: "What is the best structure for a dialectical essay?",
        choices: [
          "A list of examples without any conclusion.",
          "Introduction, arguments for, arguments against, nuanced conclusion.",
          "Only arguments for, then a long quotation.",
          "Conclusion first, then the introduction.",
        ],
        answer: 1,
        explanation:
          "Le plan **dialectique** examine les **arguments pour**, puis les **arguments contre**, avant une **conclusion nuancée** qui répond à la question. Il est adapté aux sujets du type « Do you think that…? ».",
      },
      {
        id: "1re-anglais-08-ct-6",
        prompt: "A journalist writes: « Critics claim the plan is too expensive. » What should you write in your compte rendu?",
        choices: [
          "Le plan est trop cher.",
          "Le journaliste pense que le plan est trop cher.",
          "Je trouve que le plan est trop cher.",
          "Selon ses détracteurs, le plan serait trop coûteux.",
        ],
        answer: 3,
        explanation:
          "Le journaliste **rapporte** l’opinion d’autres personnes (critics claim) : il ne l’assume pas. Il faut donc attribuer l’idée à ses **détracteurs**, avec un conditionnel de distance (« serait »). Les autres réponses présentent l’opinion comme un fait ou comme celle du journaliste ou de l’élève.",
      },
      {
        id: "1re-anglais-08-ct-7",
        prompt: "Which sentence best announces the plan of an essay?",
        choices: [
          "First, we will examine the benefits of tourism; then, we will focus on its negative effects on local communities.",
          "Tourism, I will speak about it now.",
          "There are many things to say, so let's start.",
          "In conclusion, tourism has advantages and drawbacks.",
        ],
        answer: 0,
        explanation:
          "L’**annonce du plan** présente clairement les **deux étapes** du raisonnement avec des connecteurs (First… then…). La dernière proposition relève de la conclusion, les deux autres sont trop vagues ou incorrectes.",
      },
      {
        id: "1re-anglais-08-ct-8",
        prompt: "During a listening test, what is the most effective strategy at the first listening?",
        choices: [
          "Writing down every single word you hear.",
          "Stopping as soon as you don't understand a word.",
          "Identifying the type of document, the speakers and the general topic.",
          "Translating everything into French in your head.",
        ],
        answer: 2,
        explanation:
          "À la **première écoute**, on vise la **compréhension globale** : type de document, nombre et identité des locuteurs, thème général. Les détails (chiffres, arguments) sont repérés lors des écoutes suivantes. Tout noter ou tout traduire empêche de suivre le fil.",
      },
    ],
  },
];

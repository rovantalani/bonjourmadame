import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarA2: GrammarLesson[] = [
  {
    "unit": 1,
    "id": "en-a2-past-simple-negatives-questions",
    "title": "Past simple : négations et questions",
    "level": "A2",
    "description": "Raconter un fait terminé et poser des questions sur le passé.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Did et didn’t",
        "explanation": "Pour interroger ou nier un verbe ordinaire au passé, utilisez did / did not (didn’t) suivi de la base verbale. Le passé est déjà indiqué par did : on ne garde donc pas -ed ni la forme irrégulière après cet auxiliaire.",
        "examples": [
          {
            "english": "Did you enjoy the concert?",
            "french": "As-tu aimé le concert ?"
          },
          {
            "english": "I didn’t finish the book.",
            "french": "Je n’ai pas terminé le livre."
          },
          {
            "english": "She didn’t go to work yesterday.",
            "french": "Elle n’est pas allée travailler hier."
          }
        ]
      },
      {
        "title": "Questions précises",
        "explanation": "Placez le mot interrogatif avant did, puis le sujet et la base verbale. À la forme affirmative, on conserve la forme passée du verbe. Avec be, on utilise was/were et non did.",
        "examples": [
          {
            "english": "Where did they meet?",
            "french": "Où se sont-ils rencontrés ?"
          },
          {
            "english": "We met at the library.",
            "french": "Nous nous sommes rencontrés à la bibliothèque."
          },
          {
            "english": "Was the shop open?",
            "french": "Le magasin était-il ouvert ?"
          }
        ]
      },
      {
        "title": "Verbe : get",
        "explanation": "Get est polysémique : get home (arriver chez soi), get a message (recevoir un message), get tired (se fatiguer). La traduction dépend du complément.",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "___ you call Eva last night?",
        "answer": "Did",
        "hint": "Question au passé : Did + sujet + base verbale."
      },
      {
        "sentence": "He ___ visit us on Tuesday.",
        "answer": "didn’t",
        "hint": "La négation courante est didn’t."
      },
      {
        "sentence": "Where did Clara ___ the letter?",
        "answer": "find",
        "hint": "Après did, la base est find."
      },
      {
        "sentence": "They ___ (not / stay) at the hotel.",
        "answer": "didn’t stay",
        "hint": "Didn’t + stay, sans -ed."
      },
      {
        "sentence": "___ she late for the interview?",
        "answer": "Was",
        "hint": "Be au passé fait l’inversion directement."
      }
    ]
  },
  {
    "unit": 1,
    "id": "en-a2-irregular-past-verbs",
    "title": "Past simple : verbes irréguliers courants",
    "level": "A2",
    "description": "Décrire une suite d’événements passés.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Des formes à mémoriser",
        "explanation": "Les verbes irréguliers ne prennent pas tous -ed. Apprenez-les avec un exemple et regroupez les formes utiles, par exemple get/got, make/made, take/took, give/gave, buy/bought.",
        "examples": [
          {
            "english": "I bought a ticket on Monday.",
            "french": "J’ai acheté un billet lundi."
          },
          {
            "english": "She took the wrong bus.",
            "french": "Elle a pris le mauvais bus."
          },
          {
            "english": "We made dinner together.",
            "french": "Nous avons préparé le dîner ensemble."
          }
        ]
      },
      {
        "title": "Affirmation et retour à la base",
        "explanation": "Dans une phrase affirmative, utilisez la forme passée. Dans une question ou une négation avec did, utilisez la base verbale, même si le verbe est irrégulier.",
        "examples": [
          {
            "english": "He found his keys.",
            "french": "Il a retrouvé ses clés."
          },
          {
            "english": "Did he find his keys?",
            "french": "A-t-il retrouvé ses clés ?"
          },
          {
            "english": "They didn’t buy anything.",
            "french": "Ils n’ont rien acheté."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Yesterday we ___ (make) a cake.",
        "answer": "made",
        "hint": "Make devient made."
      },
      {
        "sentence": "She ___ (take) the train on Friday.",
        "answer": "took",
        "hint": "Take devient took."
      },
      {
        "sentence": "Did you ___ (buy) the tickets?",
        "answer": "buy",
        "hint": "Base après did."
      },
      {
        "sentence": "My cousin ___ (give) me a map.",
        "answer": "gave",
        "hint": "Give devient gave."
      },
      {
        "sentence": "I ___ (find) the museum easily.",
        "answer": "found",
        "hint": "Find devient found."
      }
    ]
  },
  {
    "unit": 1,
    "id": "en-a2-object-possessive-pronouns",
    "title": "Pronoms compléments et possessifs",
    "level": "A2",
    "description": "Identifier le propriétaire et éviter les répétitions.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Me, him, her, us, them",
        "explanation": "Un pronom complément vient après un verbe ou une préposition : tell me, help her, come with us. Il ne faut pas confondre he (sujet) et him (complément).",
        "examples": [
          {
            "english": "Please call her tomorrow.",
            "french": "Appelle-la demain, s’il te plaît."
          },
          {
            "english": "They invited us to dinner.",
            "french": "Ils nous ont invités à dîner."
          },
          {
            "english": "I sent the photo to him.",
            "french": "Je lui ai envoyé la photo."
          }
        ]
      },
      {
        "title": "Mine, yours, hers, ours",
        "explanation": "Les pronoms possessifs remplacent un groupe nominal : my bag → mine ; their house → theirs. Contrairement aux adjectifs possessifs, ils ne précèdent pas de nom.",
        "examples": [
          {
            "english": "This jacket is mine.",
            "french": "Cette veste est à moi."
          },
          {
            "english": "The red tickets are theirs.",
            "french": "Les billets rouges sont les leurs."
          },
          {
            "english": "Is this notebook yours?",
            "french": "Ce cahier est-il à toi ?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Please wait for ___. (nous)",
        "answer": "us",
        "hint": "Après for : pronom complément."
      },
      {
        "sentence": "The bicycle is ___. (à elle)",
        "answer": "hers",
        "hint": "Hers remplace her bicycle."
      },
      {
        "sentence": "I spoke to ___. (lui)",
        "answer": "him",
        "hint": "Après to, pronom complément."
      },
      {
        "sentence": "That blue coat is ___. (à eux)",
        "answer": "theirs",
        "hint": "Possessif autonome."
      },
      {
        "sentence": "Could you help ___? (moi)",
        "answer": "me",
        "hint": "Me est complément."
      }
    ]
  },
  {
    "unit": 2,
    "id": "en-a2-past-continuous",
    "title": "Past continuous : action en cours dans le passé",
    "level": "A2",
    "description": "Décrire le décor d’un événement passé.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Was / were + -ing",
        "explanation": "Le past continuous présente une action en cours à un moment précis du passé : was/were + verbe en -ing. Il sert souvent à installer le décor avant un événement.",
        "examples": [
          {
            "english": "I was reading at nine last night.",
            "french": "Je lisais hier soir à neuf heures."
          },
          {
            "english": "They were waiting outside.",
            "french": "Ils attendaient dehors."
          },
          {
            "english": "She wasn’t sleeping.",
            "french": "Elle ne dormait pas."
          }
        ]
      },
      {
        "title": "Différence avec le past simple",
        "explanation": "Le past simple présente l’événement complet; le past continuous présente l’action qui se déroulait. On peut combiner les deux pour raconter une interruption.",
        "examples": [
          {
            "english": "The phone rang while I was cooking.",
            "french": "Le téléphone a sonné pendant que je cuisinais."
          },
          {
            "english": "We were walking when the storm started.",
            "french": "Nous marchions quand l’orage a commencé."
          }
        ]
      },
      {
        "title": "Verbe : take",
        "explanation": "Take a train, take a photo, take a break sont des expressions fréquentes. Took est le past simple; taken est le participe passé (présenté au niveau A2).",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "At eight, I ___ (watch) a film.",
        "answer": "was watching",
        "hint": "I prend was."
      },
      {
        "sentence": "They ___ (wait) at the gate.",
        "answer": "were waiting",
        "hint": "They prend were."
      },
      {
        "sentence": "She ___ (not / listen).",
        "answer": "wasn’t listening",
        "hint": "Wasn’t + -ing."
      },
      {
        "sentence": "What ___ you doing at noon?",
        "answer": "were",
        "hint": "Were you doing ?"
      },
      {
        "sentence": "The children ___ (play) outside.",
        "answer": "were playing",
        "hint": "Children est pluriel."
      }
    ]
  },
  {
    "unit": 2,
    "id": "en-a2-when-while-sequencing",
    "title": "When, while et enchaînement du récit",
    "level": "A2",
    "description": "Relier des actions simultanées ou successives.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "When et while",
        "explanation": "While introduit généralement une action qui dure; when peut introduire un événement ponctuel. Les deux peuvent être suivis de constructions différentes selon le sens : ne mémorisez pas une règle absolue.",
        "examples": [
          {
            "english": "While I was checking the map, Ben called.",
            "french": "Pendant que je regardais la carte, Ben a appelé."
          },
          {
            "english": "I was leaving when the rain began.",
            "french": "Je partais quand la pluie a commencé."
          }
        ]
      },
      {
        "title": "Raconter dans l’ordre",
        "explanation": "First, then, after that et finally organisent un récit. Suddenly souligne un événement inattendu; because explique sa cause.",
        "examples": [
          {
            "english": "First we checked the address.",
            "french": "Nous avons d’abord vérifié l’adresse."
          },
          {
            "english": "Then we took a taxi.",
            "french": "Puis nous avons pris un taxi."
          },
          {
            "english": "Finally, we reached the hotel.",
            "french": "Enfin, nous sommes arrivés à l’hôtel."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "I was studying ___ the alarm rang.",
        "answer": "when",
        "hint": "L’alarme interrompt l’action en cours."
      },
      {
        "sentence": "___ I was driving, my sister read the map.",
        "answer": "While",
        "hint": "Deux actions se déroulent en même temps."
      },
      {
        "sentence": "First we bought tickets. ___, we entered the station.",
        "answer": "Then",
        "hint": "Étape suivante."
      },
      {
        "sentence": "The bus was late ___ there was heavy traffic.",
        "answer": "because",
        "hint": "Cause."
      },
      {
        "sentence": "___, we arrived home safely.",
        "answer": "Finally",
        "hint": "Dernière étape du récit."
      }
    ]
  },
  {
    "unit": 2,
    "id": "en-a2-could-ability-polite-requests",
    "title": "Could : capacité passée et demande polie",
    "level": "A2",
    "description": "Exprimer ce qu’on pouvait faire et demander de l’aide.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Capacité passée",
        "explanation": "Could indique une capacité générale dans le passé. Pour une réussite ponctuelle, on dit souvent managed to ou was able to; au niveau A2, retenez surtout la différence entre capacité et résultat.",
        "examples": [
          {
            "english": "My grandfather could swim very well.",
            "french": "Mon grand-père savait très bien nager."
          },
          {
            "english": "I couldn’t read the sign.",
            "french": "Je n’arrivais pas à lire le panneau."
          }
        ]
      },
      {
        "title": "Demande polie",
        "explanation": "Could you + base verbale est une demande polie. Could I + base verbale permet de demander une permission. Le temps n’est pas forcément passé dans ces usages.",
        "examples": [
          {
            "english": "Could you check my booking?",
            "french": "Pourriez-vous vérifier ma réservation ?"
          },
          {
            "english": "Could I leave my bag here?",
            "french": "Pourrais-je laisser mon sac ici ?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "When she was eight, she ___ ride a bike.",
        "answer": "could",
        "hint": "Capacité générale passée."
      },
      {
        "sentence": "___ you show me the platform, please?",
        "answer": "Could",
        "hint": "Demande polie."
      },
      {
        "sentence": "I ___ hear the announcement. (impossibilité passée)",
        "answer": "couldn’t",
        "hint": "Négation de could."
      },
      {
        "sentence": "Could I ___ the window?",
        "answer": "open",
        "hint": "Base verbale après could."
      },
      {
        "sentence": "He ___ speak Italian when he was young.",
        "answer": "could",
        "hint": "Capacité dans le passé."
      }
    ]
  },
  {
    "unit": 3,
    "id": "en-a2-comparative-adjectives",
    "title": "Comparatifs : -er et more",
    "level": "A2",
    "description": "Comparer deux lieux, objets ou situations.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Deux éléments",
        "explanation": "Avec un adjectif court, ajoutez souvent -er + than (small → smaller); avec de nombreux adjectifs longs, utilisez more + adjectif + than. Certains comparatifs sont irréguliers : good → better, bad → worse.",
        "examples": [
          {
            "english": "This flat is brighter than mine.",
            "french": "Cet appartement est plus lumineux que le mien."
          },
          {
            "english": "The bus is more reliable than the train.",
            "french": "Le bus est plus fiable que le train."
          },
          {
            "english": "Today is better than yesterday.",
            "french": "Aujourd’hui est meilleur qu’hier."
          }
        ]
      },
      {
        "title": "Préciser et comparer autrement",
        "explanation": "Much peut renforcer le comparatif; a little peut l’atténuer. Pour l’égalité : as + adjectif + as.",
        "examples": [
          {
            "english": "The new route is much shorter.",
            "french": "Le nouvel itinéraire est beaucoup plus court."
          },
          {
            "english": "This room is as quiet as ours.",
            "french": "Cette pièce est aussi calme que la nôtre."
          }
        ]
      },
      {
        "title": "Verbe : make",
        "explanation": "Make sert à produire, préparer ou créer : make dinner, make a mistake, make a decision. Made est à la fois passé simple et participe passé.",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "A car is usually ___ (fast) than a bicycle.",
        "answer": "faster",
        "hint": "Adjectif court + -er."
      },
      {
        "sentence": "The red coat is ___ (expensive) than the blue one.",
        "answer": "more expensive",
        "hint": "More avec adjectif long."
      },
      {
        "sentence": "My new phone is ___ (good) than my old one.",
        "answer": "better",
        "hint": "Irrégulier."
      },
      {
        "sentence": "This street is as ___ as the next one.",
        "answer": "wide",
        "hint": "As + forme simple + as."
      },
      {
        "sentence": "The second room is ___ (small).",
        "answer": "smaller",
        "hint": "Comparatif de small."
      }
    ]
  },
  {
    "unit": 3,
    "id": "en-a2-superlatives",
    "title": "Superlatifs et choix argumentés",
    "level": "A2",
    "description": "Comparer plusieurs options et désigner un extrême.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "The + superlatif",
        "explanation": "On utilise the + -est pour de nombreux adjectifs courts (the cheapest) et the most + adjectif long (the most comfortable). Good → the best; bad → the worst.",
        "examples": [
          {
            "english": "It is the cheapest room in the building.",
            "french": "C’est la chambre la moins chère du bâtiment."
          },
          {
            "english": "This is the most comfortable chair.",
            "french": "C’est la chaise la plus confortable."
          },
          {
            "english": "That was the worst day of the trip.",
            "french": "C’était le pire jour du voyage."
          }
        ]
      },
      {
        "title": "Groupe de comparaison",
        "explanation": "Ajoutez in pour un lieu ou un groupe, ou of pour une série. Un superlatif n’exprime pas seulement la préférence : il situe un élément par rapport aux autres.",
        "examples": [
          {
            "english": "She is the tallest person in the team.",
            "french": "Elle est la plus grande personne de l’équipe."
          },
          {
            "english": "It was the best of the three options.",
            "french": "C’était la meilleure des trois possibilités."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "This is the ___ (cheap) hotel here.",
        "answer": "cheapest",
        "hint": "The cheapest."
      },
      {
        "sentence": "He is the ___ (good) player.",
        "answer": "best",
        "hint": "Good → best."
      },
      {
        "sentence": "The park is the ___ (popular) place in town.",
        "answer": "most popular",
        "hint": "Most + adjectif long."
      },
      {
        "sentence": "That was the ___ (bad) meal.",
        "answer": "worst",
        "hint": "Bad → worst."
      },
      {
        "sentence": "It is the largest building ___ the street.",
        "answer": "on",
        "hint": "On the street."
      }
    ]
  },
  {
    "unit": 3,
    "id": "en-a2-too-enough",
    "title": "Too et enough : excès et suffisance",
    "level": "A2",
    "description": "Exprimer si une situation convient.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Too + adjectif",
        "explanation": "Too signifie « trop » : c’est généralement une quantité ou une intensité excessive pour un objectif. Too much et too many s’emploient avec des noms.",
        "examples": [
          {
            "english": "This desk is too wide for the room.",
            "french": "Ce bureau est trop large pour la pièce."
          },
          {
            "english": "There are too many chairs.",
            "french": "Il y a trop de chaises."
          }
        ]
      },
      {
        "title": "Adjectif + enough",
        "explanation": "Enough signifie « suffisamment ». Il suit l’adjectif mais précède le nom : warm enough; enough money. On peut ajouter to + verbe pour exprimer l’objectif.",
        "examples": [
          {
            "english": "The room is big enough for two people.",
            "french": "La pièce est assez grande pour deux personnes."
          },
          {
            "english": "We haven’t got enough time to walk.",
            "french": "Nous n’avons pas assez de temps pour marcher."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "It’s not warm ___ to swim.",
        "answer": "enough",
        "hint": "Enough après l’adjectif."
      },
      {
        "sentence": "The box is ___ heavy to carry.",
        "answer": "too",
        "hint": "Trop lourd."
      },
      {
        "sentence": "We need ___ chairs for everyone.",
        "answer": "enough",
        "hint": "Enough avant le nom."
      },
      {
        "sentence": "There is ___ much noise here.",
        "answer": "too",
        "hint": "Too much + nom indénombrable."
      },
      {
        "sentence": "This shelf is high ___.",
        "answer": "enough",
        "hint": "Après adjectif."
      }
    ]
  },
  {
    "unit": 4,
    "id": "en-a2-quantifiers-a2",
    "title": "Quantités : much, many, few, little, a lot of",
    "level": "A2",
    "description": "Nuancer une quantité.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Dénombrable ou non ?",
        "explanation": "Many et a few accompagnent les noms pluriels dénombrables ; much et a little les indénombrables. A lot of fonctionne avec les deux. Dans la langue courante, much apparaît souvent dans les questions et négations.",
        "examples": [
          {
            "english": "We have a few apples left.",
            "french": "Il nous reste quelques pommes."
          },
          {
            "english": "There isn’t much milk.",
            "french": "Il n’y a pas beaucoup de lait."
          },
          {
            "english": "She drinks a lot of water.",
            "french": "Elle boit beaucoup d’eau."
          }
        ]
      },
      {
        "title": "A few / few et a little / little",
        "explanation": "A few et a little présentent une petite quantité qui peut suffire ; few et little mettent l’accent sur le manque. Évitez de traduire mécaniquement « peu » sans tenir compte du contexte.",
        "examples": [
          {
            "english": "I have a little time before the meeting.",
            "french": "J’ai un peu de temps avant la réunion."
          },
          {
            "english": "Few people knew the answer.",
            "french": "Peu de gens connaissaient la réponse."
          }
        ]
      },
      {
        "title": "Verbe : feel",
        "explanation": "Feel peut exprimer une sensation ou un état. I feel better et I’m feeling better sont possibles selon le contexte; felt est la forme passée.",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "How ___ oranges do we need?",
        "answer": "many",
        "hint": "Oranges : pluriel dénombrable."
      },
      {
        "sentence": "There isn’t ___ coffee left.",
        "answer": "much",
        "hint": "Coffee : indénombrable."
      },
      {
        "sentence": "We still have a ___ minutes.",
        "answer": "few",
        "hint": "A few + pluriel."
      },
      {
        "sentence": "Could I have a ___ water?",
        "answer": "little",
        "hint": "A little + indénombrable."
      },
      {
        "sentence": "They eat a ___ of fruit.",
        "answer": "lot",
        "hint": "A lot of."
      }
    ]
  },
  {
    "unit": 4,
    "id": "en-a2-should-advice",
    "title": "Should / shouldn’t : conseils",
    "level": "A2",
    "description": "Donner et recevoir des recommandations.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Conseil, pas obligation",
        "explanation": "Should + base verbale recommande une action; shouldn’t la déconseille. À la troisième personne, pas de -s : she should rest. C’est moins fort que must.",
        "examples": [
          {
            "english": "You should drink more water.",
            "french": "Tu devrais boire davantage d’eau."
          },
          {
            "english": "He shouldn’t skip meals.",
            "french": "Il ne devrait pas sauter de repas."
          }
        ]
      },
      {
        "title": "Poser une question de conseil",
        "explanation": "Should précède le sujet dans la question. Pour demander conseil, What should I do? est naturel. Une réponse utile explique brièvement la raison.",
        "examples": [
          {
            "english": "Should I call a doctor?",
            "french": "Devrais-je appeler un médecin ?"
          },
          {
            "english": "You should take a break because you look tired.",
            "french": "Tu devrais faire une pause parce que tu as l’air fatigué."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "You ___ see a dentist if the pain continues.",
        "answer": "should",
        "hint": "Conseil."
      },
      {
        "sentence": "She ___ work all night. (déconseillé)",
        "answer": "shouldn’t",
        "hint": "Shouldn’t."
      },
      {
        "sentence": "What ___ I do?",
        "answer": "should",
        "hint": "Question de conseil."
      },
      {
        "sentence": "He should ___ more slowly.",
        "answer": "eat",
        "hint": "Base après should."
      },
      {
        "sentence": "___ we ask for help?",
        "answer": "Should",
        "hint": "Auxiliaire avant sujet."
      }
    ]
  },
  {
    "unit": 4,
    "id": "en-a2-obligation-have-to-must",
    "title": "Have to, don’t have to, must, mustn’t",
    "level": "A2",
    "description": "Distinguer obligation, absence d’obligation et interdiction.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Have to et must",
        "explanation": "Have to sert à une obligation pratique ou imposée par une situation; must exprime une obligation forte, souvent une consigne du locuteur. Au présent : he has to; question : Do you have to ...?",
        "examples": [
          {
            "english": "I have to wear safety shoes.",
            "french": "Je dois porter des chaussures de sécurité."
          },
          {
            "english": "She has to start at seven.",
            "french": "Elle doit commencer à sept heures."
          }
        ]
      },
      {
        "title": "Interdiction ou choix ?",
        "explanation": "Mustn’t signifie « il est interdit de ». Don’t have to signifie « ce n’est pas obligatoire » et ne doit pas être confondu avec « ne pas devoir » au sens d’interdiction.",
        "examples": [
          {
            "english": "You mustn’t touch the equipment.",
            "french": "Il est interdit de toucher le matériel."
          },
          {
            "english": "You don’t have to bring a uniform.",
            "french": "Tu n’es pas obligé d’apporter un uniforme."
          },
          {
            "english": "Do I have to book ahead?",
            "french": "Dois-je réserver à l’avance ?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "You ___ smoke in this building. (interdit)",
        "answer": "mustn’t",
        "hint": "Mustn’t : interdiction."
      },
      {
        "sentence": "I ___ to finish this form today.",
        "answer": "have",
        "hint": "Have to."
      },
      {
        "sentence": "She ___ to wear a badge.",
        "answer": "has",
        "hint": "He/she has to."
      },
      {
        "sentence": "You don’t ___ to pay now.",
        "answer": "have",
        "hint": "Don’t have to : facultatif."
      },
      {
        "sentence": "___ you have to arrive early?",
        "answer": "Do",
        "hint": "Question au présent."
      }
    ]
  },
  {
    "unit": 5,
    "id": "en-a2-future-arrangements-going-to",
    "title": "Going to et présent continu futur",
    "level": "A2",
    "description": "Exprimer une intention et un rendez-vous fixé.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Intention et projet",
        "explanation": "Be going to présente une intention ou un projet; c’est une reprise d’A1, maintenant comparée aux arrangements. Il faut conjuguer be, puis garder going to + base verbale.",
        "examples": [
          {
            "english": "I’m going to visit my aunt next month.",
            "french": "Je vais rendre visite à ma tante le mois prochain."
          },
          {
            "english": "We aren’t going to drive.",
            "french": "Nous n’allons pas prendre la voiture."
          }
        ]
      },
      {
        "title": "Arrangement prévu",
        "explanation": "Le présent continu peut annoncer une rencontre déjà organisée (I’m meeting Lisa tomorrow). Le contexte temporel futur est essentiel; sans lui la forme peut désigner une action en cours.",
        "examples": [
          {
            "english": "I’m meeting the dentist at four.",
            "french": "J’ai rendez-vous chez le dentiste à quatre heures."
          },
          {
            "english": "They’re flying on Friday morning.",
            "french": "Ils prennent l’avion vendredi matin."
          }
        ]
      },
      {
        "title": "Verbe : come",
        "explanation": "Come exprime le mouvement vers le locuteur ou un point de référence. Come back = revenir; came est le passé et come le participe.",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "We ___ meeting Jo at six.",
        "answer": "are",
        "hint": "Arrangement futur."
      },
      {
        "sentence": "I’m ___ to learn to drive.",
        "answer": "going",
        "hint": "Going to + infinitif."
      },
      {
        "sentence": "She ___ travelling tomorrow.",
        "answer": "is",
        "hint": "She is + -ing."
      },
      {
        "sentence": "They aren’t going to ___ a car.",
        "answer": "rent",
        "hint": "Base verbale."
      },
      {
        "sentence": "___ he coming on Wednesday?",
        "answer": "Is",
        "hint": "Question de présent continu."
      }
    ]
  },
  {
    "unit": 5,
    "id": "en-a2-will-future",
    "title": "Will : décisions spontanées et prévisions",
    "level": "A2",
    "description": "Formuler une offre, une promesse ou une prévision.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Will + base verbale",
        "explanation": "Will sert notamment à une décision prise au moment de parler, une offre, une promesse ou une prévision. Il ne change pas selon la personne; won’t est la négation contractée.",
        "examples": [
          {
            "english": "I’ll carry your bag.",
            "french": "Je vais porter ton sac."
          },
          {
            "english": "It will probably rain later.",
            "french": "Il pleuvra probablement plus tard."
          },
          {
            "english": "We won’t be late.",
            "french": "Nous ne serons pas en retard."
          }
        ]
      },
      {
        "title": "Question et nuance",
        "explanation": "Will + sujet + base verbale forme la question. On emploie aussi going to pour des prédictions fondées sur un indice présent; la distinction dépend du contexte.",
        "examples": [
          {
            "english": "Will you call me tonight?",
            "french": "M’appelleras-tu ce soir ?"
          },
          {
            "english": "Look at those clouds! It’s going to rain.",
            "french": "Regarde ces nuages ! Il va pleuvoir."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "I ___ help you with those boxes.",
        "answer": "will",
        "hint": "Offre spontanée."
      },
      {
        "sentence": "It ___ be sunny tomorrow, I think.",
        "answer": "will",
        "hint": "Prévision."
      },
      {
        "sentence": "They ___ arrive before nine. (négation)",
        "answer": "won’t",
        "hint": "Won’t."
      },
      {
        "sentence": "___ you send me the address?",
        "answer": "Will",
        "hint": "Question avec will."
      },
      {
        "sentence": "I’ll ___ the windows.",
        "answer": "close",
        "hint": "Base après will."
      }
    ]
  },
  {
    "unit": 5,
    "id": "en-a2-first-conditional",
    "title": "First conditional : if / when",
    "level": "A2",
    "description": "Parler d’une conséquence possible dans le futur.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "If + présent, will + base",
        "explanation": "Pour une condition future réaliste, utilisez if + présent simple, puis will + base verbale. On n’emploie normalement pas will directement après if dans cette structure.",
        "examples": [
          {
            "english": "If I finish early, I’ll call you.",
            "french": "Si je termine tôt, je t’appellerai."
          },
          {
            "english": "We’ll stay home if it rains.",
            "french": "Nous resterons chez nous s’il pleut."
          }
        ]
      },
      {
        "title": "When et ponctuation",
        "explanation": "When annonce un événement attendu; if une possibilité. La proposition en if/when peut venir en premier, avec une virgule dans l’écriture habituelle.",
        "examples": [
          {
            "english": "When the train arrives, we’ll leave.",
            "french": "Quand le train arrivera, nous partirons."
          },
          {
            "english": "If she asks, I’ll explain.",
            "french": "Si elle demande, j’expliquerai."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "If I ___ time, I’ll cook.",
        "answer": "have",
        "hint": "Présent simple après if."
      },
      {
        "sentence": "We’ll go outside if it ___ raining.",
        "answer": "stops",
        "hint": "Présent simple."
      },
      {
        "sentence": "If you miss the bus, you ___ need a taxi.",
        "answer": "will",
        "hint": "Will dans la conséquence."
      },
      {
        "sentence": "___ I see him, I’ll say hello.",
        "answer": "When",
        "hint": "Événement attendu."
      },
      {
        "sentence": "If she calls, I ___ answer.",
        "answer": "will",
        "hint": "Conséquence future."
      }
    ]
  },
  {
    "unit": 6,
    "id": "en-a2-present-perfect-experiences",
    "title": "Present perfect : expériences (ever / never)",
    "level": "A2",
    "description": "Parler du vécu sans préciser un moment passé terminé.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Have/has + participe passé",
        "explanation": "Le present perfect relie une expérience passée à la situation présente. Il se forme avec have/has + participe passé (seen, tried, visited). Le moment exact est souvent secondaire.",
        "examples": [
          {
            "english": "I’ve visited Dublin twice.",
            "french": "J’ai visité Dublin deux fois."
          },
          {
            "english": "She has tried kayaking.",
            "french": "Elle a essayé le kayak."
          },
          {
            "english": "They haven’t flown before.",
            "french": "Ils n’ont jamais pris l’avion auparavant."
          }
        ]
      },
      {
        "title": "Ever et never",
        "explanation": "Ever apparaît souvent dans les questions d’expérience; never signifie « jamais » avec une forme affirmative de have/has. Ne combinez pas not et never.",
        "examples": [
          {
            "english": "Have you ever eaten sushi?",
            "french": "As-tu déjà mangé des sushis ?"
          },
          {
            "english": "I have never been to Canada.",
            "french": "Je ne suis jamais allé au Canada."
          }
        ]
      },
      {
        "title": "Verbe : find",
        "explanation": "Find signifie trouver/découvrir : I found the address. Dans une question au passé, on dit Did you find ...? Found est aussi le participe.",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "Have you ___ been to Ireland?",
        "answer": "ever",
        "hint": "Question d’expérience."
      },
      {
        "sentence": "She has ___ visited Greece. (jamais)",
        "answer": "never",
        "hint": "Never."
      },
      {
        "sentence": "They ___ seen that film.",
        "answer": "have",
        "hint": "They have."
      },
      {
        "sentence": "He has ___ (take) a train abroad.",
        "answer": "taken",
        "hint": "Participe passé de take."
      },
      {
        "sentence": "I have ___ (be) to Rome.",
        "answer": "been",
        "hint": "Been : participe passé de be."
      }
    ]
  },
  {
    "unit": 6,
    "id": "en-a2-present-perfect-just-yet-already",
    "title": "Just, already, yet avec le present perfect",
    "level": "A2",
    "description": "Parler d’un événement récent ou attendu.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Already et just",
        "explanation": "Already indique qu’une action s’est produite plus tôt qu’attendu; just indique une action très récente. Ces adverbes se placent souvent entre have/has et le participe passé.",
        "examples": [
          {
            "english": "The parcel has just arrived.",
            "french": "Le colis vient d’arriver."
          },
          {
            "english": "I’ve already booked the hotel.",
            "french": "J’ai déjà réservé l’hôtel."
          }
        ]
      },
      {
        "title": "Yet",
        "explanation": "Yet s’utilise fréquemment à la fin d’une question ou d’une négation pour dire « déjà / pas encore ». Évitez de le confondre avec still, qui exprime la continuité.",
        "examples": [
          {
            "english": "Have you finished yet?",
            "french": "As-tu déjà terminé ?"
          },
          {
            "english": "We haven’t heard the news yet.",
            "french": "Nous n’avons pas encore appris la nouvelle."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "He has ___ left. (vient de)",
        "answer": "just",
        "hint": "Just + participe."
      },
      {
        "sentence": "Have you paid ___?",
        "answer": "yet",
        "hint": "Question avec yet en fin de phrase."
      },
      {
        "sentence": "They haven’t eaten ___.",
        "answer": "yet",
        "hint": "Pas encore."
      },
      {
        "sentence": "I have ___ read that article.",
        "answer": "already",
        "hint": "Déjà."
      },
      {
        "sentence": "She has just ___ (send) the file.",
        "answer": "sent",
        "hint": "Participe passé de send."
      }
    ]
  },
  {
    "unit": 6,
    "id": "en-a2-present-perfect-vs-past-simple",
    "title": "Present perfect ou past simple ?",
    "level": "A2",
    "description": "Choisir selon le repère temporel.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Moment terminé : past simple",
        "explanation": "Avec un repère de temps passé terminé et précis (yesterday, in 2022, last Tuesday), on emploie en général le past simple. Avec une expérience sans moment daté, on peut employer le present perfect.",
        "examples": [
          {
            "english": "I went to Prague in 2021.",
            "french": "Je suis allé à Prague en 2021."
          },
          {
            "english": "I have been to Prague.",
            "french": "Je suis déjà allé à Prague."
          }
        ]
      },
      {
        "title": "Depuis et jusqu’à maintenant",
        "explanation": "For indique une durée, since un point de départ. Pour une situation commencée dans le passé et toujours vraie, le present perfect s’emploie avec un verbe approprié.",
        "examples": [
          {
            "english": "She has lived here for five years.",
            "french": "Elle habite ici depuis cinq ans."
          },
          {
            "english": "We have known them since 2020.",
            "french": "Nous les connaissons depuis 2020."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "I ___ (visit) Oslo in 2020.",
        "answer": "visited",
        "hint": "Date passée précise."
      },
      {
        "sentence": "I have ___ (visit) Oslo twice.",
        "answer": "visited",
        "hint": "Participe passé."
      },
      {
        "sentence": "He has worked here ___ March.",
        "answer": "since",
        "hint": "Point de départ."
      },
      {
        "sentence": "They have lived there ___ two years.",
        "answer": "for",
        "hint": "Durée."
      },
      {
        "sentence": "We ___ (meet) them yesterday.",
        "answer": "met",
        "hint": "Hier : past simple."
      }
    ]
  },
  {
    "unit": 7,
    "id": "en-a2-defining-relative-clauses",
    "title": "Propositions relatives : who, which, that",
    "level": "A2",
    "description": "Ajouter une information essentielle sur quelqu’un ou quelque chose.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Who pour une personne",
        "explanation": "Une relative définissante précise de qui ou de quoi on parle. Who renvoie normalement à une personne, which à une chose et that peut souvent remplacer l’un ou l’autre dans une relative définissante.",
        "examples": [
          {
            "english": "That’s the woman who helped us.",
            "french": "C’est la femme qui nous a aidés."
          },
          {
            "english": "Here is the book that I borrowed.",
            "french": "Voici le livre que j’ai emprunté."
          }
        ]
      },
      {
        "title": "Clarté et ordre",
        "explanation": "Le pronom relatif relie deux informations sans répéter le nom. On n’ajoute pas un deuxième pronom sujet redondant lorsque who/that joue déjà ce rôle.",
        "examples": [
          {
            "english": "This is the café which opened last week.",
            "french": "C’est le café qui a ouvert la semaine dernière."
          },
          {
            "english": "I know someone who repairs bicycles.",
            "french": "Je connais quelqu’un qui répare des vélos."
          }
        ]
      },
      {
        "title": "Verbe : tell",
        "explanation": "Tell se construit souvent avec une personne : tell me the truth. Say s’emploie autrement (say something to someone). Told est le passé et le participe passé.",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "The man ___ lives next door is a chef.",
        "answer": "who",
        "hint": "Personne sujet."
      },
      {
        "sentence": "This is the photo ___ I took yesterday.",
        "answer": "that",
        "hint": "Relative définissante."
      },
      {
        "sentence": "I need a bag ___ is waterproof.",
        "answer": "that",
        "hint": "Chose."
      },
      {
        "sentence": "She’s the teacher ___ helped me.",
        "answer": "who",
        "hint": "Personne."
      },
      {
        "sentence": "That is the book ___ you recommended.",
        "answer": "which",
        "hint": "Chose."
      }
    ]
  },
  {
    "unit": 7,
    "id": "en-a2-linking-ideas-a2",
    "title": "Relier des idées : because, so, although",
    "level": "A2",
    "description": "Expliquer une cause, une conséquence ou un contraste.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Cause et conséquence",
        "explanation": "Because introduit une raison; so indique une conséquence. Les confondre change le sens logique. Évitez de mettre because et so ensemble pour exprimer une seule relation simple.",
        "examples": [
          {
            "english": "I stayed home because I was ill.",
            "french": "Je suis resté chez moi parce que j’étais malade."
          },
          {
            "english": "It was raining, so we took a taxi.",
            "french": "Il pleuvait, donc nous avons pris un taxi."
          }
        ]
      },
      {
        "title": "Contraste avec although",
        "explanation": "Although signifie « bien que / même si » et oppose deux idées. Il peut ouvrir la phrase. But indique aussi une opposition, mais n’a pas exactement la même construction.",
        "examples": [
          {
            "english": "Although I was tired, I finished the report.",
            "french": "Même si j’étais fatigué, j’ai terminé le rapport."
          },
          {
            "english": "The room was small, but it was comfortable.",
            "french": "La chambre était petite, mais confortable."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "We left early ___ the train was cancelled.",
        "answer": "because",
        "hint": "Raison."
      },
      {
        "sentence": "I was hungry, ___ I made a sandwich.",
        "answer": "so",
        "hint": "Conséquence."
      },
      {
        "sentence": "___ it was cold, we went walking.",
        "answer": "Although",
        "hint": "Opposition."
      },
      {
        "sentence": "She was pleased ___ she passed the exam.",
        "answer": "because",
        "hint": "Explication."
      },
      {
        "sentence": "The lift was broken, ___ we used the stairs.",
        "answer": "so",
        "hint": "Conséquence."
      }
    ]
  },
  {
    "unit": 7,
    "id": "en-a2-verb-patterns-infinitive-ing",
    "title": "Verbe + to ou -ing",
    "level": "A2",
    "description": "Exprimer une envie, une décision et une activité.",
    "icon": "📘",
    "color": "#2563EB",
    "sections": [
      {
        "title": "Want / decide / hope + to",
        "explanation": "Certains verbes courants sont suivis de to + base verbale : want to go, decide to leave, hope to travel. Ce n’est pas une règle universelle : il faut apprendre chaque construction avec son verbe.",
        "examples": [
          {
            "english": "We decided to take the train.",
            "french": "Nous avons décidé de prendre le train."
          },
          {
            "english": "She hopes to find a new job.",
            "french": "Elle espère trouver un nouvel emploi."
          }
        ]
      },
      {
        "title": "Enjoy / avoid / finish + -ing",
        "explanation": "D’autres verbes fréquents sont suivis de -ing : enjoy reading, avoid driving, finish writing. Attention aux traductions directes du français.",
        "examples": [
          {
            "english": "I enjoy learning languages.",
            "french": "J’aime apprendre des langues."
          },
          {
            "english": "He finished repairing the bike.",
            "french": "Il a terminé de réparer le vélo."
          },
          {
            "english": "They avoided walking in the rain.",
            "french": "Ils ont évité de marcher sous la pluie."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "I hope ___ see her tomorrow.",
        "answer": "to",
        "hint": "Hope + to."
      },
      {
        "sentence": "We enjoy ___ (cook) together.",
        "answer": "cooking",
        "hint": "Enjoy + -ing."
      },
      {
        "sentence": "She decided ___ apply for the course.",
        "answer": "to",
        "hint": "Decide + to."
      },
      {
        "sentence": "He finished ___ (write) the article.",
        "answer": "writing",
        "hint": "Finish + -ing."
      },
      {
        "sentence": "They want ___ move house.",
        "answer": "to",
        "hint": "Want + to."
      }
    ]
  }
];

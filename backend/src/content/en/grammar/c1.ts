import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarC1: GrammarLesson[] = [
  {
    "unit": 1,
    "id": "en-c1-grammar-01",
    "title": "Phrases clivées et focalisation",
    "level": "C1",
    "description": "Mettre en relief une information sans déformer le sens.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "It-clefts : isoler l’élément contrastif",
        "explanation": "La structure it + be + élément focalisé + that/who + proposition permet d’opposer explicitement une information à d’autres possibilités. Le temps du verbe be dépend du point de référence. Avec une personne, who est possible, mais that reste courant. N’ajoutez pas un second pronom sujet dans la relative : *It was Mara that she raised the objection* est incorrect dans ce sens.",
        "examples": [
          {
            "english": "It was the archivists who preserved the letters.",
            "french": "Ce sont les archivistes qui ont préservé les lettres."
          },
          {
            "english": "It is the timing that matters here.",
            "french": "C’est le moment choisi qui importe ici."
          },
          {
            "english": "It wasn’t the cost that worried them.",
            "french": "Ce n’était pas le coût qui les inquiétait."
          },
          {
            "english": "Was it the curator who revised the label?",
            "french": "Est-ce le commissaire d’exposition qui a modifié l’étiquette ?"
          }
        ]
      },
      {
        "title": "What-clefts : organiser une correction ou un bilan",
        "explanation": "What + proposition + be + information centrale présente un bilan, une explication ou une rectification : *What matters is...*. Le constituant what est lui-même sujet ou objet de la proposition enchâssée ; il ne faut donc pas y ajouter une question directe. Les variantes *The reason why... is that...* et *All I wanted was...* créent des effets proches, mais ne sont pas interchangeables dans tous les contextes.",
        "examples": [
          {
            "english": "What the report overlooks is the maintenance cost.",
            "french": "Ce que le rapport néglige, c’est le coût de l’entretien."
          },
          {
            "english": "What surprised us was their silence.",
            "french": "Ce qui nous a surpris, c’était leur silence."
          },
          {
            "english": "All the committee wanted was a clearer timetable.",
            "french": "Tout ce que voulait la commission, c’était un calendrier plus clair."
          },
          {
            "english": "The reason we postponed the vote was that the data were incomplete.",
            "french": "Nous avons reporté le vote parce que les données étaient incomplètes."
          }
        ]
      },
      {
        "title": "Verbe : reshape — formes et collocations",
        "explanation": "reshape / reshaped / reshaped.\nExpressions : reshape public memory, reshape an argument, reshape the debate",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "It ___ the missing evidence that changed her mind.",
        "answer": "was",
        "hint": "Focalisation sur une circonstance passée."
      },
      {
        "sentence": "What we need ___ a transparent process.",
        "answer": "is / was",
        "hint": "What-clause singulière : verbe be."
      },
      {
        "sentence": "It was the volunteers ___ prepared the exhibition.",
        "answer": "who / that",
        "hint": "Relative renvoyant à des personnes."
      },
      {
        "sentence": "What the director questioned ___ the conclusion, not the figures.",
        "answer": "was",
        "hint": "Mettre en relief l’objet de sa critique."
      },
      {
        "sentence": "All I wanted ___ to understand the decision.",
        "answer": "was",
        "hint": "Structure all + relative + be."
      }
    ]
  },
  {
    "unit": 1,
    "id": "en-c1-grammar-02",
    "title": "Inversion après un adverbial négatif ou restrictif",
    "level": "C1",
    "description": "Créer une emphase contrôlée dans les textes formels.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Inversion avec rarely, never, little, hardly",
        "explanation": "Lorsque certains adverbes négatifs ou restrictifs ouvrent la phrase, l’auxiliaire précède le sujet : *Rarely had we seen...*. En l’absence d’auxiliaire, utilisez do/does/did. *Little did they know* signifie « ils étaient loin de se douter » : little porte ici sur la connaissance, pas sur la quantité. L’inversion ajoute un relief rhétorique ; elle serait excessive dans une conversation banale.",
        "examples": [
          {
            "english": "Rarely have I encountered such a careful review.",
            "french": "J’ai rarement rencontré un examen aussi rigoureux."
          },
          {
            "english": "Never did the report claim to be definitive.",
            "french": "Le rapport n’a jamais prétendu être définitif."
          },
          {
            "english": "Little did they realise how much had been omitted.",
            "french": "Ils étaient loin d’imaginer tout ce qui avait été omis."
          },
          {
            "english": "Hardly had the meeting begun when the alarm rang.",
            "french": "La réunion venait à peine de commencer lorsque l’alarme a retenti."
          }
        ]
      },
      {
        "title": "Only after, no sooner et not until",
        "explanation": "Après *only after* ou *not until* placés en tête, l’inversion se produit dans la proposition principale, pas dans la subordonnée temporelle : *Only after we checked did we publish*. *No sooner had... than...* exprime deux événements presque simultanés. *Not only... but also...* peut déclencher l’inversion dans sa première proposition. Attention au choix des corrélatifs : hardly/scarcely...when, no sooner...than.",
        "examples": [
          {
            "english": "Only after the interview ended did she explain the pause.",
            "french": "Ce n’est qu’après l’entretien qu’elle a expliqué la pause."
          },
          {
            "english": "Not until the records arrived could we verify the claim.",
            "french": "Nous n’avons pu vérifier l’affirmation qu’à réception des archives."
          },
          {
            "english": "No sooner had the notice appeared than complaints began.",
            "french": "À peine l’avis avait-il paru que les plaintes ont commencé."
          },
          {
            "english": "Not only did the team correct the error, but it also published the evidence.",
            "french": "L’équipe a non seulement corrigé l’erreur, mais elle a aussi publié les preuves."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Rarely ___ a committee faced such public scrutiny.",
        "answer": "has / had",
        "hint": "Inversion : rarement + auxiliaire au present perfect."
      },
      {
        "sentence": "Little ___ she know that the recording was incomplete. (récit au passé : utilisez did)",
        "answer": "did",
        "hint": "Little did + sujet + infinitif."
      },
      {
        "sentence": "Only after the data arrived ___ they reconsider the decision.",
        "answer": "did",
        "hint": "Inversion dans la principale au passé."
      },
      {
        "sentence": "No sooner had we left ___ the phone rang.",
        "answer": "than",
        "hint": "Corrélatif no sooner...than."
      },
      {
        "sentence": "Not until noon ___ the results become public.",
        "answer": "did",
        "hint": "Inversion après not until."
      }
    ]
  },
  {
    "unit": 1,
    "id": "en-c1-grammar-03",
    "title": "Modaliser une affirmation et attribuer une source",
    "level": "C1",
    "description": "Distinguer fait établi, interprétation et degré de confiance.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Hedging : distance épistémique",
        "explanation": "À C1, la prudence ne consiste pas à ajouter *maybe* partout. *Appears to*, *seems to*, *tends to*, *may well* et *would suggest* expriment des attitudes différentes : apparence, tendance statistique, possibilité assez forte ou inférence conditionnelle. Choisissez la formule selon la nature des preuves et évitez l’accumulation d’atténuateurs, qui rend une proposition illisible.",
        "examples": [
          {
            "english": "The evidence appears to support a narrower claim.",
            "french": "Les données semblent étayer une affirmation plus limitée."
          },
          {
            "english": "The survey tends to underrepresent younger residents.",
            "french": "L’enquête tend à sous-représenter les jeunes habitants."
          },
          {
            "english": "The result may well depend on the sample.",
            "french": "Le résultat pourrait bien dépendre de l’échantillon."
          },
          {
            "english": "This pattern would suggest a change in behaviour.",
            "french": "Cette tendance laisserait penser à un changement de comportement."
          }
        ]
      },
      {
        "title": "Attribution et responsabilité de l’énoncé",
        "explanation": "*According to the report* attribue une information sans la garantir. *Reportedly* indique qu’elle est rapportée sans source forcément précisée, tandis que *allegedly* suggère une allégation contestable ou non prouvée. *The authors argue that* attribue un raisonnement plutôt qu’un fait. Il faut éviter de convertir une hypothèse citée en certitude au moment de la paraphraser.",
        "examples": [
          {
            "english": "According to the council, the scheme reached more residents.",
            "french": "D’après le conseil municipal, le dispositif a touché davantage d’habitants."
          },
          {
            "english": "The agreement was reportedly signed on Tuesday.",
            "french": "L’accord aurait été signé mardi, selon certaines informations."
          },
          {
            "english": "The supplier allegedly concealed the delay.",
            "french": "Le fournisseur aurait dissimulé le retard, selon une accusation non établie."
          },
          {
            "english": "The authors argue that the measure is insufficient.",
            "french": "Les auteurs soutiennent que la mesure est insuffisante."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "The findings appear ___ support a limited conclusion.",
        "answer": "to",
        "hint": "Appear to + base verbale."
      },
      {
        "sentence": "The result may ___ depend on the weather. (bien : well)",
        "answer": "well",
        "hint": "May well : possibilité assez forte."
      },
      {
        "sentence": "___ to the study, satisfaction rose modestly.",
        "answer": "According",
        "hint": "Attribuer une donnée à une source."
      },
      {
        "sentence": "The author ___ that the headline is misleading. (argue, présent)",
        "answer": "argues",
        "hint": "Rapporter un raisonnement attribué."
      },
      {
        "sentence": "The survey tends ___ favour regular users.",
        "answer": "to",
        "hint": "Tend to + infinitif."
      }
    ]
  },
  {
    "unit": 2,
    "id": "en-c1-grammar-04",
    "title": "Faire faire : have et get causatifs",
    "level": "C1",
    "description": "Exprimer précisément la délégation et la responsabilité.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Have/get something done",
        "explanation": "La construction *have/get + objet + participe passé* présente une prestation ou un résultat organisé par le sujet : *We had the roof repaired*. Le sujet ne réalise pas forcément l’action lui-même. *Get* est souvent plus conversationnel et suggère parfois l’effort nécessaire. Le passé du participe ne change pas avec le temps du causatif : *will have the files checked*.",
        "examples": [
          {
            "english": "We had the sensors calibrated independently.",
            "french": "Nous avons fait étalonner les capteurs par un organisme indépendant."
          },
          {
            "english": "She is getting the draft reviewed.",
            "french": "Elle fait relire le brouillon."
          },
          {
            "english": "They will have the doors replaced.",
            "french": "Ils feront remplacer les portes."
          },
          {
            "english": "I had my laptop stolen on the train.",
            "french": "Je me suis fait voler mon ordinateur dans le train."
          }
        ]
      },
      {
        "title": "Have someone do / get someone to do",
        "explanation": "Lorsque l’exécutant est nommé, *have + personne + base verbale* et *get + personne + to-infinitif* sont possibles. La première construction met davantage l’accent sur l’organisation de l’action ; la seconde sur le fait d’obtenir la coopération. Dans *I had my phone stolen*, have exprime une expérience subie, non une commande : le contexte détermine le sens.",
        "examples": [
          {
            "english": "The manager had the analyst check the figures.",
            "french": "La responsable a demandé à l’analyste de vérifier les chiffres."
          },
          {
            "english": "We got an engineer to inspect the bridge.",
            "french": "Nous avons réussi à faire inspecter le pont par un ingénieur."
          },
          {
            "english": "She had the team prepare two scenarios.",
            "french": "Elle a fait préparer deux scénarios par l’équipe."
          },
          {
            "english": "They got the supplier to admit the error.",
            "french": "Ils ont obtenu du fournisseur qu’il reconnaisse l’erreur."
          }
        ]
      },
      {
        "title": "Verbe : undertake — formes et collocations",
        "explanation": "undertake / undertook / undertaken.\nExpressions : undertake an audit, undertake to review, undertake a responsibility",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "We had the prototype ___ before the launch. (test)",
        "answer": "tested",
        "hint": "Have + objet + participe passé."
      },
      {
        "sentence": "The director got the consultant ___ review the process.",
        "answer": "to",
        "hint": "Get + personne + to-infinitif."
      },
      {
        "sentence": "They will have the report ___ by an external specialist. (check)",
        "answer": "checked",
        "hint": "Participe après have the report."
      },
      {
        "sentence": "The chair had the secretary ___ the minutes. (revise)",
        "answer": "revise",
        "hint": "Have + personne + base verbale."
      },
      {
        "sentence": "She is getting the equipment ___. (replace)",
        "answer": "replaced",
        "hint": "Get + objet + participe passé."
      }
    ]
  },
  {
    "unit": 2,
    "id": "en-c1-grammar-05",
    "title": "Passif de compte rendu et verbes de réputation",
    "level": "C1",
    "description": "Rapporter sans faire passer une allégation pour un fait.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "It is said/reported/alleged that",
        "explanation": "L’impersonnel *It is reported that...* attribue une information à des rapports ou à une rumeur. Le choix du verbe est essentiel : *alleged* indique une accusation non établie ; *understood* suggère une information généralement admise. Le passif n’est pas toujours un moyen de masquer un responsable : il peut signaler que la source est secondaire ou que l’identité du rapporteur n’est pas pertinente.",
        "examples": [
          {
            "english": "It is alleged that the criteria were changed.",
            "french": "Il est allégué que les critères ont été modifiés."
          },
          {
            "english": "It is reported that several bids were rejected.",
            "french": "Il est rapporté que plusieurs offres ont été rejetées."
          },
          {
            "english": "It is understood that the board will reconsider.",
            "french": "Il semble acquis que le conseil réexaminera la question."
          },
          {
            "english": "It was claimed that the data had been withheld.",
            "french": "On a affirmé que les données avaient été retenues."
          }
        ]
      },
      {
        "title": "Subject + be + reporting verb + infinitive",
        "explanation": "Une autre forme place le sujet réel en tête : *The supplier is believed to have ignored the warning*. L’infinitif simple renvoie généralement à une situation simultanée ou future, tandis que *to have + participe passé* situe un fait antérieur. Le temps de be et celui de l’infinitif doivent être distingués. À l’écrit formel, cette structure condense un témoignage sans présenter nécessairement l’accusation comme certaine.",
        "examples": [
          {
            "english": "The team is thought to be reviewing its procedures.",
            "french": "On pense que l’équipe revoit ses procédures."
          },
          {
            "english": "The official is believed to have resigned.",
            "french": "On pense que le responsable a démissionné."
          },
          {
            "english": "The system was said to have failed repeatedly.",
            "french": "On disait que le système avait connu plusieurs défaillances."
          },
          {
            "english": "The figures are expected to improve next year.",
            "french": "On s’attend à une amélioration des chiffres l’an prochain."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "It is ___ that the policy was changed without approval. (allege)",
        "answer": "alleged",
        "hint": "Accusation rapportée, non prouvée."
      },
      {
        "sentence": "The minister is believed to ___ left the meeting.",
        "answer": "have",
        "hint": "Antériorité : to have + participe passé."
      },
      {
        "sentence": "It was ___ that the figures were incomplete. (report)",
        "answer": "reported",
        "hint": "Formule impersonnelle de compte rendu."
      },
      {
        "sentence": "The project is expected ___ attract new partners.",
        "answer": "to",
        "hint": "Expected to + infinitif."
      },
      {
        "sentence": "The files are understood to ___ under review.",
        "answer": "be",
        "hint": "État actuel après to."
      }
    ]
  },
  {
    "unit": 2,
    "id": "en-c1-grammar-06",
    "title": "Nominalisation et groupes nominaux denses",
    "level": "C1",
    "description": "Gérer l’information dans les rapports sans rendre la phrase opaque.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Transformer une action en groupe nominal",
        "explanation": "La nominalisation remplace une proposition verbale par un nom : *the committee reviewed the plan* devient *the committee’s review of the plan*. Elle permet de traiter un événement comme une notion dans un argument suivi. En revanche, elle peut dissimuler l’agent : *the failure of implementation* ne précise pas qui a échoué. À C1, savoir nominaliser implique aussi de savoir revenir à une phrase verbale lorsque la responsabilité doit être explicite.",
        "examples": [
          {
            "english": "The review of the policy took six months.",
            "french": "L’examen de la politique a pris six mois."
          },
          {
            "english": "The exclusion of newcomers created problems.",
            "french": "L’exclusion des nouveaux arrivants a posé problème."
          },
          {
            "english": "Their refusal to disclose the criteria delayed the vote.",
            "french": "Leur refus de divulguer les critères a retardé le vote."
          },
          {
            "english": "The allocation of funds remains contested.",
            "french": "L’affectation des fonds reste contestée."
          }
        ]
      },
      {
        "title": "Densité et lisibilité",
        "explanation": "Les adjectifs, participes et compléments prépositionnels permettent de qualifier un nom : *the independently audited procurement framework*. Toutefois, l’empilement de noms anglais est ambigu : *supplier performance review policy* peut avoir plusieurs analyses. Utilisez of, for, by et les propositions relatives pour clarifier les rapports logiques. Une formulation nominale est utile lorsqu’elle rend le lien plus compact, non lorsqu’elle cache le raisonnement.",
        "examples": [
          {
            "english": "The independently reviewed selection process was retained.",
            "french": "La procédure de sélection examinée indépendamment a été conservée."
          },
          {
            "english": "A review of supplier performance was requested.",
            "french": "Un examen de la performance des fournisseurs a été demandé."
          },
          {
            "english": "The documents submitted by the applicants were incomplete.",
            "french": "Les documents remis par les candidats étaient incomplets."
          },
          {
            "english": "The decision to postpone the launch was justified.",
            "french": "La décision de reporter le lancement était justifiée."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "The ___ of funds remains controversial. (allocate)",
        "answer": "allocation",
        "hint": "Nom correspondant à allocate."
      },
      {
        "sentence": "The committee’s ___ of the evidence took weeks. (assess)",
        "answer": "assessment",
        "hint": "Nom de assessment."
      },
      {
        "sentence": "Their refusal ___ publish the data caused concern.",
        "answer": "to",
        "hint": "Refusal to + infinitif."
      },
      {
        "sentence": "The documents submitted ___ the applicants were incomplete.",
        "answer": "by",
        "hint": "Agent du participe passé."
      },
      {
        "sentence": "The ___ of some voices distorted the findings. (exclude)",
        "answer": "exclusion",
        "hint": "Nom formé sur exclude."
      }
    ]
  },
  {
    "unit": 3,
    "id": "en-c1-grammar-07",
    "title": "Verbes introducteurs et schémas de discours rapporté",
    "level": "C1",
    "description": "Choisir le complément correct et attribuer une prise de position.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "That-clause, -ing et infinitif",
        "explanation": "Chaque verbe introducteur sélectionne un schéma. *Admit/deny + -ing* : *She denied altering the figures*. *Urge/warn + personne + to-infinitif* : *They urged editors to correct the headline*. *Concede/maintain/argue + that* permet de restituer un raisonnement. Il est essentiel de ne pas confondre une affirmation du locuteur et un fait établi par le narrateur.",
        "examples": [
          {
            "english": "The editor denied changing the data.",
            "french": "Le rédacteur a nié avoir modifié les données."
          },
          {
            "english": "The scientist conceded that the abstract was unclear.",
            "french": "La chercheuse a reconnu que le résumé manquait de clarté."
          },
          {
            "english": "The campaigners urged the council to respond.",
            "french": "Les militants ont vivement invité le conseil à répondre."
          },
          {
            "english": "She warned readers not to draw that conclusion.",
            "french": "Elle a averti les lecteurs de ne pas tirer cette conclusion."
          }
        ]
      },
      {
        "title": "Reformuler l’attitude, sans surinterpréter",
        "explanation": "*Claim* peut suggérer une distance selon le contexte, alors que *explain* et *point out* présupposent souvent que l’information est donnée pour pertinente. *Allege* concerne une accusation qu’on ne présente pas comme prouvée. *Insist* met l’accent sur la fermeté, pas nécessairement sur la justesse. Un bon compte rendu distingue citation, paraphrase et commentaire de l’auteur.",
        "examples": [
          {
            "english": "The report maintains that the sample is representative.",
            "french": "Le rapport soutient que l’échantillon est représentatif."
          },
          {
            "english": "Witnesses alleged that the records were altered.",
            "french": "Des témoins ont allégué que les archives avaient été modifiées."
          },
          {
            "english": "The editor pointed out that the correction was visible.",
            "french": "La rédactrice a fait remarquer que la rectification était visible."
          },
          {
            "english": "He insisted that the figures had been checked.",
            "french": "Il a maintenu fermement que les chiffres avaient été vérifiés."
          }
        ]
      },
      {
        "title": "Verbe : disclose — formes et collocations",
        "explanation": "disclose / disclosed / disclosed.\nExpressions : disclose a source, disclose a conflict of interest, disclose relevant information",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "She denied ___ the quotation. (alter)",
        "answer": "altering",
        "hint": "Deny + -ing."
      },
      {
        "sentence": "The researchers urged the newspaper ___ amend the headline.",
        "answer": "to",
        "hint": "Urge + complément + to."
      },
      {
        "sentence": "The journalist conceded ___ the title was misleading.",
        "answer": "that",
        "hint": "Concede that + proposition."
      },
      {
        "sentence": "They warned readers not ___ confuse the two measures.",
        "answer": "to",
        "hint": "Warn + objet + not to."
      },
      {
        "sentence": "The editor insisted ___ the study was correctly cited.",
        "answer": "that",
        "hint": "Insist that + proposition."
      }
    ]
  },
  {
    "unit": 3,
    "id": "en-c1-grammar-08",
    "title": "Propositions participiales et relatives réduites",
    "level": "C1",
    "description": "Condensation grammaticale et attribution sans ambiguïté.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Participle clauses : simultanéité et cause",
        "explanation": "Une proposition en -ing peut ajouter une circonstance de temps, de manière ou de cause : *Examining the image, she noticed...*. Son sujet implicite est normalement celui de la principale. Une ouverture telle que *Walking to work, the report appeared* créerait un sujet flottant absurde. *Having + participe passé* marque une action antérieure lorsqu’il faut insister sur l’ordre.",
        "examples": [
          {
            "english": "Examining the timestamp, she noticed an inconsistency.",
            "french": "En examinant l’horodatage, elle a remarqué une incohérence."
          },
          {
            "english": "Having checked the source, the editor issued a correction.",
            "french": "Après avoir vérifié la source, le rédacteur a publié une rectification."
          },
          {
            "english": "Knowing the risks, the committee postponed the launch.",
            "french": "Connaissant les risques, la commission a reporté le lancement."
          },
          {
            "english": "Faced with contradictory accounts, she asked for more evidence.",
            "french": "Confrontée à des récits contradictoires, elle a demandé davantage de preuves."
          }
        ]
      },
      {
        "title": "Reduced relatives : qui fait quoi ?",
        "explanation": "Une relative active peut souvent devenir *noun + -ing* : *the researcher working on the case*. Une relative passive devient fréquemment *noun + participe passé* : *the document published yesterday*. Ne réduisez pas une relative si la temporalité, l’agent ou la négation risquent de devenir ambigus. La réduction n’est pas synonyme de sophistication : la clarté prime.",
        "examples": [
          {
            "english": "The image shared online was several months old.",
            "french": "L’image partagée en ligne datait de plusieurs mois."
          },
          {
            "english": "The team investigating the claim found the original photograph.",
            "french": "L’équipe enquêtant sur l’affirmation a retrouvé la photographie originale."
          },
          {
            "english": "Records obtained from the station contradicted the caption.",
            "french": "Des documents obtenus auprès de la gare contredisaient la légende."
          },
          {
            "english": "Anyone seeking further details can contact the archive.",
            "french": "Toute personne souhaitant plus de détails peut contacter les archives."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "___ checked the source, the editor published a correction.",
        "answer": "Having",
        "hint": "Ayant vérifié : Having + participe passé."
      },
      {
        "sentence": "The photograph ___ online was old. (share)",
        "answer": "shared",
        "hint": "Relative passive réduite."
      },
      {
        "sentence": "___ at the clock, she noticed the mismatch. (look)",
        "answer": "Looking",
        "hint": "Participe avec sujet identique."
      },
      {
        "sentence": "The journalists ___ the claim contacted the station. (investigate)",
        "answer": "investigating",
        "hint": "Relative active réduite."
      },
      {
        "sentence": "___ with conflicting dates, he delayed publication. (face)",
        "answer": "Faced",
        "hint": "Participe passé introduisant une circonstance."
      }
    ]
  },
  {
    "unit": 3,
    "id": "en-c1-grammar-09",
    "title": "Ellipse et substitution dans un débat",
    "level": "C1",
    "description": "Éviter la répétition en préservant la référence.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Do so, so/not et auxiliaires de reprise",
        "explanation": "*Do so* remplace un groupe verbal d’action préalablement mentionné : *They corrected the report, and we did so too*. Après *think, hope, suppose, expect*, *so/not* peuvent reprendre une proposition : *I hope so; I hope not*. La reprise exige un antécédent clairement identifiable. *Do so* convient moins naturellement à certains états qu’à des actions volontaires.",
        "examples": [
          {
            "english": "The editor issued a correction and the magazine did so too.",
            "french": "Le rédacteur a publié une rectification et le magazine en a fait autant."
          },
          {
            "english": "Will the notice reach everyone? I doubt it will.",
            "french": "L’avis atteindra-t-il tout le monde ? J’en doute."
          },
          {
            "english": "Are the figures reliable? I hope so.",
            "french": "Les chiffres sont-ils fiables ? Je l’espère."
          },
          {
            "english": "She expected a reply, but none came.",
            "french": "Elle attendait une réponse, mais aucune n’est venue."
          }
        ]
      },
      {
        "title": "One/ones, that/those et évitement des faux référents",
        "explanation": "*One/ones* remplacent des noms dénombrables connus : *the revised one*. Pour comparer deux réalités déjà nommées, *that/those of* convient souvent mieux dans un style soutenu : *the findings were unlike those of the earlier report*. Évitez de substituer mécaniquement *one* à des noms indénombrables ou de laisser *that* sans référent précis.",
        "examples": [
          {
            "english": "The later review was more cautious than the earlier one.",
            "french": "Le bilan ultérieur était plus prudent que le précédent."
          },
          {
            "english": "The findings differ from those of the previous study.",
            "french": "Les résultats diffèrent de ceux de l’étude précédente."
          },
          {
            "english": "The first explanation was clearer than the revised one.",
            "french": "La première explication était plus claire que la version révisée."
          },
          {
            "english": "Some readers shared the claim; others did not.",
            "french": "Certains lecteurs ont partagé l’affirmation ; d’autres non."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "The magazine corrected the story, and the website did ___ too.",
        "answer": "so",
        "hint": "Do so remplace une action déjà exprimée."
      },
      {
        "sentence": "Will the committee approve the plan? I hope ___.",
        "answer": "so",
        "hint": "Hope so : reprendre la proposition affirmative."
      },
      {
        "sentence": "The newer report was longer than the older ___.",
        "answer": "one",
        "hint": "Nom singulier dénombrable omis."
      },
      {
        "sentence": "These findings differ from ___ of the first trial.",
        "answer": "those",
        "hint": "Those of + nom."
      },
      {
        "sentence": "The writers expected a reply, but ___ arrived. (aucune réponse : none)",
        "answer": "none",
        "hint": "Aucun exemplaire du nom attendu."
      }
    ]
  },
  {
    "unit": 4,
    "id": "en-c1-grammar-10",
    "title": "Conditionnels mixtes et conséquence actuelle",
    "level": "C1",
    "description": "Relier explicitement une hypothèse passée à la situation présente.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Passé irréel → présent irréel",
        "explanation": "Dans *If I had accepted the grant, I would be working in research now*, le past perfect situe la condition non réalisée dans le passé et *would + base verbale* exprime sa conséquence actuelle. Ce n’est pas un troisième conditionnel mal construit : les deux temps renvoient à deux points différents. Les repères *now, today, still* clarifient fréquemment l’effet présent.",
        "examples": [
          {
            "english": "If she had finished the course, she would have a qualification now.",
            "french": "Si elle avait terminé la formation, elle aurait aujourd’hui un diplôme."
          },
          {
            "english": "If we had listened earlier, we would not be facing this problem.",
            "french": "Si nous avions écouté plus tôt, nous ne serions pas confrontés à ce problème."
          },
          {
            "english": "He would be less anxious if the committee had replied.",
            "french": "Il serait moins inquiet si la commission avait répondu."
          },
          {
            "english": "Had I known the costs, I would be more cautious today.",
            "french": "Si j’avais connu les coûts, je serais plus prudent aujourd’hui."
          }
        ]
      },
      {
        "title": "État général contrefactuel → événement passé",
        "explanation": "On peut aussi lier une condition générale imaginaire à un résultat passé : *If the policy were clearer, we would have decided sooner*. Ici were décrit la situation hypothétique durable, tandis que would have + participe renvoie à un résultat passé non réalisé. L’emploi de *was* peut exister à l’oral, mais *were* est habituel dans les hypothèses soutenues, quelle que soit la personne.",
        "examples": [
          {
            "english": "If the procedure were simpler, they would have applied last year.",
            "french": "Si la procédure était plus simple, ils auraient présenté leur candidature l’an dernier."
          },
          {
            "english": "If she were less cautious, she might have published the draft.",
            "french": "Si elle était moins prudente, elle aurait peut-être publié le brouillon."
          },
          {
            "english": "We would have objected sooner if the evidence were available to everyone.",
            "french": "Nous aurions protesté plus tôt si les preuves étaient accessibles à tous."
          },
          {
            "english": "If I spoke the language, I could have helped at the hearing.",
            "french": "Si je parlais cette langue, j’aurais pu aider lors de l’audience."
          }
        ]
      },
      {
        "title": "Verbe : withstand — formes et collocations",
        "explanation": "withstand / withstood / withstood.\nExpressions : withstand scrutiny, withstand pressure, withstood a legal challenge",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "If they had consulted residents, they ___ know more now.",
        "answer": "would / could / might",
        "hint": "Condition passée → conséquence présente."
      },
      {
        "sentence": "If the rules were fairer, fewer applicants ___ have withdrawn.",
        "answer": "would / might / could",
        "hint": "État imaginaire → conséquence passée."
      },
      {
        "sentence": "She would be here today if she ___ received funding.",
        "answer": "had",
        "hint": "Past perfect de la condition passée."
      },
      {
        "sentence": "If I ___ in charge, I would have postponed the vote.",
        "answer": "were / was",
        "hint": "Hypothèse irréelle générale."
      },
      {
        "sentence": "If we had preserved the files, we would not ___ searching now.",
        "answer": "be",
        "hint": "Would be + -ing pour un présent hypothétique."
      }
    ]
  },
  {
    "unit": 4,
    "id": "en-c1-grammar-11",
    "title": "Modaux parfaits : déduction, critique et nécessité",
    "level": "C1",
    "description": "Distinguer ce qui était possible, nécessaire ou regrettable.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Déduction rétrospective : must/might/can’t have",
        "explanation": "*Must have + participe* signale une forte déduction portant sur le passé, non une obligation. *Might/could have* marque une possibilité; *can’t have* l’impossibilité logique selon les indices du locuteur. On évitera de présenter un *must have* comme une preuve juridique : la certitude linguistique reste celle de la personne qui infère.",
        "examples": [
          {
            "english": "The note must have been removed before publication.",
            "french": "La note a dû être retirée avant la publication."
          },
          {
            "english": "The witness might have misunderstood the question.",
            "french": "Le témoin a peut-être mal compris la question."
          },
          {
            "english": "They can’t have read the complete file.",
            "french": "Ils n’ont pas pu lire le dossier complet."
          },
          {
            "english": "The error could have arisen during editing.",
            "french": "L’erreur a pu apparaître lors de la révision."
          }
        ]
      },
      {
        "title": "Regret et obligation passée : should / needn’t have",
        "explanation": "*Should have + participe* exprime qu’une action passée aurait été souhaitable, mais ne l’a pas été. *Needn’t have + participe* indique qu’une action effectivement accomplie était inutile. À distinguer de *didn’t need to*, qui ne précise pas toujours si l’action a eu lieu. *Could have* peut aussi exprimer une possibilité non réalisée selon le contexte.",
        "examples": [
          {
            "english": "We should have checked the access route.",
            "french": "Nous aurions dû vérifier l’accès."
          },
          {
            "english": "You needn’t have printed the report; the digital copy was accepted.",
            "french": "Vous n’aviez pas besoin d’imprimer le rapport ; la version numérique suffisait."
          },
          {
            "english": "The council could have warned the residents sooner.",
            "french": "Le conseil aurait pu prévenir les habitants plus tôt."
          },
          {
            "english": "They shouldn’t have omitted that testimony.",
            "french": "Ils n’auraient pas dû omettre ce témoignage."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "She ___ have checked the entrance before the performance. (critique rétrospective : utilisez should)",
        "answer": "should",
        "hint": "Critique d’une omission passée."
      },
      {
        "sentence": "They can’t have ___ the whole file. (read)",
        "answer": "read",
        "hint": "Participe passé de read, forme écrite inchangée."
      },
      {
        "sentence": "We needn’t have ___ extra copies. (print)",
        "answer": "printed",
        "hint": "Action effectuée mais inutile."
      },
      {
        "sentence": "The error might have ___ during editing. (occur)",
        "answer": "occurred",
        "hint": "Might have + participe passé."
      },
      {
        "sentence": "He must have ___ the warning; it was in his reply. (see)",
        "answer": "seen",
        "hint": "Déduction forte au passé."
      }
    ]
  },
  {
    "unit": 4,
    "id": "en-c1-grammar-12",
    "title": "Conditionnels inversés dans les registres formels",
    "level": "C1",
    "description": "Formuler une hypothèse sans if.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Had + sujet + participe passé",
        "explanation": "*Had I known...* équivaut à *If I had known...* et exprime une condition passée irréelle dans un registre formel. L’inversion porte sur had, pas sur le verbe lexical. Elle apparaît volontiers dans un rapport, une plaidoirie ou un texte littéraire. Évitez d’ajouter *if* à cette même proposition inversée : *If had I known* est incorrect.",
        "examples": [
          {
            "english": "Had the panel heard the whole recording, it might have reconsidered.",
            "french": "Si la commission avait entendu l’enregistrement entier, elle aurait peut-être réexaminé sa décision."
          },
          {
            "english": "Had we received the files, we would have replied.",
            "french": "Si nous avions reçu les dossiers, nous aurions répondu."
          },
          {
            "english": "Had she been informed, she could have objected.",
            "french": "Si elle avait été informée, elle aurait pu protester."
          },
          {
            "english": "Had the warning reached management, action might have followed.",
            "french": "Si l’avertissement était parvenu à la direction, des mesures auraient peut-être suivi."
          }
        ]
      },
      {
        "title": "Were et should dans les hypothèses prudentes",
        "explanation": "*Were the policy to change...* correspond à *If the policy were to change...* et envisage une situation hypothétique, peu probable ou purement théorique. *Should you require assistance...* remplace *If you should require assistance...* et offre une possibilité polie, typique des communications administratives. Le sens exact varie avec le contexte ; les deux modèles ne sont pas des formules interchangeables.",
        "examples": [
          {
            "english": "Were the rules to change, we would notify everyone.",
            "french": "Si les règles venaient à changer, nous préviendrions tout le monde."
          },
          {
            "english": "Should any concerns arise, contact the chair.",
            "french": "Si des difficultés devaient survenir, contactez la présidence."
          },
          {
            "english": "Were I responsible, I would publish the full record.",
            "french": "Si j’étais responsable, je publierais le dossier intégral."
          },
          {
            "english": "Should the evidence prove unreliable, the hearing will be reopened.",
            "french": "Si les preuves s’avèrent peu fiables, l’audience sera rouverte."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "___ the committee received the evidence earlier, it might have acted.",
        "answer": "Had",
        "hint": "Conditionnel inversé passé."
      },
      {
        "sentence": "___ the policy to change, residents would be notified.",
        "answer": "Were",
        "hint": "Were + sujet + to-infinitif."
      },
      {
        "sentence": "___ any difficulty arise, please inform the coordinator.",
        "answer": "Should",
        "hint": "Should + sujet + base verbale."
      },
      {
        "sentence": "Had I ___ aware of the risk, I would have objected.",
        "answer": "been",
        "hint": "Had + participe passé."
      },
      {
        "sentence": "___ she in charge, she would publish the minutes.",
        "answer": "Were",
        "hint": "Were + sujet + complément."
      }
    ]
  },
  {
    "unit": 5,
    "id": "en-c1-grammar-13",
    "title": "Concession nuancée : much as, albeit, despite",
    "level": "C1",
    "description": "Conserver une tension argumentative sans faux équilibre.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Although, even though et much as",
        "explanation": "*Although/even though* introduisent une proposition complète. *Even though* souligne un contraste factuel plus marqué. *Much as* accepte souvent un verbe d’attitude (*Much as I admire...*) ou exprime une concession relativement soutenue. La proposition concessive n’implique pas que les deux positions soient aussi solides l’une que l’autre : elle signale un obstacle à la conclusion principale.",
        "examples": [
          {
            "english": "Although the project was expensive, it improved access.",
            "french": "Bien que le projet ait été coûteux, il a amélioré l’accès."
          },
          {
            "english": "Even though the data were promising, the team delayed expansion.",
            "french": "Même si les données étaient encourageantes, l’équipe a reporté l’extension."
          },
          {
            "english": "Much as I value public green space, the costs need scrutiny.",
            "french": "Même si j’accorde beaucoup d’importance aux espaces verts, les coûts doivent être examinés."
          },
          {
            "english": "The proposal was attractive, though the timetable was unrealistic.",
            "french": "La proposition était attrayante, mais le calendrier était irréaliste."
          }
        ]
      },
      {
        "title": "Despite, in spite of, albeit et whereas",
        "explanation": "*Despite/in spite of* précèdent un nom ou un groupe en -ing, non une proposition finie sans *the fact that*. *Albeit* est formel et introduit typiquement un adjectif, un adverbe ou un élément réduit : *a useful, albeit limited, trial*. *Whereas/while* marquent davantage un contraste entre réalités qu’une concession causale. Évitez le calque *despite of*.",
        "examples": [
          {
            "english": "Despite repeated objections, the council approved the pilot.",
            "french": "Malgré les objections répétées, le conseil a approuvé le projet pilote."
          },
          {
            "english": "The trial was useful, albeit limited in scope.",
            "french": "L’essai était utile, bien que de portée limitée."
          },
          {
            "english": "The first district gained trees, whereas the second lost parking.",
            "french": "Le premier quartier a gagné des arbres, tandis que le second a perdu des places de stationnement."
          },
          {
            "english": "In spite of having little funding, the group completed the survey.",
            "french": "Malgré des moyens réduits, le groupe a achevé l’enquête."
          }
        ]
      },
      {
        "title": "Verbe : offset — formes et collocations",
        "explanation": "offset / offset / offset.\nExpressions : offset emissions, offset costs, offset the impact",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "___ as I admire the plan, the budget concerns me.",
        "answer": "Much",
        "hint": "Much as + proposition."
      },
      {
        "sentence": "The study was informative, ___ limited in scale.",
        "answer": "albeit / though / although",
        "hint": "Albeit introduit une concession réduite."
      },
      {
        "sentence": "Despite ___ objections, the measure passed. (plusieurs : several)",
        "answer": "several",
        "hint": "Despite + groupe nominal."
      },
      {
        "sentence": "The first proposal improved access, ___ the second reduced costs.",
        "answer": "whereas / while",
        "hint": "Contraste entre deux propositions."
      },
      {
        "sentence": "In spite ___ the delays, the trial continued.",
        "answer": "of",
        "hint": "Locution in spite of."
      }
    ]
  },
  {
    "unit": 5,
    "id": "en-c1-grammar-14",
    "title": "But, résultat et conséquence dans les propositions non finies",
    "level": "C1",
    "description": "Préciser intention, mécanisme et effet secondaire.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "So as to / in order to : objectif",
        "explanation": "*So as to* et *in order to* introduisent un objectif et sont suivis d’une base verbale ; la négation s’insère avant to : *so as not to*. Le sujet implicite est normalement celui de la principale. Dans un rapport, ces structures rendent la finalité explicite, mais ne prouvent pas que le résultat visé a été atteint.",
        "examples": [
          {
            "english": "The team installed sensors so as to measure indoor temperatures.",
            "french": "L’équipe a posé des capteurs afin de mesurer les températures intérieures."
          },
          {
            "english": "We delayed publication in order to verify the figures.",
            "french": "Nous avons différé la publication afin de vérifier les chiffres."
          },
          {
            "english": "They revised the signs so as not to confuse visitors.",
            "french": "Ils ont modifié la signalétique pour ne pas égarer les visiteurs."
          },
          {
            "english": "The council consulted carers to identify access problems.",
            "french": "Le conseil a consulté les aidants pour identifier les difficultés d’accès."
          }
        ]
      },
      {
        "title": "Thereby, only to et résultat inattendu",
        "explanation": "*Thereby + -ing* décrit une conséquence produite par l’action principale, souvent dans des textes techniques : *thereby reducing costs*. *Only to + infinitif* introduit fréquemment un résultat décevant ou surprenant : *They opened the roof only to discover...*. Il ne s’agit pas d’une expression du but ; l’écart entre attente et réalité est central.",
        "examples": [
          {
            "english": "The team standardised the form, thereby reducing errors.",
            "french": "L’équipe a normalisé le formulaire, réduisant ainsi les erreurs."
          },
          {
            "english": "They added roof access only to discover a safety risk.",
            "french": "Ils ont ajouté un accès au toit pour découvrir finalement un risque de sécurité."
          },
          {
            "english": "The policy shifted costs, thereby disguising the workload.",
            "french": "La politique a déplacé les coûts, masquant ainsi la charge de travail."
          },
          {
            "english": "We arrived early, only to find the hearing cancelled.",
            "french": "Nous sommes arrivés tôt, pour découvrir que l’audience était annulée."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "The team used sensors so as ___ compare the rooms.",
        "answer": "to",
        "hint": "But : so as to + base verbale."
      },
      {
        "sentence": "They revised the notice so as not ___ alarm residents.",
        "answer": "to",
        "hint": "Forme négative : so as not to."
      },
      {
        "sentence": "They simplified the form, thereby ___ delays. (reduce)",
        "answer": "reducing",
        "hint": "Thereby + -ing."
      },
      {
        "sentence": "He returned to the office, only ___ find it closed.",
        "answer": "to",
        "hint": "Résultat inattendu : only to."
      },
      {
        "sentence": "The research was extended in order ___ test seasonal effects.",
        "answer": "to",
        "hint": "In order to + base verbale."
      }
    ]
  },
  {
    "unit": 5,
    "id": "en-c1-grammar-15",
    "title": "Relatives complexes et commentaires entre propositions",
    "level": "C1",
    "description": "Maîtriser les liens précis entre référents et arguments.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Préposition + which/whom",
        "explanation": "Dans un registre soutenu, une préposition peut précéder *which* (chose) ou *whom* (personne) : *the process by which decisions are made*. Dans une relative définissante familière, la préposition reste souvent en fin de proposition : *the process we rely on*. Une virgule change la relation logique : une relative non définissante apporte un commentaire supplémentaire.",
        "examples": [
          {
            "english": "The framework within which decisions are made is unclear.",
            "french": "Le cadre dans lequel les décisions sont prises manque de clarté."
          },
          {
            "english": "The residents to whom the letter was addressed replied.",
            "french": "Les habitants auxquels la lettre était adressée ont répondu."
          },
          {
            "english": "The assumptions on which the figures rely must be disclosed.",
            "french": "Les hypothèses sur lesquelles reposent les chiffres doivent être divulguées."
          },
          {
            "english": "The street, which had long been neglected, was redesigned.",
            "french": "La rue, longtemps négligée, a été réaménagée."
          }
        ]
      },
      {
        "title": "Whereby et which commentant une proposition",
        "explanation": "*Whereby* signifie « par lequel / selon lequel » à propos d’un mécanisme ou accord : *a scheme whereby...*. Une relative en *which* peut commenter toute la proposition précédente : *The council withdrew the proposal, which surprised residents*. Distinguez ce commentaire d’une relative qualifiant seulement le nom adjacent. Pour éviter toute ambiguïté, reformulez parfois avec *This decision...*.",
        "examples": [
          {
            "english": "They adopted a model whereby local groups maintain the trees.",
            "french": "Ils ont adopté un dispositif selon lequel des associations locales entretiennent les arbres."
          },
          {
            "english": "The council published the objections, which reassured some residents.",
            "french": "Le conseil a rendu publiques les objections, ce qui a rassuré certains habitants."
          },
          {
            "english": "The pilot, which began in May, will be reviewed in autumn.",
            "french": "Le projet pilote, qui a commencé en mai, sera évalué à l’automne."
          },
          {
            "english": "This is the basis on which the recommendation rests.",
            "french": "C’est le fondement sur lequel repose la recommandation."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "The rules under ___ the grant was awarded are public.",
        "answer": "which",
        "hint": "Préposition + which."
      },
      {
        "sentence": "The applicants to ___ we wrote have replied.",
        "answer": "whom",
        "hint": "Personnes après une préposition soutenue."
      },
      {
        "sentence": "The council changed course, ___ surprised residents.",
        "answer": "which",
        "hint": "Which reprend la proposition entière."
      },
      {
        "sentence": "They signed an agreement ___ local groups would maintain the trees.",
        "answer": "whereby / under which / in which",
        "hint": "Whereby : mécanisme prévu par un accord."
      },
      {
        "sentence": "The report sets out the evidence on ___ its conclusion rests.",
        "answer": "which",
        "hint": "On which introduit le fondement."
      }
    ]
  },
  {
    "unit": 6,
    "id": "en-c1-grammar-16",
    "title": "Mise en relief par déplacement et inversion",
    "level": "C1",
    "description": "Choisir un ordre marqué pour guider l’attention du lecteur.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Fronting : déplacer une information connue ou contrastive",
        "explanation": "Déplacer un complément en tête peut créer un contraste : *That argument I understand; the conclusion I reject*. L’ordre est marqué, souvent littéraire ou polémique, et demande un contexte clair. Avec certains compléments de lieu ou adjectifs initiaux, une inversion complète sujet-verbe apparaît : *On the wall hung a portrait*. Ce n’est pas la même construction que l’inversion auxiliaire-sujet après *rarely*.",
        "examples": [
          {
            "english": "That objection I accept; the accusation I reject.",
            "french": "Cette objection, je l’accepte ; l’accusation, je la rejette."
          },
          {
            "english": "Into the room came a group of visitors.",
            "french": "Un groupe de visiteurs entra dans la salle."
          },
          {
            "english": "On the table lay a folded letter.",
            "french": "Sur la table reposait une lettre pliée."
          },
          {
            "english": "Such a claim we cannot endorse.",
            "french": "Une telle affirmation, nous ne pouvons l’approuver."
          }
        ]
      },
      {
        "title": "So + adjectif/adverbe et such + nom",
        "explanation": "En tête d’une proposition emphatique, *So + adjectif + be/auxiliaire + sujet + that...* renforce le degré : *So compelling was the evidence that...*. *Such + be + groupe nominal* convient pour une présentation presque théâtrale : *Such was the silence that...*. Ces formes sont stylistiquement fortes et ne doivent pas remplacer systématiquement les constructions neutres.",
        "examples": [
          {
            "english": "So striking was the ending that nobody applauded immediately.",
            "french": "La fin était si saisissante que personne n’a applaudi immédiatement."
          },
          {
            "english": "Such was the confusion that the editor issued a note.",
            "french": "La confusion fut telle que la rédactrice publia une note."
          },
          {
            "english": "So carefully had she prepared that the objection did not surprise her.",
            "french": "Elle s’était préparée avec tant de soin que l’objection ne la surprit pas."
          },
          {
            "english": "So profound was the change that the old label became untenable.",
            "french": "Le changement fut si profond que l’ancienne étiquette devint indéfendable."
          }
        ]
      },
      {
        "title": "Verbe : convey — formes et collocations",
        "explanation": "convey / conveyed / conveyed.\nExpressions : convey ambiguity, convey a tone, convey a message",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "So striking ___ the final image that the room fell silent.",
        "answer": "was",
        "hint": "So + adjectif + inversion."
      },
      {
        "sentence": "On the table ___ a sealed envelope. (lie, past simple)",
        "answer": "lay",
        "hint": "Inversion complète avec lieu en tête."
      },
      {
        "sentence": "Such ___ the confusion that the meeting was postponed.",
        "answer": "was",
        "hint": "Such was + groupe nominal."
      },
      {
        "sentence": "That proposal I ___; this one I reject. (accept, présent)",
        "answer": "accept",
        "hint": "Objet topicalisé, ordre sujet-verbe conservé."
      },
      {
        "sentence": "Into the room ___ the curators. (come, past simple)",
        "answer": "came",
        "hint": "Complément de direction + inversion lexicale."
      }
    ]
  },
  {
    "unit": 6,
    "id": "en-c1-grammar-17",
    "title": "Déterminants, référence et choix distributifs",
    "level": "C1",
    "description": "Lever les ambiguïtés entre quantité, ensemble et identité.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Each/every et agreement",
        "explanation": "*Each* met les membres en relief individuellement, tandis que *every* envisage la totalité comme une série exhaustive. Tous deux se construisent généralement avec un nom singulier et un verbe singulier : *Each participant has...*. *Each of the participants* est possible ; *every of* ne l’est pas. *Either/neither* renvoient classiquement à deux options, *none* pouvant viser un ensemble plus large.",
        "examples": [
          {
            "english": "Each contributor received a written reply.",
            "french": "Chaque contributeur a reçu une réponse écrite."
          },
          {
            "english": "Every page of the report includes a source note.",
            "french": "Toutes les pages du rapport comportent une note de source."
          },
          {
            "english": "Neither proposal addresses the central issue.",
            "french": "Aucune des deux propositions ne traite le problème central."
          },
          {
            "english": "Each of the three editors had a different concern.",
            "french": "Chacun des trois rédacteurs avait une préoccupation différente."
          }
        ]
      },
      {
        "title": "Référence : former/latter, both, either, few/little",
        "explanation": "*The former/the latter* sont utiles pour reprendre deux éléments clairement nommés, mais deviennent opaques dans une longue phrase. *Few* porte sur les noms dénombrables; *little* sur les indénombrables. La présence de *a* modifie radicalement l’évaluation : *few objections* suggère une insuffisance, *a few objections* une petite quantité réelle. Les reprises doivent rester univoques.",
        "examples": [
          {
            "english": "The essay and the review differ: the former is analytical, the latter personal.",
            "french": "L’essai et la critique diffèrent : le premier est analytique, la seconde personnelle."
          },
          {
            "english": "Few readers noticed the correction.",
            "french": "Peu de lecteurs ont remarqué la rectification."
          },
          {
            "english": "A few readers challenged the claim.",
            "french": "Quelques lecteurs ont contesté l’affirmation."
          },
          {
            "english": "Little evidence supports that interpretation.",
            "french": "Peu de preuves étayent cette interprétation."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Each of the reviewers ___ received a copy.",
        "answer": "has / had",
        "hint": "Each of + nom pluriel, accord singulier standard."
      },
      {
        "sentence": "___ of the two endings is especially convincing. (aucune des deux : neither)",
        "answer": "Neither",
        "hint": "Aucune des deux fins."
      },
      {
        "sentence": "Of the two books, the former was a memoir; the ___ was fiction.",
        "answer": "latter",
        "hint": "Opposition former/latter."
      },
      {
        "sentence": "There is very ___ evidence for that claim.",
        "answer": "little",
        "hint": "Evidence est indénombrable."
      },
      {
        "sentence": "A ___ readers raised a different objection.",
        "answer": "few",
        "hint": "Quelques lecteurs, quantité positive."
      }
    ]
  },
  {
    "unit": 6,
    "id": "en-c1-grammar-18",
    "title": "Comparaison nuancée et jugement critique",
    "level": "C1",
    "description": "Développer une évaluation non binaire.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Far from, rather than et not so much...as",
        "explanation": "*Far from + -ing/adjectif* rejette une interprétation attendue : *Far from simplifying the problem...*. *Rather than* exprime une préférence ou une correction, mais sa construction doit rester parallèle (*rather than explain/explaining* selon le contexte). *Not so much A as B* permet de réorienter l’explication sans affirmer que A est totalement faux.",
        "examples": [
          {
            "english": "Far from being neutral, the translation changes the voice.",
            "french": "Loin d’être neutre, la traduction modifie la voix."
          },
          {
            "english": "She preserved the hesitation rather than smoothing it away.",
            "french": "Elle a conservé l’hésitation au lieu de l’effacer."
          },
          {
            "english": "It was not so much a mistake as a deliberate compromise.",
            "french": "Il s’agissait moins d’une erreur que d’un compromis délibéré."
          },
          {
            "english": "The review questions the framing rather than the figures.",
            "french": "La critique interroge le cadrage plutôt que les chiffres."
          }
        ]
      },
      {
        "title": "No less, hardly, nowhere near et comparaisons intensifiées",
        "explanation": "*No less...than* peut soutenir une équivalence inattendue, tandis que *nowhere near as...as* marque un écart important. *Hardly any* minimise la quantité; *by far* renforce un superlatif. À C1, l’intensité doit reposer sur les preuves du texte : employer des superlatifs sans comparaison identifiable affaiblit la crédibilité de l’évaluation.",
        "examples": [
          {
            "english": "The second version is nowhere near as clear as the first.",
            "french": "La seconde version est loin d’être aussi claire que la première."
          },
          {
            "english": "The closing scene is by far the strongest part.",
            "french": "La scène finale est de loin la partie la plus réussie."
          },
          {
            "english": "There is hardly any evidence for that reading.",
            "french": "Il n’existe presque aucune preuve en faveur de cette interprétation."
          },
          {
            "english": "The quieter performance is no less powerful than the first.",
            "french": "L’interprétation plus sobre n’est pas moins puissante que la première."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Far from ___ neutral, the note changes the interpretation.",
        "answer": "being",
        "hint": "Far from + -ing."
      },
      {
        "sentence": "She kept the ambiguity rather ___ explain it away.",
        "answer": "than",
        "hint": "Rather than + base verbale parallèle."
      },
      {
        "sentence": "The revised version is nowhere near ___ precise as the original.",
        "answer": "as",
        "hint": "Comparatif nowhere near as...as."
      },
      {
        "sentence": "It was not so much a failure ___ a warning.",
        "answer": "as",
        "hint": "Not so much A as B."
      },
      {
        "sentence": "This is by ___ the most persuasive interpretation.",
        "answer": "far",
        "hint": "By far renforce le superlatif."
      }
    ]
  },
  {
    "unit": 7,
    "id": "en-c1-grammar-19",
    "title": "Aspect et chronologie dans les projets complexes",
    "level": "C1",
    "description": "Exprimer des durées, des bilans et des échéances avec précision.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Future perfect et future perfect continuous",
        "explanation": "*Will have + participe passé* présente une action accomplie avant un point futur; *will have been + -ing* souligne une activité en cours pendant une durée mesurée jusqu’à ce point. Les deux ne sont pas toujours interchangeables : le premier met en avant le résultat, le second la durée et le processus. Les repères *by next March*, *by the time* ou *for two years* doivent rendre l’échéance claire.",
        "examples": [
          {
            "english": "By June, the researchers will have published the protocol.",
            "french": "D’ici juin, les chercheurs auront publié le protocole."
          },
          {
            "english": "By June, they will have been collecting samples for a year.",
            "french": "En juin, cela fera un an qu’ils recueilleront des échantillons."
          },
          {
            "english": "The trial will have ended before the review begins.",
            "french": "L’essai sera terminé avant le début de l’évaluation."
          },
          {
            "english": "She will have been coordinating the study for eighteen months.",
            "french": "Cela fera dix-huit mois qu’elle coordonnera l’étude."
          }
        ]
      },
      {
        "title": "Past perfect continuous et lecture des causes",
        "explanation": "*Had been + -ing* présente une activité antérieure prolongée dont l’effet est pertinent à un moment passé : *The team had been testing the sensor when the fault appeared*. Cette forme insiste sur la durée ou le déroulement, non forcément sur l’achèvement. Avec les verbes d’état, une forme simple est souvent préférable. Le point de référence passé doit rester identifiable dans les longs rapports.",
        "examples": [
          {
            "english": "They had been monitoring the street before the road closed.",
            "french": "Ils surveillaient la rue depuis un certain temps avant sa fermeture."
          },
          {
            "english": "She was exhausted because she had been reviewing evidence all night.",
            "french": "Elle était épuisée parce qu’elle avait examiné des preuves toute la nuit."
          },
          {
            "english": "By the first hearing, we had been waiting for months.",
            "french": "À la première audience, nous attendions depuis des mois."
          },
          {
            "english": "The team had completed the analysis before the panel met.",
            "french": "L’équipe avait terminé l’analyse avant la réunion du groupe."
          }
        ]
      },
      {
        "title": "Verbe : reassess — formes et collocations",
        "explanation": "reassess / reassessed / reassessed.\nExpressions : reassess assumptions, reassess a risk, reassess an initial conclusion",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "By December, they will have ___ the report. (complete)",
        "answer": "completed",
        "hint": "Will have + participe passé."
      },
      {
        "sentence": "By the review, they will have been ___ data for two years. (collect)",
        "answer": "collecting",
        "hint": "Will have been + -ing."
      },
      {
        "sentence": "She had been ___ the evidence all evening when the call arrived. (check)",
        "answer": "checking",
        "hint": "Past perfect continuous."
      },
      {
        "sentence": "The team will ___ finished before the auditors arrive.",
        "answer": "have",
        "hint": "Future perfect."
      },
      {
        "sentence": "They ___ been monitoring the site for months when the fault emerged.",
        "answer": "had",
        "hint": "Past perfect continuous au passé."
      }
    ]
  },
  {
    "unit": 7,
    "id": "en-c1-grammar-20",
    "title": "Regret, préférence et révision des choix",
    "level": "C1",
    "description": "Exprimer le contrefactuel sans confondre les temps.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "If only / I wish + past perfect",
        "explanation": "Pour regretter un fait passé non modifiable, utilisez *I wish/If only + past perfect* : *If only we had consulted residents*. Pour une situation présente contraire à la réalité, le past simple suffit : *I wish we had more time*. *Wish + would* exprime plus volontiers le désir de voir changer un comportement, souvent celui d’autrui; il ne remplace pas automatiquement tous les souhaits.",
        "examples": [
          {
            "english": "If only we had tested the service earlier.",
            "french": "Si seulement nous avions testé le service plus tôt."
          },
          {
            "english": "I wish the guidelines were clearer.",
            "french": "J’aimerais que les consignes soient plus claires."
          },
          {
            "english": "She wishes she had kept the original notes.",
            "french": "Elle regrette de ne pas avoir conservé les notes initiales."
          },
          {
            "english": "I wish the committee would respond more promptly.",
            "french": "J’aimerais que la commission réponde plus rapidement."
          }
        ]
      },
      {
        "title": "Would rather / It’s time + past simple",
        "explanation": "*I would rather you checked the facts* exprime une préférence concernant l’action d’une autre personne, avec un passé de distance, même lorsque la demande vise le présent ou l’avenir. Pour une préférence sur un passé déjà révolu : *I’d rather you had told me*. *It’s time + sujet + past simple* critique implicitement un retard : *It’s time we revised the policy*. Ne lisez pas ces passés comme des événements déjà accomplis.",
        "examples": [
          {
            "english": "I would rather you contacted the applicants directly.",
            "french": "Je préférerais que vous contactiez directement les candidats."
          },
          {
            "english": "I’d rather you had mentioned the risk sooner.",
            "french": "J’aurais préféré que vous mentionniez le risque plus tôt."
          },
          {
            "english": "It’s time we reconsidered the timetable.",
            "french": "Il est temps que nous réexaminions le calendrier."
          },
          {
            "english": "She would rather the team waited for the evidence.",
            "french": "Elle préférerait que l’équipe attende les preuves."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "If only we ___ consulted users before launching.",
        "answer": "had",
        "hint": "Regret passé : past perfect."
      },
      {
        "sentence": "I wish the instructions ___ clearer today.",
        "answer": "were / was",
        "hint": "Souhait présent irréel."
      },
      {
        "sentence": "I would rather you ___ the results before publication. (check)",
        "answer": "checked",
        "hint": "Préférence présente sur l’action d’autrui."
      },
      {
        "sentence": "It’s time we ___ the criteria. (revise)",
        "answer": "revised",
        "hint": "It’s time + past simple."
      },
      {
        "sentence": "I would rather you had ___ me yesterday. (tell)",
        "answer": "told",
        "hint": "Regret passé après would rather."
      }
    ]
  },
  {
    "unit": 7,
    "id": "en-c1-grammar-21",
    "title": "Subjonctif formel et recommandations institutionnelles",
    "level": "C1",
    "description": "Exprimer exigences et propositions dans les textes administratifs.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "That + base verbale après les exigences",
        "explanation": "En anglais formel, notamment américain, des verbes et adjectifs d’exigence peuvent introduire un subjonctif en forme de base : *It is essential that everyone be informed* et *They recommend that she attend*. Le verbe ne prend pas de -s à la troisième personne. En anglais britannique, *should + base verbale* est aussi fréquent. Ce n’est pas la même valeur que le subjonctif français dans toutes ses constructions.",
        "examples": [
          {
            "english": "It is vital that every participant be heard.",
            "french": "Il est essentiel que chaque participant soit entendu."
          },
          {
            "english": "They recommend that she submit a written response.",
            "french": "Ils recommandent qu’elle remette une réponse écrite."
          },
          {
            "english": "The panel requested that the document remain confidential.",
            "french": "La commission a demandé que le document reste confidentiel."
          },
          {
            "english": "It is imperative that the evidence be preserved.",
            "french": "Il est impératif que les preuves soient conservées."
          }
        ]
      },
      {
        "title": "Registre, passif et mise en œuvre",
        "explanation": "La tournure *that + be + participe passé* permet de formuler un principe sans désigner immédiatement un agent : *that the process be reviewed*. Il faudra ensuite attribuer explicitement la responsabilité dans le plan d’action. Dans un message ordinaire, une phrase moins soutenue (*Please make sure everyone gets a copy*) peut être plus appropriée. L’exigence linguistique ne dispense pas de clarté opérationnelle.",
        "examples": [
          {
            "english": "The committee proposes that the rule be amended.",
            "french": "La commission propose que la règle soit modifiée."
          },
          {
            "english": "It is essential that the minutes be published.",
            "french": "Il est essentiel que le procès-verbal soit publié."
          },
          {
            "english": "The chair requested that he be given access.",
            "french": "La présidente a demandé qu’il ait accès aux documents."
          },
          {
            "english": "Please ensure that everyone receives the update.",
            "french": "Veillez à ce que tout le monde reçoive la mise à jour."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "It is essential that every witness ___ informed.",
        "answer": "be / should be",
        "hint": "Subjonctif formel : base verbale be."
      },
      {
        "sentence": "They requested that she ___ a written reply. (submit)",
        "answer": "submit / should submit",
        "hint": "Base verbale sans -s."
      },
      {
        "sentence": "The panel recommends that the policy ___ reviewed.",
        "answer": "be / should be",
        "hint": "Subjonctif passif."
      },
      {
        "sentence": "It is vital that nobody ___ excluded.",
        "answer": "be / should be",
        "hint": "Subjonctif passif négatif."
      },
      {
        "sentence": "The board insisted that the record ___ kept securely.",
        "answer": "be / should be",
        "hint": "Be + participe passé après that d’exigence."
      }
    ]
  }
];

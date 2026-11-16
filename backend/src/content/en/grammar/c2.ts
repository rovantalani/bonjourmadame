import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarC2: GrammarLesson[] = [
  {
    "unit": 1,
    "id": "en-c2-grammar-01",
    "title": "Degré de certitude et responsabilité énonciative",
    "level": "C2",
    "description": "Interpréter la force d’une affirmation plutôt que seulement son temps.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Modaux épistémiques au parfait",
        "explanation": "Must have + participe marque une inférence forte sur le passé; may/might/could have + participe laissent ouverte une possibilité. Cette modalité ne prouve pas l’événement: elle encode le jugement du locuteur sur des indices. Had to n’est pas un substitut automatique de must have, puisqu’il peut exprimer une obligation réelle. En C2, demandez toujours qui évalue la preuve, à partir de quoi et avec quel degré d’engagement.",
        "examples": [
          {
            "english": "The manager may have misunderstood the request.",
            "french": "Le responsable a peut-être mal compris la demande."
          },
          {
            "english": "She must have seen the revised document.",
            "french": "Elle a forcément vu le document révisé, selon le locuteur."
          },
          {
            "english": "They had to disclose the records.",
            "french": "Ils avaient l’obligation de divulguer les dossiers."
          }
        ]
      },
      {
        "title": "Portée de la réserve et engagement",
        "explanation": "May well have renforce la plausibilité tout en maintenant une réserve; might have been forgiven n’affirme pas que le pardon a eu lieu. À l’inverse, cannot have est souvent une inférence négative forte. Les réserves ne sont pas de simples ornements diplomatiques: elles délimitent ce que la phrase permet de tenir pour établi.",
        "examples": [
          {
            "english": "The director may well have been right about the headlines.",
            "french": "La directrice avait peut-être bien raison concernant les titres."
          },
          {
            "english": "That cannot have been the only explanation.",
            "french": "Cela ne saurait avoir été la seule explication."
          },
          {
            "english": "The witness might have been mistaken.",
            "french": "Le témoin a pu se tromper."
          }
        ]
      },
      {
        "title": "Verbe : contend — formes et usages",
        "explanation": "contend / contended / contended.\nExpressions : contend that, contend with a difficulty, contend for recognition",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez l’inférence forte : « Her name is on the signed receipt; she ___ it. » (see)",
        "answer": "must have seen",
        "hint": "Must have + participe : déduction, non obligation passée."
      },
      {
        "sentence": "Exprimez une possibilité prudente : « The chair ___ the objection. » (might / overlook, passé)",
        "answer": "might have overlooked",
        "hint": "Might have + participe."
      },
      {
        "sentence": "Complétez l’impossibilité déduite : « He was abroad, and remote participation was impossible; he ___ the meeting in person. » (attend)",
        "answer": "cannot have attended / can’t have attended / could not have attended / couldn’t have attended",
        "hint": "Cannot have + participe."
      },
      {
        "sentence": "Complétez le commentaire sur la plausibilité : « She ___ right about the immediate reaction. » (utilisez may well et be au parfait)",
        "answer": "may well have been",
        "hint": "May well have been : hypothèse fortement plausible."
      },
      {
        "sentence": "Traduisez « Ils avaient l’obligation de signaler le risque » par le groupe verbal : « They ___ the risk. »",
        "answer": "had to report",
        "hint": "Had to = nécessité réelle au passé, et non déduction."
      }
    ]
  },
  {
    "unit": 1,
    "id": "en-c2-grammar-02",
    "title": "Présupposés, implicatures et demandes trompeuses",
    "level": "C2",
    "description": "Distinguer ce qui est affirmé de ce que la formulation présume.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "La question peut contenir une thèse",
        "explanation": "Dans When did you stop...?, la question présuppose qu’un comportement a commencé puis cessé. Une réponse donnant seulement une date accepterait implicitement ce cadre. Les verbes factifs (regret, realise, know) et les constructions it was X that... peuvent également introduire des présupposés. À l’oral et à l’écrit, savoir les identifier permet de répondre sans se laisser enfermer dans un choix biaisé.",
        "examples": [
          {
            "english": "When did you first suspect the figures were unreliable?",
            "french": "Quand avez-vous commencé à soupçonner que les chiffres n’étaient pas fiables ?"
          },
          {
            "english": "I reject the premise of the question.",
            "french": "Je conteste le présupposé de la question."
          },
          {
            "english": "She regrets revealing the file.",
            "french": "Elle regrette d’avoir révélé le dossier (présuppose la révélation)."
          }
        ]
      },
      {
        "title": "Implicature et correction coopérative",
        "explanation": "Une implicature est une conclusion pragmatique, non une conséquence logique nécessaire. Dire Some participants agreed suggère souvent not all, sans l’affirmer strictement. Une reformulation responsable rend visible la prémisse et propose une question neutre. C2 ne consiste pas à compliquer toute question, mais à reconnaître quand une formulation simple déforme les options disponibles.",
        "examples": [
          {
            "english": "Are you asking whether I approved it or merely knew about it?",
            "french": "Demandez-vous si je l’ai approuvé ou si j’en avais seulement connaissance ?"
          },
          {
            "english": "Several witnesses mentioned the issue.",
            "french": "Plusieurs témoins ont mentionné le problème (sans exclure tous)."
          },
          {
            "english": "Which discrepancy did you report, and when?",
            "french": "Quelle anomalie avez-vous signalée, et quand ?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Réfutez la prémisse : « When did you stop concealing the data? » → « I ___ . » (utilisez reject)",
        "answer": "reject the premise",
        "hint": "Formule explicite de contestation."
      },
      {
        "sentence": "Complétez : « Are you asking whether I approved the plan or merely ___ it? » (know about, past simple)",
        "answer": "knew about",
        "hint": "Distinguer validation et connaissance."
      },
      {
        "sentence": "Dans « She regrets leaking the memo », que présuppose regret ? Répondez en anglais.",
        "answer": "she leaked the memo / that she leaked the memo / she had leaked the memo",
        "hint": "Un verbe factif présuppose la proposition complément."
      },
      {
        "sentence": "Complétez la question neutre : « Which ___ did you notice, if any? » (anomalie : discrepancy)",
        "answer": "discrepancy",
        "hint": "If any empêche de présupposer une anomalie."
      },
      {
        "sentence": "Évitez de transformer some en all : « Some reviewers objected » → « It does not follow that ___ objected. »",
        "answer": "all reviewers",
        "hint": "L’implicature ne vaut pas preuve universelle."
      }
    ]
  },
  {
    "unit": 1,
    "id": "en-c2-grammar-03",
    "title": "Narration rétrospective et distance ironique",
    "level": "C2",
    "description": "Repérer le décalage entre voix actuelle et croyance passée.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Temps et point de vue",
        "explanation": "Dans un récit rétrospectif, le past simple peut rapporter la croyance du personnage d’alors, tandis qu’un commentaire au présent porte le jugement du narrateur. Les marqueurs surely, of course ou as though changent de sens selon la voix à laquelle on les attribue. L’anglais C2 doit maîtriser ce décalage sans confondre ironie, citation et conviction actuelle.",
        "examples": [
          {
            "english": "Surely the council had acted fairly, he thought.",
            "french": "Le conseil avait sûrement agi équitablement, pensait-il."
          },
          {
            "english": "It was not as though the facts were unavailable.",
            "french": "Ce n’était pas comme si les faits étaient introuvables."
          },
          {
            "english": "He had believed the promise; now he questioned it.",
            "french": "Il avait cru à la promesse ; désormais, il la contestait."
          }
        ]
      },
      {
        "title": "Comme si : hypothèse et irréalité",
        "explanation": "As if/as though peuvent être suivis du prétérit pour marquer une distance avec la réalité, y compris lorsque le contexte est présent. Le past perfect renvoie souvent à une irréalité antérieure. Il faut éviter de traduire mécaniquement ces formes comme un passé chronologique: leur valeur peut être modale. Le choix d’un temps doit être justifié par le point de vue et non par la simple présence de as though.",
        "examples": [
          {
            "english": "He speaks as though he owned the archive.",
            "french": "Il parle comme s’il possédait les archives."
          },
          {
            "english": "She looked as if she had already read the letter.",
            "french": "Elle avait l’air d’avoir déjà lu la lettre."
          },
          {
            "english": "They acted as though nothing had happened.",
            "french": "Ils ont agi comme si rien ne s’était passé."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez l’irréel présent : « He acts as though he ___ the place. » (own)",
        "answer": "owned",
        "hint": "Prétérit modal après as though."
      },
      {
        "sentence": "Complétez l’antériorité : « She looked as if she ___ the report before. » (read)",
        "answer": "had read",
        "hint": "Past perfect : antériorité irréelle ou supposée."
      },
      {
        "sentence": "Complétez l’opposition temporelle : « He ___ it then, but doubts it now. » (believe)",
        "answer": "believed",
        "hint": "Past simple pour la croyance ancienne."
      },
      {
        "sentence": "Complétez : « It was not ___ the facts were hidden. »",
        "answer": "as though / as if",
        "hint": "It was not as though : objection à une excuse supposée."
      },
      {
        "sentence": "Marquez l’évaluation subjective : « ___ the council had acted fairly, he told himself. » (utilisez surely)",
        "answer": "Surely",
        "hint": "Surely reflète ici le jugement du personnage."
      }
    ]
  },
  {
    "unit": 2,
    "id": "en-c2-grammar-04",
    "title": "Portée des conditions et formulations contractuelles",
    "level": "C2",
    "description": "Écrire des obligations dont les exceptions sont identifiables.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Where practicable et la portée",
        "explanation": "Une réserve placée en tête de clause peut limiter l’obligation entière ou une seule méthode: l’emplacement grammatical ne supprime pas toutes les ambiguïtés juridiques. Préférez des propositions distinctes avec déclencheur, sujet responsable, délai et exception mesurable. Shall, fréquent en rédaction normative traditionnelle, ne doit pas être présenté comme un futur ordinaire; dans les contrats, il peut porter une obligation, mais les guides de rédaction privilégient souvent must pour la clarté.",
        "examples": [
          {
            "english": "If an interruption exceeds four hours, the supplier must notify the council.",
            "french": "Si une interruption dépasse quatre heures, le prestataire doit avertir la mairie."
          },
          {
            "english": "Where practicable, an alternative service should be provided.",
            "french": "Lorsque cela est possible en pratique, un service alternatif devrait être proposé."
          },
          {
            "english": "The exception applies only to the notification deadline.",
            "french": "L’exception ne concerne que le délai de notification."
          }
        ]
      },
      {
        "title": "Carve-outs et exceptions explicites",
        "explanation": "Unless exprime une exception; provided that une condition positive; subject to renvoie à une réserve potentiellement définie ailleurs. Ces marqueurs ne sont pas interchangeables: une permission sous condition n’est pas une interdiction assortie d’exception. Une rédaction C2 explicite la portée en rappelant ce qui reste applicable même si une exception se produit.",
        "examples": [
          {
            "english": "Payment is due unless the contract is terminated.",
            "french": "Le paiement est exigible sauf résiliation du contrat."
          },
          {
            "english": "Access is permitted provided that identification is shown.",
            "french": "L’accès est permis à condition de présenter une pièce d’identité."
          },
          {
            "english": "The approval is subject to independent review.",
            "french": "L’autorisation est soumise à un examen indépendant."
          }
        ]
      },
      {
        "title": "Verbe : uphold — formes et usages",
        "explanation": "uphold / upheld / upheld.\nExpressions : uphold a ruling, uphold a duty, uphold an agreement",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez la réserve : « Access is granted ___ evidence of identity is supplied. »",
        "answer": "provided that / providing that / on condition that / if",
        "hint": "Provided that : condition positive."
      },
      {
        "sentence": "Complétez l’exception : « The duty applies ___ the agreement is cancelled. » (utilisez unless)",
        "answer": "unless",
        "hint": "Unless : sauf si."
      },
      {
        "sentence": "Complétez : « The approval is ___ a safety assessment. »",
        "answer": "subject to",
        "hint": "Subject to : sous réserve de."
      },
      {
        "sentence": "Formulez l’obligation : « The supplier ___ notify the authority within 24 hours. » (utilisez must)",
        "answer": "must",
        "hint": "Must marque l’obligation, distincte du futur."
      },
      {
        "sentence": "Complétez : « The exception applies only ___ the reporting deadline. »",
        "answer": "to",
        "hint": "Portée clairement limitée de l’exception."
      }
    ]
  },
  {
    "unit": 2,
    "id": "en-c2-grammar-05",
    "title": "Questions orientées et reformulation probatoire",
    "level": "C2",
    "description": "Éviter de faire accepter un verdict dans une question.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Interrogatives enchâssées",
        "explanation": "Comparez When did you know...? (présuppose un savoir à un moment) et Which evidence did you receive, and when? (demande deux faits vérifiables). Les interrogatives indirectes suivent l’ordre déclaratif : Could you explain when the warning was received?, et non *when was the warning received*. La précision juridique dépend ici autant de la grammaire que de l’éthique de l’interrogatoire.",
        "examples": [
          {
            "english": "Could you explain when the discrepancy was reported?",
            "french": "Pourriez-vous expliquer quand l’anomalie a été signalée ?"
          },
          {
            "english": "The question assumes that I knew the model was wrong.",
            "french": "La question suppose que je savais que le modèle était faux."
          },
          {
            "english": "Which records did you consult at the time?",
            "french": "Quels dossiers avez-vous consultés à l’époque ?"
          }
        ]
      },
      {
        "title": "Reformulation sans concession",
        "explanation": "Des expressions comme I take issue with the premise ou What I can establish is... permettent de refuser une prémisse sans éviter les faits. Les réponses C2 distinguent reconnaissance d’une donnée et adhésion à la qualification proposée par l’interlocuteur. Attention: la politesse n’exige pas de valider un présupposé infondé.",
        "examples": [
          {
            "english": "I can confirm a discrepancy, but not deliberate concealment.",
            "french": "Je peux confirmer une anomalie, non une dissimulation volontaire."
          },
          {
            "english": "That characterisation goes beyond the record.",
            "french": "Cette qualification dépasse ce que le dossier établit."
          },
          {
            "english": "May I distinguish the question from the allegation?",
            "french": "Puis-je distinguer la question de l’accusation ?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Ordre indirect : « Could you tell me when ___? » (the inquiry / begin) (past simple)",
        "answer": "the inquiry began",
        "hint": "Ordre sujet-verbe après when dans une indirecte."
      },
      {
        "sentence": "Complétez : « That characterisation goes ___ the record. »",
        "answer": "beyond",
        "hint": "Goes beyond : surinterprète."
      },
      {
        "sentence": "Complétez : « I can confirm a discrepancy, ___ not misconduct. »",
        "answer": "but",
        "hint": "Concession limitée et distinction des qualifications."
      },
      {
        "sentence": "Complétez : « The question ___ I knew the results were wrong. » (assume, présent)",
        "answer": "assumes",
        "hint": "Assumes indique un présupposé."
      },
      {
        "sentence": "Répondez sans adopter la prémisse : « I take issue with the ___ of that question. » (présupposé : premise)",
        "answer": "premise",
        "hint": "Premise : présupposé implicite."
      }
    ]
  },
  {
    "unit": 2,
    "id": "en-c2-grammar-06",
    "title": "Responsabilité négociée et réserve de droits",
    "level": "C2",
    "description": "Différencier coopération concrète et concession juridique.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Not to be construed as",
        "explanation": "La tournure be construed as signifie « être interprété juridiquement comme ». Elle permet de décrire ce qu’un acte de coopération n’implique pas. À distinguer de mean dans une conversation ordinaire: construed signale explicitement un enjeu d’interprétation et de portée. De même, without prejudice to réserve certains droits; cette expression n’efface pas les obligations positives fixées ailleurs.",
        "examples": [
          {
            "english": "The restart shall not be construed as an admission of liability.",
            "french": "La reprise ne doit pas être interprétée comme un aveu de responsabilité."
          },
          {
            "english": "The talks continue without prejudice to existing rights.",
            "french": "Les négociations continuent sans préjudice des droits existants."
          },
          {
            "english": "Cooperation does not constitute formal endorsement.",
            "french": "La coopération ne constitue pas une approbation formelle."
          }
        ]
      },
      {
        "title": "Obligations divisibles et formulations proportionnées",
        "explanation": "Sous une réserve juridique, il faut pouvoir dire qui accomplira quoi, quand et à quelles conditions. Une formule très générale peut sembler solennelle mais ne rien résoudre. Les modaux de l’obligation doivent être associés à un sujet déterminé et à une action contrôlable, sans laisser le registre diplomatique se substituer à la précision.",
        "examples": [
          {
            "english": "Each party must notify the other of hazards.",
            "french": "Chaque partie doit avertir l’autre des dangers."
          },
          {
            "english": "The arrangement leaves the boundary dispute unresolved.",
            "french": "L’accord laisse le litige frontalier non résolu."
          },
          {
            "english": "Either party may request a review.",
            "french": "Chaque partie peut demander un réexamen."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez : « The payment shall not be ___ as accepting blame. » (construe)",
        "answer": "construed",
        "hint": "Be construed as : être interprété comme."
      },
      {
        "sentence": "Complétez : « without ___ to their respective rights ».",
        "answer": "prejudice",
        "hint": "Réserve de droits existants."
      },
      {
        "sentence": "Complétez : « Cooperation does not ___ an admission. » (constitute)",
        "answer": "constitute",
        "hint": "Constitute signale la qualification juridique."
      },
      {
        "sentence": "Complétez l’obligation réciproque : « Each party must notify the ___ of hazards. »",
        "answer": "other",
        "hint": "Each ... the other : obligation réciproque."
      },
      {
        "sentence": "Complétez : « The dispute remains ___. » (resolve, forme négative)",
        "answer": "unresolved",
        "hint": "Le mécanisme de coopération ne tranche pas le fond."
      }
    ]
  },
  {
    "unit": 3,
    "id": "en-c2-grammar-07",
    "title": "Passif expert et effacement de l’agent",
    "level": "C2",
    "description": "Repérer où un texte technique cache un choix humain.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Passifs processuels",
        "explanation": "Le passif est adapté lorsque le processus ou le résultat importe davantage que son agent: thresholds are calibrated. Il devient problématique quand il présente comme automatiques des décisions interprétatives: ‘the sample was excluded’ ne précise pas qui a fixé les critères. En C2, l’enjeu est de choisir quand rendre l’agent explicite, non de condamner le passif dans tous les cas.",
        "examples": [
          {
            "english": "The thresholds were recalibrated after testing.",
            "french": "Les seuils ont été recalibrés après les essais."
          },
          {
            "english": "The analysts excluded participants without stable addresses.",
            "french": "Les analystes ont exclu les participants sans adresse stable."
          },
          {
            "english": "Responsibility was not specified in the protocol.",
            "french": "La responsabilité n’était pas précisée dans le protocole."
          }
        ]
      },
      {
        "title": "Agent, source et responsabilité",
        "explanation": "By + agent désigne celui qui accomplit l’action; under + procédure indique le cadre; according to + source attribue une information sans en certifier la vérité. Les trois groupes ne jouent pas le même rôle. Les glissements de source et de responsabilité comptent particulièrement dans les rapports où une erreur pourrait affecter des personnes.",
        "examples": [
          {
            "english": "The model was reviewed by an independent team.",
            "french": "Le modèle a été examiné par une équipe indépendante."
          },
          {
            "english": "The records were retained under the revised protocol.",
            "french": "Les dossiers ont été conservés selon la procédure révisée."
          },
          {
            "english": "According to the audit, exclusions altered the results.",
            "french": "Selon l’audit, les exclusions ont modifié les résultats."
          }
        ]
      },
      {
        "title": "Verbe : substantiate — formes et usages",
        "explanation": "substantiate / substantiated / substantiated.\nExpressions : substantiate a claim, substantiate an allegation, documentary evidence",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "Rendez l’agent explicite : « The cases were excluded by the analysts. » → « The analysts ___ the cases. »",
        "answer": "excluded",
        "hint": "Passif → actif."
      },
      {
        "sentence": "Complétez : « The system was assessed ___ an outside panel. »",
        "answer": "by",
        "hint": "By introduit l’agent."
      },
      {
        "sentence": "Complétez : « ___ to the audit, the metric was unstable. »",
        "answer": "According",
        "hint": "Attribution de source."
      },
      {
        "sentence": "Complétez : « The samples were processed ___ the agreed protocol. »",
        "answer": "under",
        "hint": "Under introduit le cadre procédural."
      },
      {
        "sentence": "Complétez le passif : « The thresholds ___ recalibrated yesterday. »",
        "answer": "were",
        "hint": "Were + participe passé."
      }
    ]
  },
  {
    "unit": 3,
    "id": "en-c2-grammar-08",
    "title": "Noms techniques, présupposés et information supprimée",
    "level": "C2",
    "description": "Décompresser des formulations qui font disparaître les opérations.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Nominalisations à déplier",
        "explanation": "The exclusion of borderline observations compresse un acteur, une action et un critère dans un groupe nominal. Pour vérifier un argument, dépliez-le : Who excluded which observations, under what rule? La nominalisation n’est pas erronée; elle favorise parfois la cohésion d’un texte expert. Son coût est de pouvoir dissimuler l’agent et les étapes nécessaires à une évaluation indépendante.",
        "examples": [
          {
            "english": "The exclusion of some records changed the estimate.",
            "french": "L’exclusion de certains dossiers a modifié l’estimation."
          },
          {
            "english": "The team excluded records whose dates were missing.",
            "french": "L’équipe a exclu les dossiers dont les dates manquaient."
          },
          {
            "english": "Their classification relied on an unstated threshold.",
            "french": "Leur classement reposait sur un seuil non explicité."
          }
        ]
      },
      {
        "title": "Distinguer validation et reproductibilité",
        "explanation": "Validated peut signifier contrôlé dans des conditions définies; replicated signifie qu’une autre analyse retrouve un résultat sous une procédure comparable. La langue doit garder ces opérations distinctes. Expressions comme a failed replication peuvent orienter l’attribution de l’échec avant l’examen des méthodes.",
        "examples": [
          {
            "english": "The procedure was validated internally.",
            "french": "La procédure a été validée en interne."
          },
          {
            "english": "The result was not reproduced in a wider sample.",
            "french": "Le résultat n’a pas été reproduit avec un échantillon plus large."
          },
          {
            "english": "The apparent failure invites methodological comparison.",
            "french": "L’échec apparent appelle une comparaison des méthodes."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Dépliez la nominalisation : « Their classification of cases » → « They ___ the cases. » (classify, past simple)",
        "answer": "classified",
        "hint": "Verbe explicite."
      },
      {
        "sentence": "Complétez : « The result was not ___ in a broader sample. » (reproduce)",
        "answer": "reproduced",
        "hint": "Reproduced est plus précis que proved."
      },
      {
        "sentence": "Complétez : « The figure depended on an ___ threshold. » (non explicité : unstated)",
        "answer": "unstated",
        "hint": "Seuil non explicité."
      },
      {
        "sentence": "Complétez : « The analysis included the ___ of two extreme observations. » (exclude, nom)",
        "answer": "exclusion",
        "hint": "Nominalisation de exclude."
      },
      {
        "sentence": "Complétez : « The supposed failure calls for a ___ comparison. » (methodology, adjectif)",
        "answer": "methodological",
        "hint": "Comparer des méthodes, non attribuer une faute."
      }
    ]
  },
  {
    "unit": 3,
    "id": "en-c2-grammar-09",
    "title": "Quantificateurs, négation et portée des conclusions",
    "level": "C2",
    "description": "Distinguer ce que les chiffres montrent de ce qu’on leur fait dire.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Only, all, not all et not only",
        "explanation": "Only 60% were accepted signifie que 60 % seulement l’ont été; Not all were accepted ne précise aucune proportion. Not every est différent de none: il nie l’universalité, non l’existence. L’emplacement de only influe sur la focalisation. En C2, un lecteur doit reconstruire l’ensemble de référence, la période et les éléments exclus avant d’accepter une conclusion générale.",
        "examples": [
          {
            "english": "Only material reaching the facility was measured.",
            "french": "Seuls les matériaux parvenus au centre ont été mesurés."
          },
          {
            "english": "Not all households used that scheme.",
            "french": "Tous les ménages n’utilisaient pas ce dispositif."
          },
          {
            "english": "No household was included in the sample.",
            "french": "Aucun ménage ne figurait dans l’échantillon."
          }
        ]
      },
      {
        "title": "De l’observation à l’inférence",
        "explanation": "Observed, estimated et inferred signalent trois statuts probatoires. Un pourcentage observé sur un sous-groupe ne permet pas d’affirmer mécaniquement une évolution pour la population entière. Les expressions within this sample, in the period studied et on these assumptions restreignent honnêtement la portée de la proposition.",
        "examples": [
          {
            "english": "Within this sample, the proportion doubled.",
            "french": "Dans cet échantillon, la proportion a doublé."
          },
          {
            "english": "This does not establish a citywide improvement.",
            "french": "Cela n’établit pas une amélioration à l’échelle de la ville."
          },
          {
            "english": "The benefit is estimated, not directly observed.",
            "french": "Le bénéfice est estimé, non directement observé."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez la négation partielle : « ___ all participants agreed. »",
        "answer": "Not",
        "hint": "Not all ≠ none."
      },
      {
        "sentence": "Complétez : « ___ participants agreed » pour dire « aucun participant ».",
        "answer": "No",
        "hint": "No participants = aucun."
      },
      {
        "sentence": "Complétez : « The estimate applies only ___ this sample. »",
        "answer": "to",
        "hint": "Restreindre la population de référence."
      },
      {
        "sentence": "Complétez : « The benefit was estimated, not directly ___. » (observe)",
        "answer": "observed",
        "hint": "Statut probatoire."
      },
      {
        "sentence": "Complétez : « This figure does not ___ a nationwide trend. » (establish)",
        "answer": "establish",
        "hint": "N’en conclut pas une tendance générale."
      }
    ]
  },
  {
    "unit": 4,
    "id": "en-c2-grammar-10",
    "title": "Discours indirect libre et voix narrative",
    "level": "C2",
    "description": "Identifier de qui relève un jugement dans un récit sans guillemets.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Mélange des voix",
        "explanation": "Le discours indirect libre reprend les pensées d’un personnage dans la narration à la troisième personne, avec ses évaluations et parfois ses déictiques. Les marqueurs surely, of course, now ou tomorrow peuvent appartenir au personnage même si la phrase est au prétérit. En C2, attribuer ces marqueurs au narrateur au lieu du personnage peut inverser une lecture ironique.",
        "examples": [
          {
            "english": "The council had been fair, surely it had.",
            "french": "Le conseil avait été juste, n’est-ce pas ? (pensée du personnage)."
          },
          {
            "english": "Tomorrow would be different.",
            "french": "Demain serait différent (selon la conscience représentée)."
          },
          {
            "english": "She had known all along—hadn’t she?",
            "french": "Elle l’avait toujours su… n’est-ce pas ?"
          }
        ]
      },
      {
        "title": "Distance critique et indices",
        "explanation": "La narration peut faire entendre une conviction passée tout en laissant au lecteur des éléments qui la contredisent. Il n’existe pas de marqueur grammatical universel du discours indirect libre: sa reconnaissance dépend de la continuité du point de vue, des indices temporels et du contraste entre perception du personnage et faits du récit. Dans vos propres analyses, citez une expression qui signale cette distance.",
        "examples": [
          {
            "english": "The older narrator quietly undermines his earlier certainty.",
            "french": "Le narrateur âgé affaiblit discrètement sa certitude passée."
          },
          {
            "english": "The claim belongs to the younger self, not the narrator’s present judgement.",
            "french": "L’affirmation relève du moi plus jeune, non du jugement présent."
          },
          {
            "english": "The sentence invites the reader to question the belief.",
            "french": "La phrase invite le lecteur à questionner la croyance."
          }
        ]
      },
      {
        "title": "Verbe : evoke — formes et usages",
        "explanation": "evoke / evoked / evoked.\nExpressions : evoke a memory, evoke an atmosphere, evoke sympathy",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez l’effet de distance : « The council had been fair, ___ it had. » (utilisez surely)",
        "answer": "surely",
        "hint": "Surely peut marquer la certitude du personnage."
      },
      {
        "sentence": "Choisissez le recul : « The older narrator ___ his earlier certainty. » (undermine, présent)",
        "answer": "undermines",
        "hint": "Undermine met en cause la croyance ancienne."
      },
      {
        "sentence": "Complétez : « The judgement belongs ___ the younger self. »",
        "answer": "to",
        "hint": "Attribuer la voix."
      },
      {
        "sentence": "Complétez : « Tomorrow ___ be different », dans un récit passé.",
        "answer": "would",
        "hint": "Would : futur vu depuis le passé."
      },
      {
        "sentence": "Complétez la question intérieure : « She had known, ___ she? »",
        "answer": "hadn’t",
        "hint": "Tag question peut faire entendre la voix du personnage."
      }
    ]
  },
  {
    "unit": 4,
    "id": "en-c2-grammar-11",
    "title": "Équivalence imparfaite et registre en traduction",
    "level": "C2",
    "description": "Justifier une traduction selon sa fonction, non sa seule surface.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Sens dénoté, connotation et effet",
        "explanation": "Deux mots peuvent renvoyer au même objet sans partager les connotations ou les usages. Threshold évoque un seuil concret, mais une image culturelle peut lui donner une portée rituelle. Le traducteur doit décider entre explicitation, maintien d’une étrangeté, annotation et substitution, en indiquant ce que chaque choix perd. Le C2 ne suppose pas qu’une traduction unique soit parfaite: il exige des arguments sur les effets produits.",
        "examples": [
          {
            "english": "Entrance captures the location but not the ritual.",
            "french": "Entrance rend le lieu, mais pas le rituel."
          },
          {
            "english": "The note preserves a layered meaning.",
            "french": "La note conserve un sens à plusieurs niveaux."
          },
          {
            "english": "A fluent rendering may flatten the distinction.",
            "french": "Une traduction fluide peut aplatir la distinction."
          }
        ]
      },
      {
        "title": "Marqueurs de jugement éditorial",
        "explanation": "To an extent reconnaît une part d’accord; at the expense of met en évidence le coût d’une option; far from + -ing inverse une interprétation attendue. Ces expressions constituent des actes argumentatifs et ne doivent pas être utilisées comme ornements. Évitez d’écrire que toute étrangeté « enrichit » automatiquement la traduction: donnez le passage et l’effet concerné.",
        "examples": [
          {
            "english": "I agree, to an extent, that the note interrupts the flow.",
            "french": "J’admets en partie que la note interrompt le rythme."
          },
          {
            "english": "Fluency comes at the expense of ambiguity here.",
            "french": "Ici, la fluidité se fait au détriment de l’ambiguïté."
          },
          {
            "english": "Far from being an error, the pause is deliberate.",
            "french": "Loin d’être une erreur, la pause est délibérée."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez : « I agree, ___ an extent. »",
        "answer": "to",
        "hint": "To an extent = dans une certaine mesure."
      },
      {
        "sentence": "Complétez : « Clarity came at the ___ of nuance. »",
        "answer": "expense",
        "hint": "At the expense of."
      },
      {
        "sentence": "Complétez : « Far from ___ careless, the choice was deliberate. »",
        "answer": "being",
        "hint": "Far from + -ing."
      },
      {
        "sentence": "Complétez : « The translation preserves the ___ meaning. » (à plusieurs niveaux : layered)",
        "answer": "layered",
        "hint": "Layered : à plusieurs niveaux."
      },
      {
        "sentence": "Complétez : « A fluent translation may ___ the distinction. » (flatten)",
        "answer": "flatten",
        "hint": "Flatten : aplatir une nuance."
      }
    ]
  },
  {
    "unit": 4,
    "id": "en-c2-grammar-12",
    "title": "Inversion stylistique et gestion du rythme",
    "level": "C2",
    "description": "Employer l’inversion pour un effet précis et non pour faire soutenu.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "So + adjectif et inversion",
        "explanation": "So + adjectif + be/auxiliaire + sujet + that... met un degré extrême en tête et entraîne l’inversion. Il ne s’agit pas de la question interrogative. La construction est marquée, souvent littéraire; son emploi répété dans un essai administratif paraîtrait artificiel. En C2, la maîtrise consiste autant à savoir y renoncer qu’à la former correctement.",
        "examples": [
          {
            "english": "So sudden was the exit that the audience fell silent.",
            "french": "La sortie fut si soudaine que le public se tut."
          },
          {
            "english": "So faint was the sound that nobody noticed.",
            "french": "Le son était si faible que personne ne le remarqua."
          },
          {
            "english": "The exit was so sudden that everyone froze.",
            "french": "La sortie fut si soudaine que tous se figèrent."
          }
        ]
      },
      {
        "title": "Inversion négative et attente narrative",
        "explanation": "Not until, only then et hardly placés en tête demandent une inversion auxiliaire-sujet dans une proposition principale; l’effet consiste à différer la révélation ou à intensifier une rupture. Le déplacement doit être motivé par le contraste du texte. Gardez l’ordre normal dans la proposition temporelle qui suit until.",
        "examples": [
          {
            "english": "Not until she left did the noise become noticeable.",
            "french": "Ce n’est qu’après son départ que le bruit est devenu perceptible."
          },
          {
            "english": "Only then did the spectators begin to applaud.",
            "french": "Alors seulement les spectateurs ont commencé à applaudir."
          },
          {
            "english": "Hardly had she spoken when the lights went out.",
            "french": "À peine avait-elle parlé que les lumières se sont éteintes."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez l’inversion : « So sudden ___ the exit that no one moved. »",
        "answer": "was",
        "hint": "So + adjectif + auxiliaire + sujet."
      },
      {
        "sentence": "Complétez : « Only then ___ the audience understand. »",
        "answer": "did",
        "hint": "Inversion après only then."
      },
      {
        "sentence": "Complétez : « Not until she left ___ the silence register. »",
        "answer": "did",
        "hint": "Not until en tête commande did."
      },
      {
        "sentence": "Complétez : « Hardly ___ the show begun when the lights failed. »",
        "answer": "had",
        "hint": "Hardly had + sujet + participe."
      },
      {
        "sentence": "Remettez en ordre standard : « So quiet was the room » → « The room ___ so quiet. »",
        "answer": "was",
        "hint": "Revenir à l’ordre non marqué."
      }
    ]
  },
  {
    "unit": 5,
    "id": "en-c2-grammar-13",
    "title": "Hypothèses contrefactuelles et responsabilité passée",
    "level": "C2",
    "description": "Éviter de présenter une hypothèse comme un fait établi.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Had + sujet et conséquences passées",
        "explanation": "L’inversion Had the council acted earlier... condense If the council had acted earlier... et introduit une condition passée irréelle. Le résultat peut être past conditional (might have avoided) ou présent si la conséquence demeure actuelle. Ce que la structure imagine ne prouve pas que l’action aurait réellement produit l’effet annoncé: le choix du modal précise le degré d’engagement.",
        "examples": [
          {
            "english": "Had the boundary changed sooner, some homes might have been spared.",
            "french": "Si la limite avait changé plus tôt, certaines maisons auraient peut-être été épargnées."
          },
          {
            "english": "If the records had survived, we would know more today.",
            "french": "Si les archives avaient survécu, nous en saurions davantage aujourd’hui."
          },
          {
            "english": "The measure might have reduced harm; it cannot be proved.",
            "french": "La mesure aurait peut-être réduit les dommages, sans que cela soit prouvable."
          }
        ]
      },
      {
        "title": "Contrefactuels et biais rétrospectif",
        "explanation": "Une phrase en would have affirme une conséquence plus ferme qu’une phrase en might have. Dans des contextes politiques et historiques, exigez que le scénario hypothétique explicite ses conditions et ses limites. Ne présentez pas une information connue aujourd’hui comme si les acteurs du passé l’avaient nécessairement possédée.",
        "examples": [
          {
            "english": "The decision would have looked different with reliable maps.",
            "french": "La décision aurait paru différente avec des cartes fiables."
          },
          {
            "english": "The proposal could have failed even with earlier consultation.",
            "french": "La proposition aurait pu échouer même avec une consultation plus précoce."
          },
          {
            "english": "The evidence does not support a categorical counterfactual.",
            "french": "Les données ne justifient pas un contrefactuel catégorique."
          }
        ]
      },
      {
        "title": "Verbe : mitigate — formes et usages",
        "explanation": "mitigate / mitigated / mitigated.\nExpressions : mitigate a risk, mitigate damage, mitigating measures",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez l’inversion : « ___ the map been published earlier, the vote might have changed. »",
        "answer": "Had",
        "hint": "Conditionnel inversé sans if."
      },
      {
        "sentence": "Exprimez l’incertitude : « The change ___ reduced harm. » (might / have)",
        "answer": "might have",
        "hint": "Réserve sur un contrefactuel."
      },
      {
        "sentence": "Complétez la conséquence actuelle : « If we had preserved the files, we ___ more now. » (know, conséquence actuelle avec would)",
        "answer": "would know",
        "hint": "Mixed conditional."
      },
      {
        "sentence": "Complétez : « The policy could ___ failed anyway. »",
        "answer": "have",
        "hint": "Modal + have + participe."
      },
      {
        "sentence": "Complétez : « The evidence does not support a ___ counterfactual. » (catégorique : categorical)",
        "answer": "categorical",
        "hint": "Sans certitude infondée."
      }
    ]
  },
  {
    "unit": 5,
    "id": "en-c2-grammar-14",
    "title": "Estimations, caveats et degrés de quantification",
    "level": "C2",
    "description": "Produire une affirmation défendable malgré l’incertitude.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Métriques sous conditions",
        "explanation": "Estimated avoided emissions ne signifie pas physically removed carbon. Le participe passé évite de répéter une proposition explicative, mais il peut masquer l’hypothèse de référence. Dans une phrase C2, distinguez systématiquement mesuré, projeté, extrapolé et comparé à un scénario contrefactuel. Ajoutez le champ de validité plutôt que de gonfler l’indication en certitude.",
        "examples": [
          {
            "english": "The estimated saving depends on the baseline.",
            "french": "L’économie estimée dépend du scénario de référence."
          },
          {
            "english": "Observed journeys fell in the sampled districts.",
            "french": "Les trajets observés ont diminué dans les quartiers étudiés."
          },
          {
            "english": "Projected benefits are contingent on maintenance.",
            "french": "Les bénéfices prévus dépendent de l’entretien."
          }
        ]
      },
      {
        "title": "Concession et incertitude productive",
        "explanation": "Admittedly, granted et to be sure acceptent une donnée avant d’en limiter la portée. Les caveats ne sont ni des excuses ni des preuves d’indécision; ils servent à marquer la variable sur laquelle une conclusion dépend. Ne cumulez pas perhaps, possibly, may et maybe jusqu’à rendre la proposition vide; choisissez un seul degré de prudence étayé.",
        "examples": [
          {
            "english": "Admittedly, the interval is wide.",
            "french": "Certes, l’intervalle est large."
          },
          {
            "english": "The benefit may be substantial, provided the system is maintained.",
            "french": "Le bénéfice pourrait être important, à condition que le système soit entretenu."
          },
          {
            "english": "To be sure, the figure is a modelled estimate.",
            "french": "Assurément, le chiffre est une estimation modélisée."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez : « The estimate depends ___ the baseline. »",
        "answer": "on",
        "hint": "Depend on."
      },
      {
        "sentence": "Complétez : « The benefit is contingent ___ maintenance. »",
        "answer": "on",
        "hint": "Contingent on."
      },
      {
        "sentence": "Complétez la concession : « ___, the interval is wide. »",
        "answer": "Admittedly / Granted / To be sure",
        "hint": "Admettre une limite."
      },
      {
        "sentence": "Complétez : « The forecast is modelled, not directly ___. » (observe)",
        "answer": "observed",
        "hint": "Ne pas confondre projection et mesure."
      },
      {
        "sentence": "Complétez : « The measure may succeed, ___ that funding continues. »",
        "answer": "provided / providing",
        "hint": "Provided that."
      }
    ]
  },
  {
    "unit": 5,
    "id": "en-c2-grammar-15",
    "title": "Concession forte et dissensus argumenté",
    "level": "C2",
    "description": "Reconnaître un argument adversaire sans effacer le désaccord.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Be that as it may",
        "explanation": "Be that as it may est une concession idiomatique : « quoi qu’il en soit ». Elle signale qu’un point peut être accepté sans que l’argument principal soit invalidé. It does not follow that exprime l’absence de conséquence logique; il est plus précis que but quand vous contestez une inférence. Le locuteur C2 sépare les prémisses admises des conclusions rejetées.",
        "examples": [
          {
            "english": "Be that as it may, consultation came too late.",
            "french": "Quoi qu’il en soit, la consultation est venue trop tard."
          },
          {
            "english": "The risk is real; it does not follow that this plan is fair.",
            "french": "Le risque est réel ; il ne s’ensuit pas que ce plan soit juste."
          },
          {
            "english": "Granted, delay has costs; so does exclusion.",
            "french": "Certes, le report a un coût ; l’exclusion aussi."
          }
        ]
      },
      {
        "title": "Although, even if et however",
        "explanation": "Although concède un fait présenté comme réel, tandis que even if peut poser un scénario hypothétique; however peut porter une transition argumentative. Une concession honnête décrit la force de l’objection puis explique pourquoi elle ne suffit pas. La simple juxtaposition de deux phrases opposées n’équivaut pas à une réfutation.",
        "examples": [
          {
            "english": "Although the policy is safer, the process remains flawed.",
            "french": "Bien que la mesure soit plus sûre, la procédure reste défaillante."
          },
          {
            "english": "Even if the cost falls, the burden may remain unequal.",
            "french": "Même si le coût baissait, la charge pourrait rester inégale."
          },
          {
            "english": "The majority disagreed; nevertheless, the dissent was published.",
            "french": "La majorité n’était pas d’accord ; néanmoins, l’opinion dissidente a été publiée."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez : « Be that as it ___, the process was flawed. »",
        "answer": "may",
        "hint": "Formule concessive figée."
      },
      {
        "sentence": "Complétez : « It does not ___ that the project is equitable. »",
        "answer": "follow",
        "hint": "Négation d’une inférence."
      },
      {
        "sentence": "Complétez la concession factuelle : « ___ the measure reduces risk, it is uneven. »",
        "answer": "Although / Even though / Though",
        "hint": "Although présente un fait admis."
      },
      {
        "sentence": "Complétez l’hypothèse : « ___ if costs fell, objections could remain. »",
        "answer": "Even",
        "hint": "Even if."
      },
      {
        "sentence": "Complétez : « The minority dissented; ___, its reasons were published. »",
        "answer": "nevertheless / nonetheless / however",
        "hint": "Transition concessive."
      }
    ]
  },
  {
    "unit": 6,
    "id": "en-c2-grammar-16",
    "title": "Politesse non factuelle et autonomie de l’interlocuteur",
    "level": "C2",
    "description": "Formuler un désaccord délicat sans retirer le choix à autrui.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Would, might et past forms de distance",
        "explanation": "I wondered whether... emploie un prétérit pour atténuer la demande actuelle; ce n’est pas nécessairement un événement passé. Would you mind...? donne du contrôle à l’interlocuteur. Mais la politesse formelle ne compense pas une demande intrusive: la formulation doit laisser ouverte une réponse négative et ne pas présupposer le consentement.",
        "examples": [
          {
            "english": "I was wondering whether you would prefer a separate meeting.",
            "french": "Je me demandais si vous préféreriez un entretien distinct."
          },
          {
            "english": "Would you mind explaining that in your own words?",
            "french": "Cela vous dérangerait-il de l’expliquer avec vos mots ?"
          },
          {
            "english": "You may decline without giving a reason.",
            "french": "Vous pouvez refuser sans vous justifier."
          }
        ]
      },
      {
        "title": "Politesse et contrôle de l’agentivité",
        "explanation": "La langue peut transférer la responsabilité de l’incompréhension vers celui qui reçoit ou vers celui qui explique. Could I clarify...? reconnaît que l’explication peut être déficiente; Do you understand? risque d’imputer le problème à l’autre. C2 implique d’adapter la question à la situation, notamment lorsque le rapport de pouvoir est asymétrique.",
        "examples": [
          {
            "english": "Could I check whether my explanation was clear?",
            "french": "Puis-je vérifier si mon explication était claire ?"
          },
          {
            "english": "What would you tell someone else about the options?",
            "french": "Comment présenteriez-vous les options à une autre personne ?"
          },
          {
            "english": "There is no obligation to answer immediately.",
            "french": "Vous n’avez aucune obligation de répondre immédiatement."
          }
        ]
      },
      {
        "title": "Verbe : misconstrue — formes et usages",
        "explanation": "misconstrue / misconstrued / misconstrued.\nExpressions : misconstrue a remark, misconstrue consent, a misconstrued assurance",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez la demande atténuée : « I was ___ whether you had concerns. »",
        "answer": "wondering",
        "hint": "Past continuous de distance."
      },
      {
        "sentence": "Complétez : « Would you ___ explaining the alternatives? »",
        "answer": "mind",
        "hint": "Would you mind + -ing."
      },
      {
        "sentence": "Complétez : « You may ___ without giving a reason. » (decline)",
        "answer": "decline",
        "hint": "Respect de l’autonomie."
      },
      {
        "sentence": "Complétez : « Could I check whether my explanation ___ clear? »",
        "answer": "was / is",
        "hint": "Indirecte de clarification."
      },
      {
        "sentence": "Complétez : « There is no obligation to respond ___. » (immédiatement : immediately)",
        "answer": "immediately",
        "hint": "Le refus et le délai restent possibles."
      }
    ]
  },
  {
    "unit": 6,
    "id": "en-c2-grammar-17",
    "title": "Accord apparent et actes de langage indirects",
    "level": "C2",
    "description": "Distinguer une formule relationnelle d’une décision exécutoire.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Explore, consider, agree to",
        "explanation": "We can explore this peut signifier une possibilité de discussion, pas un accord d’exécution. Agree to do quelque chose implique une décision, tandis que agree that introduit une proposition tenue pour vraie ou acceptable. Une paraphrase de compte rendu qui transforme ces verbes peut changer les obligations. Le C2 identifie l’acte de langage accompli et vérifie son degré d’engagement.",
        "examples": [
          {
            "english": "We agreed to review the proposal, not to implement it.",
            "french": "Nous avons convenu d’examiner la proposition, non de l’exécuter."
          },
          {
            "english": "We could explore a pilot.",
            "french": "Nous pourrions étudier un essai."
          },
          {
            "english": "The manager took tentative interest as approval.",
            "french": "Le responsable a pris un intérêt prudent pour une autorisation."
          }
        ]
      },
      {
        "title": "Rectification diplomatique",
        "explanation": "I may not have expressed myself clearly enough corrige une interprétation sans accuser immédiatement l’autre. La formule ne retire pas le désaccord; elle l’inscrit. Pour éviter une ambiguïté supplémentaire, ajoutez une proposition testable : what was agreed, who is responsible, when it will be revisited.",
        "examples": [
          {
            "english": "I understood us to have agreed only to a review.",
            "french": "J’avais compris que nous étions convenus uniquement d’un examen."
          },
          {
            "english": "To avoid misunderstanding, no implementation has been authorised.",
            "french": "Pour éviter tout malentendu, aucune mise en œuvre n’a été autorisée."
          },
          {
            "english": "Please correct the minutes if your understanding differs.",
            "french": "Veuillez corriger le compte rendu si votre compréhension diffère."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez : « We agreed ___ review the proposal. »",
        "answer": "to",
        "hint": "Agree to + infinitif."
      },
      {
        "sentence": "Complétez : « We did not agree ___ implement it. »",
        "answer": "to",
        "hint": "Agree to + infinitif pour l’engagement envisagé."
      },
      {
        "sentence": "Complétez : « I understood us to ___ agreed to a review. »",
        "answer": "have",
        "hint": "Perfect infinitive après understood us."
      },
      {
        "sentence": "Complétez : « No implementation has been ___. » (authorise)",
        "answer": "authorised / authorized",
        "hint": "Passif d’une autorisation."
      },
      {
        "sentence": "Complétez : « Please correct the ___ if your understanding differs. » (procès-verbal : minutes)",
        "answer": "minutes",
        "hint": "Minutes = procès-verbal."
      }
    ]
  },
  {
    "unit": 6,
    "id": "en-c2-grammar-18",
    "title": "Réserves diplomatiques et conséquences illocutoires",
    "level": "C2",
    "description": "Coopérer sans entériner implicitement le point litigieux.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Without prejudice et sans reconnaissance",
        "explanation": "Without prejudice to existing rights signale qu’une action de coopération ne préjuge pas d’une contestation juridique. Ce n’est ni un refus de coopérer ni une licence de ne pas respecter ses autres engagements. Les actes de langage diplomatiques doivent préciser les obligations présentes tout en préservant le désaccord de fond.",
        "examples": [
          {
            "english": "Repairs will proceed without prejudice to the boundary claim.",
            "french": "Les réparations avanceront sans préjudice de la revendication frontalière."
          },
          {
            "english": "Joint inspection does not imply recognition of the claim.",
            "french": "L’inspection commune n’implique pas la reconnaissance de la revendication."
          },
          {
            "english": "Each side retains its existing position.",
            "french": "Chaque partie conserve sa position actuelle."
          }
        ]
      },
      {
        "title": "Engagement concret et prudence",
        "explanation": "Reasonably practicable ne signifie pas whenever convenient: on attend une justification objective de ce qui était faisable. Au niveau C2, distinguez une impossibilité opérationnelle documentée d’une préférence administrative. Associez les formulations de réserve à des procédures vérifiables, faute de quoi le registre diplomatique n’offre aucune garantie.",
        "examples": [
          {
            "english": "The parties will notify each other as soon as reasonably practicable.",
            "french": "Les parties s’avertiront dès que cela sera raisonnablement possible."
          },
          {
            "english": "A joint hotline will be established.",
            "french": "Une ligne commune sera établie."
          },
          {
            "english": "The communiqué does not settle the dispute.",
            "french": "Le communiqué ne règle pas le litige."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez : « Cooperation proceeds without ___ to legal claims. »",
        "answer": "prejudice",
        "hint": "Réserve des droits."
      },
      {
        "sentence": "Complétez : « Joint action does not ___ recognition. » (imply)",
        "answer": "imply",
        "hint": "Distinguer acte et concession."
      },
      {
        "sentence": "Complétez : « As soon as reasonably ___ ».",
        "answer": "practicable",
        "hint": "Faisable en pratique."
      },
      {
        "sentence": "Complétez : « The communiqué does not ___ the dispute. » (settle)",
        "answer": "settle",
        "hint": "Une coopération n’est pas un règlement définitif."
      },
      {
        "sentence": "Complétez : « Each side ___ its position. » (retain, présent)",
        "answer": "retains",
        "hint": "Conserver la position juridique."
      }
    ]
  },
  {
    "unit": 7,
    "id": "en-c2-grammar-19",
    "title": "Cohésion référentielle et comparaison de sources",
    "level": "C2",
    "description": "Empêcher qu’un texte change de référent sans le signaler.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Anaphores et événements concurrents",
        "explanation": "The closure peut renvoyer à une barrière provisoire ou à un arrêté définitif. Quand deux sources utilisent le même nom pour des événements distincts, la cohésion apparente produit une fausse contradiction. En C2, désambiguïsez par modification nominale : the temporary closure, the permanent closure order. Remplacer aveuglément un terme répété par it ou this peut entretenir l’équivoque.",
        "examples": [
          {
            "english": "The temporary barrier preceded the public consultation.",
            "french": "La barrière provisoire a précédé la consultation publique."
          },
          {
            "english": "The permanent closure order followed it.",
            "french": "L’arrêté définitif de fermeture l’a suivie."
          },
          {
            "english": "These are two related but distinct events.",
            "french": "Ce sont deux événements liés mais distincts."
          }
        ]
      },
      {
        "title": "Provenance et qualification",
        "explanation": "A source says ne vaut pas an event occurred; la structure attribue une proposition. Apparently, allegedly et reportedly présentent des statuts différents: apparently repose sur apparence ou inférence, allegedly sur une allégation, reportedly sur un compte rendu. La langue doit laisser visible la provenance et la force de l’information.",
        "examples": [
          {
            "english": "According to Archive B, the barrier came first.",
            "french": "Selon l’archive B, la barrière a été placée d’abord."
          },
          {
            "english": "The decision was reportedly taken in May.",
            "french": "La décision aurait été prise en mai, d’après des sources."
          },
          {
            "english": "The allegation remains unverified.",
            "french": "L’allégation reste non vérifiée."
          }
        ]
      },
      {
        "title": "Verbe : corroborate — formes et usages",
        "explanation": "corroborate / corroborated / corroborated.\nExpressions : corroborate testimony, corroborate evidence, independent corroboration",
        "examples": []
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez : « The ___ barrier preceded the formal order. » (temporaire : temporary)",
        "answer": "temporary",
        "hint": "Distinguer deux fermetures."
      },
      {
        "sentence": "Complétez : « ___ to Archive B, the order came later. »",
        "answer": "According",
        "hint": "Attribuer une source."
      },
      {
        "sentence": "Complétez : « The claim remains ___. » (non vérifié : unverified)",
        "answer": "unverified",
        "hint": "Ne pas convertir une affirmation en fait établi."
      },
      {
        "sentence": "Complétez : « The two accounts concern distinct ___. » (événements : events)",
        "answer": "events",
        "hint": "Ne pas confondre référents."
      },
      {
        "sentence": "Complétez la modalisation de source : « The decision was ___ taken in May. » (utilisez reportedly)",
        "answer": "reportedly",
        "hint": "Reportedly : d’après des informations rapportées."
      }
    ]
  },
  {
    "unit": 7,
    "id": "en-c2-grammar-20",
    "title": "Causalité, indicateurs et portée des décisions",
    "level": "C2",
    "description": "Formuler une inférence proportionnée aux données disponibles.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Corrélation et mécanisme",
        "explanation": "Correlated with ne signifie pas caused by. Une corrélation peut émerger d’une variable tierce ou disparaître lorsque les pratiques s’adaptent à l’indicateur. En C2, l’emploi de because, therefore ou led to doit être proportionné au type de preuve disponible. Dans une évaluation de politique, distinguez signal d’alerte, mesure de performance et objectif.",
        "examples": [
          {
            "english": "Platform visits were weakly correlated with progress.",
            "french": "Les visites de la plateforme étaient faiblement corrélées aux progrès."
          },
          {
            "english": "The policy changed behaviour in ways the metric did not capture.",
            "french": "La politique a changé des comportements que l’indicateur ne saisissait pas."
          },
          {
            "english": "Correlation alone does not establish causation.",
            "french": "Une corrélation seule ne démontre pas une causalité."
          }
        ]
      },
      {
        "title": "Propositions conditionnelles d’interprétation",
        "explanation": "La même mesure peut être utile pour un objectif et trompeuse pour un autre. Les expressions for the purpose of, as an indicator of et only insofar as délimitent le rôle de la variable. Un bon raisonnement ne conclut pas qu’un indicateur est entièrement inutile dès qu’il échoue dans un usage particulier.",
        "examples": [
          {
            "english": "The count is useful only insofar as it flags abrupt changes.",
            "french": "Le décompte n’est utile que dans la mesure où il signale des changements brusques."
          },
          {
            "english": "It should not serve as a performance target.",
            "french": "Il ne devrait pas servir d’objectif de performance."
          },
          {
            "english": "The interpretation depends on the decision being made.",
            "french": "L’interprétation dépend de la décision considérée."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez : « Correlation does not establish ___. » (causalité : causation)",
        "answer": "causation",
        "hint": "Ne pas confondre association et cause."
      },
      {
        "sentence": "Complétez : « Visits were correlated ___ participation. »",
        "answer": "with",
        "hint": "Correlated with."
      },
      {
        "sentence": "Complétez : « The metric is helpful only insofar ___ it flags change. »",
        "answer": "as",
        "hint": "Only insofar as : uniquement dans la mesure où."
      },
      {
        "sentence": "Complétez : « The indicator became a performance ___. » (objectif : target)",
        "answer": "target",
        "hint": "Transformation du signal en objectif."
      },
      {
        "sentence": "Complétez : « The interpretation depends ___ its intended purpose. »",
        "answer": "on",
        "hint": "Portée d’interprétation."
      }
    ]
  },
  {
    "unit": 7,
    "id": "en-c2-grammar-21",
    "title": "Synthèse contradictoire et jugement révisable",
    "level": "C2",
    "description": "Transformer des données incompatibles en recommandation prudente.",
    "icon": "📖",
    "color": "#4338CA",
    "sections": [
      {
        "title": "Intégrer plutôt que juxtaposer",
        "explanation": "Une synthèse C2 ne consiste pas à résumer la source A puis la source B. Elle établit ce que chacune permet de conclure, identifie les hypothèses incompatibles et explique comment l’on peut décider malgré des lacunes. In isolation et taken together marquent deux opérations distinctes; neither...nor permet de refuser deux conclusions excessives.",
        "examples": [
          {
            "english": "None of the studies is decisive in isolation.",
            "french": "Aucune étude n’est décisive isolément."
          },
          {
            "english": "Taken together, the findings justify a limited trial.",
            "french": "Pris ensemble, les résultats justifient un essai limité."
          },
          {
            "english": "Neither source establishes the date with certainty.",
            "french": "Aucune des deux sources n’établit la date avec certitude."
          }
        ]
      },
      {
        "title": "Conditions de révision",
        "explanation": "Subject to, provided that et unless construisent la révisabilité concrète; un texte vague sur « l’incertitude » ne suffit pas. Une recommandation de niveau C2 précise quelle donnée future ferait changer d’avis et quel organisme en serait responsable. Ce dernier geste transforme la nuance en engagement vérifiable.",
        "examples": [
          {
            "english": "The recommendation remains subject to independent review.",
            "french": "La recommandation demeure soumise à une expertise indépendante."
          },
          {
            "english": "The trial will stop if the harm threshold is exceeded.",
            "french": "L’essai cessera si le seuil de dommage est dépassé."
          },
          {
            "english": "This conclusion should be revisited if new evidence emerges.",
            "french": "Cette conclusion devrait être réexaminée si de nouvelles données apparaissent."
          }
        ]
      }
    ],
    "exercises": [
      {
        "sentence": "Complétez : « None of the studies is decisive in ___. » (isolément : in isolation)",
        "answer": "isolation",
        "hint": "In isolation : isolément."
      },
      {
        "sentence": "Complétez : « ___ together, the sources justify a trial. » (take, participe passé)",
        "answer": "Taken",
        "hint": "Taken together : considérées ensemble."
      },
      {
        "sentence": "Complétez : « ___ source establishes the date beyond doubt. » (aucune des deux : neither)",
        "answer": "Neither",
        "hint": "Neither source : aucune des deux."
      },
      {
        "sentence": "Complétez : « The recommendation is subject ___ a review. »",
        "answer": "to",
        "hint": "Subject to."
      },
      {
        "sentence": "Complétez : « The conclusion should be revisited if new evidence ___. » (emerge, présent)",
        "answer": "emerges",
        "hint": "If + présent pour éventualité future."
      }
    ]
  }
];

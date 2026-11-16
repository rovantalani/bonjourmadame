import type { UnitExam } from '../../../types/exams';

export const unitExams: UnitExam[] = [
  {
    "level": "C2",
    "unit": 1,
    "isDemo": false,
    "passPercent": 80,
    "questions": [
      {
        "id": "c2en-u1-q01",
        "sourceStepId": "c2en-readstep-01",
        "prompt": "Quel déplacement s’opère entre la première et la troisième excuse ?",
        "options": [
          "D’une demande d’enquête à une accusation de fraude contre les résidents.",
          "Du regret pour des archives perdues à la reconnaissance d’un droit de contestation refusé.",
          "D’une reconnaissance de faute à une négation de toute perte."
        ],
        "answers": [
          "Du regret pour des archives perdues à la reconnaissance d’un droit de contestation refusé."
        ],
        "explanation": "La deuxième version nomme déjà le rôle de la politique de classement ; la troisième explicite le droit de contestation dont les personnes ont été privées.",
        "context": "The city archive had drafted three apologies before anyone asked whether the residents wanted one. In the first, the institution regretted that records had been misplaced; in the second, it acknowledged that its own filing policy had made those records inaccessible; in the third, it said that people had been denied the chance to contest decisions made in their names. The differences looked microscopic on the page. In the public hearing, they were anything but. An apology that merely registered regret could be uttered without identifying an actor, whereas the third version came perilously close to admitting a wrong.\n\nThe director might have been forgiven for choosing cautious wording: the archive faced litigation, and no employee wanted to pre-empt a judicial finding. Yet that explanation did not satisfy the residents. If responsibility remained an abstraction, they argued, the institution was asking the public to supply the missing subject of every sentence. ‘We are sorry that mistakes were made’ was grammatically faultless and morally evasive. Nor was there unanimity among the residents. Some preferred a practical commitment to finding documents; others insisted that naming a decision-maker was itself part of the remedy.\n\nIn the hearing's second session, a former clerk described a mundane obstacle: staff had been trained to recognise missing folders as a logistical difficulty, never as a loss of someone's right to appeal. Her account complicated the tempting search for one villain. The faulty policy had been repeated by employees who did not know its origin and defended by supervisors who feared reopening thousands of decisions. Residents, in turn, were unwilling to let the diffusion of responsibility become an excuse for its disappearance. The hearing thus moved from asking whether anyone had intended harm to asking how a system could repeatedly produce it without correction.\n\nA mediator proposed issuing the three drafts side by side, with a note explaining what each did and did not concede. The director called that needlessly provocative. She may well have been right about the immediate headlines, but the objection assumed that public trust could be managed through the wording of a single declaration. What the hearing exposed was a more durable problem: the institution had treated clarity as a liability. The eventual statement described the filing decisions, named the relevant office and set out an independent review. It did not resolve the underlying dispute. It did, however, stop pretending that regret and accountability were interchangeable."
      },
      {
        "id": "c2en-u1-q02",
        "sourceStepId": "c2en-readstep-02",
        "prompt": "Pourquoi la pause de l’interprète était-elle importante ?",
        "options": [
          "Elle a rendu visible une ambiguïté qui aurait autrement disparu du dossier.",
          "Elle a empêché le témoin de continuer.",
          "Elle a effacé une déclaration compromettante."
        ],
        "answers": [
          "Elle a rendu visible une ambiguïté qui aurait autrement disparu du dossier."
        ],
        "explanation": "La pause oblige l’institution à conserver deux interprétations possibles.",
        "context": "At the public inquiry, counsel asked the witness whether she had ‘knowingly endorsed’ the revised safety procedure. The interpreter paused. In the witness’s language, the verb used in her earlier answer could mean either approving a decision or acknowledging that it had already been taken. The distinction was inconvenient to everyone present: an endorsement implied agency, whereas acknowledgement could amount to nothing more than reluctant awareness. The chair requested a single English verb. The interpreter replied that the request itself risked converting uncertainty into evidence.\n\nIn the transcript, the exchange occupies eleven lines; in the press summary it becomes a half-sentence: ‘Witness confirms approval.’ So much for the supposed transparency of verbatim reporting. The interpreter had not refused to translate. Rather, she had supplied a gloss, two plausible renderings and the question necessary to disambiguate them. Counsel objected that this was editorialising. The interpreter observed that choosing one of two meanings without warning would have been a more consequential intervention. What was being disputed, then, was not whether language should influence the record but whose linguistic judgement would remain visible in it.\n\nThe interpreter's professional code required accuracy, impartiality and the avoidance of unnecessary additions. The disagreement showed that those principles cannot always be separated neatly. A rendering that omitted the ambiguity would be fluent but potentially inaccurate; a literal repetition of the original word would be uninterpretable to the court. The interpreter had to make a constrained choice under public scrutiny, while lawyers could challenge the choice and the chair could order further clarification. Far from demonstrating that translation is unreliable, the episode showed why a transparent account of linguistic uncertainty is sometimes the most reliable evidence available.\n\nAn amended transcript placed the original term in a footnote and described the unresolved ambiguity. This did not vindicate the witness; subsequent evidence might still show that she approved the procedure. It did prevent a minor administrative preference for brevity from becoming an unearned certainty. The chair later admitted that a pause can look like obstruction when a hearing is running behind schedule. Here, however, the pause was the most accurate thing in the room."
      },
      {
        "id": "c2en-u1-q03",
        "sourceStepId": "c2en-readstep-03",
        "prompt": "Comment l’auteur de l’essai lit-il le chapitre absent ?",
        "options": [
          "Comme la preuve que l’autrice a oublié son enfance.",
          "Comme un choix éthique qui limite le droit du public à tout savoir.",
          "Comme une ruse qui garantit une suite commerciale."
        ],
        "answers": [
          "Comme un choix éthique qui limite le droit du public à tout savoir."
        ],
        "explanation": "L’absence est présentée comme une limite éthique de la divulgation.",
        "context": "When the memoir appeared, readers praised its candour. The author recounted a childhood spent moving between foster homes, yet passed in silence over the three years following her adoption. Only in an afterword did she explain that the missing period involved people who had never consented to becoming characters. The gap was not a failure of memory; it was a refusal to treat a readable life as a life available for unrestricted public use. That refusal unsettled reviewers accustomed to measuring sincerity by the quantity of private detail disclosed.\n\nThere was the expected complaint that the book had withheld its most dramatic material. More revealing was the praise that framed the omission as an elegant narrative trick. Both reactions, though opposed in tone, treated the absent chapter as an aesthetic resource belonging to the reader. The author’s afterword shifted the question. Why should a person’s restraint be interpreted as coyness merely because publishing has made disclosure commercially attractive? It was not as though the omitted years were otherwise impossible to imagine; in fact, the rest of the narrative made their emotional contours painfully apparent.\n\nSome readers objected that the omitted people could have been anonymised. The suggestion was reasonable in the abstract, but the author noted that a change of names would not alter the recognisable sequence of events for those directly involved. A reviewer responded by accusing her of treating private loyalty as a veto over art. The exchange exposed an assumption shared by both sides: that the writer's decision had to be justified solely in relation to literary quality. The memoir proposed another measure, namely whether a person's power to narrate their life includes a responsibility not to conscript other people into that narration.\n\nThe book’s final paragraph neither fills the gap nor celebrates it. It returns to an ordinary image: a kettle left to cool while a family decides what can be said at supper. That quiet ending makes the reader complicit in a difficult choice. We are invited to ask what a truthful narrative owes those who are implicated in it but do not get a speaking part. The answer, the memoir suggests, may involve respecting a boundary rather than triumphantly crossing it."
      },
      {
        "id": "c2en-u1-q04",
        "sourceStepId": "c2en-readstep-04",
        "prompt": "Pourquoi la lettre révisée paraît-elle plus ferme ?",
        "options": [
          "Elle formule des engagements vérifiables et précise la base de la contestation.",
          "Elle accuse plus ouvertement la destinataire.",
          "Elle interdit toute réponse future."
        ],
        "answers": [
          "Elle formule des engagements vérifiables et précise la base de la contestation."
        ],
        "explanation": "La précision procédurale remplace une sommation unilatérale.",
        "context": "The committee’s original letter began, ‘Your account does not accord with the records available to us.’ The revision said, ‘We have been unable to reconcile your account with the records currently available.’ A sceptic might dismiss the alteration as the sort of diplomatic varnish that institutions apply to avoid saying anything plainly. Yet the second sentence does something precise: it locates the failure to reconcile in the committee’s present knowledge, not necessarily in the recipient’s truthfulness. The distinction becomes vital when the records themselves are incomplete.\n\nA second change caused more friction. The first draft instructed the recipient to ‘correct the public record immediately’; the new one invited her to identify disputed passages before a joint correction was issued. One member worried that the invitation gave an appearance of negotiation over facts. Another responded that the committee had not yet established which claims were factual errors and which were differences of interpretation. To demand a correction before making that distinction would be to win the argument by controlling the procedure.\n\nThe editing group also debated whether the word ‘unable’ weakened the committee's authority. In one sense it did: it acknowledged that the body had not resolved a discrepancy. In another, it made the conclusion more robust by specifying the remaining work. A sentence that says ‘you are wrong’ offers no route for new evidence to matter, whereas a sentence about reconciliation can be revisited when records surface. That revisability was not a rhetorical concession but an epistemic commitment. It required the committee to publish the standard by which it was prepared to change its position.\n\nWhen the letters were read aloud, the courteous revision sounded firmer than the original. Its commitments could be tested: the committee would disclose the evidence relied upon, answer specific objections and publish a chronology of decisions. The first letter, by contrast, asked the other party to do all the work. Not every softening of a sentence conceals a retreat; sometimes precision is the very thing that makes a request harder to evade."
      },
      {
        "id": "c2en-u1-q05",
        "sourceStepId": "c2en-grammarstep-01",
        "prompt": "Une enquête indique une possibilité passée sans certitude. Quelle formulation convient ?",
        "options": [
          "The witness might have heard the warning.",
          "The witness has to hear the warning.",
          "The witness will have heard the warning."
        ],
        "answers": [
          "The witness might have heard the warning."
        ],
        "explanation": "Might have heard présente une hypothèse passée sans la certifier."
      },
      {
        "id": "c2en-u1-q06",
        "sourceStepId": "c2en-grammarstep-02",
        "prompt": "Quelle réponse refuse une prémisse accusatoire sans refuser de répondre sur les faits ?",
        "options": [
          "I accept that the figures were deliberately hidden.",
          "I would question the assumption that concealment occurred.",
          "That never deserves an answer."
        ],
        "answers": [
          "I would question the assumption that concealment occurred."
        ],
        "explanation": "Contester la prémisse permet d’examiner ensuite les éléments."
      },
      {
        "id": "c2en-u1-q07",
        "sourceStepId": "c2en-grammarstep-03",
        "prompt": "Dans une narration rétrospective, « He spoke as though he owned the place » indique surtout...",
        "options": [
          "Une possession certifiée par contrat.",
          "Un événement qui aura lieu demain.",
          "Une distance irréelle, et non une possession certaine."
        ],
        "answers": [
          "Une distance irréelle, et non une possession certaine."
        ],
        "explanation": "Le prétérit après as though marque ici un écart avec la réalité."
      },
      {
        "id": "c2en-u1-q08",
        "sourceStepId": "c2en-phrasestep-01",
        "prompt": "En réunion, comment signaler une inférence trop forte sans accuser ?",
        "options": [
          "That interpretation may go beyond what the record supports.",
          "You are clearly dishonest.",
          "The missing evidence proves deceit."
        ],
        "answers": [
          "That interpretation may go beyond what the record supports."
        ],
        "explanation": "La formule limite la portée de l’inférence."
      },
      {
        "id": "c2en-u1-q09",
        "sourceStepId": "c2en-verbstep-01",
        "prompt": "Le chercheur « soutenait » que l’archive était incomplète. Past simple de contend ?",
        "options": [
          "contendded",
          "contending",
          "contended"
        ],
        "answers": [
          "contended"
        ],
        "explanation": "Past simple régulier : contended."
      },
      {
        "id": "c2en-u1-q10",
        "sourceStepId": "c2en-gvstep-01",
        "prompt": "Quel groupe signifie « assumer la charge de justification » ?",
        "options": [
          "a tacit claim of authority",
          "an implied audience",
          "bear the burden of justification"
        ],
        "answers": [
          "bear the burden of justification"
        ],
        "explanation": "Charge de justifier une affirmation."
      },
      {
        "id": "c2en-u1-q11",
        "sourceStepId": "c2en-gvstep-02",
        "prompt": "Une description fait moralement pencher la lecture. Choisissez le terme.",
        "options": [
          "a retrospective change of heart",
          "a morally loaded description",
          "a strategically placed omission"
        ],
        "answers": [
          "a morally loaded description"
        ],
        "explanation": "Loaded signifie chargé d’une évaluation."
      },
      {
        "id": "c2en-u1-q12",
        "sourceStepId": "c2en-gvstep-02",
        "prompt": "Quel groupe désigne un détail délibérément tu ?",
        "options": [
          "a gap between intent and effect",
          "an unreliable frame of reference",
          "a carefully withheld detail"
        ],
        "answers": [
          "a carefully withheld detail"
        ],
        "explanation": "Withheld renvoie à une rétention volontaire."
      }
    ]
  },
  {
    "level": "C2",
    "unit": 2,
    "isDemo": false,
    "passPercent": 80,
    "questions": [
      {
        "id": "c2en-u2-q01",
        "sourceStepId": "c2en-readstep-05",
        "prompt": "Quel problème principal présente la clause initiale ?",
        "options": [
          "Elle empêche juridiquement toute interruption.",
          "Elle ne mentionne aucun fournisseur.",
          "La portée de sa condition est interprétable de deux façons."
        ],
        "answers": [
          "La portée de sa condition est interprétable de deux façons."
        ],
        "explanation": "Le désaccord porte sur la portée de where practicable.",
        "context": "The procurement contract contained a proviso so familiar that nobody had thought to question it: ‘Where practicable, the supplier shall undertake reasonable efforts to minimise disruption.’ The supplier read ‘where practicable’ as a condition governing the entire obligation; the council believed it modified only the choice of method. Both had approved the clause. Neither could show that the disagreement had been considered during negotiation. A duty left to the imagination of the reader may be administratively convenient, but it is a poor basis for deciding who bears the cost of an unexpected closure.\n\nLegal counsel proposed replacing the proviso with a measurable trigger: if a service interruption exceeded four hours, the supplier must notify the council, provide an alternative service where reasonably available and publish a recovery timetable. The operations team warned that rigid thresholds might reward strategic timing. A closure lasting three hours and fifty-nine minutes could still be disastrous for people whose appointments were missed. Counsel therefore added a separate obligation to report any foreseeable material harm, even where the numerical threshold had not been met.\n\nAn implementation specialist tested the revised wording against three hypothetical failures: a regional power cut, a staff shortage and a protest preventing vehicles from reaching the depot. Under the original clause, every case would invite arguments about what had been ‘practicable’. Under the revision, each event triggered identifiable reporting and mitigation duties, although the required remedy still varied with circumstance. The exercise revealed that precision need not mean pretending circumstances are identical. It means locating discretion where it belongs and making the resulting decisions reviewable rather than leaving every party to negotiate the meaning after harm has occurred.\n\nThe resulting clause was longer but less ambiguous. It did not promise that disruption would never occur; it specified which obligations survived disruption and who would document exceptions. The council later described the revision as ‘tightening compliance’. That phrase, though not false, understated what had changed. Responsibility had been converted from a reassuring adjective into a sequence of observable actions."
      },
      {
        "id": "c2en-u2-q02",
        "sourceStepId": "c2en-readstep-06",
        "prompt": "Que conteste réellement l’ingénieure ?",
        "options": [
          "La compétence du juge à mener l’audience.",
          "L’authenticité des deux messages qu’elle fournit.",
          "Les présupposés de la question, pas l’existence de toute anomalie."
        ],
        "answers": [
          "Les présupposés de la question, pas l’existence de toute anomalie."
        ],
        "explanation": "Elle refuse de transformer une incertitude en conviction arrêtée.",
        "context": "‘When did you first suspect that the forecast was unreliable?’ the barrister asked. The question presupposed both a suspicion and a moment at which it began. The engineer did not accept either premise. ‘I received a range of estimates, each with stated limitations,’ she said. The barrister repeated the question. This time the engineer answered with a question of her own: ‘Are you asking when I believed the model was wrong, or when I knew it could be wrong?’ That distinction irritated the spectators, who wanted a date rather than a philosophy of prediction.\n\nThe judge intervened. A witness may be asked to clarify her reasoning, he said, but should not be required to adopt a characterisation she disputes. Counsel reformulated the inquiry around evidence: which discrepancy had been reported, to whom, and under what procedure? The engineer then gave dates, names and copies of two messages. There had been a discrepancy, but not one that proved the whole forecast unreliable. The records made a narrower account possible, and a narrower account was precisely what the barrister’s first question had made difficult.\n\nThe journalist covering the trial initially quoted only the barrister's question and the engineer's refusal to answer it directly. When a colleague supplied the fuller transcript, the journalist saw that the refusal had been followed by detailed evidence once the terms of the question changed. Editing the report now required admitting that a memorable exchange had been selected at the expense of its context. She rewrote the article around the chronology of the messages and added a short explanation of the presupposition embedded in the original question. The new version made for less dramatic reporting, but a more defensible account of what had been established.\n\nOutside court, a commentator accused the witness of evasion. Yet the transcript offers a different reading. The witness resisted the packaging of an uncertain judgement as a settled state of mind. Nor did she claim complete innocence: she conceded that an earlier review might have reduced the risk. The exchange is a reminder that a question can quietly carry an accusation before any answer is given."
      },
      {
        "id": "c2en-u2-q03",
        "sourceStepId": "c2en-readstep-07",
        "prompt": "Pourquoi la médiation sépare-t-elle reprise du service et responsabilité passée ?",
        "options": [
          "Pour empêcher tout examen ultérieur.",
          "Pour permettre une action immédiate sans préjuger du litige.",
          "Pour masquer le coût de la reprise."
        ],
        "answers": [
          "Pour permettre une action immédiate sans préjuger du litige."
        ],
        "explanation": "Le règlement maintient la question de responsabilité ouverte.",
        "context": "The mediation opened with an apparently modest demand: the contractor should acknowledge that deadlines had been missed. The contractor accepted the dates but refused the word ‘failure’. It argued that the council’s late design changes had rendered the original schedule unattainable. Acknowledgement of delay, it maintained, need not entail acceptance of sole liability. The council, for its part, feared that any public distinction between delay and fault would look like exoneration. The mediator’s first task was not to find a compromise sum but to separate the claims the parties were bundling together.\n\nA private session exposed the actual constraint. The council needed an uninterrupted service before winter; the contractor needed a payment schedule that would not jeopardise its workforce. Neither interest was fully expressed in the public statements. The mediator proposed a staged restart, independent verification of milestones and a separate determination of historic costs. Importantly, the restart would not be construed as either party’s admission of liability. The wording removed an obstacle that had less to do with money than with the future use of an apparently cooperative gesture.\n\nIn drafting the agreement, the mediator avoided calling the solution ‘without prejudice’ in the public summary until the parties had agreed what that expression protected. For the lawyers it referred to future legal arguments; for the staff it raised a fear that the practical agreement could be undone at any moment. An explanatory sentence distinguished the continuing service duties from the unresolved cost claim. This modest exercise in translation between professional registers mattered more than the ornate wording of the settlement. A phrase can stabilise a relationship only when those expected to act on it understand the same commitments.\n\nThe settlement announcement was intentionally spare. Critics called it bloodless, and they had a point: it contained no vindication narrative. But its restraint was functional. By postponing the question of historic blame without suppressing it, the parties secured the service everyone needed. Diplomacy did not erase disagreement; it made disagreement manageable enough to allow action."
      },
      {
        "id": "c2en-u2-q04",
        "sourceStepId": "c2en-readstep-08",
        "prompt": "Pourquoi conserver les définitions dans le document final ?",
        "options": [
          "Elles garantissent à elles seules une enquête juste.",
          "Elles dispensent le conseil de recevoir des signalements.",
          "Elles rendent la procédure compréhensible et contestable."
        ],
        "answers": [
          "Elles rendent la procédure compréhensible et contestable."
        ],
        "explanation": "La visibilité des critères autorise leur contrôle ultérieur.",
        "context": "The board’s announcement of the investigation was accompanied by footnotes that few readers noticed. In the main text, the organisation said that every concern would be taken seriously; in a note, it explained that ‘concern’ did not establish a formal complaint under its procedures. That distinction protected procedural fairness, but the board had to reckon with how the juxtaposition would be heard. Employees who had raised concerns informally might read the footnote as a reason their experiences would never count. Management insisted the definition merely determined which route each report would follow.\n\nA staff representative proposed an alternative. The board could say that informal accounts would be logged, that formal allegations would receive separate examination and that anonymity would be protected to the extent permitted by law. These were not cosmetic changes. Each sentence assigned an obligation to a different stage of the process. One director objected that such detail invited scrutiny. The representative replied that scrutiny was already inevitable; the choice was between scrutinising stated commitments and speculating about concealed ones.\n\nBefore publication, the board sought comments from a small group of affected employees. They pointed out that the new contact point would be useful only if contacting it did not automatically alert a supervisor named in the concern. The board agreed to establish an independent reporting route, but rejected a request to guarantee anonymity in every imaginable circumstance. It explained instead when confidentiality could be limited by legal obligations and who would make that judgement. The revision disappointed employees seeking an absolute promise, yet it avoided offering protection that the organisation lacked the power to deliver.\n\nThe final document kept the definitions but moved them into a clearly marked explanation. It also provided a contact point for people unsure which procedure applied. This did not prove the investigation would be fair. It did make the criteria publicly intelligible, which is a necessary condition for challenging them if they are not applied consistently."
      },
      {
        "id": "c2en-u2-q05",
        "sourceStepId": "c2en-grammarstep-04",
        "prompt": "Quelle clause définit clairement la portée d’une condition ?",
        "options": [
          "The supplier must notify the council within a day unless the office is closed.",
          "The supplier must notify the council within a day; only the notification deadline is extended during a declared outage.",
          "The supplier should do something reasonable if it can."
        ],
        "answers": [
          "The supplier must notify the council within a day; only the notification deadline is extended during a declared outage."
        ],
        "explanation": "La deuxième option délimite l’obligation et son exception."
      },
      {
        "id": "c2en-u2-q06",
        "sourceStepId": "c2en-grammarstep-05",
        "prompt": "Quelle question évite un présupposé contesté ?",
        "options": [
          "What information did you receive, and on what date?",
          "When did you deliberately suppress the evidence?",
          "Why did you finally admit the figures were false?"
        ],
        "answers": [
          "What information did you receive, and on what date?"
        ],
        "explanation": "La troisième n’impose ni faute ni état mental."
      },
      {
        "id": "c2en-u2-q07",
        "sourceStepId": "c2en-grammarstep-06",
        "prompt": "Quelle expression protège une position juridique tout en permettant l’action ?",
        "options": [
          "By repairing the bridge, both parties accept the disputed border.",
          "The repairs proceed without prejudice to the outstanding boundary claim.",
          "Cooperation is forbidden until every claim is abandoned."
        ],
        "answers": [
          "The repairs proceed without prejudice to the outstanding boundary claim."
        ],
        "explanation": "Without prejudice to réserve les droits dans le cadre de la coopération."
      },
      {
        "id": "c2en-u2-q08",
        "sourceStepId": "c2en-phrasestep-02",
        "prompt": "Vous voulez négocier sans accepter la responsabilité passée. Quelle phrase ?",
        "options": [
          "We can agree on next steps without settling the question of liability.",
          "We will never discuss the underlying issue.",
          "We accept sole liability as a condition of speaking."
        ],
        "answers": [
          "We can agree on next steps without settling the question of liability."
        ],
        "explanation": "Sépare action et responsabilité contestée."
      },
      {
        "id": "c2en-u2-q09",
        "sourceStepId": "c2en-verbstep-02",
        "prompt": "Le tribunal a confirmé la décision. Past simple de uphold ?",
        "options": [
          "upholding",
          "upheld",
          "upholded"
        ],
        "answers": [
          "upheld"
        ],
        "explanation": "Past simple irrégulier : upheld."
      },
      {
        "id": "c2en-u2-q10",
        "sourceStepId": "c2en-gvstep-03",
        "prompt": "Une obligation exécutoire est...",
        "options": [
          "a reservation of rights",
          "an enforceable undertaking",
          "a disputed interpretation of a clause"
        ],
        "answers": [
          "an enforceable undertaking"
        ],
        "explanation": "Enforceable : juridiquement applicable."
      },
      {
        "id": "c2en-u2-q11",
        "sourceStepId": "c2en-gvstep-04",
        "prompt": "Vous reformulez une demande présentée comme antagonique.",
        "options": [
          "a time-bound obligation",
          "reframe a zero-sum demand",
          "a material breach of duty"
        ],
        "answers": [
          "reframe a zero-sum demand"
        ],
        "explanation": "Reframe modifie le cadrage de la négociation."
      },
      {
        "id": "c2en-u2-q12",
        "sourceStepId": "c2en-gvstep-03",
        "prompt": "Une clause exclut explicitement la renonciation à un droit.",
        "options": [
          "a non-waiver provision",
          "a verifiable milestone",
          "a face-saving formulation"
        ],
        "answers": [
          "a non-waiver provision"
        ],
        "explanation": "Non-waiver : absence de renonciation."
      }
    ]
  },
  {
    "level": "C2",
    "unit": 3,
    "isDemo": false,
    "passPercent": 80,
    "questions": [
      {
        "id": "c2en-u3-q01",
        "sourceStepId": "c2en-readstep-09",
        "prompt": "Quel effet produit le passif technique dans le rapport ?",
        "options": [
          "Il garantit que chaque choix est neutre.",
          "Il décrit des opérations sans nommer systématiquement leurs auteurs.",
          "Il transforme les erreurs de mesure en fraudes."
        ],
        "answers": [
          "Il décrit des opérations sans nommer systématiquement leurs auteurs."
        ],
        "explanation": "Le texte oppose description technique et responsabilité des choix.",
        "context": "The hospital dashboard displayed a single number beside each department: a predicted likelihood of readmission. Executives liked the ranking because it was stable, legible and apparently comparable across sites. Yet a patient’s return to hospital could indicate a failed discharge, an admirable willingness to seek help, or simply the absence of affordable community care. The metric, though consistent, was not a neutral description of quality. Its definition embedded decisions about what would count as an outcome and what would be treated as background noise.\n\nIn the audit report, errors were identified and adjustments were recommended, but almost no sentence named the team responsible for selecting the variables. The language was technically conventional: models are trained, thresholds are calibrated, results are validated. Those passives recorded processes while obscuring the judgement exercised in designing them. When a nurse asked who had decided to exclude patients without stable addresses, the lead analyst initially pointed to a published protocol. Only after a second question did he acknowledge that the exclusion reflected a local decision about incomplete records.\n\nThe audit team also inspected how the score was used after leaving the dashboard. In one department it triggered a supportive phone call; in another it appeared in staff performance reviews. The same numerical output had acquired different institutional consequences without any change to the algorithm. This observation undermined the assumption that fairness could be settled entirely inside the model. It prompted a proposal to audit the decision made with the score, not merely the score itself. A technically well-calibrated system, the nurses insisted, can still be part of a badly designed process if those affected cannot challenge its use.\n\nThe audit did not recommend abandoning prediction. It proposed publishing a decision log, measuring the effect of each exclusion and reporting results separately for groups with different access to care. A subsequent meeting replaced the comforting question ‘Does the model work?’ with two less tidy ones: for whom does it work, and which decisions become harder to challenge when its score is treated as a fact? The dashboard remained. Its authority no longer went unexamined."
      },
      {
        "id": "c2en-u3-q02",
        "sourceStepId": "c2en-readstep-10",
        "prompt": "Pourquoi « failed replication » est-il trompeur ?",
        "options": [
          "Il prouve que les nouvelles données ont été inventées.",
          "Il suggère que confirmer l’étude initiale était le devoir de la seconde équipe.",
          "Il indique que les deux équipes utilisaient des langues différentes."
        ],
        "answers": [
          "Il suggère que confirmer l’étude initiale était le devoir de la seconde équipe."
        ],
        "explanation": "Le terme attribue implicitement l’échec à ceux qui réexaminent le résultat.",
        "context": "When the second laboratory could not reproduce the headline result, the first team announced that the replication had ‘failed’. The term placed the burden on the replicators, as though their task had been to confirm a published claim. In fact, the new study had followed the original method closely while drawing participants from a wider age range. Its result was not proof that the first study was fraudulent or worthless; it was evidence that the original effect might depend on conditions left unstated in the paper.\n\nThe two teams exchanged code and discovered that a preprocessing choice had been implemented differently. One approach discarded borderline observations, while the other retained them after a predefined check. That choice changed the estimated effect considerably. By compressing the entire dispute into the noun ‘replication’, both groups had concealed the more useful question: which operations had been performed, in what sequence, and with what consequences for the claim? The disagreement was methodological, not merely personal.\n\nBoth laboratories eventually reconstructed their analyses from the same raw data under each processing rule. The exercise produced four estimates, none obviously absurd, whose differences tracked the sensitivity of the published claim. For a moment, members of the first team wanted to choose the version closest to their original figure and declare it the proper specification. Their colleagues pointed out that a decision made after seeing the answers was not equivalent to a rule set before analysis. They documented the competing specifications and proposed a new study in which the relevant choices would be registered before data collection.\n\nIn a joint note the researchers reported both analyses and avoided presenting the revised figure as the final word. They conceded that their sample offered limited evidence about people outside the recruitment region. The note was less triumphant than the original article, but far more informative. One editor lamented the loss of a clear headline. A statistician replied that clarity achieved by suppressing the conditions of a claim was not clarity at all; it was a simplification with an invoice attached."
      },
      {
        "id": "c2en-u3-q03",
        "sourceStepId": "c2en-readstep-11",
        "prompt": "Que permet réellement de conclure le rapport ?",
        "options": [
          "Le taux d’acceptation par un centre a augmenté, sans conclure sur le comportement global.",
          "Les ménages recyclent deux fois plus.",
          "Le coût de recyclage a été divisé par deux."
        ],
        "answers": [
          "Le taux d’acceptation par un centre a augmenté, sans conclure sur le comportement global."
        ],
        "explanation": "La hausse concerne un rendement de traitement défini.",
        "context": "‘City doubles its recycling success’, the headline announced. The underlying report told a more complicated story. The proportion of sorted material accepted by a local facility had indeed risen from 30 to 60 per cent, but the volume collected had fallen sharply after a change in eligibility. The headline’s arithmetic was correct within the chosen denominator; its implied account of civic achievement was much less secure. The improvement had been described as universal although it applied only to items reaching the facility.\n\nReaders could reasonably infer that households were recycling twice as much as before. The report did not support that inference. Nor, crucially, did it prove that households were doing less overall; some material had moved to a separate collection scheme excluded from the figures. The available data established a change in processing yield, not a doubling of environmentally useful behaviour. The editor’s first correction replaced ‘success’ with ‘efficiency’. A reader objected that even this word presupposed the same outcome could be achieved at lower cost, which the report did not measure.\n\nThe corrections editor proposed a short public explanation of denominators, anticipating that few readers would open the technical report. It began with a familiar analogy: if a bakery discards its poorest-selling products, the average sale per remaining product may rise without an increase in total revenue. The analogy was imperfect, since the facility's material was not sold like bread. Its value was to reveal the missing distinction between a rate within a selected group and a change in an entire system. The editor included the analogy but marked its limits, resisting the temptation to replace one misleading simplification with another.\n\nThe final correction separated the claims. It stated what had increased, which population and time period the percentage described, and which questions remained unanswered. The news desk worried that the qualified headline would travel less widely on social media. The fact-checker was unsympathetic: reach is not an excuse to let a numerator do the work of an argument."
      },
      {
        "id": "c2en-u3-q04",
        "sourceStepId": "c2en-readstep-12",
        "prompt": "Pourquoi l’éditeur refuse-t-il à la fois la rétractation immédiate et le silence ?",
        "options": [
          "Pour éviter une décision irréversible tout en corrigeant un élément pertinent.",
          "Pour protéger les auteurs de toute critique.",
          "Parce que la revue ne possède aucune version originale."
        ],
        "answers": [
          "Pour éviter une décision irréversible tout en corrigeant un élément pertinent."
        ],
        "explanation": "La réponse vise la proportionnalité et la traçabilité.",
        "context": "Dear contributors, our decision to publish the disputed article rested on two judgements: that its methods were sufficiently transparent to invite scrutiny and that its central claim was worth discussing despite substantial uncertainty. Neither judgement amounted to an endorsement of every inference made in the paper. We have since learned that one supplementary dataset was labelled incorrectly. The error does not invalidate the main calculations, but it affects the confidence with which a secondary result can be reported.\n\nSeveral correspondents have asked us either to retract the article or to make no correction at all. We consider both responses disproportionate at this stage. An immediate retraction would imply that the research cannot be responsibly interpreted, while silence would deprive readers of information relevant to that interpretation. We will therefore publish a correction beside the article, retain the initial version in an accessible archive and invite an independent statistical commentary. Authors will be given an opportunity to respond, but not a veto over publication of the commentary.\n\nThe editorial board also considered whether the original article should carry a warning banner while the commentary was being prepared. A large red label would signal urgency but could suggest misconduct not supported by the investigation. No label at all might leave the known error invisible to someone citing the secondary result. The compromise was a dated notice linking to the corrected dataset and explaining precisely which claim was under review. Its language was intentionally unexciting. In scientific publishing, a measured description of uncertainty is often more consequential than a dramatic announcement of guilt or vindication.\n\nWe recognise that this procedure may frustrate those seeking a definitive verdict. Scholarly publishing sometimes produces no such verdict. Its task is to maintain a record through which claims can be tested, qualified or rejected without quietly rewriting the history of how they were made. That is the standard by which we ask to be judged."
      },
      {
        "id": "c2en-u3-q05",
        "sourceStepId": "c2en-grammarstep-07",
        "prompt": "Pourquoi remplacer certains passifs d’un rapport par l’actif ?",
        "options": [
          "Pour supprimer toutes les descriptions de processus.",
          "Pour identifier qui a effectivement pris une décision méthodologique.",
          "Pour rendre chaque phrase plus courte sans exception."
        ],
        "answers": [
          "Pour identifier qui a effectivement pris une décision méthodologique."
        ],
        "explanation": "L’actif peut rendre l’agent responsable visible."
      },
      {
        "id": "c2en-u3-q06",
        "sourceStepId": "c2en-grammarstep-08",
        "prompt": "Quelle reformulation déplie une nominalisation technique ?",
        "options": [
          "The analysts removed six observations under a published rule.",
          "An exclusion process took place.",
          "The removal of exclusions was reviewed."
        ],
        "answers": [
          "The analysts removed six observations under a published rule."
        ],
        "explanation": "L’agent, l’action, la quantité et le critère sont explicités."
      },
      {
        "id": "c2en-u3-q07",
        "sourceStepId": "c2en-grammarstep-09",
        "prompt": "« Not all districts improved » signifie...",
        "options": [
          "Tous les districts ont progressé.",
          "Au moins un district n’a pas progressé; certains ont pu progresser.",
          "Aucun district n’a progressé."
        ],
        "answers": [
          "Au moins un district n’a pas progressé; certains ont pu progresser."
        ],
        "explanation": "Not all nie la totalité, et non l’existence de progrès."
      },
      {
        "id": "c2en-u3-q08",
        "sourceStepId": "c2en-phrasestep-03",
        "prompt": "Comment corriger un article qui généralise indûment une mesure ?",
        "options": [
          "Numbers cannot be corrected.",
          "The number is true for everyone everywhere.",
          "The increase was recorded only within the sampled facilities."
        ],
        "answers": [
          "The increase was recorded only within the sampled facilities."
        ],
        "explanation": "La population de référence est nommée."
      },
      {
        "id": "c2en-u3-q09",
        "sourceStepId": "c2en-verbstep-03",
        "prompt": "L’équipe a étayé sa conclusion. Choisissez le passé de substantiate.",
        "options": [
          "substantiates",
          "substantiating",
          "substantiated"
        ],
        "answers": [
          "substantiated"
        ],
        "explanation": "Past simple régulier : substantiated."
      },
      {
        "id": "c2en-u3-q10",
        "sourceStepId": "c2en-gvstep-05",
        "prompt": "Un facteur influence simultanément deux variables. Choisissez le terme.",
        "options": [
          "a confounding variable",
          "the hidden denominator",
          "an evidential threshold"
        ],
        "answers": [
          "a confounding variable"
        ],
        "explanation": "Variable confondante."
      },
      {
        "id": "c2en-u3-q11",
        "sourceStepId": "c2en-gvstep-06",
        "prompt": "Un titre surestime son article source.",
        "options": [
          "a misleading comparison class",
          "a claim that outruns its source",
          "a public record of amendments"
        ],
        "answers": [
          "a claim that outruns its source"
        ],
        "explanation": "Outruns its source : dépasse la preuve."
      },
      {
        "id": "c2en-u3-q12",
        "sourceStepId": "c2en-gvstep-05",
        "prompt": "Un estimateur est défendable avec une marge explicite.",
        "options": [
          "methodological opacity",
          "a defensible interval estimate",
          "an unqualified headline"
        ],
        "answers": [
          "a defensible interval estimate"
        ],
        "explanation": "Interval estimate rend visible l’incertitude."
      }
    ]
  },
  {
    "level": "C2",
    "unit": 4,
    "isDemo": false,
    "passPercent": 80,
    "questions": [
      {
        "id": "c2en-u4-q01",
        "sourceStepId": "c2en-readstep-13",
        "prompt": "Quel effet produit le mélange des points de vue ?",
        "options": [
          "Il fait entendre la certitude passée tout en permettant de la remettre en cause.",
          "Il révèle d’emblée tous les secrets du récit.",
          "Il rend impossibles toute lecture et tout jugement."
        ],
        "answers": [
          "Il fait entendre la certitude passée tout en permettant de la remettre en cause."
        ],
        "explanation": "Le discours indirect libre mêle souvenir et perception d’alors.",
        "context": "The opening of Lena Vale’s novel appears to offer a reliable narrator: an elderly cartographer describing a town in which every street has a name but no one agrees on the boundaries. Only later does the reader notice that the narrator’s certainty belongs to his younger self, whose thoughts seep into the narration without quotation marks. ‘The council had acted fairly; surely they had’, he recalls while recounting a decision he now regrets. The sentence has the grammar of retrospect and the temperature of a conviction not yet tested. That double perspective makes the book more disquieting than a straightforward confession.\n\nVale neither labels each shift in viewpoint nor leaves the reader helpless. A repeated image of a brass compass marks moments when the narrator substitutes inherited stories for direct observation. In one chapter a neighbour’s silence seems proof of hostility; two chapters later the same silence acquires the texture of grief. The novelist does not announce the correction. She lets the older voice falter just enough for the earlier interpretation to become visible as an interpretation. Readers who demand a single, transparent consciousness may call this evasive. Yet its uncertainty is carefully engineered, not accidental.\n\nVale has said in interviews that she did not set out to write a puzzle. That claim need not settle the question of how readers experience the work. A novel can generate effects its author did not consciously plan, and critical interpretation should not be reduced to reconstructing intention. Still, the recurrence of the compass and the controlled shifts in free indirect discourse provide more than a critic's imaginative projection. They are material features of the text that explain why one interpretation carries more weight than another. Ambiguity, in this sense, is not the absence of structure but its carefully distributed pressure.\n\nThe final pages offer no grand reconciliation. The cartographer redraws a disputed path but leaves the old map hanging in his office. It is a modest act of revision rather than a triumph over error. The novel’s achievement lies in making us experience the speed with which a story becomes a fact when it is told in a voice we trust."
      },
      {
        "id": "c2en-u4-q02",
        "sourceStepId": "c2en-readstep-14",
        "prompt": "Pourquoi conserver un terme difficile dans la traduction ?",
        "options": [
          "Pour éviter toute intervention éditoriale.",
          "Pour préserver deux significations liées à une scène ultérieure.",
          "Pour afficher une expertise inutile."
        ],
        "answers": [
          "Pour préserver deux significations liées à une scène ultérieure."
        ],
        "explanation": "Le terme doit porter une ambiguïté reprise à la fin.",
        "context": "Readers often ask why I retained the word ‘threshold’ in a passage where a smoother English alternative was available. The original expression names both the doorstep of a house and a ceremony marking a person’s transition into adulthood. Translating it as ‘entrance’ would preserve the physical detail and lose the social one; replacing it with ‘initiation’ would do the reverse. I chose to leave a slight resistance in the sentence, then explain the layered meaning in a note. That decision interrupts the story, but an effortless surface would have obscured something the characters themselves cannot afford to overlook.\n\nThe publisher worried that too many notes would make the book feel academic. I agreed, to an extent. A footnote may teach, display expertise or simply reassure the translator that an awkward choice has an explanation. None of these purposes automatically serves the reader. In this case the note earns its place because the same word returns at the ending, altered by the protagonist’s refusal to take part in the ceremony. Its first occurrence must carry enough unfinished meaning for that later refusal to matter.\n\nThe same question arose in a dialogue scene where a daughter addresses her mother using a form that is respectful in public but teasing at home. English offers several choices, none matching both social signals. I chose an apparently ordinary phrase and let the surrounding exchange convey the intimacy. I declined to add a second explanatory note because the scene already supplied enough evidence for an attentive reader. The contrast with the earlier footnote was deliberate. Fidelity did not require a single technique applied everywhere; it required judging which features needed explicit support and which could remain implicit.\n\nTranslation requires more than preserving dictionary equivalents. A line may sound brusque in one language yet intimate in another; an idiom can be familiar without being casual. The translator’s responsibility is therefore not to erase every trace of difference but to judge which differences do intellectual or emotional work. This footnote is not an admission of defeat. It is a record of a trade-off I want readers to be able to see."
      },
      {
        "id": "c2en-u4-q03",
        "sourceStepId": "c2en-readstep-15",
        "prompt": "Pourquoi le départ de l’actrice continue-t-il à agir après la scène ?",
        "options": [
          "Il marque une pause technique avant une scène supplémentaire.",
          "Il confirme l’authenticité de la lettre.",
          "Il transforme le public et son inconfort en partie de la représentation."
        ],
        "answers": [
          "Il transforme le public et son inconfort en partie de la représentation."
        ],
        "explanation": "Le dispositif sonore rend les réactions de la salle perceptibles.",
        "context": "In the final scene of The Unfinished Guest, a woman is offered an explanation for her brother’s disappearance. She does not respond. Instead, she folds the letter, lays it beside an empty cup and walks out through the audience. The production lasts ninety minutes; this exit takes less than ten seconds. So sudden is the movement that the silence which follows feels imposed on the spectators rather than chosen by the character. The director has resisted the temptation to turn an unresolved absence into a theatrical revelation.\n\nAt the preview, one reviewer complained that the gesture withheld catharsis. Another called it an act of emancipation: a character declines to accept an answer designed principally to settle someone else’s curiosity. Both interpretations are defensible, but neither explains the sound design. Moments before the exit, the room’s familiar hum disappears, leaving every shift in the audience audible. It is the spectators who supply the noise of the scene. Their discomfort becomes part of the action, and the supposed ending continues after the performer has gone.\n\nSeveral audience members later described feeling irritated rather than moved. The director welcomed the response but resisted claiming it proved the production's success. Irritation could register resistance to an ethical demand, or it could expose a clumsy formal choice. A review that simply celebrates discomfort as evidence of depth evades that distinction. The more persuasive accounts examined exactly when the sound faded, how the performer crossed the seating area and what the audience was able to see. Aesthetic judgement became sharper when it treated the emotional reaction as something to explain, not as an automatic endorsement.\n\nThe programme notes refuse to decide whether the letter is true. This is not laziness. The production asks what a revelation is worth when the person to whom it is offered has not requested it. By leaving the explanation unread, the character deprives the audience of the authority it assumed it possessed. The night I attended, applause began unevenly, as though people were unsure whether they had been released from the performance."
      },
      {
        "id": "c2en-u4-q04",
        "sourceStepId": "c2en-readstep-16",
        "prompt": "Quel est l’objectif du dernier dispositif de l’exposition ?",
        "options": [
          "Prouver que toute interprétation se vaut.",
          "Inviter les visiteurs à choisir immédiatement une version.",
          "Substituer l’enquête sur les preuves à un verdict spontané."
        ],
        "answers": [
          "Substituer l’enquête sur les preuves à un verdict spontané."
        ],
        "explanation": "La question finale réclame un document susceptible de départager les récits.",
        "context": "The exhibition contains no portraits. Visitors encounter a table set for four, a ledger with torn pages and a series of recordings in which speakers begin sentences they do not finish. The objects come from households displaced during the redevelopment of a riverbank. Curators rejected the customary narrative of before, crisis and recovery because it would impose an arc absent from the testimony. Some former residents rebuilt their lives; others consider the loss continuous. A single storyline would have looked orderly but at the cost of making unresolved experience seem like an unfinished version of someone else’s happy ending.\n\nOne recording captures a woman correcting herself: ‘We left—no, we were moved.’ The two verbs differ not merely in tone but in the distribution of agency. The exhibition does not tell us which phrase to adopt. It presents the correction as evidence that language itself is part of the dispute. Equally, the torn ledger is not displayed as a symbol of ignorance. Its missing pages point to records that once existed, inviting visitors to distinguish unknown facts from facts that have been made unknowable through administrative choices.\n\nThe curators were criticised for using visitors' uncertainty as a substitute for factual research. Their answer was to publish a catalogue appendix listing verified dates, unresolved questions and the owners of documents that could not be displayed. Some families welcomed the separation of established facts from personal recollection. Others worried that the formality made their testimony sound tentative where their experience had been unequivocal. The catalogue did not fully resolve this tension, but it made visible the different standards by which archives and witnesses establish authority. The exhibition's central claim was never that all accounts are equally true; it was that truth-seeking requires knowing what each kind of account can support.\n\nThe final room offers a desk where visitors may listen to two incompatible accounts of the same meeting. There is no vote on which is credible. Instead a placard asks which additional document would help decide. The question is deliberately unfashionable: it values the work of enquiry over the gratification of declaring a side. The exhibition’s restraint asks more of its audience than a suitably moving conclusion would have done."
      },
      {
        "id": "c2en-u4-q05",
        "sourceStepId": "c2en-grammarstep-10",
        "prompt": "Quel indice signale une pensée du personnage dans un passage au prétérit ?",
        "options": [
          "La seule présence d’un nom propre.",
          "Toute phrase sans guillemets est neutre.",
          "Un jugement comme surely intégré à sa perspective."
        ],
        "answers": [
          "Un jugement comme surely intégré à sa perspective."
        ],
        "explanation": "Un marqueur subjectif peut appartenir à la conscience représentée."
      },
      {
        "id": "c2en-u4-q06",
        "sourceStepId": "c2en-grammarstep-11",
        "prompt": "Quel commentaire critique évalue un compromis de traduction ?",
        "options": [
          "Every awkward phrase is evidence of failure.",
          "The gloss preserves the ritual meaning but interrupts the sentence’s rhythm.",
          "All footnotes improve translation."
        ],
        "answers": [
          "The gloss preserves the ritual meaning but interrupts the sentence’s rhythm."
        ],
        "explanation": "La troisième option analyse gain et coût sans verdict automatique."
      },
      {
        "id": "c2en-u4-q07",
        "sourceStepId": "c2en-grammarstep-12",
        "prompt": "Quel exemple présente une inversion stylistique correcte ?",
        "options": [
          "So faint the music was that nobody noticed it.",
          "So faint was the music that nobody noticed it.",
          "So faint did be the music that nobody noticed it."
        ],
        "answers": [
          "So faint was the music that nobody noticed it."
        ],
        "explanation": "So + adjective + be + subject + that."
      },
      {
        "id": "c2en-u4-q08",
        "sourceStepId": "c2en-phrasestep-04",
        "prompt": "Comment défendre une interprétation littéraire tout en reconnaissant une autre ?",
        "options": [
          "That is plausible, although it does not account for the altered narrative voice.",
          "Only my reading has any value.",
          "Interpretation should ignore textual details."
        ],
        "answers": [
          "That is plausible, although it does not account for the altered narrative voice."
        ],
        "explanation": "La formule reconnaît puis discute une preuve précise."
      },
      {
        "id": "c2en-u4-q09",
        "sourceStepId": "c2en-verbstep-04",
        "prompt": "La musique évoquait une perte. Quel participe présent ?",
        "options": [
          "evoked",
          "evokeing",
          "evoking"
        ],
        "answers": [
          "evoking"
        ],
        "explanation": "Suppression du e final : evoking."
      },
      {
        "id": "c2en-u4-q10",
        "sourceStepId": "c2en-gvstep-07",
        "prompt": "La focalisation se fond dans la voix du personnage.",
        "options": [
          "a critical overstatement",
          "a curatorial intervention",
          "free indirect focalisation"
        ],
        "answers": [
          "free indirect focalisation"
        ],
        "explanation": "Discours indirect libre."
      },
      {
        "id": "c2en-u4-q11",
        "sourceStepId": "c2en-gvstep-08",
        "prompt": "Quel groupe désigne la catharsis non méritée qu’une œuvre peut refuser ?",
        "options": [
          "a performative silence",
          "an unearned moment of catharsis",
          "a deceptive plain sentence"
        ],
        "answers": [
          "an unearned moment of catharsis"
        ],
        "explanation": "Catharsis sans préparation jugée suffisante."
      },
      {
        "id": "c2en-u4-q12",
        "sourceStepId": "c2en-gvstep-08",
        "prompt": "Une interprétation concurrente reste féconde.",
        "options": [
          "an interpretive blind spot",
          "a contested act of representation",
          "a productive interpretive disagreement"
        ],
        "answers": [
          "a productive interpretive disagreement"
        ],
        "explanation": "Désaccord productif."
      }
    ]
  },
  {
    "level": "C2",
    "unit": 5,
    "isDemo": false,
    "passPercent": 80,
    "questions": [
      {
        "id": "c2en-u5-q01",
        "sourceStepId": "c2en-readstep-17",
        "prompt": "Quel est l’intérêt de l’hypothèse formulée par la représentante ?",
        "options": [
          "Prouver que toute construction est illégitime.",
          "Attribuer aux anciens élus une connaissance parfaite du futur.",
          "Évaluer les conséquences d’une politique maintenue malgré de nouvelles données."
        ],
        "answers": [
          "Évaluer les conséquences d’une politique maintenue malgré de nouvelles données."
        ],
        "explanation": "L’hypothèse interroge le maintien d’une décision après apparition de nouvelles preuves.",
        "context": "At the planning inquiry, the developer submitted a photograph of an empty field and asked the panel to imagine the houses that could stand there. A community representative produced an older flood map and asked a different question: had the council adopted the revised boundary a decade earlier, how many residents might have avoided repeated evacuations? The hypothetical was not an accusation that past officials possessed knowledge they did not have. It was a way of testing the consequences of maintaining a policy after contrary evidence emerged.\n\nThe developer argued that cancelling the project would merely push new housing into more distant areas, increasing transport costs for households already stretched. The representative agreed that housing scarcity mattered. Her objection concerned the allocation of risk: inexpensive homes on exposed land are not necessarily affordable once insurance, repair and displacement are counted. She proposed a conditional approval under which building could begin only after a publicly funded drainage assessment and a credible relocation plan had been independently evaluated.\n\nA hydrologist cautioned the panel against treating a revised flood map as a photograph of the future. Its boundaries represented modelling choices, estimates of extreme rainfall and assumptions about how land use might change. An engineer replied that uncertainty did not make the map useless; it identified the margin within which building standards should remain cautious. The disagreement was not over whether models contain uncertainty, but over how public policy should respond to it. The panel requested that future maps show ranges and explanatory notes rather than one apparently definitive line separating safe land from unsafe land.\n\nThe panel’s decision disappointed both parties. Construction was deferred, not prohibited; the council was ordered to publish the assumptions behind its map and review them after the next winter. Critics called the result indecisive. Yet the judgement distinguished a reversible pause from a permanent veto and made uncertainty an explicit object of governance. To acknowledge that the flood line might shift was not to abandon planning, but to plan in a way that could withstand being wrong."
      },
      {
        "id": "c2en-u5-q02",
        "sourceStepId": "c2en-readstep-18",
        "prompt": "Pourquoi le terme « saved » est-il problématique ?",
        "options": [
          "Il confond une estimation par comparaison avec un retrait mesuré de carbone.",
          "Il ne peut jamais être utilisé dans un rapport environnemental.",
          "Il indique un calcul arithmétique nécessairement erroné."
        ],
        "answers": [
          "Il confond une estimation par comparaison avec un retrait mesuré de carbone."
        ],
        "explanation": "Il faut distinguer émissions évitées estimées et retrait observé.",
        "context": "The foundation announced that its annual programme had ‘saved’ five thousand tonnes of carbon emissions. Technically, the number represented estimated emissions avoided relative to a modelled scenario in which no intervention occurred. It did not represent carbon physically removed from the atmosphere. This distinction was not pedantic. Donors might reasonably understand ‘saved’ as a verified outcome, whereas the estimate rested on assumptions about the energy mix, future maintenance and how participants would otherwise have travelled.\n\nIn the methodology appendix, analysts ran three counterfactual scenarios rather than one. If vehicles had remained in service for longer, the benefit would have been smaller; if electricity had become cleaner more quickly, some savings would have increased. The report’s central figure concealed that range. The analysts recommended presenting an interval and separating observed behaviour from projected consequences. One trustee worried that uncertainty would make the appeal less compelling. Another asked whether a compelling appeal built on a point estimate could survive the first serious challenge.\n\nThe communications team initially argued that publishing an interval would confuse non-specialists. The analysts countered that a single point estimate might be easier to remember precisely because it concealed what readers needed to know. They produced a graphic comparing three plausible scenarios, accompanied by one sentence about each scenario's assumptions. A small test with volunteers suggested that most readers could distinguish a measured value from a conditional projection when the labels were clear. The foundation decided to publish both a concise summary and the underlying assumptions, abandoning the false choice between public accessibility and methodological honesty.\n\nThe revised statement retained a headline figure but labelled it an estimate, showed the plausible range and identified two conditions under which it could change substantially. It also acknowledged distributional effects: the scheme benefited central districts first, while some peripheral households faced higher short-term costs. The report became harder to quote in a single sentence, but easier to defend in a difficult conversation. Credibility, the trustees concluded, is not the absence of caveats; it is knowing which caveats belong in the headline."
      },
      {
        "id": "c2en-u5-q03",
        "sourceStepId": "c2en-readstep-19",
        "prompt": "Pourquoi la juge minoritaire demande-t-elle un réexamen ?",
        "options": [
          "Parce que les habitants n’ont pas réellement pu influer sur les choix initiaux.",
          "Parce que le risque d’inondation n’existe pas.",
          "Parce qu’aucune autre solution n’est envisageable."
        ],
        "answers": [
          "Parce que les habitants n’ont pas réellement pu influer sur les choix initiaux."
        ],
        "explanation": "La participation intervient après les décisions décisives.",
        "context": "The majority approved the relocation programme on the ground that it offered greater physical safety than the existing settlement. I do not dispute the danger. My disagreement concerns the standard against which the programme was assessed. Safety measured solely by the probability of flood injury ignores the loss of informal childcare, local employment and communal support that relocation may produce. A policy can reduce one harm while increasing another, and it is the duty of a public body to make those trade-offs explicit.\n\nBe that as it may, the tribunal is not entitled to invent a perfect alternative. The record before us contains no complete plan that could eliminate every risk. Yet it does contain evidence that residents were consulted only after the destination sites had been selected. Their objections were treated as preferences to be accommodated where feasible, rather than information capable of changing the original decision. The process was therefore participatory in appearance but not in its allocation of authority. Even a substantively reasonable outcome can be compromised by a procedure that excludes affected knowledge.\n\nMy colleagues' judgment relied heavily on the fact that the planned houses met minimum safety standards. I do not dispute the inspection results. Instead, I ask who selected the standard and whether meeting it exhausts the authority's duty. The distinction matters because a standard designed for physical shelter cannot, without further argument, settle questions about employment access and social care. I am careful not to substitute personal preferences for administrative law. My argument is that a lawful process has to consider relevant impacts and explain openly why some are outweighed by others.\n\nI would order a limited reconsideration, with clear options, transparent criteria and resources enabling residents to take part on equal terms. My colleagues fear delay. Their concern deserves weight. Still, a process that asks for consent after the decisive choices have been made risks manufacturing agreement rather than discovering it. The distinction matters, particularly when the people bearing the consequences are also those least able to leave."
      },
      {
        "id": "c2en-u5-q04",
        "sourceStepId": "c2en-readstep-20",
        "prompt": "Pourquoi les membres minoritaires veulent-ils publier leurs motifs ?",
        "options": [
          "Pour empêcher toute mesure de transport.",
          "Pour annuler automatiquement le vote.",
          "Pour rendre les désaccords examinables lors d’une future évaluation."
        ],
        "answers": [
          "Pour rendre les désaccords examinables lors d’une future évaluation."
        ],
        "explanation": "Les objections servent de critères pour une révision future.",
        "context": "At midnight, the citizens’ assembly voted for a transport levy by a narrow majority. The public summary announced a decision based on ‘the common good’. Several members objected—not to the result, but to the suggestion that those who opposed it had somehow stood outside the common good. The minority report insisted that disagreement concerned the distribution of burdens and the plausibility of expected benefits, not the value of cleaner streets. Its authors asked to have their reasons published alongside the recommendation rather than compressed into a losing vote.\n\nSome had argued for an exemption for workers whose shifts began before public transport operated. Others questioned whether the revenue projections accounted for people changing routes rather than abandoning car journeys. These objections did not refute the policy in principle; they identified conditions under which it might fall short of its stated aims. The majority accepted one exemption and proposed a review after two years. The minority still withheld endorsement because the proposed review did not specify what evidence would trigger revision.\n\nDuring deliberation, the chair had urged members to be constructive and move beyond objections. The minority later complained that constructive was being used as a synonym for agreeable. They proposed a different test: an objection should count as constructive when it identifies a mechanism through which a proposal might fail and offers an observable way to examine that risk. By that standard, several dissenting arguments were constructive despite not supporting the final vote. The assembly adopted the definition in its procedural notes, a small linguistic change that broadened what could be recorded as useful participation.\n\nThe final report carried both accounts. A commentator complained that the assembly had failed to speak with one voice. But one voice is a poor standard for a body charged with testing contested public choices. The published disagreement gave future readers a map of arguments that could be revisited as evidence changed. The assembly’s achievement was not unanimity; it was making the reasons for continued disagreement intelligible."
      },
      {
        "id": "c2en-u5-q05",
        "sourceStepId": "c2en-grammarstep-13",
        "prompt": "Quelle formulation garde la prudence d’un contrefactuel historique ?",
        "options": [
          "Had the council acted sooner, some losses might have been avoided.",
          "The earlier measure certainly prevented every loss.",
          "The past can be changed by changing the wording."
        ],
        "answers": [
          "Had the council acted sooner, some losses might have been avoided."
        ],
        "explanation": "Might have avoided marque une conséquence possible, non certaine."
      },
      {
        "id": "c2en-u5-q06",
        "sourceStepId": "c2en-grammarstep-14",
        "prompt": "Quelle expression distingue une estimation d’une mesure ?",
        "options": [
          "The scheme definitely removed exactly 3,000 tonnes.",
          "The estimated savings are conditional on the assumed baseline.",
          "The figure proves a future benefit."
        ],
        "answers": [
          "The estimated savings are conditional on the assumed baseline."
        ],
        "explanation": "Le bénéfice est comparé à une référence hypothétique."
      },
      {
        "id": "c2en-u5-q07",
        "sourceStepId": "c2en-grammarstep-15",
        "prompt": "Quelle concession reconnaît un enjeu sans accepter la conclusion adverse ?",
        "options": [
          "No delays matter under any circumstances.",
          "Delay has costs, so any procedure is fair.",
          "Granted, delay has costs; that does not make the procedure fair."
        ],
        "answers": [
          "Granted, delay has costs; that does not make the procedure fair."
        ],
        "explanation": "Granted concède un fait et limite l’inférence."
      },
      {
        "id": "c2en-u5-q08",
        "sourceStepId": "c2en-phrasestep-05",
        "prompt": "Vous soutenez un essai public avec garde-fous. Quelle formule ?",
        "options": [
          "The trial cannot ever be suspended.",
          "Let us hide the assumptions.",
          "I support a limited trial with published stopping criteria."
        ],
        "answers": [
          "I support a limited trial with published stopping criteria."
        ],
        "explanation": "Les conditions d’arrêt sont publiques."
      },
      {
        "id": "c2en-u5-q09",
        "sourceStepId": "c2en-verbstep-05",
        "prompt": "Le plan a atténué le risque. Past simple ?",
        "options": [
          "mitigated",
          "mitigating",
          "mitigateed"
        ],
        "answers": [
          "mitigated"
        ],
        "explanation": "Past simple régulier : mitigated."
      },
      {
        "id": "c2en-u5-q10",
        "sourceStepId": "c2en-gvstep-09",
        "prompt": "Un scénario comporte un événement rare à conséquences graves.",
        "options": [
          "majoritarian overreach",
          "a precautionary trigger",
          "a low-probability high-impact event"
        ],
        "answers": [
          "a low-probability high-impact event"
        ],
        "explanation": "Faible probabilité et fort impact."
      },
      {
        "id": "c2en-u5-q11",
        "sourceStepId": "c2en-gvstep-10",
        "prompt": "Une consultation a l’apparence de participation mais pas son pouvoir.",
        "options": [
          "a structurally unequal consultation",
          "a distribution-sensitive assessment",
          "a remedy with procedural safeguards"
        ],
        "answers": [
          "a structurally unequal consultation"
        ],
        "explanation": "Inégalité de la participation."
      },
      {
        "id": "c2en-u5-q12",
        "sourceStepId": "c2en-gvstep-09",
        "prompt": "Une mesure peut être révoquée sans dommage irréparable.",
        "options": [
          "a reversible policy intervention",
          "a minority report with standing",
          "a scenario-dependent projection"
        ],
        "answers": [
          "a reversible policy intervention"
        ],
        "explanation": "Réversibilité institutionnelle."
      }
    ]
  },
  {
    "level": "C2",
    "unit": 6,
    "isDemo": false,
    "passPercent": 80,
    "questions": [
      {
        "id": "c2en-u6-q01",
        "sourceStepId": "c2en-readstep-21",
        "prompt": "Pourquoi proposer une reformulation par le patient ?",
        "options": [
          "Pour vérifier la qualité de l’explication sans nier son autonomie.",
          "Pour remplacer tout document de consentement.",
          "Pour sanctionner les personnes qui ne parlent pas anglais."
        ],
        "answers": [
          "Pour vérifier la qualité de l’explication sans nier son autonomie."
        ],
        "explanation": "La question évalue l’efficacité de la communication du soignant.",
        "context": "The patient had signed the consent form, but the ethics team was uneasy. During the consultation he had nodded throughout, answered ‘fine’ to every question and declined the offer of an interpreter. The clinician believed that these responses indicated understanding. A nurse later discovered that the patient had interpreted ‘optional monitoring’ as a test that would be discontinued only if he complained. The form recorded agreement; it did not establish that the choices had been understood in the way the clinician intended.\n\nAt the case review, one doctor said the team should not second-guess a competent adult’s decision. Another replied that respecting autonomy also requires making the relevant options intelligible. She proposed asking patients to explain the proposed procedure in their own words, not as an examination but as a way of checking whether the explanation had worked. The first doctor worried that such a practice could sound patronising. The nurse suggested an alternative question: ‘What would you tell someone at home about the choices we discussed?’ The change transferred the burden of clarity back to the team.\n\nThe ethics team trialled the revised question with volunteers who spoke different first languages. Some found the invitation to explain the procedure reassuring; others feared that their response would be assessed like a school examination. Facilitators learned to introduce the request as a test of the clinician's explanation rather than the patient's competence. They also discovered that offering written information in multiple languages did not guarantee understanding of its practical consequences. The lessons prompted a change in staff training: communication quality would be evaluated by opportunities for clarification, not by how quickly a signature could be obtained.\n\nNo one recommended disregarding the signature. They recommended treating it as one element in a conversation rather than its substitute. The final protocol included language support, opportunities to ask questions privately and a record of any material misunderstanding corrected before treatment. Its central principle was modest: consent may be documented at a moment, but understanding must be cultivated throughout the encounter."
      },
      {
        "id": "c2en-u6-q02",
        "sourceStepId": "c2en-readstep-22",
        "prompt": "Quel est le défaut initial de la réunion ?",
        "options": [
          "Le compte rendu contient trop de chiffres.",
          "Aucun participant ne connaît le projet.",
          "Des interprétations différentes d’une formule vague sont prises pour une décision commune."
        ],
        "answers": [
          "Des interprétations différentes d’une formule vague sont prises pour une décision commune."
        ],
        "explanation": "L’exploration n’est pas une autorisation d’exécution.",
        "context": "The project manager described the meeting as ‘productive’, and everyone nodded. In the corridor, however, three participants gave incompatible accounts of what had been decided. The manager understood ‘we can explore this’ as permission to proceed with a pilot; the finance director meant only that the idea was not rejected outright; the junior analyst took it as a polite way of ending a difficult discussion. All three interpretations were plausible within the organisation’s habits of speech. The trouble lay in treating a socially convenient phrase as an operational instruction.\n\nIn the follow-up email the manager wrote, ‘As agreed, the team will begin implementation next Monday.’ The finance director replied with a carefully calibrated objection: ‘I may not have expressed my reservation clearly enough, but I understood us to have agreed to review the proposal, not to approve delivery.’ Her wording was more than diplomacy. It offered a path to correction without accusing the manager of dishonesty, while also placing an explicit alternative interpretation on record. The analyst then suggested separating decisions, proposals and unresolved questions in future minutes.\n\nThe analyst offered to draft a one-page decision record with three columns: decisions reached, options still under consideration and tasks authorised for the next meeting. The manager worried that this procedure would feel bureaucratic. The finance director replied that the group had already spent more time correcting assumptions than the record would take to write. At the following meeting, participants disagreed more openly, but fewer people mistook agreement about a problem for agreement about its solution. The resulting minutes were longer and the action list shorter. For once, the apparent inefficiency was an improvement.\n\nThe next meeting ended with an awkward ritual: each participant summarised what they believed had been authorised. It took five minutes and made the group less comfortable. It also prevented weeks of work from proceeding on the strength of an agreeable ambiguity. In high-stakes collaboration, courtesy is not the enemy of precision; unexamined courtesy is."
      },
      {
        "id": "c2en-u6-q03",
        "sourceStepId": "c2en-readstep-23",
        "prompt": "À quoi sert la formule « without prejudice » dans la négociation ?",
        "options": [
          "À garantir une frontière nouvelle.",
          "À annuler les droits des deux parties.",
          "À coopérer sans renoncer à une position juridique contestée."
        ],
        "answers": [
          "À coopérer sans renoncer à une position juridique contestée."
        ],
        "explanation": "La coopération pratique ne tranche pas le litige frontalier.",
        "context": "The two delegations agreed that the river should remain open to navigation. They did not agree on where the responsibility for maintenance began. One side proposed the sentence ‘Both parties shall ensure safe passage’; the other feared that ‘ensure’ would imply liability for events outside its control. A revised draft stated that each party would take appropriate measures within its jurisdiction and notify the other of hazards as soon as reasonably practicable. The wording sacrificed the illusion of a single comprehensive promise in exchange for obligations each side could plausibly fulfil.\n\nNegotiators then disagreed over the phrase ‘without prejudice to existing rights’. The less experienced members assumed it was a threat to reopen territorial claims. Their legal advisers explained that the phrase was intended to prevent cooperation on maintenance being treated as acceptance of the other side’s interpretation of the boundary. The distinction between doing something together and conceding a legal position was indispensable if talks were to continue. The negotiators asked for the purpose to be explained in accompanying minutes rather than left as an incantation that only specialists could parse.\n\nA second dispute concerned whether the agreement should include a deadline for reporting an obstruction. One delegation wanted notification ‘immediately’, a word that sounded decisive but could become impossible to satisfy when communications failed. The other preferred ‘as soon as reasonably practicable’, which sounded weaker but acknowledged the conditions of an isolated river crossing. A joint technical team proposed an escalation rule with multiple channels of contact. The compromise retained the qualified wording while making it testable. Both sides could now explain what they would do when the ideal response was unavailable.\n\nThe joint communiqué avoided declaring the dispute resolved. Instead, it established a shared hazard hotline, quarterly inspections and a procedure for disputes that might arise during repairs. A journalist called it an empty compromise. The river pilots were less dismissive: they could now see which office to contact if a submerged tree blocked the channel. In diplomatic language, practical specificity can achieve what symbolic finality cannot."
      },
      {
        "id": "c2en-u6-q04",
        "sourceStepId": "c2en-readstep-24",
        "prompt": "Qu’est-ce qui rend la lettre plus respectueuse ?",
        "options": [
          "Elle exige une reconnaissance immédiate des bonnes intentions.",
          "Elle reconnaît l’effet de la remarque sans conditionner l’excuse à une réponse.",
          "Elle refuse toute discussion des conséquences."
        ],
        "answers": [
          "Elle reconnaît l’effet de la remarque sans conditionner l’excuse à une réponse."
        ],
        "explanation": "La réparation n’exige pas de réassurance en échange.",
        "context": "Dear Noor, I have rewritten this letter three times, mostly because every first sentence sounded like a verdict. When you said at dinner that I had dismissed your project, I immediately wanted to explain what I meant. The explanation was not invented; I was thinking about the deadlines, not the idea itself. But I can see now that my remark was made in front of people whose opinion matters to you, and that the setting changed what the remark did. Intention is part of the story, though it is not the whole of its effect.\n\nI wish I had asked what sort of feedback you wanted before offering any. I also wish you had told me at the table that the comment had hurt, though I recognise that asking you to respond publicly would have placed another burden on you. This is where my earlier drafts kept going wrong: each apology smuggled in a demand that you acknowledge my good intentions. I am trying to leave that demand out. You do not owe me reassurance in return for an admission that I spoke carelessly.\n\nA mutual friend suggested that you would be reassured if I explained my good intentions in person. I hesitated. A meeting could provide repair, but it could also become another stage on which you were expected to perform acceptance. I decided that an invitation with an explicit possibility of refusal would be more respectful than a surprise visit. This small decision aligns the letter's form with its claim: I can acknowledge an effect I caused without controlling your response. Apology, here, means making room for your account to remain different.\n\nIf you want to talk, I would like to hear which part of the evening felt most difficult. If you would rather not, I will respect that too. I am not asking you to agree with my account. I am asking whether there is a way to make future conversations less costly for both of us."
      },
      {
        "id": "c2en-u6-q05",
        "sourceStepId": "c2en-grammarstep-16",
        "prompt": "Pour offrir un refus réel à un interlocuteur, quelle formule est la plus appropriée ?",
        "options": [
          "You clearly agree because you signed.",
          "You have to answer right now.",
          "You are free to decline, and no reason is required."
        ],
        "answers": [
          "You are free to decline, and no reason is required."
        ],
        "explanation": "L’option donne une possibilité explicite de refus."
      },
      {
        "id": "c2en-u6-q06",
        "sourceStepId": "c2en-grammarstep-17",
        "prompt": "« We can explore this » signifie généralement...",
        "options": [
          "The idea may be discussed; no approval is necessarily granted.",
          "Implementation begins next Monday.",
          "A binding contract has been signed."
        ],
        "answers": [
          "The idea may be discussed; no approval is necessarily granted."
        ],
        "explanation": "Explore n’est pas une décision opérationnelle."
      },
      {
        "id": "c2en-u6-q07",
        "sourceStepId": "c2en-grammarstep-18",
        "prompt": "Dans une note diplomatique, « without prejudice » vise à...",
        "options": [
          "Supprimer toute obligation de sécurité.",
          "Préserver les droits contestés pendant une coopération limitée.",
          "Accepter toutes les revendications concurrentes."
        ],
        "answers": [
          "Préserver les droits contestés pendant une coopération limitée."
        ],
        "explanation": "La réserve distingue collaboration et reconnaissance juridique."
      },
      {
        "id": "c2en-u6-q08",
        "sourceStepId": "c2en-phrasestep-06",
        "prompt": "Vous rectifiez un accord présumé sans accuser votre collègue.",
        "options": [
          "You lied about every detail.",
          "I may not have been clear: I understood us to have agreed on a review only.",
          "Our polite exchange authorised immediate implementation."
        ],
        "answers": [
          "I may not have been clear: I understood us to have agreed on a review only."
        ],
        "explanation": "Rectification sans humiliation et précision de la décision."
      },
      {
        "id": "c2en-u6-q09",
        "sourceStepId": "c2en-verbstep-06",
        "prompt": "La remarque a été mal interprétée. Past participle de misconstrue ?",
        "options": [
          "misconstruing",
          "misconstrueed",
          "misconstrued"
        ],
        "answers": [
          "misconstrued"
        ],
        "explanation": "Forme irrégulière : misconstrued."
      },
      {
        "id": "c2en-u6-q10",
        "sourceStepId": "c2en-gvstep-12",
        "prompt": "Une phrase de politesse n’engage pas encore la partie.",
        "options": [
          "a nonbinding expression of interest",
          "an implicit mandate to act",
          "procedural trustworthiness"
        ],
        "answers": [
          "a nonbinding expression of interest"
        ],
        "explanation": "Nonbinding : sans caractère contraignant."
      },
      {
        "id": "c2en-u6-q11",
        "sourceStepId": "c2en-gvstep-11",
        "prompt": "Un interlocuteur acquiesce mais ne consent pas réellement.",
        "options": [
          "distinguish acquiescence from consent",
          "a corrective restatement",
          "a constructive but bounded concession"
        ],
        "answers": [
          "distinguish acquiescence from consent"
        ],
        "explanation": "Acquiescement n’est pas consentement."
      },
      {
        "id": "c2en-u6-q12",
        "sourceStepId": "c2en-gvstep-11",
        "prompt": "Vous corrigez un malentendu sans punir.",
        "options": [
          "a diplomatic reservation of position",
          "an implicit mandate to act",
          "a non-punitive clarification"
        ],
        "answers": [
          "a non-punitive clarification"
        ],
        "explanation": "Clarification non punitive."
      }
    ]
  },
  {
    "level": "C2",
    "unit": 7,
    "isDemo": false,
    "passPercent": 80,
    "questions": [
      {
        "id": "c2en-u7-q01",
        "sourceStepId": "c2en-readstep-25",
        "prompt": "Pourquoi les deux archives ne doivent-elles pas être simplement « moyennées » ?",
        "options": [
          "Parce que chacune définit différemment l’événement et laisse des lacunes distinctes.",
          "Parce que les archives associatives sont par nature fausses.",
          "Parce que les archives officielles sont toujours complètes."
        ],
        "answers": [
          "Parce que chacune définit différemment l’événement et laisse des lacunes distinctes."
        ],
        "explanation": "La comparaison porte sur les référents, la provenance et les manques documentaires.",
        "context": "Archive A records that the bridge was closed ‘following a public safety consultation’. Archive B, maintained by a neighbourhood association, says the closure was announced before the consultation took place. Both statements may be literally true: the official record refers to the permanent closure order, whereas the association describes the earlier temporary barrier that made access impossible. The apparent contradiction partly reflects different choices about which event counts as ‘the closure’. It would nevertheless be premature to conclude that the accounts are fully reconciled, since the dates do not establish who knew what during the consultation.\n\nThe historian’s task is not to average the two narratives into a reassuring middle position. It is to establish their provenance, identify the institutions each document was produced for and reconstruct the sequence of decisions. In Archive A, passive constructions obscure the issuing authority; in Archive B, the word ‘imposed’ expresses residents’ experience but does not by itself identify a legal breach. Reading the documents against one another makes their distinct commitments visible. It also reveals what neither contains: minutes of the meeting at which the temporary barrier was authorised.\n\nTo test the chronology, the historian sought evidence outside either archive: bus timetables, photographs from a local newspaper and maintenance invoices. None by itself identified the person who authorised the barrier, but together they narrowed the likely period in which it was installed. A photograph that initially looked decisive turned out to have been published a week after it was taken. Correcting that date removed one apparent contradiction without resolving the dispute about consultation. The historian recorded each inference separately, allowing future researchers to distinguish established dates from hypotheses that rested on the surviving fragments.\n\nA responsible account can therefore state the practical effect of the early barrier with confidence while leaving the legitimacy of its authorisation open. The missing minutes are not evidence that no meeting occurred. Nor should their absence be treated as harmless, given that record keeping was an official duty. The point of source criticism is not to evacuate judgement; it is to locate precisely where judgement must remain conditional."
      },
      {
        "id": "c2en-u7-q02",
        "sourceStepId": "c2en-readstep-26",
        "prompt": "Quel mécanisme central le texte dénonce-t-il ?",
        "options": [
          "Toute forme de mesure chiffrée.",
          "La disparition complète du suivi des étudiants.",
          "La transformation d’un indicateur utile en objectif qui déforme les pratiques."
        ],
        "answers": [
          "La transformation d’un indicateur utile en objectif qui déforme les pratiques."
        ],
        "explanation": "Le problème apparaît lorsque le score devient une cible.",
        "context": "The university introduced a measure of ‘student engagement’ based on the number of visits to its online platform. The metric had initially been adopted to identify learners who might need support. Within two years, departments were being ranked by their average engagement score. Staff responded by requiring students to open materials online even where printed copies were more suitable. The indicator improved while the underlying educational experience became, in several respects, less flexible. What began as an imperfect signal had turned into an incentive to produce the signal itself.\n\nA review committee asked whether the platform visits were correlated with learning outcomes. They were, weakly, in some subjects and not at all in others. The committee resisted the temptation to declare the metric useless. A visit count could still help identify a sudden change in an individual student’s participation; it was less defensible as a cross-departmental ranking. The meaning of a measure depends on the decision to which it is attached. An indicator can be informative for one purpose while distorting behaviour when promoted into a performance target.\n\nOne department offered a particularly revealing example. Its staff had encouraged students to attend in-person workshops, which improved learning but reduced the number of platform visits. Under the ranking system, this department appeared to be underperforming. A manager suggested requiring workshop participants to log in afterwards so their participation could be counted. The proposal exposed how measurement can begin to govern the activity it purports to represent. The review committee rejected the extra login requirement and recommended evaluating workshops through direct evidence of attendance and learning instead of a proxy chosen for administrative ease.\n\nThe revised framework retained the metric for support services but removed it from departmental rankings. It introduced qualitative review and required managers to document how indicators were being used. Predictably, some complained that the new framework was less objective. The committee replied that objectivity does not consist in counting whatever is easy to count. It consists in being candid about what a number can warrant, and in refusing to make it answer questions it was never designed to address."
      },
      {
        "id": "c2en-u7-q03",
        "sourceStepId": "c2en-readstep-27",
        "prompt": "En quoi la prévision de l’histoire est-elle paradoxale ?",
        "options": [
          "Elle prouve que la mer ne change jamais.",
          "Elle n’a joué aucun rôle dans les événements.",
          "Elle semble confirmée en partie parce que les habitants ont agi en fonction d’elle."
        ],
        "answers": [
          "Elle semble confirmée en partie parce que les habitants ont agi en fonction d’elle."
        ],
        "explanation": "Le modèle a influencé les décisions qui ont transformé les faits observés.",
        "context": "In her imagined history of tomorrow, the narrator describes a seaside town whose residents have spent twenty years preparing for the sea to rise. By the date at which the story is told, the sea has risen less than expected, yet nearly every house has been rebuilt. The town looks like evidence of successful prediction. Then the narrator reveals that its inhabitants had changed the shoreline through a series of small decisions that no single forecast had anticipated. The apparent confirmation of the original model turns out to be partly the result of people acting upon it.\n\nThe author repeatedly shifts between what would have happened without the model, what might have happened under a different policy and what did in fact happen. The sentences resist tidy counterfactual certainty. ‘Had they known, they might have stayed,’ one character says. The next immediately asks what such knowledge would even have consisted of: a reliable tide level, an accurate cost estimate, or confidence that public promises would be honoured? Neither a reliable tide estimate nor a relocation promise, taken in isolation, could have furnished certainty. The novel refuses to let a conditional clause disguise a missing account of the world it imagines.\n\nA marginal note in the child's inherited map gives the date of a prediction, the person who drew it and the question it was meant to answer. The detail is easy to overlook but central to the novel's logic. The same line can be responsible guidance in one context and a misleading assurance in another. A prediction is not merely a proposition that later becomes true or false; it is also an intervention in the decisions of those who hear it. The narrator's attention to dates and purposes therefore gives the ending a historical dimension that the speculative premise might otherwise lack.\n\nAt the end, a child inherits a flood map with several corrections in different handwriting. She does not ask which version was finally right. She asks why each was drawn when it was. The shift from prediction to justification is the book’s quiet wager: the future is not merely something we try to foresee, but something our descriptions help to shape."
      },
      {
        "id": "c2en-u7-q04",
        "sourceStepId": "c2en-readstep-28",
        "prompt": "Quel principe guide la recommandation finale ?",
        "options": [
          "Attendre une preuve absolue avant toute action.",
          "Remplacer toute décision humaine par une classification automatique.",
          "Agir sous conditions transparentes et prévoir les critères de révision ou de suspension."
        ],
        "answers": [
          "Agir sous conditions transparentes et prévoir les critères de révision ou de suspension."
        ],
        "explanation": "La recommandation joint action limitée, transparence et réversibilité.",
        "context": "The commission recommends a three-year pilot for the proposed public-interest data service, subject to explicit safeguards. The evidence suggests that the service could improve access to information currently dispersed across institutions. It does not establish that centralisation would be beneficial in every setting, nor that efficiency gains would outweigh the risks to people with unusual or sensitive records. The proposal is therefore conditional: participation must be voluntary, an independent appeals process must be funded and no adverse decision may rest solely on an automated classification.\n\nOur conclusion follows from three bodies of evidence, none decisive in isolation. The technical audit shows that the system can be operated reliably under controlled conditions. Interviews reveal why some users want it and why others fear it. Comparative studies show that similar services have succeeded when records are correctable and failed when administrative convenience displaced accountability. We have not averaged these findings into one score. Instead, we have stated which claims each source can support and what would have to change for our conclusion to change.\n\nThe commission's strongest disagreement concerned what should count as harm. Technical failures were easily reported; subtler losses of trust or autonomy were harder to measure. Community representatives proposed collecting qualitative accounts alongside error rates, with independent reviewers able to request suspension before a numerical threshold was crossed. The commission accepted this safeguard while requiring written reasons for each intervention. That choice did not turn every complaint into proof, nor did it reduce experience to an anecdote beneath statistics. It made room for different forms of evidence to trigger a formal examination, which was essential to the pilot's legitimacy.\n\nA reviewer accused us of hedging. We accept the description if it means refusing to present a provisional judgement as a timeless truth. We reject it if it implies unwillingness to act. The pilot has a clear end date, published measures of harm as well as benefit, and predetermined conditions for suspension. A recommendation without those conditions would sound bolder, but it would be less responsible. To decide well is not to escape uncertainty; it is to give uncertainty a place in the decision."
      },
      {
        "id": "c2en-u7-q05",
        "sourceStepId": "c2en-grammarstep-19",
        "prompt": "Quelle stratégie corrige un pronom ambigu entre deux archives ?",
        "options": [
          "Assume all dates refer to one event.",
          "Specify the temporary barrier and the permanent order separately.",
          "Replace every noun with it."
        ],
        "answers": [
          "Specify the temporary barrier and the permanent order separately."
        ],
        "explanation": "Il faut préciser les référents concurrents."
      },
      {
        "id": "c2en-u7-q06",
        "sourceStepId": "c2en-grammarstep-20",
        "prompt": "Quel énoncé respecte la différence entre corrélation et causalité ?",
        "options": [
          "The association may reflect other factors; causation is not established.",
          "All indicators are worthless.",
          "The association proves the platform caused success."
        ],
        "answers": [
          "The association may reflect other factors; causation is not established."
        ],
        "explanation": "L’association seule ne démontre pas le mécanisme causal."
      },
      {
        "id": "c2en-u7-q07",
        "sourceStepId": "c2en-grammarstep-21",
        "prompt": "Quelle phrase construit une conclusion C2 révisable ?",
        "options": [
          "The proposal is unquestionably correct forever.",
          "The conflicting evidence should be discarded.",
          "The trial is recommended subject to published suspension conditions."
        ],
        "answers": [
          "The trial is recommended subject to published suspension conditions."
        ],
        "explanation": "Elle lie l’action à des conditions observables et révisables."
      },
      {
        "id": "c2en-u7-q08",
        "sourceStepId": "c2en-phrasestep-07",
        "prompt": "Vous recommandez une décision encore contestable.",
        "options": [
          "The available evidence ends all debate.",
          "Our recommendation is provisional but tied to testable conditions.",
          "All uncertainty is irrelevant."
        ],
        "answers": [
          "Our recommendation is provisional but tied to testable conditions."
        ],
        "explanation": "Une décision justifiée reste ouverte à la révision."
      },
      {
        "id": "c2en-u7-q09",
        "sourceStepId": "c2en-verbstep-07",
        "prompt": "Les entretiens ont corroboré la chronologie. Past simple ?",
        "options": [
          "corroborat",
          "corroborated",
          "corroborating"
        ],
        "answers": [
          "corroborated"
        ],
        "explanation": "Past simple régulier : corroborated."
      },
      {
        "id": "c2en-u7-q10",
        "sourceStepId": "c2en-gvstep-13",
        "prompt": "Deux témoignages indépendants sont recoupés.",
        "options": [
          "a source-dependent conclusion",
          "triangulate independent testimony",
          "a revision-ready conclusion"
        ],
        "answers": [
          "triangulate independent testimony"
        ],
        "explanation": "Triangulate : croiser des sources."
      },
      {
        "id": "c2en-u7-q11",
        "sourceStepId": "c2en-gvstep-14",
        "prompt": "Un indicateur encourage des stratégies pour améliorer le score.",
        "options": [
          "a metric vulnerable to gaming",
          "a predictive assumption",
          "a defensible interval estimate"
        ],
        "answers": [
          "a metric vulnerable to gaming"
        ],
        "explanation": "Gaming désigne un détournement de l’indicateur."
      },
      {
        "id": "c2en-u7-q12",
        "sourceStepId": "c2en-gvstep-13",
        "prompt": "Une conclusion expose ce qui pourrait conduire à la réviser.",
        "options": [
          "an unresolved evidential gap",
          "a source-dependent conclusion",
          "a revision-ready conclusion"
        ],
        "answers": [
          "a revision-ready conclusion"
        ],
        "explanation": "Conclusion conditionnelle."
      }
    ]
  }
];

import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarC1: GrammarLesson[] = [
    {
        unit: 1,
        id: 'subjunctive-literary',
        title: 'Subjunctive: Literary & Formal Uses',
        level: 'C1',
        description: 'Master the subjunctive in formal writing, the past subjunctive, and rare literary constructions',
        icon: '✒️',
        color: '#7C3AED',
        sections: [
            {
                title: 'The Subjunctive After Advanced Triggers',
                explanation: 'Beyond basic triggers, the subjunctive appears after expressions of doubt, necessity, and judgment: il est essentiel que, il importe que, à condition que, pour peu que, bien que, quoique, avant que, à moins que. At C1, you master these with compound tenses.',
                examples: [
                    { french: 'Il est essentiel que tu aies compris.', english: 'It is essential that you have understood.' },
                    { french: 'Bien qu\'il soit parti tôt, il a raté le train.', english: 'Although he left early, he missed the train.' },
                    { french: 'À moins que vous ne fassiez attention, vous échouerez.', english: 'Unless you pay attention, you will fail.' },
                ],
            },
            {
                title: 'The Past Subjunctive (Subjonctif Passé)',
                explanation: 'The past subjunctive (avoir/être in present subjunctive + past participle) expresses a completed action from the perspective of the main clause. It is required when the subordinate action is prior to the main action: je suis content qu\'il soit venu.',
                examples: [
                    { french: 'Je doute qu\'elle ait vraiment compris.', english: 'I doubt she really understood.' },
                    { french: 'Il est dommage que vous ayez raté cette occasion.', english: 'It\'s a shame you missed that opportunity.' },
                    { french: 'Bien qu\'il ait travaillé toute la nuit, il a échoué.', english: 'Even though he worked all night, he failed.' },
                ],
            },
            {
                title: 'Literary Subjunctive Constructions',
                explanation: 'In formal and literary French, the subjunctive appears after superlatives, after le seul / le premier / le dernier, and in set expressions. The phrase "ne" (expletif) often accompanies subjunctive clauses after verbs of fearing and conjunctions like avant que.',
                examples: [
                    { french: 'C\'est le meilleur film que j\'aie jamais vu.', english: 'It\'s the best film I have ever seen.' },
                    { french: 'Je crains qu\'il ne soit trop tard.', english: 'I fear it may be too late.' },
                    { french: 'Partez avant que la tempête n\'éclate.', english: 'Leave before the storm breaks.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Il est impératif que tu ___ (être) présent demain.', answer: 'sois', hint: 'impératif que + subjonctif présent' },
            { sentence: 'Je suis content qu\'il ___ (venir) enfin.', answer: 'soit venu', hint: 'subjonctif passé: être au subjonctif + participe passé' },
            { sentence: 'Bien qu\'elle ___ (travailler) dur, elle a échoué.', answer: 'ait travaillé', hint: 'bien que + subjonctif passé (action antérieure)' },
            { sentence: 'C\'est la seule solution que je ___ (pouvoir) proposer.', answer: 'puisse', hint: 'après "le seul" → subjonctif' },
            { sentence: 'Je crains qu\'il ne ___ (partir) sans prévenir.', answer: 'parte', hint: 'verbe de crainte + ne expletif + subjonctif' },
            { sentence: 'Partez avant qu\'il ne ___ (faire) nuit.', answer: 'fasse', hint: 'avant que + ne expletif + subjonctif' },
        ],
    },
    {
        unit: 1,
        id: 'register-formal-informal',
        title: 'Register: Formal & Informal French',
        level: 'C1',
        description: 'Navigate confidently between formal, standard, and informal registers in speech and writing',
        icon: '🎩',
        color: '#7C3AED',
        sections: [
            {
                title: 'What Is Register?',
                explanation: 'Register refers to the level of formality in language. French has three main registers: soutenu (formal/literary), courant (standard/neutral), and familier (informal/colloquial). Choosing the right register depends on context: who you are speaking to, the medium (written vs spoken), and the social situation.',
                examples: [
                    { french: 'Soutenu: Je vous serais reconnaissant de bien vouloir…', english: 'I would be grateful if you would kindly…' },
                    { french: 'Courant: Je vous demande de…', english: 'I ask you to…' },
                    { french: 'Familier: Tu peux…?', english: 'Can you…?' },
                ],
            },
            {
                title: 'Formal Vocabulary Substitutions',
                explanation: 'Formal French uses Latinate vocabulary where informal French uses common words. Key swaps: obtenir → avoir, effectuer → faire, ultérieurement → plus tard, dans l\'éventualité où → si, en ce qui concerne → à propos de, par conséquent → donc, néanmoins → quand même.',
                examples: [
                    { french: 'Nous effectuerons les démarches nécessaires.', english: 'We will carry out the necessary steps.' },
                    { french: 'Ultérieurement, nous vous transmettrons les documents.', english: 'At a later stage, we will send you the documents.' },
                    { french: 'Dans l\'éventualité où il ne se présenterait pas…', english: 'In the event that he does not appear…' },
                ],
            },
            {
                title: 'Syntactic Differences Across Registers',
                explanation: 'Formal French uses inversion in questions, avoids dropping "ne" in negation, uses the subjunctive more, and avoids contractions. Informal French drops "ne" (je sais pas), replaces "nous" with "on", uses c\'est instead of il est, and shortens relative clauses.',
                examples: [
                    { french: 'Soutenu: Sauriez-vous où se trouve la salle ?', english: 'Would you know where the room is?' },
                    { french: 'Courant: Vous savez où est la salle ?', english: 'Do you know where the room is?' },
                    { french: 'Familier: Tu sais où c\'est, la salle ?', english: 'Do you know where the room is?' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Je ___ (vouloir, soutenu) vous informer du changement de programme.', answer: 'souhaite', hint: 'souhaiter is more formal than vouloir' },
            { sentence: 'Registre formel: Remplacez "si vous êtes intéressé" → "___"', answer: 'dans l\'éventualité où vous seriez intéressé', hint: 'dans l\'éventualité où + conditionnel = très formel' },
            { sentence: 'Enlevez le registre familier: "on a pas eu le temps" → "___"', answer: 'nous n\'avons pas eu le temps', hint: 'on → nous; drop ne restored; standard register' },
            { sentence: 'Transformez en registre soutenu: "Je vous écris pour le poste."', answer: 'Je me permets de vous écrire au sujet du poste.', hint: 'se permettre de = formal opener' },
            { sentence: 'Comment dit-on "donc" en registre soutenu ?', answer: 'par conséquent', hint: 'par conséquent, en conséquence, dès lors = formal alternatives' },
            { sentence: 'Quelle est la forme interrogative soutenue de "Tu peux m\'aider ?"', answer: 'Pourriez-vous m\'aider ?', hint: 'conditionnel de politesse + inversion = register soutenu' },
        ],
    },
    {
        unit: 3,
        id: 'participle-constructions',
        title: 'Advanced Participle Constructions',
        level: 'C1',
        description: 'Use present and past participles in complex, literary, and absolute constructions',
        icon: '⚙️',
        color: '#7C3AED',
        sections: [
            {
                title: 'The Present Participle vs the Gerund',
                explanation: 'The present participle (verb + -ant, invariable as a verb) describes an action or state, often equivalent to a relative clause: un homme parlant vite = un homme qui parle vite. The gerund (en + -ant) describes how or when the main action takes place and must share the subject with the main verb.',
                examples: [
                    { french: 'C\'est un problème nécessitant une solution urgente.', english: 'It is a problem requiring an urgent solution.' },
                    { french: 'Elle s\'est blessée en courant.', english: 'She hurt herself while running.' },
                    { french: 'Tout en admettant ses erreurs, il refusait de s\'excuser.', english: 'While admitting his mistakes, he refused to apologize.' },
                ],
            },
            {
                title: 'Absolute Constructions',
                explanation: 'An absolute construction uses a noun + participle (present or past) as a subordinate clause with its own implied subject, separate from the main clause. Common in literary and formal French: La réunion terminée, tout le monde partit. / Les bras croisés, il attendait. This construction compresses a clause into a phrase.',
                examples: [
                    { french: 'Les négociations échouées, la guerre reprit.', english: 'The negotiations having failed, the war resumed.' },
                    { french: 'Le soleil se couchant sur la mer, ils rentrèrent.', english: 'As the sun was setting over the sea, they returned.' },
                    { french: 'Cela dit, il n\'y a pas lieu de s\'inquiéter.', english: 'That said, there is no reason to worry.' },
                ],
            },
            {
                title: 'Past Participle in Agreement and Passive',
                explanation: 'The past participle agrees with a preceding direct object (with avoir) or with the subject (with être and in passive). Advanced agreement rules apply to reflexive verbs: elle s\'est lavée (laver quelqu\'un) but elle s\'est lavé les mains (laver les mains). In the passive, the agent is introduced by par or de.',
                examples: [
                    { french: 'Les lettres qu\'il a écrites sont magnifiques.', english: 'The letters he wrote are magnificent.' },
                    { french: 'Elle s\'est souvenue de toi.', english: 'She remembered you. (no agreement: se souvenir is intransitive)' },
                    { french: 'Le projet a été approuvé par le conseil.', english: 'The project was approved by the board.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Les résultats ___ (annoncer, participe passé), les étudiants partirent.', answer: 'annoncés', hint: 'absolute construction: résultats (masc. pl.) + participe passé' },
            { sentence: 'Elle a lu les rapports qu\'on lui avait ___ (envoyer).', answer: 'envoyés', hint: 'agreement with preceding direct object: rapports (masc. pl.)' },
            { sentence: 'Il est entré dans la salle en ___ (claquer) la porte.', answer: 'claquant', hint: 'gérondif: en + participe présent' },
            { sentence: 'C\'est un sujet ___ (requérir) une grande prudence.', answer: 'requérant', hint: 'participe présent replacing a relative clause' },
            { sentence: 'Elle s\'est ___ (couper) le doigt en cuisinant.', answer: 'coupé', hint: 'se couper le doigt: doigt is DO → no agreement with subject' },
            { sentence: 'La décision ___ (prendre) par le comité surprit tout le monde.', answer: 'prise', hint: 'passive participle: la décision (fém.) → prise' },
        ],
    },
    {
        unit: 2,
        id: 'reported-speech-advanced',
        title: 'Advanced Reported Speech',
        level: 'C1',
        description: 'Report speech and thought with precise tense sequences, including questions and imperatives',
        icon: '💬',
        color: '#7C3AED',
        sections: [
            {
                title: 'Tense Sequence in Reported Speech',
                explanation: 'When the reporting verb is in the past (dit que, expliqua que, etc.), tenses shift back: présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel présent, futur antérieur → conditionnel passé. Time expressions also shift: maintenant → alors, demain → le lendemain, hier → la veille.',
                examples: [
                    { french: '"Je viendrai demain." → Il a dit qu\'il viendrait le lendemain.', english: '"I will come tomorrow." → He said he would come the next day.' },
                    { french: '"J\'ai fini hier." → Elle a dit qu\'elle avait fini la veille.', english: '"I finished yesterday." → She said she had finished the day before.' },
                    { french: '"Nous partirons." → Ils ont annoncé qu\'ils partiraient.', english: '"We will leave." → They announced they would leave.' },
                ],
            },
            {
                title: 'Reporting Questions',
                explanation: 'Yes/no questions become indirect with si: "Viendrez-vous ?" → Il a demandé si je viendrais. Wh-questions use the question word as a subordinating conjunction and require subject-verb order (no inversion): "Où allez-vous ?" → Il a demandé où j\'allais. "Qu\'est-ce que" becomes ce que in reported speech.',
                examples: [
                    { french: '"Est-ce qu\'il pleut ?" → Elle a demandé s\'il pleuvait.', english: '"Is it raining?" → She asked if it was raining.' },
                    { french: '"Qu\'est-ce que tu veux ?" → Il a demandé ce que je voulais.', english: '"What do you want?" → He asked what I wanted.' },
                    { french: '"Pourquoi es-tu en retard ?" → Elle a voulu savoir pourquoi j\'étais en retard.', english: '"Why are you late?" → She wanted to know why I was late.' },
                ],
            },
            {
                title: 'Reporting Imperatives and Written Style',
                explanation: 'Imperatives become indirect with de + infinitive: "Partez !" → Il leur a ordonné de partir. "Ne bougez pas !" → Il leur a dit de ne pas bouger. In literary writing, reported thought (discours indirect libre) omits the reporting verb and blends into the narrative: "Était-il trop tard ? Il l\'ignorait." This gives novels their inner-voice quality.',
                examples: [
                    { french: '"Asseyez-vous." → Elle leur a demandé de s\'asseoir.', english: '"Sit down." → She asked them to sit down.' },
                    { french: '"N\'ouvrez pas la porte !" → Il a interdit d\'ouvrir la porte.', english: '"Don\'t open the door!" → He forbade them to open the door.' },
                    { french: 'Discours indirect libre: Était-ce vraiment sa faute ? Il ne savait plus.', english: 'Free indirect speech: Was it really his fault? He no longer knew.' },
                ],
            },
        ],
        exercises: [
            { sentence: '"Je suis fatigué." → Il a dit qu\'il ___ (être, tense shift).', answer: 'était fatigué', hint: 'présent → imparfait in reported speech' },
            { sentence: '"J\'ai réussi." → Elle a annoncé qu\'elle ___ (réussir, tense shift).', answer: 'avait réussi', hint: 'passé composé → plus-que-parfait' },
            { sentence: '"Viendras-tu ?" → Il a demandé si je ___ (venir, tense shift).', answer: 'viendrais', hint: 'yes/no question: si + conditionnel' },
            { sentence: '"Qu\'est-ce que tu cherches ?" → Elle a voulu savoir ce que je ___ (chercher).', answer: 'cherchais', hint: 'qu\'est-ce que → ce que; présent → imparfait' },
            { sentence: '"Fermez la porte." → Il leur a dit ___ (fermer) la porte.', answer: 'de fermer', hint: 'imperative → dire de + infinitif' },
            { sentence: '"Ne parlez pas si fort !" → Elle leur a demandé ___ (ne pas parler) si fort.', answer: 'de ne pas parler', hint: 'negative imperative → de ne pas + infinitif' },
        ],
    },
    {
        unit: 1,
        id: 'modal-nuance',
        title: 'Modal Verbs & Nuance',
        level: 'C1',
        description: 'Use modal verbs in compound tenses and with semi-modal expressions to express subtle degrees of possibility, obligation, and intention',
        icon: '🎛️',
        color: '#7C3AED',
        sections: [
            {
                title: 'Modals in Compound Tenses',
                explanation: 'In the conditionnel passé, devoir expresses a missed obligation or reproach (il aurait dû partir = he should have left), pouvoir expresses an unrealized possibility (il aurait pu réussir = he could have succeeded), and vouloir expresses an unfulfilled wish. These are high-frequency patterns in C1 discourse.',
                examples: [
                    { french: 'Tu aurais dû me prévenir.', english: 'You should have warned me.' },
                    { french: 'Elle aurait pu être médecin.', english: 'She could have been a doctor.' },
                    { french: 'Il aurait voulu voyager, mais le temps manquait.', english: 'He would have liked to travel, but time was short.' },
                ],
            },
            {
                title: 'Pouvoir and Devoir for Probability',
                explanation: 'Devoir in the present can express probability: il doit être tard (it must be late). In the past, il devait être tard (it was probably late) and il a dû partir (he must have left). Pouvoir with a conditional adds distance or hypothesis: cela pourrait expliquer (this could explain). These fine distinctions mark fluent C1 speakers.',
                examples: [
                    { french: 'Il doit avoir une quarantaine d\'années.', english: 'He must be around forty.' },
                    { french: 'Elle a dû oublier le rendez-vous.', english: 'She must have forgotten the appointment.' },
                    { french: 'Cette décision pourrait avoir des conséquences graves.', english: 'This decision could have serious consequences.' },
                ],
            },
            {
                title: 'Semi-Modal Expressions',
                explanation: 'Beyond the core modals, French has rich semi-modal expressions: être censé + inf. (to be supposed to), être amené à + inf. (to come to / be led to), être sur le point de + inf. (to be about to), être en mesure de + inf. (to be in a position to), avoir beau + inf. (to do something in vain). These give precision and sophistication to expression.',
                examples: [
                    { french: 'Il est censé arriver à neuf heures.', english: 'He is supposed to arrive at nine.' },
                    { french: 'Nous sommes amenés à reconsidérer notre position.', english: 'We are led to reconsider our position.' },
                    { french: 'Elle avait beau insister, personne ne l\'écoutait.', english: 'However much she insisted, nobody listened to her.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Il ___ (devoir, conditionnel passé) te prévenir.', answer: 'aurait dû', hint: 'missed obligation: aurait dû + infinitif' },
            { sentence: 'Elle ___ (pouvoir, conditionnel passé) réussir si elle avait travaillé.', answer: 'aurait pu', hint: 'unrealized possibility: aurait pu + infinitif' },
            { sentence: 'Il ___ (devoir, présent) avoir une cinquantaine d\'années.', answer: 'doit', hint: 'probability in present: devoir présent' },
            { sentence: 'Cette erreur ___ (pouvoir, conditionnel présent) coûter cher.', answer: 'pourrait', hint: 'hypothetical possibility: conditionnel présent' },
            { sentence: 'Elle est ___ (censé) nous rappeler hier.', answer: 'censée', hint: 'être censé(e) = to be supposed to; agreement with subject' },
            { sentence: 'Il ___ beau essayer, il ne comprenait pas.', answer: 'avait', hint: 'avoir beau + infinitif = to do something in vain' },
        ],
    },
    {
        unit: 3,
        id: 'hypothetical-past',
        title: 'Hypothetical Past & Mixed Conditionals',
        level: 'C1',
        description: 'Express hypothetical past situations, regret, and mixed-time conditions with Type 3 and mixed conditionals',
        icon: '⏪',
        color: '#7C3AED',
        sections: [
            {
                title: 'Type 3 Conditionals: The Hypothetical Past',
                explanation: 'Type 3 conditionals express a hypothetical situation that did not happen in the past. Structure: Si + plus-que-parfait, conditionnel passé. This is the highest-frequency structure for expressing regret or imagining alternate histories: Si j\'avais su, je n\'aurais pas dit ça.',
                examples: [
                    { french: 'Si elle avait étudié, elle aurait réussi.', english: 'If she had studied, she would have succeeded.' },
                    { french: 'Si nous n\'avions pas raté le train, nous serions arrivés à temps.', english: 'If we hadn\'t missed the train, we would have arrived on time.' },
                    { french: 'S\'il t\'avait écouté, il n\'en serait pas là.', english: 'If he had listened to you, he wouldn\'t be in this situation.' },
                ],
            },
            {
                title: 'Mixed Conditionals',
                explanation: 'Mixed conditionals combine a past condition with a present result, or a present condition with a past result. Past → present: Si + plus-que-parfait, conditionnel présent (If I had studied [in the past], I would speak [now]). Present → past: Si + imparfait, conditionnel passé (If I were rich [now], I would have bought [it]). These require careful manipulation of tense.',
                examples: [
                    { french: 'Si j\'avais appris la guitare enfant, je jouerais maintenant.', english: 'If I had learnt guitar as a child, I would play now.' },
                    { french: 'Si j\'étais riche, j\'aurais acheté cette maison l\'année dernière.', english: 'If I were rich [now], I would have bought that house last year.' },
                    { french: 'Si tu avais dormi, tu ne serais pas si fatigué maintenant.', english: 'If you had slept, you wouldn\'t be so tired now.' },
                ],
            },
            {
                title: 'Expressing Regret and Alternate Realities',
                explanation: 'Beyond conditionals, French uses other structures to express regret: le regret de + inf., regretter de ne pas avoir + inf., si seulement + plus-que-parfait (if only…), j\'aurais préféré que + subjonctif passé. These allow nuanced expression of what might have been.',
                examples: [
                    { french: 'Si seulement j\'avais pris le temps de réfléchir !', english: 'If only I had taken the time to think!' },
                    { french: 'Je regrette de ne pas avoir accepté cette offre.', english: 'I regret not having accepted that offer.' },
                    { french: 'J\'aurais préféré qu\'il fût présent.', english: 'I would have preferred him to be present. (literary)' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Si elle ___ (travailler, PQP), elle ___ (réussir, cond. passé).', answer: 'avait travaillé / aurait réussi', hint: 'type 3 conditional: si + PQP, conditionnel passé' },
            { sentence: 'Si j\'___ (apprendre, PQP) le chinois enfant, je le ___ (parler, cond. présent) maintenant.', answer: 'avais appris / parlerais', hint: 'mixed conditional: past condition → present result' },
            { sentence: 'Si tu ___ (se coucher, PQP) tôt, tu ne ___ (être, cond. présent) pas si fatigué.', answer: 't\'étais couché / serais', hint: 'mixed conditional with reflexive verb' },
            { sentence: 'Si seulement elle ___ (accepter, PQP) l\'offre !', answer: 'avait accepté', hint: 'si seulement + plus-que-parfait = if only (regret)' },
            { sentence: 'Je regrette de ne pas ___ (voir) cette exposition.', answer: 'avoir vu', hint: 'regretter de ne pas avoir + participe passé' },
            { sentence: 'Nous ___ (rater) le vol si nous ___ (ne pas se dépêcher, PQP).', answer: 'aurions raté / ne nous étions pas dépêchés', hint: 'type 3 with irregular: aurait raté / PQP of se dépêcher' },
        ],
    },
    {
        unit: 2,
        id: 'inversion-literary',
        title: 'Literary & Stylistic Inversion',
        level: 'C1',
        description: 'Use subject-verb inversion for formal questions, stylistic effect, and after fronted adverbs — marks of elegant written French',
        icon: '🔄',
        color: '#7C3AED',
        sections: [
            {
                title: 'Interrogative Inversion',
                explanation: 'Formal questions require subject-verb inversion. With noun subjects, repeat as a pronoun: Pierre viendra-t-il ? A -t- is inserted between vowels: a-t-il, mange-t-elle. With compound tenses, only the auxiliary inverts: Avez-vous compris ? Est-elle arrivée ? At C1, this is the default form in writing — not est-ce que.',
                examples: [
                    { french: 'Votre directeur a-t-il approuvé ce plan ?', english: 'Has your director approved this plan?' },
                    { french: 'Seriez-vous disponible mardi prochain ?', english: 'Would you be available next Tuesday?' },
                    { french: 'Où les négociations ont-elles repris ?', english: 'Where have the negotiations resumed?' },
                ],
            },
            {
                title: 'Stylistic Inversion After Fronted Adverbs',
                explanation: 'In formal and literary French, certain adverbs at the start of a clause trigger subject-verb inversion: ainsi (thus), peut-être (perhaps), à peine (scarcely), sans doute (no doubt), encore (still), aussi (therefore/so — not "also"). Peut-être takes inversion or a que clause: Peut-être viendra-t-il / Peut-être qu\'il viendra.',
                examples: [
                    { french: 'Ainsi se termina une longue époque de l\'histoire.', english: 'Thus ended a long era of history.' },
                    { french: 'À peine avait-il ouvert la porte qu\'il repartit.', english: 'Scarcely had he opened the door than he left again.' },
                    { french: 'Peut-être y a-t-il une autre explication.', english: 'Perhaps there is another explanation.' },
                ],
            },
            {
                title: 'Inversion in Reported Speech and Narrative',
                explanation: 'In literary French, reporting verbs after direct quotes invert: « Bonjour », dit-il. « Je ne comprends pas », avoua-t-elle. This is the standard form in published French — the reporting verb always follows the quote and inverts with its subject. This style must not be confused with English, where inverted reporting ("said he") is archaic.',
                examples: [
                    { french: '« Je ne savais pas », admit-il à voix basse.', english: '"I didn\'t know," he admitted quietly.' },
                    { french: '« Partez immédiatement ! » ordonna le général.', english: '"Leave immediately!" ordered the general.' },
                    { french: '« Avez-vous des questions ? » demanda la professeure.', english: '"Do you have any questions?" asked the teacher.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Reformulez: "Est-ce que votre collègue est disponible ?" (registre soutenu)', answer: 'Votre collègue est-il disponible ?', hint: 'noun subject → repeat as pronoun + inversion' },
            { sentence: 'Complétez: "Ainsi ___ (se terminer, passé simple) la conférence."', answer: 'se termina', hint: 'fronted "ainsi" triggers inversion; passé simple of se terminer' },
            { sentence: 'Complétez: "À peine ___ (arriver, PQP) qu\'il repartit."', answer: 'était-il arrivé', hint: 'à peine + inversion with plus-que-parfait' },
            { sentence: 'Écrivez la balise narrative: Il dit: "je reviens." → "___", ___.', answer: '« Je reviens », dit-il.', hint: 'quote → comma → verb → hyphen → inverted pronoun' },
            { sentence: 'Peut-être ___ (avoir) une erreur dans ce document. (avec inversion)', answer: 'y a-t-il', hint: 'peut-être + inversion: y a-t-il = il y a inverted' },
            { sentence: 'Sans doute ___ (ne pas savoir, imparfait) elle la vérité.', answer: 'ne savait-elle pas', hint: 'sans doute + inversion; ne...pas wraps the verb' },
        ],
    },
    {
        unit: 3,
        id: 'advanced-negation-literary',
        title: 'Advanced & Literary Negation',
        level: 'C1',
        description: 'Master emphatic negation, the expletive ne, and literary negative constructions to write with precision and style',
        icon: '🚫',
        color: '#7C3AED',
        sections: [
            {
                title: 'Beyond Ne…Pas: Emphatic Negation',
                explanation: 'French has many negative particles beyond pas: ne…plus (no longer), ne…jamais (never), ne…rien (nothing), ne…personne (nobody), ne…guère (scarcely/hardly — literary), ne…aucun(e) (not a single), ne…que (only — a restrictive, not a true negative). These can combine: il ne dit plus jamais rien. Each has specific placement rules for pronouns and past tenses.',
                examples: [
                    { french: 'Il ne mange guère en ce moment.', english: 'He is scarcely eating at the moment. (literary)' },
                    { french: 'Je n\'ai vu personne à cette heure-là.', english: 'I saw nobody at that hour.' },
                    { french: 'Elle ne dit jamais rien d\'important.', english: 'She never says anything important.' },
                ],
            },
            {
                title: 'The Expletive Ne (Ne Pléonastique)',
                explanation: 'In formal and literary French, a ne without pas appears in certain contexts — it does NOT make the sentence negative. It appears after verbs of fearing (craindre, avoir peur que), after avant que, à moins que, and after comparative conjunctions. The expletive ne signals a potential negative perspective without asserting it.',
                examples: [
                    { french: 'Je crains qu\'il ne soit trop tard.', english: 'I fear it may be too late. (not negative)' },
                    { french: 'Partez avant qu\'il ne fasse nuit.', english: 'Leave before it gets dark.' },
                    { french: 'Il est plus intelligent qu\'on ne le croit.', english: 'He is smarter than one thinks.' },
                ],
            },
            {
                title: 'Negative Constructions with Infinitives and Sans Que',
                explanation: 'With infinitives, both ne and pas come before the infinitive: ne pas savoir, ne jamais partir. After sans (without), the following clause uses the infinitive or, when subjects differ, sans que + subjunctive: il est parti sans rien dire / il est parti sans qu\'on le remarque.',
                examples: [
                    { french: 'Il vaut mieux ne pas répondre.', english: 'It is better not to reply.' },
                    { french: 'Elle a réussi à ne jamais perdre patience.', english: 'She managed never to lose patience.' },
                    { french: 'Il est parti sans que personne ne s\'en aperçoive.', english: 'He left without anyone noticing.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Il ne comprend ___ rien ___ rien. (only)', answer: 'ne…que', hint: 'ne…que = seulement; not a true negative' },
            { sentence: 'Je crains qu\'il ___ (venir) à l\'improviste. (expletif)', answer: 'ne vienne', hint: 'after craindre que: ne expletif + subjonctif' },
            { sentence: 'Il est sorti ___ dire un mot.', answer: 'sans', hint: 'sans + infinitif for negation without a full clause' },
            { sentence: 'Reformulez: "Elle est très intelligente, plus qu\'on pense." (avec ne expletif)', answer: 'Elle est plus intelligente qu\'on ne le pense.', hint: 'comparative + ne expletif + le pensée = formal structure' },
            { sentence: 'Négatif littéraire: "Je ___ sais (scarcely) comment répondre."', answer: 'ne sais guère', hint: 'ne…guère = formal/literary version of hardly' },
            { sentence: 'Il est parti sans que nous ___ (savoir, subjonctif) où il allait.', answer: 'sachions', hint: 'sans que + subjonctif; savoir → sachions' },
        ],
    },
    {
        unit: 5,
        id: 'conditionnel-passe',
        title: 'Le Conditionnel Passé',
        level: 'C1',
        description: 'Express hypothetical past situations, reproach, regret, and unverified information',
        icon: '⏳',
        color: '#7C3AED',
        sections: [
            {
                title: 'Formation',
                explanation: 'Conditionnel passé = avoir or être in conditionnel présent + past participle. The same verbs that use être in the passé composé use être here. The participle agrees with the subject when être is used.',
                examples: [
                    { french: 'parler → j\'aurais parlé', english: 'I would have spoken' },
                    { french: 'finir → elle aurait fini', english: 'she would have finished' },
                    { french: 'partir → il serait parti', english: 'he would have left' },
                    { french: 'venir → nous serions venus', english: 'we would have come' },
                    { french: 'se lever → elle se serait levée', english: 'she would have got up' },
                ],
            },
            {
                title: 'Hypothetical Past (si + plus-que-parfait)',
                explanation: 'Use conditionnel passé in the main clause when the condition clause uses the plus-que-parfait. This expresses a past situation that didn\'t happen.',
                examples: [
                    { french: 'Si j\'avais su, j\'aurais agi différemment.', english: 'If I had known, I would have acted differently.' },
                    { french: 'Si elle était venue, nous aurions pu discuter.', english: 'If she had come, we could have talked.' },
                    { french: 'Il ne serait pas parti s\'il avait eu le choix.', english: 'He wouldn\'t have left if he\'d had the choice.' },
                    { french: 'Si tu m\'avais écouté, ça ne serait pas arrivé.', english: 'If you\'d listened to me, this wouldn\'t have happened.' },
                ],
            },
            {
                title: 'Regret and Reproach',
                explanation: 'The conditionnel passé expresses what should or could have been done differently. Often used to express regret or blame.',
                examples: [
                    { french: 'Tu aurais pu m\'appeler !', english: 'You could have called me!' },
                    { french: 'J\'aurais dû y penser.', english: 'I should have thought of that.' },
                    { french: 'Il n\'aurait pas fallu dire ça.', english: 'You shouldn\'t have said that.' },
                    { french: 'On aurait pu trouver une solution.', english: 'We could have found a solution.' },
                ],
            },
            {
                title: 'Unverified Reported Information',
                explanation: 'Journalists use the conditionnel passé to report events they cannot confirm as fact — a key feature of formal French writing.',
                examples: [
                    { french: 'L\'accusé aurait menti lors de son témoignage.', english: 'The accused allegedly lied during his testimony.' },
                    { french: 'Le président aurait démissionné.', english: 'The president is reported to have resigned.' },
                    { french: 'Il y aurait eu plusieurs victimes.', english: 'There are said to have been several victims.' },
                ],
            },
        ],
        exercises: [
            { sentence: "Si j'avais su, j'___ agi différemment. (avoir, conditionnel passé)", answer: 'aurais', hint: 'conditionnel passé: avoir au conditionnel + participe passé' },
            { sentence: "Il ___ parti s'il avait eu le choix. (être, conditionnel passé)", answer: 'serait', hint: 'conditionnel passé with être: serait + parti' },
            { sentence: "Tu ___ pu m'appeler ! (avoir, conditionnel passé)", answer: 'aurais', hint: 'expressing reproach: aurais + pu' },
            { sentence: "J'___ dû y penser. (avoir, conditionnel passé)", answer: 'aurais', hint: 'devoir → dû; aurais dû = should have' },
            { sentence: "Le président ___ démissionné. (reported info, conditionnel passé)", answer: 'aurait', hint: 'unverified reported information uses conditionnel passé' },
            { sentence: "Elle ___ levée tôt. (se lever, conditionnel passé, feminine)", answer: 'se serait', hint: 'reflexive verb: se + serait + levée' },
        ],
    },
    {
        unit: 5,
        id: 'connecteurs-logiques',
        title: 'Les Connecteurs Logiques',
        level: 'C1',
        description: 'Master the linking words that structure sophisticated French argument and writing',
        icon: '🔗',
        color: '#DC2626',
        sections: [
            {
                title: 'Addition and Reinforcement',
                explanation: 'Use these to add information, build on a point, or strengthen an argument.',
                examples: [
                    { french: 'De plus, il faut noter que les résultats sont concluants.', english: 'Furthermore, it should be noted that the results are conclusive.' },
                    { french: 'En outre, cette approche présente plusieurs avantages.', english: 'Moreover, this approach has several advantages.' },
                    { french: 'Qui plus est, le coût est négligeable.', english: 'What is more, the cost is negligible.' },
                    { french: 'Par ailleurs, d\'autres facteurs entrent en jeu.', english: 'Besides, other factors come into play.' },
                    { french: 'De surcroît, cette mesure bénéficierait à tous.', english: 'On top of that, this measure would benefit everyone.' },
                ],
            },
            {
                title: 'Opposition and Contrast',
                explanation: 'Use these to introduce a contrasting idea. Register varies from informal (mais) to formal (néanmoins, cependant).',
                examples: [
                    { french: 'Il travaille dur ; néanmoins, il n\'avance pas.', english: 'He works hard; nevertheless, he makes no progress.' },
                    { french: 'Cette solution est simple ; cependant, elle comporte des risques.', english: 'This solution is simple; however, it carries risks.' },
                    { french: 'Je comprends votre point ; toutefois, je ne suis pas convaincu.', english: 'I understand your point; however, I am not convinced.' },
                    { french: 'Or, il s\'avère que les données sont incomplètes.', english: 'Yet, it turns out that the data is incomplete.' },
                    { french: 'Il prétend être innocent ; pour autant, les preuves l\'accablent.', english: 'He claims to be innocent; even so, the evidence against him is damning.' },
                ],
            },
            {
                title: 'Concession (+ subjunctive)',
                explanation: 'Concession acknowledges the opposing view before returning to your own. Bien que and quoique require the subjunctive.',
                examples: [
                    { french: 'Bien qu\'il soit difficile de trancher, certains éléments sont clairs.', english: 'Although it is difficult to decide, some things are clear.' },
                    { french: 'Quoique ce soit une bonne idée, elle est irréalisable.', english: 'Although it\'s a good idea, it\'s unworkable.' },
                    { french: 'Malgré ses efforts, il n\'a pas réussi.', english: 'Despite his efforts, he did not succeed.' },
                    { french: 'En dépit des obstacles, elle a persévéré.', english: 'In spite of the obstacles, she persevered.' },
                    { french: 'Même si tu travailles dur, le succès n\'est pas garanti.', english: 'Even if you work hard, success is not guaranteed.' },
                ],
            },
            {
                title: 'Consequence and Result',
                explanation: 'These connectors show that one thing follows logically from another.',
                examples: [
                    { french: 'Il a menti ; par conséquent, on ne lui fait plus confiance.', english: 'He lied; as a result, no one trusts him anymore.' },
                    { french: 'Les prix ont augmenté, c\'est pourquoi les consommateurs hésitent.', english: 'Prices have risen, which is why consumers are hesitant.' },
                    { french: 'Il pleuvait ; donc, le match a été annulé.', english: 'It was raining; therefore the match was cancelled.' },
                    { french: 'Les données manquent, d\'où l\'impossibilité de conclure.', english: 'The data is missing, hence the impossibility of drawing conclusions.' },
                    { french: 'Ainsi, on peut affirmer que la situation s\'est améliorée.', english: 'Thus, one can affirm that the situation has improved.' },
                ],
            },
            {
                title: 'Restriction and Condition (+ subjunctive)',
                explanation: 'These introduce a condition or exception. À moins que, à condition que, and pourvu que all require the subjunctive.',
                examples: [
                    { french: 'Je viendrai à moins qu\'il ne pleuve.', english: 'I\'ll come unless it rains.' },
                    { french: 'À condition que tu travailles, tu réussiras.', english: 'Provided that you work, you will succeed.' },
                    { french: 'Pourvu qu\'il fasse beau, on ira se promener.', english: 'As long as the weather is nice, we\'ll go for a walk.' },
                    { french: 'Je le ferai, sauf si tu m\'en empêches.', english: 'I\'ll do it, unless you stop me.' },
                ],
            },
        ],
        exercises: [
            { sentence: "___ plus, cette méthode est très efficace.", answer: 'De', hint: 'De plus = furthermore (addition)' },
            { sentence: "Il travaille dur ; ___, il n'avance pas.", answer: 'néanmoins', hint: 'opposition/contrast: nevertheless' },
            { sentence: "Bien qu'il ___ difficile de trancher, certains éléments sont clairs. (être, subjonctif)", answer: 'soit', hint: 'bien que requires the subjunctive' },
            { sentence: "Il a menti ; ___ conséquent, on ne lui fait plus confiance.", answer: 'par', hint: 'par conséquent = as a result' },
            { sentence: "Je viendrai à ___ qu'il ne pleuve.", answer: 'moins', hint: 'à moins que = unless' },
            { sentence: "___ ses efforts, il n'a pas réussi.", answer: 'Malgré', hint: 'malgré + noun = despite' },
        ],
    },
];

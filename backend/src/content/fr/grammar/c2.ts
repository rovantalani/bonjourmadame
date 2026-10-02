import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarC2: GrammarLesson[] = [
    {
        unit: 1,
        id: 'style-and-register-mastery',
        title: 'Style & Register Mastery',
        level: 'C2',
        description: 'Navigate all four registers of French — familier, courant, soutenu, and littéraire — with full control over morphology, vocabulary, and syntax',
        icon: '🎭',
        color: '#DC2626',
        sections: [
            {
                title: 'The Four Registers: Markers and Signals',
                explanation: 'French has four main registers, each with distinct vocabulary, grammar, and syntax. Familier: ne dropped, on for nous, c\'est vs il est, shortened forms (y\'a for il y a). Courant: standard written French, full negation optional. Soutenu: formal vocabulary (obtenir → avoir), subjunctive used widely, inversion in questions. Littéraire: passé simple, imparfait du subjonctif, classical syntax, no colloquialisms.',
                examples: [
                    { french: 'Familier: On a pas eu le temps de finir.', english: 'We didn\'t have time to finish.' },
                    { french: 'Courant: Nous n\'avons pas eu le temps de finir.', english: 'We didn\'t have time to finish.' },
                    { french: 'Soutenu: Nous n\'avons pas été en mesure d\'achever ce travail.', english: 'We were not in a position to complete this work.' },
                ],
            },
            {
                title: 'Lexical Register: Choosing the Right Word',
                explanation: 'At C2 level, you command the full spectrum: commence → entame → débute (familier → courant → soutenu); j\'ai besoin de → il me faut → j\'ai nécessité de; mais → cependant → néanmoins; si → dans l\'éventualité où → au cas où. Formal vocabulary tends towards Latinate roots; informal prefers Germanic-origin or shortened forms.',
                examples: [
                    { french: 'Soutenu: Je souhaite vous informer de la situation.', english: 'I wish to inform you of the situation.' },
                    { french: 'Courant: Je veux vous dire ce qui se passe.', english: 'I want to tell you what\'s happening.' },
                    { french: 'Littéraire: Il me tarde de vous entretenir de cette affaire.', english: 'I am eager to speak with you about this matter.' },
                ],
            },
            {
                title: 'Register in Syntax: Inversion, Subordination, and Tense',
                explanation: 'Syntactic complexity increases with register. Familier: short simple sentences, parataxis. Courant: coordinate and relative clauses. Soutenu: deep subordination, subjunctive, conditional. Littéraire: passé simple, imparfait du subjonctif, absolute constructions, literary inversion. Mastery means producing fluently in any register and moving between them deliberately.',
                examples: [
                    { french: 'Familier: Il est là, tu le verras.', english: 'He\'s there, you\'ll see him.' },
                    { french: 'Courant: Il est présent, vous pourrez donc lui parler.', english: 'He is present, so you will be able to speak with him.' },
                    { french: 'Littéraire: Il était là — nul n\'aurait pu le nier — et son regard ne laissait place à aucun doute.', english: 'He was there — no one could have denied it — and his gaze left no room for doubt.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Transformez en registre familier: "Nous n\'avons pas eu la possibilité de terminer."', answer: 'On a pas pu finir.', hint: 'nous → on; ne dropped; possibilité → can; terminer → finir' },
            { sentence: 'Transformez en registre soutenu: "Je veux vous parler de mon problème."', answer: 'Je souhaite vous entretenir de la difficulté à laquelle je me heurte.', hint: 'vouloir → souhaiter; parler → entretenir; problème → difficulté' },
            { sentence: 'Quel mot familier correspond à "s\'en aller" en registre soutenu ?', answer: 'partir', hint: 'courant: partir; soutenu: s\'en aller, quitter les lieux' },
            { sentence: 'Réécrivez au registre littéraire: "Il arriva et tout le monde se tut."', answer: 'Il arriva, et le silence se fit, comme si la salle eût retenu son souffle.', hint: 'passé simple arriva; imparfait du subjonctif eût retenu; literary expansion' },
            { sentence: 'Transformez: "C\'est important qu\'on le sache." → registre soutenu.', answer: 'Il importe que nous en soyons informés.', hint: 'il importe que + subjonctif; en être informé = formal passive' },
            { sentence: 'Repérez le registre: "Y\'a pas moyen qu\'il vienne."', answer: 'registre familier', hint: 'y\'a = il y a; ne dropped; moyen que = informal; pas means "no possibility"' },
        ],
    },
    {
        unit: 1,
        id: 'archaic-classical-forms',
        title: 'Archaic & Classical French Forms',
        level: 'C2',
        description: 'Recognize and produce passé simple, imparfait du subjonctif, and classical syntax found in literature from the 17th–20th centuries',
        icon: '📜',
        color: '#DC2626',
        sections: [
            {
                title: 'The Passé Simple: Forms and Use',
                explanation: 'The passé simple is the literary past tense — never used in speech, always in narrative writing. It replaces the passé composé in formal and literary texts. Regular forms: -er verbs: il chanta, -ir verbs: il finit, -re verbs: il vendit. Key irregulars: être → il fut; avoir → il eut; faire → il fit; venir → il vint; voir → il vit; savoir → il sut; pouvoir → il put; vouloir → il voulut. Plural: ils chantèrent, ils furent, ils eurent.',
                examples: [
                    { french: 'Il arriva à l\'aube et frappa à la porte.', english: 'He arrived at dawn and knocked at the door.' },
                    { french: 'Elle vit une lumière au fond du couloir et s\'arrêta.', english: 'She saw a light at the end of the corridor and stopped.' },
                    { french: 'Le roi fut informé et convoqua immédiatement son conseil.', english: 'The king was informed and immediately convened his council.' },
                ],
            },
            {
                title: 'The Imparfait du Subjonctif',
                explanation: 'Found in formal literary French of the 18th–early 20th century, the imparfait du subjonctif replaces the present subjunctive after a past main verb in formal writing. Formation: 3rd person passé simple minus the final -t, + subjunctive endings (-sse, -sses, -ˆt, -ssions, -ssiez, -ssent). E.g. chanta → chantât; fut → fût; vînt → vînt. Recognition is required; production is literary mastery.',
                examples: [
                    { french: 'Il fallait qu\'il fût présent. (= soit)', english: 'It was necessary that he be present.' },
                    { french: 'Elle voulait qu\'il vînt la retrouver.', english: 'She wanted him to come and find her.' },
                    { french: 'Bien qu\'il eût travaillé dur, il n\'obtint rien.', english: 'Although he had worked hard, he obtained nothing.' },
                ],
            },
            {
                title: 'Classical Syntax and Archaic Constructions',
                explanation: 'Classical French uses inverted negation (n\'est-il pas vrai ?), the pleonastic ne with comparative clauses, ellipsis of subject pronouns in consecutive clauses (Racine: Je t\'aimais inconstant, qu\'aurais-je fait, fidèle ?), absolute constructions, and a preference for long, periodically structured sentences. These are necessary for reading Molière, Racine, Corneille, and Marivaux.',
                examples: [
                    { french: 'N\'est-ce point là une contradiction flagrante ?', english: 'Is that not a glaring contradiction?' },
                    { french: 'Il est plus sage qu\'on ne le croirait.', english: 'He is wiser than one would think.' },
                    { french: 'Nous partîmes cinq cents ; mais par un prompt renfort / Nous nous vîmes trois mille en arrivant au port.', english: 'We set out five hundred; but by swift reinforcement / We found ourselves three thousand on reaching port. (Corneille)' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Mettez "il va" au passé simple.', answer: 'il alla', hint: 'aller: passé simple → alla (like -er verbs: alla, allas, alla...)' },
            { sentence: 'Mettez "il est" au passé simple.', answer: 'il fut', hint: 'être: passé simple → fut, fus, fut, fûmes, fûtes, furent' },
            { sentence: 'Mettez "il vient" au passé simple.', answer: 'il vint', hint: 'venir: vins, vins, vint, vînmes, vîntes, vinrent' },
            { sentence: 'Reconnaissez et traduisez: "Elle voulait qu\'il vînt."', answer: 'She wanted him to come. (imparfait du subjonctif of venir)', hint: 'vînt = imparfait du subjonctif de venir; replaces subjunctive présent "vienne"' },
            { sentence: 'Identifiez la forme: "Bien qu\'il eût lu le texte, il ne comprit rien."', answer: 'eût lu = subjonctif plus-que-parfait (imparfait du subjonctif d\'avoir + participe passé)', hint: 'eût = avoir au subjonctif imparfait; used in formal writing after a past main verb' },
            { sentence: 'Réécrivez au passé simple: "Il a fait, elle a dit, ils sont partis."', answer: 'Il fit, elle dit, ils partirent.', hint: 'faire → fit; dire → dit; partir → partirent (like -re verbs)' },
        ],
    },
    {
        unit: 2,
        id: 'oral-vs-written-divergence',
        title: 'Oral vs Written French: Divergence and Bridging',
        level: 'C2',
        description: 'Master the systematic differences between spoken and written French, and move fluently between transcription and formalisation',
        icon: '🎙️',
        color: '#DC2626',
        sections: [
            {
                title: 'Systematic Differences: Grammar and Syntax',
                explanation: 'Spoken French systematically drops ne in negation (je sais pas, il vient pas), uses on for nous (on y va), uses tu instead of vous in many contexts, drops the subject in questions (T\'as vu ça ?), and uses c\'est rather than il est. Written French restores all these: je ne sais pas, nous allons, est-ce que vous avez vu cela ? At C2, you move between these registers without effort.',
                examples: [
                    { french: 'Oral: On a décidé de pas venir parce que c\'est loin.', english: 'We decided not to come because it\'s far.' },
                    { french: 'Écrit courant: Nous avons décidé de ne pas venir car c\'est loin.', english: 'We decided not to come as it is far.' },
                    { french: 'Écrit soutenu: Nous avons résolu de ne pas faire le déplacement, la distance étant considérable.', english: 'We resolved not to make the journey, the distance being considerable.' },
                ],
            },
            {
                title: 'Verlan and Argot: Recognizing Informal Codes',
                explanation: 'Verlan is back-slang: syllables of a word are inverted. Examples: l\'envers (inverse) → verlan; l\'arabe → rebeu; une femme → meuf; un mec → un keum; bizarre → zarbi; l\'école → la kékolleche (rare). Argot (slang) has its own vocabulary: le fric (money), un flic (policeman), une bagnole (car), bosser (to work), kiffer (to like). C2 learners recognize and understand these without necessarily producing them.',
                examples: [
                    { french: 'Verlan: C\'est trop zarbi ce truc.', english: 'That thing is too weird. (zarbi = bizarre inverted)' },
                    { french: 'Argot: Il bosse comme un fou pour avoir le fric.', english: 'He works like mad to get the money.' },
                    { french: 'Mixte: Les meufs de la fac, elles kiffent grave ce prof.', english: 'The girls at uni really like that teacher.' },
                ],
            },
            {
                title: 'Discourse Markers in Spoken French',
                explanation: 'Spoken French uses its own discourse markers: alors (well/so/then), du coup (as a result/so), genre (like/kind of), tu vois ? (you know? / you see?), en fait (actually/in fact), quoi (you know — sentence-final), bon (well). These are fillers and connectors that rarely appear in formal writing. The written equivalents are: ainsi/donc (alors), par conséquent (du coup), comme, effectivement (en fait).',
                examples: [
                    { french: 'Oral: Du coup, j\'ai rien dit, tu vois.', english: 'So I said nothing, you know.' },
                    { french: 'Oral: C\'était genre super bizarre, quoi.', english: 'It was like really weird, you know.' },
                    { french: 'Écrit: En conséquence, je n\'ai rien dit. La situation était déconcertante.', english: 'As a result, I said nothing. The situation was disconcerting.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Formalisez: "On a pas eu le temps de rien faire."', answer: 'Nous n\'avons pas eu le temps de faire quoi que ce soit.', hint: 'on→nous; ne restored; rien→quoi que ce soit (formal)' },
            { sentence: 'Formalisez: "Du coup je sais pas trop quoi penser."', answer: 'Par conséquent, je ne sais pas vraiment quoi en penser.', hint: 'du coup → par conséquent; ne restored; trop → vraiment' },
            { sentence: 'Qu\'est-ce que signifie "une bagnole" en argot ?', answer: 'une voiture / une automobile', hint: 'bagnole = voiture (familier/argot)' },
            { sentence: 'Qu\'est-ce que "meuf" en verlan ?', answer: 'femme (les syllabes sont inversées: fem-me → meuf)', hint: 'verlan: inversion of syllables in "femme"' },
            { sentence: 'Transcrivez à l\'oral familier: "Nous ne savons pas si elle viendra."', answer: 'On sait pas si elle va venir.', hint: 'nous → on; ne dropped; venir → aller + infinitif' },
            { sentence: 'Identifiez le marqueur oral et son équivalent formel: "En fait, j\'avais tort."', answer: 'en fait (oral) → en réalité / à vrai dire (formel)', hint: 'en fait = actually; formal: en réalité, à vrai dire, il s\'avère que' },
        ],
    },
    {
        unit: 2,
        id: 'discourse-markers-advanced',
        title: 'Advanced Discourse Markers',
        level: 'C2',
        description: 'Command the full range of logical connectors, subordinating conjunctions, and discourse organizers that give French argumentation its distinctive architecture',
        icon: '🔗',
        color: '#DC2626',
        sections: [
            {
                title: 'Cause, Consequence, and Purpose',
                explanation: 'Cause: car (formal, never in first position), parce que (neutral), puisque (shared knowledge), étant donné que (given that), vu que (considering that). Consequence: donc, alors, par conséquent, de ce fait, d\'où, c\'est pourquoi, c\'est la raison pour laquelle, si bien que. Purpose: pour que / afin que + subjonctif (different subjects), pour / afin de + infinitif (same subject).',
                examples: [
                    { french: 'Il ne peut pas venir, car son vol est retardé.', english: 'He cannot come, as his flight is delayed. (car = formal cause)' },
                    { french: 'Il pleuvait ; c\'est pourquoi le match a été annulé.', english: 'It was raining; that is why the match was cancelled.' },
                    { french: 'Je parle lentement afin que vous compreniez.', english: 'I speak slowly so that you understand.' },
                ],
            },
            {
                title: 'Opposition, Concession, and Condition',
                explanation: 'Opposition: mais, or (introduces new, contradictory element), cependant, toutefois, néanmoins, pourtant, en revanche, au contraire. Concession: bien que, quoique, malgré + noun, même si, quand même, tout + participle (tout en sachant). Condition: si, à condition que + subj., pourvu que + subj., dans l\'hypothèse où + cond., à supposer que + subj.',
                examples: [
                    { french: 'Il est compétent ; or, il manque d\'expérience.', english: 'He is competent; however (but), he lacks experience. (or introduces the twist)' },
                    { french: 'Bien qu\'elle soit fatiguée, elle continue à travailler.', english: 'Although she is tired, she continues to work.' },
                    { french: 'Dans l\'hypothèse où il viendrait, nous le recevrions chaleureusement.', english: 'In the event that he came, we would welcome him warmly.' },
                ],
            },
            {
                title: 'Textual Organization and Rhythm',
                explanation: 'French formal writing has a distinctive argumentative rhythm: D\'une part… d\'autre part, D\'abord… ensuite… enfin, En premier lieu… en second lieu… en dernier ressort, Certes… mais… cependant, Force est de constater que… Tout compte fait… En définitive / En somme / Pour conclure / Il résulte de tout ceci que. These phrases scaffold the argument and mark its stages.',
                examples: [
                    { french: 'Certes, les chiffres sont encourageants ; toutefois, il convient de rester prudent.', english: 'Admittedly, the figures are encouraging; however, caution is advisable.' },
                    { french: 'En définitive, force est de constater que la situation ne s\'est guère améliorée.', english: 'Ultimately, one cannot help but note that the situation has scarcely improved.' },
                    { french: 'D\'une part, les coûts sont élevés ; d\'autre part, les bénéfices sont réels.', english: 'On the one hand, the costs are high; on the other, the benefits are real.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Choisissez: "Il est brillant, ___ il manque de méthode." (or/mais/car)', answer: 'or', hint: 'or introduces a new, contradictory element that reframes what preceded' },
            { sentence: 'Quelle conjonction introduit un but avec deux sujets différents ?', answer: 'afin que / pour que + subjonctif', hint: 'même sujet: pour/afin de + infinitif; sujets différents: pour que/afin que + subjonctif' },
            { sentence: 'Complétez: "___ il soit très doué, il n\'a pas réussi."', answer: 'Bien que', hint: 'bien que + subjonctif = although' },
            { sentence: 'Quelle est la différence entre "car" et "parce que" ?', answer: 'car est plus formel, ne peut pas commencer une phrase, et introduit une cause expliquée; parce que est neutre et peut commencer une réponse', hint: 'Pourquoi est-il parti ? → Parce que... (not car...)' },
            { sentence: 'Reliez en utilisant "si bien que": "Il a beaucoup travaillé. Il a réussi brillamment."', answer: 'Il a tellement travaillé si bien qu\'il a réussi brillamment.', hint: 'si bien que = to such a degree that; introduces consequence' },
            { sentence: 'Organisez: transition pour introduire l\'argument contraire.', answer: 'Cependant / Toutefois / Néanmoins / Or', hint: 'these signal a shift or qualification; choose based on register' },
        ],
    },
    {
        unit: 4,
        id: 'translation-equivalence',
        title: 'Translation & Equivalence',
        level: 'C2',
        description: 'Translate between French and English at near-professional level, navigating false cognates, register mismatches, and cultural untranslatability',
        icon: '⚖️',
        color: '#DC2626',
        sections: [
            {
                title: 'False Cognates and Register Mismatches',
                explanation: 'Many French-English cognates are false or register-mismatched. "Actual" ≠ actuel (current); "eventually" ≠ éventuellement (possibly); "sensible" ≠ sensible (sensitive); "sympathique" ≠ sympathetic (= likeable). Register mismatches: "get" is often translated by a more specific verb (obtenir, trouver, devenir, attraper). "Thing" becomes chose, truc (informal), or an abstract noun. Precision is the mark of the advanced translator.',
                examples: [
                    { french: 'Le problème actuel / the current problem (not: "the actual problem")', english: 'actuel = current; actual = réel/véritable' },
                    { french: 'Il est très sensible / He is very sensitive (not: "sensible")', english: 'sensible (FR) = sensitive; sensible (EN) = raisonnable/judicieux' },
                    { french: 'Éventuellement, je pourrais vous aider / I might possibly be able to help', english: 'éventuellement = possibly (not "eventually" = finalement/à terme)' },
                ],
            },
            {
                title: 'Idiomatic and Cultural Untranslatability',
                explanation: 'Some expressions resist direct translation because they carry cultural meaning: débrouillard (resourceful in the French sense of making do), avoir le cafard (to feel down — lit. to have the cockroach), flâner (to wander without purpose — a Baudelairean concept), se retrouver (to find oneself together — implies reunion). The translator must decide: loan the term, paraphrase, or find a cultural equivalent.',
                examples: [
                    { french: 'Il est très débrouillard → He\'s very resourceful / good at getting by', english: 'débrouillard: no single English equivalent; resourceful + context needed' },
                    { french: 'La flânerie baudelairienne → the Baudelairean practice of wandering / drift', english: 'flânerie: retained as loanword in English art criticism' },
                    { french: 'L\'esprit de corps → group morale / team spirit (loanword retained)', english: 'esprit de corps: borrowed intact into English' },
                ],
            },
            {
                title: 'Translation Tasks: Strategies and Commentary',
                explanation: 'Professional translation involves explicit choices: literal vs. free translation, foreignization (keeping foreignness) vs. domestication (adapting to target culture), and the rendering of tone and rhythm. A translation commentary explains why choices were made. At C2, you can both translate a complex text AND justify the choices in a meta-commentary — the DALF C2 translation task.',
                examples: [
                    { french: '"Madame Bovary, c\'est moi" (Flaubert) → "I am Madame Bovary" or "Madame Bovary is me"', english: 'The French is ambiguous (both readings possible). The translator must choose.' },
                    { french: 'Un texte soutenu traduit en anglais informel → un écart de registre (register gap)', english: 'A formal French text rendered in informal English betrays the original register.' },
                    { french: 'Le jeu de mots: "Je suis de tout cœur avec vous." → "I am wholeheartedly with you."', english: 'de tout cœur = wholeheartedly; a fixed expression with an English fixed equivalent' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Traduisez: "The situation is actually quite serious."', answer: 'La situation est en réalité assez grave. (actual ≠ actuel)', hint: 'actually = en réalité / en fait / à vrai dire; not actuellement' },
            { sentence: 'Traduisez: "She is very sensible about money."', answer: 'Elle est très raisonnable avec l\'argent.', hint: 'sensible (EN) = raisonnable/sage; sensible (FR) = sensitive' },
            { sentence: 'Traduisez: "Il a éventuellement trouvé une solution."', answer: 'He possibly found a solution. (NOT "eventually")', hint: 'éventuellement = possibly/perhaps; eventually = finalement/à terme' },
            { sentence: 'Quel est le problème de traduction dans: "She flânait sur les Champs-Élysées." ?', answer: 'flâner has no exact English equivalent; options: strolled aimlessly / wandered idly / drifted (but none captures the Baudelairean cultural charge)', hint: 'flânerie is a cultural concept; translator must footnote or paraphrase' },
            { sentence: 'Traduisez en gardant le registre soutenu: "We deeply regret the inconvenience caused."', answer: 'Nous regrettons vivement les désagréments occasionnés.', hint: 'deeply regret → regrettons vivement; inconvenience → désagréments; caused → occasionnés' },
            { sentence: 'Quel est le problème avec: "Il est sympathique" → "He is sympathetic" ?', answer: 'faux ami: sympathique = likeable/nice; sympathetic (EN) = compatissant/qui comprend', hint: 'sympathique = likeable; sympathetic = compatissant, compréhensif' },
        ],
    },
];

import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarC1: GrammarLesson[] = [
    {
        unit: 1,
        id: 'en-register-formal-informal',
        title: 'Registre formel et informel en anglais',
        level: 'C1',
        description: "Shall we begin? / Let's start! Maîtrisez les différences de registre en anglais écrit et oral — formulations soutenues, neutres et familières.",
        icon: '🎩',
        color: '#7C3AED',
        sections: [
            {
                title: 'Choisir le bon registre',
                explanation: "En anglais, le registre dépend du contexte : une lettre de motivation, un email entre amis ou un rapport scientifique n'utilisent pas le même vocabulaire ni les mêmes structures. Le registre formel privilégie le vocabulaire latin/français, les structures passives et les phrases longues. Le registre informel utilise des contractions, des phrasal verbs et un vocabulaire anglo-saxon court.",
                examples: [
                    { french: 'Formel : I would like to request assistance. / Informel : Can you help me?', english: 'Formel : Je souhaite demander de l\'aide. / Informel : Tu peux m\'aider ?' },
                    { french: 'Formel : We regret to inform you that… / Informel : Sorry, but…', english: 'Formel : Nous avons le regret de vous informer que… / Informel : Désolé, mais…' },
                    { french: 'Formel : commence → begin/commence ; Informel : start, kick off', english: 'Commencer' },
                    { french: 'Formel : The meeting was postponed. / Informel : We pushed the meeting back.', english: 'La réunion a été reportée. (passif formel vs. phrasal verb informel)' },
                ],
            },
            {
                title: 'Contractions et formes complètes',
                explanation: "Les contractions (I'm, she's, they've, won't, can't) sont la marque du registre informel et oral. Dans un texte formel écrit — essai, rapport, lettre officielle — on développe toujours les formes complètes : I am, she is, they have, will not, cannot. L'usage de contractions dans un écrit formel est perçu comme négligent ou non professionnel.",
                examples: [
                    { french: 'I am writing to enquire about… (formel, pas de contraction)', english: 'Je vous écris pour me renseigner sur…' },
                    { french: 'I\'m writing to ask about… (informel)', english: 'Je vous écris pour demander…' },
                    { french: 'This cannot be accepted under any circumstances. (formel)', english: 'Cela ne peut en aucun cas être accepté.' },
                    { french: 'It isn\'t something we can ignore. (neutre/informel)', english: 'Ce n\'est pas quelque chose que nous pouvons ignorer.' },
                ],
            },
            {
                title: 'Registre professionnel et académique',
                explanation: "Dans les emails professionnels et les essais académiques, certaines formules sont incontournables. Pour ouvrir : I am writing with regard to… / I am pleased to inform you… Pour clore : I look forward to hearing from you. / Please do not hesitate to contact me. Dans un essai : This essay will argue… / It can be concluded that… L'objectif est toujours de paraître mesuré, précis et respectueux.",
                examples: [
                    { french: 'I am writing with regard to your recent application.', english: 'Je vous écris au sujet de votre récente candidature.' },
                    { french: 'I look forward to hearing from you at your earliest convenience.', english: 'Dans l\'attente de votre réponse dans les meilleurs délais.' },
                    { french: 'This essay will examine the causes of climate change.', english: 'Cet essai examinera les causes du changement climatique.' },
                    { french: 'It can be argued that technological progress has both benefits and drawbacks.', english: 'On peut soutenir que le progrès technologique présente à la fois des avantages et des inconvénients.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Formal letter opening: I ___ writing to enquire about the position.', answer: 'am', hint: 'Pas de contraction dans un écrit formel → I am, pas I\'m' },
            { sentence: 'Make formal: "We can\'t do this." → We ___ do this.', answer: 'cannot', hint: 'Cannot (un seul mot) est la forme formelle de can\'t' },
            { sentence: 'Formal closing: I look forward ___ hearing from you.', answer: 'to', hint: 'Look forward to + V-ing — tournure formelle standard' },
            { sentence: 'Academic style: ___ ___ be argued that prices will rise. (on peut soutenir)', answer: 'It can', hint: 'It can be argued that… — formule académique impersonnelle' },
            { sentence: 'Formal synonym of "get": to ___ (obtenir)', answer: 'obtain', hint: 'Obtain (latin) est plus formel que get (saxon)' },
        ],
    },
    {
        unit: 1,
        id: 'en-subjunctive-mood',
        title: 'Le Subjonctif en anglais',
        level: 'C1',
        description: "If I were you… / I suggest that he be present. Le subjonctif anglais — plus discret qu'en français mais bien vivant dans le registre soutenu.",
        icon: '🌀',
        color: '#6D28D9',
        sections: [
            {
                title: 'Le subjonctif passé : were au lieu de was',
                explanation: "Le subjonctif passé utilise were pour toutes les personnes (y compris I et he/she/it), jamais was. C'est l'une des différences les plus visibles avec le français : « if I were rich » traduit « si j'étais riche ». Cette forme s'utilise avec les hypothèses irréelles au présent/futur et les expressions de souhait. Dans l'anglais informel parlé, was est parfois accepté, mais were reste la forme correcte dans un registre soutenu.",
                examples: [
                    { french: 'If I were you, I would apologise. (conseil)', english: 'À ta place, je m\'excuserais.' },
                    { french: 'I wish I were taller. (souhait irréel)', english: 'J\'aimerais être plus grand.' },
                    { french: 'She acts as if she were the boss.', english: 'Elle se comporte comme si elle était la patronne.' },
                    { french: 'If he were here, he would know what to do.', english: 'S\'il était là, il saurait quoi faire.' },
                ],
            },
            {
                title: 'Le subjonctif présent : la base verbale',
                explanation: "Le subjonctif présent utilise la base verbale sans marque de personne (be, go, have, etc.). On le trouve surtout après des verbes exprimant une recommandation, une demande ou une exigence : suggest, recommend, insist, demand, require, propose. La structure est : verbe + that + sujet + base verbale. Ce subjonctif est plus courant en anglais américain ; l'anglais britannique préfère parfois should + infinitif.",
                examples: [
                    { french: 'I suggest that he be present at the meeting.', english: 'Je suggère qu\'il soit présent à la réunion.' },
                    { french: 'The board demands that she resign immediately.', english: 'Le conseil exige qu\'elle démissionne immédiatement.' },
                    { french: 'It is essential that every student submit the form.', english: 'Il est essentiel que chaque étudiant soumette le formulaire.' },
                    { french: 'They recommended that the report be reviewed.', english: 'Ils ont recommandé que le rapport soit relu.' },
                ],
            },
            {
                title: 'Expressions figées avec le subjonctif',
                explanation: "Plusieurs expressions idiomatiques utilisent encore le subjonctif dans un anglais figé ou littéraire : God save the Queen, Long live the King, Be that as it may, Come what may, So be it, Suffice it to say. Ces formules sont souvent utilisées dans les discours, les textes politiques ou les expressions proverbiales. Elles s'apprennent comme des unités lexicales.",
                examples: [
                    { french: 'God save the King! (subjonctif → God may save the King)', english: 'Que Dieu protège le Roi !' },
                    { french: 'Be that as it may, we must proceed.', english: 'Quoi qu\'il en soit, nous devons continuer.' },
                    { french: 'Come what may, I will stand by you.', english: 'Quoi qu\'il arrive, je serai à tes côtés.' },
                    { french: 'Suffice it to say that the result was disappointing.', english: 'Il suffit de dire que le résultat était décevant.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'If I ___ (be) you, I would reconsider. (hypothèse irréelle)', answer: 'were', hint: 'Subjonctif passé : were pour toutes les personnes dans les hypothèses irréelles' },
            { sentence: 'I wish she ___ (be) here with us now. (souhait irréel)', answer: 'were', hint: 'I wish + subjonctif passé (were, not was) pour un souhait irréel au présent' },
            { sentence: 'The doctor recommends that he ___ (rest) for a week.', answer: 'rest', hint: 'Subjonctif présent après recommend that → base verbale sans -s' },
            { sentence: 'She acts as ___ she ___ (be) the only expert. (comme si)', answer: 'if / were', hint: 'As if + subjonctif passé (were) pour une comparaison hypothétique' },
            { sentence: '___ that ___ ___, the decision has been made. (quoi qu\'il en soit)', answer: 'Be / it / may', hint: 'Be that as it may — expression figée avec subjonctif' },
        ],
    },
    {
        unit: 2,
        id: 'en-reported-speech-advanced',
        title: 'Discours rapporté avancé',
        level: 'C1',
        description: "He denied having taken it. / She urged them to act. Au-delà du say/tell — les verbes de communication complexes et les structures avancées du discours indirect.",
        icon: '🗣️',
        color: '#0891B2',
        sections: [
            {
                title: 'Les verbes de communication spécialisés',
                explanation: "Au niveau avancé, on remplace les verbes génériques said/told par des verbes qui précisent l'acte de parole : admit, deny, warn, advise, urge, insist, suggest, complain, boast, threaten, refuse, offer, promise, agree. Ces verbes entraînent différentes structures grammaticales : + that-clause, + V-ing, + to-infinitive ou + object + to-infinitive.",
                examples: [
                    { french: 'He admitted stealing the money. (+ V-ing)', english: 'Il a admis avoir volé l\'argent.' },
                    { french: 'She denied having been there. (+ V-ing)', english: 'Elle a nié s\'y être trouvée.' },
                    { french: 'He warned us not to touch the wire. (+ object + not to-inf)', english: 'Il nous a avertis de ne pas toucher le fil.' },
                    { french: 'They urged the government to take action. (+ object + to-inf)', english: 'Ils ont pressé le gouvernement d\'agir.' },
                    { french: 'She boasted that she had won three medals.', english: 'Elle s\'est vantée d\'avoir remporté trois médailles.' },
                ],
            },
            {
                title: 'Backshift optionnel et vérités universelles',
                explanation: "Le backshift (recul des temps) n'est pas toujours obligatoire. On peut ne pas effectuer de backshift si : (1) la situation est encore vraie au moment de la parole ; (2) on rapporte des paroles récentes ; (3) on rapporte une vérité générale ou scientifique. Le maintien du temps présent donne une impression d'immédiateté ou de vérité permanente.",
                examples: [
                    { french: 'He said the Earth revolves around the Sun. (vérité scientifique → pas de backshift)', english: 'Il a dit que la Terre tourne autour du Soleil.' },
                    { french: 'She said she is still working on the project. (encore vrai)', english: 'Elle a dit qu\'elle travaille encore sur le projet.' },
                    { french: 'He said he had just arrived. (passé récent, backshift respecté)', english: 'Il a dit qu\'il venait d\'arriver.' },
                    { french: 'They said Paris is the capital of France. (fait permanent)', english: 'Ils ont dit que Paris est la capitale de la France.' },
                ],
            },
            {
                title: 'Rapporter des questions et des ordres avancés',
                explanation: "Pour rapporter des questions rhétoriques, des exclamations ou des ordres complexes, on doit choisir la bonne structure. Les exclamations rapportées utilisent souvent what ou how : She exclaimed what a beautiful view it was. Les ordres se rapportent avec told + object + to-inf ou ordered. Les questions rhétoriques deviennent des propositions introduites par what, why, how, etc.",
                examples: [
                    { french: '"What a wonderful idea!" → She exclaimed what a wonderful idea it was.', english: '« Quelle merveilleuse idée ! » → Elle s\'est exclamée que c\'était une merveilleuse idée.' },
                    { french: '"Don\'t lie to me!" → He ordered me not to lie to him.', english: '« Ne me mens pas ! » → Il m\'a ordonné de ne pas lui mentir.' },
                    { french: '"Why bother?" → He wondered why he should bother.', english: '« Pourquoi s\'en donner la peine ? » → Il se demandait pourquoi il se donnerait la peine.' },
                    { french: '"How did she manage it?" → She asked how she had managed it.', english: '« Comment a-t-elle réussi ? » → Elle a demandé comment elle y était parvenue.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'He ___ stealing the jewels. (nier + V-ing)', answer: 'denied', hint: 'deny + V-ing (gerondif), pas d\'infinitif' },
            { sentence: 'She ___ us to arrive before 8 o\'clock. (avertir + objet + to-inf)', answer: 'warned', hint: 'warn + object + (not) to-infinitive' },
            { sentence: '"I will help." → He ___ to help. (promettre)', answer: 'promised', hint: 'promise + to-infinitive pour rapporter une promesse' },
            { sentence: 'She ___ that the project was too expensive. (se plaindre)', answer: 'complained', hint: 'complain + that-clause pour rapporter une plainte' },
            { sentence: 'The teacher ___ us not to use dictionaries. (interdire/ordonner)', answer: 'told', hint: 'tell + object + not to-infinitive pour rapporter un ordre négatif' },
        ],
    },
    {
        unit: 3,
        id: 'en-advanced-negation',
        title: 'Négation avancée et structures emphatiques',
        level: 'C1',
        description: "Never have I seen… / Not until then did they realise… Les structures de négation avancées qui donnent force et élégance à l'anglais soutenu.",
        icon: '❌',
        color: '#DC2626',
        sections: [
            {
                title: 'Inversion avec les adverbiaux négatifs',
                explanation: "Quand un adverbe de sens négatif est placé en tête de phrase pour l'emphase, l'ordre sujet-verbe s'inverse (comme en français dans le style soutenu). Les principaux adverbiaux qui déclenchent cette inversion : Never, Rarely, Seldom, Not only… but also, No sooner… than, Hardly/Scarcely… when, Under no circumstances, At no time, Not until, In no way. Cette structure est typique du style formel, journalistique et littéraire.",
                examples: [
                    { french: 'Never have I witnessed such courage. (jamais je n\'ai vu)', english: 'Je n\'ai jamais été témoin d\'un tel courage.' },
                    { french: 'Rarely does she make mistakes. (rarement elle se trompe)', english: 'Elle fait rarement des erreurs.' },
                    { french: 'Not only did he lie, but he also stole.', english: 'Non seulement il a menti, mais il a aussi volé.' },
                    { french: 'Under no circumstances should you sign this document.', english: 'En aucun cas vous ne devriez signer ce document.' },
                    { french: 'No sooner had she left than the phone rang.', english: 'À peine était-elle partie que le téléphone sonna.' },
                ],
            },
            {
                title: 'Hardly, scarcely, barely',
                explanation: "Hardly, scarcely et barely expriment une quantité ou un degré presque nul. Ils sont grammaticalement négatifs (on ne les cumule pas avec not). Ils s'emploient aussi dans des structures d'inversion : Hardly had I arrived when the meeting started. Barely diffère de hardly et scarcely par une légère nuance d'intensité moindre plutôt que de temps.",
                examples: [
                    { french: 'I can hardly believe what happened. (à peine, difficilement)', english: 'J\'arrive à peine à croire ce qui s\'est passé.' },
                    { french: 'She barely spoke a word all evening.', english: 'Elle a à peine dit un mot de toute la soirée.' },
                    { french: 'Scarcely had we sat down when the alarm went off.', english: 'Nous venions à peine de nous asseoir quand l\'alarme se déclencha.' },
                    { french: 'There is hardly any milk left. (= presque pas)', english: 'Il ne reste presque plus de lait.' },
                ],
            },
            {
                title: 'Doubles négations et négation partielle',
                explanation: "La double négation est incorrecte en anglais standard (I don't know nothing = I don't know anything). En revanche, la négation partielle avec not entirely, not always, not necessarily, not quite permet d'exprimer des nuances subtiles. Neither… nor relie deux éléments tous les deux niés. None/nobody/nothing + positive verb est la forme correcte.",
                examples: [
                    { french: 'Neither the manager nor the staff was informed. (ni… ni…)', english: 'Ni le directeur ni le personnel n\'ont été informés.' },
                    { french: 'This is not entirely correct. (pas tout à fait)', english: 'Ce n\'est pas tout à fait exact.' },
                    { french: 'The results are not necessarily surprising.', english: 'Les résultats ne sont pas nécessairement surprenants.' },
                    { french: 'None of the proposals were accepted. (aucun)', english: 'Aucune des propositions n\'a été acceptée.' },
                ],
            },
        ],
        exercises: [
            { sentence: '___ have I seen such a beautiful sunset. (jamais → inversion)', answer: 'Never', hint: 'Never en tête de phrase → inversion auxiliaire + sujet' },
            { sentence: 'No sooner ___ ___ arrived than it started to rain. (à peine venait-il d\'arriver)', answer: 'had he', hint: 'No sooner had + sujet + PP → inversion et past perfect' },
            { sentence: 'She ___ speak any English when she arrived. (à peine)', answer: 'barely', hint: 'barely = à peine (quantité/degré), grammaticalement négatif' },
            { sentence: '___ ___ did he fail the exam, but he also lost his scholarship. (non seulement)', answer: 'Not only', hint: 'Not only… but also — structure corrélative avec inversion' },
            { sentence: '___ ___ circumstances should you reveal this information. (en aucun cas)', answer: 'Under no', hint: 'Under no circumstances → inversion avec should' },
        ],
    },
    {
        unit: 3,
        id: 'en-participle-constructions',
        title: 'Constructions participiales',
        level: 'C1',
        description: "Having finished the report, she left the office. / Written in 1848, the novel still resonates. Les constructions participiales pour un anglais élégant et dense.",
        icon: '🔩',
        color: '#059669',
        sections: [
            {
                title: 'Le participe présent (-ing) en apposition',
                explanation: "Le participe présent peut former une proposition participiale qui remplace une proposition circonstancielle (de temps, de cause, de manière). Il se place en début, en milieu ou en fin de phrase. Le sujet de la participiale et celui de la principale doivent être identiques (erreur fréquente : le participe non relié = dangling participle). Ces constructions condensent l'information et donnent un style soutenu.",
                examples: [
                    { french: 'Leaving the office, she noticed an umbrella. (en quittant)', english: 'En quittant le bureau, elle remarqua un parapluie.' },
                    { french: 'Feeling exhausted, he decided to rest. (comme il se sentait épuisé)', english: 'Se sentant épuisé, il décida de se reposer.' },
                    { french: 'She smiled, realising she had won. (en réalisant)', english: 'Elle sourit, se rendant compte qu\'elle avait gagné.' },
                    { french: 'Having lived in Paris, she spoke fluent French. (ayant vécu à Paris)', english: 'Ayant vécu à Paris, elle parlait couramment français.' },
                ],
            },
            {
                title: 'Le participe passé en apposition',
                explanation: "Le participe passé (form -ed ou irrégulier) peut aussi former une proposition participiale. Il exprime souvent une relation passive ou antérieure à l'action principale. On le trouve aussi dans les résultats et descriptions. Written in 1984 signifie « qui a été écrit en 1984 ». Ce type de construction est très courant en anglais académique et journalistique.",
                examples: [
                    { french: 'Written in 1851, Moby Dick remains a masterpiece.', english: 'Écrit en 1851, Moby Dick demeure un chef-d\'œuvre.' },
                    { french: 'Exhausted by the journey, they went straight to bed.', english: 'Épuisés par le voyage, ils allèrent directement se coucher.' },
                    { french: 'The report, submitted last week, has been reviewed.', english: 'Le rapport, soumis la semaine dernière, a été examiné.' },
                    { french: 'Confronted with the evidence, he admitted his mistake.', english: 'Confronté aux preuves, il admit son erreur.' },
                ],
            },
            {
                title: 'Having + participe passé (antériorité)',
                explanation: "La forme having + participe passé marque une action antérieure à celle de la principale. C'est l'équivalent du gérondif passé français : « ayant terminé… ». Cette construction est très caractéristique du registre formel et littéraire anglais. Attention : comme toujours avec les participiales, le sujet doit être le même dans les deux propositions.",
                examples: [
                    { french: 'Having finished the exam, he handed in his paper.', english: 'Ayant terminé l\'examen, il rendit sa copie.' },
                    { french: 'Having lived abroad for ten years, she understood other cultures well.', english: 'Ayant vécu à l\'étranger pendant dix ans, elle comprenait bien les autres cultures.' },
                    { french: 'Not having received a reply, she sent a reminder.', english: 'N\'ayant pas reçu de réponse, elle envoya un rappel.' },
                    { french: 'Having been warned, they took all necessary precautions.', english: 'Ayant été avertis, ils prirent toutes les précautions nécessaires.' },
                ],
            },
        ],
        exercises: [
            { sentence: '___ the letter, she sealed the envelope. (après avoir écrit)', answer: 'Having written', hint: 'Antériorité → Having + participe passé' },
            { sentence: '___ in the 19th century, the building still stands today. (construit)', answer: 'Built', hint: 'Participe passé en apposition pour une relation passive/antérieure' },
            { sentence: '___ tired from the journey, she fell asleep immediately. (se sentant)', answer: 'Feeling', hint: 'Participe présent de cause : Feeling tired = comme elle se sentait fatiguée' },
            { sentence: 'Not ___ (receive) an answer, he called them directly.', answer: 'having received', hint: 'Participe passé négatif avec antériorité → Not having received' },
            { sentence: 'The results, ___ (announce) yesterday, surprised everyone.', answer: 'announced', hint: 'Participe passé en apposition intercalé → announced yesterday (qui ont été annoncés)' },
        ],
    },
];

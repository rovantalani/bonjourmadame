import type { GrammarLesson } from '../../../types/lectures/grammar';

export const grammarB2: GrammarLesson[] = [
    {
        unit: 2,
        id: 'en-false-friends',
        title: 'Les Faux Amis',
        level: 'B2',
        description: "Actually, eventually, sensible... Ces mots ressemblent au français mais signifient autre chose. Les pièges classiques enfin démystifiés.",
        icon: '⚠️',
        color: '#9333EA',
        sections: [
            {
                title: 'Les faux amis classiques',
                explanation: "Un faux ami est un mot anglais qui ressemble à un mot français mais a un sens différent. Ces erreurs sont très fréquentes et peuvent créer des malentendus graves.",
                examples: [
                    { french: 'actually', english: 'en fait / en réalité (pas « actuellement »)', note: '« actuellement » = currently / nowadays' },
                    { french: 'eventually', english: 'finalement / au bout du compte (pas « éventuellement »)', note: '« éventuellement » = possibly / if necessary' },
                    { french: 'sensible', english: 'raisonnable / sage (pas « sensible »)', note: '« sensible » = sensitive' },
                    { french: 'comprehensive', english: 'complet / exhaustif (pas « compréhensif »)', note: '« compréhensif » = understanding' },
                    { french: 'library', english: 'bibliothèque (pas « librairie »)', note: '« librairie » = bookshop' },
                ],
            },
            {
                title: 'Faux amis dans les affaires et la vie courante',
                explanation: "Ces faux amis apparaissent souvent dans des contextes professionnels ou quotidiens, ce qui rend les erreurs d'autant plus gênantes.",
                examples: [
                    { french: 'to demand', english: 'exiger (pas « demander »)', note: '« demander » = to ask (for)' },
                    { french: 'to assist', english: "aider / assister (peut vouloir dire 'aider' en anglais)", note: '« assister à » = to attend' },
                    { french: 'sympathetic', english: 'compatissant / qui comprend (pas « sympathique »)', note: '« sympathique » = nice / pleasant' },
                    { french: 'confident', english: 'sûr de soi / confiant (pas « confidentiel »)', note: '« confidentiel » = confidential' },
                    { french: 'a chance', english: 'une occasion / une possibilité', note: 'En anglais, peut signifier bonne ou mauvaise chance' },
                ],
            },
            {
                title: 'Faux amis moins connus mais très courants',
                explanation: "Ces faux amis sont plus subtils mais très fréquents dans la conversation.",
                examples: [
                    { french: 'to rest', english: 'se reposer (pas « rester »)', note: '« rester » = to stay' },
                    { french: 'to pretend', english: 'faire semblant (pas « prétendre »)', note: '« prétendre » = to claim' },
                    { french: 'a lecture', english: 'un cours magistral / une conférence (pas « une lecture »)', note: '« une lecture » = a reading' },
                    { french: 'brave', english: 'courageux (pas « brave »)', note: '« brave » (en français) = good, kind' },
                    { french: 'an affair', english: 'une relation amoureuse / une affaire complexe (pas simplement « une affaire »)', note: '« une affaire » = a matter / a deal' },
                ],
            },
        ],
        exercises: [
            { sentence: 'She is very ___ (sensible / sensitive) — she cries at films. (sensible aux émotions)', answer: 'sensitive', hint: '« sensible » en français = sensitive en anglais' },
            { sentence: '"I work in a ___." says the librarian. (bibliothèque)', answer: 'library', hint: 'bibliothèque = library (pas bookshop)' },
            { sentence: 'She didn\'t believe me at first, but ___ she understood. (finalement)', answer: 'eventually', hint: '« éventuellement » = eventually seulement pour « finalement / au bout du compte »' },
            { sentence: 'He is very ___ — he knows exactly what he wants. (sûr de lui)', answer: 'confident', hint: 'confiant = confident (pas « confidentiel »)' },
        ],
    },
    {
        unit: 2,
        id: 'en-word-order',
        title: "L'Ordre des Mots",
        level: 'B2',
        description: "L'anglais est une langue SVO très stricte. Adjectifs avant le nom, adverbes à leur place — les règles qui vous éviteront des phrases maladroites.",
        icon: '🔀',
        color: '#BE185D',
        sections: [
            {
                title: 'Structure SVO — Sujet Verbe Objet',
                explanation: "L'anglais suit presque toujours l'ordre Sujet–Verbe–Objet. Contrairement au français ou d'autres langues, cet ordre est rarement perturbé, même pour insister. Pour mettre en valeur un élément, on utilise d'autres structures.",
                examples: [
                    { french: 'She loves Paris.', english: 'Elle adore Paris.', note: 'SVO de base' },
                    { french: 'The cat ate the mouse.', english: 'Le chat a mangé la souris.', note: 'SVO — impossible de dire « ate the cat the mouse »' },
                    { french: 'It is Paris that she loves.', english: "C'est Paris qu'elle adore.", note: 'Emphase → cleft sentence (it is... that)' },
                    { french: 'What I love is Paris.', english: "Ce que j'adore, c'est Paris.", note: 'Autre structure d\'emphase' },
                ],
            },
            {
                title: 'Les adjectifs — toujours avant le nom',
                explanation: "En anglais, les adjectifs se placent AVANT le nom, jamais après (sauf exceptions avec be, seem, etc.). Quand il y a plusieurs adjectifs, il existe un ordre conventionnel.",
                examples: [
                    { french: 'a beautiful old Italian car', english: 'une belle vieille voiture italienne', note: 'Opinion → Âge → Nationalité → Nom' },
                    { french: 'a small round wooden table', english: 'une petite table ronde en bois', note: 'Taille → Forme → Matière → Nom' },
                    { french: 'The house is beautiful. ✓', english: 'La maison est belle.', note: 'Adjectif attribut → après be' },
                    { french: 'The beautiful house ✓  /  The house beautiful ✗', english: 'La belle maison ✓  /  forme incorrecte ✗', note: 'Épithète → toujours avant le nom' },
                ],
            },
            {
                title: 'La place des adverbes',
                explanation: "Les adverbes de fréquence (always, usually, often, never...) se placent AVANT le verbe principal mais APRÈS « be ». Les adverbes de manière se placent après le verbe ou l'objet.",
                examples: [
                    { french: 'She always arrives on time.', english: 'Elle arrive toujours à l\'heure.', note: 'Adverbe de fréquence → avant le verbe' },
                    { french: 'He is never late.', english: 'Il n\'est jamais en retard.', note: 'Après « be »' },
                    { french: 'They often visit us.', english: 'Ils nous rendent souvent visite.', note: 'often → avant le verbe' },
                    { french: 'She speaks English fluently.', english: 'Elle parle anglais couramment.', note: 'Adverbe de manière → après le verbe/objet' },
                    { french: 'I quickly read the report.', english: "J'ai rapidement lu le rapport.", note: 'Adverbe court peut précéder le verbe' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Reorder: never / I / late / am. → I ___', answer: 'am never late', hint: 'be + adverbe de fréquence + adjectif' },
            { sentence: 'She has ___ French shoes Italian leather new. → She has ___ shoes.', answer: 'new Italian leather French', hint: "Ordre : Opinion/Âge → Nationalité → Matière → Nom (ici : neuf → nationalité → matière)" },
            { sentence: 'He ___ reads the news in the morning. (toujours)', answer: 'always', hint: 'Adverbe de fréquence → avant le verbe principal' },
            { sentence: 'It was Paris ___ she moved to, not London. (emphase)', answer: 'that', hint: 'Structure d\'emphase : It was... that' },
        ],
    },
    {
        unit: 2,
        id: 'en-third-conditional',
        title: 'Le Troisième Conditionnel et le Conditionnel Mixte',
        level: 'B2',
        description: "If I had studied harder... Les regrets du passé et les conditionnels mixtes — les structures les plus complexes du conditionnel anglais.",
        icon: '⏳',
        color: '#4338CA',
        sections: [
            {
                title: 'Le troisième conditionnel',
                explanation: "Le troisième conditionnel exprime des regrets ou des situations contraires à la réalité passée — ce qui aurait pu se passer mais ne s'est pas passé. Structure : if + had + participe passé → would have + participe passé. En français, c'est : si + plus-que-parfait → conditionnel passé. C'est une structure difficile car les deux parties de la phrase sont au passé.",
                examples: [
                    { french: 'If I had studied harder, I would have passed the exam.', english: 'Si j\'avais travaillé davantage, j\'aurais réussi l\'examen.' },
                    { french: 'If she had taken the job, she would have earned more money.', english: 'Si elle avait accepté le poste, elle aurait gagné plus d\'argent.' },
                    { french: 'I wouldn\'t have been late if the bus hadn\'t been delayed.', english: 'Je n\'aurais pas été en retard si le bus n\'avait pas eu du retard.' },
                    { french: 'What would you have done if you had been in my position?', english: 'Qu\'aurais-tu fait si tu avais été à ma place ?' },
                ],
            },
            {
                title: 'Le conditionnel mixte',
                explanation: "Le conditionnel mixte combine un temps passé dans la condition et un temps présent dans le résultat. On l'utilise pour exprimer l'effet d'une action passée sur le présent. Structure typique : if + had + participe passé → would + infinitif (condition passée, conséquence présente).",
                examples: [
                    { french: 'If I had studied medicine, I would be a doctor now.', english: 'Si j\'avais étudié la médecine, je serais médecin maintenant.' },
                    { french: 'If she hadn\'t missed the interview, she might have the job today.', english: 'Si elle n\'avait pas raté l\'entretien, elle pourrait avoir ce travail aujourd\'hui.' },
                    { french: 'We wouldn\'t be lost if you had brought the map.', english: 'Nous ne serions pas perdus si tu avais apporté la carte.' },
                ],
            },
            {
                title: 'Wish + past perfect — les regrets',
                explanation: "Pour exprimer un regret sur une situation passée, on utilise wish + had + participe passé. C'est l'équivalent de « j'aurais aimé que... » ou « si seulement j'avais... ». Ne pas confondre avec wish + past simple (regret sur le présent).",
                examples: [
                    { french: 'I wish I had known about this earlier.', english: 'J\'aurais aimé le savoir plus tôt.' },
                    { french: 'She wishes she hadn\'t said that.', english: 'Elle regrette d\'avoir dit ça.' },
                    { french: 'I wish I had taken more photos on that trip.', english: 'J\'aurais aimé prendre plus de photos pendant ce voyage.' },
                    { french: 'He wishes he had studied harder at school.', english: 'Il regrette de ne pas avoir plus travaillé à l\'école.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'If she ___ (leave) earlier, she ___ (catch) the train.', answer: 'had left / would have caught', hint: '3ème conditionnel : had + participe passé → would have + participe passé' },
            { sentence: 'I wish I ___ (study) harder at university.', answer: 'had studied', hint: 'Regret sur le passé → wish + had + participe passé' },
            { sentence: 'If he ___ (take) that job, he ___ (be) rich now. (conditionnel mixte)', answer: 'had taken / would be', hint: 'Conditionnel mixte : condition passée → would + infinitif (présent)' },
            { sentence: 'She ___ (not/fail) the test if she ___ (study) more.', answer: "wouldn't have failed / had studied", hint: '3ème conditionnel à la forme négative' },
            { sentence: 'What ___ you ___ (do) if you had won the lottery?', answer: 'would / have done', hint: '3ème conditionnel : what would you have done + if + had' },
        ],
    },
    {
        unit: 2,
        id: 'en-inversion-emphasis',
        title: 'Inversion et Mise en Relief',
        level: 'B2',
        description: "Never have I seen... / It was John who... L\'inversion et les structures d\'emphase pour un anglais expressif et soutenu.",
        icon: '🎯',
        color: '#475569',
        sections: [
            {
                title: 'L\'inversion après des adverbes négatifs',
                explanation: "En anglais soutenu ou littéraire, certains adverbes négatifs ou restrictifs placés en début de phrase déclenchent une inversion sujet-auxiliaire. Les principaux : Never, Not only, Hardly, Barely, Rarely, Seldom, No sooner. Cette structure donne un effet stylistique fort, commun dans les écrits formels, les discours et la littérature.",
                examples: [
                    { french: 'Never have I seen such a beautiful sunset.', english: 'Jamais je n\'ai vu un coucher de soleil aussi beau.' },
                    { french: 'Not only did she win, she also broke the record.', english: 'Non seulement elle a gagné, mais elle a aussi battu le record.' },
                    { french: 'Hardly had he sat down when the phone rang.', english: 'À peine s\'était-il assis que le téléphone a sonné.' },
                    { french: 'Rarely do we have the opportunity to meet such talent.', english: 'Rarement avons-nous l\'occasion de rencontrer un tel talent.' },
                ],
            },
            {
                title: 'Les phrases clivées (Cleft sentences)',
                explanation: "Les phrases clivées permettent de mettre en relief un élément particulier. Deux structures principales : 1) It is/was + élément mis en relief + who/that... 2) What + proposition + is/was... Ces structures sont courantes à l'oral et à l'écrit pour insister ou contraster.",
                examples: [
                    { french: 'It was John who told me the news. (pas quelqu\'un d\'autre)', english: 'C\'est Jean qui m\'a annoncé la nouvelle.' },
                    { french: 'It is the price that worries me most.', english: 'C\'est le prix qui m\'inquiète le plus.' },
                    { french: 'What I need is more time.', english: 'Ce qu\'il me faut, c\'est plus de temps.' },
                    { french: 'What surprised me was her reaction.', english: 'Ce qui m\'a surpris, c\'est sa réaction.' },
                ],
            },
            {
                title: 'Le fronting — déplacement en début de phrase',
                explanation: "Le fronting consiste à déplacer un élément normalement en fin ou au milieu de phrase vers le début, pour lui donner plus de poids. On peut avancer un complément d'objet, un adverbe ou un adjectif attribut. Contrairement aux inversions formelles, le fronting est courant dans les deux registres.",
                examples: [
                    { french: 'That film, I have seen three times.', english: 'Ce film, je l\'ai vu trois fois. (emphase sur le film)' },
                    { french: 'Brilliant, she certainly is.', english: 'Brillante, elle l\'est assurément.' },
                    { french: 'On the shelf you will find the keys.', english: 'Sur l\'étagère, vous trouverez les clés.' },
                    { french: 'This problem we cannot ignore.', english: 'Ce problème, nous ne pouvons pas l\'ignorer.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Never ___ I ___ such terrible weather! (have / seen)', answer: 'have / seen', hint: 'Inversion après Never : Never + auxiliaire + sujet + verbe' },
            { sentence: 'It was the manager ___ made the final decision.', answer: 'who', hint: 'Clivée avec une personne → who' },
            { sentence: '___ only did he lose the match, he also injured his knee.', answer: 'Not', hint: 'Not only + inversion sujet/auxiliaire' },
            { sentence: 'What I ___ (enjoy) most about the trip was the food.', answer: 'enjoyed', hint: 'Clivée en what : What + sujet + verbe → was...' },
            { sentence: 'Rarely ___ we ___ (see) such dedication. (inversion)', answer: 'do / see', hint: 'Inversion après Rarely : Rarely + do/does + sujet + infinitif' },
        ],
    },
    {
        unit: 3,
        id: 'en-advanced-modals',
        title: 'Les Modaux Passés : Déductions et Regrets',
        level: 'B2',
        description: "Must have, can\'t have, should have... Exprimer des déductions sur le passé et des regrets avec les modaux.",
        icon: '🔍',
        color: '#B45309',
        sections: [
            {
                title: 'Must have / Can\'t have — déductions sur le passé',
                explanation: "Pour faire une déduction logique sur un fait passé, on utilise must have + participe passé (quasi-certitude positive) ou can't have + participe passé (impossibilité, certitude négative). Ces structures n'ont pas d'équivalent grammatical exact en français — on traduit par « il a sûrement... », « il ne peut pas avoir... ».",
                examples: [
                    { french: 'She must have left already — her coat isn\'t here.', english: 'Elle est sûrement déjà partie — son manteau n\'est pas là.' },
                    { french: 'He can\'t have understood — he looks confused.', english: 'Il n\'a pas pu comprendre — il a l\'air perdu.' },
                    { french: 'You must have worked very hard to get this result.', english: 'Tu as dû travailler très dur pour obtenir ce résultat.' },
                    { french: 'She can\'t have been at the party — she was abroad.', english: 'Elle n\'a pas pu être à la fête — elle était à l\'étranger.' },
                ],
            },
            {
                title: 'Should have / Shouldn\'t have — le regret',
                explanation: "Should have + participe passé exprime le regret ou la critique pour quelque chose qui aurait dû être fait mais ne l'a pas été. Shouldn't have exprime le contraire : quelque chose qui n'aurait pas dû être fait. C'est l'équivalent de « j'aurais dû... » / « tu n'aurais pas dû... ».",
                examples: [
                    { french: 'I should have called her. (mais je ne l\'ai pas fait)', english: 'J\'aurais dû l\'appeler.' },
                    { french: 'You shouldn\'t have eaten so much. (mais tu l\'as fait)', english: 'Tu n\'aurais pas dû manger autant.' },
                    { french: 'We should have booked in advance.', english: 'Nous aurions dû réserver à l\'avance.' },
                    { french: 'She shouldn\'t have told him the secret.', english: 'Elle n\'aurait pas dû lui dire le secret.' },
                ],
            },
            {
                title: 'Could have / Might have — possibilité passée',
                explanation: "Could have + participe passé exprime une possibilité passée qui ne s'est pas réalisée, ou une capacité non utilisée. Might have exprime une possibilité passée avec moins de certitude. Ces structures permettent de spéculer sur ce qui a pu se passer.",
                examples: [
                    { french: 'She could have won if she had tried harder.', english: 'Elle aurait pu gagner si elle avait fait plus d\'efforts.' },
                    { french: 'He might have taken the wrong train.', english: 'Il a peut-être pris le mauvais train.' },
                    { french: 'I could have helped you — why didn\'t you ask?', english: 'J\'aurais pu t\'aider — pourquoi tu n\'as pas demandé ?' },
                    { french: 'They might have already left by now.', english: 'Ils sont peut-être déjà partis à l\'heure qu\'il est.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'She ___ ___ the exam — she studied for months! (sûrement réussi)', answer: 'must have passed', hint: 'Déduction positive certaine → must have + participe passé' },
            { sentence: 'He ___ ___ the keys — I saw them on the table this morning. (impossible qu\'il ait perdu)', answer: "can't have lost", hint: 'Impossibilité passée → can\'t have + participe passé' },
            { sentence: 'I ___ ___ earlier — the traffic was terrible. (regret : partir)', answer: 'should have left', hint: 'Regret passé → should have + participe passé' },
            { sentence: 'You ___ ___ so much — now you feel ill. (pas dû manger)', answer: "shouldn't have eaten", hint: 'Reproche → shouldn\'t have + participe passé' },
            { sentence: 'He ___ ___ the wrong exit — he\'s completely lost. (peut-être pris)', answer: 'might have taken', hint: 'Possibilité passée incertaine → might have + participe passé' },
        ],
    },
    {
        unit: 3,
        id: 'en-cohesion',
        title: 'Les Connecteurs Logiques et la Cohésion du Texte',
        level: 'B2',
        description: "Moreover, however, therefore... Les articulateurs pour structurer un texte anglais fluide et convaincant.",
        icon: '🧩',
        color: '#0F766E',
        sections: [
            {
                title: 'Addition : ajouter des idées',
                explanation: "Les connecteurs d'addition permettent d'enrichir un argument en ajoutant des éléments supplémentaires. En anglais formel, on évite de répéter « and » — on utilise des connecteurs plus sophistiqués. Moreover et furthermore introduisent un argument renforcé. In addition (to) et what is more sont également très courants à l'écrit.",
                examples: [
                    { french: 'The plan is expensive. Moreover, it is impractical.', english: 'Le plan est coûteux. De plus, il est irréalisable.' },
                    { french: 'She is hardworking. Furthermore, she is very creative.', english: 'Elle est travailleuse. En outre, elle est très créative.' },
                    { french: 'In addition to the cost, there are safety concerns.', english: 'En plus du coût, il y a des problèmes de sécurité.' },
                    { french: 'What is more, the project has not been approved yet.', english: 'Qui plus est, le projet n\'a pas encore été approuvé.' },
                ],
            },
            {
                title: 'Contraste : opposer des idées',
                explanation: "Les connecteurs de contraste introduisent une opposition ou une nuance. However est le plus courant et peut se placer en début ou au milieu de phrase. Nevertheless et nonetheless signifient « néanmoins ». Whereas et while/whilst introduisent un contraste dans la même phrase. On the other hand et in spite of / despite sont également très utiles.",
                examples: [
                    { french: 'The project is ambitious. However, it is achievable.', english: 'Le projet est ambitieux. Cependant, il est réalisable.' },
                    { french: 'She studied hard; nevertheless, she failed.', english: 'Elle a beaucoup travaillé ; néanmoins, elle a échoué.' },
                    { french: 'He likes classical music, whereas she prefers rock.', english: 'Il aime la musique classique, tandis qu\'elle préfère le rock.' },
                    { french: 'In spite of the rain, they went for a walk.', english: 'Malgré la pluie, ils sont allés se promener.' },
                    { french: 'On the other hand, there are clear advantages.', english: 'D\'un autre côté, il y a des avantages évidents.' },
                ],
            },
            {
                title: 'Cause et effet : expliquer les conséquences',
                explanation: "Les connecteurs de cause et d'effet structurent le raisonnement logique d'un texte. Therefore et thus sont très formels. Consequently et as a result introduisent une conséquence directe. Hence est très soutenu. Ces connecteurs sont essentiels dans les textes argumentatifs, scientifiques ou journalistiques en anglais.",
                examples: [
                    { french: 'The experiment failed; therefore, we must repeat it.', english: 'L\'expérience a échoué ; par conséquent, nous devons la refaire.' },
                    { french: 'Demand has increased. As a result, prices have risen.', english: 'La demande a augmenté. En conséquence, les prix ont augmenté.' },
                    { french: 'The road was icy; consequently, many accidents occurred.', english: 'La route était verglacée ; par conséquent, de nombreux accidents se sont produits.' },
                    { french: 'She worked hard, hence her excellent results.', english: 'Elle a travaillé dur, d\'où ses excellents résultats.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'The plan is risky. ___, it is very expensive. (de plus)', answer: 'Moreover', hint: 'Ajouter un argument renforcé → Moreover ou Furthermore' },
            { sentence: 'He tried very hard; ___, he didn\'t succeed. (néanmoins)', answer: 'nevertheless', hint: 'Contraste avec une nuance résignée → nevertheless' },
            { sentence: 'Traffic increased by 30%. ___ ___ ___, pollution levels rose sharply. (en conséquence)', answer: 'As a result', hint: 'Conséquence directe → As a result' },
            { sentence: 'She loves the city life, ___ her husband prefers the countryside. (tandis que)', answer: 'whereas', hint: 'Contraste dans la même phrase → whereas ou while' },
            { sentence: '___ ___ the difficulties, the team completed the project on time. (malgré)', answer: 'In spite of', hint: 'Malgré → In spite of ou Despite + nom/-ing' },
        ],
    },
];

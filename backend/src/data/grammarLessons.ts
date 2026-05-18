export interface GrammarExample {
    french: string;
    english: string;
    note?: string;
}

export interface GrammarSection {
    title: string;
    explanation: string;
    examples: GrammarExample[];
}

export interface GrammarLesson {
    id: string;
    title: string;
    level: string;
    description: string;
    icon: string;
    color: string;
    sections: GrammarSection[];
}

export const grammarLessons: GrammarLesson[] = [
    {
        id: 'articles',
        title: 'Articles',
        level: 'A1',
        description: 'Definite and indefinite articles — the building blocks of French nouns',
        icon: '📖',
        color: '#2563EB',
        sections: [
            {
                title: 'Definite Articles',
                explanation: 'Use le (masc. singular), la (fem. singular), l\' (before vowel/h), les (plural) to refer to specific nouns or nouns in general.',
                examples: [
                    { french: 'le chat', english: 'the cat' },
                    { french: 'la maison', english: 'the house' },
                    { french: 'l\'école', english: 'the school' },
                    { french: 'les enfants', english: 'the children (or children in general)' },
                    { french: 'J\'aime le chocolat.', english: 'I love chocolate.' },
                ],
            },
            {
                title: 'Indefinite Articles',
                explanation: 'Use un (masc. singular), une (fem. singular), des (plural) for non-specific nouns — equivalent to \'a\', \'an\', \'some\'.',
                examples: [
                    { french: 'un livre', english: 'a book' },
                    { french: 'une idée', english: 'an idea' },
                    { french: 'des amis', english: '(some) friends' },
                    { french: 'J\'ai un chien.', english: 'I have a dog.' },
                ],
            },
            {
                title: 'Contracted Articles (du, au, aux)',
                explanation: 'de + le → du; de + les → des; à + le → au; à + les → aux. La and l\' do not contract.',
                examples: [
                    { french: 'Je parle du problème.', english: 'I\'m talking about the problem.' },
                    { french: 'Il va au cinéma.', english: 'He\'s going to the cinema.' },
                    { french: 'Elle parle aux enfants.', english: 'She\'s speaking to the children.' },
                    { french: 'Il vient de la gare.', english: 'He\'s coming from the station.' },
                ],
            },
        ],
    },
    {
        id: 'noun-gender',
        title: 'Noun Gender & Number',
        level: 'A1',
        description: 'Every French noun is masculine or feminine — learn the key patterns',
        icon: '⚖️',
        color: '#059669',
        sections: [
            {
                title: 'Grammatical Gender',
                explanation: 'All French nouns have a gender (masculine or feminine). There are patterns but many must be memorised. Tip: learn each noun with its article.',
                examples: [
                    { french: 'le soleil (masc.)', english: 'the sun' },
                    { french: 'la lune (fem.)', english: 'the moon' },
                    { french: 'le problème (masc.)', english: 'the problem' },
                    { french: 'la décision (fem.)', english: 'the decision' },
                    { french: 'un homme, une femme', english: 'a man, a woman' },
                ],
            },
            {
                title: 'Common Masculine Endings',
                explanation: 'Nouns ending in -age, -ment, -eau, -isme, -oir are usually masculine.',
                examples: [
                    { french: 'le voyage', english: 'the journey' },
                    { french: 'le gouvernement', english: 'the government' },
                    { french: 'le bureau', english: 'the desk/office' },
                    { french: 'le réalisme', english: 'realism' },
                ],
            },
            {
                title: 'Common Feminine Endings',
                explanation: 'Nouns ending in -tion, -sion, -té, -ée, -ure, -ance, -ence are usually feminine.',
                examples: [
                    { french: 'la nation', english: 'the nation' },
                    { french: 'la liberté', english: 'freedom' },
                    { french: 'la durée', english: 'the duration' },
                    { french: 'la patience', english: 'patience' },
                ],
            },
            {
                title: 'Forming the Plural',
                explanation: 'Most nouns add -s to form the plural (silent). Nouns ending in -eau add -x; nouns ending in -al change to -aux.',
                examples: [
                    { french: 'un chat → des chats', english: 'a cat → cats' },
                    { french: 'un bureau → des bureaux', english: 'a desk → desks' },
                    { french: 'un journal → des journaux', english: 'a newspaper → newspapers' },
                    { french: 'un œil → des yeux (irregular)', english: 'an eye → eyes' },
                ],
            },
        ],
    },
    {
        id: 'negation',
        title: 'Negation',
        level: 'A1',
        description: 'How to make sentences negative in French',
        icon: '🚫',
        color: '#DC2626',
        sections: [
            {
                title: 'Basic Negation: ne...pas',
                explanation: 'Wrap the conjugated verb with ne (n\' before a vowel) ... pas to negate it.',
                examples: [
                    { french: 'Je ne parle pas.', english: 'I don\'t speak.' },
                    { french: 'Elle n\'aime pas le café.', english: 'She doesn\'t like coffee.' },
                    { french: 'Nous ne sommes pas prêts.', english: 'We aren\'t ready.' },
                    { french: 'Il ne comprend pas.', english: 'He doesn\'t understand.' },
                    { french: 'Ce n\'est pas vrai.', english: 'It\'s not true.' },
                ],
            },
            {
                title: 'Other Negative Expressions',
                explanation: 'Replace pas with other words to express different negatives.',
                examples: [
                    { french: 'ne...jamais → never: Je ne fume jamais.', english: 'I never smoke.' },
                    { french: 'ne...rien → nothing: Il ne sait rien.', english: 'He knows nothing.' },
                    { french: 'ne...personne → nobody: Elle ne voit personne.', english: 'She sees nobody.' },
                    { french: 'ne...plus → no longer / not anymore: Il ne travaille plus ici.', english: 'He no longer works here.' },
                    { french: 'ne...que → only: Je n\'ai que dix euros.', english: 'I only have ten euros.' },
                    { french: 'ne...ni...ni → neither...nor: Il ne parle ni anglais ni espagnol.', english: 'He speaks neither English nor Spanish.' },
                ],
            },
            {
                title: 'Negation with Infinitives',
                explanation: 'When negating an infinitive, both ne and pas go before the infinitive.',
                examples: [
                    { french: 'Essaie de ne pas crier.', english: 'Try not to shout.' },
                    { french: 'Il a décidé de ne pas partir.', english: 'He decided not to leave.' },
                    { french: 'C\'est important de ne pas oublier.', english: 'It\'s important not to forget.' },
                ],
            },
        ],
    },
    {
        id: 'questions',
        title: 'Asking Questions',
        level: 'A1',
        description: 'Three ways to form questions and the key question words',
        icon: '❓',
        color: '#D97706',
        sections: [
            {
                title: 'Intonation',
                explanation: 'The simplest method: raise your voice at the end of an affirmative sentence.',
                examples: [
                    { french: 'Tu parles français ?', english: 'You speak French?' },
                    { french: 'Il est là ?', english: 'Is he there?' },
                    { french: 'C\'est bon ?', english: 'Is it good?' },
                ],
            },
            {
                title: 'Est-ce que',
                explanation: 'Add est-ce que before the subject + verb. Works with any subject without inversion.',
                examples: [
                    { french: 'Est-ce que tu parles français ?', english: 'Do you speak French?' },
                    { french: 'Est-ce qu\'il est là ?', english: 'Is he there?' },
                    { french: 'Est-ce que vous avez une réservation ?', english: 'Do you have a reservation?' },
                    { french: 'Est-ce qu\'elle travaille ici ?', english: 'Does she work here?' },
                ],
            },
            {
                title: 'Inversion',
                explanation: 'Invert the verb and subject pronoun, linked by a hyphen. Add -t- between vowels.',
                examples: [
                    { french: 'Parles-tu français ?', english: 'Do you speak French?' },
                    { french: 'Est-il là ?', english: 'Is he there?' },
                    { french: 'A-t-il une voiture ?', english: 'Does he have a car?' },
                    { french: 'Comprend-elle la situation ?', english: 'Does she understand the situation?' },
                ],
            },
            {
                title: 'Question Words',
                explanation: 'Use interrogative words with any question method.',
                examples: [
                    { french: 'Qui ?', english: 'Who?' },
                    { french: 'Quoi ?', english: 'What? (informal)' },
                    { french: 'Que / Qu\'est-ce que ?', english: 'What?' },
                    { french: 'Où ?', english: 'Where?' },
                    { french: 'Quand ?', english: 'When?' },
                    { french: 'Comment ?', english: 'How?' },
                    { french: 'Pourquoi ?', english: 'Why?' },
                    { french: 'Combien ?', english: 'How much / many?' },
                ],
            },
        ],
    },
    {
        id: 'adjective-agreement',
        title: 'Adjective Agreement',
        level: 'A2',
        description: 'Adjectives must agree in gender and number with the noun they describe',
        icon: '🔤',
        color: '#7C3AED',
        sections: [
            {
                title: 'Basic Agreement',
                explanation: 'Add -e for feminine, -s for masculine plural, -es for feminine plural. The -e is usually silent but changes pronunciation of a preceding consonant.',
                examples: [
                    { french: 'un homme grand', english: 'a tall man' },
                    { french: 'une femme grande', english: 'a tall woman' },
                    { french: 'des hommes grands', english: 'tall men' },
                    { french: 'des femmes grandes', english: 'tall women' },
                    { french: 'C\'est un livre intéressant.', english: 'It\'s an interesting book.' },
                ],
            },
            {
                title: 'Irregular Feminine Forms',
                explanation: 'Many adjectives have irregular feminine forms. Common patterns: -eux/-euse, -if/-ive, -el/-elle, -en/-enne, -er/-ère.',
                examples: [
                    { french: 'heureux / heureuse', english: 'happy' },
                    { french: 'actif / active', english: 'active' },
                    { french: 'naturel / naturelle', english: 'natural' },
                    { french: 'ancien / ancienne', english: 'former / old' },
                    { french: 'premier / première', english: 'first' },
                    { french: 'beau / belle / beaux / belles', english: 'beautiful' },
                ],
            },
            {
                title: 'Adjective Placement',
                explanation: 'Most adjectives come AFTER the noun. A small group of short, common adjectives (BAGS: Beauty, Age, Goodness, Size) come BEFORE.',
                examples: [
                    { french: 'une voiture rouge', english: 'a red car (colour → after)' },
                    { french: 'une vieille maison', english: 'an old house (age → before)' },
                    { french: 'un grand homme', english: 'a great man (before)' },
                    { french: 'un homme grand', english: 'a tall man (physical size → after)' },
                    { french: 'une belle journée', english: 'a beautiful day (beauty → before)' },
                    { french: 'un livre nouveau', english: 'a new book (after, when it means \'brand-new\')' },
                ],
            },
        ],
    },
    {
        id: 'passe-compose',
        title: 'Passé Composé',
        level: 'A2',
        description: 'The most common past tense — used for completed actions',
        icon: '⏪',
        color: '#EA580C',
        sections: [
            {
                title: 'Formation with avoir',
                explanation: 'Most verbs form the passé composé with avoir + past participle. -ER verbs: -é. -IR verbs: -i. -RE verbs: -u.',
                examples: [
                    { french: 'parler → j\'ai parlé', english: 'I spoke' },
                    { french: 'finir → il a fini', english: 'he finished' },
                    { french: 'vendre → nous avons vendu', english: 'we sold' },
                    { french: 'voir → elle a vu', english: 'she saw' },
                    { french: 'faire → tu as fait', english: 'you did' },
                ],
            },
            {
                title: 'Formation with être',
                explanation: '16 verbs of motion/state use être + past participle (DR & MRS VANDERTRAMP). The participle agrees with the subject.',
                examples: [
                    { french: 'aller → je suis allé(e)', english: 'I went' },
                    { french: 'venir → il est venu', english: 'he came' },
                    { french: 'partir → elle est partie', english: 'she left' },
                    { french: 'arriver → nous sommes arrivé(e)s', english: 'we arrived' },
                    { french: 'naître → il est né', english: 'he was born' },
                    { french: 'mourir → elle est morte', english: 'she died' },
                ],
            },
            {
                title: 'Reflexive Verbs',
                explanation: 'All reflexive (pronominal) verbs use être. The participle agrees with the subject.',
                examples: [
                    { french: 'se lever → elle s\'est levée', english: 'she got up' },
                    { french: 'se coucher → ils se sont couchés', english: 'they went to bed' },
                    { french: 'se marier → nous nous sommes mariés', english: 'we got married' },
                ],
            },
            {
                title: 'Irregular Past Participles',
                explanation: 'Key irregular past participles to memorise.',
                examples: [
                    { french: 'être → été', english: 'been' },
                    { french: 'avoir → eu', english: 'had' },
                    { french: 'faire → fait', english: 'done / made' },
                    { french: 'prendre → pris', english: 'taken' },
                    { french: 'mettre → mis', english: 'put' },
                    { french: 'dire → dit', english: 'said' },
                    { french: 'écrire → écrit', english: 'written' },
                    { french: 'ouvrir → ouvert', english: 'opened' },
                ],
            },
        ],
    },
    {
        id: 'imparfait',
        title: 'L\'Imparfait',
        level: 'B1',
        description: 'The imperfect tense — for habits, ongoing states and background descriptions in the past',
        icon: '🌅',
        color: '#0891B2',
        sections: [
            {
                title: 'Formation',
                explanation: 'Take the nous present-tense stem (remove -ons) and add: -ais, -ais, -ait, -ions, -iez, -aient. Only être is irregular: ét-.',
                examples: [
                    { french: 'parler → nous parlons → je parlais, tu parlais, il parlait…', english: 'I was speaking, you were speaking…' },
                    { french: 'finir → nous finissons → je finissais…', english: 'I was finishing…' },
                    { french: 'prendre → nous prenons → je prenais…', english: 'I was taking…' },
                    { french: 'être → j\'étais, tu étais, il était…', english: 'I was, you were, he was…' },
                    { french: 'avoir → j\'avais, tu avais, il avait…', english: 'I had, you had, he had…' },
                ],
            },
            {
                title: 'Habitual Actions in the Past',
                explanation: 'Use the imparfait for things that happened repeatedly or regularly in the past.',
                examples: [
                    { french: 'Quand j\'étais petit, je jouais au foot tous les samedis.', english: 'When I was little, I played football every Saturday.' },
                    { french: 'Elle prenait toujours le métro.', english: 'She always took the metro.' },
                    { french: 'Nous nous retrouvions au café.', english: 'We used to meet at the café.' },
                    { french: 'Il lisait avant de dormir.', english: 'He used to read before sleeping.' },
                ],
            },
            {
                title: 'Descriptions and Background',
                explanation: 'Use the imparfait to describe how things were or what was happening as background to a story.',
                examples: [
                    { french: 'Il faisait froid et la neige tombait.', english: 'It was cold and snow was falling.' },
                    { french: 'Elle portait une robe rouge.', english: 'She was wearing a red dress.' },
                    { french: 'La ville était calme ce matin-là.', english: 'The city was quiet that morning.' },
                    { french: 'J\'avais peur.', english: 'I was afraid.' },
                ],
            },
            {
                title: 'Passé Composé vs Imparfait',
                explanation: 'Use passé composé for single completed actions; use imparfait for ongoing background, states, or habits.',
                examples: [
                    { french: 'Je lisais (imparfait) quand le téléphone a sonné (passé composé).', english: 'I was reading when the phone rang.' },
                    { french: 'Hier, il a plu (PC) toute la journée mais il faisait (imp.) doux.', english: 'Yesterday it rained all day but it was mild.' },
                    { french: 'Elle aimait (imp.) la musique et elle a décidé (PC) d\'apprendre la guitare.', english: 'She loved music and she decided to learn guitar.' },
                ],
            },
        ],
    },
    {
        id: 'reflexive-verbs',
        title: 'Reflexive Verbs',
        level: 'B1',
        description: 'Pronominal verbs where the subject acts on itself',
        icon: '🔄',
        color: '#16A34A',
        sections: [
            {
                title: 'What are Reflexive Verbs?',
                explanation: 'Reflexive verbs are preceded by a reflexive pronoun (me, te, se, nous, vous, se) that refers back to the subject.',
                examples: [
                    { french: 'je me lève', english: 'I get up (lit. I raise myself)' },
                    { french: 'tu te laves', english: 'you wash yourself' },
                    { french: 'il se rase', english: 'he shaves' },
                    { french: 'nous nous habillons', english: 'we get dressed' },
                    { french: 'ils se disputent', english: 'they argue' },
                ],
            },
            {
                title: 'Common Reflexive Verbs',
                explanation: 'Many daily-routine verbs are reflexive in French.',
                examples: [
                    { french: 'se réveiller', english: 'to wake up' },
                    { french: 'se lever', english: 'to get up' },
                    { french: 'se coucher', english: 'to go to bed' },
                    { french: 'se doucher', english: 'to shower' },
                    { french: 's\'habiller', english: 'to get dressed' },
                    { french: 'se rappeler', english: 'to remember' },
                    { french: 's\'ennuyer', english: 'to get bored' },
                    { french: 'se sentir', english: 'to feel' },
                ],
            },
            {
                title: 'Reflexive Verbs in the Passé Composé',
                explanation: 'All reflexive verbs use être in compound tenses. The past participle agrees with the subject.',
                examples: [
                    { french: 'Elle s\'est levée tôt.', english: 'She got up early.' },
                    { french: 'Ils se sont rencontrés à Paris.', english: 'They met in Paris.' },
                    { french: 'Nous nous sommes disputés.', english: 'We argued.' },
                    { french: 'Tu t\'es trompé(e).', english: 'You were mistaken.' },
                ],
            },
            {
                title: 'Reciprocal Use',
                explanation: 'Reflexive pronouns can also express mutual action (\'each other\').',
                examples: [
                    { french: 'Ils s\'aiment.', english: 'They love each other.' },
                    { french: 'Nous nous téléphonons souvent.', english: 'We call each other often.' },
                    { french: 'Elles se regardent.', english: 'They look at each other.' },
                ],
            },
        ],
    },
    {
        id: 'futur-conditionnel',
        title: 'Future & Conditional',
        level: 'B1',
        description: 'Talking about what will happen and what would happen',
        icon: '🔮',
        color: '#7C3AED',
        sections: [
            {
                title: 'Futur Simple — Formation',
                explanation: 'Add these endings to the infinitive (drop final -e from -RE verbs): -ai, -as, -a, -ons, -ez, -ont. Many irregulars have unique stems.',
                examples: [
                    { french: 'parler → je parlerai', english: 'I will speak' },
                    { french: 'finir → elle finira', english: 'she will finish' },
                    { french: 'prendre → il prendra', english: 'he will take' },
                    { french: 'être → nous serons', english: 'we will be' },
                    { french: 'avoir → vous aurez', english: 'you will have' },
                ],
            },
            {
                title: 'Futur Simple — Usage',
                explanation: 'Use for future events, promises, predictions, and after quand/lorsque/dès que (when English uses present).',
                examples: [
                    { french: 'Je t\'appellerai demain.', english: 'I will call you tomorrow.' },
                    { french: 'Quand tu arriveras, je serai là.', english: 'When you arrive, I will be there.' },
                    { french: 'Il fera beau demain.', english: 'It will be fine tomorrow.' },
                    { french: 'Un jour, tu comprendras.', english: 'One day, you\'ll understand.' },
                ],
            },
            {
                title: 'Conditionnel Présent — Formation',
                explanation: 'Use the same stems as the futur simple, but add the imparfait endings: -ais, -ais, -ait, -ions, -iez, -aient.',
                examples: [
                    { french: 'parler → je parlerais', english: 'I would speak' },
                    { french: 'être → il serait', english: 'he would be' },
                    { french: 'avoir → nous aurions', english: 'we would have' },
                    { french: 'aller → j\'irais', english: 'I would go' },
                ],
            },
            {
                title: 'Conditionnel Présent — Usage',
                explanation: 'Use for hypothetical situations, polite requests, reported speech, and the result clause of si (if) sentences.',
                examples: [
                    { french: 'Je voudrais un café, s\'il vous plaît.', english: 'I would like a coffee, please.' },
                    { french: 'Si j\'avais de l\'argent, je voyagerais.', english: 'If I had money, I would travel.' },
                    { french: 'Il a dit qu\'il viendrait.', english: 'He said he would come.' },
                    { french: 'Pourriez-vous m\'aider ?', english: 'Could you help me?' },
                    { french: 'Ce serait formidable !', english: 'That would be wonderful!' },
                ],
            },
        ],
    },
    {
        id: 'subjonctif',
        title: 'The Subjunctive',
        level: 'B2',
        description: 'The subjunctive mood — expressing doubt, emotion, necessity and subjectivity',
        icon: '🌀',
        color: '#DC2626',
        sections: [
            {
                title: 'Formation',
                explanation: 'Take the ils/elles present-tense stem, drop -ent, and add: -e, -es, -e, -ions, -iez, -ent. Être and avoir are irregular.',
                examples: [
                    { french: 'parler (ils parlent → parl-) → que je parle, que tu parles, qu\'il parle…', english: 'that I speak, that you speak, that he speaks…' },
                    { french: 'finir (ils finissent → finiss-) → que je finisse…', english: 'that I finish…' },
                    { french: 'prendre (ils prennent → prenn-) → que je prenne…', english: 'that I take…' },
                    { french: 'être → que je sois, que tu sois, qu\'il soit, que nous soyons, que vous soyez, qu\'ils soient', english: 'that I be, that you be…' },
                    { french: 'avoir → que j\'aie, que tu aies, qu\'il ait, que nous ayons, que vous ayez, qu\'ils aient', english: 'that I have, that you have…' },
                ],
            },
            {
                title: 'When to Use the Subjunctive',
                explanation: 'Use the subjunctive in a subordinate clause after que when the main clause expresses: doubt, emotion, necessity, will, or impersonal expressions.',
                examples: [
                    { french: 'Il faut que tu viennes.', english: 'You have to come. (necessity)' },
                    { french: 'Je veux qu\'il parte.', english: 'I want him to leave. (will)' },
                    { french: 'Je suis content que tu sois là.', english: 'I\'m glad you\'re here. (emotion)' },
                    { french: 'Il est important que nous sachions.', english: 'It\'s important that we know. (impersonal)' },
                    { french: 'Je doute qu\'il ait raison.', english: 'I doubt he\'s right. (doubt)' },
                    { french: 'Bien que ce soit difficile…', english: 'Although it\'s difficult… (concession)' },
                    { french: 'avant que tu partes', english: 'before you leave (conjunction)' },
                    { french: 'pour que tu comprennes', english: 'so that you understand (purpose)' },
                ],
            },
            {
                title: 'Subjunctive vs Indicative',
                explanation: 'After verbs of belief/thought in the affirmative, use the indicative. In the negative or interrogative, use the subjunctive.',
                examples: [
                    { french: 'Je pense qu\'il a raison. (indicative)', english: 'I think he\'s right.' },
                    { french: 'Je ne pense pas qu\'il ait raison. (subjunctive)', english: 'I don\'t think he\'s right.' },
                    { french: 'Penses-tu qu\'il ait raison ? (subjunctive)', english: 'Do you think he\'s right?' },
                ],
            },
        ],
    },
];

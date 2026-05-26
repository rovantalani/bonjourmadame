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

export interface GrammarExercise {
    sentence: string;
    answer: string;
    hint?: string;
}

export interface GrammarLesson {
    id: string;
    title: string;
    level: string;
    description: string;
    icon: string;
    color: string;
    sections: GrammarSection[];
    exercises?: GrammarExercise[];
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
        exercises: [
            { sentence: "Je voudrais ___ café, s'il vous plaît.", answer: 'un', hint: 'indefinite article, masculine singular' },
            { sentence: "___ enfants aiment le chocolat.", answer: 'Les', hint: 'definite article, plural' },
            { sentence: "Elle a ___ idée brillante.", answer: 'une', hint: 'indefinite article, feminine singular' },
            { sentence: "Il va ___ cinéma ce soir.", answer: 'au', hint: 'à + le → contraction' },
            { sentence: "Je parle ___ problème avec elle.", answer: 'du', hint: 'de + le → contraction' },
            { sentence: "___ école est fermée aujourd'hui.", answer: "L'", hint: "definite article before a vowel" },
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
        exercises: [
            { sentence: "C'est ___ voyage inoubliable.", answer: 'un', hint: 'indefinite article, masculine (voyage ends in -age)' },
            { sentence: "___ liberté est un droit fondamental.", answer: 'La', hint: 'definite article, feminine (liberté ends in -té)' },
            { sentence: "Il a acheté un journal. Les ___ sont sur la table.", answer: 'journaux', hint: '-al → -aux in the plural' },
            { sentence: "Le ___ (desk) est en bois.", answer: 'bureau', hint: 'masculine noun ending in -eau' },
            { sentence: "La ___ (decision) a été prise.", answer: 'décision', hint: 'feminine noun ending in -ion' },
            { sentence: "Un bureau → des ___.", answer: 'bureaux', hint: '-eau nouns add -x in the plural' },
        ],
    },
    {
        id: 'telling-time',
        title: 'Telling the Time',
        level: 'A1',
        description: 'Ask and say what time it is — hours, half-hours, and quarter-hours',
        icon: '🕐',
        color: '#D97706',
        sections: [
            {
                title: 'Asking and Saying the Time',
                explanation: 'Use "Quelle heure est-il ?" or "Il est quelle heure ?" to ask the time. Answer with "Il est… heure(s)."',
                examples: [
                    { french: 'Quelle heure est-il ?',       english: 'What time is it?' },
                    { french: 'Il est quelle heure ?',        english: 'What time is it? (informal)' },
                    { french: 'Il est trois heures.',         english: 'It\'s three o\'clock.' },
                    { french: 'Il est midi.',                 english: 'It\'s noon.' },
                    { french: 'Il est minuit.',               english: 'It\'s midnight.' },
                ],
            },
            {
                title: 'Quarter and Half Hours',
                explanation: 'Add "et quart" (quarter past), "et demie" (half past), or "moins le quart" (quarter to) after the hour.',
                examples: [
                    { french: 'Il est deux heures et quart.',      english: 'It\'s quarter past two.' },
                    { french: 'Il est cinq heures et demie.',      english: 'It\'s half past five.' },
                    { french: 'Il est huit heures moins le quart.', english: 'It\'s quarter to eight.' },
                    { french: 'Il est onze heures moins dix.',     english: 'It\'s ten to eleven.' },
                    { french: 'Il est une heure et quart.',        english: 'It\'s quarter past one.', note: 'Note: une heure, not un heure' },
                ],
            },
            {
                title: 'Morning, Afternoon and Evening',
                explanation: 'Add "du matin", "de l\'après-midi", or "du soir" to specify AM or PM. French also uses 24-hour time in official contexts.',
                examples: [
                    { french: 'Il est neuf heures du matin.',          english: 'It\'s nine in the morning.' },
                    { french: 'Il est trois heures de l\'après-midi.', english: 'It\'s three in the afternoon.' },
                    { french: 'Il est huit heures du soir.',            english: 'It\'s eight in the evening.' },
                    { french: 'Le train part à quatorze heures.',       english: 'The train leaves at 14:00 (2pm).', note: '24-hour clock used for timetables' },
                ],
            },
            {
                title: 'Useful Time Expressions',
                explanation: 'A few extra expressions for talking about time.',
                examples: [
                    { french: 'À quelle heure… ?',           english: 'At what time…?' },
                    { french: 'vers deux heures',             english: 'around two o\'clock' },
                    { french: 'Il est trois heures pile.',    english: 'It\'s exactly three o\'clock.' },
                    { french: 'à l\'heure',                  english: 'on time' },
                    { french: 'en retard / en avance',        english: 'late / early' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Il est ___ heures et quart. (9)', answer: 'neuf',   hint: 'spell out the number in French' },
            { sentence: 'Il est deux heures et ___.',       answer: 'demie', hint: 'half past' },
            { sentence: '___ heure est-il ?',               answer: 'Quelle', hint: 'asking the time' },
            { sentence: 'Il est minuit ___ cinq.',          answer: 'et',    hint: 'five past midnight — use et before small minutes' },
            { sentence: 'Il est onze heures ___ le quart.', answer: 'moins', hint: 'quarter to eleven' },
            { sentence: 'Le rendez-vous est ___ quinze heures. (at)', answer: 'à', hint: 'preposition for "at a time"' },
        ],
    },
    {
        id: 'possessive-adjectives',
        title: 'Possessive Adjectives',
        level: 'A1',
        description: 'Express ownership — my, your, his, her, our, their in French',
        icon: '🏷️',
        color: '#7C3AED',
        sections: [
            {
                title: 'Singular Possessors: mon / ton / son',
                explanation: 'For one possessor, use mon/ma/mes (my), ton/ta/tes (your), son/sa/ses (his/her/its). The ending agrees with the noun, not the possessor — son can mean his or her depending on context.',
                examples: [
                    { french: 'mon frère, ma sœur, mes parents',      english: 'my brother, my sister, my parents' },
                    { french: 'ton appartement, ta voiture, tes amis', english: 'your flat, your car, your friends' },
                    { french: 'son chien, sa maison, ses enfants',     english: 'his/her dog, his/her house, his/her children' },
                    { french: 'C\'est son livre à elle.',              english: 'It\'s her book.', note: 'Add à lui / à elle to clarify gender of possessor' },
                ],
            },
            {
                title: 'Plural Possessors: notre / votre / leur',
                explanation: 'For multiple possessors, use notre/nos (our), votre/vos (your plural/formal), leur/leurs (their). Notre and votre have one form for masc./fem. singular, nos/vos for plural.',
                examples: [
                    { french: 'notre maison, nos enfants',         english: 'our house, our children' },
                    { french: 'votre appartement, vos clés',       english: 'your flat, your keys (formal/plural)' },
                    { french: 'leur jardin, leurs affaires',       english: 'their garden, their things' },
                    { french: 'C\'est notre professeur.',          english: 'He\'s/She\'s our teacher.' },
                ],
            },
            {
                title: 'mon Before Feminine Nouns Starting with a Vowel',
                explanation: 'When a feminine noun starts with a vowel or silent h, use mon/ton/son instead of ma/ta/sa to avoid the awkward vowel clash.',
                examples: [
                    { french: 'mon amie (not ma amie)',     english: 'my friend (fem.)', note: 'amie starts with a vowel' },
                    { french: 'ton école (not ta école)',   english: 'your school' },
                    { french: 'son histoire (not sa histoire)', english: 'his/her story', note: 'histoire starts with silent h' },
                    { french: 'mon adresse',                english: 'my address' },
                ],
            },
        ],
        exercises: [
            { sentence: '___ livre est sur la table. (my, masc.)',          answer: 'Mon',   hint: 'masculine singular noun' },
            { sentence: 'C\'est ___ maison. (her)',                         answer: 'sa',    hint: 'maison is feminine' },
            { sentence: '___ amie s\'appelle Claire. (my)',                 answer: 'Mon',   hint: 'feminine noun starting with a vowel' },
            { sentence: 'Nous avons perdu ___ clés. (our)',                 answer: 'nos',   hint: 'plural noun, plural possessor' },
            { sentence: 'Ils ont vendu ___ appartement. (their)',           answer: 'leur',  hint: 'singular noun, plural possessor' },
            { sentence: 'Est-ce que c\'est ___ stylo ? (your, informal)',   answer: 'ton',   hint: 'masculine singular, informal' },
        ],
    },
    {
        id: 'prepositions-place',
        title: 'Prepositions of Place',
        level: 'A1',
        description: 'Describe where things are — in, on, under, in front of, next to…',
        icon: '📍',
        color: '#0891B2',
        sections: [
            {
                title: 'Simple Prepositions',
                explanation: 'These single-word prepositions describe basic location. They are followed directly by the noun.',
                examples: [
                    { french: 'Le chat est dans la boîte.',       english: 'The cat is in the box.' },
                    { french: 'Le livre est sur la table.',        english: 'The book is on the table.' },
                    { french: 'Les chaussures sont sous le lit.',  english: 'The shoes are under the bed.' },
                    { french: 'La voiture est devant la maison.',  english: 'The car is in front of the house.' },
                    { french: 'Le jardin est derrière la maison.', english: 'The garden is behind the house.' },
                ],
            },
            {
                title: 'Compound Prepositions',
                explanation: 'These multi-word prepositions are followed by de, which contracts with le → du and les → des.',
                examples: [
                    { french: 'La boulangerie est à côté de la banque.',   english: 'The bakery is next to the bank.' },
                    { french: 'La poste est en face de l\'hôtel.',         english: 'The post office is opposite the hotel.' },
                    { french: 'J\'habite près du parc.',                   english: 'I live near the park.', note: 'près de + le = près du' },
                    { french: 'La gare est loin du centre-ville.',         english: 'The station is far from the town centre.' },
                    { french: 'Le café est entre la banque et la pharmacie.', english: 'The café is between the bank and the pharmacy.' },
                ],
            },
            {
                title: 'Using il y a to Describe a Room',
                explanation: '"Il y a" (there is / there are) + a preposition is the key pattern for describing the layout of a room or home.',
                examples: [
                    { french: 'Il y a un bureau dans ma chambre.',            english: 'There is a desk in my bedroom.' },
                    { french: 'Il n\'y a pas de garage.',                     english: 'There is no garage.' },
                    { french: 'La télévision est en face du canapé.',         english: 'The television is opposite the sofa.' },
                    { french: 'Mon appartement est au-dessus du restaurant.', english: 'My flat is above the restaurant.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Le stylo est ___ la trousse. (in)',             answer: 'dans',         hint: 'inside something' },
            { sentence: 'La pharmacie est ___ ___ cinéma. (next to the)', answer: 'à côté du',   hint: 'à côté de + le = à côté du' },
            { sentence: 'Les enfants jouent ___ le jardin. (behind)',    answer: 'derrière',     hint: 'simple preposition, no de' },
            { sentence: 'Il habite ___ ___ école. (near the)',           answer: 'près de l\'',  hint: 'près de + l\' before a vowel' },
            { sentence: 'Le chat dort ___ la chaise. (under)',           answer: 'sous',         hint: 'simple preposition' },
            { sentence: 'La boulangerie est ___ la banque et la poste. (between)', answer: 'entre', hint: 'entre is followed by two nouns joined by et' },
        ],
    },
    {
        id: 'adjective-basics',
        title: 'Adjective Agreement & Position',
        level: 'A1',
        description: 'Make adjectives agree with their nouns and place them correctly',
        icon: '✏️',
        color: '#DC2626',
        sections: [
            {
                title: 'Gender and Number Agreement',
                explanation: 'French adjectives must match the gender (masc./fem.) and number (sing./pl.) of the noun they describe. The basic rule: add -e for feminine, -s for plural, -es for feminine plural.',
                examples: [
                    { french: 'un livre intéressant / une histoire intéressante', english: 'an interesting book / an interesting story' },
                    { french: 'des livres intéressants / des histoires intéressantes', english: 'interesting books / interesting stories' },
                    { french: 'un appartement grand / une maison grande',          english: 'a big flat / a big house' },
                    { french: 'Il est français. / Elle est française.',            english: 'He is French. / She is French.', note: '-ais → -aise for nationalities' },
                ],
            },
            {
                title: 'Position: BANGS Rule',
                explanation: 'Most adjectives come AFTER the noun. The main exceptions come BEFORE: Beauty (beau/joli), Age (vieux/jeune/nouveau), Number (premier/dernier), Goodness (bon/mauvais), Size (grand/petit/gros). Remember: BANGS.',
                examples: [
                    { french: 'une belle maison',       english: 'a beautiful house', note: 'Beauty → before' },
                    { french: 'un vieux quartier',      english: 'an old neighbourhood', note: 'Age → before' },
                    { french: 'un bon repas',           english: 'a good meal', note: 'Goodness → before' },
                    { french: 'une petite chambre',     english: 'a small bedroom', note: 'Size → before' },
                    { french: 'une voiture rouge',      english: 'a red car', note: 'Colour → after' },
                    { french: 'un homme intelligent',   english: 'an intelligent man', note: 'Most adjectives → after' },
                ],
            },
            {
                title: 'Irregular Forms Before Vowels',
                explanation: 'Beau, vieux, and nouveau change form before a masculine noun starting with a vowel or silent h.',
                examples: [
                    { french: 'un beau jardin / un bel appartement',         english: 'a beautiful garden / a beautiful flat' },
                    { french: 'un vieux château / un vieil homme',           english: 'an old castle / an old man' },
                    { french: 'un nouveau film / un nouvel an',              english: 'a new film / a new year' },
                    { french: 'une belle / vieille / nouvelle (fem. same)',  english: 'fem. forms: belle, vieille, nouvelle — no change before vowels' },
                ],
            },
        ],
        exercises: [
            { sentence: 'C\'est une maison ___ (beautiful, fem.)',                  answer: 'belle',          hint: 'beau → belle in the feminine' },
            { sentence: 'J\'ai un ___ appartement. (new, before vowel)',            answer: 'nouvel',         hint: 'nouveau → nouvel before a vowel' },
            { sentence: 'Elle a les yeux ___ (green, masc. pl.)',                  answer: 'verts',          hint: 'vert → verts in the masculine plural' },
            { sentence: 'C\'est une idée ___. (good, fem.)',                        answer: 'bonne',          hint: 'bon → bonne in the feminine' },
            { sentence: 'Nous habitons dans un ___ quartier. (old, masc. sing.)',   answer: 'vieux',          hint: 'no vowel follows, so use vieux not vieil' },
            { sentence: 'Il porte une chemise ___. (white, fem.)',                  answer: 'blanche',        hint: 'blanc → blanche in the feminine' },
        ],
    },
    {
        id: 'present-tense-er',
        title: 'Present Tense: -ER Verbs',
        level: 'A1',
        description: 'Conjugate regular -ER verbs in the present tense — the most common verb pattern in French',
        icon: '🔄',
        color: '#0891B2',
        sections: [
            {
                title: 'The -ER Paradigm',
                explanation: 'To conjugate a regular -ER verb, drop the -er ending and add: -e, -es, -e, -ons, -ez, -ent. These endings are the same for all regular -ER verbs.',
                examples: [
                    { french: 'parler → je parle, tu parles, il/elle parle', english: 'to speak → I speak, you speak, he/she speaks' },
                    { french: 'nous parlons, vous parlez, ils/elles parlent', english: 'we speak, you speak, they speak', note: 'The -ent ending is silent' },
                    { french: 'aimer → j\'aime, tu aimes, il aime', english: 'to like/love → I like, you like, he likes' },
                    { french: 'travailler → nous travaillons, vous travaillez', english: 'to work → we work, you work' },
                ],
            },
            {
                title: 'Common -ER Verbs',
                explanation: 'Most French verbs are -ER verbs. Here are the most useful ones at A1 level.',
                examples: [
                    { french: 'parler — to speak', english: 'Je parle français. — I speak French.' },
                    { french: 'aimer — to like / to love', english: 'Elle aime le chocolat. — She likes chocolate.' },
                    { french: 'habiter — to live (somewhere)', english: 'Nous habitons à Paris. — We live in Paris.' },
                    { french: 'travailler — to work', english: 'Il travaille beaucoup. — He works a lot.' },
                    { french: 'manger — to eat', english: 'Vous mangez bien. — You eat well.' },
                    { french: 'écouter — to listen', english: 'Ils écoutent la radio. — They listen to the radio.' },
                ],
            },
            {
                title: 'Spelling-change Verbs',
                explanation: 'Two subtypes have a spelling change in the nous form only: -ger verbs add an e before -ons (nous mangeons), and -cer verbs change c to ç before -ons (nous commençons). All other forms are regular.',
                examples: [
                    { french: 'manger: je mange, nous mangeons', english: 'to eat: I eat, we eat', note: '-ger verbs: add e before -ons to keep the soft g sound' },
                    { french: 'commencer: je commence, nous commençons', english: 'to start: I start, we start', note: '-cer verbs: c → ç before -ons to keep the soft c sound' },
                    { french: 'voyager: nous voyageons', english: 'to travel: we travel' },
                    { french: 'lancer: nous lançons', english: 'to throw: we throw' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Elle ___ le français à l\'université. (parler)',                answer: 'parle',       hint: '3rd person singular: drop -er, add -e' },
            { sentence: 'Nous ___ dans le 11e arrondissement. (habiter)',                answer: 'habitons',    hint: '1st person plural: drop -er, add -ons' },
            { sentence: 'Vous ___ la musique classique ? (aimer)',                       answer: 'aimez',       hint: '2nd person plural: drop -er, add -ez' },
            { sentence: 'Ils ___ ensemble dans un bureau. (travailler)',                 answer: 'travaillent', hint: '3rd person plural: drop -er, add -ent (silent)' },
            { sentence: 'Nous ___ au restaurant ce soir. (manger — spelling change)',    answer: 'mangeons',    hint: '-ger verb: add e before -ons → mangeons' },
            { sentence: 'Nous ___ à apprendre le français. (commencer — spelling change)', answer: 'commençons', hint: '-cer verb: c → ç before -ons → commençons' },
        ],
    },
    {
        id: 'demonstrative-adjectives',
        title: 'Demonstrative Adjectives',
        level: 'A1',
        description: 'Point to specific things using ce, cet, cette, ces — this, that, these, those',
        icon: '👉',
        color: '#D97706',
        sections: [
            {
                title: 'The Four Forms',
                explanation: 'French has one set of demonstrative adjectives for both "this/that" and "these/those". The form depends on the gender and number of the noun: ce (masc. sing.), cet (masc. sing. before vowel/silent h), cette (fem. sing.), ces (all plurals).',
                examples: [
                    { french: 'ce livre',          english: 'this / that book',        note: 'masc. singular — starts with a consonant' },
                    { french: 'cet hôtel',         english: 'this / that hotel',       note: 'masc. singular — starts with h (silent)' },
                    { french: 'cet avion',         english: 'this / that plane',       note: 'masc. singular — starts with a vowel' },
                    { french: 'cette maison',      english: 'this / that house',       note: 'fem. singular' },
                    { french: 'ces enfants',       english: 'these / those children',  note: 'plural — same for masc. and fem.' },
                ],
            },
            {
                title: 'When to Use cet',
                explanation: 'Use cet (not ce) before any masculine singular noun that starts with a vowel (a, e, i, o, u) or a silent h. This avoids the clash of two vowel sounds. The feminine form cette is used before all feminine nouns regardless of their first letter.',
                examples: [
                    { french: 'ce restaurant — cet hôtel',    english: 'this restaurant — this hotel',    note: 'restaurant starts with r (consonant) → ce; hôtel starts with h (silent) → cet' },
                    { french: 'ce bus — cet aéroport',        english: 'this bus — this airport',         note: 'bus → ce; aéroport starts with vowel → cet' },
                    { french: 'cette pharmacie',              english: 'this pharmacy',                    note: 'fem. → always cette, never cet' },
                    { french: 'cette école',                  english: 'this school',                     note: 'fem. — even before a vowel, it stays cette' },
                ],
            },
            {
                title: 'Using -ci and -là for Precision',
                explanation: 'Add -ci (here) or -là (there) after the noun to distinguish between "this one here" and "that one there". This is optional but useful in shops or when pointing.',
                examples: [
                    { french: 'ce livre-ci',    english: 'this book (here)',        note: '-ci = near the speaker' },
                    { french: 'ce livre-là',    english: 'that book (over there)',  note: '-là = farther away' },
                    { french: 'Je prends cette veste-ci.',   english: 'I\'ll take this jacket (this one here).' },
                    { french: 'Cet hôtel-là est trop cher.', english: 'That hotel (over there) is too expensive.' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Je voudrais ___ billet, s\'il vous plaît. (this ticket — masc. consonant)',    answer: 'ce',    hint: 'billet is masc. and starts with b (consonant) → ce' },
            { sentence: '___ arrêt est loin ? (this stop — masc. starts with vowel)',                   answer: 'Cet',   hint: 'arrêt is masc. and starts with a vowel → cet' },
            { sentence: 'Je n\'aime pas ___ rue. (this street — fem.)',                                 answer: 'cette', hint: 'rue is feminine → cette' },
            { sentence: '___ hôpital est à gauche. (this hospital — starts with silent h)',             answer: 'Cet',   hint: 'hôpital is masc. with silent h → cet' },
            { sentence: '___ chaussures sont trop petites. (these shoes — plural)',                     answer: 'Ces',   hint: 'plural → always ces' },
            { sentence: 'Tu prends ___ veste-ci ou ___ manteau-là ? (this jacket / that coat)',         answer: 'cette / ce', hint: 'veste is fem. → cette; manteau is masc. consonant → ce' },
        ],
    },
    {
        id: 'present-tense-ir-re',
        title: 'Present Tense: -IR and -RE Verbs',
        level: 'A1',
        description: 'Conjugate regular -IR and -RE verbs — the two other main verb families in French',
        icon: '🔁',
        color: '#059669',
        sections: [
            {
                title: 'Regular -IR Verbs',
                explanation: 'To conjugate a regular -IR verb, drop the -ir ending and add: -is, -is, -it, -issons, -issez, -issent. Note the -iss- inserted in the plural forms.',
                examples: [
                    { french: 'finir → je finis, tu finis, il/elle finit', english: 'to finish → I finish, you finish, he/she finishes' },
                    { french: 'nous finissons, vous finissez, ils/elles finissent', english: 'we finish, you finish, they finish', note: '-iss- appears in all plural forms' },
                    { french: 'choisir → je choisis, tu choisis, il choisit', english: 'to choose → I choose, you choose, he chooses' },
                    { french: 'nous choisissons, vous choisissez, ils choisissent', english: 'we choose, you choose, they choose' },
                ],
            },
            {
                title: 'Common -IR Verbs',
                explanation: 'These are the most useful regular -IR verbs at A1 level.',
                examples: [
                    { french: 'finir — to finish', english: 'Je finis mon travail. — I finish my work.' },
                    { french: 'choisir — to choose', english: 'Elle choisit une robe rouge. — She chooses a red dress.' },
                    { french: 'remplir — to fill', english: 'Il remplit le verre d\'eau. — He fills the glass with water.' },
                    { french: 'réussir — to succeed / to pass', english: 'Nous réussissons l\'examen. — We pass the exam.' },
                    { french: 'grandir — to grow up', english: 'Les enfants grandissent vite. — Children grow up fast.' },
                ],
            },
            {
                title: 'Regular -RE Verbs',
                explanation: 'To conjugate a regular -RE verb, drop the -re ending and add: -s, -s, — (nothing), -ons, -ez, -ent. The il/elle/on form has no ending added.',
                examples: [
                    { french: 'vendre → je vends, tu vends, il/elle vend', english: 'to sell → I sell, you sell, he/she sells', note: 'il/elle form: drop -re, add nothing' },
                    { french: 'nous vendons, vous vendez, ils/elles vendent', english: 'we sell, you sell, they sell' },
                    { french: 'attendre → j\'attends, tu attends, il attend', english: 'to wait → I wait, you wait, he waits' },
                    { french: 'nous attendons, vous attendez, ils attendent', english: 'we wait, you wait, they wait' },
                ],
            },
            {
                title: 'Common -RE Verbs',
                explanation: 'These are the most useful regular -RE verbs at A1 level.',
                examples: [
                    { french: 'vendre — to sell', english: 'Il vend des légumes au marché. — He sells vegetables at the market.' },
                    { french: 'attendre — to wait (for)', english: 'J\'attends le bus. — I\'m waiting for the bus.', note: 'No preposition needed in French: attendre qqch directly' },
                    { french: 'répondre — to answer', english: 'Elle répond à la question. — She answers the question.' },
                    { french: 'entendre — to hear', english: 'Nous entendons la musique. — We can hear the music.' },
                    { french: 'perdre — to lose', english: 'Tu perds toujours tes clés ! — You always lose your keys!' },
                ],
            },
        ],
        exercises: [
            { sentence: 'Elle ___ son café avant de partir. (finir)',                      answer: 'finit',      hint: '-IR: 3rd person singular → drop -ir, add -it' },
            { sentence: 'Nous ___ un film ce soir. (choisir)',                             answer: 'choisissons', hint: '-IR plural: drop -ir, add -issons' },
            { sentence: 'Ils ___ leurs affaires sur le marché. (vendre)',                  answer: 'vendent',    hint: '-RE plural: drop -re, add -ent' },
            { sentence: 'J\'___ le bus depuis vingt minutes. (attendre)',                  answer: 'attends',    hint: '-RE 1st person singular: drop -re, add -s' },
            { sentence: 'Vous ___ bien à l\'école ? (réussir)',                            answer: 'réussissez', hint: '-IR 2nd person plural: drop -ir, add -issez' },
            { sentence: 'Il ___ toujours ses clés. (perdre)',                              answer: 'perd',       hint: '-RE 3rd person singular: drop -re, add nothing' },
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
        exercises: [
            { sentence: "Je ___ parle pas anglais.", answer: 'ne', hint: 'first part of ne…pas' },
            { sentence: "Elle n'aime ___ le café.", answer: 'pas', hint: 'second part of ne…pas' },
            { sentence: "Il ne fume ___.", answer: 'jamais', hint: 'ne…jamais = never' },
            { sentence: "Je n'ai ___ dix euros.", answer: 'que', hint: 'ne…que = only' },
            { sentence: "Essaie de ne ___ crier.", answer: 'pas', hint: 'negating an infinitive: ne pas before it' },
            { sentence: "Il ne sait ___.", answer: 'rien', hint: 'ne…rien = nothing' },
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
        exercises: [
            { sentence: "___ est-ce que tu parles français ?", answer: 'Est-ce que', hint: 'formal question opener, no inversion needed' },
            { sentence: "Parles-___ français ?", answer: 'tu', hint: 'inversion: verb-subject pronoun' },
            { sentence: "___ vas-tu ?", answer: 'Où', hint: 'question word for place' },
            { sentence: "___ est-ce que tu arrives ?", answer: 'Quand', hint: 'question word for time' },
            { sentence: "A-t-il ___ voiture ?", answer: 'une', hint: 'indefinite article, feminine' },
            { sentence: "___ parles-tu ?", answer: 'Comment', hint: 'question word for manner/how' },
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
        exercises: [
            { sentence: "C'est une femme ___. (grand)", answer: 'grande', hint: 'add -e for feminine' },
            { sentence: "Il est ___. (heureux, masculine)", answer: 'heureux', hint: '-eux stays for masculine' },
            { sentence: "Elle est ___. (heureux, feminine)", answer: 'heureuse', hint: '-eux → -euse for feminine' },
            { sentence: "C'est une ___ maison. (vieux, feminine, before noun)", answer: 'vieille', hint: 'beau/belle/vieux/vieille — age adjective before noun' },
            { sentence: "Elle a une voiture ___. (rouge)", answer: 'rouge', hint: 'colour adjectives go after the noun, no agreement change' },
            { sentence: "C'est un livre ___. (intéressant, masculine)", answer: 'intéressant', hint: 'regular adjective, masculine form' },
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
        exercises: [
            { sentence: "Hier, j'___ parlé avec elle.", answer: 'ai', hint: 'avoir, passé composé, je' },
            { sentence: "Il ___ allé au marché.", answer: 'est', hint: 'aller uses être in passé composé' },
            { sentence: "Nous avons ___. (vendre)", answer: 'vendu', hint: '-RE verbs: past participle → -u' },
            { sentence: "Elle s'est ___. (lever, feminine subject)", answer: 'levée', hint: 'reflexive verb with être; participle agrees with subject' },
            { sentence: "Tu as ___ ce film ? (voir)", answer: 'vu', hint: 'voir → vu (irregular past participle)' },
            { sentence: "Ils ont ___ la porte. (ouvrir)", answer: 'ouvert', hint: 'ouvrir → ouvert (irregular past participle)' },
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
        exercises: [
            { sentence: "Quand j'étais petit, je ___ au foot tous les samedis.", answer: 'jouais', hint: 'imparfait, habitual action, jouer → nous jouons → joua-' },
            { sentence: "Il ___ froid et la neige tombait.", answer: 'faisait', hint: 'imparfait, description, faire → nous faisons → faisa-' },
            { sentence: "Elle ___ toujours le métro.", answer: 'prenait', hint: 'imparfait, habitual, prendre → nous prenons → prena-' },
            { sentence: "Je lisais quand le téléphone ___ sonné.", answer: 'a', hint: 'passé composé for completed action (sonnner → a sonné)' },
            { sentence: "J'___ peur. (imparfait de avoir)", answer: 'avais', hint: 'avoir → j\'avais (imparfait)' },
            { sentence: "La ville ___ calme ce matin-là.", answer: 'était', hint: 'imparfait of être, description' },
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
        exercises: [
            { sentence: "Je ___ lève à sept heures.", answer: 'me', hint: 'reflexive pronoun for je' },
            { sentence: "Tu ___ laves les mains.", answer: 'te', hint: 'reflexive pronoun for tu' },
            { sentence: "Nous ___ habillons vite.", answer: 'nous', hint: 'reflexive pronoun for nous' },
            { sentence: "Elle s'est ___ tôt. (lever, feminine)", answer: 'levée', hint: 'reflexive + être; participle agrees with feminine subject' },
            { sentence: "Ils ___ sont rencontrés à Paris.", answer: 'se', hint: 'reflexive pronoun for ils, before être in passé composé' },
            { sentence: "Ils ___. (s\'aimer — they love each other)", answer: "s'aiment", hint: 'reciprocal use of reflexive verb' },
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
        exercises: [
            { sentence: "Je t'___ demain. (appeler, futur)", answer: 'appellerai', hint: 'appeler → appellera- + -i (futur)' },
            { sentence: "Il ___ beau demain. (faire, futur)", answer: 'fera', hint: 'irregular futur stem: fer-' },
            { sentence: "Quand tu ___, je serai là. (arriver, futur)", answer: 'arriveras', hint: 'futur after quand' },
            { sentence: "Je ___ un café, s'il vous plaît. (vouloir, conditionnel)", answer: 'voudrais', hint: 'irregular conditional stem: voudr-' },
            { sentence: "Si j'avais de l'argent, je ___. (voyager, conditionnel)", answer: 'voyagerais', hint: 'conditionnel présent: voyager- + -ais' },
            { sentence: "Nous ___ contents d'y aller. (être, conditionnel)", answer: 'serions', hint: 'irregular conditional stem: ser-' },
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
        exercises: [
            { sentence: "Il faut que tu ___. (venir, subjonctif)", answer: 'viennes', hint: 'subjonctif of venir: vienn-' },
            { sentence: "Je veux qu'il ___. (partir, subjonctif)", answer: 'parte', hint: 'subjonctif of partir: part-' },
            { sentence: "Je suis content que tu ___ là. (être, subjonctif)", answer: 'sois', hint: 'irregular subjonctif of être' },
            { sentence: "Bien qu'il ___ difficile… (être, subjonctif)", answer: 'soit', hint: 'irregular subjonctif of être' },
            { sentence: "Je ne pense pas qu'il ___ raison. (avoir, subjonctif)", answer: 'ait', hint: 'irregular subjonctif of avoir' },
            { sentence: "Il est important que nous ___. (savoir, subjonctif)", answer: 'sachions', hint: 'irregular subjonctif of savoir: sach-' },
        ],
    },
    {
        id: 'gerondif',
        title: 'Le Gérondif',
        level: 'B2',
        description: 'Express simultaneous actions, manner, and condition using en + present participle',
        icon: '🔀',
        color: '#059669',
        sections: [
            {
                title: 'Formation',
                explanation: 'Take the nous form of the present tense, remove -ons, add -ant. Then place en before it. Only three irregular stems: étant (être), ayant (avoir), sachant (savoir).',
                examples: [
                    { french: 'parler → nous parlons → parlant → en parlant', english: 'while speaking' },
                    { french: 'finir → nous finissons → finissant → en finissant', english: 'while finishing' },
                    { french: 'prendre → nous prenons → prenant → en prenant', english: 'while taking' },
                    { french: 'être → étant → en étant', english: 'while being (irregular)' },
                    { french: 'savoir → sachant → en sachant', english: 'knowing / by knowing (irregular)' },
                ],
            },
            {
                title: 'Simultaneous Actions',
                explanation: 'The gérondif expresses two actions happening at the same time. Both actions must share the same subject.',
                examples: [
                    { french: 'Elle chante en cuisinant.', english: 'She sings while cooking.' },
                    { french: 'Il lit le journal en mangeant.', english: 'He reads the paper while eating.' },
                    { french: 'Je travaille en écoutant de la musique.', english: 'I work while listening to music.' },
                    { french: 'Il conduisait en téléphonant.', english: 'He was driving while on his phone.' },
                ],
            },
            {
                title: 'Manner or Means',
                explanation: 'The gérondif expresses how something is achieved — the means by which the main action occurs.',
                examples: [
                    { french: 'Il a réussi en travaillant dur.', english: 'He succeeded by working hard.' },
                    { french: 'J\'ai appris le français en regardant des films.', english: 'I learned French by watching films.' },
                    { french: 'Elle s\'est blessée en tombant.', english: 'She hurt herself by falling.' },
                    { french: 'On maigrit en mangeant moins.', english: 'You lose weight by eating less.' },
                ],
            },
            {
                title: 'Condition or Time',
                explanation: 'The gérondif can express a condition (if) or a time reference (upon, when).',
                examples: [
                    { french: 'En faisant attention, tu éviteras les erreurs.', english: 'If you\'re careful, you\'ll avoid mistakes.' },
                    { french: 'En arrivant, appelez-moi.', english: 'Upon arriving, call me.' },
                    { french: 'En partant tôt, tu éviteras les embouteillages.', english: 'By leaving early, you\'ll avoid traffic.' },
                ],
            },
            {
                title: 'Gérondif vs Participe Présent',
                explanation: 'The gérondif (en + -ant) is adverbial and modifies the verb. The participe présent (-ant alone) is adjectival and can modify a noun, or introduce a subordinate clause.',
                examples: [
                    { french: 'En souriant, il répondit. (gérondif — how he replied)', english: 'Smiling, he replied.' },
                    { french: 'Un enfant souriant. (participe présent as adj)', english: 'A smiling child.' },
                    { french: 'Sachant cela, elle n\'est pas venue. (participe présent — causal)', english: 'Knowing that, she didn\'t come.' },
                    { french: 'Il est entré en courant. (gérondif)', english: 'He came in running.' },
                ],
            },
        ],
        exercises: [
            { sentence: "Elle chante ___ cuisinant.", answer: 'en', hint: 'gérondif = en + participe présent' },
            { sentence: "Il a réussi ___ travaillant dur.", answer: 'en', hint: 'gérondif expresses means' },
            { sentence: "Nous finissons → ___ant (participe présent de finir)", answer: 'finissant', hint: 'remove -ons from nous form, add -ant' },
            { sentence: "___ arrivant, appelez-moi.", answer: 'En', hint: 'gérondif at start of sentence' },
            { sentence: "J'apprends le français ___ regardant des films.", answer: 'en', hint: 'gérondif expresses manner' },
            { sentence: "être → étant → ___ étant (gérondif)", answer: 'en', hint: 'all gérondifs are formed with en' },
        ],
    },
    {
        id: 'passive-voice',
        title: 'La Voix Passive',
        level: 'B2',
        description: 'How to form the passive, when to use it, and elegant alternatives',
        icon: '🔁',
        color: '#0891B2',
        sections: [
            {
                title: 'Formation',
                explanation: 'Passive = subject + être (conjugated in the required tense) + past participle (agrees in gender/number with subject) + par/de + agent. The tense of être reflects the tense of the active sentence.',
                examples: [
                    { french: 'Le chat mange la souris. → La souris est mangée par le chat. (présent)', english: 'The mouse is eaten by the cat.' },
                    { french: 'La police a arrêté le suspect. → Le suspect a été arrêté par la police. (passé composé)', english: 'The suspect was arrested by the police.' },
                    { french: 'On construisait le pont. → Le pont était construit. (imparfait)', english: 'The bridge was being built.' },
                    { french: 'Le jury condamnera l\'accusé. → L\'accusé sera condamné. (futur)', english: 'The accused will be condemned.' },
                    { french: 'Ce roman a été écrit par Balzac en 1835.', english: 'This novel was written by Balzac in 1835.' },
                ],
            },
            {
                title: 'Par vs De',
                explanation: 'Use par for physical, concrete, or one-time actions. Use de for states, feelings, habitual or descriptive situations.',
                examples: [
                    { french: 'La ville a été détruite par les bombes.', english: 'The city was destroyed by bombs. (par — physical action)' },
                    { french: 'Il est respecté de tous ses collègues.', english: 'He is respected by all his colleagues. (de — state)' },
                    { french: 'Elle est entourée de fleurs.', english: 'She is surrounded by flowers. (de — descriptive state)' },
                    { french: 'Le président a été applaudi par la foule.', english: 'The president was applauded by the crowd. (par — concrete action)' },
                ],
            },
            {
                title: 'Passive Across Tenses',
                explanation: 'Any tense of être can be used. The past participle always agrees with the subject.',
                examples: [
                    { french: 'Elle est invitée. (présent)', english: 'She is invited.' },
                    { french: 'Elle a été invitée. (passé composé)', english: 'She was invited.' },
                    { french: 'Elle sera invitée. (futur)', english: 'She will be invited.' },
                    { french: 'Elle aurait été invitée. (conditionnel passé)', english: 'She would have been invited.' },
                ],
            },
            {
                title: 'Avoiding the Passive',
                explanation: 'In spoken French, the passive is often avoided. Three common alternatives: on + active verb; a reflexive/pronominal construction; or simply restructuring.',
                examples: [
                    { french: 'On vous appellera demain.', english: 'You\'ll be called tomorrow. (on instead of passive)' },
                    { french: 'Cela se fait facilement.', english: 'That is done easily. (pronominal)' },
                    { french: 'Ce vin se boit frais.', english: 'This wine is drunk chilled. (pronominal)' },
                    { french: 'Ce livre se vend bien.', english: 'This book sells well. (pronominal)' },
                ],
            },
        ],
        exercises: [
            { sentence: "La souris est ___ par le chat.", answer: 'mangée', hint: 'passive présent; participe agrees with la souris (feminine)' },
            { sentence: "Le suspect a été arrêté ___ la police.", answer: 'par', hint: 'par for a concrete, one-time physical action' },
            { sentence: "Il est respecté ___ tous ses collègues.", answer: 'de', hint: 'de for a state or habitual relationship' },
            { sentence: "Elle est ___. (inviter, passive passé composé, feminine)", answer: 'invitée', hint: 'passive passé composé: a été + participe; feminine agreement' },
            { sentence: "Ce vin ___ boit frais.", answer: 'se', hint: 'pronominal construction avoids the passive' },
            { sentence: "___ vous appellera demain. (passive avoidance with on)", answer: 'On', hint: 'on + active verb instead of passive' },
        ],
    },
    {
        id: 'reported-speech',
        title: 'Le Discours Indirect',
        level: 'B2',
        description: 'Report what someone said, asked, or ordered — with the correct tense shifts',
        icon: '💭',
        color: '#D97706',
        sections: [
            {
                title: 'Statements (que)',
                explanation: 'Direct speech uses quotation marks. Indirect speech uses que. If the reporting verb is in the present, tenses stay the same. If reporting verb is in the past, tenses shift back.',
                examples: [
                    { french: 'Il dit : « Je suis fatigué. » → Il dit qu\'il est fatigué.', english: 'He says he is tired. (reporting verb présent — no shift)' },
                    { french: 'Il a dit : « Je suis fatigué. » → Il a dit qu\'il était fatigué.', english: 'He said he was tired. (reporting verb past — shift)' },
                    { french: 'Elle déclare : « J\'ai fini. » → Elle déclare qu\'elle a fini.', english: 'She declares that she has finished. (present reporting)' },
                    { french: 'Elle a déclaré : « J\'ai fini. » → Elle a déclaré qu\'elle avait fini.', english: 'She declared that she had finished. (past reporting)' },
                ],
            },
            {
                title: 'Tense Shifts (reporting verb in past)',
                explanation: 'When the reporting verb is past, tenses shift back one step.',
                examples: [
                    { french: 'présent → imparfait: « Il travaille. » → Il a dit qu\'il travaillait.', english: 'He said he was working.' },
                    { french: 'passé composé → plus-que-parfait: « J\'ai mangé. » → Il a dit qu\'il avait mangé.', english: 'He said he had eaten.' },
                    { french: 'futur simple → conditionnel présent: « Je viendrai. » → Il a dit qu\'il viendrait.', english: 'He said he would come.' },
                    { french: 'imparfait stays imparfait: « Elle dormait. » → Il a dit qu\'elle dormait.', english: 'He said she was sleeping.' },
                    { french: 'futur antérieur → conditionnel passé: « J\'aurai fini. » → Il a dit qu\'il aurait fini.', english: 'He said he would have finished.' },
                    { french: 'conditionnel présent stays: « Je voudrais. » → Il a dit qu\'il voudrait.', english: 'He said he would like.' },
                ],
            },
            {
                title: 'Yes/No Questions (si)',
                explanation: 'Yes/no questions in indirect speech use si (whether). Est-ce que is dropped.',
                examples: [
                    { french: 'Il a demandé : « Tu viens ? » → Il a demandé si elle venait.', english: 'He asked if she was coming.' },
                    { french: 'Elle voulait savoir : « Est-ce qu\'il a réussi ? » → Elle voulait savoir s\'il avait réussi.', english: 'She wanted to know if he had succeeded.' },
                    { french: 'Je me demande si c\'est vrai.', english: 'I wonder whether it\'s true.' },
                ],
            },
            {
                title: 'Wh- Questions',
                explanation: 'Question words are kept. Qu\'est-ce que becomes ce que. Qu\'est-ce qui becomes ce qui. Inversion is dropped.',
                examples: [
                    { french: '« Où vas-tu ? » → Il a demandé où elle allait.', english: 'He asked where she was going.' },
                    { french: '« Comment t\'appelles-tu ? » → Il a demandé comment elle s\'appelait.', english: 'He asked what her name was.' },
                    { french: '« Qu\'est-ce que tu veux ? » → Il a demandé ce qu\'elle voulait.', english: 'He asked what she wanted.' },
                    { french: '« Qu\'est-ce qui se passe ? » → Il a demandé ce qui se passait.', english: 'He asked what was happening.' },
                ],
            },
            {
                title: 'Commands (de + infinitive)',
                explanation: 'Direct commands become de + infinitive in indirect speech.',
                examples: [
                    { french: '« Pars ! » → Elle lui a dit de partir.', english: 'She told him to leave.' },
                    { french: '« Ne fais pas ça ! » → Il lui a dit de ne pas faire ça.', english: 'He told her not to do that.' },
                    { french: '« Asseyez-vous ! » → Il nous a demandé de nous asseoir.', english: 'He asked us to sit down.' },
                ],
            },
        ],
        exercises: [
            { sentence: "Il a dit qu'il ___. (travailler, imparfait, tense shift)", answer: 'travaillait', hint: 'présent → imparfait after past reporting verb' },
            { sentence: "Il a dit qu'il ___ mangé. (avoir, conditionnel, tense shift from futur)", answer: 'avait', hint: 'passé composé → plus-que-parfait after past reporting verb' },
            { sentence: "Il a demandé ___ elle venait.", answer: 'si', hint: 'indirect yes/no question uses si' },
            { sentence: "Il a demandé où elle ___. (aller, imparfait)", answer: 'allait', hint: 'wh-question indirect speech, tense shifts back' },
            { sentence: "Elle lui a dit de ___. (partir)", answer: 'partir', hint: 'indirect command: dire de + infinitif' },
            { sentence: "Il a demandé ce qu'elle ___. (vouloir, imparfait)", answer: 'voulait', hint: "Qu'est-ce que → ce que; tense shifts back to imparfait" },
        ],
    },
    {
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

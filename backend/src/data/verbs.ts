export interface ConjugationRow {
    sujet: string;
    present: string;
    passeCompose: string;
    imparfait: string;
    futurSimple: string;
}

export interface VerbEntry {
    id: string;
    infinitive: string;
    translation: string;
    type: string;
    color: string;
    rows: ConjugationRow[];
}

export interface VerbGroup {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
}

export const verbGroups: Record<string, VerbGroup> = {
    'regular-verbs': {
        id: 'regular-verbs',
        title: 'Regular Verbs',
        description: 'Conjugation patterns for regular -ER, -IR, and -RE verbs',
        icon: '📝',
        color: '#059669',
    },
    'irregular-verbs': {
        id: 'irregular-verbs',
        title: 'Irregular Verbs',
        description: 'Master the most common irregular verb forms',
        icon: '⚡',
        color: '#DC2626',
    },
};

export const verbsData: Record<string, VerbEntry[]> = {
    'regular-verbs': [
        {
            id: 'parler',
            infinitive: 'parler',
            translation: 'to speak',
            type: '-ER',
            color: '#059669',
            rows: [
                { sujet: 'je',        present: 'parle',   passeCompose: 'ai parlé',    imparfait: 'parlais',   futurSimple: 'parlerai'  },
                { sujet: 'tu',        present: 'parles',  passeCompose: 'as parlé',    imparfait: 'parlais',   futurSimple: 'parleras'  },
                { sujet: 'il/elle',   present: 'parle',   passeCompose: 'a parlé',     imparfait: 'parlait',   futurSimple: 'parlera'   },
                { sujet: 'nous',      present: 'parlons', passeCompose: 'avons parlé', imparfait: 'parlions',  futurSimple: 'parlerons' },
                { sujet: 'vous',      present: 'parlez',  passeCompose: 'avez parlé',  imparfait: 'parliez',   futurSimple: 'parlerez'  },
                { sujet: 'ils/elles', present: 'parlent', passeCompose: 'ont parlé',   imparfait: 'parlaient', futurSimple: 'parleront' },
            ],
        },
        {
            id: 'manger',
            infinitive: 'manger',
            translation: 'to eat',
            type: '-ER',
            color: '#059669',
            rows: [
                { sujet: 'je',        present: 'mange',    passeCompose: 'ai mangé',    imparfait: 'mangeais',   futurSimple: 'mangerai'  },
                { sujet: 'tu',        present: 'manges',   passeCompose: 'as mangé',    imparfait: 'mangeais',   futurSimple: 'mangeras'  },
                { sujet: 'il/elle',   present: 'mange',    passeCompose: 'a mangé',     imparfait: 'mangeait',   futurSimple: 'mangera'   },
                { sujet: 'nous',      present: 'mangeons', passeCompose: 'avons mangé', imparfait: 'mangions',   futurSimple: 'mangerons' },
                { sujet: 'vous',      present: 'mangez',   passeCompose: 'avez mangé',  imparfait: 'mangiez',    futurSimple: 'mangerez'  },
                { sujet: 'ils/elles', present: 'mangent',  passeCompose: 'ont mangé',   imparfait: 'mangeaient', futurSimple: 'mangeront' },
            ],
        },
        {
            id: 'aimer',
            infinitive: 'aimer',
            translation: 'to like / love',
            type: '-ER',
            color: '#059669',
            rows: [
                { sujet: 'je',        present: 'aime',   passeCompose: 'ai aimé',    imparfait: 'aimais',   futurSimple: 'aimerai'  },
                { sujet: 'tu',        present: 'aimes',  passeCompose: 'as aimé',    imparfait: 'aimais',   futurSimple: 'aimeras'  },
                { sujet: 'il/elle',   present: 'aime',   passeCompose: 'a aimé',     imparfait: 'aimait',   futurSimple: 'aimera'   },
                { sujet: 'nous',      present: 'aimons', passeCompose: 'avons aimé', imparfait: 'aimions',  futurSimple: 'aimerons' },
                { sujet: 'vous',      present: 'aimez',  passeCompose: 'avez aimé',  imparfait: 'aimiez',   futurSimple: 'aimerez'  },
                { sujet: 'ils/elles', present: 'aiment', passeCompose: 'ont aimé',   imparfait: 'aimaient', futurSimple: 'aimeront' },
            ],
        },
        {
            id: 'travailler',
            infinitive: 'travailler',
            translation: 'to work',
            type: '-ER',
            color: '#059669',
            rows: [
                { sujet: 'je',        present: 'travaille',   passeCompose: 'ai travaillé',    imparfait: 'travaillais',   futurSimple: 'travaillerai'  },
                { sujet: 'tu',        present: 'travailles',  passeCompose: 'as travaillé',    imparfait: 'travaillais',   futurSimple: 'travailleras'  },
                { sujet: 'il/elle',   present: 'travaille',   passeCompose: 'a travaillé',     imparfait: 'travaillait',   futurSimple: 'travaillera'   },
                { sujet: 'nous',      present: 'travaillons', passeCompose: 'avons travaillé', imparfait: 'travaillions',  futurSimple: 'travaillerons' },
                { sujet: 'vous',      present: 'travaillez',  passeCompose: 'avez travaillé',  imparfait: 'travailliez',   futurSimple: 'travaillerez'  },
                { sujet: 'ils/elles', present: 'travaillent', passeCompose: 'ont travaillé',   imparfait: 'travaillaient', futurSimple: 'travailleront' },
            ],
        },
        {
            id: 'habiter',
            infinitive: 'habiter',
            translation: 'to live / reside',
            type: '-ER',
            color: '#059669',
            rows: [
                { sujet: 'je',        present: 'habite',   passeCompose: 'ai habité',    imparfait: 'habitais',   futurSimple: 'habiterai'  },
                { sujet: 'tu',        present: 'habites',  passeCompose: 'as habité',    imparfait: 'habitais',   futurSimple: 'habiteras'  },
                { sujet: 'il/elle',   present: 'habite',   passeCompose: 'a habité',     imparfait: 'habitait',   futurSimple: 'habitera'   },
                { sujet: 'nous',      present: 'habitons', passeCompose: 'avons habité', imparfait: 'habitions',  futurSimple: 'habiterons' },
                { sujet: 'vous',      present: 'habitez',  passeCompose: 'avez habité',  imparfait: 'habitiez',   futurSimple: 'habiterez'  },
                { sujet: 'ils/elles', present: 'habitent', passeCompose: 'ont habité',   imparfait: 'habitaient', futurSimple: 'habiteront' },
            ],
        },
        {
            id: 'regarder',
            infinitive: 'regarder',
            translation: 'to watch / look at',
            type: '-ER',
            color: '#059669',
            rows: [
                { sujet: 'je',        present: 'regarde',   passeCompose: 'ai regardé',    imparfait: 'regardais',   futurSimple: 'regarderai'  },
                { sujet: 'tu',        present: 'regardes',  passeCompose: 'as regardé',    imparfait: 'regardais',   futurSimple: 'regarderas'  },
                { sujet: 'il/elle',   present: 'regarde',   passeCompose: 'a regardé',     imparfait: 'regardait',   futurSimple: 'regardera'   },
                { sujet: 'nous',      present: 'regardons', passeCompose: 'avons regardé', imparfait: 'regardions',  futurSimple: 'regarderons' },
                { sujet: 'vous',      present: 'regardez',  passeCompose: 'avez regardé',  imparfait: 'regardiez',   futurSimple: 'regarderez'  },
                { sujet: 'ils/elles', present: 'regardent', passeCompose: 'ont regardé',   imparfait: 'regardaient', futurSimple: 'regarderont' },
            ],
        },
        {
            id: 'finir',
            infinitive: 'finir',
            translation: 'to finish',
            type: '-IR',
            color: '#0891B2',
            rows: [
                { sujet: 'je',        present: 'finis',     passeCompose: 'ai fini',    imparfait: 'finissais',   futurSimple: 'finirai'  },
                { sujet: 'tu',        present: 'finis',     passeCompose: 'as fini',    imparfait: 'finissais',   futurSimple: 'finiras'  },
                { sujet: 'il/elle',   present: 'finit',     passeCompose: 'a fini',     imparfait: 'finissait',   futurSimple: 'finira'   },
                { sujet: 'nous',      present: 'finissons', passeCompose: 'avons fini', imparfait: 'finissions',  futurSimple: 'finirons' },
                { sujet: 'vous',      present: 'finissez',  passeCompose: 'avez fini',  imparfait: 'finissiez',   futurSimple: 'finirez'  },
                { sujet: 'ils/elles', present: 'finissent', passeCompose: 'ont fini',   imparfait: 'finissaient', futurSimple: 'finiront' },
            ],
        },
        {
            id: 'choisir',
            infinitive: 'choisir',
            translation: 'to choose',
            type: '-IR',
            color: '#0891B2',
            rows: [
                { sujet: 'je',        present: 'choisis',     passeCompose: 'ai choisi',    imparfait: 'choisissais',   futurSimple: 'choisirai'  },
                { sujet: 'tu',        present: 'choisis',     passeCompose: 'as choisi',    imparfait: 'choisissais',   futurSimple: 'choisiras'  },
                { sujet: 'il/elle',   present: 'choisit',     passeCompose: 'a choisi',     imparfait: 'choisissait',   futurSimple: 'choisira'   },
                { sujet: 'nous',      present: 'choisissons', passeCompose: 'avons choisi', imparfait: 'choisissions',  futurSimple: 'choisirons' },
                { sujet: 'vous',      present: 'choisissez',  passeCompose: 'avez choisi',  imparfait: 'choisissiez',   futurSimple: 'choisirez'  },
                { sujet: 'ils/elles', present: 'choisissent', passeCompose: 'ont choisi',   imparfait: 'choisissaient', futurSimple: 'choisiront' },
            ],
        },
        {
            id: 'grandir',
            infinitive: 'grandir',
            translation: 'to grow',
            type: '-IR',
            color: '#0891B2',
            rows: [
                { sujet: 'je',        present: 'grandis',     passeCompose: 'ai grandi',    imparfait: 'grandissais',   futurSimple: 'grandirai'  },
                { sujet: 'tu',        present: 'grandis',     passeCompose: 'as grandi',    imparfait: 'grandissais',   futurSimple: 'grandiras'  },
                { sujet: 'il/elle',   present: 'grandit',     passeCompose: 'a grandi',     imparfait: 'grandissait',   futurSimple: 'grandira'   },
                { sujet: 'nous',      present: 'grandissons', passeCompose: 'avons grandi', imparfait: 'grandissions',  futurSimple: 'grandirons' },
                { sujet: 'vous',      present: 'grandissez',  passeCompose: 'avez grandi',  imparfait: 'grandissiez',   futurSimple: 'grandirez'  },
                { sujet: 'ils/elles', present: 'grandissent', passeCompose: 'ont grandi',   imparfait: 'grandissaient', futurSimple: 'grandiront' },
            ],
        },
        {
            id: 'reussir',
            infinitive: 'réussir',
            translation: 'to succeed',
            type: '-IR',
            color: '#0891B2',
            rows: [
                { sujet: 'je',        present: 'réussis',     passeCompose: 'ai réussi',    imparfait: 'réussissais',   futurSimple: 'réussirai'  },
                { sujet: 'tu',        present: 'réussis',     passeCompose: 'as réussi',    imparfait: 'réussissais',   futurSimple: 'réussiras'  },
                { sujet: 'il/elle',   present: 'réussit',     passeCompose: 'a réussi',     imparfait: 'réussissait',   futurSimple: 'réussira'   },
                { sujet: 'nous',      present: 'réussissons', passeCompose: 'avons réussi', imparfait: 'réussissions',  futurSimple: 'réussirons' },
                { sujet: 'vous',      present: 'réussissez',  passeCompose: 'avez réussi',  imparfait: 'réussissiez',   futurSimple: 'réussirez'  },
                { sujet: 'ils/elles', present: 'réussissent', passeCompose: 'ont réussi',   imparfait: 'réussissaient', futurSimple: 'réussiront' },
            ],
        },
        {
            id: 'vendre',
            infinitive: 'vendre',
            translation: 'to sell',
            type: '-RE',
            color: '#D97706',
            rows: [
                { sujet: 'je',        present: 'vends',   passeCompose: 'ai vendu',    imparfait: 'vendais',   futurSimple: 'vendrai'  },
                { sujet: 'tu',        present: 'vends',   passeCompose: 'as vendu',    imparfait: 'vendais',   futurSimple: 'vendras'  },
                { sujet: 'il/elle',   present: 'vend',    passeCompose: 'a vendu',     imparfait: 'vendait',   futurSimple: 'vendra'   },
                { sujet: 'nous',      present: 'vendons', passeCompose: 'avons vendu', imparfait: 'vendions',  futurSimple: 'vendrons' },
                { sujet: 'vous',      present: 'vendez',  passeCompose: 'avez vendu',  imparfait: 'vendiez',   futurSimple: 'vendrez'  },
                { sujet: 'ils/elles', present: 'vendent', passeCompose: 'ont vendu',   imparfait: 'vendaient', futurSimple: 'vendront' },
            ],
        },
        {
            id: 'attendre',
            infinitive: 'attendre',
            translation: 'to wait',
            type: '-RE',
            color: '#D97706',
            rows: [
                { sujet: 'je',        present: 'attends',   passeCompose: 'ai attendu',    imparfait: 'attendais',   futurSimple: 'attendrai'  },
                { sujet: 'tu',        present: 'attends',   passeCompose: 'as attendu',    imparfait: 'attendais',   futurSimple: 'attendras'  },
                { sujet: 'il/elle',   present: 'attend',    passeCompose: 'a attendu',     imparfait: 'attendait',   futurSimple: 'attendra'   },
                { sujet: 'nous',      present: 'attendons', passeCompose: 'avons attendu', imparfait: 'attendions',  futurSimple: 'attendrons' },
                { sujet: 'vous',      present: 'attendez',  passeCompose: 'avez attendu',  imparfait: 'attendiez',   futurSimple: 'attendrez'  },
                { sujet: 'ils/elles', present: 'attendent', passeCompose: 'ont attendu',   imparfait: 'attendaient', futurSimple: 'attendront' },
            ],
        },
        {
            id: 'repondre',
            infinitive: 'répondre',
            translation: 'to answer',
            type: '-RE',
            color: '#D97706',
            rows: [
                { sujet: 'je',        present: 'réponds',   passeCompose: 'ai répondu',    imparfait: 'répondais',   futurSimple: 'répondrai'  },
                { sujet: 'tu',        present: 'réponds',   passeCompose: 'as répondu',    imparfait: 'répondais',   futurSimple: 'répondras'  },
                { sujet: 'il/elle',   present: 'répond',    passeCompose: 'a répondu',     imparfait: 'répondait',   futurSimple: 'répondra'   },
                { sujet: 'nous',      present: 'répondons', passeCompose: 'avons répondu', imparfait: 'répondions',  futurSimple: 'répondrons' },
                { sujet: 'vous',      present: 'répondez',  passeCompose: 'avez répondu',  imparfait: 'répondiez',   futurSimple: 'répondrez'  },
                { sujet: 'ils/elles', present: 'répondent', passeCompose: 'ont répondu',   imparfait: 'répondaient', futurSimple: 'répondront' },
            ],
        },
        {
            id: 'entendre',
            infinitive: 'entendre',
            translation: 'to hear',
            type: '-RE',
            color: '#D97706',
            rows: [
                { sujet: 'je',        present: 'entends',   passeCompose: 'ai entendu',    imparfait: 'entendais',   futurSimple: 'entendrai'  },
                { sujet: 'tu',        present: 'entends',   passeCompose: 'as entendu',    imparfait: 'entendais',   futurSimple: 'entendras'  },
                { sujet: 'il/elle',   present: 'entend',    passeCompose: 'a entendu',     imparfait: 'entendait',   futurSimple: 'entendra'   },
                { sujet: 'nous',      present: 'entendons', passeCompose: 'avons entendu', imparfait: 'entendions',  futurSimple: 'entendrons' },
                { sujet: 'vous',      present: 'entendez',  passeCompose: 'avez entendu',  imparfait: 'entendiez',   futurSimple: 'entendrez'  },
                { sujet: 'ils/elles', present: 'entendent', passeCompose: 'ont entendu',   imparfait: 'entendaient', futurSimple: 'entendront' },
            ],
        },
    ],
    'irregular-verbs': [
        {
            id: 'prendre',
            infinitive: 'prendre',
            translation: 'to take',
            type: 'Irregular',
            color: '#DC2626',
            rows: [
                { sujet: 'je',        present: 'prends',   passeCompose: 'ai pris',    imparfait: 'prenais',   futurSimple: 'prendrai'  },
                { sujet: 'tu',        present: 'prends',   passeCompose: 'as pris',    imparfait: 'prenais',   futurSimple: 'prendras'  },
                { sujet: 'il/elle',   present: 'prend',    passeCompose: 'a pris',     imparfait: 'prenait',   futurSimple: 'prendra'   },
                { sujet: 'nous',      present: 'prenons',  passeCompose: 'avons pris', imparfait: 'prenions',  futurSimple: 'prendrons' },
                { sujet: 'vous',      present: 'prenez',   passeCompose: 'avez pris',  imparfait: 'preniez',   futurSimple: 'prendrez'  },
                { sujet: 'ils/elles', present: 'prennent', passeCompose: 'ont pris',   imparfait: 'prenaient', futurSimple: 'prendront' },
            ],
        },
        {
            id: 'vouloir',
            infinitive: 'vouloir',
            translation: 'to want',
            type: 'Irregular',
            color: '#DC2626',
            rows: [
                { sujet: 'je',        present: 'veux',    passeCompose: 'ai voulu',    imparfait: 'voulais',   futurSimple: 'voudrai'  },
                { sujet: 'tu',        present: 'veux',    passeCompose: 'as voulu',    imparfait: 'voulais',   futurSimple: 'voudras'  },
                { sujet: 'il/elle',   present: 'veut',    passeCompose: 'a voulu',     imparfait: 'voulait',   futurSimple: 'voudra'   },
                { sujet: 'nous',      present: 'voulons', passeCompose: 'avons voulu', imparfait: 'voulions',  futurSimple: 'voudrons' },
                { sujet: 'vous',      present: 'voulez',  passeCompose: 'avez voulu',  imparfait: 'vouliez',   futurSimple: 'voudrez'  },
                { sujet: 'ils/elles', present: 'veulent', passeCompose: 'ont voulu',   imparfait: 'voulaient', futurSimple: 'voudront' },
            ],
        },
        {
            id: 'pouvoir',
            infinitive: 'pouvoir',
            translation: 'to be able to / can',
            type: 'Irregular',
            color: '#DC2626',
            rows: [
                { sujet: 'je',        present: 'peux',    passeCompose: 'ai pu',    imparfait: 'pouvais',   futurSimple: 'pourrai'  },
                { sujet: 'tu',        present: 'peux',    passeCompose: 'as pu',    imparfait: 'pouvais',   futurSimple: 'pourras'  },
                { sujet: 'il/elle',   present: 'peut',    passeCompose: 'a pu',     imparfait: 'pouvait',   futurSimple: 'pourra'   },
                { sujet: 'nous',      present: 'pouvons', passeCompose: 'avons pu', imparfait: 'pouvions',  futurSimple: 'pourrons' },
                { sujet: 'vous',      present: 'pouvez',  passeCompose: 'avez pu',  imparfait: 'pouviez',   futurSimple: 'pourrez'  },
                { sujet: 'ils/elles', present: 'peuvent', passeCompose: 'ont pu',   imparfait: 'pouvaient', futurSimple: 'pourront' },
            ],
        },
        {
            id: 'savoir',
            infinitive: 'savoir',
            translation: 'to know',
            type: 'Irregular',
            color: '#DC2626',
            rows: [
                { sujet: 'je',        present: 'sais',   passeCompose: 'ai su',    imparfait: 'savais',   futurSimple: 'saurai'  },
                { sujet: 'tu',        present: 'sais',   passeCompose: 'as su',    imparfait: 'savais',   futurSimple: 'sauras'  },
                { sujet: 'il/elle',   present: 'sait',   passeCompose: 'a su',     imparfait: 'savait',   futurSimple: 'saura'   },
                { sujet: 'nous',      present: 'savons', passeCompose: 'avons su', imparfait: 'savions',  futurSimple: 'saurons' },
                { sujet: 'vous',      present: 'savez',  passeCompose: 'avez su',  imparfait: 'saviez',   futurSimple: 'saurez'  },
                { sujet: 'ils/elles', present: 'savent', passeCompose: 'ont su',   imparfait: 'savaient', futurSimple: 'sauront' },
            ],
        },
        {
            id: 'devoir',
            infinitive: 'devoir',
            translation: 'to have to / must',
            type: 'Irregular',
            color: '#DC2626',
            rows: [
                { sujet: 'je',        present: 'dois',    passeCompose: 'ai dû',    imparfait: 'devais',   futurSimple: 'devrai'  },
                { sujet: 'tu',        present: 'dois',    passeCompose: 'as dû',    imparfait: 'devais',   futurSimple: 'devras'  },
                { sujet: 'il/elle',   present: 'doit',    passeCompose: 'a dû',     imparfait: 'devait',   futurSimple: 'devra'   },
                { sujet: 'nous',      present: 'devons',  passeCompose: 'avons dû', imparfait: 'devions',  futurSimple: 'devrons' },
                { sujet: 'vous',      present: 'devez',   passeCompose: 'avez dû',  imparfait: 'deviez',   futurSimple: 'devrez'  },
                { sujet: 'ils/elles', present: 'doivent', passeCompose: 'ont dû',   imparfait: 'devaient', futurSimple: 'devront' },
            ],
        },
        {
            id: 'partir',
            infinitive: 'partir',
            translation: 'to leave',
            type: 'Irregular',
            color: '#DC2626',
            rows: [
                { sujet: 'je',        present: 'pars',    passeCompose: 'suis parti(e)',    imparfait: 'partais',   futurSimple: 'partirai'  },
                { sujet: 'tu',        present: 'pars',    passeCompose: 'es parti(e)',      imparfait: 'partais',   futurSimple: 'partiras'  },
                { sujet: 'il/elle',   present: 'part',    passeCompose: 'est parti(e)',     imparfait: 'partait',   futurSimple: 'partira'   },
                { sujet: 'nous',      present: 'partons', passeCompose: 'sommes parti(e)s', imparfait: 'partions',  futurSimple: 'partirons' },
                { sujet: 'vous',      present: 'partez',  passeCompose: 'êtes parti(e)s',  imparfait: 'partiez',   futurSimple: 'partirez'  },
                { sujet: 'ils/elles', present: 'partent', passeCompose: 'sont parti(e)s',  imparfait: 'partaient', futurSimple: 'partiront' },
            ],
        },
        {
            id: 'mettre',
            infinitive: 'mettre',
            translation: 'to put',
            type: 'Irregular',
            color: '#DC2626',
            rows: [
                { sujet: 'je',        present: 'mets',    passeCompose: 'ai mis',    imparfait: 'mettais',   futurSimple: 'mettrai'  },
                { sujet: 'tu',        present: 'mets',    passeCompose: 'as mis',    imparfait: 'mettais',   futurSimple: 'mettras'  },
                { sujet: 'il/elle',   present: 'met',     passeCompose: 'a mis',     imparfait: 'mettait',   futurSimple: 'mettra'   },
                { sujet: 'nous',      present: 'mettons', passeCompose: 'avons mis', imparfait: 'mettions',  futurSimple: 'mettrons' },
                { sujet: 'vous',      present: 'mettez',  passeCompose: 'avez mis',  imparfait: 'mettiez',   futurSimple: 'mettrez'  },
                { sujet: 'ils/elles', present: 'mettent', passeCompose: 'ont mis',   imparfait: 'mettaient', futurSimple: 'mettront' },
            ],
        },
        {
            id: 'dire',
            infinitive: 'dire',
            translation: 'to say',
            type: 'Irregular',
            color: '#DC2626',
            rows: [
                { sujet: 'je',        present: 'dis',    passeCompose: 'ai dit',    imparfait: 'disais',   futurSimple: 'dirai'  },
                { sujet: 'tu',        present: 'dis',    passeCompose: 'as dit',    imparfait: 'disais',   futurSimple: 'diras'  },
                { sujet: 'il/elle',   present: 'dit',    passeCompose: 'a dit',     imparfait: 'disait',   futurSimple: 'dira'   },
                { sujet: 'nous',      present: 'disons', passeCompose: 'avons dit', imparfait: 'disions',  futurSimple: 'dirons' },
                { sujet: 'vous',      present: 'dites',  passeCompose: 'avez dit',  imparfait: 'disiez',   futurSimple: 'direz'  },
                { sujet: 'ils/elles', present: 'disent', passeCompose: 'ont dit',   imparfait: 'disaient', futurSimple: 'diront' },
            ],
        },
    ],
};

export const verbById: Record<string, VerbEntry> = Object.fromEntries(
    Object.values(verbsData).flat().map(v => [v.id, v])
);

export const verbGroupMap: Record<string, string> = Object.fromEntries(
    Object.entries(verbsData).flatMap(([groupId, verbs]) =>
        verbs.map(v => [v.id, groupId])
    )
);

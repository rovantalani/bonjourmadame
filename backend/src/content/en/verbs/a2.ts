import type { HelperVerbEN, VerbEntry, VerbGroup } from '../../../types/verbs';

export const verbGroupA2: VerbGroup = {
        id: 'a2',
        title: "A2 — L'Anglais du Quotidien",
        titleFR: "A2 — L'Anglais du Quotidien",
        description: 'Expand your verb range for real-world situations',
        descriptionFR: 'Élargissez votre répertoire pour les situations réelles',
        icon: '📗',
        color: '#059669',
    };

export const verbsA2: VerbEntry[] = [
        { level: 'A2', unit: 3,  id: 'dance',  infinitive: 'dance',  translation: 'danser',           type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'dance',   passeCompose: 'danced',    imparfait: 'am dancing',    futurSimple: 'will dance'   }, { sujet: 'he/she/it', present: 'dances',     passeCompose: 'danced',    imparfait: 'is dancing',    futurSimple: 'will dance'   }] },
        { level: 'A2', unit: 3,  id: 'swim',   infinitive: 'swim',   translation: 'nager',            type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'swim',    passeCompose: 'swam',      imparfait: 'am swimming',   futurSimple: 'will swim'    }, { sujet: 'he/she/it', present: 'swims',      passeCompose: 'swam',      imparfait: 'is swimming',   futurSimple: 'will swim'    }] },
        { level: 'A2', unit: 3,  id: 'travel', infinitive: 'travel', translation: 'voyager',          type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'travel',  passeCompose: 'travelled', imparfait: 'am travelling', futurSimple: 'will travel'  }, { sujet: 'he/she/it', present: 'travels',    passeCompose: 'travelled', imparfait: 'is travelling', futurSimple: 'will travel'  }] },
        { level: 'A2', unit: 3,  id: 'know',   infinitive: 'know',   translation: 'savoir / connaître', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'know',   passeCompose: 'knew',      imparfait: 'am knowing',    futurSimple: 'will know'    }, { sujet: 'he/she/it', present: 'knows',      passeCompose: 'knew',      imparfait: 'is knowing',    futurSimple: 'will know'    }] },
        { level: 'A2', unit: 3,  id: 'think',  infinitive: 'think',  translation: 'penser',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'think',   passeCompose: 'thought',   imparfait: 'am thinking',   futurSimple: 'will think'   }, { sujet: 'he/she/it', present: 'thinks',     passeCompose: 'thought',   imparfait: 'is thinking',   futurSimple: 'will think'   }] },
        { level: 'A2', unit: 3,  id: 'find',   infinitive: 'find',   translation: 'trouver',          type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'find',    passeCompose: 'found',     imparfait: 'am finding',    futurSimple: 'will find'    }, { sujet: 'he/she/it', present: 'finds',      passeCompose: 'found',     imparfait: 'is finding',    futurSimple: 'will find'    }] },
        { level: 'A2', unit: 3,  id: 'tell',   infinitive: 'tell',   translation: 'dire / raconter',  type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'tell',    passeCompose: 'told',      imparfait: 'am telling',    futurSimple: 'will tell'    }, { sujet: 'he/she/it', present: 'tells',      passeCompose: 'told',      imparfait: 'is telling',    futurSimple: 'will tell'    }] },
        { level: 'A2', unit: 3,  id: 'leave',  infinitive: 'leave',  translation: 'partir / laisser', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'leave',   passeCompose: 'left',      imparfait: 'am leaving',    futurSimple: 'will leave'   }, { sujet: 'he/she/it', present: 'leaves',     passeCompose: 'left',      imparfait: 'is leaving',    futurSimple: 'will leave'   }] },
        { level: 'A2', unit: 3,  id: 'buy',    infinitive: 'buy',    translation: 'acheter',          type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'buy',     passeCompose: 'bought',    imparfait: 'am buying',     futurSimple: 'will buy'     }, { sujet: 'he/she/it', present: 'buys',       passeCompose: 'bought',    imparfait: 'is buying',     futurSimple: 'will buy'     }] },
        { level: 'A2', unit: 3,  id: 'bring',  infinitive: 'bring',  translation: 'apporter / amener', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'bring',  passeCompose: 'brought',   imparfait: 'am bringing',   futurSimple: 'will bring'   }, { sujet: 'he/she/it', present: 'brings',     passeCompose: 'brought',   imparfait: 'is bringing',   futurSimple: 'will bring'   }] },
        { level: 'A2', unit: 3,  id: 'write',  infinitive: 'write',  translation: 'écrire',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'write',   passeCompose: 'wrote',     imparfait: 'am writing',    futurSimple: 'will write'   }, { sujet: 'he/she/it', present: 'writes',     passeCompose: 'wrote',     imparfait: 'is writing',    futurSimple: 'will write'   }] },
        { level: 'A2', unit: 3,  id: 'read',   infinitive: 'read',   translation: 'lire',             type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'read',    passeCompose: 'read',      imparfait: 'am reading',    futurSimple: 'will read'    }, { sujet: 'he/she/it', present: 'reads',      passeCompose: 'read',      imparfait: 'is reading',    futurSimple: 'will read'    }] },
        { level: 'A2', unit: 3,  id: 'speak',  infinitive: 'speak',  translation: 'parler',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'speak',   passeCompose: 'spoke',     imparfait: 'am speaking',   futurSimple: 'will speak'   }, { sujet: 'he/she/it', present: 'speaks',     passeCompose: 'spoke',     imparfait: 'is speaking',   futurSimple: 'will speak'   }] },
        { level: 'A2', unit: 3,  id: 'meet',   infinitive: 'meet',   translation: 'rencontrer',       type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'meet',    passeCompose: 'met',       imparfait: 'am meeting',    futurSimple: 'will meet'    }, { sujet: 'he/she/it', present: 'meets',      passeCompose: 'met',       imparfait: 'is meeting',    futurSimple: 'will meet'    }] },
        { level: 'A2', unit: 3,  id: 'feel',   infinitive: 'feel',   translation: 'ressentir',        type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'feel',    passeCompose: 'felt',      imparfait: 'am feeling',    futurSimple: 'will feel'    }, { sujet: 'he/she/it', present: 'feels',      passeCompose: 'felt',      imparfait: 'is feeling',    futurSimple: 'will feel'    }] },
        { level: 'A2', unit: 3,  id: 'lose',   infinitive: 'lose',   translation: 'perdre',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'lose',    passeCompose: 'lost',      imparfait: 'am losing',     futurSimple: 'will lose'    }, { sujet: 'he/she/it', present: 'loses',      passeCompose: 'lost',      imparfait: 'is losing',     futurSimple: 'will lose'    }] },
        { level: 'A2', unit: 3,  id: 'pay',    infinitive: 'pay',    translation: 'payer',            type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'pay',     passeCompose: 'paid',      imparfait: 'am paying',     futurSimple: 'will pay'     }, { sujet: 'he/she/it', present: 'pays',       passeCompose: 'paid',      imparfait: 'is paying',     futurSimple: 'will pay'     }] },
    ];

export const helpersA2: Record<string, HelperVerbEN> = {
    'to-do': {
        level: 'A2', unit: 2,
        title: 'To Do',
        translation: 'faire',
        color: '#EA580C',
        columns: ['Present Simple', 'Past Simple', 'Present Continuous', 'Future (will)'],
        rows: [
            { sujet: 'I',          present: 'do',   passeCompose: 'did', imparfait: 'am doing',   futurSimple: 'will do' },
            { sujet: 'you',        present: 'do',   passeCompose: 'did', imparfait: 'are doing',  futurSimple: 'will do' },
            { sujet: 'he/she/it',  present: 'does', passeCompose: 'did', imparfait: 'is doing',   futurSimple: 'will do' },
            { sujet: 'we',         present: 'do',   passeCompose: 'did', imparfait: 'are doing',  futurSimple: 'will do' },
            { sujet: 'you (pl.)',  present: 'do',   passeCompose: 'did', imparfait: 'are doing',  futurSimple: 'will do' },
            { sujet: 'they',       present: 'do',   passeCompose: 'did', imparfait: 'are doing',  futurSimple: 'will do' },
        ],
    },
};

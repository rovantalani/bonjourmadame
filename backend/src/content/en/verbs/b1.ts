import type { HelperVerbEN, VerbEntry, VerbGroup } from '../../../types/verbs';

export const verbGroupB1: VerbGroup = {
        id: 'b1',
        title: 'B1 — Construction de la Fluidité',
        titleFR: 'B1 — Construction de la Fluidité',
        description: 'Advanced verbs for fluent expression',
        descriptionFR: 'Verbes avancés pour une expression fluide',
        icon: '📘',
        color: '#0891B2',
    };

export const verbsB1: VerbEntry[] = [
        { level: 'B1', unit: 3,  id: 'keep',        infinitive: 'keep',        translation: 'garder',     type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'keep',        passeCompose: 'kept',       imparfait: 'am keeping',       futurSimple: 'will keep'       }, { sujet: 'he/she/it', present: 'keeps',       passeCompose: 'kept',       imparfait: 'is keeping',       futurSimple: 'will keep'       }] },
        { level: 'B1', unit: 3,  id: 'understand',  infinitive: 'understand',  translation: 'comprendre', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'understand',  passeCompose: 'understood', imparfait: 'am understanding', futurSimple: 'will understand' }, { sujet: 'he/she/it', present: 'understands', passeCompose: 'understood', imparfait: 'is understanding', futurSimple: 'will understand' }] },
        { level: 'B1', unit: 3,  id: 'believe',     infinitive: 'believe',     translation: 'croire',     type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'believe',     passeCompose: 'believed',   imparfait: 'am believing',     futurSimple: 'will believe'   }, { sujet: 'he/she/it', present: 'believes',    passeCompose: 'believed',   imparfait: 'is believing',     futurSimple: 'will believe'   }] },
        { level: 'B1', unit: 3,  id: 'choose',      infinitive: 'choose',      translation: 'choisir',    type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'choose',      passeCompose: 'chose',      imparfait: 'am choosing',      futurSimple: 'will choose'    }, { sujet: 'he/she/it', present: 'chooses',     passeCompose: 'chose',      imparfait: 'is choosing',      futurSimple: 'will choose'    }] },
        { level: 'B1', unit: 3,  id: 'grow',        infinitive: 'grow',        translation: 'grandir',    type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'grow',        passeCompose: 'grew',       imparfait: 'am growing',       futurSimple: 'will grow'      }, { sujet: 'he/she/it', present: 'grows',       passeCompose: 'grew',       imparfait: 'is growing',       futurSimple: 'will grow'      }] },
        { level: 'B1', unit: 3,  id: 'succeed',     infinitive: 'succeed',     translation: 'réussir',    type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'succeed',     passeCompose: 'succeeded',  imparfait: 'am succeeding',    futurSimple: 'will succeed'   }, { sujet: 'he/she/it', present: 'succeeds',    passeCompose: 'succeeded',  imparfait: 'is succeeding',    futurSimple: 'will succeed'   }] },
        { level: 'B1', unit: 3,  id: 'wait',        infinitive: 'wait',        translation: 'attendre',   type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'wait',        passeCompose: 'waited',     imparfait: 'am waiting',       futurSimple: 'will wait'      }, { sujet: 'he/she/it', present: 'waits',       passeCompose: 'waited',     imparfait: 'is waiting',       futurSimple: 'will wait'      }] },
        { level: 'B1', unit: 3,  id: 'answer',      infinitive: 'answer',      translation: 'répondre',   type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'answer',      passeCompose: 'answered',   imparfait: 'am answering',     futurSimple: 'will answer'    }, { sujet: 'he/she/it', present: 'answers',     passeCompose: 'answered',   imparfait: 'is answering',     futurSimple: 'will answer'    }] },
        { level: 'B1', unit: 3,  id: 'hear',        infinitive: 'hear',        translation: 'entendre',   type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'hear',        passeCompose: 'heard',      imparfait: 'am hearing',       futurSimple: 'will hear'      }, { sujet: 'he/she/it', present: 'hears',       passeCompose: 'heard',      imparfait: 'is hearing',       futurSimple: 'will hear'      }] },
        { level: 'B1', unit: 3,  id: 'leave-b1',    infinitive: 'leave',       translation: 'partir',     type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'leave',       passeCompose: 'left',       imparfait: 'am leaving',       futurSimple: 'will leave'     }, { sujet: 'he/she/it', present: 'leaves',      passeCompose: 'left',       imparfait: 'is leaving',       futurSimple: 'will leave'     }] },
    ];

export const helpersB1: Record<string, HelperVerbEN> = {
    'to-go': {
        level: 'B1', unit: 2,
        title: 'To Go',
        translation: 'aller',
        color: '#7C3AED',
        columns: ['Present Simple', 'Past Simple', 'Present Continuous', 'Future (will)'],
        rows: [
            { sujet: 'I',          present: 'go',   passeCompose: 'went', imparfait: 'am going',   futurSimple: 'will go' },
            { sujet: 'you',        present: 'go',   passeCompose: 'went', imparfait: 'are going',  futurSimple: 'will go' },
            { sujet: 'he/she/it',  present: 'goes', passeCompose: 'went', imparfait: 'is going',   futurSimple: 'will go' },
            { sujet: 'we',         present: 'go',   passeCompose: 'went', imparfait: 'are going',  futurSimple: 'will go' },
            { sujet: 'you (pl.)',  present: 'go',   passeCompose: 'went', imparfait: 'are going',  futurSimple: 'will go' },
            { sujet: 'they',       present: 'go',   passeCompose: 'went', imparfait: 'are going',  futurSimple: 'will go' },
        ],
    },
    'to-come': {
        level: 'B1', unit: 2,
        title: 'To Come',
        translation: 'venir',
        color: '#DC2626',
        columns: ['Present Simple', 'Past Simple', 'Present Continuous', 'Future (will)'],
        rows: [
            { sujet: 'I',          present: 'come',  passeCompose: 'came', imparfait: 'am coming',   futurSimple: 'will come' },
            { sujet: 'you',        present: 'come',  passeCompose: 'came', imparfait: 'are coming',  futurSimple: 'will come' },
            { sujet: 'he/she/it',  present: 'comes', passeCompose: 'came', imparfait: 'is coming',   futurSimple: 'will come' },
            { sujet: 'we',         present: 'come',  passeCompose: 'came', imparfait: 'are coming',  futurSimple: 'will come' },
            { sujet: 'you (pl.)',  present: 'come',  passeCompose: 'came', imparfait: 'are coming',  futurSimple: 'will come' },
            { sujet: 'they',       present: 'come',  passeCompose: 'came', imparfait: 'are coming',  futurSimple: 'will come' },
        ],
    },
};

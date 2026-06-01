import type { ConjugationRow, VerbGroup, VerbEntry } from './verbs';

export interface HelperVerbEN {
    title: string;
    translation: string;
    color: string;
    columns: readonly [string, string, string, string];
    rows: ConjugationRow[];
}

export const helperVerbsDataEN: Record<string, HelperVerbEN> = {
    'to-be': {
        title: 'To Be',
        translation: 'être',
        color: '#2563EB',
        columns: ['Present Simple', 'Past Simple', 'Present Continuous', 'Future (will)'],
        rows: [
            { sujet: 'I',          present: 'am',   passeCompose: 'was',  imparfait: 'am being',   futurSimple: 'will be'   },
            { sujet: 'you',        present: 'are',  passeCompose: 'were', imparfait: 'are being',  futurSimple: 'will be'   },
            { sujet: 'he/she/it',  present: 'is',   passeCompose: 'was',  imparfait: 'is being',   futurSimple: 'will be'   },
            { sujet: 'we',         present: 'are',  passeCompose: 'were', imparfait: 'are being',  futurSimple: 'will be'   },
            { sujet: 'you (pl.)',  present: 'are',  passeCompose: 'were', imparfait: 'are being',  futurSimple: 'will be'   },
            { sujet: 'they',       present: 'are',  passeCompose: 'were', imparfait: 'are being',  futurSimple: 'will be'   },
        ],
    },
    'to-have': {
        title: 'To Have',
        translation: 'avoir',
        color: '#16A34A',
        columns: ['Present Simple', 'Past Simple', 'Present Continuous', 'Future (will)'],
        rows: [
            { sujet: 'I',          present: 'have', passeCompose: 'had', imparfait: 'am having',   futurSimple: 'will have' },
            { sujet: 'you',        present: 'have', passeCompose: 'had', imparfait: 'are having',  futurSimple: 'will have' },
            { sujet: 'he/she/it',  present: 'has',  passeCompose: 'had', imparfait: 'is having',   futurSimple: 'will have' },
            { sujet: 'we',         present: 'have', passeCompose: 'had', imparfait: 'are having',  futurSimple: 'will have' },
            { sujet: 'you (pl.)',  present: 'have', passeCompose: 'had', imparfait: 'are having',  futurSimple: 'will have' },
            { sujet: 'they',       present: 'have', passeCompose: 'had', imparfait: 'are having',  futurSimple: 'will have' },
        ],
    },
    'to-do': {
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
    'to-go': {
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

export const verbGroupsEN: Record<string, VerbGroup> = {
    'a1': {
        id: 'a1',
        title: 'A1 — Les Bases',
        titleFR: 'A1 — Les Bases',
        description: 'Core verbs for everyday basics',
        descriptionFR: 'Verbes essentiels pour les situations quotidiennes',
        icon: '🌱',
        color: '#4338CA',
    },
    'a2': {
        id: 'a2',
        title: "A2 — L'Anglais du Quotidien",
        titleFR: "A2 — L'Anglais du Quotidien",
        description: 'Expand your verb range for real-world situations',
        descriptionFR: 'Élargissez votre répertoire pour les situations réelles',
        icon: '📗',
        color: '#059669',
    },
    'b1': {
        id: 'b1',
        title: 'B1 — Construction de la Fluidité',
        titleFR: 'B1 — Construction de la Fluidité',
        description: 'Advanced verbs for fluent expression',
        descriptionFR: 'Verbes avancés pour une expression fluide',
        icon: '📘',
        color: '#0891B2',
    },
    'b2': {
        id: 'b2',
        title: 'B2 — Upper Intermediate',
        titleFR: 'B2 — Intermédiaire supérieur',
        description: 'Complex verbs for near-fluent speakers',
        descriptionFR: 'Verbes complexes pour un niveau quasi courant',
        icon: '📙',
        color: '#D97706',
    },
    'c1': {
        id: 'c1',
        title: 'C1 — Advanced',
        titleFR: 'C1 — Avancé',
        description: 'Advanced and nuanced verbs',
        descriptionFR: 'Verbes avancés et nuancés',
        icon: '🔥',
        color: '#BE185D',
    },
    'c2': {
        id: 'c2',
        title: 'C2 — Mastery',
        titleFR: 'C2 — Maîtrise',
        description: 'Rare and archaic verbs for complete mastery',
        descriptionFR: 'Verbes rares et archaïques pour une maîtrise totale',
        icon: '👑',
        color: '#6D28D9',
    },
};

export const verbsDataEN: Record<string, VerbEntry[]> = {
    // ── A1 ── Regular + core Irregular
    'a1': [
        { id: 'walk',   infinitive: 'walk',   translation: 'marcher',          type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'walk',    passeCompose: 'walked',    imparfait: 'am walking',    futurSimple: 'will walk'    }, { sujet: 'he/she/it', present: 'walks',      passeCompose: 'walked',    imparfait: 'is walking',    futurSimple: 'will walk'    }] },
        { id: 'talk',   infinitive: 'talk',   translation: 'parler',           type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'talk',    passeCompose: 'talked',    imparfait: 'am talking',    futurSimple: 'will talk'    }, { sujet: 'he/she/it', present: 'talks',      passeCompose: 'talked',    imparfait: 'is talking',    futurSimple: 'will talk'    }] },
        { id: 'work',   infinitive: 'work',   translation: 'travailler',       type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'work',    passeCompose: 'worked',    imparfait: 'am working',    futurSimple: 'will work'    }, { sujet: 'he/she/it', present: 'works',      passeCompose: 'worked',    imparfait: 'is working',    futurSimple: 'will work'    }] },
        { id: 'play',   infinitive: 'play',   translation: 'jouer',            type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'play',    passeCompose: 'played',    imparfait: 'am playing',    futurSimple: 'will play'    }, { sujet: 'he/she/it', present: 'plays',      passeCompose: 'played',    imparfait: 'is playing',    futurSimple: 'will play'    }] },
        { id: 'finish', infinitive: 'finish', translation: 'finir',            type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'finish',  passeCompose: 'finished',  imparfait: 'am finishing',  futurSimple: 'will finish'  }, { sujet: 'he/she/it', present: 'finishes',   passeCompose: 'finished',  imparfait: 'is finishing',  futurSimple: 'will finish'  }] },
        { id: 'watch',  infinitive: 'watch',  translation: 'regarder',         type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'watch',   passeCompose: 'watched',   imparfait: 'am watching',   futurSimple: 'will watch'   }, { sujet: 'he/she/it', present: 'watches',    passeCompose: 'watched',   imparfait: 'is watching',   futurSimple: 'will watch'   }] },
        { id: 'listen', infinitive: 'listen', translation: 'écouter',          type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'listen',  passeCompose: 'listened',  imparfait: 'am listening',  futurSimple: 'will listen'  }, { sujet: 'he/she/it', present: 'listens',    passeCompose: 'listened',  imparfait: 'is listening',  futurSimple: 'will listen'  }] },
        { id: 'open',   infinitive: 'open',   translation: 'ouvrir',           type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'open',    passeCompose: 'opened',    imparfait: 'am opening',    futurSimple: 'will open'    }, { sujet: 'he/she/it', present: 'opens',      passeCompose: 'opened',    imparfait: 'is opening',    futurSimple: 'will open'    }] },
        { id: 'close',  infinitive: 'close',  translation: 'fermer',           type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'close',   passeCompose: 'closed',    imparfait: 'am closing',    futurSimple: 'will close'   }, { sujet: 'he/she/it', present: 'closes',     passeCompose: 'closed',    imparfait: 'is closing',    futurSimple: 'will close'   }] },
        { id: 'start',  infinitive: 'start',  translation: 'commencer',        type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'start',   passeCompose: 'started',   imparfait: 'am starting',   futurSimple: 'will start'   }, { sujet: 'he/she/it', present: 'starts',     passeCompose: 'started',   imparfait: 'is starting',   futurSimple: 'will start'   }] },
        { id: 'stop',   infinitive: 'stop',   translation: 'arrêter',          type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'stop',    passeCompose: 'stopped',   imparfait: 'am stopping',   futurSimple: 'will stop'    }, { sujet: 'he/she/it', present: 'stops',      passeCompose: 'stopped',   imparfait: 'is stopping',   futurSimple: 'will stop'    }] },
        { id: 'help',   infinitive: 'help',   translation: 'aider',            type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'help',    passeCompose: 'helped',    imparfait: 'am helping',    futurSimple: 'will help'    }, { sujet: 'he/she/it', present: 'helps',      passeCompose: 'helped',    imparfait: 'is helping',    futurSimple: 'will help'    }] },
        { id: 'want',   infinitive: 'want',   translation: 'vouloir',          type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'want',    passeCompose: 'wanted',    imparfait: 'am wanting',    futurSimple: 'will want'    }, { sujet: 'he/she/it', present: 'wants',      passeCompose: 'wanted',    imparfait: 'is wanting',    futurSimple: 'will want'    }] },
        { id: 'need',   infinitive: 'need',   translation: 'avoir besoin de',  type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'need',    passeCompose: 'needed',    imparfait: 'am needing',    futurSimple: 'will need'    }, { sujet: 'he/she/it', present: 'needs',      passeCompose: 'needed',    imparfait: 'is needing',    futurSimple: 'will need'    }] },
        { id: 'ask',    infinitive: 'ask',    translation: 'demander',         type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'ask',     passeCompose: 'asked',     imparfait: 'am asking',     futurSimple: 'will ask'     }, { sujet: 'he/she/it', present: 'asks',       passeCompose: 'asked',     imparfait: 'is asking',     futurSimple: 'will ask'     }] },
        { id: 'love',   infinitive: 'love',   translation: 'aimer',            type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'love',    passeCompose: 'loved',     imparfait: 'am loving',     futurSimple: 'will love'    }, { sujet: 'he/she/it', present: 'loves',      passeCompose: 'loved',     imparfait: 'is loving',     futurSimple: 'will love'    }] },
        { id: 'cook',   infinitive: 'cook',   translation: 'cuisiner',         type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'cook',    passeCompose: 'cooked',    imparfait: 'am cooking',    futurSimple: 'will cook'    }, { sujet: 'he/she/it', present: 'cooks',      passeCompose: 'cooked',    imparfait: 'is cooking',    futurSimple: 'will cook'    }] },
        { id: 'go',     infinitive: 'go',     translation: 'aller',            type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'go',      passeCompose: 'went',      imparfait: 'am going',      futurSimple: 'will go'      }, { sujet: 'he/she/it', present: 'goes',       passeCompose: 'went',      imparfait: 'is going',      futurSimple: 'will go'      }] },
        { id: 'come',   infinitive: 'come',   translation: 'venir',            type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'come',    passeCompose: 'came',      imparfait: 'am coming',     futurSimple: 'will come'    }, { sujet: 'he/she/it', present: 'comes',      passeCompose: 'came',      imparfait: 'is coming',     futurSimple: 'will come'    }] },
        { id: 'see',    infinitive: 'see',    translation: 'voir',             type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'see',     passeCompose: 'saw',       imparfait: 'am seeing',     futurSimple: 'will see'     }, { sujet: 'he/she/it', present: 'sees',       passeCompose: 'saw',       imparfait: 'is seeing',     futurSimple: 'will see'     }] },
        { id: 'get',    infinitive: 'get',    translation: 'obtenir / devenir', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'get',    passeCompose: 'got',       imparfait: 'am getting',    futurSimple: 'will get'     }, { sujet: 'he/she/it', present: 'gets',       passeCompose: 'got',       imparfait: 'is getting',    futurSimple: 'will get'     }] },
        { id: 'give',   infinitive: 'give',   translation: 'donner',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'give',    passeCompose: 'gave',      imparfait: 'am giving',     futurSimple: 'will give'    }, { sujet: 'he/she/it', present: 'gives',      passeCompose: 'gave',      imparfait: 'is giving',     futurSimple: 'will give'    }] },
        { id: 'take',   infinitive: 'take',   translation: 'prendre',          type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'take',    passeCompose: 'took',      imparfait: 'am taking',     futurSimple: 'will take'    }, { sujet: 'he/she/it', present: 'takes',      passeCompose: 'took',      imparfait: 'is taking',     futurSimple: 'will take'    }] },
        { id: 'say',    infinitive: 'say',    translation: 'dire',             type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'say',     passeCompose: 'said',      imparfait: 'am saying',     futurSimple: 'will say'     }, { sujet: 'he/she/it', present: 'says',       passeCompose: 'said',      imparfait: 'is saying',     futurSimple: 'will say'     }] },
        { id: 'make',   infinitive: 'make',   translation: 'faire / fabriquer', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'make',   passeCompose: 'made',      imparfait: 'am making',     futurSimple: 'will make'    }, { sujet: 'he/she/it', present: 'makes',      passeCompose: 'made',      imparfait: 'is making',     futurSimple: 'will make'    }] },
        { id: 'put',    infinitive: 'put',    translation: 'mettre / poser',   type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'put',     passeCompose: 'put',       imparfait: 'am putting',    futurSimple: 'will put'     }, { sujet: 'he/she/it', present: 'puts',       passeCompose: 'put',       imparfait: 'is putting',    futurSimple: 'will put'     }] },
        { id: 'run',    infinitive: 'run',    translation: 'courir',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'run',     passeCompose: 'ran',       imparfait: 'am running',    futurSimple: 'will run'     }, { sujet: 'he/she/it', present: 'runs',       passeCompose: 'ran',       imparfait: 'is running',    futurSimple: 'will run'     }] },
        { id: 'eat',    infinitive: 'eat',    translation: 'manger',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'eat',     passeCompose: 'ate',       imparfait: 'am eating',     futurSimple: 'will eat'     }, { sujet: 'he/she/it', present: 'eats',       passeCompose: 'ate',       imparfait: 'is eating',     futurSimple: 'will eat'     }] },
        { id: 'drink',  infinitive: 'drink',  translation: 'boire',            type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'drink',   passeCompose: 'drank',     imparfait: 'am drinking',   futurSimple: 'will drink'   }, { sujet: 'he/she/it', present: 'drinks',     passeCompose: 'drank',     imparfait: 'is drinking',   futurSimple: 'will drink'   }] },
        { id: 'sleep',  infinitive: 'sleep',  translation: 'dormir',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'sleep',   passeCompose: 'slept',     imparfait: 'am sleeping',   futurSimple: 'will sleep'   }, { sujet: 'he/she/it', present: 'sleeps',     passeCompose: 'slept',     imparfait: 'is sleeping',   futurSimple: 'will sleep'   }] },
    ],
    // ── A2 ── more Regular + irregular verbs
    'a2': [
        { id: 'dance',  infinitive: 'dance',  translation: 'danser',           type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'dance',   passeCompose: 'danced',    imparfait: 'am dancing',    futurSimple: 'will dance'   }, { sujet: 'he/she/it', present: 'dances',     passeCompose: 'danced',    imparfait: 'is dancing',    futurSimple: 'will dance'   }] },
        { id: 'swim',   infinitive: 'swim',   translation: 'nager',            type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'swim',    passeCompose: 'swam',      imparfait: 'am swimming',   futurSimple: 'will swim'    }, { sujet: 'he/she/it', present: 'swims',      passeCompose: 'swam',      imparfait: 'is swimming',   futurSimple: 'will swim'    }] },
        { id: 'travel', infinitive: 'travel', translation: 'voyager',          type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'travel',  passeCompose: 'travelled', imparfait: 'am travelling', futurSimple: 'will travel'  }, { sujet: 'he/she/it', present: 'travels',    passeCompose: 'travelled', imparfait: 'is travelling', futurSimple: 'will travel'  }] },
        { id: 'know',   infinitive: 'know',   translation: 'savoir / connaître', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'know',   passeCompose: 'knew',      imparfait: 'am knowing',    futurSimple: 'will know'    }, { sujet: 'he/she/it', present: 'knows',      passeCompose: 'knew',      imparfait: 'is knowing',    futurSimple: 'will know'    }] },
        { id: 'think',  infinitive: 'think',  translation: 'penser',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'think',   passeCompose: 'thought',   imparfait: 'am thinking',   futurSimple: 'will think'   }, { sujet: 'he/she/it', present: 'thinks',     passeCompose: 'thought',   imparfait: 'is thinking',   futurSimple: 'will think'   }] },
        { id: 'find',   infinitive: 'find',   translation: 'trouver',          type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'find',    passeCompose: 'found',     imparfait: 'am finding',    futurSimple: 'will find'    }, { sujet: 'he/she/it', present: 'finds',      passeCompose: 'found',     imparfait: 'is finding',    futurSimple: 'will find'    }] },
        { id: 'tell',   infinitive: 'tell',   translation: 'dire / raconter',  type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'tell',    passeCompose: 'told',      imparfait: 'am telling',    futurSimple: 'will tell'    }, { sujet: 'he/she/it', present: 'tells',      passeCompose: 'told',      imparfait: 'is telling',    futurSimple: 'will tell'    }] },
        { id: 'leave',  infinitive: 'leave',  translation: 'partir / laisser', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'leave',   passeCompose: 'left',      imparfait: 'am leaving',    futurSimple: 'will leave'   }, { sujet: 'he/she/it', present: 'leaves',     passeCompose: 'left',      imparfait: 'is leaving',    futurSimple: 'will leave'   }] },
        { id: 'buy',    infinitive: 'buy',    translation: 'acheter',          type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'buy',     passeCompose: 'bought',    imparfait: 'am buying',     futurSimple: 'will buy'     }, { sujet: 'he/she/it', present: 'buys',       passeCompose: 'bought',    imparfait: 'is buying',     futurSimple: 'will buy'     }] },
        { id: 'bring',  infinitive: 'bring',  translation: 'apporter / amener', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'bring',  passeCompose: 'brought',   imparfait: 'am bringing',   futurSimple: 'will bring'   }, { sujet: 'he/she/it', present: 'brings',     passeCompose: 'brought',   imparfait: 'is bringing',   futurSimple: 'will bring'   }] },
        { id: 'write',  infinitive: 'write',  translation: 'écrire',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'write',   passeCompose: 'wrote',     imparfait: 'am writing',    futurSimple: 'will write'   }, { sujet: 'he/she/it', present: 'writes',     passeCompose: 'wrote',     imparfait: 'is writing',    futurSimple: 'will write'   }] },
        { id: 'read',   infinitive: 'read',   translation: 'lire',             type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'read',    passeCompose: 'read',      imparfait: 'am reading',    futurSimple: 'will read'    }, { sujet: 'he/she/it', present: 'reads',      passeCompose: 'read',      imparfait: 'is reading',    futurSimple: 'will read'    }] },
        { id: 'speak',  infinitive: 'speak',  translation: 'parler',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'speak',   passeCompose: 'spoke',     imparfait: 'am speaking',   futurSimple: 'will speak'   }, { sujet: 'he/she/it', present: 'speaks',     passeCompose: 'spoke',     imparfait: 'is speaking',   futurSimple: 'will speak'   }] },
        { id: 'meet',   infinitive: 'meet',   translation: 'rencontrer',       type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'meet',    passeCompose: 'met',       imparfait: 'am meeting',    futurSimple: 'will meet'    }, { sujet: 'he/she/it', present: 'meets',      passeCompose: 'met',       imparfait: 'is meeting',    futurSimple: 'will meet'    }] },
        { id: 'feel',   infinitive: 'feel',   translation: 'ressentir',        type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'feel',    passeCompose: 'felt',      imparfait: 'am feeling',    futurSimple: 'will feel'    }, { sujet: 'he/she/it', present: 'feels',      passeCompose: 'felt',      imparfait: 'is feeling',    futurSimple: 'will feel'    }] },
        { id: 'lose',   infinitive: 'lose',   translation: 'perdre',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'lose',    passeCompose: 'lost',      imparfait: 'am losing',     futurSimple: 'will lose'    }, { sujet: 'he/she/it', present: 'loses',      passeCompose: 'lost',      imparfait: 'is losing',     futurSimple: 'will lose'    }] },
        { id: 'pay',    infinitive: 'pay',    translation: 'payer',            type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'pay',     passeCompose: 'paid',      imparfait: 'am paying',     futurSimple: 'will pay'     }, { sujet: 'he/she/it', present: 'pays',       passeCompose: 'paid',      imparfait: 'is paying',     futurSimple: 'will pay'     }] },
    ],
    // ── B1 ── advanced verbs
    'b1': [
        { id: 'keep',        infinitive: 'keep',        translation: 'garder',     type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'keep',        passeCompose: 'kept',       imparfait: 'am keeping',       futurSimple: 'will keep'       }, { sujet: 'he/she/it', present: 'keeps',       passeCompose: 'kept',       imparfait: 'is keeping',       futurSimple: 'will keep'       }] },
        { id: 'understand',  infinitive: 'understand',  translation: 'comprendre', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'understand',  passeCompose: 'understood', imparfait: 'am understanding', futurSimple: 'will understand' }, { sujet: 'he/she/it', present: 'understands', passeCompose: 'understood', imparfait: 'is understanding', futurSimple: 'will understand' }] },
        { id: 'believe',     infinitive: 'believe',     translation: 'croire',     type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'believe',     passeCompose: 'believed',   imparfait: 'am believing',     futurSimple: 'will believe'   }, { sujet: 'he/she/it', present: 'believes',    passeCompose: 'believed',   imparfait: 'is believing',     futurSimple: 'will believe'   }] },
        { id: 'choose',      infinitive: 'choose',      translation: 'choisir',    type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'choose',      passeCompose: 'chose',      imparfait: 'am choosing',      futurSimple: 'will choose'    }, { sujet: 'he/she/it', present: 'chooses',     passeCompose: 'chose',      imparfait: 'is choosing',      futurSimple: 'will choose'    }] },
        { id: 'grow',        infinitive: 'grow',        translation: 'grandir',    type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'grow',        passeCompose: 'grew',       imparfait: 'am growing',       futurSimple: 'will grow'      }, { sujet: 'he/she/it', present: 'grows',       passeCompose: 'grew',       imparfait: 'is growing',       futurSimple: 'will grow'      }] },
        { id: 'succeed',     infinitive: 'succeed',     translation: 'réussir',    type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'succeed',     passeCompose: 'succeeded',  imparfait: 'am succeeding',    futurSimple: 'will succeed'   }, { sujet: 'he/she/it', present: 'succeeds',    passeCompose: 'succeeded',  imparfait: 'is succeeding',    futurSimple: 'will succeed'   }] },
        { id: 'wait',        infinitive: 'wait',        translation: 'attendre',   type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'wait',        passeCompose: 'waited',     imparfait: 'am waiting',       futurSimple: 'will wait'      }, { sujet: 'he/she/it', present: 'waits',       passeCompose: 'waited',     imparfait: 'is waiting',       futurSimple: 'will wait'      }] },
        { id: 'answer',      infinitive: 'answer',      translation: 'répondre',   type: 'Regular',   color: '#059669', rows: [{ sujet: 'I', present: 'answer',      passeCompose: 'answered',   imparfait: 'am answering',     futurSimple: 'will answer'    }, { sujet: 'he/she/it', present: 'answers',     passeCompose: 'answered',   imparfait: 'is answering',     futurSimple: 'will answer'    }] },
        { id: 'hear',        infinitive: 'hear',        translation: 'entendre',   type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'hear',        passeCompose: 'heard',      imparfait: 'am hearing',       futurSimple: 'will hear'      }, { sujet: 'he/she/it', present: 'hears',       passeCompose: 'heard',      imparfait: 'is hearing',       futurSimple: 'will hear'      }] },
        { id: 'lose',        infinitive: 'lose',        translation: 'perdre',     type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'lose',        passeCompose: 'lost',       imparfait: 'am losing',        futurSimple: 'will lose'      }, { sujet: 'he/she/it', present: 'loses',       passeCompose: 'lost',       imparfait: 'is losing',        futurSimple: 'will lose'      }] },
        { id: 'leave-b1',    infinitive: 'leave',       translation: 'partir',     type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'leave',       passeCompose: 'left',       imparfait: 'am leaving',       futurSimple: 'will leave'     }, { sujet: 'he/she/it', present: 'leaves',      passeCompose: 'left',       imparfait: 'is leaving',       futurSimple: 'will leave'     }] },
    ],
    // ── B2 ── (content TBD)
    'b2': [],
    // ── C1 ── (content TBD)
    'c1': [],
    // ── C2 ── (content TBD)
    'c2': [],
};

export const verbByIdEN: Record<string, VerbEntry> = Object.fromEntries(
    Object.values(verbsDataEN).flat().map(v => [v.id, v])
);

export const verbGroupMapEN: Record<string, string> = Object.fromEntries(
    Object.entries(verbsDataEN).flatMap(([groupId, verbs]) => verbs.map(v => [v.id, groupId]))
);

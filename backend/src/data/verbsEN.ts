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
    'regular-verbs': {
        id: 'regular-verbs',
        title: 'Regular Verbs',
        titleFR: 'Verbes réguliers',
        description: 'Add -ed to form the past tense',
        descriptionFR: 'Ajoutez -ed pour former le passé',
        icon: '📝',
        color: '#059669',
    },
    'irregular-verbs': {
        id: 'irregular-verbs',
        title: 'Irregular Verbs',
        titleFR: 'Verbes irréguliers',
        description: 'Common verbs with unpredictable past forms',
        descriptionFR: 'Verbes courants avec des formes du passé imprévisibles',
        icon: '⚡',
        color: '#DC2626',
    },
};

export const verbsDataEN: Record<string, VerbEntry[]> = {
    'regular-verbs': [
        { id: 'walk',   infinitive: 'walk',   translation: 'marcher',          type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'walk',    passeCompose: 'walked',    imparfait: 'am walking',    futurSimple: 'will walk'    }, { sujet: 'he/she/it', present: 'walks',   passeCompose: 'walked',    imparfait: 'is walking',    futurSimple: 'will walk'    }] },
        { id: 'talk',   infinitive: 'talk',   translation: 'parler',           type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'talk',    passeCompose: 'talked',    imparfait: 'am talking',    futurSimple: 'will talk'    }, { sujet: 'he/she/it', present: 'talks',   passeCompose: 'talked',    imparfait: 'is talking',    futurSimple: 'will talk'    }] },
        { id: 'work',   infinitive: 'work',   translation: 'travailler',       type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'work',    passeCompose: 'worked',    imparfait: 'am working',    futurSimple: 'will work'    }, { sujet: 'he/she/it', present: 'works',   passeCompose: 'worked',    imparfait: 'is working',    futurSimple: 'will work'    }] },
        { id: 'play',   infinitive: 'play',   translation: 'jouer',            type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'play',    passeCompose: 'played',    imparfait: 'am playing',    futurSimple: 'will play'    }, { sujet: 'he/she/it', present: 'plays',   passeCompose: 'played',    imparfait: 'is playing',    futurSimple: 'will play'    }] },
        { id: 'finish', infinitive: 'finish', translation: 'finir / terminer', type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'finish',  passeCompose: 'finished',  imparfait: 'am finishing',  futurSimple: 'will finish'  }, { sujet: 'he/she/it', present: 'finishes',passeCompose: 'finished',  imparfait: 'is finishing',  futurSimple: 'will finish'  }] },
        { id: 'watch',  infinitive: 'watch',  translation: 'regarder',         type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'watch',   passeCompose: 'watched',   imparfait: 'am watching',   futurSimple: 'will watch'   }, { sujet: 'he/she/it', present: 'watches', passeCompose: 'watched',   imparfait: 'is watching',   futurSimple: 'will watch'   }] },
        { id: 'listen', infinitive: 'listen', translation: 'écouter',          type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'listen',  passeCompose: 'listened',  imparfait: 'am listening',  futurSimple: 'will listen'  }, { sujet: 'he/she/it', present: 'listens', passeCompose: 'listened',  imparfait: 'is listening',  futurSimple: 'will listen'  }] },
        { id: 'open',   infinitive: 'open',   translation: 'ouvrir',           type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'open',    passeCompose: 'opened',    imparfait: 'am opening',    futurSimple: 'will open'    }, { sujet: 'he/she/it', present: 'opens',   passeCompose: 'opened',    imparfait: 'is opening',    futurSimple: 'will open'    }] },
        { id: 'close',  infinitive: 'close',  translation: 'fermer',           type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'close',   passeCompose: 'closed',    imparfait: 'am closing',    futurSimple: 'will close'   }, { sujet: 'he/she/it', present: 'closes',  passeCompose: 'closed',    imparfait: 'is closing',    futurSimple: 'will close'   }] },
        { id: 'start',  infinitive: 'start',  translation: 'commencer',        type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'start',   passeCompose: 'started',   imparfait: 'am starting',   futurSimple: 'will start'   }, { sujet: 'he/she/it', present: 'starts',  passeCompose: 'started',   imparfait: 'is starting',   futurSimple: 'will start'   }] },
        { id: 'stop',   infinitive: 'stop',   translation: 'arrêter',          type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'stop',    passeCompose: 'stopped',   imparfait: 'am stopping',   futurSimple: 'will stop'    }, { sujet: 'he/she/it', present: 'stops',   passeCompose: 'stopped',   imparfait: 'is stopping',   futurSimple: 'will stop'    }] },
        { id: 'help',   infinitive: 'help',   translation: 'aider',            type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'help',    passeCompose: 'helped',    imparfait: 'am helping',    futurSimple: 'will help'    }, { sujet: 'he/she/it', present: 'helps',   passeCompose: 'helped',    imparfait: 'is helping',    futurSimple: 'will help'    }] },
        { id: 'want',   infinitive: 'want',   translation: 'vouloir',          type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'want',    passeCompose: 'wanted',    imparfait: 'am wanting',    futurSimple: 'will want'    }, { sujet: 'he/she/it', present: 'wants',   passeCompose: 'wanted',    imparfait: 'is wanting',    futurSimple: 'will want'    }] },
        { id: 'need',   infinitive: 'need',   translation: 'avoir besoin de',  type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'need',    passeCompose: 'needed',    imparfait: 'am needing',    futurSimple: 'will need'    }, { sujet: 'he/she/it', present: 'needs',   passeCompose: 'needed',    imparfait: 'is needing',    futurSimple: 'will need'    }] },
        { id: 'ask',    infinitive: 'ask',    translation: 'demander',         type: 'Regular', color: '#059669', rows: [{ sujet: 'I',         present: 'ask',     passeCompose: 'asked',     imparfait: 'am asking',     futurSimple: 'will ask'     }, { sujet: 'he/she/it', present: 'asks',    passeCompose: 'asked',     imparfait: 'is asking',     futurSimple: 'will ask'     }] },
    ],
    'irregular-verbs': [
        { id: 'go',    infinitive: 'go',    translation: 'aller',            type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'go',    passeCompose: 'went',    imparfait: 'am going',    futurSimple: 'will go'    }, { sujet: 'he/she/it', present: 'goes',   passeCompose: 'went',    imparfait: 'is going',    futurSimple: 'will go'    }] },
        { id: 'come',  infinitive: 'come',  translation: 'venir',            type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'come',  passeCompose: 'came',    imparfait: 'am coming',   futurSimple: 'will come'  }, { sujet: 'he/she/it', present: 'comes',  passeCompose: 'came',    imparfait: 'is coming',   futurSimple: 'will come'  }] },
        { id: 'see',   infinitive: 'see',   translation: 'voir',             type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'see',   passeCompose: 'saw',     imparfait: 'am seeing',   futurSimple: 'will see'   }, { sujet: 'he/she/it', present: 'sees',   passeCompose: 'saw',     imparfait: 'is seeing',   futurSimple: 'will see'   }] },
        { id: 'get',   infinitive: 'get',   translation: 'obtenir / devenir', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'get',   passeCompose: 'got',     imparfait: 'am getting',  futurSimple: 'will get'   }, { sujet: 'he/she/it', present: 'gets',   passeCompose: 'got',     imparfait: 'is getting',  futurSimple: 'will get'   }] },
        { id: 'give',  infinitive: 'give',  translation: 'donner',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'give',  passeCompose: 'gave',    imparfait: 'am giving',   futurSimple: 'will give'  }, { sujet: 'he/she/it', present: 'gives',  passeCompose: 'gave',    imparfait: 'is giving',   futurSimple: 'will give'  }] },
        { id: 'take',  infinitive: 'take',  translation: 'prendre',          type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'take',  passeCompose: 'took',    imparfait: 'am taking',   futurSimple: 'will take'  }, { sujet: 'he/she/it', present: 'takes',  passeCompose: 'took',    imparfait: 'is taking',   futurSimple: 'will take'  }] },
        { id: 'know',  infinitive: 'know',  translation: 'savoir / connaître',type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'know',  passeCompose: 'knew',    imparfait: 'am knowing',  futurSimple: 'will know'  }, { sujet: 'he/she/it', present: 'knows',  passeCompose: 'knew',    imparfait: 'is knowing',  futurSimple: 'will know'  }] },
        { id: 'think', infinitive: 'think', translation: 'penser',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'think', passeCompose: 'thought', imparfait: 'am thinking', futurSimple: 'will think' }, { sujet: 'he/she/it', present: 'thinks', passeCompose: 'thought', imparfait: 'is thinking', futurSimple: 'will think' }] },
        { id: 'say',   infinitive: 'say',   translation: 'dire',             type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'say',   passeCompose: 'said',    imparfait: 'am saying',   futurSimple: 'will say'   }, { sujet: 'he/she/it', present: 'says',   passeCompose: 'said',    imparfait: 'is saying',   futurSimple: 'will say'   }] },
        { id: 'make',  infinitive: 'make',  translation: 'faire / fabriquer', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'make',  passeCompose: 'made',    imparfait: 'am making',   futurSimple: 'will make'  }, { sujet: 'he/she/it', present: 'makes',  passeCompose: 'made',    imparfait: 'is making',   futurSimple: 'will make'  }] },
        { id: 'find',  infinitive: 'find',  translation: 'trouver',          type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'find',  passeCompose: 'found',   imparfait: 'am finding',  futurSimple: 'will find'  }, { sujet: 'he/she/it', present: 'finds',  passeCompose: 'found',   imparfait: 'is finding',  futurSimple: 'will find'  }] },
        { id: 'tell',  infinitive: 'tell',  translation: 'dire / raconter',  type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'tell',  passeCompose: 'told',    imparfait: 'am telling',  futurSimple: 'will tell'  }, { sujet: 'he/she/it', present: 'tells',  passeCompose: 'told',    imparfait: 'is telling',  futurSimple: 'will tell'  }] },
        { id: 'leave', infinitive: 'leave', translation: 'partir / laisser', type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'leave', passeCompose: 'left',    imparfait: 'am leaving',  futurSimple: 'will leave' }, { sujet: 'he/she/it', present: 'leaves', passeCompose: 'left',    imparfait: 'is leaving',  futurSimple: 'will leave' }] },
        { id: 'put',   infinitive: 'put',   translation: 'mettre / poser',   type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'put',   passeCompose: 'put',     imparfait: 'am putting',  futurSimple: 'will put'   }, { sujet: 'he/she/it', present: 'puts',   passeCompose: 'put',     imparfait: 'is putting',  futurSimple: 'will put'   }] },
        { id: 'buy',   infinitive: 'buy',   translation: 'acheter',          type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'buy',   passeCompose: 'bought',  imparfait: 'am buying',   futurSimple: 'will buy'   }, { sujet: 'he/she/it', present: 'buys',   passeCompose: 'bought',  imparfait: 'is buying',   futurSimple: 'will buy'   }] },
        { id: 'bring', infinitive: 'bring', translation: 'apporter / amener',type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'bring', passeCompose: 'brought', imparfait: 'am bringing', futurSimple: 'will bring' }, { sujet: 'he/she/it', present: 'brings', passeCompose: 'brought', imparfait: 'is bringing', futurSimple: 'will bring' }] },
        { id: 'write', infinitive: 'write', translation: 'écrire',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'write', passeCompose: 'wrote',   imparfait: 'am writing',  futurSimple: 'will write' }, { sujet: 'he/she/it', present: 'writes', passeCompose: 'wrote',   imparfait: 'is writing',  futurSimple: 'will write' }] },
        { id: 'read',  infinitive: 'read',  translation: 'lire',             type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'read',  passeCompose: 'read',    imparfait: 'am reading',  futurSimple: 'will read'  }, { sujet: 'he/she/it', present: 'reads',  passeCompose: 'read',    imparfait: 'is reading',  futurSimple: 'will read'  }] },
        { id: 'speak', infinitive: 'speak', translation: 'parler',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'speak', passeCompose: 'spoke',   imparfait: 'am speaking', futurSimple: 'will speak' }, { sujet: 'he/she/it', present: 'speaks', passeCompose: 'spoke',   imparfait: 'is speaking', futurSimple: 'will speak' }] },
        { id: 'meet',  infinitive: 'meet',  translation: 'rencontrer',       type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'meet',  passeCompose: 'met',     imparfait: 'am meeting',  futurSimple: 'will meet'  }, { sujet: 'he/she/it', present: 'meets',  passeCompose: 'met',     imparfait: 'is meeting',  futurSimple: 'will meet'  }] },
        { id: 'run',   infinitive: 'run',   translation: 'courir',           type: 'Irregular', color: '#DC2626', rows: [{ sujet: 'I', present: 'run',   passeCompose: 'ran',     imparfait: 'am running',  futurSimple: 'will run'   }, { sujet: 'he/she/it', present: 'runs',   passeCompose: 'ran',     imparfait: 'is running',  futurSimple: 'will run'   }] },
    ],
};

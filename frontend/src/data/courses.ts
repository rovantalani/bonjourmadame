export type StepType = 'vocabulary' | 'grammar' | 'verbs' | 'phrases' | 'reading';

export interface CourseUnit {
    number: number;
    title: string;
}

export interface CourseStep {
    id: string;
    title: string;
    type: StepType;
    contentId: string;
    path: string;
    unit?: number;
}

export interface Course {
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    title: string;
    description: string;
    color: string;
    units?: CourseUnit[];
    steps: CourseStep[];
}

export const COURSES_EN: Course[] = [
    {
        level: 'A1',
        title: 'Les Bases',
        description: 'Construisez votre premier vocabulaire anglais et maîtrisez les règles de grammaire essentielles.',
        color: '#4338CA',
        steps: [
            { id: 'a1en-greetings',      title: 'Salutations & Essentiels',   type: 'vocabulary', contentId: 'greetings-basics',      path: '/vocabulary/greetings-basics'          },
            { id: 'a1en-numbers',        title: 'Chiffres & Temps',            type: 'vocabulary', contentId: 'numbers-time',           path: '/vocabulary/numbers-time'              },
            { id: 'a1en-articles',       title: 'Les Articles en Anglais',     type: 'grammar',    contentId: 'en-articles',            path: '/grammar/lessons/en-articles'          },
            { id: 'a1en-colors',         title: 'Couleurs & Descriptions',     type: 'vocabulary', contentId: 'colors-descriptions',    path: '/vocabulary/colors-descriptions'       },
            { id: 'a1en-family',         title: 'Famille & Relations',         type: 'vocabulary', contentId: 'family-relationships',   path: '/vocabulary/family-relationships'      },
            { id: 'a1en-present',        title: 'Le Présent Simple et Continu',type: 'grammar',    contentId: 'en-present-simple',      path: '/grammar/lessons/en-present-simple'    },
            { id: 'a1en-tobe',           title: 'Verbe : to be',               type: 'verbs',      contentId: 'to-be',                  path: '/helper-verbs/to-be'                   },
            { id: 'a1en-food',           title: 'Nourriture & Boissons',       type: 'vocabulary', contentId: 'food-drinks',            path: '/vocabulary/food-drinks'               },
            { id: 'a1en-body',           title: 'Corps & Santé',               type: 'vocabulary', contentId: 'body-health',            path: '/vocabulary/body-health'               },
            { id: 'a1en-tohave',         title: 'Verbe : to have',             type: 'verbs',      contentId: 'to-have',                path: '/helper-verbs/to-have'                 },
        ],
    },
    {
        level: 'A2',
        title: "L'Anglais du Quotidien",
        description: 'Élargissez votre vocabulaire et maîtrisez les temps du passé et du futur.',
        color: '#059669',
        steps: [
            { id: 'a2en-home',           title: 'Maison & Vie quotidienne',    type: 'vocabulary', contentId: 'home-living',            path: '/vocabulary/home-living'               },
            { id: 'a2en-work',           title: 'Travail & Professions',       type: 'vocabulary', contentId: 'work-professions',       path: '/vocabulary/work-professions'          },
            { id: 'a2en-weather',        title: 'Météo & Nature',              type: 'vocabulary', contentId: 'weather-nature',         path: '/vocabulary/weather-nature'            },
            { id: 'a2en-past',           title: 'Les Temps du Passé',          type: 'grammar',    contentId: 'en-past-tenses',         path: '/grammar/lessons/en-past-tenses'       },
            { id: 'a2en-sports',         title: 'Sports & Loisirs',            type: 'vocabulary', contentId: 'sports-hobbies',         path: '/vocabulary/sports-hobbies'            },
            { id: 'a2en-shopping',       title: 'Shopping & Argent',           type: 'vocabulary', contentId: 'shopping-money',         path: '/vocabulary/shopping-money'            },
            { id: 'a2en-future',         title: 'Le Futur en Anglais',         type: 'grammar',    contentId: 'en-future',              path: '/grammar/lessons/en-future'            },
            { id: 'a2en-todo',           title: 'Verbe : to do',               type: 'verbs',      contentId: 'to-do',                  path: '/helper-verbs/to-do'                   },
            { id: 'a2en-phrases-conv',   title: 'Conversation quotidienne',    type: 'phrases',    contentId: 'everyday-conversation',  path: '/phrases/everyday-conversation'        },
            { id: 'a2en-phrases-rest',   title: 'Au restaurant',               type: 'phrases',    contentId: 'at-the-restaurant',      path: '/phrases/at-the-restaurant'            },
        ],
    },
    {
        level: 'B1',
        title: 'Construction de la Fluidité',
        description: 'Maîtrisez les prépositions, les verbes à particule et enrichissez votre vocabulaire.',
        color: '#0891B2',
        steps: [
            { id: 'b1en-tech',           title: 'Technologie & Médias',        type: 'vocabulary', contentId: 'technology-media',       path: '/vocabulary/technology-media'          },
            { id: 'b1en-daily-adv',      title: 'Vie quotidienne avancée',     type: 'vocabulary', contentId: 'daily-life-advanced',    path: '/vocabulary/daily-life-advanced'       },
            { id: 'b1en-prepositions',   title: 'Les Prépositions Anglaises',  type: 'grammar',    contentId: 'en-prepositions',        path: '/grammar/lessons/en-prepositions'      },
            { id: 'b1en-emotions',       title: 'Émotions & Psychologie',      type: 'vocabulary', contentId: 'emotions-psychology',    path: '/vocabulary/emotions-psychology'       },
            { id: 'b1en-phrasal',        title: 'Les Verbes à Particule',      type: 'grammar',    contentId: 'en-phrasal-verbs',       path: '/grammar/lessons/en-phrasal-verbs'     },
            { id: 'b1en-togo',           title: 'Verbe : to go',               type: 'verbs',      contentId: 'to-go',                  path: '/helper-verbs/to-go'                   },
            { id: 'b1en-tocome',         title: 'Verbe : to come',             type: 'verbs',      contentId: 'to-come',                path: '/helper-verbs/to-come'                 },
            { id: 'b1en-phrases-around', title: 'Se déplacer',                 type: 'phrases',    contentId: 'getting-around',         path: '/phrases/getting-around'               },
            { id: 'b1en-phrases-opin',   title: 'Exprimer ses opinions',       type: 'phrases',    contentId: 'expressing-opinions',    path: '/phrases/expressing-opinions'          },
            { id: 'b1en-irregular',      title: 'Verbes irréguliers',          type: 'verbs',      contentId: 'irregular-verbs',        path: '/grammar/irregular-verbs'              },
        ],
    },
    {
        level: 'B2',
        title: 'Intermédiaire',
        description: 'Vocabulaire avancé, faux amis, et grammaire de précision.',
        color: '#D97706',
        steps: [
            { id: 'b2en-travel',         title: 'Voyage & Culture',            type: 'vocabulary', contentId: 'travel-culture',         path: '/vocabulary/travel-culture'            },
            { id: 'b2en-politics',       title: 'Politique & Société',         type: 'vocabulary', contentId: 'politics-society',       path: '/vocabulary/politics-society'          },
            { id: 'b2en-business',       title: 'Affaires & Économie',         type: 'vocabulary', contentId: 'business-economy',       path: '/vocabulary/business-economy'          },
            { id: 'b2en-false-friends',  title: 'Les Faux Amis',               type: 'grammar',    contentId: 'en-false-friends',       path: '/grammar/lessons/en-false-friends'     },
            { id: 'b2en-word-order',     title: "L'Ordre des Mots",            type: 'grammar',    contentId: 'en-word-order',          path: '/grammar/lessons/en-word-order'        },
            { id: 'b2en-phrases-pro',    title: 'Français professionnel',      type: 'phrases',    contentId: 'work-professional',      path: '/phrases/work-professional'            },
            { id: 'b2en-phrases-emo',    title: 'Émotions & Réactions',        type: 'phrases',    contentId: 'emotions-reactions',     path: '/phrases/emotions-reactions'           },
            { id: 'b2en-regular',        title: 'Verbes réguliers',            type: 'verbs',      contentId: 'regular-verbs',          path: '/grammar/regular-verbs'                },
        ],
    },
    {
        level: 'C1',
        title: 'Avancé',
        description: 'Idiomes, langue formelle, vocabulaire littéraire et expressions avancées.',
        color: '#7C3AED',
        steps: [
            { id: 'c1en-idioms',         title: 'Idiomes & Expressions',       type: 'vocabulary', contentId: 'idioms-expressions',     path: '/vocabulary/idioms-expressions'        },
            { id: 'c1en-faux-amis',      title: 'Faux Amis',                   type: 'vocabulary', contentId: 'faux-amis',              path: '/vocabulary/faux-amis'                 },
            { id: 'c1en-literary',       title: 'Littéraire & Abstrait',       type: 'vocabulary', contentId: 'literary-abstract',      path: '/vocabulary/literary-abstract'         },
            { id: 'c1en-formal',         title: 'Argumentation formelle',      type: 'phrases',    contentId: 'formal-argumentation',   path: '/phrases/formal-argumentation'         },
            { id: 'c1en-law',            title: 'Droit & Administration',      type: 'vocabulary', contentId: 'law-administration',     path: '/vocabulary/law-administration'        },
            { id: 'c1en-proverbs',       title: 'Proverbes & Expressions',     type: 'phrases',    contentId: 'proverbs-sayings',       path: '/phrases/proverbs-sayings'             },
        ],
    },
    {
        level: 'C2',
        title: 'Maîtrise',
        description: 'Le registre le plus élevé : vocabulaire nuancé et concepts philosophiques.',
        color: '#DC2626',
        steps: [
            { id: 'c2en-nuanced',        title: 'Adjectifs nuancés',           type: 'vocabulary', contentId: 'nuanced-adjectives',     path: '/vocabulary/nuanced-adjectives'        },
            { id: 'c2en-human',          title: 'La Condition humaine',        type: 'vocabulary', contentId: 'human-condition',        path: '/vocabulary/human-condition'           },
            { id: 'c2en-school',         title: 'École & Éducation',           type: 'vocabulary', contentId: 'school-education',       path: '/vocabulary/school-education'          },
        ],
    },
];

export const COURSES: Course[] = [
    {
        level: 'A1',
        title: 'Foundations',
        description: 'Build your first French vocabulary and master essential grammar rules.',
        color: '#4338CA',
        units: [
            { number: 1, title: 'Unit 1 — First Contact' },
            { number: 2, title: 'Unit 2 — My World' },
        ],
        steps: [
            { id: 'a1-greetings',      title: 'Greetings & Basics',      type: 'vocabulary', contentId: 'greetings-basics',      path: '/vocabulary/greetings-basics',           unit: 1 },
            { id: 'a1-articles',       title: 'Articles',                 type: 'grammar',    contentId: 'articles',               path: '/grammar/lessons/articles',               unit: 1 },
            { id: 'a1-noun-gender',    title: 'Noun Gender',              type: 'grammar',    contentId: 'noun-gender',            path: '/grammar/lessons/noun-gender',            unit: 1 },
            { id: 'a1-intro-yourself', title: 'Introducing Yourself',     type: 'phrases',    contentId: 'introducing-yourself',   path: '/phrases/introducing-yourself',           unit: 1 },
            { id: 'a1-numbers',        title: 'Numbers & Time',           type: 'vocabulary', contentId: 'numbers-time',           path: '/vocabulary/numbers-time',                unit: 1 },
            { id: 'a1-telling-time',   title: 'Telling the Time',         type: 'grammar',    contentId: 'telling-time',           path: '/grammar/lessons/telling-time',           unit: 1 },
            { id: 'a1-classroom',      title: 'Classroom Survival',       type: 'phrases',    contentId: 'classroom-survival',     path: '/phrases/classroom-survival',             unit: 1 },
            { id: 'a1-family',         title: 'Family & Relationships',   type: 'vocabulary', contentId: 'family-relationships',   path: '/vocabulary/family-relationships',         unit: 2 },
            { id: 'a1-possessives',    title: 'Possessive Adjectives',    type: 'grammar',    contentId: 'possessive-adjectives',  path: '/grammar/lessons/possessive-adjectives',  unit: 2 },
            { id: 'a1-home',           title: 'Home & Living',            type: 'vocabulary', contentId: 'home-living',            path: '/vocabulary/home-living',                 unit: 2 },
            { id: 'a1-prepositions',   title: 'Prepositions of Place',    type: 'grammar',    contentId: 'prepositions-place',     path: '/grammar/lessons/prepositions-place',     unit: 2 },
            { id: 'a1-colors',         title: 'Colors & Descriptions',    type: 'vocabulary', contentId: 'colors-descriptions',    path: '/vocabulary/colors-descriptions',          unit: 2 },
            { id: 'a1-adjectives',     title: 'Adjective Agreement',      type: 'grammar',    contentId: 'adjective-basics',       path: '/grammar/lessons/adjective-basics',        unit: 2 },
            { id: 'a1-home-phrases',   title: 'Describing Your Home',     type: 'phrases',    contentId: 'describing-your-home',   path: '/phrases/describing-your-home',           unit: 2 },
        ],
    },
    {
        level: 'A2',
        title: 'Everyday French',
        description: 'Expand your vocabulary and learn the first past tense.',
        color: '#059669',
        steps: [
            { id: 'a2-work',               title: 'Work & Professions',      type: 'vocabulary', contentId: 'work-professions',       path: '/vocabulary/work-professions' },
            { id: 'a2-weather',            title: 'Weather & Nature',        type: 'vocabulary', contentId: 'weather-nature',         path: '/vocabulary/weather-nature' },
            { id: 'a2-sports',             title: 'Sports & Hobbies',        type: 'vocabulary', contentId: 'sports-hobbies',         path: '/vocabulary/sports-hobbies' },
            { id: 'a2-adjectives',         title: 'Adjective Agreement',     type: 'grammar',    contentId: 'adjective-agreement',    path: '/grammar/lessons/adjective-agreement' },
            { id: 'a2-shopping',           title: 'Shopping & Money',        type: 'vocabulary', contentId: 'shopping-money',         path: '/vocabulary/shopping-money' },
            { id: 'a2-school',             title: 'School & Education',      type: 'vocabulary', contentId: 'school-education',       path: '/vocabulary/school-education' },
            { id: 'a2-passe-compose',      title: 'Passé Composé',           type: 'grammar',    contentId: 'passe-compose',          path: '/grammar/lessons/passe-compose' },
            { id: 'a2-regular-verbs',      title: 'Regular Verbs',           type: 'verbs',      contentId: 'regular-verbs',          path: '/grammar/regular-verbs' },
            { id: 'a2-phrases-everyday',   title: 'Everyday Conversation',   type: 'phrases',    contentId: 'everyday-conversation',  path: '/phrases/everyday-conversation' },
            { id: 'a2-phrases-restaurant', title: 'At the Restaurant',       type: 'phrases',    contentId: 'at-the-restaurant',      path: '/phrases/at-the-restaurant' },
            { id: 'a2-reflexive',          title: 'Reflexive Verbs',         type: 'grammar',    contentId: 'reflexive-verbs',        path: '/grammar/lessons/reflexive-verbs' },
        ],
    },
    {
        level: 'B1',
        title: 'Building Fluency',
        description: 'Master past and future tenses, irregular verbs, and real-world phrases.',
        color: '#0891B2',
        steps: [
            { id: 'b1-technology',      title: 'Technology & Media',        type: 'vocabulary', contentId: 'technology-media',      path: '/vocabulary/technology-media' },
            { id: 'b1-imparfait',       title: "L'Imparfait",               type: 'grammar',    contentId: 'imparfait',             path: '/grammar/lessons/imparfait' },
            { id: 'b1-daily-life',      title: 'Daily Life (Advanced)',     type: 'vocabulary', contentId: 'daily-life-advanced',   path: '/vocabulary/daily-life-advanced' },
            { id: 'b1-emotions',        title: 'Emotions & Psychology',     type: 'vocabulary', contentId: 'emotions-psychology',   path: '/vocabulary/emotions-psychology' },
            { id: 'b1-futur',           title: 'Future & Conditional',      type: 'grammar',    contentId: 'futur-conditionnel',    path: '/grammar/lessons/futur-conditionnel' },
            { id: 'b1-phrases-around',  title: 'Getting Around',            type: 'phrases',    contentId: 'getting-around',        path: '/phrases/getting-around' },
            { id: 'b1-phrases-opinions',title: 'Expressing Opinions',       type: 'phrases',    contentId: 'expressing-opinions',   path: '/phrases/expressing-opinions' },
            { id: 'b1-travel',          title: 'Travel & Culture',          type: 'vocabulary', contentId: 'travel-culture',        path: '/vocabulary/travel-culture' },
            { id: 'b1-irregular-verbs', title: 'Irregular Verbs',           type: 'verbs',      contentId: 'irregular-verbs',       path: '/grammar/irregular-verbs' },
            { id: 'b1-faire-aller-venir',title: 'Verbs: faire / aller / venir', type: 'verbs', contentId: 'faire',                path: '/helper-verbs/faire' },
        ],
    },
    {
        level: 'B2',
        title: 'Intermediate',
        description: 'Tackle advanced grammar, professional vocabulary, and authentic reading.',
        color: '#D97706',
        steps: [
            { id: 'b2-politics',        title: 'Politics & Society',          type: 'vocabulary', contentId: 'politics-society',         path: '/vocabulary/politics-society' },
            { id: 'b2-business',        title: 'Business & Economy',          type: 'vocabulary', contentId: 'business-economy',         path: '/vocabulary/business-economy' },
            { id: 'b2-subjonctif',      title: 'The Subjunctive',             type: 'grammar',    contentId: 'subjonctif',               path: '/grammar/lessons/subjonctif' },
            { id: 'b2-gerondif',        title: 'Le Gérondif',                 type: 'grammar',    contentId: 'gerondif',                 path: '/grammar/lessons/gerondif' },
            { id: 'b2-passive',         title: 'Passive Voice',               type: 'grammar',    contentId: 'passive-voice',            path: '/grammar/lessons/passive-voice' },
            { id: 'b2-reported',        title: 'Reported Speech',             type: 'grammar',    contentId: 'reported-speech',          path: '/grammar/lessons/reported-speech' },
            { id: 'b2-adv-verbs',       title: 'Advanced Irregular Verbs',    type: 'verbs',      contentId: 'advanced-irregular-verbs', path: '/grammar/advanced-irregular-verbs' },
            { id: 'b2-phrases-pro',     title: 'Professional French',         type: 'phrases',    contentId: 'work-professional',        path: '/phrases/work-professional' },
            { id: 'b2-phrases-emotions',title: 'Emotions & Reactions',        type: 'phrases',    contentId: 'emotions-reactions',       path: '/phrases/emotions-reactions' },
            { id: 'b2-reading-sh1',     title: 'Reading: Sherlock Holmes Ch.1',type: 'reading',   contentId: 'sherlock-holmes-ch1',      path: '/reading/sherlock-holmes-ch1' },
            { id: 'b2-reading-sh2',     title: 'Reading: Sherlock Holmes Ch.2',type: 'reading',   contentId: 'sherlock-holmes-ch2',      path: '/reading/sherlock-holmes-ch2' },
        ],
    },
    {
        level: 'C1',
        title: 'Advanced',
        description: 'Idioms, formal language, advanced grammar, and literary vocabulary.',
        color: '#7C3AED',
        steps: [
            { id: 'c1-idioms',             title: 'Idioms & Expressions',  type: 'vocabulary', contentId: 'idioms-expressions',    path: '/vocabulary/idioms-expressions' },
            { id: 'c1-faux-amis',          title: 'Faux Amis',             type: 'vocabulary', contentId: 'faux-amis',             path: '/vocabulary/faux-amis' },
            { id: 'c1-conditionnel-passe', title: 'Conditionnel Passé',    type: 'grammar',    contentId: 'conditionnel-passe',    path: '/grammar/lessons/conditionnel-passe' },
            { id: 'c1-connecteurs',        title: 'Connecteurs Logiques',  type: 'grammar',    contentId: 'connecteurs-logiques',  path: '/grammar/lessons/connecteurs-logiques' },
            { id: 'c1-literary',           title: 'Literary & Abstract',   type: 'vocabulary', contentId: 'literary-abstract',     path: '/vocabulary/literary-abstract' },
            { id: 'c1-phrases-formal',     title: 'Formal Argumentation',  type: 'phrases',    contentId: 'formal-argumentation',  path: '/phrases/formal-argumentation' },
            { id: 'c1-law',               title: 'Law & Administration',   type: 'vocabulary', contentId: 'law-administration',    path: '/vocabulary/law-administration' },
            { id: 'c1-proverbs',          title: 'Proverbs & Sayings',     type: 'phrases',    contentId: 'proverbs-sayings',      path: '/phrases/proverbs-sayings' },
        ],
    },
    {
        level: 'C2',
        title: 'Mastery',
        description: 'The highest register: nuanced vocabulary and philosophical concepts.',
        color: '#DC2626',
        steps: [
            { id: 'c2-nuanced', title: 'Nuanced Adjectives',         type: 'vocabulary', contentId: 'nuanced-adjectives', path: '/vocabulary/nuanced-adjectives' },
            { id: 'c2-human',   title: 'The Human Condition',        type: 'vocabulary', contentId: 'human-condition',    path: '/vocabulary/human-condition' },
            { id: 'c2-law',     title: 'Law & Administration',       type: 'vocabulary', contentId: 'law-administration', path: '/vocabulary/law-administration' },
        ],
    },
];

export type StepType = 'vocabulary' | 'grammar' | 'verbs' | 'phrases' | 'reading';

export interface CourseStep {
    id: string;
    title: string;
    type: StepType;
    contentId: string;
    path: string;
}

export interface Course {
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    title: string;
    description: string;
    color: string;
    steps: CourseStep[];
}

export const COURSES: Course[] = [
    {
        level: 'A1',
        title: 'Foundations',
        description: 'Build your first French vocabulary and master essential grammar rules.',
        color: '#4338CA',
        steps: [
            { id: 'a1-greetings',  title: 'Greetings & Basics',      type: 'vocabulary', contentId: 'greetings-basics',      path: '/vocabulary/greetings-basics' },
            { id: 'a1-numbers',    title: 'Numbers & Time',           type: 'vocabulary', contentId: 'numbers-time',           path: '/vocabulary/numbers-time' },
            { id: 'a1-articles',   title: 'Articles',                 type: 'grammar',    contentId: 'articles',               path: '/grammar/lessons/articles' },
            { id: 'a1-colors',     title: 'Colors & Descriptions',    type: 'vocabulary', contentId: 'colors-descriptions',    path: '/vocabulary/colors-descriptions' },
            { id: 'a1-body',       title: 'Body & Health',            type: 'vocabulary', contentId: 'body-health',            path: '/vocabulary/body-health' },
            { id: 'a1-noun-gender',title: 'Noun Gender',              type: 'grammar',    contentId: 'noun-gender',            path: '/grammar/lessons/noun-gender' },
            { id: 'a1-family',     title: 'Family & Relationships',   type: 'vocabulary', contentId: 'family-relationships',   path: '/vocabulary/family-relationships' },
            { id: 'a1-food',       title: 'Food & Drinks',            type: 'vocabulary', contentId: 'food-drinks',            path: '/vocabulary/food-drinks' },
            { id: 'a1-etre',       title: 'Verb: être',               type: 'verbs',      contentId: 'etre',                   path: '/helper-verbs/etre' },
            { id: 'a1-avoir',      title: 'Verb: avoir',              type: 'verbs',      contentId: 'avoir',                  path: '/helper-verbs/avoir' },
            { id: 'a1-negation',   title: 'Negation',                 type: 'grammar',    contentId: 'negation',               path: '/grammar/lessons/negation' },
            { id: 'a1-questions',  title: 'Asking Questions',         type: 'grammar',    contentId: 'questions',              path: '/grammar/lessons/questions' },
            { id: 'a1-home',       title: 'Home & Living',            type: 'vocabulary', contentId: 'home-living',            path: '/vocabulary/home-living' },
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

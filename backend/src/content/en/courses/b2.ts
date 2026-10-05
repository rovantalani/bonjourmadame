import type { Course } from '../../../types/courses';

export const courseB2: Course = {
        level: 'B2',
        title: 'Intermédiaire Supérieur',
        description: "Maîtrisez les structures avancées, le vocabulaire de précision et les textes d'opinion.",
        color: 'var(--course-b2)',
        textColor: 'var(--level-b2-text)',
        units: [
            { number: 1, title: 'Monde & Société' },
            { number: 2, title: 'Grammaire de Précision' },
            { number: 3, title: 'Registre & Argumentation' },
            { number: 4, title: 'FINAL EXAM', kind: 'final-exam' },
        ],
        steps: [
            // Unit 1 — Monde & Société
            { id: 'b2en-travel',          title: 'Voyage & Culture',             module: 'vocabulary', type: 'vocabulary', contentId: 'travel-culture',          path: '/vocabulary/travel-culture',           unit: 1 },
            { id: 'b2en-science',         title: 'Science & Technologie',        module: 'vocabulary', type: 'vocabulary', contentId: 'science-technology',      path: '/vocabulary/science-technology',       unit: 1 },
            { id: 'b2en-politics',        title: 'Politique & Société',          module: 'vocabulary', type: 'vocabulary', contentId: 'politics-society',        path: '/vocabulary/politics-society',         unit: 1 },
            { id: 'b2en-law',             title: 'Droit & Justice',              module: 'vocabulary', type: 'vocabulary', contentId: 'law-justice',             path: '/vocabulary/law-justice',              unit: 1 },
            { id: 'b2en-philosophy',      title: 'Philosophie & Éthique',        module: 'vocabulary', type: 'vocabulary', contentId: 'philosophy-ethics',       path: '/vocabulary/philosophy-ethics',        unit: 1 },
            { id: 'b2en-business',        title: 'Affaires & Économie',          module: 'vocabulary', type: 'vocabulary', contentId: 'business-economy',        path: '/vocabulary/business-economy',         unit: 1 },
            { id: 'b2en-reading-digital', title: 'Lecture : Education in the Digital Age', module: 'lectures', type: 'reading', contentId: 'b2en-digital-education', path: '/lectures/reading/b2en-digital-education', unit: 1 },
            { id: 'b2-exam-1', title: 'Examen de l’unité 1', module: 'exams', type: 'exams', contentId: 'b2-exam-1', path: '/exams/1', unit: 1, available: false, isDemo: false },
            // Unit 2 — Grammaire de Précision
            { id: 'b2en-false-friends',   title: 'Les Faux Amis',                module: 'lectures', type: 'grammar',    contentId: 'en-false-friends',        path: '/lectures/grammar/en-false-friends',   unit: 2 },
            { id: 'b2en-word-order',      title: "L'Ordre des Mots",             module: 'lectures', type: 'grammar',    contentId: 'en-word-order',           path: '/lectures/grammar/en-word-order',      unit: 2 },
            { id: 'b2en-third-cond',      title: 'Le 3e Conditionnel',           module: 'lectures', type: 'grammar',    contentId: 'en-third-conditional',    path: '/lectures/grammar/en-third-conditional', unit: 2 },
            { id: 'b2en-inversion',       title: 'Inversion & Emphase',          module: 'lectures', type: 'grammar',    contentId: 'en-inversion-emphasis',   path: '/lectures/grammar/en-inversion-emphasis', unit: 2 },
            { id: 'b2en-regular',         title: 'Verbes réguliers',             module: 'verbs', type: 'verbs',      contentId: 'b2',           path: '/verbs/b2',                 unit: 2 },
            // Unit 3 — Registre & Argumentation
            { id: 'b2en-adv-modals',      title: 'Modaux au Passé',              module: 'lectures', type: 'grammar',    contentId: 'en-advanced-modals',      path: '/lectures/grammar/en-advanced-modals', unit: 3 },
            { id: 'b2en-cohesion',        title: 'Cohésion & Connecteurs',       module: 'lectures', type: 'grammar',    contentId: 'en-cohesion',             path: '/lectures/grammar/en-cohesion',        unit: 3 },
            { id: 'b2en-phrases-pro',     title: 'Anglais professionnel',        module: 'lectures', type: 'phrases',    contentId: 'work-professional',       path: '/lectures/phrases/work-professional',  unit: 3 },
            { id: 'b2en-phrases-emo',     title: 'Émotions & Réactions',         module: 'lectures', type: 'phrases',    contentId: 'emotions-reactions',      path: '/lectures/phrases/emotions-reactions', unit: 3 },
            { id: 'b2en-phrases-formal',  title: 'Correspondance formelle',      module: 'lectures', type: 'phrases',    contentId: 'formal-correspondence',   path: '/lectures/phrases/formal-correspondence', unit: 3 },
            { id: 'b2en-phrases-debate',  title: 'Débattre & Persuader',         module: 'lectures', type: 'phrases',    contentId: 'debating-persuading',     path: '/lectures/phrases/debating-persuading', unit: 3 },
            { id: 'b2en-phrases-society', title: 'Parler de société',            module: 'lectures', type: 'phrases',    contentId: 'discussing-society',      path: '/lectures/phrases/discussing-society', unit: 3 },
            { id: 'b2en-reading-culture', title: 'Lecture : Cultural Identity',  module: 'lectures', type: 'reading',    contentId: 'b2en-cultural-identity',  path: '/lectures/reading/b2en-cultural-identity', unit: 3 },
            { id: 'b2en-reading-ai',      title: 'Lecture : AI in Everyday Life', module: 'lectures', type: 'reading',   contentId: 'b2en-ai-everyday',        path: '/lectures/reading/b2en-ai-everyday',   unit: 2 },
            { id: 'b2en-reading-worklife',title: 'Lecture : Work-Life Balance',  module: 'lectures', type: 'reading',    contentId: 'b2en-work-life-balance',  path: '/lectures/reading/b2en-work-life-balance', unit: 2 },
            { id: 'b2en-reading-misinfo', title: 'Lecture : Misinformation',     module: 'lectures', type: 'reading',    contentId: 'b2en-misinformation',     path: '/lectures/reading/b2en-misinformation', unit: 3 },
            { id: 'b2en-reading-urban',   title: 'Lecture : Nature in Cities',   module: 'lectures', type: 'reading',    contentId: 'b2en-urban-nature',       path: '/lectures/reading/b2en-urban-nature',  unit: 3 },
            { id: 'b2en-reading-space',   title: 'Lecture : Space Exploration',  module: 'lectures', type: 'reading',    contentId: 'b2en-space-exploration',  path: '/lectures/reading/b2en-space-exploration', unit: 2 },
            { id: 'b2en-reading-money',   title: 'Lecture : The Future of Money', module: 'lectures', type: 'reading',   contentId: 'b2en-future-of-money',    path: '/lectures/reading/b2en-future-of-money', unit: 2 },
            { id: 'b2-exam-2', title: 'Examen de l’unité 2', module: 'exams', type: 'exams', contentId: 'b2-exam-2', path: '/exams/2', unit: 2, available: false, isDemo: false },
            { id: 'b2en-reading-tourism', title: 'Lecture : Overtourism',        module: 'lectures', type: 'reading',    contentId: 'b2en-overtourism',        path: '/lectures/reading/b2en-overtourism',   unit: 3 },
            { id: 'b2en-reading-genetics',title: 'Lecture : Ethics of Genetic Engineering', module: 'lectures', type: 'reading', contentId: 'b2en-genetic-ethics', path: '/lectures/reading/b2en-genetic-ethics', unit: 3 },
            { id: 'b2-exam-3', title: 'Examen de l’unité 3', module: 'exams', type: 'exams', contentId: 'b2-exam-3', path: '/exams/3', unit: 3, available: false, isDemo: false },
            // Level exam
            { id: 'b2-exam-final', title: 'Examen final B2', module: 'exams', type: 'exams', contentId: 'b2-exam-final', path: '/exams/final', unit: 4, available: false, isDemo: false },
        ],
    };

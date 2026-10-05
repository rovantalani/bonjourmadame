import type { Course } from '../../../types/courses';

export const courseC2: Course = {
        level: 'C2',
        title: 'Maîtrise',
        description: 'Précision stylistique, lecture des grands textes français, traduction et maîtrise totale du registre.',
        color: 'var(--course-c2)',
        textColor: 'var(--level-c2-text)',
        units: [
            { number: 1, title: 'Précision & Raffinement' },
            { number: 2, title: 'Langue en Contexte' },
            { number: 3, title: 'Littérature & Pensée' },
            { number: 4, title: 'Maîtrise' },
            { number: 5, title: 'Sommet & Capstone' },
            { number: 6, title: 'FINAL EXAM', kind: 'final-exam' },
        ],
        steps: [
            // Unit 1 — Précision & Raffinement
            { id: 'c2en-style-register',  title: 'Style & Registre',              module: 'lectures', type: 'grammar',    contentId: 'en-style-register-mastery',   path: '/lectures/grammar/en-style-register-mastery',  unit: 1 },
            { id: 'c2en-archaic',         title: 'Formes classiques anglaises',   module: 'lectures', type: 'grammar',    contentId: 'en-classical-forms',           path: '/lectures/grammar/en-classical-forms',         unit: 1 },
            { id: 'c2en-abstract',        title: 'Pensée abstraite',              module: 'vocabulary', type: 'vocabulary', contentId: 'abstract-thought',             path: '/vocabulary/abstract-thought',                 unit: 1 },
            { id: 'c2en-reading-proust',  title: 'Lecture : Virginia Woolf',     module: 'lectures', type: 'reading',    contentId: 'c2en-woolf',                   path: '/lectures/reading/c2en-woolf',                 unit: 1 },
            { id: 'c2-exam-1', title: 'Examen de l’unité 1', module: 'exams', type: 'exams', contentId: 'c2-exam-1', path: '/exams/1', unit: 1, available: false, isDemo: false },
            // Unit 2 — Langue en Contexte
            { id: 'c2en-oral-written',    title: 'Oral vs Écrit',                 module: 'lectures', type: 'grammar',    contentId: 'en-oral-vs-written',           path: '/lectures/grammar/en-oral-vs-written',         unit: 2 },
            { id: 'c2en-poetry',          title: 'Poésie & Prosodie',             module: 'vocabulary', type: 'vocabulary', contentId: 'poetry-prosody',               path: '/vocabulary/poetry-prosody',                   unit: 2 },
            { id: 'c2en-discourse',       title: 'Connecteurs avancés',           module: 'lectures', type: 'grammar',    contentId: 'en-advanced-discourse-markers', path: '/lectures/grammar/en-advanced-discourse-markers', unit: 2 },
            { id: 'c2en-cultural',        title: 'Références culturelles',        module: 'vocabulary', type: 'vocabulary', contentId: 'cultural-references',           path: '/vocabulary/cultural-references',              unit: 2 },
            { id: 'c2en-literary-anal',   title: 'Analyse littéraire',            module: 'lectures', type: 'phrases',    contentId: 'literary-analysis',            path: '/lectures/phrases/literary-analysis',          unit: 2 },
            { id: 'c2en-reading-poesie',  title: 'Lecture : T. S. Eliot',        module: 'lectures', type: 'reading',    contentId: 'c2en-eliot',                    path: '/lectures/reading/c2en-eliot',                 unit: 2 },
            { id: 'c2-exam-2', title: 'Examen de l’unité 2', module: 'exams', type: 'exams', contentId: 'c2-exam-2', path: '/exams/2', unit: 2, available: false, isDemo: false },
            // Unit 3 — Littérature & Pensée
            { id: 'c2en-literary-mov',    title: 'Mouvements littéraires',        module: 'vocabulary', type: 'vocabulary', contentId: 'literary-movements',            path: '/vocabulary/literary-movements',               unit: 3 },
            { id: 'c2en-high-register',   title: 'Expression soutenue',           module: 'lectures', type: 'phrases',    contentId: 'high-register-speech',          path: '/lectures/phrases/high-register-speech',       unit: 3 },
            { id: 'c2en-nuanced-emo',     title: 'Émotions nuancées',             module: 'vocabulary', type: 'vocabulary', contentId: 'nuanced-emotion',               path: '/vocabulary/nuanced-emotion',                  unit: 3 },
            { id: 'c2en-reading-hugo',    title: 'Lecture : The Brontës',        module: 'lectures', type: 'reading',    contentId: 'c2en-bronte',                   path: '/lectures/reading/c2en-bronte',                unit: 3 },
            { id: 'c2en-reading-beauvoir',title: 'Lecture : Wollstonecraft',     module: 'lectures', type: 'reading',    contentId: 'c2en-wollstonecraft',           path: '/lectures/reading/c2en-wollstonecraft',        unit: 3 },
            { id: 'c2en-reading-sartre',  title: 'Lecture : Conrad',             module: 'lectures', type: 'reading',    contentId: 'c2en-conrad',                   path: '/lectures/reading/c2en-conrad',                unit: 3 },
            { id: 'c2en-reading-balzac',  title: 'Lecture : Henry James',        module: 'lectures', type: 'reading',    contentId: 'c2en-james',                    path: '/lectures/reading/c2en-james',                 unit: 3 },
            { id: 'c2-exam-3', title: 'Examen de l’unité 3', module: 'exams', type: 'exams', contentId: 'c2-exam-3', path: '/exams/3', unit: 3, available: false, isDemo: false },
            // Unit 4 — Maîtrise
            { id: 'c2en-philovocab',      title: 'Vocabulaire philosophique',     module: 'vocabulary', type: 'vocabulary', contentId: 'philosophical-vocabulary',      path: '/vocabulary/philosophical-vocabulary',         unit: 4 },
            { id: 'c2en-rhetoric-cl',     title: 'Rhétorique classique',          module: 'vocabulary', type: 'vocabulary', contentId: 'rhetoric-classical',            path: '/vocabulary/rhetoric-classical',               unit: 4 },
            { id: 'c2en-translation',     title: 'Traduction & Stratégies',       module: 'lectures', type: 'grammar',    contentId: 'en-translation-strategies',    path: '/lectures/grammar/en-translation-strategies',  unit: 4 },
            { id: 'c2en-spec-register',   title: 'Registres spécialisés',         module: 'vocabulary', type: 'vocabulary', contentId: 'specialized-register',          path: '/vocabulary/specialized-register',             unit: 4 },
            { id: 'c2en-trans-comm',      title: 'Commentaire de traduction',     module: 'lectures', type: 'phrases',    contentId: 'translation-commentary',        path: '/lectures/phrases/translation-commentary',     unit: 4 },
            { id: 'c2en-reading-flaubert',title: 'Lecture : James Joyce',        module: 'lectures', type: 'reading',    contentId: 'c2en-joyce',                    path: '/lectures/reading/c2en-joyce',                 unit: 4 },
            { id: 'c2en-reading-essay',   title: 'Lecture : In Praise of Boredom', module: 'lectures', type: 'reading', contentId: 'c2en-boredom',                  path: '/lectures/reading/c2en-boredom',               unit: 4 },
            { id: 'c2-exam-4', title: 'Examen de l’unité 4', module: 'exams', type: 'exams', contentId: 'c2-exam-4', path: '/exams/4', unit: 4, available: false, isDemo: false },
            // Unit 5 — Sommet & Capstone
            { id: 'c2en-debate-length',   title: 'Débattre en profondeur',        module: 'lectures', type: 'phrases',    contentId: 'debating-at-length',            path: '/lectures/phrases/debating-at-length',         unit: 5 },
            { id: 'c2en-reading-univ',    title: 'Lecture : What Are Universities For?', module: 'lectures', type: 'reading', contentId: 'c2en-university',         path: '/lectures/reading/c2en-university',             unit: 5 },
            { id: 'c2en-reading-press',   title: 'Lecture : How to Read an Editorial', module: 'lectures', type: 'reading', contentId: 'c2en-editorial',             path: '/lectures/reading/c2en-editorial',             unit: 5 },
            { id: 'c2en-reading-goriot',  title: 'Lecture : Dickens — Hard Times', module: 'lectures', type: 'reading',  contentId: 'c2en-hardtimes',               path: '/lectures/reading/c2en-hardtimes',             unit: 5 },
            { id: 'c2-exam-5', title: 'Examen de l’unité 5', module: 'exams', type: 'exams', contentId: 'c2-exam-5', path: '/exams/5', unit: 5, available: false, isDemo: false },
            // Level exam
            { id: 'c2-exam-final', title: 'Examen final C2', module: 'exams', type: 'exams', contentId: 'c2-exam-final', path: '/exams/final', unit: 6, available: false, isDemo: false },
        ],
    };

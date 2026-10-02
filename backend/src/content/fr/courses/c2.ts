import type { Course } from '../../../types/courses';

export const courseC2: Course = {
        level: 'C2',
        title: 'Mastery',
        description: 'Stylistic precision, canonical French literature, translation, and total register mastery.',
        color: 'var(--course-c2)',
        textColor: 'var(--level-c2-text)',
        units: [
            { number: 1, title: 'Precision & Refinement' },
            { number: 2, title: 'Language in Context' },
            { number: 3, title: 'Literature & Thought' },
            { number: 4, title: 'Mastery' },
            { number: 5, title: 'Capstone' },
        ],
        steps: [
            // Unit 1 — Precision & Refinement
            { id: 'c2-style-register',   title: 'Style & Register Mastery',     module: 'lectures', type: 'grammar',    contentId: 'style-and-register-mastery', path: '/lectures/grammar/style-and-register-mastery', unit: 1 },
            { id: 'c2-archaic',          title: 'Classical French Forms',       module: 'lectures', type: 'grammar',    contentId: 'archaic-classical-forms',    path: '/lectures/grammar/archaic-classical-forms',    unit: 1 },
            { id: 'c2-abstract',         title: 'Abstract Thought',             module: 'vocabulary', type: 'vocabulary', contentId: 'abstract-thought',           path: '/vocabulary/abstract-thought',                unit: 1 },
            { id: 'c2-reading-proust',   title: 'Reading: Proust',              module: 'lectures', type: 'reading',    contentId: 'c2-proust-extract',          path: '/lectures/reading/c2-proust-extract',                  unit: 1 },
            // Unit 2 — Language in Context
            { id: 'c2-oral-written',     title: 'Oral vs Written French',       module: 'lectures', type: 'grammar',    contentId: 'oral-vs-written-divergence', path: '/lectures/grammar/oral-vs-written-divergence', unit: 2 },
            { id: 'c2-poetry',           title: 'Poetry & Prosody',             module: 'vocabulary', type: 'vocabulary', contentId: 'poetry-prosody',             path: '/vocabulary/poetry-prosody',                  unit: 2 },
            { id: 'c2-discourse',        title: 'Advanced Discourse Markers',   module: 'lectures', type: 'grammar',    contentId: 'discourse-markers-advanced', path: '/lectures/grammar/discourse-markers-advanced', unit: 2 },
            { id: 'c2-cultural',         title: 'Cultural References',          module: 'vocabulary', type: 'vocabulary', contentId: 'cultural-references',        path: '/vocabulary/cultural-references',              unit: 2 },
            { id: 'c2-literary-anal',    title: 'Literary Analysis',            module: 'lectures', type: 'phrases',    contentId: 'literary-analysis',          path: '/lectures/phrases/literary-analysis',                  unit: 2 },
            { id: 'c2-reading-poesie',   title: 'Reading: Baudelaire',          module: 'lectures', type: 'reading',    contentId: 'c2-poesie-symboliste',       path: '/lectures/reading/c2-poesie-symboliste',               unit: 2 },
            // Unit 3 — Literature & Thought
            { id: 'c2-literary-mov',     title: 'Literary Movements',           module: 'vocabulary', type: 'vocabulary', contentId: 'literary-movements',         path: '/vocabulary/literary-movements',               unit: 3 },
            { id: 'c2-high-register',    title: 'High-Register Speech',         module: 'lectures', type: 'phrases',    contentId: 'high-register-speech',       path: '/lectures/phrases/high-register-speech',               unit: 3 },
            { id: 'c2-nuanced-emo',      title: 'Nuanced Emotion',              module: 'vocabulary', type: 'vocabulary', contentId: 'nuanced-emotion',            path: '/vocabulary/nuanced-emotion',                  unit: 3 },
            { id: 'c2-reading-hugo',     title: 'Reading: Hugo',                module: 'lectures', type: 'reading',    contentId: 'c2-hugo-les-miserables',     path: '/lectures/reading/c2-hugo-les-miserables',             unit: 3 },
            { id: 'c2-reading-beauvoir', title: 'Reading: Beauvoir',            module: 'lectures', type: 'reading',    contentId: 'c2-beauvoir-deuxieme-sexe',  path: '/lectures/reading/c2-beauvoir-deuxieme-sexe',          unit: 3 },
            { id: 'c2-reading-sartre',   title: 'Reading: Sartre',              module: 'lectures', type: 'reading',    contentId: 'c2-sartre-huis-clos',        path: '/lectures/reading/c2-sartre-huis-clos',                unit: 3 },
            { id: 'c2-reading-balzac',   title: 'Reading: Balzac',              module: 'lectures', type: 'reading',    contentId: 'c2-balzac-goriot',           path: '/lectures/reading/c2-balzac-goriot',                   unit: 3 },
            // Unit 4 — Mastery
            { id: 'c2-philovocab',       title: 'Philosophical Vocabulary',     module: 'vocabulary', type: 'vocabulary', contentId: 'philosophical-vocabulary',   path: '/vocabulary/philosophical-vocabulary',         unit: 4 },
            { id: 'c2-rhetoric-cl',      title: 'Classical Rhetoric',           module: 'vocabulary', type: 'vocabulary', contentId: 'rhetoric-classical',         path: '/vocabulary/rhetoric-classical',              unit: 4 },
            { id: 'c2-translation',      title: 'Translation & Equivalence',   module: 'lectures', type: 'grammar',    contentId: 'translation-equivalence',    path: '/lectures/grammar/translation-equivalence',    unit: 4 },
            { id: 'c2-spec-register',    title: 'Specialized Register',         module: 'vocabulary', type: 'vocabulary', contentId: 'specialized-register',       path: '/vocabulary/specialized-register',             unit: 4 },
            { id: 'c2-trans-comm',       title: 'Translation Commentary',       module: 'lectures', type: 'phrases',    contentId: 'translation-commentary',     path: '/lectures/phrases/translation-commentary',              unit: 4 },
            { id: 'c2-reading-flaubert', title: 'Reading: Flaubert',            module: 'lectures', type: 'reading',    contentId: 'c2-flaubert-bovary',         path: '/lectures/reading/c2-flaubert-bovary',                 unit: 4 },
            { id: 'c2-reading-essay',    title: 'Reading: On Boredom',          module: 'lectures', type: 'reading',    contentId: 'c2-essay-contemporary',      path: '/lectures/reading/c2-essay-contemporary',              unit: 4 },
            // Unit 5 — Capstone
            { id: 'c2-debate-length',    title: 'Debating at Length',           module: 'lectures', type: 'phrases',    contentId: 'debating-at-length',         path: '/lectures/phrases/debating-at-length',                 unit: 5 },
            { id: 'c2-reading-univ',     title: 'Reading: The University',      module: 'lectures', type: 'reading',    contentId: 'c2-discours-academique',     path: '/lectures/reading/c2-discours-academique',             unit: 5 },
            { id: 'c2-reading-press',    title: 'Reading: Reading an Editorial', module: 'lectures', type: 'reading',   contentId: 'c2-news-analysis',           path: '/lectures/reading/c2-news-analysis',                   unit: 5 },
        ],
    };

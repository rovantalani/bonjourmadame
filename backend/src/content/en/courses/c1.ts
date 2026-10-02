import type { Course } from '../../../types/courses';

export const courseC1: Course = {
        level: 'C1',
        title: 'Avancé',
        description: 'Registre, grammaire littéraire, discours académique et textes authentiques.',
        color: 'var(--course-c1)',
        textColor: 'var(--level-c1-text)',
        units: [
            { number: 1, title: 'Registre & Modalité' },
            { number: 2, title: 'Discours Académique' },
            { number: 3, title: 'Langue Nuancée' },
            { number: 4, title: 'Culture & Littérature' },
            { number: 5, title: 'Pleine Maîtrise & Bilan' },
        ],
        steps: [
            // Unit 1 — Registre & Modalité
            { id: 'c1en-register',          title: 'Registre formel & informel',    module: 'lectures', type: 'grammar',    contentId: 'en-register-formal-informal', path: '/lectures/grammar/en-register-formal-informal', unit: 1 },
            { id: 'c1en-subjunctive-lit',   title: 'Le Subjonctif en anglais',      module: 'lectures', type: 'grammar',    contentId: 'en-subjunctive-mood',          path: '/lectures/grammar/en-subjunctive-mood',         unit: 1 },
            { id: 'c1en-rhetoric',          title: 'Rhétorique & Argumentation',    module: 'vocabulary', type: 'vocabulary', contentId: 'rhetoric-argumentation',       path: '/vocabulary/rhetoric-argumentation',            unit: 1 },
            { id: 'c1en-idioms',            title: 'Idiomes & Expressions',         module: 'vocabulary', type: 'vocabulary', contentId: 'idioms-expressions',           path: '/vocabulary/idioms-expressions',                unit: 1 },
            { id: 'c1en-academic-disc',     title: 'Discours académique',           module: 'lectures', type: 'phrases',    contentId: 'academic-discourse',           path: '/lectures/phrases/academic-discourse',          unit: 1 },
            { id: 'c1en-reading-pol',       title: 'Lecture : The Future of Europe', module: 'lectures', type: 'reading',  contentId: 'c1en-europe',                  path: '/lectures/reading/c1en-europe',                 unit: 1 },
            // Unit 2 — Discours Académique
            { id: 'c1en-reported-adv',      title: 'Style indirect avancé',         module: 'lectures', type: 'grammar',    contentId: 'en-reported-speech-advanced',  path: '/lectures/grammar/en-reported-speech-advanced', unit: 2 },
            { id: 'c1en-law',               title: 'Droit & Administration',        module: 'vocabulary', type: 'vocabulary', contentId: 'law-administration',           path: '/vocabulary/law-administration',                unit: 2 },
            { id: 'c1en-science-philo',     title: 'Science & Philosophie',         module: 'vocabulary', type: 'vocabulary', contentId: 'science-philosophy',           path: '/vocabulary/science-philosophy',                unit: 2 },
            { id: 'c1en-intellectual-deb',  title: 'Débat intellectuel',            module: 'lectures', type: 'phrases',    contentId: 'intellectual-debate',          path: '/lectures/phrases/intellectual-debate',         unit: 2 },
            { id: 'c1en-reading-philo',     title: 'Lecture : On Freedom',         module: 'lectures', type: 'reading',    contentId: 'c1en-freedom',                 path: '/lectures/reading/c1en-freedom',                unit: 2 },
            { id: 'c1en-reading-identite',  title: 'Lecture : The Question of Identity', module: 'lectures', type: 'reading', contentId: 'c1en-identity',             path: '/lectures/reading/c1en-identity',               unit: 2 },
            // Unit 3 — Langue Nuancée
            { id: 'c1en-negation-adv',      title: 'Négation avancée',              module: 'lectures', type: 'grammar',    contentId: 'en-advanced-negation',         path: '/lectures/grammar/en-advanced-negation',        unit: 3 },
            { id: 'c1en-participle',        title: 'Constructions participiales',   module: 'lectures', type: 'grammar',    contentId: 'en-participle-constructions',  path: '/lectures/grammar/en-participle-constructions', unit: 3 },
            { id: 'c1en-faux-amis',         title: 'Faux Amis',                     module: 'vocabulary', type: 'vocabulary', contentId: 'faux-amis',                    path: '/vocabulary/faux-amis',                         unit: 3 },
            { id: 'c1en-literary',          title: 'Vocabulaire littéraire',        module: 'vocabulary', type: 'vocabulary', contentId: 'literary-abstract',            path: '/vocabulary/literary-abstract',                 unit: 3 },
            { id: 'c1en-emotion-subtly',    title: 'Exprimer les émotions',         module: 'lectures', type: 'phrases',    contentId: 'expressing-emotion-subtly',    path: '/lectures/phrases/expressing-emotion-subtly',   unit: 3 },
            { id: 'c1en-reading-social',    title: 'Lecture : Rural Healthcare',   module: 'lectures', type: 'reading',    contentId: 'c1en-healthcare',              path: '/lectures/reading/c1en-healthcare',             unit: 3 },
            // Unit 4 — Culture & Littérature
            { id: 'c1en-history',           title: 'Histoire & Civilisation',       module: 'vocabulary', type: 'vocabulary', contentId: 'history-civilisation',         path: '/vocabulary/history-civilisation',               unit: 4 },
            { id: 'c1en-aesthetics',        title: 'Esthétique & Critique',         module: 'vocabulary', type: 'vocabulary', contentId: 'aesthetics-criticism',         path: '/vocabulary/aesthetics-criticism',               unit: 4 },
            { id: 'c1en-cultural-comm',     title: 'Commentaire culturel',          module: 'lectures', type: 'phrases',    contentId: 'cultural-commentary',          path: '/lectures/phrases/cultural-commentary',          unit: 4 },
            { id: 'c1en-reading-moliere',   title: 'Lecture : Shakespeare',        module: 'lectures', type: 'reading',    contentId: 'c1en-shakespeare',             path: '/lectures/reading/c1en-shakespeare',            unit: 4 },
            { id: 'c1en-reading-camus',     title: 'Lecture : Orwell',             module: 'lectures', type: 'reading',    contentId: 'c1en-orwell',                  path: '/lectures/reading/c1en-orwell',                 unit: 4 },
            { id: 'c1en-reading-voltaire',  title: 'Lecture : Austen',             module: 'lectures', type: 'reading',    contentId: 'c1en-austen',                  path: '/lectures/reading/c1en-austen',                 unit: 4 },
            { id: 'c1en-reading-ernaux',    title: 'Lecture : Dickens',            module: 'lectures', type: 'reading',    contentId: 'c1en-dickens',                 path: '/lectures/reading/c1en-dickens',                unit: 4 },
            // Unit 5 — Pleine Maîtrise & Bilan
            { id: 'c1en-proverbs',          title: 'Proverbes & Expressions',       module: 'lectures', type: 'phrases',    contentId: 'proverbs-sayings',             path: '/lectures/phrases/proverbs-sayings',             unit: 5 },
            { id: 'c1en-formal',            title: 'Argumentation formelle',        module: 'lectures', type: 'phrases',    contentId: 'formal-argumentation',         path: '/lectures/phrases/formal-argumentation',         unit: 5 },
            { id: 'c1en-nuanced-adj',       title: 'Adjectifs nuancés',             module: 'vocabulary', type: 'vocabulary', contentId: 'nuanced-adjectives',           path: '/vocabulary/nuanced-adjectives',                 unit: 5 },
            { id: 'c1en-human-condition',   title: 'La Condition humaine',          module: 'vocabulary', type: 'vocabulary', contentId: 'human-condition',              path: '/vocabulary/human-condition',                    unit: 5 },
            { id: 'c1en-reading-droit',     title: 'Lecture : The Right to Be Forgotten', module: 'lectures', type: 'reading', contentId: 'c1en-privacy',            path: '/lectures/reading/c1en-privacy',                unit: 5 },
        ],
    };

import type { Course } from '../../../types/courses';

export const courseB2: Course = {
        level: 'B2',
        title: 'Intermediate',
        description: 'Master advanced grammar, authentic French texts, formal writing, and complex discourse.',
        color: 'var(--course-b2)',
        textColor: 'var(--level-b2-text)',
        units: [
            { number: 1, title: 'Unit 1 — Grammaire Complexe' },
            { number: 2, title: 'Unit 2 — Expression Nuancée' },
            { number: 3, title: 'Unit 3 — Français Professionnel' },
            { number: 4, title: 'Unit 4 — Textes Authentiques' },
            { number: 5, title: 'Unit 5 — Maîtrise de la Complexité' },
        ],
        steps: [
            // Unit 1 — Grammaire Complexe (7 steps)
            { id: 'b2-subjonctif',            title: 'The Subjunctive',                module: 'lectures', type: 'grammar',    contentId: 'subjonctif',                    path: '/lectures/grammar/subjonctif',                     unit: 1 },
            { id: 'b2-subjunctive-advanced',  title: 'Subjonctif Avancé',              module: 'lectures', type: 'grammar',    contentId: 'subjunctive-advanced',          path: '/lectures/grammar/subjunctive-advanced',           unit: 1 },
            { id: 'b2-politics',              title: 'Politics & Society',             module: 'vocabulary', type: 'vocabulary', contentId: 'politics-society',              path: '/vocabulary/politics-society',                    unit: 1 },
            { id: 'b2-si-clauses',            title: 'Si : Hypothèses & Regrets',      module: 'lectures', type: 'grammar',    contentId: 'si-clauses-type2-3',            path: '/lectures/grammar/si-clauses-type2-3',             unit: 1 },
            { id: 'b2-business',              title: 'Business & Economy',             module: 'vocabulary', type: 'vocabulary', contentId: 'business-economy',              path: '/vocabulary/business-economy',                    unit: 1 },
            { id: 'b2-passive',               title: 'Passive Voice',                  module: 'lectures', type: 'grammar',    contentId: 'passive-voice',                 path: '/lectures/grammar/passive-voice',                  unit: 1 },
            { id: 'b2-reading-education',     title: 'Reading: L\'École de la République', module: 'lectures', type: 'reading', contentId: 'b2-article-education',         path: '/lectures/reading/b2-article-education',                   unit: 1 },
            // Unit 2 — Expression Nuancée (7 steps)
            { id: 'b2-reported',              title: 'Reported Speech',                module: 'lectures', type: 'grammar',    contentId: 'reported-speech',               path: '/lectures/grammar/reported-speech',                unit: 2 },
            { id: 'b2-media-journalism',      title: 'Media & Journalism',             module: 'vocabulary', type: 'vocabulary', contentId: 'media-journalism',              path: '/vocabulary/media-journalism',                    unit: 2 },
            { id: 'b2-gerondif',              title: 'Le Gérondif',                    module: 'lectures', type: 'grammar',    contentId: 'gerondif',                      path: '/lectures/grammar/gerondif',                       unit: 2 },
            { id: 'b2-cleft-sentences',       title: 'Emphasis & Cleft Sentences',     module: 'lectures', type: 'grammar',    contentId: 'emphasis-cleft-sentences',      path: '/lectures/grammar/emphasis-cleft-sentences',       unit: 2 },
            { id: 'b2-science-tech',          title: 'Science & Technology',           module: 'vocabulary', type: 'vocabulary', contentId: 'science-technology',            path: '/vocabulary/science-technology',                  unit: 2 },
            { id: 'b2-debating',              title: 'Debating & Persuading',          module: 'lectures', type: 'phrases',    contentId: 'debating-persuading',           path: '/lectures/phrases/debating-persuading',                    unit: 2 },
            { id: 'b2-reading-ecologie',      title: 'Reading: Nucléaire ou Renouvelable', module: 'lectures', type: 'reading', contentId: 'b2-debat-ecologie',            path: '/lectures/reading/b2-debat-ecologie',                      unit: 2 },
            // Unit 3 — Français Professionnel (6 steps)
            { id: 'b2-concession',            title: 'Concession & Opposition',        module: 'lectures', type: 'grammar',    contentId: 'concession-opposition',         path: '/lectures/grammar/concession-opposition',          unit: 3 },
            { id: 'b2-work-pro',              title: 'Professional French',            module: 'lectures', type: 'phrases',    contentId: 'work-professional',             path: '/lectures/phrases/work-professional',                      unit: 3 },
            { id: 'b2-law',                   title: 'Law & Justice',                  module: 'vocabulary', type: 'vocabulary', contentId: 'law-justice',                   path: '/vocabulary/law-justice',                         unit: 3 },
            { id: 'b2-nominalisation',        title: 'La Nominalisation',              module: 'lectures', type: 'grammar',    contentId: 'nominalisation',                path: '/lectures/grammar/nominalisation',                 unit: 3 },
            { id: 'b2-formal-correspondence', title: 'Formal Correspondence',          module: 'lectures', type: 'phrases',    contentId: 'formal-correspondence',         path: '/lectures/phrases/formal-correspondence',                  unit: 3 },
            { id: 'b2-reading-lettre',        title: 'Reading: Lettre Ouverte',        module: 'lectures', type: 'reading',    contentId: 'b2-lettre-ouverte',             path: '/lectures/reading/b2-lettre-ouverte',                      unit: 3 },
            // Unit 4 — Textes Authentiques (6 steps)
            { id: 'b2-adv-verbs',             title: 'Advanced Irregular Verbs',       module: 'verbs', type: 'verbs',      contentId: 'b2',      path: '/verbs/b2',               unit: 4 },
            { id: 'b2-philosophy',            title: 'Philosophy & Ethics',            module: 'vocabulary', type: 'vocabulary', contentId: 'philosophy-ethics',             path: '/vocabulary/philosophy-ethics',                   unit: 4 },
            { id: 'b2-infinitive',            title: 'Infinitive Constructions',       module: 'lectures', type: 'grammar',    contentId: 'infinitive-constructions',      path: '/lectures/grammar/infinitive-constructions',       unit: 4 },
            { id: 'b2-arts',                  title: 'Arts & Criticism',               module: 'vocabulary', type: 'vocabulary', contentId: 'arts-and-criticism',            path: '/vocabulary/arts-and-criticism',                  unit: 4 },
            { id: 'b2-emotions-reactions',    title: 'Emotions & Reactions',           module: 'lectures', type: 'phrases',    contentId: 'emotions-reactions',            path: '/lectures/phrases/emotions-reactions',                     unit: 4 },
            { id: 'b2-reading-chronique',     title: 'Reading: Réseaux Sociaux',       module: 'lectures', type: 'reading',    contentId: 'b2-chronique-societale',        path: '/lectures/reading/b2-chronique-societale',                 unit: 4 },
            // Unit 5 — Maîtrise de la Complexité (7 steps)
            { id: 'b2-subj-vs-indic',         title: 'Subjonctif ou Indicatif ?',      module: 'lectures', type: 'grammar',    contentId: 'subjunctive-vs-indicative',     path: '/lectures/grammar/subjunctive-vs-indicative',      unit: 5 },
            { id: 'b2-urban-society',         title: 'Urban Society',                  module: 'vocabulary', type: 'vocabulary', contentId: 'urban-society',                 path: '/vocabulary/urban-society',                       unit: 5 },
            { id: 'b2-formal-arg',            title: 'Formal Argumentation',           module: 'lectures', type: 'phrases',    contentId: 'formal-argumentation',          path: '/lectures/phrases/formal-argumentation',                   unit: 5 },
            { id: 'b2-discussing-society',    title: 'Discussing Society',             module: 'lectures', type: 'phrases',    contentId: 'discussing-society',            path: '/lectures/phrases/discussing-society',                     unit: 5 },
            { id: 'b2-reading-nouvelles',     title: 'Reading: Le Retour',             module: 'lectures', type: 'reading',    contentId: 'b2-nouvelles-francophones',     path: '/lectures/reading/b2-nouvelles-francophones',               unit: 5 },
            { id: 'b2-reading-intellectuel',  title: 'Reading: Entretien avec une Philosophe', module: 'lectures', type: 'reading', contentId: 'b2-interview-intellectuel', path: '/lectures/reading/b2-interview-intellectuel',             unit: 5 },
            { id: 'b2-reading-science',       title: 'Reading: L\'IA et la Médecine',  module: 'lectures', type: 'reading',    contentId: 'b2-article-scientifique-vulgarise', path: '/lectures/reading/b2-article-scientifique-vulgarise',  unit: 5 },
        ],
    };

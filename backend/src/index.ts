import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import { vocabularyData } from './data/vocabulary';
import { verbGroups, verbsData, verbById, verbGroupMap } from './data/verbs';
import { grammarLessons } from './data/grammarLessons';
import { grammarLessonsEN } from './data/grammarLessonsEN';
import { helperVerbsDataEN, verbGroupsEN, verbsDataEN } from './data/verbsEN';
import { phraseCategories } from './data/phrases';
import { readingPassages } from './data/readingPassages';
import { migrate } from './db/migrate';
import authRouter from './routes/auth';
import progressRouter from './routes/progress';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Auth routes
app.use('/api/auth', authRouter);

// Progress routes
app.use('/api/progress', progressRouter);

// Helper verbs data
const helperVerbsData: Record<string, {
    title: string;
    translation: string;
    color: string;
    rows: { sujet: string; present: string; passeCompose: string; imparfait: string; futurSimple: string }[];
}> = {
    etre: {
        title: 'Être',
        translation: 'to be',
        color: '#2563EB',
        rows: [
            { sujet: 'je',        present: 'suis',    passeCompose: 'ai été',      imparfait: 'étais',    futurSimple: 'serai'  },
            { sujet: 'tu',        present: 'es',      passeCompose: 'as été',      imparfait: 'étais',    futurSimple: 'seras'  },
            { sujet: 'il/elle',   present: 'est',     passeCompose: 'a été',       imparfait: 'était',    futurSimple: 'sera'   },
            { sujet: 'nous',      present: 'sommes',  passeCompose: 'avons été',   imparfait: 'étions',   futurSimple: 'serons' },
            { sujet: 'vous',      present: 'êtes',    passeCompose: 'avez été',    imparfait: 'étiez',    futurSimple: 'serez'  },
            { sujet: 'ils/elles', present: 'sont',    passeCompose: 'ont été',     imparfait: 'étaient',  futurSimple: 'seront' },
        ],
    },
    avoir: {
        title: 'Avoir',
        translation: 'to have',
        color: '#16A34A',
        rows: [
            { sujet: 'je',        present: 'ai',      passeCompose: 'ai eu',       imparfait: 'avais',    futurSimple: 'aurai'  },
            { sujet: 'tu',        present: 'as',      passeCompose: 'as eu',       imparfait: 'avais',    futurSimple: 'auras'  },
            { sujet: 'il/elle',   present: 'a',       passeCompose: 'a eu',        imparfait: 'avait',    futurSimple: 'aura'   },
            { sujet: 'nous',      present: 'avons',   passeCompose: 'avons eu',    imparfait: 'avions',   futurSimple: 'aurons' },
            { sujet: 'vous',      present: 'avez',    passeCompose: 'avez eu',     imparfait: 'aviez',    futurSimple: 'aurez'  },
            { sujet: 'ils/elles', present: 'ont',     passeCompose: 'ont eu',      imparfait: 'avaient',  futurSimple: 'auront' },
        ],
    },
    faire: {
        title: 'Faire',
        translation: 'to do / make',
        color: '#EA580C',
        rows: [
            { sujet: 'je',        present: 'fais',    passeCompose: 'ai fait',     imparfait: 'faisais',   futurSimple: 'ferai'  },
            { sujet: 'tu',        present: 'fais',    passeCompose: 'as fait',     imparfait: 'faisais',   futurSimple: 'feras'  },
            { sujet: 'il/elle',   present: 'fait',    passeCompose: 'a fait',      imparfait: 'faisait',   futurSimple: 'fera'   },
            { sujet: 'nous',      present: 'faisons', passeCompose: 'avons fait',  imparfait: 'faisions',  futurSimple: 'ferons' },
            { sujet: 'vous',      present: 'faites',  passeCompose: 'avez fait',   imparfait: 'faisiez',   futurSimple: 'ferez'  },
            { sujet: 'ils/elles', present: 'font',    passeCompose: 'ont fait',    imparfait: 'faisaient', futurSimple: 'feront' },
        ],
    },
    aller: {
        title: 'Aller',
        translation: 'to go',
        color: '#7C3AED',
        rows: [
            { sujet: 'je',        present: 'vais',   passeCompose: 'suis allé(e)',    imparfait: 'allais',   futurSimple: 'irai'  },
            { sujet: 'tu',        present: 'vas',    passeCompose: 'es allé(e)',      imparfait: 'allais',   futurSimple: 'iras'  },
            { sujet: 'il/elle',   present: 'va',     passeCompose: 'est allé(e)',     imparfait: 'allait',   futurSimple: 'ira'   },
            { sujet: 'nous',      present: 'allons', passeCompose: 'sommes allé(e)s', imparfait: 'allions',  futurSimple: 'irons' },
            { sujet: 'vous',      present: 'allez',  passeCompose: 'êtes allé(e)s',  imparfait: 'alliez',   futurSimple: 'irez'  },
            { sujet: 'ils/elles', present: 'vont',   passeCompose: 'sont allé(e)s',  imparfait: 'allaient', futurSimple: 'iront' },
        ],
    },
    venir: {
        title: 'Venir',
        translation: 'to come',
        color: '#DC2626',
        rows: [
            { sujet: 'je',        present: 'viens',    passeCompose: 'suis venu(e)',    imparfait: 'venais',   futurSimple: 'viendrai'  },
            { sujet: 'tu',        present: 'viens',    passeCompose: 'es venu(e)',      imparfait: 'venais',   futurSimple: 'viendras'  },
            { sujet: 'il/elle',   present: 'vient',    passeCompose: 'est venu(e)',     imparfait: 'venait',   futurSimple: 'viendra'   },
            { sujet: 'nous',      present: 'venons',   passeCompose: 'sommes venu(e)s', imparfait: 'venions',  futurSimple: 'viendrons' },
            { sujet: 'vous',      present: 'venez',    passeCompose: 'êtes venu(e)s',  imparfait: 'veniez',   futurSimple: 'viendrez'  },
            { sujet: 'ils/elles', present: 'viennent', passeCompose: 'sont venu(e)s',  imparfait: 'venaient', futurSimple: 'viendront' },
        ],
    },
};

// Routes
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from the backend!' });
});

app.get('/api/vocabulary-modules', (req: Request, res: Response) => {
    const langFR = req.query['lang'] === 'fr';
    const moduleMeta: { id: string; title: string; titleFR: string; description: string; descriptionFR: string; icon: string; color: string; wordCount: number }[] = [
        { id: 'sherlock-holmes-ch1', title: 'Sherlock Holmes — Ch. 1', titleFR: 'Sherlock Holmes — Ch. 1',    description: 'Vocabulary from the first chapter',                              descriptionFR: 'Vocabulaire du premier chapitre',                               icon: '🔍', color: '#8B5CF6', wordCount: 0 },
        { id: 'sherlock-holmes-ch2', title: 'Sherlock Holmes — Ch. 2', titleFR: 'Sherlock Holmes — Ch. 2',    description: 'Mystery & deduction vocabulary',                                 descriptionFR: 'Vocabulaire mystère et déduction',                              icon: '🕵️', color: '#6D28D9', wordCount: 0 },
        { id: 'daily-life-advanced', title: 'Advanced Daily Life',     titleFR: 'Vie quotidienne avancée',    description: 'Everyday French at an advanced level',                           descriptionFR: 'Le français du quotidien à un niveau avancé',                   icon: '🏠', color: '#059669', wordCount: 0 },
        { id: 'emotions-psychology', title: 'Emotions & Psychology',   titleFR: 'Émotions & Psychologie',     description: 'Express feelings and mental states',                             descriptionFR: 'Exprimer ses émotions et états mentaux',                        icon: '💭', color: '#DC2626', wordCount: 0 },
        { id: 'travel-culture',      title: 'Travel & Culture',        titleFR: 'Voyage & Culture',           description: 'Navigate travel and cultural topics',                            descriptionFR: 'Naviguer les sujets de voyage et de culture',                   icon: '✈️', color: '#2563EB', wordCount: 0 },
        { id: 'greetings-basics',    title: 'Greetings & Essentials',  titleFR: 'Salutations & Essentiels',   description: 'Essential phrases to start any conversation',                    descriptionFR: 'Expressions essentielles pour commencer une conversation',       icon: '👋', color: '#F59E0B', wordCount: 0 },
        { id: 'numbers-time',        title: 'Numbers & Time',          titleFR: 'Chiffres & Temps',           description: 'Tell the time and express when things happen',                   descriptionFR: "Dire l'heure et exprimer quand les choses se passent",           icon: '🕐', color: '#06B6D4', wordCount: 0 },
        { id: 'colors-descriptions', title: 'Colors & Descriptions',   titleFR: 'Couleurs & Descriptions',    description: 'Describe people, places and things',                             descriptionFR: 'Décrire des personnes, des lieux et des objets',                 icon: '🎨', color: '#EC4899', wordCount: 0 },
        { id: 'family-relationships',title: 'Family & Relationships',  titleFR: 'Famille & Relations',        description: 'Talk about the people in your life',                             descriptionFR: 'Parler des personnes de votre vie',                             icon: '👨‍👩‍👧‍👦', color: '#10B981', wordCount: 0 },
        { id: 'food-drinks',         title: 'Food & Drinks',           titleFR: 'Nourriture & Boissons',      description: 'Eat, drink and order with confidence',                           descriptionFR: 'Manger, boire et commander avec assurance',                     icon: '🍷', color: '#EF4444', wordCount: 0 },
        { id: 'body-health',         title: 'Body & Health',           titleFR: 'Corps & Santé',              description: 'Talk about your body and wellbeing',                             descriptionFR: 'Parler de votre corps et de votre bien-être',                   icon: '🏥', color: '#6366F1', wordCount: 0 },
        { id: 'home-living',         title: 'Home & Living',           titleFR: 'Maison & Vie quotidienne',   description: 'Vocabulary for your home and daily living',                      descriptionFR: 'Vocabulaire pour la maison et la vie quotidienne',               icon: '🏠', color: '#84CC16', wordCount: 0 },
        { id: 'work-professions',    title: 'Work & Professions',      titleFR: 'Travail & Professions',      description: 'Navigate the workplace in French',                               descriptionFR: 'Naviguer le monde du travail en français',                      icon: '💼', color: '#F97316', wordCount: 0 },
        { id: 'weather-nature',      title: 'Weather & Nature',        titleFR: 'Météo & Nature',             description: 'Describe the world around you',                                  descriptionFR: 'Décrire le monde qui vous entoure',                             icon: '🌿', color: '#14B8A6', wordCount: 0 },
        { id: 'sports-hobbies',      title: 'Sports & Hobbies',        titleFR: 'Sports & Loisirs',           description: 'Talk about what you love doing',                                 descriptionFR: 'Parler de ce que vous aimez faire',                             icon: '⚽', color: '#8B5CF6', wordCount: 0 },
        { id: 'school-education',    title: 'School & Education',      titleFR: 'École & Éducation',          description: 'Academic and learning vocabulary',                               descriptionFR: 'Vocabulaire académique et scolaire',                            icon: '📚', color: '#0EA5E9', wordCount: 0 },
        { id: 'technology-media',    title: 'Technology & Media',      titleFR: 'Technologie & Médias',       description: 'The digital world in French',                                    descriptionFR: 'Le monde numérique en français',                                icon: '💻', color: '#A855F7', wordCount: 0 },
        { id: 'shopping-money',      title: 'Shopping & Money',        titleFR: 'Shopping & Argent',          description: 'Buy, sell and manage finances',                                  descriptionFR: 'Acheter, vendre et gérer ses finances',                         icon: '🛍️', color: '#F43F5E', wordCount: 0 },
        { id: 'politics-society',    title: 'Politics & Society',      titleFR: 'Politique & Société',        description: 'Advanced civic and social vocabulary',                           descriptionFR: 'Vocabulaire civique et social avancé',                          icon: '🏛️', color: '#475569', wordCount: 0 },
        { id: 'business-economy',    title: 'Business & Economy',      titleFR: 'Affaires & Économie',        description: 'Professional and economic French',                               descriptionFR: 'Le français professionnel et économique',                        icon: '📈', color: '#78716C', wordCount: 0 },
        { id: 'idioms-expressions',  title: 'Idioms & Expressions',    titleFR: 'Idiomes & Expressions',      description: 'Figurative French that cannot be translated literally',           descriptionFR: 'Le français figuré qui ne se traduit pas littéralement',         icon: '🎭', color: '#9333EA', wordCount: 0 },
        { id: 'faux-amis',           title: 'Faux Amis',               titleFR: 'Faux Amis',                  description: "False friends — words that look English but aren't",             descriptionFR: "Mots qui ressemblent à l'anglais mais ne le sont pas",           icon: '⚠️', color: '#DC2626', wordCount: 0 },
        { id: 'literary-abstract',   title: 'Literary & Abstract',     titleFR: 'Littéraire & Abstrait',      description: 'Vocabulary from literature and elevated discourse',               descriptionFR: 'Vocabulaire littéraire et du discours soutenu',                  icon: '📜', color: '#6366F1', wordCount: 0 },
        { id: 'nuanced-adjectives',  title: 'Nuanced Adjectives',      titleFR: 'Adjectifs nuancés',          description: 'Precise adjectives for character and description',                descriptionFR: 'Adjectifs précis pour le caractère et la description',           icon: '🎯', color: '#0891B2', wordCount: 0 },
        { id: 'law-administration',  title: 'Law & Administration',    titleFR: 'Droit & Administration',     description: 'Legal, judicial and administrative vocabulary',                   descriptionFR: 'Vocabulaire juridique et administratif',                         icon: '⚖️', color: '#475569', wordCount: 0 },
        { id: 'human-condition',         title: 'The Human Condition',         titleFR: 'La Condition humaine',          description: 'Philosophy, ethics and the language of ideas',               descriptionFR: 'Philosophie, éthique et langage des idées',                icon: '🧠', color: '#4F46E5', wordCount: 0 },
        { id: 'abstract-thought',        title: 'Abstract Thought',            titleFR: 'Pensée abstraite',              description: 'Vocabulary for abstract reasoning and ideas',                descriptionFR: 'Vocabulaire pour le raisonnement abstrait et les idées',   icon: '💡', color: '#6366F1', wordCount: 0 },
        { id: 'aesthetics-criticism',    title: 'Aesthetics & Criticism',      titleFR: 'Esthétique & Critique',         description: 'Language of artistic taste and critical analysis',           descriptionFR: 'Langage du goût artistique et de l\'analyse critique',     icon: '🖼️', color: '#9333EA', wordCount: 0 },
        { id: 'animals',                 title: 'Animals',                     titleFR: 'Animaux',                       description: 'Wildlife, pets and the animal kingdom',                      descriptionFR: 'Faune, animaux domestiques et règne animal',               icon: '🐾', color: '#10B981', wordCount: 0 },
        { id: 'art-culture',             title: 'Art & Culture',               titleFR: 'Art & Culture',                 description: 'Explore French art and cultural life',                       descriptionFR: 'Explorer l\'art et la vie culturelle française',            icon: '🎨', color: '#EC4899', wordCount: 0 },
        { id: 'arts-and-criticism',      title: 'Arts & Literary Criticism',   titleFR: 'Arts & Critique littéraire',    description: 'Vocabulary for analysing and critiquing works of art',       descriptionFR: 'Vocabulaire pour analyser et critiquer les œuvres d\'art', icon: '📝', color: '#7C3AED', wordCount: 0 },
        { id: 'celebrations-events',     title: 'Celebrations & Events',       titleFR: 'Célébrations & Événements',     description: 'Holidays, ceremonies and special occasions',                 descriptionFR: 'Fêtes, cérémonies et occasions spéciales',                 icon: '🎉', color: '#F59E0B', wordCount: 0 },
        { id: 'city-places',             title: 'City & Places',               titleFR: 'Ville & Lieux',                 description: 'Navigate urban spaces and talk about places',                descriptionFR: 'Naviguer les espaces urbains et parler des lieux',         icon: '🏙️', color: '#0EA5E9', wordCount: 0 },
        { id: 'clothing-accessories',    title: 'Clothing & Accessories',      titleFR: 'Vêtements & Accessoires',       description: 'Fashion, clothing and personal style',                       descriptionFR: 'Mode, vêtements et style personnel',                       icon: '👗', color: '#F43F5E', wordCount: 0 },
        { id: 'cultural-references',     title: 'Cultural References',         titleFR: 'Références culturelles',        description: 'Key cultural touchstones of the French-speaking world',     descriptionFR: 'Références culturelles clés du monde francophone',         icon: '🗼', color: '#2563EB', wordCount: 0 },
        { id: 'days-months',             title: 'Days & Months',               titleFR: 'Jours & Mois',                  description: 'Calendar vocabulary, days, months and dates',                descriptionFR: 'Vocabulaire du calendrier, jours, mois et dates',          icon: '📅', color: '#06B6D4', wordCount: 0 },
        { id: 'environment-ecology',     title: 'Environment & Ecology',       titleFR: 'Environnement & Écologie',      description: 'Nature, ecology and environmental issues',                   descriptionFR: 'Nature, écologie et enjeux environnementaux',              icon: '🌍', color: '#059669', wordCount: 0 },
        { id: 'food-culture',            title: 'Food Culture',                titleFR: 'Culture culinaire',             description: 'French gastronomy, cuisine and food traditions',             descriptionFR: 'Gastronomie, cuisine et traditions alimentaires françaises',icon: '🥗', color: '#EF4444', wordCount: 0 },
        { id: 'health-doctor',           title: 'Health & Doctor',             titleFR: 'Santé & Médecin',               description: 'Medical vocabulary and doctor consultations',                descriptionFR: 'Vocabulaire médical et consultations chez le médecin',     icon: '🩺', color: '#DC2626', wordCount: 0 },
        { id: 'health-lifestyle',        title: 'Health & Lifestyle',          titleFR: 'Santé & Mode de vie',           description: 'Wellbeing, fitness and healthy living',                      descriptionFR: 'Bien-être, forme physique et vie saine',                   icon: '🏃', color: '#16A34A', wordCount: 0 },
        { id: 'history-civilisation',    title: 'History & Civilisation',      titleFR: 'Histoire & Civilisation',       description: 'Key vocabulary for historical and civilisational topics',   descriptionFR: 'Vocabulaire clé pour les sujets historiques et civilisationnels', icon: '🏛️', color: '#78716C', wordCount: 0 },
        { id: 'housing-urban',           title: 'Housing & Urban Life',        titleFR: 'Logement & Vie urbaine',        description: 'Housing, apartments and city living',                        descriptionFR: 'Logement, appartements et vie en ville',                   icon: '🏘️', color: '#84CC16', wordCount: 0 },
        { id: 'law-justice',             title: 'Law & Justice',               titleFR: 'Droit & Justice',               description: 'Legal systems, courts and justice vocabulary',               descriptionFR: 'Systèmes juridiques, tribunaux et vocabulaire judiciaire', icon: '⚖️', color: '#475569', wordCount: 0 },
        { id: 'literary-movements',      title: 'Literary Movements',          titleFR: 'Mouvements littéraires',        description: 'Vocabulary for major literary schools and movements',        descriptionFR: 'Vocabulaire des grandes écoles et mouvements littéraires', icon: '📖', color: '#4338CA', wordCount: 0 },
        { id: 'media-journalism',        title: 'Media & Journalism',          titleFR: 'Médias & Journalisme',          description: 'Press, broadcast media and journalistic language',           descriptionFR: 'Presse, médias audiovisuels et langage journalistique',    icon: '📰', color: '#0284C7', wordCount: 0 },
        { id: 'media-news',              title: 'Media & News',                titleFR: 'Médias & Actualités',           description: 'Current affairs and news media vocabulary',                  descriptionFR: 'Actualités et vocabulaire des médias d\'information',      icon: '📡', color: '#0369A1', wordCount: 0 },
        { id: 'nationalities',           title: 'Nationalities',               titleFR: 'Nationalités',                  description: 'Countries, nationalities and demonyms',                      descriptionFR: 'Pays, nationalités et gentilés',                           icon: '🌐', color: '#14B8A6', wordCount: 0 },
        { id: 'nuanced-emotion',         title: 'Nuanced Emotions',            titleFR: 'Émotions nuancées',             description: 'Subtle and complex emotional vocabulary',                    descriptionFR: 'Vocabulaire émotionnel subtil et complexe',                icon: '💫', color: '#8B5CF6', wordCount: 0 },
        { id: 'personality-character',   title: 'Personality & Character',     titleFR: 'Personnalité & Caractère',      description: 'Describe personality traits and character',                  descriptionFR: 'Décrire les traits de personnalité et le caractère',       icon: '🧑', color: '#F97316', wordCount: 0 },
        { id: 'philosophical-vocabulary',title: 'Philosophical Vocabulary',    titleFR: 'Vocabulaire philosophique',     description: 'Core terms from philosophy and critical thinking',           descriptionFR: 'Termes fondamentaux de la philosophie et de la pensée critique', icon: '🤔', color: '#7C3AED', wordCount: 0 },
        { id: 'philosophy-ethics',       title: 'Philosophy & Ethics',         titleFR: 'Philosophie & Éthique',         description: 'Moral philosophy and ethical discourse',                     descriptionFR: 'Philosophie morale et discours éthique',                   icon: '⚗️', color: '#6D28D9', wordCount: 0 },
        { id: 'poetry-prosody',          title: 'Poetry & Prosody',            titleFR: 'Poésie & Prosodie',             description: 'The vocabulary of poetic form and verse',                    descriptionFR: 'Le vocabulaire de la forme poétique et du vers',           icon: '✍️', color: '#DB2777', wordCount: 0 },
        { id: 'relationships-social',    title: 'Relationships & Social Life', titleFR: 'Relations & Vie sociale',       description: 'Social bonds, friendships and relationships',                descriptionFR: 'Liens sociaux, amitiés et relations',                      icon: '🤝', color: '#10B981', wordCount: 0 },
        { id: 'rhetoric-argumentation',  title: 'Rhetoric & Argumentation',    titleFR: 'Rhétorique & Argumentation',    description: 'The art of persuasion and structured argument',              descriptionFR: 'L\'art de la persuasion et de l\'argumentation structurée',icon: '🗣️', color: '#B45309', wordCount: 0 },
        { id: 'rhetoric-classical',      title: 'Classical Rhetoric',          titleFR: 'Rhétorique classique',          description: 'Figures of speech and classical rhetorical devices',        descriptionFR: 'Figures de style et procédés rhétoriques classiques',      icon: '📜', color: '#92400E', wordCount: 0 },
        { id: 'science-philosophy',      title: 'Philosophy of Science',       titleFR: 'Philosophie des sciences',      description: 'Epistemology and the language of scientific thought',       descriptionFR: 'Épistémologie et langage de la pensée scientifique',       icon: '🔬', color: '#0F766E', wordCount: 0 },
        { id: 'science-technology',      title: 'Science & Technology',        titleFR: 'Science & Technologie',         description: 'Scientific concepts and modern technology',                  descriptionFR: 'Concepts scientifiques et technologie moderne',             icon: '🧬', color: '#0891B2', wordCount: 0 },
        { id: 'seasons-activities',      title: 'Seasons & Activities',        titleFR: 'Saisons & Activités',           description: 'Seasonal vocabulary and leisure activities',                 descriptionFR: 'Vocabulaire saisonnier et activités de loisirs',           icon: '🍂', color: '#D97706', wordCount: 0 },
        { id: 'seasons-weather',         title: 'Seasons & Weather',           titleFR: 'Saisons & Météo',               description: 'Weather patterns and seasonal changes',                      descriptionFR: 'Conditions météorologiques et changements saisonniers',    icon: '🌤️', color: '#0284C7', wordCount: 0 },
        { id: 'specialized-register',    title: 'Specialized Register',        titleFR: 'Registre spécialisé',           description: 'Technical and domain-specific French vocabulary',            descriptionFR: 'Vocabulaire technique et spécifique à un domaine',         icon: '🎓', color: '#4F46E5', wordCount: 0 },
        { id: 'transport-basics',        title: 'Transport Basics',            titleFR: 'Transport — Bases',             description: 'Everyday transport and getting around',                      descriptionFR: 'Transport quotidien et déplacements',                      icon: '🚌', color: '#16A34A', wordCount: 0 },
        { id: 'transport-travel',        title: 'Transport & Travel',          titleFR: 'Transport & Voyage',            description: 'Long-distance travel, airports and booking',                 descriptionFR: 'Voyages longue distance, aéroports et réservations',       icon: '✈️', color: '#2563EB', wordCount: 0 },
        { id: 'urban-society',           title: 'Urban Society',               titleFR: 'Société urbaine',               description: 'City life, social structures and urban issues',              descriptionFR: 'Vie urbaine, structures sociales et enjeux de la ville',   icon: '🌆', color: '#6366F1', wordCount: 0 },
    ];
    const result = moduleMeta.map(m => ({
        id: m.id,
        title: langFR ? m.titleFR : m.title,
        description: langFR ? m.descriptionFR : m.description,
        icon: m.icon,
        color: m.color,
        wordCount: (vocabularyData[m.id] ?? []).length,
    }));
    res.json(result);
});

app.get('/api/vocabulary/:moduleId', (req: Request, res: Response) => {
    const moduleId = req.params['moduleId'] as string;
    const words = vocabularyData[moduleId];
    if (!words) {
        res.status(404).json({ error: 'Module not found' });
        return;
    }
    res.json(words);
});

app.get('/api/helper-verbs/:verbId', (req: Request, res: Response) => {
    const verbId = req.params['verbId'] as string;
    const langFR = req.query['lang'] === 'fr';
    const verb = langFR ? helperVerbsDataEN[verbId] : helperVerbsData[verbId];
    if (!verb) {
        res.status(404).json({ error: 'Verb not found' });
        return;
    }
    res.json(verb);
});

app.get('/api/verb-group/:groupId', (req: Request, res: Response) => {
    const groupId = req.params['groupId'] as string;
    const langFR = req.query['lang'] === 'fr';
    const groups = langFR ? verbGroupsEN : verbGroups;
    const data   = langFR ? verbsDataEN  : verbsData;
    const group = groups[groupId];
    if (!group) {
        res.status(404).json({ error: 'Group not found' });
        return;
    }
    const verbs = (data[groupId] ?? []).map(({ id, infinitive, translation, type, color }) => ({
        id, infinitive, translation, type, color,
    }));
    res.json({
        ...group,
        title: langFR ? group.titleFR : group.title,
        description: langFR ? group.descriptionFR : group.description,
        verbs,
    });
});

app.get('/api/conjugation/:verbId', (req: Request, res: Response) => {
    const verbId = req.params['verbId'] as string;
    const verb = verbById[verbId];
    if (!verb) {
        res.status(404).json({ error: 'Verb not found' });
        return;
    }
    res.json({ ...verb, groupId: verbGroupMap[verbId] });
});

app.get('/api/grammar-lessons', (req: Request, res: Response) => {
    const lessons = req.query['lang'] === 'fr' ? grammarLessonsEN : grammarLessons;
    res.json(lessons.map(({ id, title, level, description, icon, color }) => ({
        id, title, level, description, icon, color
    })));
});

app.get('/api/grammar-lessons/:lessonId', (req: Request, res: Response) => {
    const lessons = req.query['lang'] === 'fr' ? grammarLessonsEN : grammarLessons;
    const lesson = lessons.find(l => l.id === req.params['lessonId']);
    if (!lesson) {
        res.status(404).json({ error: 'Lesson not found' });
        return;
    }
    res.json(lesson);
});

app.get('/api/phrase-categories', (req: Request, res: Response) => {
    const langFR = req.query['lang'] === 'fr';
    res.json(phraseCategories.map(({ id, title, titleFR, description, descriptionFR, icon, color, phrases }) => ({
        id,
        title: langFR ? titleFR : title,
        description: langFR ? descriptionFR : description,
        icon, color, phraseCount: phrases.length,
    })));
});

app.get('/api/phrase-categories/:categoryId', (req: Request, res: Response) => {
    const category = phraseCategories.find(c => c.id === req.params['categoryId']);
    if (!category) {
        res.status(404).json({ error: 'Category not found' });
        return;
    }
    res.json(category);
});

app.get('/api/reading/:moduleId', (req: Request, res: Response) => {
    const moduleId = req.params['moduleId'] as string;
    const passage = readingPassages.find(p => p.moduleId === moduleId);
    if (!passage) {
        res.status(404).json({ error: 'Reading passage not found' });
        return;
    }
    const vocabulary = vocabularyData[moduleId] ?? [];
    res.json({ ...passage, vocabulary });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '../../frontend/dist');
    app.use(express.static(distPath));
    app.get(/.*/, (_req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

// Start server
async function start() {
    if (process.env.DATABASE_URL) {
        await migrate();
    } else {
        console.warn('DATABASE_URL not set — skipping DB migration, auth routes will not work');
    }
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

start().catch(console.error);
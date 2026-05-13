import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { vocabularyData } from './data/vocabulary';
import { verbGroups, verbsData, verbById, verbGroupMap } from './data/verbs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

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

app.get('/api/vocabulary-modules', (_req: Request, res: Response) => {
    const moduleMeta: { id: string; title: string; description: string; icon: string; color: string; wordCount: number }[] = [
        { id: 'sherlock-holmes-ch1', title: 'Sherlock Holmes — Ch. 1', description: 'Vocabulary from the first chapter', icon: '🔍', color: '#8B5CF6', wordCount: 0 },
        { id: 'sherlock-holmes-ch2', title: 'Sherlock Holmes — Ch. 2', description: 'Mystery & deduction vocabulary', icon: '🕵️', color: '#6D28D9', wordCount: 0 },
        { id: 'daily-life-advanced', title: 'Advanced Daily Life', description: 'Everyday French at an advanced level', icon: '🏠', color: '#059669', wordCount: 0 },
        { id: 'emotions-psychology', title: 'Emotions & Psychology', description: 'Express feelings and mental states', icon: '💭', color: '#DC2626', wordCount: 0 },
        { id: 'travel-culture', title: 'Travel & Culture', description: 'Navigate travel and cultural topics', icon: '✈️', color: '#2563EB', wordCount: 0 },
    ];
    const result = moduleMeta.map(m => ({ ...m, wordCount: (vocabularyData[m.id] ?? []).length }));
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
    const verb = helperVerbsData[verbId];
    if (!verb) {
        res.status(404).json({ error: 'Verb not found' });
        return;
    }
    res.json(verb);
});

app.get('/api/verb-group/:groupId', (req: Request, res: Response) => {
    const groupId = req.params['groupId'] as string;
    const group = verbGroups[groupId];
    if (!group) {
        res.status(404).json({ error: 'Group not found' });
        return;
    }
    const verbs = (verbsData[groupId] ?? []).map(({ id, infinitive, translation, type, color }) => ({
        id, infinitive, translation, type, color,
    }));
    res.json({ ...group, verbs });
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

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Vocabulary data
const vocabularyData: Record<string, { id: number; english: string; french: string }[]> = {
    'sherlock-holmes-ch1': [
        { id: 1, english: 'the maid / housemaid', french: 'la bonne' },
        { id: 2, english: 'this (thing) / this one', french: 'ceci' },
        { id: 3, english: 'have just (done something)', french: 'viens de' },
        { id: 5, english: 'over / across / above', french: 'par-dessus' },
        { id: 6, english: 'an ungrateful person (male)', french: 'un ingrat' },
        { id: 7, english: 'immediately / right away', french: 'sur-le-champ' },
    ],
};

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

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
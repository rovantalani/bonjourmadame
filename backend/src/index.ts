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

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
import { Router, type Request, type Response } from 'express';
import { readingPassages } from '../../content/fr/reading';
import { readingPassagesEN } from '../../content/en/reading';
import { vocabularyDataEN as vocabularyData } from '../../content/en/vocabulary';

const router = Router();

router.get('/:moduleId', (req: Request, res: Response) => {
    const moduleId = req.params['moduleId'] as string;
    // French (default) and English-learning passages live in separate files;
    // module IDs are globally unique, so a single lookup across both works.
    const passage =
        readingPassages.find(p => p.moduleId === moduleId) ??
        readingPassagesEN.find(p => p.moduleId === moduleId);
    if (!passage) {
        res.status(404).json({ error: 'Reading passage not found' });
        return;
    }
    const vocabulary = vocabularyData[moduleId] ?? [];
    res.json({ ...passage, vocabulary });
});

export default router;

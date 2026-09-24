import { Router, type Request, type Response } from 'express';
import { vocabularyDataEN as vocabularyData } from '../data/vocabulary/vocabulary_en';
import { vocabularyModules } from '../data/vocabulary/modules_fr';
import { vocabularyModulesEN } from '../data/vocabulary/modules_en';

const router = Router();

router.get('/modules', (req: Request, res: Response) => {
    const modules = req.query['lang'] === 'fr' ? vocabularyModulesEN : vocabularyModules;
    res.json(modules.map(({ id, title, description, icon, color }) => ({
        id, title, description, icon, color,
        wordCount: (vocabularyData[id] ?? []).length,
    })));
});

router.get('/:moduleId', (req: Request, res: Response) => {
    const moduleId = req.params['moduleId'] as string;
    const words = vocabularyData[moduleId];
    if (!words) {
        res.status(404).json({ error: 'Module not found' });
        return;
    }
    res.json(words);
});

export default router;

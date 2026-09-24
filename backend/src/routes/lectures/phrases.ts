import { Router, type Request, type Response } from 'express';
import { phraseCategories } from '../../data/lectures/phrases/phrases_fr';
import { phraseCategoriesEN } from '../../data/lectures/phrases/phrases_en';

const router = Router();

router.get('/:categoryId', (req: Request, res: Response) => {
    const categories = req.query['lang'] === 'fr' ? phraseCategoriesEN : phraseCategories;
    const category = categories.find(c => c.id === req.params['categoryId']);
    if (!category) {
        res.status(404).json({ error: 'Category not found' });
        return;
    }
    res.json(category);
});

export default router;

import { Router, type Request, type Response } from 'express';
import { phraseCategories } from '../../content/fr/phrases';
import { phraseCategoriesEN } from '../../content/en/phrases';

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

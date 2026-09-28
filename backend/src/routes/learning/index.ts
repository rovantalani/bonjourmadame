import { Router } from 'express';
import { isTargetLanguage, learningContent } from '../../services/learningContent';
import { createContentRouter } from './content';

const router = Router();
const languageRouters = {
    fr: createContentRouter(learningContent.fr),
    en: createContentRouter(learningContent.en),
};

router.use('/:targetLanguage', (req, res, next) => {
    const language = req.params.targetLanguage;
    if (!isTargetLanguage(language)) {
        res.status(400).json({ error: 'targetLanguage must be fr or en' });
        return;
    }
    // The path is authoritative; legacy ?lang= parameters never select content.
    languageRouters[language](req, res, next);
});
router.use((_req, res) => {
    res.status(400).json({ error: 'targetLanguage is required: use /api/learning/fr or /api/learning/en' });
});

export default router;

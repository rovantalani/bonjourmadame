import { Router } from 'express';
import { speakingLessons } from '../services/speaking/lessons';

const router = Router();
router.use('/:language', (req, res, next) => {
    if (req.params.language !== 'fr' && req.params.language !== 'en') {
        res.status(400).json({ code: 'invalid_language' }); return;
    }
    next();
});
router.get('/:language/lessons', (req, res) => {
    res.json(speakingLessons[req.params.language as 'fr' | 'en']);
});
// Do not accept or store audio until a real assessment provider is connected.
router.post('/:language/lessons/:lessonId/review', (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    const lesson = speakingLessons[req.params.language as 'fr' | 'en'].find(item => item.id === req.params.lessonId);
    if (!lesson) { res.status(404).json({ code: 'lesson_not_found' }); return; }
    res.status(503).json({ code: 'assessment_unavailable' });
});
export default router;

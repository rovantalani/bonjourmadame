import { Router, type Request, type Response } from 'express';
import { grammarLessons } from '../../data/lectures/grammar/grammar_fr';
import { grammarLessonsEN } from '../../data/lectures/grammar/grammar_en';

const router = Router();

router.get('/:lessonId', (req: Request, res: Response) => {
    const lessons = req.query['lang'] === 'fr' ? grammarLessonsEN : grammarLessons;
    const lesson = lessons.find(l => l.id === req.params['lessonId']);
    if (!lesson) {
        res.status(404).json({ error: 'Lesson not found' });
        return;
    }
    res.json(lesson);
});

export default router;

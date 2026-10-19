import { Router } from 'express';
import { writingLessons } from '../services/writing/lessons';
import { evaluateWriting, WritingError, writingConfigured } from '../services/writing/evaluate';
import { reserveWriting, finishWriting, failWriting } from '../services/writing/usage';
export function createWritingRouter(deps = { evaluateWriting, reserveWriting, finishWriting, failWriting, writingConfigured }) {
    const router = Router();
    router.use('/:language', (req, res, next) => {
        if (!['fr', 'en'].includes(req.params.language)) { res.status(400).json({ code: 'invalid_language' }); return; } next();
    });
    router.get('/:language/lessons', (req, res) => { res.json(writingLessons[req.params.language as 'fr' | 'en']); });
    router.post('/:language/lessons/:lessonId/review', async (req, res) => {
        res.setHeader('Cache-Control', 'no-store');
        const language = req.params.language as 'fr' | 'en';
        const lesson = writingLessons[language].find(item => item.id === req.params.lessonId);
        if (!lesson) { res.status(404).json({ code: 'lesson_not_found' }); return; }
        const body = req.body;
        if (!body || typeof body.text !== 'string' || !body.text.trim() || body.text.length > 6000 || !['fr','en'].includes(body.feedbackLanguage) || Object.keys(body).some(key => !['text', 'feedbackLanguage'].includes(key))) { res.status(400).json({ code: 'invalid_submission' }); return; }
        if (!deps.writingConfigured()) { res.status(503).json({ code: 'not_configured' }); return; }
        let id: string | undefined;
        try {
            const reservation = await deps.reserveWriting(req.ip ?? req.socket.remoteAddress ?? 'local', language, lesson.id, body.text, body.feedbackLanguage);
            if (reservation.cached) { res.json(reservation.cached); return; }
            id = reservation.id;
            const result = await deps.evaluateWriting(lesson, body.text, body.feedbackLanguage);
            await deps.finishWriting(id!, result);
            res.json(result.review);
        } catch (error) {
            if (id) await deps.failWriting(id).catch(() => {});
            const failure = error instanceof WritingError ? error : new WritingError(503, 'service_unavailable');
            res.status(failure.status).json({ code: failure.code });
        }
    });
    return router;
}
export default createWritingRouter();

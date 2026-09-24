import { Router } from 'express';
import grammarRouter from './grammar';
import phrasesRouter from './phrases';
import readingRouter from './reading';

const router = Router();
router.use('/grammar', grammarRouter);
router.use('/phrases', phrasesRouter);
router.use('/reading', readingRouter);

export default router;

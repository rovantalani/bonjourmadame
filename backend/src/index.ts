import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import { migrate } from './db/migrate';
import authRouter from './routes/auth';
import progressRouter from './routes/progress';
import vocabularyRouter from './routes/vocabulary';
import verbsRouter from './routes/verbs';
import lecturesRouter from './routes/lectures';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Auth routes
app.use('/api/auth', authRouter);

// Progress routes
app.use('/api/progress', progressRouter);

// Routes
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Learning modules: Vocabulary, Verbs, and Lectures.
app.use('/api/vocabulary', vocabularyRouter);
app.use('/api/verbs', verbsRouter);
app.use('/api/lectures', lecturesRouter);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '../../frontend/dist');
    app.use(express.static(distPath));
    app.get(/.*/, (_req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

// Start server
async function start() {
    if (process.env.DATABASE_URL) {
        await migrate();
    } else {
        console.warn('DATABASE_URL not set — skipping DB migration, auth routes will not work');
    }
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

start().catch(console.error);

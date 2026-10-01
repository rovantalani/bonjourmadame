import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import { migrate } from './db/migrate';
import authRouter from './routes/auth';
import progressRouter from './routes/progress';
import learningRouter from './routes/learning';

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

// Explicit target-language API.
app.use('/api/learning', learningRouter);

// Keep retired or unknown API paths from falling through to the SPA response.
app.use('/api', (_req: Request, res: Response) => {
    res.status(404).json({ error: 'API route not found' });
});

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

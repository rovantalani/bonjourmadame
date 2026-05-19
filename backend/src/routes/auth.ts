import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../db/client';

const router = Router();

const cookieOptions = {
    httpOnly: true,
    sameSite: 'strict' as const,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000,
};

function signToken(userId: number): string {
    return jwt.sign({ sub: userId }, process.env.JWT_SECRET!, { expiresIn: '24h' });
}

router.post('/register', async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body as { email?: string; password?: string };

    if (!email || !password) {
        res.status(400).json({ error: 'Email and password are required' });
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        res.status(400).json({ error: 'Invalid email address' });
        return;
    }
    if (password.length < 8) {
        res.status(400).json({ error: 'Password must be at least 8 characters' });
        return;
    }

    const hash = await bcrypt.hash(password, 12);

    let result;
    try {
        result = await pool.query(
            'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email',
            [email.toLowerCase(), hash]
        );
    } catch (err: unknown) {
        if ((err as { code?: string }).code === '23505') {
            res.status(409).json({ error: 'An account with this email already exists' });
            return;
        }
        throw err;
    }

    const user = result.rows[0] as { id: number; email: string };
    res.cookie('token', signToken(user.id), cookieOptions);
    res.status(201).json({ id: user.id, email: user.email });
});

router.post('/login', async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body as { email?: string; password?: string };

    if (!email || !password) {
        res.status(400).json({ error: 'Email and password are required' });
        return;
    }

    const result = await pool.query(
        'SELECT id, email, password_hash FROM users WHERE email = $1',
        [email.toLowerCase()]
    );
    const user = result.rows[0] as { id: number; email: string; password_hash: string } | undefined;

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
        res.status(401).json({ error: 'Invalid email or password' });
        return;
    }

    res.cookie('token', signToken(user.id), cookieOptions);
    res.json({ id: user.id, email: user.email });
});

router.post('/logout', (_req: Request, res: Response): void => {
    res.clearCookie('token', { httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' });
    res.json({ ok: true });
});

router.get('/me', async (req: Request, res: Response): Promise<void> => {
    const token = (req.cookies as Record<string, string>)?.token;
    if (!token) {
        res.status(401).json({ error: 'Not authenticated' });
        return;
    }

    let payload: { sub: number };
    try {
        payload = jwt.verify(token, process.env.JWT_SECRET!) as unknown as { sub: number };
    } catch {
        res.status(401).json({ error: 'Invalid or expired token' });
        return;
    }

    const result = await pool.query('SELECT id, email FROM users WHERE id = $1', [payload.sub]);
    const user = result.rows[0] as { id: number; email: string } | undefined;
    if (!user) {
        res.status(401).json({ error: 'User not found' });
        return;
    }

    res.json({ id: user.id, email: user.email });
});

export default router;

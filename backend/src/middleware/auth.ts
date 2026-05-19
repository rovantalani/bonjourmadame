import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
    userId?: number;
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction): void {
    const token = (req.cookies as Record<string, string>)?.token;
    if (!token) {
        res.status(401).json({ error: 'Not authenticated' });
        return;
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as unknown as { sub: number };
        req.userId = payload.sub;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
}

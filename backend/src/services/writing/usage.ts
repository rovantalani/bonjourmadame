import { createHash, randomUUID } from 'crypto';
import type { ValidatedWritingReview } from './types';
import { WritingError, writingModel } from './evaluate';
function limit(key: string, fallback: number) {
    const value = Number(process.env[key]);
    return Number.isSafeInteger(value) && value >= 0 && process.env[key]?.trim() ? value : fallback;
}

/** Guest-compatible admission for a single server. No database or account required. */
export function createWritingUsage(now: () => number = Date.now) {
    let month = '';
    let total = 0;
    const visitors = new Map<string, { monthly: number; daily: number; day: string }>();
    const entries = new Map<string, { id: string; created: number; status: 'pending' | 'completed' | 'failed'; review?: ValidatedWritingReview }>();
    const ids = new Map<string, string>();
    async function reserveWriting(visitor: string, language: string, lessonId: string, text: string, feedbackLanguage: 'fr' | 'en') {
        const time = now();
        const day = new Date(time).toISOString().slice(0, 10);
        if (month !== day.slice(0, 7)) { month = day.slice(0, 7); total = 0; visitors.clear(); entries.clear(); ids.clear(); }
        const actor = createHash('sha256').update(visitor).digest('hex');
        const hash = createHash('sha256').update(JSON.stringify([actor, language, lessonId, text, feedbackLanguage, writingModel(), 'rubric-v1'])).digest('hex');
        const existing = entries.get(hash);
        if (existing?.status === 'completed') return { cached: existing.review! };
        if (existing?.status === 'pending' && time - existing.created < 120000) throw new WritingError(409, 'already_processing');
        const counts = visitors.get(actor) ?? { monthly: 0, daily: 0, day };
        if (counts.day !== day) { counts.day = day; counts.daily = 0; }
        if (counts.monthly >= limit('WRITING_MONTHLY_LIMIT', 50) || counts.daily >= limit('WRITING_DAILY_LIMIT', 10)) throw new WritingError(429, 'usage_limit');
        if (total >= limit('WRITING_GLOBAL_MONTHLY_LIMIT', 5000)) throw new WritingError(503, 'service_limit');
        // Admission is synchronous before returning a promise, so concurrent requests share counts.
        counts.monthly++; counts.daily++; total++;
        visitors.set(actor, counts);
        if (existing) ids.delete(existing.id);
        const id = randomUUID();
        entries.set(hash, { id, created: time, status: 'pending' }); ids.set(id, hash);
        return { id };
    }
    async function finishWriting(id: string, result: { review: ValidatedWritingReview; model: string; inputTokens: number; outputTokens: number }) {
        const entry = entries.get(ids.get(id) ?? '');
        if (entry?.id === id) { entry.status = 'completed'; entry.review = result.review; }
    }
    async function failWriting(id: string) {
        const entry = entries.get(ids.get(id) ?? '');
        if (entry?.id === id) entry.status = 'failed';
    }
    return { reserveWriting, finishWriting, failWriting };
}
export const { reserveWriting, finishWriting, failWriting } = createWritingUsage();

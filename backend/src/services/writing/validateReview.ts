/// <reference lib="es2022.intl" />
import { writingReviewSchema } from './schema';
import type { ProposedWritingReview, ValidatedCorrection, ValidatedWritingReview, UnplacedCorrection } from './types';

/** Validate this small JSON-schema subset before trusting any model response. */
function check(value: unknown, schema: unknown): boolean {
    const rule = schema as { type: string; enum?: readonly unknown[]; properties?: Record<string, unknown>; required?: readonly string[]; additionalProperties?: boolean; items?: unknown; minItems?: number; maxItems?: number; minLength?: number; maxLength?: number };
    if (rule.enum && !rule.enum.includes(value)) return false;
    if (rule.type === 'integer') return typeof value === 'number' && Number.isInteger(value);
    if (rule.type === 'string') return typeof value === 'string' && value.length >= (rule.minLength ?? 0) && value.length <= (rule.maxLength ?? Infinity) && (!rule.minLength || value.trim().length > 0);
    if (rule.type === 'array') return Array.isArray(value) && value.length >= (rule.minItems ?? 0) && value.length <= (rule.maxItems ?? Infinity) && value.every(item => check(item, rule.items));
    if (rule.type === 'object') {
        if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
        const record = value as Record<string, unknown>;
        return (rule.required ?? []).every(key => Object.prototype.hasOwnProperty.call(record, key))
            && Object.keys(record).every(key => Object.prototype.hasOwnProperty.call(rule.properties, key) && check(record[key], rule.properties![key]));
    }
    return false;
}

/** Exact matching is deliberate: never normalize accents, apostrophes or whitespace in student text. */
export function validateWritingReview(
    submission: { lessonId: string; originalText: string; feedbackLanguage: 'fr' | 'en' },
    response: unknown,
): ValidatedWritingReview {
    if (!submission.lessonId.trim() || !submission.originalText.trim() || submission.originalText.length > 12000 || !['fr', 'en'].includes(submission.feedbackLanguage)) throw new Error('Invalid writing submission');
    if (!check(response, writingReviewSchema)) throw new Error('Invalid writing review response');
    const proposed = response as ProposedWritingReview;
    const text = submission.originalText;
    const boundaries = new Set([text.length]);
    for (const segment of new Intl.Segmenter(submission.feedbackLanguage, { granularity: 'grapheme' }).segment(text)) boundaries.add(segment.index);
    const candidates: ValidatedCorrection[] = [];
    const unplacedCorrections: UnplacedCorrection[] = [];
    const seen = new Set<string>();
    const source = new Map<string, typeof proposed.corrections[number]>();
    proposed.corrections.forEach((edit, index) => {
        const reject = (reason: UnplacedCorrection['reason']) => unplacedCorrections.push({ ...edit, reason });
        if ((edit.kind === 'insertion' && (edit.original !== '' || !edit.replacement.trim() || (!edit.prefix && !edit.suffix)))
            || (edit.kind === 'deletion' && (!edit.original.trim() || edit.replacement !== ''))
            || (['replacement', 'suggestion'].includes(edit.kind) && (!edit.original.trim() || !edit.replacement.trim() || edit.original === edit.replacement))) {
            reject('invalid-edit'); return;
        }
        const matches: number[] = [];
        for (let start = 0; start <= text.length - edit.original.length; start++) {
            const end = start + edit.original.length;
            if (text.startsWith(edit.original, start) && start >= edit.prefix.length && text.startsWith(edit.prefix, start - edit.prefix.length) && text.startsWith(edit.suffix, end)) matches.push(start);
        }
        if (matches.length !== 1) { reject(matches.length ? 'ambiguous' : 'not-found'); return; }
        const start = matches[0];
        const end = start + edit.original.length;
        // Do not split a grapheme, or insert/replace inside a word.
        const word = (s: string) => /[\p{L}\p{N}\p{M}]/u.test(s);
        const before = Array.from(text.slice(0, start)).pop() ?? '';
        const after = Array.from(text.slice(end))[0] ?? '';
        if (!boundaries.has(start) || !boundaries.has(end)
            || (edit.original === '' ? word(before) && word(after)
                : (word(before) && word(Array.from(edit.original)[0])) || (word(after) && word(Array.from(edit.original).pop()!)))) {
            reject('unsafe-boundary'); return;
        }
        const key = JSON.stringify([start, end, edit.kind, edit.replacement]);
        if (seen.has(key)) return;
        seen.add(key);
        const { prefix, suffix, ...annotation } = edit;
        const id = `correction-${index + 1}`;
        source.set(id, edit);
        candidates.push({ ...annotation, id, start, end });
    });
    // Reject every member of a conflict, rather than choosing whichever edit came first.
    const conflicts = new Set<string>();
    for (let i = 0; i < candidates.length; i++) for (let j = i + 1; j < candidates.length; j++) {
        const a = candidates[i], b = candidates[j];
        const overlaps = a.start === a.end ? a.start >= b.start && a.start <= b.end
            : b.start === b.end ? b.start >= a.start && b.start <= a.end
            : a.start < b.end && b.start < a.end;
        if (overlaps) { conflicts.add(a.id); conflicts.add(b.id); }
    }
    for (const edit of candidates) if (conflicts.has(edit.id)) unplacedCorrections.push({ ...source.get(edit.id)!, reason: 'overlap' });
    return { ...submission, rating: proposed.rating, overallNotes: [...proposed.overallNotes],
        corrections: candidates.filter(edit => !conflicts.has(edit.id)).sort((a, b) => a.start - b.start), unplacedCorrections };
}

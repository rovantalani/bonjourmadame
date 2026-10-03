// Masculine ending → feminine ending for (-suffix) paren groups
const MASC_TO_FEM: [string, string][] = [
    ['teur', 'trice'],
    ['eux', 'euse'],
    ['eur', 'euse'],
    ['ier', 'ière'],
    ['if', 'ive'],
    ['on', 'onne'],
    ['el', 'elle'],
    ['en', 'enne'],
    ['et', 'ette'],
];

function normalize(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '');
}

/**
 * Returns all acceptable forms for one (slash-free) answer segment.
 *
 * Handles:
 *   enchanté(e)       → ["enchante", "enchantee"]
 *   fougueux(-euse)   → ["fougueux", "fougueuse"]
 *   rancunier(-ière)  → ["rancunier", "rancuniere"]
 *   un(e) ami(e)      → ["un ami", "une amie"]
 *   cadet(te)         → ["cadet", "cadette"]
 *   se plaindre (de)  → ["se plaindre", "se plaindre de"]
 *   an ungrateful person (male) → ["an ungrateful person", "an ungrateful person male"]
 *   bonjour           → ["bonjour"]
 */
function processSegment(segment: string): string[] {
    const cleaned = segment.replace(/[.?!,;:…]+$/, '').trim();

    let base = '';
    let fem = '';
    let pos = 0;

    while (pos < cleaned.length) {
        const parenOpen = cleaned.indexOf('(', pos);
        if (parenOpen === -1) {
            base += cleaned.slice(pos);
            fem += cleaned.slice(pos);
            break;
        }

        const parenClose = cleaned.indexOf(')', parenOpen);
        if (parenClose === -1) {
            base += cleaned.slice(pos);
            fem += cleaned.slice(pos);
            break;
        }

        const beforeParen = cleaned.slice(pos, parenOpen);
        const parenContent = cleaned.slice(parenOpen + 1, parenClose);
        pos = parenClose + 1;

        base += beforeParen;

        if (parenContent.startsWith('-')) {
            const femsuffix = parenContent.slice(1);
            const accumulated = fem + beforeParen;
            const trimmedAcc = accumulated.trimEnd();
            let applied = false;
            for (const [mascEnd, femEnd] of MASC_TO_FEM) {
                if (femEnd === femsuffix && trimmedAcc.endsWith(mascEnd)) {
                    fem = trimmedAcc.slice(0, -mascEnd.length) + femEnd + accumulated.slice(trimmedAcc.length);
                    applied = true;
                    break;
                }
            }
            if (!applied) {
                fem += beforeParen + femsuffix;
            }
        } else {
            fem += beforeParen + parenContent;
        }
    }

    const baseNorm = base.trim();
    const femNorm = fem.trim();

    const results = new Set([baseNorm]);
    if (femNorm !== baseNorm) results.add(femNorm);

    return [...results];
}

/**
 * Returns all acceptable forms for an answer string.
 *
 * Splits on ' / ' first so that slash-separated alternatives are each accepted:
 *   the maid / housemaid           → ["the maid", "housemaid"]
 *   to mope / to brood / to languish → ["to mope", "to brood", "to languish"]
 *   to complain / to gripe (about) → ["to complain", "to gripe", "to gripe about"]
 */
function getAcceptableAnswers(answer: string): string[] {
    const segments = answer.split(' / ');
    const results = new Set<string>();
    for (const segment of segments) {
        for (const form of processSegment(segment)) {
            results.add(form);
        }
    }
    return [...results];
}

export type AnswerResult = 'correct' | 'partial' | 'wrong';

function differsOnlyByFinalS(value: string, expected: string): boolean {
    const actualWords = value.match(/\p{L}+/gu) ?? [];
    const expectedWords = expected.match(/\p{L}+/gu) ?? [];
    if (actualWords.length !== expectedWords.length) return false;

    let changed = 0;
    for (let i = 0; i < actualWords.length; i++) {
        if (actualWords[i] === expectedWords[i]) continue;
        const shorter = actualWords[i].length < expectedWords[i].length ? actualWords[i] : expectedWords[i];
        const longer = actualWords[i].length > expectedWords[i].length ? actualWords[i] : expectedWords[i];
        if (shorter.length < 3 || longer !== `${shorter}s` || ++changed > 1) return false;
    }
    return changed === 1;
}

function withoutSymbols(value: string): string {
    return value.replace(/\s*[\p{P}\p{S}]+\s*/gu, '').trim();
}

function matchesSymbolSpacing(value: string, expected: string): boolean {
    // Allow spaces where the expected answer has punctuation, while preserving
    // ordinary word boundaries ("a part" must not match "apart").
    const parts = expected.split(/\s*[\p{P}\p{S}]+\s*/u);
    if (parts.length < 2) return false;
    const pattern = parts.map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('[\\p{P}\\p{S}\\s]*');
    return new RegExp(`^${pattern}$`, 'u').test(value);
}

export function gradeAnswer(userAnswer: string, answer: string): AnswerResult {
    const acceptable = getAcceptableAnswers(answer);
    const normalized = normalize(userAnswer);
    if (acceptable.includes(userAnswer.trim())) return 'correct';
    const normalizedForms = acceptable.map(normalize);
    if (normalizedForms.includes(normalized)) return 'partial';
    const letters = withoutSymbols(normalized);
    if (letters && normalizedForms.some(form =>
        withoutSymbols(form) === letters || matchesSymbolSpacing(normalized, form) || differsOnlyByFinalS(normalized, form)
    )) return 'partial';
    return 'wrong';
}

export function isAnswerCorrect(userAnswer: string, answer: string): boolean {
    return gradeAnswer(userAnswer, answer) !== 'wrong';
}

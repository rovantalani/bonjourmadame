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
 * Returns all acceptable normalized forms for one (slash-free) answer segment.
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

    const baseNorm = normalize(base.trim());
    const femNorm = normalize(fem.trim());

    const results = new Set([baseNorm]);
    if (femNorm !== baseNorm) results.add(femNorm);

    return [...results];
}

/**
 * Returns all acceptable normalized forms for an answer string.
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

export function isAnswerCorrect(userAnswer: string, answer: string): boolean {
    return getAcceptableAnswers(answer).includes(normalize(userAnswer));
}

/** True when the only error is a missing/wrong accent (answer still counted correct). */
export function isAccentOnlyError(userAnswer: string, answer: string): boolean {
    if (!isAnswerCorrect(userAnswer, answer)) return false;
    // Check raw forms (lowercased, trimmed, accents preserved)
    const rawForms = answer.split(' / ').map(s =>
        s.trim().replace(/[.?!,;:…]+$/, '').replace(/\([^)]*\)/g, '').trim().toLowerCase()
    );
    return !rawForms.some(f => f === userAnswer.trim().toLowerCase());
}

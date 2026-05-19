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
 * Returns all acceptable normalized forms for a French answer string.
 *
 * Handles:
 *   enchanté(e)       → ["enchante", "enchantee"]
 *   fougueux(-euse)   → ["fougueux", "fougueuse"]
 *   rancunier(-ière)  → ["rancunier", "rancuniere"]
 *   un(e) ami(e)      → ["un ami", "une amie"]
 *   cadet(te)         → ["cadet", "cadette"]
 *   se plaindre (de)  → ["se plaindre", "se plaindre de"]
 *   bonjour           → ["bonjour"]
 */
function getAcceptableAnswers(french: string): string[] {
    const cleaned = french.replace(/[.?!,;:…]+$/, '').trim();

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

export function isAnswerCorrect(userAnswer: string, french: string): boolean {
    return getAcceptableAnswers(french).includes(normalize(userAnswer));
}

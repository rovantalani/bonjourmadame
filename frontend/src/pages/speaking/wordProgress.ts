// Align whole tokens in order. Never infer pronunciation quality from a transcript.
export function normalizedWords(text: string): string[] {
    return text.normalize('NFC').toLocaleLowerCase().replace(/[’']/g, ' ').match(/[\p{L}\p{N}]+/gu) ?? [];
}

export function matchedWords(reference: string, transcript: string): boolean[] {
    const words = reference.split(/\s+/);
    const expected = words.flatMap((word, index) => normalizedWords(word).map(token => ({ token, index })));
    const heard = normalizedWords(transcript).slice(0, 300);
    // Suffix alignment selects the earliest matching occurrence of repeated words.
    // Missing words stay neutral, and revised interim results replace older ones.
    const table = Array.from({ length: expected.length + 1 }, () => new Array<number>(heard.length + 1).fill(0));
    for (let i = expected.length - 1; i >= 0; i--) for (let j = heard.length - 1; j >= 0; j--) {
        table[i][j] = expected[i].token === heard[j]
            ? table[i + 1][j + 1] + 1 : Math.max(table[i + 1][j], table[i][j + 1]);
    }
    const matched = new Array<number>(words.length).fill(0);
    let i = 0, j = 0;
    while (i < expected.length && j < heard.length) {
        if (expected[i].token === heard[j]) { matched[expected[i].index]++; i++; j++; }
        else if (table[i + 1][j] > table[i][j + 1]) i++; else j++;
    }
    return words.map((word, index) => {
        const count = normalizedWords(word).length;
        return count > 0 && matched[index] === count;
    });
}

/** Normalize both queries and labels so search ignores case and accents. */
export function normalizeSearch(value: string): string {
    return value.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').trim();
}

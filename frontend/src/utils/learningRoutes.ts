import type { TargetLanguage } from './settings';

export function learningPath(language: TargetLanguage, path: string): string {
    if (/^\/(login|register|welcome)(\/|$)/.test(path) || path.startsWith('/learn/')) return path;
    return `/learn/${language}${path === '/' ? '' : path}`;
}

export function unscopedPath(path: string): string {
    return path.replace(/^\/learn\/(fr|en)(?=\/|$)/, '') || '/';
}

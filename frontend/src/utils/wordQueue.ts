import { learningStorageKey, loadTargetLanguage, type TargetLanguage } from './settings';

const STORAGE_KEY = 'wordQueue';
const SHUFFLE_PREF_KEY = 'vocabShufflePref';

export interface QueuedWord {
    id: number;
    english: string;
    french: string;
}

export type WordQueue = Record<string, QueuedWord[]>;

export function loadQueue(language: TargetLanguage = loadTargetLanguage()): WordQueue {
    try {
        const raw = localStorage.getItem(learningStorageKey(STORAGE_KEY, language));
        return raw ? (JSON.parse(raw) as WordQueue) : {};
    } catch {
        return {};
    }
}

export function saveQueue(queue: WordQueue, language: TargetLanguage = loadTargetLanguage()): void {
    localStorage.setItem(learningStorageKey(STORAGE_KEY, language), JSON.stringify(queue));
}

export function addWrongWords(moduleId: string, words: QueuedWord[], language: TargetLanguage = loadTargetLanguage()): void {
    if (words.length === 0) return;
    const queue = loadQueue(language);
    const existing = queue[moduleId] ?? [];
    const merged = [...existing];
    for (const w of words) {
        if (!merged.find(e => e.id === w.id)) {
            merged.push(w);
        }
    }
    queue[moduleId] = merged;
    saveQueue(queue, language);
}

export function removeCorrectWord(moduleId: string, wordId: number, language: TargetLanguage = loadTargetLanguage()): void {
    const queue = loadQueue(language);
    if (!queue[moduleId]) return;
    queue[moduleId] = queue[moduleId].filter(w => w.id !== wordId);
    if (queue[moduleId].length === 0) {
        delete queue[moduleId];
    }
    saveQueue(queue, language);
}

export function totalQueuedCount(queue: WordQueue): number {
    return Object.values(queue).reduce((sum, words) => sum + words.length, 0);
}

export function loadShufflePref(): boolean {
    const val = localStorage.getItem(SHUFFLE_PREF_KEY);
    return val === null ? true : val === 'true';
}

export function saveShufflePref(shuffle: boolean): void {
    localStorage.setItem(SHUFFLE_PREF_KEY, String(shuffle));
}

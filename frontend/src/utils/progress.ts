import { learningStorageKey, loadTargetLanguage, type TargetLanguage } from './settings';
export interface WordMastery {
    known: boolean;    // Correct on the latest attempt; no mastery levels.
    correct: number;
    wrong: number;
    lastSeen: string;   // ISO timestamp
}

export interface QuizSession {
    moduleId: string;
    sessionType: 'vocabulary' | 'verb' | 'review';
    score: number;
    total: number;
    date: string;       // ISO timestamp
}

const KEYS = { mastery: 'wordMastery', history: 'quizHistory' } as const;

// ── Mastery ──────────────────────────────────────────────────────────────────

export function loadMastery(language: TargetLanguage = loadTargetLanguage()): Record<string, WordMastery> {
    try { return JSON.parse(localStorage.getItem(learningStorageKey(KEYS.mastery, language)) || '{}'); }
    catch { return {}; }
}

function saveMastery(data: Record<string, WordMastery>, language: TargetLanguage): void {
    localStorage.setItem(learningStorageKey(KEYS.mastery, language), JSON.stringify(data));
}

export function recordAnswer(moduleId: string, wordId: number, correct: boolean, language: TargetLanguage = loadTargetLanguage()): WordMastery {
    const all = loadMastery(language);
    const key = `${moduleId}:${wordId}`;
    const prev = all[key] ?? { known: false, correct: 0, wrong: 0, lastSeen: '' };

    const next: WordMastery = {
        known: correct,
        correct: prev.correct + (correct ? 1 : 0),
        wrong:   prev.wrong   + (correct ? 0 : 1),
        lastSeen: new Date().toISOString(),
    };

    all[key] = next;
    saveMastery(all, language);
    return next;
}

// ── Quiz sessions ─────────────────────────────────────────────────────────────

export function loadHistory(language: TargetLanguage = loadTargetLanguage()): QuizSession[] {
    try { return JSON.parse(localStorage.getItem(learningStorageKey(KEYS.history, language)) || '[]'); }
    catch { return []; }
}

export function recordSession(
    moduleId: string,
    sessionType: QuizSession['sessionType'],
    score: number,
    total: number,
    language: TargetLanguage = loadTargetLanguage(),
): void {
    const history = loadHistory(language);
    history.push({ moduleId, sessionType, score, total, date: new Date().toISOString() });
    if (history.length > 200) history.splice(0, history.length - 200);
    localStorage.setItem(learningStorageKey(KEYS.history, language), JSON.stringify(history));

}

// ── Reset ─────────────────────────────────────────────────────────────────────

export function resetAllProgress(language: TargetLanguage = loadTargetLanguage()): void {
    [KEYS.mastery, KEYS.history].forEach(k =>
        localStorage.removeItem(learningStorageKey(k, language))
    );
}

// ── API sync (authenticated users only) ──────────────────────────────────────

import axios from 'axios';

const API = import.meta.env.VITE_API_BASE;

export async function syncAnswerToApi(
    word_id: string,
    module_id: string,
    correct: boolean,
    language: TargetLanguage = loadTargetLanguage(),
): Promise<void> {
    try {
        await axios.post(`${API}/api/progress/${language}/word`,
            { word_id, module_id, correct },
            { withCredentials: true },
        );
    } catch { /* silent — localStorage remains source of truth */ }
}

export async function syncSessionToApi(
    module_id: string,
    session_type: string,
    score: number,
    total: number,
    language: TargetLanguage = loadTargetLanguage(),
): Promise<void> {
    try {
        await axios.post(`${API}/api/progress/${language}/session`,
            { module_id, session_type, score, total },
            { withCredentials: true },
        );
    } catch { /* silent */ }
}

export interface DueWord {
    wordId:       string;  // "{moduleId}:{numericId}"
    moduleId:     string;
    srsBox:       number;
    known: boolean;
}

export async function fetchDueWordsFromApi(language: TargetLanguage = loadTargetLanguage()): Promise<DueWord[]> {
    try {
        const res = await axios.get<DueWord[]>(`${API}/api/progress/${language}/due`, { withCredentials: true });
        return res.data;
    } catch {
        return [];
    }
}

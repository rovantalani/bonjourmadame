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

export function loadMastery(): Record<string, WordMastery> {
    try { return JSON.parse(localStorage.getItem(KEYS.mastery) || '{}'); }
    catch { return {}; }
}

function saveMastery(data: Record<string, WordMastery>): void {
    localStorage.setItem(KEYS.mastery, JSON.stringify(data));
}

export function recordAnswer(moduleId: string, wordId: number, correct: boolean): WordMastery {
    const all = loadMastery();
    const key = `${moduleId}:${wordId}`;
    const prev = all[key] ?? { known: false, correct: 0, wrong: 0, lastSeen: '' };

    const next: WordMastery = {
        known: correct,
        correct: prev.correct + (correct ? 1 : 0),
        wrong:   prev.wrong   + (correct ? 0 : 1),
        lastSeen: new Date().toISOString(),
    };

    all[key] = next;
    saveMastery(all);
    return next;
}

// ── Quiz sessions ─────────────────────────────────────────────────────────────

export function loadHistory(): QuizSession[] {
    try { return JSON.parse(localStorage.getItem(KEYS.history) || '[]'); }
    catch { return []; }
}

export function recordSession(
    moduleId: string,
    sessionType: QuizSession['sessionType'],
    score: number,
    total: number,
): void {
    const history = loadHistory();
    history.push({ moduleId, sessionType, score, total, date: new Date().toISOString() });
    if (history.length > 200) history.splice(0, history.length - 200);
    localStorage.setItem(KEYS.history, JSON.stringify(history));

}

// ── Reset ─────────────────────────────────────────────────────────────────────

export function resetAllProgress(): void {
    [KEYS.mastery, KEYS.history].forEach(k =>
        localStorage.removeItem(k)
    );
}

// ── API sync (authenticated users only) ──────────────────────────────────────

import axios from 'axios';

const API = import.meta.env.VITE_API_BASE;

export async function syncAnswerToApi(
    word_id: string,
    module_id: string,
    correct: boolean,
): Promise<void> {
    try {
        await axios.post(`${API}/api/progress/word`,
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
): Promise<void> {
    try {
        await axios.post(`${API}/api/progress/session`,
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

export async function fetchDueWordsFromApi(): Promise<DueWord[]> {
    try {
        const res = await axios.get<DueWord[]>(`${API}/api/progress/due`, { withCredentials: true });
        return res.data;
    } catch {
        return [];
    }
}

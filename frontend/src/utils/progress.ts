export interface WordMastery {
    level: number;      // 0 = unseen, 1–2 = learning, 3+ = mastered (max 5)
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

export interface StreakData {
    currentStreak: number;
    longestStreak: number;
    lastActivityDate: string | null; // YYYY-MM-DD
}

export interface DailyProgress {
    date: string;        // YYYY-MM-DD
    wordsStudied: number;
}

const KEYS = {
    mastery:       'wordMastery',
    history:       'quizHistory',
    streak:        'streakData',
    dailyGoal:     'dailyGoal',
    dailyProgress: 'dailyProgress',
} as const;

function todayStr(): string {
    return new Date().toISOString().slice(0, 10);
}

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
    const prev = all[key] ?? { level: 0, correct: 0, wrong: 0, lastSeen: '' };

    const next: WordMastery = {
        level:   correct ? Math.min(5, prev.level + 1) : Math.max(0, prev.level - 1),
        correct: prev.correct + (correct ? 1 : 0),
        wrong:   prev.wrong   + (correct ? 0 : 1),
        lastSeen: new Date().toISOString(),
    };

    all[key] = next;
    saveMastery(all);
    return next;
}

// Returns mastered/practiced counts for a single module.
// totalWords comes from the API wordCount field on the module metadata.
export function getModuleMastery(moduleId: string): { mastered: number; practiced: number } {
    const all = loadMastery();
    const prefix = `${moduleId}:`;
    let mastered = 0;
    let practiced = 0;

    for (const [key, entry] of Object.entries(all)) {
        if (key.startsWith(prefix)) {
            practiced++;
            if (entry.level >= 3) mastered++;
        }
    }

    return { mastered, practiced };
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

    updateStreak();
    bumpDailyProgress(total);
}

// ── Streak ────────────────────────────────────────────────────────────────────

function updateStreak(): void {
    const streak = loadStreak();
    const today = todayStr();
    if (streak.lastActivityDate === today) return;

    const prev = new Date();
    prev.setDate(prev.getDate() - 1);
    const yesterday = prev.toISOString().slice(0, 10);

    const newCurrent = streak.lastActivityDate === yesterday ? streak.currentStreak + 1 : 1;
    const updated: StreakData = {
        currentStreak:    newCurrent,
        longestStreak:    Math.max(streak.longestStreak, newCurrent),
        lastActivityDate: today,
    };
    localStorage.setItem(KEYS.streak, JSON.stringify(updated));
}

export function loadStreak(): StreakData {
    try {
        const d = JSON.parse(localStorage.getItem(KEYS.streak) || 'null');
        return d ?? { currentStreak: 0, longestStreak: 0, lastActivityDate: null };
    } catch { return { currentStreak: 0, longestStreak: 0, lastActivityDate: null }; }
}

// ── Daily progress ────────────────────────────────────────────────────────────

function bumpDailyProgress(wordsStudied: number): void {
    const today = todayStr();
    const current = loadDailyProgress();
    const updated: DailyProgress = current.date === today
        ? { date: today, wordsStudied: current.wordsStudied + wordsStudied }
        : { date: today, wordsStudied };
    localStorage.setItem(KEYS.dailyProgress, JSON.stringify(updated));
}

export function loadDailyProgress(): DailyProgress {
    try {
        const d = JSON.parse(localStorage.getItem(KEYS.dailyProgress) || 'null');
        if (!d || d.date !== todayStr()) return { date: todayStr(), wordsStudied: 0 };
        return d;
    } catch { return { date: todayStr(), wordsStudied: 0 }; }
}

// ── Daily goal ────────────────────────────────────────────────────────────────

export function loadDailyGoal(): number {
    return parseInt(localStorage.getItem(KEYS.dailyGoal) ?? '10', 10);
}

export function saveDailyGoal(goal: number): void {
    localStorage.setItem(KEYS.dailyGoal, String(Math.max(1, goal)));
}

// ── Aggregate stats ───────────────────────────────────────────────────────────

export interface AggregateStats {
    totalPracticed:  number;
    totalMastered:   number;
    overallAccuracy: number; // 0–100
    moduleStats: Record<string, { correct: number; wrong: number; mastered: number; practiced: number }>;
    recentSessions:  QuizSession[];
}

export function computeStats(): AggregateStats {
    const mastery  = loadMastery();
    const history  = loadHistory();

    let totalCorrect = 0;
    let totalWrong   = 0;
    let totalMastered = 0;
    const moduleStats: AggregateStats['moduleStats'] = {};

    for (const [key, entry] of Object.entries(mastery)) {
        const moduleId = key.split(':')[0];
        totalCorrect += entry.correct;
        totalWrong   += entry.wrong;
        if (entry.level >= 4) totalMastered++;

        if (!moduleStats[moduleId]) moduleStats[moduleId] = { correct: 0, wrong: 0, mastered: 0, practiced: 0 };
        moduleStats[moduleId].correct   += entry.correct;
        moduleStats[moduleId].wrong     += entry.wrong;
        moduleStats[moduleId].practiced += 1;
        if (entry.level >= 4) moduleStats[moduleId].mastered += 1;
    }

    const total = totalCorrect + totalWrong;
    return {
        totalPracticed:  Object.keys(mastery).length,
        totalMastered,
        overallAccuracy: total > 0 ? Math.round((totalCorrect / total) * 100) : 0,
        moduleStats,
        recentSessions:  history.slice(-10).reverse(),
    };
}

// ── Reset ─────────────────────────────────────────────────────────────────────

export function resetAllProgress(): void {
    [KEYS.mastery, KEYS.history, KEYS.streak, KEYS.dailyProgress].forEach(k =>
        localStorage.removeItem(k)
    );
}

// ── API sync (authenticated users only) ──────────────────────────────────────

import axios from 'axios';

const API = import.meta.env.VITE_API_BASE;

export interface ApiProgress {
    mastery: Record<string, WordMastery>;
    stats: {
        currentStreak: number;
        longestStreak: number;
        lastActivityDate: string | null;
        totalWordsMastered: number;
    };
    sessions: QuizSession[];
}

export async function syncAnswerToApi(
    word_id: string,
    module_id: string,
    correct: boolean,
    mastery_level: number,
): Promise<void> {
    try {
        await axios.post(`${API}/api/progress/word`,
            { word_id, module_id, correct, mastery_level },
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

export async function fetchProgressFromApi(): Promise<ApiProgress | null> {
    try {
        const res = await axios.get<ApiProgress>(`${API}/api/progress`, { withCredentials: true });
        return res.data;
    } catch {
        return null;
    }
}

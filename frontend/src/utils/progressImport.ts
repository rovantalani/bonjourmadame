import axios from 'axios';
import type { WordMastery, QuizSession } from './progress';

interface ImportSnapshot {
    importId: string;
    userId: number;
    mastery: Record<string, WordMastery>;
    sessions: QuizSession[];
}
interface SavedImport {
    snapshot: ImportSnapshot;
    acknowledged: boolean;
}
const keyFor = (userId: number) => `progressImport:${userId}`;

function readImport(userId: number): SavedImport | null {
    const raw = localStorage.getItem(keyFor(userId));
    if (!raw) return null;
    const saved = JSON.parse(raw) as SavedImport;
    if (!saved?.snapshot || saved.snapshot.userId !== userId || typeof saved.acknowledged !== 'boolean') {
        throw new Error('Invalid saved import');
    }
    return saved;
}

export function getImportStatus(userId: number): 'available' | 'complete' | 'empty' {
    try {
        const saved = readImport(userId);
        if (saved) return saved.acknowledged ? 'complete' : 'available';
        const mastery = JSON.parse(localStorage.getItem('wordMastery') || '{}');
        const sessions = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        return Object.keys(mastery).length || sessions.length ? 'available' : 'empty';
    } catch {
        // Let the user see an error on import instead of hiding damaged/unreadable progress.
        return 'available';
    }
}

export async function importLocalProgress(userId: number): Promise<void> {
    let saved = readImport(userId);
    if (saved?.acknowledged) return;
    if (!saved) {
        saved = {
            snapshot: {
                importId: crypto.randomUUID(),
                userId,
                mastery: JSON.parse(localStorage.getItem('wordMastery') || '{}'),
                sessions: JSON.parse(localStorage.getItem('quizHistory') || '[]'),
            },
            acknowledged: false,
        };
        // Persist BEFORE sending. Refreshing or losing the response must retry the same snapshot.
        localStorage.setItem(keyFor(userId), JSON.stringify(saved));
    }
    const { data } = await axios.post<{ ok: boolean; importId: string }>(
        `${import.meta.env.VITE_API_BASE ?? ''}/api/progress/import`, saved.snapshot,
        { withCredentials: true, timeout: 15000 },
    );
    if (data.ok !== true || data.importId !== saved.snapshot.importId) {
        throw new Error('Import was not acknowledged');
    }
    localStorage.setItem(keyFor(userId), JSON.stringify({ ...saved, acknowledged: true }));
    // Keep local mastery/history: other screens still read them and study may have continued.
}

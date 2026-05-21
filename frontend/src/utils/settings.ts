export type LearningMode = 'learn-french' | 'learn-english';
export type QuizDirection = 'en-fr' | 'fr-en';

const MODE_KEY = 'learningMode';

export function loadLearningMode(): LearningMode | null {
    const val = localStorage.getItem(MODE_KEY);
    if (val === 'learn-french' || val === 'learn-english') return val;
    return null;
}

export function saveLearningMode(mode: LearningMode): void {
    localStorage.setItem(MODE_KEY, mode);
}

export function loadQuizDirection(): QuizDirection {
    return loadLearningMode() === 'learn-english' ? 'fr-en' : 'en-fr';
}

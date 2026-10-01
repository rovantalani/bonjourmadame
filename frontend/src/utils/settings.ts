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
    window.dispatchEvent(new Event('learningModeChanged'));
}

export function loadQuizDirection(): QuizDirection {
    return loadLearningMode() === 'learn-english' ? 'fr-en' : 'en-fr';
}

export type TargetLanguage = 'fr' | 'en';

export function loadTargetLanguage(): TargetLanguage {
    const mode = loadLearningMode();
    if (!mode) throw new Error('Select a learning language before accessing progress');
    return mode === 'learn-english' ? 'en' : 'fr';
}

export function learningStorageKey(key: string, language: TargetLanguage = loadTargetLanguage()): string {
    return `${key}:learn-${language === 'en' ? 'english' : 'french'}`;
}

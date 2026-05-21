const QUIZ_DIR_KEY = 'quizDirection';

export type QuizDirection = 'en-fr' | 'fr-en';

export function loadQuizDirection(): QuizDirection {
    const val = localStorage.getItem(QUIZ_DIR_KEY);
    return val === 'fr-en' ? 'fr-en' : 'en-fr';
}

export function saveQuizDirection(dir: QuizDirection): void {
    localStorage.setItem(QUIZ_DIR_KEY, dir);
}

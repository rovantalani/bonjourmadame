import type { Course, CourseStep } from '../data/courses';
import { loadMastery } from './progress';
import { loadLearningMode } from './settings';

export type StepStatus = 'complete' | 'visited' | 'not-started';

const VISITED_KEY     = 'courseStepVisited';
const ACTIVE_COURSE_KEY = 'activeCourse';

// Verb tables, lessons and quizzes share a flower within the same course.
function contentKey(path: string): string {
    return path.replace(/\/(learn|table|quiz)\/?$/, '').replace(/\/$/, '');
}

function loadContentProgress(): Record<string, StepStatus> {
    try { return JSON.parse(localStorage.getItem(`contentProgress:${loadLearningMode() ?? 'learn-french'}`) || '{}'); }
    catch { return {}; }
}

export function requiresQuiz(path: string): boolean {
    return /\/(vocabulary|verbs)\//.test(path) || /\/lectures\/(phrases|grammar)\//.test(path);
}

export function hasPassedQuiz(path: string): boolean {
    try {
        const passed: string[] = JSON.parse(localStorage.getItem(`passedQuizzes:${loadLearningMode() ?? 'learn-french'}`) || '[]');
        return passed.includes(contentKey(path));
    } catch { return false; }
}

export function recordQuizPass(path: string): void {
    const key = `passedQuizzes:${loadLearningMode() ?? 'learn-french'}`;
    let passed: string[] = [];
    try { passed = JSON.parse(localStorage.getItem(key) || '[]'); } catch { /* start a new list */ }
    localStorage.setItem(key, JSON.stringify([...new Set([...passed, contentKey(path)])]));
}

export function getContentStatus(path: string): StepStatus {
    const status = loadContentProgress()[contentKey(path)] ?? 'not-started';
    // Old manual completions are not evidence of clearing a quiz.
    return status === 'complete' && requiresQuiz(path) && !hasPassedQuiz(path) ? 'visited' : status;
}

export function setContentStatus(path: string, status: StepStatus): void {
    if (status === 'complete' && requiresQuiz(path) && !hasPassedQuiz(path)) return;
    const data = loadContentProgress();
    data[contentKey(path)] = status;
    localStorage.setItem(`contentProgress:${loadLearningMode() ?? 'learn-french'}`, JSON.stringify(data));
}

function loadVisited(): Set<string> {
    try {
        const raw = localStorage.getItem(VISITED_KEY);
        return new Set(raw ? JSON.parse(raw) : []);
    } catch { return new Set(); }
}

export function markStepVisited(stepId: string): void {
    const visited = loadVisited();
    visited.add(stepId);
    localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]));
}

export function getStepStatus(step: CourseStep, level?: string): StepStatus {
    const visited = loadVisited();
    if (level) {
        const status = getContentStatus(`/courses/${level.toLowerCase()}${step.path}`);
        if (status !== 'not-started') return status;
    }

    if (step.module === 'vocabulary') {
        const mastery = loadMastery();
        const prefix  = `${step.contentId}:`;
        const entries = Object.entries(mastery).filter(([k]) => k.startsWith(prefix));
        if (entries.length > 0) {
            return 'visited';
        }
    }

    if (visited.has(step.id)) return 'visited';
    return 'not-started';
}

export interface CourseProgress {
    completed: number;
    visited:   number;
    total:     number;
    pct:       number;
}

export function getCourseProgress(course: Course): CourseProgress {
    let completed    = 0;
    let visitedCount = 0;
    for (const step of course.steps) {
        const s = getStepStatus(step, course.level);
        if (s === 'complete')      completed++;
        else if (s === 'visited')  visitedCount++;
    }
    const pct = course.steps.length > 0 ? Math.round((completed / course.steps.length) * 100) : 0;
    return { completed, visited: visitedCount, total: course.steps.length, pct };
}

export function getActiveCourse(): string | null {
    return localStorage.getItem(ACTIVE_COURSE_KEY);
}

export function setActiveCourse(level: string): void {
    localStorage.setItem(ACTIVE_COURSE_KEY, level);
    window.dispatchEvent(new CustomEvent('activeCourseChanged', { detail: level }));
}

export function getNextStep(course: Course): CourseStep | null {
    for (const step of course.steps) {
        if (getStepStatus(step, course.level) !== 'complete') return step;
    }
    return null;
}

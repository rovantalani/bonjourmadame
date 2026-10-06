import type { Course, CourseStep } from '../data/courseTypes';
import { loadMastery } from './progress';
import { loadLearningMode, learningStorageKey } from './settings';
import { unscopedPath } from './learningRoutes';

export type StepStatus = 'complete' | 'visited' | 'not-started';

const VISITED_KEY     = 'courseStepVisited';
const ACTIVE_COURSE_KEY = 'activeCourse';

// Verb tables, lessons and quizzes share a flower within the same course.
function contentKey(path: string): string {
    return unscopedPath(path).replace(/\/(learn|table|quiz)\/?$/, '').replace(/\/$/, '');
}

function legacyContentKey(path: string): string {
    const language = loadLearningMode() === 'learn-english' ? 'en' : 'fr';
    return `/learn/${language}${contentKey(path)}`;
}

function loadContentProgress(): Record<string, StepStatus> {
    try { return JSON.parse(localStorage.getItem(`contentProgress:${loadLearningMode() ?? 'learn-french'}`) || '{}'); }
    catch { return {}; }
}

export function requiresQuiz(path: string): boolean {
    return /\/(vocabulary|verbs|exams)\//.test(path) || /\/lectures\/(phrases|grammar)\//.test(path);
}

export function hasPassedQuiz(path: string): boolean {
    try {
        const passed: string[] = JSON.parse(localStorage.getItem(`passedQuizzes:${loadLearningMode() ?? 'learn-french'}`) || '[]');
        return passed.some(saved => contentKey(saved) === contentKey(path));
    } catch { return false; }
}

export function recordQuizPass(path: string): void {
    const key = `passedQuizzes:${loadLearningMode() ?? 'learn-french'}`;
    let passed: string[] = [];
    try { passed = JSON.parse(localStorage.getItem(key) || '[]'); } catch { /* start a new list */ }
    localStorage.setItem(key, JSON.stringify([...new Set([...passed, contentKey(path)])]));
}

export function getContentStatus(path: string): StepStatus {
    const progress = loadContentProgress();
    const status = progress[contentKey(path)] ?? progress[legacyContentKey(path)] ?? 'not-started';
    // Old manual completions are not evidence of clearing a quiz.
    return status === 'complete' && requiresQuiz(path) && !hasPassedQuiz(path) ? 'visited' : status;
}

export function setContentStatus(path: string, status: StepStatus): void {
    if (status === 'complete' && requiresQuiz(path) && !hasPassedQuiz(path)) return;
    const data = loadContentProgress();
    data[contentKey(path)] = status;
    delete data[legacyContentKey(path)];
    localStorage.setItem(`contentProgress:${loadLearningMode() ?? 'learn-french'}`, JSON.stringify(data));
    window.dispatchEvent(new Event('courseProgressChanged'));
}

export function completeLesson(path: string): void {
    if (requiresQuiz(path)) recordQuizPass(path);
    setContentStatus(path, 'complete');
}

function loadVisited(): Set<string> {
    try {
        const raw = localStorage.getItem(learningStorageKey(VISITED_KEY));
        return new Set(raw ? JSON.parse(raw) : []);
    } catch { return new Set(); }
}

export function markStepVisited(stepId: string): void {
    const visited = loadVisited();
    visited.add(stepId);
    localStorage.setItem(learningStorageKey(VISITED_KEY), JSON.stringify([...visited]));
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
        if (step.module === 'exams' && !step.available) continue;
        const s = getStepStatus(step, course.level);
        if (s === 'complete')      completed++;
        else if (s === 'visited')  visitedCount++;
    }
    const total = course.steps.filter(step => step.module !== 'exams' || step.available).length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, visited: visitedCount, total, pct };
}

export function getActiveCourse(): string | null {
    return localStorage.getItem(learningStorageKey(ACTIVE_COURSE_KEY));
}

export function setActiveCourse(level: string): void {
    localStorage.setItem(learningStorageKey(ACTIVE_COURSE_KEY), level);
    window.dispatchEvent(new CustomEvent('activeCourseChanged', { detail: level }));
}

interface CourseResume { stepId: string; path: string }

function loadCourseResume(course: Course): CourseResume | null {
    try {
        const value = JSON.parse(localStorage.getItem(learningStorageKey(`courseResume:${course.level}`)) || 'null');
        return value && typeof value.stepId === 'string' && typeof value.path === 'string' ? value : null;
    } catch { return null; }
}

export function rememberCourseStep(course: Course, step: CourseStep, path: string): void {
    localStorage.setItem(learningStorageKey(`courseResume:${course.level}`), JSON.stringify({ stepId: step.id, path: unscopedPath(path) }));
}

export function getCourseResumePath(course: Course, step: CourseStep): string {
    const path = `/courses/${course.level.toLowerCase()}${step.path}`;
    const resume = loadCourseResume(course);
    return resume?.stepId === step.id && contentKey(resume.path) === contentKey(path)
        && getStepStatus(step, course.level) !== 'complete' ? resume.path : path;
}

export function getUpcomingSteps(course: Course): CourseStep[] {
    const steps = course.steps.filter(step => step.module !== 'exams' || step.available);
    const resume = loadCourseResume(course);
    const index = steps.findIndex(step => step.id === resume?.stepId);
    const ordered = index < 0 ? steps : [...steps.slice(index), ...steps.slice(0, index)];
    return ordered.filter(step => getStepStatus(step, course.level) !== 'complete');
}

export function getNextStep(course: Course): CourseStep | null {
    return getUpcomingSteps(course)[0] ?? null;
}

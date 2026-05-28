import type { Course, CourseStep } from '../data/courses';
import { loadMastery } from './progress';

export type StepStatus = 'complete' | 'visited' | 'not-started';

const VISITED_KEY     = 'courseStepVisited';
const ACTIVE_COURSE_KEY = 'activeCourse';

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

export function getStepStatus(step: CourseStep): StepStatus {
    const visited = loadVisited();

    if (step.type === 'vocabulary') {
        const mastery = loadMastery();
        const prefix  = `${step.contentId}:`;
        const entries = Object.entries(mastery).filter(([k]) => k.startsWith(prefix));
        if (entries.length > 0) {
            const mastered = entries.filter(([, v]) => v.level >= 3).length;
            return mastered >= 10 ? 'complete' : 'visited';
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
        const s = getStepStatus(step);
        if (s === 'complete')      completed++;
        else if (s === 'visited')  visitedCount++;
    }
    const pct = Math.round(((completed + visitedCount * 0.5) / course.steps.length) * 100);
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
        if (getStepStatus(step) !== 'complete') return step;
    }
    return null;
}

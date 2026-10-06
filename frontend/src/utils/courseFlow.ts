import type { Course } from '../data/courseTypes';
import { unscopedPath } from './learningRoutes';

export function modulePath(path: string): string {
    return unscopedPath(path).replace(/\/(learn|table|quiz)\/?$/, '').replace(/\/$/, '');
}

export function getCoursePosition(courses: Course[], pathname: string) {
    const path = modulePath(pathname);
    for (const course of courses) {
        const steps = course.steps.filter(step => step.module !== 'exams' || step.available);
        const index = steps.findIndex(step => modulePath(`/courses/${course.level.toLowerCase()}${step.path}`) === path);
        if (index < 0) continue;
        const step = steps[index];
        const unit = course.units?.find(unit => unit.number === step.unit);
        const unitSteps = steps.filter(item => item.unit === step.unit);
        return { course, step, unit, previous: steps[index - 1] ?? null, next: steps[index + 1] ?? null,
            unitPosition: unitSteps.findIndex(item => item.id === step.id) + 1, unitTotal: unitSteps.length };
    }
    return null;
}

import type { Course, CourseStep } from '../types/courses';
import type { UnitExam } from '../types/exams';

// Generated entries stay after the unit's lessons, including newly synced content.
export function withUnitExams(courses: Course[], exams: UnitExam[], language: 'fr' | 'en'): Course[] {
    return courses.map(course => {
        const steps: CourseStep[] = [];
        const lastIndex = new Map<number, number>();
        course.steps.forEach((step, index) => { if (step.unit != null) lastIndex.set(step.unit, index); });
        const examStep = (unit: number): CourseStep => {
            const exam = exams.find(item => item.level === course.level && item.unit === unit);
            const id = `${course.level.toLowerCase()}-exam-${unit}`;
            return { id, contentId: id, unit, module: 'exams', type: 'exams', path: `/exams/${unit}`,
                title: language === 'en' ? `Examen de l’unité ${unit}` : `Unit ${unit} exam`,
                available: !!exam?.questions.length, isDemo: exam?.isDemo ?? false };
        };
        course.steps.forEach((step, index) => {
            steps.push(step);
            if (step.unit != null && lastIndex.get(step.unit) === index) steps.push(examStep(step.unit));
        });
        for (const unit of course.units ?? []) {
            if (!lastIndex.has(unit.number)) steps.push(examStep(unit.number));
        }
        return { ...course, steps };
    });
}

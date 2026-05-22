import { COURSES, COURSES_EN } from '../data/courses';
import { loadLearningMode } from './settings';

export function useCourses() {
    return loadLearningMode() === 'learn-english' ? COURSES_EN : COURSES;
}

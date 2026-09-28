import { COURSES } from '../data/fr/courses';
import { COURSES_EN } from '../data/en/courses';
import { loadLearningMode } from './settings';

export function useCourses() {
    return loadLearningMode() === 'learn-english' ? COURSES_EN : COURSES;
}

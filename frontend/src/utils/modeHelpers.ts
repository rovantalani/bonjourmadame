import { useLearning } from '../context/LearningContext';

export function useCourses() {
    return useLearning().courses;
}

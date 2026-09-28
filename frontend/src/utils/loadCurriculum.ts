import type { TargetLanguage } from './settings';
import type { Curriculum } from '../context/LearningContext';

export async function loadCurriculum(language: TargetLanguage): Promise<Curriculum> {
    if (language === 'en') {
        const [courses, verbs] = await Promise.all([import('../data/en/courses'), import('../data/en/verbs')]);
        return { courses: courses.COURSES_EN, tenses: verbs.TENSES_BY_LEVEL, helpers: verbs.HELPERS };
    }
    const [courses, verbs] = await Promise.all([import('../data/fr/courses'), import('../data/fr/verbs')]);
    return { courses: courses.COURSES, tenses: verbs.TENSES_BY_LEVEL, helpers: verbs.HELPERS };
}

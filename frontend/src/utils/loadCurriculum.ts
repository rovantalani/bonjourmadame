import type { TargetLanguage } from './settings';
import type { Curriculum } from '../context/LearningContext';
import type { Course } from '../data/courseTypes';

export async function loadCurriculum(language: TargetLanguage): Promise<Curriculum> {
    const verbsPromise = language === 'en' ? import('../data/en/verbs') : import('../data/fr/verbs');
    const [response, verbs] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_BASE}/api/learning/${language}/courses`),
        verbsPromise,
    ]);
    if (!response.ok) throw new Error(`Could not load ${language} courses (${response.status})`);
    const courses: Course[] = await response.json();
    return { courses, tenses: verbs.TENSES_BY_LEVEL, helpers: verbs.HELPERS };
}

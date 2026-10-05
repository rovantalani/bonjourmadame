import type { VocabularyData } from '../types/vocabulary';
import type { GrammarLesson } from '../types/lectures/grammar';
import type { PhraseCategory } from '../types/lectures/phrases';
import type { ReadingPassage } from '../types/lectures/reading';
import type { HelperVerbFR, HelperVerbEN, VerbEntry, VerbGroup } from '../types/verbs';
import type { UnitExam } from '../types/exams';
import type { Course } from '../types/courses';
import * as frenchContent from '../content/fr';
import * as englishContent from '../content/en';

export type TargetLanguage = 'fr' | 'en';

export interface LearningContent {
    courses: Course[];
    exams: UnitExam[];
    vocabulary: VocabularyData;
    modules: { id: string; title: string; description: string; icon: string; color: string }[];
    grammar: GrammarLesson[];
    phrases: PhraseCategory[];
    reading: ReadingPassage[];
    verbGroups: Record<string, VerbGroup>;
    verbs: Record<string, VerbEntry[]>;
    verbById: Record<string, VerbEntry>;
    verbGroupMap: Record<string, string>;
    helpers: Record<string, HelperVerbFR | HelperVerbEN>;
}

// This composition layer selects one independent package. Content packages never
// import each other, and request handlers receive only the selected catalog.
export const learningContent: Record<TargetLanguage, LearningContent> = {
    fr: {
        courses: frenchContent.COURSES,
        exams: frenchContent.unitExams,
        vocabulary: frenchContent.vocabularyData,
        modules: frenchContent.vocabularyModules,
        grammar: frenchContent.grammarLessons,
        phrases: frenchContent.phraseCategories,
        reading: frenchContent.readingPassages,
        verbGroups: frenchContent.verbGroups,
        verbs: frenchContent.verbsData,
        verbById: frenchContent.verbById,
        verbGroupMap: frenchContent.verbGroupMap,
        helpers: frenchContent.helperVerbsDataFR,
    },
    en: {
        courses: englishContent.COURSES_EN,
        exams: englishContent.unitExams,
        vocabulary: englishContent.vocabularyDataEN,
        modules: englishContent.vocabularyModulesEN,
        grammar: englishContent.grammarLessonsEN,
        phrases: englishContent.phraseCategoriesEN,
        reading: englishContent.readingPassagesEN,
        verbGroups: Object.fromEntries(Object.entries(englishContent.verbGroupsEN).map(([id, group]) => [id, {
            ...group, title: group.titleFR, description: group.descriptionFR,
        }])),
        verbs: englishContent.verbsDataEN,
        verbById: englishContent.verbByIdEN,
        verbGroupMap: englishContent.verbGroupMapEN,
        helpers: englishContent.helperVerbsDataEN,
    },
};

export function isTargetLanguage(value: unknown): value is TargetLanguage {
    return value === 'fr' || value === 'en';
}

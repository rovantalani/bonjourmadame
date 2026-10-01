import type { VocabularyData } from '../types/vocabulary';
import type { GrammarLesson } from '../types/lectures/grammar';
import type { PhraseCategory } from '../types/lectures/phrases';
import type { ReadingPassage } from '../types/lectures/reading';
import type { HelperVerbFR, HelperVerbEN, VerbEntry, VerbGroup } from '../types/verbs';
import { vocabularyData } from '../content/fr/vocabulary';
import { vocabularyModules } from '../content/fr/modules';
import { grammarLessons } from '../content/fr/grammar';
import { phraseCategories } from '../content/fr/phrases';
import { readingPassages } from '../content/fr/reading';
import * as frenchVerbs from '../content/fr/verbs';
import { vocabularyDataEN } from '../content/en/vocabulary';
import { vocabularyModulesEN } from '../content/en/modules';
import { grammarLessonsEN } from '../content/en/grammar';
import { phraseCategoriesEN } from '../content/en/phrases';
import { readingPassagesEN } from '../content/en/reading';
import * as englishVerbs from '../content/en/verbs';

export type TargetLanguage = 'fr' | 'en';

export interface LearningContent {
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
        vocabulary: vocabularyData,
        modules: vocabularyModules,
        grammar: grammarLessons,
        phrases: phraseCategories,
        reading: readingPassages,
        verbGroups: frenchVerbs.verbGroups,
        verbs: frenchVerbs.verbsData,
        verbById: frenchVerbs.verbById,
        verbGroupMap: frenchVerbs.verbGroupMap,
        helpers: frenchVerbs.helperVerbsDataFR,
    },
    en: {
        vocabulary: vocabularyDataEN,
        modules: vocabularyModulesEN,
        grammar: grammarLessonsEN,
        phrases: phraseCategoriesEN,
        reading: readingPassagesEN,
        verbGroups: Object.fromEntries(Object.entries(englishVerbs.verbGroupsEN).map(([id, group]) => [id, {
            ...group, title: group.titleFR, description: group.descriptionFR,
        }])),
        verbs: englishVerbs.verbsDataEN,
        verbById: englishVerbs.verbByIdEN,
        verbGroupMap: englishVerbs.verbGroupMapEN,
        helpers: englishVerbs.helperVerbsDataEN,
    },
};

export function isTargetLanguage(value: unknown): value is TargetLanguage {
    return value === 'fr' || value === 'en';
}

import type { VocabularyData, VocabularyModule } from '../../../types/vocabulary';
import { modulesA1, readingWordsA1 } from './a1';
import { modulesA2, readingWordsA2 } from './a2';
import { modulesB1, readingWordsB1 } from './b1';
import { modulesB2, readingWordsB2 } from './b2';
import { modulesC1, readingWordsC1 } from './c1';
import { modulesC2, readingWordsC2 } from './c2';

const entries = [...modulesA1, ...modulesA2, ...modulesB1, ...modulesB2, ...modulesC1, ...modulesC2];
export const vocabularyModulesEN: VocabularyModule[] = entries.map(({ words: _words, ...module }) => module);
export const vocabularyDataEN: VocabularyData = {
    ...Object.fromEntries(entries.map(({ id, words }) => [id, words])),
    ...readingWordsA1,
    ...readingWordsA2,
    ...readingWordsB1,
    ...readingWordsB2,
    ...readingWordsC1,
    ...readingWordsC2,
};

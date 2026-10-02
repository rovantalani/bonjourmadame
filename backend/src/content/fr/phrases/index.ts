import type { PhraseCategory } from '../../../types/lectures/phrases';
import { phrasesA1 } from './a1';
import { phrasesA2 } from './a2';
import { phrasesB1 } from './b1';
import { phrasesB2 } from './b2';
import { phrasesC1 } from './c1';
import { phrasesC2 } from './c2';

export const phraseCategories: PhraseCategory[] = [...phrasesA1, ...phrasesA2, ...phrasesB1, ...phrasesB2, ...phrasesC1, ...phrasesC2];

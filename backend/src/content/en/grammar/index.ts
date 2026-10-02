import type { GrammarLesson } from '../../../types/lectures/grammar';
import { grammarA1 } from './a1';
import { grammarA2 } from './a2';
import { grammarB1 } from './b1';
import { grammarB2 } from './b2';
import { grammarC1 } from './c1';
import { grammarC2 } from './c2';

export const grammarLessonsEN: GrammarLesson[] = [...grammarA1, ...grammarA2, ...grammarB1, ...grammarB2, ...grammarC1, ...grammarC2];

import type { ReadingPassage } from '../../../types/lectures/reading';
import { readingA1 } from './a1';
import { readingA2 } from './a2';
import { readingB1 } from './b1';
import { readingB2 } from './b2';
import { readingC1 } from './c1';
import { readingC2 } from './c2';

export const readingPassagesEN: ReadingPassage[] = [...readingA1, ...readingA2, ...readingB1, ...readingB2, ...readingC1, ...readingC2];

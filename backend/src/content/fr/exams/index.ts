import { unitExamsB1 } from './b1';
import { finalExamB1 } from './final.b1';
import { unitExamsB2 } from './b2';
import { finalExamB2 } from './final.b2';
import { unitExamsC1 } from './c1';
import { finalExamC1 } from './final.c1';
import { unitExamsC2 } from './c2';
import { finalExamC2 } from './final.c2';
import { unitExamsA2 } from './a2';
import { finalExamA2 } from './final.a2';
import { unitExams as examsA1 } from './a1';
import { finalExamsA1 } from './final.a1';

export const unitExams = [...examsA1, ...finalExamsA1, ...unitExamsA2, finalExamA2, ...unitExamsB1, finalExamB1, ...unitExamsB2, finalExamB2, ...unitExamsC1, finalExamC1, ...unitExamsC2, finalExamC2];

import { unitExamsA2 } from './a2';
import { finalExamA2 } from './final.a2';
import { unitExams as examsA1 } from './a1';
import { finalExamsA1 } from './final.a1';

export const unitExams = [...examsA1, ...finalExamsA1, ...unitExamsA2, finalExamA2];

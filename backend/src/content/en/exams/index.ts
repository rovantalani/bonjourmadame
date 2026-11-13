import { unitExams as examsA1 } from './a1';
import { finalExamsA1 } from './final.a1';

import { unitExams as examsA2 } from './a2';
import { finalExamsA2 } from './final.a2';

import { unitExams as examsB1 } from './b1';
import { finalExamsB1 } from './final.b1';

export const unitExams = [...examsA1, ...finalExamsA1, ...examsA2, ...finalExamsA2, ...examsB1, ...finalExamsB1];

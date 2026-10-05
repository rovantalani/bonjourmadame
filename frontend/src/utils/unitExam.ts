import { gradeAnswer } from './answerValidator';

export interface ExamQuestion {
    id: string;
    sourceStepId: string;
    prompt: string;
    context?: string;
    options?: string[];
    answers: string[];
    explanation: string;
}
export interface ExamData {
    level: string;
    unit: number;
    isDemo: boolean;
    passPercent: number;
    questions: ExamQuestion[];
}

export function scoreExam(exam: ExamData, answers: Record<string, string>) {
    const results = exam.questions.map(question => {
        const answer = answers[question.id] ?? '';
        const correct = !!answer.trim() && question.answers.some(expected =>
            question.options ? answer === expected : gradeAnswer(answer, expected) !== 'wrong');
        return { question, answer, correct };
    });
    const correct = results.filter(result => result.correct).length;
    const percent = results.length ? correct / results.length * 100 : 0;
    return { results, correct, percent, passed: results.length > 0 && percent >= exam.passPercent };
}

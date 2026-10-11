/** Authored curriculum content. Target language is independent of feedback language. */
export interface WritingLesson {
    id: string;
    targetLanguage: 'fr' | 'en';
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    unit: number;
    title: string;
    prompt: string;
    suggestedWords: { min: number; max: number };
    learningObjectives: string[];
}

/** Half-open UTF-16 offsets into the immutable submitted text.
 * Insertions have start === end and original === ''. Deletions have replacement === ''.
 * Production evaluation must validate these anchors before rendering.
 */
export interface WritingCorrection {
    id: string;
    kind: 'replacement' | 'insertion' | 'deletion' | 'suggestion';
    start: number;
    end: number;
    original: string;
    replacement: string;
    category: string;
    explanation: string;
}

export interface WritingReview {
    lessonId: string;
    originalText: string;
    feedbackLanguage: 'fr' | 'en';
    corrections: WritingCorrection[];
    /** Overall rating out of five; illustrative for sample reviews. */
    rating: 1 | 2 | 3 | 4 | 5;
    overallNotes: string[];
}

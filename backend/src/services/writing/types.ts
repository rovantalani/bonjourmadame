export type CorrectionKind = 'replacement' | 'insertion' | 'deletion' | 'suggestion';

/** Literal excerpts, never model-generated offsets. Context touches the excerpt. */
export interface ProposedCorrection {
    kind: CorrectionKind;
    original: string;
    replacement: string;
    prefix: string;
    suffix: string;
    category: string;
    explanation: string;
}

export interface ProposedWritingReview {
    rating: 1 | 2 | 3 | 4 | 5;
    overallNotes: string[];
    corrections: ProposedCorrection[];
}

export interface ValidatedCorrection extends Omit<ProposedCorrection, 'prefix' | 'suffix'> {
    id: string;
    start: number;
    end: number;
}

export interface UnplacedCorrection extends ProposedCorrection {
    reason: 'not-found' | 'ambiguous' | 'overlap' | 'invalid-edit' | 'unsafe-boundary';
}

export interface ValidatedWritingReview {
    lessonId: string;
    originalText: string;
    feedbackLanguage: 'fr' | 'en';
    rating: ProposedWritingReview['rating'];
    overallNotes: string[];
    corrections: ValidatedCorrection[];
    /** Display separately as general feedback, never as inline annotations. */
    unplacedCorrections: UnplacedCorrection[];
}

/** Provider-neutral structured response contract. IDs, offsets and identity come from the server. */
export const writingReviewSchema = {
    type: 'object', additionalProperties: false,
    required: ['rating', 'overallNotes', 'corrections'],
    properties: {
        rating: { type: 'integer', enum: [1, 2, 3, 4, 5] },
        overallNotes: { type: 'array', minItems: 1, maxItems: 5, items: { type: 'string', minLength: 1, maxLength: 1000 } },
        corrections: {
            type: 'array', maxItems: 50,
            items: {
                type: 'object', additionalProperties: false,
                required: ['kind', 'original', 'replacement', 'prefix', 'suffix', 'category', 'explanation'],
                properties: {
                    kind: { type: 'string', enum: ['replacement', 'insertion', 'deletion', 'suggestion'] },
                    original: { type: 'string', maxLength: 12000 },
                    replacement: { type: 'string', maxLength: 12000 },
                    prefix: { type: 'string', maxLength: 12000 },
                    suffix: { type: 'string', maxLength: 12000 },
                    category: { type: 'string', minLength: 1, maxLength: 100 },
                    explanation: { type: 'string', minLength: 1, maxLength: 1000 },
                },
            },
        },
    },
} as const;

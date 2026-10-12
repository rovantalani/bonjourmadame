# Writing feedback contract

Step 3 is a pure validation service; there is no model call, HTTP endpoint or persistence yet.

`writingReviewSchema` defines the structured output expected from a future evaluator. Call `validateWritingReview(trustedSubmission, parsedResponse)` after receiving it. The submission's lesson ID, original text and feedback language come from the application, never from model output. Malformed responses throw and must not complete a lesson. Limits are 12,000 submitted UTF-16 code units, 50 edits and 1–5 overall notes.

Each proposed edit includes literal `original`, `replacement`, and immediately adjacent `prefix`/`suffix` excerpts. Empty context is allowed for unique excerpts. Repeated excerpts need enough context to select exactly one occurrence. For insertions, `original` is empty and at least one context string is required. Include necessary spaces in replacement text. Deletions have an empty replacement. Suggestions are optional improvements, not errors. Request whole words or phrases rather than word fragments. The overall rating is an integer from 1–5; optional wording suggestions should not lower it. Overall notes briefly explain correction reasons rather than prescribe practice activities. Semantic teaching quality and rating calibration still need evaluation in step 4.

Matching is literal, case-sensitive and Unicode-preserving. We deliberately do not normalize apostrophes, accents, newlines or whitespace: a changed quote should remain general feedback rather than highlight the wrong text. Returned positions are sorted half-open UTF-16 offsets, compatible with JavaScript `slice`. Original text is never rewritten. Grapheme boundaries prevent splitting emoji and combining accents; word boundaries prevent editing a matching substring inside another word.

Exact duplicate edits are collapsed. All members of overlapping/conflicting edits are moved to `unplacedCorrections`, including insertions at replacement boundaries where ordering would be unclear. Adjacent non-empty ranges are allowed. Ambiguous, missing, invalid or unsafe anchors also become unplaced feedback. The UI renders their explanation as general notes, without applying their replacement. A valid schema and anchor are not proof that an AI correction is linguistically correct.

Tests run with `npm test --prefix backend`; they use no provider key or database. Existing API tests bind a local server.

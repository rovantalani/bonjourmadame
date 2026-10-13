# Writing feedback contract

The evaluator calls the OpenAI Responses API and passes its structured response through this pure validation service. The writing API loads authored lesson context from the server, accepts guest reviews, and keeps in-memory request reservations and completed feedback for usage accounting and duplicate reuse.

`writingReviewSchema` defines the structured output expected from the evaluator. Call `validateWritingReview(trustedSubmission, parsedResponse)` after receiving it. The submission's lesson ID, original text and feedback language come from the application, never from model output. Malformed responses throw and must not complete a lesson. Limits are 12,000 submitted UTF-16 code units, 50 edits and 1–5 overall notes.

Each proposed edit includes literal `original`, `replacement`, and immediately adjacent `prefix`/`suffix` excerpts. Empty context is allowed for unique excerpts. Repeated excerpts need enough context to select exactly one occurrence. For insertions, `original` is empty and at least one context string is required. Include necessary spaces in replacement text. Deletions have an empty replacement. Suggestions are optional improvements, not errors. Request whole words or phrases rather than word fragments. The overall rating is an integer from 1–5; optional wording suggestions should not lower it. Overall notes briefly explain correction reasons rather than prescribe practice activities. Live teaching quality and rating calibration must be checked after configuring the API key. Automated provider tests use mocked responses.

Matching is literal, case-sensitive and Unicode-preserving. We deliberately do not normalize apostrophes, accents, newlines or whitespace: a changed quote should remain general feedback rather than highlight the wrong text. Returned positions are sorted half-open UTF-16 offsets, compatible with JavaScript `slice`. Original text is never rewritten. Grapheme boundaries prevent splitting emoji and combining accents; word boundaries prevent editing a matching substring inside another word.

Exact duplicate edits are collapsed. All members of overlapping/conflicting edits are moved to `unplacedCorrections`, including insertions at replacement boundaries where ordering would be unclear. Adjacent non-empty ranges are allowed. Ambiguous, missing, invalid or unsafe anchors also become unplaced feedback. The UI renders their explanation as general notes, without applying their replacement. A valid schema and anchor are not proof that an AI correction is linguistically correct.

Tests run with `npm test --prefix backend`; they use no provider key or database. Existing API tests bind a local server.

## API and usage

`GET /api/writing/:language/lessons` serves authored prompts. `POST /api/writing/:language/lessons/:lessonId/review` accepts exactly `{ text, feedbackLanguage }` without authentication. The target language comes from the URL; feedback language is `fr` or `en`. Text is limited to 6,000 UTF-16 code units; empty submissions are rejected.

One provider call per admitted request, with a 45-second timeout, 4,000 output-token cap, low reasoning and `store: false`. No automatic provider retries. Refusals, incomplete responses, malformed JSON and invalid schemas return safe error codes. The submitted text is untrusted user content, kept separate from trusted teacher instructions. No lesson completion is changed by a model rating.

Guest admission is synchronous in a single server process, so concurrent requests share counters. Defaults: 10 requests per network address per day, 50 per address per UTC calendar month, and 5,000 across the server per month. Zero disables new requests. Failed attempts count because provider work may have incurred cost. Validation and configuration errors occur before admission. These are request limits, not dollar budgets.

The request identity hashes the network address, target language, lesson, exact text, feedback language, model and rubric version. Raw addresses are not retained in cache keys. Completed duplicates reuse feedback; in-flight duplicates return 409. Stale pending requests can retry after two minutes, and late completion cannot overwrite a newer reservation. State is cleared on server restart and at the next UTC month. Feedback remains only in memory; writing has no database or JWT dependency. A multi-instance deployment needs shared guest-compatible limits and cache storage. Do not enable proxy trust without matching the deployment's trusted proxies.

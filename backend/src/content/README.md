# Course content files

French and English content live in `fr/` and `en/`. Within each language, `courses/`, `grammar/`, `phrases/`, `reading/`, `verbs/`, and `vocabulary/` have one file per CEFR level (`a1.ts` through `c2.ts`). Teachers normally edit only the level file for their content type. The `index.ts` files combine those files for the API.

Every module still has its own `level` and `unit`. The file location and the module's level must agree. Course files hold the ordered steps for each level; a unit change should be reflected there too.

Vocabulary modules keep their label, placement, and words in the same object. Some reading passages also have word lists that are not standalone vocabulary modules. Those lists are in `readingWordsA1`, `readingWordsA2`, and so on, in the matching vocabulary level file.

## Unit and level exams

Course files list both lesson steps and exam steps in their intended order. Each
lesson unit ends with its unit exam. Each level ends with a separate `FINAL EXAM`
unit containing its level exam. Exams have the same `module: 'exams'` and
`type: 'exams'`; the final exam uses the stable path `/exams/final`.

Teachers write questions in `fr/exams/a1.ts` or `en/exams/a1.ts` (and separate level
files as needed), then export their arrays through `exams/index.ts`. Each exam
belongs to one `level` and a numeric `unit`. Level exams use `unit: 'final'`, with
separate files such as `fr/exams/final.a1.ts`; their questions may reference any
lesson unit in that level.

The corresponding course step sets `available` and `isDemo`. When questions are
ready, set `available: true` and keep `isDemo` consistent with the question file.
Unavailable exams show “Coming soon” and do not count towards progress. When adding
lessons to a course, place them before that unit's exam. Exam questions are authored
by teachers, not generated from lessons.

Set `passPercent` (currently 80), `isDemo`, and `questions`. Each question needs a
unique `id`, a `sourceStepId` from that same unit (or any lesson unit in the same
level for final exams), a `prompt`, accepted `answers`,
and an `explanation`. Add `context` for reading excerpts, or `options` for multiple
choice. With options, accepted answers must be exact option strings. Written
answers use the same spelling, punctuation and accent tolerance as lesson quizzes.

The included demos illustrate different lesson types and are labelled in the app;
they are not complete assessments of those units or levels. Set `isDemo: false` after writing
a full exam. Exams show scores and corrections after submission. Passing records
completion in the learner's current local progress; a retry starts a fresh attempt.
Answers are delivered to the browser, like existing lesson quizzes. These are
practice exams, not secure certification tests.

## French A2 replacement

French A2 now contains seven teaching units and a final exam, with paired reading
and vocabulary modules, grammar, phrases and verbs. Unit/final exams contain 122
questions in total. Writing and speaking each have seven A2 activities, available
through their own overview pages; the course roadmap currently supports neither
activity type. Speaking assessment remains a separate, unfinished integration.

Content originates from the supplied `French_A2` package and was adapted to the
repository's level filenames. Integration corrects reflexive verb elisions and
an exam answer, expands selected accepted answers, and gives colliding grammar
and verb entries unique A2 IDs. The replaced past-tense comparison lesson also
gets a new ID, so its previous quiz completion cannot complete the new lesson.
Existing learner data is retained. New module IDs start fresh; the unchanged
voir/dire/partir identities retain any existing verb practice history. Removed
lesson bookmarks may no longer resolve. English and other French levels retain
their content. This is a course practice assessment, not DELF certification.

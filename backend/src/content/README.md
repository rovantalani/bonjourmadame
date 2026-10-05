# Course content files

French and English content live in `fr/` and `en/`. Within each language, `courses/`, `grammar/`, `phrases/`, `reading/`, `verbs/`, and `vocabulary/` have one file per CEFR level (`a1.ts` through `c2.ts`). Teachers normally edit only the level file for their content type. The `index.ts` files combine those files for the API.

Every module still has its own `level` and `unit`. The file location and the module's level must agree. Course files hold the ordered steps for each level; a unit change should be reflected there too.

Vocabulary modules keep their label, placement, and words in the same object. Some reading passages also have word lists that are not standalone vocabulary modules. Those lists are in `readingWordsA1`, `readingWordsA2`, and so on, in the matching vocabulary level file.

## Unit exams

Every unit gets an exam entry automatically when the backend serves the course.
An entry without questions shows “Coming soon” and does not count towards progress.
The course sync command still orders lessons; it does not generate exam questions.

Teachers write exams in `fr/exams/a1.ts` or `en/exams/a1.ts` (and separate level
files as needed), then export their arrays through `exams/index.ts`. Each exam
belongs to exactly one `level` and `unit`. Do not add exam steps to course files.

Set `passPercent` (currently 80), `isDemo`, and `questions`. Each question needs a
unique `id`, a `sourceStepId` from that same unit, a `prompt`, accepted `answers`,
and an `explanation`. Add `context` for reading excerpts, or `options` for multiple
choice. With options, accepted answers must be exact option strings. Written
answers use the same spelling, punctuation and accent tolerance as lesson quizzes.

The included demos illustrate different lesson types and are labelled in the app;
they are not complete assessments of those units. Set `isDemo: false` after writing
a full exam. Exams show scores and corrections after submission. Passing records
completion in the learner's current local progress; a retry starts a fresh attempt.
Answers are delivered to the browser, like existing lesson quizzes. These are
practice exams, not secure certification tests.

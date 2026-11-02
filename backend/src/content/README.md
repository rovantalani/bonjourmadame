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

## French B1–C2 replacement

The supplied `French_B1_to_C2_Complete` content replaces the four advanced French
levels. Each level has seven teaching units plus its final exam (114 steps),
28 short readings, 42 vocabulary modules, 19 grammar lessons, seven phrase
categories, ten verb tables, seven writing activities and seven speaking activities.
There are 122 practice exam questions per level. Readings immediately precede
their corresponding vocabulary modules; every unit ends with its exam.

Imported content IDs are level-prefixed to avoid collisions and reuse of earlier
quiz completions. Stored progress is retained; replaced modules start fresh and
old bookmarks may stop resolving. French A1/A2 and English content are preserved.
Writing and speaking remain accessible through their overview pages rather than
roadmap steps. Speaking pronunciation assessment remains unavailable.

Integration fixes the cedillas in `nuancer`, clarifies expression-recall questions,
and supplies meaning cues from lesson examples. Reading-comprehension exam items
use multiple choice with interpretations from the unit's four texts, avoiding
exact-match grading of open paraphrases. The same source texts are available in
collapsible writing-task references and included in the evaluator's trusted
lesson data. Two writing tasks were reframed to analyze the supplied materials
rather than unavailable headline/translation pairs. C1/C2 submissions allow up to
12,000 characters; all other levels retain the 6,000-character limit.

These are short guided practice texts and activities. Their level labels and
advanced topics do not establish full CEFR coverage or official DELF/DALF
assessment equivalence. Linguistic review checked conjugation patterns and
sampled examples, prompts and answer keys; independent teacher review is still
useful for difficulty calibration and alternative interpretations.

## English A1–C2 replacement

The supplied `English_A1_to_C2_Complete` package replaces all six English levels,
including A1. Each level contains seven teaching units and a final exam (114
steps), 28 readings, 42 vocabulary modules, 19 grammar lessons, seven phrase
categories, seven writing tasks and seven speaking activities. A1 has eight verbs
plus the two core helpers; other levels have ten verbs. Each level has 75 unit
exam questions plus 28 final questions (103 total; 618 across all levels).

The package's first-person present column incorrectly used `am` for ordinary
verbs and `have`; integration corrects all 59 affected rows and retains `I am`
for `be`. Grammar cloze hints provide the translated meaning of the studied
expression. Reading assessment prompts explicitly request words from the text,
and their accepted excerpts are checked against the referenced passages. Writing
reference texts are shown and sent as trusted lesson context, using the shared
writing-source support already present for French.

New `a1en-` … `c2en-` content IDs keep levels separate. English exam URLs remain
stable, but their local completion/pass keys are revisioned so passing an old A1
demo does not complete its full replacement. Older records are preserved; new
module IDs start fresh and old module bookmarks may stop resolving. French
content is unchanged. Speaking assessment remains a separate integration; writing
and speaking continue to use their own overview pages.

Review covered repository types, links, ordering, translations/examples sampled
across levels, conjugation patterns and answer-source consistency. The readings
use repeated teaching templates, particularly at beginner levels, and grammar
and translation exercises target studied expressions rather than all valid
paraphrases. This is guided course practice, not independently certified CEFR
coverage or a complete Cambridge/IELTS assessment. Editorial review remains useful
for text variety, alternative answers and difficulty calibration.

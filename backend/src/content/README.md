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

## English A1 replacement

English A1 integrates the supplied `english_a1_REBUILT_v3_VERIFIED` archive:
seven teaching units and a final exam, 28 paired readings/vocabulary quizzes,
43 vocabulary modules (413 entries), 20 supplied grammar lessons, seven complete
verb tables, seven phrase lessons, five writing tasks and five speaking tasks.
Unit exams contain 84 questions, with another 35 in the final exam.

The roadmap has 114 supported steps. An added alphabet/numbers lesson exposes
the supplied foundation supplement, and verb usage notes appear in grammar.
Writing and speaking use their existing overview pages, as with the French
courses. Seven listening sets are available in the speaking overview, with slow
browser speech playback, initially collapsed scripts and self-check answers.
Speech availability/voice depends on the browser; these are synthesized dialogues.
Speaking task instructions and criteria are now visible above phrase practice.
Directions and scene prompts include textual stimuli; the first writing task
includes its registration-form source.

Integration adapts filenames, typed schemas, exports and verb routes. Replaced
grammar/verb IDs are A1-prefixed to avoid collisions and stale completion;
new vocabulary/reading/phrase IDs come from the supplied archive. Existing stored
progress is retained, but replaced lessons start fresh and old bookmarks can stop
resolving. Exam routes and content IDs follow the app's stable conventions, with
new step IDs. The first exam question accepts both pen and notebook, and stative
verb placeholders are excluded from conjugation quizzes. Other levels and French
content are preserved. Writing feedback and speaking assessment retain their
existing service availability; this import does not enable a new provider.

## English A2 replacement

English A2 integrates `english_a2_COMPLETE_VERIFIED.zip` using the same flows as
English A1: seven teaching units and a final exam, 114 supported roadmap steps,
28 readings immediately followed by their vocabulary quizzes, 43 vocabulary
modules (317 entries), 21 grammar lessons, seven complete verb tables, seven
phrase lessons and 119 practice exam questions (84 unit and 35 final).

Five writing and five speaking tasks are available through their existing overview
pages. Seven listening sets reuse slower browser speech playback, collapsed scripts
and self-check questions. Verb usage notes are visible in grammar; housing tasks
include reference texts, and the health reply task includes a message to answer.
Speaking assessment and writing feedback keep their existing provider availability.

The import adapts typed task schemas, filenames, exports and exam conventions.
A2 verb IDs are prefixed to prevent cross-level collisions; roadmap verbs link to
conjugation learning pages rather than helper-only table endpoints. Shared helper
cards resolve to the complete imported A1 do/go tables and A2 come table. Existing
stored progress is retained, while replaced lessons use new identities and removed
bookmarks may stop resolving. The A2 vocabulary audit checks the actual integrated
A1/A2 quiz entries; 317 A2 entries are distinct from A1 after basic normalization.
A1 content, other English levels and French content are preserved. The supplied
ZIP remains unchanged.

## English B1 replacement and content review

The supplied `english_b1_COMPLETE_VERIFIED.zip` was reviewed before integration.
The review covered all 28 readings, 21 grammar lessons, vocabulary/phrase lists,
productive tasks, listening supplements and 119 assessment questions. Connected
narratives, familiar work/travel situations, reported information and reasoned
opinions broadly fit the Council of Europe's [B1 global descriptors](https://www.coe.int/en/web/common-european-framework-reference-languages/table-%201-cefr-3.3-common-reference-levels-global-scale).
The verdict was suitable for integration after targeted editorial/assessment
corrections, rather than an independently certified or learner-piloted syllabus.
Some readings contain incidental structures beyond the main teaching targets.

An independent data audit confirmed 43 vocabulary modules, 337 distinct B1 quiz
entries with no normalized overlap against the integrated A1/A2 quizzes, valid
lesson/exam references, reading-vocabulary adjacency and complete six-person verb
tables. Normalization checks entries rather than establishing global semantic or
inflectional uniqueness across every level. The archive's PASS label alone was
not used as the quality verdict.

The app receives seven teaching units plus a final exam and 114 roadmap steps,
seven verb tables, seven phrase lessons, five writing tasks, five speaking tasks
and seven listening sets. Writing/speaking use their existing overview pages.
Listening reuses browser speech synthesis, collapsed scripts and self-check
answers; recordings are not supplied by the archive. B1 speaking tasks offer
separate phrase-model and free-response modes. Free responses allow up to three
minutes, enabling the requested two-minute output; switching modes or leaving
releases recording resources. Recordings remain on the device and no automatic
speaking score is assigned. Existing shorter phrase limits remain unchanged.

Editorial corrections distinguish misinformation from intentional disinformation,
fix a college translation and might pronunciation guidance, reconcile writing
word counts with their instructions, and supply optional trusted example texts.
Grammar practice accepts taught alternative forms or specifies the intended verb
and tense. Unit reading comprehension and selected final inference questions use
multiple choice to avoid exact-match grading of valid paraphrases. Correct option
positions remain balanced. The website-editing question now describes overlapping
work without falsely stating both people edited the timetable; the exchange-plan
answer includes both reports and a presentation. Verb assessment prompts are
English sentences with explicit past-simple instructions. Past-participle usage
notes are visible alongside grammar.

The import adapts typed schemas, exports, filename conventions, exam identities
and real conjugation routes. B1 verb IDs are level-prefixed to avoid collisions.
Stored progress is retained; replaced lessons start fresh and removed bookmarks
may stop resolving. Source ZIP, A1/A2 content, other English levels and French
content are unchanged. Existing assessment-provider availability is preserved.

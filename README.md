# Bonjour Madame

A French and English learning app organised into Vocabulary, Verbs, and Lectures.

## Features

- **Vocabulary** — Thematic word modules (Sherlock Holmes, daily life, emotions, travel) with flashcard-style quizzes
- **Verbs** — Conjugation tables, guided learning, and quizzes
- **Lectures** — Grammar lessons, phrases, and reading passages

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, TypeScript, Vite, React Router |
| Backend | Node.js, Express 5, TypeScript |
| Dev tooling | Concurrently, ts-node-dev, ESLint |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
# Install root dependencies
npm install

# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

### Run (development)

From the project root, create the local frontend configuration:

```bash
cp frontend/.env.example frontend/.env.local
```

Keep `VITE_API_BASE` empty locally so `/api` requests use Vite's proxy to the backend on port 3001. Without this setting, requests include an `undefined` prefix and module content fails to load. The local configuration is ignored by Git. Restart Vite if it was already running and has not picked up the setting.

```bash
# From the root — starts both backend and frontend concurrently
npm run dev
```

Or run them separately:

```bash
# Terminal 1 — backend (port 3001)
cd backend && npm run dev

# Terminal 2 — frontend (port 3000)
cd frontend && npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
bonjourmadame/
├── backend/
│   └── src/
│       ├── index.ts          # Server setup and module router mounting
│       ├── content/
│       │   ├── fr/          # French-owned vocabulary, modules, verbs, grammar, phrases, reading
│       │   └── en/          # Independently editable English-owned content
│       ├── routes/
│       │   ├── vocabulary.ts
│       │   ├── verbs.ts
│       │   ├── lectures/    # Grammar, phrases, and reading routers
│       │   ├── auth.ts
│       │   └── progress.ts
│       └── types/           # Shared interfaces; lecture types live in lectures/
└── frontend/
    └── src/
        ├── App.tsx           # Router setup
        ├── data/
        │   ├── courseTypes.ts # Neutral course interfaces and helpers
        │   ├── fr/courses.ts  # French curriculum
        │   └── en/courses.ts  # English curriculum
        └── pages/
            ├── vocabulary/
            ├── verbs/
            └── lectures/
                ├── Lectures.tsx
                ├── grammar/
                ├── phrases/
                └── reading/
```

Content belongs to the language being learned: `backend/src/content/fr` and `backend/src/content/en`. These packages may import their own files and neutral types, but must never import or re-export each other's content. English vocabulary, module labels, and phrases were copied once to establish independent ownership; edit each curriculum separately from now on. Bilingual translations within a package are intentional.

Frontend curricula follow the same rule under `frontend/src/data/fr` and `frontend/src/data/en`, with neutral course types in `courseTypes.ts`. The mode selector currently imports both curricula; loading only the active curriculum is part of the later frontend cutover.

Run `npm test --prefix backend` to check content boundaries, independent object ownership, and curriculum references. Five existing legacy verb-group references (French A2/B1/B2 and English B1/B2) are explicitly recorded in the tests for correction during the frontend routing cutover. No additional unresolved references are permitted.

Independent content packages and strict language-scoped content APIs are implemented. The current frontend still uses legacy routes with historical language selection and combined vocabulary/reading lookups. Progress storage is also language-scoped. The content frontend cutover and removal of compatibility behavior follow in separate PRs.

The existing `?lang=fr` API parameter means a French interface for English learners. It is preserved for compatibility. Course step IDs and content IDs remain stable so saved progress continues to match. Course steps use one of three `module` values: `vocabulary`, `verbs`, or `lectures`; lecture `type` values are `grammar`, `phrases`, or `reading`.

## API Endpoints

New learning requests use `/api/learning/:targetLanguage`, where `targetLanguage` is exactly `fr` (learning French) or `en` (learning English). This is independent of interface language. For example, `/api/learning/en/lectures/grammar/en-articles` retrieves an English lesson; `/api/learning/fr/verbs/helpers/etre` retrieves a French helper verb.

| Method | Path after `/api/learning/:targetLanguage` | Description |
|---|---|---|
| GET | `/vocabulary/modules` | Selected curriculum's module labels and word counts |
| GET | `/vocabulary/:moduleId` | Selected curriculum's vocabulary |
| GET | `/verbs/helpers/:verbId` | Helper-verb conjugation table |
| GET | `/verbs/groups/:groupId` | Verb group and its verbs |
| GET | `/verbs/conjugation/:verbId` | Conjugation data |
| GET | `/verbs/courses/:level` | New and earlier-level review verbs |
| GET | `/lectures/grammar/:lessonId` | Grammar lesson |
| GET | `/lectures/phrases/:categoryId` | Phrase lesson and quiz content |
| GET | `/lectures/reading/:moduleId` | Reading passage with vocabulary from the same curriculum |

Missing or unsupported target languages return JSON `400`. Content absent from the selected catalog and unknown scoped routes return JSON `404`; there is no cross-language lookup or fallback. The URL path selects the curriculum even if a legacy `?lang=` parameter is supplied. IDs may overlap between independent catalogs. Existing copied bilingual vocabulary and phrases remain valid in both catalogs until edited independently.

The following legacy endpoints remain temporarily available for the current frontend:

| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/vocabulary/modules` | List all vocabulary modules |
| GET | `/api/vocabulary/:moduleId` | Words for a specific module |
| GET | `/api/verbs/helpers/:verbId` | Helper-verb conjugation table |
| GET | `/api/verbs/groups/:groupId` | Verb group and its verbs |
| GET | `/api/verbs/conjugation/:verbId` | Conjugation data for learning and quizzes |
| GET | `/api/verbs/courses/:level` | New and review verbs for a course |
| GET | `/api/lectures/grammar/:lessonId` | Grammar lecture |
| GET | `/api/lectures/phrases/:categoryId` | Phrase lecture and quiz content |
| GET | `/api/lectures/reading/:moduleId` | Reading lecture with supporting vocabulary |

The scoped content API can deploy before the content frontend cutover. The legacy content endpoints will be removed after the frontend switches; browser course URLs remain unchanged in this stage.

## Language-scoped progress

Authenticated progress now requires `/api/progress/:targetLanguage`, with exactly `fr` or `en`:

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/progress/:targetLanguage` | Mastery and recent quiz sessions for that language |
| GET | `/api/progress/:targetLanguage/due` | Due review items for that language |
| POST | `/api/progress/:targetLanguage/word` | Record an answer for a word or phrase in that language |
| POST | `/api/progress/:targetLanguage/session` | Record a quiz session in that language |

Every database read/write includes both the authenticated account and target language. Word and lesson primary keys include the language; review schedules and quiz histories are independent. Word IDs must match their module and exist in the selected catalog. Phrase mastery uses `phrase-<categoryId>:<numericId>`. Verb sessions must reference a verb, helper, or group in that language. Old unscoped progress URLs are rejected rather than defaulting to French.

Local mastery, history, review queues, visited steps, and active course use `:learn-french` or `:learn-english` storage suffixes. Existing `contentProgress` and `passedQuizzes` language-scoped keys are preserved. Answer/session writes capture the quiz's starting language. General preferences such as shuffle remain shared.

The startup migration is transactional and repeatable. Existing database records have no reliable language provenance, so they are retained intact under the reserved `legacy` value and excluded from both active curricula. The API never accepts `legacy`. Existing unscoped browser keys are retained untouched and not automatically copied into either language. Consequently, old unscoped mastery/history/reviews do not appear in either language after this change; already-scoped completion remains available. No guest-import migration or improvements are included.

Deploy the backend and frontend progress changes together. Old open browser tabs must reload to use the new progress URLs. Do not roll back to the old backend after applying the schema migration: its unscoped writes no longer match the database keys. No production database is changed by running the tests; migration and API integration tests use an isolated PGlite PostgreSQL database.

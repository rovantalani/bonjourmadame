# Bonjour Madame

A French and English learning app organised into Vocabulary, Verbs, and Lectures.

## Features

- **Vocabulary** — Thematic word modules (daily life, emotions, travel) with flashcard-style quizzes
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

Each backend learning module now has one CEFR `level` and one numbered `unit`. This includes grammar, phrase categories, reading passages, vocabulary module definitions in `modules.ts`, helper verbs, and individual verbs. A vocabulary word list is a course module when it has a matching definition in `modules.ts`; French A1 reading lists now do. Units are currently defined in the frontend course files; `npm test --prefix backend` checks every placement against those units and checks existing course steps. Modules not yet shown in a course still have a placement. Existing unlisted verbs were assigned to the last unit of their level as a starting point; teachers should review these placements before the course-sync step adds them to a roadmap. The course files remain in the frontend until the next migration step.
French A1 has seven units. Each of its 28 reading passages has a matching vocabulary module in the same unit; the vocabulary step comes immediately before the reading step. The reading and its vocabulary share a content ID but have separate course step IDs and progress.

Frontend curricula follow the same rule under `frontend/src/data/fr` and `frontend/src/data/en`, with neutral course types in `courseTypes.ts`. The app loads only the selected curriculum, and learning URLs are scoped under `/learn/fr` or `/learn/en`.

Run `npm test --prefix backend` to check content boundaries, independent object ownership, and curriculum references. Course verb-group references must resolve within their own language catalog.

The frontend uses the strict language-scoped content APIs and loads learning material only from the selected language package. Progress storage is also language-scoped.

Course step IDs and content IDs remain stable so saved progress continues to match. Course steps use one of three `module` values: `vocabulary`, `verbs`, or `lectures`; lecture `type` values are `grammar`, `phrases`, or `reading`.

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

Missing or unsupported target languages return JSON `400`. Content absent from the selected catalog and unknown scoped routes return JSON `404`; there is no cross-language lookup or fallback. The URL path selects the curriculum. IDs may overlap between independent catalogs. Existing copied bilingual vocabulary and phrases remain valid in both catalogs until edited independently. Browser learning URLs are scoped by target language.

## Progress language isolation

Progress requests use `/api/progress/fr` or `/api/progress/en`, followed by `/word`, `/session`, or `/due` where applicable. Database reads and writes are scoped by account and language. Local mastery, history, review queues, visited steps, and active course are also language-scoped; existing completion keys remain unchanged.

Deploy backend and frontend together. The existing schema setup adds the language column and updates the keys. Old unclassified database rows remain untouched under `legacy` (not accessible through the language APIs); unscoped browser keys are left untouched. No guest-import changes or migration framework are included.

## AI writing feedback

Writing opens a level-specific exercise overview. Guests and signed-in learners can submit text for teacher-style annotations and an overall rating, or view the corrected sample. Sign-in is not required. The current catalog contains one A1 exercise per language.

Local backend configuration is in `backend/.env` (ignored by Git); `backend/.env.example` is the committed template. Add `OPENAI_API_KEY`, then restart the backend. Never use a `VITE_` variable for it. Backend startup loads this file before other modules regardless of the launch directory. Writing feedback does not need `DATABASE_URL` or `JWT_SECRET`; those settings are only needed for account features.

`OPENAI_WRITING_MODEL` defaults to `gpt-6-luna`. Default allowances are 10 reviews per visitor network address per UTC day, 50 per calendar month, and 5,000 across the server per month. Configure `WRITING_DAILY_LIMIT`, `WRITING_MONTHLY_LIMIT`, and `WRITING_GLOBAL_MONTHLY_LIMIT`; zero blocks new reviews. These are request caps, not monetary budgets. Each call has a 45-second timeout and 4,000 output-token maximum. Failed admitted calls count. Completed duplicate requests reuse feedback without another AI call.

Usage and completed feedback are held in server memory, cleared on restart or at a new UTC month. Limits apply to one server process; multiple instances need shared guest-compatible storage. Visitors sharing an address share the allowance. Forwarded IP headers are not trusted by default. No writing is persisted to PostgreSQL. Drafts remain in the current editor and are not saved across navigation.

Text is sent to OpenAI only when the learner presses Get feedback. The API uses `store: false`; this does not guarantee zero provider retention. Feedback is AI-generated and teaching quality should be checked before rollout. Writing completion and history UI are not implemented yet.

Run `npm test --prefix backend` and `npm test --prefix frontend`. Provider tests are mocked and spend no credits. To try locally, run `npm run dev`, choose Continue as guest, open French or English A1 → Writing, enter a response and press Get feedback.

### Speaking practice (recording preview)

Open **Speaking** from an A1 course. French and English each have two exercises
with four short phrases. Listen using the browser's speech voice, record up to
20 seconds, then replay, discard or re-record. Microphone access requires HTTPS
(or localhost). Recordings stay in browser memory and are released when changing
phrases or leaving the exercise; no audio is uploaded or persisted.

The public `/api/speaking/:language/lessons` catalog needs neither sign-in nor
Azure credentials. The practice card shows the example above a second sentence for recording.
A compact list on the left selects phrases (collapsed on mobile). Local browser
speech recognition highlights detected words when an on-device language pack is
already available. No cloud fallback or automatic language download is used.
Highlights are transcript matches, not pronunciation scores; no flowers or
automatic progression are awarded before assessment is connected. The review endpoint returns `503 assessment_unavailable` until
assessment is implemented. Azure integration, bounded audio decoding/upload
validation, usage controls, and rating calibration remain for the next stage.
Browser speech voices vary by device; reviewed example clips can replace them.

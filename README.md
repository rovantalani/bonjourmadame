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
│       ├── data/
│       │   ├── vocabulary/   # vocabulary_fr/en.ts and modules_fr/en.ts
│       │   ├── verbs/        # verbs_fr.ts and verbs_en.ts
│       │   └── lectures/
│       │       ├── grammar/  # grammar_fr.ts and grammar_en.ts
│       │       ├── phrases/  # phrases_fr.ts and phrases_en.ts
│       │       └── reading/  # reading_fr.ts and reading_en.ts
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
        ├── data/courses.ts  # Course steps identify their module and content subtype
        └── pages/
            ├── vocabulary/
            ├── verbs/
            └── lectures/
                ├── Lectures.tsx
                ├── grammar/
                ├── phrases/
                └── reading/
```

Every file under `backend/src/data` ends in `_fr.ts` or `_en.ts`, indicating the language being learned, not the interface language. Shared bilingual vocabulary and phrase pairs are reused by the English datasets rather than duplicated. Vocabulary for English reading passages lives in `vocabulary_en.ts`.

The existing `?lang=fr` API parameter means a French interface for English learners. It is preserved for compatibility. Course step IDs and content IDs remain stable so saved progress continues to match. Course steps use one of three `module` values: `vocabulary`, `verbs`, or `lectures`; lecture `type` values are `grammar`, `phrases`, or `reading`.

## API Endpoints

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

The previous flat content API paths are replaced by these module paths. Deploy the frontend and backend together; the browser's course URLs remain unchanged.

## Safe progress import

In Settings, signed-in users can save a copy of this device's word progress and quiz history to their account. The browser keeps its copy, including any work done while the import is running. Failed imports show a retry message. Choosing “Later” hides the message for that visit only.

The import saves a fixed copy with a unique reference before sending it. The server saves everything together, including a record of that reference. Retrying after a refresh or lost connection reuses the same reference and does not import the same results twice. A success message appears only after the server confirms that reference was saved.

For older records, answer counts may already include work saved to the account. The import keeps the higher correct/wrong counts rather than adding them together. The newest answer determines whether a word is known. Quiz dates are preserved, identical saved sessions are skipped, and existing review schedules are kept. Old records do not have shared answer IDs, so separate histories cannot always be combined exactly. This change protects imports; separating all learning progress by account and language remains separate work.

The backend creates the `progress_imports` table during its normal startup migration. Deploy the updated backend and frontend together. Import database tests use an in-memory PostgreSQL engine through the development-only PGlite dependency; `npm test --prefix backend` runs them without a separate database server.

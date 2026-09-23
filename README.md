# Bonjour Madame

A French language learning web app with vocabulary quizzes, grammar lessons, and verb conjugation tables.

## Features

- **Vocabulary** — Thematic word modules (Sherlock Holmes, daily life, emotions, travel) with flashcard-style quizzes
- **Grammar** — Interactive grammar lessons
- **Helper Verbs** — Conjugation tables for *être*, *avoir*, *faire*, *aller*, *venir* across four tenses (présent, passé composé, imparfait, futur simple)

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
│       ├── index.ts          # Express server & API routes
│       ├── data/
│       │   └── vocabulary.ts # Vocabulary word data (alongside grammar, verbs, phrases & reading)
│       └── types/
│           └── vocabulary.ts # Shared type definitions
└── frontend/
    └── src/
        ├── App.tsx           # Router setup
        └── pages/
            ├── Home.tsx
            ├── Vocabulary.tsx
            ├── VocabularyQuiz.tsx
            ├── Grammar.tsx
            ├── HelperVerbs.tsx
            └── VerbConjugation.tsx
```

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/vocabulary-modules` | List all vocabulary modules |
| GET | `/api/vocabulary/:moduleId` | Words for a specific module |
| GET | `/api/helper-verbs/:verbId` | Conjugation table for a verb |

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
cd backend && npm install

# Install frontend dependencies
cd frontend && npm install
```

### Run (development)

```bash
# From the root — starts both backend and frontend concurrently
npm run dev
```

Or run them separately:

```bash
# Terminal 1 — backend (port 3001)
cd backend && npm run dev

# Terminal 2 — frontend (port 5173)
cd frontend && npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
bonjourmadame/
├── backend/
│   └── src/
│       ├── index.ts          # Express server & API routes
│       ├── data/
│       │   ├── vocabulary.ts # Vocabulary word data
│       │   └── curriculum.ts # Curriculum structure
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

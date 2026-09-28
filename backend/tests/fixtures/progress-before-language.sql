-- The schema shipped before language-scoped progress, with representative account data.
CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT UNIQUE NOT NULL, password_hash TEXT NOT NULL, created_at TIMESTAMPTZ DEFAULT NOW());
CREATE TABLE word_mastery (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    word_id TEXT NOT NULL, module_id TEXT NOT NULL, is_known BOOLEAN NOT NULL DEFAULT FALSE,
    correct_count INTEGER DEFAULT 0, wrong_count INTEGER DEFAULT 0, last_seen_at TIMESTAMPTZ DEFAULT NOW(),
    srs_box INTEGER DEFAULT 1, next_review_at TIMESTAMPTZ DEFAULT NOW(), PRIMARY KEY (user_id, word_id)
);
CREATE TABLE quiz_sessions (
    id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    module_id TEXT NOT NULL, session_type TEXT NOT NULL, score INTEGER NOT NULL, total INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE lesson_progress (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, item_type TEXT NOT NULL, item_id TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE, last_accessed TIMESTAMPTZ DEFAULT NOW(), PRIMARY KEY (user_id, item_type, item_id)
);
INSERT INTO users (email, password_hash) VALUES ('one@example.test', 'unused'), ('two@example.test', 'unused');
INSERT INTO word_mastery (user_id, word_id, module_id, is_known, correct_count, wrong_count, srs_box)
    VALUES (1, 'greetings-basics:1', 'greetings-basics', TRUE, 7, 3, 4);
INSERT INTO quiz_sessions (user_id, module_id, session_type, score, total)
    VALUES (1, 'greetings-basics', 'vocabulary', 8, 10);
INSERT INTO lesson_progress (user_id, item_type, item_id, completed)
    VALUES (1, 'grammar', 'articles', TRUE);

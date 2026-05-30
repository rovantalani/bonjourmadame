import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SpeakerButton from '../components/SpeakerButton';
import './ReadingPassage.css';

interface VocabularyWord {
    id: number;
    english: string;
    french: string;
}

interface ReadingData {
    moduleId: string;
    title: string;
    source: string;
    paragraphs: string[];
    vocabulary: VocabularyWord[];
}

interface TooltipState {
    word: VocabularyWord;
    tokenKey: string;
    anchorRect: DOMRect;
}

function normalizeForMatch(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[.,;:!?«»"''"]/g, '');
}

function stripArticle(text: string): string {
    return text.replace(/^(le |la |les |un |une |des |l'|l')/i, '');
}

function buildVocabMap(vocabulary: VocabularyWord[]): Map<string, VocabularyWord> {
    const map = new Map<string, VocabularyWord>();
    for (const word of vocabulary) {
        const raw = word.french;
        const base = stripArticle(raw);
        const normalized = normalizeForMatch(base);
        if (normalized) map.set(normalized, word);

        const rawNorm = normalizeForMatch(raw);
        if (rawNorm) map.set(rawNorm, word);
    }
    return map;
}

function tokenize(text: string): string[] {
    return text.split(/(\s+|[.,;:!?«»"''"\-—()])/).filter(t => t.length > 0);
}

type Token = { text: string; vocab: VocabularyWord | null };

function annotate(paragraph: string, vocabMap: Map<string, VocabularyWord>): Token[] {
    const rawTokens = tokenize(paragraph);
    const tokens: Token[] = [];
    let i = 0;
    while (i < rawTokens.length) {
        const tok = rawTokens[i];
        if (/^\s+$/.test(tok) || /^[.,;:!?«»"''"\-—()]$/.test(tok)) {
            tokens.push({ text: tok, vocab: null });
            i++;
            continue;
        }

        let matched = false;
        for (let len = 4; len >= 2; len--) {
            const chunk = rawTokens.slice(i, i + len).join('');
            const norm = normalizeForMatch(stripArticle(chunk));
            if (vocabMap.has(norm)) {
                tokens.push({ text: chunk, vocab: vocabMap.get(norm)! });
                i += len;
                matched = true;
                break;
            }
        }

        if (!matched) {
            const norm = normalizeForMatch(stripArticle(tok));
            const entry = vocabMap.get(norm) ?? vocabMap.get(normalizeForMatch(tok)) ?? null;
            tokens.push({ text: tok, vocab: entry });
            i++;
        }
    }
    return tokens;
}

export default function ReadingPassage() {
    const { moduleId } = useParams<{ moduleId: string }>();
    const navigate = useNavigate();
    const [data, setData] = useState<ReadingData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [tooltip, setTooltip] = useState<TooltipState | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`${import.meta.env.VITE_API_BASE}/api/reading/${moduleId}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((d: ReadingData) => {
                setData(d);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [moduleId]);

    useEffect(() => {
        if (!tooltip) return;
        const handler = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setTooltip(null);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [tooltip]);

    if (loading) {
        return (
            <main className="page">
                <p className="rp-loading">Loading…</p>
            </main>
        );
    }

    if (error || !data) {
        return (
            <main className="page">
                <button className="back-btn" onClick={() => navigate(-1)} type="button">
                    ← Back
                </button>
                <p>Reading passage not found.</p>
            </main>
        );
    }

    const vocabMap = buildVocabMap(data.vocabulary);

    const handleWordClick = (e: React.MouseEvent<HTMLButtonElement>, vocab: VocabularyWord, tokenKey: string) => {
        e.stopPropagation();
        if (tooltip?.tokenKey === tokenKey) {
            setTooltip(null);
            return;
        }
        setTooltip({ word: vocab, tokenKey, anchorRect: e.currentTarget.getBoundingClientRect() });
    };

    return (
        <main className="page" onClick={() => setTooltip(null)}>
            <button className="back-btn" onClick={() => navigate(-1)} type="button">
                ← Back
            </button>

            <div className="rp-header card">
                <h1 className="rp-title">{data.title}</h1>
                <p className="rp-source">{data.source}</p>
                <p className="rp-hint">
                    Tap a <span className="rp-hint-sample">highlighted word</span> to see its translation.
                </p>
            </div>

            <div className="rp-passage-wrap" ref={containerRef}>
                {data.paragraphs.map((para, pi) => {
                    const tokens = annotate(para, vocabMap);
                    return (
                        <p className="rp-paragraph" key={pi}>
                            {tokens.map((tok, ti) => {
                                if (!tok.vocab) {
                                    return <span key={ti}>{tok.text}</span>;
                                }
                                const tokenKey = `${pi}-${ti}`;
                                const isOpen = tooltip?.tokenKey === tokenKey;
                                return (
                                    <span key={ti} className="rp-word-wrap">
                                        <button
                                            type="button"
                                            className={`rp-vocab-word${isOpen ? ' rp-vocab-word--active' : ''}`}
                                            onClick={e => handleWordClick(e, tok.vocab!, tokenKey)}
                                        >
                                            {tok.text}
                                        </button>
                                        {isOpen && (
                                            <span className="rp-tooltip" role="tooltip">
                                                <span className="rp-tooltip-fr-row">
                                                    <strong className="rp-tooltip-fr">{tok.vocab.french}</strong>
                                                    <SpeakerButton text={tok.vocab.french} lang="fr-FR" />
                                                </span>
                                                <span className="rp-tooltip-en">{tok.vocab.english}</span>
                                            </span>
                                        )}
                                    </span>
                                );
                            })}
                        </p>
                    );
                })}
            </div>

            <div className="rp-vocab-list card">
                <p className="section-label">Vocabulary in this passage</p>
                <ul className="rp-vocab-items">
                    {data.vocabulary.map(w => (
                        <li key={w.id} className="rp-vocab-item">
                            <span className="rp-vocab-item-fr">{w.french}</span>
                            <SpeakerButton text={w.french} lang="fr-FR" />
                            <span className="rp-vocab-item-en">{w.english}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

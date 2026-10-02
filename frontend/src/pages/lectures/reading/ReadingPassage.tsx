import { useLearning } from '../../../context/LearningContext';
import { useLearningNavigate as useNavigate } from '../../../hooks/useLearningNavigation';
import LearningCompletion from '../../../components/LearningCompletion';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpeakerButton from '../../../components/SpeakerButton';
import { useSpeech } from '../../../hooks/useSpeech';
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

function buildVocabMap(vocabulary: VocabularyWord[], isEN: boolean): Map<string, VocabularyWord> {
    const map = new Map<string, VocabularyWord>();
    for (const word of vocabulary) {
        // In EN mode the passage text is English, so match on the English word.
        // In FR mode the passage text is French, so match on the French word.
        const raw = isEN ? word.english : word.french;
        const base = isEN ? raw : stripArticle(raw);
        const normalized = normalizeForMatch(base);
        if (normalized) map.set(normalized, word);

        const rawNorm = normalizeForMatch(raw);
        if (rawNorm && rawNorm !== normalized) map.set(rawNorm, word);
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
    const { language } = useLearning();
    const { moduleId } = useParams<{ moduleId: string }>();
    const navigate = useNavigate();
    const isEN = language === 'en';
    const requestKey = `${language}/${moduleId}`;
    const [result, setResult] = useState<{ key: string; data: ReadingData | null; error: boolean } | null>(null);
    const loading = result?.key !== requestKey;
    const error = result?.key === requestKey && result.error;
    const data = result?.key === requestKey ? result.data : null;
    const [tooltip, setTooltip] = useState<TooltipState | null>(null);
    const [playingParagraph, setPlayingParagraph] = useState<number | null>(null);
    const { speak, stop, speaking, supported: audioSupported } = useSpeech();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => () => stop(), [moduleId, language, stop]);

    useEffect(() => {
        const controller = new AbortController();
        fetch(`${import.meta.env.VITE_API_BASE}/api/learning/${language}/lectures/reading/${moduleId}`, { signal: controller.signal })
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then((d: ReadingData) => {
                setResult({ key: requestKey, data: d, error: false });
            })
            .catch(() => {
                if (!controller.signal.aborted) setResult({ key: requestKey, data: null, error: true });
            });
        return () => controller.abort();
    }, [moduleId, language, requestKey]);

    useEffect(() => {
        if (!tooltip) return;
        const handler = (e: MouseEvent | TouchEvent) => {
            const target = e instanceof TouchEvent
                ? (e.touches[0]?.target ?? e.changedTouches[0]?.target)
                : (e as MouseEvent).target;
            if (containerRef.current && !containerRef.current.contains(target as Node)) {
                setTooltip(null);
            }
        };
        document.addEventListener('mousedown', handler as (e: MouseEvent) => void);
        document.addEventListener('touchstart', handler as (e: TouchEvent) => void, { passive: true });
        return () => {
            document.removeEventListener('mousedown', handler as (e: MouseEvent) => void);
            document.removeEventListener('touchstart', handler as (e: TouchEvent) => void);
        };
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

    const vocabMap = buildVocabMap(data.vocabulary, isEN);

    const handleWordClick = (e: React.MouseEvent<HTMLButtonElement>, vocab: VocabularyWord, tokenKey: string) => {
        e.stopPropagation();
        if (tooltip?.tokenKey === tokenKey) {
            setTooltip(null);
            return;
        }
        setTooltip({ word: vocab, tokenKey, anchorRect: e.currentTarget.getBoundingClientRect() });
    };

    const handleParagraphAudio = (paragraph: string, index: number) => {
        if (speaking && playingParagraph === index) {
            stop();
            return;
        }
        setPlayingParagraph(index);
        speak(paragraph, isEN ? 'en-US' : 'fr-FR');
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
                <div className="rp-listen-intro">
                    <h2>{isEN ? 'Écoutez et répétez' : 'Listen through and repeat'}</h2>
                    <p>{isEN ? 'Écoutez chaque paragraphe, puis répétez-le à voix haute.' : 'Listen to each paragraph, then repeat it aloud.'}</p>
                    {!audioSupported && <p role="status">{isEN ? 'La lecture audio n’est pas disponible dans ce navigateur.' : 'Audio playback is not available in this browser.'}</p>}
                </div>
                {data.paragraphs.map((para, pi) => {
                    const tokens = annotate(para, vocabMap);
                    const isPlaying = speaking && playingParagraph === pi;
                    return (
                        <div className="rp-paragraph-block" key={pi}>
                            <button
                                type="button"
                                className={`rp-listen-button${isPlaying ? ' rp-listen-button--active' : ''}`}
                                onClick={() => handleParagraphAudio(para, pi)}
                                aria-pressed={isPlaying}
                                disabled={!audioSupported}
                            >
                                <span aria-hidden="true">{isPlaying ? '■' : '▶'}</span>
                                {isPlaying
                                    ? (isEN ? `Arrêter le paragraphe ${pi + 1}` : `Stop paragraph ${pi + 1}`)
                                    : (isEN ? `Écouter le paragraphe ${pi + 1}` : `Listen to paragraph ${pi + 1}`)}
                            </button>
                            <p className="rp-paragraph">
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
                                                        <strong className="rp-tooltip-fr">
                                                            {isEN ? tok.vocab.english : tok.vocab.french}
                                                        </strong>
                                                        <SpeakerButton
                                                            text={isEN ? tok.vocab.english : tok.vocab.french}
                                                            lang={isEN ? 'en-US' : 'fr-FR'}
                                                        />
                                                    </span>
                                                    <span className="rp-tooltip-en">
                                                        {isEN ? tok.vocab.french : tok.vocab.english}
                                                    </span>
                                                </span>
                                            )}
                                        </span>
                                    );
                                })}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="rp-vocab-list card">
                <p className="section-label">
                    {isEN ? 'Vocabulary in this passage' : 'Vocabulaire de ce passage'}
                </p>
                <ul className="rp-vocab-items">
                    {data.vocabulary.map(w => (
                        <li key={w.id} className="rp-vocab-item">
                            <span className="rp-vocab-item-fr">
                                {isEN ? w.english : w.french}
                            </span>
                            <SpeakerButton
                                text={isEN ? w.english : w.french}
                                lang={isEN ? 'en-US' : 'fr-FR'}
                            />
                            <span className="rp-vocab-item-en">
                                {isEN ? w.french : w.english}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <LearningCompletion />
        </main>
    );
}

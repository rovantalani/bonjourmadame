import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './VocabularyQuiz.css';

interface Word {
    id: number;
    english: string;
    french: string;
}

export default function VocabularyQuiz() {
    const navigate = useNavigate();
    // @ts-ignore
    const { moduleId } = useParams();

    // TODO: Later, fetch these from your backend instead of having the dict here
    const allWords: Word[] = [
        { id: 1, english: 'the maid / housemaid', french: 'la bonne' },
        { id: 2, english: 'this (thing) / this one', french: 'ceci' },
        { id: 3, english: 'have just (done something)', french: 'viens de' },
        { id: 5, english: 'over / across / above', french: 'par-dessus' },
        { id: 6, english: 'an ungrateful person (male)', french: 'un ingrat' },
        { id: 7, english: 'immediately / right away', french: 'sur-le-champ' },
    ];


    const [words, setWords] = useState<Word[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [wrongWords, setWrongWords] = useState<Word[]>([]);
    const [correctCount, setCorrectCount] = useState(0);
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [quizComplete, setQuizComplete] = useState(false);

    useEffect(() => {
        // Shuffle words for the quiz
        const shuffled = [...allWords].sort(() => Math.random() - 0.5);
        setWords(shuffled);
    }, []);

    const currentWord = words[currentIndex];

    const normalizeString = (str: string): string => {
        return str
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''); // Remove accents for comparison
    };

    const handleSubmit = () => {
        if (!userAnswer.trim()) return;

        const isCorrect = normalizeString(userAnswer) === normalizeString(currentWord.french);

        if (isCorrect) {
            setCorrectCount(correctCount + 1);
            handleNext();
        } else {
            setShowAnswer(true);
            if (!wrongWords.find(w => w.id === currentWord.id)) {
                setWrongWords([...wrongWords, currentWord]);
            }
        }
    };

    const handleSkip = () => {
        setShowAnswer(true);
        if (!wrongWords.find(w => w.id === currentWord.id)) {
            setWrongWords([...wrongWords, currentWord]);
        }
    };

    const handleNext = () => {
        setUserAnswer('');
        setShowAnswer(false);

        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // First round complete
            if (wrongWords.length > 0 && !isReviewMode) {
                // Start review mode with wrong words
                setIsReviewMode(true);
                setWords(wrongWords);
                setCurrentIndex(0);
                setWrongWords([]);
            } else {
                // Quiz complete
                setQuizComplete(true);
            }
        }
    };

    const handleRestart = () => {
        const shuffled = [...allWords].sort(() => Math.random() - 0.5);
        setWords(shuffled);
        setCurrentIndex(0);
        setUserAnswer('');
        setShowAnswer(false);
        setWrongWords([]);
        setCorrectCount(0);
        setIsReviewMode(false);
        setQuizComplete(false);
    };

    const handleExit = () => {
        navigate('/vocabulary');
    };

    if (!currentWord && !quizComplete) {
        return <div className="quiz-loading">Loading...</div>;
    }

    if (quizComplete) {
        const totalWords = allWords.length;
        const accuracy = Math.round((correctCount / totalWords) * 100);

        return (
            <div className="quiz-container">
                <div className="quiz-complete">
                    <div className="complete-icon">🎉</div>
                    <h1>Quiz Complete!</h1>
                    <div className="complete-stats">
                        <div className="stat">
                            <span className="stat-value">{correctCount}</span>
                            <span className="stat-label">Correct Answers</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">{totalWords}</span>
                            <span className="stat-label">Total Words</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">{accuracy}%</span>
                            <span className="stat-label">Accuracy</span>
                        </div>
                    </div>
                    <div className="complete-actions">
                        <button className="restart-button" onClick={handleRestart}>
                            Try Again
                        </button>
                        <button className="exit-button" onClick={handleExit}>
                            Back to Vocabulary
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <button className="exit-quiz-button" onClick={handleExit}>
                    ✕ Exit Quiz
                </button>
                <div className="quiz-progress">
          <span>
            {isReviewMode ? '🔄 Review Mode: ' : ''}
              Word {currentIndex + 1} of {words.length}
          </span>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="quiz-card">
                <div className="word-display">
                    <span className="word-label">Translate to French:</span>
                    <h2 className="word-english">{currentWord.english}</h2>
                </div>

                {!showAnswer ? (
                    <div className="answer-section">
                        <input
                            type="text"
                            className="answer-input"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                            placeholder="Type your answer..."
                            autoFocus
                        />
                        <div className="button-group">
                            <button className="skip-button" onClick={handleSkip}>
                                Skip
                            </button>
                            <button
                                className="submit-button"
                                onClick={handleSubmit}
                                disabled={!userAnswer.trim()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="reveal-section">
                        <div className="correct-answer">
                            <span className="answer-label">Correct Answer:</span>
                            <h3>{currentWord.french}</h3>
                        </div>
                        {userAnswer && (
                            <div className="user-answer">
                                <span className="answer-label">Your Answer:</span>
                                <p className="wrong">{userAnswer}</p>
                            </div>
                        )}
                        <button className="next-button" onClick={handleNext}>
                            Next Word →
                        </button>
                    </div>
                )}
            </div>

            <div className="quiz-stats">
                <div className="stat-item correct">
                    <span>✓</span>
                    <span>{correctCount} Correct</span>
                </div>
                <div className="stat-item wrong">
                    <span>✗</span>
                    <span>{wrongWords.length} To Review</span>
                </div>
            </div>
        </div>
    );
}
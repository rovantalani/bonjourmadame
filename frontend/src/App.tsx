import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState, type ReactNode } from 'react';
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LearningContext, type Curriculum } from './context/LearningContext';
import { loadCurriculum } from './utils/loadCurriculum';
import { loadLearningMode, saveLearningMode, type TargetLanguage } from './utils/settings';
import { learningPath } from './utils/learningRoutes';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import GrammarLesson from './pages/lectures/grammar/GrammarLesson';
import Vocabulary from './pages/vocabulary/Vocabulary';
import VocabularyQuiz from './pages/vocabulary/VocabularyQuiz';
import VerbConjugation from './pages/verbs/VerbConjugation';
import VerbGroupList from './pages/verbs/VerbGroupList';
import VerbLearn from './pages/verbs/VerbLearn';
import VerbQuiz from './pages/verbs/VerbQuiz';
import PhraseDetail from './pages/lectures/phrases/PhraseDetail';
import PhraseQuiz from './pages/lectures/phrases/PhraseQuiz';
import ReviewQueue from './pages/vocabulary/ReviewQueue';
import ReadingPassage from './pages/lectures/reading/ReadingPassage';
import Courses from './pages/Courses';
import UnitExam from './pages/UnitExam';
import CourseRoadmap from './pages/CourseRoadmap';
import Verbs from './pages/verbs/Verbs';
import Lectures from './pages/lectures/Lectures';
import Settings from './pages/Settings';

function AuthGate({ children }: { children: ReactNode }) {
    const { user, isGuest, loading } = useAuth();
    if (loading) return null;
    if (!user && !isGuest) return <Navigate to="/login" replace />;
    return <>{children}</>;
}

function LegacyRedirect() {
    const mode = loadLearningMode();
    const location = useLocation();
    if (!mode) return <Navigate to="/welcome" replace />;
    const targetLanguage = mode === 'learn-english' ? 'en' : 'fr';
    return <Navigate to={learningPath(targetLanguage, location.pathname + location.search)} replace />;
}

function LearningSession({ language }: { language: TargetLanguage }) {
    const [curriculum, setCurriculum] = useState<Curriculum | null>(null);
    const [loadFailed, setLoadFailed] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const navigate = useNavigate();
    const desiredMode = language === 'en' ? 'learn-english' : 'learn-french';

    useLayoutEffect(() => {
        if (loadLearningMode() !== desiredMode) saveLearningMode(desiredMode);
    }, [desiredMode]);

    useEffect(() => {
        let active = true;
        loadCurriculum(language)
            .then(data => { if (active) setCurriculum(data); })
            .catch(() => { if (active) setLoadFailed(true); });
        return () => { active = false; };
    }, [language, retryCount]);


    useEffect(() => {
        const handleStorage = (event: StorageEvent) => {
            if (event.key !== 'learningMode') return;
            const mode = loadLearningMode();
            if (mode) {
                const target = mode === 'learn-english' ? 'en' : 'fr';
                navigate(learningPath(target, '/'), { replace: true });
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [navigate]);

    if (loadFailed) return (
        <div className="App" role="alert">
            <p>{language === 'fr' ? 'Impossible de charger les cours.' : 'Could not load the courses.'}</p>
            <button type="button" onClick={() => { setLoadFailed(false); setRetryCount(count => count + 1); }}>
                {language === 'fr' ? 'Réessayer' : 'Retry'}
            </button>
        </div>
    );
    if (!curriculum) return null;
    return (
        <LearningContext.Provider value={{ ...curriculum, language }}>
            <AuthGate>
                <div className="App">
                    <Nav />
                    <Outlet />
                </div>
            </AuthGate>
        </LearningContext.Provider>
    );
}

function LearningRoot() {
    const { targetLanguage } = useParams();
    if (targetLanguage !== 'fr' && targetLanguage !== 'en') return <Navigate to="/" replace />;
    return <LearningSession key={targetLanguage} language={targetLanguage} />;
}

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/learn/:targetLanguage" element={<LearningRoot />}>
                        <Route index element={<Home />} />
                        <Route path="courses" element={<Courses />} />
                        <Route path="courses/:level" element={<CourseRoadmap />} />
                        <Route path="courses/:level/exams/:unit" element={<UnitExam />} />
                        <Route path="courses/:level/vocabulary" element={<Vocabulary />} />
                        <Route path="courses/:level/vocabulary/:moduleId" element={<VocabularyQuiz />} />
                        <Route path="courses/:level/verbs" element={<Verbs />} />
                        <Route path="courses/:level/verbs/:moduleId" element={<VerbGroupList />} />
                        <Route path="courses/:level/verbs/:verbId/learn" element={<VerbLearn />} />
                        <Route path="courses/:level/verbs/:verbId/quiz" element={<VerbQuiz />} />
                        <Route path="courses/:level/verbs/:verbId/table" element={<VerbConjugation />} />
                        <Route path="courses/:level/lectures" element={<Lectures />} />
                        <Route path="courses/:level/lectures/grammar/:lessonId" element={<GrammarLesson />} />
                        <Route path="courses/:level/lectures/phrases/:categoryId" element={<PhraseDetail />} />
                        <Route path="courses/:level/lectures/phrases/:categoryId/quiz" element={<PhraseQuiz />} />
                        <Route path="courses/:level/lectures/reading/:moduleId" element={<ReadingPassage />} />
                        <Route path="review-queue" element={<ReviewQueue />} />
                        <Route path="stats" element={<Navigate to=".." replace />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="/" element={<LegacyRedirect />} />
                    <Route path="*" element={<LegacyRedirect />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}
export default App;

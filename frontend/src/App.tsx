import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import { loadLearningMode } from './utils/settings';
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
import Stats from './pages/Stats';
import Courses from './pages/Courses';
import CourseRoadmap from './pages/CourseRoadmap';
import Verbs from './pages/verbs/Verbs';
import Lectures from './pages/lectures/Lectures';
import Settings from './pages/Settings';

const PUBLIC_ROUTES = ['/login', '/register', '/welcome'];

function AuthGate({ children }: { children: ReactNode }) {
    const { user, isGuest, loading } = useAuth();
    const location = useLocation();
    if (loading) return null;

    if (loadLearningMode() === null && location.pathname !== '/welcome')
        return <Navigate to="/welcome" replace />;

    if (!user && !isGuest && !PUBLIC_ROUTES.includes(location.pathname))
        return <Navigate to="/login" replace />;

    return <>{children}</>;
}

function AppShell() {
    const { pathname } = useLocation();
    const isWelcome = pathname === '/welcome';

    return (
        <AuthGate>
            <div className="App">
                {!isWelcome && <Nav />}
                <Routes>
                    <Route path="/welcome"                                          element={<Welcome />} />
                    <Route path="/"                                                 element={<Home />} />
                    <Route path="/courses"                                          element={<Courses />} />
                    <Route path="/courses/:level"                                   element={<CourseRoadmap />} />
                    <Route path="/courses/:level/vocabulary"                        element={<Vocabulary />} />
                    <Route path="/courses/:level/vocabulary/:moduleId"              element={<VocabularyQuiz />} />
                    <Route path="/courses/:level/verbs"                             element={<Verbs />} />
                    <Route path="/courses/:level/verbs/:moduleId"                   element={<VerbGroupList />} />
                    <Route path="/courses/:level/verbs/:verbId/learn"               element={<VerbLearn />} />
                    <Route path="/courses/:level/verbs/:verbId/quiz"                element={<VerbQuiz />} />
                    <Route path="/courses/:level/verbs/:verbId/table"               element={<VerbConjugation />} />
                    <Route path="/courses/:level/lectures"                          element={<Lectures />} />
                    <Route path="/courses/:level/lectures/grammar/:lessonId"        element={<GrammarLesson />} />
                    <Route path="/courses/:level/lectures/phrases/:categoryId"      element={<PhraseDetail />} />
                    <Route path="/courses/:level/lectures/phrases/:categoryId/quiz" element={<PhraseQuiz />} />
                    <Route path="/courses/:level/lectures/reading/:moduleId"        element={<ReadingPassage />} />
                    <Route path="/review-queue"                                     element={<ReviewQueue />} />
                    <Route path="/stats"                                            element={<Stats />} />
                    <Route path="/settings"                                         element={<Settings />} />
                    <Route path="/login"                                            element={<Login />} />
                    <Route path="/register"                                         element={<Register />} />
                </Routes>
            </div>
        </AuthGate>
    );
}

function App() {
    return (
        <Router>
            <AuthProvider>
                <AppShell />
            </AuthProvider>
        </Router>
    );
}

export default App;

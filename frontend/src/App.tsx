import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import { loadLearningMode } from './utils/settings';
import Nav from './components/Nav';
import GuestBanner from './components/GuestBanner';

/* Pages loaded eagerly (always needed on first render) */
import Welcome from './pages/Welcome';
import Home from './pages/Home';

/* All other pages are lazy-loaded — each becomes its own chunk */
const Login           = lazy(() => import('./pages/Login'));
const Register        = lazy(() => import('./pages/Register'));
const GrammarLesson   = lazy(() => import('./pages/GrammarLesson'));
const Vocabulary      = lazy(() => import('./pages/Vocabulary'));
const VocabularyQuiz  = lazy(() => import('./pages/VocabularyQuiz'));
const VerbConjugation = lazy(() => import('./pages/VerbConjugation'));
const VerbGroupList   = lazy(() => import('./pages/VerbGroupList'));
const VerbLearn       = lazy(() => import('./pages/VerbLearn'));
const VerbQuiz        = lazy(() => import('./pages/VerbQuiz'));
const PhraseDetail    = lazy(() => import('./pages/PhraseDetail'));
const PhraseQuiz      = lazy(() => import('./pages/PhraseQuiz'));
const ReviewQueue     = lazy(() => import('./pages/ReviewQueue'));
const ReadingPassage  = lazy(() => import('./pages/ReadingPassage'));
const Stats           = lazy(() => import('./pages/Stats'));
const Courses         = lazy(() => import('./pages/Courses'));
const CourseRoadmap   = lazy(() => import('./pages/CourseRoadmap'));
const Verbs           = lazy(() => import('./pages/Verbs'));
const Lectures        = lazy(() => import('./pages/Lectures'));
const Settings        = lazy(() => import('./pages/Settings'));

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

function PageLoader() {
    return (
        <div className="page-loader">
            <div className="page-loader-dot" />
            <div className="page-loader-dot" />
            <div className="page-loader-dot" />
        </div>
    );
}

function AppShell() {
    const { pathname } = useLocation();
    const isWelcome = pathname === '/welcome';

    return (
        <AuthGate>
            <div className="App">
                {!isWelcome && <Nav />}
                {!isWelcome && <GuestBanner />}
                <Suspense fallback={<PageLoader />}>
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
                </Suspense>
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

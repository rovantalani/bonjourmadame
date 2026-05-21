import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import Nav from './components/Nav';
import GuestBanner from './components/GuestBanner';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Grammar from './pages/Grammar';
import GrammarLesson from './pages/GrammarLesson';
import Vocabulary from './pages/Vocabulary';
import VocabularyQuiz from './pages/VocabularyQuiz';
import HelperVerbs from './pages/HelperVerbs';
import VerbConjugation from './pages/VerbConjugation';
import VerbGroupList from './pages/VerbGroupList';
import VerbLearn from './pages/VerbLearn';
import VerbQuiz from './pages/VerbQuiz';
import Phrases from './pages/Phrases';
import PhraseDetail from './pages/PhraseDetail';
import PhraseQuiz from './pages/PhraseQuiz';
import ReviewQueue from './pages/ReviewQueue';
import ReadingPassage from './pages/ReadingPassage';
import Stats from './pages/Stats';
import Courses from './pages/Courses';
import CourseRoadmap from './pages/CourseRoadmap';

function AuthGate({ children }: { children: ReactNode }) {
    const { user, isGuest, loading } = useAuth();
    const location = useLocation();
    if (loading) return null;
    const isPublic = location.pathname === '/login' || location.pathname === '/register';
    if (!user && !isGuest && !isPublic) return <Navigate to="/login" replace />;
    return <>{children}</>;
}

function App() {
    return (
        <Router>
            <AuthProvider>
            <AuthGate>
            <div className="App">
                <Nav />
                <GuestBanner />
                <Routes>
                    <Route path="/"                              element={<Home />} />
                    <Route path="/vocabulary"                    element={<Vocabulary />} />
                    <Route path="/vocabulary/:moduleId"          element={<VocabularyQuiz />} />
                    <Route path="/grammar"                       element={<Grammar />} />
                    <Route path="/grammar/lessons/:lessonId"     element={<GrammarLesson />} />
                    <Route path="/grammar/verbs/:verbId/learn"   element={<VerbLearn />} />
                    <Route path="/grammar/verbs/:verbId/quiz"    element={<VerbQuiz />} />
                    <Route path="/grammar/:moduleId"             element={<VerbGroupList />} />
                    <Route path="/helper-verbs"                  element={<HelperVerbs />} />
                    <Route path="/helper-verbs/:verbId"          element={<VerbConjugation />} />
                    <Route path="/phrases"                       element={<Phrases />} />
                    <Route path="/phrases/:categoryId"           element={<PhraseDetail />} />
                    <Route path="/phrases/:categoryId/quiz"      element={<PhraseQuiz />} />
                    <Route path="/review-queue"                  element={<ReviewQueue />} />
                    <Route path="/reading/:moduleId"             element={<ReadingPassage />} />
                    <Route path="/courses"                       element={<Courses />} />
                    <Route path="/courses/:level"               element={<CourseRoadmap />} />
                    <Route path="/stats"                         element={<Stats />} />
                    <Route path="/login"                         element={<Login />} />
                    <Route path="/register"                      element={<Register />} />
                </Routes>
            </div>
            </AuthGate>
            </AuthProvider>
        </Router>
    );
}

export default App;

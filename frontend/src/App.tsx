import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Grammar from './pages/Grammar';
import Vocabulary from './pages/Vocabulary';
import VocabularyQuiz from './pages/VocabularyQuiz';
import HelperVerbs from './pages/HelperVerbs';
import VerbConjugation from './pages/VerbConjugation';
import VerbGroupList from './pages/VerbGroupList';
import VerbLearn from './pages/VerbLearn';
import VerbQuiz from './pages/VerbQuiz';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/grammar" element={<Grammar />} />
                    <Route path="/vocabulary" element={<Vocabulary />} />
                    <Route path="/vocabulary/:moduleId" element={<VocabularyQuiz />} />
                    <Route path="/grammar/verbs/:verbId/learn" element={<VerbLearn />} />
                    <Route path="/grammar/verbs/:verbId/quiz" element={<VerbQuiz />} />
                    <Route path="/grammar/:moduleId" element={<VerbGroupList />} />
                    <Route path="/helper-verbs" element={<HelperVerbs />} />
                    <Route path="/helper-verbs/:verbId" element={<VerbConjugation />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
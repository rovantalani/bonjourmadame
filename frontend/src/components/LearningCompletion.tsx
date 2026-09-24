import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getContentStatus, setContentStatus, hasPassedQuiz, recordQuizPass, requiresQuiz } from '../utils/courseProgress';
import { useT } from '../utils/i18n';
import ProgressFlower from './ProgressFlower';

function CompletionAction({ path, quizPassed, requireQuiz }: { path: string; quizPassed: boolean; requireQuiz: boolean }) {
    const t = useT();
    const [status, setStatus] = useState(() => getContentStatus(path) === 'complete' ? 'complete' as const : 'visited' as const);
    const [bloom, setBloom] = useState(false);
    useEffect(() => {
        if (quizPassed) recordQuizPass(path);
        if (getContentStatus(path) === 'not-started') setContentStatus(path, 'visited');
    }, [path, quizPassed]);

    if (requireQuiz && !quizPassed && !hasPassedQuiz(path)) return null;

    return (
        <div className={`learning-completion${bloom ? ' learning-completion--bloom' : ''}`}>
            <span aria-live="polite"><ProgressFlower status={status} /></span>
            <button type="button" aria-pressed={status === 'complete'}
                title={status === 'complete' ? t.progressFlower.undo : undefined}
                onClick={() => {
                    const next = status === 'complete' ? 'visited' : 'complete';
                    setContentStatus(path, next);
                    setStatus(next);
                    setBloom(next === 'complete');
                }}>
                {status === 'complete' ? t.progressFlower.complete : t.progressFlower.markComplete}
            </button>
        </div>
    );
}

// Mount only after content has loaded, never on loading/error screens.
export default function LearningCompletion({ quizPassed = false, requireQuiz }: { quizPassed?: boolean; requireQuiz?: boolean }) {
    const { pathname } = useLocation();
    return <CompletionAction key={pathname} path={pathname} quizPassed={quizPassed} requireQuiz={requireQuiz ?? requiresQuiz(pathname)} />;
}

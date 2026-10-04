import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { completeLesson, getContentStatus, setContentStatus } from '../utils/courseProgress';
import { useT } from '../utils/i18n';
import ProgressFlower from './ProgressFlower';

function CompletionStatus({ path, quizPassed, completeOnView }: { path: string; quizPassed: boolean; completeOnView: boolean }) {
    const t = useT();
    const markerRef = useRef<HTMLDivElement>(null);
    const [reachedEnd, setReachedEnd] = useState(false);
    const finished = quizPassed || (completeOnView && reachedEnd);
    const status = finished || getContentStatus(path) === 'complete' ? 'complete' : 'visited';

    useEffect(() => {
        if (finished) completeLesson(path);
        else if (getContentStatus(path) === 'not-started') setContentStatus(path, 'visited');
    }, [path, finished]);

    useEffect(() => {
        if (!completeOnView || !markerRef.current) return;
        const observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                setReachedEnd(true);
                observer.disconnect();
            }
        }, { threshold: 1 });
        observer.observe(markerRef.current);
        return () => observer.disconnect();
    }, [completeOnView]);

    return (
        <div ref={markerRef} className="learning-completion" aria-live="polite">
            <span aria-hidden="true"><ProgressFlower status={status} /></span>
            <span>{t.progressFlower[status]}</span>
        </div>
    );
}

// Mount only after content has loaded, never on loading/error screens.
export default function LearningCompletion({ quizPassed = false, completeOnView = false }: { quizPassed?: boolean; completeOnView?: boolean }) {
    const { pathname } = useLocation();
    return <CompletionStatus key={pathname} path={pathname} quizPassed={quizPassed} completeOnView={completeOnView} />;
}

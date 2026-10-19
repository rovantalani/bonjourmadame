import { useEffect, useState } from 'react';
import type { SpeakingLesson } from './lessons';
export function useSpeakingLessons(language: 'fr' | 'en') {
    const [lessons, setLessons] = useState<SpeakingLesson[]>([]);
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    const [retry, setRetry] = useState(0);
    useEffect(() => {
        const controller = new AbortController();
        fetch(`${import.meta.env.VITE_API_BASE ?? ''}/api/speaking/${language}/lessons`, { signal: controller.signal })
            .then(response => { if (!response.ok) throw new Error('load'); return response.json() as Promise<SpeakingLesson[]>; })
            .then(data => { if (!controller.signal.aborted) { setLessons(data); setFailed(false); setLoading(false); } })
            .catch(() => { if (!controller.signal.aborted) { setFailed(true); setLoading(false); } });
        return () => controller.abort();
    }, [language, retry]);
    return { lessons, loading, failed, reload: () => { setLoading(true); setFailed(false); setRetry(value => value + 1); } };
}

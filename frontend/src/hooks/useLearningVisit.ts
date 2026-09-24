import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getContentStatus, setContentStatus } from '../utils/courseProgress';

export function useLearningVisit(ready: boolean) {
    const { pathname } = useLocation();
    useEffect(() => {
        if (ready && getContentStatus(pathname) === 'not-started') {
            setContentStatus(pathname, 'visited');
        }
    }, [ready, pathname]);
}

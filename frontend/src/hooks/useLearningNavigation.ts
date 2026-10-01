import { useCallback } from 'react';
import { useNavigate, useLocation, type NavigateOptions } from 'react-router-dom';
import { useLearning } from '../context/LearningContext';
import { learningPath, unscopedPath } from '../utils/learningRoutes';

export function useLearningNavigate() {
    const navigate = useNavigate();
    const { language } = useLearning();
    return useCallback((to: string | number, options?: NavigateOptions) => {
        if (typeof to === 'number') return navigate(to);
        return navigate(learningPath(language, to), options);
    }, [language, navigate]);
}
export function useLearningLocation() {
    const location = useLocation();
    return { ...location, pathname: unscopedPath(location.pathname) };
}

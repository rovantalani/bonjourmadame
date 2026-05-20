import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { loadMastery, loadHistory, syncAnswerToApi, syncSessionToApi, resetAllProgress } from '../utils/progress';
import './ProgressImportBanner.css';

const IMPORT_KEY = 'progressImportOffered';

function hasLocalProgress(): boolean {
    const mastery = loadMastery();
    const history = loadHistory();
    return Object.keys(mastery).length > 0 || history.length > 0;
}

export default function ProgressImportBanner() {
    const { user } = useAuth();
    const [visible, setVisible] = useState(
        () => !!user && !localStorage.getItem(IMPORT_KEY) && hasLocalProgress()
    );
    const [importing, setImporting] = useState(false);

    if (!visible) return null;

    function dismiss() {
        localStorage.setItem(IMPORT_KEY, 'true');
        setVisible(false);
    }

    async function handleImport() {
        setImporting(true);
        const mastery = loadMastery();
        const history = loadHistory();

        await Promise.allSettled([
            ...Object.entries(mastery).map(([word_id, m]) => {
                const module_id = word_id.split(':')[0];
                return syncAnswerToApi(word_id, module_id, m.level >= 3, m.level);
            }),
            ...history.map(s => syncSessionToApi(s.moduleId, s.sessionType, s.score, s.total)),
        ]);

        resetAllProgress();
        localStorage.setItem(IMPORT_KEY, 'true');
        setVisible(false);
    }

    return (
        <div className="import-banner card">
            <p className="import-banner-text">
                You have local progress saved. Import it to your account for cross-device sync?
            </p>
            <div className="import-banner-actions">
                <button className="btn btn-primary import-banner-btn" onClick={handleImport} disabled={importing}>
                    {importing ? 'Importing…' : 'Import'}
                </button>
                <button className="btn btn-ghost import-banner-btn" onClick={dismiss} disabled={importing}>
                    Dismiss
                </button>
            </div>
        </div>
    );
}

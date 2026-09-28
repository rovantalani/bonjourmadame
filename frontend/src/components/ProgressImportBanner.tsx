import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getImportStatus, importLocalProgress } from '../utils/progressImport';
import { useT } from '../utils/i18n';
import './ProgressImportBanner.css';

function AccountImportBanner({ userId }: { userId: number }) {
    const t = useT().progressImport;
    const [visible, setVisible] = useState(() => getImportStatus(userId) === 'available');
    const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error' | 'signed-out'>('idle');
    const inFlight = useRef(false);

    if (!visible) return null;

    async function handleImport() {
        if (inFlight.current) return;
        inFlight.current = true;
        setStatus('saving');
        try {
            await importLocalProgress(userId);
            setStatus('success');
        } catch (error: unknown) {
            const code = (error as { response?: { status?: number } })?.response?.status;
            setStatus(code === 401 ? 'signed-out' : 'error');
        } finally {
            inFlight.current = false;
        }
    }

    const message = status === 'success' ? t.success : status === 'signed-out' ? t.signedOut
        : status === 'error' ? t.error : t.prompt;
    return (
        <div className="import-banner card" aria-busy={status === 'saving'}>
            <p className="import-banner-text" role="status">{message}</p>
            <div className="import-banner-actions">
                {status !== 'success' && (
                    <button className="btn btn-primary import-banner-btn" onClick={handleImport} disabled={status === 'saving'}>
                        {status === 'saving' ? t.saving : status === 'error' || status === 'signed-out' ? t.retry : t.import}
                    </button>
                )}
                <button className="btn btn-ghost import-banner-btn" onClick={() => setVisible(false)} disabled={status === 'saving'}>
                    {status === 'success' ? t.close : t.later}
                </button>
            </div>
        </div>
    );
}

export default function ProgressImportBanner() {
    const { user } = useAuth();
    return user ? <AccountImportBanner key={user.id} userId={user.id} /> : null;
}

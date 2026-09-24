import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useT } from '../utils/i18n';
import './GuestBanner.css';

// A quiet, persistently dismissible note for guest users.
export default function GuestBanner() {
    const { isGuest } = useAuth();
    const t = useT();
    const [dismissed, setDismissed] = useState(
        () => localStorage.getItem('guestBannerDismissed') === 'true'
    );

    if (!isGuest || dismissed) return null;

    const dismiss = () => {
        localStorage.setItem('guestBannerDismissed', 'true');
        setDismissed(true);
    };

    return (
        <div className="guest-banner" role="status">
            <span>{t.guest.banner}</span>
            <button
                className="guest-banner-dismiss"
                onClick={dismiss}
                aria-label={t.guest.dismiss}
                type="button"
            >
                ✕
            </button>
        </div>
    );
}

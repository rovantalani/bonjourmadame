import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useT } from '../utils/i18n';
import './GuestBanner.css';

/**
 * Contextual, dismissible guest prompt.
 * Rendered inline (not fixed) — mount it only where it makes sense
 * to prompt sign-up (e.g. the Home page), not on every screen.
 * Dismissed state is stored in sessionStorage so it goes away for
 * the rest of the session but reappears on the next visit.
 */
export default function GuestBanner() {
    const { isGuest } = useAuth();
    const t = useT();
    const [dismissed, setDismissed] = useState(
        () => sessionStorage.getItem('guestBannerDismissed') === 'true'
    );

    if (!isGuest || dismissed) return null;

    const dismiss = () => {
        sessionStorage.setItem('guestBannerDismissed', 'true');
        setDismissed(true);
    };

    return (
        <div className="guest-banner" role="status">
            <div className="guest-banner-body">
                <p className="guest-banner-msg">{t.guest.banner}</p>
                <Link to="/register" className="guest-banner-cta">
                    {t.guest.createAccount.trim()} →
                </Link>
            </div>
            <button
                className="guest-banner-dismiss"
                onClick={dismiss}
                aria-label="Dismiss"
                type="button"
            >
                ✕
            </button>
        </div>
    );
}

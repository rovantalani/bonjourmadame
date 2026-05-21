import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useT } from '../utils/i18n';
import './GuestBanner.css';

export default function GuestBanner() {
    const { isGuest } = useAuth();
    const t = useT();
    if (!isGuest) return null;

    return (
        <div className="guest-banner">
            {t.guest.banner}
            <Link to="/register">{t.guest.createAccount}</Link>
        </div>
    );
}

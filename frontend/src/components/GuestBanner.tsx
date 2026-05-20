import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './GuestBanner.css';

export default function GuestBanner() {
    const { isGuest } = useAuth();
    if (!isGuest) return null;

    return (
        <div className="guest-banner">
            Guest mode — progress won't sync across devices.
            <Link to="/register"> Create a free account</Link>
        </div>
    );
}

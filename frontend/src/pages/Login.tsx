import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Login() {
    const { login, continueAsGuest } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError('');
        setSubmitting(true);
        try {
            await login(email, password);
            navigate('/');
        } catch (err: unknown) {
            const msg = (err as { response?: { data?: { error?: string } } }).response?.data?.error;
            setError(msg ?? 'Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    function handleGuest() {
        continueAsGuest();
        navigate('/');
    }

    return (
        <main className="page auth-page">
            <div className="auth-card card">
                <div className="auth-header">
                    <h1>Bonjour !</h1>
                    <p className="auth-subtitle">Sign in to sync your progress across devices</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="field-input auth-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="field-input auth-input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="••••••••"
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit" className="btn btn-primary auth-submit" disabled={submitting}>
                        {submitting ? 'Signing in…' : 'Sign in'}
                    </button>
                </form>

                <div className="auth-divider"><span>or</span></div>

                <button onClick={handleGuest} className="btn btn-secondary auth-guest">
                    Continue as Guest
                </button>

                <p className="auth-footer">
                    Don't have an account? <Link to="/register">Create one</Link>
                </p>
            </div>
        </main>
    );
}

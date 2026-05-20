import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Register() {
    const { register } = useAuth();
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
            await register(email, password);
            navigate('/');
        } catch (err: unknown) {
            const msg = (err as { response?: { data?: { error?: string } } }).response?.data?.error;
            setError(msg ?? 'Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <main className="page auth-page">
            <div className="auth-card card">
                <div className="auth-header">
                    <h1>Create account</h1>
                    <p className="auth-subtitle">Track your progress across all your devices</p>
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
                            placeholder="8+ characters"
                            autoComplete="new-password"
                            minLength={8}
                            required
                        />
                    </div>

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit" className="btn btn-primary auth-submit" disabled={submitting}>
                        {submitting ? 'Creating account…' : 'Create account'}
                    </button>
                </form>

                <p className="auth-footer">
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </main>
    );
}

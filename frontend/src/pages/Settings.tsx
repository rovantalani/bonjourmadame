import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loadDailyGoal, saveDailyGoal } from '../utils/progress';
import { loadLearningMode, saveLearningMode, type LearningMode } from '../utils/settings';
import './Settings.css';

export default function Settings() {
    const navigate                        = useNavigate();
    const { user, isGuest, logout, changePassword, deleteAccount } = useAuth();

    // Preferences
    const [goal, setGoal]                 = useState(10);
    const [goalInput, setGoalInput]       = useState('10');
    const [mode, setMode]                 = useState<LearningMode>(() => loadLearningMode() ?? 'learn-french');

    // Change password form
    const [showPwForm, setShowPwForm]     = useState(false);
    const [currentPw, setCurrentPw]       = useState('');
    const [newPw, setNewPw]               = useState('');
    const [confirmPw, setConfirmPw]       = useState('');
    const [pwError, setPwError]           = useState('');
    const [pwSuccess, setPwSuccess]       = useState(false);
    const [pwLoading, setPwLoading]       = useState(false);

    // Delete account
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        const g = loadDailyGoal();
        setGoal(g);
        setGoalInput(String(g));
    }, []);

    function commitGoal() {
        const n = parseInt(goalInput, 10);
        if (!isNaN(n) && n > 0) {
            setGoal(n);
            saveDailyGoal(n);
        } else {
            setGoalInput(String(goal));
        }
    }

    function handleModeChange(m: LearningMode) {
        setMode(m);
        saveLearningMode(m);
    }

    async function handleChangePassword(e: React.FormEvent) {
        e.preventDefault();
        setPwError('');
        setPwSuccess(false);

        if (newPw.length < 8) {
            setPwError('New password must be at least 8 characters.');
            return;
        }
        if (newPw !== confirmPw) {
            setPwError('New passwords do not match.');
            return;
        }

        setPwLoading(true);
        try {
            await changePassword(currentPw, newPw);
            setPwSuccess(true);
            setCurrentPw('');
            setNewPw('');
            setConfirmPw('');
            setShowPwForm(false);
        } catch (err: unknown) {
            const msg = (err as { response?: { data?: { error?: string } } })?.response?.data?.error;
            setPwError(msg ?? 'Failed to change password.');
        } finally {
            setPwLoading(false);
        }
    }

    async function handleDeleteAccount() {
        setDeleteLoading(true);
        try {
            await deleteAccount();
            navigate('/login');
        } catch {
            setDeleteLoading(false);
            setConfirmDelete(false);
        }
    }

    async function handleLogout() {
        await logout();
        navigate('/login');
    }

    return (
        <main className="page">
            <h1 className="page-header">Settings</h1>

            {/* ── Preferences ── */}
            <section className="settings-section card">
                <h2 className="settings-section-title">Preferences</h2>

                <div className="settings-row">
                    <div className="settings-row-label">
                        <span className="settings-label">Daily goal</span>
                        <span className="settings-hint">Words to study per day</span>
                    </div>
                    <input
                        type="number"
                        className="field-input settings-goal-input"
                        min={1}
                        max={200}
                        value={goalInput}
                        onChange={e => setGoalInput(e.target.value)}
                        onBlur={commitGoal}
                        onKeyDown={e => { if (e.key === 'Enter') commitGoal(); }}
                    />
                </div>

                <div className="settings-row settings-row--col">
                    <div className="settings-row-label">
                        <span className="settings-label">Learning language</span>
                        <span className="settings-hint">Takes effect at the start of your next quiz</span>
                    </div>
                    <div className="settings-toggle-group">
                        <button
                            className={`settings-toggle-btn ${mode === 'learn-french' ? 'active' : ''}`}
                            onClick={() => handleModeChange('learn-french')}
                        >
                            🇫🇷 Learn French
                        </button>
                        <button
                            className={`settings-toggle-btn ${mode === 'learn-english' ? 'active' : ''}`}
                            onClick={() => handleModeChange('learn-english')}
                        >
                            🇬🇧 Learn English
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Account (auth users) ── */}
            {user && (
                <section className="settings-section card">
                    <h2 className="settings-section-title">Account</h2>

                    <div className="settings-row">
                        <div className="settings-row-label">
                            <span className="settings-label">Email</span>
                            <span className="settings-hint">{user.email}</span>
                        </div>
                    </div>

                    {/* Change password */}
                    {!showPwForm ? (
                        <div className="settings-row">
                            <div className="settings-row-label">
                                <span className="settings-label">Password</span>
                                {pwSuccess && <span className="settings-success">Password updated.</span>}
                            </div>
                            <button className="btn btn-secondary" onClick={() => { setShowPwForm(true); setPwSuccess(false); }}>
                                Change password
                            </button>
                        </div>
                    ) : (
                        <form className="settings-pw-form" onSubmit={handleChangePassword}>
                            <p className="settings-pw-form-title">Change password</p>
                            {pwError && <p className="settings-error">{pwError}</p>}
                            <input
                                type="password"
                                className="field-input"
                                placeholder="Current password"
                                value={currentPw}
                                onChange={e => setCurrentPw(e.target.value)}
                                required
                                autoFocus
                            />
                            <input
                                type="password"
                                className="field-input"
                                placeholder="New password (min 8 chars)"
                                value={newPw}
                                onChange={e => setNewPw(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                className="field-input"
                                placeholder="Confirm new password"
                                value={confirmPw}
                                onChange={e => setConfirmPw(e.target.value)}
                                required
                            />
                            <div className="settings-pw-actions">
                                <button type="button" className="btn btn-secondary" onClick={() => { setShowPwForm(false); setPwError(''); }}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary" disabled={pwLoading}>
                                    {pwLoading ? 'Saving…' : 'Update password'}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Logout */}
                    <div className="settings-row">
                        <div className="settings-row-label">
                            <span className="settings-label">Session</span>
                        </div>
                        <button className="btn btn-secondary" onClick={handleLogout}>
                            Log out
                        </button>
                    </div>

                    {/* Delete account */}
                    <div className="settings-row settings-row--danger">
                        <div className="settings-row-label">
                            <span className="settings-label settings-label--danger">Delete account</span>
                            <span className="settings-hint">Permanently removes all your data</span>
                        </div>
                        {!confirmDelete ? (
                            <button className="btn settings-danger-btn" onClick={() => setConfirmDelete(true)}>
                                Delete account
                            </button>
                        ) : (
                            <div className="settings-confirm-delete">
                                <p className="settings-confirm-msg">Are you sure? This cannot be undone.</p>
                                <div className="settings-confirm-actions">
                                    <button className="btn btn-secondary" onClick={() => setConfirmDelete(false)} disabled={deleteLoading}>
                                        Cancel
                                    </button>
                                    <button className="btn settings-danger-btn" onClick={handleDeleteAccount} disabled={deleteLoading}>
                                        {deleteLoading ? 'Deleting…' : 'Yes, delete'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ── Guest prompt ── */}
            {isGuest && (
                <section className="settings-section card">
                    <h2 className="settings-section-title">Account</h2>
                    <p className="settings-guest-msg">
                        You're using Bonjour Madame as a guest. Create an account to sync your progress across devices.
                    </p>
                    <div className="settings-guest-actions">
                        <button className="btn btn-primary" onClick={() => navigate('/register')}>
                            Create account
                        </button>
                        <button className="btn btn-secondary" onClick={() => navigate('/login')}>
                            Log in
                        </button>
                    </div>
                </section>
            )}
        </main>
    );
}

import { useState, useEffect } from 'react';
import {
    loadStreak,
    loadDailyProgress,
    loadDailyGoal,
    saveDailyGoal,
    computeStats,
    type AggregateStats,
    type StreakData,
    type DailyProgress,
} from '../utils/progress';
import './Stats.css';

function formatModuleId(id: string): string {
    return id
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function Stats() {
    const [streak, setStreak] = useState<StreakData>({ currentStreak: 0, longestStreak: 0, lastActivityDate: null });
    const [daily, setDaily] = useState<DailyProgress>({ date: '', wordsStudied: 0 });
    const [goal, setGoal] = useState(10);
    const [goalInput, setGoalInput] = useState('10');
    const [stats, setStats] = useState<AggregateStats>({
        totalPracticed: 0,
        totalMastered: 0,
        overallAccuracy: 0,
        moduleStats: {},
        recentSessions: [],
    });

    useEffect(() => {
        setStreak(loadStreak());
        setDaily(loadDailyProgress());
        const g = loadDailyGoal();
        setGoal(g);
        setGoalInput(String(g));
        setStats(computeStats());
    }, []);

    function handleGoalBlur() {
        const n = parseInt(goalInput, 10);
        if (!isNaN(n) && n >= 1) {
            saveDailyGoal(n);
            setGoal(Math.max(1, n));
        } else {
            setGoalInput(String(goal));
        }
    }

    function handleGoalKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
    }

    const dailyPct = Math.min(100, goal > 0 ? Math.round((daily.wordsStudied / goal) * 100) : 0);

    const sortedModules = Object.entries(stats.moduleStats)
        .sort((a, b) => b[1].practiced - a[1].practiced);

    return (
        <main className="page">
            <div className="page-header">
                <h1>Progress</h1>
                <p className="subtitle">Your learning at a glance</p>
            </div>

            <div className="stats-top-row">
                <div className="card stats-stat-card">
                    <span className="stats-stat-value">
                        {streak.currentStreak > 0 ? streak.currentStreak : '—'}
                    </span>
                    <span className="stats-stat-label">day streak</span>
                </div>
                <div className="card stats-stat-card">
                    <span className="stats-stat-value">
                        {streak.longestStreak > 0 ? streak.longestStreak : '—'}
                    </span>
                    <span className="stats-stat-label">best streak</span>
                </div>
                <div className="card stats-stat-card">
                    <span className="stats-stat-value">{stats.totalMastered}</span>
                    <span className="stats-stat-label">words mastered</span>
                </div>
                <div className="card stats-stat-card">
                    <span className="stats-stat-value">
                        {stats.totalPracticed > 0 ? `${stats.overallAccuracy}%` : '—'}
                    </span>
                    <span className="stats-stat-label">accuracy</span>
                </div>
            </div>

            <div className="card stats-section">
                <h2 className="stats-section-heading">Today</h2>
                <div className="stats-goal-row">
                    <span className="stats-goal-label">
                        {daily.wordsStudied} / {goal} words today
                    </span>
                    <div className="stats-goal-edit">
                        <span className="stats-goal-edit-label">Goal:</span>
                        <input
                            className="stats-goal-input"
                            type="number"
                            min={1}
                            value={goalInput}
                            onChange={e => setGoalInput(e.target.value)}
                            onBlur={handleGoalBlur}
                            onKeyDown={handleGoalKeyDown}
                            aria-label="Daily goal"
                        />
                    </div>
                </div>
                <div className="progress-track stats-daily-track">
                    <div
                        className="progress-fill"
                        style={{ width: `${dailyPct}%`, backgroundColor: 'var(--accent)' }}
                    />
                </div>
            </div>

            {sortedModules.length > 0 && (
                <div className="card stats-section">
                    <h2 className="stats-section-heading">Module Activity</h2>
                    <ul className="stats-module-list">
                        {sortedModules.map(([moduleId, ms]) => {
                            const pct = ms.practiced > 0
                                ? Math.round((ms.mastered / ms.practiced) * 100)
                                : 0;
                            return (
                                <li key={moduleId} className="stats-module-row">
                                    <div className="stats-module-info">
                                        <span className="stats-module-name">{formatModuleId(moduleId)}</span>
                                        <span className="stats-module-meta">
                                            {ms.mastered} mastered · {ms.practiced} practiced
                                        </span>
                                    </div>
                                    <div className="progress-track stats-module-track">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${pct}%`, backgroundColor: 'var(--success)' }}
                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            <div className="card stats-section">
                <h2 className="stats-section-heading">Recent Quizzes</h2>
                {stats.recentSessions.length === 0 ? (
                    <p className="stats-empty">No quizzes completed yet. Start a vocabulary quiz!</p>
                ) : (
                    <ul className="stats-session-list">
                        {stats.recentSessions.map((s, i) => {
                            const acc = s.total > 0 ? Math.round((s.score / s.total) * 100) : 0;
                            return (
                                <li key={i} className="stats-session-row">
                                    <div className="stats-session-info">
                                        <span className="stats-session-module">{formatModuleId(s.moduleId)}</span>
                                        <span className="stats-session-type">{s.sessionType}</span>
                                    </div>
                                    <div className="stats-session-right">
                                        <span className="stats-session-score">{s.score}/{s.total}</span>
                                        <span className={`stats-session-acc ${acc >= 70 ? 'stats-acc-good' : 'stats-acc-low'}`}>
                                            {acc}%
                                        </span>
                                        <span className="stats-session-date">{formatDate(s.date)}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </main>
    );
}

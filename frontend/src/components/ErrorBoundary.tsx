import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('Uncaught error:', error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <main style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', minHeight: '100vh', gap: '1rem', padding: '2rem',
                    textAlign: 'center',
                }}>
                    <h1 style={{ fontSize: '1.5rem' }}>Something went wrong</h1>
                    <p style={{ color: 'var(--text-2)' }}>An unexpected error occurred. Please try returning home.</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => { this.setState({ hasError: false }); window.location.href = '/'; }}
                    >
                        Go home
                    </button>
                </main>
            );
        }
        return this.props.children;
    }
}

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE;

interface User {
    id: number;
    email: string;
}

interface AuthContextValue {
    user: User | null;
    isGuest: boolean;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    continueAsGuest: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isGuest, setIsGuest] = useState(() => localStorage.getItem('guestMode') === 'true');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<User>(`${API}/api/auth/me`, { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);

    async function login(email: string, password: string) {
        const res = await axios.post<User>(`${API}/api/auth/login`, { email, password }, { withCredentials: true });
        setUser(res.data);
        setIsGuest(false);
        localStorage.removeItem('guestMode');
    }

    async function register(email: string, password: string) {
        const res = await axios.post<User>(`${API}/api/auth/register`, { email, password }, { withCredentials: true });
        setUser(res.data);
        setIsGuest(false);
        localStorage.removeItem('guestMode');
    }

    async function logout() {
        await axios.post(`${API}/api/auth/logout`, {}, { withCredentials: true });
        setUser(null);
        setIsGuest(false);
        localStorage.removeItem('guestMode');
    }

    function continueAsGuest() {
        setIsGuest(true);
        localStorage.setItem('guestMode', 'true');
    }

    return (
        <AuthContext.Provider value={{ user, isGuest, loading, login, register, logout, continueAsGuest }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}

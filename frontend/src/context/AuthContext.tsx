import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
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
    changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
    deleteAccount: () => Promise<void>;
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

    async function changePassword(currentPassword: string, newPassword: string) {
        await axios.post(`${API}/api/auth/change-password`, { currentPassword, newPassword }, { withCredentials: true });
    }

    async function deleteAccount() {
        await axios.delete(`${API}/api/auth/account`, { withCredentials: true });
        setUser(null);
        setIsGuest(false);
        localStorage.removeItem('guestMode');
    }

    return (
        <AuthContext.Provider value={{ user, isGuest, loading, login, register, logout, continueAsGuest, changePassword, deleteAccount }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}

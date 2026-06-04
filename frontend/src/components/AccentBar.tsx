import type { RefObject } from 'react';
import './AccentBar.css';

const ACCENTS = ['é', 'è', 'ê', 'ë', 'à', 'â', 'ç', 'î', 'ï', 'ô', 'û', 'ù', 'œ'];

interface AccentBarProps {
    inputRef: RefObject<HTMLInputElement | null>;
    value: string;
    onChange: (val: string) => void;
}

export default function AccentBar({ inputRef, value, onChange }: AccentBarProps) {
    const insert = (char: string) => {
        const el = inputRef.current;
        if (!el) {
            onChange(value + char);
            return;
        }
        const start = el.selectionStart ?? value.length;
        const end   = el.selectionEnd   ?? value.length;
        const next  = value.slice(0, start) + char + value.slice(end);
        onChange(next);
        // Restore focus + caret after React re-render
        requestAnimationFrame(() => {
            el.focus();
            el.setSelectionRange(start + char.length, start + char.length);
        });
    };

    return (
        <div className="accent-bar" aria-label="Accent shortcuts">
            {ACCENTS.map(ch => (
                <button
                    key={ch}
                    type="button"
                    className="accent-btn"
                    onClick={() => insert(ch)}
                    tabIndex={-1}
                    aria-label={`Insert ${ch}`}
                >
                    {ch}
                </button>
            ))}
        </div>
    );
}

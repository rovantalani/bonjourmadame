import { COURSES } from '../data/courses';
import './CourseBar.css';

interface Props {
    activeLevel: string;
    onChange: (level: string) => void;
}

export default function CourseBar({ activeLevel, onChange }: Props) {
    return (
        <div className="course-bar">
            {COURSES.map(c => (
                <button
                    key={c.level}
                    className={`course-bar-pill ${activeLevel === c.level ? 'course-bar-pill--active' : ''}`}
                    style={
                        activeLevel === c.level
                            ? { backgroundColor: c.color, borderColor: c.color, color: '#fff' }
                            : { borderColor: c.color, color: c.color }
                    }
                    onClick={() => onChange(c.level)}
                    type="button"
                >
                    {c.level}
                </button>
            ))}
        </div>
    );
}

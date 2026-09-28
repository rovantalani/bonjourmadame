import { useCourses } from '../utils/modeHelpers';
import './CourseBar.css';

interface Props {
    activeLevel: string;
    onChange: (level: string) => void;
}

export default function CourseBar({ activeLevel, onChange }: Props) {
    const courses = useCourses();
    return (
        <div className="course-bar">
            {courses.map(c => (
                <button
                    key={c.level}
                    className={`course-bar-pill ${activeLevel === c.level ? 'course-bar-pill--active' : ''}`}
                    style={
                        activeLevel === c.level
                            ? { backgroundColor: c.color, borderColor: c.color, color: c.textColor }
                            : { backgroundColor: c.color, borderColor: c.color, color: c.textColor }
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

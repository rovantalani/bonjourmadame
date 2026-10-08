import { useParams } from 'react-router-dom';
import { useLearning } from '../context/LearningContext';
import './CourseLabel.css';

export default function CourseLabel({ title }: { title?: string }) {
    const { level } = useParams();
    const { courses } = useLearning();
    const course = courses.find(item => item.level.toLowerCase() === level?.toLowerCase());
    return course ? <p className="course-label">{course.level} · {title ?? course.title}</p> : null;
}

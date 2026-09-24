import { useT } from '../utils/i18n';
import type { StepStatus } from '../utils/courseProgress';
import './ProgressFlower.css';

export default function ProgressFlower({ status }: { status: StepStatus }) {
    const t = useT();
    const label = t.progressFlower[status];
    return (
        <span className={`progress-flower progress-flower--${status}`} title={label}>
            <svg width="24" height="24" viewBox="0 0 30 30" role="img" aria-label={label}>
                {status === 'complete' ? (
                    <g className="progress-flower__bloom">
                        <g fill="#CE4379">
                            {[0, 72, 144, 216, 288].map(angle => (
                                <ellipse key={angle} cx="15" cy="8.5" rx="3.4" ry="4.6"
                                    transform={`rotate(${angle} 15 15)`} />
                            ))}
                        </g>
                        <circle cx="15" cy="15" r="2.6" fill="#FFFFFF" stroke="#CE4379" strokeWidth="1" />
                    </g>
                ) : status === 'visited' ? (
                    <g>
                        <circle cx="15" cy="15" r="4.5" fill="#F0AFC6" />
                        <circle cx="15" cy="15" r="1.8" fill="#FFFFFF" />
                    </g>
                ) : (
                    <circle cx="15" cy="15" r="3" fill="none" stroke="#E9BFCC" strokeWidth="1.4" />
                )}
            </svg>
        </span>
    );
}

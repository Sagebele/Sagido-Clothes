import { useEffect, useState } from "react";
import "../styles/AnimatedBall.css";
import type { AnimatedBallProps } from "../types/components";

export const AnimatedBall = ({ startX, startY, endX, endY, onComplete }: AnimatedBallProps) => {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const duration = 600; 
        const timer = setTimeout(() => {
            setIsAnimating(false);
            onComplete();
        }, duration);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!isAnimating) return null;

    const deltaX = endX - startX;
    const deltaY = endY - startY;

    return (
        <div
            className="animated-ball"
            style={{
                left: `${startX}px`,
                top: `${startY}px`,
                "--end-x": `${deltaX}px`,
                "--end-y": `${deltaY}px`,
            } as React.CSSProperties & { "--end-x": string; "--end-y": string }}
        />
    );
};

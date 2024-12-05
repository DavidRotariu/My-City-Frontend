import { useEffect, useRef, useState } from 'react';

interface TypewriterEffectProps {
    text: string;
    speed: number;
}

const TypewriterEffect = ({ text, speed }: TypewriterEffectProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isCursorVisible, setIsCursorVisible] = useState(true);
    const iRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[iRef.current]);
            iRef.current += 1; // Update the index
            if (iRef.current === text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setIsCursorVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div>
            <p style={{ display: 'inline' }}>
                {displayedText}
                {isCursorVisible && <span>|</span>}
            </p>
        </div>
    );
};

export default TypewriterEffect;

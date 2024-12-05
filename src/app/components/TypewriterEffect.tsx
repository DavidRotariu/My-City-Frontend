import { useEffect, useState } from 'react';

interface TypewriterEffectProps {
    text: string;
    speed: number;
}

const TypewriterEffect = ({ text, speed }: TypewriterEffectProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[i]);
            i += 1;
            if (i === text.length - 1) {
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

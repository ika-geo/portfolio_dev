import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    textArray: string[];
    delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ textArray, delay = 200 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        let textInterval: NodeJS.Timeout;

        if (currentIndex < textArray.length) {
            const targetText = textArray[currentIndex];
            let index = 0;

            textInterval = setInterval(() => {
                if (index < targetText.length) {
                    setCurrentText(targetText.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(textInterval);
                    setTimeout(() => setCurrentIndex(currentIndex + 1), delay);
                }
            }, delay);
        } else {
            setCurrentIndex(0);
        }

        return () => clearInterval(textInterval);
    }, [currentIndex, textArray, delay]);

    return <>{currentText}</>;
};

export default Typewriter;

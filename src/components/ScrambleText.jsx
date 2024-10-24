import React, { useState, useEffect } from 'react';

const ScrambleText = ({ text, speed = 50, scrambleIterations = 10, scrambleInterval = 10000 }) => {
    const [scrambledText, setScrambledText] = useState('');
    useEffect(() => {
        let iterations = 0;
        const originalText = text.split('');
        const scramble = () => {
            iterations = 0;
            const scrambleInterval = setInterval(() => {
                const currentText = originalText.map(it => 
                    Math.random < 0.5 ? it : String.fromCharCode(33 + Math.random() * 94)
                )
                setScrambledText(currentText.join(''));
                if(++iterations >= scrambleIterations) {
                    clearInterval(scrambleInterval);
                    setScrambledText(originalText.join(''));
                }
            }, speed);
            return scrambleInterval;
        }

        const overAllInterval = setInterval(() => {
            scramble()
        }, scrambleInterval);

        return () => {
            clearInterval(overAllInterval);
        };
    }, [text, speed, scrambleIterations, scrambleInterval])
    return <p>{scrambledText}</p>;
};

export default ScrambleText;

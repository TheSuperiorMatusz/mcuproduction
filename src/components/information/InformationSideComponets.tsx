import React, { useEffect, useState } from 'react';
import '../../assets/styles/information/Animation.css';
const AnimatedText = () => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setAnimated(true);
    }, []);

    return (
        <div className="animated-text-container-background">
        <div className={`animated-text-container ${animated ? 'visible' : 'hidden'}`}>
            <div className="animated-text">
                Marvel Cinematic Universe database production
            </div>
        </div>
        </div>
    );
};

export default AnimatedText;
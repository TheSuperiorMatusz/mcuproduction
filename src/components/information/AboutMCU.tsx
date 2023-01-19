import React from 'react';
import '../../assets/styles/information/AboutMCU.css';
const AboutMCU = () => {
    const question:string='What is the Marvel Cinematic Universe?';
    const info:string='The Marvel Cinematic Universe (MCU) is a shared universe of superhero films and television series produced by Marvel Studios. It began in 2008 with the release of "Iron Man" and has since grown to include multiple films and TV shows featuring characters from the Marvel Comics.';
    const moreInfo:string='The MCU began in 2008 and has produced over 30 films and multiple TV shows. The films have grossed over $22 billion worldwide.';
    return (
        <div id="about-mcu-container">
            <div className="mcu-text">
            <h2>{question}</h2>
            <p>{info}</p>
            <p>{moreInfo}</p>
            </div>
        </div>
    );
};

export default AboutMCU;
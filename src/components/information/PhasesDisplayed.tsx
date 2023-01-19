import React, { useState } from 'react';
import '../../assets/styles/information/Phases.css';
import phases from '../../data/phases.json'
interface Phase {
    name: string;
    description: string;
    releaseDate: string;
}
const PhasesDisplayed = () => {
    const [phaseData] = useState<Phase[]>(phases.phases);
    return (
        <div id="phases-container">
            {phaseData.map((phase: Phase) => (
                <div className="phase" key={phase.name}>
                    <h2>{phase.name}</h2>
                    <p>{phase.description}</p>
                    <p>Release Date: {phase.releaseDate}</p>
                </div>
            ))}
        </div>
    );
}

export default PhasesDisplayed;
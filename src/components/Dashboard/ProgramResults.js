// src/components/ProgramGenerator/ProgramResults.js

import React from 'react';
import '../../styles/Dashboard/ProgramResults.css';

const ProgramResults = ({ program, onClose }) => {
  return (
    <div className="program-results">
      <h3>Your Personalized Training Program</h3>
      {program.map((day, index) => (
        <div key={index} className="program-day">
          <h4>Day {index + 1}</h4>
          <ul>
            {day.exercises.map((exercise, idx) => (
              <li key={idx}>{exercise}</li>
            ))}
          </ul>
        </div>
      ))}
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ProgramResults;

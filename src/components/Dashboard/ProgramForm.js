// src/components/ProgramGenerator/ProgramForm.js

import React, { useState } from 'react';
import '../../styles/Dashboard/ProgramForm.css';

const ProgramForm = ({ onGenerate }) => {
  const [goals, setGoals] = useState([]);
  const [experience, setExperience] = useState('');
  const [equipment, setEquipment] = useState([]);
  const [frequency, setFrequency] = useState(3);

  const handleGoalChange = (e) => {
    const { value, checked } = e.target;
    setGoals((prev) =>
      checked ? [...prev, value] : prev.filter((goal) => goal !== value)
    );
  };

  const handleEquipmentChange = (e) => {
    const { value, checked } = e.target;
    setEquipment((prev) =>
      checked ? [...prev, value] : prev.filter((eq) => eq !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ goals, experience, equipment, frequency });
  };

  return (
    <form className="program-form" onSubmit={handleSubmit}>
      <h3>Tell us about your fitness preferences</h3>

      <div className="form-group">
        <label>What are your fitness goals?</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" value="Muscle Gain" onChange={handleGoalChange} />
            Muscle Gain
          </label>
          <label>
            <input type="checkbox" value="Weight Loss" onChange={handleGoalChange} />
            Weight Loss
          </label>
          <label>
            <input type="checkbox" value="Endurance" onChange={handleGoalChange} />
            Endurance
          </label>
          <label>
            <input type="checkbox" value="Flexibility" onChange={handleGoalChange} />
            Flexibility
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>What is your experience level?</label>
        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        >
          <option value="">Select one</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="form-group">
        <label>Available equipment:</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" value="Dumbbells" onChange={handleEquipmentChange} />
            Dumbbells
          </label>
          <label>
            <input type="checkbox" value="Barbell" onChange={handleEquipmentChange} />
            Barbell
          </label>
          <label>
            <input type="checkbox" value="Machines" onChange={handleEquipmentChange} />
            Machines
          </label>
          <label>
            <input type="checkbox" value="Bodyweight" onChange={handleEquipmentChange} />
            Bodyweight
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>How many days per week can you train?</label>
        <input
          type="number"
          min="1"
          max="7"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="generate-button">
        Generate Program
      </button>
    </form>
  );
};

export default ProgramForm;

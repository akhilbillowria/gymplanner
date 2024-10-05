// src/components/ProgramGenerator/ProgramGenerator.js

import React, { useState } from 'react';
import ProgramGeneratorModal from './ProgramGeneratorModal';
import ProgramForm from './ProgramForm';
import ProgramResults from './ProgramResults';
import '../../styles/Dashboard/ProgramGeneratorModal.css';
import { faDumbbell, faBowlRice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ProgramGenerator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [program, setProgram] = useState(null);

  const handleGenerate = (userInputs) => {
    // Generate the program based on user inputs
    const generatedProgram = generateProgram(userInputs);
    setProgram(generatedProgram);
  };

  const generateProgram = (inputs) => {
    // Mock function to generate a program
    // In a real application, you might fetch this data from a backend API

    const { frequency, goals, experience, equipment } = inputs;

    // Example logic to generate program days
    const programDays = [];
    for (let i = 0; i < frequency; i++) {
      programDays.push({
        exercises: [
          `Exercise ${i + 1} - ${goals.join(', ')}`,
          `Equipment: ${equipment.join(', ') || 'Bodyweight'}`,
          `Intensity: ${experience}`,
        ],
      });
    }

    return programDays;
  };

  const openModal = () => {
    setIsModalOpen(true);
    setProgram(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProgram(null);
  };

  return (
    <div>
       {/* Sticky Icon to open the modal */}
       <div className="sticky-icon" onClick={openModal}>
        <FontAwesomeIcon icon={faBowlRice} className="icon" />
        <span className="tooltip-text">Program Generator</span>
      </div>

      <ProgramGeneratorModal isOpen={isModalOpen} onClose={closeModal}>
        {!program ? (
          <ProgramForm onGenerate={handleGenerate} />
        ) : (
          <ProgramResults program={program} onClose={closeModal} />
        )}
      </ProgramGeneratorModal>
    </div>
  );
};

export default ProgramGenerator;

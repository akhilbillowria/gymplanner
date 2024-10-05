// src/components/ProgramGenerator/ProgramGeneratorModal.js

import React, { useEffect } from 'react';
import '../../styles/Dashboard/ProgramGeneratorModal.css';

const ProgramGeneratorModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Add blur to background when modal is open
      document.getElementById('root').classList.add('modal-open');
    } else {
      // Remove blur when modal is closed
      document.getElementById('root').classList.remove('modal-open');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="program-modal-overlay" onClick={onClose}>
      <div
        className="program-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="program-modal-header">
          <h2>Personalized Training Program Generator</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="program-modal-content">{children}</div>
      </div>
    </div>
  );
};

export default ProgramGeneratorModal;

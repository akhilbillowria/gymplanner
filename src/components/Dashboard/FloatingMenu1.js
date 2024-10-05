// src/components/FloatingMenu.js

import React from 'react';
import '../../styles/Dashboard/FloatingMenu1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faSignOutAlt, faInfoCircle, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; // Adjust the path if necessary

const FloatingMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const SECTIONS = [
    {
      name: 'Diet Calculator',
      action: () => {
        navigate('/diet-calculator');
        onClose();
      },
      icon: faCalculator,
    },
    {
      name: 'ABOUT',
      action: () => {
        navigate('/about');
        onClose();
      },
      icon: faInfoCircle,
    },
    {
      name: 'WORK',
      action: () => {
        navigate('/work');
        onClose();
      },
      icon: faBriefcase,
    },
    {
      name: 'Logout',
      action: () => {
        handleLogout();
        onClose();
      },
      icon: faSignOutAlt,
    },
  ];

  return (
    <>
      <div className={`floating-menu ${isOpen ? 'open' : ''}`}>
        {/* Overlay to close the menu when clicking outside */}
        {isOpen && <div className="floating-menu__overlay" onClick={onClose}></div>}

        <ul className="floating-menu__content">
          {SECTIONS.map((section, index) => {
            const angle = (index / SECTIONS.length) * (2 * Math.PI) - Math.PI / 2;
            const x = 80 * Math.cos(angle);
            const y = 80 * Math.sin(angle);

            return (
              <li
                key={section.name}
                className="floating-menu__item"
                style={{
                  '--translate-x': `${x}px`,
                  '--translate-y': `${y}px`,
                  '--delay': `${index * 0.1}s`,
                }}
              >
                <button className="floating-menu__link" onClick={section.action}>
                  <FontAwesomeIcon icon={section.icon} className="floating-menu__icon" />
                  <span className="floating-menu__text">{section.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FloatingMenu;

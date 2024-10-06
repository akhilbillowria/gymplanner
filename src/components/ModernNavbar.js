import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/ModernNavbar.css';

const ModernNavbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = ['home', 'dashboard', 'testimonials'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavigation = (e, path, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/' && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="modern-navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">FitnessApp</Link>
        <ul className="navbar-links">
          <li>
            <a
              href="/"
              className={location.pathname === '/' && activeSection === 'home' ? 'active' : ''}
              onClick={(e) => handleNavigation(e, '/', 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className={location.pathname === '/dashboard' || (location.pathname === '/' && activeSection === 'dashboard') ? 'active' : ''}
              onClick={(e) => handleNavigation(e, '/dashboard', 'dashboard')}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/diet-plan"
              className={location.pathname === '/diet-plan' ? 'active' : ''}
              onClick={(e) => handleNavigation(e, '/diet-plan')}
            >
              Diet Plan
            </a>
          </li>
          <li>
            <a
              href="/gym-planner"
              className={location.pathname === '/gym-planner' ? 'active' : ''}
              onClick={(e) => handleNavigation(e, '/gym-planner')}
            >
              Gym Planner
            </a>
          </li>
          <li>
            <a
              href="/#testimonials"
              className={location.pathname === '/' && activeSection === 'testimonials' ? 'active' : ''}
              onClick={(e) => handleNavigation(e, '/', 'testimonials')}
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ModernNavbar;
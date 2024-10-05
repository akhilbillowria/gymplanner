// src/components/Navbar/Navbar.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for redirecting
import '../styles/Navbar.css';
import { useAuth } from '../AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import FloatingMenu from './Dashboard/FloatingMenu';
const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to log out:", error);
      // Optionally, show an error message to the user
    }
  };

  // Function to close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          GymPlanner
        </Link>

        <nav className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={closeMobileMenu}>Dashboard</Link>
            </li>
            <li>
              <Link to="/diet-plan" onClick={closeMobileMenu}>Diet Plan</Link>
            </li>
            <li>
              <Link to="/gym-planner" onClick={closeMobileMenu}>Gym Planner</Link>
            </li>
            <li>
              <Link to="/yoga-pants" onClick={closeMobileMenu}>Yoga Pants</Link>
            </li>
          </ul>
        </nav>

        <div className="navbar-icons">
          {currentUser ? (
            <div
              className="profile-menu-container"
              onMouseEnter={() => {}} // Empty handler as CSS handles hover
              onMouseLeave={() => {}} // Empty handler as CSS handles hover
            >
              <button className="profile-button" aria-label="User Menu">
                <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                <span className="user-name">
                  {currentUser.displayName || currentUser.email}
                </span>
              </button>
              {/* Profile dropdown, visible on hover */}
              <div className="profile-dropdown">
                <Link to="/profile" onClick={closeMobileMenu}>Profile</Link>
                <button onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="login-button">
              Log In
            </Link>
          )}

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

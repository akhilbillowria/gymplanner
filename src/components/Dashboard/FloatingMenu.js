// src/components/FloatingMenu.js

import React, { useState } from 'react';
import '../../styles/Dashboard/FloatingMenu.css';

const FloatingMenu = () => {
  const randomInRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const SECTIONS = ['HOME', 'ABOUT', 'CONTACT', 'WORK'];
  const [hue] = useState(Math.random() * 360);

  return (
    <>
      <nav className="menu" style={{ '--hue': hue }}>
        <input type="checkbox" id="menu-toggle" className="menu__toggle" />
        <label htmlFor="menu-toggle" className="menu__toggle-label"></label>
        <label
          htmlFor="menu-toggle"
          className="menu__toggle-label menu__toggle-label--closer"
        >
          <svg
            className="menu__icon"
            preserveAspectRatio="xMinYMin"
            viewBox="0 0 24 24"
          >
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
          <svg
            className="menu__icon"
            preserveAspectRatio="xMinYMin"
            viewBox="0 0 24 24"
          >
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </label>
        <ul className="menu__content">
          {SECTIONS.map((section, index) => {
            const positions = [
              { x: randomInRange(15, 35), y: randomInRange(15, 25) },
              { x: randomInRange(45, 75), y: randomInRange(25, 40) },
              { x: randomInRange(15, 35), y: randomInRange(45, 75) },
              { x: randomInRange(65, 75), y: randomInRange(50, 75) },
            ];
            const { x, y } = positions[index];

            return (
              <li
                key={section}
                className="menu__item"
                style={{ '--x': x, '--y': y }}
              >
                <a href={`#${section}`} className="menu__link">
                  {section}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Include the SVG filter for the gooey effect */}
      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="15"
              result="BLUR"
            />
            <feColorMatrix
              in="BLUR"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -7"
              result="GOO"
            />
            <feBlend in="SourceGraphic" in2="GOO" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default FloatingMenu;

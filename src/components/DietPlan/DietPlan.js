// src/components/DietPlan/DietPlan.js

import React, { useState } from 'react';
import '../../styles/Diet/DietPlan.css';
import { dietPlans } from './DietTable';
import { ToggleButtonGroup, ToggleButton, Card, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMars,
  faVenus,
  faAppleAlt,
  faWeight,
  faFireAlt,
  faCalculator,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import DietCalculator from './DietCalculator';

const DietPlan = () => {
  const [gender, setGender] = useState('men');
  const [goal, setGoal] = useState('fatLoss');
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [showCalculator, setShowCalculator] = useState(false);

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const handleGenderChange = (val) => setGender(val);
  const handleGoalChange = (val) => setGoal(val);
  const toggleCalculator = () => setShowCalculator(!showCalculator);
  const handleDayChange = (day) => setSelectedDay(day);

  const currentPlan = dietPlans[gender][goal][selectedDay] || [];

  return (
    <div className="diet-plan-container">
      {/* Floating Calculator Button */}
      <div className="calculator-button-container">
        <Button variant="primary" onClick={toggleCalculator}>
          <FontAwesomeIcon icon={faCalculator} className="me-2" />
          Daily Calorie Calculator
        </Button>
      </div>

      {/* Calculator Modal */}
      <Modal show={showCalculator} onHide={toggleCalculator} centered>
        <Modal.Header closeButton>
          <Modal.Title>Daily Calorie Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DietCalculator />
        </Modal.Body>
      </Modal>

      <h1 className="title">Personalized Diet Plans</h1>

      {/* Gender Switch */}
      <div className="switch-container">
        <ToggleButtonGroup
          type="radio"
          name="gender"
          value={gender}
          onChange={handleGenderChange}
          className="mb-3"
        >
          <ToggleButton id="gender-men" variant="primary" value="men">
            <FontAwesomeIcon icon={faMars} className="me-2" />
            Men
          </ToggleButton>
          <ToggleButton id="gender-women" variant="danger" value="women">
            <FontAwesomeIcon icon={faVenus} className="me-2" />
            Women
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Goal Switch */}
      <div className="switch-container">
        <ToggleButtonGroup
          type="radio"
          name="goal"
          value={goal}
          onChange={handleGoalChange}
          className="mb-4"
        >
          <ToggleButton id="goal-fatLoss" variant="success" value="fatLoss">
            <FontAwesomeIcon icon={faFireAlt} className="me-2" />
            Fat Loss
          </ToggleButton>
          <ToggleButton id="goal-weightGain" variant="warning" value="weightGain">
            <FontAwesomeIcon icon={faWeight} className="me-2" />
            Weight Gain
          </ToggleButton>
          <ToggleButton id="goal-shredded" variant="info" value="shredded">
            <FontAwesomeIcon icon={faAppleAlt} className="me-2" />
            Shredded
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Weekday Selection */}
      <div className="weekday-container">
        {daysOfWeek.map((day) => (
          <Button
            key={day}
            variant={selectedDay === day ? 'dark' : 'outline-dark'}
            onClick={() => handleDayChange(day)}
            className="weekday-button"
          >
            <FontAwesomeIcon icon={faCalendar} className="me-2" />
            {day}
          </Button>
        ))}
      </div>

      {/* Diet Plan Display */}
      <div className="diet-plan-display">
        {currentPlan.length > 0 ? (
          <Card className="mb-3">
            <Card.Header>
              <h3>{selectedDay}'s Diet Plan</h3>
            </Card.Header>
            <Card.Body>
              {currentPlan.map((meal, idx) => (
                <div key={idx} className="meal-item">
                  <h5>
                    {meal.mealType}:
                    <span className="meal-description"> {meal.description}</span>
                  </h5>
                  <p>Calories: {meal.calories} kcal</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        ) : (
          <p>No diet plan available for this day.</p>
        )}
      </div>
    </div>
  );
};

export default DietPlan;

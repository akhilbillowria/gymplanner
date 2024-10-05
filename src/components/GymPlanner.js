// src/components/GymPlanner/GymPlanner.js

import React, { useState, useEffect } from 'react';
import '../styles/GymPlanner.css';
import { Table, Button, Tooltip, OverlayTrigger, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale, faCalendarDay, faDownload, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { Row, Col } from 'react-bootstrap';


const gymPlans = {
  male: {
    Monday: [
      { exercise: 'Bench Press', sets: 4, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Push-Ups', sets: 3, reps: 15, completed: false, logged: { reps: '' } },
      { exercise: 'Tricep Dips', sets: 3, reps: 12, completed: false, logged: { reps: '' } },
    ],
    Tuesday: [
      { exercise: 'Deadlifts', sets: 4, reps: 8, completed: false, logged: { reps: '' } },
      { exercise: 'Pull-Ups', sets: 3, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Bicep Curls', sets: 3, reps: 12, completed: false, logged: { reps: '' } },
    ],
    Wednesday: [
      { exercise: 'Squats', sets: 4, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Lunges', sets: 3, reps: 12, completed: false, logged: { reps: '' } },
      { exercise: 'Leg Press', sets: 3, reps: 10, completed: false, logged: { reps: '' } },
    ],
    Thursday: [
      { exercise: 'Shoulder Press', sets: 4, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Planks', sets: 3, reps: '30 sec', completed: false, logged: { reps: '' } },
      { exercise: 'Russian Twists', sets: 3, reps: 15, completed: false, logged: { reps: '' } },
    ],
    Friday: [
      { exercise: 'Burpees', sets: 4, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Mountain Climbers', sets: 3, reps: 15, completed: false, logged: { reps: '' } },
      { exercise: 'Jump Squats', sets: 3, reps: 12, completed: false, logged: { reps: '' } },
    ],
    Saturday: [
      { exercise: 'Running', sets: 1, reps: '30 mins', completed: false, logged: { reps: '' } }, // Duration in minutes
      { exercise: 'Yoga', sets: 1, reps: '30 mins', completed: false, logged: { reps: '' } }, // Duration in minutes
    ],
  },
  female: {
    Monday: [
      { exercise: 'Incline Dumbbell Press', sets: 4, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Knee Push-Ups', sets: 3, reps: 15, completed: false, logged: { reps: '' } },
      { exercise: 'Tricep Kickbacks', sets: 3, reps: 12, completed: false, logged: { reps: '' } },
    ],
    Tuesday: [
      { exercise: 'Leg Press', sets: 4, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Lat Pulldowns', sets: 3, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Dumbbell Rows', sets: 3, reps: 12, completed: false, logged: { reps: '' } },
    ],
    Wednesday: [
      { exercise: 'Goblet Squats', sets: 4, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Step-Ups', sets: 3, reps: 12, completed: false, logged: { reps: '' } },
      { exercise: 'Leg Curls', sets: 3, reps: 10, completed: false, logged: { reps: '' } },
    ],
    Thursday: [
      { exercise: 'Lateral Raises', sets: 4, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Planks', sets: 3, reps: '30 sec', completed: false, logged: { reps: '' } },
      { exercise: 'Russian Twists', sets: 3, reps: 15, completed: false, logged: { reps: '' } },
    ],
    Friday: [
      { exercise: 'High Knees', sets: 4, reps: '30 sec', completed: false, logged: { reps: '' } }, // Duration in seconds
      { exercise: 'Burpees', sets: 3, reps: 10, completed: false, logged: { reps: '' } },
      { exercise: 'Side Lunges', sets: 3, reps: 12, completed: false, logged: { reps: '' } },
    ],
    Saturday: [
      { exercise: 'Running', sets: 1, reps: '30 mins', completed: false, logged: { reps: '' } }, // Duration in minutes
      { exercise: 'Yoga', sets: 1, reps: '30 mins', completed: false, logged: { reps: '' } }, // Duration in minutes
    ],
  },
};

const GymPlanner = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [isMale, setIsMale] = useState(true);
  const gender = isMale ? 'male' : 'female';

  const [gymData, setGymData] = useState(() => {
    // Load from localStorage if available
    const storedData = localStorage.getItem('gymPlans');
    return storedData ? JSON.parse(storedData) : gymPlans;
  });

  useEffect(() => {
    // Save to localStorage whenever gymData changes
    localStorage.setItem('gymPlans', JSON.stringify(gymData));
  }, [gymData]);

  const handleGenderSwitch = (gender) => {
    setIsMale(gender === 'male');
  };

  const downloadCSV = () => {
    const exercises = gymData[gender][selectedDay];
    if (!exercises) return;

    const csvRows = [
      ['Exercise', 'Sets', 'Reps', 'Completed', 'Actual Reps'], // Header row
      ...exercises.map(exercise => [
        exercise.exercise, 
        exercise.sets, 
        exercise.reps, 
        exercise.completed ? 'Yes' : 'No', 
        exercise.logged.reps
      ]),
    ];

    const csvString = csvRows.map(e => e.join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `${selectedDay}_Workout_Plan.csv`);
    a.click();
    URL.revokeObjectURL(url); // Clean up the URL
  };

  const handleCompletionToggle = (exerciseIndex) => {
    const updatedGymData = { ...gymData };
    updatedGymData[gender][selectedDay][exerciseIndex].completed = !updatedGymData[gender][selectedDay][exerciseIndex].completed;
    setGymData(updatedGymData);
  };

  const handleLogging = (exerciseIndex, field, value) => {
    const updatedGymData = { ...gymData };
    updatedGymData[gender][selectedDay][exerciseIndex].logged[field] = value;
    setGymData(updatedGymData);
  };

  // Tooltip for Gender Toggle
  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  return (
    <div className="gym-planner-container">
      <h1 className="planner-title">Weekly Gym Planner</h1>


      {/* Gender Toggle */}
      <div className="gender-toggle mb-4">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => renderTooltip(props, 'Switch to Men\'s Plan')}
        >
          <motion.div
            className={`gender-button ${isMale ? 'active' : ''}`}
            onClick={() => handleGenderSwitch('male')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faMale} size="2x" />
            <span>Men</span>
          </motion.div>
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => renderTooltip(props, 'Switch to Women\'s Plan')}
        >
          <motion.div
            className={`gender-button ${!isMale ? 'active' : ''}`}
            onClick={() => handleGenderSwitch('female')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faFemale} size="2x" />
            <span>Women</span>
          </motion.div>
        </OverlayTrigger>
      </div>

      {/* Day Icons */}
      <div className="day-icons mb-4">
        {Object.keys(gymData[gender]).map((day) => (
          <OverlayTrigger
            key={day}
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, day)}
          >
            <motion.div
              className={`day-icon ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
              whileHover={{ scale: 1.2, color: '#ff6b6b' }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faCalendarDay} size="lg" />
              <span>{day.substring(0, 3)}</span>
            </motion.div>
          </OverlayTrigger>
        ))}
      </div>

      {/* Workout Plan Table */}
      <div className="table-container">
        <Row className="align-items-center mb-3">
          <Col>
            <h2>{selectedDay} Workout Plan</h2>
          </Col>
          <Col className="text-end">
            <Button variant="success" onClick={downloadCSV}>
              <FontAwesomeIcon icon={faDownload} className="me-2" />
              Download CSV
            </Button>
          </Col>
        </Row>
        <ExerciseTable 
          exercises={gymData[gender][selectedDay]} 
          handleCompletionToggle={handleCompletionToggle}
          handleLogging={handleLogging}
        />
      </div>

      {/* Progress Chart */}
      <div className="progress-chart-container">
        <h3>Your Progress</h3>
        <ProgressChart gymData={gymData} gender={gender} />
      </div>
    </div>
  );
};

const ExerciseTable = ({ exercises, handleCompletionToggle, handleLogging }) => {
  if (!exercises || exercises.length === 0) {
    return <p>No exercises available for this day.</p>;
  }

  return (
    <Table responsive bordered hover className="exercise-table">
      <thead>
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Completed</th>
          <th>Actual Reps</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise, index) => (
          <tr key={index} className={exercise.completed ? 'completed-row' : ''}>
            <td>{exercise.exercise}</td>
            <td>{exercise.sets}</td>
            <td>{exercise.reps}</td>
            <td className="text-center">
              <Form.Check 
                type="checkbox" 
                checked={exercise.completed}
                onChange={() => handleCompletionToggle(index)}
                aria-label={`Mark ${exercise.exercise} as completed`}
              />
            </td>
            <td>
              <Form.Control 
                type="number" 
                placeholder="reps" 
                value={exercise.logged.reps}
                onChange={(e) => handleLogging(index, 'reps', e.target.value)}
                aria-label={`Log reps for ${exercise.exercise}`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const ProgressChart = ({ gymData, gender }) => {
  // Prepare data for the chart
  const labels = Object.keys(gymData[gender]);
  const data = labels.map(day => {
    const completedExercises = gymData[gender][day].filter(ex => ex.completed).length;
    const actualReps = gymData[gender][day].reduce((total, ex) => total + (parseInt(ex.logged.reps) || 0), 0);
    return {
      day,
      'Completed Exercises': completedExercises,
      'Actual Reps': actualReps,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 20, right: 30, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" stroke="#ffffff"/>
        <YAxis stroke="#ffffff"/>
        <RechartsTooltip />
        <Legend />
        <Line type="monotone" dataKey="Completed Exercises" stroke="#82ca9d" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Actual Reps" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GymPlanner;

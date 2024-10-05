
import React, { useState } from 'react';
import '../../styles/Diet/DietCalculator.css';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Switch,
  FormControlLabel,
  Slider,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DietCalculator = () => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [goal, setGoal] = useState('maintain');
  const [darkMode, setDarkMode] = useState(false);

  const handleGenderChange = (event, newGender) => {
    if (newGender !== null) {
      setGender(newGender);
    }
  };

  const handleGoalChange = (event, newGoal) => {
    if (newGoal !== null) {
      setGoal(newGoal);
    }
  };

  const handleDarkModeToggle = (event) => {
    setDarkMode(event.target.checked);
  };

  // BMR Calculation using Mifflin-St Jeor Equation
  const calculateBMR = () => {
    if (gender && age && weight && height) {
      return gender === 'male'
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return 0;
  };

  // Total Daily Energy Expenditure (TDEE)
  const calculateTDEE = () => {
    const bmr = calculateBMR();
    return bmr * activityLevel;
  };

  // Adjusted Calories based on Goal
  const calculateCalories = () => {
    const tdee = calculateTDEE();
    if (goal === 'lose') return tdee - 500;
    if (goal === 'gain') return tdee + 500;
    return tdee;
  };

  // Styled Components
  const theme = useTheme();

  const DarkModeSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#333',
      },
    },
  }));

  return (
    <Box
      className={`calculator-container ${darkMode ? 'dark-mode' : ''}`}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 4,
        padding: 2,
      }}
    >
      {/* Input Section */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Diet Calculator</Typography>
          <FormControlLabel
            control={
              <DarkModeSwitch
                checked={darkMode}
                onChange={handleDarkModeToggle}
                icon={<WbSunnyIcon />}
                checkedIcon={<DarkModeIcon />}
              />
            }
            label=""
          />
        </Box>

        {/* Gender Selection */}
        <ToggleButtonGroup
          value={gender}
          exclusive
          onChange={handleGenderChange}
          sx={{ marginTop: 2 }}
        >
          <ToggleButton value="male">Male</ToggleButton>
          <ToggleButton value="female">Female</ToggleButton>
        </ToggleButtonGroup>

        {/* Age, Weight, Height Inputs */}
        <Box sx={{ marginTop: 2 }}>
          <TextField
            label="Age"
            type="number"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Weight (kg)"
            type="number"
            fullWidth
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Height (cm)"
            type="number"
            fullWidth
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          {/* Activity Level */}
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="activity-label">Activity Level</InputLabel>
            <Select
              labelId="activity-label"
              value={activityLevel}
              label="Activity Level"
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <MenuItem value={1.2}>Sedentary (Little or no exercise)</MenuItem>
              <MenuItem value={1.375}>Lightly active (Light exercise 1-3 days/week)</MenuItem>
              <MenuItem value={1.55}>Moderately active (Moderate exercise 3-5 days/week)</MenuItem>
              <MenuItem value={1.725}>Very active (Hard exercise 6-7 days/week)</MenuItem>
              <MenuItem value={1.9}>Extra active (Very hard exercise & physical job)</MenuItem>
            </Select>
          </FormControl>

          {/* Goal Selection */}
          <ToggleButtonGroup
            value={goal}
            exclusive
            onChange={handleGoalChange}
            sx={{ marginBottom: 2 }}
          >
            <ToggleButton value="lose">Lose Weight</ToggleButton>
            <ToggleButton value="maintain">Maintain Weight</ToggleButton>
            <ToggleButton value="gain">Gain Weight</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      {/* Result Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: darkMode ? '#333' : '#f5f5f5',
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Your Results
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Basal Metabolic Rate (BMR):
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          {calculateBMR().toFixed(2)} kcal/day
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Total Daily Energy Expenditure (TDEE):
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          {calculateTDEE().toFixed(2)} kcal/day
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Suggested Calorie Intake to {goal}:
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff6b6b' }}>
          {calculateCalories().toFixed(2)} kcal/day
        </Typography>
      </Box>
    </Box>
  );
};

export default DietCalculator;

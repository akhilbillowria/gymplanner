// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/ModernNavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import DietPlan from './components/DietPlan/DietPlan';
import GymPlanner from './components/GymPlanner';
import YogaPantsPage from './components/YogaPants/YogaPantsPage'; // Import the new Yoga Pants page
import Signup from './components/Login/Signup'; // Import Signup component
import Login from './components/Login/Login'; // Import Login component
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute component
import DietCalculator from './components/DietPlan/DietCalculator';
import ArticlesPage from './components/Dashboard/ArticlesPage';
import Exercises from './components/Exercises';
function App() {
  return (
    <Router>
              <Navbar /> {/* Navbar will have access to authentication state */}

      <AuthProvider> {/* Provides authentication context to the entire app */}
        <div >
          <Routes>
            {/* Public Routes */}

            {/* Protected Routes */}
            <Route path="/" element={      
                <Home />
            } /> {/* Home Page - Protected */}
            <Route path="/login" element={<Login />} /> {/* Login Page */}
            <Route path="/signup" element={<Signup />} /> {/* Signup Page */}

            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } /> {/* Dashboard - Protected */}
            <Route path="/diet-plan" element={
              <PrivateRoute>
                <DietPlan />
              </PrivateRoute>
            } /> {/* Diet Plan - Protected */}
            <Route path="/gym-planner" element={
              <PrivateRoute>
                <GymPlanner />
              </PrivateRoute>
            } /> {/* Gym Planner - Protected */}
            <Route path="/yoga-pants" element={
              <PrivateRoute>
                <YogaPantsPage />
              </PrivateRoute>
            } /> {/* Yoga Pants Page - Protected */}

            {/* Redirect any unknown routes to home or login based on authentication */}
            <Route path="/diet-calculator" element={< DietCalculator/>} />
            
              
           
            <Route path="/articles" element={<PrivateRoute><ArticlesPage /></PrivateRoute>} />
            <Route path="/exercises" element={ <PrivateRoute><Exercises /></PrivateRoute>} />

          </Routes>
        </div>
        <Footer /> {/* Footer */}
      </AuthProvider>
    </Router>
  );
}

export default App;

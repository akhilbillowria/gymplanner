// src/components/Login/Login.js

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Signup.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Clear the login form when the component loads or refreshes
  useEffect(() => {
    setEmail(''); // Clear email field
    setPassword(''); // Clear password field
    setError(''); // Clear any error message
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password); // Use state values for email and password
      navigate('/'); // Redirect to home page after successful login
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <h2 className="auth-header">Log In</h2>
      {error && <div className="auth-error">{error}</div>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button disabled={loading} className="auth-button" type="submit">
          Log In
        </button>
      </form>
      <div className="auth-footer">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;

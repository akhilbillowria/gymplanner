// src/components/Signup/Signup.js

import React, { useRef, useState } from 'react';
import { useAuth } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Signup.css';

const Signup = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Validate passwords match
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
      );
      navigate('/'); // Redirect to home page
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <div className="auth-container">
      <h2 className="auth-header">Sign Up</h2>
      {error && <div className="auth-error">{error}</div>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" ref={usernameRef} required />

        <label>Email</label>
        <input type="email" ref={emailRef} required />

        <label>Password</label>
        <input type="password" ref={passwordRef} required />

        <label>Confirm Password</label>
        <input type="password" ref={passwordConfirmRef} required />

        <button disabled={loading} className="auth-button" type="submit">
          Sign Up
        </button>
      </form>
      <div className="auth-footer">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Signup;

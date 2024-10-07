import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setEmail('');
    setPassword('');
    setError('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
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
        <div className="input-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="password">Password</label>
        </div>
        <button disabled={loading} className="auth-button" type="submit">
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      <div className="auth-footer">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../apis/auth';
import { isAuthenticated } from '../../store/auth/authAPI';
import './Login.css';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const dispatch = useDispatch();
  
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await login(email, password);
            if (response.error) {
                setError(response.error);
                setSuccessMessage('');
            } else {
                setError('');
                setSuccessMessage('Login successful!');
                // Perform necessary actions on successful login
                localStorage.setItem('authenticated', 'true');
                dispatch(isAuthenticated());
                setTimeout(() => {
                    window.location.href = '/';
                  }, 1000);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            
        }
    };


    return (
     <div className="login">
      <div className="login-box">
        <div className="login-message">
          <h1>Sign In</h1>
        </div>
        {error && <div className="error" style={{'color': 'red'}}>{error}</div>}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <div className='login-form-password-text'>
              <label htmlFor="password">Password</label>
              <p onClick={() => alert('Try to remember your password.')}>Forgot your password?</p>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            Sign In
          </button>
        </form>

        <h4>
        Don't have an account? Sign up <a href="/register">here</a>.
      </h4>
      <p>
        By clicking Sign In, you agree to our <a className='about-link' href='/about'>Terms</a>, <a className='about-link' href='/about'>Privacy Policy</a> and Cookies
        Policy.
      </p>
      </div>

    </div>
    )
};


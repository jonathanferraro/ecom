import React, { useEffect, useState } from 'react';
import { register } from '../../apis/auth';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectRegisterError } from '../../store/auth/authSlice';


import './Register.css';


export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [f_name, setF_name] = useState('');
    const [l_name, setL_name] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match')
        } else {
            setError('');
            try {
                const response = await register({email, password, l_name, f_name});
                if (response.error) {
                    setError(response.error);
                } else {
                    setError('');
                    // Perform necessary actions on successful login
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error logging in:', error);
            }
        }
    };


    return (
        <div className="registration">
        <div className="register-box">
          <div className="register-message">
            <h1>Sign Up</h1>
            <h3>It's quick and easy.</h3>
          </div>
          {error && (
            <div className="password-error">
              <p style={{"color": "red"}} className="error-text">{error}</p>
            </div>
          )}
  
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="f_name">First Name</label>
              <input
                type="text"
                id="f_name"
                placeholder="First Name"
                value={f_name}
                required
                onChange={(e) => setF_name(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="l_name">Last Name</label>
              <input
                type="text"
                id="l_name"
                placeholder="Last Name"
                value={l_name}
                required
                onChange={(e) => setL_name(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="register-button" type="submit">
              Register
            </button>
          </form>
          <p>By clicking Sign In, you agree to our <a className='about-link' href='/about'>Terms</a>, <a className='about-link' href='/about'>Privacy Policy</a> and Cookies
        Policy.</p>
        </div>
      </div>
    )
};


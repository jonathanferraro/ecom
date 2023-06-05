import React, { useState } from 'react';

import { login } from '../../apis/auth';

import './Login.css';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await login(username, password);
            if (response.error) {
                setError(response.error);
                setSuccessMessage('');
            } else {
                setError('');
                setSuccessMessage('Login successful!');
                // Perform necessary actions on successful login
            }
        } catch (error) {
            console.error('Error logging in:', error);
            
        }
    };

    return (
        <div className='login'>
            <div className='login-box'>
                <div className='login-message'>
                    <h1>Sign In</h1>
                </div>
                {error && <div style={{'color': 'red'}}>{error}</div>}
                {successMessage && <div>{successMessage}</div>}
                <form className='login-form' onSubmit={handleLogin}>
                    <div className='username-field'>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='password-field'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className='login-button' type="submit">Sign In</button>
                </form>
            </div>
            <h4>Don't have an account? Sign up <a href='register'>here</a>.</h4>
            <p>By clicking Sign In, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
        </div>
    )
};


import React, { useState } from 'react';

import './Register.css';

export function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };



    return (
        <div className='registration'>
            <div className='register-box'>
                <div className='register-message'>
                    <h1>Sign Up</h1>
                    <h3>It's quick and easy.</h3>
                </div>
                <form className='registration-form' onSubmit={handleSubmit}>
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
                    <button className='register-button' type="submit">Register</button>
                </form>
            </div>
            <p>By clicking Register, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
        </div>
    )
};


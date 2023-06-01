import React, { useState } from 'react';

// import { registerUser } from '../../apis/register';
import { register } from '../../store/auth/authAPI';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';



import './Register.css';

export function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password === confirmPassword){
            setPasswordError('');
            dispatch(register({username, password}));
            navigate('/');
            
        } else {
            setPasswordError('Passwords do not match')
        }
        
    };


    return (
        <div className='registration'>
            <br/>
            {username}
            <br/>
            {password}
            <br/>
            {confirmPassword}
            <div className='register-box'>
                <div className='register-message'>
                    <h1>Sign Up</h1>
                    <h3>It's quick and easy.</h3>
                </div>
                {passwordError && <div className='password-error'>
                    <p style={{'color': 'red'}}>{passwordError}</p>
                </div>}
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
                    <div className='password-field'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input 
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className='register-button' type="submit">Register</button>
                </form>
            </div>
            <p>By clicking Register, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
        </div>
    )
};


import React, { useState } from 'react';

// import { registerUser } from '../../apis/register';
import { register } from '../../store/auth/authAPI';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';



import './Register.css';

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [f_name, setF_name] = useState('');
    const [l_name, setL_name] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!f_name || !l_name) {
            setNameError('First Name and Last Name required')
        }
        
        else if (password !== confirmPassword) {
            setPasswordError('Passwords do not match')
        } else {   

            setPasswordError('');
            dispatch(register({email, password, l_name, f_name}));
            navigate('/login');
        }
        
    };


    return (
        <div className='registration'>
            <br/>
            {f_name}
            <br/>
            {l_name}
            <br/>
            {email}
            <br/>
            {password}
            <br/>
            {confirmPassword}
            <div className='register-box'>
                <div className='register-message'>
                    <h1>Sign Up</h1>
                    <h3>It's quick and easy.</h3>
                </div>
                {nameError && 
                    <div className='password-error'>
                        <p style={{'color': 'red'}}>{nameError}</p>
                    </div>
                }
                {passwordError && 
                    <div className='name-error'>
                        <p style={{'color': 'red'}}>{passwordError}</p>
                    </div>}
                <form className='registration-form' onSubmit={handleSubmit}>

                    <div className='frst-name-field'>
                        <label htmlFor="f_name">First Name</label>
                        <input 
                            type="text"
                            id="f_name"
                            placeholder='First Name'
                            value={f_name}
                            onChange={(e) => setF_name(e.target.value)}
                        />
                    </div>
                    <div className='last-name-field'>
                        <label htmlFor="l_name">Last Name</label>
                        <input 
                            type="text"
                            id="l_name"
                            placeholder='Last Name'
                            value={l_name}
                            onChange={(e) => setL_name(e.target.value)}
                        />
                    </div>
                    <div className='email-field'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            placeholder='email@email.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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


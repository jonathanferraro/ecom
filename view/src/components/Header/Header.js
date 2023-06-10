import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from '../../store/auth/authSlice';
import { isAuthenticated } from '../../store/auth/authAPI';

import { logout } from '../../apis/auth';

import './Header.css';

export function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authenticated = useSelector(selectAuthenticated)


    const logoutHandler = () => {
        logout();
        localStorage.removeItem('authenticated'); // Remove the authentication status from localStorage
        dispatch(isAuthenticated()); // Update the authenticated state immediately
        navigate('/');
    }
    
    useEffect(() => {
        dispatch(isAuthenticated());
    }, []);

    return (
        <div className='header'>
            <div className='logo'>
                <img src="https://d.newsweek.com/en/full/2074886/gray-squirrel.webp?w=1600&h=900&q=88&f=cc2f2cf11ed100e026691bda1e513c48" 
                alt="Logo" 
                onClick={() => {navigate('/')}} 
                />
            </div>
            <div>
                potential search bar
            </div>

            <div>
                {authenticated ? (<div>Logged IN</div>) : (<div>Logged OUT</div>)}
            </div>

            <div>
                <button onClick={() => window.location.href = '/cart'}>Cart</button>
            </div>
            {authenticated ? (
                <button onClick={logoutHandler}>Logout</button>
                ) : (
                    <button onClick={() => navigate('/login')}>Hello, Sign In</button>
                )}
        </div>
    );
};
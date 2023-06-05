import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../apis/auth';
import { isAuthenticated } from '../../apis/auth';

import './Header.css';

export function Header() {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    const checkAuthentication = async () => {
        try {
            const result = await isAuthenticated();
            setAuthenticated(result);
        } catch (error) {
            console.error('Error checking authentication status:', error);
            setAuthenticated(false);
        }
    };

    const logoutHandler = () => {
        logout();
        localStorage.removeItem('authenticated'); // Remove the authentication status from localStorage
        setAuthenticated(false); // Update the authenticated state immediately
        navigate('/');
    }

    useEffect(() => {
        const storedAuthenticated = localStorage.getItem('authenticated'); // Retrieve the authentication status from localStorage
        if (storedAuthenticated === 'true') {
            setAuthenticated(true);
        } else {
            checkAuthentication();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('authenticated', authenticated); // Store the authentication status in localStorage
    }, [authenticated]);
    

    return (
        <div className='header'>
            <div className='logo'>
                <img src="https://d.newsweek.com/en/full/2074886/gray-squirrel.webp?w=1600&h=900&q=88&f=cc2f2cf11ed100e026691bda1e513c48" 
                alt="Logo" 
                onClick={() => {navigate('/')}} 
                />
            </div>
            <div>
                search bar
            </div>

            <div>
                {authenticated ? (<div>Logged IN</div>) : (<div>Logged OUT</div>)}
            </div>

            <div>
                <button onClick={() => navigate('/cart')}>Cart</button>
            </div>
            <div>
                <button onClick={logoutHandler}>Logout</button>
            </div>
            <div>
                <button onClick={() => navigate('/login')}>Hello, Sign In</button>
            </div>
        </div>
    );
};
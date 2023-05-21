import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

export function Header() {
    const navigate = useNavigate(); 

    

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
                Cart
            </div>
            <div>
                <button onClick={() => navigate('/register')}>Register</button>
            </div>
            <div>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
    );
};
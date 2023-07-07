import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from '../../store/auth/authSlice';
import { isAuthenticated } from '../../store/auth/authAPI';
import { logout } from '../../apis/auth';
import { CartSidebar } from '../CartSidebar/CartSidebar';
import { ProfileDropdown } from '../ProfileDropdown/ProfileDropdown';

import shamazonLogo from '../../shamazon3.png';
import './Header.css';

export function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authenticated = useSelector(selectAuthenticated);

    const logoutHandler = () => {
        logout();
        localStorage.removeItem('authenticated'); // Remove the authentication status from localStorage
        dispatch(isAuthenticated()); // Update the authenticated state immediately
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    }
    
    useEffect(() => {
        dispatch(isAuthenticated());
    }, []);

    const handleCategoryNavigate = (e) => {
        const category = e.target.dataset.category;
        navigate(`/categories/${category}`)
    };


    return (
        <div className='header'>
            <div className='top-header'>
                <div className='logo'>
                    <img src={shamazonLogo} 
                    alt="Logo" 
                    onClick={() => {navigate('/')}} 
                    />
                </div>
                <div>
                    <p>potential search bar</p>
                </div>

                <div>
                    <p>{authenticated ? (<div>Logged IN</div>) : (<div>Logged OUT</div>)}</p>
                </div>
    

                {authenticated && <ProfileDropdown />}

                {!authenticated && 
                        <button onClick={() => navigate('/login')}>Hello, Sign In</button>
                    }
            
                <CartSidebar />
            </div>

            <div className='nav-header'>
                <p className='nav-header-link' data-category='all' onClick={handleCategoryNavigate}>All Products</p>
                <p className='nav-header-link' data-category='clothing' onClick={handleCategoryNavigate}>Clothing</p>
                <p className='nav-header-link' data-category='electronics' onClick={handleCategoryNavigate}>Electronics</p>
                <p className='nav-header-link' data-category='home_furniture' onClick={handleCategoryNavigate}>Home Furniture</p>
                <p className='nav-header-link' data-category='outdoors' onClick={handleCategoryNavigate}>Outdoors</p>
            </div>
        </div>
    );
};
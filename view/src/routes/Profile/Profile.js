import React, { useState, useEffect } from 'react';
import './Profile.css';

import { getUser } from '../../apis/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../apis/auth';
import { isAuthenticated } from '../../store/auth/authAPI';

export function Profile() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            const userDetails = await getUser();
            setUser(userDetails);
            console.log('the user data:', user);
        };
        fetchData();
    }, []);

    const logoutHandler = () => {
        logout();
        localStorage.removeItem('authenticated'); // Remove the authentication status from localStorage
        dispatch(isAuthenticated()); // Update the authenticated state immediately
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    }

    return (
        <div className='profile-component'>
            <div className='profile'>
                <div className='account-info'>
                    <h1>ACCOUNT INFO</h1>
                    <div className='account-info-details'>
                        <p className='account-info-details-label'>NAME:</p>
                        <p>{user.f_name} {user.l_name}</p>
                        <p className='account-info-details-label'>EMAIL:</p>
                        <p>{user.email}</p>
                        <p className='account-info-details-label'>USERNAME:</p>
                        <p>{user.username ? user.username : 'None'}</p>
                        <p className='account-info-details-label'>ADDRESS:</p>
                        <p>None</p>
                    </div>
                </div>
                <div className='order-history'>
                    <h1>ORDER HISTORY</h1>
                    <div className='order-history-details'>
                        <p>No orders found</p>
                    </div>

                </div>
            </div>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
};


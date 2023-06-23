import React, { useEffect, useState, useRef } from 'react';
import './ProfileDropdown.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../apis/auth';
import { isAuthenticated } from '../../store/auth/authAPI';


export function ProfileDropdown() {
    const dispatch = useDispatch();
    const [test, setTest] = useState(false);
    const dropdownRef = useRef(null);

    const logoutHandler = () => {
        logout();
        localStorage.removeItem('authenticated'); 
        dispatch(isAuthenticated()); 
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    }

  
    const toggleDropdown = () => {
      setTest(!test);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTest(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  
    return (
      <div className="profile-dropdown" data-cart-dropdown ref={dropdownRef}>
        <button className="link" data-dropdown-button onClick={toggleDropdown}>
          Account
        </button>
  
        <div
          className={`profile-dropdown-menu ${test ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          
          <div className="profile-dropdown-link">
            <p onClick={() => (window.location.href = '/profile')}>
              Profile
            </p>
          </div>

          <div className="profile-dropdown-link">
            <p onClick={logoutHandler}>
              Logout
            </p>
          </div>

        </div>
      </div>
    );
  }
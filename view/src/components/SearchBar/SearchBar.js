import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.css';

import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/products/Products.reducers';


export function SearchBar() {
    const [test, setTest] = useState(false);
    const dropdownRef = useRef(null);
    const products = useSelector(selectProducts);
    






  
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
          <p>SearchBarHere</p>
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
            <p>
              Logout
            </p>
          </div>

        </div>
      </div>
    );
};


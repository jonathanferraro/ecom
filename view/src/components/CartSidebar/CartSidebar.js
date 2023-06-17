import React, { useEffect, useState, useRef } from 'react';
import './CartSidebar.css'

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCart } from '../../store/cart/Cart.reducers';
import { loadCart } from '../../store/cart/Cart.API';


export function CartSidebar() {
    const [test, setTest] = useState(false);
    const dropdownRef = useRef(null);
  
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
      <div className="cart-dropdown" data-cart-dropdown ref={dropdownRef}>
        <button className="link" data-dropdown-button onClick={toggleDropdown}>
          Cart
        </button>
  
        <div
          className={`cart-dropdown-menu ${test ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="dropdown-header">
            <p>Cart</p>
            <p>Total: $$$</p>
          </div>
          <div className="dropdown-cart-items">
            <p>content</p>
          </div>
          <div className="dropdown-checkout">
            <button onClick={() => (window.location.href = '/cart')}>
              Go To Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }

import React, { useEffect, useState, useRef } from 'react';
import './CartSidebar.css'

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCart } from '../../store/cart/Cart.reducers';
import { loadCart } from '../../store/cart/Cart.API';


export function CartSidebar() {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCart);
    const [test, setTest] = useState(false);
    const dropdownRef = useRef(null);
    const [cartPriceTotal, setCartPriceTotal] = useState(0);
  
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

    useEffect(() => {
      dispatch(loadCart());
    }, []);

    useEffect(() => {
      calculateCartTotal();
    }, [cartProducts]);

    const calculateCartTotal = () => {
      let total = 0;
      Object.values(cartProducts).forEach((product) => {
        total += (Number(product.price) * Number(product.quantity));
      });
  
      setCartPriceTotal(total);
    };
  
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
            <p>Subtotal: $ {cartPriceTotal.toFixed(2)}</p>
          </div>
          <div className="dropdown-cart-items">
         { Object.values(cartProducts).map((product) => ( 
          <div className='cart-dropdown-item-container'>
            <p>{product.quantity}x</p>
            <img src={product.image_url} alt='product'/>
            <div className='dropdown-cart-item-info'>
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
          </div>
          ))}
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

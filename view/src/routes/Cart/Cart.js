import React, { useEffect, useState } from 'react';
import { CartProductCard } from '../../components/CartProductCard/CartProductCard';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from '../../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { selectCart, selectCartError } from '../../store/cart/Cart.reducers';
import { loadCart } from '../../store/cart/Cart.actions';

export function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCart);
    const authenticated = useSelector(selectAuthenticated);
    const [cartPriceTotal, setCartPriceTotal] = useState(0);

    useEffect(() => {
        dispatch(loadCart());
    }, []);

    useEffect(() => {
        calculateCartTotal();
    }, [cartProducts]);

    const calculateCartTotal = () => {
        let total = 0;
        Object.values(cartProducts).forEach((product) => {
            total += Number(product.price)
        });

        setCartPriceTotal(total);
    }



    
    if (!authenticated) {
        return (
            <div className="empty-cart">
                <h1>Your shopping cart is empty</h1>
                <div className="button-group">
                    <button className="sign-in-button" onClick={() => navigate('/login')}>
                    Sign in to your account
                    </button>
                    <button className="sign-up-button" onClick={() => navigate('/register')}>
                    Sign up now
                    </button>
                </div>
            </div>
        )
    }

  

    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            <h2 className='cart-price'>Price</h2>
            <div className='cart-products'>
                {Object.values(cartProducts).map((product) => (
                    <CartProductCard
                        name={product.name}
                        url={product.image_url}
                        price={product.price}
                        quantity={product.quantity}
                    />
                ))}
            
                

            </div>
            <button className='cart-check-out-button'>Check Out</button>
            <p>{cartPriceTotal}</p>
        </div>
    )
};
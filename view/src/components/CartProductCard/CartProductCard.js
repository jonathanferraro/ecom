import React from 'react';
import { useNavigate } from 'react-router-dom';

import './CartProductCard.css';

export function CartProductCard(props) {
    const {name, url} = props;



    return (
        <div className='cart-product-card'>
            <div className='cart-product-card-image'>
                <img 
                    src={url}
                />
            </div>
            <div className='cart-product-card-details'>
                <h3 className='cart-product-card-name'>{name}</h3>
                <p className='cart-product-card-in-stock'>In Stock</p>
                <p className='cart-product-card-quantity'>Quantity: 5</p>
            </div>
            <div className='cart-product-card-price'>
                <p>$24.99</p>
            </div>
        </div>
    )
};
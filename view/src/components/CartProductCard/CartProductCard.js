import React from 'react';
import { useNavigate } from 'react-router-dom';

import './CartProductCard.css';

export function CartProductCard(props) {
    const {name, url, price, id, quantity} = props;
    console.log('quantity', quantity)
    console.log('url', url)


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
                <p className='cart-product-card-quantity'>Quantity: {quantity}</p>
            </div>
            <div className='cart-product-card-price'>
                <p>{price}</p>
            </div>
        </div>
    )
};
import React, { useState } from 'react';
import { CartProductCard } from '../../components/CartProductCard/CartProductCard';

import './Cart.css';

export function Cart() {
    const testProductList = {1: {name: 'shirt1', description: 'cool shirt'}, 2: {name: 'shirt2', description: 'cool shirt'}, 3: {name: 'shirt3', description: 'cool shirt'}, 4: {name: 'shirt4', description: 'cool shirt'}}

    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            <h2 className='cart-price'>Price</h2>
            <div className='cart-products'>
                {Object.values(testProductList).map((product) => (
                    <CartProductCard
                        name={product.name}
                        url={'https://d.newsweek.com/en/full/2074886/gray-squirrel.webp?w=1600&h=900&q=88&f=cc2f2cf11ed100e026691bda1e513c48'}
                    />
                ))}
            </div>
            <button className='cart-check-out-button'>Check Out</button>
        </div>
    )
};
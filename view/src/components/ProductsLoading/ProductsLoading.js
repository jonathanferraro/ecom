import React from 'react';
import './ProductsLoading.css'

export function ProductsLoading() {

    return (
        <div className='products-loading'>
            <h1>Searching for products...</h1>
            <p>Please be patient</p>
            <img src='http://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif' />

        </div>
    )
}
import React from 'react';
import './ProductCard.css';


export function ProductCard(props) {
    const {name, description, url} = props;
    

    return (
        <div className='product-card'>
            <img className='product-image' src={url} alt={name}/>
            <h3 className='product-name'>{name}</h3>
            <p className='product-description'>{description}</p>
            <p>$24.99</p>
            <button className='product-add-to-cart'>Add To Cart</button>
        </div>
    )
};
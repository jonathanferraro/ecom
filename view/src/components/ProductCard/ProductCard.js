import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';


export function ProductCard(props) {
    const {name, description, url, id} = props;
    const navigate = useNavigate();
    

    return (
        <div className='product-card'>
            <img 
                className='product-image' 
                src={url}
                alt={name}
                onClick={() => navigate(`/products/${id}`)}
             />
            <h3 onClick={() => navigate(`/products/${id}`)} className='product-name' >{name}</h3>
            <p className='product-price' onClick={() => navigate(`/products/${id}`)}>$24.99</p>
            <button className='product-add-to-cart'>Add To Cart</button>
        </div>
    )
};
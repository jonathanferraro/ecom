import React from 'react';
import { editCart } from '../../apis/cart';
import { loadCart } from '../../store/cart/Cart.API';
import { useDispatch } from 'react-redux';

import './CartProductCard.css';


export function CartProductCard(props) {
    const {name, url, price, id, quantity, onDelete} = props;
    const dispatch = useDispatch();
    const test = [1,2,3,4,5,6,7,8,9];

    const editCartHandler = async (e) => {
        const quantity = e.target.value;
        console.log(e.target.value);
        await editCart({ product_id: id, quantity });
        dispatch(loadCart());
    };

    const deleteCartItemHandler = () => {
        onDelete(id);
    }

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
            <div>
                <select onChange={editCartHandler}>
                    {
                       test.map((num) => 
                        num === quantity ?
                        (
                            <option key={num} value={num} selected >{num}</option>
                       )
                       :
                       (
                        <option key={num} value={num} >{num}</option>
                    )
                       )
                    }
                </select>
            </div>
            <div>
                <button onClick={deleteCartItemHandler}>Delete</button>
            </div>
            <div className='cart-product-card-price'>
                <p>{price}</p>
            </div>
        </div>
    )
};
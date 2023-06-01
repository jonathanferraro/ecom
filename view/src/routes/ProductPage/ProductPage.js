import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../../store/products/Products.reducers';
import { loadProducts } from '../../store/products/Products.actions';

import './ProductPage.css';

export function ProductPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector(selectProducts)[id];
  
    useEffect(() => {
      dispatch(loadProducts());
    }, []);
  
    return (
      <div>
        {product ? (
          <div className='product-page'>
            <h2>{product.name}</h2>
            <div className='product-page-body'>
                <div className='product-page-image'>
                    <img src={product.image_url} alt={product.name} />
                </div>
                <div className='product-page-info'>
                    <div className='product-page-purchase'>
                        <h2>{product.name}</h2>
                        <h3>$24.99</h3>
                        <button>Add to Cart</button>
                    </div>
                    <div className='product-page-description-container'>
                        <h4>Description</h4>
                        <p className='product-page-description'>{product.description}</p>
                    </div>
                </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  


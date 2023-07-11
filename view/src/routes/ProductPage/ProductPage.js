import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../../store/products/Products.reducers';
import { loadProducts } from '../../store/products/Products.actions';
import { addToCart } from '../../apis/cart';
import { selectAuthenticated } from '../../store/auth/authSlice';

export function ProductPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authenticated = useSelector(selectAuthenticated)
    const { id } = useParams();
    const product = useSelector(selectProducts)[id];
    const [addedToCart, setAddedToCart] = useState(false);
  
    useEffect(() => {
      dispatch(loadProducts());
    }, []);

    const addToCartHandler = async () => {
      if (authenticated) {
        await addToCart(id);
        setAddedToCart(true);
      } else {
        navigate('/login')
      }

    };
  
    return (
      <div>
        <div className='product-page-back-button'>
          <button onClick={() => navigate('/')}>{'<'}  Continue Shopping</button>
        </div>
        {product ? (
          <div className='product-page'>
            
            <div className='product-page-body'>
                <div className='product-page-image'>
                    <img src={product.image_url} alt={product.name} />
                </div>
                <div className='product-page-info'>
                    <div className='product-page-purchase'>
                        <h2>{product.name}</h2>
                        <h3>${product.price}</h3>
                        {!addedToCart? 
                          <button onClick={addToCartHandler}>Add to Cart</button>
                          :
                        (<button className="product-add-to-cart" style={{"background-color": "green", "color": 'white'}}>
                          Added to cart!
                        </button>)
                      }
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
  


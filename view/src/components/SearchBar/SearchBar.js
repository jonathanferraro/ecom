import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.css';

import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/products/Products.reducers';
import { useNavigate } from 'react-router-dom';


export function SearchBar() {
    const [test, setTest] = useState(false);
    const dropdownRef = useRef(null);
    const products = useSelector(selectProducts);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchProducts, setSearchProducts] = useState([]);
    const navigate = useNavigate()


    const filterProducts = () => {
        Object.values(products).forEach((product) => {
            const name = product.name.toLowerCase();
            // const desc = product.description;
            if (name.includes(searchTerm.toLowerCase())) {
                setSearchProducts((prevSearchProducts) => [...prevSearchProducts, product]);
            }
        })
    };

    useEffect(() => {
        setSearchProducts([]);

        filterProducts();
        console.log(searchProducts)
    }, [searchTerm]);

  
    const toggleDropdown = () => {
      setTest(!test);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTest(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  
    return (
      <div className="profile-dropdown" data-cart-dropdown ref={dropdownRef}>
        <button className="link" data-dropdown-button onClick={toggleDropdown}>
        <input
              type="email"
              placeholder="Search For Products"
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
            />
        </button>
  
        { (searchProducts.length > 0 && searchTerm) ? 
        
          (<div
            className={`profile-dropdown-menu ${test ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >


          {<div className='search-bar-items'>
            {searchProducts.map((product) => (
              <div className='search-bar-product-card' onClick={() => window.location.href = `/products/${product.id}`}>
                  <img src={product.image_url}/>
                  <p>{product.name}</p>
              </div>
            ))}
          </div>}

          </div>)
        
        : 
        
          (<div
            className={`profile-dropdown-menu ${test ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >

            {<div className='search-bar-items'>
                <div  >
                  <p>No products found.</p>
                </div>
            </div>}
          </div>)
        }
      </div>
    );
};


import React, { useState, useEffect } from "react";
import { selectProducts } from "../../store/products/Products.reducers";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/products/Products.actions";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";

import '../Products/Products.css';
import './ProductCategories.css'


export const ProductCategories = () => {
  const { category } = useParams()
  const productList = useSelector(selectProducts);
  const dispatch = useDispatch();
  let categoryName = '';

  const formatCategoryName = (str) => {
    let firstLetter = true;
    for (let i = 0; i < str.length; i++) {
      if (firstLetter) {
        categoryName += str[i].toUpperCase();
        firstLetter = false;
      } else if (/\p{L}/u.test(str[i])) {
        categoryName += str[i];
      }  else {
        categoryName += ' '
        firstLetter = true;
      }
    }
  }

  formatCategoryName(category);

  useEffect(() => {
    dispatch(loadProducts());

  }, []);

  return (
    <div>
        <h1 className="category-title">{category === 'all' ? 'All Products' : categoryName}</h1>
        <div className="all-products">
        {Object.values(productList).map((product) => {
          if (category === 'all' || product.category === category) {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                url={product.image_url}
                price={product.price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
import React, { useState, useEffect } from "react";
import { selectProducts } from "../../store/products/Products.reducers";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/products/Products.actions";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import { selectUser } from "../../store/auth/authSlice";

import '../Products/Products.css';


export const ProductCategories = () => {
  const { category } = useParams()
  const productList = useSelector(selectProducts);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div>

        <p>TEST</p>
        {category}

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

      <p>TEST</p>

    </div>
  );
};
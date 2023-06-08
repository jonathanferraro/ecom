import React, { useState, useEffect } from "react";
import { selectProducts } from "../../store/products/Products.reducers";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/products/Products.actions";
import { ProductCard } from "../../components/ProductCard/ProductCard";

import { selectUser } from "../../store/auth/authSlice";

import './Products.css';

export const Products = () => {
  const [error, setError] = useState();
  const productList = useSelector(selectProducts);
  const dispatch = useDispatch();

  const user = useSelector(selectUser);


  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div>
      {user && user.username}
      {error && <p style={{ color: "red" }}>{error}</p>}


      <div className="all-products">
        {Object.values(productList).map((product) => (
            
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              url={product.image_url}
              price={product.price}
            />

        ))}
      </div>
    </div>
  );
};

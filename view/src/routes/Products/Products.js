import React, { useState, useEffect } from "react";
import { selectProducts } from "../../store/products/Products.reducers";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/products/Products.actions";
import { ProductCard } from "../../components/ProductCard/ProductCard";

import './Products.css';


export const Products = () => {
  const [error, setError] = useState();
  const productList = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div>
      <h1>Products Component test</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}


      <div className="all-products">
        {Object.values(productList).map((product) => (

            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              url={product.image_url}
            />

        ))}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { selectProducts } from "../../store/products/Products.reducers";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/products/Products.actions";


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


      <ul>
        {Object.values(productList).map((product) => (
          <li key={product.id}>
            {product.name}
            <br />
            {product.description}
            <br/>
            <img src={product.image_url}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

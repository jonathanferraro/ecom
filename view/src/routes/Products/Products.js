import React, { useEffect } from "react";
import { selectProducts } from "../../store/products/Products.reducers";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/products/Products.actions";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { selectProductsStatus } from "../../store/products/Products.reducers";
import { ProductsLoading } from "../../components/ProductsLoading/ProductsLoading";

import './Products.css';

export const Products = () => {
  const productList = useSelector(selectProducts);
  const dispatch = useDispatch();
  const productsStatus = useSelector(selectProductsStatus);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div>
      {productsStatus === 'pending'  ? 
        <ProductsLoading />
        :

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
      }
    </div>
  );
};

import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../apis/cart";

export function ProductCard(props) {
  const { name, url, id, price } = props;
  const navigate = useNavigate();

  const addToCartHandler = () => {
    addToCart(id);
  };

  return (
    <div className="product-card">
      <img
        className="product-image"
        src={url}
        alt={name}
        onClick={() => navigate(`/products/${id}`)}
      />
      <h3 onClick={() => navigate(`/products/${id}`)} className="product-name">
        {name}
      </h3>
      <p className="product-price" onClick={() => navigate(`/products/${id}`)}>
        {price}
      </p>
      <button onClick={addToCartHandler} className="product-add-to-cart">Add To Cart</button>
    </div>
  );
}

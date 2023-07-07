import React, { useState } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../apis/cart";
import { useSelector } from "react-redux";
import { selectAuthenticated } from "../../store/auth/authSlice";

export function ProductCard(props) {
  const { name, url, id, price } = props;
  const navigate = useNavigate();
  const authenticated = useSelector(selectAuthenticated);
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCartHandler = async () => {
    if (authenticated) {
      await addToCart(id);
      setAddedToCart(true);
    } else {
      navigate('/login');
    }
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
        ${price}
      </p>
      {!addedToCart ? 
        (<button className="product-add-to-cart" onClick={addToCartHandler} >
          Add To Cart
        </button>)
        :
        (<button className="product-add-to-cart" style={{"background-color": "green"}}>
          Added to cart!
        </button>)
      }
    </div>
  );
}

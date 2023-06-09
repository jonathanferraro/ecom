import React, { useEffect, useState } from "react";
import { CartProductCard } from "../../components/CartProductCard/CartProductCard";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthenticated } from "../../store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../../store/cart/Cart.reducers";
import { loadCart } from "../../store/cart/Cart.API";
import { deleteCartItem } from "../../apis/cart";

export function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCart);
  const authenticated = useSelector(selectAuthenticated);
  const [cartPriceTotal, setCartPriceTotal] = useState(0);
  

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  useEffect(() => {
    calculateCartTotal();
  }, [cartProducts]);

  const calculateCartTotal = () => {
    let total = 0;
    Object.values(cartProducts).forEach((product) => {
      total += (Number(product.price) * Number(product.quantity));
    });

    setCartPriceTotal(total);
  };

  const deleteCartItemHandler = async (id) => {
    await deleteCartItem(id);
    window.location.href = '/cart'
  }

  if (!authenticated) {
    return (
      <div className="empty-cart">
        <h1>Your shopping cart is empty</h1>
        <div className="button-group">
          <button className="login-button" onClick={() => navigate("/login")}>
            Sign in to your account
          </button>
          <button
            className="login-button"
            onClick={() => navigate("/register")}
          >
            Sign up now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-component">
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="cart-products">
          {Object.values(cartProducts).map((product) => (
            <CartProductCard
              name={product.name}
              url={product.image_url}
              price={product.price}
              quantity={product.quantity}
              id={product.id}
              onDelete={deleteCartItemHandler}
            />
          ))}
        </div>
        <div className="order-summary-container cart-products-background">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-summary-details">
              <h4 className="order-summary-text">Subtotal: ${cartPriceTotal.toFixed(2)}</h4>
              <h4 className="order-summary-text">Shipping: See Rates</h4>
              <h4>Estimated Total: ${cartPriceTotal.toFixed(2)}</h4>
            </div>
            <button className="cart-check-out-button">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

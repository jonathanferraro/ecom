import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/Products.reducers";
import testReducer from "./testReducer";
import CartReducer from "./cart/Cart.reducers";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: CartReducer
    }
});
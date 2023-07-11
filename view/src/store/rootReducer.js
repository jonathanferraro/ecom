import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./products/Products.reducers";
import testReducer from "./testReducer";
import CartReducer from "./cart/Cart.reducers";
import AuthReducer from "./auth/authSlice";
import ReviewsReducer from  "./reviews/reviewsSlice";

export const store = configureStore({
    reducer: {
        products: ProductReducer,
        cart: CartReducer,
        auth: AuthReducer,
        reviews: ReviewsReducer,
    }
});
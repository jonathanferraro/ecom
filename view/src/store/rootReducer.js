import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/Products.reducers";
import testReducer from "./testReducer";

export const store = configureStore({
    reducer: {
        products: productReducer,
        test: testReducer
    }
});
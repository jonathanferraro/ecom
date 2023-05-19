import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCart } from "../../apis/cart";


export const loadCart = createAsyncThunk(
    'products/loadProducts',
    async () => {
        try {
            const response = await fetchCart();
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);
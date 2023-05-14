import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/products";

export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async () => {
        try {
            const response = await fetchProducts();
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);


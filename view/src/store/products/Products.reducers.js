import { createSlice } from '@reduxjs/toolkit';
import { loadProducts } from './Products.actions';

const initialState = {};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        // load product list success
            .addCase(loadProducts.fulfilled, (state, action) => {
                const products  = action.payload;
                for (const product of products) {
                  const { id } = product;
                  state[id] = product;
                }
            });
    }
});

export const selectProducts = (state) => state.products;

export default productSlice.reducer;
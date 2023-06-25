import { createSlice } from '@reduxjs/toolkit';
import { loadProducts } from './Products.actions';


const productSlice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle',
        products: {},
    },
    reducers: {},
    extraReducers: builder => {
        builder
        // load product list success
            .addCase(loadProducts.fulfilled, (state, action) => {
                const products  = action.payload;
                for (const product of products) {
                  const { id } = product;
                  state.products[id] = product;
                }
            });
    }
});

export const selectProducts = (state) => state.products.products;

export default productSlice.reducer;
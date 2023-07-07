import { createSlice } from '@reduxjs/toolkit';
import { loadProducts } from './Products.actions';


const productSlice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle', // fulfilled, pending, rejected
        products: {},
    },
    reducers: {},
    extraReducers: builder => {
        builder
        // load product list success
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                const products  = action.payload;
                for (const product of products) {
                  const { id } = product;
                  state.products[id] = product;
                }
            })
            .addCase(loadProducts.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(loadProducts.rejected, (state, action) => {
                state.status = 'rejected'
            })
    }
});

export const selectProducts = (state) => state.products.products;
export const selectProductsStatus = (state) => state.products.status;

export default productSlice.reducer;
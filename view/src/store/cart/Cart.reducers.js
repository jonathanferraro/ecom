import { createSlice } from '@reduxjs/toolkit';
import { loadCart } from './Cart.actions';

const cartSlice =  createSlice({
    name: 'cart',
    initialState: {
        cartProducts: {},
        cartError: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
        // load cart list success
            .addCase(loadCart.fulfilled, (state, action) => {
                state.cartError = null;
                const cart = action.payload;

                for (const product of cart) {
                  const { id } = product;
                  state.cartProducts[id] = product;
                }

            })
            .addCase(loadCart.rejected, (state, action) => {
                state.cartError = action.error.message;
            })
    }
});


export const selectCart = (state) => state.cart.cartProducts;
export const selectCartError = (state) => state.cart.cartError;

export default cartSlice.reducer;
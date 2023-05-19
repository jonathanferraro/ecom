import { createSlice } from '@reduxjs/toolkit';
import { loadCart } from './Cart.actions';

const initialState = {}

const cartSlice =  createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        // load cart list success
            .addCase(loadCart.fulfilled, (state, action) => {
                // const cart  = action.payload;
                // for (const product of products) {
                //   const { id } = product;
                //   state[id] = product;
                // }
            });
    }
});


export default cartSlice.reducer;
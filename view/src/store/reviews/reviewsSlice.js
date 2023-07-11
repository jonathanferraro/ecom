import { createSlice } from '@reduxjs/toolkit';
import { loadReviews } from './reviewsAPI';


const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        status: 'idle', // fulfilled, pending, rejected
        products: {},
    },
    reducers: {},
    extraReducers: builder => {
        builder

            .addCase(loadReviews.fulfilled, (state, action) => {
                // state.status = 'fulfilled'
                // const products  = action.payload;
                // for (const product of products) {
                //   const { id } = product;
                //   state.products[id] = product;
                // }
                return;
            })
            .addCase(loadReviews.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(loadReviews.rejected, (state, action) => {
                state.status = 'rejected'
            })
    }
});


export default reviewsSlice.reducer;
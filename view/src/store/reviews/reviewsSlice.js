import { createSlice } from '@reduxjs/toolkit';
import { loadReviews } from './reviewsAPI';


const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        status: 'idle', // fulfilled, pending, rejected
        reviews: {},
    },
    reducers: {},
    extraReducers: builder => {
        builder

            .addCase(loadReviews.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                const reviews  = action.payload;
                for (const review of reviews) {
                  const { id } = review;
                  state.reviews[id] = review;
                }
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

export const selectReviews = (state) => state.reviews.reviews;
export const selectReviewsStatus = (state) => state.reviews.status;

export default reviewsSlice.reducer;
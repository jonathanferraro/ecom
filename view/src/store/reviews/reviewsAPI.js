import { createAsyncThunk } from '@reduxjs/toolkit';


export const loadReviews = createAsyncThunk(
    'reviews/loadReviews',
    async () => {
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/api/reviews`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
          const data = await res.json();
          return data.data;
        } catch (error) {
          throw new Error(error.message); 
        }
      }
  );
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loadCart = createAsyncThunk(
    'cart/loadCart',
    async () => {
      try {
        const res = await fetch('http://localhost:8000/api/cart', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const data = await res.json();
        return data.data;
      } catch (error) {
        throw new Error(error.message); // Throw the error
      }
    }
  );


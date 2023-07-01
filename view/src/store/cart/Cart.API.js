import { createAsyncThunk } from "@reduxjs/toolkit";


export const loadCart = createAsyncThunk(
    'cart/loadCart',
    async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/cart`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const data = await res.json();
        console.log(data.data)
        return data.data;
      } catch (error) {
        throw new Error(error.message); // Throw the error
      }
    }
  );



import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
    'auth/register',
    async ({username, password}) => {
        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
              });
          
              if (!response.ok) {
                // Handle non-successful response
                throw new Error('Registration failed');
              }
          
              const data = await response.json();
              return data; 
        } catch (error) {
             // Handle any errors that occurred during the registration process
            console.error('Error during registration:', error);
            throw error;
        }
    }
)
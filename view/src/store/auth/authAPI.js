import { createAsyncThunk } from '@reduxjs/toolkit';


export const isAuthenticated = createAsyncThunk(
    'auth/isAuthenticated',
    async () => {

        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/status`, {
            credentials: 'include',
          });
          if (response.ok) {
            // User is authenticated
            localStorage.setItem('authenticated', 'true');
            return true;
          } else {
            // User is not authenticated
            localStorage.removeItem('authenticated');
            return false;
          }
        } catch (error) {
          // Handle any errors that occurred during the request
          console.error('Error checking authentication status:', error);
          localStorage.removeItem('authenticated');
          return false;
        }
    }
  );


  // export const register = createAsyncThunk(
//     'auth/register',
//     async ({email, password, l_name, f_name }) => {
//         try {
//             const response = await fetch('http://localhost:8000/api/register', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ email, password, l_name, f_name }),
//               });
          
//               if (!response.ok) {
//                 // Handle non-successful response
//                 const errorData = await response.json();
//                 console.log(errorData.error);
//                 return errorData.error;
//               }
          
//               const data = await response.json();
//               return data; 
//         } catch (error) {
//              // Handle any errors that occurred during the registration process
//             console.error('Error during registration:', error);
//             throw error;
//         }
//     }
// );
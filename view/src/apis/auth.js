import axios from 'axios';

// export function isAuthenticated() {
//   const authenticated = localStorage.getItem('authenticated');
//   if (authenticated) {
//     return true;
//   } else {
//     return fetch('http://localhost:8000/api/status')
//       .then(response => {
//         if (response.ok) {
//           // User is authenticated
//           localStorage.setItem('authenticated', 'true');
//           return true;
//         } else {
//           // User is not authenticated
//           localStorage.removeItem('authenticated');
//           return false;
//         }
//       })
//       .catch(error => {
//         // Handle any errors that occurred during the request
//         console.error('Error checking authentication status:', error);
//         localStorage.removeItem('authenticated');
//         return false;
//       });
//   }
// };


export const getUser = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
  
      if (!response.ok) {
        // Handle non-successful response
        const errorData = await response.json();
        console.log(errorData.error);
        return errorData;
      }
  
      const data = await response.json();
      return data.data; 
  } catch (error) {
      // Handle any errors that occurred during the registration process
      console.error('Error during get user:', error);
      throw error;
  }
};

export const register = async ({email, password, l_name, f_name }) => {
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password, l_name, f_name }),
              credentials: 'include',
            });
        
            if (!response.ok) {
              // Handle non-successful response
              const errorData = await response.json();
              console.log(errorData.error);
              return errorData;
            }
        
            const data = await response.json();
            return data; 
      } catch (error) {
           // Handle any errors that occurred during the registration process
          console.error('Error during registration:', error);
          throw error;
      }
  };

  // export const login = async (email, password) => {
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //       credentials: 'include',
  //     });
  
  //     if (response.ok) {
  //       // Login successful
  //       const data = await response.json();
  //       return data;
  //       // Handle the response data as needed
  //     } else {
  //       // Login failed
  //       // Handle the error and display an appropriate message
  //       const errorData = await response.json();
  //       console.error('Login failed:', errorData.error);
  //       return errorData;
  //     }
  //   } catch (error) {
  //     // Handle any errors that occurred during the request
  //     console.error('Error logging in:', error);
  //   }
  // };


  export const login = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
        email,
        password,
      }, {
        withCredentials: true, // Send cookies with the request
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Login successful
        return response.data;
        // Handle the response data as needed
      } else {
        // Login failed
        // Handle the error and display an appropriate message
        console.error('Login failed:', response.data.error);
        return response.data;
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error logging in:', error);
      throw error; // Throw the error to handle it in the calling code
    }
  };


  export function logout() {
    return fetch(`${process.env.REACT_APP_API_URL}/api/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
        .then(response => {
          if (response.ok) {
            // Logout successful
            localStorage.removeItem('authenticated');
            // Handle any necessary actions, such as updating the front-end state or redirecting the user
          } else {
            // Logout failed
            // Handle the error and display an appropriate message
          }
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error('Error logging out', error);
        });
  }
  


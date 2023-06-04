export function isAuthenticated() {
    return fetch('http://localhost:8000/api/status')
      .then(response => {
        if (response.ok) {
          // User is authenticated
          console.log('login success')
          return true;
        } else {
          // User is not authenticated
          return false;
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error checking authentication status:', error);
        return false;
      });
  };

  export const login = async (username, password) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Login successful
        const data = await response.json();
        // Handle the response data as needed
      } else {
        // Login failed
        // Handle the error and display an appropriate message
        const errorData = await response.json();
        console.error('Login failed:', errorData.error);
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error logging in:', error);
    }
  };


  export function logout() {
    return fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => {
          if (response.ok) {
            // Logout successful
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
  


// export function registerUser(username, password) {
//     const url = 'http://localhost:8000/api/register';
  
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password })
//     };

//     return fetch(url, requestOptions)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Registration failed in fetch');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Registration successful:', data);
//       })
//       .catch(error => {
//         console.error('Error during fetch registration:', error);
//       });
//   }
  
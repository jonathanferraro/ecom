export const addToCart = async (product_id) => {
    try {
        const response = await fetch('http://localhost:8000/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ product_id }),
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
        console.error('Error during add to cart:', error);
        throw error;
    }
}








// export const fetchCart = async () => {
//     try {
//         const res = await fetch('http://localhost:8000/api/cart',
//         {
//             'Content-Type': 'application/json',   
//         });
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         return {error};
//     };
// }
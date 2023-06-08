require('dotenv').config();
const pool = require('./database');

// const getCart = async (user_id) => {
//     const result = await pool.query(
//         'SELECT products.name, products.image_url FROM cart, products, users WHERE cart.user_id = users.id AND cart.product_id = products.id AND users.id = $1', 
//         [user_id]
//     );
//     return result.rows;
// };

// const addToCart = async (user_id, product_id) => {
//     const result = await pool.query(
//         'INSERT INTO cart (user_id, product_id) VALUES ($1, $2) RETURNING *', 
//         [user_id, product_id]
//     );
//     return result.rows;
// };

// const removeFromCart = async (user_id, product_id) => {
//     const result = await pool.query (
//         'DELETE FROM cart WHERE user_id = $1 AND product_id = $2',
//         [user_id, product_id]
//     );
//     return results.rows;
// }

const getCartByUserId = async (user_id) => {
    const result = await pool.query(
        `SELECT products.id, products.name, products.image_url, products.price, cart_items.quantity
        FROM users, products, user_cart, cart_items
        WHERE user_cart.user_id = users.id
        AND user_cart.cart_id = cart_items.cart_id
        AND cart_items.product_id = products.id
        AND users.id = $1;`,
        [user_id]
    );
    return result.rows;
}



module.exports = {
    getCartByUserId,
};

// get cart

// SELECT products.name, products.image_url, products.price
// FROM users, products, user_cart, cart_items
// WHERE user_cart.user_id = users.id
// AND user_cart.cart_id = cart_items.cart_id
// AND cart_items.product_id = products.id
// AND users.id = $1;
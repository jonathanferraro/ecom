require('dotenv').config();
const pool = require('./database');

const getCartByUserId = async (user_id) => {
    const result = await pool.query(
        `SELECT cart_id FROM user_cart WHERE user_id = $1;`,
        [user_id]
    );
    return result.rows[0];
};

const getCartItemsByUserId = async (user_id) => {
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
};

const createCart = async (user_id) => {
    const result = await pool.query(
        `INSERT INTO user_cart (user_id) VALUES ($1);`,
        [user_id]
    );

};


const addToCart = async (cart_id, product_id) => {
    const result = await pool.query(
        `INSERT INTO cart_items (cart_id, product_id, quantity)
        VALUES ($1, $2, 1)`,
        [cart_id, product_id]
    );

};

const editCartItemQuantity = async (quantity, cart_id, product_id) => {
    const result = await pool.query(
        `UPDATE cart_items
        SET quantity = $1
        WHERE cart_id = $2
        AND product_id = $3;`,
        [quantity, cart_id, product_id]
    );
};

const deleteCartItem = async (cart_id, product_id) => {
    const result = await pool.query(
        `DELETE FROM cart_items
        WHERE product_id = $1
        AND cart_id = $2`,
        [product_id, cart_id]
    );
};



module.exports = {
    getCartByUserId,
    getCartItemsByUserId,
    createCart,
    addToCart,
    editCartItemQuantity,
    deleteCartItem,
};



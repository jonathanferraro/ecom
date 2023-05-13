const pool = require('./database');

const getCart = async (user_id) => {
    const result = await pool.query(
        'SELECT products.name, products.image_url FROM cart, products, users WHERE cart.user_id = users.id AND cart.product_id = products.id AND users.id = $1', 
        [user_id]
    );
    return result.rows;
};

const addToCart = async (user_id, product_id) => {
    const result = await pool.query(
        'INSERT INTO cart (user_id, product_id) VALUES ($1, $2) RETURNING *', 
        [user_id, product_id]
    );
    return result.rows;
};

const removeFromCart = async (user_id, product_id) => {
    const result = await pool.query (
        'DELETE FROM cart WHERE user_id = $1 AND product_id = $2',
        [user_id, product_id]
    );
    return results.rows;
}



module.exports = {
    getCart,
    addToCart,
    removeFromCart,
};
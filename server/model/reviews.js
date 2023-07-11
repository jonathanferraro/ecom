require('dotenv').config();
const pool = require('./database');

const getReviews = async () => {
    const result = await pool.query("SELECT * FROM products");
    return result.rows;
  };

module.exports = {
    getReviews
}
require('dotenv').config();
const pool = require('./database');

const getReviews = async () => {
    const result = await pool.query("SELECT * FROM reviews");
    return result.rows;
  };

module.exports = {
    getReviews
}
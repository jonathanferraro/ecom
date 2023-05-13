const pool = require("./database");
require('dotenv').config();

const getAllProducts = async () => {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
};

const getProductById = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  return result.rows[0];
};

module.exports = {
  getAllProducts,
};

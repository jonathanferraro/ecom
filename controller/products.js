const { getAllProducts } = require("../model/products.js");
require("dotenv").config();

exports.readAllProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({ data: products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.readProductById = async (req, res) => {
//     try {

//     } catch (err) {
//         return res.status(400).json({
//             error,
//         });
//     };
// };

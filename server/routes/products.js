const express = require("express");
const router = express.Router();
const { readAllProducts } = require("../controller/products.js");

router.get("/products", readAllProducts);

module.exports = router;

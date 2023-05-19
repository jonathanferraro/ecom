const express = require("express");
const router = express.Router();
const { readCart } = require("../controller/cart");

router.get("/cart", readCart);

module.exports = router;

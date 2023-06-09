const express = require("express");
const router = express.Router();
const {getCartByUserId} = require('../model/cart');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({message: "Unauthorized"});
}

router.get("/cart", isAuthenticated, async (req, res) => {
  
    try {
        const userId = req.user.id;
        console.log(userId)
        const cart = await getCartByUserId(userId);
        res.status(200).json({ data: cart });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

// router.post('/cart', (req, res) => {

// })

module.exports = router;

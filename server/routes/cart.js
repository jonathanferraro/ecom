const express = require("express");
const router = express.Router();
const { getCartItemsByUserId, createCart, addToCart } = require('../model/cart');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({message: "Unauthorized"});
}

router.get("/cart", isAuthenticated, async (req, res) => {
  
    try {
        const userId = req.user.id;
        const cart = await getCartItemsByUserId(userId);
        res.status(200).json({ data: cart });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

router.post('/cart', async (req, res) => {
  const {product_id} = req.body;
  const userId = req.user.id;

  try {
    const cart = await getCartItemsByUserId(userId).data;
    
    // check if user has a cart
    if (cart.length === 0) {
      // create cart
      await createCart(userId)

    }

    // check user cart to see if product is in cart
    for (const product of cart) {
      if (product.id == product_id) {
        res.status(409).send('Duplicate product found in cart');
      }
    }

    // add product to cart
    await addToCart(userId, product_id);
    res.sendStatus(201);


  } catch (err) {
    res.status(500).json({error: err.message})
  }
});

// router.put('/cart', async (req, res) => {

// });

// router.delete('/cart', async (req, res) => {

// });

module.exports = router;

/* 
get cart
  if no cart, create one
  then add product with quantity of 1

check cart for product
  if no product add product with quantity of 1
  if product then check if quantity is neg or pos





*/

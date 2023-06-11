const express = require("express");
const router = express.Router();
const { getCartByUserId, getCartItemsByUserId, createCart, addToCart } = require('../model/cart');

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

router.post('/cart', isAuthenticated, async (req, res) => {
  const {product_id} = req.body;
  

  try {
    const userId = req.user.id;

    let userHasCart = await getCartByUserId(userId);
    const cart = await getCartItemsByUserId(userId);
    
    // check if user has a cart
    if (!userHasCart) {
      // create cart
      await createCart(userId);

    }

    const { cart_id } = await getCartByUserId(userId);

    // check user cart to see if product is in cart
    for (const product of cart) {
      if (product.id == product_id) {
        return res.status(409).json({ error: 'Product already in cart' });
      }
    }

    // add product to cart
    await addToCart(cart_id, product_id);
    res.status(201).json({ message: 'Cart item added successfully' });


  } catch (err) {
    res.status(500).json({error: err.message})
  }
});

// router.put('/cart', async (req, res) => {

// });

// router.delete('/cart', async (req, res) => {

// });

module.exports = router;



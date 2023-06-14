const express = require("express");
const router = express.Router();
const { getCartByUserId, getCartItemsByUserId, createCart, addToCart, editCartItemQuantity, deleteCartItem } = require('../model/cart');

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
    
    // check if user doesn't have a cart
    if (!userHasCart) {
      // create cart
      await createCart(userId);

    }

    // get cart id
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

router.put('/cart', isAuthenticated, async (req, res) => {
  const { product_id } = req.body;
  const { quantity } = req.body;

  try {
    const userId = req.user.id;
    const { cart_id } = await getCartByUserId(userId);
    const cart = await getCartItemsByUserId(userId);



    await editCartItemQuantity(quantity, cart_id, product_id);
    res.status(200).json({message: 'Cart edited successfully'});


  } catch (err) {
    res.status(500).json({error: err.message})
  }
});

router.delete('/cart', isAuthenticated, async (req, res) => {
  const { product_id } = req.body;

  try {
    const userId = req.user.id;
    const { cart_id } = await getCartByUserId(userId);

    console.log('product_id: ', product_id);
    console.log('cart_id: ', cart_id);

    await deleteCartItem(cart_id, product_id);
    res.sendStatus(204);

  } catch (err) {
    res.status(500).json({error: err.message})
  }
});

module.exports = router;



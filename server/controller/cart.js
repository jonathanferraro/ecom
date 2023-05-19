const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../model/cart.js");

exports.readCart = async (req, res) => {
  try {
    const task = await getCart();
    return res.json({ data: task.rows });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

exports.createCartItem = async (req, res) => {
  const userId = Number(req.params.product_id);
  const productId = Number(req.params.product_id);

  try {
    const newCartItem = await addToCart(userId, productId);
    return res.status(201).send({ data: newCartItem.rows[0] });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

exports.removeCartItem = async (req, res) => {
  const userId = Number(req.params.product_id);
  const productId = Number(req.params.product_id);

  try {
    await removeFromCart(userId, productId);
    return res.status(200).send({ data: [userId, productId] });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

require('dotenv').config();

const express = require('express');
const router = express.Router();
const {getReviews} = require('../model/reviews');

router.get('/reviews', async (req, res) => {
    try {
        const reviews = await getReviews();
        res.status(200).json({ data: reviews });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});


module.exports = router;
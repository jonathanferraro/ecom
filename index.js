const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
require('dotenv').config();

// cors
const cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan('dev'));

const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', productRoutes);
// app.use('/api', cartRoutes);




// testting ``````````````


// const pool = require('./model/database.js')
// const {getAllProducts} = require('./model/products.js')
// app.get('/test',  async (req, res) => {
//     try {
//         const products = await getAllProducts();
//         res.json({ data: products });
//       } catch (err) {
//         res.status(500).json({ error: err.message });
//       }
// })



// end testing ````````````````````

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
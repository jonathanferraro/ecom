require('dotenv').config();

const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');


// cors
const cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan('dev'));

// session
const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', productRoutes);
app.use('/api', cartRoutes);




app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
require('dotenv').config();

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const userRoutes = require('./routes/users')


// cors
const cors = require('cors');
app.use(cors());

app.use(express.json());

const morgan = require('morgan');
app.use(morgan('dev'));

const flash = require('express-flash');
app.use(flash());

app.use(express.urlencoded({ extended: false }));

const initializePassport = require('./loaders/passport-config');
const { getUserByUsername, getUserById }  = require('./model/users');

initializePassport(
    passport,
    getUserByUsername,
    getUserById
);

// session
const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// port
const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', userRoutes);




app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
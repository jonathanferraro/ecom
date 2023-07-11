require('dotenv').config();

const express = require('express');
const app = express();
const passport = require('passport');

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const userRoutes = require('./routes/users');
const reviewRoutes = require('./routes/reviews')
const { getUserByEmail, getUserById }  = require('./model/users');
const initializePassport = require('./loaders/passport-config');


// cors
const cors = require('cors');
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());

const morgan = require('morgan');
app.use(morgan('dev'));

const flash = require('express-flash');
app.use(flash());

app.use(express.urlencoded({ extended: false }));


// session
const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: 'auto',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    },
    proxy: true,
}));

app.use(passport.initialize());
app.use(passport.session());



initializePassport(
    passport,
    getUserByEmail,
    getUserById
);

// port
const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', reviewRoutes);





app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
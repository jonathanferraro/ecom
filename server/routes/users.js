require('dotenv').config();

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const { insertUser } = require('../model/users');

// router.get('/login', (req, res) => {

// });

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

// router.get('/register', (res, req) => {
    
// });

router.post('/register', async (req, res) => {
    const {username, password} = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // put user into DB
        const result = await insertUser(username, hashedPassword);

        res.status(201).send(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
        
    }
});

router.get('/status', (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json({ authenticated: true });
    } else {
        res.status(200).json({ authenticated: false });
    }
});

router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        res.status(200).send({message: 'success'});
    });
});


module.exports = router;


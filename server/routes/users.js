require('dotenv').config();

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const { insertUser } = require('../model/users');

// router.get('/login', (req, res) => {

// });

// router.post('/login', (req, res) => {

// });

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

    console.log(username, password)
});


module.exports = router;


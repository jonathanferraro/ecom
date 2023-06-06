require('dotenv').config();

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const { insertUser } = require('../model/users');

// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/test',
//     failureRedirect: '/fail',
//     failureFlash: true
// }));

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ error: info.message });
      }
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.json({ message: 'Login successful' });
      });
    })(req, res, next);
  });


router.post('/register', async (req, res) => {
    const {email, password, l_name, f_name} = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // put user into DB
        const result = await insertUser(email, hashedPassword, l_name, f_name);

        res.status(201).send(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
        
    }
});

router.get('/status', (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json({ authenticated: true });
    } else {
        res.status(400).json({ authenticated: false });
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


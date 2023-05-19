const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport) {
    const authenticateUser = (username, password, done) => {
        const user = getUserByUsername(username);

        if (user == null) {
            return done(null, false, {message: 'No user with that username'})
        }

        try {
            
        } catch (err) {

        }
    };

    passport.use(new LocalStrategy(authenticateUser));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {

    });
};
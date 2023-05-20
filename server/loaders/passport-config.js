const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const initialize = (passport, getUserByUsername) => {
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username);

        if (user == null) {
            return done(null, false, {message: 'No user with that username'})
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, {message: 'Password incorrect'});
            }
        } catch (err) {
            return done(err);
        }
    };

    passport.use(new LocalStrategy(authenticateUser));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {

    });
};

module.exports = initialize;
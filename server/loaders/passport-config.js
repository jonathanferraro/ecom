const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const initialize = (passport, getUserByUsername, getUserById) => {
    const authenticateUser = async (username, password, done) => {
        const user = await getUserByUsername(username);
        console.log(user)

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

    // passport.deserializeUser((id, done) => {
    //     return done(null, getUserById(id))
    // });

    passport.deserializeUser(async (id, done) => {
        try {
          const user = await getUserById(id);
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      });
      
};

module.exports = initialize;
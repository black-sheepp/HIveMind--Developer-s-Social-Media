const passport = require("passport");
const User = require("../Models/userSchema");
const LocalStratergy = require("passport-local").Strategy;

passport.use(
  new LocalStratergy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      User.findOne({ email: email })
        .then((user) => {
          if (!user || user.password != password) {
            console.log("Invalid Username/Password");
            return done(null, false);
          }
          return done(null, user);
        })
        .catch((err) => {
          console.log("Error in finding user -> Passport");
          return done(err);
        });
    }
  )
);

// serialize the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
  return done(null, user.id);
});

// desrializing the user form the key in the cookies
passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then((user) => {
      return done(null, user);
    })
    .catch((err) => {
      console.log("Error in findin user --> Passport");
      return done(err);
    });
});


module.exports = passport;

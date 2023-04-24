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


// check authentication as a middleware
passport.checkAuthentication = function (req, res, next) {
  // if the user is sign in
  if (req.isAuthenticated()) {
    // isAuthenticated is a passport function check whether user is authenticated
    return next();
  }
  // if user is not signin
  return res.redirect("/sign-in");
};

passport.setAuthenticatedUser = function (req, res, next) {
  // this middleware function is responsible for passing the authenticated user object to the views, which enables the views to access user information for rendering dynamic content.
  if (req.isAuthenticated()) {
    // req.user contains the current signed in user from the session cookie and we are just sending it to the locals for the views
    res.locals.user = req.user;
  }
  next();
};

module.exports = passport;

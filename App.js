const express = require("express");
const App = express();
const port = 8001;
const expressLayouts = require("express-ejs-layouts");
const db = require("./Config/mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// used for session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./Config/passport-local-stratergy");
const mongoStore = require('connect-mongo')

App.use(express.static("./Assets"));
App.use(bodyParser.urlencoded());
App.use(cookieParser());

// set the view engine to ejs
App.set("view engine", "ejs");

App.use(
  session({
    name: "HiveMind",
    secret: "ToDoLater",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 1000,
    },
    store: new mongoStore({
      mongoUrl: 'mongodb://127.0.0.1:27017/HiveMind_Dev',
      touchAfter: 24 * 3600 , // time period in seconds
      autoRemove: 'disabled',
    })
  })
);


App.use(passport.initialize());
App.use(passport.session());
App.use(passport.setAuthenticatedUser);

App.use(expressLayouts);

App.use("/", require("./Routes/index"));

App.listen(port, () => console.log("Server is up and running on port ", port));

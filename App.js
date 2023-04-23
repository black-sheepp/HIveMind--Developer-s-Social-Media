const express = require('express');
const App = express();
const port = 8001;
const expressLayouts = require('express-ejs-layouts');
const db = require('./Config/mongoose')
const bodyParser = require('body-parser')

// used for session cookie
const session = require('express-session')
const passport = require('passport')
const passportLocal = require('passport-local')

App.use(express.static("./Assets"))
App.use(bodyParser.urlencoded())

// set the view engine to ejs
App.set('view engine', 'ejs');

App.use(expressLayouts);

App.use("/",require('./Routes/index'))

App.listen(port,()=>console.log("Server is up and running on port ", port));


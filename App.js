const express = require('express');
const App = express();
const port = 8001;

App.use("/",require('./Routes/index'))

App.listen(port,()=>console.log("Server is up and running on port ", port));


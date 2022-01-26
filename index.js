//to get environment variable in the process
require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000

require('./config/db');
// import all the routes
const learningRoutes = require("./routes/learningroutes");
const chemicalRoutes = require("./routes/chemicals");
// middlewares
app.use(express.json());

// routes
app.use('/api',learningRoutes);

app.use('/api',chemicalRoutes);

app.listen(port,()=>{
    console.log(`inventory backend is listening to ${port}`);
})
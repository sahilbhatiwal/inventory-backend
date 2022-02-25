//to get environment variable in the process
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./config/db");
// import all the routes
const chemicalRoutes = require("./routes/chemical");
const testRoutes = require("./routes/test");
const userRoutes = require("./routes/user");
const reportRoutes = require("./routes/report");

// middlewares
app.use(cors());
app.use(express.json());//bodyparser
app.use(cookieParser());

// routes
app.use("/api", chemicalRoutes);
app.use("/api",testRoutes);
app.use("/api",userRoutes);
app.use("/api",reportRoutes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static("client/build"));
  const path = require('path');
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`inventory backend is listening to ${PORT}`);
});

//to get environment variable in the process
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

require("./config/db");
// import all the routes
// const learningRoutes = require("./routes/learningroutes");
const chemicalRoutes = require("./routes/chemical");
const testRoutes = require("./routes/test");
const userRoutes = require("./routes/user");
const reportRoutes = require("./routes/report");

// middlewares
app.use(cors());
app.use(express.json());

// routes
// app.use("/api", learningRoutes);
app.use("/api", chemicalRoutes);
app.use("/api",testRoutes);
app.use("/api",userRoutes);
app.use("/api",reportRoutes);

app.listen(PORT, () => {
  console.log(`inventory backend is listening to ${PORT}`);
});

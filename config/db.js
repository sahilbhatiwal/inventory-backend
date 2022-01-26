const mongoose = require("mongoose");
//connect with mongoose server
mongoose.connect(
  process.env.DB_URL
).then(()=>{
    console.log("connected with databse");
}).catch(err=>{
    console.log(err);
});

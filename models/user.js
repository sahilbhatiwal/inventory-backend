const mongoose = require("mongoose");

// defination of schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
      trim: true,
    },
    age: {
      type: Number,
    },
    phone: {
      type: String,
      required: true,
      unique:true,
      minlength:10,
      maxlength:10
    },
  },
  {
    timestamps: true,
  }
);

// const chemicalModel = mongoose.model('Chemical',chemicalSchema);
// module.exports = chemicalModel;
//or
module.exports = mongoose.model("User", userSchema);

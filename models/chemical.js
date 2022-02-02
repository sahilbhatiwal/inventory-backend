const mongoose = require("mongoose");

// defination of schema
const chemicalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
      trim: true,
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: [0,"Chemical can't have -ve value "]
    },
  },
  {
    timestamps: true,
  }
);

// const chemicalModel = mongoose.model('Chemical',chemicalSchema);
// module.exports = chemicalModel;
//or
module.exports = mongoose.model("Chemical", chemicalSchema);

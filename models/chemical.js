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

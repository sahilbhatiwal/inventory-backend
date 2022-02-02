const mongoose = require("mongoose");

// defination of schema
const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
      trim: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },  
    chemicalsRequired: [
      {
        quantity: {
          type: Number,
          required: true,
        },
        chemical: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Chemical",
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// const chemicalModel = mongoose.model('Chemical',chemicalSchema);
// module.exports = chemicalModel;
//or
module.exports = mongoose.model("Test", testSchema);

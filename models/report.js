const mongoose = require("mongoose");

// defination of schema
const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    testsPerformed: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test",
        required: true,
      },
    ],
    totalAmount: Number,
  },
  {
    timestamps: true,
  }
);
// pre save task
reportSchema.pre("save", async function () {
  let price = 0;
  await this.populate("testsPerformed", "name price");
  this.testsPerformed.forEach((data) => {
    console.log(data);
    price += data.price;
  });
  this.totalAmount = price;
});

module.exports = mongoose.model("Report", reportSchema);

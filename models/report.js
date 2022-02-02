const mongoose = require("mongoose");
const ChemicalModel = require("./chemical");
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

async function calculateAmount() {
  let price = 0;
  await this.populate("testsPerformed", "name price");
  this.testsPerformed.forEach((data) => {
    // console.log(data);
    price += data.price;
  });
  this.totalAmount = price;
}

const performTest = async () => {
  // await this.populate("testsPerformed", "chemicalsRequired");
  this.testsPerformed.forEach(async (test) => {
    // console.log(test);
    await test.chemicalsRequired.forEach(async (chem) => {
      // await chem.chemical.update({
      //   $inc:{quantity: -1*chem.quantity},
      // })
      // console.log(chem);
      const data = await ChemicalModel.findByIdAndUpdate(
        chem.chemical.toString(),
        {
          $inc: { quantity: -1 * chem.quantity },
        }
      );
      // console.log(data);
    });
  });
};

reportSchema.pre("save", async function (next) {

  await this.populate("testsPerformed", "chemicalsRequired");
  await this.testsPerformed.forEach(async (test) => {
    
    await test.chemicalsRequired.forEach(async (chem) => {
     
      console.log(chem);
      const data = await ChemicalModel.findById(chem.chemical.toString());
      if (!data) throw new Error("Chemcial not found");
      console.log(data.name);
      if (data.quantity < chem.quantity)
        next(new Error(`Not sufficient qunatitiy of chemcial ${data.name}`));
      // console.log(data);
    });
  });
});

module.exports = mongoose.model("Report", reportSchema);

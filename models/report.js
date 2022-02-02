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

async function preSaveMiddleWare(next) {
  // check if chemicals are present
  try {
    const tests = await this.populate(
      "testsPerformed",
      "chemicalsRequired name price"
    );

    if (!tests.testsPerformed.length)
      throw new Error("please add atleast one valid test");

      // validate the chemical required
    for (const test of this.testsPerformed) {   // traverse on the testsperformed
    
      for (const chem of test.chemicalsRequired) { // travese on the chemical required for each test
        const data = await ChemicalModel.findById(chem.chemical.toString());
        if (data.quantity < chem.quantity) {
            throw new Error(`Not sufficient qunatitiy of chemcial ${data.name}`)
        }
      }
    }

    let price = 0;
    this.testsPerformed.forEach((data) => {
      price += data.price;
    });
    this.totalAmount = price;

    for (const test of this.testsPerformed) {
      for (const chem of test.chemicalsRequired) {
        await ChemicalModel.findByIdAndUpdate(chem.chemical.toString(), {
          $inc: { quantity: -1 * chem.quantity },
        });
      }
    }
  } catch (error) {
    return next(error);
  }
}

reportSchema.pre("save", preSaveMiddleWare);

module.exports = mongoose.model("Report", reportSchema);

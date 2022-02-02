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

async function preSaveMiddleWare(error, doc, next) {
  // check if chemicals are present
  try {
    await this.populate("testsPerformed", "chemicalsRequired name price");

    // for (const test of this.testsPerformed) {
    //   for (const chem of test.chemicalsRequired) {
    //     const data = await ChemicalModel.findById(chem.chemical.toString());
    //     console.log(data.name);
    //     if (data.quantity < chem.quantity) {
    //       console.log(`Not sufficient qunatitiy of chemcial ${data.name}`);
    //       return next(
    //         new Error(`Not sufficient qunatitiy of chemcial ${data.name}`)
    //       );
    //     }
    //   }
    // }

    let price = 0;
    this.testsPerformed.forEach((data) => {
      // console.log(data);
      price += data.price;
    });
    this.totalAmount = price;
    console.log(this.totalAmount);

    // perform test
    // await this.testsPerformed.forEach(async (test) => {
    //   await test.chemicalsRequired.forEach(async (chem) => {
    //     const data = await ChemicalModel.findByIdAndUpdate(
    //       chem.chemical.toString(),
    //       {
    //         $inc: { quantity: -1 * chem.quantity },
    //       }
    //     );
    //     console.log("data", data);
    //   });
    // });

    for (const test of this.testsPerformed) {
      for (const chem of test.chemicalsRequired) {
        await ChemicalModel.findByIdAndUpdate(
          chem.chemical.toString(),
          {
            $inc: { quantity: -1 * chem.quantity },
          }
        );
      }
    }
  } catch (error) {
    console.log(`inside catch ${error}`);
    return next(error);
  }
}

reportSchema.pre("save", preSaveMiddleWare);

module.exports = mongoose.model("Report", reportSchema);

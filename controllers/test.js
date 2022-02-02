const TestModel = require("../models/test");

// add test
exports.addTest = async (req, res) => {
  const { name, chemicalsRequired, price } = req.body;
  // if (!name || !chemicalsRequired) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "please add name and chemical req",
  //   });
  // }
  // if (chemicalsRequired.length == 0) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "please add atleast one chemical",
  //   });
  // }
  // const testToAdd = { name, chemicalsRequired };
  try {
    if (!name || !chemicalsRequired || !price) {
      throw new Error("name and chemicals and price are required");
    }
    if (chemicalsRequired.length == 0) {
      throw new Error("please atleast one chemical");
    }
    const testToAdd = { name, chemicalsRequired, price };
    const data = await TestModel.create(testToAdd);
    res.status(200).json({
      success: true,
      message: "test added successfully",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `some error occurred: ${err.message}`,
    });
  }
};

// get all
exports.getAllTest = (req, res) => {
  TestModel.find()
    .then((data) => {
      res.status(200).json({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: `there was some error : ${err.message}`,
      });
    });
};
//get all with chemical name
exports.getAllTestWithChemical = (req, res) => {
  TestModel.find()
    .populate("chemicalsRequired.chemical", "name quantity")
    .then((data) => {
      res.status(200).json({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: `there was some error : ${err.message}`,
      });
    });
};
//get test by id
exports.getTestById = (req, res) => {
  const id = req.params.id;
  TestModel.findById(id)
    .populate("chemicalsRequired.chemical", "name quantity")
    .then((data) => {
      res.status(200).json({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: `there was some error : ${err.message}`,
      });
    });
};

// update test

exports.updateTest = async (req, res) => {
  const id = req.params.id;
  const { name, chemicalsRequired } = req.body;
  try {
    if (!name || !chemicalsRequired) {
      throw new Error("name and chemical are required");
    }
    if (chemicalsRequired.length == 0) {
      throw new Error("please atleast one chemical");
    }
    const testToUpdate = { name, chemicalsRequired };
    const data = await TestModel.findByIdAndUpdate(id, testToUpdate);
    res.status(200).json({
      success: true,
      message: "test added successfully",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `some error occurred: ${err.message}`,
    });
  }
};

//delete test

exports.deleteTest = (req, res) => {
  const id = req.params.id;
  TestModel.findByIdAndDelete(id)
    .then((data) => {
      if (data)
        return res.status(200).json({
          success: true,
          data: data,
        });
      throw new Error("id don't exist");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: `there was some error : ${err.message}`,
      });
    });
};

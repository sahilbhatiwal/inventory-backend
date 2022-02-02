const userModel = require("../models/user");

//add user
exports.addUser = async (req, res) => {
  const { name, age, phone } = req.body;
  try {
    if (!name || !phone) {
      throw new Error("name and phone is required");
    }
    const userToAdd = { name, age, phone };
    const data = await userModel.create(userToAdd);
    res.status(200).json({
      success: true,
      message: "user added successfully",
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

exports.getAllUsers = (req, res) => {
  userModel
    .find()
    .then((data) => {
      res.status(200).json({
        success: true,
        data,
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

//update users 
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, age, phone } = req.body;
  try {
    const user = { name, age, phone };
    const data = await userModel.findByIdAndUpdate(id, user);
    res.status(200).json({
      success: true,
      message: "value updated",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `some error occuresd ${err}`,
    });
  }
};
//get user by id
exports.getUserId = (req, res) => {
  const id = req.params.id;
  if (!id)
    return res.status(400).json({
      success: false,
      message: "please enter the id",
    });
  userModel
    .findById(id)
    .then((data) => {
      if (!data) throw new Error("User Not Found");
      res.status(200).json({
        success: true,
        message: "data found successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: `some error occured ${err}`,
      });
    });
};

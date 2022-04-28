const reportModel = require("../models/report");

const userModel = require("../models/user");

//add user

exports.addReport = async (req, res) => {
  const { user, testsPerformed } = req.body;
  try {
    if (!user || !testsPerformed)
      throw new Error("please add user or testsPerformed");

    let dbUser = await userModel.findById(user);

    if (!dbUser) throw new Error("invalid user id");
    const data = await reportModel.create({ user, testsPerformed });
    await dbUser.reports.push(data._id);
    await dbUser.save();
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: `there was some error : ${err.message}`,
    });
  }
};

//get all reports

exports.getAllReports = (req, res) => {
  reportModel
    .find()
    .populate("user", "name phone")
    .populate("testsPerformed", "name price")
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

// get user by id
exports.getReportbyId = (req, res) => {
  const id = req.params.id;
  reportModel
    .findById(id)
    .populate("user", "name phone")
    .populate("testsPerformed", "name price")
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

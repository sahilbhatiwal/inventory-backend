const reportModel = require("../models/report");

const userModel = require("../models/user");

//add user

exports.addReport = async (req, res) => {
  const { user, testsPerformed } = req.body;
  try {
    if (!user || !testsPerformed)
      throw new Error("please add user or testsPerformed");
    // const reportToAdd = { user, testsPerformed };
    // const data = await reportModel.create(reportToAdd);
    const data = await reportModel.create({ user, testsPerformed });
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
    .populate("testsPerformed", "name")
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
    .populate("testsPerformed", "name")
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

exports.getReportByUserId = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await reportModel
      .find({ user: id })
      .populate("user", "name phone")
      .populate("testsPerformed", "name");
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `there was some error : ${err.message}`,
    });
  }
};

// get report by user name

exports.getReportByUserName = async (req, res) => {
  const username = req.query.name;
  console.log(username);
  try {
    const user = await userModel.findOne({ name: username });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user does not exists",
      });
    }
    const id = user._id.toString();
    const data = await reportModel
      .find({ user: id })
      .populate("user", "name phone")
      .populate("testsPerformed", "name");
    res.status(200).json({
      success: true,
      data,
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `there was some error : ${err.message}`,
    });
  }
};

//update reports
// exports.updateReport = (req,res )=>{

//   const testDetails = req.body;
//   if(!body){
//     return res.status(400).json({
//       success: false,
//       message: "please enter the test to update"
//     });
//   }
// }
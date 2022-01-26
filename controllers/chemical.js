// import chemical model
const Chemical = require("../models/chemical");

// get all chemicals
function getChemicals(req, res) {
  Chemical.find()
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
}

// get chemicals by id
function getChemicalbyId(req, res) {
  const id = req.params.id;
  Chemical.findById(id)
    .then((data) => {
      if (data) {
        res.status(200).json({
          success: true,
          data: data,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "invalid id",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: `there was some error : ${err.message}`,
      });
    });
}
// update chemicals by id
function updateChemicalbyId(req, res) {
  const id = req.params.id;
  const { quantity } = req.body;

  if (!quantity) {
    return res.status(400).json({
      success: false,

      message: "send quantity",
    });
  }

  Chemical.findByIdAndUpdate(id, {
    $inc: { quantity },
  })
    .then((data) => {
      if (data) {
        return res.status(200).json({
          success: true,
          message: "chemical updated",
          data: data,
        });
      } else {
        return res.status(400).json({
          success: false,

          message: "Chemical not exists",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: `there was some error : ${err.message}`,
      });
    });
}
// delete chemicals by id
function deleteChemicalbyId(req, res) {
  const id = req.params.id;

  Chemical.findByIdAndDelete(id)
    .then((data) => {
      if (data) {
        return res.status(200).json({
          success: true,
          message: "chemical deleted",
          data: data,
        });
      } else {
        return res.status(400).json({
          success: false,

          message: "Chemical not exists",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: `there was some error : ${err.message}`,
      });
    });
}

// add a chemial
function addChemical(req, res) {
  // get chemicaldetail form body
  const { name, quantity } = req.body;

  if (!name || !quantity) {
    return res.status(400).json({
      success: false,
      message: "please send name and quantity",
    });
  }

  Chemical.create({
    name,
    quantity,
  })
    .then((data) => {
      res.status(200).json({
        success: true,
        message: "Chemical added",
        chemical: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: `there was some error : ${err.message}`,
      });
    });
}

// export the controllers
module.exports = {
  getChemicals,
  addChemical,
  getChemicalbyId,
  updateChemicalbyId,
  deleteChemicalbyId,
};

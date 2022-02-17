const express = require("express");
const {
  getChemicals,
  addChemical,
  getChemicalbyId,
  updateChemicalbyId,
  deleteChemicalbyId,
} = require("../controllers/chemical");
const { isAuthenticated } = require("../middlewares/user");
const router = express.Router();

// get all chemical
router.get("/chemical", getChemicals);

// get chemical by id
router.get("/chemical/:id", getChemicalbyId);

router.post("/chemical",isAuthenticated, addChemical);

router.put("/chemical/:id", isAuthenticated, updateChemicalbyId);

router.delete("/chemical/:id", isAuthenticated, deleteChemicalbyId);

module.exports = router;

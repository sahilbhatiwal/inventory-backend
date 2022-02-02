const express = require("express");
const {
  getChemicals,
  addChemical,
  getChemicalbyId,
  updateChemicalbyId,
  deleteChemicalbyId,
} = require("../controllers/chemical");
const router = express.Router();

// get all chemical
router.get("/chemical", getChemicals);

// get chemical by id
router.get("/chemical/:id", getChemicalbyId);

router.post("/chemical", addChemical);

router.put("/chemical/:id", updateChemicalbyId);

router.delete("/chemical/:id", deleteChemicalbyId);

module.exports = router;

const express = require("express");
const { getAllTest, addTest, getAllTestWithChemical, getTestById, deleteTest, updateTest } = require("../controllers/test");
const router = express.Router();

//get all
router.get("/test",getAllTest);
router.get("/testfull",getAllTestWithChemical);
router.get("/test/:id",getTestById);
router.delete("/test/:id",deleteTest);
router.put("/test/:id",updateTest);
router.post("/test",addTest);

module.exports = router;

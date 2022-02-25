const express = require("express");
const { getAllTest, addTest, getAllTestWithChemical, getTestById, deleteTest, updateTest } = require("../controllers/test");
const { isAuthenticated } = require("../middlewares/user");
const router = express.Router();

//get all
router.get("/test",getAllTest);
router.get("/test/:id",getTestById);
router.delete("/test/:id", isAuthenticated, deleteTest);
router.put("/test/:id", isAuthenticated, updateTest);
router.post("/test", isAuthenticated, addTest);

module.exports = router;

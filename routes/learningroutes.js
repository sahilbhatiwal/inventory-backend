const express = require("express");
const { first, about } = require("../controllers/learningcontrollers");
const router = express.Router();
router.get('/',first);
router.get('/about',about); 
module.exports = router;
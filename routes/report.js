const { addReport, getAllReports, getReportbyId, getReportByUserId, getReportByUserName } = require("../controllers/report");
const { isAuthenticated } = require("../middlewares/user");

const router = require("express").Router();

router.post("/report", isAuthenticated, addReport);
router.get("/report", isAuthenticated, getAllReports);
router.get("/report/:id", isAuthenticated, getReportbyId);

module.exports = router;
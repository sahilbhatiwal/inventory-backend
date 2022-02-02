const { addReport, getAllReports, getReportbyId, getReportByUserId, getReportByUserName } = require("../controllers/report");

const router = require("express").Router();

router.post("/report", addReport);
router.get("/report", getAllReports);
router.get("/report/:id", getReportbyId);
router.get("/reportname", getReportByUserName);
router.get("/report/user/:id", getReportByUserId);
// TODO: remaining

module.exports = router;
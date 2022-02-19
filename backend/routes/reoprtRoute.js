const express = require('express');
const { createReport, getReports, updateReportStatus, getSingleReport } = require('../controller/reportController');
const { notAuthorizeRole, isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router();

router.route("/report/new").post(isAuthenticatedUser, createReport)
router.route("/reports").get(isAuthenticatedUser,notAuthorizeRole("user"), getReports)
router.route("/report/:id")
    .get(isAuthenticatedUser,notAuthorizeRole("user"), getSingleReport)
    .put(isAuthenticatedUser,notAuthorizeRole("user"), updateReportStatus)

module.exports = router;
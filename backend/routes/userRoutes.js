const express = require('express');
const { registerUser, loginUser, logout, getUserDetails, getSingleUser } = require('../controller/userController');
const { isAuthenticatedUser, notAuthorizeRole } = require('../middleware/auth');
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/user/:id").get(isAuthenticatedUser,notAuthorizeRole("user"),getSingleUser);

module.exports = router;
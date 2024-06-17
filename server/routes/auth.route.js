const express = require('express');
const router = express.Router();
const { login, register, forgotPassword, resetPassword, logout } = require('../controllers/auth.controller');

// middleware
const authorization = require('../middleware/authorization.middleware');

router.post('/login', login);
router.post('/register', authorization, register);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/logout', logout);

module.exports = router;

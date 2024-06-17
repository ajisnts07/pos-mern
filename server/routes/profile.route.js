const express = require('express');
const router = express.Router();
const { indexProfile, showProfile, storeProfile, updateProfile, deleteProfile } = require('../controllers/profile.controller');

router.get('/', indexProfile);
router.get('/:id', showProfile);
router.post('/', storeProfile);
router.put('/:id', updateProfile);
router.delete('/:id', deleteProfile);

module.exports = router;

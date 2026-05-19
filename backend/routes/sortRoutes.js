const express = require('express');
const router = express.Router();
const sortController = require('../controllers/sortController');

router.post('/sort', sortController.compareSorts);

module.exports = router;

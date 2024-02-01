// src/routes/index.js
const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

router.post('/polls', pollController.createPoll);
router.get('/polls', pollController.getAllPolls);

module.exports = router;

// src/routes/pollRoutes.js
const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

// Create a new poll
router.post('/', pollController.createPoll);

// Get all polls
router.get('/', pollController.getAllPolls);

// Add other routes for updating, fetching user polls, submitting polls, fetching analytics, etc.

module.exports = router;

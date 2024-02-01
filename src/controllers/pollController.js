// src/controllers/pollController.js
const Poll = require('../models/pollModel');

const createPoll = async (req, res) => {
  try {
    const pollData = req.body;
    const poll = new Poll(pollData);
    await poll.save();
    res.status(201).json({ message: 'Poll created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.status(200).json(polls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createPoll,
  getAllPolls,
  // Add other controllers for updating, fetching user polls, submitting polls, fetching analytics, etc.
};

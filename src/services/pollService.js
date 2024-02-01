// src/services/pollService.js
const Poll = require('../models/pollModel');

const createPoll = async (pollData) => {
  try {
    const poll = new Poll(pollData);
    await poll.save();
  } catch (error) {
    throw error;
  }
};

const getAllPolls = async () => {
  try {
    const polls = await Poll.find();
    return polls;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPoll,
  getAllPolls,
  // Add other services for updating, fetching user polls, submitting polls, fetching analytics, etc.
};

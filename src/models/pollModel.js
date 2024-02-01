// pollModel.js
const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  min_reward: {
    type: Number,
    required: true,
  },
  max_reward: {
    type: Number,
    required: true,
  },
  questionSets: [
    {
      question_type: {
        type: String,
        required: true,
      },
      question_text: {
        type: String,
        required: true,
      },
      options: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;

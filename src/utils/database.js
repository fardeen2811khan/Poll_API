// src/utils/database.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/poll_app', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;


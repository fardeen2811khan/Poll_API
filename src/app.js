const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./utils/database');

// Middlewares
app.use(bodyParser.json());

// Routes
const pollRoutes = require('./routes/pollRoutes');

app.use('/polls', pollRoutes); // Mounting the poll routes at /polls

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

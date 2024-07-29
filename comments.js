// Create a web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
  res.send('This is a route that returns all comments');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// Create web server with express
// Set up port for server to listen on
// Create a route to handle GET requests to /comments
// Respond with a JSON object that has a key of comments and a value of an array of comments
// Start the server and listen on the port

const express = require('express');
const app = express();
const PORT = 4001;

const comments = [
  { username: 'tammy', comment: 'lolololol' },
  { username: 'mitch', comment: 'huehuehuehue' }
];

app.use(express.static('public'));

app.get('/comments', (req, res, next) => {
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
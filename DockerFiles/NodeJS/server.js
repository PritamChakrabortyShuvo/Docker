const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// Serve the static HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});


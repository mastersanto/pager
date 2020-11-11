// Section 1
const express = require('express');
const path = require('path');

// Section 2
const app = express();
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Section 3
app.get('/', (req, res) => {
  res.send("<h1>Home page</h1>");
});

// Section 4
app.listen(3000, () => {
  console.log('server started on port 3000');
});
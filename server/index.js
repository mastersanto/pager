const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
  res.send('<h1>Page chat</h1>');
});

app.listen(PORT, () => {
  console.log('server started on port 3000');
});
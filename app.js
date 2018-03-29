const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('HI HOMIES!');
});

app.listen(port);
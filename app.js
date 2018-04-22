const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
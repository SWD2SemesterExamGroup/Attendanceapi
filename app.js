const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(process.env.PORT || port, () => {
  console.log('We are live on ' + port);
  console.log("Process env Port: " + process.env.PORT);
});
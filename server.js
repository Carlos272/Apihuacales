const express = require('express')
const bodyParser = require('body-parser')
var morgan = require('morgan');
const app = express()
const port = 8082


var forklift = require('./app/routes/v1/forklift/forklift');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


//v1 APIs
app.use('/api/v1/forklift', forklift);


app.listen(8082);

console.log('Magic happens at http://localhost:' + port);



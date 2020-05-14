var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World! from creativiya."
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World! form creativiya."
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app

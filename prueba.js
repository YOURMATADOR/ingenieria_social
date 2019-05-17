var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('puto el que lo lea');
});

app.listen(3002, function () {
  console.log('Example app listening on port 3000!');
});

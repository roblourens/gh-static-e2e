const express = require('express');
const products = require("./products.json");

const app = express();

app.use('/GetProducts', function(req, res, next) {

  console.log("Logging");

  res.send(products);
})

app.listen(3005, function() {
  console.log('server listening on http://localhost:3005');
});


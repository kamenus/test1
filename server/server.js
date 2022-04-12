const express = require('express'),
  expressOasGenerator = require('express-oas-generator'),
  app = express(),
  port = process.env.PORT || 3001,
  dbPath = 'mongodb://localhost:27017/ShopDB',
  mongoose = require('mongoose'),
  bodyParser = require('body-parser')

require('./api/models/productModel')
require('./api/models/cartModel')

mongoose.Promise = global.Promise
mongoose.connect(dbPath)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const cartRoutes = require('./api/routes/cartRoutes')
const productRoutes = require('./api/routes/productRoutes')

cartRoutes(app)
productRoutes(app)

expressOasGenerator.init(
  app,
  function(spec) { return spec; },
  `${process.cwd()}/spec/spec-api.json`
  )

app.listen(port)

console.log('RESTful API server started on: ' + port)

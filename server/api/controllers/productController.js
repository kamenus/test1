const mongoose = require('mongoose'),
  Product = mongoose.model('Products')

function getProductUrl(req, product) {
  return `${req.protocol}://${req.get('host')}/product/${product._id}`
}

exports.getAllProducts = function(req, res) {
  const parentLink = `${req.protocol}://${req.get('host')}/products`

  Product.find({}, function(err, products) {
    if (err)
      res.send(err)

    const productLinks = products.map(product => ({
      href: getProductUrl(req, product._id)
    }))

    const result = {
      links: {
        self: {
          href: parentLink
        },
        items: productLinks
      },
      data: products
    }
    res.json(result)
  })
}

exports.createProduct = function(req, res) {
  const newProduct = new Product(req.body)

  newProduct.save(function(err, product) {
    if (err)
      res.send(err)
    res.json(product)
  })
}

exports.readProduct = function(req, res) {
  const parentLink = `${req.protocol}://${req.get('host')}/products`

  Product.findById(req.params.productId, function(err, product) {
    if (err)
      res.send(err)

    const result = {
      links: {
        self: {
          href: getProductUrl(req, product)
        },
        parent: {
          href: parentLink
        }
      },
      data: product
    }

    res.json(result)
  })
}

exports.updateProduct = function(req, res) {
  Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err)
    res.json(product)
  })
}

exports.deleteProduct = function(req, res) {
  Product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err)
    res.json({ message: 'Product successfully deleted' })
  })
}

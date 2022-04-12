const mongoose = require('mongoose'),
  Cart = mongoose.model('Cart'),
  Product = mongoose.model('Products')

function getProductUrl(req, product) {
  return `${req.protocol}://${req.get('host')}/product/${product._id}`
}

exports.getAllCart = function(req, res) {
  Cart.find({}, function(err, cartItems) {
    if (err)
      res.send(err)

    const ids = cartItems.map(({ productId }) => mongoose.Types.ObjectId(productId))
    const parentLink = `${req.protocol}://${req.get('host')}/cart`

    Product.find({
      '_id': { $in: ids}
    }, function(err, products) {
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
  })
}

exports.addToCart = function(req, res) {
  const data = { productId: req.params.productId }
  Cart.findOneAndUpdate({productId: req.params.productId}, data, {new: true, upsert: true}, function(err, product) {
    if (err)
      res.send(err)

    res.json(product)
  })
}

exports.deleteFromCart = function(req, res) {
  Cart.remove({
    productId: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err)
    res.json({ message: 'Cart successfully deleted' })
  })
}

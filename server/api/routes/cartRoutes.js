module.exports = function(app) {
  const cartList = require('../controllers/cartController')

  app.route('/cart')
    .get(cartList.getAllCart)

  app.route('/cart/:productId')
    .delete(cartList.deleteFromCart)
    .post(cartList.addToCart)
}

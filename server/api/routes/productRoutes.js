module.exports = function(app) {
  const productList = require('../controllers/productController')

  app.route('/products')
    .get(productList.getAllProducts)
    .post(productList.createProduct)

  app.route('/product/:productId')
    .get(productList.readProduct)
    .put(productList.updateProduct)
    .delete(productList.deleteProduct)
}

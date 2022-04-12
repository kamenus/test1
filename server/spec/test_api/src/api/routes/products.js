const express = require('express');
const products = require('../services/products');

const router = new express.Router();


/**
 * /products
 */
router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await products.getProducts(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;

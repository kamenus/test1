const express = require('express');
const product = require('../services/product');

const router = new express.Router();


/**
 * /product/{productId}
 */
router.get('/:productId', async (req, res, next) => {
  const options = {
    productId: req.params['productId']
  };

  try {
    const result = await product.getProductByProductid(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * /product/{productId}
 */
router.put('/:productId', async (req, res, next) => {
  const options = {
    productId: req.params['productId']
  };

  try {
    const result = await product.putProductByProductid(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * /product/{productId}
 */
router.delete('/:productId', async (req, res, next) => {
  const options = {
    productId: req.params['productId']
  };

  try {
    const result = await product.deleteProductByProductid(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;

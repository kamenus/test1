const express = require('express');
const cart = require('../services/cart');

const router = new express.Router();


/**
 * /cart
 */
router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await cart.getCart(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * /cart/{productId}
 */
router.delete('/:productId', async (req, res, next) => {
  const options = {
    productId: req.params['productId']
  };

  try {
    const result = await cart.deleteCartByProductid(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * /cart/{productId}
 */
router.post('/:productId', async (req, res, next) => {
  const options = {
    productId: req.params['productId']
  };

  try {
    const result = await cart.postCartByProductid(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;

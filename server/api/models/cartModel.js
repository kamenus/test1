const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartProductSchema = new Schema({
  productId: {
    type: String,
    required: 'You have to specify productId'
  }
})

module.exports = mongoose.model('Cart', CartProductSchema)

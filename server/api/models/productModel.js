const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the product'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: 'https://d-element.ru/upload/iblock/883/oblozhka.png'
  }
})

module.exports = mongoose.model('Products', ProductSchema)

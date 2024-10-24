const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  description: String,
  price: Number,
  imageUrl: String,
}, { timestamps: true });

const Product= mongoose.model('Product', productSchema);

module.exports = Product;

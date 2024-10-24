const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  description: String,
  price: Number,
  imageUrl: String,
}, { timestamps: true });

productSchema.index({productName: 'text', description: 'text'})

const Product= mongoose.model('Product', productSchema);

module.exports = Product;

const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();

router.route('/product/').get(productController.getAllProducts)

router.route('/product/:productId').get(productController.getOneProduct)

router.route('/search').get(productController.searchProducts);

router.route('/seed').get(productController.seedDatabase)


module.exports = router;
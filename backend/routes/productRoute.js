const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();

router.route('/').get(productController.getAllProducts)

router.route('/:productId').get(productController.getOneProduct)


router.route('/seed').get(productController.seedDatabase)


module.exports = router;
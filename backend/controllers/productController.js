const Product = require('../models/product');
const AppError = require('../utils/appError');
const sampleProducts = require('../utils/sampleProducts');


const seedDatabase = async (req, res, next) => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(sampleProducts);

        res.status(201).json({
            status: "success",
            message: "Database seeded successfully",
        });

    } catch (error) {
        next(error)
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            status: "success",
            message: "Products retrieved successfully",
            results: products.length,
            data: {
                products
            }
        })
    } catch (error) {
        next(error)
    }
}

const getOneProduct = async (req, res, next) => {
    try {
        
        console.log(req.params);
        const productId = req.params.productId;
        

        const product = await Product.findById(productId)

        if (!product) {
            return next(new AppError("Product not found", 404))
        }

        res.status(200).json({
            status: "success",
            message: "Product retrived successfully",
            data: {
                product
            }
        })

    } catch (error) {
       next(new AppError("Id does not exist", 500)) 
    }
}

module.exports = {
    seedDatabase,
    getAllProducts,
    getOneProduct
}


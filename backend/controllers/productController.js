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

const searchProducts = async (req, res, next) => {
    try {
        const query = req.query;
        const searchQuery = { };

        // Search by text fields
        if (query.search) {
            searchQuery.$text = { $search: query.search };
        }

        const products = await Product.find(searchQuery);

        res.status(200).json({
            status: "success",
            message: "Search results retrieved successfully",
            results: products.length,
            data: {
                products
            }
        });
    } catch (error) {
       next(error) 
    }
};

module.exports = {
    seedDatabase,
    getAllProducts,
    getOneProduct,
    searchProducts
}


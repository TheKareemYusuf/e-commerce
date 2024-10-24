const express = require("express");
const CONFIG = require("./config/config");
const cors = require("cors");
const bodyParser = require("body-parser");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// import routers
const productRouter = require('./routes/productRoute')

const app = express();


// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Landing page routes
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message:
      "Welcome to Rvysion Ecommerce, kindly visit the following links for information about usage",
    Documentation_link: "Link to documentations will go here",
  });
});


// ROUTES
app.use('/api/v1/product', productRouter)


// unknown routes/endpoints
app.all("*", (req, res, next) => {
  return next(
    new AppError(`unknown route!, ${req.originalUrl}  does not exist`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;

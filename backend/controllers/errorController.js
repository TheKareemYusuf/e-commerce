const sendError = (err, req, res, next) => {
        
    if (err.isOperational) {
        
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            
        });
    } else {
        console.error('ERROR 💥', err);

        res.status(err.statusCode).json({
            status: "error",
            error: err,
            message: err.message,
            stack: err.stack,
        });
    }
}

module.exports = sendError;



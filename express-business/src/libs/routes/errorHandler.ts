const errorHandler = ( err, req, res, next ) => {
    if (res.headersSent) { return next(err); }
  
    if (err.error && err.error.name === 'ValidationError')  {
        err.message = err.error.details[0].message;
        err.error = err.error.name;
        err.status = 400;
           }
    const { message, status, error } = err;
  
    const result = {
        error: error || 'undefined',
        message: message || 'error',
        status: status || 500,
        timestamp: new Date()
    };
  
    res.status(result.status).json(result);
  };
  
  export default errorHandler;


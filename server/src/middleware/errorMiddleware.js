export const createError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
  };


const errorMiddleware = (err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
  };
  
export default errorMiddleware;
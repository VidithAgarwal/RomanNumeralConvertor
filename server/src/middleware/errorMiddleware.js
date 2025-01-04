import logger from '../utils/logger.js';

/**
 * Utility function to create custom errors.
 * 
 * @param {number} status - The HTTP status code for the error.
 * @param {string} message - The error message.
 * @returns {Error} - An Error object with a custom status property.
 */
export const createError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
};


/**
 * Error handling middleware to catch and handle any errors that occur during the
 * application's execution. This middleware function takes the error object as its
 * first parameter, and logs the error message to the console. It then sends a JSON
 * response with the error message and a status code of 500 (unless the error has a
 * custom status property).

 * @param {Error} err - The error object.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function in the stack.
 */
const errorMiddleware = (err, req, res, next) => {
    logger.error('', { error: err.message });
    res.status(err.status || 500).json({ error: err.message }); // Send a JSON response with the error message
  };
  
export default errorMiddleware;
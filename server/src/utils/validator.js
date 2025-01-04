import { createError } from '../middleware/errorMiddleware.js';

/**
 * Utility to check if a number is within the acceptable range (1-3999)
 * @param {number} num The number to check
 * @returns {boolean} True if the number is within the acceptable range
 */
export const isInRange = (num) => {
    return num >= 1 && num <= 3999;
};

/**
 * Utility to validate the input
 * @param {string} input The input to validate
 * @throws {Error} If the input is invalid
 */
export const validateInput = (input) => {
    // Check for null, or empty input
    if (input === null || input === undefined || input === '') {
        throw createError(400, 'Input cannot be null, undefined, or empty.');
    }

    // Ensure the input is numeric and does not contain invalid characters
    if (isNaN(input) || /[^0-9-]/.test(input)) {
        throw createError(400, `Invalid input ${input} : Please provide a numeric value.`);
    }
};


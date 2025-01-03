import { createError } from '../middleware/errorMiddleware.js';

// Utility for validating input (e.g., range checks)
export const isInRange = (num) => {
    return num >= 1 && num <= 3999;
};

export const validateInput = (input) => {
    if (!input || isNaN(input) || (/[^0-9-]/.test(input))) {
        throw createError(400, `Invalid input ${input} : Please provide a numeric value.`);
    }
};
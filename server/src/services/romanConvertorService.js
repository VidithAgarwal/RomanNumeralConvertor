import { createError } from '../middleware/errorMiddleware.js';
import { isInRange } from "../utils/validator.js";
import logger from '../utils/logger.js';


/**
 * Convert an integer to a Roman numeral.
 *
 * @param {number} num - The integer to convert.
 * @returns {string} The Roman numeral representation of the integer.
 * @throws Will throw an error if the input is not a valid integer or is out of range.
 */
export const convertIntegerToRoman = (num) => {
    // Validate the input parameter
    if (!Number.isInteger(num)) {
        throw createError(400, `Invalid input ${num} : Please provide a numeric value.`);
    }

    // Check if the input is within the acceptable range
    if (!isInRange(num)) throw createError(400, `Input ${num} must be between 1 and 3999`);

    // Define the Roman numeral mapping
    const romanNumeralMap = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1],
    ];

    let result = '';
    let numCopy = num;
    logger.info('Starting Roman numeral conversion', { num });

    // Convert the number to Roman numerals
    romanNumeralMap.forEach(([roman, value]) => {
      while (numCopy >= value) {
        result += roman; // Append the Roman numeral to the result
        numCopy -= value; // Subtract the value from the number
      }
      // Exit early if all conversion is completed
      if (numCopy === 0) return;
    });

    logger.info('Completed Roman numeral conversion', { num, result });
    return result;
};
  

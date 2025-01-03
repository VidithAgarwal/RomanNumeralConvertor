import { createError } from '../middleware/errorMiddleware.js';
import { isInRange } from "../utils/validator.js";
import logger from '../utils/logger.js';


export const intToRoman = (num) => {
    if (!Number.isInteger(num)) {
        throw createError(400, `Invalid input ${num} : Please provide a numeric value.`);
    }

    if (!isInRange(num)) throw createError(400, `Input ${num} must be between 1 and 3999`);

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
    romanNumeralMap.forEach(([roman, value]) => {
      while (numCopy >= value) {
        result += roman;
        numCopy -= value;
      }
    });
    logger.info('Completed Roman numeral conversion', { num, result });
    return result;
  };
  

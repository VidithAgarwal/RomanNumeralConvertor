import { createError } from '../middleware/errorMiddleware.js';
import { isInRange } from "../utils/validator.js";


export const intToRoman = (num) => {
    if (!Number.isInteger(num)) {
        throw createError(400, "Invalid input: Please provide a numeric value.");
    }

    if (!isInRange(num)) throw createError(400, 'Input must be between 1 and 3999');

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
    romanNumeralMap.forEach(([roman, value]) => {
      while (num >= value) {
        result += roman;
        num -= value;
      }
    });
    return result;
  };
  

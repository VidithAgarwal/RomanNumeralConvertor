import { intToRoman } from '../services/romanConvertorService.js';
import { createError } from '../middleware/errorMiddleware.js';
export const getRomanNumeral = (req, res, next) => {
  try {
    const query = req.query.query;
    if (!query || isNaN(query)) {
      throw createError(400, 'Invalid input: Please provide a numeric value.');
    }
    const number = parseInt(query);
    const output = intToRoman(number);
    res.json({ input: query.toString(), output: output.toString() });
  } catch (error) {
    next(error);
  }
};
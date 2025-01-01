import { intToRoman } from '../services/romanConvertorService.js';
import { validateInput } from '../utils/validator.js';
export const getRomanNumeral = (req, res, next) => {
  try {
    const query = req.query.query;
    validateInput(query);
    const number = parseInt(query);
    const output = intToRoman(number);
    res.json({ input: query.toString(), output: output.toString() });
  } catch (error) {
    next(error);
  }
};
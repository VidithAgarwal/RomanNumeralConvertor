import { intToRoman } from '../services/romanConvertorService.js';
import { validateInput } from '../utils/validator.js';
import logger from '../utils/logger.js';
export const getRomanNumeral = (req, res, next) => {
  logger.info('Received request for Roman numeral conversion', { query: req.query });
  try {
    const query = req.query.query;
    validateInput(query);
    const number = parseInt(query);
    const output = intToRoman(number);
    logger.info('Conversion successful', { input: query, output: output });
    res.json({ input: query.toString(), output: output.toString() });
  } catch (error) {
    next(error);
  }
};
import { intToRoman } from '../services/romanConvertorService.js';
import { validateInput } from '../utils/validator.js';
import logger from '../utils/logger.js';
import { trackSuccessfulConversion, trackFailedConversion } from '../middleware/metrics.js';
export const getRomanNumeral = (req, res, next) => {
  logger.info('Received request for Roman numeral conversion', { query: req.query });
  try {
    const query = req.query.query;
    validateInput(query);
    const number = parseInt(query);
    const output = intToRoman(number);
    logger.info('Conversion successful', { input: query, output: output });
    trackSuccessfulConversion()
    res.status(200).json({ input: query.toString(), output: output.toString() });
  } catch (error) {
    trackFailedConversion();
    next(error);
  }
};
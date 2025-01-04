import { convertIntegerToRoman } from '../services/romanConvertorService.js';
import { validateInput } from '../utils/validator.js';
import logger from '../utils/logger.js';
import { trackSuccessfulConversion, trackFailedConversion } from '../middleware/metrics.js';
/**
 * GET /romannumeral
 * 
 * Converts a given integer to its Roman numeral representation.
 * 
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function in the stack.
 */
export const getRomanNumeral = (req, res, next) => {
  logger.info('Received request for Roman numeral conversion', { query: req.query });
  try {
    const query = req.query.query;

    // Validate the input
    validateInput(query);
    const number = parseInt(query);

    // Convert the integer to a Roman numeral
    const output = convertIntegerToRoman(number);
    
    logger.info('Conversion successful', { input: query, output: output });

    // Increment the counter for successful Roman numeral conversions
    trackSuccessfulConversion()
    res.status(200).json({ input: query.toString(), output: output.toString() });
  } catch (error) {

    // Increment the counter for failed Roman numeral conversions
    trackFailedConversion();
    next(error);
  }
};

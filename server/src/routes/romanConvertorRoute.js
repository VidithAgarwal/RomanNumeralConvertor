import express from 'express';
import { getRomanNumeral } from '../controllers/romanConvertorController.js';

const router = express.Router();


// Define a GET route at the path ('/rommannumeral') for converting integers to Roman numerals
router.get('/', getRomanNumeral);

export default router;
import express from 'express';
import { getRomanNumeral } from '../controllers/romanConvertorController.js';

const router = express.Router();

router.get('/', getRomanNumeral);

export default router;
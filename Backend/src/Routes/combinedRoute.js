import express from 'express';
import { getCombinedData } from '../controlers/combinedControler.js';

const router = express.Router();

// Define the /combined-data endpoint
router.get('/combined-data', getCombinedData);

export default router;
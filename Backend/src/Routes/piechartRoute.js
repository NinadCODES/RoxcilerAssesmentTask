import express from 'express';
import { getPieChartData } from '../controlers/piechartControler.js';

const router = express.Router();

// Define the /pie-chart endpoint
router.get('/pie-chart', getPieChartData);

export default router;
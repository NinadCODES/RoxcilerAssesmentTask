// routes/barChartRoutes.js

import express from 'express';
import { getBarChartData } from '../controlers/barchatControler.js';

const router = express.Router();

// Define the /bar-chart endpoint
router.get('/bar-chart', getBarChartData);

export default router;
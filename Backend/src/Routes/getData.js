import express from 'express';
import getData from '../controlers/piechartControler.js'
const router = express.Router();

// Define the /pie-chart endpoint
router.get('/get-data', getData);

export default router;
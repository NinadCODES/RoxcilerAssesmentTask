import express from 'express';
import { getStatistics } from "../controlers/statisticsController.js";

const router=express.Router();

router.get('/statictics',getStatistics);
export default router;

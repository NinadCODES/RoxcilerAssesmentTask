// server.js
import express from 'express';
import connectDB from './db.js';
import fetchAndStoreData from './fetchData.js';
import { listTransactions } from './controlers/transactionsController.js';
import StatisticsRout from './Routes/StatisticsRout.js';
import barchartRoute from './Routes/barchartRoute.js';
import piechartRoute from './Routes/piechartRoute.js';
import combinedRoute from './Routes/combinedRoute.js';
import cors from 'cors';
import getData  from './Routes/getData.js';
const app = express();
const PORT = 4000;

// Connect to MongoDB
connectDB();

// Initialize database with seed data
app.get('/api/init', async (req, res) => {
    try {
        await fetchAndStoreData();
        res.send('Database initialized with seed data');
    } catch (error) {
        console.error("Initialization error:", error);
        res.status(500).json({ message: 'Failed to initialize database' });
    }
});

const corsOptions = {
    origin: 'http://192.168.21.1:4000',  // The address of your frontend (replace if necessary)
    methods: 'GET',  // Specify allowed methods (e.g., GET, POST)
    allowedHeaders: 'Content-Type',  // Specify allowed headers
};
app.use(cors(corsOptions)); 

// Route to get statistics
//app.get('/api/statistics', getStatistics);
app.use('/api/v1',StatisticsRout);
app.use('/api/v1',barchartRoute);
app.use('/api/v1',piechartRoute);
app.use('/api/v1',combinedRoute);
app.use('/api/v1',getData);
// Route to list transactions with search and pagination
app.get('/api/transactions', listTransactions);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

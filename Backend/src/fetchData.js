import axios from 'axios';
import Product from './models/product.js';
import connectDB from './db.js';

const fetchAndStoreData = async () => {
    try {
        await connectDB();  // Ensure DB is connected before inserting
        const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
        const products = response.data;

        // Insert data into MongoDB
        await Product.insertMany(products);
        console.log("Data successfully saved to MongoDB!");
    } catch (error) {
        console.error("Error fetching or saving data:", error);
    }
};

export default fetchAndStoreData();

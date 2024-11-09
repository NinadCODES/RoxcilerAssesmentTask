// src/Controllers/transactionsController.js
import Product from '../models/product.js';

export const listTransactions = async (req, res) => {
    const { search, page = 1, perPage = 10 } = req.query;
    const query = {};

    // Search by title, description, or price if search parameter is provided
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { price: { $regex: search, $options: 'i' } }
        ];
    }

    try {
        const transactions = await Product.find(query)
            .skip((page - 1) * perPage)
            .limit(parseInt(perPage));

        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
};

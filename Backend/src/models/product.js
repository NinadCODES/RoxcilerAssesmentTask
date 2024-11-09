// src/models/product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    rating: {
        rate: { type: Number },
        count: { type: Number }
    },
    sold: { type: Boolean, default: false },
    dateOfSale: { type: Date }
});

const Product = mongoose.model("Product", productSchema);
export default Product;

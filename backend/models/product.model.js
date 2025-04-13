import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true  // createdAT, updatedAt
});


// Create a model from the schema
// The model name is 'Product' and it will be used to create a collection named 'products'
const Product = mongoose.model('Product', productSchema);

export default Product;
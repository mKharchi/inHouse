import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true }, // house or appartment
    rent: { type: Boolean, required: true },
    rooms: { type: String, required: true },
    area: { type: Number, required: true },
    location: { type: String, required: true },
    bathrooms: { type: Number, required: true },
    status: {
        type: String,
        enum: ['sold', 'rented', 'available'],
        default: 'available'
    }
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)
export default productModel


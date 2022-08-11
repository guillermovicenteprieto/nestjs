import mongoose from 'mongoose';

export const CartSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    // userId: {
    //     type: Number
    // },
    productId: {
        type: String
    },
    // quantity: {
    //     type: Number
    // },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})
        
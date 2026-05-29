import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            default: 100,
        },

        discountPrice: {
            type: Number,
        },

        brand: {
            type: String,
            required: true,
        },

        ratings: {
            type: Number,
            default: 0,
        },

        images: [
            {
                type: String,
            },
        ],

        category: {
            type: String,
            required: true,
        },

        createdBy: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Product", productSchema);
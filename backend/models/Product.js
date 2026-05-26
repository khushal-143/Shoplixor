import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required:true,
        },

        price: {
            type: Number,
            required: true,
        },

        discountPrice: {
            type: Number,
        },

        brand: {
            type: String,
            required:true,
        },

        ratings: {
            type: Number,
            default: 1,
        },

        images: [
            {
                type: String,
            },
        ],

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },

        createdBy: {
            type: String,
            required:true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Product", productSchema);
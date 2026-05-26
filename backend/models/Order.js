import mongoose from "mongoose";
import addressSchema from "./Address.js";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        orderItems: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },

                quantity: Number,

                price: Number,
            },
        ],

        shippingAddress: addressSchema,

        totalAmount: {
            type: Number,
            required: true,
        },

        paymentMethod: {
            type: String,
            enum: ["COD", "Card", "UPI"],
            default: "COD",
        },

        paymentStatus: {
            type: String,
            enum: ["Pending", "Paid"],
            default: "Pending",
        },

        orderStatus: {
            type: String,
            enum: [
                "Processing",
                "Shipped",
                "Delivered",
                "Cancelled",
            ],
            default: "Processing",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Order", orderSchema);
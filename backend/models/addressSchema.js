import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    fullName: String,
    address: String,
    phone:Number,
    city: String,
    state: String,
    postalCode: String,
    state: String,
});

export default addressSchema;
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import User from './models/User.js';
dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.post('/formData', async (req, res) => {

    try {
        const { name, email, password } = req.body;
        console.log('data from client:', name, email, password);

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });

        }

        // Create new user
        const newUser = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            success: true,
            message: "Data saved successfully",
            data: newUser
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        // User not found
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        // Password check
        if (user.password !== password) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
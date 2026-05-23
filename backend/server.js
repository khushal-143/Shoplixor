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


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
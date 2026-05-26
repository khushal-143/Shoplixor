
import express from "express";
import categories from '../data/categories.js'

const router = express.Router();

// GET ALL CATEGORIES
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    totalCategories: categories.length,
    categories,
  });
});

export default router;
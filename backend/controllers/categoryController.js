import categories from "../data/categories.js";

// GET ALL CATEGORIES
export const getAllCategories = (req, res) => {
  res.status(200).json({
    success: true,
    totalCategories: categories.length,
    categories,
  });
};
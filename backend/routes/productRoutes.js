import express from "express";
import products from "../data/products.js";

const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    totalProducts: products.length,
    products,
  });
});

router.get("/search", (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({
      success: false,
      message: "Search query is required",
    });
  }

  // Search Logic
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.brand.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json({
    success: true,
    totalResults: searchedProducts.length,
    searchedProducts,
  });
});

// GET single product
router.get("/:id", (req, res) => {
  const product = products.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
});



export default router;
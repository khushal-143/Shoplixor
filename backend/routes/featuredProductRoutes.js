import express from "express";
import products from "../data/products.js";

const router = express.Router();

router.get("/", (req, res) => {
    
  const featuredProducts = products
    .filter((product) => product.ratings >= 4.7)
    .slice(0, 10);

  res.status(200).json({
    success: true,
    totalFeatured: featuredProducts.length,
    featuredProducts,
  });
});

export default router;
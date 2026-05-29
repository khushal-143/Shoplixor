import express from "express";

import {
  getAllProducts,
  searchProducts,
  getSingleProduct,
  getFeaturedProducts,
  getRelatedProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/search", searchProducts);

router.get("/featured", getFeaturedProducts);

router.get("/:id/related", getRelatedProducts);

router.get("/:id", getSingleProduct);

export default router;
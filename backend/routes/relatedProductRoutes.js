import express from "express";
import products from "../data/products.js";

const router = express.Router();

router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  // current product
  const currentProduct = products.find(
    (product) => product.id === productId
  );

  // Product not found
  if (!currentProduct) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  // Find related products
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, 6);

  res.status(200).json({
    success: true,
    currentProduct: currentProduct.title,
    totalRelatedProducts: relatedProducts.length,
    relatedProducts,
  });
});

export default router;
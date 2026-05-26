import express from "express";

import wishlistItems from "../data/wishlist.js";
import products from "../data/products.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    totalWishlistItems: wishlistItems.length,
    wishlistItems,
  });
});

router.post("/add/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  // Find product
  const product = products.find(
    (item) => item.id === productId
  );

  // Product not found
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  // Check already exists
  const existingWishlistItem = wishlistItems.find(
    (item) => item.productId === productId
  );

  if (existingWishlistItem) {
    return res.status(400).json({
      success: false,
      message: "Product already in wishlist",
    });
  }

  // Create wishlist item
  const newWishlistItem = {
    wishlistItemId: wishlistItems.length + 1,
    productId: product.id,
    title: product.title,
    description: product.description,
    image: product.image || "",
    price: product.discountPrice,
    brand: product.brand,
    category: product.category,
  };

  wishlistItems.push(newWishlistItem);

  res.status(201).json({
    success: true,
    message: "Product added to wishlist",
    wishlistItem: newWishlistItem,
  });
});

router.delete("/remove/:id", (req, res) => {
  const wishlistItemId = parseInt(req.params.id);

  const itemIndex = wishlistItems.findIndex(
    (item) => item.wishlistItemId === wishlistItemId
  );

  // Item not found
  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Wishlist item not found",
    });
  }

  // Remove item
  const removedItem = wishlistItems.splice(
    itemIndex,
    1
  );

  res.status(200).json({
    success: true,
    message: "Item removed from wishlist",
    removedItem,
    wishlistItems,
  });
});

export default router;
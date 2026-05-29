import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  getCart,
  addToCart,
  removeCartItem,
  clearCart,
  updateCartQuantity,
} from "../controllers/cartController.js";

const router = express.Router();


// GET USER CART
router.get(
  "/",
  authMiddleware,
  getCart
);


// ADD TO CART
router.post(
  "/add",
  authMiddleware,
  addToCart
);


// REMOVE ITEM
router.delete(
  "/remove/:id",
  authMiddleware,
  removeCartItem
);


// CLEAR CART
router.delete(
  "/clear",
  authMiddleware,
  clearCart
);

router.put("/update", authMiddleware, updateCartQuantity);

export default router;
import express from "express";
import cartItems from "../data/cart.js";

const router = express.Router();

// GET CART
router.get("/", (req, res) => {
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  res.status(200).json({
    success: true,
    totalItems,
    totalPrice,
    cartItems,
  });
});

// ADD TO CART
router.post("/add", (req, res) => {
  const {
    productId,
    title,
    description,
    image,
    price,
    quantity,
    brand,
    category,
  } = req.body;

  const existingItem = cartItems.find(
    (item) => item.productId === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity || 1;

    return res.status(200).json({
      success: true,
      message: "Quantity updated in cart",
      cartItems,
    });
  }

  const newCartItem = {
    cartItemId: cartItems.length + 1,
    productId,
    title,
    description,
    image,
    price,
    quantity: quantity || 1,
    brand,
    category,
  };

  cartItems.push(newCartItem);

  res.status(201).json({
    success: true,
    message: "Product added to cart",
    cartItem: newCartItem,
  });
});

// REMOVE SINGLE CART ITEM

router.delete("/remove/:id", (req, res) => {
  const cartItemId = parseInt(req.params.id);

  // Find item index
  const itemIndex = cartItems.findIndex(
    (item) => item.cartItemId === cartItemId
  );

  // Item not found
  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Cart item not found",
    });
  }

  // Remove item
  const removedItem = cartItems.splice(itemIndex, 1);

  res.status(200).json({
    success: true,
    message: "Item removed from cart",
    removedItem,
    cartItems,
  });
});

export default router;
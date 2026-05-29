import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// GET USER CART
export const getCart = async (req, res) => {
    try {
        // Find user's cart
        const cart = await Cart.findOne({
            user: req.user._id,
        }).populate("items.product");

        // Empty cart
        if (!cart) {
            return res.status(200).json({
                success: true,
                items: [],
                totalItems: 0,
                totalPrice: 0,
            });
        }

        // Total quantity
        const totalItems = cart.items.reduce(
            (acc, item) =>
                acc + item.quantity,
            0
        );

        // Total price
        const totalPrice = cart.items.reduce(
            (acc, item) =>
                acc +
                ((item.product?.discountPrice || 0) * item.quantity),
            0
        );

        res.status(200).json({
            success: true,
            totalItems,
            totalPrice,
            cart,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// ADD TO CART
export const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Product exists?
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        // Find user's cart
        let cart = await Cart.findOne({ user: req.user._id, });

        // Create cart if not exists
        if (!cart) {
            cart = await Cart.create({
                user: req.user._id,
                items: [],
            });
        }

        // Check if product already exists
        const existingProduct = cart.items.find((item) => item.product.toString() === productId);

        if (existingProduct) {
            existingProduct.quantity += quantity || 1;
        }
        else {
            cart.items.push({
                product: productId,
                quantity: quantity || 1,
            });
        }

        await cart.save();

        res.status(200).json({
            success: true,
            message:
                "Product added to cart",
            cart,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// REMOVE CART ITEM
export const removeCartItem = async (req, res) => {
    try {
        const productId = req.params.id;

        const cart = await Cart.findOne({
            user: req.user._id,
        });

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found",
            });
        }

        // Remove item
        cart.items = cart.items.filter(
            (item) =>
                item.product.toString() !==
                productId
        );

        await cart.save();

        res.status(200).json({
            success: true,
            message:
                "Item removed from cart",
            cart,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// CLEAR CART
export const clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({
            user: req.user._id,
        });

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found",
            });
        }

        cart.items = [];

        await cart.save();

        res.status(200).json({
            success: true,
            message:
                "Cart cleared successfully",
            cart,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// UPDATE CART ITEM QUANTITY
export const updateCartQuantity = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        const cart = await Cart.findOne({
            user: req.user._id,
        });

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found",
            });
        }

        const item = cart.items.find(
            (item) =>
                item.product.toString() === productId
        );

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found in cart",
            });
        }

        if (quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be at least 1",
            });
        }

        item.quantity = quantity;

        await cart.save();

        const updatedCart = await Cart.findOne({
            user: req.user._id,
        }).populate("items.product");

        res.status(200).json({
            success: true,
            message: "Cart updated successfully",
            cart: updatedCart,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
import express from "express";

import {
  getAllCategories,
} from "../controllers/categoryController.js";

const router = express.Router();

// GET ALL CATEGORIES
router.get("/", getAllCategories);

export default router;
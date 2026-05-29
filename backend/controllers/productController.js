import Product from "../models/Product.js";
// GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
  try {

    const products =
      await Product.find();

    res.status(200).json({
      success: true,
      totalProducts: products.length,
      products,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// SEARCH PRODUCTS
export const searchProducts = async (
  req,
  res
) => {
  try {

    const query = req.query.query;

    const searchedProducts =
      await Product.find({
        $or: [
          {
            title: {
              $regex: query,
              $options: "i",
            },
          },
          {
            brand: {
              $regex: query,
              $options: "i",
            },
          },
          {
            category: {
              $regex: query,
              $options: "i",
            },
          },
        ],
      });

    res.status(200).json({
      success: true,
      totalResults:
        searchedProducts.length,
      searchedProducts,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE PRODUCT
export const getSingleProduct = async (req, res) => {
  try {

    const product = await Product.findById(
      req.params.id
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

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET FEATURED PRODUCTS
export const getFeaturedProducts = async (
  req,
  res
) => {
  try {

    const featuredProducts =
      await Product.find({
        ratings: { $gte: 4.7 }
      }).limit(10);

    res.status(200).json({
      success: true,
      totalFeatured:
        featuredProducts.length,
      featuredProducts,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET RELATED PRODUCTS
export const getRelatedProducts = async (
  req,
  res
) => {
  try {

    const currentProduct =
      await Product.findById(
        req.params.id
      );

    if (!currentProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const relatedProducts =
      await Product.find({
        category:
          currentProduct.category,
        _id: {
          $ne: currentProduct._id,
        },
      }).limit(6);

    res.status(200).json({
      success: true,
      totalRelatedProducts:
        relatedProducts.length,
      relatedProducts,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
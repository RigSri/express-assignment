const express = require("express");

const router = express.Router();

const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/product.controller");

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;

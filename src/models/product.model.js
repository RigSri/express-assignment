const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
        },

        quantity: {
            type: Number,
            default: 0,
        },

        category: {
            type: String,
            default: "General",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", productSchema);
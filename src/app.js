const express = require("express");
const morgan = require("morgan");

const logger = require("./middleware/logger");
const productRoutes = require("./routes/product.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

app.get("/", (req, res) => {
    res.send("MVC Backend Running");
});

app.use("/products", productRoutes);
app.use(errorHandler);
module.exports = app;
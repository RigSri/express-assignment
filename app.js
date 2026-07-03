const express = require("express");
const morgan = require("morgan");
const logger = require("./src/middleware/logger");

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get("/user/:id", (req, res) => {
    res.send(`User ID is ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/search", (req, res) => {

    const name = req.query.name;

    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);

});

app.post("/student", (req, res) => {

    const data = req.body;

    res.json({
        message: "Student received",
        student: data
    });

});

app.get("/about", (req, res) => {
    res.send("This is Express Assignment");
});
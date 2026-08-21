const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
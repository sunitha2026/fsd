const express = require("express");

const app = express();

// Route Parameter
app.get("/user/:id", (req, res) => {
    const id = req.params.id;

    res.send(`User ID is: ${id}`);
});

// Query Parameter
app.get("/search", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
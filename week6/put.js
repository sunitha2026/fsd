const express = require("express");

const app = express();

app.use(express.json());

// GET - Dynamic URL
app.get("/user/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        method: "GET",
        userId: id,
        message: "User details fetched successfully"
    });
});

// POST - Sending and Receiving JSON
app.post("/user", (req, res) => {
    const user = req.body;

    res.json({
        method: "POST",
        message: "User created successfully",
        user: user
    });
});

// PUT - Sending and Receiving JSON
app.put("/user/:id", (req, res) => {
    const id = req.params.id;
    const user = req.body;

    res.json({
        method: "PUT",
        message: "User updated successfully",
        userId: id,
        updatedData: user
    });
});

// DELETE - Dynamic URL
app.delete("/user/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        method: "DELETE",
        message: "User deleted successfully",
        userId: id
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
    console.log("http://localhost:5000");
});
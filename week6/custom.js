const express = require("express");

const app = express();

// Custom Middleware for Logging
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// Use custom middleware
app.use(logger);

// Route
app.get("/user", (req, res) => {
    res.json({
        message: "User details fetched successfully",
        name: "Sunitha",
        course: "AIML"
    });
});

// Start server
app.listen(7000, () => {
    console.log("Server running on port 7000");
    console.log("http://localhost:7000/user");
});
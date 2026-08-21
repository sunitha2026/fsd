const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.json({
        id: 101,
        name: "Sunitha",
        course: "AIML",
        message: "User details fetched successfully"
    });
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
    console.log("http://localhost:4000/user");
});
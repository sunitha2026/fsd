const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    branch: String
});

const Student = mongoose.model("Student", studentSchema);

// CREATE
app.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Created");
});

// READ
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// UPDATE
app.put("/students/:id", async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send("Student Updated");
});

// DELETE
app.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student Deleted");
});

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Atlas Connected");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    } catch (err) {
        console.log("MongoDB connection error:", err);
    }
}

startServer();
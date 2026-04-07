const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/eventDB")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ Error:", err));

// Schema
const registrationSchema = new mongoose.Schema({
    name: String,
    student_id: String,
    event: String,
    date: String
});

// Model
const Registration = mongoose.model("Registration", registrationSchema);

// POST API
app.post("/register", async (req, res) => {
    console.log("Incoming Data:", req.body); // Debug

    try {
        const newData = new Registration(req.body);
        await newData.save();
        res.json({ message: "✅ Data saved successfully" });
    } catch (error) {
        res.status(500).json({ error: "❌ Error saving data" });
    }
});

// GET API
app.get("/registrations", async (req, res) => {
    const data = await Registration.find();
    res.json(data);
});

// Start Server
app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});
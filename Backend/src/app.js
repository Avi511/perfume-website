const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Basic route to check if API is running
app.get("/", (req, res) => {
    res.send("API is running...");
});

module.exports = app;
import express from "express";
import cors from "cors";
import morgan from "morgan";

// FIX: Successfully imported the routes!
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Basic route to check if API is running
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Mounted the order routes successfully
app.use("/api/orders", orderRoutes);

export default app;
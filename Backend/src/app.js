import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/src/uploads", express.static(path.join(__dirname, "/src/uploads")));

app.use(notFound);
app.use(errorHandler);

export default app;
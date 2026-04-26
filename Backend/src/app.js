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
import adminRoutes from "./routes/adminRoutes.js";
import payhereRoutes from "./routes/payhereRoutes.js";
import contactDetailsRoutes from "./routes/contactDetailsRoutes.js";


import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(
    cors({
        origin: [process.env.FRONTEND_URL, "http://localhost:5173", "http://localhost:5174", "http://localhost:5175"].filter(Boolean),
        credentials: true,
    })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/payhere", payhereRoutes);
app.use("/api/contact", contactDetailsRoutes);


const dirname = path.resolve();
app.use("/src/uploads", express.static(path.join(dirname, "/src/uploads")));

app.use(notFound);
app.use(errorHandler);

export default app;
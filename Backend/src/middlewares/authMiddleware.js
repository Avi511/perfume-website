import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authMiddleware = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET || "superdeepsecretkey");
            const queryId = decoded.userId || decoded.id || decoded._id;

            if (queryId) {
                req.user = await User.findOne({
                    $or: [{ userId: queryId }, { _id: queryId }]
                }).select("-password");
            } else {
                req.user = decoded;
            }

            if (!req.user) {
                return res.status(401).json({ error: "Not authorized. User no longer exists." });
            }

            next();
        } catch (error) {
            console.error("JWT Error:", error);
            return res.status(401).json({ error: "Not authorized. Invalid or expired token." });
        }
    }

    if (!token) {
        return res.status(401).json({ error: "Not authorized. No token provided." });
    }
};
export const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        return res.status(401).json({ error: "Not authorized as an admin" });
    }
};

export const seller = (req, res, next) => {
    if (req.user && (req.user.isSeller || req.user.isAdmin)) {
        next();
    } else {
        return res.status(401).json({ error: "Not authorized as a seller" });
    }
};


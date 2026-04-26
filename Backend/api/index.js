import mongoose from 'mongoose';
import app from '../src/app.js';
import connectDB from '../src/config/db.js';

let isConnected = false;

const handler = async (req, res) => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (dbError) {
      console.error("Vercel DB Connection Error:", dbError);
      return res.status(500).json({ error: "Database connection failed on Vercel. Please check MONGO_URI environment variable." });
    }
  }
  return app(req, res);
};

export default handler;

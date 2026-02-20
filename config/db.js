import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    const MONGO_URL =
      process.env.MONGO_URL || "mongodb://localhost:27017/password-reset-db";

    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Database error:", error.message);

    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ||
        "mongodb+srv://cuong:cuong@cluster0.fkjbif3.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("🚀 MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};




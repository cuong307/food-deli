import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      process.env.MONGO_URL || "mongodb+srv://cuong:cuong@cluster0.fkjbif3.mongodb.net/?appName=Cluster0")
};



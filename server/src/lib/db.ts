import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not defined");
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error in connecting MongoDB", error.message);
    } else {
      console.log("Error in connecting MongoDB", error);
    }
    process.exit(1); // 0 is success
  }
};
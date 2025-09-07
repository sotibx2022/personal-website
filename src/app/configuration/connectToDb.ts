import mongoose from "mongoose";
const connectToDb = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("⚡ MongoDB is already connected");
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    process.exit(1); 
  }
};
export default connectToDb;

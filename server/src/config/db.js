import mongoose from "mongoose";

export const connectDatabase = async (uri) => {
  if (!uri) {
    throw new Error("MONGODB_URI is missing. Add it to server/.env or your shell environment.");
  }

  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("MongoDB connected");
};

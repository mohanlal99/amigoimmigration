import mongoose from "mongoose";
import { NextResponse } from "next/server";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined.");
}

export async function ConnectDB() {
  // Check if already connected
  if (mongoose.connection.readyState >= 1) {
    return NextResponse.json({
      status: "success",
      message: "MongoDB already connected.",
    });
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s if no response from server
    });

    return NextResponse.json({
      status: "success",
      message: "MongoDB connected successfully.",
    });
  } catch {
    return NextResponse.json({
      status: "error",
      message: "Failed to connect to MongoDB",
    });
  }
}

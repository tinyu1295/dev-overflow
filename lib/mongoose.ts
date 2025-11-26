import mongoose, { Mongoose } from "mongoose";
import logger from "./logger";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null as any, promise: null };
}

const connectDB = async (): Promise<Mongoose> => {
  if (cached!.conn) {
    logger.info("Using cached MongoDB connection");
    return cached!.conn;
  }

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI!;
    cached.promise = mongoose
      .connect(uri)
      .then((result) => {
        console.log("Connected to MongoDB");
        return result;
      })
      .catch((error) => {
        logger.error({ err: error }, "Error connecting to MongoDB");
        throw error;
      });
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
};

export default connectDB;

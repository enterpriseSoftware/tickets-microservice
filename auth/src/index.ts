import mongoose from "mongoose";
import { app } from "./app";
 
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY is not defined");
  }
  if (!process.env.AUTH_URI) {
    throw new Error("AUTH_URI is not defined");
  }

  try {
    await mongoose.connect(process.env.AUTH_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Trouble inside index.ts mongo connection");
  }
  app.listen(3000, () => {
    console.log("Auth Service Listening on port 3000");
  });
};
7;

start();

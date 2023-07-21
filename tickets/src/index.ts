import mongoose from "mongoose";
import { app } from "./app";
 
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY is not defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  try {

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log('mongo ticketing error ',err);
  }
  
  app.listen(3000, () => {
    console.log("Ticket Service Listening on port 3000");
  });
};


start();

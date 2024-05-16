import connectDB from "./db/index.js";

import dotenv from "dotenv";
dotenv.config({ path: "./env" });

connectDB();
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Errror", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Errror", error);
    throw error;
  }
})();
*/

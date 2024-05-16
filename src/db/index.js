import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstace = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n Mongo DB connected !! ${connectionInstace.connection.host}`
    );
  } catch (error) {
    console.log("Mongoose data base connection error", error);
    process.exit(1);
  }
};
export default connectDB;

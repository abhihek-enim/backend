import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

async function connectToDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DATABASE_NAME}`
    );
    console.log('MONGODB connected!! to host :',connectionInstance.connection.host);
  } catch (error) {
      console.log("MONGODB CONNECTION ERROR: ", error);
      process.exit(1)
  }
}

export default connectToDB;
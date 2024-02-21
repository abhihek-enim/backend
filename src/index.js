import dotenv from "dotenv"
import mongoose from "mongoose";
import { DATABASE_NAME } from "./constants.js";
import express from "express";
import connectToDB from "./db/index.js";

dotenv.config({
  path:'./env'
})
connectToDB();
//using iffy
// connecting to database is a complex process and is prone to mistakes/error so, using try and catch with async await is must
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.DATABASE_URI}/${DATABASE_NAME}`);
//     app.on("error", (err) => {
//       throw err;
//     });
//       app.listen(process.env.PORT, () => {
//           console.log(`server is running on localhost:${process.env.PORT}`)
//     });
//   } catch (error) {
//     throw error;
//   }
// })();

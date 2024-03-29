import dotenv from "dotenv";
import connectToDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
// app.use(cors()), here cors() is a middleware. 
connectToDB()
  .then(() => {
    app.on("error", (err) => {
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("server listeining at:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed....:", err);
  });










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

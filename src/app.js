import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express;
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));// for requesting data via json
app.use(express.urlencoded({ extended: true, limit: "16kb" }));// for requesting data via url
app.use(express.static("public"));// to save some genric file in public folder
app.use(cookieParser());// to manage secure cookies
export { app };

import dotenv from "dotenv";
dotenv.config({
    path: "./src/.env"
});

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import auth from "./routes/auth.routes.js";
import food from "./routes/food.routes.js";


const app = express();

// ✅ Middlewares — must come BEFORE routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// ✅ Routes
app.use("/api/auth", auth);
app.use("/api/food",food);

export { app };

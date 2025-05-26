import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute";
import { connectDB } from "./lib/db";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas using the helper function
connectDB();

app.use("/api", authRoute);

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
//const express = require('express');
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import monsterRouter from "./routes/monsters.js";

dotenv.config();
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.info("Connected to Mongo Atlas"));

// Middleware
app.use(express.json());
app.use("/monsters", monsterRouter);

app.listen(3000, () => console.log("Server Started"));

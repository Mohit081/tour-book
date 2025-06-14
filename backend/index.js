import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./src/routes/tours.js";
import connectDB from "./src/db.js";
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});  
  
app.use("/api/v1", Router); 

app.listen(process.env.port || 3000, () => {
  console.log(`server is running at ${3000}`);
});

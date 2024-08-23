import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import apiRouter from "./routes/apiRouter.js";
const port = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api", apiRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

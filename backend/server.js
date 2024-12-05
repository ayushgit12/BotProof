import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import apiRouter from "./routes/apiRouter.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

// Enable CORS
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// Use path to resolve the current directory (similar to __dirname in CommonJS)
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, "build")));

// Serve the index.html file on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Uncomment and adjust the following if you need mouse data handling
// const mouse = {
//   x: 0,
//   y: 0,
//   timestamp: 0,
// };

// app.get("/mouse", (req, res) => {
//   res.json(mouse);
// });

// app.post("/mouse-data", (req, res) => {
//   const mouseData = req.body;
//   console.log("Received mouse data:", mouseData);
//   res.status(200).json({ message: "Mouse data received successfully" });
// });

// Use the API router
app.use("/api", apiRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

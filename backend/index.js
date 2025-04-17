import express from "express";
import dotenv from "dotenv";
import moviesRoutes from "./routes/movie.route.js";
import cors from "cors";
import path from "path";
dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/movies", moviesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import moviesRoutes from "./routes/movie.route.js";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/movies", moviesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

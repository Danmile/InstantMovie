import express from "express";
import dotenv from "dotenv";
import moviesRoutes from "./routes/movie.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/movies", moviesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

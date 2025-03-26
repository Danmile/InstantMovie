import mongoose from "mongoose";
//Schema
const movieSchema = new mongoose.Schema({
  tmdb_id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  overview: { type: String },
  genres: [{ type: String }],
  release_date: { type: String },
  popularity: { type: Number },
  poster_path: { type: String },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

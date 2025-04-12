import MovieCard from "./MovieCard";
import { useMovieStore } from "../store/useMovieStore";
import { useEffect, useState, useRef } from "react";

function MovieGrid({ movies = [] }) {
  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-8 justify-center items-center space-x-25">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;

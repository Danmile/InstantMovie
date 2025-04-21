import MovieCard from "./MovieCard";
import { useMovieStore } from "../store/useMovieStore";
import { useEffect, useState, useRef } from "react";

function MovieGrid({ movies = [] }) {
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGrid(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`p-6 transition-opacity duration-500 ${
        showGrid ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-wrap gap-6 justify-center items-center space-x-25">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;

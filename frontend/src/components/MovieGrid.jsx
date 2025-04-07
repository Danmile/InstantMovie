import MovieCard from "./MovieCard";
import { useMovieStore } from "../store/useMovieStore";
import { useEffect, useState, useRef } from "react";

function MovieGrid() {
  const { movies, getMostPopular } = useMovieStore();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    getMostPopular(page).finally(() => setLoading(false));
  }, [page]);

  // Observe bottom element
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="p-6 bg-black min-h-screen">
      <div className="flex flex-wrap gap-8 justify-center items-center space-x-25">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            image={movie.image}
            overview={movie.overview}
            trailerUrl={movie.trailer}
            movieRating={movie.rating}
          />
        ))}
      </div>
      <div
        ref={loaderRef}
        className="h-16 flex justify-center items-center mt-10"
      >
        {loading && <p className="text-white text-sm">Loading more...</p>}
      </div>
    </div>
  );
}

export default MovieGrid;

import React, { useEffect, useState, useRef } from "react";
import MovieGrid from "../components/MovieGrid";
import { useMovieStore } from "../store/useMovieStore";

const RecommendedPage = () => {
  const { reccomandedMovies, getReccomandedMovies } = useMovieStore();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    getReccomandedMovies(page).finally(() => setLoading(false));
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
    <div className="bg-black min-h-screen pt-10">
      <h1 className="text-white text-[50px] font-bold mb-6 text-center">
        <span className="text-amber-400">Recommended</span> For You
      </h1>
      <MovieGrid movies={reccomandedMovies} />
      <div
        ref={loaderRef}
        className="h-16 flex justify-center items-center mt-10"
      >
        {loading && (
          <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        )}
      </div>
    </div>
  );
};

export default RecommendedPage;

import React from "react";
import { useMovieStore } from "../store/useMovieStore";
import MovieGrid from "../components/MovieGrid";

const FavoritesPage = () => {
  const { favMovies } = useMovieStore();
  return (
    <div className="bg-black min-h-screen pt-10">
      <h1 className="text-white text-[50px] font-bold mb-6 text-center">
        <span className="text-amber-400">Favorites</span>
      </h1>
      <MovieGrid movies={favMovies} />
    </div>
  );
};

export default FavoritesPage;

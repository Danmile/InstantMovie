import React, { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import { useMovieStore } from "../store/useMovieStore";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  const { movies, searchForMovies } = useMovieStore();
  return (
    <div className="bg-black min-h-screen pt-10">
      <h1 className="text-white text-[50px] font-bold mb-6 text-center">
        Search <span className="text-amber-400">For Movies</span>
      </h1>
      <div className="flex justify-center my-8">
        <input
          type="text"
          className="w-full max-w-xl px-6 py-3 rounded-xl bg-zinc-800 text-white text-lg placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 shadow-md"
          placeholder="Search for a movie... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => searchForMovies(query)}
          className="bg-amber-400 px-6 py-3 rounded-xl text-black ml-4 hover:bg-amber-500 transition"
        >
          Search
        </button>
      </div>

      <MovieGrid movies={movies} />
    </div>
  );
};

export default SearchPage;

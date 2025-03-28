import React from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Snow White",
    image: "https://image.tmdb.org/t/p/w500/xWWg47tTfparvjK0WJNX4xL8lW2.jpg",
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
];

const MovieGrid = () => {
  return (
    <div className="p-6 bg-zinc-100 min-h-screen">
      <h1 className="text-black text-2xl font-bold mb-6 text-center">
        Most popular
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {movies.map((movie, index) => (
            <MovieCard key={index} title={movie.title} image={movie.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieGrid;

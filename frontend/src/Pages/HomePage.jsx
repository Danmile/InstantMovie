import React from "react";
import MovieGrid from "../components/MovieGrid";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen pt-10">
      <h1 className="text-white text-[50px] font-bold mb-6 text-center">
        Most <span className="text-amber-400">Popular</span>
      </h1>
      <MovieGrid />
    </div>
  );
};

export default HomePage;

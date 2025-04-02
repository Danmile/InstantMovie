import React from "react";
import MovieGrid from "../components/MovieGrid";

const RecommendedPage = () => {
  return (
    <div className="bg-black min-h-screen pt-10">
      <h1 className="text-white text-[50px] font-bold mb-6 text-center">
        <span className="text-amber-400">Recommended</span> For You
      </h1>
      <MovieGrid />
    </div>
  );
};

export default RecommendedPage;

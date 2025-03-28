import React from "react";

const MovieCard = ({ title, image }) => {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl w-60">
      <img src={image} alt={title} className="w-full h-90 object-cover" />
    </div>
  );
};

export default MovieCard;

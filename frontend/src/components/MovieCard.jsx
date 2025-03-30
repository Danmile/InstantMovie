import React, { useState } from "react";

const MovieCard = ({ title, image, overview }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-slate-800 rounded-xl overflow-hidden drop-shadow-[4px_2px_8px_rgba(255,255,255,0.4)] cursor-pointer transform transition-all duration-300 ease-in-out flex ${
        isOpen ? "w-[500px]" : "w-60"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <img
        src={image}
        alt={title}
        className="w-60 h-90 object-cover flex-shrink-0"
      />

      {/* Right info panel */}
      {isOpen && (
        <div className="p-4 text-white flex flex-col justify-center w-full">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-300">{overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;

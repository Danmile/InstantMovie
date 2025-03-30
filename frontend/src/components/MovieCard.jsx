import { useState } from "react";

const MovieCard = ({ title, image, overview }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-lg z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Card */}
      <div
        className={`${
          isOpen
            ? "fixed z-50 transition-transform duration-900 origin-center scale-130 w-max max-w-3xl h-max"
            : "relative drop-shadow-[4px_2px_8px_rgba(255,255,255,0.4)]"
        } bg-slate-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-900 ease-in-out`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col md:flex-row">
          <img
            src={image}
            alt={title}
            className={`object-cover ${
              isOpen ? "w-full md:w-1/2 h-80" : "w-60 h-80"
            }`}
          />

          {isOpen && (
            <div className="p-4 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm">{overview}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;

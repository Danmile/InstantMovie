import { useState } from "react";

const MovieCard = ({ title, image, overview, trailerUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getYouTubeID = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <>
      {/* Backdrop when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-lg w-[100%] z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Card */}
      <div
        className={`${
          isOpen
            ? "fixed z-50 transition-transform duration-900 origin-center sm:scale-100 md:scale-150 lg:scale-200 max-w-xl h-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "relative drop-shadow-[4px_2px_8px_rgba(255,255,255,0.4)]"
        } bg-neutral-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-900 ease-in-out`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col md:flex-row">
          <img
            src={image}
            alt={title}
            className={`object-cover ${isOpen ? "hidden" : "w-60 h-80"}`}
          />

          {isOpen && (
            <div className="pb-4 text-white flex flex-col justify-center">
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  className="w-full h-full border-0"
                  src={`https://www.youtube.com/embed/${getYouTubeID(
                    trailerUrl
                  )}?autoplay=1&mute=1&start=5&loop=1&controls=0&modestbranding=1&rel=0&playlist=${getYouTubeID(
                    trailerUrl
                  )}`}
                  title="YouTube trailer"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-2xl font-bold mt-10 ml-4">{title}</h3>
              <p className="text-gray-300 text-[7px] m-4">{overview}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;

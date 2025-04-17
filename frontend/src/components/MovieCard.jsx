import { useState } from "react";
import StarRatings from "react-star-ratings";
import { Heart } from "lucide-react";
import { useMovieStore } from "../store/useMovieStore";

const MovieCard = ({ movie }) => {
  const { title, image, overview, trailer, rating, genres, year } = movie;
  const [isOpen, setIsOpen] = useState(false);
  const { addFavMovies } = useMovieStore();

  const getYouTubeID = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    return match ? match[1] : null;
  };

  const isLiked = useMovieStore((state) => {
    return state.favMovies.some((fav) => fav.id === movie.id);
  });

  return (
    <>
      {/* Backdrop when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-lg w-full z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Card Container to maintain grid space */}
      <div className="relative w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px] mx-auto">
        <div
          className={`${
            isOpen
              ? "fixed z-50 w-[90%] max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 md:scale-125 lg:scale-150 overflow-auto"
              : "relative w-full h-full drop-shadow-[4px_2px_8px_rgba(255,255,255,0.4)] hover:scale-105"
          } bg-neutral-800 rounded-xl overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out will-change-transform`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`flex flex-col ${isOpen ? "w-full" : "h-full"}`}>
            <img
              src={image}
              alt={title}
              className={`object-cover w-full h-full ${isOpen ? "hidden" : ""}`}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                addFavMovies(movie);
              }}
              className={`absolute ${
                isOpen ? "top-4 right-4" : "top-2 right-2"
              } p-1 bg-black/20 rounded-full transition-transform duration-200`}
            >
              <Heart
                size={isOpen ? 16 : 18}
                className={`transition-colors duration-600 ${
                  isLiked ? "text-red-500 fill-red-500" : "text-white"
                }`}
              />
            </button>

            {isOpen && (
              <div className="p-4 text-white flex flex-col justify-start">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  {trailer ? (
                    <iframe
                      loading="lazy"
                      className="w-full h-full border-0"
                      src={`https://www.youtube.com/embed/${getYouTubeID(
                        trailer
                      )}?autoplay=1&mute=1&start=5&loop=1&controls=0&modestbranding=1&rel=0&playlist=${getYouTubeID(
                        trailer
                      )}`}
                      title="YouTube trailer"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
                <p className="text-3xl font-bold mt-4">{title}</p>
                <p className="text-lg text-gray-400 mt-1">{year}</p>
                <p className="text-xs text-gray-400 mt-2">{genres}</p>
                <div className="mt-3">
                  <StarRatings
                    rating={rating / 2}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="2px"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mt-3">
                  {overview}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

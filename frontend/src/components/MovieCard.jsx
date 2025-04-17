import { useState } from "react";
import StarRatings from "react-star-ratings";
import { Heart } from "lucide-react";
import { useMovieStore } from "../store/useMovieStore";

const MovieCard = ({ movie }) => {
  const { title, image, overview, trailer, rating, genres, year } = movie;
  const [isOpen, setIsOpen] = useState(false);
  // const [liked, setLiked] = useState(false);
  const { addFavMovies, favMovies } = useMovieStore();

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
          className="fixed inset-0 bg-black/40 backdrop-blur-lg w-[100%] z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Card */}
      <div
        className={`${
          isOpen
            ? "fixed z-50 transition-transform duration-900 origin-center sm:scale-100 md:scale-150 lg:scale-200 w-xl h-max top-1/3 -translate-x-1 -translate-y-1 will-change-transform"
            : "relative drop-shadow-[4px_2px_8px_rgba(255,255,255,0.4)] hover:scale-105"
        } bg-neutral-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-900 ease-in-out`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`flex flex-col md:flex-row ${isOpen ? "" : "w-80 h-110"}`}
        >
          <img
            src={image}
            alt={title}
            className={`object-cover w-full h-full ${isOpen ? "hidden" : ""}`}
          />
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent triggering card open
              addFavMovies(movie);
            }}
            className={`absolute ${
              isOpen ? "top-85 right-5" : "top-2 right-2"
            } p-1 bg-black/20 rounded-full transition-transform duration-200`}
          >
            <Heart
              size={isOpen ? 10 : 20}
              className={`transition-colors duration-600 ${
                isLiked ? "text-red-500 fill-red-500" : "text-white"
              }`}
            />
          </button>

          {isOpen && (
            <div className="pb-4 text-white flex flex-col justify-center">
              <div className="aspect-video w-full overflow-hidden">
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
                  <div className="w-full h-full mt-5">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold mt-3 ml-4">{title}</h3>
              <p className="text-[7px] ml-4 text-gray-400">{year}</p>
              <p className="text-[7px] mt-3 ml-4 text-gray-400">{genres}</p>
              <div className="ml-4">
                <StarRatings
                  rating={rating / 2}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                  starDimension="10px"
                  starSpacing="1px"
                />
              </div>
              <p className="text-gray-300 text-[7px] m-4">{overview}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;

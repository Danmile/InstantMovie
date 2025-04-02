import MovieCard from "./MovieCard";
import { useMovieStore } from "../store/useMovieStore";
import { useEffect } from "react";

// const movies = [
//   {
//     title: "Inception",
//     image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
//     overview:
//       "A skilled thief is offered a chance to have his past crimes forgiven if he can implant another person's idea into a target's subconscious.",
//     trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
//   },
//   {
//     title: "Avengers: Endgame",
//     image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
//     overview:
//       "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
//     trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
//   },
//   {
//     title: "Joker",
//     image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//     overview:
//       "A mentally troubled comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
//     trailerUrl: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
//   },
//   {
//     title: "Dune",
//     image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
//     overview:
//       "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis.",
//     trailerUrl: "https://www.youtube.com/watch?v=n9xhJrPXop4",
//   },
//   {
//     title: "Oppenheimer",
//     image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
//     overview:
//       "The story of J. Robert Oppenheimer and the creation of the atomic bomb during World War II.",
//     trailerUrl: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
//   },
//   {
//     title: "Barbie",
//     image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
//     overview:
//       "Barbie and Ken explore the real world after leaving Barbie Land in a quest for self-discovery.",
//     trailerUrl: "https://www.youtube.com/watch?v=8zIf0XvoL9Y",
//   },
//   {
//     title: "Spider-Man: No Way Home",
//     image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
//     overview:
//       "Peter Parker seeks help from Doctor Strange when his identity is revealed, unleashing multiverse chaos.",
//     trailerUrl: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
//   },
//   {
//     title: "The Batman",
//     image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
//     overview:
//       "Batman uncovers corruption in Gotham and faces the Riddler, a serial killer targeting the city's elite.",
//     trailerUrl: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
//   },
//   {
//     title: "Tenet",
//     image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
//     overview:
//       "A secret agent manipulates time to prevent World War III through the use of a mysterious technology.",
//     trailerUrl: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
//   },
//   {
//     title: "Avatar: The Way of Water",
//     image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//     overview:
//       "Jake Sully and Neytiri return to protect their family and the Na'vi from new threats on Pandora.",
//     trailerUrl: "https://www.youtube.com/watch?v=d9MyW72ELq0",
//   },
//   {
//     title: "Avatar: The Way of Water",
//     image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//     overview:
//       "Jake Sully and Neytiri return to protect their family and the Na'vi from new threats on Pandora.",
//     trailerUrl: "https://www.youtube.com/watch?v=d9MyW72ELq0",
//   },
// ];

function MovieGrid() {
  const { movies, getMostPopular } = useMovieStore();

  useEffect(() => {
    getMostPopular();
  }, [getMostPopular]);
  return (
    <div className="p-6 bg-black min-h-screen">
      <div className="flex flex-wrap gap-8 justify-center space-x-25">
        {console.log(movies)}
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            image={movie.image}
            overview={movie.overview}
            trailerUrl={movie.trailer}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;

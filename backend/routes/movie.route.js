import express from "express";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const apiKey = process.env.TMDB_API_KEY;

const getGenres = (genres_ids) => {
  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  if (!genres_ids) {
    return [];
  }
  const movieGenres = genres_ids.map((id) => genres[id]).join(", ");
  return movieGenres;
};

const getTrailers = async (movies) => {
  const enrichedMovies = await Promise.all(
    movies.map(async (movie) => {
      let trailer = null;
      try {
        const videoRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=en-US`
        );
        const videoData = await videoRes.json();
        const found = videoData.results.find(
          (v) => v.site === "YouTube" && v.type === "Trailer"
        );

        if (found) {
          trailer = `https://www.youtube.com/watch?v=${found.key}`;
        }
      } catch (err) {
        console.warn(`Failed to fetch trailer for movie ${movie.id}`, err);
      }

      return {
        id: movie.id,
        title: movie.original_title || "No title",
        overview: movie.overview || "No overview available",
        genres: getGenres(movie.genre_ids) || [],
        popularity: movie.popularity || 0,
        image: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null,
        rating: movie.vote_average || 0,
        trailer,
        year: parseInt(movie.release_date?.split("-")[0]),
      };
    })
  );

  return enrichedMovies;
};

router.get("/find/:title", async (req, res) => {
  try {
    const title = encodeURIComponent(req.params.title);

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Movie not found" });
    }
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return res.status(200).json([]);
    }

    const moviesWithTrailers = await getTrailers(data.results);

    res.status(200).json(moviesWithTrailers);
  } catch (error) {
    console.error("Error in find route", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/popular", async (req, res) => {
  try {
    const page = req.query.page;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    );
    if (!response.ok) {
      console.error("Failed to fetch movies:", response.status);
      return res
        .status(response.status)
        .json({ error: "Failed to fetch popular movies" });
    }

    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      return res.status(404).json({ error: "No movies found" });
    }

    const englishMovies = data.results.filter(
      (movie) => movie.original_language === "en"
    );

    const moviesWithTrailers = await getTrailers(englishMovies);

    res.status(200).json(moviesWithTrailers);
  } catch (error) {
    console.error("Error in get popular movies", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/reccomand/", async (req, res) => {
  try {
    const { movies } = req.body;
    const { page } = req.query;
    const allMovies = [];
    for (const movie of movies) {
      const movieId = movie.id;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}&original_language=en&page=${page}`
      );
      const data = await response.json();
      if (data.results) {
        allMovies.push(...data.results);
      }
    }

    const englishMovies = allMovies.filter(
      (movie) => movie.original_language === "en"
    );
    // Filter out movies older than 2005
    const filtered = englishMovies.filter((movie) => {
      const year = parseInt(movie.release_date?.split("-")[0]);
      return year >= 1995;
    });

    const moviesWithTrailers = await getTrailers(filtered);

    res.status(200).json(moviesWithTrailers);
  } catch (error) {
    console.log("Error in reccomand route", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    const data = await response.json();
    res.status(200).json({
      id: data.id,
      title: data.original_title,
      overview: data.overview,
      genres: getGenres(data.genre_ids),
      popularity: data.popularity,
      image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      rating: data.vote_average,
    });
  } catch (error) {
    console.error("Error in get movie", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;

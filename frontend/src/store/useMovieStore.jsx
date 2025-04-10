import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useMovieStore = create((set, get) => ({
  movies: [],
  page: 1,
  searchMovies: [],

  getMostPopular: async (page) => {
    try {
      const res = await axiosInstance.get(`/movies/popular?page=${page}`);
      let newMovies = res.data;

      const existingMovies = get().movies;

      // Filter out movies that already exist
      newMovies = newMovies.filter(
        (newMovie) => !existingMovies.some((m) => m.title === newMovie.title)
      );
      //Check if there is image
      newMovies = newMovies.filter(
        (movie) => movie.image !== null && movie.image !== undefined
      );

      // Append to existing movies
      set({ movies: [...existingMovies, ...newMovies] });
    } catch (error) {
      console.log("Error in getMostPopular", error);
      set({ movies: [] }); // safer fallback than null
    }
  },
  searchForMovies: async (movie) => {
    try {
      const res = await axiosInstance.get(
        `http://localhost:5001/api/movies/find/${movie}`
      );

      if (res.data && Array.isArray(res.data)) {
        const filteredResults = res.data.filter(
          (movie) => movie.image !== null && movie.image !== undefined
        );
        set({ searchMovies: filteredResults });
      } else {
        set({ searchMovies: [] });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // TMDB says: movie not found
        set({ searchMovies: [] });
      } else {
        console.log("Unexpected error in searchForMovies:", error);
      }
    }
  },

  clearSearchResults: () => {
    set({ searchMovies: [] });
  },
}));

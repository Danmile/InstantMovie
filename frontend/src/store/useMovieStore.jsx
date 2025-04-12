import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useMovieStore = create((set, get) => ({
  movies: [],
  page: 1,
  searchMovies: [],
  favMovies: JSON.parse(localStorage.getItem("favorites")) || [],

  addFavMovies: (movie) => {
    try {
      if (!movie) return;
      let updatedMovies;
      const existingMovies = get().favMovies;
      const isAlreadyFav = existingMovies.some((m) => m.id === movie.id);

      if (isAlreadyFav) {
        updatedMovies = existingMovies.filter((m) => m.id !== movie.id);
      } else {
        updatedMovies = [...existingMovies, movie];
      }

      set({ favMovies: updatedMovies });
      localStorage.setItem("favorites", JSON.stringify(updatedMovies));
    } catch (error) {
      console.log("Error in addFavMovies", error);
    }
  },

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
      set({ searchMovies: [] });
      console.log("Unexpected error in searchForMovies:", error);
    }
  },

  clearSearchResults: () => {
    set({ searchMovies: [] });
  },
}));

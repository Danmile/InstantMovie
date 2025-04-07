import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useMovieStore = create((set, get) => ({
  movies: [],
  page: 1,

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
}));

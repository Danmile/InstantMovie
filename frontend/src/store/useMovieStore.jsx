import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useMovieStore = create((set, get) => ({
  movies: [],

  getMostPopular: async () => {
    try {
      const res = await axiosInstance.get("/movies/popular");
      set({ movies: res.data });
    } catch (error) {
      console.log("Error in getMostPopular", error);
      set({ movies: null });
    }
  },
}));

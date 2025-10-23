import { create } from "zustand";
import type { Movie } from "../types";
import MOVIE_DATA from "../data/mockdata.json";

let debounceTimer: ReturnType<typeof setTimeout> | null = null;
const DEBOUNCE_MS = 500;

type SearchState = {
  query: string;
  results: Movie[];
  setQuery: (q: string) => void;
  setResults: (r: Movie[]) => void;
  performSearch: (q: string) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  results: [] as Movie[],
  setQuery: (q: string) => set({ query: q }),
  setResults: (r: Movie[]) => set({ results: r }),
  performSearch: (q: string) => {
    // update query immediately so UI can reflect the current text
    set({ query: q });

    const qTrim = q.trim();

    // if query is empty, clear any pending debounce and clear results
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }

    if (qTrim === "") {
      set({ results: [] });
      return;
    }

    // debounce the expensive filtering operation
    debounceTimer = setTimeout(() => {
      const results = (MOVIE_DATA.results as Movie[]).filter((movie: Movie) =>
        movie.title.toLowerCase().includes(qTrim.toLowerCase())
      ) as Movie[];
      set({ results });
      debounceTimer = null;
    }, DEBOUNCE_MS);
  },
}));

export default useSearchStore;

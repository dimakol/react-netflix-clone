import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import MOVIE_DATA from "../data/mockdata.json";
import type { Movie } from "../types";

const SearchBar = () => {
  const [shouldShowSearch, setShouldShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Trigger search when debounced value changes
  useEffect(() => {
    if (debouncedQuery) {
      searchQuery(debouncedQuery);
    }
  }, [debouncedQuery]);

  const handleBlur = () => {
    setShouldShowSearch(false);
  };
  const handleSearchClick = () => {
    setShouldShowSearch(true);
  };

  const searchQuery = (query: string) => {
    // Implement your search logic here
    const results = MOVIE_DATA.results.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Search results:", results);
  };

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    console.log("Search query:", query);

    setQuery(query);
  };

  return (
    <div className="flex items-center">
      {shouldShowSearch ? (
        <div className="flex items-center bg-black/80 border border-white/20 rounded-sm px-3 py-2 min-w-[280px] backdrop-blur-sm">
          <Search size={20} className="text-white/70 mr-3 flex-shrink-0" />
          <input
            className="bg-transparent text-white placeholder:text-white/60 text-sm focus:outline-none flex-1 font-normal"
            type="text"
            placeholder="Titles, people, genres"
            aria-label="Search"
            onChange={handleSearchQueryChange}
            onBlur={handleBlur}
            autoFocus
          />
        </div>
      ) : (
        <button
          onClick={handleSearchClick}
          className="p-2 hover:bg-white/10 rounded-sm transition-colors duration-200"
          aria-label="Search"
        >
          <Search size={24} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

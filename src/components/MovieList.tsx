import type { Movie, MovieListProps } from "../types";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="relative">
      <ul className="flex overflow-x-scroll overflow-y-visible space-x-4 px-4 md:px-6 py-4 scrollbar-hide relative">
        {movies.map((movie: Movie, index: number) => (
          <li key={movie.id}>
            <MovieCard movie={movie} number={index + 1} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

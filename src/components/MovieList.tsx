import type { Movie, MovieListProps } from "../types";

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

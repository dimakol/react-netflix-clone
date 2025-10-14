import { Card } from "@/components/ui/Card";
const TMDB_IMAGES_ASSET_URL = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie, number }) => {
  return (
    <Card className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl outline-blue-200 p-0 border-0 w-[7rem] h-[9.8rem] rounded-sm">
      <img
        src={
          movie?.poster_path
            ? TMDB_IMAGES_ASSET_URL + movie?.poster_path
            : "/placeholder.svg"
        }
        alt={movie?.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-10"
      />

      {/* Number Overlay */}
      <div className="absolute bottom-0 z-10 pointer-events-none">
        <svg
          width="140"
          height="180"
          viewBox="0 0 140 180"
          className="drop-shadow-2xl"
        >
          <text
            x="10"
            y="85%"
            fontSize="50"
            fontWeight="900"
            fontFamily="Arial Black, sans-serif"
            fill="rgba(0, 0, 0, 1)"
            stroke="#ddd"
            strokeWidth="3"
            textAnchor="start"
          >
            {number}
          </text>
        </svg>
      </div>
    </Card>
  );
};

export default MovieCard;

import React from "react";
import "./MovieCarousel3D.css"; // make sure this path is correct
import './MovieCarousel3D.css';

const MovieCarousel3D = ({ movies }) => {
  const topTen = movies.slice(0, 10);

  return (
    <div className="card-3d">
      {topTen.map((movie, index) => (
        <div key={movie.imdbID || index}>
          <img
            src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "/fallback.png"}
            alt={`Movie poster for ${movie.Title}`}
            loading="lazy"
            onError={(e) => { e.target.src = "/fallback.png"; }}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCarousel3D;

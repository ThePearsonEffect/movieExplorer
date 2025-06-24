import React from "react";
import '/src/styles/MovieCarousel3D.css';


const MovieCarousel3D = ({ movies }) => {
  const topTen = movies.slice(0, 10);

  return (
    <div className="card-3d">
      {topTen.map((movie, index) => (
        <div key={movie.imdbID || index}>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.png"}
            alt={`Movie poster for ${movie.Title}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCarousel3D;

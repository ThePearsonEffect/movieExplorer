// MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';
import MovieCarousel3D from './MovieCarousel3D';
import '../../styles/MovieList.css';

const MovieList = ({ movies, favorites, onMovieClick, onToggleFavorite }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 && <MovieCarousel3D movies={movies} />}
      {movies.map((movie) => (
        <section key={movie.imdbID} className="carousel-slide">
          <MovieCard
            movie={movie}
            isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
            onMovieClick={onMovieClick}
            onToggleFavorite={onToggleFavorite}
          />
        </section>
      ))}
    </div>
  );
};

export default MovieList;

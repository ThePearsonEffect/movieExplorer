import React from 'react';
import '../../styles/MovieDetails.css';

function MovieDetails({ movie, onClose }) {
  return (
    <div className="movie-details-overlay">
      <div className="movie-details baumans-family">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
            alt={`Poster for ${movie.Title}`}
        />
      </div>
    </div>
  );
}

export default MovieDetails;

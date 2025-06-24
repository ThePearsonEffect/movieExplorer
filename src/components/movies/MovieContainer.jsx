import React, { useState, useEffect, useRef } from 'react';
import MovieList from './MovieList';
import { searchMovies } from '../../services/movieService';
import '../../styles/MovieContainer.css';
import MovieCarousel3D from "./MovieCarousel3D";

function MovieContainer() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError('');
    setMovies([]);

    try {
      console.log("Searching for:", searchQuery);
      const data = await searchMovies(searchQuery, 1);
      console.log("Received from API:", data);

      if (data?.Search?.length) {
        setMovies(data.Search);
        setPage(2);
      } else {
        setError('No results found.');
      }
    } catch (err) {
      console.error("Error fetching movies:", err.message);
      setError('Failed to load movies.');
    } finally {
      setLoading(false);
    }
  };

  const fetchMore = async () => {
    if (loading || !searchQuery) return;
    setLoading(true);

    try {
      const data = await searchMovies(searchQuery, page);
      if (data?.Search?.length) {
        setMovies(prev => [...prev, ...data.Search]);
        setPage(prev => prev + 1);
      }
    } catch (err) {
      console.error("Error loading more movies:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Infinite Scroll Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchMore();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef, fetchMore]);

  return (
    <div className="movie-container">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {!error && <MovieList movies={movies} onMovieClick={() => {}} onToggleFavorite={() => {}} favorites={[]} />}
      <div ref={loaderRef} className="infinite-loader">
        {loading && <p>Loading more movies...</p>}
      </div>
    </div>
  );
}

export default MovieContainer;

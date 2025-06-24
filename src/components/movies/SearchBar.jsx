import React, { useState } from 'react';
import '../../styles/SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm) {
      onSearch(trimmedSearchTerm);
    }
  };

  return (
    <div className="search-container baumans-family">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
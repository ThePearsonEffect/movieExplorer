const API_KEY = '7a71e4fd';  // Your OMDb API Key
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`);
    const data = await response.json();
    if (data.Response === 'False') {
      throw new Error(data.Error || 'No results found');
    }
    return data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await response.json();
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Movie not found');
    }
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

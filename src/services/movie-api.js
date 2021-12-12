const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0acbef793912116e8168b05c9b24e1e7';

async function trendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error(`There are no trending movies`));
}

async function searchMovies(query) {
  if (!query) {
    return;
  }
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`,
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(
    new Error(`There is no movie for query ${query}`),
  );
}

async function movieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error(`No details for this movie`));
}

async function movieCast(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error(`No cast is found for this movie`));
}

async function movieReview(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error(`No reviews are found for this movie`));
}
export const movieAPI = {
  trendingMovies,
  searchMovies,
  movieDetails,
  movieCast,
  movieReview,
};

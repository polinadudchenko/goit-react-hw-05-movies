import { useEffect, useState } from 'react';
import { movieAPI } from '../services/movie-api';

import ImageGallery from '../components/ImageGallery';

export function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    movieAPI.trendingMovies().then(data => setTrendingMovies(data.results));
  }, []);
  return <ImageGallery data={trendingMovies} />;
}

import { useEffect, useState } from 'react';
import { movieAPI } from '../services/movie-api';
import { mapGalleryMovies } from '../services/mapper';

import ImageGallery from '../components/ImageGallery';
import { toast } from 'react-toastify';

export function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    movieAPI
      .trendingMovies()
      .then(data => {
        if (data) {
          const trendGallery = mapGalleryMovies(data.results);
          setTrendingMovies(trendGallery);
        } else {
          throw new Error('There are no trending movies yet');
        }
      })
      .catch(err => toast.error(err));
  }, []);
  return <ImageGallery data={trendingMovies} />;
}

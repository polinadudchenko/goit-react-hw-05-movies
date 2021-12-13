import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '../App.styled';
import { movieAPI } from '../services/movie-api';

import ImageGallery from '../components/ImageGallery';
import Searchbar from '../components/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    movieAPI
      .searchMovies(searchParams.get('query'))
      .then(movies => {
        if (movies) {
          setMovies(movies.results);
        }
        throw new Error(
          `There are no results for the query ${searchParams.get('query')}`,
        );
      })
      .catch(err => toast.error(err));
  }, [searchParams]);

  const handleSubmit = query => {
    let params = { query };
    setSearchParams(params);
    setMovies([]);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {movies && <ImageGallery data={movies} />}
    </Container>
  );
}

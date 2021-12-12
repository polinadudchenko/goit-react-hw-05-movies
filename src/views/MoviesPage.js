import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '../App.styled';
import { movieAPI } from '../services/movie-api';

import ImageGallery from '../components/ImageGallery';
import Searchbar from '../components/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let params = { query };
    setSearchParams(params);
    movieAPI
      .searchMovies(query)
      .then(movies => {
        if (movies) {
          setMovies(movies.results);
        }
        throw new Error(`There are no results for the query ${query}`);
      })
      .catch(err => toast.error(err));
  }, [query]);

  const handleSubmit = query => {
    setQuery(query);

    setMovies([]);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {movies && <ImageGallery data={movies} />}
    </Container>
  );
}

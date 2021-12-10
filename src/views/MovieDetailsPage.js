import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieAPI } from '../services/movie-api';

import { Container } from '../App.styled';

export function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    movieAPI
      .movieDetails(movieId)
      .then(movie => {
        setMovie(movie);
      })
      .catch(error => alert(error));
  }, [movieId]);

  return (
    <Container>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <h2>{movie.title}</h2>
          <p>User Score {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name + '; ')}</p>
        </>
      )}
    </Container>
  );
}

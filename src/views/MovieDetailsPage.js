import { useEffect, useState } from 'react';
import {
  useParams,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { movieAPI } from '../services/movie-api';
import MovieDetailsItem from '../components/MovieDetailsItem';
import MoreInfo from '../components/MoreInfo';
import { Container } from '../App.styled';

export function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  console.log(location.state);

  const goBack = () => console.log(location.state);

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
          <button onClick={goBack}>Go back</button>
          <MovieDetailsItem movieDetails={movie} />
        </>
      )}
      <MoreInfo />
      <Outlet />
    </Container>
  );
}

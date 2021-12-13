import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { movieAPI } from '../services/movie-api';
import MovieDetailsItem from '../components/MovieDetailsItem';
import MoreInfo from '../components/MoreInfo';
import { Container, Button } from '../App.styled';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () =>
    navigate(
      location.state?.from?.pathname
        ? `${location.state?.from?.pathname}${location.state?.from?.search}`
        : '/',
    );

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
          <Button onClick={goBack}>Go back</Button>
          <MovieDetailsItem movieDetails={movie} />
        </>
      )}
      <MoreInfo />
      <Outlet />
    </Container>
  );
}

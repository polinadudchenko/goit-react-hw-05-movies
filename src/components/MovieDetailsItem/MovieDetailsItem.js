import PropTypes from 'prop-types';
import {
  MovieDetailsThumb,
  ImageThumb,
  ContentThumb,
  MovieTitle,
  GroupTitle,
  TextContent,
} from './MovieDetailsItem.styled';

export default function MovieDetailsItem({ movieDetails }) {
  return (
    <MovieDetailsThumb>
      <ImageThumb>
        <img
          src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
        />
      </ImageThumb>
      <ContentThumb>
        <MovieTitle>{movieDetails.title}</MovieTitle>
        <GroupTitle>User Score </GroupTitle>
        <TextContent>{movieDetails.vote_average}</TextContent>
        <GroupTitle>Overview</GroupTitle>
        <TextContent>{movieDetails.overview}</TextContent>
        <GroupTitle>Genres</GroupTitle>
        <TextContent>
          {movieDetails.genres.map(genre => genre.name + '; ')}
        </TextContent>
      </ContentThumb>
    </MovieDetailsThumb>
  );
}

MovieDetailsItem.defaultProps = {
  poster_path:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWyg5k6Y2X4OaOfDMPcFaAwL9r_eN34CUXbEgCEjMepep7WMua2z90y_DGL0YobiBjRY&usqp=CAU',
};

MovieDetailsItem.propTypes = {
  movieDetails: PropTypes.shape({
    vote_average: PropTypes.number.isRequired,
    original_title: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object),
  }),
};

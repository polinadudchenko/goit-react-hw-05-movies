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
  const { poster_path, original_title, title, vote_average, overview, genres } =
    movieDetails;
  return (
    <MovieDetailsThumb>
      <ImageThumb>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : 'https://www.movienewsletters.net/photos/000000h1.jpg'
          }
          alt={original_title}
        />
      </ImageThumb>
      <ContentThumb>
        <MovieTitle>{title}</MovieTitle>
        <GroupTitle>User Score </GroupTitle>
        <TextContent>{vote_average}</TextContent>
        <GroupTitle>Overview</GroupTitle>
        <TextContent>{overview}</TextContent>
        <GroupTitle>Genres</GroupTitle>
        <TextContent>{genres.map(genre => genre.name + '; ')}</TextContent>
      </ContentThumb>
    </MovieDetailsThumb>
  );
}

MovieDetailsItem.defaultProps = {
  original_title: 'No title was found',
  title: 'No title was found',
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

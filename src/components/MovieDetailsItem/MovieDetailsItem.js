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

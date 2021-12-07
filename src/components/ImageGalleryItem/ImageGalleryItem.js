export default function ImageGalleryItem({ movie }) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </>
  );
}

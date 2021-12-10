export default function ImageGalleryItem({ movie }) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h3>{movie.title}</h3>
    </>
  );
}

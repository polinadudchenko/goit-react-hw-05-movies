export const mapGalleryMovies = movies => {
  return movies.map(({ id, poster_path, original_title, title }) => ({
    id,
    poster_path,
    original_title,
    title,
  }));
};

export const mapMovieDetails = movies => {
  const filtered = [
    'poster_path',
    'original_title',
    'title',
    'vote_average',
    'overview',
    'genres',
  ].reduce((result, key) => {
    result[key] = movies[key];
    return result;
  }, {});

  return filtered;
};

export const mapCast = cast => {
  return cast.map(({ id, profile_path, name, character }) => ({
    id,
    profile_path,
    name,
    character,
  }));
};

export const mapReview = review => {
  return review.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
};

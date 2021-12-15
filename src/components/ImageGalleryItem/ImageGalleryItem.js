import PropTypes from 'prop-types';
import {
  GalleryItem,
  GalleryItemImg,
  GalleryItemTitle,
} from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ movie }) {
  const { poster_path, original_title, title } = movie;
  return (
    <GalleryItem>
      <GalleryItemImg
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w342/${poster_path}`
            : 'https://www.movienewsletters.net/photos/000000h1.jpg'
        }
        alt={original_title}
      />
      <GalleryItemTitle>{title}</GalleryItemTitle>
    </GalleryItem>
  );
}

ImageGalleryItem.defaultProps = {
  original_title: 'No title was found',
  title: 'No title was found',
};

ImageGalleryItem.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};

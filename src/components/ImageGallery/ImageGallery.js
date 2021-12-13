import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from '../../App.styled';
import ImageGalleryItem from '../ImageGalleryItem';
import { StyledGallery, GalleryItem, GalleryLink } from './ImageGallery.styled';

export default function ImageGallery({ data }) {
  const location = useLocation();
  return (
    <Container>
      <StyledGallery>
        {data.map(movie => {
          return (
            <GalleryLink
              key={movie.id}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <GalleryItem>
                <ImageGalleryItem movie={movie} />
              </GalleryItem>
            </GalleryLink>
          );
        })}
      </StyledGallery>
    </Container>
  );
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

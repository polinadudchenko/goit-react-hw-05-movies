import { Container } from '../../App.styled';
import ImageGalleryItem from '../ImageGalleryItem';
import { StyledGallery, GalleryItem } from './ImageGallery.styled';

export default function ImageGallery({ data }) {
  return (
    <Container>
      <StyledGallery>
        {data.map(movie => {
          return (
            <GalleryItem key={movie.id}>
              <ImageGalleryItem movie={movie} />
            </GalleryItem>
          );
        })}
      </StyledGallery>
    </Container>
  );
}
